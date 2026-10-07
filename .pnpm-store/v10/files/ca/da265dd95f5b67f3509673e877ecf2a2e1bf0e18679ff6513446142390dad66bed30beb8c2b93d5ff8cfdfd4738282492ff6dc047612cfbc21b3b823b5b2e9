const conf = {
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
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};
const language = {
  defaultToken: "",
  tokenPostfix: `.cypher`,
  ignoreCase: true,
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: [
    "ALL",
    "AND",
    "AS",
    "ASC",
    "ASCENDING",
    "BY",
    "CALL",
    "CASE",
    "CONTAINS",
    "CREATE",
    "DELETE",
    "DESC",
    "DESCENDING",
    "DETACH",
    "DISTINCT",
    "ELSE",
    "END",
    "ENDS",
    "EXISTS",
    "IN",
    "IS",
    "LIMIT",
    "MANDATORY",
    "MATCH",
    "MERGE",
    "NOT",
    "ON",
    "ON",
    "OPTIONAL",
    "OR",
    "ORDER",
    "REMOVE",
    "RETURN",
    "SET",
    "SKIP",
    "STARTS",
    "THEN",
    "UNION",
    "UNWIND",
    "WHEN",
    "WHERE",
    "WITH",
    "XOR",
    "YIELD"
  ],
  builtinLiterals: ["true", "TRUE", "false", "FALSE", "null", "NULL"],
  builtinFunctions: [
    "abs",
    "acos",
    "asin",
    "atan",
    "atan2",
    "avg",
    "ceil",
    "coalesce",
    "collect",
    "cos",
    "cot",
    "count",
    "degrees",
    "e",
    "endNode",
    "exists",
    "exp",
    "floor",
    "head",
    "id",
    "keys",
    "labels",
    "last",
    "left",
    "length",
    "log",
    "log10",
    "lTrim",
    "max",
    "min",
    "nodes",
    "percentileCont",
    "percentileDisc",
    "pi",
    "properties",
    "radians",
    "rand",
    "range",
    "relationships",
    "replace",
    "reverse",
    "right",
    "round",
    "rTrim",
    "sign",
    "sin",
    "size",
    "split",
    "sqrt",
    "startNode",
    "stDev",
    "stDevP",
    "substring",
    "sum",
    "tail",
    "tan",
    "timestamp",
    "toBoolean",
    "toFloat",
    "toInteger",
    "toLower",
    "toString",
    "toUpper",
    "trim",
    "type"
  ],
  operators: [
    // Math operators
    "+",
    "-",
    "*",
    "/",
    "%",
    "^",
    // Comparison operators
    "=",
    "<>",
    "<",
    ">",
    "<=",
    ">=",
    // Pattern operators
    "->",
    "<-",
    "-->",
    "<--"
  ],
  escapes: /\\(?:[tbnrf\\"'`]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+/,
  octaldigits: /[0-7]+/,
  hexdigits: /[0-9a-fA-F]+/,
  tokenizer: {
    root: [[/[{}[\]()]/, "@brackets"], { include: "common" }],
    common: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      // Cypher labels on nodes/relationships, e.g. (n:NodeLabel)-[e:RelationshipLabel]
      [/:[a-zA-Z_][\w]*/, "type.identifier"],
      [
        /[a-zA-Z_][\w]*(?=\()/,
        {
          cases: {
            "@builtinFunctions": "predefined.function"
          }
        }
      ],
      [
        /[a-zA-Z_$][\w$]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@builtinLiterals": "predefined.literal",
            "@default": "identifier"
          }
        }
      ],
      [/`/, "identifier.escape", "@identifierBacktick"],
      // delimiter and operator after number because of `.\d` floats and `:` in labels
      [/[;,.:|]/, "delimiter"],
      [
        /[<>=%+\-*/^]+/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }
      ]
    ],
    numbers: [
      [/-?(@digits)[eE](-?(@digits))?/, "number.float"],
      [/-?(@digits)?\.(@digits)([eE]-?(@digits))?/, "number.float"],
      [/-?0x(@hexdigits)/, "number.hex"],
      [/-?0(@octaldigits)/, "number.octal"],
      [/-?(@digits)/, "number"]
    ],
    strings: [
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      // non-teminated string
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      // non-teminated string
      [/"/, "string", "@stringDouble"],
      [/'/, "string", "@stringSingle"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    comment: [
      [/\/\/.*/, "comment"],
      [/[^/*]+/, "comment"],
      [/\*\//, "comment", "@pop"],
      [/[/*]/, "comment"]
    ],
    stringDouble: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string"],
      [/\\./, "string.invalid"],
      [/"/, "string", "@pop"]
    ],
    stringSingle: [
      [/[^\\']+/, "string"],
      [/@escapes/, "string"],
      [/\\./, "string.invalid"],
      [/'/, "string", "@pop"]
    ],
    identifierBacktick: [
      [/[^\\`]+/, "identifier.escape"],
      [/@escapes/, "identifier.escape"],
      [/\\./, "identifier.escape.invalid"],
      [/`/, "identifier.escape", "@pop"]
    ]
  }
};

export { conf, language };
