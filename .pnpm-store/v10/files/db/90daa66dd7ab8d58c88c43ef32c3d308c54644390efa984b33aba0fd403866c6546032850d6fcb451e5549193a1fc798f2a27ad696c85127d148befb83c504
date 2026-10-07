let Declaration = require('../declaration')
let Processor = require('../processor')
let {
  autoplaceGridItems,
  getGridGap,
  inheritGridGap,
  prefixTrackProp,
  prefixTrackValue
} = require('./grid-utils')

class GridRowsColumns extends Declaration {
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let { parent, prop, value } = decl
    let isRowProp = prop.includes('rows')
    let isColumnProp = prop.includes('columns')

    let hasGridTemplate = parent.some(
      i => i.prop === 'grid-template' || i.prop === 'grid-template-areas'
    )

    /**
     * Not to prefix rows declaration if grid-template(-areas) is present
     */
    if (hasGridTemplate && isRowProp) {
      return false
    }

    let processor = new Processor({ options: {} })
    let status = processor.gridStatus(parent, result)
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    let gapValue = isRowProp ? gap.row : gap.column

    if ((status === 'no-autoplace' || status === true) && !hasGridTemplate) {
      gapValue = null
    }

    let prefixValue = prefixTrackValue({
      gap: gapValue,
      value
    })

    /**
     * Insert prefixes
     */
    decl.cloneBefore({
      prop: prefixTrackProp({ prefix, prop }),
      value: prefixValue
    })

    let autoflow = parent.nodes.find(i => i.prop === 'grid-auto-flow')
    let autoflowValue = 'row'

    if (autoflow && !processor.disabled(autoflow, result)) {
      autoflowValue = autoflow.value.trim()
    }
    if (status === 'autoplace') {
      /**
       * Show warning if grid-template-rows decl is not found
       */
      let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')

      if (!rowDecl && hasGridTemplate) {
        return undefined
      } else if (!rowDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-rows property'
        )
        return undefined
      }

      /**
       * Show warning if grid-template-columns decl is not found
       */
      let columnDecl = parent.nodes.find(i => {
        return i.prop === 'grid-template-columns'
      })
      if (!columnDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-columns property'
        )
      }

      /**
       * Autoplace grid items
       */
      if (isColumnProp && !hasGridTemplate) {
        autoplaceGridItems(decl, result, gap, autoflowValue)
      }
    }

    return undefined
  }

  /**
   * Change IE property back
   */
  normalize(prop) {
    return prop.replace(/^grid-(rows|columns)/, 'grid-template-$1')
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return prefixTrackProp({ prefix, prop })
    }
    return super.prefixed(prop, prefix)
  }
}

GridRowsColumns.names = [
  'grid-template-rows',
  'grid-template-columns',
  'grid-rows',
  'grid-columns'
]

module.exports = GridRowsColumns
