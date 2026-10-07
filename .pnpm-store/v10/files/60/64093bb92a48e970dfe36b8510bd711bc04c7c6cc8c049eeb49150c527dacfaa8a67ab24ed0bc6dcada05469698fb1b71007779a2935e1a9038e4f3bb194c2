'use strict';

const { spawnSync } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');

const files = readdirSync(__dirname).sort();
for (const filename of files) {
  if (filename.startsWith('test-')) {
    const path = join(__dirname, filename);
    console.log(`> Running ${filename} ...`);
    const result = spawnSync(`${process.argv0} ${path}`, {
      shell: true,
      stdio: 'inherit',
      windowsHide: true
    });
    if (result.status !== 0)
      process.exitCode = 1;
  }
}
