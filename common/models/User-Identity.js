var debug = require('debug')('freecc:models:userIdent');

var defaultProfileImage =
  require('../utils/constantStrings.json').defaultProfileImage;

function getFirstImageFromProfile(profile) {
  return profile && profile.photos && profile.photos[0] ?
    profile.photos[0].value :
    null;
}
module.exports = function(UserIdent) {
 UserIdent.observe('before save', function(ctx, next) {
  var userIdent = ctx.currentInstance || ctx.instance;
  if (!userIdent) {
    debug('no user identity instance found');
    return next();
  }
  userIdent.user(function(err, user) {
    if (err) { return next(err); }
    if (!user) {
      debug('no user attached to identity!');
      return next();
    }

    var picture = getFirstImageFromProfile(userIdent.profile);

    debug('picture', picture, user.picture);
    // check if picture was found
    // check if user has no picture
    // check if user has default picture
    // set user.picture from oauth provider
    if (
      picture &&
      (!user.picture || user.picture === defaultProfileImage)
    ) {
      debug('setting user picture');
      user.picture = userIdent.profile.photos[0].value;
      return user.save(function(err) {
        if (err) { return next(err); }
        next();
      });
    }

    debug('exiting after user ident');
    next();
  });
 });
};
