'use strict'
var process = require('./process')
try {
  module.exports = setImmediate
} catch (ex) {
  module.exports = process.nextTick
}
