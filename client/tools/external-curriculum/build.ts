import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const CURRICULUM_PATH = '../../../curriculum/generated/curriculum.json';
// const __dirname = dirname(fileURLToPath(import.meta.url));
// Curriculum is read using fs, because it is too large for VSCode's LSP to handle type inference which causes annoying behavior.
const curriculum = JSON.parse(
  readFileSync(join(__dirname, CURRICULUM_PATH), 'utf-8')
);

import {
  buildExtCurriculumDataV1,
  Curriculum as CurriculumV1,
  CurriculumProps as CurriculumPropsV1
} from './build-external-curricula-data-v1';
import {
  buildExtCurriculumDataV2,
  Curriculum as CurriculumV2,
  CurriculumProps as CurriculumPropsV2
} from './build-external-curricula-data-v2';

const isSelectiveBuild =
  process.env.FCC_SUPERBLOCK ||
  process.env.FCC_BLOCK ||
  process.env.FCC_CHALLENGE_ID;

if (isSelectiveBuild) {
  console.log(
    'Skipping external curriculum build (selective build mode active)'
  );
} else {
  buildExtCurriculumDataV1(curriculum as CurriculumV1<CurriculumPropsV1>);
  buildExtCurriculumDataV2(curriculum as CurriculumV2<CurriculumPropsV2>);
}
