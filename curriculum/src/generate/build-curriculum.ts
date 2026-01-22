import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../get-challenges';

const globalConfigPath = path.resolve(__dirname, '../../generated/');

void getChallengesForLang('english')
  .then(JSON.stringify)
  .then(json => {
    fs.mkdirSync(globalConfigPath, { recursive: true });
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
