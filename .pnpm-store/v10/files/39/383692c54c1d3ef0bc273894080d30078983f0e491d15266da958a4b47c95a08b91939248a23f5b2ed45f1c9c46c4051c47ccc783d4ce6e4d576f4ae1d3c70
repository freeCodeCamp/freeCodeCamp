"use strict";

module.exports = function(token, tt, source) {
  var type = token.type;
  token.range = [token.start, token.end];

  if (type === tt.name) {
    token.type = "Identifier";
  } else if (
    type === tt.semi ||
    type === tt.comma ||
    type === tt.parenL ||
    type === tt.parenR ||
    type === tt.braceL ||
    type === tt.braceR ||
    type === tt.slash ||
    type === tt.dot ||
    type === tt.bracketL ||
    type === tt.bracketR ||
    type === tt.ellipsis ||
    type === tt.arrow ||
    type === tt.pipeline ||
    type === tt.star ||
    type === tt.incDec ||
    type === tt.colon ||
    type === tt.question ||
    type === tt.questionDot ||
    type === tt.template ||
    type === tt.backQuote ||
    type === tt.dollarBraceL ||
    type === tt.at ||
    type === tt.logicalOR ||
    type === tt.logicalAND ||
    type === tt.nullishCoalescing ||
    type === tt.bitwiseOR ||
    type === tt.bitwiseXOR ||
    type === tt.bitwiseAND ||
    type === tt.equality ||
    type === tt.relational ||
    type === tt.bitShift ||
    type === tt.plusMin ||
    type === tt.modulo ||
    type === tt.exponent ||
    type === tt.bang ||
    type === tt.tilde ||
    type === tt.doubleColon ||
    type.isAssign
  ) {
    token.type = "Punctuator";
    if (!token.value) token.value = type.label;
  } else if (type === tt.jsxTagStart) {
    token.type = "Punctuator";
    token.value = "<";
  } else if (type === tt.jsxTagEnd) {
    token.type = "Punctuator";
    token.value = ">";
  } else if (type === tt.jsxName) {
    token.type = "JSXIdentifier";
  } else if (type === tt.jsxText) {
    token.type = "JSXText";
  } else if (type.keyword === "null") {
    token.type = "Null";
  } else if (type.keyword === "false" || type.keyword === "true") {
    token.type = "Boolean";
  } else if (type.keyword) {
    token.type = "Keyword";
  } else if (type === tt.num) {
    token.type = "Numeric";
    token.value = source.slice(token.start, token.end);
  } else if (type === tt.string) {
    token.type = "String";
    token.value = source.slice(token.start, token.end);
  } else if (type === tt.regexp) {
    token.type = "RegularExpression";
    var value = token.value;
    token.regex = {
      pattern: value.pattern,
      flags: value.flags,
    };
    token.value = `/${value.pattern}/${value.flags}`;
  }

  return token;
};
