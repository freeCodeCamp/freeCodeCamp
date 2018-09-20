import dedent from 'dedent';

const ALLOWED_METHODS = ['GET'];
const EXCLUDED_PATHS = [
  '/signout',
  '/accept-privacy-terms',
  '/update-email',
  '/confirm-email',
  '/passwordless-change'
].reduce((list, item) => [...list, item, `/internal${item}`], []);

export default function emailNotVerifiedNotice() {
  return function(req, res, next) {
    if (
      ALLOWED_METHODS.indexOf(req.method) !== -1 &&
      EXCLUDED_PATHS.indexOf(req.path) === -1
    ) {
      const { user } = req;
      if (user && (!user.email || user.email === '' || !user.emailVerified)) {
        req.flash(
          'info',
          dedent`
  New privacy laws now require that we have an email address where we can reach
  you. Please update your email address in the <a href='/settings'>settings</a>
  and click the link we send you to confirm.
          `
        );
      }
    }
    return next();
  };
}
