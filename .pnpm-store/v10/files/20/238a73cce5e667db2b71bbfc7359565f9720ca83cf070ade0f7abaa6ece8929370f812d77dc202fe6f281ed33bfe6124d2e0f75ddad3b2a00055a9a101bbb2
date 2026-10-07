'use strict'

const http = require('node:http')
const https = require('node:https')
const http2 = require('node:http2')
const dns = require('node:dns')
const os = require('node:os')

const { kState, kOptions, kServerBindings, kHttp2ServerSessions } = require('./symbols')
const { FSTWRN003 } = require('./warnings')
const { onListenHookRunner } = require('./hooks')
const {
  FST_ERR_REOPENED_CLOSE_SERVER,
  FST_ERR_REOPENED_SERVER,
  FST_ERR_LISTEN_OPTIONS_INVALID,
  FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE
} = require('./errors')
const noopSet = require('./noop-set')
const PonyPromise = require('./promise')

module.exports.createServer = createServer

function defaultResolveServerListeningText (address) {
  return `Server listening at ${address}`
}

function createServer (options, httpHandler) {
  const server = getServerInstance(options, httpHandler)

  // `this` is the Fastify object
  function listen (
    listenOptions = { port: 0, host: 'localhost' },
    cb = undefined
  ) {
    if (typeof cb === 'function') {
      if (cb.constructor.name === 'AsyncFunction') {
        FSTWRN003('listen method')
      }

      listenOptions.cb = cb
    }
    if (listenOptions.signal) {
      if (typeof listenOptions.signal.on !== 'function' && typeof listenOptions.signal.addEventListener !== 'function') {
        throw new FST_ERR_LISTEN_OPTIONS_INVALID('Invalid options.signal')
      }

      // copy the current signal state
      this[kState].aborted = listenOptions.signal.aborted

      if (this[kState].aborted) {
        return this.close()
      } else {
        const onAborted = () => {
          this[kState].aborted = true
          this.close()
        }
        listenOptions.signal.addEventListener('abort', onAborted, { once: true })
      }
    }

    // If we have a path specified, don't default host to 'localhost' so we don't end up listening
    // on both path and host
    // See https://github.com/fastify/fastify/issues/4007
    let host
    if (listenOptions.path == null) {
      host = listenOptions.host ?? 'localhost'
    } else {
      host = listenOptions.host
    }
    if (!Object.hasOwn(listenOptions, 'host') ||
      listenOptions.host == null) {
      listenOptions.host = host
    }
    if (host === 'localhost') {
      listenOptions.cb = (err, address) => {
        if (err) {
          // the server did not start
          cb(err, address)
          return
        }

        multipleBindings.call(this, server, httpHandler, options, listenOptions, () => {
          this[kState].listening = true
          cb(null, address)
          onListenHookRunner(this)
        })
      }
    } else {
      listenOptions.cb = (err, address) => {
        // the server did not start
        if (err) {
          cb(err, address)
          return
        }
        this[kState].listening = true
        cb(null, address)
        onListenHookRunner(this)
      }
    }

    // https://github.com/nodejs/node/issues/9390
    // If listening to 'localhost', listen to both 127.0.0.1 or ::1 if they are available.
    // If listening to 127.0.0.1, only listen to 127.0.0.1.
    // If listening to ::1, only listen to ::1.

    if (cb === undefined) {
      const listening = listenPromise.call(this, server, listenOptions)
      return listening.then(address => {
        const { promise, resolve } = PonyPromise.withResolvers()
        if (host === 'localhost') {
          multipleBindings.call(this, server, httpHandler, options, listenOptions, () => {
            this[kState].listening = true
            resolve(address)
            onListenHookRunner(this)
          })
        } else {
          resolve(address)
          onListenHookRunner(this)
        }
        return promise
      })
    }

    this.ready(listenCallback.call(this, server, listenOptions))
  }

  const serverHasCloseAllConnections = typeof server.closeAllConnections === 'function'
  const serverHasCloseIdleConnections = typeof server.closeIdleConnections === 'function'
  const serverHasCloseHttp2Sessions = typeof server.closeHttp2Sessions === 'function'

  let forceCloseConnections = options.forceCloseConnections
  if (forceCloseConnections === 'idle' && !serverHasCloseIdleConnections) {
    throw new FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE()
  } else if (typeof forceCloseConnections !== 'boolean') {
    /* istanbul ignore next: only one branch can be valid in a given Node.js version */
    forceCloseConnections = serverHasCloseIdleConnections ? 'idle' : false
  }

  const keepAliveConnections = !serverHasCloseAllConnections && forceCloseConnections === true ? new Set() : noopSet()

  return {
    server,
    listen,
    forceCloseConnections,
    serverHasCloseAllConnections,
    serverHasCloseHttp2Sessions,
    keepAliveConnections
  }
}

