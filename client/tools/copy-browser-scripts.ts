import { cpSync, mkdirSync, rmSync } from 'node:fs';

import { resolve } from 'node:path';

const browserScriptDist = resolve(
  __dirname,
  '../../tools/client-plugins/browser-scripts/dist'
);

const destJsDir = resolve(__dirname, '../static/js');

// Everything is done synchronously to keep the script simple. There's no
// performance benefit to doing this asynchronously since it's already so fast.
rmSync(destJsDir, { recursive: true, force: true });
mkdirSync(destJsDir, { recursive: true });

cpSync(resolve(browserScriptDist, 'artifacts'), destJsDir, {
  recursive: true
});
