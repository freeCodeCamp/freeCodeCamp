import { prompt } from 'inquirer';
import { ChallengeLang } from '../../../shared-dist/config/curriculum.js';
import { challengeTypes } from '../../../shared-dist/config/challenge-types.js';

export const getInputType = async (
  challengeType: string,
  challengeLang?: string
): Promise<string | undefined> => {
  const isRequired =
    parseInt(challengeType) === challengeTypes.fillInTheBlank &&
    challengeLang === ChallengeLang.Chinese;

  if (!isRequired) {
    return;
  }

  const inputType = await prompt<{ value: string }>({
    name: 'value',
    message: 'What input type is challenge using?',
    type: 'list',
    choices: ['pinyin-tone', 'pinyin-to-hanzi']
  });

  return inputType.value;
};
