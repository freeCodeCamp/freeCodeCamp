'use strict'

const metadata = Symbol.for('pino.metadata')
const split = require('split2')
const { Duplex } = require('stream')
const { parentPort, workerData } = require('worker_threads')

function createDeferred () {
  let resolve
  let reject
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  promise.resolve = resolve
  promise.reject = reject
  return promise
}

module.exports = function build (fn, opts = {}) {
  const waitForConfig = opts.expectPinoConfig === true && workerData?.workerData?.pinoWillSendConfig === true
  const parseLines = opts.parse === 'lines'
  const parseLine = typeof opts.parseLine === 'function' ? opts.parseLine : JSON.parse
  const close = opts.close || defaultClose
  const stream = split(function (line) {
    let value

    try {
      value = parseLine(line)
    } catch (error) {
      this.emit('unknown', line, error)
      return
    }

    if (value === null) {
      this.emit('unknown', line, 'Null value ignored')
      return
    }

    if (typeof value !== 'object') {
      value = {
        data: value,
        time: Date.now()
      }
    }

    if (stream[metadata]) {
      stream.lastTime = value.time
      stream.lastLevel = value.level
      stream.lastObj = value
    }

    if (parseLines) {
      return line
    }

    return value
  }, { autoDestroy: true })

  stream._destroy = function (err, cb) {
    const promise = close(err, cb)
    if (promise && typeof promise.then === 'function') {
      promise.then(cb, cb)
    }
  }

  if (opts.expectPinoConfig === true && workerData?.workerData?.pinoWillSendConfig !== true) {
    setImmediate(() => {
      stream.emit('error', new Error('This transport is not compatible with the current version of pino. Please upgrade pino to the latest version.'))
    })
  }

  if (opts.metadata !== false) {
    stream[metadata] = true
    stream.lastTime = 0
    stream.lastLevel = 0
    stream.lastObj = null
  }

  if (waitForConfig) {
    let pinoConfig = {}
    const configReceived = createDeferred()
    parentPort.on('message', function handleMessage (message) {
      if (message.code === 'PINO_CONFIG') {
        pinoConfig = message.config
        configReceived.resolve()
        parentPort.off('message', handleMessage)
      }
    })

    Object.defineProperties(stream, {
      levels: {
        get () { return pinoConfig.levels }
      },
      messageKey: {
        get () { return pinoConfig.messageKey }
      },
      errorKey: {
        get () { return pinoConfig.errorKey }
      }
    })

    return configReceived.then(finish)
  }

  return finish()

  function finish () {
    let res = fn(stream)

    if (res && typeof res.catch === 'function') {
      res.catch((err) => {
        stream.destroy(err)
      })

      // set it to null to not retain a reference to the promise
      res = null
    } else if (opts.enablePipelining && res) {
      return Duplex.from({ writable: stream, readable: res })
    }

    return stream
  }
}

function defaultClose (err, cb) {
  process.nextTick(cb, err)
}
