import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../../../curriculum/getChallenges';
import { buildMobileCurriculum, Curriculum } from './build-mobile-curriculum';
import { buildExtCurriculumData } from './build-external-curricula-data';

const { CURRICULUM_LOCALE } = process.env;

const globalConfigPath = path.resolve(__dirname, '../../../config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
getChallengesForLang('english')
  .then((result: Record<string, unknown>) => {
    if (CURRICULUM_LOCALE === 'english') {
      buildMobileCurriculum(result as Curriculum);
      buildExtCurriculumData('v1', result as Curriculum);
    }
    return result;
  })
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  })
  .catch(error => {
    console.log(error);
  });
