/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/

/**
 * new Ruler()
 **/
function Ruler () {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = []

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null
}

// Helper methods, should not be used directly

// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (let i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i
    }
  }
  return -1
}

// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  const self = this
  const chains = ['']

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName)
      }
    })
  })

  self.__cache__ = {}

  chains.forEach(function (chain) {
    self.__cache__[chain] = []
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return }

      if (chain && rule.alt.indexOf(chain) < 0) { return }

      self.__cache__[chain].push(rule.fn)
    })
  })
}

/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  const index = this.__find__(name)
  const opt = options || {}

  if (index === -1) { throw new Error('Parser rule not found: ' + name) }

  this.__rules__[index].fn = fn
  this.__rules__[index].alt = opt.alt || []
  this.__cache__ = null
}

/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  const index = this.__find__(beforeName)
  const opt = options || {}

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName) }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  })

  this.__cache__ = null
}

/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  const index = this.__find__(afterName)
  const opt = options || {}

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName) }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  })

  this.__cache__ = null
}

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  const opt = options || {}

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  })

  this.__cache__ = null
}

/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [list] }

  const result = []

  // Search by name and enable
  list.forEach(function (name) {
    const idx = this.__find__(name)

    if (idx < 0) {
      if (ignoreInvalid) { return }
      throw new Error('Rules manager: invalid rule name ' + name)
    }
    this.__rules__[idx].enabled = true
    result.push(name)
  }, this)

  this.__cache__ = null
  return result
}

/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [list] }

  this.__rules__.forEach(function (rule) { rule.enabled = false })

  this.enable(list, ignoreInvalid)
}

/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [list] }

  const result = []

  // Search by name and disable
  list.forEach(function (name) {
    const idx = this.__find__(name)

    if (idx < 0) {
      if (ignoreInvalid) { return }
      throw new Error('Rules manager: invalid rule name ' + name)
    }
    this.__rules__[idx].enabled = false
    result.push(name)
  }, this)

  this.__cache__ = null
  return result
}

/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__()
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || []
}

export default Ruler
