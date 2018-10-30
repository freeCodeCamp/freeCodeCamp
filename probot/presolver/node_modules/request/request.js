'use strict'

var http = require('http')
var https = require('https')
var url = require('url')
var util = require('util')
var stream = require('stream')
var zlib = require('zlib')
var aws2 = require('aws-sign2')
var aws4 = require('aws4')
var httpSignature = require('http-signature')
var mime = require('mime-types')
var caseless = require('caseless')
var ForeverAgent = require('forever-agent')
var FormData = require('form-data')
var extend = require('extend')
var isstream = require('isstream')
var isTypedArray = require('is-typedarray').strict
var helpers = require('./lib/helpers')
var cookies = require('./lib/cookies')
var getProxyFromURI = require('./lib/getProxyFromURI')
var Querystring = require('./lib/querystring').Querystring
var Har = require('./lib/har').Har
var Auth = require('./lib/auth').Auth
var OAuth = require('./lib/oauth').OAuth
var hawk = require('./lib/hawk')
var Multipart = require('./lib/multipart').Multipart
var Redirect = require('./lib/redirect').Redirect
var Tunnel = require('./lib/tunnel').Tunnel
var now = require('performance-now')
var Buffer = require('safe-buffer').Buffer

var safeStringify = helpers.safeStringify
var isReadStream = helpers.isReadStream
var toBase64 = helpers.toBase64
var defer = helpers.defer
var copy = helpers.copy
var version = helpers.version
var globalCookieJar = cookies.jar()

var globalPool = {}

function filterForNonReserved (reserved, options) {
  // Filter out properties that are not reserved.
  // Reserved values are passed in at call site.

  var object = {}
  for (var i in options) {
    var notReserved = (reserved.indexOf(i) === -1)
    if (notReserved) {
      object[i] = options[i]
    }
  }
  return object
}

function filterOutReservedFunctions (reserved, options) {
  // Filter out properties that are functions and are reserved.
  // Reserved values are passed in at call site.

  var object = {}
  for (var i in options) {
    var isReserved = !(reserved.indexOf(i) === -1)
    var isFunction = (typeof options[i] === 'function')
    if (!(isReserved && isFunction)) {
      object[i] = options[i]
    }
  }
  return object
}

// Return a simpler request object to allow serialization
function requestToJSON () {
  var self = this
  return {
    uri: self.uri,
    method: self.method,
    headers: self.headers
  }
}

// Return a simpler response object to allow serialization
function responseToJSON () {
  var self = this
  return {
    statusCode: self.statusCode,
    body: self.body,
    headers: self.headers,
    request: requestToJSON.call(self.request)
  }
}

function Request (options) {
  // if given the method property in options, set property explicitMethod to true

  // extend the Request instance with any non-reserved properties
  // remove any reserved functions from the options object
  // set Request instance to be readable and writable
  // call init

  var self = this

  // start with HAR, then override with additional options
  if (options.har) {
    self._har = new Har(self)
    options = self._har.options(options)
  }

  stream.Stream.call(self)
  var reserved = Object.keys(Request.prototype)
  var nonReserved = filterForNonReserved(reserved, options)

  extend(self, nonReserved)
  options = filterOutReservedFunctions(reserved, options)

  self.readable = true
  self.writable = true
  if (options.method) {
    self.explicitMethod = true
  }
  self._qs = new Querystring(self)
  self._auth = new Auth(self)
  self._oauth = new OAuth(self)
  self._multipart = new Multipart(self)
  self._redirect = new Redirect(self)
  self._tunnel = new Tunnel(self)
  self.init(options)
}

util.inherits(Request, stream.Stream)

// Debugging
Request.debug = process.env.NODE_DEBUG && /\brequest\b/.test(process.env.NODE_DEBUG)
function debug () {
  if (Request.debug) {
    console.error('REQUEST %s', util.format.apply(util, arguments))
  }
}
Request.prototype.debug = debug

