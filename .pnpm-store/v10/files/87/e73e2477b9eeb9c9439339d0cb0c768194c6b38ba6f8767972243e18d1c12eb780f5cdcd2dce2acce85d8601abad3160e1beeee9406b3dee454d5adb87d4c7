export default preprocess

import codes from './character/codes.mjs'
import constants from './constant/constants.mjs'

var search = /[\0\t\n\r]/g

function preprocess() {
  var start = true
  var column = 1
  var buffer = ''
  var atCarriageReturn

  return preprocessor

  function preprocessor(value, encoding, end) {
    var chunks = []
    var match
    var next
    var startPosition
    var endPosition
    var code

    value = buffer + value.toString(encoding)
    startPosition = 0
    buffer = ''

    if (start) {
      if (value.charCodeAt(0) === codes.byteOrderMarker) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition = match ? match.index : value.length
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

        if (code === codes.nul) {
          chunks.push(codes.replacementCharacter)
          column++
        } else if (code === codes.ht) {
          next = Math.ceil(column / constants.tabSize) * constants.tabSize
          chunks.push(codes.horizontalTab)
          while (column++ < next) chunks.push(codes.virtualSpace)
        } else if (code === codes.lf) {
          chunks.push(codes.lineFeed)
          column = 1
        }
        // Must be carriage return.
        else {
          atCarriageReturn = true
          column = 1
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
