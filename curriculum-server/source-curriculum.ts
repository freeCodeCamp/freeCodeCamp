import fs from 'fs/promises';

import curriculum from '../config/curriculum.json';

interface Curriculum {
  [key: string]: unknown;
}

const curriculumList = Object.keys(curriculum as Curriculum).map(key => {
  if (key === '2022/responsive-web-design') {
    return { '2022-responsive-web-design': (curriculum as Curriculum)[key] };
  } else {
    return { [key]: (curriculum as Curriculum)[key] };
  }
});

const patchedCurriculum = curriculumList.reduce((prev, curr) => {
  return { ...prev, ...curr };
}, {});

void fs
  .mkdir('data', { recursive: true })
  .then(() =>
    fs.writeFile('./data/curriculum.json', JSON.stringify(patchedCurriculum))
  );
