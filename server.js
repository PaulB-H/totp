const express = require("express");
const path = require("path");
const app = express();
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(5000, () => console.log(`Server started on port ${5000}`));
