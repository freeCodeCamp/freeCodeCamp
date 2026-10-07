/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var db = require('mime-db')
var extname = require('path').extname
var mimeScore = require('./mimeScore')

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)
exports._extensionConflicts = []

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {false|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {false|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {false|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {false|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .slice(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]
      types[extension] = _preferredType(extension, types[extension], type)

      // DELETE (eventually): Capture extension->type maps that change as a
      // result of switching to mime-score.  This is just to help make reviewing
      // PR #119 easier, and can be removed once that PR is approved.
      const legacyType = _preferredTypeLegacy(
        extension,
        types[extension],
        type
      )
      if (legacyType !== types[extension]) {
        exports._extensionConflicts.push([extension, legacyType, types[extension]])
      }
    }
  })
}

// Resolve type conflict using mime-score
function _preferredType (ext, type0, type1) {
  var score0 = type0 ? mimeScore(type0, db[type0].source) : 0
  var score1 = type1 ? mimeScore(type1, db[type1].source) : 0

  return score0 > score1 ? type0 : type1
}

// Resolve type conflict using pre-mime-score logic
function _preferredTypeLegacy (ext, type0, type1) {
  var SOURCE_RANK = ['nginx', 'apache', undefined, 'iana']

  var score0 = type0 ? SOURCE_RANK.indexOf(db[type0].source) : 0
  var score1 = type1 ? SOURCE_RANK.indexOf(db[type1].source) : 0

  if (
    exports.types[extension] !== 'application/octet-stream' &&
    (score0 > score1 ||
      (score0 === score1 &&
        exports.types[extension]?.slice(0, 12) === 'application/'))
  ) {
    return type0
  }

  return score0 > score1 ? type0 : type1
}
