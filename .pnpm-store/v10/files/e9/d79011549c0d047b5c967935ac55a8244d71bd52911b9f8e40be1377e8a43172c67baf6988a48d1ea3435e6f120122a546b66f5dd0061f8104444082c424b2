'use strict'

/* eslint no-prototype-builtins: 0 */

const { EventEmitter } = require('node:events')
const {
  lsCacheSym,
  levelValSym,
  setLevelSym,
  getLevelSym,
  chindingsSym,
  parsedChindingsSym,
  mixinSym,
  asJsonSym,
  writeSym,
  mixinMergeStrategySym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  serializersSym,
  formattersSym,
  errorKeySym,
  messageKeySym,
  useOnlyCustomLevelsSym,
  needsMetadataGsym,
  redactFmtSym,
  stringifySym,
  formatOptsSym,
  stringifiersSym,
  msgPrefixSym,
  hooksSym
} = require('./symbols')
const {
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  initialLsCache,
  genLsCache,
  assertNoLevelCollisions
} = require('./levels')
const {
  asChindings,
  asJson,
  buildFormatters,
  stringify,
  noop
} = require('./tools')
const {
  version
} = require('./meta')
const redaction = require('./redaction')

// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {}
const prototype = {
  constructor,
  child,
  bindings,
  setBindings,
  flush,
  isLevelEnabled,
  version,
  get level () { return this[getLevelSym]() },
  set level (lvl) { this[setLevelSym](lvl) },
  get levelVal () { return this[levelValSym] },
  set levelVal (n) { throw Error('levelVal is read-only') },
  get msgPrefix () { return this[msgPrefixSym] },
  get [Symbol.toStringTag] () { return 'Pino' },
  [lsCacheSym]: initialLsCache,
  [writeSym]: write,
  [asJsonSym]: asJson,
  [getLevelSym]: getLevel,
  [setLevelSym]: setLevel
}

Object.setPrototypeOf(prototype, EventEmitter.prototype)

// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function () {
  return Object.create(prototype)
}

const resetChildingsFormatter = bindings => bindings
function child (bindings, options) {
  if (!bindings) {
    throw Error('missing bindings for child Pino')
  }
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const instance = Object.create(this)

  // If an `options` object was not supplied, we can improve
  // the performance of child creation by skipping
  // the checks for set options and simply return
  // a baseline instance.
  if (options == null) {
    if (instance[formattersSym].bindings !== resetChildingsFormatter) {
      instance[formattersSym] = buildFormatters(
        formatters.level,
        resetChildingsFormatter,
        formatters.log
      )
    }

    instance[chindingsSym] = asChindings(instance, bindings)

    // Always call setLevel to ensure child gets own method references
    // This prevents issues when parent methods are wrapped (e.g., by Sinon)
    instance[setLevelSym](this.level)

    if (this.onChild !== noop) {
      this.onChild(instance)
    }

    return instance
  }

  if (options.hasOwnProperty('serializers') === true) {
    instance[serializersSym] = Object.create(null)

    for (const k in serializers) {
      instance[serializersSym][k] = serializers[k]
    }
    const parentSymbols = Object.getOwnPropertySymbols(serializers)
    /* eslint no-var: off */
    for (var i = 0; i < parentSymbols.length; i++) {
      const ks = parentSymbols[i]
      instance[serializersSym][ks] = serializers[ks]
    }

    for (const bk in options.serializers) {
      instance[serializersSym][bk] = options.serializers[bk]
    }
    const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers)
    for (var bi = 0; bi < bindingsSymbols.length; bi++) {
      const bks = bindingsSymbols[bi]
      instance[serializersSym][bks] = options.serializers[bks]
    }
  } else instance[serializersSym] = serializers
  if (options.hasOwnProperty('formatters')) {
    const { level, bindings: chindings, log } = options.formatters
    instance[formattersSym] = buildFormatters(
      level || formatters.level,
      chindings || resetChildingsFormatter,
      log || formatters.log
    )
  } else {
    instance[formattersSym] = buildFormatters(
      formatters.level,
      resetChildingsFormatter,
      formatters.log
    )
  }
  if (options.hasOwnProperty('customLevels') === true) {
    assertNoLevelCollisions(this.levels, options.customLevels)
    instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym])
    genLsCache(instance)
  }

  // redact must place before asChindings and only replace if exist
  if ((typeof options.redact === 'object' && options.redact !== null) || Array.isArray(options.redact)) {
    instance.redact = options.redact // replace redact directly
    const stringifiers = redaction(instance.redact, stringify)
    const formatOpts = { stringify: stringifiers[redactFmtSym] }
    instance[stringifySym] = stringify
    instance[stringifiersSym] = stringifiers
    instance[formatOptsSym] = formatOpts
  }

  if (typeof options.msgPrefix === 'string') {
    instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix
  }

  instance[chindingsSym] = asChindings(instance, bindings)
  const childLevel = options.level || this.level
  instance[setLevelSym](childLevel)
  this.onChild(instance)
  return instance
}

function bindings () {
  const chindings = this[chindingsSym]
  const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
  const bindingsFromJson = JSON.parse(chindingsJson)
  delete bindingsFromJson.pid
  delete bindingsFromJson.hostname
  return bindingsFromJson
}

function setBindings (newBindings) {
  const chindings = asChindings(this, newBindings)
  this[chindingsSym] = chindings
  delete this[parsedChindingsSym]
}

/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */
function defaultMixinMergeStrategy (mergeObject, mixinObject) {
  return Object.assign(mixinObject, mergeObject)
}

function write (_obj, msg, num) {
  const t = this[timeSym]()
  const mixin = this[mixinSym]
  const errorKey = this[errorKeySym]
  const messageKey = this[messageKeySym]
  const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy
  let obj
  const streamWriteHook = this[hooksSym].streamWrite

  if (_obj === undefined || _obj === null) {
    obj = {}
  } else if (_obj instanceof Error) {
    obj = { [errorKey]: _obj }
    if (msg === undefined) {
      msg = _obj.message
    }
  } else {
    obj = _obj
    if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
      msg = _obj[errorKey].message
    }
  }

  if (mixin) {
    obj = mixinMergeStrategy(obj, mixin(obj, num, this))
  }

  const s = this[asJsonSym](obj, msg, num, t)

  const stream = this[streamSym]
  if (stream[needsMetadataGsym] === true) {
    stream.lastLevel = num
    stream.lastObj = obj
    stream.lastMsg = msg
    stream.lastTime = t.slice(this[timeSliceIndexSym])
    stream.lastLogger = this // for child loggers
  }
  stream.write(streamWriteHook ? streamWriteHook(s) : s)
}

function flush (cb) {
  if (cb != null && typeof cb !== 'function') {
    throw Error('callback must be a function')
  }

  const stream = this[streamSym]

  if (typeof stream.flush === 'function') {
    stream.flush(cb || noop)
  } else if (cb) cb()
}
