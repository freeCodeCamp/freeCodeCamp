import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { postChallengeReadyEvent } from '../../../utils/iframe-message';

import { actionTypes } from './action-types';

function loadIfrMessageChannelEpic(action$) {
  return action$.pipe(
    ofType(actionTypes.challengeMounted),
    switchMap(() => {
      postChallengeReadyEvent({ path: window.location.pathname });
      return [];
    })
  );
}

export default combineEpics(loadIfrMessageChannelEpic);
