import debug from 'debug';
import { pickBy } from 'lodash';
import { Observable } from 'rx';

import { cachedMap, getChallenge } from '../utils/map';
import { shapeChallenges } from '../../common/app/redux/utils';

const log = debug('fcc:services:challenge');
const isDev = debug.enabled('fcc:*');

export default function getChallengesForBlock(app) {
  const challengeMap = cachedMap(app.models);
  return {
    name: 'challenge',
    read: function readChallengesForBlock(
        req,
        resource,
        { dashedName, blockName} = {},
        config,
        cb
      ) {
      const getChallengeBlock$ = challengeMap
        .flatMap(({
          result: { superBlocks },
          entities: {
            block: fullBlockMap,
            challenge: challengeMap
          }
        }) => {
          log(`sourcing challenges for the ${blockName} block`);
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
        });
      return Observable.if(
        () => !!dashedName,
        getChallenge(dashedName, blockName, challengeMap, 'en'),
        getChallengeBlock$
      )
        .subscribe(
          result => cb(null, result),
          cb
        );
    }
  };
}
