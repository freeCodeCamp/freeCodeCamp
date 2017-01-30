import flowRight from 'lodash/flowRight';
import { createNameIdMap } from '../../utils/map.js';

export function filterComingSoonBetaChallenge(
  isDev = false,
  { isComingSoon, isBeta }
) {
  return !(isComingSoon || isBeta) ||
    isDev;
}

export function filterComingSoonBetaFromEntities(
  { challenge: challengeMap, block: blockMap, ...rest },
  isDev = false
) {
  const filter = filterComingSoonBetaChallenge.bind(null, isDev);
  return {
    ...rest,
    block: Object.keys(blockMap)
      .map(dashedName => {
        const block = blockMap[dashedName];

        const filteredChallenges = block.challenges
          .map(dashedName => challengeMap[dashedName])
          .filter(filter)
          .map(challenge => challenge.dashedName);

        return {
          ...block,
          challenges: [ ...filteredChallenges ]
        };
      })
      .reduce((blockMap, block) => {
        blockMap[block.dashedName] = block;
        return blockMap;
      }, {}),
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
  entities => ({
    ...entities,
    ...createNameIdMap(entities)
  })
);
