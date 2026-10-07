const b4a = require('b4a')

module.exports = class PassThroughDecoder {
  constructor(encoding) {
    this.encoding = encoding
  }

  get remaining() {
    return 0
  }

  decode(data) {
    return b4a.toString(data, this.encoding)
  }

  flush() {
    return ''
  }
}