Request.prototype.init = function (options) {
  // init() contains all the code to setup the request object.
  // the actual outgoing request is not started until start() is called
  // this function is called from both the constructor and on redirect.
  var self = this
  if (!options) {
    options = {}
  }
  self.headers = self.headers ? copy(self.headers) : {}

  // Delete headers with value undefined since they break
  // ClientRequest.OutgoingMessage.setHeader in node 0.12
  for (var headerName in self.headers) {
    if (typeof self.headers[headerName] === 'undefined') {
      delete self.headers[headerName]
    }
  }

  caseless.httpify(self, self.headers)

  if (!self.method) {
    self.method = options.method || 'GET'
  }
  if (!self.localAddress) {
    self.localAddress = options.localAddress
  }

  self._qs.init(options)

  debug(options)
  if (!self.pool && self.pool !== false) {
    self.pool = globalPool
  }
  self.dests = self.dests || []
  self.__isRequestRequest = true

  // Protect against double callback
  if (!self._callback && self.callback) {
    self._callback = self.callback
    self.callback = function () {
      if (self._callbackCalled) {
        return // Print a warning maybe?
      }
      self._callbackCalled = true
      self._callback.apply(self, arguments)
    }
    self.on('error', self.callback.bind())
    self.on('complete', self.callback.bind(self, null))
  }

  // People use this property instead all the time, so support it
  if (!self.uri && self.url) {
    self.uri = self.url
    delete self.url
  }

  // If there's a baseUrl, then use it as the base URL (i.e. uri must be
  // specified as a relative path and is appended to baseUrl).
  if (self.baseUrl) {
    if (typeof self.baseUrl !== 'string') {
      return self.emit('error', new Error('options.baseUrl must be a string'))
    }

    if (typeof self.uri !== 'string') {
      return self.emit('error', new Error('options.uri must be a string when using options.baseUrl'))
    }

    if (self.uri.indexOf('//') === 0 || self.uri.indexOf('://') !== -1) {
      return self.emit('error', new Error('options.uri must be a path when using options.baseUrl'))
    }

    // Handle all cases to make sure that there's only one slash between
    // baseUrl and uri.
    var baseUrlEndsWithSlash = self.baseUrl.lastIndexOf('/') === self.baseUrl.length - 1
    var uriStartsWithSlash = self.uri.indexOf('/') === 0

    if (baseUrlEndsWithSlash && uriStartsWithSlash) {
      self.uri = self.baseUrl + self.uri.slice(1)
    } else if (baseUrlEndsWithSlash || uriStartsWithSlash) {
      self.uri = self.baseUrl + self.uri
    } else if (self.uri === '') {
      self.uri = self.baseUrl
    } else {
      self.uri = self.baseUrl + '/' + self.uri
    }
    delete self.baseUrl
  }

  // A URI is needed by this point, emit error if we haven't been able to get one
  if (!self.uri) {
    return self.emit('error', new Error('options.uri is a required argument'))
  }

  // If a string URI/URL was given, parse it into a URL object
  if (typeof self.uri === 'string') {
    self.uri = url.parse(self.uri)
  }

  // Some URL objects are not from a URL parsed string and need href added
  if (!self.uri.href) {
    self.uri.href = url.format(self.uri)
  }

  // DEPRECATED: Warning for users of the old Unix Sockets URL Scheme
  if (self.uri.protocol === 'unix:') {
    return self.emit('error', new Error('`unix://` URL scheme is no longer supported. Please use the format `http://unix:SOCKET:PATH`'))
  }

  // Support Unix Sockets
  if (self.uri.host === 'unix') {
    self.enableUnixSocket()
  }

  if (self.strictSSL === false) {
    self.rejectUnauthorized = false
  }

  if (!self.uri.pathname) { self.uri.pathname = '/' }

  if (!(self.uri.host || (self.uri.hostname && self.uri.port)) && !self.uri.isUnix) {
    // Invalid URI: it may generate lot of bad errors, like 'TypeError: Cannot call method `indexOf` of undefined' in CookieJar
    // Detect and reject it as soon as possible
    var faultyUri = url.format(self.uri)
    var message = 'Invalid URI "' + faultyUri + '"'
    if (Object.keys(options).length === 0) {
      // No option ? This can be the sign of a redirect
      // As this is a case where the user cannot do anything (they didn't call request directly with this URL)
      // they should be warned that it can be caused by a redirection (can save some hair)
      message += '. This can be caused by a crappy redirection.'
    }
    // This error was fatal
    self.abort()
    return self.emit('error', new Error(message))
  }

  if (!self.hasOwnProperty('proxy')) {
    self.proxy = getProxyFromURI(self.uri)
  }

  self.tunnel = self._tunnel.isEnabled()
  if (self.proxy) {
    self._tunnel.setup(options)
  }

  self._redirect.onRequest(options)

  self.setHost = false
  if (!self.hasHeader('host')) {
    var hostHeaderName = self.originalHostHeaderName || 'host'
    self.setHeader(hostHeaderName, self.uri.host)
    // Drop :port suffix from Host header if known protocol.
    if (self.uri.port) {
      if ((self.uri.port === '80' && self.uri.protocol === 'http:') ||
          (self.uri.port === '443' && self.uri.protocol === 'https:')) {
        self.setHeader(hostHeaderName, self.uri.hostname)
      }
    }
    self.setHost = true
  }

  self.jar(self._jar || options.jar)

  if (!self.uri.port) {
    if (self.uri.protocol === 'http:') { self.uri.port = 80 } else if (self.uri.protocol === 'https:') { self.uri.port = 443 }
  }

  if (self.proxy && !self.tunnel) {
    self.port = self.proxy.port
    self.host = self.proxy.hostname
  } else {
    self.port = self.uri.port
    self.host = self.uri.hostname
  }

  if (options.form) {
    self.form(options.form)
  }

  if (options.formData) {
    var formData = options.formData
    var requestForm = self.form()
    var appendFormValue = function (key, value) {
      if (value && value.hasOwnProperty('value') && value.hasOwnProperty('options')) {
        requestForm.append(key, value.value, value.options)
      } else {
        requestForm.append(key, value)
      }
    }
    for (var formKey in formData) {
      if (formData.hasOwnProperty(formKey)) {
        var formValue = formData[formKey]
        if (formValue instanceof Array) {
          for (var j = 0; j < formValue.length; j++) {
            appendFormValue(formKey, formValue[j])
          }
        } else {
          appendFormValue(formKey, formValue)
        }
      }
    }
  }

  if (options.qs) {
    self.qs(options.qs)
  }

  if (self.uri.path) {
    self.path = self.uri.path
  } else {
    self.path = self.uri.pathname + (self.uri.search || '')
  }

  if (self.path.length === 0) {
    self.path = '/'
  }

  // Auth must happen last in case signing is dependent on other headers
  if (options.aws) {
    self.aws(options.aws)
  }

  if (options.hawk) {
    self.hawk(options.hawk)
  }

  if (options.httpSignature) {
    self.httpSignature(options.httpSignature)
  }

  if (options.auth) {
    if (Object.prototype.hasOwnProperty.call(options.auth, 'username')) {
      options.auth.user = options.auth.username
    }
    if (Object.prototype.hasOwnProperty.call(options.auth, 'password')) {
      options.auth.pass = options.auth.password
    }

    self.auth(
      options.auth.user,
      options.auth.pass,
      options.auth.sendImmediately,
      options.auth.bearer
    )
  }

  if (self.gzip && !self.hasHeader('accept-encoding')) {
    self.setHeader('accept-encoding', 'gzip, deflate')
  }

  if (self.uri.auth && !self.hasHeader('authorization')) {
    var uriAuthPieces = self.uri.auth.split(':').map(function (item) { return self._qs.unescape(item) })
    self.auth(uriAuthPieces[0], uriAuthPieces.slice(1).join(':'), true)
  }

  if (!self.tunnel && self.proxy && self.proxy.auth && !self.hasHeader('proxy-authorization')) {
    var proxyAuthPieces = self.proxy.auth.split(':').map(function (item) { return self._qs.unescape(item) })
    var authHeader = 'Basic ' + toBase64(proxyAuthPieces.join(':'))
    self.setHeader('proxy-authorization', authHeader)
  }

  if (self.proxy && !self.tunnel) {
    self.path = (self.uri.protocol + '//' + self.uri.host + self.path)
  }

  if (options.json) {
    self.json(options.json)
  }
  if (options.multipart) {
    self.multipart(options.multipart)
  }

  if (options.time) {
    self.timing = true

    // NOTE: elapsedTime is deprecated in favor of .timings
    self.elapsedTime = self.elapsedTime || 0
  }

  function setContentLength () {
    if (isTypedArray(self.body)) {
      self.body = Buffer.from(self.body)
    }

    if (!self.hasHeader('content-length')) {
      var length
      if (typeof self.body === 'string') {
        length = Buffer.byteLength(self.body)
      } else if (Array.isArray(self.body)) {
        length = self.body.reduce(function (a, b) { return a + b.length }, 0)
      } else {
        length = self.body.length
      }

      if (length) {
        self.setHeader('content-length', length)
      } else {
        self.emit('error', new Error('Argument error, options.body.'))
      }
    }
  }
  if (self.body && !isstream(self.body)) {
    setContentLength()
  }

  if (options.oauth) {
    self.oauth(options.oauth)
  } else if (self._oauth.params && self.hasHeader('authorization')) {
    self.oauth(self._oauth.params)
  }

  var protocol = self.proxy && !self.tunnel ? self.proxy.protocol : self.uri.protocol
  var defaultModules = {'http:': http, 'https:': https}
  var httpModules = self.httpModules || {}

  self.httpModule = httpModules[protocol] || defaultModules[protocol]

  if (!self.httpModule) {
    return self.emit('error', new Error('Invalid protocol: ' + protocol))
  }

  if (options.ca) {
    self.ca = options.ca
  }

  if (!self.agent) {
    if (options.agentOptions) {
      self.agentOptions = options.agentOptions
    }

    if (options.agentClass) {
      self.agentClass = options.agentClass
    } else if (options.forever) {
      var v = version()
      // use ForeverAgent in node 0.10- only
      if (v.major === 0 && v.minor <= 10) {
        self.agentClass = protocol === 'http:' ? ForeverAgent : ForeverAgent.SSL
      } else {
        self.agentClass = self.httpModule.Agent
        self.agentOptions = self.agentOptions || {}
        self.agentOptions.keepAlive = true
      }
    } else {
      self.agentClass = self.httpModule.Agent
    }
  }

  if (self.pool === false) {
    self.agent = false
  } else {
    self.agent = self.agent || self.getNewAgent()
  }

  self.on('pipe', function (src) {
    if (self.ntick && self._started) {
      self.emit('error', new Error('You cannot pipe to this stream after the outbound request has started.'))
    }
    self.src = src
    if (isReadStream(src)) {
      if (!self.hasHeader('content-type')) {
        self.setHeader('content-type', mime.lookup(src.path))
      }
    } else {
      if (src.headers) {
        for (var i in src.headers) {
          if (!self.hasHeader(i)) {
            self.setHeader(i, src.headers[i])
          }
        }
      }
      if (self._json && !self.hasHeader('content-type')) {
        self.setHeader('content-type', 'application/json')
      }
      if (src.method && !self.explicitMethod) {
        self.method = src.method
      }
    }

  // self.on('pipe', function () {
  //   console.error('You have already piped to this stream. Pipeing twice is likely to break the request.')
  // })
  })

  defer(function () {
    if (self._aborted) {
      return
    }

    var end = function () {
      if (self._form) {
        if (!self._auth.hasAuth) {
          self._form.pipe(self)
        } else if (self._auth.hasAuth && self._auth.sentAuth) {
          self._form.pipe(self)
        }
      }
      if (self._multipart && self._multipart.chunked) {
        self._multipart.body.pipe(self)
      }
      if (self.body) {
        if (isstream(self.body)) {
          self.body.pipe(self)
        } else {
          setContentLength()
          if (Array.isArray(self.body)) {
            self.body.forEach(function (part) {
              self.write(part)
            })
          } else {
            self.write(self.body)
          }
          self.end()
        }
      } else if (self.requestBodyStream) {
        console.warn('options.requestBodyStream is deprecated, please pass the request object to stream.pipe.')
        self.requestBodyStream.pipe(self)
      } else if (!self.src) {
        if (self._auth.hasAuth && !self._auth.sentAuth) {
          self.end()
          return
        }
        if (self.method !== 'GET' && typeof self.method !== 'undefined') {
          self.setHeader('content-length', 0)
        }
        self.end()
      }
    }

    if (self._form && !self.hasHeader('content-length')) {
      // Before ending the request, we had to compute the length of the whole form, asyncly
      self.setHeader(self._form.getHeaders(), true)
      self._form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          self.setHeader('content-length', length)
        }
        end()
      })
    } else {
      end()
    }

    self.ntick = true
  })
}

