'use strict'

const format = require('quick-format-unescaped')

module.exports = pino

const _console = pfGlobalThisOrFallback().console || {}
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue,
  errWithCause: asErrValue
}
function levelToValue (level, logger) {
  return level === 'silent'
    ? Infinity
    : logger.levels.values[level]
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs')
const hierarchySymbol = Symbol('pino.hierarchy')

const logFallbackMap = {
  error: 'log',
  fatal: 'error',
  warn: 'error',
  info: 'log',
  debug: 'log',
  trace: 'log'
}

function appendChildLogger (parentLogger, childLogger) {
  const newEntry = {
    logger: childLogger,
    parent: parentLogger[hierarchySymbol]
  }
  childLogger[hierarchySymbol] = newEntry
}

function setupBaseLogFunctions (logger, levels, proto) {
  const logFunctions = {}
  levels.forEach(level => {
    logFunctions[level] = proto[level] ? proto[level] : (_console[level] || _console[logFallbackMap[level] || 'log'] || noop)
  })
  logger[baseLogFunctionSymbol] = logFunctions
}

function shouldSerialize (serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function (k) {
      return k !== '!stdSerializers.err'
    })
    return hasToFilter
  } else if (serialize === true) {
    return Object.keys(serializers)
  }

  return false
}

function pino (opts) {
  opts = opts || {}
  opts.browser = opts.browser || {}

  const transmit = opts.browser.transmit
  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

  const proto = opts.browser.write || _console
  if (opts.browser.write) opts.browser.asObject = true
  const serializers = opts.serializers || {}
  const serialize = shouldSerialize(opts.browser.serialize, serializers)
  let stdErrSerialize = opts.browser.serialize

  if (
    Array.isArray(opts.browser.serialize) &&
    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
  ) stdErrSerialize = false

  const customLevels = Object.keys(opts.customLevels || {})
  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'].concat(customLevels)

  if (typeof proto === 'function') {
    levels.forEach(function (level) {
      proto[level] = proto
    })
  }
  if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent'
  const level = opts.level || 'info'
  const logger = Object.create(proto)
  if (!logger.log) logger.log = noop

  setupBaseLogFunctions(logger, levels, proto)
  // setup root hierarchy entry
  appendChildLogger({}, logger)

  Object.defineProperty(logger, 'levelVal', {
    get: getLevelVal
  })
  Object.defineProperty(logger, 'level', {
    get: getLevel,
    set: setLevel
  })

  const setOpts = {
    transmit,
    serialize,
    asObject: opts.browser.asObject,
    asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
    formatters: opts.browser.formatters,
    levels,
    timestamp: getTimeFunction(opts),
    messageKey: opts.messageKey || 'msg',
    onChild: opts.onChild || noop
  }
  logger.levels = getLevels(opts)
  logger.level = level

  logger.isLevelEnabled = function (level) {
    if (!this.levels.values[level]) {
      return false
    }

    return this.levels.values[level] >= this.levels.values[this.level]
  }
  logger.setMaxListeners = logger.getMaxListeners =
  logger.emit = logger.addListener = logger.on =
  logger.prependListener = logger.once =
  logger.prependOnceListener = logger.removeListener =
  logger.removeAllListeners = logger.listeners =
  logger.listenerCount = logger.eventNames =
  logger.write = logger.flush = noop
  logger.serializers = serializers
  logger._serialize = serialize
  logger._stdErrSerialize = stdErrSerialize
  logger.child = function (...args) { return child.call(this, setOpts, ...args) }

  if (transmit) logger._logEvent = createLogEventShape()

  function getLevelVal () {
    return levelToValue(this.level, this)
  }

  function getLevel () {
    return this._level
  }
  function setLevel (level) {
    if (level !== 'silent' && !this.levels.values[level]) {
      throw Error('unknown level ' + level)
    }
    this._level = level

    set(this, setOpts, logger, 'error') // <-- must stay first
    set(this, setOpts, logger, 'fatal')
    set(this, setOpts, logger, 'warn')
    set(this, setOpts, logger, 'info')
    set(this, setOpts, logger, 'debug')
    set(this, setOpts, logger, 'trace')

    customLevels.forEach((level) => {
      set(this, setOpts, logger, level)
    })
  }

  function child (setOpts, bindings, childOptions) {
    if (!bindings) {
      throw new Error('missing bindings for child Pino')
    }
    childOptions = childOptions || {}
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers
    }
    const childOptionsSerializers = childOptions.serializers
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers)
      var childSerialize = opts.browser.serialize === true
        ? Object.keys(childSerializers)
        : serialize
      delete bindings.serializers
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize)
    }
    function Child (parent) {
      this._childLevel = (parent._childLevel | 0) + 1

      // make sure bindings are available in the `set` function
      this.bindings = bindings

      if (childSerializers) {
        this.serializers = childSerializers
        this._serialize = childSerialize
      }
      if (transmit) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        )
      }
    }
    Child.prototype = this
    const newLogger = new Child(this)

    // must happen before the level is assigned
    appendChildLogger(this, newLogger)
    newLogger.child = function (...args) { return child.call(this, setOpts, ...args) }
    // required to actually initialize the logger functions for any given child
    newLogger.level = childOptions.level || this.level // allow level to be set by childOptions
    setOpts.onChild(newLogger)

    return newLogger
  }
  return logger
}

