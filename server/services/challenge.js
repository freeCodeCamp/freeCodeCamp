import debug from 'debug';
import { pickBy } from 'lodash';
import { Observable } from 'rx';

import { cachedMap, getMapForLang } from '../utils/map';
import { shapeChallenges } from '../../common/app/redux/utils';

const log = debug('fcc:services:challenge');
const isDev = debug.enabled('fcc:*');

export default function getChallengesForBlock(app) {
  const challengeMap = cachedMap(app.models);
  return {
    name: 'challenges-for-block',
    read: function readChallengesForBlock(
      req,
      resource,
      { blockName, lang = 'en' } = {},
      config,
      cb
    ) {
      log(`sourcing challenges for the ${blockName} block`);
      return challengeMap.map(getMapForLang(lang))
        .flatMap(({
          result: { superBlocks },
          entities: {
            block: fullBlockMap,
            challenge: challengeMap
          }
        }) => {
          const requestedChallenges = pickBy(
            challengeMap,
            ch => ch.block === blockName
          );
          const entities = {
            block: {
              [blockName]: fullBlockMap[blockName]
            },
            challenge: requestedChallenges
          };
          const { challenge, block } = shapeChallenges(entities, isDev);
          return Observable.of({
            result: { superBlocks },
            entities: { challenge, block }
          });
        })
        .subscribe(
          result => cb(null, result),
          cb
        );
    }
  };
}