function multipleBindings (mainServer, httpHandler, serverOpts, listenOptions, onListen) {
  // the main server is started, we need to start the secondary servers
  this[kState].listening = false

  // let's check if we need to bind additional addresses
  dns.lookup(listenOptions.host, { all: true }, (dnsErr, addresses) => {
    if (dnsErr || this[kState].aborted) {
      // not blocking the main server listening
      // this.log.warn('dns.lookup error:', dnsErr)
      onListen()
      return
    }

    const isMainServerListening = mainServer.listening && serverOpts.serverFactory

    let binding = 0
    let bound = 0
    if (!isMainServerListening) {
      const primaryAddress = mainServer.address()
      for (const adr of addresses) {
        if (adr.address !== primaryAddress.address) {
          binding++
          const secondaryOpts = Object.assign({}, listenOptions, {
            host: adr.address,
            port: primaryAddress.port,
            cb: (_ignoreErr) => {
              bound++

              if (!_ignoreErr) {
                this[kServerBindings].push(secondaryServer)
              }

              if (bound === binding) {
                // regardless of the error, we are done
                onListen()
              }
            }
          })

          const secondaryServer = getServerInstance(serverOpts, httpHandler)
          const closeSecondary = () => {
            // To avoid falling into situations where the close of the
            // secondary server is triggered before the preClose hook
            // is done running, we better wait until the main server is closed.
            // No new TCP connections are accepted
            // We swallow any error from the secondary server
            secondaryServer.close(() => {})
            if (typeof secondaryServer.closeAllConnections === 'function' && serverOpts.forceCloseConnections === true) {
              secondaryServer.closeAllConnections()
            }
            if (typeof secondaryServer.closeHttp2Sessions === 'function') {
              secondaryServer.closeHttp2Sessions()
            }
          }

          secondaryServer.on('upgrade', mainServer.emit.bind(mainServer, 'upgrade'))
          mainServer.on('unref', closeSecondary)
          mainServer.on('close', closeSecondary)
          mainServer.on('error', closeSecondary)
          this[kState].listening = false
          listenCallback.call(this, secondaryServer, secondaryOpts)()
        }
      }
    }
    // no extra bindings are necessary
    if (binding === 0) {
      onListen()
      return
    }

    // in test files we are using unref so we need to propagate the unref event
    // to the secondary servers. It is valid only when the user is
    // listening on localhost
    const originUnref = mainServer.unref
    mainServer.unref = function () {
      originUnref.call(mainServer)
      mainServer.emit('unref')
    }
  })
}

function listenCallback (server, listenOptions) {
  const wrap = (err) => {
    server.removeListener('error', wrap)
    server.removeListener('listening', wrap)
    if (!err) {
      const address = logServerAddress.call(
        this,
        server,
        listenOptions.listenTextResolver || defaultResolveServerListeningText
      )
      listenOptions.cb(null, address)
    } else {
      this[kState].listening = false
      listenOptions.cb(err, null)
    }
  }

  return (err) => {
    if (err != null) return listenOptions.cb(err)

    if (this[kState].listening && this[kState].closing) {
      return listenOptions.cb(new FST_ERR_REOPENED_CLOSE_SERVER(), null)
    }
    if (this[kState].listening) {
      return listenOptions.cb(new FST_ERR_REOPENED_SERVER(), null)
    }

    server.once('error', wrap)
    if (!this[kState].closing) {
      server.once('listening', wrap)
      server.listen(listenOptions)
      this[kState].listening = true
    }
  }
}

function listenPromise (server, listenOptions) {
  if (this[kState].listening && this[kState].closing) {
    return Promise.reject(new FST_ERR_REOPENED_CLOSE_SERVER())
  }
  if (this[kState].listening) {
    return Promise.reject(new FST_ERR_REOPENED_SERVER())
  }

  return this.ready().then(() => {
    // skip listen when aborted during ready
    if (this[kState].aborted) return

    const { promise, resolve, reject } = PonyPromise.withResolvers()

    const errEventHandler = (err) => {
      cleanup()
      this[kState].listening = false
      reject(err)
    }
    const listeningEventHandler = () => {
      cleanup()
      this[kState].listening = true
      resolve(logServerAddress.call(
        this,
        server,
        listenOptions.listenTextResolver || defaultResolveServerListeningText
      ))
    }
    function cleanup () {
      server.removeListener('error', errEventHandler)
      server.removeListener('listening', listeningEventHandler)
    }
    server.once('error', errEventHandler)
    server.once('listening', listeningEventHandler)

    server.listen(listenOptions)

    return promise
  })
}

