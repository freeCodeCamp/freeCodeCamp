import { navigate } from 'gatsby';
import { noop } from 'lodash';
import { combineEpics } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { PostMessageIframeEvents } from '../../../utils/iframe-message';

function loadIncomingIframeMessagesEpic(action$) {
  if (typeof window !== 'undefined') {
    const handleEvent = event => {
      const { data: jsonData } = event;

      try {
        const { event: eventName, data } = JSON.parse(jsonData);
        if (eventName === PostMessageIframeEvents.IncomingUrlUpdate) {
          navigate(data.path);
        }
      } catch (e) {
        noop();
      }
    };

    window.addEventListener('message', handleEvent, false);
  }

  return action$.pipe(switchMap(() => []));
}

export default combineEpics(loadIncomingIframeMessagesEpic);
