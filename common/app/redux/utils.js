import flowRight from 'lodash/flowRight';
import createNameIdMap from '../../utils/create-name-id-map.js';


export function filterComingSoonBetaChallenge(
  isDev = false,
  { isComingSoon, isBeta }
) {
  return !(isComingSoon || isBeta) ||
    isDev;
}

export function filterComingSoonBetaFromEntities(
  { challenge: challengeMap, ...rest },
  isDev = false
) {
  const filter = filterComingSoonBetaChallenge.bind(null, isDev);
  return {
    ...rest,
    challenge: Object.keys(challengeMap)
      .map(dashedName => challengeMap[dashedName])
      .filter(filter)
      .reduce((challengeMap, challenge) => {
        challengeMap[challenge.dashedName] = challenge;
        return challengeMap;
      }, {})
  };
}

export const shapeChallenges = flowRight(
  filterComingSoonBetaFromEntities,
  createNameIdMap
);
