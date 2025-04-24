import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../../../curriculum/get-challenges';
import {
  buildExtCurriculumDataV1,
  Curriculum,
  CurriculumProps
} from './build-external-curricula-data-v1';

const globalConfigPath = path.resolve(__dirname, '../../../shared/config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
void getChallengesForLang('english')
  .then((result: Record<string, unknown>) => {
    buildExtCurriculumDataV1(result as Curriculum<CurriculumProps>);
    return result;
  })
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
