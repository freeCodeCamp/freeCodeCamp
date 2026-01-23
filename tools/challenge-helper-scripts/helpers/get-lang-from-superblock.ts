import {
  ChallengeLang,
  SuperBlocks,
  superBlockToSpeechLang
} from '@freecodecamp/shared/config/curriculum';

export const getLangFromSuperBlock = (
  superBlock: SuperBlocks
): ChallengeLang => {
  const lang = superBlockToSpeechLang[superBlock];
  if (!lang) {
    throw new Error(`Missing lang mapping for superBlock: ${superBlock}`);
  }
  return lang;
};
