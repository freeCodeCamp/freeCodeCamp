'use strict'

const metadata = Symbol.for('pino.metadata')
const split = require('split2')
const { Duplex } = require('readable-stream')

module.exports = function build (fn, opts = {}) {
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

  if (opts.metadata !== false) {
    stream[metadata] = true
    stream.lastTime = 0
    stream.lastLevel = 0
    stream.lastObj = null
  }

  let res = fn(stream)

  if (res && typeof res.catch === 'function') {
    res.catch((err) => {
      stream.destroy(err)
    })

    // set it to null to not retain a reference to the promise
    res = null
  } else if (opts.enablePipelining && res) {
    return Duplex.from({ writable: stream, readable: res, objectMode: true })
  }

  return stream
}

function defaultClose (err, cb) {
  process.nextTick(cb, err)
}
