import { Observable } from 'rx';
import { push } from 'react-router-redux';
import types from './types';
import {
  showChallengeComplete,
  moveToNextChallenge,
  updateCurrentChallenge
} from './actions';
import {
  createErrorObservable,
  makeToast,
  updatePoints
} from '../../../redux/actions';

import { getNextChallenge } from '../utils';
import { challengeSelector } from './selectors';

import { postJSON$ } from '../../../../utils/ajax-stream';

function completedChallenge(state) {
  let body;
  let isSignedIn = false;
  try {
    const {
      challenge: { id }
    } = challengeSelector(state);
    const {
      app: { isSignedIn: _isSignedId, csrfToken },
      challengesApp: { files }
    } = state;
    isSignedIn = _isSignedId;
    body = {
      id,
      _csrf: csrfToken,
      files
    };
  } catch (err) {
    return createErrorObservable(err);
  }
  const saveChallenge$ = postJSON$('/modern-challenge-completed', body)
    .retry(3)
    .flatMap(({ alreadyCompleted, points }) => {
      return Observable.of(
        makeToast({
            message:
              'Challenge saved.' +
              (alreadyCompleted ? '' : ' First time Completed!'),
            title: 'Saved',
            type: 'info'
        }),
        updatePoints(points)
      );
    })
    .catch(createErrorObservable);

  const challengeCompleted$ = Observable.of(
    moveToNextChallenge(),
    makeToast({
      title: 'Congratulations!',
      message: isSignedIn ? ' Saving...' : 'Moving on to next challenge',
      type: 'success'
    })
  );
  return Observable.merge(saveChallenge$, challengeCompleted$);
}

export default function completionSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.checkChallenge ||
      type === types.submitChallenge ||
      type === types.moveToNextChallenge
    ))
    .flatMap(({ type }) => {
      const state = getState();
      const { tests } = state.challengesApp;
      if (tests.length > 1 && tests.every(test => test.pass && !test.err)) {
        if (type === types.checkChallenge) {
          return Observable.of(
            showChallengeComplete()
          );
        }

        if (type === types.submitChallenge) {
          return completedChallenge(state);
        }

        if (type === types.moveToNextChallenge) {
          const nextChallenge = getNextChallenge(
            state.challengesApp.challenge,
            state.entities,
            state.challengesApp.superBlocks
          );
          return Observable.of(
            updateCurrentChallenge(nextChallenge),
            push(`/challenges/${nextChallenge.dashedName}`)
          );
        }
      }
      return Observable.just(makeToast({
        message: 'Not all tests are passing',
        title: 'Not quite there',
        type: 'info'
      }));
    });
}
