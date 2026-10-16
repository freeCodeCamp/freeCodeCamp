import { input, select } from '@inquirer/prompts';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getLastStep } from './get-last-step-file-number.js';

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
  questionCount?: number;
}> => {
  const challengeType = await select<string>({
    message: 'What type of challenge is this?',
    choices: Object.entries(challengeTypes).map(([key, value]) => ({
      name: key,
      value: value.toString()
    }))
  });

  // The quiz template needs to know how many questions to scaffold
  const questionCount =
    challengeType === challengeTypes.quiz.toString()
      ? await select<number>({
          message: 'Should this quiz have either ten or twenty questions?',
          default: 20,
          choices: [
            { name: '20 questions', value: 20 },
            { name: '10 questions', value: 10 }
          ]
        })
      : undefined;

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
    challengeType,
    ...(questionCount !== undefined && { questionCount })
  };
};
