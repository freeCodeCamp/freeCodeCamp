/**
 * @import {
 *   Code,
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {markdownLineEnding, markdownSpace} from 'micromark-util-character'
import {codes, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const setextUnderline = {
  name: 'setextUnderline',
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
}

/** @type {Resolver} */
function resolveToSetextUnderline(events, context) {
  // To do: resolve like `markdown-rs`.
  let index = events.length
  /** @type {number | undefined} */
  let content
  /** @type {number | undefined} */
  let text
  /** @type {number | undefined} */
  let definition

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === types.content) {
        content = index
        break
      }

      if (events[index][1].type === types.paragraph) {
        text = index
      }
    }
    // Exit
    else {
      if (events[index][1].type === types.content) {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === types.definition) {
        definition = index
      }
    }
  }

  assert(text !== undefined, 'expected a `text` index to be found')
  assert(content !== undefined, 'expected a `text` index to be found')
  assert(events[content][2] === context, 'enter context should be same')
  assert(
    events[events.length - 1][2] === context,
    'enter context should be same'
  )
  const heading = {
    type: types.setextHeading,
    start: {...events[content][1].start},
    end: {...events[events.length - 1][1].end}
  }

  // Change the paragraph to setext heading text.
  events[text][1].type = types.setextHeadingText

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = {...events[definition][1].end}
  } else {
    events[content][1] = heading
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context])

  return events
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    let index = self.events.length
    /** @type {boolean | undefined} */
    let paragraph

    assert(
      code === codes.dash || code === codes.equalsTo,
      'expected `=` or `-`'
    )

    // Find an opening.
    while (index--) {
      // Skip enter/exit of line ending, line prefix, and content.
      // We can now either have a definition or a paragraph.
      if (
        self.events[index][1].type !== types.lineEnding &&
        self.events[index][1].type !== types.linePrefix &&
        self.events[index][1].type !== types.content
      ) {
        paragraph = self.events[index][1].type === types.paragraph
        break
      }
    }

    // To do: handle lazy/pierce like `markdown-rs`.
    // To do: parse indent like `markdown-rs`.
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter(types.setextHeadingLine)
      marker = code
      return before(code)
    }

    return nok(code)
  }

  /**
   * After optional whitespace, at `-` or `=`.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter(types.setextHeadingLineSequence)
    return inside(code)
  }

  /**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code)
      return inside
    }

    effects.exit(types.setextHeadingLineSequence)

    return markdownSpace(code)
      ? factorySpace(effects, after, types.lineSuffix)(code)
      : after(code)
  }

  /**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.setextHeadingLine)
      return ok(code)
    }

    return nok(code)
  }
}
