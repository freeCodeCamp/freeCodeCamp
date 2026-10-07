#!/usr/bin/env node

const spawn = require('child_process').spawnSync;

const filesToCheck = '*.js';
const FORMAT_START = process.env.FORMAT_START || 'main';

function main (args) {
  let fix = false;
  while (args.length > 0) {
    switch (args[0]) {
      case '-f':
      case '--fix':
        fix = true;
        break;
      default:
    }
    args.shift();
  }

  // Check js files that change on unstaged file
  const fileUnStaged = spawn(
    'git',
    ['diff', '--name-only', FORMAT_START, filesToCheck],
    {
      encoding: 'utf-8'
    }
  );

  // Check js files that change on staged file
  const fileStaged = spawn(
    'git',
    ['diff', '--name-only', '--cached', FORMAT_START, filesToCheck],
    {
      encoding: 'utf-8'
    }
  );

  const options = [
    ...fileStaged.stdout.split('\n').filter((f) => f !== ''),
    ...fileUnStaged.stdout.split('\n').filter((f) => f !== '')
  ];

  if (fix) {
    options.push('--fix');
  }
  const result = spawn('node_modules/.bin/eslint', [...options], {
    encoding: 'utf-8'
  });

  if (result.status === 1) {
    console.error('Eslint error:', result.stdout);
    const fixCmd = 'npm run lint:fix';
    console.error(`ERROR: please run "${fixCmd}" to format changes in your commit
    Note that when running the command locally, please keep your local
    main branch and working branch up to date with nodejs/node-addon-api
    to exclude un-related complains.
    Or you can run "env FORMAT_START=upstream/main ${fixCmd}".
    Also fix JS files by yourself if necessary.`);
    return 1;
  }

  if (result.stderr) {
    console.error('Error running eslint:', result.stderr);
    return 2;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}
