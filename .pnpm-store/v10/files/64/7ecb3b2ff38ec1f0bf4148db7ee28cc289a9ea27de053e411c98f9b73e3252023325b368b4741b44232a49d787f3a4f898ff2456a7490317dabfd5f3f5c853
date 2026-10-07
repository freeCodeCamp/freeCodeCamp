let { list } = require('postcss')
let parser = require('postcss-value-parser')

let Browsers = require('./browsers')
let vendor = require('./vendor')

class Transition {
  constructor(prefixes) {
    this.props = ['transition', 'transition-property']
    this.prefixes = prefixes
  }

  /**
   * Process transition and add prefixes for all necessary properties
   */
  add(decl, result) {
    let prefix, prop
    let add = this.prefixes.add[decl.prop]
    let vendorPrefixes = this.ruleVendorPrefixes(decl)
    let declPrefixes = vendorPrefixes || (add && add.prefixes) || []

    let params = this.parse(decl.value)
    let names = params.map(i => this.findProp(i))
    let added = []

    if (names.some(i => i[0] === '-')) {
      return
    }

    for (let param of params) {
      prop = this.findProp(param)
      if (prop[0] === '-') continue

      let prefixer = this.prefixes.add[prop]
      if (!prefixer || !prefixer.prefixes) continue

      for (prefix of prefixer.prefixes) {
        if (vendorPrefixes && !vendorPrefixes.some(p => prefix.includes(p))) {
          continue
        }

        let prefixed = this.prefixes.prefixed(prop, prefix)
        if (prefixed !== '-ms-transform' && !names.includes(prefixed)) {
          if (!this.disabled(prop, prefix)) {
            added.push(this.clone(prop, prefixed, param))
          }
        }
      }
    }

    params = params.concat(added)
    let value = this.stringify(params)

    let webkitClean = this.stringify(
      this.cleanFromUnprefixed(params, '-webkit-')
    )
    if (declPrefixes.includes('-webkit-')) {
      this.cloneBefore(decl, `-webkit-${decl.prop}`, webkitClean)
    }
    this.cloneBefore(decl, decl.prop, webkitClean)
    if (declPrefixes.includes('-o-')) {
      let operaClean = this.stringify(this.cleanFromUnprefixed(params, '-o-'))
      this.cloneBefore(decl, `-o-${decl.prop}`, operaClean)
    }

    for (prefix of declPrefixes) {
      if (prefix !== '-webkit-' && prefix !== '-o-') {
        let prefixValue = this.stringify(
          this.cleanOtherPrefixes(params, prefix)
        )
        this.cloneBefore(decl, prefix + decl.prop, prefixValue)
      }
    }

    if (value !== decl.value && !this.already(decl, decl.prop, value)) {
      this.checkForWarning(result, decl)
      decl.cloneBefore()
      decl.value = value
    }
  }

  /**
   * Does we already have this declaration
   */
  already(decl, prop, value) {
    return decl.parent.some(i => i.prop === prop && i.value === value)
  }

  /**
   * Show transition-property warning
   */
  checkForWarning(result, decl) {
    if (decl.prop !== 'transition-property') {
      return
    }

    let isPrefixed = false
    let hasAssociatedProp = false

    decl.parent.each(i => {
      if (i.type !== 'decl') {
        return undefined
      }
      if (i.prop.indexOf('transition-') !== 0) {
        return undefined
      }
      let values = list.comma(i.value)
      // check if current Rule's transition-property comma separated value list needs prefixes
      if (i.prop === 'transition-property') {
        values.forEach(value => {
          let lookup = this.prefixes.add[value]
          if (lookup && lookup.prefixes && lookup.prefixes.length > 0) {
            isPrefixed = true
          }
        })
        return undefined
      }
      // check if another transition-* prop in current Rule has comma separated value list
      hasAssociatedProp = hasAssociatedProp || values.length > 1
      return false
    })

    if (isPrefixed && hasAssociatedProp) {
      decl.warn(
        result,
        'Replace transition-property to transition, ' +
          'because Autoprefixer could not support ' +
          'any cases of transition-property ' +
          'and other transition-*'
      )
    }
  }

