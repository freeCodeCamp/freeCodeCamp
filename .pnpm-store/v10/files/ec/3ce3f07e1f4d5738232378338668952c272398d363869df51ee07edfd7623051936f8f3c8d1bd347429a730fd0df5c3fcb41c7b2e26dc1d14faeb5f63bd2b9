'use strict'

const assert = require('node:assert')
const Request = require('./lib/request')
const Response = require('./lib/response')

const errorMessage = 'The dispatch function has already been invoked'

const optsValidator = require('./lib/config-validator')

function inject (dispatchFunc, options, callback) {
  if (callback === undefined) {
    return new Chain(dispatchFunc, options)
  } else {
    return doInject(dispatchFunc, options, callback)
  }
}

function supportStream1 (req, next) {
  const payload = req._lightMyRequest.payload
  if (!payload || payload._readableState || typeof payload.resume !== 'function') { // does quack like a modern stream
    return next()
  }

  // This is a non-compliant stream
  const chunks = []

  // We are accumulating because Readable.wrap() does not really work as expected
  // in this case.
  payload.on('data', (chunk) => chunks.push(Buffer.from(chunk)))

  payload.on('end', () => {
    const payload = Buffer.concat(chunks)
    req.headers['content-length'] = req.headers['content-length'] || ('' + payload.length)
    delete req.headers['transfer-encoding']
    req._lightMyRequest.payload = payload
    return next()
  })

  // Force to resume the stream. Needed for Stream 1
  payload.resume()
}

function makeRequest (dispatchFunc, server, req, res) {
  req.once('error', function (err) {
    if (this.destroyed) res.destroy(err)
  })

  req.once('close', function () {
    if (this.destroyed && !this._error) {
      res.destroy()
    }
  })

  return supportStream1(req, () => dispatchFunc.call(server, req, res))
}

function doInject (dispatchFunc, options, callback) {
  options = (typeof options === 'string' ? { url: options } : options)

  if (options.validate !== false) {
    assert(typeof dispatchFunc === 'function', 'dispatchFunc should be a function')
    const isOptionValid = optsValidator(options)
    if (!isOptionValid) {
      throw new Error(optsValidator.errors.map(e => e.message))
    }
  }

  const server = options.server || {}

  const RequestConstructor = options.Request
    ? Request.CustomRequest
    : Request

  // Express.js detection
  if (dispatchFunc.request && dispatchFunc.request.app === dispatchFunc) {
    Object.setPrototypeOf(Object.getPrototypeOf(dispatchFunc.request), RequestConstructor.prototype)
    Object.setPrototypeOf(Object.getPrototypeOf(dispatchFunc.response), Response.prototype)
  }

  if (typeof callback === 'function') {
    const req = new RequestConstructor(options)
    const res = new Response(req, callback)

    return makeRequest(dispatchFunc, server, req, res)
  } else {
    return new Promise((resolve, reject) => {
      const req = new RequestConstructor(options)
      const res = new Response(req, resolve, reject)

      makeRequest(dispatchFunc, server, req, res)
    })
  }
}

function Chain (dispatch, option) {
  if (typeof option === 'string') {
    this.option = { url: option }
  } else {
    this.option = Object.assign({}, option)
  }

  this.dispatch = dispatch
  this._hasInvoked = false
  this._promise = null

  if (this.option.autoStart !== false) {
    process.nextTick(() => {
      if (!this._hasInvoked) {
        this.end()
      }
    })
  }
}

const httpMethods = [
  'delete',
  'get',
  'head',
  'options',
  'patch',
  'post',
  'put',
  'trace'
]

httpMethods.forEach(method => {
  Chain.prototype[method] = function (url) {
    if (this._hasInvoked === true || this._promise) {
      throw new Error(errorMessage)
    }
    this.option.url = url
    this.option.method = method.toUpperCase()
    return this
  }
})

const chainMethods = [
  'body',
  'cookies',
  'headers',
  'payload',
  'query'
]

chainMethods.forEach(method => {
  Chain.prototype[method] = function (value) {
    if (this._hasInvoked === true || this._promise) {
      throw new Error(errorMessage)
    }
    this.option[method] = value
    return this
  }
})

Chain.prototype.end = function (callback) {
  if (this._hasInvoked === true || this._promise) {
    throw new Error(errorMessage)
  }
  this._hasInvoked = true
  if (typeof callback === 'function') {
    doInject(this.dispatch, this.option, callback)
  } else {
    this._promise = doInject(this.dispatch, this.option)
    return this._promise
  }
}

Object.getOwnPropertyNames(Promise.prototype).forEach(method => {
  if (method === 'constructor') return
  Chain.prototype[method] = function (...args) {
    if (!this._promise) {
      if (this._hasInvoked === true) {
        throw new Error(errorMessage)
      }
      this._hasInvoked = true
      this._promise = doInject(this.dispatch, this.option)
    }
    return this._promise[method](...args)
  }
})

function isInjection (obj) {
  return (
    obj instanceof Request ||
    obj instanceof Response ||
    obj?.constructor?.name === '_CustomLMRRequest'
  )
}

module.exports = inject
module.exports.default = inject
module.exports.inject = inject
module.exports.isInjection = isInjection
