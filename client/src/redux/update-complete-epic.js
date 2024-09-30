import { ofType } from 'redux-observable';
import { filter, mapTo } from 'rxjs/operators';

import { actionTypes as types } from './action-types';
import { serverStatusChange } from './actions';
import { isServerOnlineSelector } from './selectors';

export default function updateCompleteEpic(action$, state$) {
  return action$.pipe(
    ofType(types.updateComplete),
    filter(() => !isServerOnlineSelector(state$.value)),
    mapTo(serverStatusChange(true))
  );
}
