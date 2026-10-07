let Declaration = require('../declaration')

class OverscrollBehavior extends Declaration {
  /**
   * Return property name by spec
   */
  normalize() {
    return 'overscroll-behavior'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'scroll-chaining'
  }

  /**
   * Change value for IE
   */
  set(decl, prefix) {
    if (decl.value === 'auto') {
      decl.value = 'chained'
    } else if (decl.value === 'none' || decl.value === 'contain') {
      decl.value = 'none'
    }
    return super.set(decl, prefix)
  }
}

OverscrollBehavior.names = ['overscroll-behavior', 'scroll-chaining']

module.exports = OverscrollBehavior
