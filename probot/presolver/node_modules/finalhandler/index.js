/*!
 * finalhandler
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var debug = require('debug')('finalhandler')
var encodeUrl = require('encodeurl')
var escapeHtml = require('escape-html')
var onFinished = require('on-finished')
var parseUrl = require('parseurl')
var statuses = require('statuses')
var unpipe = require('unpipe')

/**
 * Module variables.
 * @private
 */

var DOUBLE_SPACE_REGEXP = /\x20{2}/g
var NEWLINE_REGEXP = /\n/g

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)) }
var isFinished = onFinished.isFinished

/**
 * Create a minimal HTML document.
 *
 * @param {string} message
 * @private
 */

function createHtmlDocument (message) {
  var body = escapeHtml(message)
    .replace(NEWLINE_REGEXP, '<br>')
    .replace(DOUBLE_SPACE_REGEXP, ' &nbsp;')

  return '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<title>Error</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<pre>' + body + '</pre>\n' +
    '</body>\n' +
    '</html>\n'
}

/**
 * Module exports.
 * @public
 */

module.exports = finalhandler

/**
 * Create a function to handle the final response.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function finalhandler (req, res, options) {
  var opts = options || {}

  // get environment
  var env = opts.env || process.env.NODE_ENV || 'development'

  // get error callback
  var onerror = opts.onerror

  return function (err) {
    var headers
    var msg
    var status

    // ignore 404 on in-flight response
    if (!err && headersSent(res)) {
      debug('cannot 404 after headers sent')
      return
    }

    // unhandled error
    if (err) {
      // respect status code from error
      status = getErrorStatusCode(err)

      if (status === undefined) {
        // fallback to status code on response
        status = getResponseStatusCode(res)
      } else {
        // respect headers from error
        headers = getErrorHeaders(err)
      }

      // get error message
      msg = getErrorMessage(err, status, env)
    } else {
      // not found
      status = 404
      msg = 'Cannot ' + req.method + ' ' + encodeUrl(getResourceName(req))
    }

    debug('default %s', status)

    // schedule onerror callback
    if (err && onerror) {
      defer(onerror, err, req, res)
    }

    // cannot actually respond
    if (headersSent(res)) {
      debug('cannot %d after headers sent', status)
      req.socket.destroy()
      return
    }

    // send response
    send(req, res, status, headers, msg)
  }
}

/**
 * Get headers from Error object.
 *
 * @param {Error} err
 * @return {object}
 * @private
 */

function getErrorHeaders (err) {
  if (!err.headers || typeof err.headers !== 'object') {
    return undefined
  }

  var headers = Object.create(null)
  var keys = Object.keys(err.headers)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    headers[key] = err.headers[key]
  }

  return headers
}

/**
 * Get message from Error object, fallback to status message.
 *
 * @param {Error} err
 * @param {number} status
 * @param {string} env
 * @return {string}
 * @private
 */

function getErrorMessage (err, status, env) {
  var msg

  if (env !== 'production') {
    // use err.stack, which typically includes err.message
    msg = err.stack

    // fallback to err.toString() when possible
    if (!msg && typeof err.toString === 'function') {
      msg = err.toString()
    }
  }

  return msg || statuses[status]
}

/**
 * Get status code from Error object.
 *
 * @param {Error} err
 * @return {number}
 * @private
 */

function getErrorStatusCode (err) {
  // check err.status
  if (typeof err.status === 'number' && err.status >= 400 && err.status < 600) {
    return err.status
  }

  // check err.statusCode
  if (typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600) {
    return err.statusCode
  }

  return undefined
}

/**
 * Get resource name for the request.
 *
 * This is typically just the original pathname of the request
 * but will fallback to "resource" is that cannot be determined.
 *
 * @param {IncomingMessage} req
 * @return {string}
 * @private
 */

function getResourceName (req) {
  try {
    return parseUrl.original(req).pathname
  } catch (e) {
    return 'resource'
  }
}

/**
 * Get status code from response.
 *
 * @param {OutgoingMessage} res
 * @return {number}
 * @private
 */

function getResponseStatusCode (res) {
  var status = res.statusCode

  // default status code to 500 if outside valid range
  if (typeof status !== 'number' || status < 400 || status > 599) {
    status = 500
  }

  return status
}

/**
 * Determine if the response headers have been sent.
 *
 * @param {object} res
 * @returns {boolean}
 * @private
 */

function headersSent (res) {
  return typeof res.headersSent !== 'boolean'
    ? Boolean(res._header)
    : res.headersSent
}

/**
 * Send response.
 *
 * @param {IncomingMessage} req
 * @param {OutgoingMessage} res
 * @param {number} status
 * @param {object} headers
 * @param {string} message
 * @private
 */

function send (req, res, status, headers, message) {
  function write () {
    // response body
    var body = createHtmlDocument(message)

    // response status
    res.statusCode = status
    res.statusMessage = statuses[status]

    // response headers
    setHeaders(res, headers)

    // security headers
    res.setHeader('Content-Security-Policy', "default-src 'self'")
    res.setHeader('X-Content-Type-Options', 'nosniff')

    // standard headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'))

    if (req.method === 'HEAD') {
      res.end()
      return
    }

    res.end(body, 'utf8')
  }

  if (isFinished(req)) {
    write()
    return
  }

  // unpipe everything from the request
  unpipe(req)

  // flush the request
  onFinished(req, write)
  req.resume()
}

/**
 * Set response headers from an object.
 *
 * @param {OutgoingMessage} res
 * @param {object} headers
 * @private
 */

function setHeaders (res, headers) {
  if (!headers) {
    return
  }

  var keys = Object.keys(headers)
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    res.setHeader(key, headers[key])
  }
}
