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
        .filter(({ entities, result }) => entities && !!result)
        .flatMap(({ entities, result })=> {
          const user = entities.user[result];
          const isNightMode = user.theme === 'night';
          const actions = [
            addUser(entities),
            updateThisUser(result),
            isNightMode ? updateTheme(user.theme) : null,
            isNightMode ? addThemeToBody(user.theme) : null
          ];
          return Observable.from(actions).filter(Boolean);
        })
        .defaultIfEmpty(showSignIn())
        .catch(createErrorObservable);
    });
}
