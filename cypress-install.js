const { spawn } = require('child_process');
const pkg = require('cypress/package.json');

console.log('Installing Cypress version:', pkg.version);

const child = spawn('pnpm', ['run', 'cypress:install'], {
  stdio: 'inherit'
});

child.on('close', code => {
  console.log('Cypress installation finished with code:', code);
});

child.on('error', error => {
  console.error('Cypress installation error:', error);
});
