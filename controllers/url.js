const nanoId = require("nano-id");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortID = nanoId(5);

  await URL.create({
    shortId: shortID,
    redirectedURL: body.url,
    visitHistory: [],
  });

  const allUrls = await URL.find({});
  return res.render("home", {
    id: shortID,
    urls: allUrls,
  });

  // Redirect to the home page with a query parameter
  return res.redirect(`/?id=${shortID}`);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timeStamp: Date.now() } } },
      { new: true }
    );

    if (!entry) return res.status(404).send("Short URL not found");

    return res.redirect(entry.redirectedURL);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}


module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirect,
};
