import { Observable } from 'rx';

import { types } from './actions';
import combineSagas from '../../../utils/combine-sagas';
import { makeToast } from '../../../toasts/redux/actions';
import {
  updateUserFlag,
  updateUserEmail,
  updateUserLang,
  doActionOnError
} from '../../../redux/actions';
import { postJSON$ } from '../../../../utils/ajax-stream';
import langs from '../../../../utils/supported-languages';

const urlMap = {
  isLocked: 'lockdown',
  sendQuincyEmail: 'quincy-email',
  sendNotificationEmail: 'notification-email',
  sendMonthlyEmail: 'announcement-email'
};

export function updateUserEmailSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => type === types.updateMyEmail)
    .flatMap(({ payload: email }) => {
      const {
        app: { user: username, csrfToken: _csrf },
        entities: { user: userMap }
      } = getState();
      const { email: oldEmail } = userMap[username] || {};
      const body = { _csrf, email };
      const optimisticUpdate$ = Observable.just(
        updateUserEmail(username, email)
      );
      const ajaxUpdate$ = postJSON$('/update-my-email', body)
        .map(({ message }) => makeToast({ message }))
        .catch(doActionOnError(() => oldEmail ?
          updateUserFlag(username, oldEmail) :
          null
        ));
      return Observable.merge(optimisticUpdate$, ajaxUpdate$);
    });
}

export function updateUserLangSaga(actions$, getState) {
  const updateLang$ = actions$
    .filter(({ type, payload }) => (
      type === types.updateMyLang && !!langs[payload]
    ))
    .map(({ payload }) => payload);
  const ajaxUpdate$ = updateLang$
    .flatMap(lang => {
      const {
        app: { user: username, csrfToken: _csrf },
        entities: { user: userMap }
      } = getState();
      const { languageTag: oldLang } = userMap[username] || {};
      const body = {
        _csrf,
        lang
      };
      return postJSON$('/update-my-lang', body)
        .map(({ message }) => makeToast({ message }))
        .catch(doActionOnError(() => {
          return updateUserLang(username, oldLang);
        }));
    });
  const optimistic$ = updateLang$
    .map(lang => {
      const { app: { user: username } } = getState();
      return updateUserLang(username, lang);
    });
  return Observable.merge(ajaxUpdate$, optimistic$);
}
export function updateUserFlagSaga(actions$, getState) {
  const toggleFlag$ = actions$
    .filter(({ type, payload }) => type === types.toggleUserFlag && payload)
    .map(({ payload }) => payload);
  const optimistic$ = toggleFlag$.map(flag => {
    const { app: { user: username } } = getState();
    return updateUserFlag(username, flag);
  });
  const serverUpdate$ = toggleFlag$
    .debounce(500)
    .flatMap(flag => {
      const url = `/toggle-${urlMap[ flag ]}`;
      const {
        app: { user: username, csrfToken: _csrf },
        entities: { user: userMap }
      } = getState();
      const user = userMap[username];
      const currentValue = user[ flag ];
      return postJSON$(url, { _csrf })
        .map(({ flag, value }) => {
          if (currentValue === value) {
            return null;
          }
          return updateUserFlag(username, flag);
        })
        .catch(doActionOnError(() => {
          return updateUserFlag(username, currentValue);
        }));
    });
  return Observable.merge(optimistic$, serverUpdate$);
}

export default combineSagas(
  updateUserFlagSaga,
  updateUserEmailSaga,
  updateUserLangSaga
);
