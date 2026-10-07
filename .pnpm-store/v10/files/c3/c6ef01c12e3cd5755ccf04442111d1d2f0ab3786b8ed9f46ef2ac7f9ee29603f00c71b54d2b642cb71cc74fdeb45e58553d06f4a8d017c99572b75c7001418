let parser = require('postcss-value-parser')
let list = require('postcss').list

let uniq = require('../utils').uniq
let escapeRegexp = require('../utils').escapeRegexp
let splitSelector = require('../utils').splitSelector

function convert(value) {
  if (
    value &&
    value.length === 2 &&
    value[0] === 'span' &&
    parseInt(value[1], 10) > 0
  ) {
    return [false, parseInt(value[1], 10)]
  }

  if (value && value.length === 1 && parseInt(value[0], 10) > 0) {
    return [parseInt(value[0], 10), false]
  }

  return [false, false]
}

exports.translate = translate

function translate(values, startIndex, endIndex) {
  let startValue = values[startIndex]
  let endValue = values[endIndex]

  if (!startValue) {
    return [false, false]
  }

  let [start, spanStart] = convert(startValue)
  let [end, spanEnd] = convert(endValue)

  if (start && !endValue) {
    return [start, false]
  }

  if (spanStart && end) {
    return [end - spanStart, spanStart]
  }

  if (start && spanEnd) {
    return [start, spanEnd]
  }

  if (start && end) {
    return [start, end - start]
  }

  return [false, false]
}

exports.parse = parse

function parse(decl) {
  let node = parser(decl.value)

  let values = []
  let current = 0
  values[current] = []

  for (let i of node.nodes) {
    if (i.type === 'div') {
      current += 1
      values[current] = []
    } else if (i.type === 'word') {
      values[current].push(i.value)
    }
  }

  return values
}

exports.insertDecl = insertDecl

function insertDecl(decl, prop, value) {
  if (value && !decl.parent.some(i => i.prop === `-ms-${prop}`)) {
    decl.cloneBefore({
      prop: `-ms-${prop}`,
      value: value.toString()
    })
  }
}

// Track transforms

exports.prefixTrackProp = prefixTrackProp

function prefixTrackProp({ prefix, prop }) {
  return prefix + prop.replace('template-', '')
}

function transformRepeat({ nodes }, { gap }) {
  let { count, size } = nodes.reduce(
    (result, node) => {
      if (node.type === 'div' && node.value === ',') {
        result.key = 'size'
      } else {
        result[result.key].push(parser.stringify(node))
      }
      return result
    },
    {
      count: [],
      key: 'count',
      size: []
    }
  )

  // insert gap values
  if (gap) {
    size = size.filter(i => i.trim())
    let val = []
    for (let i = 1; i <= count; i++) {
      size.forEach((item, index) => {
        if (index > 0 || i > 1) {
          val.push(gap)
        }
        val.push(item)
      })
    }

    return val.join(' ')
  }

  return `(${size.join('')})[${count.join('')}]`
}

exports.prefixTrackValue = prefixTrackValue

function prefixTrackValue({ gap, value }) {
  let result = parser(value).nodes.reduce((nodes, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      nodes.push({
        type: 'word',
        value: transformRepeat(node, { gap })
      })
      return nodes
    }
    if (gap && node.type === 'space') {
      nodes.push(
        {
          type: 'space',
          value: ' '
        },
        {
          type: 'word',
          value: gap
        },
        node
      )
      return nodes
    }
    nodes.push(node)
    return nodes
  }, [])

  return parser.stringify(result)
}

// Parse grid-template-areas

let DOTS = /^\.+$/

function track(start, end) {
  return { end, span: end - start, start }
}

function getColumns(line) {
  return line.trim().split(/\s+/g)
}

exports.parseGridAreas = parseGridAreas

