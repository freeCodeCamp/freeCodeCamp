import path from 'path';
import { config } from 'dotenv';

const envPath = path.resolve(__dirname, '../../.env');
const { error } = config({ path: envPath });

if (error) {
  console.warn(`
  ----------------------------------------------------
  Warning: .env file not found.
  ----------------------------------------------------
  Please copy sample.env to .env

  You can ignore this warning if using a different way
  to setup this environment.
  ----------------------------------------------------
  `);
}

const {
  HOME_LOCATION: homeLocation,
  API_LOCATION: apiLocation,
  FORUM_LOCATION: forumLocation,
  NEWS_LOCATION: newsLocation,
  RADIO_LOCATION: radioLocation,
  CLIENT_LOCALE: clientLocale,
  CURRICULUM_LOCALE: curriculumLocale,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey,
  STRIPE_PUBLIC_KEY: stripePublicKey,
  PAYPAL_CLIENT_ID: paypalClientId,
  PATREON_CLIENT_ID: patreonClientId,
  DEPLOYMENT_ENV: deploymentEnv,
  SHOW_UPCOMING_CHANGES: showUpcomingChanges,
  SHOW_NEW_CURRICULUM: showNewCurriculum,
  GROWTHBOOK_URI: growthbookUri
} = process.env;

const locations = {
  homeLocation,
  apiLocation,
  forumLocation,
  newsLocation,
  radioLocation: !radioLocation
    ? 'https://coderadio.freecodecamp.org'
    : radioLocation
};

export default Object.assign(locations, {
  clientLocale,
  curriculumLocale,
  deploymentEnv,
  environment: process.env.FREECODECAMP_NODE_ENV || 'development',
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'app_id_from_algolia_dashboard'
      ? ''
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'api_key_from_algolia_dashboard'
      ? ''
      : algoliaAPIKey,
  stripePublicKey:
    !stripePublicKey || stripePublicKey === 'pk_from_stripe_dashboard'
      ? null
      : stripePublicKey,
  paypalClientId:
    !paypalClientId || paypalClientId === 'id_from_paypal_dashboard'
      ? null
      : paypalClientId,
  patreonClientId:
    !patreonClientId || patreonClientId === 'id_from_patreon_dashboard'
      ? null
      : patreonClientId,
  showUpcomingChanges: showUpcomingChanges === 'true',
  showNewCurriculum: showNewCurriculum === 'true',
  growthbookUri:
    !growthbookUri || growthbookUri === 'api_URI_from_Growthbook_dashboard'
      ? null
      : growthbookUri
});
