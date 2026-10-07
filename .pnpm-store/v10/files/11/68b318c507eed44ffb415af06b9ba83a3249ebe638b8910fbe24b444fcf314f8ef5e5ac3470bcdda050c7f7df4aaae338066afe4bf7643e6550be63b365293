import {resolver as resolveText} from './initialize/text.mjs'
import attention from './tokenize/attention.mjs'
import autolink from './tokenize/autolink.mjs'
import blockQuote from './tokenize/block-quote.mjs'
import characterEscape from './tokenize/character-escape.mjs'
import characterReference from './tokenize/character-reference.mjs'
import codeFenced from './tokenize/code-fenced.mjs'
import codeIndented from './tokenize/code-indented.mjs'
import codeText from './tokenize/code-text.mjs'
import definition from './tokenize/definition.mjs'
import hardBreakEscape from './tokenize/hard-break-escape.mjs'
import headingAtx from './tokenize/heading-atx.mjs'
import htmlFlow from './tokenize/html-flow.mjs'
import htmlText from './tokenize/html-text.mjs'
import labelEnd from './tokenize/label-end.mjs'
import labelImage from './tokenize/label-start-image.mjs'
import labelLink from './tokenize/label-start-link.mjs'
import lineEnding from './tokenize/line-ending.mjs'
import list from './tokenize/list.mjs'
import setextUnderline from './tokenize/setext-underline.mjs'
import thematicBreak from './tokenize/thematic-break.mjs'

export var document = {
  42: list, // Asterisk
  43: list, // Plus sign
  45: list, // Dash
  48: list, // 0
  49: list, // 1
  50: list, // 2
  51: list, // 3
  52: list, // 4
  53: list, // 5
  54: list, // 6
  55: list, // 7
  56: list, // 8
  57: list, // 9
  62: blockQuote // Greater than
}

export var contentInitial = {
  91: definition // Left square bracket
}

export var flowInitial = {
  '-2': codeIndented, // Horizontal tab
  '-1': codeIndented, // Virtual space
  32: codeIndented // Space
}

export var flow = {
  35: headingAtx, // Number sign
  42: thematicBreak, // Asterisk
  45: [setextUnderline, thematicBreak], // Dash
  60: htmlFlow, // Less than
  61: setextUnderline, // Equals to
  95: thematicBreak, // Underscore
  96: codeFenced, // Grave accent
  126: codeFenced // Tilde
}

export var string = {
  38: characterReference, // Ampersand
  92: characterEscape // Backslash
}

export var text = {
  '-5': lineEnding, // Carriage return
  '-4': lineEnding, // Line feed
  '-3': lineEnding, // Carriage return + line feed
  33: labelImage, // Exclamation mark
  38: characterReference, // Ampersand
  42: attention, // Asterisk
  60: [autolink, htmlText], // Less than
  91: labelLink, // Left square bracket
  92: [hardBreakEscape, characterEscape], // Backslash
  93: labelEnd, // Right square bracket
  95: attention, // Underscore
  96: codeText // Grave accent
}

export var insideSpan = {
  null: [attention, resolveText]
}

export var disable = {null: []}
