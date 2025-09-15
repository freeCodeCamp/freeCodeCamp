import { readFileSync } from 'fs';
import { load } from 'js-yaml';

export const buildCertification = filePath => ({
  challenges: [load(readFileSync(filePath, 'utf8'))]
});
