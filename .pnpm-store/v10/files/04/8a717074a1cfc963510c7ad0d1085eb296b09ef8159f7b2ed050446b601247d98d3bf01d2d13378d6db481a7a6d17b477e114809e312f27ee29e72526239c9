'use strict'

const metadata = Symbol.for('pino.metadata')
const { DEFAULT_LEVELS } = require('./constants')

const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info

function multistream (streamsArray, opts) {
  streamsArray = streamsArray || []
  opts = opts || { dedupe: false }

  const streamLevels = Object.create(DEFAULT_LEVELS)
  streamLevels.silent = Infinity
  if (opts.levels && typeof opts.levels === 'object') {
    Object.keys(opts.levels).forEach(i => {
      streamLevels[i] = opts.levels[i]
    })
  }

  const res = {
    write,
    add,
    remove,
    emit,
    flushSync,
    end,
    minLevel: 0,
    lastId: 0,
    streams: [],
    clone,
    [metadata]: true,
    streamLevels
  }

  if (Array.isArray(streamsArray)) {
    streamsArray.forEach(add, res)
  } else {
    add.call(res, streamsArray)
  }

  // clean this object up
  // or it will stay allocated forever
  // as it is closed on the following closures
  streamsArray = null

  return res

  // we can exit early because the streams are ordered by level
  function write (data) {
    let dest
    const level = this.lastLevel
    const { streams } = this
    // for handling situation when several streams has the same level
    let recordedLevel = 0
    let stream

    // if dedupe set to true we send logs to the stream with the highest level
    // therefore, we have to change sorting order
    for (let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)) {
      dest = streams[i]
      if (dest.level <= level) {
        if (recordedLevel !== 0 && recordedLevel !== dest.level) {
          break
        }
        stream = dest.stream
        if (stream[metadata]) {
          const { lastTime, lastMsg, lastObj, lastLogger } = this
          stream.lastLevel = level
          stream.lastTime = lastTime
          stream.lastMsg = lastMsg
          stream.lastObj = lastObj
          stream.lastLogger = lastLogger
        }
        stream.write(data)
        if (opts.dedupe) {
          recordedLevel = dest.level
        }
      } else if (!opts.dedupe) {
        break
      }
    }
  }

  function emit (...args) {
    for (const { stream } of this.streams) {
      if (typeof stream.emit === 'function') {
        stream.emit(...args)
      }
    }
  }

  function flushSync () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
    }
  }

  function add (dest) {
    if (!dest) {
      return res
    }

    // Check that dest implements either StreamEntry or DestinationStream
    const isStream = typeof dest.write === 'function' || dest.stream
    const stream_ = dest.write ? dest : dest.stream
    // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
    if (!isStream) {
      throw Error('stream object needs to implement either StreamEntry or DestinationStream interface')
    }

    const { streams, streamLevels } = this

    let level
    if (typeof dest.levelVal === 'number') {
      level = dest.levelVal
    } else if (typeof dest.level === 'string') {
      level = streamLevels[dest.level]
    } else if (typeof dest.level === 'number') {
      level = dest.level
    } else {
      level = DEFAULT_INFO_LEVEL
    }

    const dest_ = {
      stream: stream_,
      level,
      levelVal: undefined,
      id: ++res.lastId
    }

    streams.unshift(dest_)
    streams.sort(compareByLevel)

    this.minLevel = streams[0].level

    return res
  }

  function remove (id) {
    const { streams } = this
    const index = streams.findIndex(s => s.id === id)

    if (index >= 0) {
      streams.splice(index, 1)
      streams.sort(compareByLevel)
      this.minLevel = streams.length > 0 ? streams[0].level : -1
    }

    return res
  }

  function end () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
      stream.end()
    }
  }

  function clone (level) {
    const streams = new Array(this.streams.length)

    for (let i = 0; i < streams.length; i++) {
      streams[i] = {
        level,
        stream: this.streams[i].stream
      }
    }

    return {
      write,
      add,
      remove,
      minLevel: level,
      streams,
      clone,
      emit,
      flushSync,
      [metadata]: true
    }
  }
}

function compareByLevel (a, b) {
  return a.level - b.level
}

function initLoopVar (length, dedupe) {
  return dedupe ? length - 1 : 0
}

function adjustLoopVar (i, dedupe) {
  return dedupe ? i - 1 : i + 1
}

function checkLoopVar (i, length, dedupe) {
  return dedupe ? i >= 0 : i < length
}

module.exports = multistream
