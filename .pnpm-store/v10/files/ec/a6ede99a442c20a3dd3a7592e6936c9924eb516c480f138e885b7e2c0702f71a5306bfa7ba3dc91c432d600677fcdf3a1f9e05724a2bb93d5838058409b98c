/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/

import Ruler from './ruler.mjs'
import StateInline from './rules_inline/state_inline.mjs'

import r_text from './rules_inline/text.mjs'
import r_linkify from './rules_inline/linkify.mjs'
import r_newline from './rules_inline/newline.mjs'
import r_escape from './rules_inline/escape.mjs'
import r_backticks from './rules_inline/backticks.mjs'
import r_strikethrough from './rules_inline/strikethrough.mjs'
import r_emphasis from './rules_inline/emphasis.mjs'
import r_link from './rules_inline/link.mjs'
import r_image from './rules_inline/image.mjs'
import r_autolink from './rules_inline/autolink.mjs'
import r_html_inline from './rules_inline/html_inline.mjs'
import r_entity from './rules_inline/entity.mjs'

import r_balance_pairs from './rules_inline/balance_pairs.mjs'
import r_fragments_join from './rules_inline/fragments_join.mjs'

// Parser rules

const _rules = [
  ['text',            r_text],
  ['linkify',         r_linkify],
  ['newline',         r_newline],
  ['escape',          r_escape],
  ['backticks',       r_backticks],
  ['strikethrough',   r_strikethrough.tokenize],
  ['emphasis',        r_emphasis.tokenize],
  ['link',            r_link],
  ['image',           r_image],
  ['autolink',        r_autolink],
  ['html_inline',     r_html_inline],
  ['entity',          r_entity]
]

// `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//
const _rules2 = [
  ['balance_pairs',   r_balance_pairs],
  ['strikethrough',   r_strikethrough.postProcess],
  ['emphasis',        r_emphasis.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ['fragments_join',  r_fragments_join]
]

/**
 * new ParserInline()
 **/
function ParserInline () {
  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler()

  for (let i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1])
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler()

  for (let i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1])
  }
}

// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  const pos = state.pos
  const rules = this.ruler.getRules('')
  const len = rules.length
  const maxNesting = state.md.options.maxNesting
  const cache = state.cache

  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos]
    return
  }

  let ok = false

  if (state.level < maxNesting) {
    for (let i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++
      ok = rules[i](state, true)
      state.level--

      if (ok) {
        if (pos >= state.pos) { throw new Error("inline rule didn't increment state.pos") }
        break
      }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax
  }

  if (!ok) { state.pos++ }
  cache[pos] = state.pos
}

// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  const rules = this.ruler.getRules('')
  const len = rules.length
  const end = state.posMax
  const maxNesting = state.md.options.maxNesting

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    const prevPos = state.pos
    let ok = false

    if (state.level < maxNesting) {
      for (let i = 0; i < len; i++) {
        ok = rules[i](state, false)
        if (ok) {
          if (prevPos >= state.pos) { throw new Error("inline rule didn't increment state.pos") }
          break
        }
      }
    }

    if (ok) {
      if (state.pos >= end) { break }
      continue
    }

    state.pending += state.src[state.pos++]
  }

  if (state.pending) {
    state.pushPending()
  }
}

/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  const state = new this.State(str, md, env, outTokens)

  this.tokenize(state)

  const rules = this.ruler2.getRules('')
  const len = rules.length

  for (let i = 0; i < len; i++) {
    rules[i](state)
  }
}

ParserInline.prototype.State = StateInline

export default ParserInline
