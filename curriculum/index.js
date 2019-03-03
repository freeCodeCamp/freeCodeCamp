/* eslint-disable no-process-exit */
require('babel-register');
require('dotenv').load();
const adler32 = require('adler32');

const Rx = require('rx');
const _ = require('lodash');
const createDebugger = require('debug');
const utils = require('../server/utils');
const getChallenges = require('./getChallenges');
const { validateChallenge } = require('./schema/challengeSchema');
const app = require('../server/server');

const log = createDebugger('fcc:seed');
// force logger to always output
// this may be brittle
log.enabled = true;

const dasherize = utils.dasherize;
const nameify = utils.nameify;
const Observable = Rx.Observable;
const Challenge = app.models.Challenge;

const destroyChallenges = Observable.fromNodeCallback(
  Challenge.destroyAll,
  Challenge
);
const createChallenges = Observable.fromNodeCallback(
  Challenge.create,
  Challenge
);

const Block = app.models.Block;
const destroyBlocks = Observable.fromNodeCallback(Block.destroyAll, Block);
const createBlocks = Observable.fromNodeCallback(Block.create, Block);
const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

Observable.combineLatest(destroyChallenges(), destroyBlocks())
  .last()
  .flatMap(function() {
    return Observable.from(getChallenges());
  })
  .flatMap(function(challengeSpec) {
    const order = challengeSpec.order;
    const blockName = challengeSpec.name;
    const superBlock = challengeSpec.superBlock;
    const superOrder = challengeSpec.superOrder;
    const isBeta = !!challengeSpec.isBeta;
    const isComingSoon = !!challengeSpec.isComingSoon;
    const fileName = challengeSpec.fileName;
    const helpRoom = challengeSpec.helpRoom || 'Help';
    const time = challengeSpec.time;
    const isLocked = !!challengeSpec.isLocked;
    const message = challengeSpec.message;
    const required = challengeSpec.required || [];
    const template = challengeSpec.template;
    const isPrivate = !!challengeSpec.isPrivate;

    log('parsed %s successfully', blockName);

    // challenge file has no challenges...
    if (challengeSpec.challenges.length === 0) {
      return Rx.Observable.just([{ block: 'empty ' + blockName }]);
    }

    const block = {
      title: blockName,
      name: nameify(blockName),
      dashedName: dasherize(blockName),
      superOrder,
      superBlock,
      superBlockMessage: message,
      order,
      time,
      isLocked,
      isPrivate
    };

    return createBlocks(block)
      .map(block => {
        log('successfully created %s block', block.name);

        return challengeSpec.challenges.map(function(challenge, index) {
          challenge.name = nameify(challenge.title);

          challenge.dashedName = dasherize(challenge.name);

          challenge.checksum = adler32.sum(
            Buffer(
              challenge.title +
                JSON.stringify(challenge.description) +
                JSON.stringify(challenge.challengeSeed) +
                JSON.stringify(challenge.tests)
            )
          );

          if (challenge.files) {
            challenge.files = _.reduce(
              challenge.files,
              (map, file) => {
                map[file.key] = {
                  ...file,
                  head: arrToString(file.head),
                  contents: arrToString(file.contents),
                  tail: arrToString(file.tail)
                };
                return map;
              },
              {}
            );
          }
          challenge.fileName = fileName;
          challenge.helpRoom = helpRoom;
          challenge.order = order;
          challenge.suborder = index + 1;
          challenge.block = dasherize(blockName);
          challenge.blockId = '' + block.id;
          challenge.isBeta = challenge.isBeta || isBeta;
          challenge.isComingSoon = challenge.isComingSoon || isComingSoon;
          challenge.isLocked = challenge.isLocked || isLocked;
          challenge.isPrivate = challenge.isPrivate || isPrivate;
          challenge.time = challengeSpec.time;
          challenge.superOrder = superOrder;
          challenge.superBlock = superBlock
            .split('-')
            .map(function(word) {
              return _.capitalize(word);
            })
            .join(' ');
          challenge.required = (challenge.required || []).concat(required);
          challenge.template = challenge.template || template;
          return _.omit(challenge, [
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
          ]);
        });
      })
      .flatMap(challenges => {
        challenges.forEach(challenge => {
          const result = validateChallenge(challenge);
          if (result.error) {
            console.log(result.value);
            throw new Error(result.error);
          }
        });
        return createChallenges(challenges);
      });
  })
  .subscribe(
    function(challenges) {
      log('%s successfully saved', challenges[0].block);
    },
    function(err) {
      throw err;
    },
    function() {
      log('challenge seed completed');
      process.exit(0);
    }
  );
