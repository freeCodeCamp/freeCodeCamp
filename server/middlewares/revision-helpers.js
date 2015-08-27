import manifest from '../rev-manifest.json';

export default function({ globalPrepend = '' } = {}) {

  function rev(scopedPrepend, asset) {
    return `${globalPrepend}${scopedPrepend}/${ manifest[asset] || asset }`;
  }

  return function(req, res, next) {
    res.locals.rev = rev;
    next();
  };
}
