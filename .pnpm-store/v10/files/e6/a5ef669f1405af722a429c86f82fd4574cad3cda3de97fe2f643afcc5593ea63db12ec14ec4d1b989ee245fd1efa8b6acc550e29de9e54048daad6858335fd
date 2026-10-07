let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class Order extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'order'
  }

  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-ordinal-group'
    }
    if (spec === 2012) {
      return prefix + 'flex-order'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Fix value for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 && /\d/.test(decl.value)) {
      decl.value = (parseInt(decl.value) + 1).toString()
      return super.set(decl, prefix)
    }
    return super.set(decl, prefix)
  }
}

Order.names = ['order', 'flex-order', 'box-ordinal-group']

module.exports = Order
