import fs from 'fs/promises';

import curriculum from '../shared/config/curriculum.json';

interface Curriculum {
  [key: string]: unknown;
}
const typedCurriculum = curriculum as Curriculum;

const patchedCurriculum = Object.keys(typedCurriculum).reduce((acc, key) => {
  return { ...acc, [key.replace(/\//g, '-')]: typedCurriculum[key] };
}, {});

void fs
  .mkdir('data', { recursive: true })
  .then(() =>
    fs.writeFile('./data/curriculum.json', JSON.stringify(patchedCurriculum))
  );
