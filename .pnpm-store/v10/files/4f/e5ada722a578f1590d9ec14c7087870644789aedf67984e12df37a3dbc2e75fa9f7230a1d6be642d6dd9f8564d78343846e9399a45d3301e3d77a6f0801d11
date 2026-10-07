'use strict'

const { Symbol, SymbolAsyncIterator, SymbolIterator, SymbolFor } = require('../../ours/primordials')
const kDestroyed = Symbol('kDestroyed')
const kIsErrored = Symbol('kIsErrored')
const kIsReadable = Symbol('kIsReadable')
const kIsDisturbed = Symbol('kIsDisturbed')
const kIsClosedPromise = SymbolFor('nodejs.webstream.isClosedPromise')
const kControllerErrorFunction = SymbolFor('nodejs.webstream.controllerErrorFunction')
function isReadableNodeStream(obj, strict = false) {
  var _obj$_readableState
  return !!(
    (
      obj &&
      typeof obj.pipe === 'function' &&
      typeof obj.on === 'function' &&
      (!strict || (typeof obj.pause === 'function' && typeof obj.resume === 'function')) &&
      (!obj._writableState ||
        ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === undefined
          ? undefined
          : _obj$_readableState.readable) !== false) &&
      // Duplex
      (!obj._writableState || obj._readableState)
    ) // Writable has .pipe.
  )
}

function isWritableNodeStream(obj) {
  var _obj$_writableState
  return !!(
    (
      obj &&
      typeof obj.write === 'function' &&
      typeof obj.on === 'function' &&
      (!obj._readableState ||
        ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === undefined
          ? undefined
          : _obj$_writableState.writable) !== false)
    ) // Duplex
  )
}

function isDuplexNodeStream(obj) {
  return !!(
    obj &&
    typeof obj.pipe === 'function' &&
    obj._readableState &&
    typeof obj.on === 'function' &&
    typeof obj.write === 'function'
  )
}
function isNodeStream(obj) {
  return (
    obj &&
    (obj._readableState ||
      obj._writableState ||
      (typeof obj.write === 'function' && typeof obj.on === 'function') ||
      (typeof obj.pipe === 'function' && typeof obj.on === 'function'))
  )
}
function isReadableStream(obj) {
  return !!(
    obj &&
    !isNodeStream(obj) &&
    typeof obj.pipeThrough === 'function' &&
    typeof obj.getReader === 'function' &&
    typeof obj.cancel === 'function'
  )
}
function isWritableStream(obj) {
  return !!(obj && !isNodeStream(obj) && typeof obj.getWriter === 'function' && typeof obj.abort === 'function')
}
function isTransformStream(obj) {
  return !!(obj && !isNodeStream(obj) && typeof obj.readable === 'object' && typeof obj.writable === 'object')
}
function isWebStream(obj) {
  return isReadableStream(obj) || isWritableStream(obj) || isTransformStream(obj)
}
function isIterable(obj, isAsync) {
  if (obj == null) return false
  if (isAsync === true) return typeof obj[SymbolAsyncIterator] === 'function'
  if (isAsync === false) return typeof obj[SymbolIterator] === 'function'
  return typeof obj[SymbolAsyncIterator] === 'function' || typeof obj[SymbolIterator] === 'function'
}
function isDestroyed(stream) {
  if (!isNodeStream(stream)) return null
  const wState = stream._writableState
  const rState = stream._readableState
  const state = wState || rState
  return !!(stream.destroyed || stream[kDestroyed] || (state !== null && state !== undefined && state.destroyed))
}

// Have been end():d.
function isWritableEnded(stream) {
  if (!isWritableNodeStream(stream)) return null
  if (stream.writableEnded === true) return true
  const wState = stream._writableState
  if (wState !== null && wState !== undefined && wState.errored) return false
  if (typeof (wState === null || wState === undefined ? undefined : wState.ended) !== 'boolean') return null
  return wState.ended
}

// Have emitted 'finish'.
function isWritableFinished(stream, strict) {
  if (!isWritableNodeStream(stream)) return null
  if (stream.writableFinished === true) return true
  const wState = stream._writableState
  if (wState !== null && wState !== undefined && wState.errored) return false
  if (typeof (wState === null || wState === undefined ? undefined : wState.finished) !== 'boolean') return null
  return !!(wState.finished || (strict === false && wState.ended === true && wState.length === 0))
}

// Have been push(null):d.
function isReadableEnded(stream) {
  if (!isReadableNodeStream(stream)) return null
  if (stream.readableEnded === true) return true
  const rState = stream._readableState
  if (!rState || rState.errored) return false
  if (typeof (rState === null || rState === undefined ? undefined : rState.ended) !== 'boolean') return null
  return rState.ended
}

