'use strict'

const VERSION = '5.8.5'

const Avvio = require('avvio')
const http = require('node:http')
const diagnostics = require('node:diagnostics_channel')
let lightMyRequest

const {
  kAvvioBoot,
  kChildren,
  kServerBindings,
  kBodyLimit,
  kSupportedHTTPMethods,
  kRoutePrefix,
  kLogLevel,
  kLogSerializers,
  kHooks,
  kSchemaController,
  kRequestAcceptVersion,
  kReplySerializerDefault,
  kContentTypeParser,
  kReply,
  kRequest,
  kFourOhFour,
  kState,
  kOptions,
  kPluginNameChain,
  kSchemaErrorFormatter,
  kErrorHandler,
  kKeepAliveConnections,
  kChildLoggerFactory,
  kGenReqId,
  kErrorHandlerAlreadySet,
  kHandlerTimeout
} = require('./lib/symbols.js')

const { createServer } = require('./lib/server')
const Reply = require('./lib/reply')
const Request = require('./lib/request')
const Context = require('./lib/context.js')
const decorator = require('./lib/decorate')
const ContentTypeParser = require('./lib/content-type-parser.js')
const SchemaController = require('./lib/schema-controller')
const { Hooks, hookRunnerApplication, supportedHooks } = require('./lib/hooks')
const { createChildLogger, defaultChildLoggerFactory, createLogger } = require('./lib/logger-factory')
const pluginUtils = require('./lib/plugin-utils.js')
const { getGenReqId, reqIdGenFactory } = require('./lib/req-id-gen-factory.js')
const { buildRouting, validateBodyLimitOption, buildRouterOptions } = require('./lib/route')
const build404 = require('./lib/four-oh-four')
const getSecuredInitialConfig = require('./lib/initial-config-validation.js')
const override = require('./lib/plugin-override')
const {
  appendStackTrace,
  AVVIO_ERRORS_MAP,
  ...errorCodes
} = require('./lib/errors')
const PonyPromise = require('./lib/promise')

const { defaultInitOptions } = getSecuredInitialConfig

const {
  FST_ERR_ASYNC_CONSTRAINT,
  FST_ERR_BAD_URL,
  FST_ERR_OPTIONS_NOT_OBJ,
  FST_ERR_QSP_NOT_FN,
  FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN,
  FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ,
  FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR,
  FST_ERR_INSTANCE_ALREADY_LISTENING,
  FST_ERR_REOPENED_CLOSE_SERVER,
  FST_ERR_ROUTE_REWRITE_NOT_STR,
  FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN,
  FST_ERR_ERROR_HANDLER_NOT_FN,
  FST_ERR_ERROR_HANDLER_ALREADY_SET,
  FST_ERR_ROUTE_METHOD_INVALID
} = errorCodes

const { buildErrorHandler } = require('./lib/error-handler.js')
const { FSTWRN004 } = require('./lib/warnings.js')

const initChannel = diagnostics.channel('fastify.initialization')

/**
 * @param {import('./fastify.js').FastifyServerOptions} serverOptions
 */
