/*!
 * compressible
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Jeremiah Senkpiel
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var db = require('mime-db')

/**
 * Module variables.
 * @private
 */

var COMPRESSIBLE_TYPE_REGEXP = /^text\/|\+(?:json|text|xml)$/i
var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/

/**
 * Module exports.
 * @public
 */

module.exports = compressible

/**
 * Checks if a type is compressible.
 *
 * @param {string} type
 * @return {Boolean} compressible
 * @public
 */

function compressible (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // strip parameters
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && match[1].toLowerCase()
  var data = db[mime]

  // return database information
  if (data && data.compressible !== undefined) {
    return data.compressible
  }

  // fallback to regexp or unknown
  return COMPRESSIBLE_TYPE_REGEXP.test(mime) || undefined
}
