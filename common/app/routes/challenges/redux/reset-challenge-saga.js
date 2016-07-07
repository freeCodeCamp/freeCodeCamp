import { Observable } from 'rx';
import types from './types';
import {
  updateCurrentChallenge,
  updateMain
} from './actions';

export default function resetChallengeSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => type === types.resetChallenge)
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
