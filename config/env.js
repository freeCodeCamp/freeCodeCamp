const path = require('path');

if (process.env.FREECODECAMP_NODE_ENV !== 'production') {
  const envPath = path.resolve(__dirname, '../.env');
  require('dotenv').config({ path: envPath });
}

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  NEWS_LOCATION: news,
  LOCALE: locale,
  STRIPE_PUBLIC: stripePublicKey
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news
};

module.exports = Object.assign(locations, { locale, stripePublicKey });
