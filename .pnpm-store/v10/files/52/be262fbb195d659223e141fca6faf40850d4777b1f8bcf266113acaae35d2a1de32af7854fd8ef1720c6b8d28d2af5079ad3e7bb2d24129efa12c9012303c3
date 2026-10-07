'use strict'

module.exports = match

var zwitch = require('zwitch')
var not = require('not')
var convert = require('unist-util-is/convert')

var is = convert()

match.needsIndex = [
  'first-child',
  'first-of-type',
  'last-child',
  'last-of-type',
  'nth-child',
  'nth-last-child',
  'nth-of-type',
  'nth-last-of-type',
  'only-child',
  'only-of-type'
]

var handle = zwitch('name', {
  unknown: unknownPseudo,
  invalid: invalidPseudo,
  handlers: {
    any: matches,
    blank: empty,
    empty: empty,
    'first-child': firstChild,
    'first-of-type': firstOfType,
    has: hasSelector,
    'last-child': lastChild,
    'last-of-type': lastOfType,
    matches: matches,
    not: not(matches),
    'nth-child': nthChild,
    'nth-last-child': nthLastChild,
    'nth-of-type': nthOfType,
    'nth-last-of-type': nthLastOfType,
    'only-child': onlyChild,
    'only-of-type': onlyOfType,
    root: root,
    scope: scope
  }
})

function match(query, node, index, parent, state) {
  var pseudos = query.pseudos
  var offset = -1

  while (++offset < pseudos.length) {
    if (!handle(pseudos[offset], node, index, parent, state)) return false
  }

  return true
}

function matches(query, node, index, parent, state) {
  var shallow = state.shallow
  var one = state.one
  var anything = state.any
  var result

  state.one = true
  state.shallow = true

  result = anything(query.value, node, state)[0] === node

  state.shallow = shallow
  state.one = one

  return result
}

function root(query, node, index, parent) {
  return is(node) && !parent
}

function scope(query, node, index, parent, state) {
  return is(node) && state.scopeNodes.indexOf(node) > -1
}

function empty(query, node) {
  return node.children ? !node.children.length : !('value' in node)
}

function firstChild(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.nodeIndex === 0 // Specifically `0`, not falsey.
}

function lastChild(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.nodeIndex === state.nodeCount - 1
}

function onlyChild(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.nodeCount === 1
}

function nthChild(query, node, index, parent, state) {
  assertDeep(state, query)
  return query.value(state.nodeIndex)
}

function nthLastChild(query, node, index, parent, state) {
  assertDeep(state, query)
  return query.value(state.nodeCount - state.nodeIndex - 1)
}

function nthOfType(query, node, index, parent, state) {
  assertDeep(state, query)
  return query.value(state.typeIndex)
}

function nthLastOfType(query, node, index, parent, state) {
  assertDeep(state, query)
  return query.value(state.typeCount - 1 - state.typeIndex)
}

function firstOfType(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.typeIndex === 0
}

function lastOfType(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.typeIndex === state.typeCount - 1
}

function onlyOfType(query, node, index, parent, state) {
  assertDeep(state, query)
  return state.typeCount === 1
}

/* istanbul ignore next - Shouldn’t be invoked, parser gives correct data. */
function invalidPseudo() {
  throw new Error('Invalid pseudo-selector')
}

function unknownPseudo(query) {
  if (query.name) {
    throw new Error('Unknown pseudo-selector `' + query.name + '`')
  }

  throw new Error('Unexpected pseudo-element or empty pseudo-class')
}

function assertDeep(state, query) {
  if (state.shallow) {
    throw new Error('Cannot use `:' + query.name + '` without parent')
  }
}

function hasSelector(query, node, index, parent, state) {
  var shallow = state.shallow
  var one = state.one
  var scopeNodes = state.scopeNodes
  var value = appendScope(query.value)
  var anything = state.any
  var result

  state.shallow = false
  state.one = true
  state.scopeNodes = [node]

  result = anything(value, node, state)[0]

  state.shallow = shallow
  state.one = one
  state.scopeNodes = scopeNodes

  return result
}

function appendScope(value) {
  var selector =
    value.type === 'ruleSet' ? {type: 'selectors', selectors: [value]} : value
  var index = -1
  var rule

  while (++index < selector.selectors.length) {
    rule = selector.selectors[index].rule
    rule.nestingOperator = null

    /* istanbul ignore else - needed if new pseudo’s are added that accepts commas (such as, `:lang(en, nl)`) */
    if (
      !rule.pseudos ||
      rule.pseudos.length !== 1 ||
      rule.pseudos[0].name !== 'scope'
    ) {
      selector.selectors[index] = {
        type: 'rule',
        rule: rule,
        pseudos: [{name: 'scope'}]
      }
    }
  }

  return selector
}