function getLevels (opts) {
  const customLevels = opts.customLevels || {}

  const values = Object.assign({}, pino.levels.values, customLevels)
  const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels))

  return {
    values,
    labels
  }
}

function invertObject (obj) {
  const inverted = {}
  Object.keys(obj).forEach(function (key) {
    inverted[obj[key]] = key
  })
  return inverted
}

pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: 'trace',
    20: 'debug',
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'fatal'
  }
}

pino.stdSerializers = stdSerializers
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime })

function getBindingChain (logger) {
  const bindings = []
  if (logger.bindings) {
    bindings.push(logger.bindings)
  }

  // traverse up the tree to get all bindings
  let hierarchy = logger[hierarchySymbol]
  while (hierarchy.parent) {
    hierarchy = hierarchy.parent
    if (hierarchy.logger.bindings) {
      bindings.push(hierarchy.logger.bindings)
    }
  }

  return bindings.reverse()
}

function set (self, opts, rootLogger, level) {
  // override the current log functions with either `noop` or the base log function
  Object.defineProperty(self, level, {
    value: (levelToValue(self.level, rootLogger) > levelToValue(level, rootLogger)
      ? noop
      : rootLogger[baseLogFunctionSymbol][level]),
    writable: true,
    enumerable: true,
    configurable: true
  })

  if (self[level] === noop) {
    if (!opts.transmit) return

    const transmitLevel = opts.transmit.level || self.level
    const transmitValue = levelToValue(transmitLevel, rootLogger)
    const methodValue = levelToValue(level, rootLogger)
    if (methodValue < transmitValue) return
  }

  // make sure the log format is correct
  self[level] = createWrap(self, opts, rootLogger, level)

  // prepend bindings if it is not the root logger
  const bindings = getBindingChain(self)
  if (bindings.length === 0) {
    // early exit in case for rootLogger
    return
  }
  self[level] = prependBindingsInArguments(bindings, self[level])
}

function prependBindingsInArguments (bindings, logFunc) {
  return function () {
    return logFunc.apply(this, [...bindings, ...arguments])
  }
}

function createWrap (self, opts, rootLogger, level) {
  return (function (write) {
    return function LOG () {
      const ts = opts.timestamp()
      const args = new Array(arguments.length)
      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this
      for (var i = 0; i < args.length; i++) args[i] = arguments[i]

      var argsIsSerialized = false
      if (opts.serialize) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize)
        argsIsSerialized = true
      }
      if (opts.asObject || opts.formatters) {
        write.call(proto, ...asObject(this, level, args, ts, opts))
      } else write.apply(proto, args)

      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || self._level
        const transmitValue = levelToValue(transmitLevel, rootLogger)
        const methodValue = levelToValue(level, rootLogger)
        if (methodValue < transmitValue) return
        transmit(this, {
          ts,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: rootLogger.levels.values[opts.transmit.level || self._level],
          send: opts.transmit.send,
          val: levelToValue(self._level, rootLogger)
        }, args, argsIsSerialized)
      }
    }
  })(self[baseLogFunctionSymbol][level])
}

