let source, pos, end,
  openTokenDepth,
  lastTokenPos,
  openTokenPosStack,
  openClassPosStack,
  curDynamicImport,
  templateStackDepth,
  facade,
  lastSlashWasDivision,
  nextBraceIsClass,
  templateDepth,
  templateStack,
  imports,
  exports,
  name;

function addImport (ss, s, e, d) {
  const impt = { ss, se: d === -2 ? e : d === -1 ? e + 1 : 0, s, e, d, a: -1, n: undefined };
  imports.push(impt);
  return impt;
}

function addExport (s, e, ls, le) {
  exports.push({
    s,
    e,
    ls,
    le,
    n: s[0] === '"' ? readString(s, '"') : s[0] === "'" ? readString(s, "'") : source.slice(s, e),
    ln: ls[0] === '"' ? readString(ls, '"') : ls[0] === "'" ? readString(ls, "'") : source.slice(ls, le)
  });
}

function readName (impt) {
  let { d, s } = impt;
  if (d !== -1)
    s++;
  impt.n = readString(s, source.charCodeAt(s - 1));
}

// Note: parsing is based on the _assumption_ that the source is already valid
export function parse (_source, _name) {
  openTokenDepth = 0;
  curDynamicImport = null;
  templateDepth = -1;
  lastTokenPos = -1;
  lastSlashWasDivision = false;
  templateStack = Array(1024);
  templateStackDepth = 0;
  openTokenPosStack = Array(1024);
  openClassPosStack = Array(1024);
  nextBraceIsClass = false;
  facade = true;
  name = _name || '@';

  imports = [];
  exports = [];

  source = _source;
  pos = -1;
  end = source.length - 1;
  let ch = 0;

  // start with a pure "module-only" parser
  m: while (pos++ < end) {
    ch = source.charCodeAt(pos);

    if (ch === 32 || ch < 14 && ch > 8)
      continue;

    switch (ch) {
      case 101/*e*/:
        if (openTokenDepth === 0 && keywordStart(pos) && source.startsWith('xport', pos + 1)) {
          tryParseExportStatement();
          // export might have been a non-pure declaration
          if (!facade) {
            lastTokenPos = pos;
            break m;
          }
        }
        break;
      case 105/*i*/:
        if (keywordStart(pos) && source.startsWith('mport', pos + 1))
          tryParseImportStatement();
        break;
      case 59/*;*/:
        break;
      case 47/*/*/: {
        const next_ch = source.charCodeAt(pos + 1);
        if (next_ch === 47/*/*/) {
          lineComment();
          // dont update lastToken
          continue;
        }
        else if (next_ch === 42/***/) {
          blockComment(true);
          // dont update lastToken
          continue;
        }
        // fallthrough
      }
      default:
        // as soon as we hit a non-module token, we go to main parser
        facade = false;
        pos--;
        break m;
    }
    lastTokenPos = pos;
  }

  while (pos++ < end) {
    ch = source.charCodeAt(pos);

    if (ch === 32 || ch < 14 && ch > 8)
      continue;

    switch (ch) {
      case 101/*e*/:
        if (openTokenDepth === 0 && keywordStart(pos) && source.startsWith('xport', pos + 1))
          tryParseExportStatement();
        break;
      case 105/*i*/:
        if (keywordStart(pos) && source.startsWith('mport', pos + 1))
          tryParseImportStatement();
        break;
      case 99/*c*/:
        if (keywordStart(pos) && source.startsWith('lass', pos + 1) && isBrOrWs(source.charCodeAt(pos + 5)))
          nextBraceIsClass = true;
        break;
      case 40/*(*/:
        openTokenPosStack[openTokenDepth++] = lastTokenPos;
        break;
      case 41/*)*/:
        if (openTokenDepth === 0)
          syntaxError();
        openTokenDepth--;
        if (curDynamicImport && curDynamicImport.d === openTokenPosStack[openTokenDepth]) {
          if (curDynamicImport.e === 0)
            curDynamicImport.e = pos;
          curDynamicImport.se = pos;
          curDynamicImport = null;
        }
        break;
      case 123/*{*/:
        // dynamic import followed by { is not a dynamic import (so remove)
        // this is a sneaky way to get around { import () {} } v { import () }
        // block / object ambiguity without a parser (assuming source is valid)
        if (source.charCodeAt(lastTokenPos) === 41/*)*/ && imports.length && imports[imports.length - 1].e === lastTokenPos) {
          imports.pop();
        }
        openClassPosStack[openTokenDepth] = nextBraceIsClass;
        nextBraceIsClass = false;
        openTokenPosStack[openTokenDepth++] = lastTokenPos;
        break;
      case 125/*}*/:
        if (openTokenDepth === 0)
          syntaxError();
        if (openTokenDepth-- === templateDepth) {
          templateDepth = templateStack[--templateStackDepth];
          templateString();
        }
        else {
          if (templateDepth !== -1 && openTokenDepth < templateDepth)
            syntaxError();
        }
        break;
      case 39/*'*/:
      case 34/*"*/:
        stringLiteral(ch);
        break;
      case 47/*/*/: {
        const next_ch = source.charCodeAt(pos + 1);
        if (next_ch === 47/*/*/) {
          lineComment();
          // dont update lastToken
          continue;
        }
        else if (next_ch === 42/***/) {
          blockComment(true);
          // dont update lastToken
          continue;
        }
        else {
          // Division / regex ambiguity handling based on checking backtrack analysis of:
          // - what token came previously (lastToken)
          // - if a closing brace or paren, what token came before the corresponding
          //   opening brace or paren (lastOpenTokenIndex)
          const lastToken = source.charCodeAt(lastTokenPos);
          const lastExport = exports[exports.length - 1];
          if (isExpressionPunctuator(lastToken) &&
              !(lastToken === 46/*.*/ && (source.charCodeAt(lastTokenPos - 1) >= 48/*0*/ && source.charCodeAt(lastTokenPos - 1) <= 57/*9*/)) &&
              !(lastToken === 43/*+*/ && source.charCodeAt(lastTokenPos - 1) === 43/*+*/) && !(lastToken === 45/*-*/ && source.charCodeAt(lastTokenPos - 1) === 45/*-*/) ||
              lastToken === 41/*)*/ && isParenKeyword(openTokenPosStack[openTokenDepth]) ||
              lastToken === 125/*}*/ && (isExpressionTerminator(openTokenPosStack[openTokenDepth]) || openClassPosStack[openTokenDepth]) ||
              lastToken === 47/*/*/ && lastSlashWasDivision ||
              isExpressionKeyword(lastTokenPos) ||
              !lastToken) {
            regularExpression();
            lastSlashWasDivision = false;
          }
          else if (lastExport && lastTokenPos >= lastExport.s && lastTokenPos <= lastExport.e) {
            // export default /some-regexp/
            regularExpression();
            lastSlashWasDivision = false;
          }
          else {
            lastSlashWasDivision = true;
          }
        }
        break;
      }
      case 96/*`*/:
        templateString();
        break;
    }
    lastTokenPos = pos;
  }

  if (templateDepth !== -1 || openTokenDepth)
    syntaxError();

  return [imports, exports, facade];
}