function parseGridAreas({ gap, rows }) {
  return rows.reduce((areas, line, rowIndex) => {
    if (gap.row) rowIndex *= 2

    if (line.trim() === '') return areas

    getColumns(line).forEach((area, columnIndex) => {
      if (DOTS.test(area)) return

      if (gap.column) columnIndex *= 2

      if (typeof areas[area] === 'undefined') {
        areas[area] = {
          column: track(columnIndex + 1, columnIndex + 2),
          row: track(rowIndex + 1, rowIndex + 2)
        }
      } else {
        let { column, row } = areas[area]

        column.start = Math.min(column.start, columnIndex + 1)
        column.end = Math.max(column.end, columnIndex + 2)
        column.span = column.end - column.start

        row.start = Math.min(row.start, rowIndex + 1)
        row.end = Math.max(row.end, rowIndex + 2)
        row.span = row.end - row.start
      }
    })

    return areas
  }, {})
}

// Parse grid-template

function testTrack(node) {
  return node.type === 'word' && /^\[.+]$/.test(node.value)
}

function verifyRowSize(result) {
  if (result.areas.length > result.rows.length) {
    result.rows.push('auto')
  }
  return result
}

exports.parseTemplate = parseTemplate

function parseTemplate({ decl, gap }) {
  let gridTemplate = parser(decl.value).nodes.reduce(
    (result, node) => {
      let { type, value } = node

      if (testTrack(node) || type === 'space') return result

      // area
      if (type === 'string') {
        result = verifyRowSize(result)
        result.areas.push(value)
      }

      // values and function
      if (type === 'word' || type === 'function') {
        result[result.key].push(parser.stringify(node))
      }

      // divider(/)
      if (type === 'div' && value === '/') {
        result.key = 'columns'
        result = verifyRowSize(result)
      }

      return result
    },
    {
      areas: [],
      columns: [],
      key: 'rows',
      rows: []
    }
  )

  return {
    areas: parseGridAreas({
      gap,
      rows: gridTemplate.areas
    }),
    columns: prefixTrackValue({
      gap: gap.column,
      value: gridTemplate.columns.join(' ')
    }),
    rows: prefixTrackValue({
      gap: gap.row,
      value: gridTemplate.rows.join(' ')
    })
  }
}

// Insert parsed grid areas

/**
 * Get an array of -ms- prefixed props and values
 * @param  {Object} [area] area object with column and row data
 * @param  {Boolean} [addRowSpan] should we add grid-column-row value?
 * @param  {Boolean} [addColumnSpan] should we add grid-column-span value?
 * @return {Array<Object>}
 */
function getMSDecls(area, addRowSpan = false, addColumnSpan = false) {
  let result = [
    {
      prop: '-ms-grid-row',
      value: String(area.row.start)
    }
  ]
  if (area.row.span > 1 || addRowSpan) {
    result.push({
      prop: '-ms-grid-row-span',
      value: String(area.row.span)
    })
  }
  result.push({
    prop: '-ms-grid-column',
    value: String(area.column.start)
  })
  if (area.column.span > 1 || addColumnSpan) {
    result.push({
      prop: '-ms-grid-column-span',
      value: String(area.column.span)
    })
  }
  return result
}

function getParentMedia(parent) {
  if (parent.type === 'atrule' && parent.name === 'media') {
    return parent
  }
  if (!parent.parent) {
    return false
  }
  return getParentMedia(parent.parent)
}

/**
 * change selectors for rules with duplicate grid-areas.
 * @param  {Array<Rule>} rules
 * @param  {Array<String>} templateSelectors
 * @return {Array<Rule>} rules with changed selectors
 */
function changeDuplicateAreaSelectors(ruleSelectors, templateSelectors) {
  ruleSelectors = ruleSelectors.map(selector => {
    let selectorBySpace = list.space(selector)
    let selectorByComma = list.comma(selector)

    if (selectorBySpace.length > selectorByComma.length) {
      selector = selectorBySpace.slice(-1).join('')
    }
    return selector
  })

  return ruleSelectors.map(ruleSelector => {
    let newSelector = templateSelectors.map((tplSelector, index) => {
      let space = index === 0 ? '' : ' '
      return `${space}${tplSelector} > ${ruleSelector}`
    })

    return newSelector
  })
}

