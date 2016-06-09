import { Observable } from 'rx';
import { push } from 'react-router-redux';
import { moveToNextChallenge } from './types';
import { getNextChallenge } from '../utils';
import { updateCurrentChallenge } from './actions';
// import { createErrorObservable, makeToast } from '../../../redux/actions';

export default function nextChallengeSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => type === moveToNextChallenge)
    .flatMap(() => {
      const state = getState();
      const nextChallenge = getNextChallenge(
        state.challengesApp.challenge,
        state.entities,
        state.challengesApp.superBlocks
      );
      return Observable.of(
        updateCurrentChallenge(nextChallenge),
        push(`/challenges/${nextChallenge.dashedName}`)
      );
    });
}
