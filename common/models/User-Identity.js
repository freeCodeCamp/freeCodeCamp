import debugFactory from 'debug';

import {
  setProfileFromGithub,
  getFirstImageFromProfile
} from '../../server/utils/auth';

const debug = debugFactory('freecc:models:userIdent');

const { defaultProfileImage } = require('../utils/constantStrings.json');

export default function(UserIdent) {
 UserIdent.observe('before save', function(ctx, next) {
  var userIdent = ctx.currentInstance || ctx.instance;
  if (!userIdent) {
    debug('no user identity instance found');
    return next();
  }
  userIdent.user(function(err, user) {
    let userChanged = false;
    if (err) { return next(err); }
    if (!user) {
      debug('no user attached to identity!');
      return next();
    }

    const { profile } = userIdent;
    const picture = getFirstImageFromProfile(profile);

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
      user.picture = picture;
      userChanged = true;
    }

    // if user signed in with github refresh their info
    if (/github/.test(userIdent.provider)) {
      debug("user isn't github cool or username from github is different");
      setProfileFromGithub(user, profile, profile._json);
      userChanged = true;
    }


    if (userChanged) {
      return user.save(function(err) {
        if (err) { return next(err); }
        next();
      });
    }
    debug('exiting after user identity before save');
    next();
  });
 });
}
