'use strict'

module.exports = match

var zwitch = require('zwitch')

var own = {}.hasOwnProperty

var handle = zwitch('nestingOperator', {
  unknown: unknownNesting,
  invalid: topScan, // `undefined` is the top query selector.
  handlers: {
    null: descendant, // `null` is the descendant combinator.
    '>': child,
    '+': adjacentSibling,
    '~': generalSibling
  }
})

function match(query, node, index, parent, state) {
  return handle(query, node, index, parent, state)
}

/* istanbul ignore next - Shouldn’t be invoked, parser gives correct data. */
function unknownNesting(query) {
  throw new Error('Unexpected nesting `' + query.nestingOperator + '`')
}

function topScan(query, node, index, parent, state) {
  /* istanbul ignore if - Shouldn’t happen. */
  if (parent) {
    throw new Error('topScan is supposed to be called from the root node')
  }

  state.iterator.apply(null, arguments)

  if (!state.shallow) descendant.apply(this, arguments)
}

function descendant(query, node, index, parent, state) {
  var previous = state.iterator

  state.iterator = iterator

  child.apply(this, arguments)

  function iterator(_, node, index, parent, state) {
    state.iterator = previous
    previous.apply(this, arguments)
    state.iterator = iterator

    if (state.one && state.found) return

    child.call(this, query, node, index, parent, state)
  }
}

function child(query, node, index, parent, state) {
  if (!node.children || !node.children.length) return

  walkIterator(query, node, state).each().done()
}

function adjacentSibling(query, node, index, parent, state) {
  /* istanbul ignore if - Shouldn’t happen. */
  if (!parent) return

  walkIterator(query, parent, state)
    .prefillTypeIndex(0, ++index)
    .each(index, ++index)
    .prefillTypeIndex(index)
    .done()
}

function generalSibling(query, node, index, parent, state) {
  /* istanbul ignore if - Shouldn’t happen. */
  if (!parent) return

  walkIterator(query, parent, state)
    .prefillTypeIndex(0, ++index)
    .each(index)
    .done()
}

// Handles typeIndex and typeCount properties for every walker.
function walkIterator(query, parent, state) {
  var typeIndex = state.index && createTypeIndex()
  var siblings = parent.children
  var delayed = []

  return {
    prefillTypeIndex: rangeDefaults(prefillTypeIndex),
    each: rangeDefaults(each),
    done: done
  }

  function done() {
    var index = -1

    while (++index < delayed.length) {
      delayed[index]()
      if (state.one && state.found) break
    }

    return this
  }

  function prefillTypeIndex(start, end) {
    if (typeIndex) {
      while (start < end) {
        typeIndex(siblings[start])
        start++
      }
    }

    return this
  }

  function each(start, end) {
    var child = siblings[start]
    var index
    var nodeIndex

    if (start >= end) return this

    if (typeIndex) {
      nodeIndex = typeIndex.nodes
      index = typeIndex(child)
      delayed.push(delay)
    } else {
      state.iterator(query, child, start, parent, state)
    }

    // Stop if we’re looking for one node and it’s already found.
    if (state.one && state.found) return this

    return each.call(this, start + 1, end)

    function delay() {
      state.typeIndex = index
      state.nodeIndex = nodeIndex
      state.typeCount = typeIndex.count(child)
      state.nodeCount = typeIndex.nodes
      state.iterator(query, child, start, parent, state)
    }
  }

  function rangeDefaults(iterator) {
    return rangeDefault

    function rangeDefault(start, end) {
      if (start == null || start < 0) start = 0
      if (end == null || end > siblings.length) end = siblings.length
      return iterator.call(this, start, end)
    }
  }
}

function createTypeIndex() {
  var counts = {}

  index.count = count
  index.nodes = 0

  return index

  function index(node) {
    var type = node.type

    index.nodes++

    if (!own.call(counts, type)) counts[type] = 0

    // Note: `++` is intended to be postfixed!
    return counts[type]++
  }

  function count(node) {
    return counts[node.type]
  }
}
