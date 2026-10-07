'use strict'

const FindMyWay = require('find-my-way')

const Reply = require('./reply')
const Request = require('./request')
const Context = require('./context')
const {
  kRoutePrefix,
  kCanSetNotFoundHandler,
  kFourOhFourLevelInstance,
  kFourOhFourContext,
  kHooks,
  kErrorHandler
} = require('./symbols.js')
const { lifecycleHooks } = require('./hooks')
const { buildErrorHandler } = require('./error-handler.js')
const {
  FST_ERR_NOT_FOUND
} = require('./errors')
const { createChildLogger } = require('./logger-factory')
const { getGenReqId } = require('./req-id-gen-factory.js')

/**
 * Each fastify instance have a:
 * kFourOhFourLevelInstance: point to a fastify instance that has the 404 handler set
 * kCanSetNotFoundHandler: bool to track if the 404 handler has already been set
 * kFourOhFour: the singleton instance of this 404 module
 * kFourOhFourContext: the context in the reply object where the handler will be executed
 */
function fourOhFour (options) {
  const { logger, disableRequestLogging } = options

  // 404 router, used for handling encapsulated 404 handlers
  const router = FindMyWay({ onBadUrl: createOnBadUrl(), defaultRoute: fourOhFourFallBack })
  let _onBadUrlHandler = null

  return { router, setNotFoundHandler, setContext, arrange404 }

  function arrange404 (instance) {
    // Change the pointer of the fastify instance to itself, so register + prefix can add new 404 handler
    instance[kFourOhFourLevelInstance] = instance
    instance[kCanSetNotFoundHandler] = true
    // we need to bind instance for the context
    router.onBadUrl = router.onBadUrl.bind(instance)
    router.defaultRoute = router.defaultRoute.bind(instance)
  }

  function basic404 (request, reply) {
    const { url, method } = request.raw
    const message = `Route ${method}:${url} not found`
    const resolvedDisableRequestLogging = typeof disableRequestLogging === 'function' ? disableRequestLogging(request.raw) : disableRequestLogging
    if (!resolvedDisableRequestLogging) {
      request.log.info(message)
    }
    reply.code(404).send({
      message,
      error: 'Not Found',
      statusCode: 404
    })
  }

  function createOnBadUrl () {
    return function onBadUrl (path, req, res) {
      const fourOhFourContext = this[kFourOhFourLevelInstance][kFourOhFourContext]
      const id = getGenReqId(fourOhFourContext.server, req)
      const childLogger = createChildLogger(fourOhFourContext, logger, req, id)
      const request = new Request(id, null, req, null, childLogger, fourOhFourContext)
      const reply = new Reply(res, request, childLogger)

      _onBadUrlHandler(request, reply)
    }
  }

  function setContext (instance, context) {
    const _404Context = Object.assign({}, instance[kFourOhFourContext])
    _404Context.onSend = context.onSend
    context[kFourOhFourContext] = _404Context
  }

  function setNotFoundHandler (opts, handler, avvio, routeHandler) {
    // First initialization of the fastify root instance
    if (this[kCanSetNotFoundHandler] === undefined) {
      this[kCanSetNotFoundHandler] = true
    }
    if (this[kFourOhFourContext] === undefined) {
      this[kFourOhFourContext] = null
    }

    const _fastify = this
    const prefix = this[kRoutePrefix] || '/'

    if (this[kCanSetNotFoundHandler] === false) {
      throw new Error(`Not found handler already set for Fastify instance with prefix: '${prefix}'`)
    }

    if (typeof opts === 'object') {
      if (opts.preHandler) {
        if (Array.isArray(opts.preHandler)) {
          opts.preHandler = opts.preHandler.map(hook => hook.bind(_fastify))
        } else {
          opts.preHandler = opts.preHandler.bind(_fastify)
        }
      }

      if (opts.preValidation) {
        if (Array.isArray(opts.preValidation)) {
          opts.preValidation = opts.preValidation.map(hook => hook.bind(_fastify))
        } else {
          opts.preValidation = opts.preValidation.bind(_fastify)
        }
      }
    }

    if (typeof opts === 'function') {
      handler = opts
      opts = undefined
    }
    opts = opts || {}

    if (handler) {
      this[kFourOhFourLevelInstance][kCanSetNotFoundHandler] = false
      handler = handler.bind(this)
      // update onBadUrl handler
      _onBadUrlHandler = handler
    } else {
      handler = basic404
      // update onBadUrl handler
      _onBadUrlHandler = basic404
    }

    this.after((notHandledErr, done) => {
      _setNotFoundHandler.call(this, prefix, opts, handler, avvio, routeHandler)
      done(notHandledErr)
    })
  }

  function _setNotFoundHandler (prefix, opts, handler, avvio, routeHandler) {
    const context = new Context({
      schema: opts.schema,
      handler,
      config: opts.config || {},
      server: this
    })

    avvio.once('preReady', () => {
      const context = this[kFourOhFourContext]
      for (const hook of lifecycleHooks) {
        const toSet = this[kHooks][hook]
          .concat(opts[hook] || [])
          .map(h => h.bind(this))
        context[hook] = toSet.length ? toSet : null
      }
      context.errorHandler = opts.errorHandler
        ? buildErrorHandler(this[kErrorHandler], opts.errorHandler)
        : this[kErrorHandler]
    })

    if (this[kFourOhFourContext] !== null && prefix === '/') {
      Object.assign(this[kFourOhFourContext], context) // Replace the default 404 handler
      return
    }

    this[kFourOhFourLevelInstance][kFourOhFourContext] = context

    router.all(prefix + (prefix.endsWith('/') ? '*' : '/*'), routeHandler, context)
    router.all(prefix, routeHandler, context)
  }

  function fourOhFourFallBack (req, res) {
    // if this happen, we have a very bad bug
    // we might want to do some hard debugging
    // here, let's print out as much info as
    // we can
    const fourOhFourContext = this[kFourOhFourLevelInstance][kFourOhFourContext]
    const id = getGenReqId(fourOhFourContext.server, req)
    const childLogger = createChildLogger(fourOhFourContext, logger, req, id)

    childLogger.info({ req }, 'incoming request')

    const request = new Request(id, null, req, null, childLogger, fourOhFourContext)
    const reply = new Reply(res, request, childLogger)

    request.log.warn('the default handler for 404 did not catch this, this is likely a fastify bug, please report it')
    request.log.warn(router.prettyPrint())
    reply.code(404).send(new FST_ERR_NOT_FOUND())
  }
}

module.exports = fourOhFour
