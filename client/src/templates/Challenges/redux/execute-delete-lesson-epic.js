import {of } from 'rxjs';
import { ofType } from 'redux-observable';
import {
  switchMap,
  ignoreElements,
  catchError
} from 'rxjs/operators';

import {
  types,
  disableJSOnError
} from './'

function executeDeleteLessonEpic(action$, state$, { document }) {
  return of(document).pipe(
    switchMap(() => {
      const deleteOutput = action$.pipe(
        ofType(types.executeDeleteLesson),
        switchMap(() => {
          console.log('deleting')
          localStorage.removeItem(state$.value.challenge.challengeMeta.id)
        }),
        catchError(err => {
          console.error(err);
          return of(disableJSOnError(err));
        })
      );
      return deleteOutput;
    })
  );
}

export default executeDeleteLessonEpic;
