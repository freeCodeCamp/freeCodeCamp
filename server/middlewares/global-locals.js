export default function globalLocals() {
  return function(req, res, next) {
    // Make user object available in templates.
    res.locals.user = req.user;
    res.locals._csrf = req.csrfToken ? req.csrfToken() : null;
    if (req.csrfToken) {
      res.expose({ token: res.locals._csrf }, 'csrf');
    }
    next();
  };
}
