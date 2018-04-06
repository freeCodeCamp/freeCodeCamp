import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

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
