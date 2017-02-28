// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Yacas mode copyright (c) 2015 by Grzegorz Mazur
// Loosely based on mathematica mode by Calin Barbat

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('yacas', function(_config, _parserConfig) {

  function words(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  var bodiedOps = words("Assert BackQuote D Defun Deriv For ForEach FromFile " +
                        "FromString Function Integrate InverseTaylor Limit " +
                        "LocalSymbols Macro MacroRule MacroRulePattern " +
                        "NIntegrate Rule RulePattern Subst TD TExplicitSum " +
                        "TSum Taylor Taylor1 Taylor2 Taylor3 ToFile " +
                        "ToStdout ToString TraceRule Until While");

  // patterns
  var pFloatForm  = "(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)";
  var pIdentifier = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)";

  // regular expressions
  var reFloatForm    = new RegExp(pFloatForm);
  var reIdentifier   = new RegExp(pIdentifier);
  var rePattern      = new RegExp(pIdentifier + "?_" + pIdentifier);
  var reFunctionLike = new RegExp(pIdentifier + "\\s*\\(");

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
    if (ch === '/') {
      if (stream.eat('*')) {
        state.tokenize = tokenComment;
        return state.tokenize(stream, state);
      }
      if (stream.eat("/")) {
        stream.skipToEnd();
        return "comment";
      }
    }

    // go back one character
    stream.backUp(1);

    // update scope info
    var m = stream.match(/^(\w+)\s*\(/, false);
    if (m !== null && bodiedOps.hasOwnProperty(m[1]))
      state.scopes.push('bodied');

    var scope = currentScope(state);

    if (scope === 'bodied' && ch === '[')
      state.scopes.pop();

    if (ch === '[' || ch === '{' || ch === '(')
      state.scopes.push(ch);

    scope = currentScope(state);

    if (scope === '[' && ch === ']' ||
        scope === '{' && ch === '}' ||
        scope === '(' && ch === ')')
      state.scopes.pop();

    if (ch === ';') {
      while (scope === 'bodied') {
        state.scopes.pop();
        scope = currentScope(state);
      }
    }

    // look for ordered rules
    if (stream.match(/\d+ *#/, true, false)) {
      return 'qualifier';
    }

    // look for numbers
    if (stream.match(reFloatForm, true, false)) {
      return 'number';
    }

    // look for placeholders
    if (stream.match(rePattern, true, false)) {
      return 'variable-3';
    }

    // match all braces separately
    if (stream.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
      return 'bracket';
    }

    // literals looking like function calls
    if (stream.match(reFunctionLike, true, false)) {
      stream.backUp(1);
      return 'variable';
    }

    // all other identifiers
    if (stream.match(reIdentifier, true, false)) {
      return 'variable-2';
    }

    // operators; note that operators like @@ or /; are matched separately for each symbol.
    if (stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
      return 'operator';
    }

    // everything else is an error
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
    while((next = stream.next()) != null) {
      if (prev === '*' && next === '/') {
        state.tokenize = tokenBase;
        break;
      }
      prev = next;
    }
    return 'comment';
  }

  function currentScope(state) {
    var scope = null;
    if (state.scopes.length > 0)
      scope = state.scopes[state.scopes.length - 1];
    return scope;
  }

  return {
    startState: function() {
      return {
        tokenize: tokenBase,
        scopes: []
      };
    },
    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      return state.tokenize(stream, state);
    },
    indent: function(state, textAfter) {
      if (state.tokenize !== tokenBase && state.tokenize !== null)
        return CodeMirror.Pass;

      var delta = 0;
      if (textAfter === ']' || textAfter === '];' ||
          textAfter === '}' || textAfter === '};' ||
          textAfter === ');')
        delta = -1;

      return (state.scopes.length + delta) * _config.indentUnit;
    },
    electricChars: "{}[]();",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    lineComment: "//"
  };
});

CodeMirror.defineMIME('text/x-yacas', {
  name: 'yacas'
});

});
