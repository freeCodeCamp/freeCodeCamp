import _ from 'lodash';
import { Observable } from 'rx';

import { unDasherize, nameify } from '../utils';
import supportedLanguages from '../../common/utils/supported-languages';
import {
  addNameIdMap as _addNameIdToMap,
  checkMapData,
  getFirstChallenge as _getFirstChallenge
} from '../../common/utils/map.js';

const isDev = process.env.NODE_ENV !== 'production';
const isBeta = !!process.env.BETA;
const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint)/i;
const addNameIdMap = _.once(_addNameIdToMap);
const getFirstChallenge = _.once(_getFirstChallenge);
/*
 * interface ChallengeMap {
 *   result: {
 *     superBlocks: [ ...superBlockDashedName: String ]
*    },
 *   entities: {
 *     superBlock: {
 *       [ ...superBlockDashedName ]: SuperBlock
 *     },
 *     block: {
 *       [ ...blockDashedNameg ]: Block,
 *     challenge: {
 *       [ ...challengeDashedNameg ]: Challenge
 *     }
 *   }
 * }
 */
export function _cachedMap({ Block, Challenge }) {
  const challenges = Challenge.find$({
    order: [ 'order ASC', 'suborder ASC' ]
  });
  const challengeMap = challenges
    .map(
      challenges => challenges
        .map(challenge => challenge.toJSON())
        .reduce((hash, challenge) => {
          hash[challenge.dashedName] = challenge;
          return hash;
        }, {})
    );
  const blocks = Block.find$({ order: [ 'superOrder ASC', 'order ASC' ] });
  const blockMap = Observable.combineLatest(
    blocks.map(
      blocks => blocks
        .map(block => block.toJSON())
        .reduce((hash, block) => {
          hash[block.dashedName] = block;
          return hash;
        }, {})
    ),
    challenges
  )
    .map(([ blocksMap, challenges ]) => {
      return challenges.reduce((blocksMap, challenge) => {
        if (blocksMap[challenge.block].challenges) {
          blocksMap[challenge.block].challenges.push(challenge.dashedName);
        } else {
          blocksMap[challenge.block] = {
            ...blocksMap[challenge.block],
            challenges: [ challenge.dashedName ]
          };
        }
        return blocksMap;
      }, blocksMap);
    });
  const superBlockMap = blocks.map(blocks => blocks.reduce((map, block) => {
    if (
      map[block.superBlock] &&
      map[block.superBlock].blocks
    ) {
      map[block.superBlock].blocks.push(block.dashedName);
    } else {
      map[block.superBlock] = {
        title: _.startCase(block.superBlock),
        order: block.superOrder,
        name: nameify(_.startCase(block.superBlock)),
        dashedName: block.superBlock,
        blocks: [block.dashedName],
        message: block.superBlockMessage
      };
    }
    return map;
  }, {}));
  const superBlocks = superBlockMap.map(superBlockMap => {
    return Object.keys(superBlockMap)
      .map(key => superBlockMap[key])
      .map(({ dashedName }) => dashedName);
  });
  return Observable.combineLatest(
    superBlockMap,
    blockMap,
    challengeMap,
    superBlocks,
    (superBlock, block, challenge, superBlocks) => ({
      entities: {
        superBlock,
        block,
        challenge
      },
      result: {
        superBlocks
      }
    })
  )
    .do(checkMapData)
    .shareReplay();
}

export const cachedMap = _.once(_cachedMap);

export function mapChallengeToLang(
  { translations = {}, ...challenge },
  lang
) {
  if (!supportedLanguages[lang]) {
    lang = 'en';
  }
  const translation = translations[lang] || {};
  const isTranslated = Object.keys(translation).length > 0;
  if (lang !== 'en') {
    challenge = {
      ...challenge,
      ...translation,
      isTranslated
    };
  }
  return {
    ...challenge,
    isTranslated
  };
}

export function getMapForLang(lang) {
  return ({ entities: { challenge: challengeMap, ...entities }, result }) => {
    entities.challenge = Object.keys(challengeMap)
      .reduce((translatedChallengeMap, key) => {
        translatedChallengeMap[key] = mapChallengeToLang(
          challengeMap[key],
          lang
        );
        return translatedChallengeMap;
      }, {});
    return { result, entities };
  };
}

// type ObjectId: String;
// getChallengeById(
//   map: Observable[map],
//   id: ObjectId
// ) => Observable[Challenge] | Void;
export function getChallengeById(map, id) {
  return Observable.if(
    () => !id,
    map.map(getFirstChallenge),
    map.map(addNameIdMap)
      .map(map => {
        const {
          entities: { challenge: challengeMap, challengeIdToName }
        } = map;
        let finalChallenge;
        const dashedName = challengeIdToName[id];
        finalChallenge = challengeMap[dashedName];
        if (!finalChallenge) {
          finalChallenge = getFirstChallenge(map);
        }
        return finalChallenge;
      })
  );
}

export function getChallengeInfo(map) {
  return map.map(addNameIdMap)
    .map(({
      entities: {
        challenge: challengeMap,
        challengeIdToName
      }
    }) => ({
      challengeMap,
      challengeIdToName
    }));
}

// if challenge is not isComingSoon or isBeta => load
// if challenge is ComingSoon we are in beta||dev => load
// if challenge is beta and we are in beta||dev => load
// else hide
function loadComingSoonOrBetaChallenge({
  isComingSoon,
  isBeta: challengeIsBeta
}) {
  return !(isComingSoon || challengeIsBeta) || isDev || isBeta;
}

// this is a hard search
// falls back to soft search
export function getChallenge(
  challengeDashedName,
  blockDashedName,
  map,
  lang
) {
  return map
    .flatMap(({ entities, result: { superBlocks } }) => {
      const block = entities.block[blockDashedName];
      const challenge = entities.challenge[challengeDashedName];
      return Observable.if(
        () => (
          !blockDashedName ||
          !block ||
          !challenge ||
          !loadComingSoonOrBetaChallenge(challenge)
        ),
        getChallengeByDashedName(challengeDashedName, map),
        Observable.just({ block, challenge })
      )
        .map(({ challenge, block }) => ({
          redirect: challenge.block !== blockDashedName ?
            `/challenges/${block.dashedName}/${challenge.dashedName}` :
            false,
          entities: {
            challenge: {
              [challenge.dashedName]: mapChallengeToLang(challenge, lang)
            }
          },
          result: {
            block: block.dashedName,
            challenge: challenge.dashedName,
            superBlocks
          }
        }));
    });
}

export function getBlockForChallenge(map, challenge) {
  return map.map(({ entities: { block } }) => block[challenge.block]);
}

export function getChallengeByDashedName(dashedName, map) {
  const challengeName = unDasherize(dashedName)
    .replace(challengesRegex, '');
  const testChallengeName = new RegExp(challengeName, 'i');

  return map
    .map(({ entities }) => entities.challenge)
    .flatMap(challengeMap => {
      return Observable.from(Object.keys(challengeMap))
        .map(key => challengeMap[key]);
    })
    .filter(challenge => {
      return loadComingSoonOrBetaChallenge(challenge) &&
        testChallengeName.test(challenge.name);
    })
    .last({ defaultValue: null })
    .flatMap(challengeOrNull => {
      return Observable.if(
        () => !!challengeOrNull,
        Observable.just(challengeOrNull),
        map.map(getFirstChallenge)
      );
    })
    .flatMap(challenge => {
      return getBlockForChallenge(map, challenge)
        .map(block => ({ challenge, block }));
    });
}

