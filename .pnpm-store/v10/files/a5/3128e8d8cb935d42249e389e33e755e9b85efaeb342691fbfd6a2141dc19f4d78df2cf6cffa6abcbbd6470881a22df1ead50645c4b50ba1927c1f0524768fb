'use strict'

const fastq = require('fastq')
const EE = require('node:events').EventEmitter
const inherits = require('node:util').inherits
const {
  AVV_ERR_EXPOSE_ALREADY_DEFINED,
  AVV_ERR_CALLBACK_NOT_FN,
  AVV_ERR_ROOT_PLG_BOOTED,
  AVV_ERR_READY_TIMEOUT,
  AVV_ERR_ATTRIBUTE_ALREADY_DEFINED
} = require('./lib/errors')
const {
  kAvvio,
  kIsOnCloseHandler
} = require('./lib/symbols')
const { TimeTree } = require('./lib/time-tree')
const { Plugin } = require('./lib/plugin')
const { debug } = require('./lib/debug')
const { validatePlugin } = require('./lib/validate-plugin')
const { isBundledOrTypescriptPlugin } = require('./lib/is-bundled-or-typescript-plugin')
const { isPromiseLike } = require('./lib/is-promise-like')
const { thenify } = require('./lib/thenify')
const { executeWithThenable } = require('./lib/execute-with-thenable')

function Boot (server, opts, done) {
  if (typeof server === 'function' && arguments.length === 1) {
    done = server
    opts = {}
    server = null
  }

  if (typeof opts === 'function') {
    done = opts
    opts = {}
  }

  opts = opts || {}
  opts.autostart = opts.autostart !== false
  opts.timeout = Number(opts.timeout) || 0
  opts.expose = opts.expose || {}

  if (!new.target) {
    return new Boot(server, opts, done)
  }

  this._server = server || this
  this._opts = opts

  if (server) {
    this._expose()
  }

  /**
   * @type {Array<Plugin>}
   */
  this._current = []

  this._error = null

  this._lastUsed = null

  this.setMaxListeners(0)

  if (done) {
    this.once('start', done)
  }

  this.started = false
  this.booted = false
  this.pluginTree = new TimeTree()

  this._readyQ = fastq(this, callWithCbOrNextTick, 1)
  this._readyQ.pause()
  this._readyQ.drain = () => {
    this.emit('start')
    // nooping this, we want to emit start only once
    this._readyQ.drain = noop
  }

  this._closeQ = fastq(this, closeWithCbOrNextTick, 1)
  this._closeQ.pause()
  this._closeQ.drain = () => {
    this.emit('close')
    // nooping this, we want to emit close only once
    this._closeQ.drain = noop
  }

  this._doStart = null

  const instance = this
  this._root = new Plugin(fastq(this, this._loadPluginNextTick, 1), function root (server, opts, done) {
    instance._doStart = done
    opts.autostart && instance.start()
  }, opts, false, 0)

  this._trackPluginLoading(this._root)

  this._loadPlugin(this._root, (err) => {
    debug('root plugin ready')
    try {
      this.emit('preReady')
      this._root = null
    } catch (preReadyError) {
      err = err || this._error || preReadyError
    }

    if (err) {
      this._error = err
      if (this._readyQ.length() === 0) {
        throw err
      }
    } else {
      this.booted = true
    }
    this._readyQ.resume()
  })
}

inherits(Boot, EE)

Boot.prototype.start = function () {
  this.started = true

  // we need to wait any call to use() to happen
  process.nextTick(this._doStart)
  return this
}

// allows to override the instance of a server, given a plugin
Boot.prototype.override = function (server, func, opts) {
  return server
}

Boot.prototype[kAvvio] = true

// load a plugin
Boot.prototype.use = function (plugin, opts) {
  this._lastUsed = this._addPlugin(plugin, opts, false)
  return this
}

