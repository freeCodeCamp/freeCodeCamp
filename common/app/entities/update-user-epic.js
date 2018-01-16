import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import _ from 'lodash';

import {
  types,
  updateUserBackendError,
  updateUserBackendComplete
} from './user';
import { makeToast } from '../Toasts/redux';
import {
  fetchChallenges,
  fetchUser,
  doActionOnError,
  userSelector
} from '../redux';
import { postJSON$ } from '../../utils/ajax-stream';

const endpoints = {
  email: '/update-my-email',
  languageTag: '/update-my-lang',
  portfolio: '/update-my-portfolio',
  theme: '/update-my-theme'
};

function backendUserUpdateEpic(actions$, { getState }) {
  const start = actions$::ofType(types.updateUserBackend.start)
    .flatMap(({ payload }) => {
      const userMap = userSelector(getState());
      const flagsToCheck = Object.keys(payload);
      const valuesToCheck = _.pick(userMap, flagsToCheck);
      const valuesToUpdate = flagsToCheck.reduce((accu, current) => {
        if (payload[current] !== valuesToCheck[current]) {
          return { ...accu, [current]: payload[current] };
        }
        return accu;
      }, {});
      if (!Object.keys(valuesToUpdate).length) {
        return Observable.of(
          makeToast({ message: 'No changes in settings detected' })
        );
      }
      const {
        app: { csrfToken: _csrf }
      } = getState();
      let body = { _csrf };
      let endpoint = '/update-multiple-flags';
      const updateKeys = Object.keys(valuesToUpdate);
      if (updateKeys.length === 1 && updateKeys[0] in endpoints) {
        // there is a specific route for this update
        const flag = updateKeys[0];
        endpoint = endpoints[flag];
        body = {
          ...body,
          [flag]: valuesToUpdate[flag]
        };
      } else if (updateKeys.length === 1) {
        // no specific route, and only one flag to update
        const flag = updateKeys[0];
        endpoint = '/update-flag';
        body = {
          ...body,
          flag,
          newValue: valuesToUpdate[flag]
        };
      } else {
        // multiple flags to update
        body = {
          ...body,
          values: valuesToUpdate
        };
      }
      console.info(endpoint, body);
      return postJSON$(endpoint, body)
        .map((result) => updateUserBackendComplete(result))
        .catch(doActionOnError(error => updateUserBackendError(error)));
    });

    const complete = actions$::ofType(types.updateUserBackend.complete)
      .flatMap(({ meta: { message, flag } }) => {
        if (flag === 'languageTag') {
          return Observable.of(
            fetchChallenges(),
            fetchUser(),
            makeToast({ message })
          );
        }
        return Observable.of(fetchUser(), makeToast({ message }));
      });

    const error = actions$::ofType(types.updateUserBackend.error)
    .flatMap(error => {
      console.log(error);
      return Observable.of({
        type: 'error',
        error: { message: 'Something went wrong updating your account' }
      });
    });

  return Observable.merge(start, complete, error).filter(Boolean);
}

export default backendUserUpdateEpic;
