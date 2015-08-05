import debugFactory from 'debug';

const debug = debugFactory('freecc:models:userIdent');

const { defaultProfileImage } = require('../utils/constantStrings.json');

function getFirstImageFromProfile(profile) {
  return profile && profile.photos && profile.photos[0] ?
    profile.photos[0].value :
    null;
}

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

    const picture = getFirstImageFromProfile(userIdent.profile);

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

    // if user signed in with github
    // and user is not github cool
    // or username is different from github username
    // then make them github cool
    // and set their username from their github profile.
    if (
      userIdent.provider === 'github-login' &&
      (!user.isGithubCool ||
        user.username !== userIdent.provider.username.toLowerCase())
    ) {
      debug("user isn't github cool or username from github is different");
      user.isGithubCool = true;
      user.username = userIdent.profile.username.toLowerCase();
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
