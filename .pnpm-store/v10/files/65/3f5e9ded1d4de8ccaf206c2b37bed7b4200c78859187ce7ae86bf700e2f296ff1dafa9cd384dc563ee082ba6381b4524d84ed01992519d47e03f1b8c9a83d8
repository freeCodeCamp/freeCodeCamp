/**
 * @import {Encoding, Value} from 'micromark-util-types'
 */

/**
 * @typedef {import('micromark-util-types').Options} Options
 */

import {compile} from './lib/compile.js'
import {parse} from './lib/parse.js'
import {postprocess} from './lib/postprocess.js'
import {preprocess} from './lib/preprocess.js'

export {compile} from './lib/compile.js'
export {parse} from './lib/parse.js'
export {postprocess} from './lib/postprocess.js'
export {preprocess} from './lib/preprocess.js'

/**
 * Compile markdown to HTML.
 *
 * > Note: which encodings are supported depends on the engine.
 * > For info on Node.js, see:
 * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
 *
 * @overload
 * @param {Value} value
 *   Markdown to parse (`string` or `Uint8Array`).
 * @param {Encoding | null | undefined} encoding
 *   Character encoding to understand `value` as when it’s a `Uint8Array`
 *   (`string`, default: `'utf8'`).
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Compiled HTML.
 *
 * @overload
 * @param {Value} value
 *   Markdown to parse (`string` or `Uint8Array`).
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Compiled HTML.
 *
 * @param {Value} value
 *   Markdown to parse (`string` or `Uint8Array`).
 * @param {Encoding | Options | null | undefined} [encoding]
 *   Character encoding to understand `value` as when it’s a `Uint8Array`
 *   (`string`, default: `'utf8'`).
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Compiled HTML.
 */
export function micromark(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compile(options)(
    postprocess(
      parse(options)
        .document()
        .write(preprocess()(value, encoding, true))
    )
  )
}
