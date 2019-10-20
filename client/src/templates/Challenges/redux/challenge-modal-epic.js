import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';

import { types, openModal } from './';

function challengeModalEpic(action$) {
  return action$.pipe(
    ofType(types.updateTests),
    switchMap(({ payload: tests }) => {
      const challengeComplete = tests.every(test => test.pass && !test.err);
      return challengeComplete ? of(openModal('completion')) : empty();
    })
  );
}

export default challengeModalEpic;
