require('@babel/register');

const { spawn } = require('child_process');
const nodemon = require('nodemon');

const spawnOpts = {
  stdio: 'inherit',
  shell: true
};

// spawns loopback

nodemon({
  script: './server/server.js',
  ext: 'js json',
  // --silent squashes an ELIFECYCLE error when the server exits
  exec: 'npm run --silent babel-dev-server',
  watch: './server',
  spawn: true
});

nodemon
  .on('restart', function nodemonRestart(files) {
    console.log('App restarted due to: ', files);
  });
// spawns gatsby in development mode
spawn('npm', ['run', 'develop'], spawnOpts);
