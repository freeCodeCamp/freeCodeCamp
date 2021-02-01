const fs = require('fs');
const path = require('path');

const env = require('../../../config/env');
const { availableLangs } = require('../../../client/i18n/allLangs');

const clientPath = path.resolve(__dirname, '../../../client');
const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;

function checkClientLocale() {
  if (!availableLangs.client.includes(process.env.CLIENT_LOCALE)) {
    throw Error(`

      CLIENT_LOCALE, ${process.env.CLIENT_LOCALE}, is not an available language in client/i18n/allLangs.js

      `);
  }
}

function checkCurriculumLocale() {
  if (!availableLangs.curriculum.includes(process.env.CURRICULUM_LOCALE)) {
    throw Error(`

      CURRICULUM_LOCALE, ${process.env.CURRICULUM_LOCALE}, is not an available language in client/i18n/allLangs.js

      `);
  }
}

if (FREECODECAMP_NODE_ENV !== 'development') {
  const locationKeys = [
    'homeLocation',
    'apiLocation',
    'forumLocation',
    'newsLocation',
    'radioLocation'
  ];
  const deploymentKeys = [
    'clientLocale',
    'curriculumLocale',
    'showLocaleDropdownMenu',
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
  const receivedvariables = Object.keys(env);
  expectedVariables.sort();
  receivedvariables.sort();
  if (expectedVariables.length !== receivedvariables.length) {
    throw Error(`

    Env. variable validation failed. Make sure these keys are used and configured.

    Mismatch:
    ${expectedVariables
      .filter(expected => !receivedvariables.includes(expected))
      .concat(
        receivedvariables.filter(
          received => !expectedVariables.includes(received)
        )
      )}

    `);
  }

  for (const key of expectedVariables) {
    if (typeof env[key] === 'undefined' || env[key] === null) {
      throw Error(`

      Env. variable ${key} is missing, build cannot continue

      `);
    }
  }

  if (env['environment'] !== 'production')
    throw Error(`

    Production environment should be 'production'

    `);

  if (env['showUpcomingChanges'])
    throw Error(`

    SHOW_UPCOMING_CHANGES should never be 'true' in production

    `);

  checkClientLocale();
  checkCurriculumLocale();
} else {
  checkClientLocale();
  checkCurriculumLocale();
}

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