Boot.prototype._loadRegistered = function () {
  const plugin = this._current[0]
  const weNeedToStart = !this.started && !this.booted

  // if the root plugin is not loaded, let's resume that
  // so one can use after() before calling ready
  if (weNeedToStart) {
    process.nextTick(() => this._root.queue.resume())
  }

  if (!plugin) {
    return Promise.resolve()
  }

  return plugin.loadedSoFar()
}

Object.defineProperty(Boot.prototype, 'then', { get: thenify })

Boot.prototype._addPlugin = function (pluginFn, opts, isAfter) {
  if (isBundledOrTypescriptPlugin(pluginFn)) {
    pluginFn = pluginFn.default
  }
  validatePlugin(pluginFn)
  opts = opts || {}

  if (this.booted) {
    throw new AVV_ERR_ROOT_PLG_BOOTED()
  }

  // we always add plugins to load at the current element
  const current = this._current[0]

  let timeout = this._opts.timeout

  if (!current.loaded && current.timeout > 0) {
    const delta = Date.now() - current.startTime
    // We need to decrease it by 3ms to make sure the internal timeout
    // is triggered earlier than the parent
    timeout = current.timeout - (delta + 3)
  }

  const plugin = new Plugin(fastq(this, this._loadPluginNextTick, 1), pluginFn, opts, isAfter, timeout)
  this._trackPluginLoading(plugin)

  if (current.loaded) {
    throw new Error(plugin.name, current.name)
  }

  // we add the plugin to be loaded at the end of the current queue
  current.enqueue(plugin, (err) => { err && (this._error = err) })

  return plugin
}

Boot.prototype._expose = function _expose () {
  const instance = this
  const server = instance._server
  const {
    use: useKey = 'use',
    after: afterKey = 'after',
    ready: readyKey = 'ready',
    onClose: onCloseKey = 'onClose',
    close: closeKey = 'close'
  } = this._opts.expose

  if (server[useKey]) {
    throw new AVV_ERR_EXPOSE_ALREADY_DEFINED(useKey, 'use')
  }
  server[useKey] = function (fn, opts) {
    instance.use(fn, opts)
    return this
  }

  if (server[afterKey]) {
    throw new AVV_ERR_EXPOSE_ALREADY_DEFINED(afterKey, 'after')
  }
  server[afterKey] = function (func) {
    if (typeof func !== 'function') {
      return instance._loadRegistered()
    }
    instance.after(encapsulateThreeParam(func, this))
    return this
  }

  if (server[readyKey]) {
    throw new AVV_ERR_EXPOSE_ALREADY_DEFINED(readyKey, 'ready')
  }
  server[readyKey] = function (func) {
    if (func && typeof func !== 'function') {
      throw new AVV_ERR_CALLBACK_NOT_FN(readyKey, typeof func)
    }
    return instance.ready(func ? encapsulateThreeParam(func, this) : undefined)
  }

  if (server[onCloseKey]) {
    throw new AVV_ERR_EXPOSE_ALREADY_DEFINED(onCloseKey, 'onClose')
  }
  server[onCloseKey] = function (func) {
    if (typeof func !== 'function') {
      throw new AVV_ERR_CALLBACK_NOT_FN(onCloseKey, typeof func)
    }
    instance.onClose(encapsulateTwoParam(func, this))
    return this
  }

  if (server[closeKey]) {
    throw new AVV_ERR_EXPOSE_ALREADY_DEFINED(closeKey, 'close')
  }
  server[closeKey] = function (func) {
    if (func && typeof func !== 'function') {
      throw new AVV_ERR_CALLBACK_NOT_FN(closeKey, typeof func)
    }

    if (func) {
      instance.close(encapsulateThreeParam(func, this))
      return this
    }

    // this is a Promise
    return instance.close()
  }

  if (server.then) {
    throw new AVV_ERR_ATTRIBUTE_ALREADY_DEFINED('then')
  }
  Object.defineProperty(server, 'then', { get: thenify.bind(instance) })

  server[kAvvio] = true
}

