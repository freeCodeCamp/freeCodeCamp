let parser = require('postcss-value-parser')

let Value = require('./value')
let insertAreas = require('./hacks/grid-utils').insertAreas

const OLD_LINEAR = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i
const OLD_RADIAL = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i
const IGNORE_NEXT = /(!\s*)?autoprefixer:\s*ignore\s+next/i
const GRID_REGEX = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i

const SIZES = [
  'width',
  'height',
  'min-width',
  'max-width',
  'min-height',
  'max-height',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'block-size',
  'min-block-size',
  'max-block-size'
]

function hasGridTemplate(decl) {
  return decl.parent.some(
    i => i.prop === 'grid-template' || i.prop === 'grid-template-areas'
  )
}

function hasRowsAndColumns(decl) {
  let hasRows = decl.parent.some(i => i.prop === 'grid-template-rows')
  let hasColumns = decl.parent.some(i => i.prop === 'grid-template-columns')
  return hasRows && hasColumns
}

class Processor {
  constructor(prefixes) {
    this.prefixes = prefixes
  }

  /**
   * Add necessary prefixes
   */
  add(css, result) {
    // At-rules
    let resolution = this.prefixes.add['@resolution']
    let keyframes = this.prefixes.add['@keyframes']
    let viewport = this.prefixes.add['@viewport']
    let supports = this.prefixes.add['@supports']

    css.walkAtRules(rule => {
      if (rule.name === 'keyframes') {
        if (!this.disabled(rule, result)) {
          return keyframes && keyframes.process(rule)
        }
      } else if (rule.name === 'viewport') {
        if (!this.disabled(rule, result)) {
          return viewport && viewport.process(rule)
        }
      } else if (rule.name === 'supports') {
        if (
          this.prefixes.options.supports !== false &&
          !this.disabled(rule, result)
        ) {
          return supports.process(rule)
        }
      } else if (rule.name === 'media' && rule.params.includes('-resolution')) {
        if (!this.disabled(rule, result)) {
          return resolution && resolution.process(rule)
        }
      }

      return undefined
    })

    // Selectors
    css.walkRules(rule => {
      if (this.disabled(rule, result)) return undefined

      return this.prefixes.add.selectors.map(selector => {
        return selector.process(rule, result)
      })
    })

    function insideGrid(decl) {
      return decl.parent.nodes.some(node => {
        if (node.type !== 'decl') return false
        let displayGrid =
          node.prop === 'display' && /(inline-)?grid/.test(node.value)
        let gridTemplate = node.prop.startsWith('grid-template')
        let gridGap = /^grid-([A-z]+-)?gap/.test(node.prop)
        return displayGrid || gridTemplate || gridGap
      })
    }

    let gridPrefixes =
      this.gridStatus(css, result) &&
      this.prefixes.add['grid-area'] &&
      this.prefixes.add['grid-area'].prefixes

    css.walkDecls(decl => {
      if (this.disabledDecl(decl, result)) return undefined

      let parent = decl.parent
      let prop = decl.prop
      let value = decl.value

      if (prop === 'color-adjust') {
        if (parent.every(i => i.prop !== 'print-color-adjust')) {
          result.warn(
            'Replace color-adjust to print-color-adjust. ' +
              'The color-adjust shorthand is currently deprecated.',
            { node: decl }
          )
        }
      } else if (prop === 'grid-row-span') {
        result.warn(
          'grid-row-span is not part of final Grid Layout. Use grid-row.',
          { node: decl }
        )
        return undefined
      } else if (prop === 'grid-column-span') {
        result.warn(
          'grid-column-span is not part of final Grid Layout. Use grid-column.',
          { node: decl }
        )
        return undefined
      } else if (prop === 'display' && value === 'box') {
        result.warn(
          'You should write display: flex by final spec ' +
            'instead of display: box',
          { node: decl }
        )
        return undefined
      } else if (prop === 'text-emphasis-position') {
        if (value === 'under' || value === 'over') {
          result.warn(
            'You should use 2 values for text-emphasis-position ' +
              'For example, `under left` instead of just `under`.',
            { node: decl }
          )
        }
      } else if (prop === 'text-decoration-skip' && value === 'ink') {
        result.warn(
          'Replace text-decoration-skip: ink to ' +
            'text-decoration-skip-ink: auto, because spec had been changed',
          { node: decl }
        )
      } else {
        if (gridPrefixes && this.gridStatus(decl, result)) {
          if (decl.value === 'subgrid') {
            result.warn('IE does not support subgrid', { node: decl })
          }
          if (/^(align|justify|place)-items$/.test(prop) && insideGrid(decl)) {
            let fixed = prop.replace('-items', '-self')
            result.warn(
              `IE does not support ${prop} on grid containers. ` +
                `Try using ${fixed} on child elements instead: ` +
                `${decl.parent.selector} > * { ${fixed}: ${decl.value} }`,
              { node: decl }
            )
          } else if (
            /^(align|justify|place)-content$/.test(prop) &&
            insideGrid(decl)
          ) {
            result.warn(`IE does not support ${decl.prop} on grid containers`, {
              node: decl
            })
          } else if (prop === 'display' && decl.value === 'contents') {
            result.warn(
              'Please do not use display: contents; ' +
                'if you have grid setting enabled',
              { node: decl }
            )
            return undefined
          } else if (decl.prop === 'grid-gap') {
            let status = this.gridStatus(decl, result)
            if (
              status === 'autoplace' &&
              !hasRowsAndColumns(decl) &&
              !hasGridTemplate(decl)
            ) {
              result.warn(
                'grid-gap only works if grid-template(-areas) is being ' +
                  'used or both rows and columns have been declared ' +
                  'and cells have not been manually ' +
                  'placed inside the explicit grid',
                { node: decl }
              )
            } else if (
              (status === true || status === 'no-autoplace') &&
              !hasGridTemplate(decl)
            ) {
              result.warn(
                'grid-gap only works if grid-template(-areas) is being used',
                { node: decl }
              )
            }
          } else if (prop === 'grid-auto-columns') {
            result.warn('grid-auto-columns is not supported by IE', {
              node: decl
            })
            return undefined
          } else if (prop === 'grid-auto-rows') {
            result.warn('grid-auto-rows is not supported by IE', { node: decl })
            return undefined
          } else if (prop === 'grid-auto-flow') {
            let hasRows = parent.some(i => i.prop === 'grid-template-rows')
            let hasCols = parent.some(i => i.prop === 'grid-template-columns')

            if (hasGridTemplate(decl)) {
              result.warn('grid-auto-flow is not supported by IE', {
                node: decl
              })
            } else if (value.includes('dense')) {
              result.warn('grid-auto-flow: dense is not supported by IE', {
                node: decl
              })
            } else if (!hasRows && !hasCols) {
              result.warn(
                'grid-auto-flow works only if grid-template-rows and ' +
                  'grid-template-columns are present in the same rule',
                { node: decl }
              )
            }
            return undefined
          } else if (value.includes('auto-fit')) {
            result.warn('auto-fit value is not supported by IE', {
              node: decl,
              word: 'auto-fit'
            })
            return undefined
          } else if (value.includes('auto-fill')) {
            result.warn('auto-fill value is not supported by IE', {
              node: decl,
              word: 'auto-fill'
            })
            return undefined
          } else if (prop.startsWith('grid-template') && value.includes('[')) {
            result.warn(
              'Autoprefixer currently does not support line names. ' +
                'Try using grid-template-areas instead.',
              { node: decl, word: '[' }
            )
          }
        }
        if (value.includes('radial-gradient')) {
          if (OLD_RADIAL.test(decl.value)) {
            result.warn(
              'Gradient has outdated direction syntax. ' +
                'New syntax is like `closest-side at 0 0` ' +
                'instead of `0 0, closest-side`.',
              { node: decl }
            )
          } else {
            let ast = parser(value)

            for (let i of ast.nodes) {
              if (i.type === 'function' && i.value === 'radial-gradient') {
                for (let word of i.nodes) {
                  if (word.type === 'word') {
                    if (word.value === 'cover') {
                      result.warn(
                        'Gradient has outdated direction syntax. ' +
                          'Replace `cover` to `farthest-corner`.',
                        { node: decl }
                      )
                    } else if (word.value === 'contain') {
                      result.warn(
                        'Gradient has outdated direction syntax. ' +
                          'Replace `contain` to `closest-side`.',
                        { node: decl }
                      )
                    }
                  }
                }
              }
            }
          }
        }
        if (value.includes('linear-gradient')) {
          if (OLD_LINEAR.test(value)) {
            result.warn(
              'Gradient has outdated direction syntax. ' +
                'New syntax is like `to left` instead of `right`.',
              { node: decl }
            )
          }
        }
      }

      if (SIZES.includes(decl.prop)) {
        if (!decl.value.includes('-fill-available')) {
          if (decl.value.includes('fill-available')) {
            result.warn(
              'Replace fill-available to stretch, ' +
                'because spec had been changed',
              { node: decl }
            )
          } else if (decl.value.includes('fill')) {
            let ast = parser(value)
            if (ast.nodes.some(i => i.type === 'word' && i.value === 'fill')) {
              result.warn(
                'Replace fill to stretch, because spec had been changed',
                { node: decl }
              )
            }
          }
        }
      }

      let prefixer

      if (decl.prop === 'transition' || decl.prop === 'transition-property') {
        // Transition
        return this.prefixes.transition.add(decl, result)
      } else if (decl.prop === 'align-self') {
        // align-self flexbox or grid
        let display = this.displayType(decl)
        if (display !== 'grid' && this.prefixes.options.flexbox !== false) {
          prefixer = this.prefixes.add['align-self']
          if (prefixer && prefixer.prefixes) {
            prefixer.process(decl)
          }
        }
        if (this.gridStatus(decl, result) !== false) {
          prefixer = this.prefixes.add['grid-row-align']
          if (prefixer && prefixer.prefixes) {
            return prefixer.process(decl, result)
          }
        }
      } else if (decl.prop === 'justify-self') {
        // justify-self flexbox or grid
        if (this.gridStatus(decl, result) !== false) {
          prefixer = this.prefixes.add['grid-column-align']
          if (prefixer && prefixer.prefixes) {
            return prefixer.process(decl, result)
          }
        }
      } else if (decl.prop === 'place-self') {
        prefixer = this.prefixes.add['place-self']
        if (
          prefixer &&
          prefixer.prefixes &&
          this.gridStatus(decl, result) !== false
        ) {
          return prefixer.process(decl, result)
        }
      } else {
        // Properties
        prefixer = this.prefixes.add[decl.prop]
        if (prefixer && prefixer.prefixes) {
          return prefixer.process(decl, result)
        }
      }

      return undefined
    })

    // Insert grid-area prefixes. We need to be able to store the different
    // rules as a data and hack API is not enough for this
    if (this.gridStatus(css, result)) {
      insertAreas(css, this.disabled)
    }

    // Values
    return css.walkDecls(decl => {
      if (this.disabledValue(decl, result)) return

      let unprefixed = this.prefixes.unprefixed(decl.prop)
      let list = this.prefixes.values('add', unprefixed)
      if (Array.isArray(list)) {
        for (let value of list) {
          if (value.process) value.process(decl, result)
        }
      }
      Value.save(this.prefixes, decl)
    })
  }

