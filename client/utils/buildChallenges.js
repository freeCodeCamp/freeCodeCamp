const { getChallenges } = require('@freecodecamp/curriculum');
const { from, of } = require('rxjs');
const { map } = require('rxjs/operators');
const _ = require('lodash');

const utils = require('../utils');

const dasherize = utils.dasherize;
const nameify = utils.nameify;

const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

exports.buildChallenges$ = function buildChallenges$() {
  return from(getChallenges()).pipe(
    map(function(challengeSpec) {
      const order = challengeSpec.order;
      const blockName = challengeSpec.name;
      const superBlock = challengeSpec.superBlock;
      const superOrder = challengeSpec.superOrder;
      const isBeta = !!challengeSpec.isBeta;
      const isComingSoon = !!challengeSpec.isComingSoon;
      const fileName = challengeSpec.fileName;
      const time = challengeSpec.time;
      const isLocked = !!challengeSpec.isLocked;
      const message = challengeSpec.message;
      const required = challengeSpec.required || [];
      const template = challengeSpec.template;
      const isPrivate = !!challengeSpec.isPrivate;

      // challenge file has no challenges...
      if (challengeSpec.challenges.length === 0) {
        return of([{ block: 'empty ' + blockName }]);
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

      return challengeSpec.challenges.map(function(challenge, index) {
        challenge.name = nameify(challenge.title);

        challenge.dashedName = dasherize(challenge.name);

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
        challenge.order = order;
        challenge.suborder = index + 1;
        challenge.block = dasherize(blockName);
        challenge.blockId = block.id;
        challenge.isBeta = challenge.isBeta || isBeta;
        challenge.isComingSoon = challenge.isComingSoon || isComingSoon;
        challenge.isLocked = challenge.isLocked || isLocked;
        challenge.isPrivate = challenge.isPrivate || isPrivate;
        challenge.isRequired = !!challenge.isRequired;
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
  );
};
