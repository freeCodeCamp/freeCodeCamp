import {
  SuperBlocks,
  languageSuperBlocks,
  superBlockToSpeechLang
} from '@freecodecamp/shared/config/curriculum';

interface ChallengeContentLangProps {
  dir?: 'auto';
  lang?: string;
}

/**
 * Direction props for content written in the language a curriculum teaches,
 * which need not match the UI. Bidi-neutral punctuation otherwise takes the
 * page direction and lands on the wrong end of the sentence.
 */
export function getChallengeContentLangProps(
  superBlock?: SuperBlocks | string
): ChallengeContentLangProps {
  const languageSuperBlock = languageSuperBlocks.find(
    slug => slug === superBlock
  );
  if (!languageSuperBlock) return {};

  return { dir: 'auto', lang: superBlockToSpeechLang[languageSuperBlock] };
}