function asObject (logger, level, args, ts, opts) {
  const {
    level: levelFormatter,
    log: logObjectFormatter = (obj) => obj
  } = opts.formatters || {}
  const argsCloned = args.slice()
  let msg = argsCloned[0]
  const logObject = {}

  let lvl = (logger._childLevel | 0) + 1
  if (lvl < 1) lvl = 1

  if (ts) {
    logObject.time = ts
  }

  if (levelFormatter) {
    const formattedLevel = levelFormatter(level, logger.levels.values[level])
    Object.assign(logObject, formattedLevel)
  } else {
    logObject.level = logger.levels.values[level]
  }

  if (opts.asObjectBindingsOnly) {
    if (msg !== null && typeof msg === 'object') {
      while (lvl-- && typeof argsCloned[0] === 'object') {
        Object.assign(logObject, argsCloned.shift())
      }
    }

    const formattedLogObject = logObjectFormatter(logObject)
    return [formattedLogObject, ...argsCloned]
  } else {
    // deliberate, catching objects, arrays
    if (msg !== null && typeof msg === 'object') {
      while (lvl-- && typeof argsCloned[0] === 'object') {
        Object.assign(logObject, argsCloned.shift())
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined
    } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned)
    if (msg !== undefined) logObject[opts.messageKey] = msg

    const formattedLogObject = logObjectFormatter(logObject)
    return [formattedLogObject]
  }
}

function applySerializers (args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i])
    } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
      for (const k in args[i]) {
        if (serialize.indexOf(k) > -1 && k in serializers) {
          args[i][k] = serializers[k](args[i][k])
        }
      }
    }
  }
}

function transmit (logger, opts, args, argsIsSerialized = false) {
  const send = opts.send
  const ts = opts.ts
  const methodLevel = opts.methodLevel
  const methodValue = opts.methodValue
  const val = opts.val
  const bindings = logger._logEvent.bindings

  if (!argsIsSerialized) {
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
    )
  }

  logger._logEvent.ts = ts
  logger._logEvent.messages = args.filter(function (arg) {
    // bindings can only be objects, so reference equality check via indexOf is fine
    return bindings.indexOf(arg) === -1
  })

  logger._logEvent.level.label = methodLevel
  logger._logEvent.level.value = methodValue

  send(methodLevel, logger._logEvent, val)

  logger._logEvent = createLogEventShape(bindings)
}

function createLogEventShape (bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: '', value: 0 }
  }
}

function asErrValue (err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  }
  for (const key in err) {
    if (obj[key] === undefined) {
      obj[key] = err[key]
    }
  }
  return obj
}

function getTimeFunction (opts) {
  if (typeof opts.timestamp === 'function') {
    return opts.timestamp
  }
  if (opts.timestamp === false) {
    return nullTime
  }
  return epochTime
}

function mock () { return {} }
function passthrough (a) { return a }
function noop () {}

function nullTime () { return false }
function epochTime () { return Date.now() }
function unixTime () { return Math.round(Date.now() / 1000.0) }
function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

/* eslint-disable */
/* istanbul ignore next */
function pfGlobalThisOrFallback () {
  function defd (o) { return typeof o !== 'undefined' && o }
  try {
    if (typeof globalThis !== 'undefined') return globalThis
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        delete Object.prototype.globalThis
        return (this.globalThis = this)
      },
      configurable: true
    })
    return globalThis
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {}
  }
}
/* eslint-enable */

module.exports.default = pino
module.exports.pino = pino
