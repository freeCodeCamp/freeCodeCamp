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

CodeMirror.defineMode("fcl", function(config) {
  var indentUnit = config.indentUnit;

  var keywords = {
      "term": true,
      "method": true, "accu": true,
      "rule": true, "then": true, "is": true, "and": true, "or": true,
      "if": true, "default": true
  };

  var start_blocks = {
      "var_input": true,
      "var_output": true,
      "fuzzify": true,
      "defuzzify": true,
      "function_block": true,
      "ruleblock": true
  };

  var end_blocks = {
      "end_ruleblock": true,
      "end_defuzzify": true,
      "end_function_block": true,
      "end_fuzzify": true,
      "end_var": true
  };

  var atoms = {
      "true": true, "false": true, "nan": true,
      "real": true, "min": true, "max": true, "cog": true, "cogs": true
  };

  var isOperatorChar = /[+\-*&^%:=<>!|\/]/;

  function tokenBase(stream, state) {
    var ch = stream.next();

    if (/[\d\.]/.test(ch)) {
      if (ch == ".") {
        stream.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
      } else if (ch == "0") {
        stream.match(/^[xX][0-9a-fA-F]+/) || stream.match(/^0[0-7]+/);
      } else {
        stream.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
      }
      return "number";
    }

    if (ch == "/" || ch == "(") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      }
      if (stream.eat("/")) {
        stream.skipToEnd();
        return "comment";
      }
    }
    if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return "operator";
    }
    stream.eatWhile(/[\w\$_\xa1-\uffff]/);

    var cur = stream.current().toLowerCase();
    if (keywords.propertyIsEnumerable(cur) ||
        start_blocks.propertyIsEnumerable(cur) ||
        end_blocks.propertyIsEnumerable(cur)) {
      return "keyword";
    }
    if (atoms.propertyIsEnumerable(cur)) return "atom";
    return "variable";
  }


  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if ((ch == "/" || ch == ")") && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return "comment";
  }

  function Context(indented, column, type, align, prev) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.align = align;
    this.prev = prev;
  }

  function pushContext(state, col, type) {
    return state.context = new Context(state.indented, col, type, null, state.context);
  }

  function popContext(state) {
    if (!state.context.prev) return;
    var t = state.context.type;
    if (t == "end_block")
      state.indented = state.context.indented;
    return state.context = state.context.prev;
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: null,
        context: new Context((basecolumn || 0) - indentUnit, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },

    token: function(stream, state) {
        var ctx = state.context;
        if (stream.sol()) {
            if (ctx.align == null) ctx.align = false;
            state.indented = stream.indentation();
            state.startOfLine = true;
        }
        if (stream.eatSpace()) return null;

        var style = (state.tokenize || tokenBase)(stream, state);
        if (style == "comment") return style;
        if (ctx.align == null) ctx.align = true;

        var cur = stream.current().toLowerCase();

        if (start_blocks.propertyIsEnumerable(cur)) pushContext(state, stream.column(), "end_block");
        else if (end_blocks.propertyIsEnumerable(cur))  popContext(state);

        state.startOfLine = false;
        return style;
    },

    indent: function(state, textAfter) {
      if (state.tokenize != tokenBase && state.tokenize != null) return 0;
      var ctx = state.context;

      var closing = end_blocks.propertyIsEnumerable(textAfter);
      if (ctx.align) return ctx.column + (closing ? 0 : 1);
      else return ctx.indented + (closing ? 0 : indentUnit);
    },

    electricChars: "ryk",
    fold: "brace",
    blockCommentStart: "(*",
    blockCommentEnd: "*)",
    lineComment: "//"
  };
});

CodeMirror.defineMIME("text/x-fcl", "fcl");
});
