var successRedirect = '/';
var failureRedirect = '/login';
module.exports = {
  local: {
    provider: 'local',
    module: 'passport-local',
    usernameField: 'email',
    passwordField: 'password',
    authPath: '/auth/local',
    successRedirect: successRedirect,
    failureRedirect: '/email-signin',
    session: true,
    failureFlash: true
  },
  'facebook-login': {
    provider: 'facebook',
    module: 'passport-facebook',
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    authPath: '/auth/facebook',
    callbackURL: '/auth/facebook/callback',
    callbackPath: '/auth/facebook/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['email'],
    failureFlash: true
  },
  'facebook-link': {
    provider: 'facebook',
    module: 'passport-facebook',
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    authPath: '/link/facebook',
    callbackURL: '/link/facebook/callback',
    callbackPath: '/link/facebook/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['email', 'user_likes'],
    link: true,
    failureFlash: true
  },
  'google-login': {
    provider: 'google',
    module: 'passport-google-oauth2',
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authPath: '/auth/google',
    callbackURL: '/auth/google/callback',
    callbackPath: '/auth/google/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['email', 'profile'],
    failureFlash: true
  },
  'google-link': {
    provider: 'google',
    module: 'passport-google-oauth2',
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authPath: '/link/google',
    callbackURL: '/link/google/callback',
    callbackPath: '/link/google/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['email', 'profile'],
    link: true,
    failureFlash: true
  },
  'twitter-login': {
    provider: 'twitter',
    authScheme: 'oauth',
    module: 'passport-twitter',
    authPath: '/auth/twitter',
    callbackURL: '/auth/twitter/callback',
    callbackPath: '/auth/twitter/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    failureFlash: true
  },
  'twitter-link': {
    provider: 'twitter',
    authScheme: 'oauth',
    module: 'passport-twitter',
    authPath: '/link/twitter',
    callbackURL: '/link/twitter/callback',
    callbackPath: '/link/twitter/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    failureFlash: true
  },
  'linkedin-login': {
    provider: 'linkedin',
    authScheme: 'oauth',
    module: 'passport-linkedin-oauth2',
    authPath: '/auth/linkedin',
    callbackURL: '/auth/linkedin/callback',
    callbackPath: '/auth/linkedin/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    scope: ['r_fullprofile', 'r_emailaddress'],
    oAuthOptions: {
      state: process.env.LINKED_STATE
    },
    failureFlash: true
  },
  'linkedin-link': {
    provider: 'linkedin',
    authScheme: 'oauth',
    module: 'passport-linkedin-oauth2',
    authPath: '/link/linkedin',
    callbackURL: '/link/linkedin/callback',
    callbackPath: '/link/linkedin/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    scope: ['r_fullprofile', 'r_emailaddress'],
    authOptions: {
      state: process.env.LINKED_STATE
    },
    failureFlash: true
  }
};
