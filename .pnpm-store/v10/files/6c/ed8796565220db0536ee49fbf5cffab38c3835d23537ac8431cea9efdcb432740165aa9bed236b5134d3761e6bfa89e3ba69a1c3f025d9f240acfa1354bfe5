let Declaration = require('../declaration')

class GridColumnAlign extends Declaration {
  /**
   * Do not prefix flexbox values
   */
  check(decl) {
    return !decl.value.includes('flex-') && decl.value !== 'baseline'
  }

  /**
   * Change IE property back
   */
  normalize() {
    return 'justify-self'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'grid-column-align'
  }
}

GridColumnAlign.names = ['grid-column-align']

module.exports = GridColumnAlign
