const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const { availableLangs } = require('../../../config/i18n/all-langs');
const env = require('../../../config/read-env');

const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;

function checkClientLocale() {
  if (!availableLangs.client.includes(process.env.CLIENT_LOCALE)) {
    throw Error(`

      CLIENT_LOCALE, ${process.env.CLIENT_LOCALE}, is not an available language in config/i18n/all-langs.js

      `);
  }
}

function checkCurriculumLocale() {
  if (!availableLangs.curriculum.includes(process.env.CURRICULUM_LOCALE)) {
    throw Error(`

      CURRICULUM_LOCALE, ${process.env.CURRICULUM_LOCALE}, is not an available language in config/i18n/all-langs.js

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
  const donationKeys = ['stripePublicKey', 'paypalClientId', 'patreonClientId'];

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
  if (fs.existsSync(`${globalConfigPath}/env.json`)) {
    const { showUpcomingChanges } = require(`${globalConfigPath}/env.json`);
    if (env['showUpcomingChanges'] !== showUpcomingChanges) {
      console.log(
        'SHOW_UPCOMING_CHANGES value has changed, cleaning client cache.'
      );
      const child = spawn('npm', ['run', 'clean:client']);
      child.stdout.setEncoding('utf8');
      child.stdout.on('data', function (data) {
        console.log(data);
      });
      child.on('error', err => {
        console.error(err);
      });
    }
  }
}

fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
