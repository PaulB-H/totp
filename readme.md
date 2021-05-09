<h3>TOTP</h3>
<h4>Time-based one time password</h4>
<p>
	Goal:<br />
	Generate a QR code that can be scanned with Google authenticator, and stored on the server to use for authentication
</p>

<h1>Complete!</h1>
<p>Took about a week to figure everything out. Started looking into creating the HMAC / TOTP URL myself, but using "speakeasy" and "qrcode" packages made this a breeze.</p>
<p>I will still look at generating the code myself in the future, because the speakeasy package is no longer maintained.</p>
<h3>Working Example:</h3>

<img src="./example.gif">

<strike>
  <p>
    See the live site:
    <a rel="noreferrer" href="#">
      Live Site
    </a>
  </p>
</strike>
