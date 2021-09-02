const createDebugger = require('debug');

const log = createDebugger('fcc:boot:discourse');

const { FORUM_LOCATION, DISCOURSE_SECRET } = process.env;

export default function discourseBoot(app) {
  const router = app.loopback.Router();
  log('discourse booting');
  router.post('/connect-discourse', connectDiscourse);
  // const User = app.models.User;
}
// redirect user to https://forum.freecodecamp.org/session/sso_provider?sso=URL_ENCODED_PAYLOAD&sig=HEX_SIGNATURE

function connectDiscourse(req, res) {
  // Generate nonce
  // Create payload with nonce and return url: nonce=NONCE&return_sso_url=RETURN_URL
  // BASE64 encode payload: BASE64_PAYLOAD
  // URL encode payload: URL_ENCODED_PAYLOAD
  // Generate HMAC-SHA256 signature from BASE64_PAYLOAD and secret:
  res.redirect(
    `${FORUM_LOCATION}/session/sso_provider?sso=${URL_ENCODED_PAYLOAD}&sig=${HEX_SIGNATURE}`
  );
  // Discourse will redirect logged in user to RETURN_URL
  // Query string will include `sig` and `sso` with some user info
  // Compute the HMAC-SHA256 of sso using sso provider secret as key
  // Convert `sig` from hex string into bytes: SIGNATURE_BYTES
  // Compare HMAC-SHA256 signature with SIGNATURE_BYTES (must be equal)
  // BASE64 decode sso - shuold be equal to passed embedded query string.
  // Take `nonce` key and compare it with nonce generated
  // drop generated nonce.
  // Use query string with user information to store DISCOURSE_USER_ID in fCC DB
}
