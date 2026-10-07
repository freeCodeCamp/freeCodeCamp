'use strict'

const FindMyWay = require('find-my-way')
const Context = require('./context')
const handleRequest = require('./handle-request.js')
const { onRequestAbortHookRunner, lifecycleHooks, preParsingHookRunner, onTimeoutHookRunner, onRequestHookRunner } = require('./hooks')
const { normalizeSchema } = require('./schemas')
const { parseHeadOnSendHandlers } = require('./head-route.js')

const {
  compileSchemasForValidation,
  compileSchemasForSerialization
} = require('./validation')

const {
  FST_ERR_SCH_VALIDATION_BUILD,
  FST_ERR_SCH_SERIALIZATION_BUILD,
  FST_ERR_DUPLICATED_ROUTE,
  FST_ERR_INVALID_URL,
  FST_ERR_HOOK_INVALID_HANDLER,
  FST_ERR_ROUTE_OPTIONS_NOT_OBJ,
  FST_ERR_ROUTE_DUPLICATED_HANDLER,
  FST_ERR_ROUTE_HANDLER_NOT_FN,
  FST_ERR_ROUTE_MISSING_HANDLER,
  FST_ERR_ROUTE_METHOD_NOT_SUPPORTED,
  FST_ERR_ROUTE_METHOD_INVALID,
  FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED,
  FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT,
  FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT,
  FST_ERR_HANDLER_TIMEOUT,
  FST_ERR_HOOK_INVALID_ASYNC_HANDLER
} = require('./errors')

const {
  kRoutePrefix,
  kSupportedHTTPMethods,
  kLogLevel,
  kLogSerializers,
  kHooks,
  kSchemaController,
  kOptions,
  kReplySerializerDefault,
  kReplyIsError,
  kRequestPayloadStream,
  kDisableRequestLogging,
  kSchemaErrorFormatter,
  kErrorHandler,
  kHasBeenDecorated,
  kRequestAcceptVersion,
  kRouteByFastify,
  kRouteContext,
  kRequestSignal,
  kTimeoutTimer,
  kOnAbort
} = require('./symbols.js')
const { buildErrorHandler } = require('./error-handler')
const { createChildLogger } = require('./logger-factory.js')
const { getGenReqId } = require('./req-id-gen-factory.js')
const { FSTDEP022 } = require('./warnings')

const routerKeys = [
  'allowUnsafeRegex',
  'buildPrettyMeta',
  'caseSensitive',
  'constraints',
  'defaultRoute',
  'ignoreDuplicateSlashes',
  'ignoreTrailingSlash',
  'maxParamLength',
  'onBadUrl',
  'querystringParser',
  'useSemicolonDelimiter'
]

