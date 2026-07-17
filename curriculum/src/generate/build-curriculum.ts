import fs from 'fs';
import path from 'path';

import { getChallengesForLang } from '../get-challenges';
import { CURRICULUM_LOCALE } from '../config';
import { createParserPool } from './parser-pool';

const globalConfigPath = path.resolve(__dirname, '../../generated/');

const pool = createParserPool();

void getChallengesForLang(CURRICULUM_LOCALE, undefined, pool.parse)
  .then(JSON.stringify)
  .then(json => {
    fs.mkdirSync(globalConfigPath, { recursive: true });
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  })
  .finally(() => pool.terminate());