function tryParseImportStatement () {
  const startPos = pos;

  pos += 6;

  let ch = commentWhitespace(true);
  
  switch (ch) {
    // dynamic import
    case 40/*(*/:
      openTokenPosStack[openTokenDepth++] = startPos;
      if (source.charCodeAt(lastTokenPos) === 46/*.*/)
        return;
      // dynamic import indicated by positive d
      const impt = addImport(startPos, pos + 1, 0, startPos);
      curDynamicImport = impt;
      // try parse a string, to record a safe dynamic import string
      pos++;
      ch = commentWhitespace(true);
      if (ch === 39/*'*/ || ch === 34/*"*/) {
        stringLiteral(ch);
      }
      else {
        pos--;
        return;
      }
      pos++;
      ch = commentWhitespace(true);
      if (ch === 44/*,*/) {
        impt.e = pos;
        pos++;
        ch = commentWhitespace(true);
        impt.a = pos;
        readName(impt);
        pos--;
      }
      else if (ch === 41/*)*/) {
        openTokenDepth--;
        impt.e = pos;
        impt.se = pos;
        readName(impt);
      }
      else {
        pos--;
      }
      return;
    // import.meta
    case 46/*.*/:
      pos++;
      ch = commentWhitespace(true);
      // import.meta indicated by d === -2
      if (ch === 109/*m*/ && source.startsWith('eta', pos + 1) && source.charCodeAt(lastTokenPos) !== 46/*.*/)
        addImport(startPos, startPos, pos + 4, -2);
      return;
    
    default:
      // no space after "import" -> not an import keyword
      if (pos === startPos + 6)
        break;
    case 34/*"*/:
    case 39/*'*/:
    case 123/*{*/:
    case 42/***/:
      // import statement only permitted at base-level
      if (openTokenDepth !== 0) {
        pos--;
        return;
      }
      while (pos < end) {
        ch = source.charCodeAt(pos);
        if (ch === 39/*'*/ || ch === 34/*"*/) {
          readImportString(startPos, ch);
          return;
        }
        pos++;
      }
      syntaxError();
  }
}

