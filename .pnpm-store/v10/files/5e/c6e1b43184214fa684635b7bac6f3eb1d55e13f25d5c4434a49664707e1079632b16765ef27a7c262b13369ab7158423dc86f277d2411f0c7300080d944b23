'use strict'

const {
  FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED,
  FST_ERR_LOG_INVALID_LOGGER_CONFIG,
  FST_ERR_LOG_INVALID_LOGGER_INSTANCE,
  FST_ERR_LOG_INVALID_LOGGER
} = require('./errors')

/**
 * Utility for creating a child logger with the appropriate bindings, logger factory
 * and validation.
 * @param {object} context
 * @param {import('../fastify').FastifyBaseLogger} logger
 * @param {import('../fastify').RawRequestDefaultExpression<any>} req
 * @param {string} reqId
 * @param {import('../types/logger.js').ChildLoggerOptions?} loggerOpts
 *
 * @returns {object} New logger instance, inheriting all parent bindings,
 * with child bindings added.
 */
function createChildLogger (context, logger, req, reqId, loggerOpts) {
  const loggerBindings = {
    [context.requestIdLogLabel]: reqId
  }
  const child = context.childLoggerFactory.call(context.server, logger, loggerBindings, loggerOpts || {}, req)

  // Optimization: bypass validation if the factory is our own default factory
  if (context.childLoggerFactory !== defaultChildLoggerFactory) {
    validateLogger(child, true) // throw if the child is not a valid logger
  }

  return child
}

/** Default factory to create child logger instance
 *
 * @param {import('../fastify.js').FastifyBaseLogger} logger
 * @param {import('../types/logger.js').Bindings} bindings
 * @param {import('../types/logger.js').ChildLoggerOptions} opts
 *
 * @returns {import('../types/logger.js').FastifyBaseLogger}
 */
function defaultChildLoggerFactory (logger, bindings, opts) {
  return logger.child(bindings, opts)
}

/**
 * Determines if a provided logger object meets the requirements
 * of a Fastify compatible logger.
 *
 * @param {object} logger Object to validate.
 * @param {boolean?} strict `true` if the object must be a logger (always throw if any methods missing)
 *
 * @returns {boolean} `true` when the logger meets the requirements.
 *
 * @throws {FST_ERR_LOG_INVALID_LOGGER} When the logger object is
 * missing required methods.
 */
function validateLogger (logger, strict) {
  const methods = ['info', 'error', 'debug', 'fatal', 'warn', 'trace', 'child']
  const missingMethods = logger
    ? methods.filter(method => !logger[method] || typeof logger[method] !== 'function')
    : methods

  if (!missingMethods.length) {
    return true
  } else if ((missingMethods.length === methods.length) && !strict) {
    return false
  } else {
    throw FST_ERR_LOG_INVALID_LOGGER(missingMethods.join(','))
  }
}

function createLogger (options) {
  if (options.logger && options.loggerInstance) {
    throw new FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED()
  }

  if (!options.loggerInstance && !options.logger) {
    const nullLogger = require('abstract-logging')
    const logger = nullLogger
    logger.child = () => logger
    return { logger, hasLogger: false }
  }

  const { createPinoLogger, serializers } = require('./logger-pino.js')

  // check if the logger instance has all required properties
  if (validateLogger(options.loggerInstance)) {
    const logger = createPinoLogger({
      logger: options.loggerInstance,
      serializers: Object.assign({}, serializers, options.loggerInstance.serializers)
    })
    return { logger, hasLogger: true }
  }

  // if a logger instance is passed to logger, throw an exception
  if (validateLogger(options.logger)) {
    throw FST_ERR_LOG_INVALID_LOGGER_CONFIG()
  }

  if (options.loggerInstance) {
    throw FST_ERR_LOG_INVALID_LOGGER_INSTANCE()
  }

  const localLoggerOptions = {}
  if (Object.prototype.toString.call(options.logger) === '[object Object]') {
    Reflect.ownKeys(options.logger).forEach(prop => {
      Object.defineProperty(localLoggerOptions, prop, {
        value: options.logger[prop],
        writable: true,
        enumerable: true,
        configurable: true
      })
    })
  }
  localLoggerOptions.level = localLoggerOptions.level || 'info'
  localLoggerOptions.serializers = Object.assign({}, serializers, localLoggerOptions.serializers)
  options.logger = localLoggerOptions
  const logger = createPinoLogger(options.logger)
  return { logger, hasLogger: true }
}

function now () {
  const ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

module.exports = {
  createChildLogger,
  defaultChildLoggerFactory,
  createLogger,
  validateLogger,
  now
}
