import csurf from 'csurf';

export default function() {
  const protection = csurf({
    cookie: {
      domain: process.env.COOKIE_DOMAIN || 'localhost'
    }
  });
  return function csrf(req, res, next) {
    const { path } = req;
    if (/^\/hooks\/update-paypal$|^\/hooks\/update-stripe$/.test(path)) {
      return next();
    }
    return protection(req, res, next);
  };
}
