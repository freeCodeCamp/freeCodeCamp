var path = require('path')
var fs = require('fs')

function defaultCheck (dir) {
  return fs.existsSync(path.join(dir, 'package.json'))
}

function findRoot (start, check) {
  start = start || module.parent.filename
  check = check || defaultCheck

  if (typeof start === 'string') {
    if (start[start.length - 1] !== path.sep) {
      start += path.sep
    }
    start = start.split(path.sep)
  }
  if (!start.length) {
    throw new Error('package.json not found in path')
  }
  start.pop()
  var dir = start.join(path.sep)
  try {
    if (check(dir)) {
      return dir
    }
  } catch (e) {}
  return findRoot(start, check)
}

module.exports = findRoot
