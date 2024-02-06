import fs from 'fs/promises';

import curriculum from '../shared/config/curriculum.json';

interface Curriculum {
  [key: string]: unknown;
}
const typedCurriculum = curriculum as Curriculum;

for (const key in curriculum) {
  patchedCurriculum[key.replace('/', '-')] = (curriculum as Curriculum)[key];
}

void fs
  .mkdir('data', { recursive: true })
  .then(() =>
    fs.writeFile('./data/curriculum.json', JSON.stringify(patchedCurriculum))
  );
