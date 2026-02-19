import fs from 'fs';
import path from 'path';

import { curriculumFilter } from '../config.js';
import { buildCurriculum } from '../build-curriculum.js';

const globalConfigPath = path.resolve(__dirname, '../../generated/');

void buildCurriculum('english', curriculumFilter)
  .then(JSON.stringify)
  .then(json => {
    fs.mkdirSync(globalConfigPath, { recursive: true });
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