  /**
   * Check for control comment and global options
   */
  disabled(node, result) {
    if (!node) return false

    if (node._autoprefixerDisabled !== undefined) {
      return node._autoprefixerDisabled
    }

    if (node.parent) {
      let p = node.prev()
      if (p && p.type === 'comment' && IGNORE_NEXT.test(p.text)) {
        node._autoprefixerDisabled = true
        node._autoprefixerSelfDisabled = true
        return true
      }
    }

    let value = null
    if (node.nodes) {
      let status
      node.each(i => {
        if (i.type !== 'comment') return
        if (/(!\s*)?autoprefixer:\s*(off|on)/i.test(i.text)) {
          if (typeof status !== 'undefined') {
            result.warn(
              'Second Autoprefixer control comment ' +
                'was ignored. Autoprefixer applies control ' +
                'comment to whole block, not to next rules.',
              { node: i }
            )
          } else {
            status = /on/i.test(i.text)
          }
        }
      })

      if (status !== undefined) {
        value = !status
      }
    }
    if (!node.nodes || value === null) {
      if (node.parent) {
        let isParentDisabled = this.disabled(node.parent, result)
        if (node.parent._autoprefixerSelfDisabled === true) {
          value = false
        } else {
          value = isParentDisabled
        }
      } else {
        value = false
      }
    }
    node._autoprefixerDisabled = value
    return value
  }

