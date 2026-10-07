let Declaration = require('../declaration')

class ImageRendering extends Declaration {
  /**
   * Add hack only for crisp-edges
   */
  check(decl) {
    return decl.value === 'pixelated'
  }

  /**
   * Return property name by spec
   */
  normalize() {
    return 'image-rendering'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return '-ms-interpolation-mode'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Warn on old value
   */
  process(node, result) {
    return super.process(node, result)
  }

  /**
   * Change property and value for IE
   */
  set(decl, prefix) {
    if (prefix !== '-ms-') return super.set(decl, prefix)
    decl.prop = '-ms-interpolation-mode'
    decl.value = 'nearest-neighbor'
    return decl
  }
}

ImageRendering.names = ['image-rendering', 'interpolation-mode']

module.exports = ImageRendering
