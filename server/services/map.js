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
function getChallengeAndBlock(
  challengeDashedName,
  blockDashedName,
  challengeMap$,
  lang
) {
  return challengeMap$
    .flatMap(({ entities }) => {
      const block = entities.block[blockDashedName];
      const challenge = entities.challenge[challengeDashedName];
      if (
        !block ||
        !challenge ||
        !loadComingSoonOrBetaChallenge(challenge)
      ) {
        return getChallengeByDashedName(
          challengeDashedName,
          challengeMap$,
          lang
        );
      }
      return Observable.just({
        redirect: block.dashedName !== blockDashedName ?
          `/challenges/${block.dashedName}/${challenge.dashedName}` :
          false,
        entities: {
          challenge: {
            [challenge.dashedName]: mapChallengeToLang(challenge, lang)
          }
        },
        result: {
          block: block.dashedName,
          challenge: challenge.dashedName
        }
      });
    });
}

function getChallengeByDashedName(dashedName, challengeMap$, lang) {
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
    })
    .map(challenge => ({
      redirect:
        `/challenges/${challenge.block}/${challenge.dashedName}`,
      entities: {
        challenge: {
          [challenge.dashedName]: mapChallengeToLang(challenge, lang)
        }
      },
      result: {
        challenge: challenge.dashedName,
        block: challenge.block
      }
    }));
}

export default function mapService(app) {
  const Block = app.models.Block;
  const challengeMap$ = cachedMap(Block);
  return {
    name: 'map',
    read: (req, resource, { lang, block, dashedName } = {}, config, cb) => {
      log(`${lang} language requested`);
      if (block && dashedName) {
        return getChallengeAndBlock(dashedName, block, challengeMap$, lang)
          .subscribe(challenge => cb(null, challenge), cb);
      }
      if (dashedName) {
        return getChallengeByDashedName(dashedName, challengeMap$, lang)
          .subscribe(challenge => cb(null, challenge), cb);
      }
      return challengeMap$
        .map(getMapForLang(lang))
        .subscribe(map => cb(null, map), cb);
    }
  };
}
