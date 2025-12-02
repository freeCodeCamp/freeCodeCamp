import { prompt } from 'inquirer';
import { challengeTypes } from '../../../shared-dist/config/challenge-types.js';

const taskChallenges = [
  challengeTypes.multipleChoice,
  challengeTypes.fillInTheBlank,
  challengeTypes.generic
];

export const newTaskPrompts = async (): Promise<{
  challengeType: string;
}> => {
  const challengeType = await prompt<{ value: string }>({
    name: 'value',
    message: 'What type of task challenge is this?',
    type: 'list',
    choices: Object.entries(challengeTypes)
      .filter(entry => taskChallenges.includes(entry[1]))
      .map(([key, value]) => ({
        name: key,
        value
      }))
  });

  return {
    challengeType: challengeType.value
  };
};
