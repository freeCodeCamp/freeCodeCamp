let Selector = require('../selector')

class Placeholder extends Selector {
  /**
   * Add old mozilla to possible prefixes
   */
  possible() {
    return super.possible().concat(['-moz- old', '-ms- old'])
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return '::-webkit-input-placeholder'
    }
    if (prefix === '-ms-') {
      return '::-ms-input-placeholder'
    }
    if (prefix === '-ms- old') {
      return ':-ms-input-placeholder'
    }
    if (prefix === '-moz- old') {
      return ':-moz-placeholder'
    }
    return `::${prefix}placeholder`
  }
}

Placeholder.names = ['::placeholder']

module.exports = Placeholder
