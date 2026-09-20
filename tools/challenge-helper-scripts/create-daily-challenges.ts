/*
  Script to create daily coding challenge files in the dev-playground superblock.
  Accepts a number arg for how many challenges to create.
*/

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { ObjectId } from 'bson';
import { Meta } from './helpers/project-metadata.js';
import { getArgValue } from './helpers/get-arg-value.js';
import {
  getDailyJavascriptChallengeTemplate,
  getDailyPythonChallengeTemplate
} from './helpers/get-challenge-template.js';

const numberOfChallengesToCreate = getArgValue(process.argv);

if (numberOfChallengesToCreate > 10) {
  throw new Error('Are you sure you want to create that many challenges?');
}

const curriculumPath = join(__dirname, '../../curriculum');

const structureBlocksPath = join(curriculumPath, '/structure/blocks');
const jsStructurePath = join(
  structureBlocksPath,
  '/daily-coding-challenges-javascript.json'
);
const pyStructurePath = join(
  structureBlocksPath,
  '/daily-coding-challenges-python.json'
);

const challengeBlocksPath = join(curriculumPath, '/challenges/english/blocks');
const jsChallengesPath = join(
  challengeBlocksPath,
  '/daily-coding-challenges-javascript'
);
const pyChallengesPath = join(
  challengeBlocksPath,
  '/daily-coding-challenges-python'
);

for (let i = 0; i < numberOfChallengesToCreate; i++) {
  const jsMeta = JSON.parse(readFileSync(jsStructurePath, 'utf-8')) as Meta;
  const pyMeta = JSON.parse(readFileSync(pyStructurePath, 'utf-8')) as Meta;

  const numberOfJsChallenges = jsMeta.challengeOrder.length;
  const numberOfPyChallenges = pyMeta.challengeOrder.length;

  if (numberOfJsChallenges !== numberOfPyChallenges) {
    throw new Error(
      'Inconsistent number of challenges in each daily challenge language, cannot create new challenge.'
    );
  }

  const challengeId = new ObjectId();
  const newChallengeNumber = numberOfJsChallenges + 1;

  createDailyJsChallenge({
    challengeId,
    challengeNumber: newChallengeNumber,
    meta: jsMeta
  });
  createDailyPyChallenge({
    challengeId,
    challengeNumber: newChallengeNumber,
    meta: pyMeta
  });
}

interface CreateDailyChallengeOptions {
  challengeId: ObjectId;
  challengeNumber: number;
  meta: Meta;
}

function createDailyJsChallenge({
  challengeId,
  challengeNumber,
  meta
}: CreateDailyChallengeOptions) {
  const newMeta = {
    ...meta,
    challengeOrder: [
      ...meta.challengeOrder,
      {
        id: challengeId.toString(),
        title: `Challenge ${challengeNumber}: Placeholder`
      }
    ]
  };

  writeFileSync(jsStructurePath, JSON.stringify(newMeta, null, 2));

  const jsTemplate = getDailyJavascriptChallengeTemplate({
    challengeId,
    challengeNumber
  });

  const jsChallengePath = join(
    jsChallengesPath,

    `${challengeId.toString()}.md`
  );

  writeFileSync(jsChallengePath, jsTemplate);
}

function createDailyPyChallenge({
  challengeId,
  challengeNumber,
  meta
}: CreateDailyChallengeOptions) {
  const newMeta = {
    ...meta,
    challengeOrder: [
      ...meta.challengeOrder,
      {
        id: challengeId.toString(),
        title: `Challenge ${challengeNumber}: Placeholder`
      }
    ]
  };

  writeFileSync(pyStructurePath, JSON.stringify(newMeta, null, 2));

  const pyTemplate = getDailyPythonChallengeTemplate({
    challengeId,
    challengeNumber
  });

  const pyChallengePath = join(
    pyChallengesPath,

    `${challengeId.toString()}.md`
  );

  writeFileSync(pyChallengePath, pyTemplate);
}