function buildRouting (options) {
  const router = FindMyWay(options)

  let avvio
  let fourOhFour
  let logger
  let hasLogger
  let setupResponseListeners
  let throwIfAlreadyStarted
  let disableRequestLogging
  let disableRequestLoggingFn
  let ignoreTrailingSlash
  let ignoreDuplicateSlashes
  let return503OnClosing
  let globalExposeHeadRoutes
  let keepAliveConnections

  let closing = false

  return {
    /**
     * @param {import('../fastify').FastifyServerOptions} options
     * @param {*} fastifyArgs
     */
    setup (options, fastifyArgs) {
      avvio = fastifyArgs.avvio
      fourOhFour = fastifyArgs.fourOhFour
      logger = options.logger
      hasLogger = fastifyArgs.hasLogger
      setupResponseListeners = fastifyArgs.setupResponseListeners
      throwIfAlreadyStarted = fastifyArgs.throwIfAlreadyStarted

      globalExposeHeadRoutes = options.exposeHeadRoutes
      disableRequestLogging = options.disableRequestLogging
      if (typeof disableRequestLogging === 'function') {
        disableRequestLoggingFn = options.disableRequestLogging
      }

      ignoreTrailingSlash = options.routerOptions.ignoreTrailingSlash
      ignoreDuplicateSlashes = options.routerOptions.ignoreDuplicateSlashes
      return503OnClosing = Object.hasOwn(options, 'return503OnClosing') ? options.return503OnClosing : true
      keepAliveConnections = fastifyArgs.keepAliveConnections
    },
    routing: router.lookup.bind(router), // router func to find the right handler to call
    route, // configure a route in the fastify instance
    hasRoute,
    prepareRoute,
    routeHandler,
    closeRoutes: () => { closing = true },
    printRoutes: router.prettyPrint.bind(router),
    addConstraintStrategy,
    hasConstraintStrategy,
    isAsyncConstraint,
    findRoute
  }

  function addConstraintStrategy (strategy) {
    throwIfAlreadyStarted('Cannot add constraint strategy!')
    return router.addConstraintStrategy(strategy)
  }

  function hasConstraintStrategy (strategyName) {
    return router.hasConstraintStrategy(strategyName)
  }

  function isAsyncConstraint () {
    return router.constrainer.asyncStrategiesInUse.size > 0
  }

  // Convert shorthand to extended route declaration
  function prepareRoute ({ method, url, options, handler, isFastify }) {
    if (typeof url !== 'string') {
      throw new FST_ERR_INVALID_URL(typeof url)
    }

    if (!handler && typeof options === 'function') {
      handler = options // for support over direct function calls such as fastify.get() options are reused as the handler
      options = {}
    } else if (handler && typeof handler === 'function') {
      if (Object.prototype.toString.call(options) !== '[object Object]') {
        throw new FST_ERR_ROUTE_OPTIONS_NOT_OBJ(method, url)
      } else if (options.handler) {
        if (typeof options.handler === 'function') {
          throw new FST_ERR_ROUTE_DUPLICATED_HANDLER(method, url)
        } else {
          throw new FST_ERR_ROUTE_HANDLER_NOT_FN(method, url)
        }
      }
    }

    options = Object.assign({}, options, {
      method,
      url,
      path: url,
      handler: handler || (options && options.handler)
    })

    return route.call(this, { options, isFastify })
  }

  function hasRoute ({ options }) {
    const normalizedMethod = options.method?.toUpperCase() ?? ''
    return router.hasRoute(
      normalizedMethod,
      options.url || '',
      options.constraints
    )
  }

  function findRoute (options) {
    const route = router.find(
      options.method,
      options.url || '',
      options.constraints
    )
    if (route) {
      // we must reduce the expose surface, otherwise
      // we provide the ability for the user to modify
      // all the route and server information in runtime
      return {
        handler: route.handler,
        params: route.params,
        searchParams: route.searchParams
      }
    } else {
      return null
    }
  }

  /**
   * Route management
   * @param {{ options: import('../fastify').RouteOptions, isFastify: boolean }}
   */
  function route ({ options, isFastify }) {
    throwIfAlreadyStarted('Cannot add route!')

    // Since we are mutating/assigning only top level props, it is fine to have a shallow copy using the spread operator
    const opts = { ...options }

    const path = opts.url || opts.path || ''

    if (!opts.handler) {
      throw new FST_ERR_ROUTE_MISSING_HANDLER(opts.method, path)
    }

    if (opts.errorHandler !== undefined && typeof opts.errorHandler !== 'function') {
      throw new FST_ERR_ROUTE_HANDLER_NOT_FN(opts.method, path)
    }

    validateBodyLimitOption(opts.bodyLimit)
    validateHandlerTimeoutOption(opts.handlerTimeout)

    const shouldExposeHead = opts.exposeHeadRoute ?? globalExposeHeadRoutes

    let isGetRoute = false
    let isHeadRoute = false

    if (Array.isArray(opts.method)) {
      for (let i = 0; i < opts.method.length; ++i) {
        opts.method[i] = normalizeAndValidateMethod.call(this, opts.method[i])
        validateSchemaBodyOption.call(this, opts.method[i], path, opts.schema)

        isGetRoute = opts.method.includes('GET')
        isHeadRoute = opts.method.includes('HEAD')
      }
    } else {
      opts.method = normalizeAndValidateMethod.call(this, opts.method)
      validateSchemaBodyOption.call(this, opts.method, path, opts.schema)

      isGetRoute = opts.method === 'GET'
      isHeadRoute = opts.method === 'HEAD'
    }

    // we need to clone a set of initial options for HEAD route
    const headOpts = shouldExposeHead && isGetRoute ? { ...options } : null

    const prefix = this[kRoutePrefix]

    if (path === '/' && prefix.length > 0 && opts.method !== 'HEAD') {
      switch (opts.prefixTrailingSlash) {
        case 'slash':
          addNewRoute.call(this, { path, isFastify })
          break
        case 'no-slash':
          addNewRoute.call(this, { path: '', isFastify })
          break
        case 'both':
        default:
          addNewRoute.call(this, { path: '', isFastify })
          // If ignoreTrailingSlash is set to true we need to add only the '' route to prevent adding an incomplete one.
          if (ignoreTrailingSlash !== true && (ignoreDuplicateSlashes !== true || !prefix.endsWith('/'))) {
            addNewRoute.call(this, { path, prefixing: true, isFastify })
          }
      }
    } else if (path[0] === '/' && prefix.endsWith('/')) {
      // Ensure that '/prefix/' + '/route' gets registered as '/prefix/route'
      addNewRoute.call(this, { path: path.slice(1), isFastify })
    } else {
      addNewRoute.call(this, { path, isFastify })
    }

    // chainable api
    return this

    function addNewRoute ({ path, prefixing = false, isFastify = false }) {
      const url = prefix + path

      opts.url = url
      opts.path = url
      opts.routePath = path
      opts.prefix = prefix
      opts.logLevel = opts.logLevel || this[kLogLevel]

      if (this[kLogSerializers] || opts.logSerializers) {
        opts.logSerializers = Object.assign(Object.create(this[kLogSerializers]), opts.logSerializers)
      }

      if (opts.attachValidation == null) {
        opts.attachValidation = false
      }

      if (prefixing === false) {
        // run 'onRoute' hooks
        for (const hook of this[kHooks].onRoute) {
          hook.call(this, opts)
        }
      }

      for (const hook of lifecycleHooks) {
        if (opts && hook in opts) {
          if (Array.isArray(opts[hook])) {
            for (const func of opts[hook]) {
              if (typeof func !== 'function') {
                throw new FST_ERR_HOOK_INVALID_HANDLER(hook, Object.prototype.toString.call(func))
              }

              if (hook === 'onSend' || hook === 'preSerialization' || hook === 'onError' || hook === 'preParsing') {
                if (func.constructor.name === 'AsyncFunction' && func.length === 4) {
                  throw new FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
                }
              } else if (hook === 'onRequestAbort') {
                if (func.constructor.name === 'AsyncFunction' && func.length !== 1) {
                  throw new FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
                }
              } else {
                if (func.constructor.name === 'AsyncFunction' && func.length === 3) {
                  throw new FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
                }
              }
            }
          } else if (opts[hook] !== undefined && typeof opts[hook] !== 'function') {
            throw new FST_ERR_HOOK_INVALID_HANDLER(hook, Object.prototype.toString.call(opts[hook]))
          }
        }
      }

      const constraints = opts.constraints || {}
      const config = {
        ...opts.config,
        url,
        method: opts.method
      }

      const context = new Context({
        schema: opts.schema,
        handler: opts.handler.bind(this),
        config,
        errorHandler: opts.errorHandler,
        childLoggerFactory: opts.childLoggerFactory,
        bodyLimit: opts.bodyLimit,
        logLevel: opts.logLevel,
        logSerializers: opts.logSerializers,
        attachValidation: opts.attachValidation,
        schemaErrorFormatter: opts.schemaErrorFormatter,
        replySerializer: this[kReplySerializerDefault],
        validatorCompiler: opts.validatorCompiler,
        serializerCompiler: opts.serializerCompiler,
        exposeHeadRoute: shouldExposeHead,
        prefixTrailingSlash: (opts.prefixTrailingSlash || 'both'),
        server: this,
        isFastify,
        handlerTimeout: opts.handlerTimeout
      })

      const headHandler = router.findRoute('HEAD', opts.url, constraints)
      const hasHEADHandler = headHandler !== null

      try {
        router.on(opts.method, opts.url, { constraints }, routeHandler, context)
      } catch (error) {
        // any route insertion error created by fastify can be safely ignore
        // because it only duplicate route for head
        if (!context[kRouteByFastify]) {
          const isDuplicatedRoute = error.message.includes(`Method '${opts.method}' already declared for route`)
          if (isDuplicatedRoute) {
            throw new FST_ERR_DUPLICATED_ROUTE(opts.method, opts.url)
          }

          throw error
        }
      }

      this.after((notHandledErr, done) => {
        // Send context async
        context.errorHandler = opts.errorHandler
          ? buildErrorHandler(this[kErrorHandler], opts.errorHandler)
          : this[kErrorHandler]
        context._parserOptions.limit = opts.bodyLimit || null
        context.logLevel = opts.logLevel
        context.logSerializers = opts.logSerializers
        context.attachValidation = opts.attachValidation
        context[kReplySerializerDefault] = this[kReplySerializerDefault]
        context.schemaErrorFormatter =
          opts.schemaErrorFormatter || this[kSchemaErrorFormatter] || context.schemaErrorFormatter

        // Run hooks and more
        avvio.once('preReady', () => {
          for (const hook of lifecycleHooks) {
            const toSet = this[kHooks][hook]
              .concat(opts[hook] || [])
              .map(h => h.bind(this))
            context[hook] = toSet.length ? toSet : null
          }

          // Optimization: avoid encapsulation if no decoration has been done.
          while (!context.Request[kHasBeenDecorated] && context.Request.parent) {
            context.Request = context.Request.parent
          }
          while (!context.Reply[kHasBeenDecorated] && context.Reply.parent) {
            context.Reply = context.Reply.parent
          }

          // Must store the 404 Context in 'preReady' because it is only guaranteed to
          // be available after all of the plugins and routes have been loaded.
          fourOhFour.setContext(this, context)

          if (opts.schema) {
            context.schema = normalizeSchema(context.schema, this.initialConfig)

            const schemaController = this[kSchemaController]
            const hasValidationSchema = opts.schema.body ||
              opts.schema.headers ||
              opts.schema.querystring ||
              opts.schema.params
            if (!opts.validatorCompiler && hasValidationSchema) {
              schemaController.setupValidator(this[kOptions])
            }
            try {
              const isCustom = typeof opts?.validatorCompiler === 'function' ||
                schemaController.isCustomValidatorCompiler
              compileSchemasForValidation(
                context,
                opts.validatorCompiler || schemaController.validatorCompiler,
                isCustom
              )
            } catch (error) {
              throw new FST_ERR_SCH_VALIDATION_BUILD(opts.method, url, error.message)
            }

            if (opts.schema.response && !opts.serializerCompiler) {
              schemaController.setupSerializer(this[kOptions])
            }
            try {
              compileSchemasForSerialization(context, opts.serializerCompiler || schemaController.serializerCompiler)
            } catch (error) {
              throw new FST_ERR_SCH_SERIALIZATION_BUILD(opts.method, url, error.message)
            }
          }
        })

        done(notHandledErr)
      })

      // register head route in sync
      // we must place it after the `this.after`

      if (shouldExposeHead && isGetRoute && !isHeadRoute && !hasHEADHandler) {
        const onSendHandlers = parseHeadOnSendHandlers(headOpts.onSend)
        prepareRoute.call(this, { method: 'HEAD', url: path, options: { ...headOpts, onSend: onSendHandlers }, isFastify: true })
      }
    }
  }

  // HTTP request entry point, the routing has already been executed
  function routeHandler (req, res, params, context, query) {
    const id = getGenReqId(context.server, req)

    const loggerOpts = {
      level: context.logLevel
    }

    if (context.logSerializers) {
      loggerOpts.serializers = context.logSerializers
    }
    const childLogger = createChildLogger(context, logger, req, id, loggerOpts)
    // Set initial value; will be re-evaluated after FastifyRequest is constructed if it's a function
    childLogger[kDisableRequestLogging] = disableRequestLoggingFn ? false : disableRequestLogging

    if (closing === true) {
      /* istanbul ignore next mac, windows */
      if (req.httpVersionMajor !== 2) {
        res.setHeader('Connection', 'close')
      }

      // TODO remove return503OnClosing after Node v18 goes EOL
      /* istanbul ignore else */
      if (return503OnClosing) {
        // On Node v19 we cannot test this behavior as it won't be necessary
        // anymore. It will close all the idle connections before they reach this
        // stage.
        const headers = {
          'Content-Type': 'application/json',
          'Content-Length': '80'
        }
        res.writeHead(503, headers)
        res.end('{"error":"Service Unavailable","message":"Service Unavailable","statusCode":503}')
        childLogger.info({ res: { statusCode: 503 } }, 'request aborted - refusing to accept new requests as server is closing')
        return
      }
    }

    // When server.forceCloseConnections is true, we will collect any requests
    // that have indicated they want persistence so that they can be reaped
    // on server close. Otherwise, the container is a noop container.
    const connHeader = String.prototype.toLowerCase.call(req.headers.connection || '')
    if (connHeader === 'keep-alive') {
      if (keepAliveConnections.has(req.socket) === false) {
        keepAliveConnections.add(req.socket)
        req.socket.on('close', removeTrackedSocket.bind({ keepAliveConnections, socket: req.socket }))
      }
    }

    // we revert the changes in defaultRoute
    if (req.headers[kRequestAcceptVersion] !== undefined) {
      req.headers['accept-version'] = req.headers[kRequestAcceptVersion]
      req.headers[kRequestAcceptVersion] = undefined
    }

    const request = new context.Request(id, params, req, query, childLogger, context)
    const reply = new context.Reply(res, request, childLogger)

    // Evaluate disableRequestLogging after FastifyRequest is constructed
    // so the caller has access to decorations and customizations
    const resolvedDisableRequestLogging = disableRequestLoggingFn
      ? disableRequestLoggingFn(request)
      : disableRequestLogging
    childLogger[kDisableRequestLogging] = resolvedDisableRequestLogging

    if (resolvedDisableRequestLogging === false) {
      childLogger.info({ req: request }, 'incoming request')
    }

    // Handler timeout setup — only when configured (zero overhead otherwise)
    const handlerTimeout = context.handlerTimeout
    if (handlerTimeout > 0) {
      const ac = new AbortController()
      request[kRequestSignal] = ac

      request[kTimeoutTimer] = setTimeout(() => {
        if (!reply.sent) {
          const err = new FST_ERR_HANDLER_TIMEOUT(handlerTimeout, context.config?.url)
          ac.abort(err)
          reply[kReplyIsError] = true
          reply.send(err)
        }
      }, handlerTimeout)

      const onAbort = () => {
        if (!ac.signal.aborted) {
          ac.abort()
        }
        clearTimeout(request[kTimeoutTimer])
      }
      req.on('close', onAbort)
      request[kOnAbort] = onAbort
    }

    if (hasLogger === true || context.onResponse !== null || handlerTimeout > 0) {
      setupResponseListeners(reply)
    }

    if (context.onRequest !== null) {
      onRequestHookRunner(
        context.onRequest,
        request,
        reply,
        runPreParsing
      )
    } else {
      runPreParsing(null, request, reply)
    }

    if (context.onRequestAbort !== null) {
      req.on('close', () => {
        /* istanbul ignore else */
        if (req.aborted) {
          onRequestAbortHookRunner(
            context.onRequestAbort,
            request,
            handleOnRequestAbortHooksErrors.bind(null, reply)
          )
        }
      })
    }

    if (context.onTimeout !== null) {
      if (!request.raw.socket._meta) {
        request.raw.socket.on('timeout', handleTimeout)
      }
      request.raw.socket._meta = { context, request, reply }
    }
  }
}

