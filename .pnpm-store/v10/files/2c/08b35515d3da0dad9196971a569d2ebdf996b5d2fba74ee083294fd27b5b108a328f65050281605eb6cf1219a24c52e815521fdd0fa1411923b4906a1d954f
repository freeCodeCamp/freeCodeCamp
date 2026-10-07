"use strict";

module.exports = function(tokens, tt) {
  let curlyBrace = null;
  let templateTokens = [];
  const result = [];

  function addTemplateType() {
    const start = templateTokens[0];
    const end = templateTokens[templateTokens.length - 1];

    const value = templateTokens.reduce((result, token) => {
      if (token.value) {
        result += token.value;
      } else if (token.type !== tt.template) {
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
        end: end.loc.end,
      },
    });

    templateTokens = [];
  }

  tokens.forEach(token => {
    switch (token.type) {
      case tt.backQuote:
        if (curlyBrace) {
          result.push(curlyBrace);
          curlyBrace = null;
        }

        templateTokens.push(token);

        if (templateTokens.length > 1) {
          addTemplateType();
        }

        break;

      case tt.dollarBraceL:
        templateTokens.push(token);
        addTemplateType();
        break;

      case tt.braceR:
        if (curlyBrace) {
          result.push(curlyBrace);
        }

        curlyBrace = token;
        break;

      case tt.template:
        if (curlyBrace) {
          templateTokens.push(curlyBrace);
          curlyBrace = null;
        }

        templateTokens.push(token);
        break;

      case tt.eof:
        if (curlyBrace) {
          result.push(curlyBrace);
        }

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
};
