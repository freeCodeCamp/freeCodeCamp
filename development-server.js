require('@babel/register');

const { spawn } = require('child_process');

const spawnOpts = {
  stdio: 'inherit',
  shell: true
};

// spawns loopback
spawn('babel-node', ['./server/server.js'], spawnOpts);
// spawns gatsby in development mode
spawn('npm', ['run', 'develop'], spawnOpts);