function fastify (serverOptions) {
  const {
    options,
    genReqId,
    disableRequestLogging,
    hasLogger,
    initialConfig
  } = processOptions(serverOptions, defaultRoute, onBadUrl)

  // Default router
  const router = buildRouting(options.routerOptions)

  // 404 router, used for handling encapsulated 404 handlers
  const fourOhFour = build404(options)

  // HTTP server and its handler
  const httpHandler = wrapRouting(router, options)

  const {
    server,
    listen,
    forceCloseConnections,
    serverHasCloseAllConnections,
    serverHasCloseHttp2Sessions,
    keepAliveConnections
  } = createServer(options, httpHandler)

  const setupResponseListeners = Reply.setupResponseListeners
  const schemaController = SchemaController.buildSchemaController(null, options.schemaController)

  // Public API
  const fastify = {
    // Fastify internals
    [kState]: {
      listening: false,
      closing: false,
      started: false,
      ready: false,
      booting: false,
      aborted: false,
      readyResolver: null
    },
    [kKeepAliveConnections]: keepAliveConnections,
    [kSupportedHTTPMethods]: {
      bodyless: new Set([
        // Standard
        'GET',
        'HEAD',
        'TRACE'
      ]),
      bodywith: new Set([
        // Standard
        'DELETE',
        'OPTIONS',
        'PATCH',
        'PUT',
        'POST'
      ])
    },
    [kOptions]: options,
    [kChildren]: [],
    [kServerBindings]: [],
    [kBodyLimit]: options.bodyLimit,
    [kHandlerTimeout]: options.handlerTimeout,
    [kRoutePrefix]: '',
    [kLogLevel]: '',
    [kLogSerializers]: null,
    [kHooks]: new Hooks(),
    [kSchemaController]: schemaController,
    [kSchemaErrorFormatter]: null,
    [kErrorHandler]: buildErrorHandler(),
    [kErrorHandlerAlreadySet]: false,
    [kChildLoggerFactory]: options.childLoggerFactory || defaultChildLoggerFactory,
    [kReplySerializerDefault]: null,
    [kContentTypeParser]: new ContentTypeParser(
      options.bodyLimit,
      (options.onProtoPoisoning || defaultInitOptions.onProtoPoisoning),
      (options.onConstructorPoisoning || defaultInitOptions.onConstructorPoisoning)
    ),
    [kReply]: Reply.buildReply(Reply),
    [kRequest]: Request.buildRequest(Request, options.trustProxy),
    [kFourOhFour]: fourOhFour,
    [pluginUtils.kRegisteredPlugins]: [],
    [kPluginNameChain]: ['fastify'],
    [kAvvioBoot]: null,
    [kGenReqId]: genReqId,
    // routing method
    routing: httpHandler,
    // routes shorthand methods
    delete: function _delete (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'DELETE', url, options, handler })
    },
    get: function _get (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'GET', url, options, handler })
    },
    head: function _head (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'HEAD', url, options, handler })
    },
    trace: function _trace (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'TRACE', url, options, handler })
    },
    patch: function _patch (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'PATCH', url, options, handler })
    },
    post: function _post (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'POST', url, options, handler })
    },
    put: function _put (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'PUT', url, options, handler })
    },
    options: function _options (url, options, handler) {
      return router.prepareRoute.call(this, { method: 'OPTIONS', url, options, handler })
    },
    all: function _all (url, options, handler) {
      return router.prepareRoute.call(this, { method: this.supportedMethods, url, options, handler })
    },
    // extended route
    route: function _route (options) {
      // we need the fastify object that we are producing so we apply a lazy loading of the function,
      // otherwise we should bind it after the declaration
      return router.route.call(this, { options })
    },
    hasRoute: function _route (options) {
      return router.hasRoute.call(this, { options })
    },
    findRoute: function _findRoute (options) {
      return router.findRoute(options)
    },
    // expose logger instance
    log: options.logger,
    // type provider
    withTypeProvider,
    // hooks
    addHook,
    // schemas
    addSchema,
    getSchema: schemaController.getSchema.bind(schemaController),
    getSchemas: schemaController.getSchemas.bind(schemaController),
    setValidatorCompiler,
    setSerializerCompiler,
    setSchemaController,
    setReplySerializer,
    setSchemaErrorFormatter,
    // set generated request id
    setGenReqId,
    // custom parsers
    addContentTypeParser: ContentTypeParser.helpers.addContentTypeParser,
    hasContentTypeParser: ContentTypeParser.helpers.hasContentTypeParser,
    getDefaultJsonParser: ContentTypeParser.defaultParsers.getDefaultJsonParser,
    defaultTextParser: ContentTypeParser.defaultParsers.defaultTextParser,
    removeContentTypeParser: ContentTypeParser.helpers.removeContentTypeParser,
    removeAllContentTypeParsers: ContentTypeParser.helpers.removeAllContentTypeParsers,
    // Fastify architecture methods (initialized by Avvio)
    register: null,
    after: null,
    ready: null,
    onClose: null,
    close: null,
    printPlugins: null,
    hasPlugin: function (name) {
      return this[pluginUtils.kRegisteredPlugins].includes(name) || this[kPluginNameChain].includes(name)
    },
    // http server
    listen,
    server,
    addresses: function () {
      /* istanbul ignore next */
      const binded = this[kServerBindings].map(b => b.address())
      binded.push(this.server.address())
      return binded.filter(adr => adr)
    },
    // extend fastify objects
    decorate: decorator.add,
    hasDecorator: decorator.exist,
    decorateReply: decorator.decorateReply,
    decorateRequest: decorator.decorateRequest,
    hasRequestDecorator: decorator.existRequest,
    hasReplyDecorator: decorator.existReply,
    getDecorator: decorator.getInstanceDecorator,
    addHttpMethod,
    // fake http injection
    inject,
    // pretty print of the registered routes
    printRoutes,
    // custom error handling
    setNotFoundHandler,
    setErrorHandler,
    // child logger
    setChildLoggerFactory,
    // Set fastify initial configuration options read-only object
    initialConfig,
    // constraint strategies
    addConstraintStrategy: router.addConstraintStrategy.bind(router),
    hasConstraintStrategy: router.hasConstraintStrategy.bind(router)
  }

  Object.defineProperties(fastify, {
    listeningOrigin: {
      get () {
        const address = this.addresses().slice(-1).pop()
        /* ignore if windows: unix socket is not testable on Windows platform */
        /* c8 ignore next 3 */
        if (typeof address === 'string') {
          return address
        }
        const host = address.family === 'IPv6' ? `[${address.address}]` : address.address
        return `${this[kOptions].https ? 'https' : 'http'}://${host}:${address.port}`
      }
    },
    pluginName: {
      configurable: true,
      get () {
        if (this[kPluginNameChain].length > 1) {
          return this[kPluginNameChain].join(' -> ')
        }
        return this[kPluginNameChain][0]
      }
    },
    prefix: {
      configurable: true,
      get () { return this[kRoutePrefix] }
    },
    validatorCompiler: {
      configurable: true,
      get () { return this[kSchemaController].getValidatorCompiler() }
    },
    serializerCompiler: {
      configurable: true,
      get () { return this[kSchemaController].getSerializerCompiler() }
    },
    childLoggerFactory: {
      configurable: true,
      get () { return this[kChildLoggerFactory] }
    },
    version: {
      configurable: true,
      get () { return VERSION }
    },
    errorHandler: {
      configurable: true,
      get () {
        return this[kErrorHandler].func
      }
    },
    genReqId: {
      configurable: true,
      get () { return this[kGenReqId] }
    },
    supportedMethods: {
      configurable: false,
      get () {
        return [
          ...this[kSupportedHTTPMethods].bodyless,
          ...this[kSupportedHTTPMethods].bodywith
        ]
      }
    }
  })

  if (options.schemaErrorFormatter) {
    validateSchemaErrorFormatter(options.schemaErrorFormatter)
    fastify[kSchemaErrorFormatter] = options.schemaErrorFormatter.bind(fastify)
  }

  // Install and configure Avvio
  // Avvio will update the following Fastify methods:
  // - register
  // - after
  // - ready
  // - onClose
  // - close

  const avvioPluginTimeout = Number(options.pluginTimeout)
  const avvio = Avvio(fastify, {
    autostart: false,
    timeout: isNaN(avvioPluginTimeout) === false ? avvioPluginTimeout : defaultInitOptions.pluginTimeout,
    expose: {
      use: 'register'
    }
  })
  // Override to allow the plugin encapsulation
  avvio.override = override
  avvio.on('start', () => (fastify[kState].started = true))
  fastify[kAvvioBoot] = fastify.ready // the avvio ready function
  fastify.ready = ready // overwrite the avvio ready function
  fastify.printPlugins = avvio.prettyPrint.bind(avvio)

  // cache the closing value, since we are checking it in an hot path
  avvio.once('preReady', () => {
    fastify.onClose((instance, done) => {
      fastify[kState].closing = true
      router.closeRoutes()

      hookRunnerApplication('preClose', fastify[kAvvioBoot], fastify, function () {
        if (fastify[kState].listening) {
          /* istanbul ignore next: Cannot test this without Node.js core support */
          if (forceCloseConnections === 'idle') {
            // Not needed in Node 19
            instance.server.closeIdleConnections()
            /* istanbul ignore next: Cannot test this without Node.js core support */
          } else if (serverHasCloseAllConnections && forceCloseConnections) {
            instance.server.closeAllConnections()
          } else if (forceCloseConnections === true) {
            for (const conn of fastify[kKeepAliveConnections]) {
              // We must invoke the destroy method instead of merely unreffing
              // the sockets. If we only unref, then the callback passed to
              // `fastify.close` will never be invoked; nor will any of the
              // registered `onClose` hooks.
              conn.destroy()
              fastify[kKeepAliveConnections].delete(conn)
            }
          }
        }

        if (serverHasCloseHttp2Sessions) {
          instance.server.closeHttp2Sessions()
        }

        // No new TCP connections are accepted.
        // We must call close on the server even if we are not listening
        // otherwise memory will be leaked.
        // https://github.com/nodejs/node/issues/48604
        if (!options.serverFactory || fastify[kState].listening) {
          instance.server.close(function (err) {
            /* c8 ignore next 6 */
            if (err && err.code !== 'ERR_SERVER_NOT_RUNNING') {
              done(null)
            } else {
              done()
            }
          })
        } else {
          process.nextTick(done, null)
        }
      })
    })
  })

  // Create bad URL context
  const onBadUrlContext = new Context({
    server: fastify,
    config: {}
  })

  // Set the default 404 handler
  fastify.setNotFoundHandler()
  fourOhFour.arrange404(fastify)

  router.setup(options, {
    avvio,
    fourOhFour,
    hasLogger,
    setupResponseListeners,
    throwIfAlreadyStarted,
    keepAliveConnections
  })

  // Delay configuring clientError handler so that it can access fastify state.
  server.on('clientError', options.clientErrorHandler.bind(fastify))

  if (initChannel.hasSubscribers) {
    initChannel.publish({ fastify })
  }

  // Older nodejs versions may not have asyncDispose
  if ('asyncDispose' in Symbol) {
    fastify[Symbol.asyncDispose] = function dispose () {
      return fastify.close()
    }
  }

  return fastify

  function throwIfAlreadyStarted (msg) {
    if (fastify[kState].started) throw new FST_ERR_INSTANCE_ALREADY_LISTENING(msg)
  }

  // HTTP injection handling
  // If the server is not ready yet, this
  // utility will automatically force it.
  function inject (opts, cb) {
    // lightMyRequest is dynamically loaded as it seems very expensive
    // because of Ajv
    if (lightMyRequest === undefined) {
      lightMyRequest = require('light-my-request')
    }

    if (fastify[kState].started) {
      if (fastify[kState].closing) {
        // Force to return an error
        const error = new FST_ERR_REOPENED_CLOSE_SERVER()
        if (cb) {
          cb(error)
          return
        } else {
          return Promise.reject(error)
        }
      }
      return lightMyRequest(httpHandler, opts, cb)
    }

    if (cb) {
      this.ready(err => {
        if (err) cb(err, null)
        else lightMyRequest(httpHandler, opts, cb)
      })
    } else {
      return lightMyRequest((req, res) => {
        this.ready(function (err) {
          if (err) {
            res.emit('error', err)
            return
          }
          httpHandler(req, res)
        })
      }, opts)
    }
  }

  function ready (cb) {
    if (this[kState].readyResolver !== null) {
      if (cb != null) {
        this[kState].readyResolver.promise.then(() => cb(null, fastify), cb)
        return
      }

      return this[kState].readyResolver.promise
    }

    // run the hooks after returning the promise
    process.nextTick(runHooks)

    // Create a promise no matter what
    // It will work as a barrier for all the .ready() calls (ensuring single hook execution)
    // as well as a flow control mechanism to chain cbs and further
    // promises
    this[kState].readyResolver = PonyPromise.withResolvers()

    if (!cb) {
      return this[kState].readyResolver.promise
    } else {
      this[kState].readyResolver.promise.then(() => cb(null, fastify), cb)
    }

    function runHooks () {
      // start loading
      fastify[kAvvioBoot]((err, done) => {
        if (err || fastify[kState].started || fastify[kState].ready || fastify[kState].booting) {
          manageErr(err)
        } else {
          fastify[kState].booting = true
          hookRunnerApplication('onReady', fastify[kAvvioBoot], fastify, manageErr)
        }
        done()
      })
    }

    function manageErr (err) {
      // If the error comes out of Avvio's Error codes
      // We create a make and preserve the previous error
      // as cause
      err = err != null && AVVIO_ERRORS_MAP[err.code] != null
        ? appendStackTrace(err, new AVVIO_ERRORS_MAP[err.code](err.message))
        : err

      if (err) {
        return fastify[kState].readyResolver.reject(err)
      }

      fastify[kState].readyResolver.resolve(fastify)
      fastify[kState].booting = false
      fastify[kState].ready = true
      fastify[kState].readyResolver = null
    }
  }

  // Used exclusively in TypeScript contexts to enable auto type inference from JSON schema.
  function withTypeProvider () {
    return this
  }

  // wrapper that we expose to the user for hooks handling
  function addHook (name, fn) {
    throwIfAlreadyStarted('Cannot call "addHook"!')

    if (fn == null) {
      throw new errorCodes.FST_ERR_HOOK_INVALID_HANDLER(name, fn)
    }

    if (name === 'onSend' || name === 'preSerialization' || name === 'onError' || name === 'preParsing') {
      if (fn.constructor.name === 'AsyncFunction' && fn.length === 4) {
        throw new errorCodes.FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
      }
    } else if (name === 'onReady' || name === 'onListen') {
      if (fn.constructor.name === 'AsyncFunction' && fn.length !== 0) {
        throw new errorCodes.FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
      }
    } else if (name === 'onRequestAbort') {
      if (fn.constructor.name === 'AsyncFunction' && fn.length !== 1) {
        throw new errorCodes.FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
      }
    } else {
      if (fn.constructor.name === 'AsyncFunction' && fn.length === 3) {
        throw new errorCodes.FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
      }
    }

    if (name === 'onClose') {
      this.onClose(fn.bind(this))
    } else if (name === 'onReady' || name === 'onListen' || name === 'onRoute') {
      this[kHooks].add(name, fn)
    } else {
      this.after((err, done) => {
        try {
          _addHook.call(this, name, fn)
          done(err)
        } catch (err) {
          done(err)
        }
      })
    }
    return this

    function _addHook (name, fn) {
      this[kHooks].add(name, fn)
      this[kChildren].forEach(child => _addHook.call(child, name, fn))
    }
  }

  // wrapper that we expose to the user for schemas handling
  function addSchema (schema) {
    throwIfAlreadyStarted('Cannot call "addSchema"!')
    this[kSchemaController].add(schema)
    this[kChildren].forEach(child => child.addSchema(schema))
    return this
  }

  // If the router does not match any route, every request will land here
  // req and res are Node.js core objects
  function defaultRoute (req, res) {
    if (req.headers['accept-version'] !== undefined) {
      // we remove the accept-version header for performance result
      // because we do not want to go through the constraint checking
      // the usage of symbol here to prevent any collision on custom header name
      req.headers[kRequestAcceptVersion] = req.headers['accept-version']
      req.headers['accept-version'] = undefined
    }
    fourOhFour.router.lookup(req, res)
  }

  function onBadUrl (path, req, res) {
    if (options.frameworkErrors) {
      const id = getGenReqId(onBadUrlContext.server, req)
      const childLogger = createChildLogger(onBadUrlContext, options.logger, req, id)

      const request = new Request(id, null, req, null, childLogger, onBadUrlContext)
      const reply = new Reply(res, request, childLogger)

      const resolvedDisableRequestLogging = typeof disableRequestLogging === 'function' ? disableRequestLogging(req) : disableRequestLogging
      if (resolvedDisableRequestLogging === false) {
        childLogger.info({ req: request }, 'incoming request')
      }

      return options.frameworkErrors(new FST_ERR_BAD_URL(path), request, reply)
    }
    const body = JSON.stringify({
      error: 'Bad Request',
      code: 'FST_ERR_BAD_URL',
      message: `'${path}' is not a valid url component`,
      statusCode: 400
    })
    res.writeHead(400, {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    })
    res.end(body)
  }

  function buildAsyncConstraintCallback (isAsync, req, res) {
    if (isAsync === false) return undefined
    return function onAsyncConstraintError (err) {
      if (err) {
        if (options.frameworkErrors) {
          const id = getGenReqId(onBadUrlContext.server, req)
          const childLogger = createChildLogger(onBadUrlContext, options.logger, req, id)

          const request = new Request(id, null, req, null, childLogger, onBadUrlContext)
          const reply = new Reply(res, request, childLogger)

          const resolvedDisableRequestLogging = typeof disableRequestLogging === 'function' ? disableRequestLogging(req) : disableRequestLogging
          if (resolvedDisableRequestLogging === false) {
            childLogger.info({ req: request }, 'incoming request')
          }

          return options.frameworkErrors(new FST_ERR_ASYNC_CONSTRAINT(), request, reply)
        }
        const body = '{"error":"Internal Server Error","message":"Unexpected error from async constraint","statusCode":500}'
        res.writeHead(500, {
          'Content-Type': 'application/json',
          'Content-Length': body.length
        })
        res.end(body)
      }
    }
  }

  function setNotFoundHandler (opts, handler) {
    throwIfAlreadyStarted('Cannot call "setNotFoundHandler"!')

    fourOhFour.setNotFoundHandler.call(this, opts, handler, avvio, router.routeHandler)
    return this
  }

  function setValidatorCompiler (validatorCompiler) {
    throwIfAlreadyStarted('Cannot call "setValidatorCompiler"!')
    this[kSchemaController].setValidatorCompiler(validatorCompiler)
    return this
  }

  function setSchemaErrorFormatter (errorFormatter) {
    throwIfAlreadyStarted('Cannot call "setSchemaErrorFormatter"!')
    validateSchemaErrorFormatter(errorFormatter)
    this[kSchemaErrorFormatter] = errorFormatter.bind(this)
    return this
  }

  function setSerializerCompiler (serializerCompiler) {
    throwIfAlreadyStarted('Cannot call "setSerializerCompiler"!')
    this[kSchemaController].setSerializerCompiler(serializerCompiler)
    return this
  }

  function setSchemaController (schemaControllerOpts) {
    throwIfAlreadyStarted('Cannot call "setSchemaController"!')
    const old = this[kSchemaController]
    const schemaController = SchemaController.buildSchemaController(
      old,
      Object.assign({}, old.opts, schemaControllerOpts)
    )
    this[kSchemaController] = schemaController
    this.getSchema = schemaController.getSchema.bind(schemaController)
    this.getSchemas = schemaController.getSchemas.bind(schemaController)
    return this
  }

  function setReplySerializer (replySerializer) {
    throwIfAlreadyStarted('Cannot call "setReplySerializer"!')

    this[kReplySerializerDefault] = replySerializer
    return this
  }

  // wrapper that we expose to the user for configure the custom error handler
  function setErrorHandler (func) {
    throwIfAlreadyStarted('Cannot call "setErrorHandler"!')

    if (typeof func !== 'function') {
      throw new FST_ERR_ERROR_HANDLER_NOT_FN()
    }

    if (!options.allowErrorHandlerOverride && this[kErrorHandlerAlreadySet]) {
      throw new FST_ERR_ERROR_HANDLER_ALREADY_SET()
    } else if (this[kErrorHandlerAlreadySet]) {
      FSTWRN004("To disable this behavior, set 'allowErrorHandlerOverride' to false or ignore this message. For more information, visit: https://fastify.dev/docs/latest/Reference/Server/#allowerrorhandleroverride")
    }

    this[kErrorHandlerAlreadySet] = true
    this[kErrorHandler] = buildErrorHandler(this[kErrorHandler], func.bind(this))
    return this
  }

  function setChildLoggerFactory (factory) {
    throwIfAlreadyStarted('Cannot call "setChildLoggerFactory"!')

    this[kChildLoggerFactory] = factory
    return this
  }

  function printRoutes (opts = {}) {
    // includeHooks:true - shortcut to include all supported hooks exported by fastify.Hooks
    opts.includeMeta = opts.includeHooks
      ? opts.includeMeta ? supportedHooks.concat(opts.includeMeta) : supportedHooks
      : opts.includeMeta
    return router.printRoutes(opts)
  }

  function wrapRouting (router, { rewriteUrl, logger }) {
    let isAsync
    return function preRouting (req, res) {
      // only call isAsyncConstraint once
      if (isAsync === undefined) isAsync = router.isAsyncConstraint()
      if (rewriteUrl) {
        req.originalUrl = req.url
        const url = rewriteUrl.call(fastify, req)
        if (typeof url === 'string') {
          req.url = url
        } else {
          const err = new FST_ERR_ROUTE_REWRITE_NOT_STR(req.url, typeof url)
          req.destroy(err)
        }
      }
      router.routing(req, res, buildAsyncConstraintCallback(isAsync, req, res))
    }
  }

  function setGenReqId (func) {
    throwIfAlreadyStarted('Cannot call "setGenReqId"!')

    this[kGenReqId] = reqIdGenFactory(this[kOptions].requestIdHeader, func)
    return this
  }

  function addHttpMethod (method, { hasBody = false } = {}) {
    if (typeof method !== 'string' || http.METHODS.indexOf(method) === -1) {
      throw new FST_ERR_ROUTE_METHOD_INVALID()
    }

    if (hasBody === true) {
      this[kSupportedHTTPMethods].bodywith.add(method)
      this[kSupportedHTTPMethods].bodyless.delete(method)
    } else {
      this[kSupportedHTTPMethods].bodywith.delete(method)
      this[kSupportedHTTPMethods].bodyless.add(method)
    }

    const _method = method.toLowerCase()
    if (!this.hasDecorator(_method)) {
      this.decorate(_method, function (url, options, handler) {
        return router.prepareRoute.call(this, { method, url, options, handler })
      })
    }

    return this
  }
}

