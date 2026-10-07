let Prefixer = require('./prefixer')

class AtRule extends Prefixer {
  /**
   * Clone and add prefixes for at-rule
   */
  add(rule, prefix) {
    let prefixed = prefix + rule.name

    let already = rule.parent.some(
      i => i.name === prefixed && i.params === rule.params
    )
    if (already) {
      return undefined
    }

    let cloned = this.clone(rule, { name: prefixed })
    return rule.parent.insertBefore(rule, cloned)
  }

  /**
   * Clone node with prefixes
   */
  process(node) {
    let parent = this.parentPrefix(node)

    for (let prefix of this.prefixes) {
      if (!parent || parent === prefix) {
        this.add(node, prefix)
      }
    }
  }
}

module.exports = AtRule
