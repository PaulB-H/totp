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

app.post("/verify/:userId/totpcode/:totpcode", function (req, res) {
  let serverSecret;
  let { userId, totpcode } = req.params;

  users.forEach((item, index) => {
    userId = Number.parseInt(userId);
    totpcode = Number.parseInt(totpcode);

    if (userId === item.user) {
      serverSecret = users[index].secret;
    }
  });

  let verified = speakeasy.totp.verify({
    secret: serverSecret,
    encoding: "base32",
    token: totpcode,
  });

  res.json(verified);
});

app.listen(5000, () => console.log(`Server started on port ${5000}`));
