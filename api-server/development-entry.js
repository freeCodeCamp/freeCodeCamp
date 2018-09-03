const nodemon = require('nodemon');

nodemon({
  ext: 'js json',
  // --silent squashes an ELIFECYCLE error when the server exits
  exec: 'DEBUG=fcc* npm run --silent babel-dev-server',
  watch: './server',
  spawn: true
});

nodemon.on('restart', function nodemonRestart(files) {
  console.log('App restarted due to: ', files);
});
