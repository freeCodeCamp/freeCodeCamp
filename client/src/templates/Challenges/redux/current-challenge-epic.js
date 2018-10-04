import { of } from 'rxjs';
import { ofType } from 'redux-observable';

import { types } from './';
import { filter, switchMap, catchError, mapTo } from 'rxjs/operators';
import {
  isSignedInSelector,
  currentChallengeIdSelector,
  updateComplete,
  updateFailed
} from '../../../redux';
import postUpdate$ from '../utils/postUpdate$';

function currentChallengeEpic(action$, state$) {
  return action$.pipe(
    ofType(types.challengeMounted),
    filter(() => isSignedInSelector(state$.value)),
    filter(
      ({ payload }) => payload !== currentChallengeIdSelector(state$.value)
    ),
    switchMap(({ payload }) => {
      const update = {
        endpoint: '/update-my-current-challenge',
        payload: {
          currentChallengeId: payload
        }
      };
      return postUpdate$(update).pipe(
        mapTo(updateComplete()),
        catchError(() => of(updateFailed(update)))
      );
    })
  );
}

export default currentChallengeEpic;
