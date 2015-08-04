export default function globalLocals() {
  return function(req, res, next) {
    // Make user object available in templates.
    res.locals.user = req.user;
    next();
  };
}
