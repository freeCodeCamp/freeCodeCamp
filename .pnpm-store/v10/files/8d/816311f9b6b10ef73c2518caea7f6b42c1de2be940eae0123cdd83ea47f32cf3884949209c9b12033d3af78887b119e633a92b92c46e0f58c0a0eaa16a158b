/* replacement start */

const process = require('process/')

/* replacement end */
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).

;('use strict')
const { ArrayIsArray, Promise, SymbolAsyncIterator } = require('../../ours/primordials')
const eos = require('./end-of-stream')
const { once } = require('../../ours/util')
const destroyImpl = require('./destroy')
const Duplex = require('./duplex')
const {
  aggregateTwoErrors,
  codes: {
    ERR_INVALID_ARG_TYPE,
    ERR_INVALID_RETURN_VALUE,
    ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED,
    ERR_STREAM_PREMATURE_CLOSE
  },
  AbortError
} = require('../../ours/errors')
const { validateFunction, validateAbortSignal } = require('../validators')
const {
  isIterable,
  isReadable,
  isReadableNodeStream,
  isNodeStream,
  isTransformStream,
  isWebStream,
  isReadableStream,
  isReadableEnded
} = require('./utils')
const AbortController = globalThis.AbortController || require('abort-controller').AbortController
let PassThrough
let Readable
function destroyer(stream, reading, writing) {
  let finished = false
  stream.on('close', () => {
    finished = true
  })
  const cleanup = eos(
    stream,
    {
      readable: reading,
      writable: writing
    },
    (err) => {
      finished = !err
    }
  )
  return {
    destroy: (err) => {
      if (finished) return
      finished = true
      destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED('pipe'))
    },
    cleanup
  }
}
function popCallback(streams) {
  // Streams should never be an empty array. It should always contain at least
  // a single stream. Therefore optimize for the average case instead of
  // checking for length === 0 as well.
  validateFunction(streams[streams.length - 1], 'streams[stream.length - 1]')
  return streams.pop()
}
function makeAsyncIterable(val) {
  if (isIterable(val)) {
    return val
  } else if (isReadableNodeStream(val)) {
    // Legacy streams are not Iterable.
    return fromReadable(val)
  }
  throw new ERR_INVALID_ARG_TYPE('val', ['Readable', 'Iterable', 'AsyncIterable'], val)
}
async function* fromReadable(val) {
  if (!Readable) {
    Readable = require('./readable')
  }
  yield* Readable.prototype[SymbolAsyncIterator].call(val)
}
async function pumpToNode(iterable, writable, finish, { end }) {
  let error
  let onresolve = null
  const resume = (err) => {
    if (err) {
      error = err
    }
    if (onresolve) {
      const callback = onresolve
      onresolve = null
      callback()
    }
  }
  const wait = () =>
    new Promise((resolve, reject) => {
      if (error) {
        reject(error)
      } else {
        onresolve = () => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        }
      }
    })
  writable.on('drain', resume)
  const cleanup = eos(
    writable,
    {
      readable: false
    },
    resume
  )
  try {
    if (writable.writableNeedDrain) {
      await wait()
    }
    for await (const chunk of iterable) {
      if (!writable.write(chunk)) {
        await wait()
      }
    }
    if (end) {
      writable.end()
    }
    await wait()
    finish()
  } catch (err) {
    finish(error !== err ? aggregateTwoErrors(error, err) : err)
  } finally {
    cleanup()
    writable.off('drain', resume)
  }
}
async function pumpToWeb(readable, writable, finish, { end }) {
  if (isTransformStream(writable)) {
    writable = writable.writable
  }
  // https://streams.spec.whatwg.org/#example-manual-write-with-backpressure
  const writer = writable.getWriter()
  try {
    for await (const chunk of readable) {
      await writer.ready
      writer.write(chunk).catch(() => {})
    }
    await writer.ready
    if (end) {
      await writer.close()
    }
    finish()
  } catch (err) {
    try {
      await writer.abort(err)
      finish(err)
    } catch (err) {
      finish(err)
    }
  }
}
function pipeline(...streams) {
  return pipelineImpl(streams, once(popCallback(streams)))
}
function pipelineImpl(streams, callback, opts) {
  if (streams.length === 1 && ArrayIsArray(streams[0])) {
    streams = streams[0]
  }
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams')
  }
  const ac = new AbortController()
  const signal = ac.signal
  const outerSignal = opts === null || opts === undefined ? undefined : opts.signal

  // Need to cleanup event listeners if last stream is readable
  // https://github.com/nodejs/node/issues/35452
  const lastStreamCleanup = []
  validateAbortSignal(outerSignal, 'options.signal')
  function abort() {
    finishImpl(new AbortError())
  }
  outerSignal === null || outerSignal === undefined ? undefined : outerSignal.addEventListener('abort', abort)
  let error
  let value
  const destroys = []
  let finishCount = 0
  function finish(err) {
    finishImpl(err, --finishCount === 0)
  }
  function finishImpl(err, final) {
    if (err && (!error || error.code === 'ERR_STREAM_PREMATURE_CLOSE')) {
      error = err
    }
    if (!error && !final) {
      return
    }
    while (destroys.length) {
      destroys.shift()(error)
    }
    outerSignal === null || outerSignal === undefined ? undefined : outerSignal.removeEventListener('abort', abort)
    ac.abort()
    if (final) {
      if (!error) {
        lastStreamCleanup.forEach((fn) => fn())
      }
      process.nextTick(callback, error, value)
    }
  }
  let ret
  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i]
    const reading = i < streams.length - 1
    const writing = i > 0
    const end = reading || (opts === null || opts === undefined ? undefined : opts.end) !== false
    const isLastStream = i === streams.length - 1
    if (isNodeStream(stream)) {
      if (end) {
        const { destroy, cleanup } = destroyer(stream, reading, writing)
        destroys.push(destroy)
        if (isReadable(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup)
        }
      }

      // Catch stream errors that occur after pipe/pump has completed.
      function onError(err) {
        if (err && err.name !== 'AbortError' && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
          finish(err)
        }
      }
      stream.on('error', onError)
      if (isReadable(stream) && isLastStream) {
        lastStreamCleanup.push(() => {
          stream.removeListener('error', onError)
        })
      }
    }
    if (i === 0) {
      if (typeof stream === 'function') {
        ret = stream({
          signal
        })
        if (!isIterable(ret)) {
          throw new ERR_INVALID_RETURN_VALUE('Iterable, AsyncIterable or Stream', 'source', ret)
        }
      } else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream(stream)) {
        ret = stream
      } else {
        ret = Duplex.from(stream)
      }
    } else if (typeof stream === 'function') {
      if (isTransformStream(ret)) {
        var _ret
        ret = makeAsyncIterable((_ret = ret) === null || _ret === undefined ? undefined : _ret.readable)
      } else {
        ret = makeAsyncIterable(ret)
      }
      ret = stream(ret, {
        signal
      })
      if (reading) {
        if (!isIterable(ret, true)) {
          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable', `transform[${i - 1}]`, ret)
        }
      } else {
        var _ret2
        if (!PassThrough) {
          PassThrough = require('./passthrough')
        }

        // If the last argument to pipeline is not a stream
        // we must create a proxy stream so that pipeline(...)
        // always returns a stream which can be further
        // composed through `.pipe(stream)`.

        const pt = new PassThrough({
          objectMode: true
        })

        // Handle Promises/A+ spec, `then` could be a getter that throws on
        // second use.
        const then = (_ret2 = ret) === null || _ret2 === undefined ? undefined : _ret2.then
        if (typeof then === 'function') {
          finishCount++
          then.call(
            ret,
            (val) => {
              value = val
              if (val != null) {
                pt.write(val)
              }
              if (end) {
                pt.end()
              }
              process.nextTick(finish)
            },
            (err) => {
              pt.destroy(err)
              process.nextTick(finish, err)
            }
          )
        } else if (isIterable(ret, true)) {
          finishCount++
          pumpToNode(ret, pt, finish, {
            end
          })
        } else if (isReadableStream(ret) || isTransformStream(ret)) {
          const toRead = ret.readable || ret
          finishCount++
          pumpToNode(toRead, pt, finish, {
            end
          })
        } else {
          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable or Promise', 'destination', ret)
        }
        ret = pt
        const { destroy, cleanup } = destroyer(ret, false, true)
        destroys.push(destroy)
        if (isLastStream) {
          lastStreamCleanup.push(cleanup)
        }
      }
    } else if (isNodeStream(stream)) {
      if (isReadableNodeStream(ret)) {
        finishCount += 2
        const cleanup = pipe(ret, stream, finish, {
          end
        })
        if (isReadable(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup)
        }
      } else if (isTransformStream(ret) || isReadableStream(ret)) {
        const toRead = ret.readable || ret
        finishCount++
        pumpToNode(toRead, stream, finish, {
          end
        })
      } else if (isIterable(ret)) {
        finishCount++
        pumpToNode(ret, stream, finish, {
          end
        })
      } else {
        throw new ERR_INVALID_ARG_TYPE(
          'val',
          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
          ret
        )
      }
      ret = stream
    } else if (isWebStream(stream)) {
      if (isReadableNodeStream(ret)) {
        finishCount++
        pumpToWeb(makeAsyncIterable(ret), stream, finish, {
          end
        })
      } else if (isReadableStream(ret) || isIterable(ret)) {
        finishCount++
        pumpToWeb(ret, stream, finish, {
          end
        })
      } else if (isTransformStream(ret)) {
        finishCount++
        pumpToWeb(ret.readable, stream, finish, {
          end
        })
      } else {
        throw new ERR_INVALID_ARG_TYPE(
          'val',
          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
          ret
        )
      }
      ret = stream
    } else {
      ret = Duplex.from(stream)
    }
  }
  if (
    (signal !== null && signal !== undefined && signal.aborted) ||
    (outerSignal !== null && outerSignal !== undefined && outerSignal.aborted)
  ) {
    process.nextTick(abort)
  }
  return ret
}
function pipe(src, dst, finish, { end }) {
  let ended = false
  dst.on('close', () => {
    if (!ended) {
      // Finish if the destination closes before the source has completed.
      finish(new ERR_STREAM_PREMATURE_CLOSE())
    }
  })
  src.pipe(dst, {
    end: false
  }) // If end is true we already will have a listener to end dst.

  if (end) {
    // Compat. Before node v10.12.0 stdio used to throw an error so
    // pipe() did/does not end() stdio destinations.
    // Now they allow it but "secretly" don't close the underlying fd.

    function endFn() {
      ended = true
      dst.end()
    }
    if (isReadableEnded(src)) {
      // End the destination if the source has already ended.
      process.nextTick(endFn)
    } else {
      src.once('end', endFn)
    }
  } else {
    finish()
  }
  eos(
    src,
    {
      readable: true,
      writable: false
    },
    (err) => {
      const rState = src._readableState
      if (
        err &&
        err.code === 'ERR_STREAM_PREMATURE_CLOSE' &&
        rState &&
        rState.ended &&
        !rState.errored &&
        !rState.errorEmitted
      ) {
        // Some readable streams will emit 'close' before 'end'. However, since
        // this is on the readable side 'end' should still be emitted if the
        // stream has been ended and no error emitted. This should be allowed in
        // favor of backwards compatibility. Since the stream is piped to a
        // destination this should not result in any observable difference.
        // We don't need to check if this is a writable premature close since
        // eos will only fail with premature close on the reading side for
        // duplex streams.
        src.once('end', finish).once('error', finish)
      } else {
        finish(err)
      }
    }
  )
  return eos(
    dst,
    {
      readable: false,
      writable: true
    },
    finish
  )
}
module.exports = {
  pipelineImpl,
  pipeline
}
