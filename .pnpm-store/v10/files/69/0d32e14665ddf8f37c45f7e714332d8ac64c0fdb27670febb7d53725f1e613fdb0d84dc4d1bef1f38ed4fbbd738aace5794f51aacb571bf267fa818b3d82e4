let Declaration = require('../declaration')
let flexSpec = require('./flex-spec')

class FlexWrap extends Declaration {
  /**
   * Don't add prefix for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec !== 2009) {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexWrap.names = ['flex-wrap']

module.exports = FlexWrap
