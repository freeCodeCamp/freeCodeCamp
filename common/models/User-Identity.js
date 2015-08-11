import assign from 'object.assign';
import debugFactory from 'debug';

const debug = debugFactory('freecc:models:userIdent');

const { defaultProfileImage } = require('../utils/constantStrings.json');

function getFirstImageFromProfile(profile) {
  return profile && profile.photos && profile.photos[0] ?
    profile.photos[0].value :
    null;
}

// using es6 argument destructing
function setProfileFromGithub(
  user,
  {
    profileUrl: githubURL,
    username
  },
  {
    id: githubId,
    'avatar_url': picture,
    email: githubEmail,
    'created_at': joinedGithubOn,
    blog: website,
    location,
    name
  }
) {
  return assign(
    user,
    { isGithubCool: true, isMigrationGrandfathered: false },
    {
      name,
      username: username.toLowerCase(),
      location,
      joinedGithubOn,
      website,
      picture,
      githubId,
      githubURL,
      githubEmail,
      githubProfile: githubURL
    }
  );
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
    if (userIdent.provider === 'github-login') {
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
