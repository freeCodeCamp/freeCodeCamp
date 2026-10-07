'use strict'

module.exports = buildSafeSonicBoom

const { isMainThread } = require('worker_threads')
const SonicBoom = require('sonic-boom')
const noop = require('./noop')

/**
 * Creates a safe SonicBoom instance
 *
 * @param {object} opts Options for SonicBoom
 *
 * @returns {object} A new SonicBoom stream
 */
function buildSafeSonicBoom (opts) {
  const stream = new SonicBoom(opts)
  stream.on('error', filterBrokenPipe)
  // if we are sync: false, we must flush on exit
  // NODE_V8_COVERAGE must breaks everything
  // https://github.com/nodejs/node/issues/49344
  if (!process.env.NODE_V8_COVERAGE && !opts.sync && isMainThread) {
    setupOnExit(stream)
  }
  return stream

  function filterBrokenPipe (err) {
    if (err.code === 'EPIPE') {
      stream.write = noop
      stream.end = noop
      stream.flushSync = noop
      stream.destroy = noop
      return
    }
    stream.removeListener('error', filterBrokenPipe)
  }
}

function setupOnExit (stream) {
  /* istanbul ignore next */
  if (global.WeakRef && global.WeakMap && global.FinalizationRegistry) {
    // This is leak free, it does not leave event handlers
    const onExit = require('on-exit-leak-free')

    onExit.register(stream, autoEnd)

    stream.on('close', function () {
      onExit.unregister(stream)
    })
  }
}

/* istanbul ignore next */
function autoEnd (stream, eventName) {
  // This check is needed only on some platforms

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
    // We do not have an event loop, so flush synchronously
    stream.flushSync()
  }
}
