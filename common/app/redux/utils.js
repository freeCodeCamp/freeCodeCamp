import flowRight from 'lodash/flowRight';

// createNameIdMap(entities: Object) => Object
export function createNameIdMap(entities) {
  const { challenge } = entities;
  return {
    ...entities,
    challengeIdToName: Object.keys(challenge)
      .reduce((map, challengeName) => {
        map[challenge[challengeName].id] = challenge[challengeName].dashedName;
        return map;
      }, {})
  };
}

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
