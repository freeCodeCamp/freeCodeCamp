import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import {
  types,

  addUser,
  updateThisUser,
  createErrorObservable,
  showSignIn,
  updateTheme,
  addThemeToBody
} from './';

export default function getUserEpic(actions, { getState }, { services }) {
  return actions::ofType(types.fetchUser)
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
