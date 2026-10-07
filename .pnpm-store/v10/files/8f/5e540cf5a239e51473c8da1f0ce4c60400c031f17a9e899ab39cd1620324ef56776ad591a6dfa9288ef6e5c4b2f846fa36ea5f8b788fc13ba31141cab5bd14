'use strict'

module.exports = {
  // Export promiseified graceful-fs:
  ...require('./fs'),
  // Export extra methods:
  ...require('./copy-sync'),
  ...require('./copy'),
  ...require('./empty'),
  ...require('./ensure'),
  ...require('./json'),
  ...require('./mkdirs'),
  ...require('./move-sync'),
  ...require('./move'),
  ...require('./output'),
  ...require('./path-exists'),
  ...require('./remove')
}

// Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.
const fs = require('fs')
if (Object.getOwnPropertyDescriptor(fs, 'promises')) {
  Object.defineProperty(module.exports, 'promises', {
    get () { return fs.promises }
  })
}