function getServerInstance (options, httpHandler) {
  if (options.serverFactory) {
    // User provided server instance
    return options.serverFactory(httpHandler, options)
  }

  // We have accepted true as a valid way to init https but node requires an options obj
  const httpsOptions = options.https === true ? {} : options.https

  if (options.http2) {
    const server = typeof httpsOptions === 'object' ? http2.createSecureServer(httpsOptions, httpHandler) : http2.createServer(options.http, httpHandler)
    server.on('session', (session) => session.setTimeout(options.http2SessionTimeout, () => {
      session.close()
    }))

    // This is only needed for Node.js versions < 24.0.0 since Node.js added native
    // closeAllSessions() on server.close() support for HTTP/2 servers in v24.0.0
    if (options.forceCloseConnections === true) {
      server.closeHttp2Sessions = createCloseHttp2SessionsByHttp2Server(server)
    }

    server.setTimeout(options.connectionTimeout)

    return server
  }

  // HTTP1 server instance
  const server = httpsOptions
    ? https.createServer(httpsOptions, httpHandler)
    : http.createServer(options.http, httpHandler)
  server.keepAliveTimeout = options.keepAliveTimeout
  server.requestTimeout = options.requestTimeout
  server.setTimeout(options.connectionTimeout)
  // We treat zero as null(node default) so we do not pass zero to the server instance
  if (options.maxRequestsPerSocket > 0) {
    server.maxRequestsPerSocket = options.maxRequestsPerSocket
  }

  return server
}

/**
 * Inspects the provided `server.address` object and returns a
 * normalized list of IP address strings. Normalization in this
 * case refers to mapping wildcard `0.0.0.0` to the list of IP
 * addresses the wildcard refers to.
 *
 * @see https://nodejs.org/docs/latest/api/net.html#serveraddress
 *
 * @param {object} A server address object as described in the
 * linked docs.
 *
 * @returns {string[]}
 */
function getAddresses (address) {
  if (address.address === '0.0.0.0') {
    return Object.values(os.networkInterfaces()).flatMap((iface) => {
      return iface.filter((iface) => iface.family === 'IPv4')
    }).sort((iface) => {
      /* c8 ignore next 2 */
      // Order the interfaces so that internal ones come first
      return iface.internal ? -1 : 1
    }).map((iface) => { return iface.address })
  }
  return [address.address]
}

function logServerAddress (server, listenTextResolver) {
  let addresses
  const isUnixSocket = typeof server.address() === 'string'
  if (!isUnixSocket) {
    if (server.address().address.indexOf(':') === -1) {
      // IPv4
      addresses = getAddresses(server.address()).map((address) => address + ':' + server.address().port)
    } else {
      // IPv6
      addresses = ['[' + server.address().address + ']:' + server.address().port]
    }

    addresses = addresses.map((address) => ('http' + (this[kOptions].https ? 's' : '') + '://') + address)
  } else {
    addresses = [server.address()]
  }

  for (const address of addresses) {
    this.log.info(listenTextResolver(address))
  }
  return addresses[0]
}

/**
 * @param {http2.Http2Server} http2Server
 * @returns {() => void}
 */
function createCloseHttp2SessionsByHttp2Server (http2Server) {
  /**
   * @type {Set<http2.Http2Session>}
   */
  http2Server[kHttp2ServerSessions] = new Set()

  http2Server.on('session', function (session) {
    session.once('connect', function () {
      http2Server[kHttp2ServerSessions].add(session)
    })

    session.once('close', function () {
      http2Server[kHttp2ServerSessions].delete(session)
    })

    session.once('frameError', function (type, code, streamId) {
      if (streamId === 0) {
        // The stream ID is 0, which means that the error is related to the session itself.
        // If the event is not associated with a stream, the Http2Session will be shut down immediately
        http2Server[kHttp2ServerSessions].delete(session)
      }
    })

    session.once('goaway', function () {
      // The Http2Session instance will be shut down automatically when the 'goaway' event is emitted.
      http2Server[kHttp2ServerSessions].delete(session)
    })
  })

  return function closeHttp2Sessions () {
    if (http2Server[kHttp2ServerSessions].size === 0) {
      return
    }

    for (const session of http2Server[kHttp2ServerSessions]) {
      session.close()
    }
  }
}
