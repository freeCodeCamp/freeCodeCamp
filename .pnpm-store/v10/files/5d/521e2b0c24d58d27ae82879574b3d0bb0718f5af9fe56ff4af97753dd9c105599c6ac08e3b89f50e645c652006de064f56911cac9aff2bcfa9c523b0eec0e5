let Browsers = require('./browsers')
let utils = require('./utils')
let vendor = require('./vendor')

/**
 * Recursively clone objects
 */
function clone(obj, parent) {
  let cloned = new obj.constructor()

  for (let i of Object.keys(obj || {})) {
    let value = obj[i]
    if (i === 'parent' && typeof value === 'object') {
      if (parent) {
        cloned[i] = parent
      }
    } else if (i === 'source' || i === null) {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(x => clone(x, cloned))
    } else if (
      i !== '_autoprefixerPrefix' &&
      i !== '_autoprefixerValues' &&
      i !== 'proxyCache'
    ) {
      if (typeof value === 'object' && value !== null) {
        value = clone(value, cloned)
      }
      cloned[i] = value
    }
  }

  return cloned
}

class Prefixer {
  constructor(name, prefixes, all) {
    this.prefixes = prefixes
    this.name = name
    this.all = all
  }

  /**
   * Clone node and clean autprefixer custom caches
   */
  static clone(node, overrides) {
    let cloned = clone(node)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  /**
   * Add hack to selected names
   */
  static hack(klass) {
    if (!this.hacks) {
      this.hacks = {}
    }
    return klass.names.map(name => {
      this.hacks[name] = klass
      return this.hacks[name]
    })
  }

  /**
   * Load hacks for some names
   */
  static load(name, prefixes, all) {
    let Klass = this.hacks && this.hacks[name]
    if (Klass) {
      return new Klass(name, prefixes, all)
    } else {
      return new this(name, prefixes, all)
    }
  }

  /**
   * Shortcut for Prefixer.clone
   */
  clone(node, overrides) {
    return Prefixer.clone(node, overrides)
  }

  /**
   * Find prefix in node parents
   */
  parentPrefix(node) {
    let prefix

    if (typeof node._autoprefixerPrefix !== 'undefined') {
      prefix = node._autoprefixerPrefix
    } else if (node.type === 'decl' && node.prop[0] === '-') {
      prefix = vendor.prefix(node.prop)
    } else if (node.type === 'root') {
      prefix = false
    } else if (
      node.type === 'rule' &&
      node.selector.includes(':-') &&
      /:(-\w+-)/.test(node.selector)
    ) {
      prefix = node.selector.match(/:(-\w+-)/)[1]
    } else if (node.type === 'atrule' && node.name[0] === '-') {
      prefix = vendor.prefix(node.name)
    } else {
      prefix = this.parentPrefix(node.parent)
    }

    if (!Browsers.prefixes().includes(prefix)) {
      prefix = false
    }

    node._autoprefixerPrefix = prefix

    return node._autoprefixerPrefix
  }

  /**
   * Clone node with prefixes
   */
  process(node, result) {
    if (!this.check(node)) {
      return undefined
    }

    let parent = this.parentPrefix(node)

    let prefixes = this.prefixes.filter(
      prefix => !parent || parent === utils.removeNote(prefix)
    )

    let added = []
    for (let prefix of prefixes) {
      if (this.add(node, prefix, added.concat([prefix]), result)) {
        added.push(prefix)
      }
    }

    return added
  }
}

module.exports = Prefixer
