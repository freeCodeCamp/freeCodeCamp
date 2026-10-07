let Declaration = require('../declaration')

class BreakProps extends Declaration {
  /**
   * Don’t prefix some values
   */
  insert(decl, prefix, prefixes) {
    if (decl.prop !== 'break-inside') {
      return super.insert(decl, prefix, prefixes)
    }
    if (/region/i.test(decl.value) || /page/i.test(decl.value)) {
      return undefined
    }
    return super.insert(decl, prefix, prefixes)
  }

  /**
   * Return property name by final spec
   */
  normalize(prop) {
    if (prop.includes('inside')) {
      return 'break-inside'
    }
    if (prop.includes('before')) {
      return 'break-before'
    }
    return 'break-after'
  }

  /**
   * Change name for -webkit- and -moz- prefix
   */
  prefixed(prop, prefix) {
    return `${prefix}column-${prop}`
  }

  /**
   * Change prefixed value for avoid-column and avoid-page
   */
  set(decl, prefix) {
    if (
      (decl.prop === 'break-inside' && decl.value === 'avoid-column') ||
      decl.value === 'avoid-page'
    ) {
      decl.value = 'avoid'
    }
    return super.set(decl, prefix)
  }
}

BreakProps.names = [
  'break-inside',
  'page-break-inside',
  'column-break-inside',
  'break-before',
  'page-break-before',
  'column-break-before',
  'break-after',
  'page-break-after',
  'column-break-after'
]

module.exports = BreakProps