function tryParseExportStatement () {
  const sStartPos = pos;
  const prevExport = exports.length;

  pos += 6;

  const curPos = pos;

  let ch = commentWhitespace(true);

  if (pos === curPos && !isPunctuator(ch))
    return;

  switch (ch) {
    // export default ...
    case 100/*d*/:
      addExport(pos, pos + 7, -1, -1);
      return;

    // export async? function*? name () {
    case 97/*a*/:
      pos += 5;
      commentWhitespace(true);
    // fallthrough
    case 102/*f*/:
      pos += 8;
      ch = commentWhitespace(true);
      if (ch === 42/***/) {
        pos++;
        ch = commentWhitespace(true);
      }
      const startPos = pos;
      ch = readToWsOrPunctuator(ch);
      addExport(startPos, pos, startPos, pos);
      pos--;
      return;

    // export class name ...
    case 99/*c*/:
      if (source.startsWith('lass', pos + 1) && isBrOrWsOrPunctuatorNotDot(source.charCodeAt(pos + 5))) {
        pos += 5;
        ch = commentWhitespace(true);
        const startPos = pos;
        ch = readToWsOrPunctuator(ch);
        addExport(startPos, pos, startPos, pos);
        pos--;
        return;
      }
      pos += 2;
    // fallthrough

    // export var/let/const name = ...(, name = ...)+
    case 118/*v*/:
    case 109/*l*/:
      // destructured initializations not currently supported (skipped for { or [)
      // also, lexing names after variable equals is skipped (export var p = function () { ... }, q = 5 skips "q")
      pos += 2;
      facade = false;
      do {
        pos++;
        ch = commentWhitespace(true);
        const startPos = pos;
        ch = readToWsOrPunctuator(ch);
        // dont yet handle [ { destructurings
        if (ch === 123/*{*/ || ch === 91/*[*/) {
          pos--;
          return;
        }
        if (pos === startPos)
          return;
        addExport(startPos, pos, startPos, pos);
        ch = commentWhitespace(true);
        if (ch === 61/*=*/) {
          pos--;
          return;
        }
      } while (ch === 44/*,*/);
      pos--;
      return;


    // export {...}
    case 123/*{*/:
      pos++;
      ch = commentWhitespace(true);
      while (true) {
        const startPos = pos;
        readToWsOrPunctuator(ch);
        const endPos = pos;
        commentWhitespace(true);
        ch = readExportAs(startPos, endPos);
        // ,
        if (ch === 44/*,*/) {
          pos++;
          ch = commentWhitespace(true);
        }
        if (ch === 125/*}*/)
          break;
        if (pos === startPos)
          return syntaxError(); 
        if (pos > end)
          return syntaxError();
      }
      pos++;
      ch = commentWhitespace(true);
    break;
    
    // export *
    // export * as X
    case 42/***/:
      pos++;
      commentWhitespace(true);
      ch = readExportAs(pos, pos);
      ch = commentWhitespace(true);
    break;
  }

  // from ...
  if (ch === 102/*f*/ && source.startsWith('rom', pos + 1)) {
    pos += 4;
    readImportString(sStartPos, commentWhitespace(true));

    // There were no local names.
    for (let i = prevExport; i < exports.length; ++i) {
      exports[i].ls = exports[i].le = -1;
      exports[i].ln = undefined;
    }
  }
  else {
    pos--;
  }
}

