import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  fetchMessagesComplete,
  fetchMessagesError
} from './';
import { types as app } from '../../redux';
import { getJSON$ } from '../../../utils/ajax-stream.js';

export default function getMessagesEpic(actions) {
  return actions::ofType(app.appMounted)
    .flatMap(() => getJSON$('/api/users/get-messages')
      .map(fetchMessagesComplete)
      .catch(err => Observable.of(fetchMessagesError(err)))
    );
}
