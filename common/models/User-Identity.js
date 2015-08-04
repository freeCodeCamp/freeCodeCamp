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

    // if user is not github cool
    // and user signed in with github
    // then make them github cool
    // and set their username from their github profile.
    if (!user.isGithubCool && userIdent.provider === 'github-login') {
      debug(`
        user isn't github cool yet but signed in with github
        lets make them cool!
      `);
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
