import { select } from '@inquirer/prompts';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

const taskChallenges = [
  challengeTypes.multipleChoice,
  challengeTypes.fillInTheBlank,
  challengeTypes.generic
];

export const newTaskPrompts = async (): Promise<{
  challengeType: string;
}> => {
  const challengeType = await select({
    message: 'What type of task challenge is this?',
    choices: Object.entries(challengeTypes)
      .filter(entry => taskChallenges.includes(entry[1]))
      .map(([key, value]) => ({
        name: key,
        value: String(value)
      }))
  });

  return {
    challengeType
  };
};