function processOptions (options, defaultRoute, onBadUrl) {
  // Options validations
  if (options && typeof options !== 'object') {
    throw new FST_ERR_OPTIONS_NOT_OBJ()
  } else {
    // Shallow copy options object to prevent mutations outside of this function
    options = Object.assign({}, options)
  }

  if (
    (options.querystringParser && typeof options.querystringParser !== 'function') ||
    (
      options.routerOptions?.querystringParser &&
      typeof options.routerOptions.querystringParser !== 'function'
    )
  ) {
    throw new FST_ERR_QSP_NOT_FN(typeof (options.querystringParser ?? options.routerOptions.querystringParser))
  }

  if (options.schemaController && options.schemaController.bucket && typeof options.schemaController.bucket !== 'function') {
    throw new FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN(typeof options.schemaController.bucket)
  }

  validateBodyLimitOption(options.bodyLimit)

  const requestIdHeader = typeof options.requestIdHeader === 'string' && options.requestIdHeader.length !== 0 ? options.requestIdHeader.toLowerCase() : (options.requestIdHeader === true && 'request-id')
  const genReqId = reqIdGenFactory(requestIdHeader, options.genReqId)
  const requestIdLogLabel = options.requestIdLogLabel || 'reqId'
  options.bodyLimit = options.bodyLimit || defaultInitOptions.bodyLimit
  const disableRequestLogging = options.disableRequestLogging || false

  const ajvOptions = Object.assign({
    customOptions: {},
    plugins: []
  }, options.ajv)

  if (!ajvOptions.customOptions || Object.prototype.toString.call(ajvOptions.customOptions) !== '[object Object]') {
    throw new FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ(typeof ajvOptions.customOptions)
  }
  if (!ajvOptions.plugins || !Array.isArray(ajvOptions.plugins)) {
    throw new FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR(typeof ajvOptions.plugins)
  }

  const { logger, hasLogger } = createLogger(options)

  // Update the options with the fixed values
  options.connectionTimeout = options.connectionTimeout || defaultInitOptions.connectionTimeout
  options.keepAliveTimeout = options.keepAliveTimeout || defaultInitOptions.keepAliveTimeout
  options.maxRequestsPerSocket = options.maxRequestsPerSocket || defaultInitOptions.maxRequestsPerSocket
  options.requestTimeout = options.requestTimeout || defaultInitOptions.requestTimeout
  options.logger = logger
  options.requestIdHeader = requestIdHeader
  options.requestIdLogLabel = requestIdLogLabel
  options.disableRequestLogging = disableRequestLogging
  options.ajv = ajvOptions
  options.clientErrorHandler = options.clientErrorHandler || defaultClientErrorHandler
  options.allowErrorHandlerOverride = options.allowErrorHandlerOverride ?? defaultInitOptions.allowErrorHandlerOverride

  const initialConfig = getSecuredInitialConfig(options)

  // exposeHeadRoutes have its default set from the validator
  options.exposeHeadRoutes = initialConfig.exposeHeadRoutes

  // we need to set this before calling createServer
  options.http2SessionTimeout = initialConfig.http2SessionTimeout

  options.routerOptions = buildRouterOptions(options, {
    defaultRoute,
    onBadUrl,
    ignoreTrailingSlash: defaultInitOptions.ignoreTrailingSlash,
    ignoreDuplicateSlashes: defaultInitOptions.ignoreDuplicateSlashes,
    maxParamLength: defaultInitOptions.maxParamLength,
    allowUnsafeRegex: defaultInitOptions.allowUnsafeRegex,
    buildPrettyMeta: defaultBuildPrettyMeta,
    useSemicolonDelimiter: defaultInitOptions.useSemicolonDelimiter
  })

  return {
    options,
    genReqId,
    disableRequestLogging,
    hasLogger,
    initialConfig
  }
}

