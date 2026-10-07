let OldValue = require('../old-value')
let Value = require('../value')

function regexp(name) {
  return new RegExp(`(^|[\\s,(])(${name}($|[\\s),]))`, 'gi')
}

class Intrinsic extends Value {
  add(decl, prefix) {
    if (decl.prop.includes('grid') && prefix !== '-webkit-') {
      return undefined
    }
    return super.add(decl, prefix)
  }

  isStretch() {
    return (
      this.name === 'stretch' ||
      this.name === 'fill' ||
      this.name === 'fill-available'
    )
  }

  old(prefix) {
    let prefixed = prefix + this.name
    if (this.isStretch()) {
      if (prefix === '-moz-') {
        prefixed = '-moz-available'
      } else if (prefix === '-webkit-') {
        prefixed = '-webkit-fill-available'
      }
    }
    return new OldValue(this.name, prefixed, prefixed, regexp(prefixed))
  }

  regexp() {
    if (!this.regexpCache) this.regexpCache = regexp(this.name)
    return this.regexpCache
  }

  replace(string, prefix) {
    if (prefix === '-moz-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-moz-available$3')
    }
    if (prefix === '-webkit-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-webkit-fill-available$3')
    }
    return super.replace(string, prefix)
  }
}

Intrinsic.names = [
  'max-content',
  'min-content',
  'fit-content',
  'fill',
  'fill-available',
  'stretch'
]

module.exports = Intrinsic
