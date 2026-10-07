let Declaration = require('../declaration')
let utils = require('./grid-utils')

class GridRowColumn extends Declaration {
  /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let values = utils.parse(decl)
    let [start, span] = utils.translate(values, 0, 1)

    let hasStartValueSpan = values[0] && values[0].includes('span')

    if (hasStartValueSpan) {
      span = values[0].join('').replace(/\D/g, '')
    }

    ;[
      [decl.prop, start],
      [`${decl.prop}-span`, span]
    ].forEach(([prop, value]) => {
      utils.insertDecl(decl, prop, value)
    })

    return undefined
  }
}

GridRowColumn.names = ['grid-row', 'grid-column']

module.exports = GridRowColumn
