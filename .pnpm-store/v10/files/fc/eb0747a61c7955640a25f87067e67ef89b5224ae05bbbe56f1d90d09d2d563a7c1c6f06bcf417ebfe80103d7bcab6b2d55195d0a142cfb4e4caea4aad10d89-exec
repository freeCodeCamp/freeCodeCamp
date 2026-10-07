#!/usr/bin/env node

'use strict';

var spawnSync = require('child_process').spawnSync;
var libc = require('../');

var spawnOptions = {
  env: process.env,
  shell: true,
  stdio: 'inherit'
};

if (libc.isNonGlibcLinux) {
  spawnOptions.env.LIBC = process.env.LIBC || libc.family;
}

process.exit(spawnSync(process.argv[2], process.argv.slice(3), spawnOptions).status);
