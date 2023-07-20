const path = require("path");
const express = require("express");
const router = express.Router();

// GET home page "index.html"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET notes page "notes.html"
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
