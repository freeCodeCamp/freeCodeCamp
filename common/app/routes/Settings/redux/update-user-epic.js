import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import { pick } from 'lodash';
import {
  types,
  refetchChallengeMap,
  updateUserBackendComplete,
  updateMyPortfolioComplete
} from './';
import { makeToast } from '../../../Toasts/redux';
import {
  doActionOnError,
  usernameSelector,
  userSelector,
  createErrorObservable
} from '../../../redux';
import {
  updateUserEmail,
  updateMultipleUserFlags,
  regresPortfolio,
  optoUpdatePortfolio
} from '../../../entities';

import { postJSON$ } from '../../../../utils/ajax-stream';

const endpoints = {
  email: '/update-my-email',
  projects: '/update-my-projects',
  username: '/update-my-username'
};

function backendUserUpdateEpic(actions$, { getState }) {
  const start = actions$::ofType(types.updateUserBackend.start);
  const server = start
    .flatMap(({ payload }) => {
      const userMap = userSelector(getState());
      const { username } = userMap;
      const flagsToCheck = Object.keys(payload);
      const valuesToCheck = pick(userMap, flagsToCheck);
      const oldValues = {
        ...flagsToCheck.reduce((accu, current) => ({ ...accu, [current]: '' })),
        ...valuesToCheck
      };
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
      let endpoint = '/update-flags';
      const updateKeys = Object.keys(valuesToUpdate);
      if (updateKeys.length === 1 && updateKeys[0] in endpoints) {
        // there is a specific route for this update
        const flag = updateKeys[0];
        endpoint = endpoints[flag];
        body = {
          ...body,
          [flag]: valuesToUpdate[flag]
        };
      } else {
        body = {
          ...body,
          values: valuesToUpdate
        };
      }
      return postJSON$(endpoint, body)
        .map(updateUserBackendComplete)
        .catch(
          doActionOnError(
            () => updateMultipleUserFlags({ username, flags: oldValues })
          )
        );
    });
  const optimistic = start
    .flatMap(({ payload }) => {
      const username = usernameSelector(getState());
      return Observable.of(
        updateMultipleUserFlags({ username, flags: payload })
      );
    });
    const complete = actions$::ofType(types.updateUserBackend.complete)
    .flatMap(({ payload: { message } }) => Observable.if(
      () => message.includes('project'),
      Observable.of(refetchChallengeMap(), makeToast({ message })),
      Observable.of(makeToast({ message }))
    )
    );

  return Observable.merge(server, optimistic, complete);
}

function refetchChallengeMapEpic(actions$, { getState }) {
  return actions$::ofType(types.refetchChallengeMap.start)
    .flatMap(() => {
      const {
        app: { csrfToken: _csrf }
      } = getState();
      const username = usernameSelector(getState());
      return postJSON$('/refetch-user-challenge-map', { _csrf })
        .map(({ challengeMap }) =>
          updateMultipleUserFlags({ username, flags: { challengeMap } })
        )
        .catch(createErrorObservable);
    });
}

function updateMyPortfolioEpic(actions$, { getState }) {
  const edit = actions$::ofType(types.updateMyPortfolio.start);
  const remove = actions$::ofType(types.deletePortfolio.start);
  const serverEdit = edit
    .flatMap(({ payload }) => {
      const { id } = payload;
      const {
        app: { csrfToken: _csrf, username }
      } = getState();
      return postJSON$('/update-my-portfolio', { _csrf, portfolio: payload })
        .map(updateMyPortfolioComplete)
        .catch(doActionOnError(() => regresPortfolio({ username, id })));
    });
  const optimisticEdit = edit
    .map(({ payload }) => {
      const username = usernameSelector(getState());
      return optoUpdatePortfolio({ username, portfolio: payload });
    });
  const complete = actions$::ofType(types.updateMyPortfolio.complete)
  .flatMap(({ payload: { message } }) =>
    Observable.of(makeToast({ message }))
  );

  const serverRemove = remove
    .flatMap(({ payload: { portfolio } }) => {
      const {
        app: { csrfToken: _csrf }
      } = getState();
      return postJSON$('/update-my-portfolio', { _csrf, portfolio })
        .map(updateMyPortfolioComplete)
        .catch(
          doActionOnError(
            () => makeToast({
              message: 'Something went wrong removing a portfolio item.'
            })
          )
        );
    });
    const optimisticRemove = remove
      .flatMap(({ payload: { portfolio: { id } } }) => {
        const username = usernameSelector(getState());
        return Observable.of(regresPortfolio({ username, id }));
      });

  return Observable.merge(
    serverEdit,
    optimisticEdit,
    complete,
    serverRemove,
    optimisticRemove
  );
}

function updateUserEmailEpic(actions, { getState }) {
  return actions::ofType(types.updateMyEmail)
    .flatMap(({ payload: email }) => {
      const {
        app: { user: username, csrfToken: _csrf },
        entities: { user: userMap }
      } = getState();
      const { email: oldEmail } = userMap[username] || {};
      const body = { _csrf, email };
      const optimisticUpdate = Observable.just(
        updateUserEmail(username, email)
      );
      const ajaxUpdate = postJSON$('/update-my-email', body)
        .catch(doActionOnError(() => oldEmail ?
          updateUserEmail(username, oldEmail) :
          null
        ))
        .filter(Boolean);
      return Observable.merge(optimisticUpdate, ajaxUpdate);
    });
}

export default combineEpics(
  backendUserUpdateEpic,
  refetchChallengeMapEpic,
  updateMyPortfolioEpic,
  updateUserEmailEpic
);
