import types from './types';
import { updateCurrentChallenge } from './actions';

export default function resetChallengeSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => type === types.resetChallenge)
    .map(() => {
      const {
        challengesApp: { challenge: dashedName },
        entities: { challenge: challengeMap }
      } = getState();
      const currentChallenge = challengeMap[dashedName];
      return updateCurrentChallenge(currentChallenge);
    });
}