function handleOnRequestAbortHooksErrors (reply, err) {
  if (err) {
    reply.log.error({ err }, 'onRequestAborted hook failed')
  }
}

function handleTimeout () {
  const { context, request, reply } = this._meta
  onTimeoutHookRunner(
    context.onTimeout,
    request,
    reply,
    noop
  )
}

function normalizeAndValidateMethod (method) {
  if (typeof method !== 'string') {
    throw new FST_ERR_ROUTE_METHOD_INVALID()
  }
  method = method.toUpperCase()
  if (!this[kSupportedHTTPMethods].bodyless.has(method) &&
    !this[kSupportedHTTPMethods].bodywith.has(method)) {
    throw new FST_ERR_ROUTE_METHOD_NOT_SUPPORTED(method)
  }

  return method
}

function validateSchemaBodyOption (method, path, schema) {
  if (this[kSupportedHTTPMethods].bodyless.has(method) && schema?.body) {
    throw new FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED(method, path)
  }
}

function validateBodyLimitOption (bodyLimit) {
  if (bodyLimit === undefined) return
  if (!Number.isInteger(bodyLimit) || bodyLimit <= 0) {
    throw new FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT(bodyLimit)
  }
}

function validateHandlerTimeoutOption (handlerTimeout) {
  if (handlerTimeout === undefined) return
  if (!Number.isInteger(handlerTimeout) || handlerTimeout <= 0) {
    throw new FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT(handlerTimeout)
  }
}

