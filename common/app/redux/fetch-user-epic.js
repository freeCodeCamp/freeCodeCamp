import { Observable } from 'rx';
import { ofType, combineEpics } from 'redux-epic';

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

function getOtherUserEpic(actions$, _, { services }) {
  return actions$.do(console.info)::ofType(types.fetchOtherUser.start)
    .distinctUntilChanged()
    .flatMap(({ payload: otherUser }) => {
      const params = { otherUser };
      return services.readService$({ service: 'user', params })
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
