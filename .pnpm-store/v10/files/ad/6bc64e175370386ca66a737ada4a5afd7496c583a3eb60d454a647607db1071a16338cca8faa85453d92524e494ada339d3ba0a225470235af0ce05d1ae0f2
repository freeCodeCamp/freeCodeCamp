'use strict'

module.exports = parse

var Parser = require('css-selector-parser').CssSelectorParser
var zwitch = require('zwitch')
var nthCheck = require('nth-check').default

var nth = ['nth-child', 'nth-last-child', 'nth-of-type', 'nth-last-of-type']

var parser = new Parser()

var compile = zwitch('type', {
  handlers: {
    selectors: selectors,
    ruleSet: ruleSet,
    rule: rule
  }
})

parser.registerAttrEqualityMods('~', '^', '$', '*')
parser.registerSelectorPseudos('any', 'matches', 'not', 'has')
parser.registerNestingOperators('>', '+', '~')

function parse(selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('Expected `string` as selector, not `' + selector + '`')
  }

  return compile(parser.parse(selector))
}

function selectors(query) {
  var selectors = query.selectors
  var index = -1

  while (++index < selectors.length) {
    compile(selectors[index])
  }

  return query
}

function ruleSet(query) {
  return rule(query.rule)
}

function rule(query) {
  var pseudos = query.pseudos || []
  var index = -1
  var pseudo

  while (++index < pseudos.length) {
    pseudo = pseudos[index]

    if (nth.indexOf(pseudo.name) > -1) {
      pseudo.value = nthCheck(pseudo.value)
      pseudo.valueType = 'function'
    }
  }

  compile(query.rule)

  return query
}
