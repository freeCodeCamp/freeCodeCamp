export function createCookieConfig(req) {
  return {
    signed: !!req.signedCookies,
    domain: process.env.COOKIE_DOMAIN || 'localhost'
  };
}
