let Declaration = require('../declaration')

class BlockLogical extends Declaration {
  /**
   * Return property name by spec
   */
  normalize(prop) {
    if (prop.includes('-before')) {
      return prop.replace('-before', '-block-start')
    }
    return prop.replace('-after', '-block-end')
  }

  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    if (prop.includes('-start')) {
      return prefix + prop.replace('-block-start', '-before')
    }
    return prefix + prop.replace('-block-end', '-after')
  }
}

BlockLogical.names = [
  'border-block-start',
  'border-block-end',
  'margin-block-start',
  'margin-block-end',
  'padding-block-start',
  'padding-block-end',
  'border-before',
  'border-after',
  'margin-before',
  'margin-after',
  'padding-before',
  'padding-after'
]

module.exports = BlockLogical
