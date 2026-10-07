'use strict'

/* eslint no-prototype-builtins: 0 */

const { Readable, addAbortSignal } = require('node:stream')
const util = require('node:util')
const cookie = require('cookie')
const assert = require('node:assert')
const { createDeprecation } = require('process-warning')

const parseURL = require('./parse-url')
const { isFormDataLike, formDataToStream } = require('./form-data')
const { EventEmitter } = require('node:events')

// request.connectin deprecation https://nodejs.org/api/http.html#http_request_connection
const FST_LIGHTMYREQUEST_DEP01 = createDeprecation({
  name: 'FastifyDeprecationLightMyRequest',
  code: 'FST_LIGHTMYREQUEST_DEP01',
  message: 'You are accessing "request.connection", use "request.socket" instead.'
})

/**
 * Get hostname:port
 *
 * @param {URL} parsedURL
 * @return {String}
 */
function hostHeaderFromURL (parsedURL) {
  return parsedURL.port
    ? parsedURL.host
    : parsedURL.hostname + (parsedURL.protocol === 'https:' ? ':443' : ':80')
}

/**
 * Mock socket object used to fake access to a socket for a request
 *
 * @constructor
 * @param {String} remoteAddress the fake address to show consumers of the socket
 */
class MockSocket extends EventEmitter {
  constructor (remoteAddress) {
    super()
    this.remoteAddress = remoteAddress
  }
}

/**
 * CustomRequest
 *
 * @constructor
 * @param {Object} options
 * @param {(Object|String)} options.url || options.path
 * @param {String} [options.method='GET']
 * @param {String} [options.remoteAddress]
 * @param {Object} [options.cookies]
 * @param {Object} [options.headers]
 * @param {Object} [options.query]
 * @param {Object} [options.Request]
 * @param {any} [options.payload]
 */
function CustomRequest (options) {
  return new _CustomLMRRequest(this)

  function _CustomLMRRequest (obj) {
    Request.call(obj, {
      ...options,
      Request: undefined
    })
    Object.assign(this, obj)

    for (const fn of Object.keys(Request.prototype)) {
      this.constructor.prototype[fn] = Request.prototype[fn]
    }

    util.inherits(this.constructor, options.Request)
    return this
  }
}

/**
 * Request
 *
 * @constructor
 * @param {Object} options
 * @param {(Object|String)} options.url || options.path
 * @param {String} [options.method='GET']
 * @param {String} [options.remoteAddress]
 * @param {Object} [options.cookies]
 * @param {Object} [options.headers]
 * @param {Object} [options.query]
 * @param {any} [options.payload]
 */
