// Acorn: Loose parser
//
// This module provides an alternative parser (`parse_dammit`) that
// exposes that same interface as `parse`, but will try to parse
// anything as JavaScript, repairing syntax error the best it can.
// There are circumstances in which it will raise an error and give
// up, but they are very rare. The resulting AST will be a mostly
// valid JavaScript AST (as per the [Mozilla parser API][api], except
// that:
//
// - Return outside functions is allowed
//
// - Label consistency (no conflicts, break only to existing labels)
//   is not enforced.
//
// - Bogus Identifier nodes with a name of `"✖"` are inserted whenever
//   the parser got too confused to return anything meaningful.
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
//
// The expected use for this is to *first* try `acorn.parse`, and only
// if that fails switch to `parse_dammit`. The loose parser might
// parse badly indented code incorrectly, so **don't** use it as
// your default parser.
//
// Quite a lot of acorn.js is duplicated here. The alternative was to
// add a *lot* of extra cruft to that file, making it less readable
// and slower. Copying and editing the code allowed me to make
// invasive changes and simplifications without creating a complicated
// tangle.

import acorn from "acorn"
import {LooseParser, pluginsLoose} from "./state"
import "./tokenize"
import "./statement"
import "./expression"

export {LooseParser, pluginsLoose} from "./state"

acorn.defaultOptions.tabSize = 4

export function parse_dammit(input, options) {
  let p = new LooseParser(input, options)
  p.next()
  return p.parseTopLevel()
}

acorn.parse_dammit = parse_dammit
acorn.LooseParser = LooseParser
acorn.pluginsLoose = pluginsLoose
