//import { ofType } from 'redux-observable';
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

// maybe create new challengetype import { backend } from '../../../../utils/challengeTypes';

function executeSaveLessonEpic(action$, state$, { document }) {
  return of(document).pipe(
    switchMap(() => {
      const saveOutput = action$.pipe(
        ofType(types.executeSaveLesson),
        //debounceTime(executeDebounceTimeout),
        //filter(() => isJSEnabledSelector(state$.value)),
        switchMap(() => {
          console.log('// console output') //send console outputs
          localStorage.setItem(state$.value.challenge.challengeMeta.id,
            state$.value.challenge.challengeFiles.indexhtml.contents)

        }),
        catchError(err => {
          console.error(err);
          return of(disableJSOnError(err));
        })
      );
      return saveOutput;
    })
  );
}
//   return of(document).pipe(
//     logsToConsole('// console output')
//   );
// }

export default executeSaveLessonEpic;