/*
 * Ported from Acorn
 *   
 * MIT License

 * Copyright (C) 2012-2020 by various contributors (see AUTHORS)

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let acornPos;
function readString (start, quote) {
  acornPos = start;
  let out = '', chunkStart = acornPos;
  for (;;) {
    if (acornPos >= source.length) syntaxError();
    const ch = source.charCodeAt(acornPos);
    if (ch === quote) break;
    if (ch === 92) { // '\'
      out += source.slice(chunkStart, acornPos);
      out += readEscapedChar();
      chunkStart = acornPos;
    }
    else if (ch === 0x2028 || ch === 0x2029) {
      ++acornPos;
    }
    else {
      if (isBr(ch)) syntaxError();
      ++acornPos;
    }
  }
  out += source.slice(chunkStart, acornPos++);
  return out;
}

// Used to read escaped characters

function readEscapedChar () {
  let ch = source.charCodeAt(++acornPos);
  ++acornPos;
  switch (ch) {
    case 110: return '\n'; // 'n' -> '\n'
    case 114: return '\r'; // 'r' -> '\r'
    case 120: return String.fromCharCode(readHexChar(2)); // 'x'
    case 117: return readCodePointToString(); // 'u'
    case 116: return '\t'; // 't' -> '\t'
    case 98: return '\b'; // 'b' -> '\b'
    case 118: return '\u000b'; // 'v' -> '\u000b'
    case 102: return '\f'; // 'f' -> '\f'
    case 13: if (source.charCodeAt(acornPos) === 10) ++acornPos; // '\r\n'
    case 10: // ' \n'
      return '';
    case 56:
    case 57:
      syntaxError();
    default:
      if (ch >= 48 && ch <= 55) {
        let octalStr = source.substr(acornPos - 1, 3).match(/^[0-7]+/)[0];
        let octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        acornPos += octalStr.length - 1;
        ch = source.charCodeAt(acornPos);
        if (octalStr !== '0' || ch === 56 || ch === 57)
          syntaxError();
        return String.fromCharCode(octal);
      }
      if (isBr(ch)) {
        // Unicode new line characters after \ get removed from output in both
        // template literals and strings
        return '';
      }
      return String.fromCharCode(ch);
  }
}

// Used to read character escape sequences ('\x', '\u', '\U').

function readHexChar (len) {
  const start = acornPos;
  let total = 0, lastCode = 0;
  for (let i = 0; i < len; ++i, ++acornPos) {
    let code = source.charCodeAt(acornPos), val;

    if (code === 95) {
      if (lastCode === 95 || i === 0) syntaxError();
      lastCode = code;
      continue;
    }

    if (code >= 97) val = code - 97 + 10; // a
    else if (code >= 65) val = code - 65 + 10; // A
    else if (code >= 48 && code <= 57) val = code - 48; // 0-9
    else break;
    if (val >= 16) break;
    lastCode = code;
    total = total * 16 + val;
  }

  if (lastCode === 95 || acornPos - start !== len) syntaxError();

  return total;
}

// Read a string value, interpreting backslash-escapes.

function readCodePointToString () {
  const ch = source.charCodeAt(acornPos);
  let code;
  if (ch === 123) { // '{'
    ++acornPos;
    code = readHexChar(source.indexOf('}', acornPos) - acornPos);
    ++acornPos;
    if (code > 0x10FFFF) syntaxError();
  } else {
    code = readHexChar(4);
  }
  // UTF-16 Decoding
  if (code <= 0xFFFF) return String.fromCharCode(code);
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00);
}

/*
 * </ Acorn Port>
 */

function readExportAs (startPos, endPos) {
  let ch = source.charCodeAt(pos);
  let ls = startPos, le = endPos;
  if (ch === 97 /*a*/) {
    pos += 2;
    ch = commentWhitespace(true);
    startPos = pos;
    readToWsOrPunctuator(ch);
    endPos = pos;
    ch = commentWhitespace(true);
  }
  if (pos !== startPos)
    addExport(startPos, endPos, ls, le);
  return ch;
}

function readImportString (ss, ch) {
  const startPos = pos + 1;
  if (ch === 39/*'*/ || ch === 34/*"*/) {
    stringLiteral(ch);
  }
  else {
    syntaxError();
    return;
  }
  const impt = addImport(ss, startPos, pos, -1);
  readName(impt);
  pos++;
  ch = commentWhitespace(false);
  if (ch !== 97/*a*/ || !source.startsWith('ssert', pos + 1)) {
    pos--;
    return;
  }
  const assertIndex = pos;

  pos += 6;
  ch = commentWhitespace(true);
  if (ch !== 123/*{*/) {
    pos = assertIndex;
    return;
  }
  const assertStart = pos;
  do {
    pos++;
    ch = commentWhitespace(true);
    if (ch === 39/*'*/ || ch === 34/*"*/) {
      stringLiteral(ch);
      pos++;
      ch = commentWhitespace(true);
    }
    else {
      ch = readToWsOrPunctuator(ch);
    }
    if (ch !== 58/*:*/) {
      pos = assertIndex;
      return;
    }
    pos++;
    ch = commentWhitespace(true);
    if (ch === 39/*'*/ || ch === 34/*"*/) {
      stringLiteral(ch);
    }
    else {
      pos = assertIndex;
      return;
    }
    pos++;
    ch = commentWhitespace(true);
    if (ch === 44/*,*/) {
      pos++;
      ch = commentWhitespace(true);
      if (ch === 125/*}*/)
        break;
      continue;
    }
    if (ch === 125/*}*/)
      break;
    pos = assertIndex;
    return;
  } while (true);
  impt.a = assertStart;
  impt.se = pos + 1;
}

