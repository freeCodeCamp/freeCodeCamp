let Browsers = require('./browsers')
let Prefixer = require('./prefixer')
let utils = require('./utils')

class Declaration extends Prefixer {
  /**
   * Clone and add prefixes for declaration
   */
  add(decl, prefix, prefixes, result) {
    let prefixed = this.prefixed(decl.prop, prefix)
    if (
      this.isAlready(decl, prefixed) ||
      this.otherPrefixes(decl.value, prefix)
    ) {
      return undefined
    }
    return this.insert(decl, prefix, prefixes, result)
  }

  /**
   * Calculate indentation to create visual cascade
   */
  calcBefore(prefixes, decl, prefix = '') {
    let max = this.maxPrefixed(prefixes, decl)
    let diff = max - utils.removeNote(prefix).length

    let before = decl.raw('before')
    if (diff > 0) {
      before += Array(diff).fill(' ').join('')
    }

    return before
  }

  /**
   * Always true, because we already get prefixer by property name
   */
  check(/* decl */) {
    return true
  }

  /**
   * Clone and insert new declaration
   */
  insert(decl, prefix, prefixes) {
    let cloned = this.set(this.clone(decl), prefix)
    if (!cloned) return undefined

    let already = decl.parent.some(
      i => i.prop === cloned.prop && i.value === cloned.value
    )
    if (already) {
      return undefined
    }

    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }

  /**
   * Did this declaration has this prefix above
   */
  isAlready(decl, prefixed) {
    let already = this.all.group(decl).up(i => i.prop === prefixed)
    if (!already) {
      already = this.all.group(decl).down(i => i.prop === prefixed)
    }
    return already
  }

  /**
   * Return maximum length of possible prefixed property
   */
  maxPrefixed(prefixes, decl) {
    if (decl._autoprefixerMax) {
      return decl._autoprefixerMax
    }

    let max = 0
    for (let prefix of prefixes) {
      prefix = utils.removeNote(prefix)
      if (prefix.length > max) {
        max = prefix.length
      }
    }
    decl._autoprefixerMax = max

    return decl._autoprefixerMax
  }

  /**
   * Should we use visual cascade for prefixes
   */
  needCascade(decl) {
    if (!decl._autoprefixerCascade) {
      decl._autoprefixerCascade =
        this.all.options.cascade !== false && decl.raw('before').includes('\n')
    }
    return decl._autoprefixerCascade
  }

  /**
   * Return unprefixed version of property
   */
  normalize(prop) {
    return prop
  }

  /**
   * Return list of prefixed properties to clean old prefixes
   */
  old(prop, prefix) {
    return [this.prefixed(prop, prefix)]
  }

  /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */
  otherPrefixes(value, prefix) {
    for (let other of Browsers.prefixes()) {
      if (other === prefix) {
        continue
      }
      if (value.includes(other)) {
        return value.replace(/var\([^)]+\)/, '').includes(other)
      }
    }
    return false
  }

  /**
   * Return prefixed version of property
   */
  prefixed(prop, prefix) {
    return prefix + prop
  }

  /**
   * Add spaces for visual cascade
   */
  process(decl, result) {
    if (!this.needCascade(decl)) {
      super.process(decl, result)
      return
    }

    let prefixes = super.process(decl, result)

    if (!prefixes || !prefixes.length) {
      return
    }

    this.restoreBefore(decl)
    decl.raws.before = this.calcBefore(prefixes, decl)
  }

  /**
   * Remove visual cascade
   */
  restoreBefore(decl) {
    let lines = decl.raw('before').split('\n')
    let min = lines[lines.length - 1]

    this.all.group(decl).up(prefixed => {
      let array = prefixed.raw('before').split('\n')
      let last = array[array.length - 1]
      if (last.length < min.length) {
        min = last
      }
    })

    lines[lines.length - 1] = min
    decl.raws.before = lines.join('\n')
  }

  /**
   * Set prefix to declaration
   */
  set(decl, prefix) {
    decl.prop = this.prefixed(decl.prop, prefix)
    return decl
  }
}

module.exports = Declaration
