const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint):\s/i;
import config from '../../webpack.config';

const __DEV__ = process.env.NODE_ENV !== 'production';

export default function jadeHelpers() {
  return function jadeHelpersMiddleware(req, res, next) {
    res.locals.removeOldTerms = function removeOldTerms(str = '') {
      return str.replace(challengesRegex, '');
    };

    res.locals.getBundleLocation = function getBundleLocation() {
      return __DEV__ ?
        config.output.publicPath + '/bundle.js' :
        'js/bundle.js';
    };

    next();
  };
}
