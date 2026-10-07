let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class AlignSelf extends Declaration {
  check(decl) {
    return (
      decl.parent &&
      !decl.parent.some(i => {
        return i.prop && i.prop.startsWith('grid-')
      })
    )
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-self'
  }

  /**
   * Change property name for 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-item-align'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2012) {
      decl.value = AlignSelf.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

AlignSelf.names = ['align-self', 'flex-item-align']

AlignSelf.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start'
}

module.exports = AlignSelf
