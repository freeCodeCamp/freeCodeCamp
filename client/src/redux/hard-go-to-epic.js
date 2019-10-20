/* global HOME_PATH */
import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';

import { types } from './';

export default function hardGoToEpic(action$, _, { location }) {
  return action$.pipe(
    ofType(types.hardGoTo),
    tap(({ payload = HOME_PATH }) => {
      location.href = payload;
    }),
    ignoreElements()
  );
}
