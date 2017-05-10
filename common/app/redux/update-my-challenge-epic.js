import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import debug from 'debug';

import {
  types,

  updateMyCurrentChallenge,
  createErrorObservable,

  userSelector,
  challengeSelector
} from './';
import { postJSON$ } from '../../utils/ajax-stream';

const log = debug('fcc:app/redux/up-my-challenge-challenge-epic');
export default function updateMyCurrentChallengeEpic(actions, { getState }) {
  const updateChallenge = actions::ofType(types.updateCurrentChallenge)
    .filter(() => {
      const { username } = userSelector(getState());
      return !!username;
    })
    .distinctUntilChanged();
  const optimistic = updateChallenge.map(() => {
    const state = getState();
    const { username } = userSelector(state);
    const { id } = challengeSelector(state);
    return updateMyCurrentChallenge(username, id);
  });
  const ajaxUpdate = updateChallenge
    .debounce(250)
    .flatMapLatest(currentChallengeId => {
      const { app: { csrfToken: _csrf } } = getState();
      return postJSON$(
        '/update-my-current-challenge',
        { _csrf, currentChallengeId }
      )
        .map(({ message }) => log(message))
        .catch(createErrorObservable);
    })
    .ignoreElements();
  return Observable.merge(optimistic, ajaxUpdate);
}
