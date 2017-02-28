// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Factor syntax highlight - simple mode
//
// by Dimage Sapelkin (https://github.com/kerabromsmu)

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../../addon/mode/simple"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../../addon/mode/simple"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineSimpleMode("factor", {
    // The start state contains the rules that are intially used
    start: [
      // comments
      {regex: /#?!.*/, token: "comment"},
      // strings """, multiline --> state
      {regex: /"""/, token: "string", next: "string3"},
      {regex: /"/, token: "string", next: "string"},
      // numbers: dec, hex, unicode, bin, fractional, complex
      {regex: /(?:[+-]?)(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\d+.?\d*)/, token: "number"},
      //{regex: /[+-]?/} //fractional
      // definition: defining word, defined word, etc
      {regex: /(\:)(\s+)(\S+)(\s+)(\()/, token: ["keyword", null, "def", null, "keyword"], next: "stack"},
      // vocabulary using --> state
      {regex: /USING\:/, token: "keyword", next: "vocabulary"},
      // vocabulary definition/use
      {regex: /(USE\:|IN\:)(\s+)(\S+)/, token: ["keyword", null, "variable-2"]},
      // <constructors>
      {regex: /<\S+>/, token: "builtin"},
      // "keywords", incl. ; t f . [ ] { } defining words
      {regex: /;|t|f|if|\.|\[|\]|\{|\}|MAIN:/, token: "keyword"},
      // any id (?)
      {regex: /\S+/, token: "variable"},

      {
        regex: /./,
        token: null
      }
    ],
    vocabulary: [
      {regex: /;/, token: "keyword", next: "start"},
      {regex: /\S+/, token: "variable-2"},
      {
        regex: /./,
        token: null
      }
    ],
    string: [
      {regex: /(?:[^\\]|\\.)*?"/, token: "string", next: "start"},
      {regex: /.*/, token: "string"}
    ],
    string3: [
      {regex: /(?:[^\\]|\\.)*?"""/, token: "string", next: "start"},
      {regex: /.*/, token: "string"}
    ],
    stack: [
      {regex: /\)/, token: "meta", next: "start"},
      {regex: /--/, token: "meta"},
      {regex: /\S+/, token: "variable-3"},
      {
        regex: /./,
        token: null
      }
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
      dontIndentStates: ["start", "vocabulary", "string", "string3", "stack"],
      lineComment: [ "!", "#!" ]
    }
  });

  CodeMirror.defineMIME("text/x-factor", "factor");
});
