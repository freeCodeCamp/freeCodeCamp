const conf = {
  // the default separators except `$-`
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    lineComment: "#",
    blockComment: ["<#", "#>"]
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
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
const language = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".ps1",
  brackets: [
    { token: "delimiter.curly", open: "{", close: "}" },
    { token: "delimiter.square", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" }
  ],
  keywords: [
    "begin",
    "break",
    "catch",
    "class",
    "continue",
    "data",
    "define",
    "do",
    "dynamicparam",
    "else",
    "elseif",
    "end",
    "exit",
    "filter",
    "finally",
    "for",
    "foreach",
    "from",
    "function",
    "if",
    "in",
    "param",
    "process",
    "return",
    "switch",
    "throw",
    "trap",
    "try",
    "until",
    "using",
    "var",
    "while",
    "workflow",
    "parallel",
    "sequence",
    "inlinescript",
    "configuration"
  ],
  helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,
  // we include these common regular expressions
  symbols: /[=><!~?&%|+\-*\/\^;\.,]+/,
  escapes: /`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // commands and keywords
      [
        /[a-zA-Z_][\w-]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": ""
          }
        }
      ],
      // whitespace
      [/[ \t\r\n]+/, ""],
      // labels
      [/^:\w*/, "metatag"],
      // variables
      [
        /\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,
        "variable"
      ],
      // Comments
      [/<#/, "comment", "@comment"],
      [/#.*$/, "comment"],
      // delimiters
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, "delimiter"],
      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+?/, "number"],
      // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"],
      // strings:
      [/\@"/, "string", '@herestring."'],
      [/\@'/, "string", "@herestring.'"],
      [
        /"/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: '@string."' }
          }
        }
      ],
      [
        /'/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: "@string.'" }
          }
        }
      ]
    ],
    string: [
      [
        /[^"'\$`]+/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ],
      [
        /@escapes/,
        {
          cases: {
            "@eos": { token: "string.escape", next: "@popall" },
            "@default": "string.escape"
          }
        }
      ],
      [
        /`./,
        {
          cases: {
            "@eos": {
              token: "string.escape.invalid",
              next: "@popall"
            },
            "@default": "string.escape.invalid"
          }
        }
      ],
      [
        /\$[\w]+$/,
        {
          cases: {
            '$S2=="': { token: "variable", next: "@popall" },
            "@default": { token: "string", next: "@popall" }
          }
        }
      ],
      [
        /\$[\w]+/,
        {
          cases: {
            '$S2=="': "variable",
            "@default": "string"
          }
        }
      ],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": {
              cases: {
                "@eos": { token: "string", next: "@popall" },
                "@default": "string"
              }
            }
          }
        }
      ]
    ],
    herestring: [
      [
        /^\s*(["'])@/,
        {
          cases: {
            "$1==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/[^\$`]+/, "string"],
      [/@escapes/, "string.escape"],
      [/`./, "string.escape.invalid"],
      [
        /\$[\w]+/,
        {
          cases: {
            '$S2=="': "variable",
            "@default": "string"
          }
        }
      ]
    ],
    comment: [
      [/[^#\.]+/, "comment"],
      [/#>/, "comment", "@pop"],
      [/(\.)(@helpKeywords)(?!\w)/, { token: "comment.keyword.$2" }],
      [/[\.#]/, "comment"]
    ]
  }
};

export { conf, language };
