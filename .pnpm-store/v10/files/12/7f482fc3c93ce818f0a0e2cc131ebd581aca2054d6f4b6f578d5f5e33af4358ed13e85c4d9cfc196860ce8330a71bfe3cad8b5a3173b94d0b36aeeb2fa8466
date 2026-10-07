const conf = {
  comments: {
    blockComment: ["(*", "*)"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "[", close: "]" },
    { open: "{", close: "}" },
    { open: "(", close: ")" },
    { open: "(*", close: "*)" },
    { open: "<*", close: "*>" },
    { open: "'", close: "'", notIn: ["string", "comment"] },
    { open: '"', close: '"', notIn: ["string", "comment"] }
  ]
};
const language = {
  defaultToken: "",
  tokenPostfix: ".m3",
  brackets: [
    { token: "delimiter.curly", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: [
    "AND",
    "ANY",
    "ARRAY",
    "AS",
    "BEGIN",
    "BITS",
    "BRANDED",
    "BY",
    "CASE",
    "CONST",
    "DIV",
    "DO",
    "ELSE",
    "ELSIF",
    "END",
    "EVAL",
    "EXCEPT",
    "EXCEPTION",
    "EXIT",
    "EXPORTS",
    "FINALLY",
    "FOR",
    "FROM",
    "GENERIC",
    "IF",
    "IMPORT",
    "IN",
    "INTERFACE",
    "LOCK",
    "LOOP",
    "METHODS",
    "MOD",
    "MODULE",
    "NOT",
    "OBJECT",
    "OF",
    "OR",
    "OVERRIDES",
    "PROCEDURE",
    "RAISE",
    "RAISES",
    "READONLY",
    "RECORD",
    "REF",
    "REPEAT",
    "RETURN",
    "REVEAL",
    "SET",
    "THEN",
    "TO",
    "TRY",
    "TYPE",
    "TYPECASE",
    "UNSAFE",
    "UNTIL",
    "UNTRACED",
    "VALUE",
    "VAR",
    "WHILE",
    "WITH"
  ],
  reservedConstNames: [
    "ABS",
    "ADR",
    "ADRSIZE",
    "BITSIZE",
    "BYTESIZE",
    "CEILING",
    "DEC",
    "DISPOSE",
    "FALSE",
    "FIRST",
    "FLOAT",
    "FLOOR",
    "INC",
    "ISTYPE",
    "LAST",
    "LOOPHOLE",
    "MAX",
    "MIN",
    "NARROW",
    "NEW",
    "NIL",
    "NUMBER",
    "ORD",
    "ROUND",
    "SUBARRAY",
    "TRUE",
    "TRUNC",
    "TYPECODE",
    "VAL"
  ],
  reservedTypeNames: [
    "ADDRESS",
    "ANY",
    "BOOLEAN",
    "CARDINAL",
    "CHAR",
    "EXTENDED",
    "INTEGER",
    "LONGCARD",
    "LONGINT",
    "LONGREAL",
    "MUTEX",
    "NULL",
    "REAL",
    "REFANY",
    "ROOT",
    "TEXT"
  ],
  operators: ["+", "-", "*", "/", "&", "^", "."],
  relations: ["=", "#", "<", "<=", ">", ">=", "<:", ":"],
  delimiters: ["|", "..", "=>", ",", ";", ":="],
  symbols: /[>=<#.,:;+\-*/&^]+/,
  escapes: /\\(?:[\\fnrt"']|[0-7]{3})/,
  tokenizer: {
    root: [
      // Identifiers and keywords
      [/_\w*/, "invalid"],
      [
        /[a-zA-Z][a-zA-Z0-9_]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@reservedConstNames": { token: "constant.reserved.$0" },
            "@reservedTypeNames": { token: "type.reserved.$0" },
            "@default": "identifier"
          }
        }
      ],
      // Whitespace
      { include: "@whitespace" },
      [/[{}()\[\]]/, "@brackets"],
      // Integer- and real literals
      [/[0-9]+\.[0-9]+(?:[DdEeXx][\+\-]?[0-9]+)?/, "number.float"],
      [/[0-9]+(?:\_[0-9a-fA-F]+)?L?/, "number"],
      // Operators, relations, and delimiters
      [
        /@symbols/,
        {
          cases: {
            "@operators": "operators",
            "@relations": "operators",
            "@delimiters": "delimiter",
            "@default": "invalid"
          }
        }
      ],
      // Character literals
      [/'[^\\']'/, "string.char"],
      [/(')(@escapes)(')/, ["string.char", "string.escape", "string.char"]],
      [/'/, "invalid"],
      // Text literals
      [/"([^"\\]|\\.)*$/, "invalid"],
      [/"/, "string.text", "@text"]
    ],
    text: [
      [/[^\\"]+/, "string.text"],
      [/@escapes/, "string.escape"],
      [/\\./, "invalid"],
      [/"/, "string.text", "@pop"]
    ],
    comment: [
      [/\(\*/, "comment", "@push"],
      [/\*\)/, "comment", "@pop"],
      [/./, "comment"]
    ],
    pragma: [
      [/<\*/, "keyword.pragma", "@push"],
      [/\*>/, "keyword.pragma", "@pop"],
      [/./, "keyword.pragma"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\(\*/, "comment", "@comment"],
      [/<\*/, "keyword.pragma", "@pragma"]
    ]
  }
};

export { conf, language };