  /**
   * Check for grid/flexbox options.
   */
  disabledDecl(node, result) {
    if (node.type === 'decl' && this.gridStatus(node, result) === false) {
      if (node.prop.includes('grid') || node.prop === 'justify-items') {
        return true
      }
    }
    if (node.type === 'decl' && this.prefixes.options.flexbox === false) {
      let other = ['order', 'justify-content', 'align-items', 'align-content']
      if (node.prop.includes('flex') || other.includes(node.prop)) {
        return true
      }
    }

    return this.disabled(node, result)
  }

  /**
   * Check for grid/flexbox options.
   */
  disabledValue(node, result) {
    if (this.gridStatus(node, result) === false && node.type === 'decl') {
      if (node.prop === 'display' && node.value.includes('grid')) {
        return true
      }
    }
    if (this.prefixes.options.flexbox === false && node.type === 'decl') {
      if (node.prop === 'display' && node.value.includes('flex')) {
        return true
      }
    }
    if (node.type === 'decl' && node.prop === 'content') {
      return true
    }

    return this.disabled(node, result)
  }

  /**
   * Is it flebox or grid rule
   */
  displayType(decl) {
    for (let i of decl.parent.nodes) {
      if (i.prop !== 'display') {
        continue
      }

      if (i.value.includes('flex')) {
        return 'flex'
      }

      if (i.value.includes('grid')) {
        return 'grid'
      }
    }

    return false
  }

