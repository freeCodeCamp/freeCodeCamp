var debug = require('debug')('freecc:models:userIdent');

var defaultProfileImage =
  require('../utils/constantStrings.json').defaultProfileImage;

module.exports = function(UserIdent) {

 UserIdent.observe('before save', function(ctx, next) {
  var userIdent = ctx.currentInstance || ctx.instance;
  if (userIdent) {
    debug('no user identity instance found');
    return next();
  }
  userIdent.user(function(err, user) {
    if (err) { return next(err); }
    if (!user) {
      debug('no user attached to identity!');
      return next();
    }
    debug('got user', user.username);

    var picture = userIdent.profile && userIdent.profile[0] ?
      userIdent.profile[0].value :
      null;

    // check if user has picture
    //  set user.picture from twitter
    if (picture && !user.picture || user.picture === defaultProfileImage) {
      debug('use has no pic');
      user.picture = userIdent.profile.photos[0].value;
      user.save(function(err) {
        if (err) { return next(err); }
        next();
      });
    } else {
      debug('exiting after user ident');
      next();
    }
  });
 });
};
