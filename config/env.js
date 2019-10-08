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
  FORUM_PROXY: forumProxy,
  NEWS_PROXY: newsProxy,
  LOCALE: locale,
  STRIPE_PUBLIC: stripePublicKey,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news,
  forumProxy: forumProxy,
  newsProxy: newsProxy
};

module.exports = Object.assign(locations, {
  locale,
  stripePublicKey,
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'Algolia app id from dashboard'
      ? null
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'Algolia api key from dashboard'
      ? null
      : algoliaAPIKey
});
