const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const contents = fs.readFileSync(path.join(__dirname, "./data/whatCanIDo.json"));
const skills = JSON.parse(contents);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/skills", (req, res) => {
  res.json(skills);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});