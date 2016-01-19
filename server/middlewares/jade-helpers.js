const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint):\s/i;

export default function jadeHelpers() {
  return function jadeHelpersMiddleware(req, res, next) {
    res.locals.removeOldTerms = function removeOldTerms(str = '') {
      return str.replace(challengesRegex, '');
    };

    next();
  };
}
