import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';

import { types } from './';
import { filter, switchMap, catchError, mapTo } from 'rxjs/operators';
import {
  isSignedInSelector,
  currentChallengeIdSelector,
  updateComplete,
  updateFailed
} from '../../../redux/app';
import postUpdate$ from '../utils/postUpdate$';

function currentChallengeEpic(action$, { getState }) {
  return action$.pipe(
    ofType(types.challengeMounted),
    filter(() => isSignedInSelector(getState())),
    filter(({ payload }) => payload !== currentChallengeIdSelector(getState())),
    switchMap(({ payload }) => {
      const update = {
        endpoint: '/external/update-my-current-challenge',
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
