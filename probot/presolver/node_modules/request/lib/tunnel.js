'use strict'

var url = require('url')
var tunnel = require('tunnel-agent')

var defaultProxyHeaderWhiteList = [
  'accept',
  'accept-charset',
  'accept-encoding',
  'accept-language',
  'accept-ranges',
  'cache-control',
  'content-encoding',
  'content-language',
  'content-location',
  'content-md5',
  'content-range',
  'content-type',
  'connection',
  'date',
  'expect',
  'max-forwards',
  'pragma',
  'referer',
  'te',
  'user-agent',
  'via'
]

var defaultProxyHeaderExclusiveList = [
  'proxy-authorization'
]

function constructProxyHost (uriObject) {
  var port = uriObject.port
  var protocol = uriObject.protocol
  var proxyHost = uriObject.hostname + ':'

  if (port) {
    proxyHost += port
  } else if (protocol === 'https:') {
    proxyHost += '443'
  } else {
    proxyHost += '80'
  }

  return proxyHost
}

function constructProxyHeaderWhiteList (headers, proxyHeaderWhiteList) {
  var whiteList = proxyHeaderWhiteList
    .reduce(function (set, header) {
      set[header.toLowerCase()] = true
      return set
    }, {})

  return Object.keys(headers)
    .filter(function (header) {
      return whiteList[header.toLowerCase()]
    })
    .reduce(function (set, header) {
      set[header] = headers[header]
      return set
    }, {})
}

function constructTunnelOptions (request, proxyHeaders) {
  var proxy = request.proxy

  var tunnelOptions = {
    proxy: {
      host: proxy.hostname,
      port: +proxy.port,
      proxyAuth: proxy.auth,
      headers: proxyHeaders
    },
    headers: request.headers,
    ca: request.ca,
    cert: request.cert,
    key: request.key,
    passphrase: request.passphrase,
    pfx: request.pfx,
    ciphers: request.ciphers,
    rejectUnauthorized: request.rejectUnauthorized,
    secureOptions: request.secureOptions,
    secureProtocol: request.secureProtocol
  }

  return tunnelOptions
}

function constructTunnelFnName (uri, proxy) {
  var uriProtocol = (uri.protocol === 'https:' ? 'https' : 'http')
  var proxyProtocol = (proxy.protocol === 'https:' ? 'Https' : 'Http')
  return [uriProtocol, proxyProtocol].join('Over')
}

function getTunnelFn (request) {
  var uri = request.uri
  var proxy = request.proxy
  var tunnelFnName = constructTunnelFnName(uri, proxy)
  return tunnel[tunnelFnName]
}

function Tunnel (request) {
  this.request = request
  this.proxyHeaderWhiteList = defaultProxyHeaderWhiteList
  this.proxyHeaderExclusiveList = []
  if (typeof request.tunnel !== 'undefined') {
    this.tunnelOverride = request.tunnel
  }
}

Tunnel.prototype.isEnabled = function () {
  var self = this
  var request = self.request
    // Tunnel HTTPS by default. Allow the user to override this setting.

  // If self.tunnelOverride is set (the user specified a value), use it.
  if (typeof self.tunnelOverride !== 'undefined') {
    return self.tunnelOverride
  }

  // If the destination is HTTPS, tunnel.
  if (request.uri.protocol === 'https:') {
    return true
  }

  // Otherwise, do not use tunnel.
  return false
}

Tunnel.prototype.setup = function (options) {
  var self = this
  var request = self.request

  options = options || {}

  if (typeof request.proxy === 'string') {
    request.proxy = url.parse(request.proxy)
  }

  if (!request.proxy || !request.tunnel) {
    return false
  }

  // Setup Proxy Header Exclusive List and White List
  if (options.proxyHeaderWhiteList) {
    self.proxyHeaderWhiteList = options.proxyHeaderWhiteList
  }
  if (options.proxyHeaderExclusiveList) {
    self.proxyHeaderExclusiveList = options.proxyHeaderExclusiveList
  }

  var proxyHeaderExclusiveList = self.proxyHeaderExclusiveList.concat(defaultProxyHeaderExclusiveList)
  var proxyHeaderWhiteList = self.proxyHeaderWhiteList.concat(proxyHeaderExclusiveList)

  // Setup Proxy Headers and Proxy Headers Host
  // Only send the Proxy White Listed Header names
  var proxyHeaders = constructProxyHeaderWhiteList(request.headers, proxyHeaderWhiteList)
  proxyHeaders.host = constructProxyHost(request.uri)

  proxyHeaderExclusiveList.forEach(request.removeHeader, request)

  // Set Agent from Tunnel Data
  var tunnelFn = getTunnelFn(request)
  var tunnelOptions = constructTunnelOptions(request, proxyHeaders)
  request.agent = tunnelFn(tunnelOptions)

  return true
}

Tunnel.defaultProxyHeaderWhiteList = defaultProxyHeaderWhiteList
Tunnel.defaultProxyHeaderExclusiveList = defaultProxyHeaderExclusiveList
exports.Tunnel = Tunnel
