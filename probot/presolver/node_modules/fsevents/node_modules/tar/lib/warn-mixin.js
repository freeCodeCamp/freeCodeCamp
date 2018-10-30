'use strict'
module.exports = Base => class extends Base {
  warn (msg, data) {
    if (!this.strict)
      this.emit('warn', msg, data)
    else if (data instanceof Error)
      this.emit('error', data)
    else {
      const er = new Error(msg)
      er.data = data
      this.emit('error', er)
    }
  }
}
