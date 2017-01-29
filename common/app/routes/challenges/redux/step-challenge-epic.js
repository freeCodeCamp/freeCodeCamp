import types from './types';
import { goToStep, submitChallenge, updateUnlockedSteps } from './actions';
import { challengeSelector } from './selectors';
import getActionsOfType from '../../../../utils/get-actions-of-type';

function unlockStep(step, unlockedSteps) {
  if (!step) {
    return null;
  }
  const updatedSteps = [ ...unlockedSteps ];
  updatedSteps[step] = true;
  return updateUnlockedSteps(updatedSteps);
}

export default function stepChallengeEpic(actions, getState) {
  return getActionsOfType(
    actions,
    types.stepForward,
    types.stepBackward,
    types.completeAction
  )
    .map(({ type }) => {
      const state = getState();
      const { challenge: { description = [] } } = challengeSelector(state);
      const { challengesApp: { currentIndex, unlockedSteps } } = state;
      const numOfSteps = description.length;
      const stepFwd = currentIndex + 1;
      const stepBwd = currentIndex - 1;
      const isLastStep = stepFwd >= numOfSteps;
      if (type === types.completeAction) {
        return unlockStep(currentIndex, unlockedSteps);
      }
      if (type === types.stepForward) {
        if (isLastStep) {
          return submitChallenge();
        }
        return goToStep(stepFwd, !!unlockedSteps[stepFwd]);
      }
      if (type === types.stepBackward) {
        return goToStep(stepBwd, !!unlockedSteps[stepBwd]);
      }
      return null;
    });
}
