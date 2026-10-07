let Declaration = require('../declaration')

class GridRowAlign extends Declaration {
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
    return 'align-self'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'grid-row-align'
  }
}

GridRowAlign.names = ['grid-row-align']

module.exports = GridRowAlign
