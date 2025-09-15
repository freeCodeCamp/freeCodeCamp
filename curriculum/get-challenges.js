import { access as _access, constants } from 'fs';
import { resolve, join } from 'path';
import { promisify } from 'util';

import { availableLangs } from '../shared-dist/config/i18n';
import { buildCurriculum } from './build-curriculum';

const { curriculum: curriculumLangs } = availableLangs;

const access = promisify(_access);

export async function getChallengesForLang(lang, filters) {
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not an accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);

  return buildCurriculum(lang, filters);
}

export async function hasEnglishSource(basePath, translationPath) {
  const englishRoot = resolve(__dirname, basePath, 'english');
  return await access(join(englishRoot, translationPath), constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
