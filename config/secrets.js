const {
  MONGODB,
  MONGOHQ_URL,

  SESSION_SECRET,
  COOKIE_SECRET,
  JWT_SECRET,

  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,

  FACEBOOK_ID,
  FACEBOOK_SECRET,

  GITHUB_ID,
  GITHUB_SECRET,

  GOOGLE_ID,
  GOOGLE_SECRET,

  LINKEDIN_ID,
  LINKEDIN_SECRET,

  TWITTER_KEY,
  TWITTER_SECRET,
  TWITTER_TOKEN,
  TWITTER_TOKEN_SECRET,

  SENTRY_DSN,

  STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY,

  PAYPAL_CLIENT_ID,
  PAYPAL_SECRET,
  PAYPAL_VERIFY_WEBHOOK_URL,
  PAYPAL_API_TOKEN_URL,
  PAYPAL_WEBHOOK_ID
} = process.env;

module.exports = {
  db: MONGODB || MONGOHQ_URL,

  cookieSecret: COOKIE_SECRET,
  jwtSecret: JWT_SECRET,
  sessionSecret: SESSION_SECRET,

  auth0: {
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN
  },

  facebook: {
    clientID: FACEBOOK_ID,
    clientSecret: FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: GITHUB_ID,
    clientSecret: GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: TWITTER_KEY,
    consumerSecret: TWITTER_SECRET,
    token: TWITTER_TOKEN,
    tokenSecret: TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: GOOGLE_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: LINKEDIN_ID,
    clientSecret: LINKEDIN_SECRET,
    callbackURL: '/auth/linkedin/callback',
    profileFields: ['public-profile-url'],
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  },

  sentry: {
    dns: SENTRY_DSN
  },

  stripe: {
    public: STRIPE_PUBLIC_KEY,
    secret: STRIPE_SECRET_KEY
  },

  paypal: {
    client: PAYPAL_CLIENT_ID,
    secret: PAYPAL_SECRET,
    verifyWebhookURL: PAYPAL_VERIFY_WEBHOOK_URL,
    tokenUrl: PAYPAL_API_TOKEN_URL,
    webhookId: PAYPAL_WEBHOOK_ID
  }
};
