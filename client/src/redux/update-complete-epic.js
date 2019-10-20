import { ofType } from 'redux-observable';
import { mapTo, filter } from 'rxjs/operators';

import { types, onlineStatusChange, isOnlineSelector } from './';

export default function updateCompleteEpic(action$, state$) {
  return action$.pipe(
    ofType(types.updateComplete),
    filter(() => !isOnlineSelector(state$.value)),
    mapTo(onlineStatusChange(true))
  );
}
