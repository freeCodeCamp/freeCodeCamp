let Declaration = require('../declaration')
let {
  getGridGap,
  inheritGridGap,
  parseGridAreas,
  prefixTrackProp,
  prefixTrackValue,
  warnGridGap,
  warnMissedAreas
} = require('./grid-utils')

function getGridRows(tpl) {
  return tpl
    .trim()
    .slice(1, -1)
    .split(/["']\s*["']?/g)
}

class GridTemplateAreas extends Declaration {
  /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let hasColumns = false
    let hasRows = false
    let parent = decl.parent
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    // remove already prefixed rows
    // to prevent doubling prefixes
    parent.walkDecls(/-ms-grid-rows/, i => i.remove())

    // add empty tracks to rows
    parent.walkDecls(/grid-template-(rows|columns)/, trackDecl => {
      if (trackDecl.prop === 'grid-template-rows') {
        hasRows = true
        let { prop, value } = trackDecl
        trackDecl.cloneBefore({
          prop: prefixTrackProp({ prefix, prop }),
          value: prefixTrackValue({ gap: gap.row, value })
        })
      } else {
        hasColumns = true
      }
    })

    let gridRows = getGridRows(decl.value)

    if (hasColumns && !hasRows && gap.row && gridRows.length > 1) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        raws: {},
        value: prefixTrackValue({
          gap: gap.row,
          value: `repeat(${gridRows.length}, auto)`
        })
      })
    }

    // warnings
    warnGridGap({
      decl,
      gap,
      hasColumns,
      result
    })

    let areas = parseGridAreas({
      gap,
      rows: gridRows
    })

    warnMissedAreas(areas, decl, result)

    return decl
  }
}

GridTemplateAreas.names = ['grid-template-areas']

module.exports = GridTemplateAreas
