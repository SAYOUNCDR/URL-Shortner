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


  return res.json({ id: shortID });
}

module.exports = {
  handleGenerateNewShortURL,
};
