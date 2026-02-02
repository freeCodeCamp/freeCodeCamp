import assert from 'node:assert';
import path from 'node:path';

import { config } from 'dotenv';

const envPath = path.resolve(__dirname, '../../.env');
const { error } = config({ path: envPath });

if (error && process.env.FREECODECAMP_NODE_ENV !== 'production') {
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

const msg = (key: string) =>
  `${key} is not set in the environment variables. Make sure to set it in the deployment workflow as well as in e2e workflows.`;

assert.ok(process.env.ALGOLIA_API_KEY, msg('ALGOLIA_API_KEY'));
assert.ok(process.env.ALGOLIA_APP_ID, msg('ALGOLIA_APP_ID'));
assert.ok(process.env.API_LOCATION, msg('API_LOCATION'));
assert.ok(process.env.CLIENT_LOCALE, msg('CLIENT_LOCALE'));
assert.ok(process.env.CURRICULUM_LOCALE, msg('CURRICULUM_LOCALE'));
assert.ok(process.env.DEPLOYMENT_ENV, msg('DEPLOYMENT_ENV'));
assert.ok(process.env.DEPLOYMENT_VERSION, msg('DEPLOYMENT_VERSION'));
assert.ok(process.env.FORUM_LOCATION, msg('FORUM_LOCATION'));
assert.ok(process.env.FREECODECAMP_NODE_ENV, msg('FREECODECAMP_NODE_ENV'));
assert.ok(process.env.GROWTHBOOK_URI, msg('GROWTHBOOK_URI'));
assert.ok(process.env.HOME_LOCATION, msg('HOME_LOCATION'));
assert.ok(process.env.NEWS_LOCATION, msg('NEWS_LOCATION'));
assert.ok(process.env.PATREON_CLIENT_ID, msg('PATREON_CLIENT_ID'));
assert.ok(process.env.PAYPAL_CLIENT_ID, msg('PAYPAL_CLIENT_ID'));
assert.ok(process.env.RADIO_LOCATION, msg('RADIO_LOCATION'));
assert.ok(process.env.SHOW_UPCOMING_CHANGES, msg('SHOW_UPCOMING_CHANGES'));
assert.ok(process.env.STRIPE_PUBLIC_KEY, msg('STRIPE_PUBLIC_KEY'));

const {
  ALGOLIA_API_KEY: algoliaAPIKey,
  ALGOLIA_APP_ID: algoliaAppId,
  API_LOCATION: apiLocation,
  CLIENT_LOCALE: clientLocale,
  CURRICULUM_LOCALE: curriculumLocale,
  DEPLOYMENT_ENV: deploymentEnv,
  DEPLOYMENT_VERSION: deploymentVersion,
  FORUM_LOCATION: forumLocation,
  FREECODECAMP_NODE_ENV: environment,
  GROWTHBOOK_URI: growthbookUri,
  HOME_LOCATION: homeLocation,
  NEWS_LOCATION: newsLocation,
  PATREON_CLIENT_ID: patreonClientId,
  PAYPAL_CLIENT_ID: paypalClientId,
  RADIO_LOCATION: radioLocation,
  SHOW_UPCOMING_CHANGES: showUpcomingChanges,
  STRIPE_PUBLIC_KEY: stripePublicKey
} = process.env;

const locations = {
  homeLocation,
  apiLocation,
  forumLocation,
  newsLocation,
  radioLocation
};

export default Object.assign(locations, {
  clientLocale,
  curriculumLocale,
  deploymentEnv,
  environment,
  algoliaAppId:
    algoliaAppId === 'app_id_from_algolia_dashboard' ? '' : algoliaAppId,
  algoliaAPIKey:
    algoliaAPIKey === 'api_key_from_algolia_dashboard' ? '' : algoliaAPIKey,
  stripePublicKey:
    stripePublicKey === 'pk_from_stripe_dashboard' ? null : stripePublicKey,
  paypalClientId:
    paypalClientId === 'id_from_paypal_dashboard' ? null : paypalClientId,
  patreonClientId:
    patreonClientId === 'id_from_patreon_dashboard' ? null : patreonClientId,
  showUpcomingChanges: showUpcomingChanges === 'true',
  growthbookUri:
    growthbookUri === 'api_URI_from_Growthbook_dashboard'
      ? null
      : growthbookUri,
  deploymentVersion
});
