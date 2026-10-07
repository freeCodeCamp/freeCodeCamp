const errors = require('./lib/errors')

class EventListener {
  constructor() {
    this.list = []
    this.count = 0
  }

  append(ctx, name, fn, once) {
    this.count++
    ctx.emit('newListener', name, fn) // Emit BEFORE adding
    this.list.push([fn, once])
  }

  prepend(ctx, name, fn, once) {
    this.count++
    ctx.emit('newListener', name, fn) // Emit BEFORE adding
    this.list.unshift([fn, once])
  }

  remove(ctx, name, fn) {
    for (let i = 0, n = this.list.length; i < n; i++) {
      const l = this.list[i]

      if (l[0] === fn) {
        this.list.splice(i, 1)

        if (this.count === 1) delete ctx._events[name]

        ctx.emit('removeListener', name, fn) // Emit AFTER removing

        this.count--
        return
      }
    }
  }

  removeAll(ctx, name) {
    const list = [...this.list]
    this.list = []

    if (this.count === list.length) delete ctx._events[name]

    for (let i = list.length - 1; i >= 0; i--) {
      ctx.emit('removeListener', name, list[i][0]) // Emit AFTER removing
    }

    this.count -= list.length
  }

  emit(ctx, name, ...args) {
    const list = [...this.list]

    for (let i = 0, n = list.length; i < n; i++) {
      const l = list[i]

      if (l[1] === true) this.remove(ctx, name, l[0])

      Reflect.apply(l[0], ctx, args)
    }

    return list.length > 0
  }
}

function appendListener(ctx, name, fn, once) {
  if (ctx._events === undefined) ctx._events = Object.create(null)
  const e = ctx._events[name] || (ctx._events[name] = new EventListener())
  e.append(ctx, name, fn, once)
  return ctx
}

function prependListener(ctx, name, fn, once) {
  if (ctx._events === undefined) ctx._events = Object.create(null)
  const e = ctx._events[name] || (ctx._events[name] = new EventListener())
  e.prepend(ctx, name, fn, once)
  return ctx
}

function removeListener(ctx, name, fn) {
  if (ctx._events === undefined) return ctx
  const e = ctx._events[name]
  if (e !== undefined) e.remove(ctx, name, fn)
  return ctx
}

function throwUnhandledError(...args) {
  let err

  if (args.length > 0) err = args[0]

  if (err instanceof Error === false) err = errors.UNHANDLED_ERROR(err)

  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, exports.prototype.emit)
  }

  queueMicrotask(() => {
    throw err
  })
}

module.exports = exports = class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }

  addListener(name, fn) {
    return appendListener(this, name, fn, false)
  }

  addOnceListener(name, fn) {
    return appendListener(this, name, fn, true)
  }

  prependListener(name, fn) {
    return prependListener(this, name, fn, false)
  }

  prependOnceListener(name, fn) {
    return prependListener(this, name, fn, true)
  }

  removeListener(name, fn) {
    return removeListener(this, name, fn)
  }

  on(name, fn) {
    return appendListener(this, name, fn, false)
  }

  once(name, fn) {
    return appendListener(this, name, fn, true)
  }

  off(name, fn) {
    return removeListener(this, name, fn)
  }

  emit(name, ...args) {
    if (name === 'error' && this._events !== undefined && this._events.error === undefined) {
      throwUnhandledError(...args)
    }

    if (this._events === undefined) return false
    const e = this._events[name]
    return e === undefined ? false : e.emit(this, name, ...args)
  }

  listeners(name) {
    if (this._events === undefined) return []
    const e = this._events[name]
    return e === undefined ? [] : [...e.list]
  }

  listenerCount(name) {
    if (this._events === undefined) return 0
    const e = this._events[name]
    return e === undefined ? 0 : e.list.length
  }

  getMaxListeners() {
    return EventEmitter.defaultMaxListeners
  }

  setMaxListeners(n) {}

  removeAllListeners(name) {
    if (arguments.length === 0) {
      for (const key of Reflect.ownKeys(this._events)) {
        if (key === 'removeListener') continue
        this.removeAllListeners(key)
      }
      this.removeAllListeners('removeListener')
    } else {
      const e = this._events[name]
      if (e !== undefined) e.removeAll(this, name)
    }
    return this
  }
}

