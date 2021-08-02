import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';

import { actionTypes } from './action-types';

export default function hardGoToEpic(action$, _, { location }) {
  return action$.pipe(
    ofType(actionTypes.hardGoTo),
    tap(({ payload }) => {
      location.href = payload;
    }),
    ignoreElements()
  );
}
