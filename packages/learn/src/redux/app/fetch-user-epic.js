/* global HOME_PATH */
import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';
import { types, fetchUserComplete, hardGoTo } from './';
import {
  switchMap,
  filter,
  map,
  catchError,
  defaultIfEmpty
} from 'rxjs/operators';
import { jwt } from '../cookieVaules';

function fetchUserEpic(action$, _, { services }) {
  return action$.pipe(
    ofType(types.fetchUser),
    filter(() => !!jwt),
    switchMap(() => {
      return services.readService$({ service: 'user' }).pipe(
        filter(({ entities, result }) => entities && !!result),
        map(response => {
          const { entities: { user }, result } = response;
          if (!user[result].emailVerified) {
            return hardGoTo(HOME_PATH);
          }
          return fetchUserComplete(response);
        }),
        defaultIfEmpty({ type: 'no-user' }),
        catchError(err => {
          console.log(err);
          return of({ type: 'fetch-user-error' });
        })
      );
    })
  );
}

export default fetchUserEpic;
