import { ofType } from 'redux-observable';
import { createAction } from 'redux-actions';
import { map } from 'rxjs/operators';
import { actionTypes } from './action-types';

const unlockCode = createAction(actionTypes.unlockCode);

function codeLockEpic(action$) {
  return action$.pipe(ofType(actionTypes.updateFile), map(unlockCode));
}

export default codeLockEpic;