/**
 * check if selector of rules are equal
 * @param  {Rule} ruleA
 * @param  {Rule} ruleB
 * @return {Boolean}
 */
function selectorsEqual(ruleA, ruleB) {
  return ruleA.selectors.some(sel => {
    return ruleB.selectors.includes(sel)
  })
}

/**
 * Parse data from all grid-template(-areas) declarations
 * @param  {Root} css css root
 * @return {Object} parsed data
 */
function parseGridTemplatesData(css) {
  let parsed = []

  // we walk through every grid-template(-areas) declaration and store
  // data with the same area names inside the item
  css.walkDecls(/grid-template(-areas)?$/, d => {
    let rule = d.parent
    let media = getParentMedia(rule)
    let gap = getGridGap(d)
    let inheritedGap = inheritGridGap(d, gap)
    let { areas } = parseTemplate({ decl: d, gap: inheritedGap || gap })
    let areaNames = Object.keys(areas)

    // skip node if it doesn't have areas
    if (areaNames.length === 0) {
      return true
    }

    // check parsed array for item that include the same area names
    // return index of that item
    let index = parsed.reduce((acc, { allAreas }, idx) => {
      let hasAreas = allAreas && areaNames.some(area => allAreas.includes(area))
      return hasAreas ? idx : acc
    }, null)

    if (index !== null) {
      // index is found, add the grid-template data to that item
      let { allAreas, rules } = parsed[index]

      // check if rule has no duplicate area names
      let hasNoDuplicates = rules.some(r => {
        return r.hasDuplicates === false && selectorsEqual(r, rule)
      })

      let duplicatesFound = false

      // check need to gather all duplicate area names
      let duplicateAreaNames = rules.reduce((acc, r) => {
        if (!r.params && selectorsEqual(r, rule)) {
          duplicatesFound = true
          return r.duplicateAreaNames
        }
        if (!duplicatesFound) {
          areaNames.forEach(name => {
            if (r.areas[name]) {
              acc.push(name)
            }
          })
        }
        return uniq(acc)
      }, [])

      // update grid-row/column-span values for areas with duplicate
      // area names. @see #1084 and #1146
      rules.forEach(r => {
        areaNames.forEach(name => {
          let area = r.areas[name]
          if (area && area.row.span !== areas[name].row.span) {
            areas[name].row.updateSpan = true
          }

          if (area && area.column.span !== areas[name].column.span) {
            areas[name].column.updateSpan = true
          }
        })
      })

      parsed[index].allAreas = uniq([...allAreas, ...areaNames])
      parsed[index].rules.push({
        areas,
        duplicateAreaNames,
        hasDuplicates: !hasNoDuplicates,
        node: rule,
        params: media.params,
        selectors: rule.selectors
      })
    } else {
      // index is NOT found, push the new item to the parsed array
      parsed.push({
        allAreas: areaNames,
        areasCount: 0,
        rules: [
          {
            areas,
            duplicateAreaNames: [],
            duplicateRules: [],
            hasDuplicates: false,
            node: rule,
            params: media.params,
            selectors: rule.selectors
          }
        ]
      })
    }

    return undefined
  })

  return parsed
}

/**
 * insert prefixed grid-area declarations
 * @param  {Root}  css css root
 * @param  {Function} isDisabled check if the rule is disabled
 * @return {void}
 */
exports.insertAreas = insertAreas

