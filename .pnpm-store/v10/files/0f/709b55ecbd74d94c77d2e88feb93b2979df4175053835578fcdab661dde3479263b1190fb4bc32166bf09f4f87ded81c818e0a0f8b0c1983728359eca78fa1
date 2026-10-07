let Declaration = require('../declaration')

class GridStart extends Declaration {
  /**
   * Do not add prefix for unsupported value in IE
   */
  check(decl) {
    let value = decl.value
    return !value.includes('/') && !value.includes('span')
  }

  /**
   * Return a final spec property
   */
  normalize(prop) {
    return prop.replace('-start', '')
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    let result = super.prefixed(prop, prefix)
    if (prefix === '-ms-') {
      result = result.replace('-start', '')
    }
    return result
  }
}

GridStart.names = ['grid-row-start', 'grid-column-start']

module.exports = GridStart
