define("vs/azcli-DlDxj3-g", ["exports"], (function(exports) {
  "use strict";
  const conf = {
    comments: {
      lineComment: "#"
    }
  };
  const language = {
    defaultToken: "keyword",
    ignoreCase: true,
    tokenPostfix: ".azcli",
    str: /[^#\s]/,
    tokenizer: {
      root: [
        { include: "@comment" },
        [
          /\s-+@str*\s*/,
          {
            cases: {
              "@eos": { token: "key.identifier", next: "@popall" },
              "@default": { token: "key.identifier", next: "@type" }
            }
          }
        ],
        [
          /^-+@str*\s*/,
          {
            cases: {
              "@eos": { token: "key.identifier", next: "@popall" },
              "@default": { token: "key.identifier", next: "@type" }
            }
          }
        ]
      ],
      type: [
        { include: "@comment" },
        [
          /-+@str*\s*/,
          {
            cases: {
              "@eos": { token: "key.identifier", next: "@popall" },
              "@default": "key.identifier"
            }
          }
        ],
        [
          /@str+\s*/,
          {
            cases: {
              "@eos": { token: "string", next: "@popall" },
              "@default": "string"
            }
          }
        ]
      ],
      comment: [
        [
          /#.*$/,
          {
            cases: {
              "@eos": { token: "comment", next: "@popall" }
            }
          }
        ]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
