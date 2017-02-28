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

  CodeMirror.defineMode("crystal", function(config) {
    function wordRegExp(words, end) {
      return new RegExp((end ? "" : "^") + "(?:" + words.join("|") + ")" + (end ? "$" : "\\b"));
    }

    function chain(tokenize, stream, state) {
      state.tokenize.push(tokenize);
      return tokenize(stream, state);
    }

    var operators = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/;
    var conditionalOperators = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/;
    var indexingOperators = /^(?:\[\][?=]?)/;
    var anotherOperators = /^(?:\.(?:\.{2})?|->|[?:])/;
    var idents = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
    var types = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
    var keywords = wordRegExp([
      "abstract", "alias", "as", "asm", "begin", "break", "case", "class", "def", "do",
      "else", "elsif", "end", "ensure", "enum", "extend", "for", "fun", "if", "ifdef",
      "include", "instance_sizeof", "lib", "macro", "module", "next", "of", "out", "pointerof",
      "private", "protected", "rescue", "return", "require", "sizeof", "struct",
      "super", "then", "type", "typeof", "union", "unless", "until", "when", "while", "with",
      "yield", "__DIR__", "__FILE__", "__LINE__"
    ]);
    var atomWords = wordRegExp(["true", "false", "nil", "self"]);
    var indentKeywordsArray = [
      "def", "fun", "macro",
      "class", "module", "struct", "lib", "enum", "union",
      "if", "unless", "case", "while", "until", "begin", "then",
      "do",
      "for", "ifdef"
    ];
    var indentKeywords = wordRegExp(indentKeywordsArray);
    var dedentKeywordsArray = [
      "end",
      "else", "elsif",
      "rescue", "ensure"
    ];
    var dedentKeywords = wordRegExp(dedentKeywordsArray);
    var dedentPunctualsArray = ["\\)", "\\}", "\\]"];
    var dedentPunctuals = new RegExp("^(?:" + dedentPunctualsArray.join("|") + ")$");
    var nextTokenizer = {
      "def": tokenFollowIdent, "fun": tokenFollowIdent, "macro": tokenMacroDef,
      "class": tokenFollowType, "module": tokenFollowType, "struct": tokenFollowType,
      "lib": tokenFollowType, "enum": tokenFollowType, "union": tokenFollowType
    };
    var matching = {"[": "]", "{": "}", "(": ")", "<": ">"};

    function tokenBase(stream, state) {
      if (stream.eatSpace()) {
        return null;
      }

      // Macros
      if (state.lastToken != "\\" && stream.match("{%", false)) {
        return chain(tokenMacro("%", "%"), stream, state);
      }

      if (state.lastToken != "\\" && stream.match("{{", false)) {
        return chain(tokenMacro("{", "}"), stream, state);
      }

      // Comments
      if (stream.peek() == "#") {
        stream.skipToEnd();
        return "comment";
      }

      // Variables and keywords
      var matched;
      if (stream.match(idents)) {
        stream.eat(/[?!]/);

        matched = stream.current();
        if (stream.eat(":")) {
          return "atom";
        } else if (state.lastToken == ".") {
          return "property";
        } else if (keywords.test(matched)) {
          if (state.lastToken != "abstract" && indentKeywords.test(matched)) {
            if (!(matched == "fun" && state.blocks.indexOf("lib") >= 0)) {
              state.blocks.push(matched);
              state.currentIndent += 1;
            }
          } else if (dedentKeywords.test(matched)) {
            state.blocks.pop();
            state.currentIndent -= 1;
          }

          if (nextTokenizer.hasOwnProperty(matched)) {
            state.tokenize.push(nextTokenizer[matched]);
          }

          return "keyword";
        } else if (atomWords.test(matched)) {
          return "atom";
        }

        return "variable";
      }

      // Class variables and instance variables
      // or attributes
      if (stream.eat("@")) {
        if (stream.peek() == "[") {
          return chain(tokenNest("[", "]", "meta"), stream, state);
        }

        stream.eat("@");
        stream.match(idents) || stream.match(types);
        return "variable-2";
      }

      // Global variables
      if (stream.eat("$")) {
        stream.eat(/[0-9]+|\?/) || stream.match(idents) || stream.match(types);
        return "variable-3";
      }

      // Constants and types
      if (stream.match(types)) {
        return "tag";
      }

      // Symbols or ':' operator
      if (stream.eat(":")) {
        if (stream.eat("\"")) {
          return chain(tokenQuote("\"", "atom", false), stream, state);
        } else if (stream.match(idents) || stream.match(types) ||
                   stream.match(operators) || stream.match(conditionalOperators) || stream.match(indexingOperators)) {
          return "atom";
        }
        stream.eat(":");
        return "operator";
      }

      // Strings
      if (stream.eat("\"")) {
        return chain(tokenQuote("\"", "string", true), stream, state);
      }

      // Strings or regexps or macro variables or '%' operator
      if (stream.peek() == "%") {
        var style = "string";
        var embed = true;
        var delim;

        if (stream.match("%r")) {
          // Regexps
          style = "string-2";
          delim = stream.next();
        } else if (stream.match("%w")) {
          embed = false;
          delim = stream.next();
        } else {
          if(delim = stream.match(/^%([^\w\s=])/)) {
            delim = delim[1];
          } else if (stream.match(/^%[a-zA-Z0-9_\u009F-\uFFFF]*/)) {
            // Macro variables
            return "meta";
          } else {
            // '%' operator
            return "operator";
          }
        }

        if (matching.hasOwnProperty(delim)) {
          delim = matching[delim];
        }
        return chain(tokenQuote(delim, style, embed), stream, state);
      }

      // Characters
      if (stream.eat("'")) {
        stream.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/);
        stream.eat("'");
        return "atom";
      }

      // Numbers
      if (stream.eat("0")) {
        if (stream.eat("x")) {
          stream.match(/^[0-9a-fA-F]+/);
        } else if (stream.eat("o")) {
          stream.match(/^[0-7]+/);
        } else if (stream.eat("b")) {
          stream.match(/^[01]+/);
        }
        return "number";
      }

      if (stream.eat(/\d/)) {
        stream.match(/^\d*(?:\.\d+)?(?:[eE][+-]?\d+)?/);
        return "number";
      }

      // Operators
      if (stream.match(operators)) {
        stream.eat("="); // Operators can follow assign symbol.
        return "operator";
      }

      if (stream.match(conditionalOperators) || stream.match(anotherOperators)) {
        return "operator";
      }

      // Parens and braces
      if (matched = stream.match(/[({[]/, false)) {
        matched = matched[0];
        return chain(tokenNest(matched, matching[matched], null), stream, state);
      }

      // Escapes
      if (stream.eat("\\")) {
        stream.next();
        return "meta";
      }

      stream.next();
      return null;
    }

    function tokenNest(begin, end, style, started) {
      return function (stream, state) {
        if (!started && stream.match(begin)) {
          state.tokenize[state.tokenize.length - 1] = tokenNest(begin, end, style, true);
          state.currentIndent += 1;
          return style;
        }

        var nextStyle = tokenBase(stream, state);
        if (stream.current() === end) {
          state.tokenize.pop();
          state.currentIndent -= 1;
          nextStyle = style;
        }

        return nextStyle;
      };
    }

    function tokenMacro(begin, end, started) {
      return function (stream, state) {
        if (!started && stream.match("{" + begin)) {
          state.currentIndent += 1;
          state.tokenize[state.tokenize.length - 1] = tokenMacro(begin, end, true);
          return "meta";
        }

        if (stream.match(end + "}")) {
          state.currentIndent -= 1;
          state.tokenize.pop();
          return "meta";
        }

        return tokenBase(stream, state);
      };
    }

    function tokenMacroDef(stream, state) {
      if (stream.eatSpace()) {
        return null;
      }

      var matched;
      if (matched = stream.match(idents)) {
        if (matched == "def") {
          return "keyword";
        }
        stream.eat(/[?!]/);
      }

      state.tokenize.pop();
      return "def";
    }

    function tokenFollowIdent(stream, state) {
      if (stream.eatSpace()) {
        return null;
      }

      if (stream.match(idents)) {
        stream.eat(/[!?]/);
      } else {
        stream.match(operators) || stream.match(conditionalOperators) || stream.match(indexingOperators);
      }
      state.tokenize.pop();
      return "def";
    }

    function tokenFollowType(stream, state) {
      if (stream.eatSpace()) {
        return null;
      }

      stream.match(types);
      state.tokenize.pop();
      return "def";
    }

    function tokenQuote(end, style, embed) {
      return function (stream, state) {
        var escaped = false;

        while (stream.peek()) {
          if (!escaped) {
            if (stream.match("{%", false)) {
              state.tokenize.push(tokenMacro("%", "%"));
              return style;
            }

            if (stream.match("{{", false)) {
              state.tokenize.push(tokenMacro("{", "}"));
              return style;
            }

            if (embed && stream.match("#{", false)) {
              state.tokenize.push(tokenNest("#{", "}", "meta"));
              return style;
            }

            var ch = stream.next();

            if (ch == end) {
              state.tokenize.pop();
              return style;
            }

            escaped = ch == "\\";
          } else {
            stream.next();
            escaped = false;
          }
        }

        return style;
      };
    }

    return {
      startState: function () {
        return {
          tokenize: [tokenBase],
          currentIndent: 0,
          lastToken: null,
          blocks: []
        };
      },

      token: function (stream, state) {
        var style = state.tokenize[state.tokenize.length - 1](stream, state);
        var token = stream.current();

        if (style && style != "comment") {
          state.lastToken = token;
        }

        return style;
      },

      indent: function (state, textAfter) {
        textAfter = textAfter.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, "");

        if (dedentKeywords.test(textAfter) || dedentPunctuals.test(textAfter)) {
          return config.indentUnit * (state.currentIndent - 1);
        }

        return config.indentUnit * state.currentIndent;
      },

      fold: "indent",
      electricInput: wordRegExp(dedentPunctualsArray.concat(dedentKeywordsArray), true),
      lineComment: '#'
    };
  });

  CodeMirror.defineMIME("text/x-crystal", "crystal");
});
