'use strict'

const { EventEmitter } = require('node:events')
const { inherits } = require('node:util')
const { debug } = require('./debug')
const { createPromise } = require('./create-promise')
const { AVV_ERR_PLUGIN_EXEC_TIMEOUT } = require('./errors')
const { getPluginName } = require('./get-plugin-name')
const { isPromiseLike } = require('./is-promise-like')

/**
 * @param {*} queue
 * @param {*} func
 * @param {*} options
 * @param {boolean} isAfter
 * @param {number} [timeout]
 */
function Plugin (queue, func, options, isAfter, timeout) {
  this.queue = queue
  this.func = func
  this.options = options

  /**
   * @type {boolean}
   */
  this.isAfter = isAfter
  /**
   * @type {number}
   */
  this.timeout = timeout

  /**
   * @type {boolean}
   */
  this.started = false
  /**
   * @type {string}
   */
  this.name = getPluginName(func, options)

  this.queue.pause()

  /**
   * @type {Error|null}
   */
  this._error = null
  /**
   * @type {boolean}
   */
  this.loaded = false

  this._promise = null

  this.startTime = null
}

inherits(Plugin, EventEmitter)

/**
 * @callback ExecCallback
 * @param {Error|null} execErr
 * @returns
 */

/**
 *
 * @param {*} server
 * @param {ExecCallback} callback
 * @returns
 */
Plugin.prototype.exec = function (server, callback) {
  debug('exec', this.name)

  this.server = server
  const func = this.func
  const name = this.name
  let completed = false

  this.options = typeof this.options === 'function' ? this.options(this.server) : this.options

  let timer = null

  /**
   * @param {Error} [execErr]
   */
  const done = (execErr) => {
    if (completed) {
      debug('loading complete', name)
      return
    }

    this._error = execErr

    if (execErr) {
      debug('exec errored', name)
    } else {
      debug('exec completed', name)
    }

    completed = true

    if (timer) {
      clearTimeout(timer)
    }

    callback(execErr)
  }

  if (this.timeout > 0) {
    debug('setting up timeout', name, this.timeout)
    timer = setTimeout(function () {
      debug('timed out', name)
      timer = null
      const readyTimeoutErr = new AVV_ERR_PLUGIN_EXEC_TIMEOUT(name)
      // TODO Remove reference to function
      readyTimeoutErr.fn = func
      done(readyTimeoutErr)
    }, this.timeout)
  }

  this.started = true
  this.startTime = Date.now()
  this.emit('start', this.server ? this.server.name : null, this.name, Date.now())

  const maybePromiseLike = func(this.server, this.options, done)

  if (isPromiseLike(maybePromiseLike)) {
    debug('exec: resolving promise', name)

    maybePromiseLike.then(
      () => process.nextTick(done),
      (e) => process.nextTick(done, e))
  } else if (func.length < 3) {
    done()
  }
}

/**
 * @returns {Promise}
 */
Plugin.prototype.loadedSoFar = function () {
  debug('loadedSoFar', this.name)

  if (this.loaded) {
    return Promise.resolve()
  }

  const setup = () => {
    this.server.after((afterErr, callback) => {
      this._error = afterErr
      this.queue.pause()

      if (this._promise) {
        if (afterErr) {
          debug('rejecting promise', this.name, afterErr)
          this._promise.reject(afterErr)
        } else {
          debug('resolving promise', this.name)
          this._promise.resolve()
        }
        this._promise = null
      }

      process.nextTick(callback, afterErr)
    })
    this.queue.resume()
  }

  let res

  if (!this._promise) {
    this._promise = createPromise()
    res = this._promise.promise

    if (!this.server) {
      this.on('start', setup)
    } else {
      setup()
    }
  } else {
    res = Promise.resolve()
  }

  return res
}

/**
 * @callback EnqueueCallback
 * @param {Error|null} enqueueErr
 * @param {Plugin} result
 */

/**
 *
 * @param {Plugin} plugin
 * @param {EnqueueCallback} callback
 */
Plugin.prototype.enqueue = function (plugin, callback) {
  debug('enqueue', this.name, plugin.name)

  this.emit('enqueue', this.server ? this.server.name : null, this.name, Date.now())
  this.queue.push(plugin, callback)
}

/**
 * @callback FinishCallback
 * @param {Error|null} finishErr
 * @returns
 */
/**
 *
 * @param {Error|null} err
 * @param {FinishCallback} callback
 * @returns
 */
Plugin.prototype.finish = function (err, callback) {
  debug('finish', this.name, err)

  const done = () => {
    if (this.loaded) {
      return
    }

    debug('loaded', this.name)
    this.emit('loaded', this.server ? this.server.name : null, this.name, Date.now())
    this.loaded = true

    callback(err)
  }

  if (err) {
    if (this._promise) {
      this._promise.reject(err)
      this._promise = null
    }
    done()
    return
  }

  const check = () => {
    debug('check', this.name, this.queue.length(), this.queue.running(), this._promise)
    if (this.queue.length() === 0 && this.queue.running() === 0) {
      if (this._promise) {
        const wrap = () => {
          debug('wrap')
          queueMicrotask(check)
        }
        this._promise.resolve()
        this._promise.promise.then(wrap, wrap)
        this._promise = null
      } else {
        done()
      }
    } else {
      debug('delayed', this.name)
      // finish when the queue of nested plugins to load is empty
      this.queue.drain = () => {
        debug('drain', this.name)
        this.queue.drain = noop

        // we defer the check, as a safety net for things
        // that might be scheduled in the loading callback
        queueMicrotask(check)
      }
    }
  }

  queueMicrotask(check)

  // we start loading the dependents plugins only once
  // the current level is finished
  this.queue.resume()
}

function noop () {}

module.exports = {
  Plugin
}
