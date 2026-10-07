let Declaration = require('../declaration')

class TextEmphasisPosition extends Declaration {
  set(decl, prefix) {
    if (prefix === '-webkit-') {
      decl.value = decl.value.replace(/\s*(right|left)\s*/i, '')
    }
    return super.set(decl, prefix)
  }
}

TextEmphasisPosition.names = ['text-emphasis-position']

module.exports = TextEmphasisPosition
