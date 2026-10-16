import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

import browserScripts from '@freecodecamp/browser-scripts/package.json';
import curriculumHelpers from '@freecodecamp/curriculum-helpers/package.json';

const __dirname = import.meta.dirname;

const distDir = resolve(__dirname, 'dist');

const destJsDir = resolve(distDir, './js');

rmSync(distDir, { recursive: true, force: true });
mkdirSync(destJsDir, { recursive: true });

cpSync(
  resolve(__dirname, './node_modules/sass.js/dist/sass.sync.js'),
  resolve(destJsDir, 'workers', browserScripts.version, 'sass.sync.js')
);
cpSync(
  resolve(
    __dirname,
    './node_modules/@freecodecamp/curriculum-helpers/dist/test-runner'
  ),
  resolve(destJsDir, `test-runner/${curriculumHelpers.version}/`),
  { recursive: true }
);
