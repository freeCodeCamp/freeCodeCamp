/**
 * @import {Chunk, Code, Encoding, Value} from 'micromark-util-types'
 */

/**
 * @callback Preprocessor
 *   Preprocess a value.
 * @param {Value} value
 *   Value.
 * @param {Encoding | null | undefined} [encoding]
 *   Encoding when `value` is a typed array (optional).
 * @param {boolean | null | undefined} [end=false]
 *   Whether this is the last chunk (default: `false`).
 * @returns {Array<Chunk>}
 *   Chunks.
 */

import {codes, constants} from 'micromark-util-symbol'

const search = /[\0\t\n\r]/g

/**
 * @returns {Preprocessor}
 *   Preprocess a value.
 */
export function preprocess() {
  let column = 1
  let buffer = ''
  /** @type {boolean | undefined} */
  let start = true
  /** @type {boolean | undefined} */
  let atCarriageReturn

  return preprocessor

  /** @type {Preprocessor} */
  // eslint-disable-next-line complexity
  function preprocessor(value, encoding, end) {
    /** @type {Array<Chunk>} */
    const chunks = []
    /** @type {RegExpMatchArray | null} */
    let match
    /** @type {number} */
    let next
    /** @type {number} */
    let startPosition
    /** @type {number} */
    let endPosition
    /** @type {Code} */
    let code

    value =
      buffer +
      (typeof value === 'string'
        ? value.toString()
        : new TextDecoder(encoding || undefined).decode(value))

    startPosition = 0
    buffer = ''

    if (start) {
      // To do: `markdown-rs` actually parses BOMs (byte order mark).
      if (value.charCodeAt(0) === codes.byteOrderMarker) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition =
        match && match.index !== undefined ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (
        code === codes.lf &&
        startPosition === endPosition &&
        atCarriageReturn
      ) {
        chunks.push(codes.carriageReturnLineFeed)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(codes.carriageReturn)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        switch (code) {
          case codes.nul: {
            chunks.push(codes.replacementCharacter)
            column++

            break
          }

          case codes.ht: {
            next = Math.ceil(column / constants.tabSize) * constants.tabSize
            chunks.push(codes.horizontalTab)
            while (column++ < next) chunks.push(codes.virtualSpace)

            break
          }

          case codes.lf: {
            chunks.push(codes.lineFeed)
            column = 1

            break
          }

          default: {
            atCarriageReturn = true
            column = 1
          }
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(codes.carriageReturn)
      if (buffer) chunks.push(buffer)
      chunks.push(codes.eof)
    }

    return chunks
  }
}
