/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

import {factorySpace} from 'micromark-factory-space'
import {markdownLineEnding, markdownSpace} from 'micromark-util-character'
/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   line endings or spaces in markdown are often optional, in which case this
 *     factory can be used and `ok` will be switched to whether spaces were found
 *     or not
 * *   one line ending or space can be detected with
 *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @returns {State}
 *   Start state.
 */
export function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen
  return start

  /** @type {State} */
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      seen = true
      return start
    }
    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }
    return ok(code)
  }
}
