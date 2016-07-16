import { Observable } from 'rx';
import { types } from './actions';
import { postJSON$ } from '../../../../utils/ajax-stream';
import { updateUserFlag, createErrorObservable } from '../../../redux/actions';

const urlMap = {
  isLocked: 'lockdown',
  sendQuincyEmail: 'quincy-email',
  sendNotificationEmail: 'notification-email',
  sendMonthlyEmail: 'announcement-email'
};
export default function userUpdateSaga(actions$, getState) {
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
        .catch(createErrorObservable);
    });
  return Observable.merge(optimistic$, serverUpdate$);
}