Request.prototype.getNewAgent = function () {
  var self = this
  var Agent = self.agentClass
  var options = {}
  if (self.agentOptions) {
    for (var i in self.agentOptions) {
      options[i] = self.agentOptions[i]
    }
  }
  if (self.ca) {
    options.ca = self.ca
  }
  if (self.ciphers) {
    options.ciphers = self.ciphers
  }
  if (self.secureProtocol) {
    options.secureProtocol = self.secureProtocol
  }
  if (self.secureOptions) {
    options.secureOptions = self.secureOptions
  }
  if (typeof self.rejectUnauthorized !== 'undefined') {
    options.rejectUnauthorized = self.rejectUnauthorized
  }

  if (self.cert && self.key) {
    options.key = self.key
    options.cert = self.cert
  }

  if (self.pfx) {
    options.pfx = self.pfx
  }

  if (self.passphrase) {
    options.passphrase = self.passphrase
  }

  var poolKey = ''

  // different types of agents are in different pools
  if (Agent !== self.httpModule.Agent) {
    poolKey += Agent.name
  }

  // ca option is only relevant if proxy or destination are https
  var proxy = self.proxy
  if (typeof proxy === 'string') {
    proxy = url.parse(proxy)
  }
  var isHttps = (proxy && proxy.protocol === 'https:') || this.uri.protocol === 'https:'

  if (isHttps) {
    if (options.ca) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.ca
    }

    if (typeof options.rejectUnauthorized !== 'undefined') {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.rejectUnauthorized
    }

    if (options.cert) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.cert.toString('ascii') + options.key.toString('ascii')
    }

    if (options.pfx) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.pfx.toString('ascii')
    }

    if (options.ciphers) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.ciphers
    }

    if (options.secureProtocol) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.secureProtocol
    }

    if (options.secureOptions) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.secureOptions
    }
  }

  if (self.pool === globalPool && !poolKey && Object.keys(options).length === 0 && self.httpModule.globalAgent) {
    // not doing anything special.  Use the globalAgent
    return self.httpModule.globalAgent
  }

  // we're using a stored agent.  Make sure it's protocol-specific
  poolKey = self.uri.protocol + poolKey

  // generate a new agent for this setting if none yet exists
  if (!self.pool[poolKey]) {
    self.pool[poolKey] = new Agent(options)
    // properly set maxSockets on new agents
    if (self.pool.maxSockets) {
      self.pool[poolKey].maxSockets = self.pool.maxSockets
    }
  }

  return self.pool[poolKey]
}

