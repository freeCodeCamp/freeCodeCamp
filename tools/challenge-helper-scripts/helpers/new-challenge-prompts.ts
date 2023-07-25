import { prompt } from 'inquirer';
import { challengeTypes } from '../../../config/challenge-types';

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
}> => {
  const dashedName = await prompt<{ value: string }>({
    name: 'value',
    message: 'What is the short name (in kebab-case) for this challenge?',
    validate: (block: string) => {
      if (!block.length) {
        return 'please enter a short name';
      }
      if (/[^a-z0-9-]/.test(block)) {
        return 'please use alphanumerical characters and kebab case';
      }
      return true;
    },
    filter: (block: string) => {
      return block.toLowerCase();
    }
  });
  const title = await prompt<{ value: string }>({
    name: 'value',
    message: 'What is the title of this challenge?',
    default: (title: { value: string }) => title.value
  });
  const challengeType = await prompt<{ value: string }>({
    name: 'value',
    message: 'What type of challenge is this?',
    type: 'list',
    choices: Object.entries(challengeTypes).map(([key, value]) => ({
      name: key,
      value
    }))
  });

  return {
    title: title.value,
    dashedName: dashedName.value,
    challengeType: challengeType.value
  };
};
