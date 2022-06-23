import { navigate } from "gatsby";
import { combineEpics } from "redux-observable";
import { switchMap } from "rxjs/operators";

import { POSTMSG_IFR_EVENTS } from "../../../utils/iframe-message";

function loadIncomingIframeMessagesEpic(action$, state$) {
  if (typeof window !== 'undefined') {
    const handleEvent = (event) => {
      const { data: jsonData } = event;

      try {
        const {event: eventName, data} = JSON.parse(jsonData);
        if (eventName === POSTMSG_IFR_EVENTS.incomingUrlUpdate) {
          navigate(data.path)
        }
      } catch(e) {}
    };

    window.addEventListener('message', handleEvent, false);
  }

  return action$.pipe(switchMap(() => []));
}

export default combineEpics(loadIncomingIframeMessagesEpic);
