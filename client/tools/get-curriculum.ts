import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const CURRICULUM_PATH = '../../curriculum/generated/curriculum.json';

// Curriculum is read using fs, because it is too large for VSCode's LSP to handle type inference which causes annoying behavior.
export const getCurriculum = () =>
  JSON.parse(readFileSync(join(__dirname, CURRICULUM_PATH), 'utf-8'));
