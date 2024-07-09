import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import { availableLangs, Languages } from '../../shared/config/i18n';
import env from './read-env';

const configPath = path.resolve(__dirname, '../config');

const { FREECODECAMP_NODE_ENV } = process.env;

function checkClientLocale() {
  if (!process.env.CLIENT_LOCALE) throw Error('CLIENT_LOCALE is not set');
  if (!availableLangs.client.includes(process.env.CLIENT_LOCALE as Languages)) {
    throw Error(`

      CLIENT_LOCALE, ${process.env.CLIENT_LOCALE}, is not an available language in shared/config/i18n.ts

      `);
  }
}

function checkCurriculumLocale() {
  if (!process.env.CURRICULUM_LOCALE)
    throw Error('CURRICULUM_LOCALE is not set');
  if (
    !availableLangs.curriculum.includes(
      process.env.CURRICULUM_LOCALE as Languages
    )
  ) {
    throw Error(`

      CURRICULUM_LOCALE, ${process.env.CURRICULUM_LOCALE}, is not an available language in shared/config/i18n.ts

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
    'deploymentEnv',
    'environment',
    'showUpcomingChanges',
    'showNewCurriculum'
  ];
  const searchKeys = ['algoliaAppId', 'algoliaAPIKey'];
  const donationKeys = ['stripePublicKey', 'paypalClientId', 'patreonClientId'];
  const abTestingKeys = ['growthbookUri'];

  const expectedVariables = locationKeys.concat(
    deploymentKeys,
    searchKeys,
    donationKeys,
    abTestingKeys
  );
  const actualVariables = Object.keys(env as Record<string, unknown>);
  if (expectedVariables.length !== actualVariables.length) {
    const extraVariables = actualVariables
      .filter(x => !expectedVariables.includes(x))
      .toString();
    const missingVariables = expectedVariables
      .filter(x => !actualVariables.includes(x))
      .toString();

    throw Error(
      `

    Env. variable validation failed. Make sure only expected variables are used and configured.

    ` +
        (extraVariables ? `Extra variables: ${extraVariables}\n` : '') +
        (missingVariables ? `Missing variables: ${missingVariables}` : '')
    );
  }

  for (const key of expectedVariables) {
    const envVal = env[key as keyof typeof env];
    if (typeof envVal === 'undefined' || envVal === null) {
      throw Error(`

      Env. variable ${key} is missing, build cannot continue

      `);
    }
  }

  if (env['environment'] !== 'production')
    throw Error(`

  Production environment should be 'production'

  `);

  if (env['showUpcomingChanges'] && env['deploymentEnv'] !== 'staging')
    throw Error(`

  SHOW_UPCOMING_CHANGES should never be 'true' in production

  `);

  checkClientLocale();
  checkCurriculumLocale();
} else {
  checkClientLocale();
  checkCurriculumLocale();
  if (fs.existsSync(`${configPath}/env.json`)) {
    /* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment */
    const { showNewCurriculum, showUpcomingChanges } = require(
      `${configPath}/env.json`
    );
    /* eslint-enable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment */
    if (
      env['showUpcomingChanges'] !== showUpcomingChanges ||
      env['showNewCurriculum'] !== showNewCurriculum
    ) {
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
      console.log('Feature flags have been changed, cleaning client cache.');
      const child = spawn('pnpm', ['run', '-w', 'clean:client']);
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

fs.writeFileSync(`${configPath}/env.json`, JSON.stringify(env));
