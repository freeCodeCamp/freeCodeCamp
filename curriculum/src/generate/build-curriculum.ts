import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../get-challenges';
import { CURRICULUM_LOCALE } from '../config';

const globalConfigPath = path.resolve(__dirname, '../../generated/');

void getChallengesForLang(CURRICULUM_LOCALE)
  .then(JSON.stringify)
  .then(json => {
    fs.mkdirSync(globalConfigPath, { recursive: true });
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
