import i18next from 'i18next';
import { SuperBlocks } from '../../../shared/config/curriculum';

// these are keys from i18n translations.json files
enum SuperBlockI18nKeys {
  Certification = 'learn.cert-map-estimates.certs'
}

// the key above is used to create the last word for superBlock titles used on
// the map and window. e.g. 'Certification' in Responsive Web Design
// Certification
const superBlocksWithoutLastWord = [
  SuperBlocks.RespWebDesign,
  SuperBlocks.CodingInterviewPrep,
  SuperBlocks.TheOdinProject,
  SuperBlocks.ProjectEuler,
  SuperBlocks.PythonForEverybody,
  SuperBlocks.RosettaCode
];

export function getSuperBlockTitleForMap(superBlock: SuperBlocks): string {
  const i18nSuperBlock = i18next.t(`intro:${superBlock}.title`);

  return superBlocksWithoutLastWord.includes(superBlock)
    ? i18nSuperBlock
    : i18next.t([SuperBlockI18nKeys.Certification], {
        title: i18nSuperBlock
      });
}
