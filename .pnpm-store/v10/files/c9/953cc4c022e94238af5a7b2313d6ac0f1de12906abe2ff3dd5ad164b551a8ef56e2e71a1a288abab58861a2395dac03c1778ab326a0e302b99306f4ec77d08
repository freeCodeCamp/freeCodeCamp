'use strict'

var html = require('property-information/html')
var svg = require('property-information/svg')
var voids = require('html-void-elements')
var omission = require('./omission')
var one = require('./one')

module.exports = toHtml

var deprecationWarningIssued

function toHtml(node, options) {
  var settings = options || {}
  var quote = settings.quote || '"'
  var alternative = quote === '"' ? "'" : '"'

  if (quote !== '"' && quote !== "'") {
    throw new Error('Invalid quote `' + quote + '`, expected `\'` or `"`')
  }

  if ('allowDangerousHTML' in settings && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'Deprecation warning: `allowDangerousHTML` is a nonstandard option, use `allowDangerousHtml` instead'
    )
  }

  return one(
    {
      valid: settings.allowParseErrors ? 0 : 1,
      safe: settings.allowDangerousCharacters ? 0 : 1,
      schema: settings.space === 'svg' ? svg : html,
      omit: settings.omitOptionalTags && omission,
      quote: quote,
      alternative: alternative,
      smart: settings.quoteSmart,
      unquoted: settings.preferUnquoted,
      tight: settings.tightAttributes,
      upperDoctype: settings.upperDoctype,
      tightDoctype: settings.tightDoctype,
      bogusComments: settings.bogusComments,
      tightLists: settings.tightCommaSeparatedLists,
      tightClose: settings.tightSelfClosing,
      collapseEmpty: settings.collapseEmptyAttributes,
      dangerous: settings.allowDangerousHtml || settings.allowDangerousHTML,
      voids: settings.voids || voids.concat(),
      entities: settings.entities || {},
      close: settings.closeSelfClosing,
      closeEmpty: settings.closeEmptyElements
    },
    node && typeof node === 'object' && 'length' in node
      ? {type: 'root', children: node}
      : node
  )
}
