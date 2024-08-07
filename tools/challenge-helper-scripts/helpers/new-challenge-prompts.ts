import { prompt } from 'inquirer';
import { challengeTypes } from '../../../shared/config/challenge-types';
import { getLastStep } from './get-last-step-file-number';

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
}> => {
  const challengeType = await prompt<{ value: string }>({
    name: 'value',
    message: 'What type of challenge is this?',
    type: 'list',
    choices: Object.entries(challengeTypes).map(([key, value]) => ({
      name: key,
      value
    }))
  });

  const lastStep = getLastStep().stepNum;
  const defaultTitle = `Step ${lastStep + 1}`;
  const defaultDashedName = `step-${lastStep + 1}`;

  const dashedName = await prompt<{ value: string }>({
    name: 'value',
    message: 'What is the dashed name (in kebab-case) for this challenge?',
    validate: (block: string) => {
      if (!block.length) {
        return 'please enter a dashed name';
      }
      if (/[^a-z0-9-]/.test(block)) {
        return 'please use alphanumerical characters and kebab case';
      }
      return true;
    },
    filter: (block: string) => {
      return block.toLowerCase();
    },
    default: defaultDashedName
  });
  const title = await prompt<{ value: string }>({
    name: 'value',
    message: 'What is the title of this challenge?',
    default: defaultTitle
  });

  return {
    title: title.value,
    dashedName: dashedName.value,
    challengeType: challengeType.value
  };
};
