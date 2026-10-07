/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/

import { assign, unescapeAll, escapeHtml } from './common/utils.mjs'

const default_rules = {}

default_rules.code_inline = function (tokens, idx, options, env, slf) {
  const token = tokens[idx]

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(token.content) +
          '</code>'
}

default_rules.code_block = function (tokens, idx, options, env, slf) {
  const token = tokens[idx]

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n'
}

default_rules.fence = function (tokens, idx, options, env, slf) {
  const token = tokens[idx]
  const info = token.info ? unescapeAll(token.info).trim() : ''
  let langName = ''
  let langAttrs = ''

  if (info) {
    const arr = info.split(/(\s+)/g)
    langName = arr[0]
    langAttrs = arr.slice(2).join('')
  }

  let highlighted
  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content)
  } else {
    highlighted = escapeHtml(token.content)
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n'
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    const i = token.attrIndex('class')
    const tmpAttrs = token.attrs ? token.attrs.slice() : []

    if (i < 0) {
      tmpAttrs.push(['class', options.langPrefix + langName])
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice()
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName
    }

    // Fake token just to render attributes
    const tmpToken = {
      attrs: tmpAttrs
    }

    return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>\n`
  }

  return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>\n`
}

default_rules.image = function (tokens, idx, options, env, slf) {
  const token = tokens[idx]

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env)

  return slf.renderToken(tokens, idx, options)
}

default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n'
}
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n'
}

default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content)
}

default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content
}
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content
}

/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer () {
  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules)
}

/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs (token) {
  let i, l, result

  if (!token.attrs) { return '' }

  result = ''

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"'
  }

  return result
}

/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken (tokens, idx, options) {
  const token = tokens[idx]
  let result = ''

  // Tight list paragraphs
  if (token.hidden) {
    return ''
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n'
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token)

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /'
  }

  // Check if we need to add a newline after this tag
  let needLf = false
  if (token.block) {
    needLf = true

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        const nextToken = tokens[idx + 1]

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false
        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false
        }
      }
    }
  }

  result += needLf ? '>\n' : '>'

  return result
}

/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  let result = ''
  const rules = this.rules

  for (let i = 0, len = tokens.length; i < len; i++) {
    const type = tokens[i].type

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this)
    } else {
      result += this.renderToken(tokens, i, options)
    }
  }

  return result
}

/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  let result = ''

  for (let i = 0, len = tokens.length; i < len; i++) {
    switch (tokens[i].type) {
      case 'text':
        result += tokens[i].content
        break
      case 'image':
        result += this.renderInlineAsText(tokens[i].children, options, env)
        break
      case 'html_inline':
      case 'html_block':
        result += tokens[i].content
        break
      case 'softbreak':
      case 'hardbreak':
        result += '\n'
        break
      default:
        // all other tokens are skipped
    }
  }

  return result
}

/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  let result = ''
  const rules = this.rules

  for (let i = 0, len = tokens.length; i < len; i++) {
    const type = tokens[i].type

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env)
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this)
    } else {
      result += this.renderToken(tokens, i, options, env)
    }
  }

  return result
}

export default Renderer
