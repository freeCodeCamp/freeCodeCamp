import { input, select } from '@inquirer/prompts';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getLastStep } from './get-last-step-file-number.js';

// These types cannot be created with these scripts: quizzes have their
// own block and are created with create-quiz, and exam, examDownload
// and invalid are not regular challenges. Offering them here only leads
// to a broken template (see #70987).
const excludedChallengeTypes = new Set([
  challengeTypes.quiz,
  challengeTypes.exam,
  challengeTypes.examDownload,
  challengeTypes.invalid
]);

export const getChallengeTypeChoices = () =>
  Object.entries(challengeTypes)
    .filter(([, value]) => !excludedChallengeTypes.has(value))
    .map(([key, value]) => ({
      name: key,
      value: value.toString()
    }));

export const newChallengePrompts = async (): Promise<{
  title: string;
  dashedName: string;
  challengeType: string;
}> => {
  const challengeType = await select<string>({
    message: 'What type of challenge is this?',
    choices: getChallengeTypeChoices()
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
