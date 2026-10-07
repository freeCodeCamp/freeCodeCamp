'use strict'

var constants = require('../constant/constants.js')
var splice = require('../constant/splice.js')

// `Array#splice` takes all items to be inserted as individual argument which
// causes a stack overflow in V8 when trying to insert 100k items for instance.
function chunkedSplice(list, start, remove, items) {
  var end = list.length
  var chunkStart = 0
  var parameters

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < constants.v8MaxSafeChunkSize) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    splice.apply(list, parameters)
  } else {
    // Delete `remove` items starting from `start`
    if (remove) splice.apply(list, [start, remove])

    // Insert the items in chunks to not cause stack overflows.
    while (chunkStart < items.length) {
      parameters = items.slice(
        chunkStart,
        chunkStart + constants.v8MaxSafeChunkSize
      )
      parameters.unshift(start, 0)
      splice.apply(list, parameters)

      chunkStart += constants.v8MaxSafeChunkSize
      start += constants.v8MaxSafeChunkSize
    }
  }
}

module.exports = chunkedSplice
