const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const util = require("util");
const uuid = require("uuid");

// Imports the routes from the folders
const navRoutes = require("./routes/index.js");
const apiRoutes = require("./routes/api/notes.js");

// Set port to listen on
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files "index.html" and "notes.html"
app.use(express.static("public"));

// Tells express to use the following routes
app.use("/api", apiRoutes);
app.use("/", navRoutes);

// Starts the server
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
