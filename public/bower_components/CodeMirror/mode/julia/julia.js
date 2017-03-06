// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("julia", function(_conf, parserConf) {
  var ERRORCLASS = 'error';

  function wordRegexp(words, end) {
    if (typeof end === 'undefined') { end = "\\b"; }
    return new RegExp("^((" + words.join(")|(") + "))" + end);
  }

  var octChar = "\\\\[0-7]{1,3}";
  var hexChar = "\\\\x[A-Fa-f0-9]{1,2}";
  var specialChar = "\\\\[abfnrtv0%?'\"\\\\]";
  var singleChar = "([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])";
  var operators = parserConf.operators || /^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b(?!\()|[\u2208\u2209](?!\()/;
  var delimiters = parserConf.delimiters || /^[;,()[\]{}]/;
  var identifiers = parserConf.identifiers || /^[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/;
  var charsList = [octChar, hexChar, specialChar, singleChar];
  var blockOpeners = ["begin", "function", "type", "immutable", "let", "macro", "for", "while", "quote", "if", "else", "elseif", "try", "finally", "catch", "do"];
  var blockClosers = ["end", "else", "elseif", "catch", "finally"];
  var keywordList = ['if', 'else', 'elseif', 'while', 'for', 'begin', 'let', 'end', 'do', 'try', 'catch', 'finally', 'return', 'break', 'continue', 'global', 'local', 'const', 'export', 'import', 'importall', 'using', 'function', 'macro', 'module', 'baremodule', 'type', 'immutable', 'quote', 'typealias', 'abstract', 'bitstype'];
  var builtinList = ['true', 'false', 'nothing', 'NaN', 'Inf'];

  //var stringPrefixes = new RegExp("^[br]?('|\")")
  var stringPrefixes = /^(`|"{3}|([brv]?"))/;
  var chars = wordRegexp(charsList, "'");
  var keywords = wordRegexp(keywordList);
  var builtins = wordRegexp(builtinList);
  var openers = wordRegexp(blockOpeners);
  var closers = wordRegexp(blockClosers);
  var macro = /^@[_A-Za-z][\w]*/;
  var symbol = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/;
  var typeAnnotation = /^::[^,;"{()=$\s]+({[^}]*}+)*/;

  function inArray(state) {
    var ch = currentScope(state);
    if (ch == '[') {
      return true;
    }
    return false;
  }

  function currentScope(state) {
    if (state.scopes.length == 0) {
      return null;
    }
    return state.scopes[state.scopes.length - 1];
  }

  // tokenizers
  function tokenBase(stream, state) {
    // Handle multiline comments
    if (stream.match(/^#=/, false)) {
      state.tokenize = tokenComment;
      return state.tokenize(stream, state);
    }

    // Handle scope changes
    var leavingExpr = state.leavingExpr;
    if (stream.sol()) {
      leavingExpr = false;
    }
    state.leavingExpr = false;
    if (leavingExpr) {
      if (stream.match(/^'+/)) {
        return 'operator';
      }
    }

    if (stream.match(/^\.{2,3}/)) {
      return 'operator';
    }

    if (stream.eatSpace()) {
      return null;
    }

    var ch = stream.peek();

    // Handle single line comments
    if (ch === '#') {
      stream.skipToEnd();
      return 'comment';
    }

    if (ch === '[') {
      state.scopes.push('[');
    }

    if (ch === '(') {
      state.scopes.push('(');
    }

    var scope = currentScope(state);

    if (scope == '[' && ch === ']') {
      state.scopes.pop();
      state.leavingExpr = true;
    }

    if (scope == '(' && ch === ')') {
      state.scopes.pop();
      state.leavingExpr = true;
    }

    var match;
    if (!inArray(state) && (match=stream.match(openers, false))) {
      state.scopes.push(match);
    }

    if (!inArray(state) && stream.match(closers, false)) {
      state.scopes.pop();
    }

    if (inArray(state)) {
      if (state.lastToken == 'end' && stream.match(/^:/)) {
        return 'operator';
      }
      if (stream.match(/^end/)) {
        return 'number';
      }
    }

    if (stream.match(/^=>/)) {
      return 'operator';
    }

    // Handle Number Literals
    if (stream.match(/^[0-9\.]/, false)) {
      var imMatcher = RegExp(/^im\b/);
      var numberLiteral = false;
      // Floats
      if (stream.match(/^\d*\.(?!\.)\d*([Eef][\+\-]?\d+)?/i)) { numberLiteral = true; }
      if (stream.match(/^\d+\.(?!\.)\d*/)) { numberLiteral = true; }
      if (stream.match(/^\.\d+/)) { numberLiteral = true; }
      if (stream.match(/^0x\.[0-9a-f]+p[\+\-]?\d+/i)) { numberLiteral = true; }
      // Integers
      if (stream.match(/^0x[0-9a-f]+/i)) { numberLiteral = true; } // Hex
      if (stream.match(/^0b[01]+/i)) { numberLiteral = true; } // Binary
      if (stream.match(/^0o[0-7]+/i)) { numberLiteral = true; } // Octal
      if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) { numberLiteral = true; } // Decimal
      // Zero by itself with no other piece of number.
      if (stream.match(/^0(?![\dx])/i)) { numberLiteral = true; }
      if (numberLiteral) {
          // Integer literals may be "long"
          stream.match(imMatcher);
          state.leavingExpr = true;
          return 'number';
      }
    }

    if (stream.match(/^<:/)) {
      return 'operator';
    }

    if (stream.match(typeAnnotation)) {
      return 'builtin';
    }

    // Handle symbols
    if (!leavingExpr && stream.match(symbol) || stream.match(/:\./)) {
      return 'builtin';
    }

    // Handle parametric types
    if (stream.match(/^{[^}]*}(?=\()/)) {
      return 'builtin';
    }

    // Handle operators and Delimiters
    if (stream.match(operators)) {
      return 'operator';
    }

    // Handle Chars
    if (stream.match(/^'/)) {
      state.tokenize = tokenChar;
      return state.tokenize(stream, state);
    }

    // Handle Strings
    if (stream.match(stringPrefixes)) {
      state.tokenize = tokenStringFactory(stream.current());
      return state.tokenize(stream, state);
    }

    if (stream.match(macro)) {
      return 'meta';
    }

    if (stream.match(delimiters)) {
      return null;
    }

    if (stream.match(keywords)) {
      return 'keyword';
    }

    if (stream.match(builtins)) {
      return 'builtin';
    }

    var isDefinition = state.isDefinition ||
                       state.lastToken == 'function' ||
                       state.lastToken == 'macro' ||
                       state.lastToken == 'type' ||
                       state.lastToken == 'immutable';

    if (stream.match(identifiers)) {
      if (isDefinition) {
        if (stream.peek() === '.') {
          state.isDefinition = true;
          return 'variable';
        }
        state.isDefinition = false;
        return 'def';
      }
      if (stream.match(/^({[^}]*})*\(/, false)) {
        return callOrDef(stream, state);
      }
      state.leavingExpr = true;
      return 'variable';
    }

    // Handle non-detected items
    stream.next();
    return ERRORCLASS;
  }

  function callOrDef(stream, state) {
    var match = stream.match(/^(\(\s*)/);
    if (match) {
      if (state.firstParenPos < 0)
        state.firstParenPos = state.scopes.length;
      state.scopes.push('(');
      state.charsAdvanced += match[1].length;
    }
    if (currentScope(state) == '(' && stream.match(/^\)/)) {
      state.scopes.pop();
      state.charsAdvanced += 1;
      if (state.scopes.length <= state.firstParenPos) {
        var isDefinition = stream.match(/^\s*?=(?!=)/, false);
        stream.backUp(state.charsAdvanced);
        state.firstParenPos = -1;
        state.charsAdvanced = 0;
        if (isDefinition)
          return 'def';
        return 'builtin';
      }
    }
    // Unfortunately javascript does not support multiline strings, so we have
    // to undo anything done upto here if a function call or definition splits
    // over two or more lines.
    if (stream.match(/^$/g, false)) {
      stream.backUp(state.charsAdvanced);
      while (state.scopes.length > state.firstParenPos)
        state.scopes.pop();
      state.firstParenPos = -1;
      state.charsAdvanced = 0;
      return 'builtin';
    }
    state.charsAdvanced += stream.match(/^([^()]*)/)[1].length;
    return callOrDef(stream, state);
  }

  function tokenComment(stream, state) {
    if (stream.match(/^#=/)) {
      state.weakScopes++;
    }
    if (!stream.match(/.*?(?=(#=|=#))/)) {
      stream.skipToEnd();
    }
    if (stream.match(/^=#/)) {
      state.weakScopes--;
      if (state.weakScopes == 0)
        state.tokenize = tokenBase;
    }
    return 'comment';
  }

  function tokenChar(stream, state) {
    var isChar = false, match;
    if (stream.match(chars)) {
      isChar = true;
    } else if (match = stream.match(/\\u([a-f0-9]{1,4})(?=')/i)) {
      var value = parseInt(match[1], 16);
      if (value <= 55295 || value >= 57344) { // (U+0,U+D7FF), (U+E000,U+FFFF)
        isChar = true;
        stream.next();
      }
    } else if (match = stream.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
      var value = parseInt(match[1], 16);
      if (value <= 1114111) { // U+10FFFF
        isChar = true;
        stream.next();
      }
    }
    if (isChar) {
      state.leavingExpr = true;
      state.tokenize = tokenBase;
      return 'string';
    }
    if (!stream.match(/^[^']+(?=')/)) { stream.skipToEnd(); }
    if (stream.match(/^'/)) { state.tokenize = tokenBase; }
    return ERRORCLASS;
  }

  function tokenStringFactory(delimiter) {
    while ('bruv'.indexOf(delimiter.charAt(0).toLowerCase()) >= 0) {
      delimiter = delimiter.substr(1);
    }
    var OUTCLASS = 'string';

    function tokenString(stream, state) {
      while (!stream.eol()) {
        stream.eatWhile(/[^"\\]/);
        if (stream.eat('\\')) {
            stream.next();
        } else if (stream.match(delimiter)) {
            state.tokenize = tokenBase;
            state.leavingExpr = true;
            return OUTCLASS;
        } else {
            stream.eat(/["]/);
        }
      }
      return OUTCLASS;
    }
    tokenString.isString = true;
    return tokenString;
  }

  var external = {
    startState: function() {
      return {
        tokenize: tokenBase,
        scopes: [],
        weakScopes: 0,
        lastToken: null,
        leavingExpr: false,
        isDefinition: false,
        charsAdvanced: 0,
        firstParenPos: -1
      };
    },

    token: function(stream, state) {
      var style = state.tokenize(stream, state);
      var current = stream.current();

      if (current && style) {
        state.lastToken = current;
      }

      // Handle '.' connected identifiers
      if (current === '.') {
        style = stream.match(identifiers, false) || stream.match(macro, false) ||
                stream.match(/\(/, false) ? 'operator' : ERRORCLASS;
      }
      return style;
    },

    indent: function(state, textAfter) {
      var delta = 0;
      if (textAfter == "]" || textAfter == ")" || textAfter == "end" || textAfter == "else" || textAfter == "elseif" || textAfter == "catch" || textAfter == "finally") {
        delta = -1;
      }
      return (state.scopes.length + delta) * _conf.indentUnit;
    },

    electricInput: /(end|else(if)?|catch|finally)$/,
    lineComment: "#",
    fold: "indent"
  };
  return external;
});


CodeMirror.defineMIME("text/x-julia", "julia");

});
