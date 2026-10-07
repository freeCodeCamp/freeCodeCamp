define("vs/yaml-Dx1TJ9RY", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
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
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ],
    folding: {
      offSide: true
    },
    onEnterRules: [
      {
        beforeText: /:\s*$/,
        action: {
          indentAction: editor_api.languages.IndentAction.Indent
        }
      }
    ]
  };
  const language = {
    tokenPostfix: ".yaml",
    brackets: [
      { token: "delimiter.bracket", open: "{", close: "}" },
      { token: "delimiter.square", open: "[", close: "]" }
    ],
    keywords: ["true", "True", "TRUE", "false", "False", "FALSE", "null", "Null", "Null", "~"],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
      root: [
        { include: "@whitespace" },
        { include: "@comment" },
        // Directive
        [/%[^ ]+.*$/, "meta.directive"],
        // Document Markers
        [/---/, "operators.directivesEnd"],
        [/\.{3}/, "operators.documentEnd"],
        // Block Structure Indicators
        [/[-?:](?= )/, "operators"],
        { include: "@anchor" },
        { include: "@tagHandle" },
        { include: "@flowCollections" },
        { include: "@blockStyle" },
        // Numbers
        [/@numberInteger(?![ \t]*\S+)/, "number"],
        [/@numberFloat(?![ \t]*\S+)/, "number.float"],
        [/@numberOctal(?![ \t]*\S+)/, "number.octal"],
        [/@numberHex(?![ \t]*\S+)/, "number.hex"],
        [/@numberInfinity(?![ \t]*\S+)/, "number.infinity"],
        [/@numberNaN(?![ \t]*\S+)/, "number.nan"],
        [/@numberDate(?![ \t]*\S+)/, "number.date"],
        // Key:Value pair
        [/(".*?"|'.*?'|[^#'"]*?)([ \t]*)(:)( |$)/, ["type", "white", "operators", "white"]],
        { include: "@flowScalars" },
        // String nodes
        [
          /.+?(?=(\s+#|$))/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "string"
            }
          }
        ]
      ],
      // Flow Collection: Flow Mapping
      object: [
        { include: "@whitespace" },
        { include: "@comment" },
        // Flow Mapping termination
        [/\}/, "@brackets", "@pop"],
        // Flow Mapping delimiter
        [/,/, "delimiter.comma"],
        // Flow Mapping Key:Value delimiter
        [/:(?= )/, "operators"],
        // Flow Mapping Key:Value key
        [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, "type"],
        // Start Flow Style
        { include: "@flowCollections" },
        { include: "@flowScalars" },
        // Scalar Data types
        { include: "@tagHandle" },
        { include: "@anchor" },
        { include: "@flowNumber" },
        // Other value (keyword or string)
        [
          /[^\},]+/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "string"
            }
          }
        ]
      ],
      // Flow Collection: Flow Sequence
      array: [
        { include: "@whitespace" },
        { include: "@comment" },
        // Flow Sequence termination
        [/\]/, "@brackets", "@pop"],
        // Flow Sequence delimiter
        [/,/, "delimiter.comma"],
        // Start Flow Style
        { include: "@flowCollections" },
        { include: "@flowScalars" },
        // Scalar Data types
        { include: "@tagHandle" },
        { include: "@anchor" },
        { include: "@flowNumber" },
        // Other value (keyword or string)
        [
          /[^\],]+/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "string"
            }
          }
        ]
      ],
      // First line of a Block Style
      multiString: [[/^( +).+$/, "string", "@multiStringContinued.$1"]],
      // Further lines of a Block Style
      //   Workaround for indentation detection
      multiStringContinued: [
        [
          /^( *).+$/,
          {
            cases: {
              "$1==$S2": "string",
              "@default": { token: "@rematch", next: "@popall" }
            }
          }
        ]
      ],
      whitespace: [[/[ \t\r\n]+/, "white"]],
      // Only line comments
      comment: [[/#.*$/, "comment"]],
      // Start Flow Collections
      flowCollections: [
        [/\[/, "@brackets", "@array"],
        [/\{/, "@brackets", "@object"]
      ],
      // Start Flow Scalars (quoted strings)
      flowScalars: [
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/'([^'\\]|\\.)*$/, "string.invalid"],
        [/'[^']*'/, "string"],
        [/"/, "string", "@doubleQuotedString"]
      ],
      doubleQuotedString: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"]
      ],
      // Start Block Scalar
      blockStyle: [[/[>|][0-9]*[+-]?$/, "operators", "@multiString"]],
      // Numbers in Flow Collections (terminate with ,]})
      flowNumber: [
        [/@numberInteger(?=[ \t]*[,\]\}])/, "number"],
        [/@numberFloat(?=[ \t]*[,\]\}])/, "number.float"],
        [/@numberOctal(?=[ \t]*[,\]\}])/, "number.octal"],
        [/@numberHex(?=[ \t]*[,\]\}])/, "number.hex"],
        [/@numberInfinity(?=[ \t]*[,\]\}])/, "number.infinity"],
        [/@numberNaN(?=[ \t]*[,\]\}])/, "number.nan"],
        [/@numberDate(?=[ \t]*[,\]\}])/, "number.date"]
      ],
      tagHandle: [[/\![^ ]*/, "tag"]],
      anchor: [[/[&*][^ ]+/, "namespace"]]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
