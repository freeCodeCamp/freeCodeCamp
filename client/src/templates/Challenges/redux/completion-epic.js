import { navigate } from 'gatsby';
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

import store from 'store';
import { isProject } from '../../../../../utils/challenge-types';
import {
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
  closeModal,
  challengeFilesSelector
} from './';

function postChallenge(update) {
  const saveChallenge = postUpdate$(update).pipe(
    retry(3),
    switchMap(({ points, savedChallenges, completedChallenges }) => {
      // clear store only on success not on error
      store.set('completed-challenges', []);
      return of(
        submitComplete({
          points,
          completedChallenges,
          savedChallenges: mapFilesToChallengeFiles(savedChallenges)
        }),
        updateComplete()
      );
    }),
    catchError(() => of(updateFailed(update)))
  );
  return saveChallenge;
}

function batchSubmitter(type, state) {
  if (type === actionTypes.submitChallenge) {
    const completedChallenges = store.get('completed-challenges', []);
    const { id, challengeType } = challengeMetaSelector(state);
    const completedChallenge = {
      id,
      challengeType
    };
    const completedChallengeAlreadyInStore = completedChallenges.some(
      challenge => challenge.id === id
    );
    if (completedChallengeAlreadyInStore) {
      completedChallenges.push(completedChallenge);
      store.set('completed-challenges', completedChallenges);
    }
    if (completedChallenges.length >= 5) {
      return submitChallenges();
    }
  }
  return empty();
}

/**
 * Handles all the non-certification challenge submissions
 */
function submitChallenges() {
  const completedChallenges = store.get('completed-challenges', []);
  const update = {
    endpoint: '/challenges-completed',
    payload: completedChallenges
  };
  // TODO: Only clear store on success from server
  store.set('completed-challenges', []);
  return postChallenge(update);
}

function submitProject(_type, state) {
  const challengeType = state.challenge.challengeMeta.challengeType;
  const { id } = challengeMetaSelector(state);
  const { solution, githubLink } = projectFormValuesSelector(state);
  const challengeFiles = challengeFilesSelector(state);
  // Handle all different project types:
  const challengeBody = standardizeRequestBody({
    challengeType,
    id,
    solution,
    githubLink,
    challengeFiles
  });
  const update = {
    endpoint: '/project-completed',
    payload: challengeBody
  };

  return postChallenge(update);
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
          submitter = batchSubmitter;
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

/*
1. Camper clicks "Run Tests"
2. Tests are run
3. If tests pass, "Submit" button is enabled
4. If tests fail, "Run Tests" button is enabled
5. Camper clicks "Submit"
6. Challenge gets checked through batch-epic
7. Challenge is set as completed in local state
8. Once batch is complete, request is sent to server
*/
