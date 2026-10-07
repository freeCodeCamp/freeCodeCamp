module.exports = class EventEmitterError extends Error {
  constructor(msg, code, fn = EventEmitterError, opts) {
    super(`${code}: ${msg}`, opts)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'EventEmitterError'
  }

  static OPERATION_ABORTED(cause, msg = 'Operation aborted') {
    return new EventEmitterError(msg, 'OPERATION_ABORTED', EventEmitterError.OPERATION_ABORTED, {
      cause
    })
  }

  static UNHANDLED_ERROR(cause, msg = 'Unhandled error') {
    return new EventEmitterError(msg, 'UNHANDLED_ERROR', EventEmitterError.UNHANDLED_ERROR, {
      cause
    })
  }
}
