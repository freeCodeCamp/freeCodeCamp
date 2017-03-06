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

CodeMirror.defineMode("oz", function (conf) {

  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }

  var singleOperators = /[\^@!\|<>#~\.\*\-\+\\/,=]/;
  var doubleOperators = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/;
  var tripleOperators = /(:::)|(\.\.\.)|(=<:)|(>=:)/;

  var middle = ["in", "then", "else", "of", "elseof", "elsecase", "elseif", "catch",
    "finally", "with", "require", "prepare", "import", "export", "define", "do"];
  var end = ["end"];

  var atoms = wordRegexp(["true", "false", "nil", "unit"]);
  var commonKeywords = wordRegexp(["andthen", "at", "attr", "declare", "feat", "from", "lex",
    "mod", "mode", "orelse", "parser", "prod", "prop", "scanner", "self", "syn", "token"]);
  var openingKeywords = wordRegexp(["local", "proc", "fun", "case", "class", "if", "cond", "or", "dis",
    "choice", "not", "thread", "try", "raise", "lock", "for", "suchthat", "meth", "functor"]);
  var middleKeywords = wordRegexp(middle);
  var endKeywords = wordRegexp(end);

  // Tokenizers
  function tokenBase(stream, state) {
    if (stream.eatSpace()) {
      return null;
    }

    // Brackets
    if(stream.match(/[{}]/)) {
      return "bracket";
    }

    // Special [] keyword
    if (stream.match(/(\[])/)) {
        return "keyword"
    }

    // Operators
    if (stream.match(tripleOperators) || stream.match(doubleOperators)) {
      return "operator";
    }

    // Atoms
    if(stream.match(atoms)) {
      return 'atom';
    }

    // Opening keywords
    var matched = stream.match(openingKeywords);
    if (matched) {
      if (!state.doInCurrentLine)
        state.currentIndent++;
      else
        state.doInCurrentLine = false;

      // Special matching for signatures
      if(matched[0] == "proc" || matched[0] == "fun")
        state.tokenize = tokenFunProc;
      else if(matched[0] == "class")
        state.tokenize = tokenClass;
      else if(matched[0] == "meth")
        state.tokenize = tokenMeth;

      return 'keyword';
    }

    // Middle and other keywords
    if (stream.match(middleKeywords) || stream.match(commonKeywords)) {
      return "keyword"
    }

    // End keywords
    if (stream.match(endKeywords)) {
      state.currentIndent--;
      return 'keyword';
    }

    // Eat the next char for next comparisons
    var ch = stream.next();

    // Strings
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }

    // Numbers
    if (/[~\d]/.test(ch)) {
      if (ch == "~") {
        if(! /^[0-9]/.test(stream.peek()))
          return null;
        else if (( stream.next() == "0" && stream.match(/^[xX][0-9a-fA-F]+/)) || stream.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))
          return "number";
      }

      if ((ch == "0" && stream.match(/^[xX][0-9a-fA-F]+/)) || stream.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))
        return "number";

      return null;
    }

    // Comments
    if (ch == "%") {
      stream.skipToEnd();
      return 'comment';
    }
    else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      }
    }

    // Single operators
    if(singleOperators.test(ch)) {
      return "operator";
    }

    // If nothing match, we skip the entire alphanumerical block
    stream.eatWhile(/\w/);

    return "variable";
  }

  function tokenClass(stream, state) {
    if (stream.eatSpace()) {
      return null;
    }
    stream.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);
    state.tokenize = tokenBase;
    return "variable-3"
  }

  function tokenMeth(stream, state) {
    if (stream.eatSpace()) {
      return null;
    }
    stream.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);
    state.tokenize = tokenBase;
    return "def"
  }

  function tokenFunProc(stream, state) {
    if (stream.eatSpace()) {
      return null;
    }

    if(!state.hasPassedFirstStage && stream.eat("{")) {
      state.hasPassedFirstStage = true;
      return "bracket";
    }
    else if(state.hasPassedFirstStage) {
      stream.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);
      state.hasPassedFirstStage = false;
      state.tokenize = tokenBase;
      return "def"
    }
    else {
      state.tokenize = tokenBase;
      return null;
    }
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return "comment";
  }

  function tokenString(quote) {
    return function (stream, state) {
      var escaped = false, next, end = false;
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) {
          end = true;
          break;
        }
        escaped = !escaped && next == "\\";
      }
      if (end || !escaped)
        state.tokenize = tokenBase;
      return "string";
    };
  }

  function buildElectricInputRegEx() {
    // Reindentation should occur on [] or on a match of any of
    // the block closing keywords, at the end of a line.
    var allClosings = middle.concat(end);
    return new RegExp("[\\[\\]]|(" + allClosings.join("|") + ")$");
  }

  return {

    startState: function () {
      return {
        tokenize: tokenBase,
        currentIndent: 0,
        doInCurrentLine: false,
        hasPassedFirstStage: false
      };
    },

    token: function (stream, state) {
      if (stream.sol())
        state.doInCurrentLine = 0;

      return state.tokenize(stream, state);
    },

    indent: function (state, textAfter) {
      var trueText = textAfter.replace(/^\s+|\s+$/g, '');

      if (trueText.match(endKeywords) || trueText.match(middleKeywords) || trueText.match(/(\[])/))
        return conf.indentUnit * (state.currentIndent - 1);

      if (state.currentIndent < 0)
        return 0;

      return state.currentIndent * conf.indentUnit;
    },
    fold: "indent",
    electricInput: buildElectricInputRegEx(),
    lineComment: "%",
    blockCommentStart: "/*",
    blockCommentEnd: "*/"
  };
});

CodeMirror.defineMIME("text/x-oz", "oz");

});
