import csurf from 'csurf';

const opts = {
  domain: process.env.COOKIE_DOMAIN || 'localhost',
  sameSite: 'strict',
  secure: process.env.FREECODECAMP_NODE_ENV === 'production'
};

export default function getCsurf() {
  const protection = csurf({
    cookie: opts
  });
  return function csrf(req, res, next) {
    const { path } = req;
    if (
      // eslint-disable-next-line max-len
      /^\/hooks\/update-paypal$|^\/hooks\/update-stripe$|^\/donate\/charge-stripe$/.test(
        path
      )
    ) {
      next();
    } else {
      // add the middleware
      protection(req, res, next);
      // use the middleware to generate a token. The client sends this back via
      // a header
      res.cookie('csrf_token', req.csrfToken(), opts);
    }
  };
}
