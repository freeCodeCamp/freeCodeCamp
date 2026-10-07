// This is a build script, so some logging is desirable as it allows
// us to follow the code path that triggered the error.
/* eslint-disable no-console */
const fs = require('fs');
const child_process = require('child_process');

const binaries = require('./binaries.js');

function clean(err) {
  return err.toString().trim();
}

function recompileFromSource() {
  console.log('@sentry/profiling-node: Compiling from source...');
  let spawn = child_process.spawnSync('npm', ['run', 'build:bindings:configure'], {
    stdio: ['inherit', 'inherit', 'pipe'],
    env: process.env,
    shell: true,
  });

  if (spawn.status !== 0) {
    console.log('@sentry/profiling-node: Failed to configure gyp');
    console.log('@sentry/profiling-node:', clean(spawn.stderr));
    return;
  }

  spawn = child_process.spawnSync('npm', ['run', 'build:bindings'], {
    stdio: ['inherit', 'inherit', 'pipe'],
    env: process.env,
    shell: true,
  });
  if (spawn.status !== 0) {
    console.log('@sentry/profiling-node: Failed to build bindings');
    console.log('@sentry/profiling-node:', clean(spawn.stderr));
    return;
  }
}

if (fs.existsSync(binaries.target)) {
  try {
    console.log(`@sentry/profiling-node: Precompiled binary found, attempting to load ${binaries.target}`);
    require(binaries.target);
    console.log('@sentry/profiling-node: Precompiled binary found, skipping build from source.');
  } catch (e) {
    console.log('@sentry/profiling-node: Precompiled binary found but failed loading');
    console.log('@sentry/profiling-node:', e);
    try {
      recompileFromSource();
    } catch (e) {
      console.log('@sentry/profiling-node: Failed to compile from source');
      throw e;
    }
  }
} else {
  console.log('@sentry/profiling-node: No precompiled binary found');
  recompileFromSource();
}
