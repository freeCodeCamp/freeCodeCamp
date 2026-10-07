// This is a build script, so some logging is desirable as it allows
// us to follow the code path that triggered the error.
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const process = require('process');

const binaries = require('./binaries.js');

const build = path.resolve(__dirname, '..', 'lib');

if (!fs.existsSync(build)) {
  fs.mkdirSync(build, { recursive: true });
}

const source = path.join(__dirname, '..', 'build', 'Release', 'sentry_cpu_profiler.node');
const target = path.join(__dirname, '..', 'lib', binaries.getModuleName());

if (!fs.existsSync(source)) {
  console.log('Source file does not exist:', source);
  process.exit(1);
} else {
  if (fs.existsSync(target)) {
    console.log('Target file already exists, overwriting it');
  }
  console.log('Renaming', source, 'to', target);
  fs.renameSync(source, target);
}
