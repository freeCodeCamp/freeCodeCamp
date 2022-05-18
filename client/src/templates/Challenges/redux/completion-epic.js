/* eslint-disable no-unused-vars */
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

import {
  challengeTypes,
  isProject,
  submitTypes
} from '../../../../utils/challenge-types';
import {
  userSelector,
  isSignedInSelector,
  submitComplete,
  updateComplete,
  updateFailed
} from '../../../redux';

import postUpdate$ from '../utils/post-update';
import { mapFilesToChallengeFiles } from '../../../utils/ajax';
import { standardizeRequestBody } from '../../../utils/challenge-request-helpers';
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
    switchMap(({ points, savedChallenges }) => {
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
          submittedChallenge: {
            username,
            points,
            ...payloadWithClientProperties
          },
          savedChallenges: mapFilesToChallengeFiles(savedChallenges)
        }),
        updateComplete()
      );
    }),
    catchError(() => of(updateFailed(update)))
  );
  return saveChallenge;
}

/**
 * Handles all the non-certification challenge submissions
 * @param {*} type
 * @param {*} state
 */
function submitChallenges(type, state) {}

function submitProject(type, state) {
  const { username } = userSelector(state);
  // TODO: get projectData for payload
  const challengeBody = {};
  const update = {
    endpoint: '/project-completed',
    payload: challengeBody
  };

  // TODO: There should be no parsing occuring in the below function.
  // At this point, the `update` should be what the server expects,
  // and `postChallenge` should just handle the post request and response.
  return postChallenge(update, username).pipe(
    concat(of(updateSolutionFormValues({})))
  );
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

      let body;
      if (
        block === 'javascript-algorithms-and-data-structures-projects' ||
        challengeType === challengeTypes.multifileCertProject
      ) {
        body = standardizeRequestBody({ id, challengeType, challengeFiles });
      } else {
        body = {
          id,
          challengeType
        };
      }

      const update = {
        endpoint: '/modern-challenge-completed',
        payload: body
      };
      return postChallenge(update, username);
    }
  }
  return empty();
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

export default function completionEpic(action$, state$) {
  return action$.pipe(
    ofType(actionTypes.submitChallenge),
    switchMap(({ type }) => {
      const state = state$.value;
      const meta = challengeMetaSelector(state);
      const { nextChallengePath, challengeType, superBlock } = meta;
      const closeChallengeModal = of(closeModal('completion'));

      let submitter = () => of({ type: 'no-user-signed-in' });

      if (isSignedInSelector(state)) {
        if (isProject(challengeType)) {
          submitter = submitProject;
        } else {
          submitter = submitChallenges;
        }
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
