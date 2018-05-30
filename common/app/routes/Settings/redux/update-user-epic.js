import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import { pick } from 'lodash';
import {
  types,
  refetchCompletedChallenges,
  updateUserBackendComplete,
  updateMyPortfolioComplete,
  updateMyProfileUIComplete
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
  optoUpdatePortfolio,
  updateLocalProfileUI
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
      Observable.of(refetchCompletedChallenges(), makeToast({ message })),
      Observable.of(makeToast({ message }))
    )
    );

  return Observable.merge(server, optimistic, complete);
}

function refetchCompletedChallengesEpic(actions$, { getState }) {
  return actions$::ofType(types.refetchCompletedChallenges.start)
    .flatMap(() => {
      const {
        app: { csrfToken: _csrf }
      } = getState();
      const username = usernameSelector(getState());
      return postJSON$('/refetch-user-completed-challenges', { _csrf })
        .map(({ completedChallenges }) =>
          updateMultipleUserFlags({ username, flags: { completedChallenges } })
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

function updateMyProfileUIEpic(action$, { getState }) {
  const toggle = action$::ofType(types.updateMyProfileUI.start);

  const server = toggle.flatMap(({payload: { profileUI }}) => {
    const state = getState();
    const { csrfToken: _csrf } = state.app;
    const username = usernameSelector(state);
    const oldUI = { ...userSelector(state).profileUI };
    return postJSON$('/update-my-profile-ui', { _csrf, profileUI })
      .map(updateMyProfileUIComplete)
      .catch(
        doActionOnError(
          () => Observable.of(
            makeToast({
              message:
                'Something went wrong saving your privacy settings, ' +
                'please try again.'
            }),
            updateLocalProfileUI({username, profileUI: oldUI })
          )
        )
      );
    });
  const optimistic = toggle.flatMap(({payload: { profileUI }}) => {
    const username = usernameSelector(getState());
    return Observable.of(updateLocalProfileUI({username, profileUI}));
  });

  return Observable.merge(server, optimistic);
}

export default combineEpics(
  backendUserUpdateEpic,
  refetchCompletedChallengesEpic,
  updateMyPortfolioEpic,
  updateUserEmailEpic,
  updateMyProfileUIEpic
);
