import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../../../curriculum/src/get-challenges';
import {
  buildExtCurriculumDataV1,
  type Curriculum as CurriculumV1,
  type CurriculumProps as CurriculumPropsV1
} from './build-external-curricula-data-v1';
import {
  buildExtCurriculumDataV2,
  type Curriculum as CurriculumV2,
  type CurriculumProps as CurriculumPropsV2
} from './build-external-curricula-data-v2';

const globalConfigPath = path.resolve(__dirname, '../../../shared-dist/config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
void getChallengesForLang('english')
  .then(result => {
    buildExtCurriculumDataV1(
      result as unknown as CurriculumV1<CurriculumPropsV1>
    );
    buildExtCurriculumDataV2(
      result as unknown as CurriculumV2<CurriculumPropsV2>
    );
    return result;
  })
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