  /**
   * Remove all non-webkit prefixes and unprefixed params if we have prefixed
   */
  cleanFromUnprefixed(params, prefix) {
    let remove = params
      .map(i => this.findProp(i))
      .filter(i => i.slice(0, prefix.length) === prefix)
      .map(i => this.prefixes.unprefixed(i))

    let result = []
    for (let param of params) {
      let prop = this.findProp(param)
      let p = vendor.prefix(prop)
      if (!remove.includes(prop) && (p === prefix || p === '')) {
        result.push(param)
      }
    }
    return result
  }

  cleanOtherPrefixes(params, prefix) {
    return params.filter(param => {
      let current = vendor.prefix(this.findProp(param))
      return current === '' || current === prefix
    })
  }

  /**
   * Return new param array with different name
   */
  clone(origin, name, param) {
    let result = []
    let changed = false
    for (let i of param) {
      if (!changed && i.type === 'word' && i.value === origin) {
        result.push({ type: 'word', value: name })
        changed = true
      } else {
        result.push(i)
      }
    }
    return result
  }

  /**
   * Add declaration if it is not exist
   */
  cloneBefore(decl, prop, value) {
    if (!this.already(decl, prop, value)) {
      decl.cloneBefore({ prop, value })
    }
  }

  /**
   * Check property for disabled by option
   */
  disabled(prop, prefix) {
    let other = ['order', 'justify-content', 'align-self', 'align-content']
    if (prop.includes('flex') || other.includes(prop)) {
      if (this.prefixes.options.flexbox === false) {
        return true
      }

      if (this.prefixes.options.flexbox === 'no-2009') {
        return prefix.includes('2009')
      }
    }
    return undefined
  }

  /**
   * Find or create separator
   */
  div(params) {
    for (let param of params) {
      for (let node of param) {
        if (node.type === 'div' && node.value === ',') {
          return node
        }
      }
    }
    return { after: ' ', type: 'div', value: ',' }
  }

  /**
   * Find property name
   */
  findProp(param) {
    let prop = param[0].value
    if (/^\d/.test(prop)) {
      for (let [i, token] of param.entries()) {
        if (i !== 0 && token.type === 'word') {
          return token.value
        }
      }
    }
    return prop
  }

  /**
   * Parse properties list to array
   */
  parse(value) {
    let ast = parser(value)
    let result = []
    let param = []
    for (let node of ast.nodes) {
      param.push(node)
      if (node.type === 'div' && node.value === ',') {
        result.push(param)
        param = []
      }
    }
    result.push(param)
    return result.filter(i => i.length > 0)
  }

  /**
   * Process transition and remove all unnecessary properties
   */
  remove(decl) {
    let params = this.parse(decl.value)
    params = params.filter(i => {
      let prop = this.prefixes.remove[this.findProp(i)]
      return !prop || !prop.remove
    })
    let value = this.stringify(params)

    if (decl.value === value) {
      return
    }

    if (params.length === 0) {
      decl.remove()
      return
    }

    let double = decl.parent.some(i => {
      return i.prop === decl.prop && i.value === value
    })
    let smaller = decl.parent.some(i => {
      return i !== decl && i.prop === decl.prop && i.value.length > value.length
    })

    if (double || smaller) {
      decl.remove()
      return
    }

    decl.value = value
  }

  /**
   * Check if transition prop is inside vendor specific rule
   */
  ruleVendorPrefixes(decl) {
    let { parent } = decl

    if (parent.type !== 'rule') {
      return false
    } else if (!parent.selector.includes(':-')) {
      return false
    }

    let selectors = Browsers.prefixes().filter(s =>
      parent.selector.includes(':' + s)
    )

    return selectors.length > 0 ? selectors : false
  }

  /**
   * Return properties string from array
   */
  stringify(params) {
    if (params.length === 0) {
      return ''
    }
    let nodes = []
    for (let param of params) {
      if (param[param.length - 1].type !== 'div') {
        param.push(this.div(params))
      }
      nodes.push(...param)
    }
    if (nodes[0].type === 'div') {
      nodes = nodes.slice(1)
    }
    if (nodes[nodes.length - 1].type === 'div') {
      nodes = nodes.slice(0, +-2 + 1 || undefined)
    }
    return parser.stringify({ nodes })
  }
}

module.exports = Transition
