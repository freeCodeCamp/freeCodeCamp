const os = require('bare-os')

module.exports = class FileError extends Error {
  constructor(msg, opts = {}) {
    const { code, operation = null, path = null, destination = null, fd = -1 } = opts

    if (operation !== null) msg += describe(operation, opts)

    super(`${code}: ${msg}`)

    this.code = code

    if (operation !== null) this.operation = operation
    if (path !== null) this.path = path
    if (destination !== null) this.destination = destination
    if (fd !== -1) this.fd = fd
  }

  get name() {
    return 'FileError'
  }

  // For Node.js compatibility
  get errno() {
    return os.constants.errnos[this.code]
  }

  // For Node.js compatibility
  get syscall() {
    return this.operation
  }

  // For Node.js compatibility
  get dest() {
    return this.destination
  }
}

function describe(operation, opts) {
  const { path = null, destination = null, fd = -1 } = opts

  let result = `, ${operation}`

  if (path !== null) {
    result += ` ${JSON.stringify(path)}`

    if (destination !== null) {
      result += ` -> ${JSON.stringify(destination)}`
    }
  } else if (fd !== -1) {
    result += ` ${fd}`
  }

  return result
}
