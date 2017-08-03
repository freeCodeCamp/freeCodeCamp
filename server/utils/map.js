import _ from 'lodash';
import { Observable } from 'rx';

import { nameify } from '../utils';
import supportedLanguages from '../../common/utils/supported-languages';
import {
  checkMapData,
  addNameIdMap as _addNameIdToMap,
  getFirstChallenge
} from '../../common/utils/map.js';

const addNameIdMap = _.once(_addNameIdToMap);
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
