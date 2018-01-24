import { Observable } from 'rx';
import debug from 'debug';
import {
  cachedMap,
  getChallenge,
  getMapForLang
} from '../utils/map';

const log = debug('fcc:services:map');

export default function mapService(app) {
  const challengeMap = cachedMap(app.models);
  return {
    name: 'map',
    read: (req, resource, { block, dashedName } = {}, config, cb) => {
      const { user: { languageTag: lang } } = req;
      log(`${lang} language requested`);
      return Observable.if(
        () => !!dashedName,
        getChallenge(dashedName, block, challengeMap, lang),
        challengeMap.map(getMapForLang(lang))
      )
        .subscribe(
          results => cb(null, results),
          err => { log(err); cb(err); }
        );
    }
  };
}
