const fs = require('fs');
const path = require('path');

const env = require('../../../config/env');

const clientPath = path.resolve(__dirname, '../../../client');
const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;

if (FREECODECAMP_NODE_ENV === 'production') {
  const locationKeys = [
    'homeLocation',
    'apiLocation',
    'forumLocation',
    'newsLocation'
  ];
  const deploymentKeys = ['locale', 'deploymentEnv', 'environment'];
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
    ${variables} to match
    ${expectedVariables}
    `);
  }

  for (const key of expectedVariables) {
    if (!env[key]) {
      throw Error(`Env. variable ${key} is missing, build cannot continue`);
    }
  }
}

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
