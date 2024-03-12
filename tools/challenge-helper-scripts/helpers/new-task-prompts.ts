import { prompt } from 'inquirer';
import { challengeTypes } from '../../../shared/config/challenge-types';

const taskChallenges = [
  challengeTypes.multipleChoice,
  challengeTypes.fillInTheBlank
];

export const newTaskPrompts = async (
  newTaskNumber: number
): Promise<{
  title: string;
  dashedName: string;
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
    title: `Task ${newTaskNumber}`,
    dashedName: `task-${newTaskNumber}`,
    challengeType: challengeType.value
  };
};