  /**
   * Set grid option via control comment
   */
  gridStatus(node, result) {
    if (!node) return false

    if (node._autoprefixerGridStatus !== undefined) {
      return node._autoprefixerGridStatus
    }

    let value = null
    if (node.nodes) {
      let status
      node.each(i => {
        if (i.type !== 'comment') return
        if (GRID_REGEX.test(i.text)) {
          let hasAutoplace = /:\s*autoplace/i.test(i.text)
          let noAutoplace = /no-autoplace/i.test(i.text)
          if (typeof status !== 'undefined') {
            result.warn(
              'Second Autoprefixer grid control comment was ' +
                'ignored. Autoprefixer applies control comments to the whole ' +
                'block, not to the next rules.',
              { node: i }
            )
          } else if (hasAutoplace) {
            status = 'autoplace'
          } else if (noAutoplace) {
            status = true
          } else {
            status = /on/i.test(i.text)
          }
        }
      })

      if (status !== undefined) {
        value = status
      }
    }

    if (node.type === 'atrule' && node.name === 'supports') {
      let params = node.params
      if (params.includes('grid') && params.includes('auto')) {
        value = false
      }
    }

    if (!node.nodes || value === null) {
      if (node.parent) {
        let isParentGrid = this.gridStatus(node.parent, result)
        if (node.parent._autoprefixerSelfDisabled === true) {
          value = false
        } else {
          value = isParentGrid
        }
      } else if (typeof this.prefixes.options.grid !== 'undefined') {
        value = this.prefixes.options.grid
      } else if (typeof process.env.AUTOPREFIXER_GRID !== 'undefined') {
        if (process.env.AUTOPREFIXER_GRID === 'autoplace') {
          value = 'autoplace'
        } else {
          value = true
        }
      } else {
        value = false
      }
    }

    node._autoprefixerGridStatus = value
    return value
  }

