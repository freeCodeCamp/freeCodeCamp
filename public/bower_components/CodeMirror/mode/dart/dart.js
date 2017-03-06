// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../clike/clike"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../clike/clike"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var keywords = ("this super static final const abstract class extends external factory " +
    "implements get native operator set typedef with enum throw rethrow " +
    "assert break case continue default in return new deferred async await " +
    "try catch finally do else for if switch while import library export " +
    "part of show hide is as").split(" ");
  var blockKeywords = "try catch finally do else for if switch while".split(" ");
  var atoms = "true false null".split(" ");
  var builtins = "void bool num int double dynamic var String".split(" ");

  function set(words) {
    var obj = {};
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  function pushInterpolationStack(state) {
    (state.interpolationStack || (state.interpolationStack = [])).push(state.tokenize);
  }

  function popInterpolationStack(state) {
    return (state.interpolationStack || (state.interpolationStack = [])).pop();
  }

  function sizeInterpolationStack(state) {
    return state.interpolationStack ? state.interpolationStack.length : 0;
  }

  CodeMirror.defineMIME("application/dart", {
    name: "clike",
    keywords: set(keywords),
    blockKeywords: set(blockKeywords),
    builtin: set(builtins),
    atoms: set(atoms),
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_\.]/);
        return "meta";
      },

      // custom string handling to deal with triple-quoted strings and string interpolation
      "'": function(stream, state) {
        return tokenString("'", stream, state, false);
      },
      "\"": function(stream, state) {
        return tokenString("\"", stream, state, false);
      },
      "r": function(stream, state) {
        var peek = stream.peek();
        if (peek == "'" || peek == "\"") {
          return tokenString(stream.next(), stream, state, true);
        }
        return false;
      },

      "}": function(_stream, state) {
        // "}" is end of interpolation, if interpolation stack is non-empty
        if (sizeInterpolationStack(state) > 0) {
          state.tokenize = popInterpolationStack(state);
          return null;
        }
        return false;
      },

      "/": function(stream, state) {
        if (!stream.eat("*")) return false
        state.tokenize = tokenNestedComment(1)
        return state.tokenize(stream, state)
      }
    }
  });

  function tokenString(quote, stream, state, raw) {
    var tripleQuoted = false;
    if (stream.eat(quote)) {
      if (stream.eat(quote)) tripleQuoted = true;
      else return "string"; //empty string
    }
    function tokenStringHelper(stream, state) {
      var escaped = false;
      while (!stream.eol()) {
        if (!raw && !escaped && stream.peek() == "$") {
          pushInterpolationStack(state);
          state.tokenize = tokenInterpolation;
          return "string";
        }
        var next = stream.next();
        if (next == quote && !escaped && (!tripleQuoted || stream.match(quote + quote))) {
          state.tokenize = null;
          break;
        }
        escaped = !raw && !escaped && next == "\\";
      }
      return "string";
    }
    state.tokenize = tokenStringHelper;
    return tokenStringHelper(stream, state);
  }

  function tokenInterpolation(stream, state) {
    stream.eat("$");
    if (stream.eat("{")) {
      // let clike handle the content of ${...},
      // we take over again when "}" appears (see hooks).
      state.tokenize = null;
    } else {
      state.tokenize = tokenInterpolationIdentifier;
    }
    return null;
  }

  function tokenInterpolationIdentifier(stream, state) {
    stream.eatWhile(/[\w_]/);
    state.tokenize = popInterpolationStack(state);
    return "variable";
  }

  function tokenNestedComment(depth) {
    return function (stream, state) {
      var ch
      while (ch = stream.next()) {
        if (ch == "*" && stream.eat("/")) {
          if (depth == 1) {
            state.tokenize = null
            break
          } else {
            state.tokenize = tokenNestedComment(depth - 1)
            return state.tokenize(stream, state)
          }
        } else if (ch == "/" && stream.eat("*")) {
          state.tokenize = tokenNestedComment(depth + 1)
          return state.tokenize(stream, state)
        }
      }
      return "comment"
    }
  }

  CodeMirror.registerHelper("hintWords", "application/dart", keywords.concat(atoms).concat(builtins));

  // This is needed to make loading through meta.js work.
  CodeMirror.defineMode("dart", function(conf) {
    return CodeMirror.getMode(conf, "application/dart");
  }, "clike");
});
