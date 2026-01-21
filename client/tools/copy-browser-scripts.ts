import { cpSync, mkdirSync, rmSync } from 'node:fs';

import { resolve } from 'node:path';

const browserScriptDist = resolve(
  __dirname,
  '../../tools/client-plugins/browser-scripts/dist'
);

const destConfigDir = resolve(__dirname, '../config/browser-scripts');
const destArtifactsDir = resolve(__dirname, '../static/js');

// Everything is done synchronously to keep the script simple. There's no
// performance benefit to doing this asynchronously since it's already so fast.
rmSync(destConfigDir, { recursive: true, force: true });
rmSync(destArtifactsDir, { recursive: true, force: true });
mkdirSync(destConfigDir, { recursive: true });
mkdirSync(destArtifactsDir, { recursive: true });

cpSync(resolve(browserScriptDist, 'config'), destConfigDir, {
  recursive: true
});

cpSync(resolve(browserScriptDist, 'artifacts'), destArtifactsDir, {
  recursive: true
});
