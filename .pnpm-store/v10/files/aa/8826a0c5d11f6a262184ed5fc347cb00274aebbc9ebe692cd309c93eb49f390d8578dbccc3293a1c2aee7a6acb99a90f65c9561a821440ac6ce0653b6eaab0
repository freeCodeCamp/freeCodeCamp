/**
 * @import {Point} from 'unist'
 * @import {Options} from '../index.js'
 */

import {characterEntitiesLegacy} from 'character-entities-legacy'
import {characterReferenceInvalid} from 'character-reference-invalid'
import {isDecimal} from 'is-decimal'
import {isHexadecimal} from 'is-hexadecimal'
import {isAlphanumerical} from 'is-alphanumerical'
import {decodeNamedCharacterReference} from 'decode-named-character-reference'

// Warning messages.
const messages = [
  '',
  /* 1: Non terminated (named) */
  'Named character references must be terminated by a semicolon',
  /* 2: Non terminated (numeric) */
  'Numeric character references must be terminated by a semicolon',
  /* 3: Empty (named) */
  'Named character references cannot be empty',
  /* 4: Empty (numeric) */
  'Numeric character references cannot be empty',
  /* 5: Unknown (named) */
  'Named character references must be known',
  /* 6: Disallowed (numeric) */
  'Numeric character references cannot be disallowed',
  /* 7: Prohibited (numeric) */
  'Numeric character references cannot be outside the permissible Unicode range'
]

/**
 * Parse HTML character references.
 *
 * @param {string} value
 * @param {Readonly<Options> | null | undefined} [options]
 */
