import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  types,

  moveToNextChallenge,
  clearSavedCode,

  challengeMetaSelector,
  filesSelector,
  testsSelector
} from './';

import {
  createErrorObservable,

  challengeSelector,
  csrfSelector,
  userSelector
} from '../../../redux';
import {
  updateUserPoints,
  updateUserChallenge
} from '../../../entities';
import { backEndProject } from '../../../utils/challengeTypes.js';
import { makeToast } from '../../../Toasts/redux';
import { postJSON$ } from '../../../../utils/ajax-stream.js';

function postChallenge(url, username, _csrf, challengeInfo) {
  const body = { ...challengeInfo, _csrf };
  const saveChallenge = postJSON$(url, body)
    .retry(3)
    .flatMap(({ points, lastUpdated, completedDate }) => {
      return Observable.of(
        updateUserPoints(username, points),
        updateUserChallenge(
          username,
          { ...challengeInfo, lastUpdated, completedDate }
        ),
        clearSavedCode()
      );
    })
    .catch(createErrorObservable);
  const challengeCompleted = Observable.of(moveToNextChallenge());
  return Observable.merge(saveChallenge, challengeCompleted);
}

function submitModern(type, state) {
  const tests = testsSelector(state);
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === types.checkChallenge) {
      return Observable.empty();
    }

    if (type === types.submitChallenge) {
      const { id } = challengeSelector(state);
      const files = filesSelector(state);
      const { username } = userSelector(state);
      const csrfToken = csrfSelector(state);
      return postChallenge(
        '/modern-challenge-completed',
        username,
        csrfToken,
        { id, files }
      );
    }
  }
  return Observable.just(
    makeToast({ message: 'Keep trying.' })
  );
}

function submitProject(type, state, { solution, githubLink }) {
  const { id, challengeType } = challengeSelector(state);
  const { username } = userSelector(state);
  const csrfToken = csrfSelector(state);
  const challengeInfo = { id, challengeType, solution };
  if (challengeType === backEndProject) {
    challengeInfo.githubLink = githubLink;
  }
  return postChallenge(
    '/project-completed',
    username,
    csrfToken,
    challengeInfo
  );
}

function submitSimpleChallenge(type, state) {
  const { id } = challengeSelector(state);
  const { username } = userSelector(state);
  const csrfToken = csrfSelector(state);
  const challengeInfo = { id };
  return postChallenge(
    '/challenge-completed',
    username,
    csrfToken,
    challengeInfo
  );
}

function submitBackendChallenge(type, state, { solution }) {
  const tests = testsSelector(state);
  if (
    type === types.checkChallenge &&
    tests.length > 0 &&
    tests.every(test => test.pass && !test.err)
  ) {
    /*
    return Observable.of(
      makeToast({
        message: `${randomCompliment()} Go to your next challenge.`,
        action: 'Submit',
        actionCreator: 'submitChallenge',
        timeout: 10000
      })
    );
    */
    const { id } = challengeSelector(state);
    const { username } = userSelector(state);
    const csrfToken = csrfSelector(state);
    const challengeInfo = { id, solution };
    return postChallenge(
      '/backend-challenge-completed',
      username,
      csrfToken,
      challengeInfo
    );
  }
  return Observable.just(
    makeToast({ message: 'Keep trying.' })
  );
}

const submitters = {
  tests: submitModern,
  backend: submitBackendChallenge,
  step: submitSimpleChallenge,
  video: submitSimpleChallenge,
  quiz: submitSimpleChallenge,
  'project.frontEnd': submitProject,
  'project.backEnd': submitProject,
  'project.simple': submitSimpleChallenge
};

export default function completionEpic(actions, { getState }) {
  return actions::ofType(types.checkChallenge, types.submitChallenge)
    .flatMap(({ type, payload }) => {
      const state = getState();
      const { submitType } = challengeMetaSelector(state);
      const submitter = submitters[submitType] || (() => Observable.empty());
      return submitter(type, state, payload);
    });
}
