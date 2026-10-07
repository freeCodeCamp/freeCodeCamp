let { list } = require('postcss')

let Browsers = require('./browsers')
let OldSelector = require('./old-selector')
let Prefixer = require('./prefixer')
let utils = require('./utils')

class Selector extends Prefixer {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)
    this.regexpCache = new Map()
  }

  /**
   * Clone and add prefixes for at-rule
   */
  add(rule, prefix) {
    let prefixeds = this.prefixeds(rule)

    if (this.already(rule, prefixeds, prefix)) {
      return
    }

    let cloned = this.clone(rule, { selector: prefixeds[this.name][prefix] })
    rule.parent.insertBefore(rule, cloned)
  }

  /**
   * Is rule already prefixed before
   */
  already(rule, prefixeds, prefix) {
    let index = rule.parent.index(rule) - 1

    while (index >= 0) {
      let before = rule.parent.nodes[index]

      if (before.type !== 'rule') {
        return false
      }

      let some = false
      for (let key in prefixeds[this.name]) {
        let prefixed = prefixeds[this.name][key]
        if (before.selector === prefixed) {
          if (prefix === key) {
            return true
          } else {
            some = true
            break
          }
        }
      }
      if (!some) {
        return false
      }

      index -= 1
    }

    return false
  }

  /**
   * Is rule selectors need to be prefixed
   */
  check(rule) {
    if (rule.selector.includes(this.name)) {
      return !!rule.selector.match(this.regexp())
    }

    return false
  }

  /**
   * Return function to fast find prefixed selector
   */
  old(prefix) {
    return new OldSelector(this, prefix)
  }

  /**
   * All possible prefixes
   */
  possible() {
    return Browsers.prefixes()
  }

  /**
   * Return prefixed version of selector
   */
  prefixed(prefix) {
    return this.name.replace(/^(\W*)/, `$1${prefix}`)
  }

  /**
   * Return all possible selector prefixes
   */
  prefixeds(rule) {
    if (rule._autoprefixerPrefixeds) {
      if (rule._autoprefixerPrefixeds[this.name]) {
        return rule._autoprefixerPrefixeds
      }
    } else {
      rule._autoprefixerPrefixeds = {}
    }

    let prefixeds = {}
    if (rule.selector.includes(',')) {
      let ruleParts = list.comma(rule.selector)
      let toProcess = ruleParts.filter(el => el.includes(this.name))

      for (let prefix of this.possible()) {
        prefixeds[prefix] = toProcess
          .map(el => this.replace(el, prefix))
          .join(', ')
      }
    } else {
      for (let prefix of this.possible()) {
        prefixeds[prefix] = this.replace(rule.selector, prefix)
      }
    }

    rule._autoprefixerPrefixeds[this.name] = prefixeds
    return rule._autoprefixerPrefixeds
  }

  /**
   * Lazy loadRegExp for name
   */
  regexp(prefix) {
    if (!this.regexpCache.has(prefix)) {
      let name = prefix ? this.prefixed(prefix) : this.name
      this.regexpCache.set(
        prefix,
        new RegExp(`(^|[^:"'=])${utils.escapeRegexp(name)}`, 'gi')
      )
    }

    return this.regexpCache.get(prefix)
  }

  /**
   * Replace selectors by prefixed one
   */
  replace(selector, prefix) {
    return selector.replace(this.regexp(), `$1${this.prefixed(prefix)}`)
  }
}

module.exports = Selector