function insertAreas(css, isDisabled) {
  // parse grid-template declarations
  let gridTemplatesData = parseGridTemplatesData(css)

  // return undefined if no declarations found
  if (gridTemplatesData.length === 0) {
    return undefined
  }

  // we need to store the rules that we will insert later
  let rulesToInsert = {}

  css.walkDecls('grid-area', gridArea => {
    let gridAreaRule = gridArea.parent
    let hasPrefixedRow = gridAreaRule.first.prop === '-ms-grid-row'
    let gridAreaMedia = getParentMedia(gridAreaRule)

    if (isDisabled(gridArea)) {
      return undefined
    }

    let gridAreaRuleIndex = css.index(gridAreaMedia || gridAreaRule)

    let value = gridArea.value
    // found the data that matches grid-area identifier
    let data = gridTemplatesData.filter(d => d.allAreas.includes(value))[0]

    if (!data) {
      return true
    }

    let lastArea = data.allAreas[data.allAreas.length - 1]
    let selectorBySpace = list.space(gridAreaRule.selector)
    let selectorByComma = list.comma(gridAreaRule.selector)
    let selectorIsComplex =
      selectorBySpace.length > 1 &&
      selectorBySpace.length > selectorByComma.length

    // prevent doubling of prefixes
    if (hasPrefixedRow) {
      return false
    }

    // create the empty object with the key as the last area name
    // e.g if we have templates with "a b c" values, "c" will be the last area
    if (!rulesToInsert[lastArea]) {
      rulesToInsert[lastArea] = {}
    }

    let lastRuleIsSet = false

    // walk through every grid-template rule data
    for (let rule of data.rules) {
      let area = rule.areas[value]
      let hasDuplicateName = rule.duplicateAreaNames.includes(value)

      // if we can't find the area name, update lastRule and continue
      if (!area) {
        let lastRule = rulesToInsert[lastArea].lastRule
        let lastRuleIndex
        if (lastRule) {
          lastRuleIndex = css.index(lastRule)
        } else {
          /* c8 ignore next 2 */
          lastRuleIndex = -1
        }

        if (gridAreaRuleIndex > lastRuleIndex) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
        continue
      }

      // for grid-templates inside media rule we need to create empty
      // array to push prefixed grid-area rules later
      if (rule.params && !rulesToInsert[lastArea][rule.params]) {
        rulesToInsert[lastArea][rule.params] = []
      }

      if ((!rule.hasDuplicates || !hasDuplicateName) && !rule.params) {
        // grid-template has no duplicates and not inside media rule

        getMSDecls(area, false, false)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        rulesToInsert[lastArea].lastRule = gridAreaRule
        lastRuleIsSet = true
      } else if (rule.hasDuplicates && !rule.params && !selectorIsComplex) {
        // grid-template has duplicates and not inside media rule
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        cloned.selectors = changeDuplicateAreaSelectors(
          cloned.selectors,
          rule.selectors
        )

        if (rulesToInsert[lastArea].lastRule) {
          rulesToInsert[lastArea].lastRule.after(cloned)
        }
        rulesToInsert[lastArea].lastRule = cloned
        lastRuleIsSet = true
      } else if (
        rule.hasDuplicates &&
        !rule.params &&
        selectorIsComplex &&
        gridAreaRule.selector.includes(rule.selectors[0])
      ) {
        // grid-template has duplicates and not inside media rule
        // and the selector is complex
        gridAreaRule.walkDecls(/-ms-grid-(row|column)/, d => d.remove())
        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )
      } else if (rule.params) {
        // grid-template is inside media rule
        // if we're inside media rule, we need to store prefixed rules
        // inside rulesToInsert object to be able to preserve the order of media
        // rules and merge them easily
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        if (rule.hasDuplicates && hasDuplicateName) {
          cloned.selectors = changeDuplicateAreaSelectors(
            cloned.selectors,
            rule.selectors
          )
        }

        cloned.raws = rule.node.raws

        if (css.index(rule.node.parent) > gridAreaRuleIndex) {
          // append the prefixed rules right inside media rule
          // with grid-template
          rule.node.parent.append(cloned)
        } else {
          // store the rule to insert later
          rulesToInsert[lastArea][rule.params].push(cloned)
        }

        // set new rule as last rule ONLY if we didn't set lastRule for
        // this grid-area before
        if (!lastRuleIsSet) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
      }
    }

    return undefined
  })

  // append stored rules inside the media rules
  Object.keys(rulesToInsert).forEach(area => {
    let data = rulesToInsert[area]
    let lastRule = data.lastRule
    Object.keys(data)
      .reverse()
      .filter(p => p !== 'lastRule')
      .forEach(params => {
        if (data[params].length > 0 && lastRule) {
          lastRule.after({ name: 'media', params })
          lastRule.next().append(data[params])
        }
      })
  })

  return undefined
}

