import { ofType } from 'redux-observable';
import { mapTo, filter } from 'rxjs/operators';

import { actionTypes as types } from './action-types';
import { serverStatusChange, isServerOnlineSelector } from './';

export default function updateCompleteEpic(action$, state$) {
  return action$.pipe(
    ofType(types.updateComplete),
    filter(() => !isServerOnlineSelector(state$.value)),
    mapTo(serverStatusChange(true))
  );
}
