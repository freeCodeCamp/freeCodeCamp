import {
  ChallengeLang,
  SuperBlocks,
  superBlockToLang
} from '../../../shared/config/curriculum';

export const getLangFromSuperBlock = (
  superBlock: SuperBlocks
): ChallengeLang => {
  const lang = superBlockToLang[superBlock];
  if (!lang) {
    throw new Error(`Missing lang mapping for superBlock: ${superBlock}`);
  }
  return lang;
};
