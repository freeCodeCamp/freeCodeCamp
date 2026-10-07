module.exports = link
link.peek = linkPeek

var checkQuote = require('../util/check-quote')
var formatLinkAsAutolink = require('../util/format-link-as-autolink')
var phrasing = require('../util/container-phrasing')
var safe = require('../util/safe')

function link(node, _, context) {
  var quote = checkQuote(context)
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe'
  var exit
  var subexit
  var value
  var stack

  if (formatLinkAsAutolink(node, context)) {
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    stack = context.stack
    context.stack = []
    exit = context.enter('autolink')
    value = '<' + phrasing(node, context, {before: '<', after: '>'}) + '>'
    exit()
    context.stack = stack
    return value
  }

  exit = context.enter('link')
  subexit = context.enter('label')
  value = '[' + phrasing(node, context, {before: '[', after: ']'}) + ']('
  subexit()

  if (
    // If there’s no url but there is a title…
    (!node.url && node.title) ||
    // Or if there’s markdown whitespace or an eol, enclose.
    /[ \t\r\n]/.test(node.url)
  ) {
    subexit = context.enter('destinationLiteral')
    value += '<' + safe(context, node.url, {before: '<', after: '>'}) + '>'
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw')
    value += safe(context, node.url, {
      before: '(',
      after: node.title ? ' ' : ')'
    })
  }

  subexit()

  if (node.title) {
    subexit = context.enter('title' + suffix)
    value +=
      ' ' +
      quote +
      safe(context, node.title, {before: quote, after: quote}) +
      quote
    subexit()
  }

  value += ')'

  exit()
  return value
}

function linkPeek(node, _, context) {
  return formatLinkAsAutolink(node, context) ? '<' : '['
}
