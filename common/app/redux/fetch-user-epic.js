import { Observable } from 'rx';
import { ofType, combineEpics } from 'redux-epic';

import { getJSON$ } from '../../utils/ajax-stream';
import {
  types,

  fetchUserComplete,
  fetchOtherUserComplete,
  createErrorObservable,
  showSignIn
} from './';
import { userFound } from '../routes/Profile/redux';

function getUserEpic(actions, _, { services }) {
  return actions::ofType('' + types.fetchUser)
    .flatMap(() => {
      return services.readService$({ service: 'user' })
        .filter(({ entities, result }) => entities && !!result)
        .map(fetchUserComplete)
        .defaultIfEmpty(showSignIn())
        .catch(createErrorObservable);
    });
}

function getOtherUserEpic(actions$) {
  return actions$::ofType(types.fetchOtherUser.start)
    .distinctUntilChanged()
    .flatMap(({ payload: otherUser }) => {
      return getJSON$(`/api/users/get-public-profile?username=${otherUser}`)
        .flatMap(response => Observable.of(
          fetchOtherUserComplete(response),
          userFound(!!response.result)
        ))
        .catch(createErrorObservable);
    });
}

export default combineEpics(
  getUserEpic,
  getOtherUserEpic
);
