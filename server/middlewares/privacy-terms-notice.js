const ALLOWED_METHODS = ['GET'];
const EXCLUDED_PATHS = [
  '/api/flyers/findOne',
  '/signout',
  '/accept-privacy-terms',
  '/update-email',
  '/confirm-email',
  '/passwordless-change',
  '/external/services/user'
];

export default function privacyTermsNotAcceptedNotice() {
  return function(req, res, next) {
    if (
      ALLOWED_METHODS.indexOf(req.method) !== -1 &&
      EXCLUDED_PATHS.indexOf(req.path) === -1
    ) {
      const { user } = req;
      if (user && user.acceptedPrivacyTerms !== true) {
        res.redirect('/accept-privacy-terms');
        return next;
      }
    }
    return next();
  };
}
