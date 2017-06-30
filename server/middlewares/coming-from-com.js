export default () => {
  return function comingFromCom(req, res, next) {
    if (
      !req.user &&
      req.query.ref === 'com'
    ) {
      return res.redirect('/signin-com');
    }
    return next();
  };
};