Request.prototype.start = function () {
  // start() is called once we are ready to send the outgoing HTTP request.
  // this is usually called on the first write(), end() or on nextTick()
  var self = this

  if (self.timing) {
    // All timings will be relative to this request's startTime.  In order to do this,
    // we need to capture the wall-clock start time (via Date), immediately followed
    // by the high-resolution timer (via now()).  While these two won't be set
    // at the _exact_ same time, they should be close enough to be able to calculate
    // high-resolution, monotonically non-decreasing timestamps relative to startTime.
    var startTime = new Date().getTime()
    var startTimeNow = now()
  }

  if (self._aborted) {
    return
  }

  self._started = true
  self.method = self.method || 'GET'
  self.href = self.uri.href

  if (self.src && self.src.stat && self.src.stat.size && !self.hasHeader('content-length')) {
    self.setHeader('content-length', self.src.stat.size)
  }
  if (self._aws) {
    self.aws(self._aws, true)
  }

  // We have a method named auth, which is completely different from the http.request
  // auth option.  If we don't remove it, we're gonna have a bad time.
  var reqOptions = copy(self)
  delete reqOptions.auth

  debug('make request', self.uri.href)

  // node v6.8.0 now supports a `timeout` value in `http.request()`, but we
  // should delete it for now since we handle timeouts manually for better
  // consistency with node versions before v6.8.0
  delete reqOptions.timeout

  try {
    self.req = self.httpModule.request(reqOptions)
  } catch (err) {
    self.emit('error', err)
    return
  }

  if (self.timing) {
    self.startTime = startTime
    self.startTimeNow = startTimeNow

    // Timing values will all be relative to startTime (by comparing to startTimeNow
    // so we have an accurate clock)
    self.timings = {}
  }

  var timeout
  if (self.timeout && !self.timeoutTimer) {
    if (self.timeout < 0) {
      timeout = 0
    } else if (typeof self.timeout === 'number' && isFinite(self.timeout)) {
      timeout = self.timeout
    }
  }

  self.req.on('response', self.onRequestResponse.bind(self))
  self.req.on('error', self.onRequestError.bind(self))
  self.req.on('drain', function () {
    self.emit('drain')
  })

  self.req.on('socket', function (socket) {
    // `._connecting` was the old property which was made public in node v6.1.0
    var isConnecting = socket._connecting || socket.connecting
    if (self.timing) {
      self.timings.socket = now() - self.startTimeNow

      if (isConnecting) {
        var onLookupTiming = function () {
          self.timings.lookup = now() - self.startTimeNow
        }

        var onConnectTiming = function () {
          self.timings.connect = now() - self.startTimeNow
        }

        socket.once('lookup', onLookupTiming)
        socket.once('connect', onConnectTiming)

        // clean up timing event listeners if needed on error
        self.req.once('error', function () {
          socket.removeListener('lookup', onLookupTiming)
          socket.removeListener('connect', onConnectTiming)
        })
      }
    }

    var setReqTimeout = function () {
      // This timeout sets the amount of time to wait *between* bytes sent
      // from the server once connected.
      //
      // In particular, it's useful for erroring if the server fails to send
      // data halfway through streaming a response.
      self.req.setTimeout(timeout, function () {
        if (self.req) {
          self.abort()
          var e = new Error('ESOCKETTIMEDOUT')
          e.code = 'ESOCKETTIMEDOUT'
          e.connect = false
          self.emit('error', e)
        }
      })
    }
    if (timeout !== undefined) {
      // Only start the connection timer if we're actually connecting a new
      // socket, otherwise if we're already connected (because this is a
      // keep-alive connection) do not bother. This is important since we won't
      // get a 'connect' event for an already connected socket.
      if (isConnecting) {
        var onReqSockConnect = function () {
          socket.removeListener('connect', onReqSockConnect)
          clearTimeout(self.timeoutTimer)
          self.timeoutTimer = null
          setReqTimeout()
        }

        socket.on('connect', onReqSockConnect)

        self.req.on('error', function (err) { // eslint-disable-line handle-callback-err
          socket.removeListener('connect', onReqSockConnect)
        })

        // Set a timeout in memory - this block will throw if the server takes more
        // than `timeout` to write the HTTP status and headers (corresponding to
        // the on('response') event on the client). NB: this measures wall-clock
        // time, not the time between bytes sent by the server.
        self.timeoutTimer = setTimeout(function () {
          socket.removeListener('connect', onReqSockConnect)
          self.abort()
          var e = new Error('ETIMEDOUT')
          e.code = 'ETIMEDOUT'
          e.connect = true
          self.emit('error', e)
        }, timeout)
      } else {
        // We're already connected
        setReqTimeout()
      }
    }
    self.emit('socket', socket)
  })

  self.emit('request', self.req)
}

