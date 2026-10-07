const kind = Symbol.for('bare.url.search-params.kind')

class URLSearchParams {
  static _urls = new WeakMap()

  static get [kind]() {
    return 0 // Compatibility version
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-urlsearchparams
  constructor(init, url = null) {
    this._params = new Map()

    if (url) URLSearchParams._urls.set(this, url)

    if (typeof init === 'string') {
      this._parse(init)
    } else if (init) {
      for (const [name, value] of typeof init[Symbol.iterator] === 'function'
        ? init
        : Object.entries(init)) {
        this.append(name, value)
      }
    }
  }

  get [kind]() {
    return URLSearchParams[kind]
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-size
  get size() {
    return this._params.length
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append(name, value = null) {
    if (value === null) return

    let list = this._params.get(name)

    if (list === undefined) {
      list = []
      this._params.set(name, list)
    }

    list.push(value)

    this._update()
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  delete(name, value = null) {
    if (value === null) this._params.delete(name)
    else {
      let list = this._params.get(name)

      if (list === undefined) return

      list = list.filter((found) => found !== value)

      if (list.length === 0) this._params.delete(name)
      else this._params.set(name, list)
    }

    this._update()
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get(name) {
    const list = this._params.get(name)

    if (list === undefined) return null

    return list[0]
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll(name) {
    const list = this._params.get(name)

    if (list === undefined) return []

    return Array.from(list)
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has(name, value = null) {
    const list = this._params.get(name)

    if (list === undefined) return false

    if (value === null) return true

    return list.includes(value)
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set(name, value = null) {
    if (value === null) this._params.delete(name)
    else this._params.set(name, [value])

    this._update()
  }

  toString() {
    return this._serialize()
  }

  toJSON() {
    return [...this]
  }

  *[Symbol.iterator]() {
    for (const [name, values] of this._params) {
      for (const value of values) yield [name, value]
    }
  }

  [Symbol.for('bare.inspect')]() {
    const object = {
      __proto__: { constructor: URLSearchParams }
    }

    for (const [name, values] of this._params) {
      if (values.length === 1) object[name] = values[0]
      else object[name] = values
    }

    return object
  }

  // https://url.spec.whatwg.org/#concept-urlsearchparams-update
  _update() {
    const url = URLSearchParams._urls.get(this)

    if (url === undefined) return

    url.search = this._serialize()
  }

  // https://url.spec.whatwg.org/#concept-urlencoded-parser
  _parse(input) {
    if (input[0] === '?') input = input.substring(1)

    this._params = new Map()

    for (const sequence of input.split('&')) {
      if (sequence.length === 0) continue

      let i = sequence.indexOf('=')
      if (i === -1) i = sequence.length

      const name = decodeURIComponent(sequence.substring(0, i))
      const value = decodeURIComponent(sequence.substring(i + 1, sequence.length))

      let list = this._params.get(name)

      if (list === undefined) {
        list = []
        this._params.set(name, list)
      }

      list.push(value)
    }
  }

  // https://url.spec.whatwg.org/#concept-urlencoded-serializer
  _serialize() {
    let output = ''

    for (let [name, values] of this._params) {
      name = encodeURIComponent(name)

      for (const value of values) {
        if (output) output += '&'

        output += name + '=' + encodeURIComponent(value)
      }
    }

    return output
  }
}

module.exports = exports = URLSearchParams

exports.isURLSearchParams = function isURLSearchParams(value) {
  if (value instanceof URLSearchParams) return true

  return typeof value === 'object' && value !== null && value[kind] === URLSearchParams[kind]
}
