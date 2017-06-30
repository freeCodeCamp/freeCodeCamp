import debug from 'debug';

const log = debug('fcc:server:middlewares:redirectToOrg');
const percent = parseInt(process.env.REDIRECT_PERCENT || '0', 0) / 100;
const redirectStatus = parseInt(process.env.REDIRECT_PERMENT, 0) ?
  301 :
  302;
const paths = [
  /^\/$/i,
  /^\/challenges\/.*/ig
];

log('redirect precentage: ', percent);
log('redirect status: ', redirectStatus);
export default () => {
  return function redirectToOrg(req, res, next) {
    const method = req.method;
    const path = req.path;
    const group = Math.random();
    log('path: ', path);
    log('group: ', group);
    log('is acceptable: ', paths.some(_path => _path.test(path)));
    if (
      method === 'GET' &&
      paths.some(_path => _path.test(path)) &&
      group < percent
    ) {
      const redirectTo = `https://www.freecodecamp.org${path}`;
      return res.redirect(redirectStatus, redirectTo);
    }

    return next();
  };
};
