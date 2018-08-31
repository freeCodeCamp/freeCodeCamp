import _ from 'lodash';
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

const isDev = process.env.NODE_ENV !== 'production';
const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint):\s/i;

function rev(scopedPrepend, asset) {
  if (isDev) {
    // do not use revision in dev mode
    return `${scopedPrepend}/${asset}`;
  }
  return `${scopedPrepend}/${ manifest[asset] || asset }`;
}

function removeOldTerms(str = '') {
  return str.replace(challengesRegex, '');
}

const cacheBreaker = isDev ?
  // add cacheBreaker in dev instead of rev manifest
  asset => `${asset}?cacheBreaker=${Math.random()}` :
  _.identity;

export default function jadeHelpers() {
  return function jadeHelpersMiddleware(req, res, next) {
    Object.assign(
      res.locals,
      {
        removeOldTerms,
        rev,
        cacheBreaker,
        // static data
        user: req.user,
        chunkManifest,
        _csrf: req.csrfToken ? req.csrfToken() : null,
        theme: req.user &&
          req.user.theme ||
          req.cookies.theme ||
          'default'
      }
    );
    if (req.csrfToken) {
      res.expose({ token: res.locals._csrf }, 'csrf');
    }
    next();
  };
}
