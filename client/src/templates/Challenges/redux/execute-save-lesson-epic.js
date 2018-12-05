//import { ofType } from 'redux-observable';
import { ofType} from 'redux-observable';
import { of } from 'rxjs';
import {
  startWith,
  switchMap
} from 'rxjs/operators';

import {
  types,
} from './'


function executeSaveLessonEpic(action$, state$, { document }) {
  return action$.pipe(
    ofType(types.executeSaveLesson),
    switchMap(() => {
      console.log('// console output') //send console outputs
      localStorage.setItem(state$.value.challenge.challengeMeta.id,
        state$.value.challenge.challengeFiles.indexhtml.contents)
      return of()
    })
  );
}

export default executeSaveLessonEpic;
