import dedent from 'dedent';

const ALLOWED_METHODS = ['GET'];
const EXCLUDED_PATHS = [
  '/api/flyers/findOne',
  '/challenges/current-challenge',
  '/challenges/next-challenge',
  '/map-aside',
  '/signout'
];

export default function flashCheaters() {
  return function(req, res, next) {
    if (
      ALLOWED_METHODS.indexOf(req.method) !== -1 &&
      EXCLUDED_PATHS.indexOf(req.path) === -1 &&
      req.user &&
      req.url !== '/' &&
      req.user.isCheater
    ) {
      req.flash(
        'danger',
        dedent`
          Upon review, this account has been flagged for academic
          dishonesty. If you’re the owner of this account contact
          team@freecodecamp.org for details.
        `
      );
    }
    return next();
  };
}