// Have emitted 'end'.
function isReadableFinished(stream, strict) {
  if (!isReadableNodeStream(stream)) return null
  const rState = stream._readableState
  if (rState !== null && rState !== undefined && rState.errored) return false
  if (typeof (rState === null || rState === undefined ? undefined : rState.endEmitted) !== 'boolean') return null
  return !!(rState.endEmitted || (strict === false && rState.ended === true && rState.length === 0))
}
function isReadable(stream) {
  if (stream && stream[kIsReadable] != null) return stream[kIsReadable]
  if (typeof (stream === null || stream === undefined ? undefined : stream.readable) !== 'boolean') return null
  if (isDestroyed(stream)) return false
  return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream)
}
function isWritable(stream) {
  if (typeof (stream === null || stream === undefined ? undefined : stream.writable) !== 'boolean') return null
  if (isDestroyed(stream)) return false
  return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream)
}
function isFinished(stream, opts) {
  if (!isNodeStream(stream)) {
    return null
  }
  if (isDestroyed(stream)) {
    return true
  }
  if ((opts === null || opts === undefined ? undefined : opts.readable) !== false && isReadable(stream)) {
    return false
  }
  if ((opts === null || opts === undefined ? undefined : opts.writable) !== false && isWritable(stream)) {
    return false
  }
  return true
}
function isWritableErrored(stream) {
  var _stream$_writableStat, _stream$_writableStat2
  if (!isNodeStream(stream)) {
    return null
  }
  if (stream.writableErrored) {
    return stream.writableErrored
  }
  return (_stream$_writableStat =
    (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === undefined
      ? undefined
      : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== undefined
    ? _stream$_writableStat
    : null
}
function isReadableErrored(stream) {
  var _stream$_readableStat, _stream$_readableStat2
  if (!isNodeStream(stream)) {
    return null
  }
  if (stream.readableErrored) {
    return stream.readableErrored
  }
  return (_stream$_readableStat =
    (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === undefined
      ? undefined
      : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== undefined
    ? _stream$_readableStat
    : null
}
function isClosed(stream) {
  if (!isNodeStream(stream)) {
    return null
  }
  if (typeof stream.closed === 'boolean') {
    return stream.closed
  }
  const wState = stream._writableState
  const rState = stream._readableState
  if (
    typeof (wState === null || wState === undefined ? undefined : wState.closed) === 'boolean' ||
    typeof (rState === null || rState === undefined ? undefined : rState.closed) === 'boolean'
  ) {
    return (
      (wState === null || wState === undefined ? undefined : wState.closed) ||
      (rState === null || rState === undefined ? undefined : rState.closed)
    )
  }
  if (typeof stream._closed === 'boolean' && isOutgoingMessage(stream)) {
    return stream._closed
  }
  return null
}
function isOutgoingMessage(stream) {
  return (
    typeof stream._closed === 'boolean' &&
    typeof stream._defaultKeepAlive === 'boolean' &&
    typeof stream._removedConnection === 'boolean' &&
    typeof stream._removedContLen === 'boolean'
  )
}
function isServerResponse(stream) {
  return typeof stream._sent100 === 'boolean' && isOutgoingMessage(stream)
}
function isServerRequest(stream) {
  var _stream$req
  return (
    typeof stream._consuming === 'boolean' &&
    typeof stream._dumped === 'boolean' &&
    ((_stream$req = stream.req) === null || _stream$req === undefined ? undefined : _stream$req.upgradeOrConnect) ===
      undefined
  )
}
function willEmitClose(stream) {
  if (!isNodeStream(stream)) return null
  const wState = stream._writableState
  const rState = stream._readableState
  const state = wState || rState
  return (
    (!state && isServerResponse(stream)) || !!(state && state.autoDestroy && state.emitClose && state.closed === false)
  )
}
function isDisturbed(stream) {
  var _stream$kIsDisturbed
  return !!(
    stream &&
    ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== undefined
      ? _stream$kIsDisturbed
      : stream.readableDidRead || stream.readableAborted)
  )
}
function isErrored(stream) {
  var _ref,
    _ref2,
    _ref3,
    _ref4,
    _ref5,
    _stream$kIsErrored,
    _stream$_readableStat3,
    _stream$_writableStat3,
    _stream$_readableStat4,
    _stream$_writableStat4
  return !!(
    stream &&
    ((_ref =
      (_ref2 =
        (_ref3 =
          (_ref4 =
            (_ref5 =
              (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== undefined
                ? _stream$kIsErrored
                : stream.readableErrored) !== null && _ref5 !== undefined
              ? _ref5
              : stream.writableErrored) !== null && _ref4 !== undefined
            ? _ref4
            : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === undefined
            ? undefined
            : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== undefined
          ? _ref3
          : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === undefined
          ? undefined
          : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== undefined
        ? _ref2
        : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === undefined
        ? undefined
        : _stream$_readableStat4.errored) !== null && _ref !== undefined
      ? _ref
      : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === undefined
      ? undefined
      : _stream$_writableStat4.errored)
  )
}
module.exports = {
  kDestroyed,
  isDisturbed,
  kIsDisturbed,
  isErrored,
  kIsErrored,
  isReadable,
  kIsReadable,
  kIsClosedPromise,
  kControllerErrorFunction,
  isClosed,
  isDestroyed,
  isDuplexNodeStream,
  isFinished,
  isIterable,
  isReadableNodeStream,
  isReadableStream,
  isReadableEnded,
  isReadableFinished,
  isReadableErrored,
  isNodeStream,
  isWebStream,
  isWritable,
  isWritableNodeStream,
  isWritableStream,
  isWritableEnded,
  isWritableFinished,
  isWritableErrored,
  isServerRequest,
  isServerResponse,
  willEmitClose,
  isTransformStream
}
