import { combineEpics, ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

import { iframeMessage } from "../../../utils/iframe-message";

import { actionTypes } from './action-types';
import { challengeMetaSelector } from ".";

function loadIfrMessageChannelEpic(action$, state$) {
  return action$.pipe(
    ofType(actionTypes.challengeMounted),
    switchMap(() => {
      const { block, certification } = challengeMetaSelector(state$.value);
      iframeMessage('fcc:challenge:ready', {
        block,
        certification,
        path: window.location.pathname,
      });
      return []
    })
  );
}

export default combineEpics(loadIfrMessageChannelEpic);
