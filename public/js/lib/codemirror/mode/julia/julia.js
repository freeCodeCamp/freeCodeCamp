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

  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }

  var operators = parserConf.operators || /^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/;
  var delimiters = parserConf.delimiters || /^[;,()[\]{}]/;
  var identifiers = parserConf.identifiers|| /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*!*/;
  var blockOpeners = ["begin", "function", "type", "immutable", "let", "macro", "for", "while", "quote", "if", "else", "elseif", "try", "finally", "catch", "do"];
  var blockClosers = ["end", "else", "elseif", "catch", "finally"];
  var keywordList = ['if', 'else', 'elseif', 'while', 'for', 'begin', 'let', 'end', 'do', 'try', 'catch', 'finally', 'return', 'break', 'continue', 'global', 'local', 'const', 'export', 'import', 'importall', 'using', 'function', 'macro', 'module', 'baremodule', 'type', 'immutable', 'quote', 'typealias', 'abstract', 'bitstype', 'ccall'];
  var builtinList = ['true', 'false', 'enumerate', 'open', 'close', 'nothing', 'NaN', 'Inf', 'print', 'println', 'Int', 'Int8', 'Uint8', 'Int16', 'Uint16', 'Int32', 'Uint32', 'Int64', 'Uint64', 'Int128', 'Uint128', 'Bool', 'Char', 'Float16', 'Float32', 'Float64', 'Array', 'Vector', 'Matrix', 'String', 'UTF8String', 'ASCIIString', 'error', 'warn', 'info', '@printf'];

  //var stringPrefixes = new RegExp("^[br]?('|\")")
  var stringPrefixes = /^(`|'|"{3}|([br]?"))/;
  var keywords = wordRegexp(keywordList);
  var builtins = wordRegexp(builtinList);
  var openers = wordRegexp(blockOpeners);
  var closers = wordRegexp(blockClosers);
  var macro = /^@[_A-Za-z][_A-Za-z0-9]*/;
  var symbol = /^:[_A-Za-z][_A-Za-z0-9]*/;
  var indentInfo = null;

  function in_array(state) {
    var ch = cur_scope(state);
    if(ch=="[" || ch=="{") {
      return true;
    }
    else {
      return false;
    }
  }

  function cur_scope(state) {
    if(state.scopes.length==0) {
      return null;
    }
    return state.scopes[state.scopes.length - 1];
  }

  // tokenizers
  function tokenBase(stream, state) {
    // Handle scope changes
    var leaving_expr = state.leaving_expr;
    if(stream.sol()) {
      leaving_expr = false;
    }
    state.leaving_expr = false;
    if(leaving_expr) {
      if(stream.match(/^'+/)) {
        return 'operator';
      }

    }

    if(stream.match(/^\.{2,3}/)) {
      return 'operator';
    }

    if (stream.eatSpace()) {
      return null;
    }

    var ch = stream.peek();
    // Handle Comments
    if (ch === '#') {
        stream.skipToEnd();
        return 'comment';
    }
    if(ch==='[') {
      state.scopes.push("[");
    }

    if(ch==='{') {
      state.scopes.push("{");
    }

    var scope=cur_scope(state);

    if(scope==='[' && ch===']') {
      state.scopes.pop();
      state.leaving_expr=true;
    }

    if(scope==='{' && ch==='}') {
      state.scopes.pop();
      state.leaving_expr=true;
    }

    if(ch===')') {
      state.leaving_expr = true;
    }

    var match;
    if(!in_array(state) && (match=stream.match(openers, false))) {
      state.scopes.push(match);
    }

    if(!in_array(state) && stream.match(closers, false)) {
      state.scopes.pop();
    }

    if(in_array(state)) {
      if(stream.match(/^end/)) {
        return 'number';
      }

    }

    if(stream.match(/^=>/)) {
      return 'operator';
    }


    // Handle Number Literals
    if (stream.match(/^[0-9\.]/, false)) {
      var imMatcher = RegExp(/^im\b/);
      var floatLiteral = false;
      // Floats
      if (stream.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)) { floatLiteral = true; }
      if (stream.match(/^\d+\.(?!\.)\d*/)) { floatLiteral = true; }
      if (stream.match(/^\.\d+/)) { floatLiteral = true; }
      if (floatLiteral) {
          // Float literals may be "imaginary"
          stream.match(imMatcher);
          state.leaving_expr = true;
          return 'number';
      }
      // Integers
      var intLiteral = false;
      // Hex
      if (stream.match(/^0x[0-9a-f]+/i)) { intLiteral = true; }
      // Binary
      if (stream.match(/^0b[01]+/i)) { intLiteral = true; }
      // Octal
      if (stream.match(/^0o[0-7]+/i)) { intLiteral = true; }
      // Decimal
      if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) {
          intLiteral = true;
      }
      // Zero by itself with no other piece of number.
      if (stream.match(/^0(?![\dx])/i)) { intLiteral = true; }
      if (intLiteral) {
          // Integer literals may be "long"
          stream.match(imMatcher);
          state.leaving_expr = true;
          return 'number';
      }
    }

    if(stream.match(/^(::)|(<:)/)) {
      return 'operator';
    }

    // Handle symbols
    if(!leaving_expr && stream.match(symbol)) {
      return 'string';
    }

    // Handle operators and Delimiters
    if (stream.match(operators)) {
      return 'operator';
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


    if (stream.match(identifiers)) {
      state.leaving_expr=true;
      return 'variable';
    }
    // Handle non-detected items
    stream.next();
    return ERRORCLASS;
  }

  function tokenStringFactory(delimiter) {
    while ('rub'.indexOf(delimiter.charAt(0).toLowerCase()) >= 0) {
      delimiter = delimiter.substr(1);
    }
    var singleline = delimiter.length == 1;
    var OUTCLASS = 'string';

    function tokenString(stream, state) {
      while (!stream.eol()) {
        stream.eatWhile(/[^'"\\]/);
        if (stream.eat('\\')) {
            stream.next();
            if (singleline && stream.eol()) {
              return OUTCLASS;
            }
        } else if (stream.match(delimiter)) {
            state.tokenize = tokenBase;
            return OUTCLASS;
        } else {
            stream.eat(/['"]/);
        }
      }
      if (singleline) {
        if (parserConf.singleLineStringErrors) {
            return ERRORCLASS;
        } else {
            state.tokenize = tokenBase;
        }
      }
      return OUTCLASS;
    }
    tokenString.isString = true;
    return tokenString;
  }

  function tokenLexer(stream, state) {
    indentInfo = null;
    var style = state.tokenize(stream, state);
    var current = stream.current();

    // Handle '.' connected identifiers
    if (current === '.') {
      style = stream.match(identifiers, false) ? null : ERRORCLASS;
      if (style === null && state.lastStyle === 'meta') {
          // Apply 'meta' style to '.' connected identifiers when
          // appropriate.
        style = 'meta';
      }
      return style;
    }

    return style;
  }

  var external = {
    startState: function() {
      return {
        tokenize: tokenBase,
        scopes: [],
        leaving_expr: false
      };
    },

    token: function(stream, state) {
      var style = tokenLexer(stream, state);
      state.lastStyle = style;
      return style;
    },

    indent: function(state, textAfter) {
      var delta = 0;
      if(textAfter=="end" || textAfter=="]" || textAfter=="}" || textAfter=="else" || textAfter=="elseif" || textAfter=="catch" || textAfter=="finally") {
        delta = -1;
      }
      return (state.scopes.length + delta) * 4;
    },

    lineComment: "#",
    fold: "indent",
    electricChars: "edlsifyh]}"
  };
  return external;
});


CodeMirror.defineMIME("text/x-julia", "julia");

});
