import types from './types';
import { goToStep, submitChallenge } from './actions';
import { challengeSelector } from './selectors';
import getActionsOfType from '../../../../utils/get-actions-of-type';

export default function stepChallengeEpic(actions, getState) {
  return getActionsOfType(
    actions,
    types.stepForward,
    types.stepBackward
  )
    .map(({ type }) => {
      const state = getState();
      const { challenge: { description = [] } } = challengeSelector(state);
      const { challengesApp: { currentIndex } } = state;
      const numOfSteps = description.length;
      const isLastStep = currentIndex + 1 >= numOfSteps;
      if (type === types.stepForward) {
        if (isLastStep) {
          return submitChallenge();
        }
        return goToStep(currentIndex + 1);
      }
      return goToStep(currentIndex - 1);
    });
}
