import { Observable } from 'rx';
import types from './types';
import {
  addUser,
  updateThisUser,
  createErrorObservable,
  showSignIn,
  updateTheme,
  addThemeToBody
} from './actions';

const { fetchUser } = types;
export default function getUserSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === fetchUser)
    .flatMap(() => {
      return services.readService$({ service: 'user' })
        .flatMap(({ entities, result })=> {
          if (!entities || !result) {
            return Observable.just(showSignIn());
          }
          const user = entities.user[result];
          const isNightMode = user.theme === 'night';
          return Observable.of(
            addUser(entities),
            updateThisUser(result),
            isNightMode ? updateTheme(user.theme) : null,
            isNightMode ? addThemeToBody(user.theme) : null
          );
        })
        .catch(createErrorObservable);
    });
}
