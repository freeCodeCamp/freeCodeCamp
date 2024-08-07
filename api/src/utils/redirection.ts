import jwt from 'jsonwebtoken';

import { availableLangs } from '../../../shared/config/i18n';
import { allowedOrigins } from './allowed-origins';

// process.env.HOME_LOCATION is being used as a fallback here. If the one
// provided by the client is invalid we default to this.
import { HOME_LOCATION } from './env';

/**
 * Get the returnTo value.
 *
 * @param encryptedParams - The encrypted parameters.
 * @param secret - The secret key.
 * @param _homeLocation - The home location.
 * @returns The returnTo value.
 */
export function getReturnTo(
  encryptedParams: string,
  secret: jwt.Secret,
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

  // @ts-expect-error - I'm working on it...
  return normalizeParams(params, _homeLocation);
}

type RedirectParams = {
  returnTo: string;
  origin: string;
  pathPrefix: string;
};

/**
 * Normalize the parameters, making they're valid.
 *
 * @param arg - The parameters to normalize.
 * @param arg.returnTo - The returnTo value.
 * @param arg.origin - The origin value.
 * @param arg.pathPrefix - The pathPrefix value.
 * @param _homeLocation - The home location.
 * @returns The normalized parameters.
 */
export function normalizeParams(
  { returnTo, origin, pathPrefix }: Partial<RedirectParams>,
  _homeLocation = HOME_LOCATION
): RedirectParams {
  // coerce to strings, just in case something weird and nefarious is happening
  // TODO: validate, don't coerce
  returnTo = '' + returnTo;
  origin = '' + origin;
  pathPrefix = '' + pathPrefix;
  // TODO(Post-MVP): consider adding HOME_LOCATION in allowedOrigins to allow
  // redirection to work in development.
  // we add the '/' to prevent returns to
  // www.freecodecamp.org.somewhere.else.com
  if (
    !returnTo ||
    !allowedOrigins.some(allowed => returnTo?.startsWith(allowed + '/'))
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

/**
 * Get the prefixed landing path.
 *
 * @param origin - The origin value.
 * @param pathPrefix - The pathPrefix value.
 * @returns The prefixed landing path.
 */
export function getPrefixedLandingPath(origin: string, pathPrefix?: string) {
  const redirectPathSegment = pathPrefix ? `/${pathPrefix}` : '';
  return `${origin}${redirectPathSegment}`;
}

function getParamsFromUrl(
  url: string | undefined | null,
  normalize: typeof normalizeParams
) {
  // since we do not always redirect the user back to the page they were on
  // we need client locale and origin to construct the redirect url.
  let returnUrl;
  try {
    returnUrl = new URL(url ? url : HOME_LOCATION);
  } catch (e) {
    returnUrl = new URL(HOME_LOCATION);
  }

  const origin = returnUrl.origin;
  // if this is not one of the client languages, validation will convert
  // this to '' before it is used.
  const pathPrefix = returnUrl.pathname.split('/')[1] ?? '';
  return normalize({ returnTo: returnUrl.href, origin, pathPrefix });
}

/**
 * Get the redirect parameters.
 *
 * @param req - A fastify Request.
 * @param req.headers - The request headers.
 * @param req.headers.referer - The referer header.
 * @param _normalizeParams - The function to normalize the parameters.
 * @returns The redirect parameters.
 */
export function getRedirectParams(
  req: { headers: { referer?: string } },
  _normalizeParams = normalizeParams
): RedirectParams {
  const url = req.headers['referer'];
  return getParamsFromUrl(url, _normalizeParams);
}

/**
 * Get the redirect parameters after sign in flow.
 *
 * @param req - A fastify Request.
 * @param req.cookies - The request cookies.
 * @param req.unsignCookie - The function to unsign the cookie.
 * @param _normalizeParams - The function to normalize the parameters.
 * @returns The redirect parameters.
 */
export function getLoginRedirectParams(
  req: {
    cookies: Record<string, string | undefined>;
    unsignCookie: (rawValue: string) => { value: string | null };
  },
  _normalizeParams = normalizeParams
): RedirectParams {
  const signedUrl = req.cookies['login-returnto'];
  const url = signedUrl ? req.unsignCookie(signedUrl).value : null;
  return getParamsFromUrl(url, _normalizeParams);
}

/**
 * Check if the redirect base and return URL have the same path.
 *
 * @param redirectBase - The redirect base URL.
 * @param returnUrl - The return URL.
 * @returns A boolean indicating whether the paths are the same.
 */
export function haveSamePath(
  redirectBase: string | URL,
  returnUrl: string | URL
) {
  const base = new URL(redirectBase);
  const url = new URL(returnUrl);
  return base.pathname === url.pathname;
}
