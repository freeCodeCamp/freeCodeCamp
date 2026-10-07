let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class FlexFlow extends Declaration {
  /**
   * Use two properties for 2009 spec
   */
  insert(decl, prefix, prefixes) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec !== 2009) {
      return super.insert(decl, prefix, prefixes)
    }
    let values = decl.value
      .split(/\s+/)
      .filter(i => i !== 'wrap' && i !== 'nowrap' && 'wrap-reverse')
    if (values.length === 0) {
      return undefined
    }

    let already = decl.parent.some(
      i =>
        i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction'
    )
    if (already) {
      return undefined
    }

    let value = values[0]
    let orient = value.includes('row') ? 'horizontal' : 'vertical'
    let dir = value.includes('reverse') ? 'reverse' : 'normal'

    let cloned = this.clone(decl)
    cloned.prop = prefix + 'box-orient'
    cloned.value = orient
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    decl.parent.insertBefore(decl, cloned)

    cloned = this.clone(decl)
    cloned.prop = prefix + 'box-direction'
    cloned.value = dir
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }
}

FlexFlow.names = ['flex-flow', 'box-direction', 'box-orient']

module.exports = FlexFlow
