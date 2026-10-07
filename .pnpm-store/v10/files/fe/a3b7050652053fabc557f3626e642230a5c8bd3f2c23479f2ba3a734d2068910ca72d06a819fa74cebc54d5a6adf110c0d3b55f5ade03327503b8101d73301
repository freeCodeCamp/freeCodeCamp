'use strict'

module.exports = match

var zwitch = require('zwitch')
var pseudo = require('./pseudo')
var test = require('./test')
var nest = require('./nest')

var type = zwitch('type', {
  unknown: unknownType,
  invalid: invalidType,
  handlers: {
    selectors: selectors,
    ruleSet: ruleSet,
    rule: rule
  }
})

function match(query, node, state) {
  return query && node ? type(query, node, state) : []
}

function selectors(query, node, state) {
  var collect = collector(state.one)
  var index = -1

  while (++index < query.selectors.length) {
    collect(ruleSet(query.selectors[index], node, state))
  }

  return collect.result
}

function ruleSet(query, node, state) {
  return rule(query.rule, node, state)
}

function rule(query, tree, state) {
  var collect = collector(state.one)

  if (state.shallow && query.rule) {
    throw new Error('Expected selector without nesting')
  }

  nest(
    query,
    tree,
    0,
    null,
    configure(query, {
      scopeNodes: tree.type === 'root' ? tree.children : [tree],
      iterator: iterator,
      one: state.one,
      shallow: state.shallow,
      any: state.any
    })
  )

  return collect.result

  function iterator(query, node, index, parent, state) {
    if (test(query, node, index, parent, state)) {
      if (query.rule) {
        nest(query.rule, node, index, parent, configure(query.rule, state))
      } else {
        collect(node)
        state.found = true
      }
    }
  }
}

function configure(query, state) {
  var pseudos = query.pseudos || []
  var index = -1

  while (++index < pseudos.length) {
    if (pseudo.needsIndex.indexOf(pseudos[index].name) > -1) {
      state.index = true
      break
    }
  }

  return state
}

/* istanbul ignore next - Shouldn’t be invoked, all data is handled. */
function unknownType(query) {
  throw new Error('Unknown type `' + query.type + '`')
}

/* istanbul ignore next - Shouldn’t be invoked, parser gives correct data. */
function invalidType() {
  throw new Error('Invalid type')
}

function collector(one) {
  var result = []
  var found

  collect.result = result

  return collect

  /* Append nodes to array, filtering out duplicates. */
  function collect(node) {
    var index = -1

    if ('length' in node) {
      while (++index < node.length) {
        collectOne(node[index])
      }
    } else {
      collectOne(node)
    }
  }

  function collectOne(node) {
    if (one) {
      /* istanbul ignore if - shouldn’t happen, safeguards performance problems. */
      if (found) throw new Error('Cannot collect multiple nodes')

      found = true
    }

    if (result.indexOf(node) < 0) result.push(node)
  }
}
