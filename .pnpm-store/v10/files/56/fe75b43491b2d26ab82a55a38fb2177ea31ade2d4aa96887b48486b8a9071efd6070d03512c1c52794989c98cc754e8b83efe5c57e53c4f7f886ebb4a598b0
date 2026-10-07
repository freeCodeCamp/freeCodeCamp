let Declaration = require('../declaration')

class InlineLogical extends Declaration {
  /**
   * Return property name by spec
   */
  normalize(prop) {
    return prop.replace(/(margin|padding|border)-(start|end)/, '$1-inline-$2')
  }

  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    return prefix + prop.replace('-inline', '')
  }
}

InlineLogical.names = [
  'border-inline-start',
  'border-inline-end',
  'margin-inline-start',
  'margin-inline-end',
  'padding-inline-start',
  'padding-inline-end',
  'border-start',
  'border-end',
  'margin-start',
  'margin-end',
  'padding-start',
  'padding-end'
]

module.exports = InlineLogical
