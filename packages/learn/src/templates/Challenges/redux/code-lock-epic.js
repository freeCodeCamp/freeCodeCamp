import { map } from 'rxjs/operators/map';
import { ofType } from 'redux-observable';
import { types, unlockCode } from './';

function codeLockEpic(action$) {
  return action$.pipe(ofType(types.executeChallenge), map(unlockCode));
}

export default codeLockEpic;
