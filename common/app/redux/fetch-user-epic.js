import { ofType } from 'redux-epic';
import {
  types,

  fetchUserComplete,
  createErrorObservable,
  showSignIn
} from './';

export default function getUserEpic(actions, _, { services }) {
  return actions::ofType('' + types.fetchUser)
    .flatMap(() => {
      return services.readService$({ service: 'user' })
        .filter(({ entities, result }) => entities && !!result)
        .map(fetchUserComplete)
        .defaultIfEmpty(showSignIn())
        .catch(createErrorObservable);
    });
}
