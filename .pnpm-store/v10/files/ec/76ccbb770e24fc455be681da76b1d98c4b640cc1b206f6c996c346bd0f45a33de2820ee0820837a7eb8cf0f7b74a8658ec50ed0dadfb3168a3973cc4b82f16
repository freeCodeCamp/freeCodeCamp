let parser = require('postcss-value-parser')

let OldValue = require('../old-value')
let utils = require('../utils')
let Value = require('../value')

let IS_DIRECTION = /top|left|right|bottom/gi

class Gradient extends Value {
  /**
   * Do not add non-webkit prefixes for list-style and object
   */
  add(decl, prefix) {
    let p = decl.prop
    if (p.includes('mask')) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else if (
      p === 'list-style' ||
      p === 'list-style-image' ||
      p === 'content'
    ) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else {
      return super.add(decl, prefix)
    }
    return undefined
  }

  /**
   * Get div token from exists parameters
   */
  cloneDiv(params) {
    for (let i of params) {
      if (i.type === 'div' && i.value === ',') {
        return i
      }
    }
    return { after: ' ', type: 'div', value: ',' }
  }

  /**
   * Change colors syntax to old webkit
   */
  colorStops(params) {
    let result = []
    for (let i = 0; i < params.length; i++) {
      let pos
      let param = params[i]
      let item
      if (i === 0) {
        continue
      }

      let color = parser.stringify(param[0])
      if (param[1] && param[1].type === 'word') {
        pos = param[1].value
      } else if (param[2] && param[2].type === 'word') {
        pos = param[2].value
      }

      let stop
      if (i === 1 && (!pos || pos === '0%')) {
        stop = `from(${color})`
      } else if (i === params.length - 1 && (!pos || pos === '100%')) {
        stop = `to(${color})`
      } else if (pos) {
        stop = `color-stop(${pos}, ${color})`
      } else {
        stop = `color-stop(${color})`
      }

      let div = param[param.length - 1]
      params[i] = [{ type: 'word', value: stop }]
      if (div.type === 'div' && div.value === ',') {
        item = params[i].push(div)
      }
      result.push(item)
    }
    return result
  }

  /**
   * Change new direction to old
   */
  convertDirection(params) {
    if (params.length > 0) {
      if (params[0].value === 'to') {
        this.fixDirection(params)
      } else if (params[0].value.includes('deg')) {
        this.fixAngle(params)
      } else if (this.isRadial(params)) {
        this.fixRadial(params)
      }
    }
    return params
  }

  /**
   * Add 90 degrees
   */
  fixAngle(params) {
    let first = params[0].value
    first = parseFloat(first)
    first = Math.abs(450 - first) % 360
    first = this.roundFloat(first, 3)
    params[0].value = `${first}deg`
  }

  /**
   * Replace `to top left` to `bottom right`
   */
  fixDirection(params) {
    params.splice(0, 2)

    for (let param of params) {
      if (param.type === 'div') {
        break
      }
      if (param.type === 'word') {
        param.value = this.revertDirection(param.value)
      }
    }
  }

  /**
   * Fix radial direction syntax
   */
  fixRadial(params) {
    let first = []
    let second = []
    let a, b, c, i, next

    for (i = 0; i < params.length - 2; i++) {
      a = params[i]
      b = params[i + 1]
      c = params[i + 2]
      if (a.type === 'space' && b.value === 'at' && c.type === 'space') {
        next = i + 3
        break
      } else {
        first.push(a)
      }
    }

    let div
    for (i = next; i < params.length; i++) {
      if (params[i].type === 'div') {
        div = params[i]
        break
      } else {
        second.push(params[i])
      }
    }

    params.splice(0, i, ...second, div, ...first)
  }

  /**
   * Look for at word
   */
  isRadial(params) {
    let state = 'before'
    for (let param of params) {
      if (state === 'before' && param.type === 'space') {
        state = 'at'
      } else if (state === 'at' && param.value === 'at') {
        state = 'after'
      } else if (state === 'after' && param.type === 'space') {
        return true
      } else if (param.type === 'div') {
        break
      } else {
        state = 'before'
      }
    }
    return false
  }

  /**
   * Replace old direction to new
   */
  newDirection(params) {
    if (params[0].value === 'to') {
      return params
    }
    IS_DIRECTION.lastIndex = 0 // reset search index of global regexp
    if (!IS_DIRECTION.test(params[0].value)) {
      return params
    }

    params.unshift(
      {
        type: 'word',
        value: 'to'
      },
      {
        type: 'space',
        value: ' '
      }
    )

    for (let i = 2; i < params.length; i++) {
      if (params[i].type === 'div') {
        break
      }
      if (params[i].type === 'word') {
        params[i].value = this.revertDirection(params[i].value)
      }
    }

    return params
  }

