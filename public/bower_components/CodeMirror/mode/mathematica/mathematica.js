// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Mathematica mode copyright (c) 2015 by Calin Barbat
// Based on code by Patrick Scheibe (halirutan)
// See: https://github.com/halirutan/Mathematica-Source-Highlighting/tree/master/src/lang-mma.js

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('mathematica', function(_config, _parserConfig) {

  // used pattern building blocks
  var Identifier = '[a-zA-Z\\$][a-zA-Z0-9\\$]*';
  var pBase      = "(?:\\d+)";
  var pFloat     = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)";
  var pFloatBase = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)";
  var pPrecision = "(?:`(?:`?"+pFloat+")?)";

  // regular expressions
  var reBaseForm        = new RegExp('(?:'+pBase+'(?:\\^\\^'+pFloatBase+pPrecision+'?(?:\\*\\^[+-]?\\d+)?))');
  var reFloatForm       = new RegExp('(?:' + pFloat + pPrecision + '?(?:\\*\\^[+-]?\\d+)?)');
  var reIdInContext     = new RegExp('(?:`?)(?:' + Identifier + ')(?:`(?:' + Identifier + '))*(?:`?)');

  function tokenBase(stream, state) {
    var ch;

    // get next character
    ch = stream.next();

    // string
    if (ch === '"') {
      state.tokenize = tokenString;
      return state.tokenize(stream, state);
    }

    // comment
    if (ch === '(') {
      if (stream.eat('*')) {
        state.commentLevel++;
        state.tokenize = tokenComment;
        return state.tokenize(stream, state);
      }
    }

    // go back one character
    stream.backUp(1);

    // look for numbers
    // Numbers in a baseform
    if (stream.match(reBaseForm, true, false)) {
      return 'number';
    }

    // Mathematica numbers. Floats (1.2, .2, 1.) can have optionally a precision (`float) or an accuracy definition
    // (``float). Note: while 1.2` is possible 1.2`` is not. At the end an exponent (float*^+12) can follow.
    if (stream.match(reFloatForm, true, false)) {
      return 'number';
    }

    /* In[23] and Out[34] */
    if (stream.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
      return 'atom';
    }

    // usage
    if (stream.match(/([a-zA-Z\$]+(?:`?[a-zA-Z0-9\$])*::usage)/, true, false)) {
      return 'meta';
    }

    // message
    if (stream.match(/([a-zA-Z\$]+(?:`?[a-zA-Z0-9\$])*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false)) {
      return 'string-2';
    }

    // this makes a look-ahead match for something like variable:{_Integer}
    // the match is then forwarded to the mma-patterns tokenizer.
    if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false)) {
      return 'variable-2';
    }

    // catch variables which are used together with Blank (_), BlankSequence (__) or BlankNullSequence (___)
    // Cannot start with a number, but can have numbers at any other position. Examples
    // blub__Integer, a1_, b34_Integer32
    if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
      return 'variable-2';
    }
    if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false)) {
      return 'variable-2';
    }
    if (stream.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
      return 'variable-2';
    }

    // Named characters in Mathematica, like \[Gamma].
    if (stream.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
      return 'variable-3';
    }

    // Match all braces separately
    if (stream.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
      return 'bracket';
    }

    // Catch Slots (#, ##, #3, ##9 and the V10 named slots #name). I have never seen someone using more than one digit after #, so we match
    // only one.
    if (stream.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
      return 'variable-2';
    }

    // Literals like variables, keywords, functions
    if (stream.match(reIdInContext, true, false)) {
      return 'keyword';
    }

    // operators. Note that operators like @@ or /; are matched separately for each symbol.
    if (stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
      return 'operator';
    }

    // everything else is an error
    stream.next(); // advance the stream.
    return 'error';
  }

  function tokenString(stream, state) {
    var next, end = false, escaped = false;
    while ((next = stream.next()) != null) {
      if (next === '"' && !escaped) {
        end = true;
        break;
      }
      escaped = !escaped && next === '\\';
    }
    if (end && !escaped) {
      state.tokenize = tokenBase;
    }
    return 'string';
  };

  function tokenComment(stream, state) {
    var prev, next;
    while(state.commentLevel > 0 && (next = stream.next()) != null) {
      if (prev === '(' && next === '*') state.commentLevel++;
      if (prev === '*' && next === ')') state.commentLevel--;
      prev = next;
    }
    if (state.commentLevel <= 0) {
      state.tokenize = tokenBase;
    }
    return 'comment';
  }

  return {
    startState: function() {return {tokenize: tokenBase, commentLevel: 0};},
    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      return state.tokenize(stream, state);
    },
    blockCommentStart: "(*",
    blockCommentEnd: "*)"
  };
});

CodeMirror.defineMIME('text/x-mathematica', {
  name: 'mathematica'
});

});
