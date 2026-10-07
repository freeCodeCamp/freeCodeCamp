"use strict";

const ESLINT_VERSION = require("../utils/eslint-version.cjs");
function convertTemplateType(tokens, tl) {
  let curlyBrace = null;
  let templateTokens = [];
  const result = [];
  function addTemplateType() {
    const start = templateTokens[0];
    const end = templateTokens[templateTokens.length - 1];
    const value = templateTokens.reduce((result, token) => {
      if (token.value) {
        result += token.value;
      } else if (token.type.label !== tl.template) {
        result += token.type.label;
      }
      return result;
    }, "");
    result.push({
      type: "Template",
      value: value,
      start: start.start,
      end: end.end,
      loc: {
        start: start.loc.start,
        end: end.loc.end
      }
    });
    templateTokens = [];
  }
  tokens.forEach(token => {
    switch (token.type.label) {
      case tl.backQuote:
        if (curlyBrace) {
          result.push(curlyBrace);
          curlyBrace = null;
        }
        templateTokens.push(token);
        if (templateTokens.length > 1) {
          addTemplateType();
        }
        break;
      case tl.dollarBraceL:
        templateTokens.push(token);
        addTemplateType();
        break;
      case tl.braceR:
        if (curlyBrace) {
          result.push(curlyBrace);
        }
        curlyBrace = token;
        break;
      case tl.template:
        if (curlyBrace) {
          templateTokens.push(curlyBrace);
          curlyBrace = null;
        }
        templateTokens.push(token);
        break;
      default:
        if (curlyBrace) {
          result.push(curlyBrace);
          curlyBrace = null;
        }
        result.push(token);
    }
  });
  return result;
}
function convertToken(token, source, tl) {
  const {
    type
  } = token;
  const {
    label
  } = type;
  const newToken = token;
  newToken.range = [token.start, token.end];
  if (label === tl.name) {
    if (token.value === "static") {
      newToken.type = "Keyword";
    } else {
      newToken.type = "Identifier";
    }
  } else if (label === tl.semi || label === tl.comma || label === tl.parenL || label === tl.parenR || label === tl.braceL || label === tl.braceR || label === tl.slash || label === tl.dot || label === tl.bracketL || label === tl.bracketR || label === tl.ellipsis || label === tl.arrow || label === tl.pipeline || label === tl.star || label === tl.incDec || label === tl.colon || label === tl.question || label === tl.template || label === tl.backQuote || label === tl.dollarBraceL || label === tl.at || label === tl.logicalOR || label === tl.logicalAND || label === tl.nullishCoalescing || label === tl.bitwiseOR || label === tl.bitwiseXOR || label === tl.bitwiseAND || label === tl.equality || label === tl.relational || label === tl.bitShift || label === tl.plusMin || label === tl.modulo || label === tl.exponent || label === tl.bang || label === tl.tilde || label === tl.doubleColon || label === tl.hash || label === tl.questionDot || label === tl.braceHashL || label === tl.braceBarL || label === tl.braceBarR || label === tl.bracketHashL || label === tl.bracketBarL || label === tl.bracketBarR || label === tl.doubleCaret || label === tl.doubleAt || type.isAssign) {
    var _newToken$value;
    newToken.type = "Punctuator";
    (_newToken$value = newToken.value) != null ? _newToken$value : newToken.value = label;
  } else if (label === tl.jsxTagStart) {
    newToken.type = "Punctuator";
    newToken.value = "<";
  } else if (label === tl.jsxTagEnd) {
    newToken.type = "Punctuator";
    newToken.value = ">";
  } else if (label === tl.jsxName) {
    newToken.type = "JSXIdentifier";
  } else if (label === tl.jsxText) {
    newToken.type = "JSXText";
  } else if (type.keyword === "null") {
    newToken.type = "Null";
  } else if (type.keyword === "false" || type.keyword === "true") {
    newToken.type = "Boolean";
  } else if (type.keyword) {
    newToken.type = "Keyword";
  } else if (label === tl.num) {
    newToken.type = "Numeric";
    newToken.value = source.slice(token.start, token.end);
  } else if (label === tl.string) {
    newToken.type = "String";
    newToken.value = source.slice(token.start, token.end);
  } else if (label === tl.regexp) {
    newToken.type = "RegularExpression";
    const value = token.value;
    newToken.regex = {
      pattern: value.pattern,
      flags: value.flags
    };
    newToken.value = `/${value.pattern}/${value.flags}`;
  } else if (label === tl.bigint) {
    newToken.type = "Numeric";
    newToken.value = `${token.value}n`;
  } else if (label === tl.privateName) {
    newToken.type = "PrivateIdentifier";
  } else if (label === tl.templateNonTail || label === tl.templateTail || label === tl.Template) {
    newToken.type = "Template";
  }
  return newToken;
}
module.exports = function convertTokens(tokens, code, tokLabels) {
  const result = [];
  const templateTypeMergedTokens = convertTemplateType(tokens, tokLabels);
  for (let i = 0, {
      length
    } = templateTypeMergedTokens; i < length - 1; i++) {
    const token = templateTypeMergedTokens[i];
    const tokenType = token.type;
    if (tokenType === "CommentLine" || tokenType === "CommentBlock") {
      continue;
    }
    {
      if (ESLINT_VERSION >= 8 && i + 1 < length && tokenType.label === tokLabels.hash) {
        const nextToken = templateTypeMergedTokens[i + 1];
        if (nextToken.type.label === tokLabels.name && token.end === nextToken.start) {
          i++;
          nextToken.type = "PrivateIdentifier";
          nextToken.start -= 1;
          nextToken.loc.start.column -= 1;
          nextToken.range = [nextToken.start, nextToken.end];
          result.push(nextToken);
          continue;
        }
      }
    }
    result.push(convertToken(token, code, tokLabels));
  }
  return result;
};

//# sourceMappingURL=convertTokens.cjs.map
