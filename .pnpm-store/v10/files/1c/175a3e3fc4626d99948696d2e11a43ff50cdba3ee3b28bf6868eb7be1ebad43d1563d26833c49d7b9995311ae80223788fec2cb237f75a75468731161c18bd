define("vs/kotlin-CSDqhv6t", ["exports"], (function(exports) {
  "use strict";
  const conf = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: "<", close: ">" }
    ],
    folding: {
      markers: {
        start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
        end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
      }
    }
  };
  const language = {
    defaultToken: "",
    tokenPostfix: ".kt",
    keywords: [
      "as",
      "as?",
      "break",
      "class",
      "continue",
      "do",
      "else",
      "false",
      "for",
      "fun",
      "if",
      "in",
      "!in",
      "interface",
      "is",
      "!is",
      "null",
      "object",
      "package",
      "return",
      "super",
      "this",
      "throw",
      "true",
      "try",
      "typealias",
      "val",
      "var",
      "when",
      "while",
      "by",
      "catch",
      "constructor",
      "delegate",
      "dynamic",
      "field",
      "file",
      "finally",
      "get",
      "import",
      "init",
      "param",
      "property",
      "receiver",
      "set",
      "setparam",
      "where",
      "actual",
      "abstract",
      "annotation",
      "companion",
      "const",
      "crossinline",
      "data",
      "enum",
      "expect",
      "external",
      "final",
      "infix",
      "inline",
      "inner",
      "internal",
      "lateinit",
      "noinline",
      "open",
      "operator",
      "out",
      "override",
      "private",
      "protected",
      "public",
      "reified",
      "sealed",
      "suspend",
      "tailrec",
      "vararg",
      "field",
      "it"
    ],
    operators: [
      "+",
      "-",
      "*",
      "/",
      "%",
      "=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "++",
      "--",
      "&&",
      "||",
      "!",
      "==",
      "!=",
      "===",
      "!==",
      ">",
      "<",
      "<=",
      ">=",
      "[",
      "]",
      "!!",
      "?.",
      "?:",
      "::",
      "..",
      ":",
      "?",
      "->",
      "@",
      ";",
      "$",
      "_"
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // The main tokenizer for our languages
    tokenizer: {
      root: [
        // class name highlighting
        [/[A-Z][\w\$]*/, "type.identifier"],
        // identifiers and keywords
        [
          /[a-zA-Z_$][\w$]*/,
          {
            cases: {
              "@keywords": { token: "keyword.$0" },
              "@default": "identifier"
            }
          }
        ],
        // whitespace
        { include: "@whitespace" },
        // delimiters and operators
        [/[{}()\[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [
          /@symbols/,
          {
            cases: {
              "@operators": "delimiter",
              "@default": ""
            }
          }
        ],
        // @ annotations.
        [/@\s*[a-zA-Z_\$][\w\$]*/, "annotation"],
        // numbers
        [/(@digits)[eE]([\-+]?(@digits))?[fF]?/, "number.float"],
        [/(@digits)?\.(@digits)([eE][\-+]?(@digits))?[fF]?/, "number.float"],
        [/0[xX](@hexdigits)[uU]?L?/, "number.hex"],
        [/0[bB](@binarydigits)[uU]?L?/, "number.binary"],
        [/(@digits)[fF]/, "number.float"],
        [/(@digits)[uU]?L?/, "number"],
        // delimiter: after number because of .\d floats
        [/[;,.]/, "delimiter"],
        // strings
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        // non-teminated string
        [/"""/, "string", "@multistring"],
        [/"/, "string", "@string"],
        // characters
        [/'[^\\']'/, "string"],
        [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
        [/'/, "string.invalid"]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/\/\*\*(?!\/)/, "comment.doc", "@javadoc"],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"]
      ],
      comment: [
        [/[^\/*]+/, "comment"],
        [/\/\*/, "comment", "@comment"],
        [/\*\//, "comment", "@pop"],
        [/[\/*]/, "comment"]
      ],
      //Identical copy of comment above, except for the addition of .doc
      javadoc: [
        [/[^\/*]+/, "comment.doc"],
        [/\/\*/, "comment.doc", "@push"],
        [/\/\*/, "comment.doc.invalid"],
        [/\*\//, "comment.doc", "@pop"],
        [/[\/*]/, "comment.doc"]
      ],
      string: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"]
      ],
      multistring: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"""/, "string", "@pop"],
        [/./, "string"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
