const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;

// Middleware for JSON and form input
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDb connected")
);

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Route Mounting
app.use("/", urlRoute); // all URL-related routes here
app.use("/", staticRoute); // home route

app.listen(PORT, () => console.log(`Server started at port : ${PORT} `));
