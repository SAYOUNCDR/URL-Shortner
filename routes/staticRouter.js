const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  const id = req.query.id; // get shortId from URL query
  return res.render("home", {
    id,
    urls: allUrls,
  });
});

module.exports = router;