Request.prototype.onRequestError = function (error) {
  var self = this
  if (self._aborted) {
    return
  }
  if (self.req && self.req._reusedSocket && error.code === 'ECONNRESET' &&
    self.agent.addRequestNoreuse) {
    self.agent = { addRequest: self.agent.addRequestNoreuse.bind(self.agent) }
    self.start()
    self.req.end()
    return
  }
  if (self.timeout && self.timeoutTimer) {
    clearTimeout(self.timeoutTimer)
    self.timeoutTimer = null
  }
  self.emit('error', error)
}

Request.prototype.onRequestResponse = function (response) {
  var self = this

  if (self.timing) {
    self.timings.response = now() - self.startTimeNow
  }

  debug('onRequestResponse', self.uri.href, response.statusCode, response.headers)
  response.on('end', function () {
    if (self.timing) {
      self.timings.end = now() - self.startTimeNow
      response.timingStart = self.startTime

      // fill in the blanks for any periods that didn't trigger, such as
      // no lookup or connect due to keep alive
      if (!self.timings.socket) {
        self.timings.socket = 0
      }
      if (!self.timings.lookup) {
        self.timings.lookup = self.timings.socket
      }
      if (!self.timings.connect) {
        self.timings.connect = self.timings.lookup
      }
      if (!self.timings.response) {
        self.timings.response = self.timings.connect
      }

      debug('elapsed time', self.timings.end)

      // elapsedTime includes all redirects
      self.elapsedTime += Math.round(self.timings.end)

      // NOTE: elapsedTime is deprecated in favor of .timings
      response.elapsedTime = self.elapsedTime

      // timings is just for the final fetch
      response.timings = self.timings

      // pre-calculate phase timings as well
      response.timingPhases = {
        wait: self.timings.socket,
        dns: self.timings.lookup - self.timings.socket,
        tcp: self.timings.connect - self.timings.lookup,
        firstByte: self.timings.response - self.timings.connect,
        download: self.timings.end - self.timings.response,
        total: self.timings.end
      }
    }
    debug('response end', self.uri.href, response.statusCode, response.headers)
  })

  if (self._aborted) {
    debug('aborted', self.uri.href)
    response.resume()
    return
  }

  self.response = response
  response.request = self
  response.toJSON = responseToJSON

  // XXX This is different on 0.10, because SSL is strict by default
  if (self.httpModule === https &&
    self.strictSSL && (!response.hasOwnProperty('socket') ||
    !response.socket.authorized)) {
    debug('strict ssl error', self.uri.href)
    var sslErr = response.hasOwnProperty('socket') ? response.socket.authorizationError : self.uri.href + ' does not support SSL'
    self.emit('error', new Error('SSL Error: ' + sslErr))
    return
  }

  // Save the original host before any redirect (if it changes, we need to
  // remove any authorization headers).  Also remember the case of the header
  // name because lots of broken servers expect Host instead of host and we
  // want the caller to be able to specify this.
  self.originalHost = self.getHeader('host')
  if (!self.originalHostHeaderName) {
    self.originalHostHeaderName = self.hasHeader('host')
  }
  if (self.setHost) {
    self.removeHeader('host')
  }
  if (self.timeout && self.timeoutTimer) {
    clearTimeout(self.timeoutTimer)
    self.timeoutTimer = null
  }

  var targetCookieJar = (self._jar && self._jar.setCookie) ? self._jar : globalCookieJar
  var addCookie = function (cookie) {
    // set the cookie if it's domain in the href's domain.
    try {
      targetCookieJar.setCookie(cookie, self.uri.href, {ignoreError: true})
    } catch (e) {
      self.emit('error', e)
    }
  }

  response.caseless = caseless(response.headers)

  if (response.caseless.has('set-cookie') && (!self._disableCookies)) {
    var headerName = response.caseless.has('set-cookie')
    if (Array.isArray(response.headers[headerName])) {
      response.headers[headerName].forEach(addCookie)
    } else {
      addCookie(response.headers[headerName])
    }
  }

  if (self._redirect.onResponse(response)) {
    return // Ignore the rest of the response
  } else {
    // Be a good stream and emit end when the response is finished.
    // Hack to emit end on close because of a core bug that never fires end
    response.on('close', function () {
      if (!self._ended) {
        self.response.emit('end')
      }
    })

    response.once('end', function () {
      self._ended = true
    })

    var noBody = function (code) {
      return (
        self.method === 'HEAD' ||
        // Informational
        (code >= 100 && code < 200) ||
        // No Content
        code === 204 ||
        // Not Modified
        code === 304
      )
    }

    var responseContent
    if (self.gzip && !noBody(response.statusCode)) {
      var contentEncoding = response.headers['content-encoding'] || 'identity'
      contentEncoding = contentEncoding.trim().toLowerCase()

      // Be more lenient with decoding compressed responses, since (very rarely)
      // servers send slightly invalid gzip responses that are still accepted
      // by common browsers.
      // Always using Z_SYNC_FLUSH is what cURL does.
      var zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH
      }

      if (contentEncoding === 'gzip') {
        responseContent = zlib.createGunzip(zlibOptions)
        response.pipe(responseContent)
      } else if (contentEncoding === 'deflate') {
        responseContent = zlib.createInflate(zlibOptions)
        response.pipe(responseContent)
      } else {
        // Since previous versions didn't check for Content-Encoding header,
        // ignore any invalid values to preserve backwards-compatibility
        if (contentEncoding !== 'identity') {
          debug('ignoring unrecognized Content-Encoding ' + contentEncoding)
        }
        responseContent = response
      }
    } else {
      responseContent = response
    }

    if (self.encoding) {
      if (self.dests.length !== 0) {
        console.error('Ignoring encoding parameter as this stream is being piped to another stream which makes the encoding option invalid.')
      } else {
        responseContent.setEncoding(self.encoding)
      }
    }

    if (self._paused) {
      responseContent.pause()
    }

    self.responseContent = responseContent

    self.emit('response', response)

    self.dests.forEach(function (dest) {
      self.pipeDest(dest)
    })

    responseContent.on('data', function (chunk) {
      if (self.timing && !self.responseStarted) {
        self.responseStartTime = (new Date()).getTime()

        // NOTE: responseStartTime is deprecated in favor of .timings
        response.responseStartTime = self.responseStartTime
      }
      self._destdata = true
      self.emit('data', chunk)
    })
    responseContent.once('end', function (chunk) {
      self.emit('end', chunk)
    })
    responseContent.on('error', function (error) {
      self.emit('error', error)
    })
    responseContent.on('close', function () { self.emit('close') })

    if (self.callback) {
      self.readResponseBody(response)
    } else { // if no callback
      self.on('end', function () {
        if (self._aborted) {
          debug('aborted', self.uri.href)
          return
        }
        self.emit('complete', response)
      })
    }
  }
  debug('finish init function', self.uri.href)
}

