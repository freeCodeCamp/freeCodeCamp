/*!
 * send
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
'use strict'
/**
 * Determine if path parts contain a dotfile.
 *
 * @api private
 */
function containsDotFile (parts) {
  for (let i = 0, il = parts.length; i < il; ++i) {
    if (parts[i].length !== 1 && parts[i][0] === '.') {
      return true
    }
  }

  return false
}

module.exports.containsDotFile = containsDotFile
