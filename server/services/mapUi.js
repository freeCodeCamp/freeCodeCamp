import debug from 'debug';
import { Observable } from 'rx';

import { cachedMap } from '../utils/map';

const log = debug('fcc:services:mapUi');


export default function mapUiService(app) {
  const challengeMap = cachedMap(app.models);
  return {
    name: 'map-ui',
    read: function readMapUi(req, resource, _, config, cb) {
      return challengeMap
        .flatMap(({
          result: { superBlocks },
          entities: {
            superBlock: fullSuperBlockMap,
            block: fullBlockMap,
            challenge: fullChallengeMap
          }
        }) => {
          const superBlockMap = superBlocks
            .map(superBlock => fullSuperBlockMap[superBlock])
            .reduce((map, { dashedName, blocks, title }) => {
              map[dashedName] = { blocks, title, dashedName};
              return map;
            }, {});
          const blockMap = Object.keys(fullBlockMap)
            .map(block => fullBlockMap[block])
            .reduce(
              (map, { dashedName, title, time, challenges, superBlock }) => {
                map[dashedName] = {
                  dashedName,
                  title,
                  time,
                  challenges,
                  superBlock
                };
                return map;
              },
              {}
            );
          const challengeMap = Object.keys(fullChallengeMap)
            .map(challenge => fullChallengeMap[challenge])
            .reduce((map, challenge) => {
              const {
                dashedName,
                id,
                title,
                name,
                block,
                isLocked,
                isComingSoon,
                isBeta,
                challengeType
              } = challenge;
              map[dashedName] = {
                dashedName,
                id,
                title,
                name,
                block,
                isLocked,
                isComingSoon,
                isBeta,
                challengeType
              };
              return map;
            }, {});
          const mapUi = {
            result: { superBlocks },
            entities: {
              superBlock: superBlockMap,
              block: blockMap,
              challenge: challengeMap
            }
          };
          return Observable.of(mapUi);
        }).subscribe(
          mapUi => cb(null, mapUi ),
          err => { log(err); return cb(err); }
        );
    }
  };
}