exports.EventEmitter = exports

exports.errors = errors

exports.defaultMaxListeners = 10

exports.on = function on(emitter, name, opts = {}) {
  const { signal } = opts

  if (signal && signal.aborted) {
    throw errors.OPERATION_ABORTED(signal.reason)
  }

  let error = null
  let done = false

  const events = []
  const promises = []

  if (name !== 'error') emitter.on('error', onerror)

  if (signal) signal.addEventListener('abort', onabort)

  emitter.on(name, onevent)

  return {
    next() {
      if (events.length) {
        return Promise.resolve({ value: events.shift(), done: false })
      }

      if (error) {
        const err = error

        error = null

        return Promise.reject(err)
      }

      if (done) return onclose()

      return new Promise((resolve, reject) => promises.push({ resolve, reject }))
    },

    return() {
      return onclose()
    },

    throw(err) {
      return onerror(err)
    },

    [Symbol.asyncIterator]() {
      return this
    }
  }

  function onevent(...args) {
    if (promises.length) {
      promises.shift().resolve({ value: args, done: false })
    } else {
      events.push(args)
    }
  }

  function onerror(err) {
    emitter.off(name, onevent).off('error', onerror)

    if (promises.length) {
      promises.shift().reject(err)
    } else {
      error = err
    }

    return Promise.resolve({ done: true })
  }

  function onabort() {
    signal.removeEventListener('abort', onabort)

    onerror(errors.OPERATION_ABORTED(signal.reason))
  }

  function onclose() {
    emitter.off(name, onevent)

    if (name !== 'error') emitter.off('error', onerror)

    if (signal) signal.removeEventListener('abort', onabort)

    done = true

    if (promises.length) promises.shift().resolve({ done: true })

    return Promise.resolve({ done: true })
  }
}

exports.once = function once(emitter, name, opts = {}) {
  const { signal } = opts

  if (signal && signal.aborted) {
    return Promise.reject(errors.OPERATION_ABORTED(signal.reason))
  }

  return new Promise((resolve, reject) => {
    if (name !== 'error') emitter.on('error', onerror)

    if (signal) signal.addEventListener('abort', onabort)

    emitter.once(name, onevent)

    function onevent(...args) {
      if (name !== 'error') emitter.off('error', onerror)

      if (signal) signal.removeEventListener('abort', onabort)

      resolve(args)
    }

    function onerror(err) {
      emitter.off(name, onevent)

      if (name !== 'error') emitter.off('error', onerror)

      reject(err)
    }

    function onabort() {
      signal.removeEventListener('abort', onabort)

      onerror(errors.OPERATION_ABORTED(signal.reason))
    }
  })
}

exports.forward = function forward(from, to, names, opts = {}) {
  if (typeof names === 'string') names = [names]

  const { emit = to.emit.bind(to) } = opts

  const listeners = names.map(
    (name) =>
      function onevent(...args) {
        emit(name, ...args)
      }
  )

  to.on('newListener', (name) => {
    const i = names.indexOf(name)

    if (i !== -1 && to.listenerCount(name) === 0) {
      from.on(name, listeners[i])
    }
  }).on('removeListener', (name) => {
    const i = names.indexOf(name)

    if (i !== -1 && to.listenerCount(name) === 0) {
      from.off(name, listeners[i])
    }
  })
}

exports.listenerCount = function listenerCount(emitter, name) {
  return emitter.listenerCount(name)
}

exports.getMaxListeners = function getMaxListeners(emitter) {
  if (typeof emitter.getMaxListeners === 'function') {
    return emitter.getMaxListeners()
  }

  return exports.defaultMaxListeners
}

exports.setMaxListeners = function setMaxListeners(n, ...emitters) {
  if (emitters.length === 0) exports.defaultMaxListeners = n
  else {
    for (const emitter of emitters) {
      if (typeof emitter.setMaxListeners === 'function') {
        emitter.setMaxListeners(n)
      }
    }
  }
}
