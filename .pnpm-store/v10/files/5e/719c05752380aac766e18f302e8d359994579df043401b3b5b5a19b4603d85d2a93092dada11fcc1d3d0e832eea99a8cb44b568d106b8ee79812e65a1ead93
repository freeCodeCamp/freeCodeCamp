/**
 * @import {
 *   Create,
 *   FullNormalizedExtension,
 *   InitialConstruct,
 *   ParseContext,
 *   ParseOptions
 * } from 'micromark-util-types'
 */

import { combineExtensions } from 'micromark-util-combine-extensions';
import { content } from './initialize/content.js';
import { document } from './initialize/document.js';
import { flow } from './initialize/flow.js';
import { string, text } from './initialize/text.js';
import * as defaultConstructs from './constructs.js';
import { createTokenizer } from './create-tokenizer.js';

/**
 * @param {ParseOptions | null | undefined} [options]
 *   Configuration (optional).
 * @returns {ParseContext}
 *   Parser.
 */
export function parse(options) {
  const settings = options || {};
  const constructs = /** @type {FullNormalizedExtension} */
  combineExtensions([defaultConstructs, ...(settings.extensions || [])]);

  /** @type {ParseContext} */
  const parser = {
    constructs,
    content: create(content),
    defined: [],
    document: create(document),
    flow: create(flow),
    lazy: {},
    string: create(string),
    text: create(text)
  };
  return parser;

  /**
   * @param {InitialConstruct} initial
   *   Construct to start with.
   * @returns {Create}
   *   Create a tokenizer.
   */
  function create(initial) {
    return creator;
    /** @type {Create} */
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}