/**
 * Warn user if grid area identifiers are not found
 * @param  {Object} areas
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnMissedAreas = warnMissedAreas

function warnMissedAreas(areas, decl, result) {
  let missed = Object.keys(areas)

  decl.root().walkDecls('grid-area', gridArea => {
    missed = missed.filter(e => e !== gridArea.value)
  })

  if (missed.length > 0) {
    decl.warn(result, 'Can not find grid areas: ' + missed.join(', '))
  }

  return undefined
}

/**
 * compare selectors with grid-area rule and grid-template rule
 * show warning if grid-template selector is not found
 * (this function used for grid-area rule)
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnTemplateSelectorNotFound = warnTemplateSelectorNotFound

function warnTemplateSelectorNotFound(decl, result) {
  let rule = decl.parent
  let root = decl.root()
  let duplicatesFound = false

  // slice selector array. Remove the last part (for comparison)
  let slicedSelectorArr = list
    .space(rule.selector)
    .filter(str => str !== '>')
    .slice(0, -1)

  // we need to compare only if selector is complex.
  // e.g '.grid-cell' is simple, but '.parent > .grid-cell' is complex
  if (slicedSelectorArr.length > 0) {
    let gridTemplateFound = false
    let foundAreaSelector = null

    root.walkDecls(/grid-template(-areas)?$/, d => {
      let parent = d.parent
      let templateSelectors = parent.selectors

      let { areas } = parseTemplate({ decl: d, gap: getGridGap(d) })
      let hasArea = areas[decl.value]

      // find the the matching selectors
      for (let tplSelector of templateSelectors) {
        if (gridTemplateFound) {
          break
        }
        let tplSelectorArr = list.space(tplSelector).filter(str => str !== '>')

        gridTemplateFound = tplSelectorArr.every(
          (item, idx) => item === slicedSelectorArr[idx]
        )
      }

      if (gridTemplateFound || !hasArea) {
        return true
      }

      if (!foundAreaSelector) {
        foundAreaSelector = parent.selector
      }

      // if we found the duplicate area with different selector
      if (foundAreaSelector && foundAreaSelector !== parent.selector) {
        duplicatesFound = true
      }

      return undefined
    })

    // warn user if we didn't find template
    if (!gridTemplateFound && duplicatesFound) {
      decl.warn(
        result,
        'Autoprefixer cannot find a grid-template ' +
          `containing the duplicate grid-area "${decl.value}" ` +
          `with full selector matching: ${slicedSelectorArr.join(' ')}`
      )
    }
  }
}

/**
 * warn user if both grid-area and grid-(row|column)
 * declarations are present in the same rule
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnIfGridRowColumnExists = warnIfGridRowColumnExists

function warnIfGridRowColumnExists(decl, result) {
  let rule = decl.parent
  let decls = []
  rule.walkDecls(/^grid-(row|column)/, d => {
    if (
      !d.prop.endsWith('-end') &&
      !d.value.startsWith('span') &&
      !d.prop.endsWith('-gap')
    ) {
      decls.push(d)
    }
  })
  if (decls.length > 0) {
    decls.forEach(d => {
      d.warn(
        result,
        'You already have a grid-area declaration present in the rule. ' +
          `You should use either grid-area or ${d.prop}, not both`
      )
    })
  }

  return undefined
}

// Gap utils

exports.getGridGap = getGridGap

function getGridGap(decl) {
  let gap = {}

  // try to find gap
  let testGap = /^(grid-)?((row|column)-)?gap$/
  decl.parent.walkDecls(testGap, ({ prop, value }) => {
    if (/^(grid-)?gap$/.test(prop)) {
      let [row, , column] = parser(value).nodes

      gap.row = row && parser.stringify(row)
      gap.column = column ? parser.stringify(column) : gap.row
    }
    if (/^(grid-)?row-gap$/.test(prop)) gap.row = value
    if (/^(grid-)?column-gap$/.test(prop)) gap.column = value
  })

  return gap
}

/**
 * parse media parameters (for example 'min-width: 500px')
 * @param  {String} params parameter to parse
 * @return {}
 */
