import { _if } from 'rxjs/observable/if';
import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';

import { types } from './';
import { filter, switchMap, catchError, mapTo } from 'rxjs/operators';
import {
  isSignedInSelector,
  currentChallengeIdSelector,
  updateComplete,
  updateFailed,
  isOnlineSelector
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
      return _if(
        () => isOnlineSelector(getState()),
        postUpdate$(update).pipe(mapTo(updateComplete())),
        of(updateFailed(update))
      );
    }),
    catchError(({ _body, _endpoint }) => {
      let payload = _body;
      if (typeof _body === 'string') {
        payload = JSON.parse(_body);
      }
      return of(updateFailed({ endpoint: _endpoint, payload }));
    })
  );
}

export default currentChallengeEpic;
