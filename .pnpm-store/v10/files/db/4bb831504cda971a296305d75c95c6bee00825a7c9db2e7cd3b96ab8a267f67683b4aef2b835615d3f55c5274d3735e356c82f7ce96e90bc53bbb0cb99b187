'use strict'

var fs = require('fs')
var path = require('path')
var vfile = require('./core')

exports.read = readSync
exports.write = writeSync

// Create a virtual file and read it in, synchronously.
function readSync(description, options) {
  var file = vfile(description)
  file.contents = fs.readFileSync(path.resolve(file.cwd, file.path), options)
  return file
}

// Create a virtual file and write it out, synchronously.
function writeSync(description, options) {
  var file = vfile(description)
  fs.writeFileSync(
    path.resolve(file.cwd, file.path),
    file.contents || '',
    options
  )
}
