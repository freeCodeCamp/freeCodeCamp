import { select } from '@inquirer/prompts';
import { ChallengeLang } from '@freecodecamp/shared/config/curriculum';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

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

  return select({
    message: 'What input type is challenge using?',
    choices: ['pinyin-tone', 'pinyin-to-hanzi']
  });
};