function commentWhitespace (br) {
  let ch;
  do {
    ch = source.charCodeAt(pos);
    if (ch === 47/*/*/) {
      const next_ch = source.charCodeAt(pos + 1);
      if (next_ch === 47/*/*/)
        lineComment();
      else if (next_ch === 42/***/)
        blockComment(br);
      else
        return ch;
    }
    else if (br ? !isBrOrWs(ch): !isWsNotBr(ch)) {
      return ch;
    }
  } while (pos++ < end);
  return ch;
}

function templateString () {
  while (pos++ < end) {
    const ch = source.charCodeAt(pos);
    if (ch === 36/*$*/ && source.charCodeAt(pos + 1) === 123/*{*/) {
      pos++;
      templateStack[templateStackDepth++] = templateDepth;
      templateDepth = ++openTokenDepth;
      return;
    }
    if (ch === 96/*`*/)
      return;
    if (ch === 92/*\*/)
      pos++;
  }
  syntaxError();
}

function blockComment (br) {
  pos++;
  while (pos++ < end) {
    const ch = source.charCodeAt(pos);
    if (!br && isBr(ch))
      return;
    if (ch === 42/***/ && source.charCodeAt(pos + 1) === 47/*/*/) {
      pos++;
      return;
    }
  }
}

function lineComment () {
  while (pos++ < end) {
    const ch = source.charCodeAt(pos);
    if (ch === 10/*\n*/ || ch === 13/*\r*/)
      return;
  }
}

function stringLiteral (quote) {
  while (pos++ < end) {
    let ch = source.charCodeAt(pos);
    if (ch === quote)
      return;
    if (ch === 92/*\*/) {
      ch = source.charCodeAt(++pos);
      if (ch === 13/*\r*/ && source.charCodeAt(pos + 1) === 10/*\n*/)
        pos++;
    }
    else if (isBr(ch))
      break;
  }
  syntaxError();
}

function regexCharacterClass () {
  while (pos++ < end) {
    let ch = source.charCodeAt(pos);
    if (ch === 93/*]*/)
      return ch;
    if (ch === 92/*\*/)
      pos++;
    else if (ch === 10/*\n*/ || ch === 13/*\r*/)
      break;
  }
  syntaxError();
}

function regularExpression () {
  while (pos++ < end) {
    let ch = source.charCodeAt(pos);
    if (ch === 47/*/*/)
      return;
    if (ch === 91/*[*/)
      ch = regexCharacterClass();
    else if (ch === 92/*\*/)
      pos++;
    else if (ch === 10/*\n*/ || ch === 13/*\r*/)
      break;
  }
  syntaxError();
}

function readToWsOrPunctuator (ch) {
  do {
    if (isBrOrWs(ch) || isPunctuator(ch))
      return ch;
  } while (ch = source.charCodeAt(++pos));
  return ch;
}

// Note: non-asii BR and whitespace checks omitted for perf / footprint
// if there is a significant user need this can be reconsidered
function isBr (c) {
  return c === 13/*\r*/ || c === 10/*\n*/;
}

function isWsNotBr (c) {
  return c === 9 || c === 11 || c === 12 || c === 32 || c === 160;
}

function isBrOrWs (c) {
  return c > 8 && c < 14 || c === 32 || c === 160;
}

function isBrOrWsOrPunctuatorNotDot (c) {
  return c > 8 && c < 14 || c === 32 || c === 160 || isPunctuator(c) && c !== 46/*.*/;
}

function keywordStart (pos) {
  return pos === 0 || isBrOrWsOrPunctuatorNotDot(source.charCodeAt(pos - 1));
}

function readPrecedingKeyword (pos, match) {
  if (pos < match.length - 1)
    return false;
  return source.startsWith(match, pos - match.length + 1) && (pos === 0 || isBrOrWsOrPunctuatorNotDot(source.charCodeAt(pos - match.length)));
}

function readPrecedingKeyword1 (pos, ch) {
  return source.charCodeAt(pos) === ch && (pos === 0 || isBrOrWsOrPunctuatorNotDot(source.charCodeAt(pos - 1)));
}

