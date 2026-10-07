'use strict'

const {
  kFourOhFourContext,
  kReplySerializerDefault,
  kSchemaErrorFormatter,
  kErrorHandler,
  kChildLoggerFactory,
  kOptions,
  kReply,
  kRequest,
  kBodyLimit,
  kLogLevel,
  kContentTypeParser,
  kRouteByFastify,
  kRequestCacheValidateFns,
  kReplyCacheSerializeFns,
  kHandlerTimeout
} = require('./symbols.js')

// Object that holds the context of every request
// Every route holds an instance of this object.
function Context ({
  schema,
  handler,
  config,
  requestIdLogLabel,
  childLoggerFactory,
  errorHandler,
  bodyLimit,
  logLevel,
  logSerializers,
  attachValidation,
  validatorCompiler,
  serializerCompiler,
  replySerializer,
  schemaErrorFormatter,
  exposeHeadRoute,
  prefixTrailingSlash,
  server,
  isFastify,
  handlerTimeout
}) {
  this.schema = schema
  this.handler = handler
  this.Reply = server[kReply]
  this.Request = server[kRequest]
  this.contentTypeParser = server[kContentTypeParser]
  this.onRequest = null
  this.onSend = null
  this.onError = null
  this.onTimeout = null
  this.preHandler = null
  this.onResponse = null
  this.preSerialization = null
  this.onRequestAbort = null
  this.config = config
  this.errorHandler = errorHandler || server[kErrorHandler]
  this.requestIdLogLabel = requestIdLogLabel || server[kOptions].requestIdLogLabel
  this.childLoggerFactory = childLoggerFactory || server[kChildLoggerFactory]
  this._middie = null
  this._parserOptions = {
    limit: bodyLimit || server[kBodyLimit]
  }
  this.exposeHeadRoute = exposeHeadRoute
  this.prefixTrailingSlash = prefixTrailingSlash
  this.logLevel = logLevel || server[kLogLevel]
  this.logSerializers = logSerializers
  this[kFourOhFourContext] = null
  this.attachValidation = attachValidation
  this[kReplySerializerDefault] = replySerializer
  this.schemaErrorFormatter =
    schemaErrorFormatter ||
    server[kSchemaErrorFormatter] ||
    defaultSchemaErrorFormatter
  this[kRouteByFastify] = isFastify

  this[kRequestCacheValidateFns] = null
  this[kReplyCacheSerializeFns] = null
  this.validatorCompiler = validatorCompiler || null
  this.serializerCompiler = serializerCompiler || null

  this.handlerTimeout = handlerTimeout || server[kHandlerTimeout] || 0
  this.server = server
}

function defaultSchemaErrorFormatter (errors, dataVar) {
  let text = ''
  const separator = ', '

  for (let i = 0; i !== errors.length; ++i) {
    const e = errors[i]
    text += dataVar + (e.instancePath || '') + ' ' + e.message + separator
  }
  return new Error(text.slice(0, -separator.length))
}

module.exports = Context
