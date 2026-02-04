import { cpSync, mkdirSync, rmSync } from 'node:fs';

import { resolve } from 'node:path';

const browserScriptDist = resolve(
  __dirname,
  '../../tools/client-plugins/browser-scripts/dist'
);

const destJsDir = resolve(__dirname, '../static/js');
const srcJsDir = resolve(browserScriptDist, './js');
const destCssDir = resolve(__dirname, '../static/css');
const srcCssDir = resolve(browserScriptDist, './css');

// Everything is done synchronously to keep the script simple. There's no
// performance benefit to doing this asynchronously since it's already so fast.
rmSync(destJsDir, { recursive: true, force: true });
rmSync(destCssDir, { recursive: true, force: true });
mkdirSync(destJsDir, { recursive: true });
mkdirSync(destCssDir, { recursive: true });

cpSync(srcJsDir, destJsDir, {
  recursive: true
});
cpSync(srcCssDir, destCssDir, {
  recursive: true
});
