/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var createError = require('http-errors')
var debug = require('debug')('body-parser:urlencoded')
var read = require('../read')
var qs = require('qs')
var { normalizeOptions } = require('../utils')

/**
 * Module exports.
 */

module.exports = urlencoded

/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {Object} [options]
 * @returns {Function}
 * @public
 */
function urlencoded (options) {
  const normalizedOptions = normalizeOptions(options, 'application/x-www-form-urlencoded')

  if (normalizedOptions.defaultCharset !== 'utf-8' && normalizedOptions.defaultCharset !== 'iso-8859-1') {
    throw new TypeError('option defaultCharset must be either utf-8 or iso-8859-1')
  }

  // create the appropriate query parser
  var queryparse = createQueryParser(options)

  function parse (body, encoding) {
    return body.length
      ? queryparse(body, encoding)
      : {}
  }

  const readOptions = {
    ...normalizedOptions,
    // assert charset
    isValidCharset: (charset) => charset === 'utf-8' || charset === 'iso-8859-1'
  }

  return function urlencodedParser (req, res, next) {
    read(req, res, next, parse, debug, readOptions)
  }
}

/**
 * Get the extended query parser.
 *
 * @param {Object} options
 * @returns {Function}
 * @private
 */
function createQueryParser (options) {
  var extended = Boolean(options?.extended)
  var parameterLimit = options?.parameterLimit !== undefined
    ? options?.parameterLimit
    : 1000
  var charsetSentinel = options?.charsetSentinel
  var interpretNumericEntities = options?.interpretNumericEntities
  var depth = extended ? (options?.depth !== undefined ? options?.depth : 32) : 0

  if (isNaN(parameterLimit) || parameterLimit < 1) {
    throw new TypeError('option parameterLimit must be a positive number')
  }

  if (isNaN(depth) || depth < 0) {
    throw new TypeError('option depth must be a zero or a positive number')
  }

  if (isFinite(parameterLimit)) {
    parameterLimit = parameterLimit | 0
  }

  return function queryparse (body, encoding) {
    var paramCount = parameterCount(body, parameterLimit)

    if (paramCount === undefined) {
      debug('too many parameters')
      throw createError(413, 'too many parameters', {
        type: 'parameters.too.many'
      })
    }

    var arrayLimit = extended ? Math.max(100, paramCount) : paramCount

    debug('parse ' + (extended ? 'extended ' : '') + 'urlencoding')
    try {
      return qs.parse(body, {
        allowPrototypes: true,
        arrayLimit: arrayLimit,
        depth: depth,
        charsetSentinel: charsetSentinel,
        interpretNumericEntities: interpretNumericEntities,
        charset: encoding,
        parameterLimit: parameterLimit,
        strictDepth: true
      })
    } catch (err) {
      if (err instanceof RangeError) {
        throw createError(400, 'The input exceeded the depth', {
          type: 'querystring.parse.rangeError'
        })
      } else {
        throw err
      }
    }
  }
}

/**
 * Count the number of parameters, stopping once limit reached
 *
 * @param {string} body
 * @param {number} limit
 * @returns {number|undefined} Returns undefined if limit exceeded
 * @private
 */
function parameterCount (body, limit) {
  let count = 0
  let index = -1
  do {
    count++
    if (count > limit) return undefined // Early exit if limit exceeded
    index = body.indexOf('&', index + 1)
  } while (index !== -1)
  return count
}
