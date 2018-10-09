const { getChallengesForLang } = require('@freecodecamp/curriculum');
const _ = require('lodash');

const utils = require('../utils');
const { locale } = require('../config/env.json');

const dasherize = utils.dasherize;
const nameify = utils.nameify;

const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

exports.buildChallenges = async function buildChallenges() {
  const curriculum = await getChallengesForLang( locale );
  const superBlocks = Object.keys(curriculum);
  const blocks = superBlocks
    .map(superBlock => curriculum[superBlock].blocks)
    .reduce((blocks, superBlock) => {
      const currentBlocks = Object.keys(superBlock).map(key => superBlock[key]);
      return blocks.concat(_.flatten(currentBlocks));
    }, []);

  const builtChallenges = blocks.filter(block => !block.isPrivate).map(({ meta, challenges }) => {
    const {
      order,
      time,
      template,
      required,
      superBlock,
      superOrder,
      isPrivate,
      dashedName: blockDashedName,
      fileName
    } = meta;

    return challenges.map(challenge => {
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
      challenge.block = blockDashedName;
      challenge.isPrivate = challenge.isPrivate || isPrivate;
      challenge.isRequired = !!challenge.isRequired;
      challenge.time = time;
      challenge.superOrder = superOrder;
      challenge.superBlock = superBlock
        .split('-')
        .map(word => _.capitalize(word))
        .join(' ');
      challenge.required = required;
      challenge.template = template;
      return challenge;
    });
  }).reduce((accu, current) => accu.concat(current), [])
  return builtChallenges;
};
