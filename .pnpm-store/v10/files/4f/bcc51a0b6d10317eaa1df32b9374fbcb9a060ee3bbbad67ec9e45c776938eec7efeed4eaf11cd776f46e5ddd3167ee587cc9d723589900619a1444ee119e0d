let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class FlexBasis extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-basis'
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-preferred-size'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(decl, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012 || spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexBasis.names = ['flex-basis', 'flex-preferred-size']

module.exports = FlexBasis
