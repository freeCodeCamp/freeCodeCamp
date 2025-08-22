/*
  Script to create daily coding challenge files in the dev-playground superblock.
  Accepts a number arg for how many challenges to create.
*/

import { readFileSync, writeFileSync } from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import ObjectID from 'bson-objectid';
import { Meta } from './helpers/project-metadata';
import { getArgValue } from './helpers/get-arg-value';
import {
  getDailyJavascriptChallengeTemplate,
  getDailyPythonChallengeTemplate
} from './helpers/get-challenge-template';

const numberOfChallengesToCreate = getArgValue(process.argv);

if (numberOfChallengesToCreate > 10) {
  throw new Error('Are you sure you want to create that many challenges?');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const challengesPath = join(__dirname, '../../curriculum/challenges');
const metaPath = join(challengesPath, '_meta');
const devPlaygroundPath = join(challengesPath, 'english/99-dev-playground');

const jsMetaPath = join(
  metaPath,
  'daily-coding-challenges-javascript/meta.json'
);
const pyMetaPath = join(metaPath, 'daily-coding-challenges-python/meta.json');

for (let i = 0; i < numberOfChallengesToCreate; i++) {
  const jsMeta = JSON.parse(readFileSync(jsMetaPath, 'utf-8')) as Meta;
  const pyMeta = JSON.parse(readFileSync(pyMetaPath, 'utf-8')) as Meta;

  const numberOfJsChallenges = jsMeta.challengeOrder.length;
  const numberOfPyChallenges = pyMeta.challengeOrder.length;

  if (numberOfJsChallenges !== numberOfPyChallenges) {
    throw new Error(
      'Inconsistent number of challenges in each daily challenge language, cannot create new challenge.'
    );
  }

  const newChallengeNumber = numberOfJsChallenges + 1;

  createDailyJsChallenge({ challengeNumber: newChallengeNumber, meta: jsMeta });
  createDailyPyChallenge({ challengeNumber: newChallengeNumber, meta: pyMeta });
}

interface CreateDailyChallengeOptions {
  challengeNumber: number;
  meta: Meta;
}

function createDailyJsChallenge({
  challengeNumber,
  meta
}: CreateDailyChallengeOptions) {
  const challengeId = new ObjectID();

  const newMeta = {
    ...meta,
    challengeOrder: [
      ...meta.challengeOrder,
      {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        id: challengeId.toString(),
        title: `JavaScript Challenge ${challengeNumber}`
      }
    ]
  };

  writeFileSync(jsMetaPath, JSON.stringify(newMeta, null, 2));

  const jsTemplate = getDailyJavascriptChallengeTemplate({
    challengeId,
    challengeNumber
  });

  const jsChallengePath = join(
    devPlaygroundPath,
    `daily-coding-challenges-javascript/javascript-challenge-${challengeNumber}.md`
  );

  writeFileSync(jsChallengePath, jsTemplate);
}

function createDailyPyChallenge({
  challengeNumber,
  meta
}: CreateDailyChallengeOptions) {
  const challengeId = new ObjectID();

  const newMeta = {
    ...meta,
    challengeOrder: [
      ...meta.challengeOrder,
      {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        id: challengeId.toString(),
        title: `Python Challenge ${challengeNumber}`
      }
    ]
  };

  writeFileSync(pyMetaPath, JSON.stringify(newMeta, null, 2));

  const pyTemplate = getDailyPythonChallengeTemplate({
    challengeId,
    challengeNumber
  });

  const pyChallengePath = join(
    devPlaygroundPath,
    `daily-coding-challenges-python/python-challenge-${challengeNumber}.md`
  );

  writeFileSync(pyChallengePath, pyTemplate);
}
