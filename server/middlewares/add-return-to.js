const pathsOfNoReturn = [
  'link',
  'bower_components',
  'auth',
  'login',
  'logout',
  'signin',
  'signup',
  'fonts',
  'favicon',
  'js',
  'css'
];

const pathsOfNoReturnRegex = new RegExp(pathsOfNoReturn.join('|'), 'i');

export default function addReturnToUrl() {
  return function(req, res, next) {
    // Remember original destination before login.
    var path = req.path.split('/')[1];

    if (req.method !== 'GET') {
      return next();
    }
    if (pathsOfNoReturnRegex.test(path)) {
      return next();
    }
    if (/\/stories\/\w+/i.test(req.path)) {
      return next();
    }
    req.session.returnTo = req.path;
    next();
  };
}
