module.exports = exists
exists.sync = sync
var fs = require('fs')
var existsCache = Object.create(null)

function exists (file, cb) {
  if (file in existsCache)
    return process.nextTick(cb.bind(null, existsCache[file]))
  fs.lstat(file, function (er) {
    cb(existsCache[file] = !er)
  })
}

function sync (file) {
  if (file in existsCache)
    return existsCache[file]
  try {
    fs.lstatSync(file)
    existsCache[file] = true
  } catch (er) {
    existsCache[file] = false
  }
  return existsCache[file]
}