Boot.prototype.after = function (func) {
  if (!func) {
    return this._loadRegistered()
  }

  this._addPlugin(_after.bind(this), {}, true)

  function _after (s, opts, done) {
    callWithCbOrNextTick.call(this, func, done)
  }

  return this
}

Boot.prototype.onClose = function (func) {
  // this is used to distinguish between onClose and close handlers
  // because they share the same queue but must be called with different signatures

  if (typeof func !== 'function') {
    throw new AVV_ERR_CALLBACK_NOT_FN('onClose', typeof func)
  }

  func[kIsOnCloseHandler] = true
  this._closeQ.unshift(func, (err) => { err && (this._error = err) })

  return this
}

Boot.prototype.close = function (func) {
  let promise

  if (func) {
    if (typeof func !== 'function') {
      throw new AVV_ERR_CALLBACK_NOT_FN('close', typeof func)
    }
  } else {
    promise = new Promise(function (resolve, reject) {
      func = function (err) {
        if (err) {
          return reject(err)
        }
        resolve()
      }
    })
  }

  this.ready(() => {
    this._error = null
    this._closeQ.push(func)
    process.nextTick(this._closeQ.resume.bind(this._closeQ))
  })

  return promise
}

Boot.prototype.ready = function (func) {
  if (func) {
    if (typeof func !== 'function') {
      throw new AVV_ERR_CALLBACK_NOT_FN('ready', typeof func)
    }
    this._readyQ.push(func)
    queueMicrotask(this.start.bind(this))
    return
  }

  return new Promise((resolve, reject) => {
    this._readyQ.push(readyPromiseCB)
    this.start()

    /**
     * The `encapsulateThreeParam` let callback function
     * bind to the right server instance.
     * In promises we need to track the last server
     * instance loaded, the first one in the _current queue.
     */
    const relativeContext = this._current[0].server

    function readyPromiseCB (err, context, done) {
      // the context is always binded to the root server
      if (err) {
        reject(err)
      } else {
        resolve(relativeContext)
      }
      process.nextTick(done)
    }
  })
}

/**
 * @param {Plugin} plugin
 * @returns {void}
 */
Boot.prototype._trackPluginLoading = function (plugin) {
  const parentName = this._current[0]?.name || null
  plugin.once('start', (serverName, funcName, time) => {
    const nodeId = this.pluginTree.start(parentName || null, funcName, time)
    plugin.once('loaded', (serverName, funcName, time) => {
      this.pluginTree.stop(nodeId, time)
    })
  })
}

Boot.prototype.prettyPrint = function () {
  return this.pluginTree.prettyPrint()
}

Boot.prototype.toJSON = function () {
  return this.pluginTree.toJSON()
}

/**
 * @callback LoadPluginCallback
 * @param {Error} [err]
 */

/**
 * Load a plugin
 *
 * @param {Plugin} plugin
 * @param {LoadPluginCallback} callback
 */
Boot.prototype._loadPlugin = function (plugin, callback) {
  const instance = this
  if (isPromiseLike(plugin.func)) {
    plugin.func.then((fn) => {
      if (typeof fn.default === 'function') {
        fn = fn.default
      }
      plugin.func = fn
      this._loadPlugin(plugin, callback)
    }, callback)
    return
  }

  const last = instance._current[0]

  // place the plugin at the top of _current
  instance._current.unshift(plugin)

  if (instance._error && !plugin.isAfter) {
    debug('skipping loading of plugin as instance errored and it is not an after', plugin.name)
    process.nextTick(execCallback)
    return
  }

  let server = (last && last.server) || instance._server

  if (!plugin.isAfter) {
    // Skip override for after
    try {
      server = instance.override(server, plugin.func, plugin.options)
    } catch (overrideErr) {
      debug('override errored', plugin.name)
      return execCallback(overrideErr)
    }
  }

  plugin.exec(server, execCallback)

  function execCallback (err) {
    plugin.finish(err, (err) => {
      instance._current.shift()
      callback(err)
    })
  }
}

