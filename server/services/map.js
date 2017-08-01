import { Observable } from 'rx';
import debug from 'debug';
import { unDasherize } from '../utils';
import { mapChallengeToLang, cachedMap, getMapForLang } from '../utils/map';

const isDev = process.env.NODE_ENV !== 'production';
const isBeta = !!process.env.BETA;
const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint)/i;
const log = debug('fcc:services:map');

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

function getFirstChallenge(challengeMap$) {
  return challengeMap$
    .map(({ entities: { superBlock, block, challenge }, result }) => {
      return challenge[
        block[
          superBlock[
            result[0]
          ].blocks[0]
        ].challenges[0]
      ];
    });
}

// this is a hard search
// falls back to soft search
function getChallenge(
  challengeDashedName,
  blockDashedName,
  challengeMap$,
  lang
) {
  return challengeMap$
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
        getChallengeByDashedName(challengeDashedName, challengeMap$),
        Observable.just(challenge)
      )
        .map(challenge => ({
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

function getChallengeByDashedName(dashedName, challengeMap$) {
  const challengeName = unDasherize(dashedName)
    .replace(challengesRegex, '');
  const testChallengeName = new RegExp(challengeName, 'i');
  log('looking for %s', testChallengeName);

  return challengeMap$
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
      if (challengeOrNull) {
        return Observable.just(challengeOrNull);
      }
      return getFirstChallenge(challengeMap$);
    });
}

export default function mapService(app) {
  const Block = app.models.Block;
  const challengeMap = cachedMap(Block);
  return {
    name: 'map',
    read: (req, resource, { lang, block, dashedName } = {}, config, cb) => {
      log(`${lang} language requested`);
      return Observable.if(
        () => !!dashedName,
        getChallenge(dashedName, block, challengeMap, lang),
        challengeMap.map(getMapForLang(lang))
      )
        .subscribe(results => cb(null, results), cb);
    }
  };
}
