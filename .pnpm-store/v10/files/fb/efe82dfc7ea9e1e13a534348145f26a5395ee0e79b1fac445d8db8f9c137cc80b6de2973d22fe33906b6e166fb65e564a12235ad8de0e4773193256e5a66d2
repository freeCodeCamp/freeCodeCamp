#!/usr/bin/env node

const spawn = require('child_process').spawnSync;
const path = require('path');

const filesToCheck = ['*.h', '*.cc'];
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

  const clangFormatPath = path.dirname(require.resolve('clang-format'));
  const binary = process.platform === 'win32'
    ? 'node_modules\\.bin\\clang-format.cmd'
    : 'node_modules/.bin/clang-format';
  const options = ['--binary=' + binary, '--style=file'];
  if (fix) {
    options.push(FORMAT_START);
  } else {
    options.push('--diff', FORMAT_START);
  }

  const gitClangFormatPath = path.join(clangFormatPath, 'bin/git-clang-format');
  const result = spawn(
    'python',
    [gitClangFormatPath, ...options, '--', ...filesToCheck],
    { encoding: 'utf-8' }
  );

  if (result.stderr) {
    console.error('Error running git-clang-format:', result.stderr);
    return 2;
  }

  const clangFormatOutput = result.stdout.trim();
  // Bail fast if in fix mode.
  if (fix) {
    console.log(clangFormatOutput);
    return 0;
  }
  // Detect if there is any complains from clang-format
  if (
    clangFormatOutput !== '' &&
    clangFormatOutput !== 'no modified files to format' &&
    clangFormatOutput !== 'clang-format did not modify any files'
  ) {
    console.error(clangFormatOutput);
    const fixCmd = 'npm run lint:fix';
    console.error(`
      ERROR: please run "${fixCmd}" to format changes in your commit
        Note that when running the command locally, please keep your local
        main branch and working branch up to date with nodejs/node-addon-api
        to exclude un-related complains.
        Or you can run "env FORMAT_START=upstream/main ${fixCmd}".`);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}
