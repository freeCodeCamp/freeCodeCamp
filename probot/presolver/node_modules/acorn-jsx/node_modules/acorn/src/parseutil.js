import {types as tt} from "./tokentype"
import {Parser} from "./state"
import {lineBreak} from "./whitespace"

const pp = Parser.prototype

// ## Parser utilities

// Test whether a statement node is the string literal `"use strict"`.

pp.isUseStrict = function(stmt) {
  return this.options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" &&
    stmt.expression.type === "Literal" &&
    stmt.expression.raw.slice(1, -1) === "use strict"
}

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next()
    return true
  } else {
    return false
  }
}

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === tt.name && this.value === name
}

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  return this.value === name && this.eat(tt.name)
}

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) this.unexpected()
}

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === tt.eof ||
    this.type === tt.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
}

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc)
    return true
  }
}

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(tt.semi) && !this.insertSemicolon()) this.unexpected()
}

pp.afterTrailingComma = function(tokType) {
  if (this.type == tokType) {
    if (this.options.onTrailingComma)
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc)
    this.next()
    return true
  }
}

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected()
}

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token")
}

export class DestructuringErrors {
  constructor() {
    this.shorthandAssign = 0
    this.trailingComma = 0
  }
}

pp.checkPatternErrors = function(refDestructuringErrors, andThrow) {
  let trailing = refDestructuringErrors && refDestructuringErrors.trailingComma
  if (!andThrow) return !!trailing
  if (trailing) this.raise(trailing, "Comma is not permitted after the rest element")
}

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  let pos = refDestructuringErrors && refDestructuringErrors.shorthandAssign
  if (!andThrow) return !!pos
  if (pos) this.raise(pos, "Shorthand property assignments are valid only in destructuring patterns")
}
