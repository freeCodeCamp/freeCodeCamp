import { of, empty } from 'rxjs';
import {
  switchMap,
  retry,
  catchError,
  concat,
  filter,
  tap
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { navigate } from 'gatsby';

import {
  backendFormValuesSelector,
  projectFormValuesSelector,
  submitComplete,
  types,
  challengeMetaSelector,
  challengeTestsSelector,
  closeModal,
  challengeFilesSelector,
  updateProjectFormValues
} from './';
import {
  userSelector,
  isSignedInSelector,
  openDonationModal,
  showDonationSelector,
  updateComplete,
  updateFailed
} from '../../../redux';

import postUpdate$ from '../utils/postUpdate$';
import { challengeTypes, submitTypes } from '../../../../utils/challengeTypes';

function postChallenge(update, username) {
  const saveChallenge = postUpdate$(update).pipe(
    retry(3),
    switchMap(({ points }) =>
      of(
        submitComplete({
          username,
          points,
          ...update.payload
        }),
        updateComplete()
      )
    ),
    catchError(() => of(updateFailed(update)))
  );
  return saveChallenge;
}

function submitModern(type, state) {
  const tests = challengeTestsSelector(state);
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === types.checkChallenge) {
      return of({ type: 'this was a check challenge' });
    }

    if (type === types.submitChallenge) {
      const { id } = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      const { username } = userSelector(state);
      const challengeInfo = {
        id,
        files
      };
      const update = {
        endpoint: '/modern-challenge-completed',
        payload: challengeInfo
      };
      return postChallenge(update, username);
    }
  }
  return empty();
}

function submitProject(type, state) {
  if (type === types.checkChallenge) {
    return empty();
  }

  const { solution, githubLink } = projectFormValuesSelector(state);
  const { id, challengeType } = challengeMetaSelector(state);
  const { username } = userSelector(state);
  const challengeInfo = { id, challengeType, solution };
  if (challengeType === challengeTypes.backEndProject) {
    challengeInfo.githubLink = githubLink;
  }

  const update = {
    endpoint: '/project-completed',
    payload: challengeInfo
  };
  return postChallenge(update, username).pipe(
    concat(of(updateProjectFormValues({})))
  );
}

function submitBackendChallenge(type, state) {
  const tests = challengeTestsSelector(state);
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === types.submitChallenge) {
      const { id } = challengeMetaSelector(state);
      const { username } = userSelector(state);
      const { solution: { value: solution } } = backendFormValuesSelector(
        state
      );
      const challengeInfo = { id, solution };

      const update = {
        endpoint: '/backend-challenge-completed',
        payload: challengeInfo
      };
      return postChallenge(update, username);
    }
  }
  return empty();
}

const submitters = {
  tests: submitModern,
  backend: submitBackendChallenge,
  'project.frontEnd': submitProject,
  'project.backEnd': submitProject
};

function shouldShowDonate(state) {
  return showDonationSelector(state) ? of(openDonationModal()) : empty();
}

export default function completionEpic(action$, state$) {
  return action$.pipe(
    ofType(types.submitChallenge),
    switchMap(({ type }) => {
      const state = state$.value;
      const meta = challengeMetaSelector(state);
      const { isDonating } = userSelector(state);
      const { nextChallengePath, introPath, challengeType } = meta;
      const showDonate = isDonating ? empty() : shouldShowDonate(state);
      const closeChallengeModal = of(closeModal('completion'));
      let submitter = () => of({ type: 'no-user-signed-in' });
      if (
        !(challengeType in submitTypes) ||
        !(submitTypes[challengeType] in submitters)
      ) {
        throw new Error(
          'Unable to find the correct submit function for challengeType ' +
            challengeType
        );
      }
      if (isSignedInSelector(state)) {
        submitter = submitters[submitTypes[challengeType]];
      }

      return submitter(type, state).pipe(
        tap(() => navigate(introPath ? introPath : nextChallengePath)),
        concat(closeChallengeModal),
        concat(showDonate),
        filter(Boolean)
      );
    })
  );
}
