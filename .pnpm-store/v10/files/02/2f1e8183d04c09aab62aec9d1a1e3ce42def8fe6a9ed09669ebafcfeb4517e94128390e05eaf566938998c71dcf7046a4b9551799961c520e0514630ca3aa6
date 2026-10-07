'use strict'

/* eslint no-prototype-builtins: 0 */

const diagChan = require('node:diagnostics_channel')
const format = require('quick-format-unescaped')
const { mapHttpRequest, mapHttpResponse } = require('pino-std-serializers')
const SonicBoom = require('sonic-boom')
const onExit = require('on-exit-leak-free')
const {
  lsCacheSym,
  chindingsSym,
  writeSym,
  serializersSym,
  formatOptsSym,
  endSym,
  stringifiersSym,
  stringifySym,
  stringifySafeSym,
  wildcardFirstSym,
  nestedKeySym,
  formattersSym,
  messageKeySym,
  errorKeySym,
  nestedKeyStrSym,
  msgPrefixSym
} = require('./symbols')
const { isMainThread } = require('worker_threads')
const transport = require('./transport')

let asJsonChan
// Node >= 18.19 supports diagnostics_channel.tracingChannel
if (typeof diagChan.tracingChannel === 'function') {
  asJsonChan = diagChan.tracingChannel('pino_asJson')
} else {
  // Older Node 18.x (e.g. 18.18), provided a no-op fallback
  asJsonChan = {
    hasSubscribers: false,
    traceSync (fn, store, thisArg, ...args) {
      return fn.call(thisArg, ...args)
    }
  }
}

function noop () {
}

function genLog (level, hook) {
  if (!hook) return LOG

  return function hookWrappedLog (...args) {
    hook.call(this, args, LOG, level)
  }

  function LOG (o, ...n) {
    if (typeof o === 'object') {
      let msg = o
      if (o !== null) {
        if (o.method && o.headers && o.socket) {
          o = mapHttpRequest(o)
        } else if (typeof o.setHeader === 'function') {
          o = mapHttpResponse(o)
        }
      }
      let formatParams
      if (msg === null && n.length === 0) {
        formatParams = [null]
      } else {
        msg = n.shift()
        formatParams = n
      }
      // We do not use a coercive check for `msg` as it is
      // measurably slower than the explicit checks.
      if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
        msg = this[msgPrefixSym] + msg
      }
      this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level)
    } else {
      let msg = o === undefined ? n.shift() : o

      // We do not use a coercive check for `msg` as it is
      // measurably slower than the explicit checks.
      if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
        msg = this[msgPrefixSym] + msg
      }
      this[writeSym](null, format(msg, n, this[formatOptsSym]), level)
    }
  }
}

// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString (str) {
  let result = ''
  let last = 0
  let found = false
  let point = 255
  const l = str.length
  if (l > 100) {
    return JSON.stringify(str)
  }
  for (var i = 0; i < l && point >= 32; i++) {
    point = str.charCodeAt(i)
    if (point === 34 || point === 92) {
      result += str.slice(last, i) + '\\'
      last = i
      found = true
    }
  }
  if (!found) {
    result = str
  } else {
    result += str.slice(last)
  }
  return point < 32 ? JSON.stringify(str) : '"' + result + '"'
}

/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */
function asJson (obj, msg, num, time) {
  if (asJsonChan.hasSubscribers === false) {
    return _asJson.call(this, obj, msg, num, time)
  }

  const store = { instance: this, arguments }
  return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time)
}

/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */
function _asJson (obj, msg, num, time) {
  const stringify = this[stringifySym]
  const stringifySafe = this[stringifySafeSym]
  const stringifiers = this[stringifiersSym]
  const end = this[endSym]
  const chindings = this[chindingsSym]
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const messageKey = this[messageKeySym]
  const errorKey = this[errorKeySym]
  let data = this[lsCacheSym][num] + time

  // we need the child bindings added to the output first so instance logged
  // objects can take precedence when JSON.parse-ing the resulting log line
  data = data + chindings

  let value
  if (formatters.log) {
    obj = formatters.log(obj)
  }
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  let propStr = ''
  for (const key in obj) {
    value = obj[key]
    if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
      if (serializers[key]) {
        value = serializers[key](value)
      } else if (key === errorKey && serializers.err) {
        value = serializers.err(value)
      }

      const stringifier = stringifiers[key] || wildcardStringifier

      switch (typeof value) {
        case 'undefined':
        case 'function':
          continue
        case 'number':
          /* eslint no-fallthrough: "off" */
          if (Number.isFinite(value) === false) {
            value = null
          }
        // this case explicitly falls through to the next one
        case 'boolean':
          if (stringifier) value = stringifier(value)
          break
        case 'string':
          value = (stringifier || asString)(value)
          break
        default:
          value = (stringifier || stringify)(value, stringifySafe)
      }
      if (value === undefined) continue
      const strKey = asString(key)
      propStr += ',' + strKey + ':' + value
    }
  }

  let msgStr = ''
  if (msg !== undefined) {
    value = serializers[messageKey] ? serializers[messageKey](msg) : msg
    const stringifier = stringifiers[messageKey] || wildcardStringifier

    switch (typeof value) {
      case 'function':
        break
      case 'number':
        /* eslint no-fallthrough: "off" */
        if (Number.isFinite(value) === false) {
          value = null
        }
      // this case explicitly falls through to the next one
      case 'boolean':
        if (stringifier) value = stringifier(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      case 'string':
        value = (stringifier || asString)(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      default:
        value = (stringifier || stringify)(value, stringifySafe)
        msgStr = ',"' + messageKey + '":' + value
    }
  }

  if (this[nestedKeySym] && propStr) {
    // place all the obj properties under the specified key
    // the nested key is already formatted from the constructor
    return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end
  } else {
    return data + propStr + msgStr + end
  }
}

function asChindings (instance, bindings) {
  let value
  let data = instance[chindingsSym]
  const stringify = instance[stringifySym]
  const stringifySafe = instance[stringifySafeSym]
  const stringifiers = instance[stringifiersSym]
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  const serializers = instance[serializersSym]
  const formatter = instance[formattersSym].bindings
  bindings = formatter(bindings)

  for (const key in bindings) {
    value = bindings[key]
    const valid = (key.length < 5 || (key !== 'level' &&
      key !== 'serializers' &&
      key !== 'formatters' &&
      key !== 'customLevels')) &&
      bindings.hasOwnProperty(key) &&
      value !== undefined
    if (valid === true) {
      value = serializers[key] ? serializers[key](value) : value
      value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe)
      if (value === undefined) continue
      data += ',"' + key + '":' + value
    }
  }
  return data
}

