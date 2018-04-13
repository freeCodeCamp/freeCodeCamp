import { ajax } from 'rxjs/observable/dom/ajax';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { switchMap } from 'rxjs/operators/switchMap';
import { ofType } from 'redux-observable';

import { types, signInComplete, signInError } from './';

export default function signInEpic(action$, _, { window }) {
  return action$.pipe(
    ofType(types.signIn),
    switchMap(({ payload }) => {
      const request = {
        url: 'http://localhost:3000/passwordless-auth',
        method: 'POST',
        body: { email: payload, return: window.location.origin }
      };

      return ajax(request).pipe(
        map(resp => {
          console.log('RES', resp);
          return signInComplete();
        }),
        catchError(e => {
          console.warn(e);
          return signInError(e);
        })
      );
    })
  );
}
