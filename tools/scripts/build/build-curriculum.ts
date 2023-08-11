import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../../../curriculum/get-challenges';
import {
  availableLanguages,
  buildExtCurriculumData,
  Curriculum,
  CurriculumProps
} from './build-external-curricula-data';

const { CURRICULUM_LOCALE } = process.env;

const globalConfigPath = path.resolve(__dirname, '../../../config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
void getChallengesForLang('english')
  .then((result: Record<string, unknown>) => {
    if (CURRICULUM_LOCALE === 'english') {
      for (const lang of availableLanguages) {
        buildExtCurriculumData(
          'v2',
          result as Curriculum<CurriculumProps>,
          lang
        );
      }
    }
    return result;
  })
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
