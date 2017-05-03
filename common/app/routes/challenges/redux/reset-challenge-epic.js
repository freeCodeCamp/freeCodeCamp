import { Observable } from 'rx';
import {
  types,

  updateCurrentChallenge,
  updateMain
} from './';

export default function resetChallengeEpic(actions, { getState }) {
  return actions.ofType(types.resetChallenge)
    .flatMap(() => {
      const {
        challengesApp: { challenge: dashedName },
        entities: { challenge: challengeMap }
      } = getState();
      const currentChallenge = challengeMap[dashedName];
      return Observable.of(
        updateCurrentChallenge(currentChallenge),
        updateMain()
      );
    });
}
