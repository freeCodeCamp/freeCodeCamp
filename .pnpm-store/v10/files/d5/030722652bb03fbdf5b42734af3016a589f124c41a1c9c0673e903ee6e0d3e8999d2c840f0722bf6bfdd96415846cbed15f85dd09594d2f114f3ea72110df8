let Declaration = require('../declaration')
let {
  getGridGap,
  inheritGridGap,
  parseTemplate,
  warnGridGap,
  warnMissedAreas
} = require('./grid-utils')

class GridTemplate extends Declaration {
  /**
   * Translate grid-template to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    if (decl.parent.some(i => i.prop === '-ms-grid-rows')) {
      return undefined
    }

    let gap = getGridGap(decl)

    /**
     * we must insert inherited gap values in some cases:
     * if we are inside media query && if we have no grid-gap value
     */
    let inheritedGap = inheritGridGap(decl, gap)

    let { areas, columns, rows } = parseTemplate({
      decl,
      gap: inheritedGap || gap
    })

    let hasAreas = Object.keys(areas).length > 0
    let hasRows = Boolean(rows)
    let hasColumns = Boolean(columns)

    warnGridGap({
      decl,
      gap,
      hasColumns,
      result
    })

    warnMissedAreas(areas, decl, result)

    if ((hasRows && hasColumns) || hasAreas) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        raws: {},
        value: rows
      })
    }

    if (hasColumns) {
      decl.cloneBefore({
        prop: '-ms-grid-columns',
        raws: {},
        value: columns
      })
    }

    return decl
  }
}

GridTemplate.names = ['grid-template']

module.exports = GridTemplate
