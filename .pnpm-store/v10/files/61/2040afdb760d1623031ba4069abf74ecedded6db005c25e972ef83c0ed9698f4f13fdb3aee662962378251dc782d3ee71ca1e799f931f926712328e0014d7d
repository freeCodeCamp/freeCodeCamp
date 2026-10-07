define("vs/sparql-O5ONewYs", ["exports"], (function(exports) {
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
      { open: "'", close: "'", notIn: ["string"] },
      { open: '"', close: '"', notIn: ["string"] },
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" }
    ]
  };
  const language = {
    defaultToken: "",
    tokenPostfix: ".rq",
    brackets: [
      { token: "delimiter.curly", open: "{", close: "}" },
      { token: "delimiter.parenthesis", open: "(", close: ")" },
      { token: "delimiter.square", open: "[", close: "]" },
      { token: "delimiter.angle", open: "<", close: ">" }
    ],
    keywords: [
      "add",
      "as",
      "asc",
      "ask",
      "base",
      "by",
      "clear",
      "construct",
      "copy",
      "create",
      "data",
      "delete",
      "desc",
      "describe",
      "distinct",
      "drop",
      "false",
      "filter",
      "from",
      "graph",
      "group",
      "having",
      "in",
      "insert",
      "limit",
      "load",
      "minus",
      "move",
      "named",
      "not",
      "offset",
      "optional",
      "order",
      "prefix",
      "reduced",
      "select",
      "service",
      "silent",
      "to",
      "true",
      "undef",
      "union",
      "using",
      "values",
      "where",
      "with"
    ],
    builtinFunctions: [
      "a",
      "abs",
      "avg",
      "bind",
      "bnode",
      "bound",
      "ceil",
      "coalesce",
      "concat",
      "contains",
      "count",
      "datatype",
      "day",
      "encode_for_uri",
      "exists",
      "floor",
      "group_concat",
      "hours",
      "if",
      "iri",
      "isblank",
      "isiri",
      "isliteral",
      "isnumeric",
      "isuri",
      "lang",
      "langmatches",
      "lcase",
      "max",
      "md5",
      "min",
      "minutes",
      "month",
      "now",
      "rand",
      "regex",
      "replace",
      "round",
      "sameterm",
      "sample",
      "seconds",
      "sha1",
      "sha256",
      "sha384",
      "sha512",
      "str",
      "strafter",
      "strbefore",
      "strdt",
      "strends",
      "strlang",
      "strlen",
      "strstarts",
      "struuid",
      "substr",
      "sum",
      "timezone",
      "tz",
      "ucase",
      "uri",
      "uuid",
      "year"
    ],
    // describe tokens
    ignoreCase: true,
    tokenizer: {
      root: [
        // resource indicators
        [/<[^\s\u00a0>]*>?/, "tag"],
        // strings
        { include: "@strings" },
        // line comment
        [/#.*/, "comment"],
        // special chars with special meaning
        [/[{}()\[\]]/, "@brackets"],
        [/[;,.]/, "delimiter"],
        // (prefixed) name
        [/[_\w\d]+:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])*/, "tag"],
        [/:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/, "tag"],
        // identifiers, builtinFunctions and keywords
        [
          /[$?]?[_\w\d]+/,
          {
            cases: {
              "@keywords": { token: "keyword" },
              "@builtinFunctions": { token: "predefined.sql" },
              "@default": "identifier"
            }
          }
        ],
        // operators
        [/\^\^/, "operator.sql"],
        [/\^[*+\-<>=&|^\/!?]*/, "operator.sql"],
        [/[*+\-<>=&|\/!?]/, "operator.sql"],
        // symbol
        [/@[a-z\d\-]*/, "metatag.html"],
        // whitespaces
        [/\s+/, "white"]
      ],
      strings: [
        [/'([^'\\]|\\.)*$/, "string.invalid"],
        // non-terminated single-quoted string
        [/'$/, "string.sql", "@pop"],
        [/'/, "string.sql", "@stringBody"],
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        // non-terminated single-quoted string
        [/"$/, "string.sql", "@pop"],
        [/"/, "string.sql", "@dblStringBody"]
      ],
      // single-quoted strings
      stringBody: [
        [/[^\\']+/, "string.sql"],
        [/\\./, "string.escape"],
        [/'/, "string.sql", "@pop"]
      ],
      // double-quoted strings
      dblStringBody: [
        [/[^\\"]+/, "string.sql"],
        [/\\./, "string.escape"],
        [/"/, "string.sql", "@pop"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
