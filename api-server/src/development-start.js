const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const createDebugger = require('debug');
const nodemon = require('nodemon');
const log = createDebugger('fcc:start:development');

nodemon({
  ext: 'js json',
  // --silent squashes an ELIFECYCLE error when the server exits
  exec: 'pnpm run --silent babel-dev-server',
  watch: path.resolve(__dirname, './server'),
  spawn: true,
  env: {
    DEBUG: `fcc*,${process.env.DEBUG}`
  }
});

nodemon.on('restart', function nodemonRestart(files) {
  log('App restarted due to: ', files);
});
