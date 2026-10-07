#!/usr/bin/env node

let { readFileSync } = require('fs')
let { join } = require('path')

require('./check-npm-version')
let updateDb = require('./')

const ROOT = __dirname

function getPackage() {
  return JSON.parse(readFileSync(join(ROOT, 'package.json')))
}

let args = process.argv.slice(2)

let USAGE = 'Usage:\n  npx update-browserslist-db\n'

function isArg(arg) {
  return args.some(i => i === arg)
}

function error(msg) {
  process.stderr.write('update-browserslist-db: ' + msg + '\n')
  process.exit(1)
}

if (isArg('--help') || isArg('-h')) {
  process.stdout.write(getPackage().description + '.\n\n' + USAGE + '\n')
} else if (isArg('--version') || isArg('-v')) {
  process.stdout.write('browserslist-lint ' + getPackage().version + '\n')
} else {
  try {
    updateDb()
  } catch (e) {
    if (e.name === 'BrowserslistUpdateError') {
      error(e.message)
    } else {
      throw e
    }
  }
}
