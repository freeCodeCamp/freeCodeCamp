import { Observable } from 'rx';
import { handleError, setUser, fetchUser } from './types';

export default ({ services }) => ({ dispatch }) => next => {
  return function getUserSaga(action) {
    if (action.type !== fetchUser) {
      return next(action);
    }

    return services.readService$({ service: 'user' })
      .map(({
        username,
        picture,
        progressTimestamps = [],
        isFrontEndCert,
        isBackEndCert,
        isFullStackCert
      }) => {
        return {
          type: setUser,
          payload: {
            username,
            picture,
            points: progressTimestamps.length,
            isFrontEndCert,
            isBackEndCert,
            isFullStackCert,
            isSignedIn: true
          }
        };
      })
      .catch(error => Observable.just({
        type: handleError,
        error
      }))
      .doOnNext(dispatch);
  };
};

