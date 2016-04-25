import { Observable } from 'rx';
import { handleError, setUser, fetchUser } from './types';

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
        .catch(error => Observable.just({
          type: handleError,
          error
        }));
    });
}
