import { input, select } from '@inquirer/prompts';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getLastStep } from './get-last-step-file-number.js';

// Quizzes and exams have their own blocks and are created with
// create-new-project, so they can't be added to an existing block here.
const excludedChallengeTypes = new Set([
  'quiz',
  'exam',
  'examDownload',
  'invalid'
]);

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
}> => {
  const challengeType = await select<string>({
    message: 'What type of challenge is this?',
    choices: Object.entries(challengeTypes)
      .filter(([key]) => !excludedChallengeTypes.has(key))
      .map(([key, value]) => ({
        name: key,
        value: value.toString()
      }))
  });

  const lastStep = getLastStep().stepNum;
  const defaultTitle = `Step ${lastStep + 1}`;
  const defaultDashedName = `step-${lastStep + 1}`;

  const dashedName = await input({
    message: 'What is the dashed name (in kebab-case) for this challenge?',
    default: defaultDashedName,
    validate: (block: string) => {
      if (!block.length) {
        return 'please enter a dashed name';
      }
      if (/[^a-z0-9-]/.test(block)) {
        return 'please use alphanumerical characters and kebab case';
      }
      return true;
    },
    transformer: (block: string) => block.toLowerCase()
  });
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
