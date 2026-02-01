import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

import { version as workerVersion } from '@freecodecamp/browser-scripts/package.json';
import { version as helperVersion } from '@freecodecamp/curriculum-helpers/package.json';

const __dirname = import.meta.dirname;

const distDir = resolve(__dirname, 'dist');

const destJsDir = resolve(distDir, './js');
const destCssDir = resolve(distDir, './css');

rmSync(distDir, { recursive: true, force: true });
mkdirSync(destJsDir, { recursive: true });
mkdirSync(destCssDir, { recursive: true });

cpSync(
  resolve(__dirname, './node_modules/sass.js/dist/sass.sync.js'),
  resolve(destJsDir, 'workers', workerVersion, 'sass.sync.js')
);
cpSync(
  resolve(__dirname, './node_modules/xterm/css/xterm.css'),
  resolve(destCssDir, 'xterm.css')
);
cpSync(
  resolve(
    __dirname,
    './node_modules/@freecodecamp/curriculum-helpers/dist/test-runner'
  ),
  resolve(destJsDir, `test-runner/${helperVersion}/`),
  { recursive: true }
);
