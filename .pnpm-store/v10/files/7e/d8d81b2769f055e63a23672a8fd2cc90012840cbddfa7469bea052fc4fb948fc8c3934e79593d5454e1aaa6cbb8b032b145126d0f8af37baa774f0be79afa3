let list = require('postcss').list

let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class Flex extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex'
  }

  /**
   * Change property name for 2009 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-flex'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009) {
      decl.value = list.space(decl.value)[0]
      decl.value = Flex.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 2012) {
      let components = list.space(decl.value)
      if (components.length === 3 && components[2] === '0') {
        decl.value = components.slice(0, 2).concat('0px').join(' ')
      }
    }
    return super.set(decl, prefix)
  }
}

Flex.names = ['flex', 'box-flex']

Flex.oldValues = {
  auto: '1',
  none: '0'
}

module.exports = Flex
