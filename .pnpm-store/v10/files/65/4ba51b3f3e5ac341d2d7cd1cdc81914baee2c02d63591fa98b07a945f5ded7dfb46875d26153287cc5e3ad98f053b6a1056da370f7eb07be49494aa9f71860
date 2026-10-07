define("vs/razor-BIG_AFb9", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
  "use strict";
  const EMPTY_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ];
  const conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
      blockComment: ["<!--", "-->"]
    },
    brackets: [
      ["<!--", "-->"],
      ["<", ">"],
      ["{", "}"],
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
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: "<", close: ">" }
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        afterText: /^<\/(\w[\w\d]*)\s*>$/i,
        action: {
          indentAction: editor_api.languages.IndentAction.IndentOutdent
        }
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        action: { indentAction: editor_api.languages.IndentAction.Indent }
      }
    ]
  };
  const language = {
    defaultToken: "",
    tokenPostfix: "",
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
      root: [
        [/@@@@/],
        // text
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.root" }],
        [/<!DOCTYPE/, "metatag.html", "@doctype"],
        [/<!--/, "comment.html", "@comment"],
        [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
        [/(<)(script)/, ["delimiter.html", { token: "tag.html", next: "@script" }]],
        [/(<)(style)/, ["delimiter.html", { token: "tag.html", next: "@style" }]],
        [/(<)([:\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
        [/(<\/)([\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
        [/</, "delimiter.html"],
        [/[ \t\r\n]+/],
        // whitespace
        [/[^<@]+/]
        // text
      ],
      doctype: [
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }],
        [/[^>]+/, "metatag.content.html"],
        [/>/, "metatag.html", "@pop"]
      ],
      comment: [
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }],
        [/-->/, "comment.html", "@pop"],
        [/[^-]+/, "comment.content.html"],
        [/./, "comment.content.html"]
      ],
      otherTag: [
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.otherTag" }],
        [/\/?>/, "delimiter.html", "@pop"],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [/[ \t\r\n]+/]
        // whitespace
      ],
      // -- BEGIN <script> tags handling
      // After <script
      script: [
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.script" }],
        [/type/, "attribute.name", "@scriptAfterType"],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@scriptEmbedded.text/javascript",
            nextEmbedded: "text/javascript"
          }
        ],
        [/[ \t\r\n]+/],
        // whitespace
        [
          /(<\/)(script\s*)(>)/,
          ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
        ]
      ],
      // After <script ... type
      scriptAfterType: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.scriptAfterType"
          }
        ],
        [/=/, "delimiter", "@scriptAfterTypeEquals"],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@scriptEmbedded.text/javascript",
            nextEmbedded: "text/javascript"
          }
        ],
        // cover invalid e.g. <script type>
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      // After <script ... type =
      scriptAfterTypeEquals: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.scriptAfterTypeEquals"
          }
        ],
        [
          /"([^"]*)"/,
          {
            token: "attribute.value",
            switchTo: "@scriptWithCustomType.$1"
          }
        ],
        [
          /'([^']*)'/,
          {
            token: "attribute.value",
            switchTo: "@scriptWithCustomType.$1"
          }
        ],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@scriptEmbedded.text/javascript",
            nextEmbedded: "text/javascript"
          }
        ],
        // cover invalid e.g. <script type=>
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      // After <script ... type = $S2
      scriptWithCustomType: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.scriptWithCustomType.$S2"
          }
        ],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@scriptEmbedded.$S2",
            nextEmbedded: "$S2"
          }
        ],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      scriptEmbedded: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInEmbeddedState.scriptEmbedded.$S2",
            nextEmbedded: "@pop"
          }
        ],
        [/<\/script/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
      ],
      // -- END <script> tags handling
      // -- BEGIN <style> tags handling
      // After <style
      style: [
        [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.style" }],
        [/type/, "attribute.name", "@styleAfterType"],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@styleEmbedded.text/css",
            nextEmbedded: "text/css"
          }
        ],
        [/[ \t\r\n]+/],
        // whitespace
        [
          /(<\/)(style\s*)(>)/,
          ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
        ]
      ],
      // After <style ... type
      styleAfterType: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.styleAfterType"
          }
        ],
        [/=/, "delimiter", "@styleAfterTypeEquals"],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@styleEmbedded.text/css",
            nextEmbedded: "text/css"
          }
        ],
        // cover invalid e.g. <style type>
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      // After <style ... type =
      styleAfterTypeEquals: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.styleAfterTypeEquals"
          }
        ],
        [
          /"([^"]*)"/,
          {
            token: "attribute.value",
            switchTo: "@styleWithCustomType.$1"
          }
        ],
        [
          /'([^']*)'/,
          {
            token: "attribute.value",
            switchTo: "@styleWithCustomType.$1"
          }
        ],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@styleEmbedded.text/css",
            nextEmbedded: "text/css"
          }
        ],
        // cover invalid e.g. <style type=>
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      // After <style ... type = $S2
      styleWithCustomType: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInSimpleState.styleWithCustomType.$S2"
          }
        ],
        [
          />/,
          {
            token: "delimiter.html",
            next: "@styleEmbedded.$S2",
            nextEmbedded: "$S2"
          }
        ],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [/[ \t\r\n]+/],
        // whitespace
        [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
      ],
      styleEmbedded: [
        [
          /@[^@]/,
          {
            token: "@rematch",
            switchTo: "@razorInEmbeddedState.styleEmbedded.$S2",
            nextEmbedded: "@pop"
          }
        ],
        [/<\/style/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
      ],
      // -- END <style> tags handling
      razorInSimpleState: [
        [/@\*/, "comment.cs", "@razorBlockCommentTopLevel"],
        [/@[{(]/, "metatag.cs", "@razorRootTopLevel"],
        [/(@)(\s*[\w]+)/, ["metatag.cs", { token: "identifier.cs", switchTo: "@$S2.$S3" }]],
        [/[})]/, { token: "metatag.cs", switchTo: "@$S2.$S3" }],
        [/\*@/, { token: "comment.cs", switchTo: "@$S2.$S3" }]
      ],
      razorInEmbeddedState: [
        [/@\*/, "comment.cs", "@razorBlockCommentTopLevel"],
        [/@[{(]/, "metatag.cs", "@razorRootTopLevel"],
        [
          /(@)(\s*[\w]+)/,
          [
            "metatag.cs",
            {
              token: "identifier.cs",
              switchTo: "@$S2.$S3",
              nextEmbedded: "$S3"
            }
          ]
        ],
        [
          /[})]/,
          {
            token: "metatag.cs",
            switchTo: "@$S2.$S3",
            nextEmbedded: "$S3"
          }
        ],
        [
          /\*@/,
          {
            token: "comment.cs",
            switchTo: "@$S2.$S3",
            nextEmbedded: "$S3"
          }
        ]
      ],
      razorBlockCommentTopLevel: [
        [/\*@/, "@rematch", "@pop"],
        [/[^*]+/, "comment.cs"],
        [/./, "comment.cs"]
      ],
      razorBlockComment: [
        [/\*@/, "comment.cs", "@pop"],
        [/[^*]+/, "comment.cs"],
        [/./, "comment.cs"]
      ],
      razorRootTopLevel: [
        [/\{/, "delimiter.bracket.cs", "@razorRoot"],
        [/\(/, "delimiter.parenthesis.cs", "@razorRoot"],
        [/[})]/, "@rematch", "@pop"],
        { include: "razorCommon" }
      ],
      razorRoot: [
        [/\{/, "delimiter.bracket.cs", "@razorRoot"],
        [/\(/, "delimiter.parenthesis.cs", "@razorRoot"],
        [/\}/, "delimiter.bracket.cs", "@pop"],
        [/\)/, "delimiter.parenthesis.cs", "@pop"],
        { include: "razorCommon" }
      ],
      razorCommon: [
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              "@razorKeywords": { token: "keyword.cs" },
              "@default": "identifier.cs"
            }
          }
        ],
        // brackets
        [/[\[\]]/, "delimiter.array.cs"],
        // whitespace
        [/[ \t\r\n]+/],
        // comments
        [/\/\/.*$/, "comment.cs"],
        [/@\*/, "comment.cs", "@razorBlockComment"],
        // strings
        [/"([^"]*)"/, "string.cs"],
        [/'([^']*)'/, "string.cs"],
        // simple html
        [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
        [/(<)([\w\-]+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
        [/(<\/)([\w\-]+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
        // delimiters
        [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/, "delimiter.cs"],
        // numbers
        [/\d*\d+[eE]([\-+]?\d+)?/, "number.float.cs"],
        [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float.cs"],
        [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, "number.hex.cs"],
        [/0[0-7']*[0-7]/, "number.octal.cs"],
        [/0[bB][0-1']*[0-1]/, "number.binary.cs"],
        [/\d[\d']*/, "number.cs"],
        [/\d/, "number.cs"]
      ]
    },
    razorKeywords: [
      "abstract",
      "as",
      "async",
      "await",
      "base",
      "bool",
      "break",
      "by",
      "byte",
      "case",
      "catch",
      "char",
      "checked",
      "class",
      "const",
      "continue",
      "decimal",
      "default",
      "delegate",
      "do",
      "double",
      "descending",
      "explicit",
      "event",
      "extern",
      "else",
      "enum",
      "false",
      "finally",
      "fixed",
      "float",
      "for",
      "foreach",
      "from",
      "goto",
      "group",
      "if",
      "implicit",
      "in",
      "int",
      "interface",
      "internal",
      "into",
      "is",
      "lock",
      "long",
      "nameof",
      "new",
      "null",
      "namespace",
      "object",
      "operator",
      "out",
      "override",
      "orderby",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "ref",
      "return",
      "switch",
      "struct",
      "sbyte",
      "sealed",
      "short",
      "sizeof",
      "stackalloc",
      "static",
      "string",
      "select",
      "this",
      "throw",
      "true",
      "try",
      "typeof",
      "uint",
      "ulong",
      "unchecked",
      "unsafe",
      "ushort",
      "using",
      "var",
      "virtual",
      "volatile",
      "void",
      "when",
      "while",
      "where",
      "yield",
      "model",
      "inject"
      // Razor specific
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
