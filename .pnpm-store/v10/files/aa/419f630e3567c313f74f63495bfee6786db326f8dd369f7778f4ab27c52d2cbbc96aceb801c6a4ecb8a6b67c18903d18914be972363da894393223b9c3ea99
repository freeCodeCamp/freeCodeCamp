'use strict'

const http = require('node:http')
const { Writable, Readable, addAbortSignal } = require('node:stream')
const util = require('node:util')

const setCookie = require('set-cookie-parser')

function Response (req, onEnd, reject) {
  http.ServerResponse.call(this, req)

  if (req._lightMyRequest?.payloadAsStream) {
    const read = this.emit.bind(this, 'drain')
    this._lightMyRequest = { headers: null, trailers: {}, stream: new Readable({ read }) }
    const signal = req._lightMyRequest.signal

    if (signal) {
      addAbortSignal(signal, this._lightMyRequest.stream)
    }
  } else {
    this._lightMyRequest = { headers: null, trailers: {}, payloadChunks: [] }
  }
  // This forces node@8 to always render the headers
  this.setHeader('foo', 'bar'); this.removeHeader('foo')

  this.assignSocket(getNullSocket())

  this._promiseCallback = typeof reject === 'function'

  let called = false
  const onEndSuccess = (payload) => {
    if (called) return
    called = true
    if (this._promiseCallback) {
      return process.nextTick(() => onEnd(payload))
    }
    process.nextTick(() => onEnd(null, payload))
  }
  this._lightMyRequest.onEndSuccess = onEndSuccess

  let finished = false
  const onEndFailure = (err) => {
    if (called) {
      if (this._lightMyRequest.stream && !finished) {
        if (!err) {
          err = new Error('response destroyed before completion')
          err.code = 'LIGHT_ECONNRESET'
        }
        this._lightMyRequest.stream.destroy(err)
        this._lightMyRequest.stream.on('error', () => {})
      }
      return
    }
    called = true
    if (!err) {
      err = new Error('response destroyed before completion')
      err.code = 'LIGHT_ECONNRESET'
    }
    if (this._promiseCallback) {
      return process.nextTick(() => reject(err))
    }
    process.nextTick(() => onEnd(err, null))
  }

  if (this._lightMyRequest.stream) {
    this.once('finish', () => {
      finished = true
      this._lightMyRequest.stream.push(null)
    })
  } else {
    this.once('finish', () => {
      const res = generatePayload(this)
      res.raw.req = req
      onEndSuccess(res)
    })
  }

  this.connection.once('error', onEndFailure)

  this.once('error', onEndFailure)

  this.once('close', onEndFailure)
}

util.inherits(Response, http.ServerResponse)

Response.prototype.setTimeout = function (msecs, callback) {
  this.timeoutHandle = setTimeout(() => {
    this.emit('timeout')
  }, msecs)
  this.on('timeout', callback)
  return this
}

Response.prototype.writeHead = function () {
  const result = http.ServerResponse.prototype.writeHead.apply(this, arguments)

  copyHeaders(this)

  if (this._lightMyRequest.stream) {
    this._lightMyRequest.onEndSuccess(generatePayload(this))
  }

  return result
}

Response.prototype.write = function (data, encoding, callback) {
  if (this.timeoutHandle) {
    clearTimeout(this.timeoutHandle)
  }
  http.ServerResponse.prototype.write.call(this, data, encoding, callback)
  if (this._lightMyRequest.stream) {
    return this._lightMyRequest.stream.push(Buffer.from(data, encoding))
  } else {
    this._lightMyRequest.payloadChunks.push(Buffer.from(data, encoding))
    return true
  }
}

Response.prototype.end = function (data, encoding, callback) {
  if (data) {
    this.write(data, encoding)
  }

  http.ServerResponse.prototype.end.call(this, callback)

  this.emit('finish')

  // We need to emit 'close' otherwise stream.finished() would
  // not pick it up on Node v16

  this.destroy()
}

Response.prototype.destroy = function (error) {
  if (this.destroyed) return
  this.destroyed = true

  if (error) {
    process.nextTick(() => this.emit('error', error))
  }

  process.nextTick(() => this.emit('close'))
}

Response.prototype.addTrailers = function (trailers) {
  for (const key in trailers) {
    this._lightMyRequest.trailers[key.toLowerCase().trim()] = trailers[key].toString().trim()
  }
}

function generatePayload (response) {
  // This seems only to happen when using `fastify-express` - see https://github.com/fastify/fastify-express/issues/47
  /* c8 ignore next 3  */
  if (response._lightMyRequest.headers === null) {
    copyHeaders(response)
  }
  serializeHeaders(response)
  // Prepare response object
  const res = {
    raw: {
      res: response
    },
    headers: response._lightMyRequest.headers,
    statusCode: response.statusCode,
    statusMessage: response.statusMessage,
    trailers: {},
    get cookies () {
      return setCookie.parse(this)
    }
  }

  res.trailers = response._lightMyRequest.trailers

  if (response._lightMyRequest.payloadChunks) {
    // Prepare payload and trailers
    const rawBuffer = Buffer.concat(response._lightMyRequest.payloadChunks)
    res.rawPayload = rawBuffer

    // we keep both of them for compatibility reasons
    res.payload = rawBuffer.toString()
    res.body = res.payload

    // Prepare payload parsers
    res.json = function parseJsonPayload () {
      return JSON.parse(res.payload)
    }
  } else {
    res.json = function () {
      throw new Error('Response payload is not available with payloadAsStream: true')
    }
  }

  // Provide stream Readable for advanced user
  res.stream = function streamPayload () {
    if (response._lightMyRequest.stream) {
      return response._lightMyRequest.stream
    }
    return Readable.from(response._lightMyRequest.payloadChunks)
  }

  return res
}

// Throws away all written data to prevent response from buffering payload
function getNullSocket () {
  return new Writable({
    write (_chunk, _encoding, callback) {
      setImmediate(callback)
    }
  })
}

function serializeHeaders (response) {
  const headers = response._lightMyRequest.headers

  for (const headerName of Object.keys(headers)) {
    const headerValue = headers[headerName]
    if (Array.isArray(headerValue)) {
      headers[headerName] = headerValue.map(value => '' + value)
    } else {
      headers[headerName] = '' + headerValue
    }
  }
}

function copyHeaders (response) {
  response._lightMyRequest.headers = Object.assign({}, response.getHeaders())

  // Add raw headers
  ;['Date', 'Connection', 'Transfer-Encoding'].forEach((name) => {
    const regex = new RegExp('\\r\\n' + name + ': ([^\\r]*)\\r\\n')
    const field = response._header?.match(regex)
    if (field) {
      response._lightMyRequest.headers[name.toLowerCase()] = field[1]
    }
  })
}

module.exports = Response