function parseMediaParams(params) {
  if (!params) {
    return []
  }
  let parsed = parser(params)
  let prop
  let value

  parsed.walk(node => {
    if (node.type === 'word' && /min|max/g.test(node.value)) {
      prop = node.value
    } else if (node.value.includes('px')) {
      value = parseInt(node.value.replace(/\D/g, ''))
    }
  })

  return [prop, value]
}

/**
 * Compare the selectors and decide if we
 * need to inherit gap from compared selector or not.
 * @type {String} selA
 * @type {String} selB
 * @return {Boolean}
 */
function shouldInheritGap(selA, selB) {
  let result

  // get arrays of selector split in 3-deep array
  let splitSelectorArrA = splitSelector(selA)
  let splitSelectorArrB = splitSelector(selB)

  if (splitSelectorArrA[0].length < splitSelectorArrB[0].length) {
    // abort if selectorA has lower descendant specificity then selectorB
    // (e.g '.grid' and '.hello .world .grid')
    return false
  } else if (splitSelectorArrA[0].length > splitSelectorArrB[0].length) {
    // if selectorA has higher descendant specificity then selectorB
    // (e.g '.foo .bar .grid' and '.grid')

    let idx = splitSelectorArrA[0].reduce((res, [item], index) => {
      let firstSelectorPart = splitSelectorArrB[0][0][0]
      if (item === firstSelectorPart) {
        return index
      }
      return false
    }, false)

    if (idx) {
      result = splitSelectorArrB[0].every((arr, index) => {
        return arr.every(
          (part, innerIndex) =>
            // because selectorA has more space elements, we need to slice
            // selectorA array by 'idx' number to compare them
            splitSelectorArrA[0].slice(idx)[index][innerIndex] === part
        )
      })
    }
  } else {
    // if selectorA has the same descendant specificity as selectorB
    // this condition covers cases such as: '.grid.foo.bar' and '.grid'
    result = splitSelectorArrB.some(byCommaArr => {
      return byCommaArr.every((bySpaceArr, index) => {
        return bySpaceArr.every(
          (part, innerIndex) => splitSelectorArrA[0][index][innerIndex] === part
        )
      })
    })
  }

  return result
}
/**
 * inherit grid gap values from the closest rule above
 * with the same selector
 * @param  {Declaration} decl
 * @param  {Object} gap gap values
 * @return {Object | Boolean} return gap values or false (if not found)
 */
exports.inheritGridGap = inheritGridGap

function inheritGridGap(decl, gap) {
  let rule = decl.parent
  let mediaRule = getParentMedia(rule)
  let root = rule.root()

  // get an array of selector split in 3-deep array
  let splitSelectorArr = splitSelector(rule.selector)

  // abort if the rule already has gaps
  if (Object.keys(gap).length > 0) {
    return false
  }

  // e.g ['min-width']
  let [prop] = parseMediaParams(mediaRule.params)

  let lastBySpace = splitSelectorArr[0]

  // get escaped value from the selector
  // if we have '.grid-2.foo.bar' selector, will be '\.grid\-2'
  let escaped = escapeRegexp(lastBySpace[lastBySpace.length - 1][0])

  let regexp = new RegExp(`(${escaped}$)|(${escaped}[,.])`)

  // find the closest rule with the same selector
  let closestRuleGap
  root.walkRules(regexp, r => {
    let gridGap

    // abort if are checking the same rule
    if (rule.toString() === r.toString()) {
      return false
    }

    // find grid-gap values
    r.walkDecls('grid-gap', d => (gridGap = getGridGap(d)))

    // skip rule without gaps
    if (!gridGap || Object.keys(gridGap).length === 0) {
      return true
    }

    // skip rules that should not be inherited from
    if (!shouldInheritGap(rule.selector, r.selector)) {
      return true
    }

    let media = getParentMedia(r)
    if (media) {
      // if we are inside media, we need to check that media props match
      // e.g ('min-width' === 'min-width')
      let propToCompare = parseMediaParams(media.params)[0]
      if (propToCompare === prop) {
        closestRuleGap = gridGap
        return true
      }
    } else {
      closestRuleGap = gridGap
      return true
    }

    return undefined
  })

  // if we find the closest gap object
  if (closestRuleGap && Object.keys(closestRuleGap).length > 0) {
    return closestRuleGap
  }
  return false
}

