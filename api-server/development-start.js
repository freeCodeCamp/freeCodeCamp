const path = require('path');
const nodemon = require('nodemon');

nodemon({
  ext: 'js json',
  // --silent squashes an ELIFECYCLE error when the server exits
  exec: 'npm run --silent babel-dev-server',
  watch: path.resolve(__dirname, './server'),
  spawn: true,
  env: {
    DEBUG: 'fcc*'
  }
});

nodemon.on('restart', function nodemonRestart(files) {
  console.log('App restarted due to: ', files);
});
