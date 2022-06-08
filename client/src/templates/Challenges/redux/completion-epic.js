import { navigate } from 'gatsby';
import { ofType } from 'redux-observable';
import { of, empty } from 'rxjs';
import { switchMap, retry, catchError, concat, tap } from 'rxjs/operators';

import store from 'store';
import { isProject } from '../../../../utils/challenge-types';
import {
  isSignedInSelector,
  submitComplete,
  updateComplete,
  updateFailed
} from '../../../redux';

import postUpdate$ from '../utils/post-update';
import { mapFilesToChallengeFiles } from '../../../utils/ajax';
import { standardizeRequestBody } from '../../../utils/challenge-request-helpers';
import { actionTypes as submitActionTypes } from '../../../redux/action-types';
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
    switchMap(({ data }) => {
      const { savedChallenges, points, completedChallenges } = data;
      // clear store only on success not on error, and only when the update is/was a challenge
      if (update.endpoint === '/challenges-completed') {
        store.set('completed-challenges', []);
      }
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
      const { nextChallengePath, challengeType, superBlock, block } = meta;

      let submitter = () => of({ type: 'no-user-signed-in' });

      if (isSignedInSelector(state)) {
        if (
          isProject(challengeType) ||
          block === 'javascript-algorithms-and-data-structures-projects'
        ) {
          submitter = submitProject;
        } else {
          submitter = batchSubmitter;
        }
      }

      const pathToNavigateTo = () => {
        return findPathToNavigateTo(nextChallengePath, superBlock);
      };

      return submitter(type, state).pipe(
        tap(res => {
          if (res.type !== submitActionTypes.updateFailed) {
            navigate(pathToNavigateTo());
          }
        }),
        concat(of(closeModal('completion')))
      );
    })
  );
}

function findPathToNavigateTo(nextChallengePath, superBlock) {
  if (nextChallengePath.includes(superBlock)) {
    return nextChallengePath;
  } else {
    return `/learn/${superBlock}/#${superBlock}-projects`;
  }
}
