let OldValue = require('./old-value')
let Prefixer = require('./prefixer')
let utils = require('./utils')
let vendor = require('./vendor')

class Value extends Prefixer {
  /**
   * Clone decl for each prefixed values
   */
  static save(prefixes, decl) {
    let prop = decl.prop
    let result = []

    for (let prefix in decl._autoprefixerValues) {
      let value = decl._autoprefixerValues[prefix]

      if (value === decl.value) {
        continue
      }

      let item
      let propPrefix = vendor.prefix(prop)

      if (propPrefix === '-pie-') {
        continue
      }

      if (propPrefix === prefix) {
        item = decl.value = value
        result.push(item)
        continue
      }

      let prefixed = prefixes.prefixed(prop, prefix)
      let rule = decl.parent

      if (!rule.every(i => i.prop !== prefixed)) {
        result.push(item)
        continue
      }

      let trimmed = value.replace(/\s+/, ' ')
      let already = rule.some(
        i => i.prop === decl.prop && i.value.replace(/\s+/, ' ') === trimmed
      )

      if (already) {
        result.push(item)
        continue
      }

      let cloned = this.clone(decl, { value })
      item = decl.parent.insertBefore(decl, cloned)

      result.push(item)
    }

    return result
  }

  /**
   * Save values with next prefixed token
   */
  add(decl, prefix) {
    if (!decl._autoprefixerValues) {
      decl._autoprefixerValues = {}
    }
    let value = decl._autoprefixerValues[prefix] || this.value(decl)

    let before
    do {
      before = value
      value = this.replace(value, prefix)
      if (value === false) return
    } while (value !== before)

    decl._autoprefixerValues[prefix] = value
  }

  /**
   * Is declaration need to be prefixed
   */
  check(decl) {
    let value = decl.value
    if (!value.includes(this.name)) {
      return false
    }

    return !!value.match(this.regexp())
  }

  /**
   * Return function to fast find prefixed value
   */
  old(prefix) {
    return new OldValue(this.name, prefix + this.name)
  }

  /**
   * Lazy regexp loading
   */
  regexp() {
    return this.regexpCache || (this.regexpCache = utils.regexp(this.name))
  }

  /**
   * Add prefix to values in string
   */
  replace(string, prefix) {
    return string.replace(this.regexp(), `$1${prefix}$2`)
  }

  /**
   * Get value with comments if it was not changed
   */
  value(decl) {
    if (decl.raws.value && decl.raws.value.value === decl.value) {
      return decl.raws.value.raw
    } else {
      return decl.value
    }
  }
}

module.exports = Value
