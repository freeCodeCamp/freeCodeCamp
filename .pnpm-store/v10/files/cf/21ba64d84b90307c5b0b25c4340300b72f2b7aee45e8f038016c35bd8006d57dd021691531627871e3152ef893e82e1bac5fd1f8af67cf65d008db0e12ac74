/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {codes, types} from 'micromark-util-symbol'
import {labelEnd} from './label-end.js'

/** @type {Construct} */
export const labelStartLink = {
  name: 'labelStartLink',
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this

  return start

  /**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`')
    effects.enter(types.labelLink)
    effects.enter(types.labelMarker)
    effects.consume(code)
    effects.exit(types.labelMarker)
    effects.exit(types.labelLink)
    return after
  }

  /** @type {State} */
  function after(code) {
    // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
    // remove.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === codes.caret &&
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}
