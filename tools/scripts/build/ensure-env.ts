import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import { availableLangs } from '../../../config/i18n/all-langs';

// eslint-disable-next-line
const env = require('../../../config/read-env.js');

const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;

function checkClientLocale() {
  if (!process.env.CLIENT_LOCALE) throw Error('CLIENT_LOCALE is not set');
  if (!availableLangs.client.includes(process.env.CLIENT_LOCALE)) {
    throw Error(`

      CLIENT_LOCALE, ${process.env.CLIENT_LOCALE}, is not an available language in config/i18n/all-langs.ts

      `);
  }
}

function checkCurriculumLocale() {
  if (!process.env.CURRICULUM_LOCALE)
    throw Error('CURRICULUM_LOCALE is not set');
  if (!availableLangs.curriculum.includes(process.env.CURRICULUM_LOCALE)) {
    throw Error(`

      CURRICULUM_LOCALE, ${process.env.CURRICULUM_LOCALE}, is not an available language in config/i18n/all-langs.ts

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
    'showUpcomingChanges',
    'showNewCurriculum'
  ];
  const searchKeys = ['algoliaAppId', 'algoliaAPIKey'];
  const donationKeys = ['stripePublicKey', 'paypalClientId', 'patreonClientId'];

  const expectedVariables = locationKeys.concat(
    deploymentKeys,
    searchKeys,
    donationKeys
  );
  const receivedvariables = Object.keys(env as Record<string, unknown>);
  expectedVariables.sort();
  receivedvariables.sort();
  if (expectedVariables.length !== receivedvariables.length) {
    /* eslint-disable @typescript-eslint/restrict-template-expressions */
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
    /* eslint-enable @typescript-eslint/restrict-template-expressions */
  }

  for (const key of expectedVariables) {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
    /* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment */
    const {
      showNewCurriculum,
      showUpcomingChanges
    } = require(`${globalConfigPath}/env.json`);
    /* eslint-enable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment */
    if (
      env['showUpcomingChanges'] !== showUpcomingChanges ||
      env['showNewCurriculum'] !== showNewCurriculum
    ) {
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
      console.log('Feature flags have been changed, cleaning client cache.');
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
