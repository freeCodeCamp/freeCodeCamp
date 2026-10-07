define("vs/xml-fSKCG6nN", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
  "use strict";
  const conf = {
    comments: {
      blockComment: ["<!--", "-->"]
    },
    brackets: [["<", ">"]],
    autoClosingPairs: [
      { open: "<", close: ">" },
      { open: "'", close: "'" },
      { open: '"', close: '"' }
    ],
    surroundingPairs: [
      { open: "<", close: ">" },
      { open: "'", close: "'" },
      { open: '"', close: '"' }
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(`<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
        action: {
          indentAction: editor_api.languages.IndentAction.IndentOutdent
        }
      },
      {
        beforeText: new RegExp(`<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
        action: { indentAction: editor_api.languages.IndentAction.Indent }
      }
    ]
  };
  const language = {
    defaultToken: "",
    tokenPostfix: ".xml",
    ignoreCase: true,
    // Useful regular expressions
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
      root: [
        [/[^<&]+/, ""],
        { include: "@whitespace" },
        // Standard opening tag
        [/(<)(@qualifiedName)/, [{ token: "delimiter" }, { token: "tag", next: "@tag" }]],
        // Standard closing tag
        [
          /(<\/)(@qualifiedName)(\s*)(>)/,
          [{ token: "delimiter" }, { token: "tag" }, "", { token: "delimiter" }]
        ],
        // Meta tags - instruction
        [/(<\?)(@qualifiedName)/, [{ token: "delimiter" }, { token: "metatag", next: "@tag" }]],
        // Meta tags - declaration
        [/(<\!)(@qualifiedName)/, [{ token: "delimiter" }, { token: "metatag", next: "@tag" }]],
        // CDATA
        [/<\!\[CDATA\[/, { token: "delimiter.cdata", next: "@cdata" }],
        [/&\w+;/, "string.escape"]
      ],
      cdata: [
        [/[^\]]+/, ""],
        [/\]\]>/, { token: "delimiter.cdata", next: "@pop" }],
        [/\]/, ""]
      ],
      tag: [
        [/[ \t\r\n]+/, ""],
        [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ["attribute.name", "", "attribute.value"]],
        [
          /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
          ["attribute.name", "", "attribute.value"]
        ],
        [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ["attribute.name", "", "attribute.value"]],
        [/@qualifiedName/, "attribute.name"],
        [/\?>/, { token: "delimiter", next: "@pop" }],
        [/(\/)(>)/, [{ token: "tag" }, { token: "delimiter", next: "@pop" }]],
        [/>/, { token: "delimiter", next: "@pop" }]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/<!--/, { token: "comment", next: "@comment" }]
      ],
      comment: [
        [/[^<\-]+/, "comment.content"],
        [/-->/, { token: "comment", next: "@pop" }],
        [/<!--/, "comment.content.invalid"],
        [/[<\-]/, "comment.content"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
