import debug from 'debug';

const log = debug('fcc:server:middlewares:redirectToOrg');
const percent = parseInt(process.env.REDIRECT_PERCENT || '0', 10) / 100;
const redirectStatus = parseInt(process.env.REDIRECT_PERMENT || '0', 10) ?
  301 :
  302;
const orgUrl = 'https://www.freecodecamp.org';
const paths = [
  /^\/$/i,
  /^\/challenges\/.*/ig
];

log('redirect precentage: ', percent);
log('redirect status: ', redirectStatus);
export default () => {
  return function redirectToOrg(req, res, next) {
    const path = req.path;
    const url = req.originalUrl;
    const isGet = req.method === 'GET';
    const isOnRightPath = paths.some(_path => _path.test(path));
    // if not a matching path or a get request
    // continue on
    if (!isOnRightPath || !isGet) {
      return next();
    }
    // if a user is not signed in, redirect them to
    // org without any special treatment
    if (!req.user) {
      const redirectTo = `${orgUrl}${url}`;
      log('redirecting to: ', redirectTo);
      return res.redirect(redirectStatus, redirectTo);
    }
    const group = Math.random();
    log('group: ', group);
    // if user is in random group, redirect them
    if (group < percent) {
      const paramsString = url.split('?')[1];
      let params = 'ref=com';
      if (paramsString) {
        params = paramsString + '&' + params;
      }
      const redirectTo = `${orgUrl}${path}?${params}`;
      log('user redirecting to: ', redirectTo);
      req.logOut();
      return res.redirect(redirectStatus, redirectTo);
    }

    return next();
  };
};
