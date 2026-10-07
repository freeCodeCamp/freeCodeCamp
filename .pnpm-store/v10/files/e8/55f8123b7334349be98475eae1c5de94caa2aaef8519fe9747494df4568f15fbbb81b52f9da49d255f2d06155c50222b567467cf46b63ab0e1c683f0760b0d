"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = highlight;
exports.shouldHighlight = shouldHighlight;
var _jsTokens = require("js-tokens");
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
var _picocolors = _interopRequireWildcard(require("picocolors"), true);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const colors = typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? (0, _picocolors.createColors)(false) : _picocolors.default;
const compose = (f, g) => v => f(g(v));
const sometimesKeywords = new Set(["as", "async", "from", "get", "of", "set"]);
function getDefs(colors) {
  return {
    keyword: colors.cyan,
    capitalized: colors.yellow,
    jsxIdentifier: colors.yellow,
    punctuator: colors.yellow,
    number: colors.magenta,
    string: colors.green,
    regex: colors.magenta,
    comment: colors.gray,
    invalid: compose(compose(colors.white, colors.bgRed), colors.bold)
  };
}
const NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
const BRACKET = /^[()[\]{}]$/;
let tokenize;
{
  const JSX_TAG = /^[a-z][\w-]*$/i;
  const getTokenType = function (token, offset, text) {
    if (token.type === "name") {
      if ((0, _helperValidatorIdentifier.isKeyword)(token.value) || (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) || sometimesKeywords.has(token.value)) {
        return "keyword";
      }
      if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) === "</")) {
        return "jsxIdentifier";
      }
      if (token.value[0] !== token.value[0].toLowerCase()) {
        return "capitalized";
      }
    }
    if (token.type === "punctuator" && BRACKET.test(token.value)) {
      return "bracket";
    }
    if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
      return "punctuator";
    }
    return token.type;
  };
  tokenize = function* (text) {
    let match;
    while (match = _jsTokens.default.exec(text)) {
      const token = _jsTokens.matchToToken(match);
      yield {
        type: getTokenType(token, match.index, text),
        value: token.value
      };
    }
  };
}
function highlightTokens(defs, text) {
  let highlighted = "";
  for (const {
    type,
    value
  } of tokenize(text)) {
    const colorize = defs[type];
    if (colorize) {
      highlighted += value.split(NEWLINE).map(str => colorize(str)).join("\n");
    } else {
      highlighted += value;
    }
  }
  return highlighted;
}
function shouldHighlight(options) {
  return colors.isColorSupported || options.forceColor;
}
let pcWithForcedColor = undefined;
function getColors(forceColor) {
  if (forceColor) {
    var _pcWithForcedColor;
    (_pcWithForcedColor = pcWithForcedColor) != null ? _pcWithForcedColor : pcWithForcedColor = (0, _picocolors.createColors)(true);
    return pcWithForcedColor;
  }
  return colors;
}
function highlight(code, options = {}) {
  if (code !== "" && shouldHighlight(options)) {
    const defs = getDefs(getColors(options.forceColor));
    return highlightTokens(defs, code);
  } else {
    return code;
  }
}
{
  let chalk, chalkWithForcedColor;
  exports.getChalk = ({
    forceColor
  }) => {
    var _chalk;
    (_chalk = chalk) != null ? _chalk : chalk = require("chalk");
    if (forceColor) {
      var _chalkWithForcedColor;
      (_chalkWithForcedColor = chalkWithForcedColor) != null ? _chalkWithForcedColor : chalkWithForcedColor = new chalk.constructor({
        enabled: true,
        level: 1
      });
      return chalkWithForcedColor;
    }
    return chalk;
  };
}

//# sourceMappingURL=index.js.map
