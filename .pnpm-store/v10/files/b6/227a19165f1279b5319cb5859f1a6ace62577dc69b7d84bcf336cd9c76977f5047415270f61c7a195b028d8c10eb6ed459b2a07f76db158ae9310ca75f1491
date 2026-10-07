"use strict";

exports.__esModule = true;
exports.FIELDS = void 0;
exports["default"] = tokenize;
var t = _interopRequireWildcard(require("./tokenTypes"));
var _unescapable, _wordDelimiters;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
var hex = {};
var hexChars = "0123456789abcdefABCDEF";
for (var i = 0; i < hexChars.length; i++) {
  hex[hexChars.charCodeAt(i)] = true;
}

/**
 *  Returns the last index of the bar css word
 * @param {string} css The string in which the word begins
 * @param {number} start The index into the string where word's first letter occurs
 */
function consumeWord(css, start) {
  var next = start;
  var code;
  do {
    code = css.charCodeAt(next);
    if (wordDelimiters[code]) {
      return next - 1;
    } else if (code === t.backslash) {
      next = consumeEscape(css, next) + 1;
    } else {
      // All other characters are part of the word
      next++;
    }
  } while (next < css.length);
  return next - 1;
}

/**
 *  Returns the last index of the escape sequence
 * @param {string} css The string in which the sequence begins
 * @param {number} start The index into the string where escape character (`\`) occurs.
 */
function consumeEscape(css, start) {
  var next = start;
  var code = css.charCodeAt(next + 1);
  if (unescapable[code]) {
    // just consume the escape char
  } else if (hex[code]) {
    var hexDigits = 0;
    // consume up to 6 hex chars
    do {
      next++;
      hexDigits++;
      code = css.charCodeAt(next + 1);
    } while (hex[code] && hexDigits < 6);
    // if fewer than 6 hex chars, a trailing space ends the escape
    if (hexDigits < 6 && code === t.space) {
      next++;
    }
  } else {
    // the next char is part of the current word
    next++;
  }
  return next;
}
var FIELDS = {
  TYPE: 0,
  START_LINE: 1,
  START_COL: 2,
  END_LINE: 3,
  END_COL: 4,
  START_POS: 5,
  END_POS: 6
};
exports.FIELDS = FIELDS;
function tokenize(input) {
  var tokens = [];
  var css = input.css.valueOf();
  var _css = css,
    length = _css.length;
  var offset = -1;
  var line = 1;
  var start = 0;
  var end = 0;
  var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
  function unclosed(what, fix) {
    if (input.safe) {
      // fyi: this is never set to true.
      css += fix;
      next = css.length - 1;
    } else {
      throw input.error('Unclosed ' + what, line, start - offset, start);
    }
  }
  while (start < length) {
    code = css.charCodeAt(start);
    if (code === t.newline) {
      offset = start;
      line += 1;
    }
    switch (code) {
      case t.space:
      case t.tab:
      case t.newline:
      case t.cr:
      case t.feed:
        next = start;
        do {
          next += 1;
          code = css.charCodeAt(next);
          if (code === t.newline) {
            offset = next;
            line += 1;
          }
        } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);
        tokenType = t.space;
        endLine = line;
        endColumn = next - offset - 1;
        end = next;
        break;
      case t.plus:
      case t.greaterThan:
      case t.tilde:
      case t.pipe:
        next = start;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);
        tokenType = t.combinator;
        endLine = line;
        endColumn = start - offset;
        end = next;
        break;

      // Consume these characters as single tokens.
      case t.asterisk:
      case t.ampersand:
      case t.bang:
      case t.comma:
      case t.equals:
      case t.dollar:
      case t.caret:
      case t.openSquare:
      case t.closeSquare:
      case t.colon:
      case t.semicolon:
      case t.openParenthesis:
      case t.closeParenthesis:
        next = start;
        tokenType = code;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;
      case t.singleQuote:
      case t.doubleQuote:
        quote = code === t.singleQuote ? "'" : '"';
        next = start;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            unclosed('quote', quote);
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === t.backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        tokenType = t.str;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;
      default:
        if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
          next = css.indexOf('*/', start + 2) + 1;
          if (next === 0) {
            unclosed('comment', '*/');
          }
          content = css.slice(start, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;
          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }
          tokenType = t.comment;
          line = nextLine;
          endLine = nextLine;
          endColumn = next - nextOffset;
        } else if (code === t.slash) {
          next = start;
          tokenType = code;
          endLine = line;
          endColumn = start - offset;
          end = next + 1;
        } else {
          next = consumeWord(css, start);
          tokenType = t.word;
          endLine = line;
          endColumn = next - offset;
        }
        end = next + 1;
        break;
    }

    // Ensure that the token structure remains consistent
    tokens.push([tokenType,
    // [0] Token type
    line,
    // [1] Starting line
    start - offset,
    // [2] Starting column
    endLine,
    // [3] Ending line
    endColumn,
    // [4] Ending column
    start,
    // [5] Start position / Source index
    end // [6] End position
    ]);

    // Reset offset for the next token
    if (nextOffset) {
      offset = nextOffset;
      nextOffset = null;
    }
    start = end;
  }
  return tokens;
}