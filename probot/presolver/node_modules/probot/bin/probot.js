#!/usr/bin/env node

const semver = require('semver')
const version = require('../package').engines.node

if (!semver.satisfies(process.version, version)) {
  console.log(`Node.js version ${version} is required. You have ${process.version}.`)
  process.exit(1)
}

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('run', 'run the bot')
  .command('simulate', 'Deprecated: use `receive` instead')
  .command('receive', 'Receive a single event and payload')
  .parse(process.argv)