export function parseEntities(value, options) {
  const settings = options || {}
  const additional =
    typeof settings.additional === 'string'
      ? settings.additional.charCodeAt(0)
      : settings.additional
  /** @type {Array<string>} */
  const result = []
  let index = 0
  let lines = -1
  let queue = ''
  /** @type {Point | undefined} */
  let point
  /** @type {Array<number>|undefined} */
  let indent

  if (settings.position) {
    if ('start' in settings.position || 'indent' in settings.position) {
      // @ts-expect-error: points don’t have indent.
      indent = settings.position.indent
      // @ts-expect-error: points don’t have indent.
      point = settings.position.start
    } else {
      point = settings.position
    }
  }

  let line = (point ? point.line : 0) || 1
  let column = (point ? point.column : 0) || 1

  // Cache the current point.
  let previous = now()
  /** @type {number|undefined} */
  let character

  // Ensure the algorithm walks over the first character (inclusive).
  index--

  while (++index <= value.length) {
    // If the previous character was a newline.
    if (character === 10 /* `\n` */) {
      column = (indent ? indent[lines] : 0) || 1
    }

    character = value.charCodeAt(index)

    if (character === 38 /* `&` */) {
      const following = value.charCodeAt(index + 1)

      // The behavior depends on the identity of the next character.
      if (
        following === 9 /* `\t` */ ||
        following === 10 /* `\n` */ ||
        following === 12 /* `\f` */ ||
        following === 32 /* ` ` */ ||
        following === 38 /* `&` */ ||
        following === 60 /* `<` */ ||
        Number.isNaN(following) ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += String.fromCharCode(character)
        column++
        continue
      }

      const start = index + 1
      let begin = start
      let end = start
      /** @type {string} */
      let type

      if (following === 35 /* `#` */) {
        // Numerical reference.
        end = ++begin

        // The behavior further depends on the next character.
        const following = value.charCodeAt(end)

        if (following === 88 /* `X` */ || following === 120 /* `x` */) {
          // ASCII hexadecimal digits.
          type = 'hexadecimal'
          end = ++begin
        } else {
          // ASCII decimal digits.
          type = 'decimal'
        }
      } else {
        // Named reference.
        type = 'named'
      }

      let characterReferenceCharacters = ''
      let characterReference = ''
      let characters = ''
      // Each type of character reference accepts different characters.
      // This test is used to detect whether a reference has ended (as the semicolon
      // is not strictly needed).
      const test =
        type === 'named'
          ? isAlphanumerical
          : type === 'decimal'
            ? isDecimal
            : isHexadecimal

      end--

      while (++end <= value.length) {
        const following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += String.fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === 'named' && characterEntitiesLegacy.includes(characters)) {
          characterReferenceCharacters = characters
          // @ts-expect-error: always able to decode.
          characterReference = decodeNamedCharacterReference(characters)
        }
      }

      let terminated = value.charCodeAt(end) === 59 /* `;` */

      if (terminated) {
        end++

        const namedReference =
          type === 'named' ? decodeNamedCharacterReference(characters) : false

        if (namedReference) {
          characterReferenceCharacters = characters
          characterReference = namedReference
        }
      }

      let diff = 1 + end - start
      let reference = ''

      if (!terminated && settings.nonTerminated === false) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) reference is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== 'named') {
          warning(4 /* Empty (numeric) */, diff)
        }
      } else if (type === 'named') {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !characterReference) {
          warning(5 /* Unknown (named) */, 1)
        } else {
          // If there’s something after an named reference which is not known,
          // cap the reference.
          if (characterReferenceCharacters !== characters) {
            end = begin + characterReferenceCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            const reason = characterReferenceCharacters
              ? 1 /* Non terminated (named) */
              : 3 /* Empty (named) */

            if (settings.attribute) {
              const following = value.charCodeAt(end)

              if (following === 61 /* `=` */) {
                warning(reason, diff)
                characterReference = ''
              } else if (isAlphanumerical(following)) {
                characterReference = ''
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = characterReference
      } else {
        if (!terminated) {
          // All nonterminated numeric references are not rendered, and emit a
          // warning.
          warning(2 /* Non terminated (numeric) */, diff)
        }

        // When terminated and numerical, parse as either hexadecimal or
        // decimal.
        let referenceCode = Number.parseInt(
          characters,
          type === 'hexadecimal' ? 16 : 10
        )

        // Emit a warning when the parsed number is prohibited, and replace with
        // replacement character.
        if (prohibited(referenceCode)) {
          warning(7 /* Prohibited (numeric) */, diff)
          reference = String.fromCharCode(65533 /* `�` */)
        } else if (referenceCode in characterReferenceInvalid) {
          // Emit a warning when the parsed number is disallowed, and replace by
          // an alternative.
          warning(6 /* Disallowed (numeric) */, diff)
          reference = characterReferenceInvalid[referenceCode]
        } else {
          // Parse the number.
          let output = ''

          // Emit a warning when the parsed number should not be used.
          if (disallowed(referenceCode)) {
            warning(6 /* Disallowed (numeric) */, diff)
          }

          // Serialize the number.
          if (referenceCode > 0xffff) {
            referenceCode -= 0x10000
            output += String.fromCharCode(
              (referenceCode >>> (10 & 0x3ff)) | 0xd800
            )
            referenceCode = 0xdc00 | (referenceCode & 0x3ff)
          }

          reference = output + String.fromCharCode(referenceCode)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat a reference.
      if (reference) {
        flush()

        previous = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        const next = now()
        next.offset++

        if (settings.reference) {
          settings.reference.call(
            settings.referenceContext || undefined,
            reference,
            {start: previous, end: next},
            value.slice(start - 1, end)
          )
        }

        previous = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 /* `\n` */) {
        line++
        lines++
        column = 0
      }

      if (Number.isNaN(character)) {
        flush()
      } else {
        queue += String.fromCharCode(character)
        column++
      }
    }
  }

  // Return the reduced nodes.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line,
      column,
      offset: index + ((point ? point.offset : 0) || 0)
    }
  }

  /**
   * Handle the warning.
   *
   * @param {1|2|3|4|5|6|7} code
   * @param {number} offset
   */
  function warning(code, offset) {
    /** @type {ReturnType<now>} */
    let position

    if (settings.warning) {
      position = now()
      position.column += offset
      position.offset += offset

      settings.warning.call(
        settings.warningContext || undefined,
        messages[code],
        position,
        code
      )
    }
  }

  /**
   * Flush `queue` (normal text).
   * Macro invoked before each reference and at the end of `value`.
   * Does nothing when `queue` is empty.
   */
  function flush() {
    if (queue) {
      result.push(queue)

      if (settings.text) {
        settings.text.call(settings.textContext || undefined, queue, {
          start: previous,
          end: now()
        })
      }

      queue = ''
    }
  }
}

/**
 * Check if `character` is outside the permissible unicode range.
 *
 * @param {number} code
 * @returns {boolean}
 */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/**
 * Check if `character` is disallowed.
 *
 * @param {number} code
 * @returns {boolean}
 */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}
