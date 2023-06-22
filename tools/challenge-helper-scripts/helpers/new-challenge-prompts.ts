import { prompt } from 'inquirer';
import { challengeTypes } from '../../../client/utils/challenge-types';

export const newChallengePrompts = async (): Promise<{
  name: string;
  title: string;
  challengeType: string;
}> => {
  const dashedName = await prompt({
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
  const title = await prompt({
    name: 'value',
    message: 'What is the title of this challenge?',
    default: (title: { value: string }) => title.value
  });
  const challengeType = (await prompt({
    name: 'value',
    message: 'What type of challenge is this?',
    type: 'list',
    choices: Object.entries(challengeTypes).map(([key, value]) => ({
      name: key,
      value
    }))
  })) as { value: string };

  return {
    title: String(title.value),
    dashedName: String(dashedName.value),
    challengeType: String(challengeType.value)
  };
};
