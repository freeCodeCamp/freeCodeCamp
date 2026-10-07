class OldSelector {
  constructor(selector, prefix) {
    this.prefix = prefix
    this.prefixed = selector.prefixed(this.prefix)
    this.regexp = selector.regexp(this.prefix)

    this.prefixeds = selector
      .possible()
      .map(x => [selector.prefixed(x), selector.regexp(x)])

    this.unprefixed = selector.name
    this.nameRegexp = selector.regexp()
  }

  /**
   * Does rule contain an unnecessary prefixed selector
   */
  check(rule) {
    if (!rule.selector.includes(this.prefixed)) {
      return false
    }
    if (!rule.selector.match(this.regexp)) {
      return false
    }
    if (this.isHack(rule)) {
      return false
    }
    return true
  }

  /**
   * Is rule a hack without unprefixed version bottom
   */
  isHack(rule) {
    let index = rule.parent.index(rule) + 1
    let rules = rule.parent.nodes

    while (index < rules.length) {
      let before = rules[index].selector
      if (!before) {
        return true
      }

      if (before.includes(this.unprefixed) && before.match(this.nameRegexp)) {
        return false
      }

      let some = false
      for (let [string, regexp] of this.prefixeds) {
        if (before.includes(string) && before.match(regexp)) {
          some = true
          break
        }
      }

      if (!some) {
        return true
      }

      index += 1
    }

    return true
  }
}

module.exports = OldSelector
