// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../htmlmixed/htmlmixed"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var indentingTags = ["template", "literal", "msg", "fallbackmsg", "let", "if", "elseif",
                       "else", "switch", "case", "default", "foreach", "ifempty", "for",
                       "call", "param", "deltemplate", "delcall", "log"];

  CodeMirror.defineMode("soy", function(config) {
    var textMode = CodeMirror.getMode(config, "text/plain");
    var modes = {
      html: CodeMirror.getMode(config, {name: "text/html", multilineTagIndentFactor: 2, multilineTagIndentPastTag: false}),
      attributes: textMode,
      text: textMode,
      uri: textMode,
      css: CodeMirror.getMode(config, "text/css"),
      js: CodeMirror.getMode(config, {name: "text/javascript", statementIndent: 2 * config.indentUnit})
    };

    function last(array) {
      return array[array.length - 1];
    }

    function tokenUntil(stream, state, untilRegExp) {
      var oldString = stream.string;
      var match = untilRegExp.exec(oldString.substr(stream.pos));
      if (match) {
        // We don't use backUp because it backs up just the position, not the state.
        // This uses an undocumented API.
        stream.string = oldString.substr(0, stream.pos + match.index);
      }
      var result = stream.hideFirstChars(state.indent, function() {
        return state.localMode.token(stream, state.localState);
      });
      stream.string = oldString;
      return result;
    }

    return {
      startState: function() {
        return {
          kind: [],
          kindTag: [],
          soyState: [],
          indent: 0,
          localMode: modes.html,
          localState: CodeMirror.startState(modes.html)
        };
      },

      copyState: function(state) {
        return {
          tag: state.tag, // Last seen Soy tag.
          kind: state.kind.concat([]), // Values of kind="" attributes.
          kindTag: state.kindTag.concat([]), // Opened tags with kind="" attributes.
          soyState: state.soyState.concat([]),
          indent: state.indent, // Indentation of the following line.
          localMode: state.localMode,
          localState: CodeMirror.copyState(state.localMode, state.localState)
        };
      },

      token: function(stream, state) {
        var match;

        switch (last(state.soyState)) {
          case "comment":
            if (stream.match(/^.*?\*\//)) {
              state.soyState.pop();
            } else {
              stream.skipToEnd();
            }
            return "comment";

          case "variable":
            if (stream.match(/^}/)) {
              state.indent -= 2 * config.indentUnit;
              state.soyState.pop();
              return "variable-2";
            }
            stream.next();
            return null;

          case "tag":
            if (stream.match(/^\/?}/)) {
              if (state.tag == "/template" || state.tag == "/deltemplate") state.indent = 0;
              else state.indent -= (stream.current() == "/}" || indentingTags.indexOf(state.tag) == -1 ? 2 : 1) * config.indentUnit;
              state.soyState.pop();
              return "keyword";
            } else if (stream.match(/^(\w+)(?==)/)) {
              if (stream.current() == "kind" && (match = stream.match(/^="([^"]+)/, false))) {
                var kind = match[1];
                state.kind.push(kind);
                state.kindTag.push(state.tag);
                state.localMode = modes[kind] || modes.html;
                state.localState = CodeMirror.startState(state.localMode);
              }
              return "attribute";
            } else if (stream.match(/^"/)) {
              state.soyState.push("string");
              return "string";
            }
            stream.next();
            return null;

          case "literal":
            if (stream.match(/^(?=\{\/literal})/)) {
              state.indent -= config.indentUnit;
              state.soyState.pop();
              return this.token(stream, state);
            }
            return tokenUntil(stream, state, /\{\/literal}/);

          case "string":
            if (stream.match(/^.*?"/)) {
              state.soyState.pop();
            } else {
              stream.skipToEnd();
            }
            return "string";
        }

        if (stream.match(/^\/\*/)) {
          state.soyState.push("comment");
          return "comment";
        } else if (stream.match(stream.sol() ? /^\s*\/\/.*/ : /^\s+\/\/.*/)) {
          return "comment";
        } else if (stream.match(/^\{\$\w*/)) {
          state.indent += 2 * config.indentUnit;
          state.soyState.push("variable");
          return "variable-2";
        } else if (stream.match(/^\{literal}/)) {
          state.indent += config.indentUnit;
          state.soyState.push("literal");
          return "keyword";
        } else if (match = stream.match(/^\{([\/@\\]?\w*)/)) {
          if (match[1] != "/switch")
            state.indent += (/^(\/|(else|elseif|case|default)$)/.test(match[1]) && state.tag != "switch" ? 1 : 2) * config.indentUnit;
          state.tag = match[1];
          if (state.tag == "/" + last(state.kindTag)) {
            // We found the tag that opened the current kind="".
            state.kind.pop();
            state.kindTag.pop();
            state.localMode = modes[last(state.kind)] || modes.html;
            state.localState = CodeMirror.startState(state.localMode);
          }
          state.soyState.push("tag");
          return "keyword";
        }

        return tokenUntil(stream, state, /\{|\s+\/\/|\/\*/);
      },

      indent: function(state, textAfter) {
        var indent = state.indent, top = last(state.soyState);
        if (top == "comment") return CodeMirror.Pass;

        if (top == "literal") {
          if (/^\{\/literal}/.test(textAfter)) indent -= config.indentUnit;
        } else {
          if (/^\s*\{\/(template|deltemplate)\b/.test(textAfter)) return 0;
          if (/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(textAfter)) indent -= config.indentUnit;
          if (state.tag != "switch" && /^\{(case|default)\b/.test(textAfter)) indent -= config.indentUnit;
          if (/^\{\/switch\b/.test(textAfter)) indent -= config.indentUnit;
        }
        if (indent && state.localMode.indent)
          indent += state.localMode.indent(state.localState, textAfter);
        return indent;
      },

      innerMode: function(state) {
        if (state.soyState.length && last(state.soyState) != "literal") return null;
        else return {state: state.localState, mode: state.localMode};
      },

      electricInput: /^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,
      lineComment: "//",
      blockCommentStart: "/*",
      blockCommentEnd: "*/",
      blockCommentContinue: " * ",
      fold: "indent"
    };
  }, "htmlmixed");

  CodeMirror.registerHelper("hintWords", "soy", indentingTags.concat(
      ["delpackage", "namespace", "alias", "print", "css", "debugger"]));

  CodeMirror.defineMIME("text/x-soy", "soy");
});