// Detects one of case, debugger, delete, do, else, in, instanceof, new,
//   return, throw, typeof, void, yield, await
function isExpressionKeyword (pos) {
  switch (source.charCodeAt(pos)) {
    case 100/*d*/:
      switch (source.charCodeAt(pos - 1)) {
        case 105/*i*/:
          // void
          return readPrecedingKeyword(pos - 2, 'vo');
        case 108/*l*/:
          // yield
          return readPrecedingKeyword(pos - 2, 'yie');
        default:
          return false;
      }
    case 101/*e*/:
      switch (source.charCodeAt(pos - 1)) {
        case 115/*s*/:
          switch (source.charCodeAt(pos - 2)) {
            case 108/*l*/:
              // else
              return readPrecedingKeyword1(pos - 3, 101/*e*/);
            case 97/*a*/:
              // case
              return readPrecedingKeyword1(pos - 3, 99/*c*/);
            default:
              return false;
          }
        case 116/*t*/:
          // delete
          return readPrecedingKeyword(pos - 2, 'dele');
        default:
          return false;
      }
    case 102/*f*/:
      if (source.charCodeAt(pos - 1) !== 111/*o*/ || source.charCodeAt(pos - 2) !== 101/*e*/)
        return false;
      switch (source.charCodeAt(pos - 3)) {
        case 99/*c*/:
          // instanceof
          return readPrecedingKeyword(pos - 4, 'instan');
        case 112/*p*/:
          // typeof
          return readPrecedingKeyword(pos - 4, 'ty');
        default:
          return false;
      }
    case 110/*n*/:
      // in, return
      return readPrecedingKeyword1(pos - 1, 105/*i*/) || readPrecedingKeyword(pos - 1, 'retur');
    case 111/*o*/:
      // do
      return readPrecedingKeyword1(pos - 1, 100/*d*/);
    case 114/*r*/:
      // debugger
      return readPrecedingKeyword(pos - 1, 'debugge');
    case 116/*t*/:
      // await
      return readPrecedingKeyword(pos - 1, 'awai');
    case 119/*w*/:
      switch (source.charCodeAt(pos - 1)) {
        case 101/*e*/:
          // new
          return readPrecedingKeyword1(pos - 2, 110/*n*/);
        case 111/*o*/:
          // throw
          return readPrecedingKeyword(pos - 2, 'thr');
        default:
          return false;
      }
  }
  return false;
}

function isParenKeyword (curPos) {
  return source.charCodeAt(curPos) === 101/*e*/ && source.startsWith('whil', curPos - 4) ||
      source.charCodeAt(curPos) === 114/*r*/ && source.startsWith('fo', curPos - 2) ||
      source.charCodeAt(curPos - 1) === 105/*i*/ && source.charCodeAt(curPos) === 102/*f*/;
}

function isPunctuator (ch) {
  // 23 possible punctuator endings: !%&()*+,-./:;<=>?[]^{}|~
  return ch === 33/*!*/ || ch === 37/*%*/ || ch === 38/*&*/ ||
    ch > 39 && ch < 48 || ch > 57 && ch < 64 ||
    ch === 91/*[*/ || ch === 93/*]*/ || ch === 94/*^*/ ||
    ch > 122 && ch < 127;
}

function isExpressionPunctuator (ch) {
  // 20 possible expression endings: !%&(*+,-.:;<=>?[^{|~
  return ch === 33/*!*/ || ch === 37/*%*/ || ch === 38/*&*/ ||
    ch > 39 && ch < 47 && ch !== 41 || ch > 57 && ch < 64 ||
    ch === 91/*[*/ || ch === 94/*^*/ || ch > 122 && ch < 127 && ch !== 125/*}*/;
}

function isExpressionTerminator (curPos) {
  // detects:
  // => ; ) finally catch else
  // as all of these followed by a { will indicate a statement brace
  switch (source.charCodeAt(curPos)) {
    case 62/*>*/:
      return source.charCodeAt(curPos - 1) === 61/*=*/;
    case 59/*;*/:
    case 41/*)*/:
      return true;
    case 104/*h*/:
      return source.startsWith('catc', curPos - 4);
    case 121/*y*/:
      return source.startsWith('finall', curPos - 6);
    case 101/*e*/:
      return source.startsWith('els', curPos - 3);
  }
  return false;
}

function syntaxError () {
  throw Object.assign(new Error(`Parse error ${name}:${source.slice(0, pos).split('\n').length}:${pos - source.lastIndexOf('\n', pos - 1)}`), { idx: pos });
}