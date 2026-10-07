define("vs/liquid-Limfe9fx", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    brackets: [
      ["<!--", "-->"],
      ["<", ">"],
      ["{{", "}}"],
      ["{%", "%}"],
      ["{", "}"],
      ["(", ")"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "%", close: "%" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ],
    surroundingPairs: [
      { open: "<", close: ">" },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
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
    builtinTags: [
      "if",
      "else",
      "elseif",
      "endif",
      "render",
      "assign",
      "capture",
      "endcapture",
      "case",
      "endcase",
      "comment",
      "endcomment",
      "cycle",
      "decrement",
      "for",
      "endfor",
      "include",
      "increment",
      "layout",
      "raw",
      "endraw",
      "render",
      "tablerow",
      "endtablerow",
      "unless",
      "endunless"
    ],
    builtinFilters: [
      "abs",
      "append",
      "at_least",
      "at_most",
      "capitalize",
      "ceil",
      "compact",
      "date",
      "default",
      "divided_by",
      "downcase",
      "escape",
      "escape_once",
      "first",
      "floor",
      "join",
      "json",
      "last",
      "lstrip",
      "map",
      "minus",
      "modulo",
      "newline_to_br",
      "plus",
      "prepend",
      "remove",
      "remove_first",
      "replace",
      "replace_first",
      "reverse",
      "round",
      "rstrip",
      "size",
      "slice",
      "sort",
      "sort_natural",
      "split",
      "strip",
      "strip_html",
      "strip_newlines",
      "times",
      "truncate",
      "truncatewords",
      "uniq",
      "upcase",
      "url_decode",
      "url_encode",
      "where"
    ],
    constants: ["true", "false"],
    operators: ["==", "!=", ">", "<", ">=", "<="],
    symbol: /[=><!]+/,
    identifier: /[a-zA-Z_][\w]*/,
    tokenizer: {
      root: [
        [/\{\%\s*comment\s*\%\}/, "comment.start.liquid", "@comment"],
        [/\{\{/, { token: "@rematch", switchTo: "@liquidState.root" }],
        [/\{\%/, { token: "@rematch", switchTo: "@liquidState.root" }],
        [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
        [/(<)([:\w]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
        [/(<\/)([\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
        [/</, "delimiter.html"],
        [/\{/, "delimiter.html"],
        [/[^<{]+/]
        // text
      ],
      comment: [
        [/\{\%\s*endcomment\s*\%\}/, "comment.end.liquid", "@pop"],
        [/./, "comment.content.liquid"]
      ],
      otherTag: [
        [
          /\{\{/,
          {
            token: "@rematch",
            switchTo: "@liquidState.otherTag"
          }
        ],
        [
          /\{\%/,
          {
            token: "@rematch",
            switchTo: "@liquidState.otherTag"
          }
        ],
        [/\/?>/, "delimiter.html", "@pop"],
        [/"([^"]*)"/, "attribute.value"],
        [/'([^']*)'/, "attribute.value"],
        [/[\w\-]+/, "attribute.name"],
        [/=/, "delimiter"],
        [/[ \t\r\n]+/]
        // whitespace
      ],
      liquidState: [
        [/\{\{/, "delimiter.output.liquid"],
        [/\}\}/, { token: "delimiter.output.liquid", switchTo: "@$S2.$S3" }],
        [/\{\%/, "delimiter.tag.liquid"],
        [/raw\s*\%\}/, "delimiter.tag.liquid", "@liquidRaw"],
        [/\%\}/, { token: "delimiter.tag.liquid", switchTo: "@$S2.$S3" }],
        { include: "liquidRoot" }
      ],
      liquidRaw: [
        [/^(?!\{\%\s*endraw\s*\%\}).+/],
        [/\{\%/, "delimiter.tag.liquid"],
        [/@identifier/],
        [/\%\}/, { token: "delimiter.tag.liquid", next: "@root" }]
      ],
      liquidRoot: [
        [/\d+(\.\d+)?/, "number.liquid"],
        [/"[^"]*"/, "string.liquid"],
        [/'[^']*'/, "string.liquid"],
        [/\s+/],
        [
          /@symbol/,
          {
            cases: {
              "@operators": "operator.liquid",
              "@default": ""
            }
          }
        ],
        [/\./],
        [
          /@identifier/,
          {
            cases: {
              "@constants": "keyword.liquid",
              "@builtinFilters": "predefined.liquid",
              "@builtinTags": "predefined.liquid",
              "@default": "variable.liquid"
            }
          }
        ],
        [/[^}|%]/, "variable.liquid"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
