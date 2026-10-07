#!/usr/bin/env node

const {spawn} = require('child_process');

if (process.env.npm_config_build_from_source === 'true') {
  build();
}

function build() {
  spawn('node-gyp', ['rebuild'], { stdio: 'inherit', shell: true }).on('exit', function (code) {
    process.exit(code);
  });
}
