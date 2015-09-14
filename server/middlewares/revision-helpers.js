import manifest from '../rev-manifest.json';

const __DEV__ = process.env.NODE_ENV === 'development';
const manifestPath = '../rev-manifest.json';

export default function({ globalPrepend = '' } = {}) {

  function rev(manifest, scopedPrepend, asset) {
    return `${globalPrepend}${scopedPrepend}/${ manifest[asset] || asset }`;
  }
  const boundRev = rev.bind(null, manifest);

  return function(req, res, next) {
    // in dev environment, we reread the manifest on every call
    // this means we do not need to restart server on every change to
    // client code
    if (__DEV__) {
      // we first need to remove the manifest from require cache
      delete require.cache[require.resolve(manifestPath)];
      // and re-require
      const manifest = require(manifestPath);
      res.locals.rev = rev.bind(null, manifest);
      return next();
    }

    // in production we take use the initially loaded manifest
    // since this should not change in production
    res.locals.rev = boundRev;
    next();
  };
}
