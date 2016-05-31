import { setUser, fetchUser } from './types';
import { createErrorObservable } from './actions';

export default function getUserSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === fetchUser)
    .flatMap(() => {
      return services.readService$({ service: 'user' })
        .map(user => {
          return {
            type: setUser,
            payload: user
          };
        })
        .catch(createErrorObservable);
    });
}
