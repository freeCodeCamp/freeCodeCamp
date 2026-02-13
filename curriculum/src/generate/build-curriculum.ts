import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../get-challenges';
import assert from 'assert';

const globalConfigPath = path.resolve(__dirname, '../../generated/');

const curriculumLocale = process.env.CURRICULUM_LOCALE;

assert(
  curriculumLocale,
  'CURRICULUM_LOCALE environment variable is required to build curriculum'
);

void getChallengesForLang(curriculumLocale)
  .then(JSON.stringify)
  .then(json => {
    fs.mkdirSync(globalConfigPath, { recursive: true });
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
