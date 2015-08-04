export default function addReturnToUrl() {
  return function(req, res, next) {
    // Remember original destination before login.
    var path = req.path.split('/')[1];
    if (/auth|login|logout|signin|signup|fonts|favicon/i.test(path)) {
      return next();
    } else if (/\/stories\/\w+/i.test(req.path)) {
      return next();
    }
    req.session.returnTo = req.path;
    next();
  };
}
