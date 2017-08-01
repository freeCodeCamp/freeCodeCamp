import { ofType } from 'redux-epic';
import {
  types,
  goToStep,
  updateUnlockedSteps,

  unlockedStepsSelector,
  currentIndexSelector
} from './';
import { submitChallenge } from '../../../redux';
import { challengeSelector } from '../../../../../redux';

function unlockStep(step, unlockedSteps) {
  if (!step) {
    return null;
  }
  const updatedSteps = [ ...unlockedSteps ];
  updatedSteps[step] = true;
  return updateUnlockedSteps(updatedSteps);
}

export default function stepChallengeEpic(actions, { getState }) {
  return actions::ofType(
    types.stepForward,
    types.stepBackward,
    types.completeAction
  )
    .map(({ type }) => {
      const state = getState();
      const { description = [] } = challengeSelector(state);
      const currentIndex = currentIndexSelector(state);
      const unlockedSteps = unlockedStepsSelector(state);
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
    })
    .filter(Boolean);
}
