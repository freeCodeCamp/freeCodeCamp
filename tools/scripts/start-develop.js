const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { spawn } = require('child_process');
const kill = require('tree-kill');

const spawnOpts = {
  stdio: 'inherit',
  shell: true
};

const loopback = spawn(
  'cd',
  ['./api-server', '&&', 'node development-entry.js'],
  spawnOpts
);
const gatsby = spawn('cd', ['./client', '&&', 'npm run develop'], spawnOpts);

let cleanupCalled = false;
function cleanUp() {
  if (cleanupCalled) {
    return null;
  }
  cleanupCalled = true;
  console.log(`
  Killing processes...
  `);
  const promises = [
    kill(loopback.pid, 'SIGINT', () => Promise.resolve()),
    kill(gatsby.pid, 'SIGINT', () => Promise.resolve())
  ];
  return Promise.all(promises).then(() => {
    console.log(`
    All processes have exited
  `);
  });
}

process.on('exit', cleanUp);
process.on('SIGINT', cleanUp);
process.on('SIGUSR1', cleanUp);
process.on('SIGUSR2', cleanUp);
