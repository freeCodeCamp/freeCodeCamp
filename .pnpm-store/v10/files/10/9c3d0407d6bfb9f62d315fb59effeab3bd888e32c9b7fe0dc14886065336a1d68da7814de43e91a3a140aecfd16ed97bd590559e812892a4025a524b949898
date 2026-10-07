/**
 * @import {Options} from 'micromark-extension-math'
 * @import {Extension} from 'micromark-util-types'
 */

import { mathFlow } from './math-flow.js';
import { mathText } from './math-text.js';

/**
 * Create an extension for `micromark` to enable math syntax.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions`, to
 *   enable math syntax.
 */
export function math(options) {
  return {
    flow: {
      [36]: mathFlow
    },
    text: {
      [36]: mathText(options)
    }
  };
}