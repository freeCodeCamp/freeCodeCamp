import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../get-challenges';

const globalConfigPath = path.resolve(__dirname, '../../../shared-dist/config');

void getChallengesForLang('english')
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
