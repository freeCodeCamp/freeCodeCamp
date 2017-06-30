export default () => {
  return function comingFromCom(req, res, next) {
    if (
      !req.user &&
      req.query.ref === 'com'
    ) {
      req.flash('info', {
        msg: 'Welcome to freecodecamp.org'
      });
      return res.redirect('/signin');
    }
    return next();
  };
};
