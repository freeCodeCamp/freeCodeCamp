const path = require('path');
const fs = require('fs');

if (process.env.FREECODECAMP_NODE_ENV !== 'production') {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    throw Error('.env not found, please copy sample.env to .env.');
  }
  require('dotenv').config({ path: envPath });
}

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  NEWS_LOCATION: news,
  LOCALE: locale,
  STRIPE_PUBLIC_KEY: stripePublicKey,
  SERVICEBOT_ID: servicebotId,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey,
  PAYPAL_CLIENT_ID: paypalClientId,
  DEPLOYMENT_ENV: deploymentEnv
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news
};

module.exports = Object.assign(locations, {
  locale,
  deploymentEnv,
  environment: process.env.FREECODECAMP_NODE_ENV || 'development',
  stripePublicKey:
    !stripePublicKey || stripePublicKey === 'pk_from_stripe_dashboard'
      ? null
      : stripePublicKey,
  servicebotId:
    !servicebotId || servicebotId === 'servicebot_id_from_servicebot_dashboard'
      ? null
      : servicebotId,
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'Algolia app id from dashboard'
      ? null
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'Algolia api key from dashboard'
      ? null
      : algoliaAPIKey,
  paypalClientId:
    !paypalClientId || paypalClientId === 'id_from_paypal_dashboard'
      ? null
      : paypalClientId
});