/**
* Delays plugin loading until the next tick to ensure any bound `_after` callbacks have a chance
* to run prior to executing the next plugin
*/
Boot.prototype._loadPluginNextTick = function (plugin, callback) {
  process.nextTick(this._loadPlugin.bind(this), plugin, callback)
}

function noop () { }

function callWithCbOrNextTick (func, cb) {
  const context = this._server
  const err = this._error

  // with this the error will appear just in the next after/ready callback
  this._error = null
  if (func.length === 0) {
    this._error = err
    executeWithThenable(func, [], cb)
  } else if (func.length === 1) {
    executeWithThenable(func, [err], cb)
  } else {
    if (this._opts.timeout === 0) {
      const wrapCb = (err) => {
        this._error = err
        cb(this._error)
      }

      if (func.length === 2) {
        func(err, wrapCb)
      } else {
        func(err, context, wrapCb)
      }
    } else {
      timeoutCall.call(this, func, err, context, cb)
    }
  }
}

function timeoutCall (func, rootErr, context, cb) {
  const name = func.unwrappedName ?? func.name
  debug('setting up ready timeout', name, this._opts.timeout)
  let timer = setTimeout(() => {
    debug('timed out', name)
    timer = null
    const toutErr = new AVV_ERR_READY_TIMEOUT(name)
    toutErr.fn = func
    this._error = toutErr
    cb(toutErr)
  }, this._opts.timeout)

  if (func.length === 2) {
    func(rootErr, timeoutCb.bind(this))
  } else {
    func(rootErr, context, timeoutCb.bind(this))
  }

  function timeoutCb (err) {
    if (timer) {
      clearTimeout(timer)
      this._error = err
      cb(this._error)
    } else {
      // timeout has been triggered
      // can not call cb twice
    }
  }
}

function closeWithCbOrNextTick (func, cb) {
  const context = this._server
  const isOnCloseHandler = func[kIsOnCloseHandler]
  if (func.length === 0 || func.length === 1) {
    let promise
    if (isOnCloseHandler) {
      promise = func(context)
    } else {
      promise = func(this._error)
    }
    if (promise && typeof promise.then === 'function') {
      debug('resolving close/onClose promise')
      promise.then(
        () => process.nextTick(cb),
        (e) => process.nextTick(cb, e))
    } else {
      process.nextTick(cb)
    }
  } else if (func.length === 2) {
    if (isOnCloseHandler) {
      func(context, cb)
    } else {
      func(this._error, cb)
    }
  } else {
    if (isOnCloseHandler) {
      func(context, cb)
    } else {
      func(this._error, context, cb)
    }
  }
}

function encapsulateTwoParam (func, that) {
  return _encapsulateTwoParam.bind(that)
  function _encapsulateTwoParam (context, cb) {
    let res
    if (func.length === 0) {
      res = func()
      if (res && res.then) {
        res.then(function () {
          process.nextTick(cb)
        }, cb)
      } else {
        process.nextTick(cb)
      }
    } else if (func.length === 1) {
      res = func(this)

      if (res && res.then) {
        res.then(function () {
          process.nextTick(cb)
        }, cb)
      } else {
        process.nextTick(cb)
      }
    } else {
      func(this, cb)
    }
  }
}

function encapsulateThreeParam (func, that) {
  const wrapped = _encapsulateThreeParam.bind(that)
  wrapped.unwrappedName = func.name
  return wrapped
  function _encapsulateThreeParam (err, cb) {
    let res
    if (!func) {
      process.nextTick(cb)
    } else if (func.length === 0) {
      res = func()
      if (res && res.then) {
        res.then(function () {
          process.nextTick(cb, err)
        }, cb)
      } else {
        process.nextTick(cb, err)
      }
    } else if (func.length === 1) {
      res = func(err)
      if (res && res.then) {
        res.then(function () {
          process.nextTick(cb)
        }, cb)
      } else {
        process.nextTick(cb)
      }
    } else if (func.length === 2) {
      func(err, cb)
    } else {
      func(err, this, cb)
    }
  }
}

module.exports = Boot
