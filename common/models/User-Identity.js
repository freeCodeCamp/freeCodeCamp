//var debug = require('debug')('freecc:models:userIdent');
//
//module.exports = function(UserIdent) {
//
//  UserIdent.observe('before save', function(ctx, next) {
//
//    var userIdent = ctx.instance;
//    userIdent.user(function(err, user) {
//      if (err) { return next(err); }
//      debug('got user', user.username);
//
//      // check if user has picture
//      //  set user.picture from twitter
//      if (!user.picture) {
//        debug('use has no pic');
//        user.picture = userIdent.profile.photos[0].value;
//        user.save(function(err) {
//          if (err) { return next(err); }
//          next();
//        });
//      } else {
//        debug('exiting after user ident');
//        next();
//      }
//    });
//  });
//};
