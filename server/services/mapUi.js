import debug from 'debug';
import { Observable } from 'rx';

import { cachedMap, getMapForLang } from '../utils/map';

const log = debug('fcc:services:mapUi');

export default function mapUiService(app) {
  const challengeMap = cachedMap(app.models);
  return {
    name: 'map-ui',
    read: function readMapUi(req, resource, { lang = 'en' } = {}, config, cb) {
      log(`generating mapUi for ${lang}`);
      return challengeMap.map(getMapForLang(lang))
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
            .reduce((map, { dashedName, title, time, challenges }) => {
              map[dashedName] = { dashedName, title, time, challenges };
              return map;
            }, {});
          const challengeMap = Object.keys(fullChallengeMap)
            .map(challenge => fullChallengeMap[challenge])
            .reduce((map, { dashedName, name, id}) => {
              map[dashedName] = {name, dashedName, id};
              return map;
            }, {});

          return Observable.of({
            result: { superBlocks },
            entities: {
              superBlock: superBlockMap,
              block: blockMap,
              challenge: challengeMap
            }
          });
        }).subscribe(
          mapUi => cb(null, mapUi ),
          err => { log(err); return cb(err); }
        );
    }
  };
}
