const express = require("express");
const path = require("path");
const app = express();
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

const users = [];

app.post("/genTotp", (req, res) => {
  const secret = speakeasy.generateSecret();

  let key = users.length + 1;
  users.push({ user: key, secret: secret.base32 });

  QRCode.toDataURL(secret.otpauth_url, function (err, data_url) {
    res.json({ qrcode_url: data_url, user: key });
  });
});

app.listen(5000, () => console.log(`Server started on port ${5000}`));
