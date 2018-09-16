/* eslint-disable no-process-exit */
require('babel-register');
require('dotenv').load();
const adler32 = require('adler32');

const _ = require('lodash');
const createDebugger = require('debug');
const utils = require('../server/utils');
const { getChallenges } = require('@freecodecamp/curriculum');
const { validateChallenge } = require(
  './schema/challengeSchema'
);
const app = require('../server/server');

const log = createDebugger('fcc:seed');
// force logger to always output
// this may be brittle
log.enabled = true;

const dasherize = utils.dasherize;
const nameify = utils.nameify;

const Challenge = app.models.Challenge;
const existingChallengeIds = [];

const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

const prepareChallenges = (challengeSpec) =>
  Promise.resolve(challengeSpec.challenges.map((challenge, index) => {
    challenge.name = nameify(challenge.title);

    challenge.dashedName = dasherize(challenge.title);

    challenge.checksum = adler32.sum(
      Buffer(
        challenge.title +
        JSON.stringify(challenge.description) +
        JSON.stringify(challenge.challengeSeed) +
        JSON.stringify(challenge.tests)
      )
    );

    if (challenge.files) {
      challenge.files = _.reduce(challenge.files, (map, file) => {
        map[file.key] = {
          ...file,
          head: arrToString(file.head),
          contents: arrToString(file.contents),
          tail: arrToString(file.tail)
        };
        return map;
      }, {});
    }
    challenge.fileName = challengeSpec.fileName;
    challenge.helpRoom = challengeSpec.helpRoom || 'Help';
    challenge.order = challengeSpec.order;
    challenge.suborder = index + 1;
    challenge.block = dasherize(challengeSpec.name);
    challenge.blockId = '' + challengeSpec.id;
    challenge.isBeta = challenge.isBeta || !!challengeSpec.isBeta;
    challenge.isComingSoon = challenge.isComingSoon ||
      !!challengeSpec.isComingSoon;
    challenge.isLocked = challenge.isLocked || !!challengeSpec.isLocked;
    challenge.isPrivate = challenge.isPrivate || !!challengeSpec.isPrivate;
    challenge.time = challengeSpec.time;
    challenge.superOrder = challengeSpec.superOrder;
    challenge.superBlock = challengeSpec.superBlock
      .split('-')
      .map((word) => {
        return _.capitalize(word);
      })
      .join(' ');
    challenge.required = (challenge.required || [])
      .concat(challengeSpec.required || []);
    challenge.template = challenge.template || challengeSpec.template;
    return _.omit(
      challenge,
      [
        'betaSolutions',
        'betaTests',
        'hints',
        'MDNlinks',
        'null',
        'rawSolutions',
        'react',
        'reactRedux',
        'redux',
        'releasedOn',
        'translations',
        'type'
      ]
    );
  }));

const validateChallengeData = (challenge) =>
  new Promise((resolve, reject) => {
    try {
      const result = validateChallenge(challenge);
      if (result.error) {
        console.log(result.error);
        throw new Error(result.error);
      }
      resolve();
    } catch (error) {
      log('%s challenge validation failed', challenge.name);
      reject(error);
    }
  });

const upsertChallenge = (challenge) =>
  new Promise(async function(resolve, reject) {
    try {
      await validateChallengeData(challenge);
      const upsertedChallenge = Challenge.upsert(challenge);
      resolve(upsertedChallenge);
    } catch (error) {
      log('%s failed to created-or-updated challenge', challenge.name);
      reject(error);
    }
  });

const deleteChalenges = () => new Promise(async function(resolve, reject) {
  try {
    await Challenge.deleteAll({ _id: { nin: existingChallengeIds } });
    resolve();
  } catch (error) {
    log('failed to delete challenges that do not have a corresponding entry');
    reject(error);
  }
});

const Block = app.models.Block;
const existingBlockIds = [];

const getBlock = (challengeSpec) =>
  Promise.resolve({
    id: challengeSpec.id,
    title: challengeSpec.name,
    name: nameify(challengeSpec.name),
    dashedName: dasherize(challengeSpec.name),
    superOrder: challengeSpec.superOrder,
    superBlock: challengeSpec.superBlock,
    superBlockMessage: challengeSpec.message,
    order: challengeSpec.order,
    time: challengeSpec.time,
    isLocked: !!challengeSpec.isLocked,
    isPrivate: !!challengeSpec.isPrivate
  });

const upsertBlock = (block) =>
  new Promise((resolve, reject) => {
    try {
      const upsertedBlock = Block.upsert(block);
      resolve(upsertedBlock);
    } catch (error) {
      log('failed to created-or-updated %s block', block.name);
      reject(error);
    }
  });

const deleteBlocks = () => new Promise(async function(resolve, reject) {
  try {
    await Block.deleteAll({ _id: { nin: existingBlockIds } });
    resolve();
  } catch (error) {
    log('failed to delete blocks that do not have a corresponding entry');
    reject(error);
  }
});

const loadChallenges = () =>
  new Promise((resolve, reject) => {
    try {
      const challenges = getChallenges();
      resolve(challenges);
    } catch (error) {
      log('failed to load challenges', error);
      reject(error);
    }
  });

const upsertData = async function(arr, arrSize) {

  const index = arrSize - 1;
  const data = arr[index];

  const block = await getBlock(data);
  log('parsed %s successfully', block.name);

  if (data.challenges.length === 0) {
    log('%s block does not contain challenges', block.name);
    return;
  }

  existingBlockIds.push(data.id);
  const upsertedBlock = await upsertBlock(block);
  log('successfully created-or-updated %s block', upsertedBlock.name);

  const challenges =
    await prepareChallenges(data);

  for (const challenge of challenges) {
    existingChallengeIds.push(challenge.id);
    await upsertChallenge(challenge);
  }
  log('%s successfully created-or-updated challenges', challenges[0].block);

  if (index > 0) {
    await upsertData(arr, index);
  }
};

const seedDb = async function() {

  const data = await loadChallenges();
  await upsertData(data, data.length);

  await deleteBlocks();
  log('successfully deleted blocks that do not have a corresponding entry');

  await deleteChalenges();
  log('successfully deleted challenges that do not have a corresponding entry');

};

seedDb()
  .then(async function() {
    log('challenge seed completed');
    process.exit(0);
  })
  .catch((err) => {
    log('challenge seed failed %s', err);
    process.exit(0);
  });
