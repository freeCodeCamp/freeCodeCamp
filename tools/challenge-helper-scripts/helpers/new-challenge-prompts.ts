import { select, input } from '@inquirer/prompts';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getLastStep } from './get-last-step-file-number.js';

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
}> => {
  const challengeType = await select({
    message: 'What type of challenge is this?',
    choices: Object.entries(challengeTypes).map(([key, value]) => ({
      name: key,
      value: String(value)
    }))
  });

  const lastStep = getLastStep().stepNum;
  const defaultTitle = `Step ${lastStep + 1}`;
  const defaultDashedName = `step-${lastStep + 1}`;

  const rawDashedName = await input({
    message: 'What is the dashed name (in kebab-case) for this challenge?',
    validate: (block: string) => {
      const normalized = block.toLowerCase();
      if (!normalized.length) {
        return 'please enter a dashed name';
      }
      if (/[^a-z0-9-]/.test(normalized)) {
        return 'please use alphanumerical characters and kebab case';
      }
      return true;
    },
    default: defaultDashedName
  });
  const dashedName = rawDashedName.toLowerCase();

  const title = await input({
    message: 'What is the title of this challenge?',
    default: defaultTitle
  });

  return {
    title,
    dashedName,
    challengeType
  };
};
