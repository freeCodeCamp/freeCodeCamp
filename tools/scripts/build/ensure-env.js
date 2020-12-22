const fs = require('fs');
const path = require('path');
const debug = require('debug');

const env = require('../../../config/env');

const log = debug('fcc:ensure-env');

const clientPath = path.resolve(__dirname, '../../../client');
const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;

if (FREECODECAMP_NODE_ENV !== 'development') {
  const locationKeys = [
    'homeLocation',
    'apiLocation',
    'forumLocation',
    'newsLocation'
  ];
  const deploymentKeys = [
    'locale',
    'deploymentEnv',
    'environment',
    'showUpcomingChanges'
  ];
  const searchKeys = ['algoliaAppId', 'algoliaAPIKey'];
  const donationKeys = ['stripePublicKey', 'paypalClientId'];

  const expectedVariables = locationKeys.concat(
    deploymentKeys,
    searchKeys,
    donationKeys
  );
  const variables = Object.keys(env);
  expectedVariables.sort();
  variables.sort();
  if (expectedVariables.length !== variables.length) {
    throw Error(`Env. variable validation failed. Expected
    ${expectedVariables}
    but recieved
    ${variables}
    `);
  }

  for (const key of expectedVariables) {
    if (typeof env[key] === 'undefined' || env[key] === null) {
      throw Error(`Env. variable ${key} is missing, build cannot continue`);
    }
  }

  if (env['environment'] !== 'production')
    throw Error("Production environment should be 'production' ");

  if (env['showUpcomingChanges'])
    throw Error("SHOW_UPCOMING_CHANGES should never be 'true' in production");
} else {
  log('Skipping environment variable checks in development');
}

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
