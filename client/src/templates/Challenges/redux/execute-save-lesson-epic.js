//import { ofType } from 'redux-observable';
import {of } from 'rxjs';
import { ofType } from 'redux-observable';
import {
  switchMap,
  filter
} from 'rxjs/operators';
// import {
//   tap
// } from 'rxjs/operators';

import {
  types
} from './'

// maybe create new challengetype import { backend } from '../../../../utils/challengeTypes';

function executeSaveLessonEpic(action$, sat$, { document }) {
  return of(document).pipe(
    filter(Boolean),
    switchMap(() => {
      const saveOutput = action$.pipe(
        ofType(types.executeSaveLesson),
        //debounceTime(executeDebounceTimeout),
        //filter(() => isJSEnabledSelector(state$.value)),
        switchMap(() => {
          console.log('// console output') //send barrage of console outputs
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
