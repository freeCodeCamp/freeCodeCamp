import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  backendFormValuesSelector,
  frontendProjectFormValuesSelector,
  backendProjectFormValuesSelector,
  challengeMetaSelector,
  moveToNextChallenge,
  submitChallengeComplete,
  testsSelector,
  types,
  closeChallengeModal
} from './';

import {
  challengeSelector,
  createErrorObservable,
  csrfSelector,
  userSelector
} from '../../../redux';
import { filesSelector } from '../../../files';
import { backEndProject } from '../../../utils/challengeTypes.js';
import { makeToast } from '../../../Toasts/redux';
import { postJSON$ } from '../../../../utils/ajax-stream.js';

function postChallenge(url, username, _csrf, challengeInfo) {
  return Observable.if(
    () => !!username,
    Observable.defer(() => {
      const body = { ...challengeInfo, _csrf };
      const saveChallenge = postJSON$(url, body)
        .retry(3)
        .map(({ points, lastUpdated, completedDate }) =>
          submitChallengeComplete(
            username,
            points,
            { ...challengeInfo, lastUpdated, completedDate }
          )
        )
        .catch(createErrorObservable);
      const challengeCompleted = Observable.of(moveToNextChallenge());
      return Observable.merge(saveChallenge, challengeCompleted)
        .startWith({ type: types.submitChallenge.start });
    }),
    Observable.of(moveToNextChallenge())
  );
}

function submitModern(type, state) {
  const tests = testsSelector(state);
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === types.checkChallenge) {
      return Observable.empty();
    }

    if (type === types.submitChallenge.toString()) {
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

function submitProject(type, state) {
  if (type === types.checkChallenge) {
    return Observable.empty();
  }
  const {
    solution: frontEndSolution = ''
  } = frontendProjectFormValuesSelector(state);
  const {
    solution: backendSolution = '',
    githubLink = ''
  } = backendProjectFormValuesSelector(state);
  const solution = frontEndSolution ? frontEndSolution : backendSolution;
  const { id, challengeType } = challengeSelector(state);
  const { username } = userSelector(state);
  const csrfToken = csrfSelector(state);
  const challengeInfo = { id, challengeType, solution };
  if (challengeType === backEndProject) {
    challengeInfo.githubLink = githubLink;
  }
  return Observable.merge(
    postChallenge(
      '/project-completed',
      username,
      csrfToken,
      challengeInfo
    ),
    Observable.of(
      closeChallengeModal()
    )
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

function submitBackendChallenge(type, state) {
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
    return Observable.empty();
  }
  if (type === types.submitChallenge.toString()) {
    const { id } = challengeSelector(state);
    const { username } = userSelector(state);
    const csrfToken = csrfSelector(state);
    const { solution } = backendFormValuesSelector(state);
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
  'project.backEnd': submitProject
};

export default function completionEpic(actions, { getState }) {
  return actions::ofType(types.checkChallenge, types.submitChallenge.toString())
    .flatMap(({ type, payload }) => {
      const state = getState();
      const { submitType } = challengeMetaSelector(state);
      const submitter = submitters[submitType] || (() => Observable.empty());
      return submitter(type, state, payload);
    });
}
