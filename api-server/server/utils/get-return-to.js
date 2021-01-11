const jwt = require('jsonwebtoken');
const { allowedOrigins } = require('../../../config/cors-settings');
const { homeLocation } = require('../../../config/env');

function getReturnTo(encryptedReturnTo, secret) {
  let returnTo;
  let success = false;
  try {
    returnTo = jwt.verify(encryptedReturnTo, secret).returnTo;
    // we add the '/' to prevent returns to
    // www.freecodecamp.org.somewhere.else.com
    if (!allowedOrigins.some(origin => returnTo.startsWith(origin + '/'))) {
      throw Error();
    }
    success = true;
  } catch {
    returnTo = `${homeLocation}/learn`;
  }

  return { returnTo, success };
}

module.exports = getReturnTo;
