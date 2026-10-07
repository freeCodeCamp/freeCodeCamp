'use strict'
const u = require('universalify').fromPromise
const { makeDir: _makeDir, makeDirSync } = require('./make-dir')
const makeDir = u(_makeDir)

module.exports = {
  mkdirs: makeDir,
  mkdirsSync: makeDirSync,
  // alias
  mkdirp: makeDir,
  mkdirpSync: makeDirSync,
  ensureDir: makeDir,
  ensureDirSync: makeDirSync
}