function defaultBuildPrettyMeta (route) {
  // return a shallow copy of route's sanitized context

  const cleanKeys = {}
  const allowedProps = ['errorHandler', 'logLevel', 'logSerializers']

  allowedProps.concat(supportedHooks).forEach(k => {
    cleanKeys[k] = route.store[k]
  })

  return Object.assign({}, cleanKeys)
}

function defaultClientErrorHandler (err, socket) {
  // In case of a connection reset, the socket has been destroyed and there is nothing that needs to be done.
  // https://nodejs.org/api/http.html#event-clienterror
  if (err.code === 'ECONNRESET' || socket.destroyed) {
    return
  }

  let body, errorCode, errorStatus, errorLabel

  if (err.code === 'ERR_HTTP_REQUEST_TIMEOUT') {
    errorCode = '408'
    errorStatus = http.STATUS_CODES[errorCode]
    body = `{"error":"${errorStatus}","message":"Client Timeout","statusCode":408}`
    errorLabel = 'timeout'
  } else if (err.code === 'HPE_HEADER_OVERFLOW') {
    errorCode = '431'
    errorStatus = http.STATUS_CODES[errorCode]
    body = `{"error":"${errorStatus}","message":"Exceeded maximum allowed HTTP header size","statusCode":431}`
    errorLabel = 'header_overflow'
  } else {
    errorCode = '400'
    errorStatus = http.STATUS_CODES[errorCode]
    body = `{"error":"${errorStatus}","message":"Client Error","statusCode":400}`
    errorLabel = 'error'
  }

  // Most devs do not know what to do with this error.
  // In the vast majority of cases, it's a network error and/or some
  // config issue on the load balancer side.
  this.log.trace({ err }, `client ${errorLabel}`)
  // Copying standard node behavior
  // https://github.com/nodejs/node/blob/6ca23d7846cb47e84fd344543e394e50938540be/lib/_http_server.js#L666

  // If the socket is not writable, there is no reason to try to send data.
  if (socket.writable) {
    socket.write(`HTTP/1.1 ${errorCode} ${errorStatus}\r\nContent-Length: ${body.length}\r\nContent-Type: application/json\r\n\r\n${body}`)
  }
  socket.destroy(err)
}

function validateSchemaErrorFormatter (schemaErrorFormatter) {
  if (typeof schemaErrorFormatter !== 'function') {
    throw new FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN(typeof schemaErrorFormatter)
  } else if (schemaErrorFormatter.constructor.name === 'AsyncFunction') {
    throw new FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN('AsyncFunction')
  }
}

/**
 * These export configurations enable JS and TS developers
 * to consume fastify in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const fastify = require('fastify')`
 * - `const { fastify } = require('fastify')`
 * - `import * as Fastify from 'fastify'`
 * - `import { fastify, TSC_definition } from 'fastify'`
 * - `import fastify from 'fastify'`
 * - `import fastify, { TSC_definition } from 'fastify'`
 */
module.exports = fastify
module.exports.errorCodes = errorCodes
module.exports.fastify = fastify
module.exports.default = fastify
