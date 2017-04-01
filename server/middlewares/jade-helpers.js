import manifest from '../rev-manifest';

let chunkManifest;
try {
  chunkManifest = require('../manifests/chunk-manifest.json');
} catch (err) {
  chunkManifest = {};
}

chunkManifest = Object.keys(chunkManifest).reduce((manifest, key) => {
  manifest[key] = '/' + chunkManifest[key];
  return manifest;
}, {});

const __DEV__ = process.env.NODE_ENV !== 'production';
const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint):\s/i;

function rev(scopedPrepend, asset) {
  if (__DEV__) {
    // do not use revision in dev mode
    return `${scopedPrepend}/${asset}`;
  }
  return `${scopedPrepend}/${ manifest[asset] || asset }`;
}

function removeOldTerms(str = '') {
  return str.replace(challengesRegex, '');
}

export default function jadeHelpers() {
  return function jadeHelpersMiddleware(req, res, next) {
    res.locals.removeOldTerms = removeOldTerms;
    res.locals.rev = rev;
    // static data
    res.locals.user = req.user;
    res.locals.chunkManifest = chunkManifest;
    res.locals._csrf = req.csrfToken ? req.csrfToken() : null;
    if (req.csrfToken) {
      res.expose({ token: res.locals._csrf }, 'csrf');
    }
    res.locals.theme = req.user && req.user.theme ||
      req.cookies.theme ||
      'default';
    next();
  };
}
