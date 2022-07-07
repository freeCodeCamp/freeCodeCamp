import { isBefore } from 'date-fns';
import jwt from 'jsonwebtoken';

import { jwtSecret as _jwtSecret } from '../../../../config/secrets';

export const authHeaderNS = 'X-fcc-access-token';
// TOPCODER: we are using the name of the cookie created
// by the TC Auth0 implementation
export const jwtCookieNS = 'tcjwt';
//export const jwtCookieNS = 'jwt_access_token';

export function createCookieConfig(req) {
  return {
    signed: !!req.signedCookies,
    domain: process.env.COOKIE_DOMAIN || 'localhost'
  };
}

export function setAccessTokenToResponse(
  { accessToken },
  req,
  res,
  jwtSecret = _jwtSecret
) {
  const cookieConfig = {
    ...createCookieConfig(req),
    maxAge: accessToken.ttl || 77760000000
  };
  const jwtAccess = jwt.sign({ accessToken }, jwtSecret);
  res.cookie(jwtCookieNS, jwtAccess, cookieConfig);
  return;
}

export function getAccessTokenFromRequest(req, jwtSecret = _jwtSecret) {
  const maybeToken =
    (req.headers && req.headers[authHeaderNS]) ||
    (req.signedCookies && req.signedCookies[jwtCookieNS]) ||
    (req.cookie && req.cookie[jwtCookieNS]) ||
    // TOPCODER: the jwt cookie is in the cookies var instead
    // of the cookie string
    req.cookies?.[jwtCookieNS];
  if (!maybeToken) {
    return {
      accessToken: null,
      error: errorTypes.noTokenFound
    };
  }
  let token;
  try {
    token = jwt.verify(maybeToken, jwtSecret);
  } catch (err) {
    return { accessToken: null, error: errorTypes.invalidToken };
  }

  let valid = false;
  try {
    // TOPCODER: validate the token duration agaainst the token.exp
    valid = isBefore(Date.now(), new Date(token.exp * 1000));
    // const valid = isBefore(Date.now(), Date.parse(created) + ttl);
  } catch (ex) {
    valid = false;
  }
  if (!valid) {
    return {
      accessToken: null,
      error: errorTypes.expiredToken
    };
  }
  // TOPCODER: the TC Auth0 implementation doesn't have an access
  // token, so we just use the token itself.
  return {
    accessToken: token,
    error: '',
    jwt: maybeToken
  };
  // return { accessToken, error: '', jwt: maybeToken };
}

export function removeCookies(req, res) {
  const config = createCookieConfig(req);
  res.clearCookie(jwtCookieNS, config);
  res.clearCookie('access_token', config);
  res.clearCookie('userId', config);
  res.clearCookie('_csrf', config);
  res.clearCookie('csrf_token', config);
  return;
}

export const errorTypes = {
  noTokenFound: 'No token found',
  invalidToken: 'Invalid token',
  expiredToken: 'Token timed out'
};
