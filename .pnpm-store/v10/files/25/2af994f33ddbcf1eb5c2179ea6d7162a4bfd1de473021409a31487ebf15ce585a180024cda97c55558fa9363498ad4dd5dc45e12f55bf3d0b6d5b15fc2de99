/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var createError = require('http-errors')
var getBody = require('raw-body')
var iconv = require('iconv-lite')
var onFinished = require('on-finished')
var zlib = require('node:zlib')
var hasBody = require('type-is').hasBody
var { getCharset } = require('./utils')

/**
 * Module exports.
 */

module.exports = read

/**
 * Read a request into a buffer and parse.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @param {Function} parse
 * @param {Function} debug
 * @param {Object} options
 * @private
 */
function read (req, res, next, parse, debug, options) {
  if (onFinished.isFinished(req)) {
    debug('body already parsed')
    next()
    return
  }

  if (!('body' in req)) {
    req.body = undefined
  }

  // skip requests without bodies
  if (!hasBody(req)) {
    debug('skip empty body')
    next()
    return
  }

  debug('content-type %j', req.headers['content-type'])

  // determine if request should be parsed
  if (!options.shouldParse(req)) {
    debug('skip parsing')
    next()
    return
  }

  var encoding = null
  if (options?.skipCharset !== true) {
    encoding = getCharset(req) || options.defaultCharset

    // validate charset
    if (!!options?.isValidCharset && !options.isValidCharset(encoding)) {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
        charset: encoding,
        type: 'charset.unsupported'
      }))
      return
    }
  }

  var length
  var opts = options
  var stream

  // read options
  var verify = opts.verify

  try {
    // get the content stream
    stream = contentstream(req, debug, opts.inflate)
    length = stream.length
    stream.length = undefined
  } catch (err) {
    return next(err)
  }

  // set raw-body options
  opts.length = length
  opts.encoding = verify
    ? null
    : encoding

  // assert charset is supported
  if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {
    return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
      charset: encoding.toLowerCase(),
      type: 'charset.unsupported'
    }))
  }

  // read body
  debug('read body')
  getBody(stream, opts, function (error, body) {
    if (error) {
      var _error

      if (error.type === 'encoding.unsupported') {
        // echo back charset
        _error = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
          charset: encoding.toLowerCase(),
          type: 'charset.unsupported'
        })
      } else {
        // set status code on error
        _error = createError(400, error)
      }

      // unpipe from stream and destroy
      if (stream !== req) {
        req.unpipe()
        stream.destroy()
      }

      // read off entire request
      dump(req, function onfinished () {
        next(createError(400, _error))
      })
      return
    }

    // verify
    if (verify) {
      try {
        debug('verify body')
        verify(req, res, body, encoding)
      } catch (err) {
        next(createError(403, err, {
          body: body,
          type: err.type || 'entity.verify.failed'
        }))
        return
      }
    }

    // parse
    var str = body
    try {
      debug('parse body')
      str = typeof body !== 'string' && encoding !== null
        ? iconv.decode(body, encoding)
        : body
      req.body = parse(str, encoding)
    } catch (err) {
      next(createError(400, err, {
        body: str,
        type: err.type || 'entity.parse.failed'
      }))
      return
    }

    next()
  })
}

/**
 * Get the content stream of the request.
 *
 * @param {Object} req
 * @param {Function} debug
 * @param {boolean} inflate
 * @returns {Object}
 * @private
 */
function contentstream (req, debug, inflate) {
  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase()
  var length = req.headers['content-length']

  debug('content-encoding "%s"', encoding)

  if (inflate === false && encoding !== 'identity') {
    throw createError(415, 'content encoding unsupported', {
      encoding: encoding,
      type: 'encoding.unsupported'
    })
  }

  if (encoding === 'identity') {
    req.length = length
    return req
  }

  var stream = createDecompressionStream(encoding, debug)
  req.pipe(stream)
  return stream
}

/**
 * Create a decompression stream for the given encoding.
 * @param {string} encoding
 * @param {Function} debug
 * @returns {Object}
 * @private
 */
function createDecompressionStream (encoding, debug) {
  switch (encoding) {
    case 'deflate':
      debug('inflate body')
      return zlib.createInflate()
    case 'gzip':
      debug('gunzip body')
      return zlib.createGunzip()
    case 'br':
      debug('brotli decompress body')
      return zlib.createBrotliDecompress()
    default:
      throw createError(415, 'unsupported content encoding "' + encoding + '"', {
        encoding: encoding,
        type: 'encoding.unsupported'
      })
  }
}

/**
 * Dump the contents of a request.
 *
 * @param {Object} req
 * @param {Function} callback
 * @private
 */
function dump (req, callback) {
  if (onFinished.isFinished(req)) {
    callback(null)
  } else {
    onFinished(req, callback)
    req.resume()
  }
}
