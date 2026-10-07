let Declaration = require('../declaration')

class UserSelect extends Declaration {
  /**
   * Avoid prefixing all in IE
   */
  insert(decl, prefix, prefixes) {
    if (decl.value === 'all' && prefix === '-ms-') {
      return undefined
    } else if (
      decl.value === 'contain' &&
      (prefix === '-moz-' || prefix === '-webkit-')
    ) {
      return undefined
    } else {
      return super.insert(decl, prefix, prefixes)
    }
  }

  /**
   * Change prefixed value for IE
   */
  set(decl, prefix) {
    if (prefix === '-ms-' && decl.value === 'contain') {
      decl.value = 'element'
    }
    return super.set(decl, prefix)
  }
}

UserSelect.names = ['user-select']

module.exports = UserSelect
