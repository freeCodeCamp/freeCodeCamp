// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/ternjs/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/ternjs/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

import {Parser} from "./state"
import "./parseutil"
import "./statement"
import "./lval"
import "./expression"
import "./location"

export {Parser, plugins} from "./state"
export {defaultOptions} from "./options"
export {Position, SourceLocation, getLineInfo} from "./locutil"
export {Node} from "./node"
export {TokenType, types as tokTypes} from "./tokentype"
export {TokContext, types as tokContexts} from "./tokencontext"
export {isIdentifierChar, isIdentifierStart} from "./identifier"
export {Token} from "./tokenize"
export {isNewLine, lineBreak, lineBreakG} from "./whitespace"

export const version = "3.3.0"

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

export function parse(input, options) {
  return new Parser(options, input).parse()
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

export function parseExpressionAt(input, pos, options) {
  let p = new Parser(options, input, pos)
  p.nextToken()
  return p.parseExpression()
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

export function tokenizer(input, options) {
  return new Parser(options, input)
}
