#!/usr/bin/env node

async function run() {
  const task = process.argv.slice(2).filter((a) => !a.startsWith('-'))[0];
  const args = process.argv.slice(2).filter((a) => a !== task);

  if (task === 'help' || args.includes('--help') || args.includes('-h')) {
    help();
  } else if (task === 'version' || args.includes('--version') || args.includes('-v')) {
    console.log(version());
  } else if (task === 'copylib') {
    await copyLibTask(args);
  } else {
    panic('Unknown partytown task: ' + task);
  }
}

async function copyLibTask(args) {
  try {
    const utils = require('../utils/index.cjs');
    const destDir = args.filter((a) => !a.startsWith('-'))[0];
    const logResult = !args.includes('--silent');
    const includeDebugDir = !args.includes('--no-debug');
    const result = await utils.copyLibFiles(destDir, {
      debugDir: includeDebugDir,
    });

    if (logResult) {
      console.log('Partytown lib copied to: ' + result.dest);
    }
  } catch (e) {
    panic(String(e.message || e));
  }
}

function help() {
  console.log(``);
  console.log(`Partytown (${version()}):`);
  console.log(``);
  console.log(`  copylib <destDir> [--no-debug | --silent]`);
  console.log(``);
}

function version() {
  return require('../package.json').version;
}

function panic(msg) {
  console.error('\n❌ ' + msg);
  help();
  process.exit(1);
}

run();