Request.prototype.readResponseBody = function (response) {
  var self = this
  debug("reading response's body")
  var buffers = []
  var bufferLength = 0
  var strings = []

  self.on('data', function (chunk) {
    if (!Buffer.isBuffer(chunk)) {
      strings.push(chunk)
    } else if (chunk.length) {
      bufferLength += chunk.length
      buffers.push(chunk)
    }
  })
  self.on('end', function () {
    debug('end event', self.uri.href)
    if (self._aborted) {
      debug('aborted', self.uri.href)
      // `buffer` is defined in the parent scope and used in a closure it exists for the life of the request.
      // This can lead to leaky behavior if the user retains a reference to the request object.
      buffers = []
      bufferLength = 0
      return
    }

    if (bufferLength) {
      debug('has body', self.uri.href, bufferLength)
      response.body = Buffer.concat(buffers, bufferLength)
      if (self.encoding !== null) {
        response.body = response.body.toString(self.encoding)
      }
      // `buffer` is defined in the parent scope and used in a closure it exists for the life of the Request.
      // This can lead to leaky behavior if the user retains a reference to the request object.
      buffers = []
      bufferLength = 0
    } else if (strings.length) {
      // The UTF8 BOM [0xEF,0xBB,0xBF] is converted to [0xFE,0xFF] in the JS UTC16/UCS2 representation.
      // Strip this value out when the encoding is set to 'utf8', as upstream consumers won't expect it and it breaks JSON.parse().
      if (self.encoding === 'utf8' && strings[0].length > 0 && strings[0][0] === '\uFEFF') {
        strings[0] = strings[0].substring(1)
      }
      response.body = strings.join('')
    }

    if (self._json) {
      try {
        response.body = JSON.parse(response.body, self._jsonReviver)
      } catch (e) {
        debug('invalid JSON received', self.uri.href)
      }
    }
    debug('emitting complete', self.uri.href)
    if (typeof response.body === 'undefined' && !self._json) {
      response.body = self.encoding === null ? Buffer.alloc(0) : ''
    }
    self.emit('complete', response, response.body)
  })
}

