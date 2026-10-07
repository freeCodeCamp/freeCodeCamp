'use strict'

Object.defineProperty(exports, '__esModule', {value: true})

var text$1 = require('./initialize/text.js')
var attention = require('./tokenize/attention.js')
var autolink = require('./tokenize/autolink.js')
var blockQuote = require('./tokenize/block-quote.js')
var characterEscape = require('./tokenize/character-escape.js')
var characterReference = require('./tokenize/character-reference.js')
var codeFenced = require('./tokenize/code-fenced.js')
var codeIndented = require('./tokenize/code-indented.js')
var codeText = require('./tokenize/code-text.js')
var definition = require('./tokenize/definition.js')
var hardBreakEscape = require('./tokenize/hard-break-escape.js')
var headingAtx = require('./tokenize/heading-atx.js')
var htmlFlow = require('./tokenize/html-flow.js')
var htmlText = require('./tokenize/html-text.js')
var labelEnd = require('./tokenize/label-end.js')
var labelStartImage = require('./tokenize/label-start-image.js')
var labelStartLink = require('./tokenize/label-start-link.js')
var lineEnding = require('./tokenize/line-ending.js')
var list = require('./tokenize/list.js')
var setextUnderline = require('./tokenize/setext-underline.js')
var thematicBreak = require('./tokenize/thematic-break.js')

var document = {
  42: list,
  // Asterisk
  43: list,
  // Plus sign
  45: list,
  // Dash
  48: list,
  // 0
  49: list,
  // 1
  50: list,
  // 2
  51: list,
  // 3
  52: list,
  // 4
  53: list,
  // 5
  54: list,
  // 6
  55: list,
  // 7
  56: list,
  // 8
  57: list,
  // 9
  62: blockQuote // Greater than
}
var contentInitial = {
  91: definition // Left square bracket
}
var flowInitial = {
  '-2': codeIndented,
  // Horizontal tab
  '-1': codeIndented,
  // Virtual space
  32: codeIndented // Space
}
var flow = {
  35: headingAtx,
  // Number sign
  42: thematicBreak,
  // Asterisk
  45: [setextUnderline, thematicBreak],
  // Dash
  60: htmlFlow,
  // Less than
  61: setextUnderline,
  // Equals to
  95: thematicBreak,
  // Underscore
  96: codeFenced,
  // Grave accent
  126: codeFenced // Tilde
}
var string = {
  38: characterReference,
  // Ampersand
  92: characterEscape // Backslash
}
var text = {
  '-5': lineEnding,
  // Carriage return
  '-4': lineEnding,
  // Line feed
  '-3': lineEnding,
  // Carriage return + line feed
  33: labelStartImage,
  // Exclamation mark
  38: characterReference,
  // Ampersand
  42: attention,
  // Asterisk
  60: [autolink, htmlText],
  // Less than
  91: labelStartLink,
  // Left square bracket
  92: [hardBreakEscape, characterEscape],
  // Backslash
  93: labelEnd,
  // Right square bracket
  95: attention,
  // Underscore
  96: codeText // Grave accent
}
var insideSpan = {
  null: [attention, text$1.resolver]
}
var disable = {
  null: []
}

exports.contentInitial = contentInitial
exports.disable = disable
exports.document = document
exports.flow = flow
exports.flowInitial = flowInitial
exports.insideSpan = insideSpan
exports.string = string
exports.text = text
