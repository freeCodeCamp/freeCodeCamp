'use strict'

const fs = require('graceful-fs')
const u = require('universalify').fromCallback

function remove (path, callback) {
  fs.rm(path, { recursive: true, force: true }, callback)
}

function removeSync (path) {
  fs.rmSync(path, { recursive: true, force: true })
}

module.exports = {
  remove: u(remove),
  removeSync
}
