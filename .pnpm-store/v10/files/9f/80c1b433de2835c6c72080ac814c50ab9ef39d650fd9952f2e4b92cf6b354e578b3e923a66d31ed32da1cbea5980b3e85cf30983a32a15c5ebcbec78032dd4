let Declaration = require('../declaration')
let { isPureNumber } = require('../utils')

class GridEnd extends Declaration {
  /**
   * Change repeating syntax for IE
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let clonedDecl = this.clone(decl)

    let startProp = decl.prop.replace(/end$/, 'start')
    let spanProp = prefix + decl.prop.replace(/end$/, 'span')

    if (decl.parent.some(i => i.prop === spanProp)) {
      return undefined
    }

    clonedDecl.prop = spanProp

    if (decl.value.includes('span')) {
      clonedDecl.value = decl.value.replace(/span\s/i, '')
    } else {
      let startDecl
      decl.parent.walkDecls(startProp, d => {
        startDecl = d
      })
      if (startDecl) {
        if (isPureNumber(startDecl.value)) {
          let value = Number(decl.value) - Number(startDecl.value) + ''
          clonedDecl.value = value
        } else {
          return undefined
        }
      } else {
        decl.warn(
          result,
          `Can not prefix ${decl.prop} (${startProp} is not found)`
        )
      }
    }

    decl.cloneBefore(clonedDecl)

    return undefined
  }
}

GridEnd.names = ['grid-row-end', 'grid-column-end']

module.exports = GridEnd
