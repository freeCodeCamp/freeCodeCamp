export default stream

import {EventEmitter} from 'events'
import compiler from './compile/html.mjs'
import parser from './parse.mjs'
import postprocess from './postprocess.mjs'
import preprocessor from './preprocess.mjs'

function stream(options) {
  var preprocess = preprocessor()
  var tokenize = parser(options).document().write
  var compile = compiler(options)
  var emitter = new EventEmitter()
  var ended

  emitter.writable = emitter.readable = true
  emitter.write = write
  emitter.end = end
  emitter.pipe = pipe

  return emitter

  // Write a chunk into memory.
  function write(chunk, encoding, callback) {
    if (typeof encoding === 'function') {
      callback = encoding
      encoding = undefined
    }

    if (ended) {
      throw new Error('Did not expect `write` after `end`')
    }

    tokenize(preprocess(chunk || '', encoding))

    if (callback) {
      callback()
    }

    // Signal succesful write.
    return true
  }

  // End the writing.
  // Passes all arguments to a final `write`.
  function end(chunk, encoding, callback) {
    write(chunk, encoding, callback)

    emitter.emit(
      'data',
      compile(postprocess(tokenize(preprocess('', encoding, true))))
    )

    emitter.emit('end')
    ended = true
    return true
  }

  // Pipe the processor into a writable stream.
  // Basically `Stream#pipe`, but inlined and simplified to keep the bundled
  // size down.
  // See: <https://github.com/nodejs/node/blob/43a5170/lib/internal/streams/legacy.js#L13>.
  function pipe(dest, options) {
    emitter.on('data', ondata)
    emitter.on('error', onerror)
    emitter.on('end', cleanup)
    emitter.on('close', cleanup)

    // If the `end` option is not supplied, `dest.end()` will be called when the
    // `end` or `close` events are received.
    if (!dest._isStdio && (!options || options.end !== false)) {
      emitter.on('end', onend)
    }

    dest.on('error', onerror)
    dest.on('close', cleanup)

    dest.emit('pipe', emitter)

    return dest

    // End destination.
    function onend() {
      if (dest.end) {
        dest.end()
      }
    }

    // Handle data.
    function ondata(chunk) {
      if (dest.writable) {
        dest.write(chunk)
      }
    }

    // Clean listeners.
    function cleanup() {
      emitter.removeListener('data', ondata)
      emitter.removeListener('end', onend)
      emitter.removeListener('error', onerror)
      emitter.removeListener('end', cleanup)
      emitter.removeListener('close', cleanup)

      dest.removeListener('error', onerror)
      dest.removeListener('close', cleanup)
    }

    // Close dangling pipes and handle unheard errors.
    function onerror(error) {
      cleanup()

      if (!emitter.listenerCount('error')) {
        throw error // Unhandled stream error in pipe.
      }
    }
  }
}
