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

const pathsWhiteList = [
  'news',
  'challenges',
  'map',
  'news',
  'commit'
];

const pathsOfNoReturnRegex = new RegExp(pathsOfNoReturn.join('|'), 'i');
const whiteListRegex = new RegExp(pathsWhiteList.join('|'), 'i');

export default function addReturnToUrl() {
  return function(req, res, next) {
    // Remember original destination before login.
    var path = req.path.split('/')[1];

    if (
      req.method !== 'GET' ||
      pathsOfNoReturnRegex.test(path) ||
      !whiteListRegex.test(path) ||
      (/news/i).test(path) && (/hot/i).test(req.path)
    ) {
      return next();
    }
    req.session.returnTo = req.originalUrl === '/map-aside'
    ? '/map' : req.originalUrl;
    next();
  };
}
