let Selector = require('../selector')

class PlaceholderShown extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-moz-') {
      return ':-moz-placeholder'
    } else if (prefix === '-ms-') {
      return ':-ms-input-placeholder'
    }
    return `:${prefix}placeholder-shown`
  }
}

PlaceholderShown.names = [':placeholder-shown']

module.exports = PlaceholderShown
