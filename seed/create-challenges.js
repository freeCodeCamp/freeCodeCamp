import _ from 'lodash/fp';
import adler32 from 'adler32';
import { arrToString, dashify, nameify } from '../common/utils';
import { ObjectId } from 'mongodb';

// convert cap false makes the map removes the iteratee cap giving us
// access to the index
const mapWithIndex = _.map.convert({ cap: false });
const createChallengeChecksum = ({
  title,
  description,
  challengeSeed,
  tests
}) => _.flow(
  _.map(JSON.stringify),
  _.reduce((arr, x) => arr.concat(x), [title]),
  _.join(''),
  Buffer,
  adler32.sum,
)([ description, challengeSeed, tests ]);

const titleifySuperblock = _.flow(
  _.split('_'),
  _.map(_.capitalize),
  _.join(' ')
);

// blockSpecToBlock(blockSpec: Object) => Block
const blockSpecToBlock = ({
  id,
  isLocked = false,
  isPrivate,
  message,
  name,
  order,
  superBlock,
  superOrder,
  time
}) => ({
  dashedName: dashify(name),
  id,
  isLocked,
  isPrivate,
  name: nameify(name),
  order,
  superBlock,
  superBlockMessage: message,
  superOrder,
  time,
  title: name
});

// blockSpecToChallenges(blockSpec: Object) => [...Challenge]
const blockSpecToChallenges = _.flow(
  _.pick([
    'blockName',
    'challenges',
    'helpRoom',
    'id',
    'isBeta',
    'isComingSoon',
    'isLocked',
    'isPrivate',
    'message',
    'order',
    'required',
    'superBlock',
    'superOrder',
    'template',
    'time'
  ]),
  ({
    id,
    blockName,
    superBlock,
    ...rest
  }) => ({
    ...rest,
    block: blockName,
    blockId: id,
    superBlock: titleifySuperblock(superBlock)
  }),
  _.defaults({
    isBeta: false,
    isComingSoon: false,
    isPrivate: false,
    isLocked: false,
    required: [],
    message: '',
    helpRoom: 'N/A'
  }),
  // convert and normalize block.challenges to challenges array
  ({ challenges, required = [], ...challengeDefaults }) => _.flow(
    // add defaults from blockSpec if they are not defined in challenge
    _.map(_.defaults(challengeDefaults)),
    // add things like title and such
    mapWithIndex((challenge, index) => ({
      ...challenge,
      name: nameify(challenge.title),
      suborder: index + 1,
      dashedName: dashify(nameify(challenge.title)),
      checksum: createChallengeChecksum(challenge),
      required: (challenge.required || []).concat(required)
    })),
    _.map(challenge => {
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
      return challenge;
    })
  )(challenges)
);

// createChallengesArray([ ...blockSpec]) => [[...Block], [...Challenge]]
export const createChallengesArray = _.flow(
  // block has no challenges. Out with thee!
  _.filter(({ challenges = [] }) => !!challenges.length),
  _.map(({
    name,
    ...rest
  }) => ({
    ...rest,
    // used to relate blocks to challenges by foreign id
    id: _.toString(new ObjectId()),
    title: name,
    name: nameify(name),
    blockName: dashify(name)
  })),
  _.map(_.over([blockSpecToBlock, blockSpecToChallenges])),
  _.reduce(([ blocks, challenges ], [ block, _challenges]) => [
    [...blocks, block],
    [...challenges, ..._challenges]
  ], [[], []])
);

// turn blockSpecs (challenge files) into a map of blockname to Block
// and challengeName to Challenge
// createChallengesMap(blockSpecks: [...blockSpeck]) => ({
//   block: { [blockDashedName]: Block],
//   challenges: { [challengeDashedName]: Challenge }
// })
export const createChallengesMap = _.flow(
  createChallengesArray,
  ([blocks, challenges]) => ({
    block: _.keyBy('dashedName')(blocks),
    challenge: _.keyBy('dashedName')(challenges)
  })
);
