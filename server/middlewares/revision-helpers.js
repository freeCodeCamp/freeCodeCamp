import manifest from '../rev-manifest.json';

const __DEV__ = process.env.NODE_ENV === 'development';

export default function({ globalPrepend = '' } = {}) {

  function rev(scopedPrepend, asset) {
    if (__DEV__) {
      // do not use revision in dev mode
      return `${globalPrepend}${scopedPrepend}/${asset}`;
    }
    return `${globalPrepend}${scopedPrepend}/${ manifest[asset] || asset }`;
  }

  return function(req, res, next) {
    res.locals.rev = rev;
    return next();
  };
}
