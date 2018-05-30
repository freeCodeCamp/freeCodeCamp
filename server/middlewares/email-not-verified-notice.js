import dedent from 'dedent';

const ALLOWED_METHODS = ['GET'];
const EXCLUDED_PATHS = [
  '/api/flyers/findOne',
  '/signout',
  '/accept-privacy-terms',
  '/update-email',
  '/passwordless-change',
  '/external/services/user'
];

export default function emailNotVerifiedNotice() {
  return function(req, res, next) {
    if (
      ALLOWED_METHODS.indexOf(req.method) !== -1 &&
      EXCLUDED_PATHS.indexOf(req.path) === -1
    ) {
      const { user } = req;
      if (user && (!user.email || user.email === '' || !user.emailVerified)) {
        req.flash(
          'danger',
          dedent`
  New privacy laws now require that we have an email address where we can reach
  you. Please verify your email address below and click the link we send you to
  confirm.
          `
        );
        res.redirect('/update-email');
        return next;
      }
    }
    return next();
  };
}
