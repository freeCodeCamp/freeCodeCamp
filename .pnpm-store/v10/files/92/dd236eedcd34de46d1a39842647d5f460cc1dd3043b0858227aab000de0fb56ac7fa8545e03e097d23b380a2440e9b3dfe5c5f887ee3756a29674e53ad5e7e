'use strict'

module.exports = factory

function factory(file) {
  var value = String(file)
  var indices = []
  var search = /\r?\n|\r/g

  while (search.exec(value)) {
    indices.push(search.lastIndex)
  }

  indices.push(value.length + 1)

  return {
    toPoint: offsetToPoint,
    toPosition: offsetToPoint,
    toOffset: pointToOffset
  }

  // Get the line and column-based `point` for `offset` in the bound indices.
  function offsetToPoint(offset) {
    var index = -1

    if (offset > -1 && offset < indices[indices.length - 1]) {
      while (++index < indices.length) {
        if (indices[index] > offset) {
          return {
            line: index + 1,
            column: offset - (indices[index - 1] || 0) + 1,
            offset: offset
          }
        }
      }
    }

    return {}
  }

  // Get the `offset` for a line and column-based `point` in the bound
  // indices.
  function pointToOffset(point) {
    var line = point && point.line
    var column = point && point.column
    var offset

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      offset = (indices[line - 2] || 0) + column - 1 || 0
    }

    return offset > -1 && offset < indices[indices.length - 1] ? offset : -1
  }
}
