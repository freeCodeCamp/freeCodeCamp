const jwt = require('jsonwebtoken');
const { allowedOrigins } = require('../../../config/cors-settings');
// process.env.HOME_LOCATION is being used as a fallback here. If the one
// provided by the client is invalid we default to this.
const { availableLangs } = require('../../../../shared/config/i18n');

function getReturnTo(
  encryptedParams,
  secret,
  _homeLocation = process.env.HOME_LOCATION
) {
  let params;
  try {
    params = jwt.verify(encryptedParams, secret);
  } catch (e) {
    // TODO: report to Sentry? Probably not. Remove entirely?
    console.log(e);
    // something went wrong, use default params
    params = {
      returnTo: `${_homeLocation}/learn`,
      origin: _homeLocation,
      pathPrefix: ''
    };
  }

  return normalizeParams(params, _homeLocation);
}

function normalizeParams(
  { returnTo, origin, pathPrefix },
  _homeLocation = process.env.HOME_LOCATION
) {
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
    returnTo = `${_homeLocation}/learn`;
    origin = _homeLocation;
    pathPrefix = '';
  }
  if (!origin || !allowedOrigins.includes(origin)) {
    returnTo = `${_homeLocation}/learn`;
    origin = _homeLocation;
    pathPrefix = '';
  }
  pathPrefix = availableLangs.client.includes(pathPrefix) ? pathPrefix : '';
  return { returnTo, origin, pathPrefix };
}

function getPrefixedLandingPath(origin, pathPrefix) {
  const redirectPathSegment = pathPrefix ? `/${pathPrefix}` : '';
  return `${origin}${redirectPathSegment}`;
}

function getRedirectParams(req, _normalizeParams = normalizeParams) {
  const url = req.header('Referer');
  // since we do not always redirect the user back to the page they were on
  // we need client locale and origin to construct the redirect url.
  const returnUrl = new URL(url ? url : process.env.HOME_LOCATION);
  const origin = returnUrl.origin;
  // if this is not one of the client languages, validation will convert
  // this to '' before it is used.
  const pathPrefix = returnUrl.pathname.split('/')[1];
  return _normalizeParams({ returnTo: returnUrl.href, origin, pathPrefix });
}

function haveSamePath(redirectBase, returnUrl) {
  const base = new URL(redirectBase);
  const url = new URL(returnUrl);
  return base.pathname === url.pathname;
}

module.exports.getReturnTo = getReturnTo;
module.exports.getPrefixedLandingPath = getPrefixedLandingPath;
module.exports.normalizeParams = normalizeParams;
module.exports.getRedirectParams = getRedirectParams;
module.exports.haveSamePath = haveSamePath;