function Request (options) {
  Readable.call(this, {
    autoDestroy: false
  })

  const parsedURL = parseURL(options.url || options.path, options.query)

  this.url = parsedURL.pathname + parsedURL.search

  this.aborted = false
  this.httpVersionMajor = 1
  this.httpVersionMinor = 1
  this.httpVersion = '1.1'
  this.method = options.method ? options.method.toUpperCase() : 'GET'

  this.headers = {}
  this.rawHeaders = []

  const headers = options.headers || {}

  for (const field in headers) {
    const fieldLowerCase = field.toLowerCase()
    if (
      (
        fieldLowerCase === 'user-agent' ||
        fieldLowerCase === 'content-type'
      ) && headers[field] === undefined
    ) {
      this.headers[fieldLowerCase] = undefined
      continue
    }
    const value = headers[field]
    assert(value !== undefined, 'invalid value "undefined" for header ' + field)
    this.headers[fieldLowerCase] = '' + value
  }

  if (('user-agent' in this.headers) === false) {
    this.headers['user-agent'] = 'lightMyRequest'
  }
  this.headers.host = this.headers.host || options.authority || hostHeaderFromURL(parsedURL)

  if (options.cookies) {
    const { cookies } = options
    const cookieValues = Object.keys(cookies).map(key => cookie.serialize(key, cookies[key]))
    if (this.headers.cookie) {
      cookieValues.unshift(this.headers.cookie)
    }
    this.headers.cookie = cookieValues.join('; ')
  }

  this.socket = new MockSocket(options.remoteAddress || '127.0.0.1')

  Object.defineProperty(this, 'connection', {
    get () {
      FST_LIGHTMYREQUEST_DEP01()
      return this.socket
    },
    configurable: true
  })

  // we keep both payload and body for compatibility reasons
  let payload = options.payload || options.body || null
  let payloadResume = payload && typeof payload.resume === 'function'

  if (isFormDataLike(payload)) {
    const stream = formDataToStream(payload)
    payload = stream.stream
    payloadResume = true
    // we override the content-type
    this.headers['content-type'] = stream.contentType
    this.headers['transfer-encoding'] = 'chunked'
  }

  if (payload && typeof payload !== 'string' && !payloadResume && !Buffer.isBuffer(payload)) {
    payload = JSON.stringify(payload)

    if (('content-type' in this.headers) === false) {
      this.headers['content-type'] = 'application/json'
    }
  }

  // Set the content-length for the corresponding payload if none set
  if (payload && !payloadResume && !Object.hasOwn(this.headers, 'content-length')) {
    this.headers['content-length'] = (Buffer.isBuffer(payload) ? payload.length : Buffer.byteLength(payload)).toString()
  }

  for (const header of Object.keys(this.headers)) {
    this.rawHeaders.push(header, this.headers[header])
  }

  // Use _lightMyRequest namespace to avoid collision with Node
  this._lightMyRequest = {
    payload,
    isDone: false,
    simulate: options.simulate || {},
    payloadAsStream: options.payloadAsStream,
    signal: options.signal
  }

  const signal = options.signal
  /* c8 ignore next 3 */
  if (signal) {
    addAbortSignal(signal, this)
  }

  {
    const payload = this._lightMyRequest.payload
    if (payload?._readableState) { // does quack like a modern stream
      this._read = readStream

      payload.on('error', (err) => {
        this.destroy(err)
      })

      payload.on('end', () => {
        this.push(null)
      })
    } else {
      // Stream v1 are handled in index.js synchronously
      this._read = readEverythingElse
    }
  }

  return this
}

function readStream () {
  const payload = this._lightMyRequest.payload

  let more = true
  let pushed = false
  let chunk
  while (more && (chunk = payload.read())) {
    pushed = true
    more = this.push(chunk)
  }

  // We set up a recursive 'readable' event only if we didn't read anything.
  // Otheriwse, the stream machinery will call _read() for us.
  if (more && !pushed) {
    this._lightMyRequest.payload.once('readable', this._read.bind(this))
  }
}

function readEverythingElse () {
  setImmediate(() => {
    if (this._lightMyRequest.isDone) {
      // 'end' defaults to true
      if (this._lightMyRequest.simulate.end !== false) {
        this.push(null)
      }
      return
    }

    this._lightMyRequest.isDone = true

    if (this._lightMyRequest.payload) {
      if (this._lightMyRequest.simulate.split) {
        this.push(this._lightMyRequest.payload.slice(0, 1))
        this.push(this._lightMyRequest.payload.slice(1))
      } else {
        this.push(this._lightMyRequest.payload)
      }
    }

    if (this._lightMyRequest.simulate.error) {
      this.emit('error', new Error('Simulated'))
    }

    if (this._lightMyRequest.simulate.close) {
      this.emit('close')
    }

    // 'end' defaults to true
    if (this._lightMyRequest.simulate.end !== false) {
      this.push(null)
    }
  })
}

util.inherits(Request, Readable)
util.inherits(CustomRequest, Request)

Request.prototype.destroy = function (error) {
  if (this.destroyed || this._lightMyRequest.isDone) return
  this.destroyed = true

  if (error) {
    this._error = true
    process.nextTick(() => this.emit('error', error))
  }

  process.nextTick(() => this.emit('close'))
}

module.exports = Request
module.exports.Request = Request
module.exports.CustomRequest = CustomRequest
