'use strict'

let CssSyntaxError = require('./css-syntax-error')
let Stringifier = require('./stringifier')
let stringify = require('./stringify')
let { isClean, my } = require('./symbols')

function cloneNode(obj, parent) {
  let cloned = new obj.constructor()

  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      /* c8 ignore next 2 */
      continue
    }
    if (i === 'proxyCache') continue
    let value = obj[i]
    let type = typeof value

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent
    } else if (i === 'source') {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(j => cloneNode(j, cloned))
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value)
      cloned[i] = value
    }
  }

  return cloned
}

function sourceOffset(inputCSS, position) {
  // Not all custom syntaxes support `offset` in `source.start` and `source.end`
  if (position && typeof position.offset !== 'undefined') {
    return position.offset
  }

  let column = 1
  let line = 1
  let offset = 0

  for (let i = 0; i < inputCSS.length; i++) {
    if (line === position.line && column === position.column) {
      offset = i
      break
    }

    if (inputCSS[i] === '\n') {
      column = 1
      line += 1
    } else {
      column += 1
    }
  }

  return offset
}

class Node {
  get proxyOf() {
    return this
  }

  constructor(defaults = {}) {
    this.raws = {}
    this[isClean] = false
    this[my] = true

    for (let name in defaults) {
      if (name === 'nodes') {
        this.nodes = []
        for (let node of defaults[name]) {
          if (typeof node.clone === 'function') {
            this.append(node.clone())
          } else {
            this.append(node)
          }
        }
      } else {
        this[name] = defaults[name]
      }
    }
  }

  addToError(error) {
    error.postcssNode = this
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      )
    }
    return error
  }

  after(add) {
    this.parent.insertAfter(this, add)
    return this
  }

  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name]
    }
    return this
  }

  before(add) {
    this.parent.insertBefore(this, add)
    return this
  }

  cleanRaws(keepBetween) {
    delete this.raws.before
    delete this.raws.after
    if (!keepBetween) delete this.raws.between
  }

  clone(overrides = {}) {
    let cloned = cloneNode(this)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertAfter(this, cloned)
    return cloned
  }

  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertBefore(this, cloned)
    return cloned
  }

  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts)
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      )
    }
    return new CssSyntaxError(message)
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (
          prop === 'prop' ||
          prop === 'value' ||
          prop === 'name' ||
          prop === 'params' ||
          prop === 'important' ||
          /* c8 ignore next */
          prop === 'text'
        ) {
          node.markDirty()
        }
        return true
      }
    }
  }

  /* c8 ignore next 3 */
  markClean() {
    this[isClean] = true
  }

  markDirty() {
    if (this[isClean]) {
      this[isClean] = false
      let next = this
      while ((next = next.parent)) {
        next[isClean] = false
      }
    }
  }

  next() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index + 1]
  }

  positionBy(opts = {}) {
    let pos = this.source.start
    if (opts.index) {
      pos = this.positionInside(opts.index)
    } else if (opts.word) {
      let inputString =
        'document' in this.source.input
          ? this.source.input.document
          : this.source.input.css
      let stringRepresentation = inputString.slice(
        sourceOffset(inputString, this.source.start),
        sourceOffset(inputString, this.source.end)
      )
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) pos = this.positionInside(index)
    }
    return pos
  }

  positionInside(index) {
    let column = this.source.start.column
    let line = this.source.start.line
    let inputString =
      'document' in this.source.input
        ? this.source.input.document
        : this.source.input.css
    let offset = sourceOffset(inputString, this.source.start)
    let end = offset + index

    for (let i = offset; i < end; i++) {
      if (inputString[i] === '\n') {
        column = 1
        line += 1
      } else {
        column += 1
      }
    }

    return { column, line, offset: end }
  }

  prev() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index - 1]
  }

  rangeBy(opts = {}) {
    let inputString =
      'document' in this.source.input
        ? this.source.input.document
        : this.source.input.css
    let start = {
      column: this.source.start.column,
      line: this.source.start.line,
      offset: sourceOffset(inputString, this.source.start)
    }
    let end = this.source.end
      ? {
          column: this.source.end.column + 1,
          line: this.source.end.line,
          offset:
            typeof this.source.end.offset === 'number'
              ? // `source.end.offset` is exclusive, so we don't need to add 1
                this.source.end.offset
              : // Since line/column in this.source.end is inclusive,
                // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
                // So, we add 1 to convert it to exclusive.
                sourceOffset(inputString, this.source.end) + 1
        }
      : {
          column: start.column + 1,
          line: start.line,
          offset: start.offset + 1
        }

    if (opts.word) {
      let stringRepresentation = inputString.slice(
        sourceOffset(inputString, this.source.start),
        sourceOffset(inputString, this.source.end)
      )
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) {
        start = this.positionInside(index)
        end = this.positionInside(index + opts.word.length)
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line,
          offset: sourceOffset(inputString, opts.start)
        }
      } else if (opts.index) {
        start = this.positionInside(opts.index)
      }

      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line,
          offset: sourceOffset(inputString, opts.end)
        }
      } else if (typeof opts.endIndex === 'number') {
        end = this.positionInside(opts.endIndex)
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1)
      }
    }

    if (
      end.line < start.line ||
      (end.line === start.line && end.column <= start.column)
    ) {
      end = {
        column: start.column + 1,
        line: start.line,
        offset: start.offset + 1
      }
    }

    return { end, start }
  }

  raw(prop, defaultType) {
    let str = new Stringifier()
    return str.raw(this, prop, defaultType)
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = undefined
    return this
  }

  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this
      let foundSelf = false
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node)
          bookmark = node
        } else {
          this.parent.insertBefore(bookmark, node)
        }
      }

      if (!foundSelf) {
        this.remove()
      }
    }

    return this
  }

  root() {
    let result = this
    while (result.parent && result.parent.type !== 'document') {
      result = result.parent
    }
    return result
  }

  toJSON(_, inputs) {
    let fixed = {}
    let emitInputs = inputs == null
    inputs = inputs || new Map()
    let inputsNextIndex = 0

    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        /* c8 ignore next 2 */
        continue
      }
      if (name === 'parent' || name === 'proxyCache') continue
      let value = this[name]

      if (Array.isArray(value)) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON(null, inputs)
          } else {
            return i
          }
        })
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs)
      } else if (name === 'source') {
        if (value == null) continue
        let inputId = inputs.get(value.input)
        if (inputId == null) {
          inputId = inputsNextIndex
          inputs.set(value.input, inputsNextIndex)
          inputsNextIndex++
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        }
      } else {
        fixed[name] = value
      }
    }

    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map(input => input.toJSON())
    }

    return fixed
  }

  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor())
    }
    return this.proxyCache
  }

  toString(stringifier = stringify) {
    if (stringifier.stringify) stringifier = stringifier.stringify
    let result = ''
    stringifier(this, i => {
      result += i
    })
    return result
  }

  warn(result, text, opts = {}) {
    let data = { node: this }
    for (let i in opts) data[i] = opts[i]
    return result.warn(text, data)
  }
}

module.exports = Node
Node.default = Node
