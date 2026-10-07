define("vs/graphql-CHzgmf8E", ["exports"], (function(exports) {
  "use strict";
  const conf = {
    comments: {
      lineComment: "#"
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
      { open: '"""', close: '"""', notIn: ["string", "comment"] },
      { open: '"', close: '"', notIn: ["string", "comment"] }
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"""', close: '"""' },
      { open: '"', close: '"' }
    ],
    folding: {
      offSide: true
    }
  };
  const language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    tokenPostfix: ".gql",
    keywords: [
      "null",
      "true",
      "false",
      "query",
      "mutation",
      "subscription",
      "extend",
      "schema",
      "directive",
      "scalar",
      "type",
      "interface",
      "union",
      "enum",
      "input",
      "implements",
      "fragment",
      "on"
    ],
    typeKeywords: ["Int", "Float", "String", "Boolean", "ID"],
    directiveLocations: [
      "SCHEMA",
      "SCALAR",
      "OBJECT",
      "FIELD_DEFINITION",
      "ARGUMENT_DEFINITION",
      "INTERFACE",
      "UNION",
      "ENUM",
      "ENUM_VALUE",
      "INPUT_OBJECT",
      "INPUT_FIELD_DEFINITION",
      "QUERY",
      "MUTATION",
      "SUBSCRIPTION",
      "FIELD",
      "FRAGMENT_DEFINITION",
      "FRAGMENT_SPREAD",
      "INLINE_FRAGMENT",
      "VARIABLE_DEFINITION"
    ],
    operators: ["=", "!", "?", ":", "&", "|"],
    // we include these common regular expressions
    symbols: /[=!?:&|]+/,
    // https://facebook.github.io/graphql/draft/#sec-String-Value
    escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
      root: [
        // fields and argument names
        [
          /[a-z_][\w$]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "key.identifier"
            }
          }
        ],
        // identify typed input variables
        [
          /[$][\w$]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "argument.identifier"
            }
          }
        ],
        // to show class names nicely
        [
          /[A-Z][\w\$]*/,
          {
            cases: {
              "@typeKeywords": "keyword",
              "@default": "type.identifier"
            }
          }
        ],
        // whitespace
        { include: "@whitespace" },
        // delimiters and operators
        [/[{}()\[\]]/, "@brackets"],
        [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],
        // @ annotations.
        // As an example, we emit a debugging log message on these tokens.
        // Note: message are supressed during the first load -- change some lines to see them.
        [/@\s*[a-zA-Z_\$][\w\$]*/, { token: "annotation", log: "annotation token: $0" }],
        // numbers
        [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
        [/0[xX][0-9a-fA-F]+/, "number.hex"],
        [/\d+/, "number"],
        // delimiter: after number because of .\d floats
        [/[;,.]/, "delimiter"],
        [/"""/, { token: "string", next: "@mlstring", nextEmbedded: "markdown" }],
        // strings
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        // non-teminated string
        [/"/, { token: "string.quote", bracket: "@open", next: "@string" }]
      ],
      mlstring: [
        [/[^"]+/, "string"],
        ['"""', { token: "string", next: "@pop", nextEmbedded: "@pop" }]
      ],
      string: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/#.*$/, "comment"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
