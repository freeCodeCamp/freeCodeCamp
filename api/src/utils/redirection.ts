import { FastifyRequest } from 'fastify';
import { availableLangs } from '../../../config/i18n';
import { homeLocation } from '../../../config/env.json';

const allowedOrigins = [
  'https://www.freecodecamp.dev',
  'https://www.freecodecamp.org',
  'https://beta.freecodecamp.dev',
  'https://beta.freecodecamp.org',
  'https://chinese.freecodecamp.dev',
  'https://chinese.freecodecamp.org'
];

interface RedirectParams {
  returnTo: string;
  origin: string;
  pathPrefix: string | undefined;
}

export function normalizeParams(
  { returnTo, origin, pathPrefix }: RedirectParams,
  _homeLocation = homeLocation
): RedirectParams {
  // coerce to strings, just in case something weird and nefarious is happening
  returnTo = '' + returnTo;
  origin = '' + origin;
  pathPrefix = pathPrefix ? '' + pathPrefix : '';
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
  pathPrefix = availableLangs.client
    .map(value => value.toString())
    .includes(pathPrefix)
    ? pathPrefix
    : '';
  return { returnTo, origin, pathPrefix };
}

export function getRedirectParams(
  req: FastifyRequest,
  _normalizeParams = normalizeParams
): RedirectParams {
  const url = req.headers.referer;
  // since we do not always redirect the user back to the page they were on
  // we need client locale and origin to construct the redirect url.
  const returnUrl = new URL(url ? url : homeLocation);
  const origin = returnUrl.origin;
  // if this is not one of the client languages, validation will convert
  // this to '' before it is used.
  const pathPrefix = returnUrl.pathname.split('/')[1];
  return _normalizeParams({ returnTo: returnUrl.href, origin, pathPrefix });
}
