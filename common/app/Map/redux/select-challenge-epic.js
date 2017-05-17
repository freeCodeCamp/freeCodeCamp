import { ofType } from 'redux-epic';

import { types } from './';
import { updateCurrentChallenge } from '../../redux';

export default function selectChallengeEpic(actions) {
  return actions::ofType(types.clickOnChallenge)
    .pluck('payload')
    .map(updateCurrentChallenge);
}
