'use strict'

var fs = require('fs')
var path = require('path')
var vfile = require('./core')

exports.read = read
exports.write = write

// Create a virtual file and read it in, asynchronously.
function read(description, options, callback) {
  var file = vfile(description)

  if (!callback && typeof options === 'function') {
    callback = options
    options = null
  }

  if (!callback) {
    return new Promise(executor)
  }

  executor(resolve, callback)

  function resolve(result) {
    callback(null, result)
  }

  function executor(resolve, reject) {
    var fp

    try {
      fp = path.resolve(file.cwd, file.path)
    } catch (error) {
      return reject(error)
    }

    fs.readFile(fp, options, done)

    function done(error, res) {
      if (error) {
        reject(error)
      } else {
        file.contents = res
        resolve(file)
      }
    }
  }
}

// Create a virtual file and write it out, asynchronously.
function write(description, options, callback) {
  var file = vfile(description)

  // Weird, right? Otherwise `fs` doesn’t accept it.
  if (!callback && typeof options === 'function') {
    callback = options
    options = undefined
  }

  if (!callback) {
    return new Promise(executor)
  }

  executor(resolve, callback)

  function resolve(result) {
    callback(null, result)
  }

  function executor(resolve, reject) {
    var fp

    try {
      fp = path.resolve(file.cwd, file.path)
    } catch (error) {
      return reject(error)
    }

    fs.writeFile(fp, file.contents || '', options, done)

    function done(error) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    }
  }
}
