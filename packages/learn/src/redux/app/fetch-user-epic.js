/* global HOME_PATH */
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { ofType } from 'redux-observable';
import {
  types,
  fetchUserComplete,
  fetchUserError,
  noUserFound,
  hardGoTo
} from './';
import {
  switchMap,
  filter,
  map,
  catchError,
  defaultIfEmpty,
  mapTo
} from 'rxjs/operators';
import { jwt } from '../cookieVaules';

function fetchUserEpic(action$, _, { services }) {
  const fetchUser = action$.pipe(
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
        defaultIfEmpty(noUserFound()),
        catchError(() => {
          return of(fetchUserError());
        })
      );
    })
  );
  const isLoadingRequired = action$.pipe(
    ofType(types.fetchUser),
    filter(() => !jwt),
    mapTo(noUserFound())
  );

  return merge(fetchUser, isLoadingRequired);
}

export default fetchUserEpic;
