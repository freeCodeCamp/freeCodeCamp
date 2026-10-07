/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import { labelEnd } from './label-end.js';

/** @type {Construct} */
export const labelStartLink = {
  name: 'labelStartLink',
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start;

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
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }

  /** @type {State} */
  function after(code) {
    // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
    // remove.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}