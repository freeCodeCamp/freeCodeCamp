let OldValue = require('../old-value')
let Value = require('../value')
let flexSpec = require('./flex-spec')

class DisplayFlex extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-flex') {
      this.name = 'flex'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }

  /**
   * Change value for old specs
   */
  old(prefix) {
    let prefixed = this.prefixed(prefix)
    if (!prefixed) return undefined
    return new OldValue(this.name, prefixed)
  }

  /**
   * Return value by spec
   */
  prefixed(prefix) {
    let spec, value
    ;[spec, prefix] = flexSpec(prefix)

    if (spec === 2009) {
      if (this.name === 'flex') {
        value = 'box'
      } else {
        value = 'inline-box'
      }
    } else if (spec === 2012) {
      if (this.name === 'flex') {
        value = 'flexbox'
      } else {
        value = 'inline-flexbox'
      }
    } else if (spec === 'final') {
      value = this.name
    }

    return prefix + value
  }

  /**
   * Add prefix to value depend on flebox spec version
   */
  replace(string, prefix) {
    return this.prefixed(prefix)
  }
}

DisplayFlex.names = ['display-flex', 'inline-flex']

module.exports = DisplayFlex
