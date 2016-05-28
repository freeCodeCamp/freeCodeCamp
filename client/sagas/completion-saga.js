import { Observable } from 'rx';
import types from '../../common/app/routes/challenges/redux/types';
import { makeToast } from '../../common/app/redux/actions';

import { randomCompliment } from '../../common/app/utils/get-words';
/*
import {
  updateOutput,
  checkChallenge,
  updateTests
} from '../../common/app/routes/challenges/redux/actions';
*/

export default function completionSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.checkChallenge
    ))
    .flatMap(() => {
      const { tests } = getState().challengesApp;
      if (tests.length > 1 && tests.every(test => test.pass && !test.err)) {
        return Observable.of(
          makeToast({
            type: 'success',
            message: randomCompliment()
          })
        );
      }
      return Observable.just(null);
    });
}
