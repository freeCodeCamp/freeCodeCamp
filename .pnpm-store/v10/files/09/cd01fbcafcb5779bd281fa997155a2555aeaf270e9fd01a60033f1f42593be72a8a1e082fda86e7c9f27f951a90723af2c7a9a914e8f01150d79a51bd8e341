'use strict'

const u = require('universalify').fromPromise
const fs = require('../fs')
const path = require('path')
const mkdir = require('../mkdirs')
const pathExists = require('../path-exists').pathExists

async function outputFile (file, data, encoding = 'utf-8') {
  const dir = path.dirname(file)

  if (!(await pathExists(dir))) {
    await mkdir.mkdirs(dir)
  }

  return fs.writeFile(file, data, encoding)
}

function outputFileSync (file, ...args) {
  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  fs.writeFileSync(file, ...args)
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
}
