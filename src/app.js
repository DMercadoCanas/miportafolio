const express = require("express");
const path = require("path");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", contactRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