exports.warnGridGap = warnGridGap

function warnGridGap({ decl, gap, hasColumns, result }) {
  let hasBothGaps = gap.row && gap.column
  if (!hasColumns && (hasBothGaps || (gap.column && !gap.row))) {
    delete gap.column
    decl.warn(
      result,
      'Can not implement grid-gap without grid-template-columns'
    )
  }
}

/**
 * normalize the grid-template-rows/columns values
 * @param  {String} str grid-template-rows/columns value
 * @return {Array} normalized array with values
 * @example
 * let normalized = normalizeRowColumn('1fr repeat(2, 20px 50px) 1fr')
 * normalized // <= ['1fr', '20px', '50px', '20px', '50px', '1fr']
 */
function normalizeRowColumn(str) {
  let normalized = parser(str).nodes.reduce((result, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      let key = 'count'

      let [count, value] = node.nodes.reduce(
        (acc, n) => {
          if (n.type === 'word' && key === 'count') {
            acc[0] = Math.abs(parseInt(n.value))
            return acc
          }
          if (n.type === 'div' && n.value === ',') {
            key = 'value'
            return acc
          }
          if (key === 'value') {
            acc[1] += parser.stringify(n)
          }
          return acc
        },
        [0, '']
      )

      if (count) {
        for (let i = 0; i < count; i++) {
          result.push(value)
        }
      }

      return result
    }
    if (node.type === 'space') {
      return result
    }
    result.push(parser.stringify(node))
    return result
  }, [])

  return normalized
}

exports.autoplaceGridItems = autoplaceGridItems

/**
 * Autoplace grid items
 * @param {Declaration} decl
 * @param {Result} result
 * @param {Object} gap gap values
 * @param {String} autoflowValue grid-auto-flow value
 * @return {void}
 * @see https://github.com/postcss/autoprefixer/issues/1148
 */
function autoplaceGridItems(decl, result, gap, autoflowValue = 'row') {
  let { parent } = decl

  let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')
  let rows = normalizeRowColumn(rowDecl.value)
  let columns = normalizeRowColumn(decl.value)

  // Build array of area names with dummy values. If we have 3 columns and
  // 2 rows, filledRows will be equal to ['1 2 3', '4 5 6']
  let filledRows = rows.map((_, rowIndex) => {
    return Array.from(
      { length: columns.length },
      (v, k) => k + rowIndex * columns.length + 1
    ).join(' ')
  })

  let areas = parseGridAreas({ gap, rows: filledRows })
  let keys = Object.keys(areas)
  let items = keys.map(i => areas[i])

  // Change the order of cells if grid-auto-flow value is 'column'
  if (autoflowValue.includes('column')) {
    items = items.sort((a, b) => a.column.start - b.column.start)
  }

  // Insert new rules
  items.reverse().forEach((item, index) => {
    let { column, row } = item
    let nodeSelector = parent.selectors
      .map(sel => sel + ` > *:nth-child(${keys.length - index})`)
      .join(', ')

    // create new rule
    let node = parent.clone().removeAll()

    // change rule selector
    node.selector = nodeSelector

    // insert prefixed row/column values
    node.append({ prop: '-ms-grid-row', value: row.start })
    node.append({ prop: '-ms-grid-column', value: column.start })

    // insert rule
    parent.after(node)
  })

  return undefined
}
