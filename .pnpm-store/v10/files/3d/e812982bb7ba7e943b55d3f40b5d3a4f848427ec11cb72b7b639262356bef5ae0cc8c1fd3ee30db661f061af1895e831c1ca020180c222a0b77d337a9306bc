'use strict'

// Note! `move` only works inside lines! It’s not possible to move past other
// chunks (replacement characters, tabs, or line endings).
function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
  return point
}

module.exports = movePoint
