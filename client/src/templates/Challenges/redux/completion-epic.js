import { navigate } from 'gatsby';
import { omit } from 'lodash-es';
import { ofType } from 'redux-observable';
import { of, empty } from 'rxjs';
import {
  switchMap,
  retry,
  catchError,
  concat,
  filter,
  finalize
} from 'rxjs/operators';

import { challengeTypes, submitTypes } from '../../../../utils/challenge-types';
import {
  userSelector,
  isSignedInSelector,
  submitComplete,
  updateComplete,
  updateFailed
} from '../../../redux';

import postUpdate$ from '../utils/postUpdate$';
import { actionTypes } from './action-types';
import {
  projectFormValuesSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  closeModal,
  challengeFilesSelector,
  updateSolutionFormValues
} from './';

function postChallenge(update, username) {
  const saveChallenge = postUpdate$(update).pipe(
    retry(3),
    switchMap(({ points }) => {
      // TODO: do this all in ajax.ts
      const payloadWithClientProperties = {
        ...omit(update.payload, ['files'])
      };
      if (update.payload.files) {
        payloadWithClientProperties.challengeFiles = update.payload.files.map(
          ({ key, ...rest }) => ({
            ...rest,
            fileKey: key
          })
        );
      }
      return of(
        submitComplete({
          username,
          points,
          ...payloadWithClientProperties
        }),
        updateComplete()
      );
    }),
    catchError(() => of(updateFailed(update)))
  );
  return saveChallenge;
}

function submitModern(type, state) {
  const challengeType = state.challenge.challengeMeta.challengeType;
  const tests = challengeTestsSelector(state);
  if (
    challengeType === 11 ||
    (tests.length > 0 && tests.every(test => test.pass && !test.err))
  ) {
    if (type === actionTypes.checkChallenge) {
      return of({ type: 'this was a check challenge' });
    }

    if (type === actionTypes.submitChallenge) {
      const { id, block } = challengeMetaSelector(state);
      const challengeFiles = challengeFilesSelector(state);
      const { username } = userSelector(state);
      const challengeInfo = {
        id,
        challengeType
      };

      // Only send files to server, if it is a JS project or multiFile cert project
      if (
        block === 'javascript-algorithms-and-data-structures-projects' ||
        challengeType === challengeTypes.multiFileCertProject
      ) {
        challengeInfo.files = challengeFiles.reduce(
          (acc, { fileKey, ...curr }) => [...acc, { ...curr, key: fileKey }],
          []
        );
      }
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
  if (type === actionTypes.checkChallenge) {
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
    concat(of(updateSolutionFormValues({})))
  );
}

function submitBackendChallenge(type, state) {
  const tests = challengeTestsSelector(state);
  if (tests.length > 0 && tests.every(test => test.pass && !test.err)) {
    if (type === actionTypes.submitChallenge) {
      const { id } = challengeMetaSelector(state);
      const { username } = userSelector(state);
      const {
        solution: { value: solution }
      } = projectFormValuesSelector(state);
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

export default function completionEpic(action$, state$) {
  return action$.pipe(
    ofType(actionTypes.submitChallenge),
    switchMap(({ type }) => {
      const state = state$.value;
      const meta = challengeMetaSelector(state);
      const { nextChallengePath, challengeType, superBlock } = meta;
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

      const pathToNavigateTo = async () => {
        return await findPathToNavigateTo(nextChallengePath, superBlock);
      };

      return submitter(type, state).pipe(
        concat(closeChallengeModal),
        filter(Boolean),
        finalize(async () => navigate(await pathToNavigateTo()))
      );
    })
  );
}

async function findPathToNavigateTo(nextChallengePath, superBlock) {
  if (nextChallengePath.includes(superBlock)) {
    return nextChallengePath;
  } else {
    return `/learn/${superBlock}/#${superBlock}-projects`;
  }
}
