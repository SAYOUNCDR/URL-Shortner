const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirect,
} = require("../controllers/url");
const router = express.Router();


// Route to create short URL
router.post("/", handleGenerateNewShortURL);

// Route to handle redirection
router.get("/:shortId", handleRedirect);

// Route to get analytics
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router;
