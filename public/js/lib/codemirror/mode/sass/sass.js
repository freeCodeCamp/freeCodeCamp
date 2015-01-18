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

CodeMirror.defineMode("sass", function(config) {
  function tokenRegexp(words) {
    return new RegExp("^" + words.join("|"));
  }

  var keywords = ["true", "false", "null", "auto"];
  var keywordsRegexp = new RegExp("^" + keywords.join("|"));

  var operators = ["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-", "\\!=", "/", "\\*", "%", "and", "or", "not"];
  var opRegexp = tokenRegexp(operators);

  var pseudoElementsRegexp = /^::?[\w\-]+/;

  function urlTokens(stream, state) {
    var ch = stream.peek();

    if (ch === ")") {
      stream.next();
      state.tokenizer = tokenBase;
      return "operator";
    } else if (ch === "(") {
      stream.next();
      stream.eatSpace();

      return "operator";
    } else if (ch === "'" || ch === '"') {
      state.tokenizer = buildStringTokenizer(stream.next());
      return "string";
    } else {
      state.tokenizer = buildStringTokenizer(")", false);
      return "string";
    }
  }
  function comment(indentation, multiLine) {
    return function(stream, state) {
      if (stream.sol() && stream.indentation() <= indentation) {
        state.tokenizer = tokenBase;
        return tokenBase(stream, state);
      }

      if (multiLine && stream.skipTo("*/")) {
        stream.next();
        stream.next();
        state.tokenizer = tokenBase;
      } else {
        stream.next();
      }

      return "comment";
    };
  }

  function buildStringTokenizer(quote, greedy) {
    if(greedy == null) { greedy = true; }

    function stringTokenizer(stream, state) {
      var nextChar = stream.next();
      var peekChar = stream.peek();
      var previousChar = stream.string.charAt(stream.pos-2);

      var endingString = ((nextChar !== "\\" && peekChar === quote) || (nextChar === quote && previousChar !== "\\"));

      if (endingString) {
        if (nextChar !== quote && greedy) { stream.next(); }
        state.tokenizer = tokenBase;
        return "string";
      } else if (nextChar === "#" && peekChar === "{") {
        state.tokenizer = buildInterpolationTokenizer(stringTokenizer);
        stream.next();
        return "operator";
      } else {
        return "string";
      }
    }

    return stringTokenizer;
  }

  function buildInterpolationTokenizer(currentTokenizer) {
    return function(stream, state) {
      if (stream.peek() === "}") {
        stream.next();
        state.tokenizer = currentTokenizer;
        return "operator";
      } else {
        return tokenBase(stream, state);
      }
    };
  }

  function indent(state) {
    if (state.indentCount == 0) {
      state.indentCount++;
      var lastScopeOffset = state.scopes[0].offset;
      var currentOffset = lastScopeOffset + config.indentUnit;
      state.scopes.unshift({ offset:currentOffset });
    }
  }

  function dedent(state) {
    if (state.scopes.length == 1) return;

    state.scopes.shift();
  }

  function tokenBase(stream, state) {
    var ch = stream.peek();

    // Comment
    if (stream.match("/*")) {
      state.tokenizer = comment(stream.indentation(), true);
      return state.tokenizer(stream, state);
    }
    if (stream.match("//")) {
      state.tokenizer = comment(stream.indentation(), false);
      return state.tokenizer(stream, state);
    }

    // Interpolation
    if (stream.match("#{")) {
      state.tokenizer = buildInterpolationTokenizer(tokenBase);
      return "operator";
    }

    if (ch === ".") {
      stream.next();

      // Match class selectors
      if (stream.match(/^[\w-]+/)) {
        indent(state);
        return "atom";
      } else if (stream.peek() === "#") {
        indent(state);
        return "atom";
      } else {
        return "operator";
      }
    }

    if (ch === "#") {
      stream.next();

      // Hex numbers
      if (stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))
        return "number";

      // ID selectors
      if (stream.match(/^[\w-]+/)) {
        indent(state);
        return "atom";
      }

      if (stream.peek() === "#") {
        indent(state);
        return "atom";
      }
    }

    // Numbers
    if (stream.match(/^-?[0-9\.]+/))
      return "number";

    // Units
    if (stream.match(/^(px|em|in)\b/))
      return "unit";

    if (stream.match(keywordsRegexp))
      return "keyword";

    if (stream.match(/^url/) && stream.peek() === "(") {
      state.tokenizer = urlTokens;
      return "atom";
    }

    // Variables
    if (ch === "$") {
      stream.next();
      stream.eatWhile(/[\w-]/);

      if (stream.peek() === ":") {
        stream.next();
        return "variable-2";
      } else {
        return "variable-3";
      }
    }

    if (ch === "!") {
      stream.next();
      return stream.match(/^[\w]+/) ? "keyword": "operator";
    }

    if (ch === "=") {
      stream.next();

      // Match shortcut mixin definition
      if (stream.match(/^[\w-]+/)) {
        indent(state);
        return "meta";
      } else {
        return "operator";
      }
    }

    if (ch === "+") {
      stream.next();

      // Match shortcut mixin definition
      if (stream.match(/^[\w-]+/))
        return "variable-3";
      else
        return "operator";
    }

    // Indent Directives
    if (stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) {
      indent(state);
      return "meta";
    }

    // Other Directives
    if (ch === "@") {
      stream.next();
      stream.eatWhile(/[\w-]/);
      return "meta";
    }

    // Strings
    if (ch === '"' || ch === "'") {
      stream.next();
      state.tokenizer = buildStringTokenizer(ch);
      return "string";
    }

    // Pseudo element selectors
    if (ch == ":" && stream.match(pseudoElementsRegexp))
      return "keyword";

    // atoms
    if (stream.eatWhile(/[\w-&]/)) {
      // matches a property definition
      if (stream.peek() === ":" && !stream.match(pseudoElementsRegexp, false))
        return "property";
      else
        return "atom";
    }

    if (stream.match(opRegexp))
      return "operator";

    // If we haven't returned by now, we move 1 character
    // and return an error
    stream.next();
    return null;
  }

  function tokenLexer(stream, state) {
    if (stream.sol()) state.indentCount = 0;
    var style = state.tokenizer(stream, state);
    var current = stream.current();

    if (current === "@return")
      dedent(state);

    if (style === "atom")
      indent(state);

    if (style !== null) {
      var startOfToken = stream.pos - current.length;
      var withCurrentIndent = startOfToken + (config.indentUnit * state.indentCount);

      var newScopes = [];

      for (var i = 0; i < state.scopes.length; i++) {
        var scope = state.scopes[i];

        if (scope.offset <= withCurrentIndent)
          newScopes.push(scope);
      }

      state.scopes = newScopes;
    }


    return style;
  }

  return {
    startState: function() {
      return {
        tokenizer: tokenBase,
        scopes: [{offset: 0, type: "sass"}],
        indentCount: 0,
        definedVars: [],
        definedMixins: []
      };
    },
    token: function(stream, state) {
      var style = tokenLexer(stream, state);

      state.lastToken = { style: style, content: stream.current() };

      return style;
    },

    indent: function(state) {
      return state.scopes[0].offset;
    }
  };
});

CodeMirror.defineMIME("text/x-sass", "sass");

});
