export default serializeChunks

import assert from 'assert'
import codes from '../character/codes.mjs'
import values from '../character/values.mjs'
import fromCharCode from '../constant/from-char-code.mjs'

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === codes.carriageReturn) {
      value = values.cr
    } else if (chunk === codes.lineFeed) {
      value = values.lf
    } else if (chunk === codes.carriageReturnLineFeed) {
      value = values.cr + values.lf
    } else if (chunk === codes.horizontalTab) {
      value = values.ht
    } else if (chunk === codes.virtualSpace) {
      if (atTab) continue
      value = values.space
    } else {
      assert.equal(typeof chunk, 'number', 'expected number')
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === codes.horizontalTab
    result.push(value)
  }

  return result.join('')
}
