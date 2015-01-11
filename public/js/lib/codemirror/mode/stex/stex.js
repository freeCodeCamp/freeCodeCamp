// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/*
 * Author: Constantin Jucovschi (c.jucovschi@jacobs-university.de)
 * Licence: MIT
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("stex", function() {
    "use strict";

    function pushCommand(state, command) {
      state.cmdState.push(command);
    }

    function peekCommand(state) {
      if (state.cmdState.length > 0) {
        return state.cmdState[state.cmdState.length - 1];
      } else {
        return null;
      }
    }

    function popCommand(state) {
      var plug = state.cmdState.pop();
      if (plug) {
        plug.closeBracket();
      }
    }

    // returns the non-default plugin closest to the end of the list
    function getMostPowerful(state) {
      var context = state.cmdState;
      for (var i = context.length - 1; i >= 0; i--) {
        var plug = context[i];
        if (plug.name == "DEFAULT") {
          continue;
        }
        return plug;
      }
      return { styleIdentifier: function() { return null; } };
    }

    function addPluginPattern(pluginName, cmdStyle, styles) {
      return function () {
        this.name = pluginName;
        this.bracketNo = 0;
        this.style = cmdStyle;
        this.styles = styles;
        this.argument = null;   // \begin and \end have arguments that follow. These are stored in the plugin

        this.styleIdentifier = function() {
          return this.styles[this.bracketNo - 1] || null;
        };
        this.openBracket = function() {
          this.bracketNo++;
          return "bracket";
        };
        this.closeBracket = function() {};
      };
    }

    var plugins = {};

    plugins["importmodule"] = addPluginPattern("importmodule", "tag", ["string", "builtin"]);
    plugins["documentclass"] = addPluginPattern("documentclass", "tag", ["", "atom"]);
    plugins["usepackage"] = addPluginPattern("usepackage", "tag", ["atom"]);
    plugins["begin"] = addPluginPattern("begin", "tag", ["atom"]);
    plugins["end"] = addPluginPattern("end", "tag", ["atom"]);

    plugins["DEFAULT"] = function () {
      this.name = "DEFAULT";
      this.style = "tag";

      this.styleIdentifier = this.openBracket = this.closeBracket = function() {};
    };

    function setState(state, f) {
      state.f = f;
    }

    // called when in a normal (no environment) context
    function normal(source, state) {
      var plug;
      // Do we look like '\command' ?  If so, attempt to apply the plugin 'command'
      if (source.match(/^\\[a-zA-Z@]+/)) {
        var cmdName = source.current().slice(1);
        plug = plugins[cmdName] || plugins["DEFAULT"];
        plug = new plug();
        pushCommand(state, plug);
        setState(state, beginParams);
        return plug.style;
      }

      // escape characters
      if (source.match(/^\\[$&%#{}_]/)) {
        return "tag";
      }

      // white space control characters
      if (source.match(/^\\[,;!\/\\]/)) {
        return "tag";
      }

      // find if we're starting various math modes
      if (source.match("\\[")) {
        setState(state, function(source, state){ return inMathMode(source, state, "\\]"); });
        return "keyword";
      }
      if (source.match("$$")) {
        setState(state, function(source, state){ return inMathMode(source, state, "$$"); });
        return "keyword";
      }
      if (source.match("$")) {
        setState(state, function(source, state){ return inMathMode(source, state, "$"); });
        return "keyword";
      }

      var ch = source.next();
      if (ch == "%") {
        source.skipToEnd();
        return "comment";
      } else if (ch == '}' || ch == ']') {
        plug = peekCommand(state);
        if (plug) {
          plug.closeBracket(ch);
          setState(state, beginParams);
        } else {
          return "error";
        }
        return "bracket";
      } else if (ch == '{' || ch == '[') {
        plug = plugins["DEFAULT"];
        plug = new plug();
        pushCommand(state, plug);
        return "bracket";
      } else if (/\d/.test(ch)) {
        source.eatWhile(/[\w.%]/);
        return "atom";
      } else {
        source.eatWhile(/[\w\-_]/);
        plug = getMostPowerful(state);
        if (plug.name == 'begin') {
          plug.argument = source.current();
        }
        return plug.styleIdentifier();
      }
    }

    function inMathMode(source, state, endModeSeq) {
      if (source.eatSpace()) {
        return null;
      }
      if (source.match(endModeSeq)) {
        setState(state, normal);
        return "keyword";
      }
      if (source.match(/^\\[a-zA-Z@]+/)) {
        return "tag";
      }
      if (source.match(/^[a-zA-Z]+/)) {
        return "variable-2";
      }
      // escape characters
      if (source.match(/^\\[$&%#{}_]/)) {
        return "tag";
      }
      // white space control characters
      if (source.match(/^\\[,;!\/]/)) {
        return "tag";
      }
      // special math-mode characters
      if (source.match(/^[\^_&]/)) {
        return "tag";
      }
      // non-special characters
      if (source.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) {
        return null;
      }
      if (source.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) {
        return "number";
      }
      var ch = source.next();
      if (ch == "{" || ch == "}" || ch == "[" || ch == "]" || ch == "(" || ch == ")") {
        return "bracket";
      }

      if (ch == "%") {
        source.skipToEnd();
        return "comment";
      }
      return "error";
    }

    function beginParams(source, state) {
      var ch = source.peek(), lastPlug;
      if (ch == '{' || ch == '[') {
        lastPlug = peekCommand(state);
        lastPlug.openBracket(ch);
        source.eat(ch);
        setState(state, normal);
        return "bracket";
      }
      if (/[ \t\r]/.test(ch)) {
        source.eat(ch);
        return null;
      }
      setState(state, normal);
      popCommand(state);

      return normal(source, state);
    }

    return {
      startState: function() {
        return {
          cmdState: [],
          f: normal
        };
      },
      copyState: function(s) {
        return {
          cmdState: s.cmdState.slice(),
          f: s.f
        };
      },
      token: function(stream, state) {
        return state.f(stream, state);
      },
      blankLine: function(state) {
        state.f = normal;
        state.cmdState.length = 0;
      },
      lineComment: "%"
    };
  });

  CodeMirror.defineMIME("text/x-stex", "stex");
  CodeMirror.defineMIME("text/x-latex", "stex");

});
