import { FastifyRequest } from 'fastify';
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
  {
    returnTo,
    origin,
    pathPrefix
  }: { returnTo?: string; origin?: string; pathPrefix?: string },
  _homeLocation = HOME_LOCATION
) {
  // coerce to strings, just in case something weird and nefarious is happening
  // TODO: validate, don't coerce
  returnTo = '' + returnTo;
  origin = '' + origin;
  pathPrefix = '' + pathPrefix;
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

/**
 * Get the redirect parameters.
 *
 * @param req - A fastify Request.
 * @param _normalizeParams - The function to normalize the parameters.
 * @returns The redirect parameters.
 */
export function getRedirectParams(
  req: FastifyRequest,
  _normalizeParams = normalizeParams
) {
  const url = req.headers['referer'];
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
  return _normalizeParams({ returnTo: returnUrl.href, origin, pathPrefix });
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