function hasBeenTampered (stream) {
  return stream.write !== stream.constructor.prototype.write
}

function buildSafeSonicBoom (opts) {
  const stream = new SonicBoom(opts)
  stream.on('error', filterBrokenPipe)
  // If we are sync: false, we must flush on exit
  if (!opts.sync && isMainThread) {
    onExit.register(stream, autoEnd)

    stream.on('close', function () {
      onExit.unregister(stream)
    })
  }
  return stream

  function filterBrokenPipe (err) {
    // Impossible to replicate across all operating systems
    /* istanbul ignore next */
    if (err.code === 'EPIPE') {
      // If we get EPIPE, we should stop logging here
      // however we have no control to the consumer of
      // SonicBoom, so we just overwrite the write method
      stream.write = noop
      stream.end = noop
      stream.flushSync = noop
      stream.destroy = noop
      return
    }
    stream.removeListener('error', filterBrokenPipe)
    stream.emit('error', err)
  }
}

function autoEnd (stream, eventName) {
  // This check is needed only on some platforms
  /* istanbul ignore next */
  if (stream.destroyed) {
    return
  }

  if (eventName === 'beforeExit') {
    // We still have an event loop, let's use it
    stream.flush()
    stream.on('drain', function () {
      stream.end()
    })
  } else {
    // For some reason istanbul is not detecting this, but it's there
    /* istanbul ignore next */
    // We do not have an event loop, so flush synchronously
    stream.flushSync()
  }
}

function createArgsNormalizer (defaultOptions) {
  return function normalizeArgs (instance, caller, opts = {}, stream) {
    // support stream as a string
    if (typeof opts === 'string') {
      stream = buildSafeSonicBoom({ dest: opts })
      opts = {}
    } else if (typeof stream === 'string') {
      if (opts && opts.transport) {
        throw Error('only one of option.transport or stream can be specified')
      }
      stream = buildSafeSonicBoom({ dest: stream })
    } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
      stream = opts
      opts = {}
    } else if (opts.transport) {
      if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
        throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)')
      }
      if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
        throw Error('option.transport.targets do not allow custom level formatters')
      }

      let customLevels
      if (opts.customLevels) {
        customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels)
      }
      stream = transport({ caller, ...opts.transport, levels: customLevels })
    }
    opts = Object.assign({}, defaultOptions, opts)
    opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers)
    opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters)

    if (opts.prettyPrint) {
      throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)')
    }

    const { enabled, onChild } = opts
    if (enabled === false) opts.level = 'silent'
    if (!onChild) opts.onChild = noop
    if (!stream) {
      if (!hasBeenTampered(process.stdout)) {
        // If process.stdout.fd is undefined, it means that we are running
        // in a worker thread. Let's assume we are logging to file descriptor 1.
        stream = buildSafeSonicBoom({ fd: process.stdout.fd || 1 })
      } else {
        stream = process.stdout
      }
    }
    return { opts, stream }
  }
}

function stringify (obj, stringifySafeFn) {
  try {
    return JSON.stringify(obj)
  } catch (_) {
    try {
      const stringify = stringifySafeFn || this[stringifySafeSym]
      return stringify(obj)
    } catch (_) {
      return '"[unable to serialize, circular reference is too complex to analyze]"'
    }
  }
}

function buildFormatters (level, bindings, log) {
  return {
    level,
    bindings,
    log
  }
}

/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */
function normalizeDestFileDescriptor (destination) {
  const fd = Number(destination)
  if (typeof destination === 'string' && Number.isFinite(fd)) {
    return fd
  }
  // destination could be undefined if we are in a worker
  if (destination === undefined) {
    // This is stdout in UNIX systems
    return 1
  }
  return destination
}

module.exports = {
  noop,
  buildSafeSonicBoom,
  asChindings,
  asJson,
  genLog,
  createArgsNormalizer,
  stringify,
  buildFormatters,
  normalizeDestFileDescriptor
}
