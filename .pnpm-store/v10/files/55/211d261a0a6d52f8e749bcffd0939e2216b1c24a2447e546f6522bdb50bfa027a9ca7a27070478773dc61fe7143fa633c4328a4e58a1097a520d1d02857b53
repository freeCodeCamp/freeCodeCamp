"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntaxKind = exports.ScanError = exports.ParseErrorCode = void 0;
exports.applyEdits = applyEdits;
exports.findNodeAtOffset = exports.findNodeAtLocation = exports.createScanner = void 0;
exports.format = format2;
exports.getNodeValue = exports.getNodePath = exports.getLocation = void 0;
exports.modify = modify;
exports.parseTree = exports.parse = void 0;
exports.printParseErrorCode = printParseErrorCode;
exports.visit = exports.stripComments = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function createScanner(text) {
  var ignoreTrivia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var len = text.length;
  var pos = 0,
    value = "",
    tokenOffset = 0,
    token = 16,
    lineNumber = 0,
    lineStartOffset = 0,
    tokenLineStartOffset = 0,
    prevTokenLineStartOffset = 0,
    scanError = 0;
  function scanHexDigits(count, exact) {
    var digits = 0;
    var value2 = 0;
    while (digits < count || !exact) {
      var ch = text.charCodeAt(pos);
      if (ch >= 48 && ch <= 57) {
        value2 = value2 * 16 + ch - 48;
      } else if (ch >= 65 && ch <= 70) {
        value2 = value2 * 16 + ch - 65 + 10;
      } else if (ch >= 97 && ch <= 102) {
        value2 = value2 * 16 + ch - 97 + 10;
      } else {
        break;
      }
      pos++;
      digits++;
    }
    if (digits < count) {
      value2 = -1;
    }
    return value2;
  }
  function setPosition(newPosition) {
    pos = newPosition;
    value = "";
    tokenOffset = 0;
    token = 16;
    scanError = 0;
  }
  function scanNumber() {
    var start = pos;
    if (text.charCodeAt(pos) === 48) {
      pos++;
    } else {
      pos++;
      while (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
      }
    }
    if (pos < text.length && text.charCodeAt(pos) === 46) {
      pos++;
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
      } else {
        scanError = 3;
        return text.substring(start, pos);
      }
    }
    var end = pos;
    if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
      pos++;
      if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) {
        pos++;
      }
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
        end = pos;
      } else {
        scanError = 3;
      }
    }
    return text.substring(start, end);
  }
  function scanString() {
    var result = "",
      start = pos;
    while (true) {
      if (pos >= len) {
        result += text.substring(start, pos);
        scanError = 2;
        break;
      }
      var ch = text.charCodeAt(pos);
      if (ch === 34) {
        result += text.substring(start, pos);
        pos++;
        break;
      }
      if (ch === 92) {
        result += text.substring(start, pos);
        pos++;
        if (pos >= len) {
          scanError = 2;
          break;
        }
        var ch2 = text.charCodeAt(pos++);
        switch (ch2) {
          case 34:
            result += '"';
            break;
          case 92:
            result += "\\";
            break;
          case 47:
            result += "/";
            break;
          case 98:
            result += "\b";
            break;
          case 102:
            result += "\f";
            break;
          case 110:
            result += "\n";
            break;
          case 114:
            result += "\r";
            break;
          case 116:
            result += "	";
            break;
          case 117:
            var ch3 = scanHexDigits(4, true);
            if (ch3 >= 0) {
              result += String.fromCharCode(ch3);
            } else {
              scanError = 4;
            }
            break;
          default:
            scanError = 5;
        }
        start = pos;
        continue;
      }
      if (ch >= 0 && ch <= 31) {
        if (isLineBreak(ch)) {
          result += text.substring(start, pos);
          scanError = 2;
          break;
        } else {
          scanError = 6;
        }
      }
      pos++;
    }
    return result;
  }
  function scanNext() {
    value = "";
    scanError = 0;
    tokenOffset = pos;
    lineStartOffset = lineNumber;
    prevTokenLineStartOffset = tokenLineStartOffset;
    if (pos >= len) {
      tokenOffset = len;
      return token = 17;
    }
    var code = text.charCodeAt(pos);
    if (isWhiteSpace(code)) {
      do {
        pos++;
        value += String.fromCharCode(code);
        code = text.charCodeAt(pos);
      } while (isWhiteSpace(code));
      return token = 15;
    }
    if (isLineBreak(code)) {
      pos++;
      value += String.fromCharCode(code);
      if (code === 13 && text.charCodeAt(pos) === 10) {
        pos++;
        value += "\n";
      }
      lineNumber++;
      tokenLineStartOffset = pos;
      return token = 14;
    }
    switch (code) {
      case 123:
        pos++;
        return token = 1;
      case 125:
        pos++;
        return token = 2;
      case 91:
        pos++;
        return token = 3;
      case 93:
        pos++;
        return token = 4;
      case 58:
        pos++;
        return token = 6;
      case 44:
        pos++;
        return token = 5;
      case 34:
        pos++;
        value = scanString();
        return token = 10;
      case 47:
        var start = pos - 1;
        if (text.charCodeAt(pos + 1) === 47) {
          pos += 2;
          while (pos < len) {
            if (isLineBreak(text.charCodeAt(pos))) {
              break;
            }
            pos++;
          }
          value = text.substring(start, pos);
          return token = 12;
        }
        if (text.charCodeAt(pos + 1) === 42) {
          pos += 2;
          var safeLength = len - 1;
          var commentClosed = false;
          while (pos < safeLength) {
            var ch = text.charCodeAt(pos);
            if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
              pos += 2;
              commentClosed = true;
              break;
            }
            pos++;
            if (isLineBreak(ch)) {
              if (ch === 13 && text.charCodeAt(pos) === 10) {
                pos++;
              }
              lineNumber++;
              tokenLineStartOffset = pos;
            }
          }
          if (!commentClosed) {
            pos++;
            scanError = 1;
          }
          value = text.substring(start, pos);
          return token = 13;
        }
        value += String.fromCharCode(code);
        pos++;
        return token = 16;
      case 45:
        value += String.fromCharCode(code);
        pos++;
        if (pos === len || !isDigit(text.charCodeAt(pos))) {
          return token = 16;
        }
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        value += scanNumber();
        return token = 11;
      default:
        while (pos < len && isUnknownContentCharacter(code)) {
          pos++;
          code = text.charCodeAt(pos);
        }
        if (tokenOffset !== pos) {
          value = text.substring(tokenOffset, pos);
          switch (value) {
            case "true":
              return token = 8;
            case "false":
              return token = 9;
            case "null":
              return token = 7;
          }
          return token = 16;
        }
        value += String.fromCharCode(code);
        pos++;
        return token = 16;
    }
  }
  function isUnknownContentCharacter(code) {
    if (isWhiteSpace(code) || isLineBreak(code)) {
      return false;
    }
    switch (code) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function scanNextNonTrivia() {
    var result;
    do {
      result = scanNext();
    } while (result >= 12 && result <= 15);
    return result;
  }
  return {
    setPosition: setPosition,
    getPosition: function getPosition() {
      return pos;
    },
    scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
    getToken: function getToken() {
      return token;
    },
    getTokenValue: function getTokenValue() {
      return value;
    },
    getTokenOffset: function getTokenOffset() {
      return tokenOffset;
    },
    getTokenLength: function getTokenLength() {
      return pos - tokenOffset;
    },
    getTokenStartLine: function getTokenStartLine() {
      return lineStartOffset;
    },
    getTokenStartCharacter: function getTokenStartCharacter() {
      return tokenOffset - prevTokenLineStartOffset;
    },
    getTokenError: function getTokenError() {
      return scanError;
    }
  };
}
function isWhiteSpace(ch) {
  return ch === 32 || ch === 9;
}
function isLineBreak(ch) {
  return ch === 10 || ch === 13;
}
function isDigit(ch) {
  return ch >= 48 && ch <= 57;
}
var CharacterCodes;
(function (CharacterCodes2) {
  CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
  CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
  CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
  CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
  CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
  CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
  CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
  CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
  CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
  CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
  CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
  CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
  CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
  CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
  CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
  CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
  CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
  CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
  CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
  CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
  CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
  CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
  CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
  CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
  CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
  CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
  CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
  CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
  CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
  CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
  CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
  CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
  CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
  CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
  CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
  CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
  CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
  CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
  CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
  CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
  CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
  CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
  CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
  CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
  CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
  CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
  CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
  CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
  CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
  CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
  CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
  CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
  CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
  CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
  CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
  CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
  CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
  CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
  CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
  CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
  CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
  CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
  CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
  CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
  CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
  CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
  CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
  CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
  CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
  CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
  CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
  CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
  CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
  CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
  CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
  CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
  CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
  CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
  CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
  CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
})(CharacterCodes || (CharacterCodes = {}));
var cachedSpaces = new Array(20).fill(0).map(function (_, index) {
  return " ".repeat(index);
});
var maxCachedValues = 200;
var cachedBreakLinesWithSpaces = {
  " ": {
    "\n": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\n" + " ".repeat(index);
    }),
    "\r": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\r" + " ".repeat(index);
    }),
    "\r\n": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\r\n" + " ".repeat(index);
    })
  },
  "	": {
    "\n": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\n" + "	".repeat(index);
    }),
    "\r": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\r" + "	".repeat(index);
    }),
    "\r\n": new Array(maxCachedValues).fill(0).map(function (_, index) {
      return "\r\n" + "	".repeat(index);
    })
  }
};
var supportedEols = ["\n", "\r", "\r\n"];
function format(documentText, range, options) {
  var initialIndentLevel;
  var formatText;
  var formatTextStart;
  var rangeStart;
  var rangeEnd;
  if (range) {
    rangeStart = range.offset;
    rangeEnd = rangeStart + range.length;
    formatTextStart = rangeStart;
    while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
      formatTextStart--;
    }
    var endOffset = rangeEnd;
    while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
      endOffset++;
    }
    formatText = documentText.substring(formatTextStart, endOffset);
    initialIndentLevel = computeIndentLevel(formatText, options);
  } else {
    formatText = documentText;
    initialIndentLevel = 0;
    formatTextStart = 0;
    rangeStart = 0;
    rangeEnd = documentText.length;
  }
  var eol = getEOL(options, documentText);
  var eolFastPathSupported = supportedEols.includes(eol);
  var numberLineBreaks = 0;
  var indentLevel = 0;
  var indentValue;
  if (options.insertSpaces) {
    var _cachedSpaces;
    indentValue = (_cachedSpaces = cachedSpaces[options.tabSize || 4]) !== null && _cachedSpaces !== void 0 ? _cachedSpaces : repeat(cachedSpaces[1], options.tabSize || 4);
  } else {
    indentValue = "	";
  }
  var indentType = indentValue === "	" ? "	" : " ";
  var scanner = createScanner(formatText, false);
  var hasError = false;
  function newLinesAndIndent() {
    if (numberLineBreaks > 1) {
      return repeat(eol, numberLineBreaks) + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    var amountOfSpaces = indentValue.length * (initialIndentLevel + indentLevel);
    if (!eolFastPathSupported || amountOfSpaces > cachedBreakLinesWithSpaces[indentType][eol].length) {
      return eol + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    if (amountOfSpaces <= 0) {
      return eol;
    }
    return cachedBreakLinesWithSpaces[indentType][eol][amountOfSpaces];
  }
  function scanNext() {
    var token = scanner.scan();
    numberLineBreaks = 0;
    while (token === 15 || token === 14) {
      if (token === 14 && options.keepLines) {
        numberLineBreaks += 1;
      } else if (token === 14) {
        numberLineBreaks = 1;
      }
      token = scanner.scan();
    }
    hasError = token === 16 || scanner.getTokenError() !== 0;
    return token;
  }
  var editOperations = [];
  function addEdit(text, startOffset, endOffset) {
    if (!hasError && (!range || startOffset < rangeEnd && endOffset > rangeStart) && documentText.substring(startOffset, endOffset) !== text) {
      editOperations.push({
        offset: startOffset,
        length: endOffset - startOffset,
        content: text
      });
    }
  }
  var firstToken = scanNext();
  if (options.keepLines && numberLineBreaks > 0) {
    addEdit(repeat(eol, numberLineBreaks), 0, 0);
  }
  if (firstToken !== 17) {
    var firstTokenStart = scanner.getTokenOffset() + formatTextStart;
    var initialIndent = indentValue.length * initialIndentLevel < 20 && options.insertSpaces ? cachedSpaces[indentValue.length * initialIndentLevel] : repeat(indentValue, initialIndentLevel);
    addEdit(initialIndent, formatTextStart, firstTokenStart);
  }
  while (firstToken !== 17) {
    var firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
    var secondToken = scanNext();
    var replaceContent = "";
    var needsLineBreak = false;
    while (numberLineBreaks === 0 && (secondToken === 12 || secondToken === 13)) {
      var commentTokenStart = scanner.getTokenOffset() + formatTextStart;
      addEdit(cachedSpaces[1], firstTokenEnd, commentTokenStart);
      firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
      needsLineBreak = secondToken === 12;
      replaceContent = needsLineBreak ? newLinesAndIndent() : "";
      secondToken = scanNext();
    }
    if (secondToken === 2) {
      if (firstToken !== 1) {
        indentLevel--;
      }
      ;
      if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 1) {
        replaceContent = newLinesAndIndent();
      } else if (options.keepLines) {
        replaceContent = cachedSpaces[1];
      }
    } else if (secondToken === 4) {
      if (firstToken !== 3) {
        indentLevel--;
      }
      ;
      if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 3) {
        replaceContent = newLinesAndIndent();
      } else if (options.keepLines) {
        replaceContent = cachedSpaces[1];
      }
    } else {
      switch (firstToken) {
        case 3:
        case 1:
          indentLevel++;
          if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
            replaceContent = newLinesAndIndent();
          } else {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 5:
          if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
            replaceContent = newLinesAndIndent();
          } else {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 12:
          replaceContent = newLinesAndIndent();
          break;
        case 13:
          if (numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (!needsLineBreak) {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 6:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (!needsLineBreak) {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 10:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (secondToken === 6 && !needsLineBreak) {
            replaceContent = "";
          }
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else {
            if ((secondToken === 12 || secondToken === 13) && !needsLineBreak) {
              replaceContent = cachedSpaces[1];
            } else if (secondToken !== 5 && secondToken !== 17) {
              hasError = true;
            }
          }
          break;
        case 16:
          hasError = true;
          break;
      }
      if (numberLineBreaks > 0 && (secondToken === 12 || secondToken === 13)) {
        replaceContent = newLinesAndIndent();
      }
    }
    if (secondToken === 17) {
      if (options.keepLines && numberLineBreaks > 0) {
        replaceContent = newLinesAndIndent();
      } else {
        replaceContent = options.insertFinalNewline ? eol : "";
      }
    }
    var secondTokenStart = scanner.getTokenOffset() + formatTextStart;
    addEdit(replaceContent, firstTokenEnd, secondTokenStart);
    firstToken = secondToken;
  }
  return editOperations;
}
function repeat(s, count) {
  var result = "";
  for (var i = 0; i < count; i++) {
    result += s;
  }
  return result;
}
function computeIndentLevel(content, options) {
  var i = 0;
  var nChars = 0;
  var tabSize = options.tabSize || 4;
  while (i < content.length) {
    var ch = content.charAt(i);
    if (ch === cachedSpaces[1]) {
      nChars++;
    } else if (ch === "	") {
      nChars += tabSize;
    } else {
      break;
    }
    i++;
  }
  return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i);
    if (ch === "\r") {
      if (i + 1 < text.length && text.charAt(i + 1) === "\n") {
        return "\r\n";
      }
      return "\r";
    } else if (ch === "\n") {
      return "\n";
    }
  }
  return options && options.eol || "\n";
}
function isEOL(text, offset) {
  return "\r\n".indexOf(text.charAt(offset)) !== -1;
}
var ParseOptions;
(function (ParseOptions2) {
  ParseOptions2.DEFAULT = {
    allowTrailingComma: false
  };
})(ParseOptions || (ParseOptions = {}));
function getLocation(text, position) {
  var segments = [];
  var earlyReturnException = new Object();
  var previousNode = void 0;
  var previousNodeInst = {
    value: {},
    offset: 0,
    length: 0,
    type: "object",
    parent: void 0
  };
  var isAtPropertyKey = false;
  function setPreviousNode(value, offset, length, type) {
    previousNodeInst.value = value;
    previousNodeInst.offset = offset;
    previousNodeInst.length = length;
    previousNodeInst.type = type;
    previousNodeInst.colonOffset = void 0;
    previousNode = previousNodeInst;
  }
  try {
    visit(text, {
      onObjectBegin: function onObjectBegin(offset, length) {
        if (position <= offset) {
          throw earlyReturnException;
        }
        previousNode = void 0;
        isAtPropertyKey = position > offset;
        segments.push("");
      },
      onObjectProperty: function onObjectProperty(name, offset, length) {
        if (position < offset) {
          throw earlyReturnException;
        }
        setPreviousNode(name, offset, length, "property");
        segments[segments.length - 1] = name;
        if (position <= offset + length) {
          throw earlyReturnException;
        }
      },
      onObjectEnd: function onObjectEnd(offset, length) {
        if (position <= offset) {
          throw earlyReturnException;
        }
        previousNode = void 0;
        segments.pop();
      },
      onArrayBegin: function onArrayBegin(offset, length) {
        if (position <= offset) {
          throw earlyReturnException;
        }
        previousNode = void 0;
        segments.push(0);
      },
      onArrayEnd: function onArrayEnd(offset, length) {
        if (position <= offset) {
          throw earlyReturnException;
        }
        previousNode = void 0;
        segments.pop();
      },
      onLiteralValue: function onLiteralValue(value, offset, length) {
        if (position < offset) {
          throw earlyReturnException;
        }
        setPreviousNode(value, offset, length, getNodeType(value));
        if (position <= offset + length) {
          throw earlyReturnException;
        }
      },
      onSeparator: function onSeparator(sep, offset, length) {
        if (position <= offset) {
          throw earlyReturnException;
        }
        if (sep === ":" && previousNode && previousNode.type === "property") {
          previousNode.colonOffset = offset;
          isAtPropertyKey = false;
          previousNode = void 0;
        } else if (sep === ",") {
          var last = segments[segments.length - 1];
          if (typeof last === "number") {
            segments[segments.length - 1] = last + 1;
          } else {
            isAtPropertyKey = true;
            segments[segments.length - 1] = "";
          }
          previousNode = void 0;
        }
      }
    });
  } catch (e) {
    if (e !== earlyReturnException) {
      throw e;
    }
  }
  return {
    path: segments,
    previousNode: previousNode,
    isAtPropertyKey: isAtPropertyKey,
    matches: function matches(pattern) {
      var k = 0;
      for (var i = 0; k < pattern.length && i < segments.length; i++) {
        if (pattern[k] === segments[i] || pattern[k] === "*") {
          k++;
        } else if (pattern[k] !== "**") {
          return false;
        }
      }
      return k === pattern.length;
    }
  };
}
function parse(text) {
  var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ParseOptions.DEFAULT;
  var currentProperty = null;
  var currentParent = [];
  var previousParents = [];
  function onValue(value) {
    if (Array.isArray(currentParent)) {
      currentParent.push(value);
    } else if (currentProperty !== null) {
      currentParent[currentProperty] = value;
    }
  }
  var visitor = {
    onObjectBegin: function onObjectBegin() {
      var object = {};
      onValue(object);
      previousParents.push(currentParent);
      currentParent = object;
      currentProperty = null;
    },
    onObjectProperty: function onObjectProperty(name) {
      currentProperty = name;
    },
    onObjectEnd: function onObjectEnd() {
      currentParent = previousParents.pop();
    },
    onArrayBegin: function onArrayBegin() {
      var array = [];
      onValue(array);
      previousParents.push(currentParent);
      currentParent = array;
      currentProperty = null;
    },
    onArrayEnd: function onArrayEnd() {
      currentParent = previousParents.pop();
    },
    onLiteralValue: onValue,
    onError: function onError(error, offset, length) {
      errors.push({
        error: error,
        offset: offset,
        length: length
      });
    }
  };
  visit(text, visitor, options);
  return currentParent[0];
}
function parseTree(text) {
  var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ParseOptions.DEFAULT;
  var currentParent = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0
  };
  function ensurePropertyComplete(endOffset) {
    if (currentParent.type === "property") {
      currentParent.length = endOffset - currentParent.offset;
      currentParent = currentParent.parent;
    }
  }
  function onValue(valueNode) {
    currentParent.children.push(valueNode);
    return valueNode;
  }
  var visitor = {
    onObjectBegin: function onObjectBegin(offset) {
      currentParent = onValue({
        type: "object",
        offset: offset,
        length: -1,
        parent: currentParent,
        children: []
      });
    },
    onObjectProperty: function onObjectProperty(name, offset, length) {
      currentParent = onValue({
        type: "property",
        offset: offset,
        length: -1,
        parent: currentParent,
        children: []
      });
      currentParent.children.push({
        type: "string",
        value: name,
        offset: offset,
        length: length,
        parent: currentParent
      });
    },
    onObjectEnd: function onObjectEnd(offset, length) {
      ensurePropertyComplete(offset + length);
      currentParent.length = offset + length - currentParent.offset;
      currentParent = currentParent.parent;
      ensurePropertyComplete(offset + length);
    },
    onArrayBegin: function onArrayBegin(offset, length) {
      currentParent = onValue({
        type: "array",
        offset: offset,
        length: -1,
        parent: currentParent,
        children: []
      });
    },
    onArrayEnd: function onArrayEnd(offset, length) {
      currentParent.length = offset + length - currentParent.offset;
      currentParent = currentParent.parent;
      ensurePropertyComplete(offset + length);
    },
    onLiteralValue: function onLiteralValue(value, offset, length) {
      onValue({
        type: getNodeType(value),
        offset: offset,
        length: length,
        parent: currentParent,
        value: value
      });
      ensurePropertyComplete(offset + length);
    },
    onSeparator: function onSeparator(sep, offset, length) {
      if (currentParent.type === "property") {
        if (sep === ":") {
          currentParent.colonOffset = offset;
        } else if (sep === ",") {
          ensurePropertyComplete(offset);
        }
      }
    },
    onError: function onError(error, offset, length) {
      errors.push({
        error: error,
        offset: offset,
        length: length
      });
    }
  };
  visit(text, visitor, options);
  var result = currentParent.children[0];
  if (result) {
    delete result.parent;
  }
  return result;
}
function findNodeAtLocation(root, path) {
  if (!root) {
    return void 0;
  }
  var node = root;
  var _iterator = _createForOfIteratorHelper(path),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var segment = _step.value;
      if (typeof segment === "string") {
        if (node.type !== "object" || !Array.isArray(node.children)) {
          return void 0;
        }
        var found = false;
        var _iterator2 = _createForOfIteratorHelper(node.children),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var propertyNode = _step2.value;
            if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment && propertyNode.children.length === 2) {
              node = propertyNode.children[1];
              found = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (!found) {
          return void 0;
        }
      } else {
        var index = segment;
        if (node.type !== "array" || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
          return void 0;
        }
        node = node.children[index];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return node;
}
function getNodePath(node) {
  if (!node.parent || !node.parent.children) {
    return [];
  }
  var path = getNodePath(node.parent);
  if (node.parent.type === "property") {
    var key = node.parent.children[0].value;
    path.push(key);
  } else if (node.parent.type === "array") {
    var index = node.parent.children.indexOf(node);
    if (index !== -1) {
      path.push(index);
    }
  }
  return path;
}
function getNodeValue(node) {
  switch (node.type) {
    case "array":
      return node.children.map(getNodeValue);
    case "object":
      var obj = Object.create(null);
      var _iterator3 = _createForOfIteratorHelper(node.children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var prop = _step3.value;
          var valueNode = prop.children[1];
          if (valueNode) {
            obj[prop.children[0].value] = getNodeValue(valueNode);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return obj;
    case "null":
    case "string":
    case "number":
    case "boolean":
      return node.value;
    default:
      return void 0;
  }
}
function contains(node, offset) {
  var includeRightBound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return offset >= node.offset && offset < node.offset + node.length || includeRightBound && offset === node.offset + node.length;
}
function findNodeAtOffset(node, offset) {
  var includeRightBound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (contains(node, offset, includeRightBound)) {
    var children = node.children;
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length && children[i].offset <= offset; i++) {
        var item = findNodeAtOffset(children[i], offset, includeRightBound);
        if (item) {
          return item;
        }
      }
    }
    return node;
  }
  return void 0;
}
function visit(text, visitor) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ParseOptions.DEFAULT;
  var _scanner = createScanner(text, false);
  var _jsonPath = [];
  var suppressedCallbacks = 0;
  function toNoArgVisit(visitFunction) {
    return visitFunction ? function () {
      return suppressedCallbacks === 0 && visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
    } : function () {
      return true;
    };
  }
  function toOneArgVisit(visitFunction) {
    return visitFunction ? function (arg) {
      return suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
    } : function () {
      return true;
    };
  }
  function toOneArgVisitWithPath(visitFunction) {
    return visitFunction ? function (arg) {
      return suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), function () {
        return _jsonPath.slice();
      });
    } : function () {
      return true;
    };
  }
  function toBeginVisit(visitFunction) {
    return visitFunction ? function () {
      if (suppressedCallbacks > 0) {
        suppressedCallbacks++;
      } else {
        var cbReturn = visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), function () {
          return _jsonPath.slice();
        });
        if (cbReturn === false) {
          suppressedCallbacks = 1;
        }
      }
    } : function () {
      return true;
    };
  }
  function toEndVisit(visitFunction) {
    return visitFunction ? function () {
      if (suppressedCallbacks > 0) {
        suppressedCallbacks--;
      }
      if (suppressedCallbacks === 0) {
        visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
      }
    } : function () {
      return true;
    };
  }
  var onObjectBegin = toBeginVisit(visitor.onObjectBegin),
    onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty),
    onObjectEnd = toEndVisit(visitor.onObjectEnd),
    onArrayBegin = toBeginVisit(visitor.onArrayBegin),
    onArrayEnd = toEndVisit(visitor.onArrayEnd),
    onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue),
    onSeparator = toOneArgVisit(visitor.onSeparator),
    onComment = toNoArgVisit(visitor.onComment),
    onError = toOneArgVisit(visitor.onError);
  var disallowComments = options && options.disallowComments;
  var allowTrailingComma = options && options.allowTrailingComma;
  function scanNext() {
    while (true) {
      var token = _scanner.scan();
      switch (_scanner.getTokenError()) {
        case 4:
          handleError(14);
          break;
        case 5:
          handleError(15);
          break;
        case 3:
          handleError(13);
          break;
        case 1:
          if (!disallowComments) {
            handleError(11);
          }
          break;
        case 2:
          handleError(12);
          break;
        case 6:
          handleError(16);
          break;
      }
      switch (token) {
        case 12:
        case 13:
          if (disallowComments) {
            handleError(10);
          } else {
            onComment();
          }
          break;
        case 16:
          handleError(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return token;
      }
    }
  }
  function handleError(error) {
    var skipUntilAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var skipUntil = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    onError(error);
    if (skipUntilAfter.length + skipUntil.length > 0) {
      var token = _scanner.getToken();
      while (token !== 17) {
        if (skipUntilAfter.indexOf(token) !== -1) {
          scanNext();
          break;
        } else if (skipUntil.indexOf(token) !== -1) {
          break;
        }
        token = scanNext();
      }
    }
  }
  function parseString(isValue) {
    var value = _scanner.getTokenValue();
    if (isValue) {
      onLiteralValue(value);
    } else {
      onObjectProperty(value);
      _jsonPath.push(value);
    }
    scanNext();
    return true;
  }
  function parseLiteral() {
    switch (_scanner.getToken()) {
      case 11:
        var tokenValue = _scanner.getTokenValue();
        var value = Number(tokenValue);
        if (isNaN(value)) {
          handleError(2);
          value = 0;
        }
        onLiteralValue(value);
        break;
      case 7:
        onLiteralValue(null);
        break;
      case 8:
        onLiteralValue(true);
        break;
      case 9:
        onLiteralValue(false);
        break;
      default:
        return false;
    }
    scanNext();
    return true;
  }
  function parseProperty() {
    if (_scanner.getToken() !== 10) {
      handleError(3, [], [2, 5]);
      return false;
    }
    parseString(false);
    if (_scanner.getToken() === 6) {
      onSeparator(":");
      scanNext();
      if (!parseValue()) {
        handleError(4, [], [2, 5]);
      }
    } else {
      handleError(5, [], [2, 5]);
    }
    _jsonPath.pop();
    return true;
  }
  function parseObject() {
    onObjectBegin();
    scanNext();
    var needsComma = false;
    while (_scanner.getToken() !== 2 && _scanner.getToken() !== 17) {
      if (_scanner.getToken() === 5) {
        if (!needsComma) {
          handleError(4, [], []);
        }
        onSeparator(",");
        scanNext();
        if (_scanner.getToken() === 2 && allowTrailingComma) {
          break;
        }
      } else if (needsComma) {
        handleError(6, [], []);
      }
      if (!parseProperty()) {
        handleError(4, [], [2, 5]);
      }
      needsComma = true;
    }
    onObjectEnd();
    if (_scanner.getToken() !== 2) {
      handleError(7, [2], []);
    } else {
      scanNext();
    }
    return true;
  }
  function parseArray() {
    onArrayBegin();
    scanNext();
    var isFirstElement = true;
    var needsComma = false;
    while (_scanner.getToken() !== 4 && _scanner.getToken() !== 17) {
      if (_scanner.getToken() === 5) {
        if (!needsComma) {
          handleError(4, [], []);
        }
        onSeparator(",");
        scanNext();
        if (_scanner.getToken() === 4 && allowTrailingComma) {
          break;
        }
      } else if (needsComma) {
        handleError(6, [], []);
      }
      if (isFirstElement) {
        _jsonPath.push(0);
        isFirstElement = false;
      } else {
        _jsonPath[_jsonPath.length - 1]++;
      }
      if (!parseValue()) {
        handleError(4, [], [4, 5]);
      }
      needsComma = true;
    }
    onArrayEnd();
    if (!isFirstElement) {
      _jsonPath.pop();
    }
    if (_scanner.getToken() !== 4) {
      handleError(8, [4], []);
    } else {
      scanNext();
    }
    return true;
  }
  function parseValue() {
    switch (_scanner.getToken()) {
      case 3:
        return parseArray();
      case 1:
        return parseObject();
      case 10:
        return parseString(true);
      default:
        return parseLiteral();
    }
  }
  scanNext();
  if (_scanner.getToken() === 17) {
    if (options.allowEmptyContent) {
      return true;
    }
    handleError(4, [], []);
    return false;
  }
  if (!parseValue()) {
    handleError(4, [], []);
    return false;
  }
  if (_scanner.getToken() !== 17) {
    handleError(9, [], []);
  }
  return true;
}
function stripComments(text, replaceCh) {
  var _scanner = createScanner(text),
    parts = [],
    kind,
    offset = 0,
    pos;
  do {
    pos = _scanner.getPosition();
    kind = _scanner.scan();
    switch (kind) {
      case 12:
      case 13:
      case 17:
        if (offset !== pos) {
          parts.push(text.substring(offset, pos));
        }
        if (replaceCh !== void 0) {
          parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
        }
        offset = _scanner.getPosition();
        break;
    }
  } while (kind !== 17);
  return parts.join("");
}
function getNodeType(value) {
  switch (_typeof(value)) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object":
      {
        if (!value) {
          return "null";
        } else if (Array.isArray(value)) {
          return "array";
        }
        return "object";
      }
    default:
      return "null";
  }
}
function setProperty(text, originalPath, value, options) {
  var path = originalPath.slice();
  var errors = [];
  var root = parseTree(text, errors);
  var parent = void 0;
  var lastSegment = void 0;
  while (path.length > 0) {
    lastSegment = path.pop();
    parent = findNodeAtLocation(root, path);
    if (parent === void 0 && value !== void 0) {
      if (typeof lastSegment === "string") {
        value = _defineProperty({}, lastSegment, value);
      } else {
        value = [value];
      }
    } else {
      break;
    }
  }
  if (!parent) {
    if (value === void 0) {
      throw new Error("Can not delete in empty document");
    }
    return withFormatting(text, {
      offset: root ? root.offset : 0,
      length: root ? root.length : 0,
      content: JSON.stringify(value)
    }, options);
  } else if (parent.type === "object" && typeof lastSegment === "string" && Array.isArray(parent.children)) {
    var existing = findNodeAtLocation(parent, [lastSegment]);
    if (existing !== void 0) {
      if (value === void 0) {
        if (!existing.parent) {
          throw new Error("Malformed AST");
        }
        var propertyIndex = parent.children.indexOf(existing.parent);
        var removeBegin;
        var removeEnd = existing.parent.offset + existing.parent.length;
        if (propertyIndex > 0) {
          var previous = parent.children[propertyIndex - 1];
          removeBegin = previous.offset + previous.length;
        } else {
          removeBegin = parent.offset + 1;
          if (parent.children.length > 1) {
            var next = parent.children[1];
            removeEnd = next.offset;
          }
        }
        return withFormatting(text, {
          offset: removeBegin,
          length: removeEnd - removeBegin,
          content: ""
        }, options);
      } else {
        return withFormatting(text, {
          offset: existing.offset,
          length: existing.length,
          content: JSON.stringify(value)
        }, options);
      }
    } else {
      if (value === void 0) {
        return [];
      }
      var newProperty = "".concat(JSON.stringify(lastSegment), ": ").concat(JSON.stringify(value));
      var index = options.getInsertionIndex ? options.getInsertionIndex(parent.children.map(function (p) {
        return p.children[0].value;
      })) : parent.children.length;
      var edit;
      if (index > 0) {
        var _previous = parent.children[index - 1];
        edit = {
          offset: _previous.offset + _previous.length,
          length: 0,
          content: "," + newProperty
        };
      } else if (parent.children.length === 0) {
        edit = {
          offset: parent.offset + 1,
          length: 0,
          content: newProperty
        };
      } else {
        edit = {
          offset: parent.offset + 1,
          length: 0,
          content: newProperty + ","
        };
      }
      return withFormatting(text, edit, options);
    }
  } else if (parent.type === "array" && typeof lastSegment === "number" && Array.isArray(parent.children)) {
    var insertIndex = lastSegment;
    if (insertIndex === -1) {
      var _newProperty = "".concat(JSON.stringify(value));
      var _edit;
      if (parent.children.length === 0) {
        _edit = {
          offset: parent.offset + 1,
          length: 0,
          content: _newProperty
        };
      } else {
        var _previous2 = parent.children[parent.children.length - 1];
        _edit = {
          offset: _previous2.offset + _previous2.length,
          length: 0,
          content: "," + _newProperty
        };
      }
      return withFormatting(text, _edit, options);
    } else if (value === void 0 && parent.children.length >= 0) {
      var removalIndex = lastSegment;
      var toRemove = parent.children[removalIndex];
      var _edit2;
      if (parent.children.length === 1) {
        _edit2 = {
          offset: parent.offset + 1,
          length: parent.length - 2,
          content: ""
        };
      } else if (parent.children.length - 1 === removalIndex) {
        var _previous3 = parent.children[removalIndex - 1];
        var offset = _previous3.offset + _previous3.length;
        var parentEndOffset = parent.offset + parent.length;
        _edit2 = {
          offset: offset,
          length: parentEndOffset - 2 - offset,
          content: ""
        };
      } else {
        _edit2 = {
          offset: toRemove.offset,
          length: parent.children[removalIndex + 1].offset - toRemove.offset,
          content: ""
        };
      }
      return withFormatting(text, _edit2, options);
    } else if (value !== void 0) {
      var _edit3;
      var _newProperty2 = "".concat(JSON.stringify(value));
      if (!options.isArrayInsertion && parent.children.length > lastSegment) {
        var toModify = parent.children[lastSegment];
        _edit3 = {
          offset: toModify.offset,
          length: toModify.length,
          content: _newProperty2
        };
      } else if (parent.children.length === 0 || lastSegment === 0) {
        _edit3 = {
          offset: parent.offset + 1,
          length: 0,
          content: parent.children.length === 0 ? _newProperty2 : _newProperty2 + ","
        };
      } else {
        var _index = lastSegment > parent.children.length ? parent.children.length : lastSegment;
        var _previous4 = parent.children[_index - 1];
        _edit3 = {
          offset: _previous4.offset + _previous4.length,
          length: 0,
          content: "," + _newProperty2
        };
      }
      return withFormatting(text, _edit3, options);
    } else {
      throw new Error("Can not ".concat(value === void 0 ? "remove" : options.isArrayInsertion ? "insert" : "modify", " Array index ").concat(insertIndex, " as length is not sufficient"));
    }
  } else {
    throw new Error("Can not add ".concat(typeof lastSegment !== "number" ? "index" : "property", " to parent of type ").concat(parent.type));
  }
}
function withFormatting(text, edit, options) {
  if (!options.formattingOptions) {
    return [edit];
  }
  var newText = applyEdit(text, edit);
  var begin = edit.offset;
  var end = edit.offset + edit.content.length;
  if (edit.length === 0 || edit.content.length === 0) {
    while (begin > 0 && !isEOL(newText, begin - 1)) {
      begin--;
    }
    while (end < newText.length && !isEOL(newText, end)) {
      end++;
    }
  }
  var edits = format(newText, {
    offset: begin,
    length: end - begin
  }, _objectSpread(_objectSpread({}, options.formattingOptions), {}, {
    keepLines: false
  }));
  for (var i = edits.length - 1; i >= 0; i--) {
    var edit2 = edits[i];
    newText = applyEdit(newText, edit2);
    begin = Math.min(begin, edit2.offset);
    end = Math.max(end, edit2.offset + edit2.length);
    end += edit2.content.length - edit2.length;
  }
  var editLength = text.length - (newText.length - end) - begin;
  return [{
    offset: begin,
    length: editLength,
    content: newText.substring(begin, end)
  }];
}
function applyEdit(text, edit) {
  return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
}
var createScanner2 = exports.createScanner = createScanner;
var ScanError;
(function (ScanError2) {
  ScanError2[ScanError2["None"] = 0] = "None";
  ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
  ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
  ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
  ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
  ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
  ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
})(ScanError || (exports.ScanError = ScanError = {}));
var SyntaxKind;
(function (SyntaxKind2) {
  SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
  SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
  SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
  SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
  SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
  SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
  SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
  SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
  SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
  SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
  SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
  SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
  SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
  SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
  SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
  SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
  SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
})(SyntaxKind || (exports.SyntaxKind = SyntaxKind = {}));
var getLocation2 = exports.getLocation = getLocation;
var parse2 = exports.parse = parse;
var parseTree2 = exports.parseTree = parseTree;
var findNodeAtLocation2 = exports.findNodeAtLocation = findNodeAtLocation;
var findNodeAtOffset2 = exports.findNodeAtOffset = findNodeAtOffset;
var getNodePath2 = exports.getNodePath = getNodePath;
var getNodeValue2 = exports.getNodeValue = getNodeValue;
var visit2 = exports.visit = visit;
var stripComments2 = exports.stripComments = stripComments;
var ParseErrorCode;
(function (ParseErrorCode2) {
  ParseErrorCode2[ParseErrorCode2["InvalidSymbol"] = 1] = "InvalidSymbol";
  ParseErrorCode2[ParseErrorCode2["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
  ParseErrorCode2[ParseErrorCode2["PropertyNameExpected"] = 3] = "PropertyNameExpected";
  ParseErrorCode2[ParseErrorCode2["ValueExpected"] = 4] = "ValueExpected";
  ParseErrorCode2[ParseErrorCode2["ColonExpected"] = 5] = "ColonExpected";
  ParseErrorCode2[ParseErrorCode2["CommaExpected"] = 6] = "CommaExpected";
  ParseErrorCode2[ParseErrorCode2["CloseBraceExpected"] = 7] = "CloseBraceExpected";
  ParseErrorCode2[ParseErrorCode2["CloseBracketExpected"] = 8] = "CloseBracketExpected";
  ParseErrorCode2[ParseErrorCode2["EndOfFileExpected"] = 9] = "EndOfFileExpected";
  ParseErrorCode2[ParseErrorCode2["InvalidCommentToken"] = 10] = "InvalidCommentToken";
  ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
  ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
  ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
  ParseErrorCode2[ParseErrorCode2["InvalidUnicode"] = 14] = "InvalidUnicode";
  ParseErrorCode2[ParseErrorCode2["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
  ParseErrorCode2[ParseErrorCode2["InvalidCharacter"] = 16] = "InvalidCharacter";
})(ParseErrorCode || (exports.ParseErrorCode = ParseErrorCode = {}));
function printParseErrorCode(code) {
  switch (code) {
    case 1:
      return "InvalidSymbol";
    case 2:
      return "InvalidNumberFormat";
    case 3:
      return "PropertyNameExpected";
    case 4:
      return "ValueExpected";
    case 5:
      return "ColonExpected";
    case 6:
      return "CommaExpected";
    case 7:
      return "CloseBraceExpected";
    case 8:
      return "CloseBracketExpected";
    case 9:
      return "EndOfFileExpected";
    case 10:
      return "InvalidCommentToken";
    case 11:
      return "UnexpectedEndOfComment";
    case 12:
      return "UnexpectedEndOfString";
    case 13:
      return "UnexpectedEndOfNumber";
    case 14:
      return "InvalidUnicode";
    case 15:
      return "InvalidEscapeCharacter";
    case 16:
      return "InvalidCharacter";
  }
  return "<unknown ParseErrorCode>";
}
function format2(documentText, range, options) {
  return format(documentText, range, options);
}
function modify(text, path, value, options) {
  return setProperty(text, path, value, options);
}
function applyEdits(text, edits) {
  var sortedEdits = edits.slice(0).sort(function (a, b) {
    var diff = a.offset - b.offset;
    if (diff === 0) {
      return a.length - b.length;
    }
    return diff;
  });
  var lastModifiedOffset = text.length;
  for (var i = sortedEdits.length - 1; i >= 0; i--) {
    var e = sortedEdits[i];
    if (e.offset + e.length <= lastModifiedOffset) {
      text = applyEdit(text, e);
    } else {
      throw new Error("Overlapping edit");
    }
    lastModifiedOffset = e.offset;
  }
  return text;
}