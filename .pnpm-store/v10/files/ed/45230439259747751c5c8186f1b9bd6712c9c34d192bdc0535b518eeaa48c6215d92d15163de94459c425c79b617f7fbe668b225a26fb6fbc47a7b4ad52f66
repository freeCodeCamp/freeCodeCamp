module.exports = class URLError extends Error {
  constructor(msg, fn = URLError, code = fn.name) {
    super(`${code}: ${msg}`)

    this.code = code

    if (Error.captureStackTrace) Error.captureStackTrace(this, fn)
  }

  get name() {
    return 'URLError'
  }

  static INVALID_URL(msg, input) {
    const err = new URLError(msg, URLError.INVALID_URL)

    err.input = input

    return err
  }

  static INVALID_URL_SCHEME(msg = 'Invalid URL') {
    return new URLError(msg, URLError.INVALID_URL_SCHEME)
  }

  static INVALID_FILE_URL_HOST(msg = 'Invalid file: URL host') {
    return new URLError(msg, URLError.INVALID_FILE_URL_HOST)
  }

  static INVALID_FILE_URL_PATH(msg = 'Invalid file: URL path') {
    return new URLError(msg, URLError.INVALID_FILE_URL_PATH)
  }
}