Request.prototype.abort = function () {
  var self = this
  self._aborted = true

  if (self.req) {
    self.req.abort()
  } else if (self.response) {
    self.response.destroy()
  }

  self.emit('abort')
}

Request.prototype.pipeDest = function (dest) {
  var self = this
  var response = self.response
  // Called after the response is received
  if (dest.headers && !dest.headersSent) {
    if (response.caseless.has('content-type')) {
      var ctname = response.caseless.has('content-type')
      if (dest.setHeader) {
        dest.setHeader(ctname, response.headers[ctname])
      } else {
        dest.headers[ctname] = response.headers[ctname]
      }
    }

    if (response.caseless.has('content-length')) {
      var clname = response.caseless.has('content-length')
      if (dest.setHeader) {
        dest.setHeader(clname, response.headers[clname])
      } else {
        dest.headers[clname] = response.headers[clname]
      }
    }
  }
  if (dest.setHeader && !dest.headersSent) {
    for (var i in response.headers) {
      // If the response content is being decoded, the Content-Encoding header
      // of the response doesn't represent the piped content, so don't pass it.
      if (!self.gzip || i !== 'content-encoding') {
        dest.setHeader(i, response.headers[i])
      }
    }
    dest.statusCode = response.statusCode
  }
  if (self.pipefilter) {
    self.pipefilter(response, dest)
  }
}

Request.prototype.qs = function (q, clobber) {
  var self = this
  var base
  if (!clobber && self.uri.query) {
    base = self._qs.parse(self.uri.query)
  } else {
    base = {}
  }

  for (var i in q) {
    base[i] = q[i]
  }

  var qs = self._qs.stringify(base)

  if (qs === '') {
    return self
  }

  self.uri = url.parse(self.uri.href.split('?')[0] + '?' + qs)
  self.url = self.uri
  self.path = self.uri.path

  if (self.uri.host === 'unix') {
    self.enableUnixSocket()
  }

  return self
}
Request.prototype.form = function (form) {
  var self = this
  if (form) {
    if (!/^application\/x-www-form-urlencoded\b/.test(self.getHeader('content-type'))) {
      self.setHeader('content-type', 'application/x-www-form-urlencoded')
    }
    self.body = (typeof form === 'string')
      ? self._qs.rfc3986(form.toString('utf8'))
      : self._qs.stringify(form).toString('utf8')
    return self
  }
  // create form-data object
  self._form = new FormData()
  self._form.on('error', function (err) {
    err.message = 'form-data: ' + err.message
    self.emit('error', err)
    self.abort()
  })
  return self._form
}
Request.prototype.multipart = function (multipart) {
  var self = this

  self._multipart.onRequest(multipart)

  if (!self._multipart.chunked) {
    self.body = self._multipart.body
  }

  return self
}
Request.prototype.json = function (val) {
  var self = this

  if (!self.hasHeader('accept')) {
    self.setHeader('accept', 'application/json')
  }

  if (typeof self.jsonReplacer === 'function') {
    self._jsonReplacer = self.jsonReplacer
  }

  self._json = true
  if (typeof val === 'boolean') {
    if (self.body !== undefined) {
      if (!/^application\/x-www-form-urlencoded\b/.test(self.getHeader('content-type'))) {
        self.body = safeStringify(self.body, self._jsonReplacer)
      } else {
        self.body = self._qs.rfc3986(self.body)
      }
      if (!self.hasHeader('content-type')) {
        self.setHeader('content-type', 'application/json')
      }
    }
  } else {
    self.body = safeStringify(val, self._jsonReplacer)
    if (!self.hasHeader('content-type')) {
      self.setHeader('content-type', 'application/json')
    }
  }

  if (typeof self.jsonReviver === 'function') {
    self._jsonReviver = self.jsonReviver
  }

  return self
}
Request.prototype.getHeader = function (name, headers) {
  var self = this
  var result, re, match
  if (!headers) {
    headers = self.headers
  }
  Object.keys(headers).forEach(function (key) {
    if (key.length !== name.length) {
      return
    }
    re = new RegExp(name, 'i')
    match = key.match(re)
    if (match) {
      result = headers[key]
    }
  })
  return result
}
Request.prototype.enableUnixSocket = function () {
  // Get the socket & request paths from the URL
  var unixParts = this.uri.path.split(':')
  var host = unixParts[0]
  var path = unixParts[1]
  // Apply unix properties to request
  this.socketPath = host
  this.uri.pathname = path
  this.uri.path = path
  this.uri.host = host
  this.uri.hostname = host
  this.uri.isUnix = true
}

