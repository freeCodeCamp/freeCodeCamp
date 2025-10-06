import { access as _access, constants } from 'fs';
import { resolve, join } from 'path';
import { promisify } from 'util';

import { availableLangs } from '../../shared-dist/config/i18n.js';
import { buildCurriculum } from './build-curriculum.js';

const { curriculum: curriculumLangs } = availableLangs;

const access = promisify(_access);

export async function getChallengesForLang(
  lang: string,
  filters?: {
    superBlock?: string;
    block?: string;
    challengeId?: string;
  }
) {
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not an accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);

  return buildCurriculum(lang, filters);
}

export async function hasEnglishSource(
  basePath: string,
  translationPath: string
) {
  const englishRoot = resolve(__dirname, basePath, 'english');
  return await access(join(englishRoot, translationPath), constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
