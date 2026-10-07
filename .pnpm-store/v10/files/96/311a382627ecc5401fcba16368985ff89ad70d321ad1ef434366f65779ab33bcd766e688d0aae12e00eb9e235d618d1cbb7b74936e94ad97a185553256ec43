'use strict'

const AbortController = globalThis.AbortController || require('abort-controller').AbortController
const {
  codes: { ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, ERR_MISSING_ARGS, ERR_OUT_OF_RANGE },
  AbortError
} = require('../../ours/errors')
const { validateAbortSignal, validateInteger, validateObject } = require('../validators')
const kWeakHandler = require('../../ours/primordials').Symbol('kWeak')
const { finished } = require('./end-of-stream')
const staticCompose = require('./compose')
const { addAbortSignalNoValidate } = require('./add-abort-signal')
const { isWritable, isNodeStream } = require('./utils')
const {
  ArrayPrototypePush,
  MathFloor,
  Number,
  NumberIsNaN,
  Promise,
  PromiseReject,
  PromisePrototypeThen,
  Symbol
} = require('../../ours/primordials')
const kEmpty = Symbol('kEmpty')
const kEof = Symbol('kEof')
function compose(stream, options) {
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  if (isNodeStream(stream) && !isWritable(stream)) {
    throw new ERR_INVALID_ARG_VALUE('stream', stream, 'must be writable')
  }
  const composedStream = staticCompose(this, stream)
  if (options !== null && options !== undefined && options.signal) {
    // Not validating as we already validated before
    addAbortSignalNoValidate(options.signal, composedStream)
  }
  return composedStream
}
function map(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
  }
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  let concurrency = 1
  if ((options === null || options === undefined ? undefined : options.concurrency) != null) {
    concurrency = MathFloor(options.concurrency)
  }
  validateInteger(concurrency, 'concurrency', 1)
  return async function* map() {
    var _options$signal, _options$signal2
    const ac = new AbortController()
    const stream = this
    const queue = []
    const signal = ac.signal
    const signalOpt = {
      signal
    }
    const abort = () => ac.abort()
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal = options.signal) !== null &&
      _options$signal !== undefined &&
      _options$signal.aborted
    ) {
      abort()
    }
    options === null || options === undefined
      ? undefined
      : (_options$signal2 = options.signal) === null || _options$signal2 === undefined
      ? undefined
      : _options$signal2.addEventListener('abort', abort)
    let next
    let resume
    let done = false
    function onDone() {
      done = true
    }
    async function pump() {
      try {
        for await (let val of stream) {
          var _val
          if (done) {
            return
          }
          if (signal.aborted) {
            throw new AbortError()
          }
          try {
            val = fn(val, signalOpt)
          } catch (err) {
            val = PromiseReject(err)
          }
          if (val === kEmpty) {
            continue
          }
          if (typeof ((_val = val) === null || _val === undefined ? undefined : _val.catch) === 'function') {
            val.catch(onDone)
          }
          queue.push(val)
          if (next) {
            next()
            next = null
          }
          if (!done && queue.length && queue.length >= concurrency) {
            await new Promise((resolve) => {
              resume = resolve
            })
          }
        }
        queue.push(kEof)
      } catch (err) {
        const val = PromiseReject(err)
        PromisePrototypeThen(val, undefined, onDone)
        queue.push(val)
      } finally {
        var _options$signal3
        done = true
        if (next) {
          next()
          next = null
        }
        options === null || options === undefined
          ? undefined
          : (_options$signal3 = options.signal) === null || _options$signal3 === undefined
          ? undefined
          : _options$signal3.removeEventListener('abort', abort)
      }
    }
    pump()
    try {
      while (true) {
        while (queue.length > 0) {
          const val = await queue[0]
          if (val === kEof) {
            return
          }
          if (signal.aborted) {
            throw new AbortError()
          }
          if (val !== kEmpty) {
            yield val
          }
          queue.shift()
          if (resume) {
            resume()
            resume = null
          }
        }
        await new Promise((resolve) => {
          next = resolve
        })
      }
    } finally {
      ac.abort()
      done = true
      if (resume) {
        resume()
        resume = null
      }
    }
  }.call(this)
}
function asIndexedPairs(options = undefined) {
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  return async function* asIndexedPairs() {
    let index = 0
    for await (const val of this) {
      var _options$signal4
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal4 = options.signal) !== null &&
        _options$signal4 !== undefined &&
        _options$signal4.aborted
      ) {
        throw new AbortError({
          cause: options.signal.reason
        })
      }
      yield [index++, val]
    }
  }.call(this)
}
async function some(fn, options = undefined) {
  for await (const unused of filter.call(this, fn, options)) {
    return true
  }
  return false
}
async function every(fn, options = undefined) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
  }
  // https://en.wikipedia.org/wiki/De_Morgan%27s_laws
  return !(await some.call(
    this,
    async (...args) => {
      return !(await fn(...args))
    },
    options
  ))
}
async function find(fn, options) {
  for await (const result of filter.call(this, fn, options)) {
    return result
  }
  return undefined
}
async function forEach(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
  }
  async function forEachFn(value, options) {
    await fn(value, options)
    return kEmpty
  }
  // eslint-disable-next-line no-unused-vars
  for await (const unused of map.call(this, forEachFn, options));
}
function filter(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
  }
  async function filterFn(value, options) {
    if (await fn(value, options)) {
      return value
    }
    return kEmpty
  }
  return map.call(this, filterFn, options)
}

