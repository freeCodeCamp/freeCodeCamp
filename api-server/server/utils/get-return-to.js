const jwt = require('jsonwebtoken');
const { availableLangs } = require('../../../client/i18n/allLangs');
const { allowedOrigins } = require('../../../config/cors-settings');
// homeLocation is being used as a fallback, here. If the one provided by the
// client is invalid we default to this.
const { homeLocation } = require('../../../config/env.json');

function getReturnTo(encryptedReturnTo, secret) {
  let params;
  try {
    params = jwt.verify(encryptedReturnTo, secret);
  } catch (e) {
    // TODO: report to Sentry? Probably not. Remove entirely?
    console.log(e);
    // something went wrong, use default params
    params = {
      returnTo: `${homeLocation}/learn`,
      origin: homeLocation,
      pathPrefix: ''
    };
  }

  return normalizeParams(params);
}

// TODO: tests!
function normalizeParams({ returnTo, origin, pathPrefix }) {
  // coerce to strings, just in case something weird and nefarious is happening
  returnTo = '' + returnTo;
  origin = '' + origin;
  pathPrefix = '' + pathPrefix;
  // we add the '/' to prevent returns to
  // www.freecodecamp.org.somewhere.else.com
  if (
    !returnTo ||
    !allowedOrigins.some(allowed => returnTo.startsWith(allowed + '/'))
  ) {
    returnTo = `${homeLocation}/learn`;
  }
  // this can be strict equality.
  if (!origin || !allowedOrigins.includes(origin)) {
    origin = homeLocation;
  }
  // default to '' if the locale isn't recognised
  pathPrefix = availableLangs.client.includes(pathPrefix) ? pathPrefix : '';
  return { returnTo, origin, pathPrefix };
}

// TODO: use this to redirect to current challenge
// TODO: tests!

// TODO: ensure origin and pathPrefix validation happens first
// (it needs a dedicated function that can be called from here and getReturnTo)
function getRedirectBase(origin, pathPrefix) {
  const redirectPathSegment = pathPrefix ? `/${pathPrefix}` : '';
  return `${origin}${redirectPathSegment}`;
}

// TODO: this might be cleaner if we just use a URL for returnTo (call it
// returnURL for clarity) rather than pulling out origin and returning it
// separately
function getParamsFromReq(req) {
  const url = req.header('Referer');
  // since we do not always redirect the user back to the page they were on
  // we need client locale and origin to construct the redirect url.
  const returnUrl = new URL(url);
  const origin = returnUrl.origin;
  // if this is not one of the client languages, validation will convert
  // this to '' before it is used.
  const pathPrefix = returnUrl.pathname.split('/')[0];
  return { returnTo: returnUrl.href, origin, pathPrefix };
}

function isRootPath(redirectBase, returnUrl) {
  const base = new URL(redirectBase);
  const url = new URL(returnUrl);
  return base.pathname === url.pathname;
}

module.exports.getReturnTo = getReturnTo;
module.exports.getRedirectBase = getRedirectBase;
module.exports.normalizeParams = normalizeParams;
module.exports.getParamsFromReq = getParamsFromReq;
module.exports.isRootPath = isRootPath;
