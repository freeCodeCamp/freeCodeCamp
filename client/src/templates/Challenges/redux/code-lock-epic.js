import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { types, unlockCode } from './';

function codeLockEpic(action$) {
  return action$.pipe(
    ofType(types.updateFile),
    map(unlockCode)
  );
}

export default codeLockEpic;
