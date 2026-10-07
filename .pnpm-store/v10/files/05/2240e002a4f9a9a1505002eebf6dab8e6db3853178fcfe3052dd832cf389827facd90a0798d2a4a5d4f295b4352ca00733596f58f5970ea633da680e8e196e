module.exports = thematicBreak

var repeat = require('repeat-string')
var checkRepeat = require('../util/check-rule-repeat')
var checkRule = require('../util/check-rule')

function thematicBreak(node, parent, context) {
  var value = repeat(
    checkRule(context) + (context.options.ruleSpaces ? ' ' : ''),
    checkRepeat(context)
  )

  return context.options.ruleSpaces ? value.slice(0, -1) : value
}
