import csurf from 'csurf';

export default function() {
  const protection = csurf({
    cookie: {
      domain: process.env.COOKIE_DOMAIN || 'localhost',
      sameSite: 'strict',
      secure: process.env.FREECODECAMP_NODE_ENV === 'production'
    }
  });
  return function csrf(req, res, next) {
    const { path } = req;
    if (
      // eslint-disable-next-line max-len
      /^\/hooks\/update-paypal$|^\/hooks\/update-stripe$|^\/donate\/charge-stripe$/.test(
        path
      )
    ) {
      return next();
    }
    return protection(req, res, next);
  };
}
