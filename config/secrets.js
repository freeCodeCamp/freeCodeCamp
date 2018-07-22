module.exports = {
/** freeCodeCamp */
  db: process.env.MONGODB || process.env.MONGOHQ_URL,

  sessionSecret: process.env.SESSION_SECRET,

  cookie: {
    secret: process.env.COOKIE_SECRET,
    domain: process.env.COOKIE_DOMAIN
  },

  jwt: {
    secret: process.env.JWT_SECRET
  },

/** third party */

  auth0: {
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    token: process.env.TWITTER_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: '/auth/linkedin/callback',
    profileFields: ['public-profile-url'],
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  },

  stripe: {
    public: process.env.STRIPE_PUBLIC,
    secret: process.env.STRIPE_SECRET
  }

};
