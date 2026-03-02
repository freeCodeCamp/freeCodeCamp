import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';

import { actionTypes } from './action-types';

// The third argument contains dependencies, see createEpicMiddleware
export default function hardGoToEpic(action$, _, { window }) {
  return action$.pipe(
    ofType(actionTypes.hardGoTo),
    tap(({ payload }) => {
      window.location.href = payload;
    }),
    ignoreElements()
  );
}