function runPreParsing (err, request, reply) {
  if (reply.sent === true) return
  if (err != null) {
    reply[kReplyIsError] = true
    reply.send(err)
    return
  }

  request[kRequestPayloadStream] = request.raw

  if (request[kRouteContext].preParsing !== null) {
    preParsingHookRunner(request[kRouteContext].preParsing, request, reply, handleRequest.bind(request.server))
  } else {
    handleRequest.call(request.server, null, request, reply)
  }
}

function buildRouterOptions (options, defaultOptions) {
  const routerOptions = options.routerOptions == null
    ? Object.create(null)
    : Object.assign(Object.create(null), options.routerOptions)

  const usedDeprecatedOptions = routerKeys.filter(key => Object.hasOwn(options, key))

  if (usedDeprecatedOptions.length > 0) {
    FSTDEP022(usedDeprecatedOptions.join(', '))
  }

  for (const key of routerKeys) {
    if (!Object.hasOwn(routerOptions, key)) {
      routerOptions[key] = options[key] ?? defaultOptions[key]
    }
  }

  return routerOptions
}

/**
 * Used within the route handler as a `net.Socket.close` event handler.
 * The purpose is to remove a socket from the tracked sockets collection when
 * the socket has naturally timed out.
 */
function removeTrackedSocket () {
  this.keepAliveConnections.delete(this.socket)
}

function noop () { }

module.exports = { buildRouting, validateBodyLimitOption, buildRouterOptions }