// Specific to provide better error to reduce since the argument is only
// missing if the stream has no items in it - but the code is still appropriate
class ReduceAwareErrMissingArgs extends ERR_MISSING_ARGS {
  constructor() {
    super('reduce')
    this.message = 'Reduce of an empty stream requires an initial value'
  }
}
async function reduce(reducer, initialValue, options) {
  var _options$signal5
  if (typeof reducer !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('reducer', ['Function', 'AsyncFunction'], reducer)
  }
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  let hasInitialValue = arguments.length > 1
  if (
    options !== null &&
    options !== undefined &&
    (_options$signal5 = options.signal) !== null &&
    _options$signal5 !== undefined &&
    _options$signal5.aborted
  ) {
    const err = new AbortError(undefined, {
      cause: options.signal.reason
    })
    this.once('error', () => {}) // The error is already propagated
    await finished(this.destroy(err))
    throw err
  }
  const ac = new AbortController()
  const signal = ac.signal
  if (options !== null && options !== undefined && options.signal) {
    const opts = {
      once: true,
      [kWeakHandler]: this
    }
    options.signal.addEventListener('abort', () => ac.abort(), opts)
  }
  let gotAnyItemFromStream = false
  try {
    for await (const value of this) {
      var _options$signal6
      gotAnyItemFromStream = true
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal6 = options.signal) !== null &&
        _options$signal6 !== undefined &&
        _options$signal6.aborted
      ) {
        throw new AbortError()
      }
      if (!hasInitialValue) {
        initialValue = value
        hasInitialValue = true
      } else {
        initialValue = await reducer(initialValue, value, {
          signal
        })
      }
    }
    if (!gotAnyItemFromStream && !hasInitialValue) {
      throw new ReduceAwareErrMissingArgs()
    }
  } finally {
    ac.abort()
  }
  return initialValue
}
async function toArray(options) {
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  const result = []
  for await (const val of this) {
    var _options$signal7
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal7 = options.signal) !== null &&
      _options$signal7 !== undefined &&
      _options$signal7.aborted
    ) {
      throw new AbortError(undefined, {
        cause: options.signal.reason
      })
    }
    ArrayPrototypePush(result, val)
  }
  return result
}
function flatMap(fn, options) {
  const values = map.call(this, fn, options)
  return async function* flatMap() {
    for await (const val of values) {
      yield* val
    }
  }.call(this)
}
function toIntegerOrInfinity(number) {
  // We coerce here to align with the spec
  // https://github.com/tc39/proposal-iterator-helpers/issues/169
  number = Number(number)
  if (NumberIsNaN(number)) {
    return 0
  }
  if (number < 0) {
    throw new ERR_OUT_OF_RANGE('number', '>= 0', number)
  }
  return number
}
function drop(number, options = undefined) {
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  number = toIntegerOrInfinity(number)
  return async function* drop() {
    var _options$signal8
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal8 = options.signal) !== null &&
      _options$signal8 !== undefined &&
      _options$signal8.aborted
    ) {
      throw new AbortError()
    }
    for await (const val of this) {
      var _options$signal9
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal9 = options.signal) !== null &&
        _options$signal9 !== undefined &&
        _options$signal9.aborted
      ) {
        throw new AbortError()
      }
      if (number-- <= 0) {
        yield val
      }
    }
  }.call(this)
}
function take(number, options = undefined) {
  if (options != null) {
    validateObject(options, 'options')
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal')
  }
  number = toIntegerOrInfinity(number)
  return async function* take() {
    var _options$signal10
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal10 = options.signal) !== null &&
      _options$signal10 !== undefined &&
      _options$signal10.aborted
    ) {
      throw new AbortError()
    }
    for await (const val of this) {
      var _options$signal11
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal11 = options.signal) !== null &&
        _options$signal11 !== undefined &&
        _options$signal11.aborted
      ) {
        throw new AbortError()
      }
      if (number-- > 0) {
        yield val
      } else {
        return
      }
    }
  }.call(this)
}
module.exports.streamReturningOperators = {
  asIndexedPairs,
  drop,
  filter,
  flatMap,
  map,
  take,
  compose
}
module.exports.promiseReturningOperators = {
  every,
  forEach,
  reduce,
  toArray,
  some,
  find
}
