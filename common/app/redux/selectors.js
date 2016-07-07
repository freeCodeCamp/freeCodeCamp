import { createSelector } from 'reselect';

export const userSelector = createSelector(
  state => state.app.user,
  state => state.entities.user,
  (username, userMap) => ({
    user: userMap[username] || {}
  })
);

export const firstChallengeSelector = createSelector(
  state => state.entities.challenge,
  state => state.entities.block,
  state => state.entities.superBlock,
  state => state.challengesApp.superBlocks,
  (challengeMap, blockMap, superBlockMap, superBlocks) => {
    if (
      !challengeMap ||
      !blockMap ||
      !superBlockMap ||
      !superBlocks
    ) {
      return {};
    }
    try {
      return challengeMap[
        blockMap[
          superBlockMap[
            superBlocks[0]
          ].blocks[0]
        ].challenges[0]
      ];
    } catch (err) {
      console.error(err);
      return {};
    }
  }
);
