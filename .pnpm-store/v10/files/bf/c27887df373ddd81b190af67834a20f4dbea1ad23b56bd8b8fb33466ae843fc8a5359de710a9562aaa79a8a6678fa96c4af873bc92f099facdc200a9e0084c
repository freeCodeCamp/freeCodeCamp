let OldValue = require('../old-value')
let Value = require('../value')

class Pixelated extends Value {
  /**
   * Different name for WebKit and Firefox
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      return new OldValue(this.name, '-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return new OldValue(this.name, '-moz-crisp-edges')
    }
    return super.old(prefix)
  }

  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    if (prefix === '-webkit-') {
      return string.replace(this.regexp(), '$1-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return string.replace(this.regexp(), '$1-moz-crisp-edges')
    }
    return super.replace(string, prefix)
  }
}

Pixelated.names = ['pixelated']

module.exports = Pixelated
