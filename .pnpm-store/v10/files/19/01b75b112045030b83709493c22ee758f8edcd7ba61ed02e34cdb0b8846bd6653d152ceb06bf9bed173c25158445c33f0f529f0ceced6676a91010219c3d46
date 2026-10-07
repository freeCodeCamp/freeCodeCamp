const conf = {
  comments: {
    lineComment: "//",
    blockComment: ["(*", "*)"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ]
};
const language = {
  defaultToken: "",
  tokenPostfix: ".pascaligo",
  ignoreCase: true,
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  keywords: [
    "begin",
    "block",
    "case",
    "const",
    "else",
    "end",
    "fail",
    "for",
    "from",
    "function",
    "if",
    "is",
    "nil",
    "of",
    "remove",
    "return",
    "skip",
    "then",
    "type",
    "var",
    "while",
    "with",
    "option",
    "None",
    "transaction"
  ],
  typeKeywords: [
    "bool",
    "int",
    "list",
    "map",
    "nat",
    "record",
    "string",
    "unit",
    "address",
    "map",
    "mtz",
    "xtz"
  ],
  operators: [
    "=",
    ">",
    "<",
    "<=",
    ">=",
    "<>",
    ":",
    ":=",
    "and",
    "mod",
    "or",
    "+",
    "-",
    "*",
    "/",
    "@",
    "&",
    "^",
    "%"
  ],
  // we include these common regular expressions
  symbols: /[=><:@\^&|+\-*\/\^%]+/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // identifiers and keywords
      [
        /[a-zA-Z_][\w]*/,
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
      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\$[0-9a-fA-F]{1,16}/, "number.hex"],
      [/\d+/, "number"],
      // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"],
      // strings
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      // non-teminated string
      [/'/, "string", "@string"],
      // characters
      [/'[^\\']'/, "string"],
      [/'/, "string.invalid"],
      [/\#\d+/, "string"]
    ],
    /* */
    comment: [
      [/[^\(\*]+/, "comment"],
      //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
      [/\*\)/, "comment", "@pop"],
      [/\(\*/, "comment"]
    ],
    string: [
      [/[^\\']+/, "string"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\(\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ]
  }
};

export { conf, language };
