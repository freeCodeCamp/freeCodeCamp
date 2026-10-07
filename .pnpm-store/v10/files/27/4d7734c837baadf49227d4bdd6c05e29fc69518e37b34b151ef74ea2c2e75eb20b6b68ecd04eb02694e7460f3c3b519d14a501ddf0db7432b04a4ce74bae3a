module.exports = class OSError extends Error {
  constructor(msg, code, fn = OSError) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'OSError'
  }

  static UNKNOWN_SIGNAL(msg) {
    return new OSError(msg, 'UNKNOWN_SIGNAL', OSError.UNKNOWN_SIGNAL)
  }

  static TITLE_OVERFLOW(msg) {
    return new OSError(msg, 'TITLE_OVERFLOW', OSError.TITLE_OVERFLOW)
  }
}