Request.prototype.auth = function (user, pass, sendImmediately, bearer) {
  var self = this

  self._auth.onRequest(user, pass, sendImmediately, bearer)

  return self
}
Request.prototype.aws = function (opts, now) {
  var self = this

  if (!now) {
    self._aws = opts
    return self
  }

  if (opts.sign_version === 4 || opts.sign_version === '4') {
    // use aws4
    var options = {
      host: self.uri.host,
      path: self.uri.path,
      method: self.method,
      headers: self.headers,
      body: self.body
    }
    if (opts.service) {
      options.service = opts.service
    }
    var signRes = aws4.sign(options, {
      accessKeyId: opts.key,
      secretAccessKey: opts.secret,
      sessionToken: opts.session
    })
    self.setHeader('authorization', signRes.headers.Authorization)
    self.setHeader('x-amz-date', signRes.headers['X-Amz-Date'])
    if (signRes.headers['X-Amz-Security-Token']) {
      self.setHeader('x-amz-security-token', signRes.headers['X-Amz-Security-Token'])
    }
  } else {
    // default: use aws-sign2
    var date = new Date()
    self.setHeader('date', date.toUTCString())
    var auth = {
      key: opts.key,
      secret: opts.secret,
      verb: self.method.toUpperCase(),
      date: date,
      contentType: self.getHeader('content-type') || '',
      md5: self.getHeader('content-md5') || '',
      amazonHeaders: aws2.canonicalizeHeaders(self.headers)
    }
    var path = self.uri.path
    if (opts.bucket && path) {
      auth.resource = '/' + opts.bucket + path
    } else if (opts.bucket && !path) {
      auth.resource = '/' + opts.bucket
    } else if (!opts.bucket && path) {
      auth.resource = path
    } else if (!opts.bucket && !path) {
      auth.resource = '/'
    }
    auth.resource = aws2.canonicalizeResource(auth.resource)
    self.setHeader('authorization', aws2.authorization(auth))
  }

  return self
}
Request.prototype.httpSignature = function (opts) {
  var self = this
  httpSignature.signRequest({
    getHeader: function (header) {
      return self.getHeader(header, self.headers)
    },
    setHeader: function (header, value) {
      self.setHeader(header, value)
    },
    method: self.method,
    path: self.path
  }, opts)
  debug('httpSignature authorization', self.getHeader('authorization'))

  return self
}
Request.prototype.hawk = function (opts) {
  var self = this
  self.setHeader('Authorization', hawk.header(self.uri, self.method, opts))
}
Request.prototype.oauth = function (_oauth) {
  var self = this

  self._oauth.onRequest(_oauth)

  return self
}

Request.prototype.jar = function (jar) {
  var self = this
  var cookies

  if (self._redirect.redirectsFollowed === 0) {
    self.originalCookieHeader = self.getHeader('cookie')
  }

  if (!jar) {
    // disable cookies
    cookies = false
    self._disableCookies = true
  } else {
    var targetCookieJar = (jar && jar.getCookieString) ? jar : globalCookieJar
    var urihref = self.uri.href
    // fetch cookie in the Specified host
    if (targetCookieJar) {
      cookies = targetCookieJar.getCookieString(urihref)
    }
  }

  // if need cookie and cookie is not empty
  if (cookies && cookies.length) {
    if (self.originalCookieHeader) {
      // Don't overwrite existing Cookie header
      self.setHeader('cookie', self.originalCookieHeader + '; ' + cookies)
    } else {
      self.setHeader('cookie', cookies)
    }
  }
  self._jar = jar
  return self
}

// Stream API
Request.prototype.pipe = function (dest, opts) {
  var self = this

  if (self.response) {
    if (self._destdata) {
      self.emit('error', new Error('You cannot pipe after data has been emitted from the response.'))
    } else if (self._ended) {
      self.emit('error', new Error('You cannot pipe after the response has been ended.'))
    } else {
      stream.Stream.prototype.pipe.call(self, dest, opts)
      self.pipeDest(dest)
      return dest
    }
  } else {
    self.dests.push(dest)
    stream.Stream.prototype.pipe.call(self, dest, opts)
    return dest
  }
}
Request.prototype.write = function () {
  var self = this
  if (self._aborted) { return }

  if (!self._started) {
    self.start()
  }
  if (self.req) {
    return self.req.write.apply(self.req, arguments)
  }
}
Request.prototype.end = function (chunk) {
  var self = this
  if (self._aborted) { return }

  if (chunk) {
    self.write(chunk)
  }
  if (!self._started) {
    self.start()
  }
  if (self.req) {
    self.req.end()
  }
}
Request.prototype.pause = function () {
  var self = this
  if (!self.responseContent) {
    self._paused = true
  } else {
    self.responseContent.pause.apply(self.responseContent, arguments)
  }
}
Request.prototype.resume = function () {
  var self = this
  if (!self.responseContent) {
    self._paused = false
  } else {
    self.responseContent.resume.apply(self.responseContent, arguments)
  }
}
Request.prototype.destroy = function () {
  var self = this
  if (!self._ended) {
    self.end()
  } else if (self.response) {
    self.response.destroy()
  }
}

Request.defaultProxyHeaderWhiteList =
  Tunnel.defaultProxyHeaderWhiteList.slice()

Request.defaultProxyHeaderExclusiveList =
  Tunnel.defaultProxyHeaderExclusiveList.slice()

// Exports

Request.prototype.toJSON = requestToJSON
module.exports = Request
