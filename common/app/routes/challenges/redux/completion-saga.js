import { Observable } from 'rx';
import types from './types';
import { showChallengeComplete, moveToNextChallenge } from './actions';
import {
  createErrorObservable,
  makeToast,
  updatePoints
} from '../../../redux/actions';

import { challengeSelector } from './selectors';
import { backEndProject } from '../../../utils/challengeTypes';
import { randomCompliment } from '../../../utils/get-words';
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
      message: isSignedIn ? ' Saving...' : 'Moving on to next challenge.',
      type: 'success'
    })
  );
  return Observable.merge(saveChallenge$, challengeCompleted$);
}

function submitModern(type, state) {
  const { tests } = state.challengesApp;
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === types.checkChallenge) {
      return Observable.of(
        showChallengeComplete()
      );
    }

    if (type === types.submitChallenge) {
      return completedChallenge(state);
    }
  }
  return Observable.just(makeToast({
    message: 'Not all tests are passing, yet.',
    title: 'Almost There!',
    type: 'info'
  }));
}

function submitProject(type, state, { solution, githubLink }) {
  const {
    challenge: { id, challengeType }
  } = challengeSelector(state);
  const {
    app: { isSignedIn, csrfToken }
  } = state;
  const body = {
    id,
    challengeType,
    solution,
    _csrf: csrfToken
  };
  if (challengeType === backEndProject) {
    body.githubLink = githubLink;
  }
  const saveChallenge$ = postJSON$('/project-completed', body)
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
    makeToast({
      title: randomCompliment(),
      message: isSignedIn ? ' Saving...' : 'Moving on to next challenge.',
      type: 'success'
    })
    // moveToNextChallenge()
  );
  return Observable.merge(saveChallenge$, challengeCompleted$);
}

function submitSimpleChallenge(type, state) {
  const {
    challenge: { id }
  } = challengeSelector(state);
  const {
    app: { isSignedIn, csrfToken }
  } = state;
  const body = {
    id,
    _csrf: csrfToken
  };
  const saveChallenge$ = postJSON$('/challenge-completed', body)
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
    makeToast({
      title: randomCompliment(),
      message: isSignedIn ? ' Saving...' : 'Moving on to next challenge.',
      type: 'success'
    })
    // moveToNextChallenge()
  );
  return Observable.merge(saveChallenge$, challengeCompleted$);
}

const submitTypes = {
  tests: submitModern,
  step: submitSimpleChallenge,
  'project.frontEnd': submitProject,
  'project.backEnd': submitProject,
  'project.simple': submitSimpleChallenge
};

export default function completionSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.checkChallenge ||
      type === types.submitChallenge
    ))
    .flatMap(({ type, payload }) => {
      const state = getState();
      const { submitType } = challengeSelector(state);
      const submitter = submitTypes[submitType] ||
        (() => Observable.just(null));
      return submitter(type, state, payload);
    });
}
