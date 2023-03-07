import { navigate } from 'gatsby';
import { omit } from 'lodash-es';
import { ofType } from 'redux-observable';
import { empty, of } from 'rxjs';
import {
  catchError,
  concat,
  retry,
  switchMap,
  tap,
  mergeMap
} from 'rxjs/operators';
import { isChallenge } from '../../../utils/path-parsers';
import { challengeTypes, submitTypes } from '../../../../utils/challenge-types';
import { actionTypes as submitActionTypes } from '../../../redux/action-types';
import {
  allowBlockDonationRequests,
  submitComplete,
  updateComplete,
  updateFailed
} from '../../../redux/actions';
import { isSignedInSelector, userSelector } from '../../../redux/selectors';
import { mapFilesToChallengeFiles } from '../../../utils/ajax';
import { standardizeRequestBody } from '../../../utils/challenge-request-helpers';
import postUpdate$ from '../utils/post-update';
import { actionTypes } from './action-types';
import {
  closeModal,
  updateSolutionFormValues,
  setIsAdvancing
} from './actions';
import {
  challengeFilesSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  projectFormValuesSelector,
  isBlockNewlyCompletedSelector
} from './selectors';

function postChallenge(update, username) {
  const saveChallenge = postUpdate$(update).pipe(
    retry(3),
    switchMap(({ data }) => {
      const { savedChallenges, points } = data;
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

function submitModern(type, state) {
  const challengeType = state.challenge.challengeMeta.challengeType;
  const tests = challengeTestsSelector(state);
  if (
    challengeType === 11 ||
    challengeType === 15 ||
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

      const { nextChallengePath, challengeType, superBlock, block } =
        challengeMetaSelector(state);

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

      const pathToNavigateTo = () => {
        return findPathToNavigateTo(nextChallengePath, superBlock);
      };

      const canAllowDonationRequest = (state, action) =>
        isBlockNewlyCompletedSelector(state) &&
        action.type === submitActionTypes.submitComplete;

      return submitter(type, state).pipe(
        concat(of(setIsAdvancing(isChallenge(pathToNavigateTo())))),
        mergeMap(x =>
          canAllowDonationRequest(state, x)
            ? of(x, allowBlockDonationRequests({ superBlock, block }))
            : of(x)
        ),
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