  /**
   * Normalize spaces in cascade declaration group
   */
  reduceSpaces(decl) {
    let stop = false
    this.prefixes.group(decl).up(() => {
      stop = true
      return true
    })
    if (stop) {
      return
    }

    let parts = decl.raw('before').split('\n')
    let prevMin = parts[parts.length - 1].length
    let diff = false

    this.prefixes.group(decl).down(other => {
      parts = other.raw('before').split('\n')
      let last = parts.length - 1

      if (parts[last].length > prevMin) {
        if (diff === false) {
          diff = parts[last].length - prevMin
        }

        parts[last] = parts[last].slice(0, -diff)
        other.raws.before = parts.join('\n')
      }
    })
  }

  /**
   * Remove unnecessary pefixes
   */
  remove(css, result) {
    // At-rules
    let resolution = this.prefixes.remove['@resolution']

    css.walkAtRules((rule, i) => {
      if (this.prefixes.remove[`@${rule.name}`]) {
        if (!this.disabled(rule, result)) {
          rule.parent.removeChild(i)
        }
      } else if (
        rule.name === 'media' &&
        rule.params.includes('-resolution') &&
        resolution
      ) {
        resolution.clean(rule)
      }
    })

    // Selectors
    css.walkRules((rule, i) => {
      if (this.disabled(rule, result)) return

      for (let checker of this.prefixes.remove.selectors) {
        if (checker.check(rule)) {
          rule.parent.removeChild(i)
          return
        }
      }
    })

    return css.walkDecls((decl, i) => {
      if (this.disabled(decl, result)) return

      let rule = decl.parent
      let unprefixed = this.prefixes.unprefixed(decl.prop)

      // Transition
      if (decl.prop === 'transition' || decl.prop === 'transition-property') {
        this.prefixes.transition.remove(decl)
      }

      // Properties
      if (
        this.prefixes.remove[decl.prop] &&
        this.prefixes.remove[decl.prop].remove
      ) {
        let notHack = this.prefixes.group(decl).down(other => {
          return this.prefixes.normalize(other.prop) === unprefixed
        })

        if (unprefixed === 'flex-flow') {
          notHack = true
        }

        if (decl.prop === '-webkit-box-orient') {
          let hacks = { 'flex-direction': true, 'flex-flow': true }
          if (!decl.parent.some(j => hacks[j.prop])) return
        }

        if (notHack && !this.withHackValue(decl)) {
          if (decl.raw('before').includes('\n')) {
            this.reduceSpaces(decl)
          }
          rule.removeChild(i)
          return
        }
      }

      // Values
      for (let checker of this.prefixes.values('remove', unprefixed)) {
        if (!checker.check) continue
        if (!checker.check(decl.value)) continue

        unprefixed = checker.unprefixed
        let notHack = this.prefixes.group(decl).down(other => {
          return other.value.includes(unprefixed)
        })

        if (notHack) {
          rule.removeChild(i)
          return
        }
      }
    })
  }

  /**
   * Some rare old values, which is not in standard
   */
  withHackValue(decl) {
    return (
      (decl.prop === '-webkit-background-clip' && decl.value === 'text') ||
      // Do not remove -webkit-box-orient when -webkit-line-clamp is present.
      // https://github.com/postcss/autoprefixer/issues/1510
      (decl.prop === '-webkit-box-orient' &&
        decl.parent.some(d => d.prop === '-webkit-line-clamp'))
    )
  }
}

module.exports = Processor