  /**
   * Normalize angle
   */
  normalize(nodes, gradientName) {
    if (!nodes[0]) return nodes

    if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 400)
    } else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 2 * Math.PI)
    } else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 1)
    } else if (nodes[0].value.includes('deg')) {
      let num = parseFloat(nodes[0].value)
      num = (num % 360 + 360) % 360
      nodes[0].value = `${num}deg`
    }

    if (
      gradientName === 'linear-gradient' ||
      gradientName === 'repeating-linear-gradient'
    ) {
      let direction = nodes[0].value

      // Unitless zero for `<angle>` values are allowed in CSS gradients and transforms.
      // Spec: https://github.com/w3c/csswg-drafts/commit/602789171429b2231223ab1e5acf8f7f11652eb3
      if (direction === '0deg' || direction === '0') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'top')
      } else if (direction === '90deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'right')
      } else if (direction === '180deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'bottom') // default value
      } else if (direction === '270deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'left')
      }
    }

    return nodes
  }

  /**
   * Convert angle unit to deg
   */
  normalizeUnit(str, full) {
    let num = parseFloat(str)
    let deg = (num / full) * 360
    return `${deg}deg`
  }

  /**
   * Remove old WebKit gradient too
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      let type
      if (this.name === 'linear-gradient') {
        type = 'linear'
      } else if (this.name === 'repeating-linear-gradient') {
        type = 'repeating-linear'
      } else if (this.name === 'repeating-radial-gradient') {
        type = 'repeating-radial'
      } else {
        type = 'radial'
      }
      let string = '-gradient'
      let regexp = utils.regexp(
        `-webkit-(${type}-gradient|gradient\\(\\s*${type})`,
        false
      )

      return new OldValue(this.name, prefix + this.name, string, regexp)
    } else {
      return super.old(prefix)
    }
  }

  /**
   * Change direction syntax to old webkit
   */
  oldDirection(params) {
    let div = this.cloneDiv(params[0])

    if (params[0][0].value !== 'to') {
      return params.unshift([
        { type: 'word', value: Gradient.oldDirections.bottom },
        div
      ])
    } else {
      let words = []
      for (let node of params[0].slice(2)) {
        if (node.type === 'word') {
          words.push(node.value.toLowerCase())
        }
      }

      words = words.join(' ')
      let old = Gradient.oldDirections[words] || words

      params[0] = [{ type: 'word', value: old }, div]
      return params[0]
    }
  }

  /**
   * Convert to old webkit syntax
   */
  oldWebkit(node) {
    let { nodes } = node
    let string = parser.stringify(node.nodes)

    if (this.name !== 'linear-gradient') {
      return false
    }
    if (nodes[0] && nodes[0].value.includes('deg')) {
      return false
    }
    if (
      string.includes('px') ||
      string.includes('-corner') ||
      string.includes('-side')
    ) {
      return false
    }
    if (string.includes('var(')) {
      return false
    }

    let params = [[]]
    for (let i of nodes) {
      params[params.length - 1].push(i)
      if (i.type === 'div' && i.value === ',') {
        params.push([])
      }
    }

    this.oldDirection(params)
    this.colorStops(params)

    node.nodes = []
    for (let param of params) {
      node.nodes.push(...param)
    }

    node.nodes.unshift(
      { type: 'word', value: 'linear' },
      this.cloneDiv(node.nodes)
    )
    node.value = '-webkit-gradient'

    return true
  }

  /**
   * Change degrees for webkit prefix
   */
  replace(string, prefix) {
    let ast = parser(string)
    for (let node of ast.nodes) {
      let gradientName = this.name // gradient name
      if (node.type === 'function' && node.value === gradientName) {
        node.nodes = this.newDirection(node.nodes)
        node.nodes = this.normalize(node.nodes, gradientName)
        if (prefix === '-webkit- old') {
          let changes = this.oldWebkit(node)
          if (!changes) {
            return false
          }
        } else {
          node.nodes = this.convertDirection(node.nodes)
          node.value = prefix + node.value
        }
      }
    }
    return ast.toString()
  }

  /**
   * Replace first token
   */
  replaceFirst(params, ...words) {
    let prefix = words.map(i => {
      if (i === ' ') {
        return { type: 'space', value: i }
      }
      return { type: 'word', value: i }
    })
    return prefix.concat(params.slice(1))
  }

  revertDirection(word) {
    return Gradient.directions[word.toLowerCase()] || word
  }

  /**
   * Round float and save digits under dot
   */
  roundFloat(float, digits) {
    return parseFloat(float.toFixed(digits))
  }
}

Gradient.names = [
  'linear-gradient',
  'repeating-linear-gradient',
  'radial-gradient',
  'repeating-radial-gradient'
]

Gradient.directions = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom' // default value
}

// Direction to replace
Gradient.oldDirections = {
  'bottom': 'left top, left bottom',
  'bottom left': 'right top, left bottom',
  'bottom right': 'left top, right bottom',
  'left': 'right top, left top',

  'left bottom': 'right top, left bottom',
  'left top': 'right bottom, left top',
  'right': 'left top, right top',
  'right bottom': 'left top, right bottom',
  'right top': 'left bottom, right top',
  'top': 'left bottom, left top',
  'top left': 'right bottom, left top',
  'top right': 'left bottom, right top'
}

module.exports = Gradient
