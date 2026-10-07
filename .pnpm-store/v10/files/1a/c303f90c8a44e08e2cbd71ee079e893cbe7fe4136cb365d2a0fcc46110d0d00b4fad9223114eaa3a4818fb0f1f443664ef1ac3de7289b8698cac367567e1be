const conf = {
  comments: {
    lineComment: "#",
    blockComment: ["=begin", "=end"]
  },
  brackets: [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
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
  indentationRules: {
    increaseIndentPattern: new RegExp(
      `^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|("|'|/).*\\4)*(#.*)?$`
    ),
    decreaseIndentPattern: new RegExp(
      "^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)"
    )
  }
};
const language = {
  tokenPostfix: ".ruby",
  keywords: [
    "__LINE__",
    "__ENCODING__",
    "__FILE__",
    "BEGIN",
    "END",
    "alias",
    "and",
    "begin",
    "break",
    "case",
    "class",
    "def",
    "defined?",
    "do",
    "else",
    "elsif",
    "end",
    "ensure",
    "for",
    "false",
    "if",
    "in",
    "module",
    "next",
    "nil",
    "not",
    "or",
    "redo",
    "rescue",
    "retry",
    "return",
    "self",
    "super",
    "then",
    "true",
    "undef",
    "unless",
    "until",
    "when",
    "while",
    "yield"
  ],
  keywordops: ["::", "..", "...", "?", ":", "=>"],
  builtins: [
    "require",
    "public",
    "private",
    "include",
    "extend",
    "attr_reader",
    "protected",
    "private_class_method",
    "protected_class_method",
    "new"
  ],
  // these are closed by 'end' (if, while and until are handled separately)
  declarations: [
    "module",
    "class",
    "def",
    "case",
    "do",
    "begin",
    "for",
    "if",
    "while",
    "until",
    "unless"
  ],
  linedecls: ["def", "case", "do", "begin", "for", "if", "while", "until", "unless"],
  operators: [
    "^",
    "&",
    "|",
    "<=>",
    "==",
    "===",
    "!~",
    "=~",
    ">",
    ">=",
    "<",
    "<=",
    "<<",
    ">>",
    "+",
    "-",
    "*",
    "/",
    "%",
    "**",
    "~",
    "+@",
    "-@",
    "[]",
    "[]=",
    "`",
    "+=",
    "-=",
    "*=",
    "**=",
    "/=",
    "^=",
    "%=",
    "<<=",
    ">>=",
    "&=",
    "&&=",
    "||=",
    "|="
  ],
  brackets: [
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" }
  ],
  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
  // escape sequences
  escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
  escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
  decpart: /\d(_?\d)*/,
  decimal: /0|@decpart/,
  delim: /[^a-zA-Z0-9\s\n\r]/,
  heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
  regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
  regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
  // The main tokenizer for our languages
  tokenizer: {
    // Main entry.
    // root.<decl> where decl is the current opening declaration (like 'class')
    root: [
      // identifiers and keywords
      // most complexity here is due to matching 'end' correctly with declarations.
      // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)
      [
        /^(\s*)([a-z_]\w*[!?=]?)/,
        [
          "white",
          {
            cases: {
              "for|until|while": {
                token: "keyword.$2",
                next: "@dodecl.$2"
              },
              "@declarations": {
                token: "keyword.$2",
                next: "@root.$2"
              },
              end: { token: "keyword.$S2", next: "@pop" },
              "@keywords": "keyword",
              "@builtins": "predefined",
              "@default": "identifier"
            }
          }
        ]
      ],
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            "if|unless|while|until": {
              token: "keyword.$0x",
              next: "@modifier.$0x"
            },
            for: { token: "keyword.$2", next: "@dodecl.$2" },
            "@linedecls": { token: "keyword.$0", next: "@root.$0" },
            end: { token: "keyword.$S2", next: "@pop" },
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      [/[A-Z][\w]*[!?=]?/, "constructor.identifier"],
      // constant
      [/\$[\w]*/, "global.constant"],
      // global
      [/@[\w]*/, "namespace.instance.identifier"],
      // instance
      [/@@@[\w]*/, "namespace.class.identifier"],
      // class
      // here document
      [/<<[-~](@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      [/[ \t\r\n]+<<(@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      [/^<<(@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      // whitespace
      { include: "@whitespace" },
      // strings
      [/"/, { token: "string.d.delim", next: '@dstring.d."' }],
      [/'/, { token: "string.sq.delim", next: "@sstring.sq" }],
      // % literals. For efficiency, rematch in the 'pstring' state
      [/%([rsqxwW]|Q?)/, { token: "@rematch", next: "pstring" }],
      // commands and symbols
      [/`/, { token: "string.x.delim", next: "@dstring.x.`" }],
      [/:(\w|[$@])\w*[!?=]?/, "string.s"],
      [/:"/, { token: "string.s.delim", next: '@dstring.s."' }],
      [/:'/, { token: "string.s.delim", next: "@sstring.s" }],
      // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line
      [/\/(?=(\\\/|[^\/\n])+\/)/, { token: "regexp.delim", next: "@regexp" }],
      // delimiters and operators
      [/[{}()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@keywordops": "keyword",
            "@operators": "operator",
            "@default": ""
          }
        }
      ],
      [/[;,]/, "delimiter"],
      // numbers
      [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, "number.hex"],
      [/0[_oO][0-7](_?[0-7])*/, "number.octal"],
      [/0[bB][01](_?[01])*/, "number.binary"],
      [/0[dD]@decpart/, "number"],
      [
        /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/,
        {
          cases: {
            $1: "number.float",
            "@default": "number"
          }
        }
      ]
    ],
    // used to not treat a 'do' as a block opener if it occurs on the same
    // line as a 'do' statement: 'while|until|for'
    // dodecl.<decl> where decl is the declarations started, like 'while'
    dodecl: [
      [/^/, { token: "", switchTo: "@root.$S2" }],
      // get out of do-skipping mode on a new line
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            end: { token: "keyword.$S2", next: "@pop" },
            // end on same line
            do: { token: "keyword", switchTo: "@root.$S2" },
            // do on same line: not an open bracket here
            "@linedecls": {
              token: "@rematch",
              switchTo: "@root.$S2"
            },
            // other declaration on same line: rematch
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      { include: "@root" }
    ],
    // used to prevent potential modifiers ('if|until|while|unless') to match
    // with 'end' keywords.
    // modifier.<decl>x where decl is the declaration starter, like 'if'
    modifier: [
      [/^/, "", "@pop"],
      // it was a modifier: get out of modifier mode on a new line
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            end: { token: "keyword.$S2", next: "@pop" },
            // end on same line
            "then|else|elsif|do": {
              token: "keyword",
              switchTo: "@root.$S2"
            },
            // real declaration and not a modifier
            "@linedecls": {
              token: "@rematch",
              switchTo: "@root.$S2"
            },
            // other declaration => not a modifier
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      { include: "@root" }
    ],
    // single quote strings (also used for symbols)
    // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
    sstring: [
      [/[^\\']+/, "string.$S2"],
      [/\\\\|\\'|\\$/, "string.$S2.escape"],
      [/\\./, "string.$S2.invalid"],
      [/'/, { token: "string.$S2.delim", next: "@pop" }]
    ],
    // double quoted "string".
    // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)
    // and delim is the ending delimiter (" or `)
    dstring: [
      [/[^\\`"#]+/, "string.$S2"],
      [/#/, "string.$S2.escape", "@interpolated"],
      [/\\$/, "string.$S2.escape"],
      [/@escapes/, "string.$S2.escape"],
      [/\\./, "string.$S2.escape.invalid"],
      [
        /[`"]/,
        {
          cases: {
            "$#==$S3": { token: "string.$S2.delim", next: "@pop" },
            "@default": "string.$S2"
          }
        }
      ]
    ],
    // literal documents
    // heredoc.<close> where close is the closing delimiter
    heredoc: [
      [
        /^(\s*)(@heredelim)$/,
        {
          cases: {
            "$2==$S2": ["string.heredoc", { token: "string.heredoc.delimiter", next: "@pop" }],
            "@default": ["string.heredoc", "string.heredoc"]
          }
        }
      ],
      [/.*/, "string.heredoc"]
    ],
    // interpolated sequence
    interpolated: [
      [/\$\w*/, "global.constant", "@pop"],
      [/@\w*/, "namespace.class.identifier", "@pop"],
      [/@@@\w*/, "namespace.instance.identifier", "@pop"],
      [
        /[{]/,
        {
          token: "string.escape.curly",
          switchTo: "@interpolated_compound"
        }
      ],
      ["", "", "@pop"]
      // just a # is interpreted as a #
    ],
    // any code
    interpolated_compound: [
      [/[}]/, { token: "string.escape.curly", next: "@pop" }],
      { include: "@root" }
    ],
    // %r quoted regexp
    // pregexp.<open>.<close> where open/close are the open/close delimiter
    pregexp: [
      { include: "@whitespace" },
      // turns out that you can quote using regex control characters, aargh!
      // for example; %r|kgjgaj| is ok (even though | is used for alternation)
      // so, we need to match those first
      [
        /[^\(\{\[\\]/,
        {
          cases: {
            "$#==$S3": { token: "regexp.delim", next: "@pop" },
            "$#==$S2": { token: "regexp.delim", next: "@push" },
            // nested delimiters are allowed..
            "~[)}\\]]": "@brackets.regexp.escape.control",
            "~@regexpctl": "regexp.escape.control",
            "@default": "regexp"
          }
        }
      ],
      { include: "@regexcontrol" }
    ],
    // We match regular expression quite precisely
    regexp: [
      { include: "@regexcontrol" },
      [/[^\\\/]/, "regexp"],
      ["/[ixmp]*", { token: "regexp.delim" }, "@pop"]
    ],
    regexcontrol: [
      [
        /(\{)(\d+(?:,\d*)?)(\})/,
        [
          "@brackets.regexp.escape.control",
          "regexp.escape.control",
          "@brackets.regexp.escape.control"
        ]
      ],
      [
        /(\[)(\^?)/,
        ["@brackets.regexp.escape.control", { token: "regexp.escape.control", next: "@regexrange" }]
      ],
      [/(\()(\?[:=!])/, ["@brackets.regexp.escape.control", "regexp.escape.control"]],
      [/\(\?#/, { token: "regexp.escape.control", next: "@regexpcomment" }],
      [/[()]/, "@brackets.regexp.escape.control"],
      [/@regexpctl/, "regexp.escape.control"],
      [/\\$/, "regexp.escape"],
      [/@regexpesc/, "regexp.escape"],
      [/\\\./, "regexp.invalid"],
      [/#/, "regexp.escape", "@interpolated"]
    ],
    regexrange: [
      [/-/, "regexp.escape.control"],
      [/\^/, "regexp.invalid"],
      [/\\$/, "regexp.escape"],
      [/@regexpesc/, "regexp.escape"],
      [/[^\]]/, "regexp"],
      [/\]/, "@brackets.regexp.escape.control", "@pop"]
    ],
    regexpcomment: [
      [/[^)]+/, "comment"],
      [/\)/, { token: "regexp.escape.control", next: "@pop" }]
    ],
    // % quoted strings
    // A bit repetitive since we need to often special case the kind of ending delimiter
    pstring: [
      [/%([qws])\(/, { token: "string.$1.delim", switchTo: "@qstring.$1.(.)" }],
      [/%([qws])\[/, { token: "string.$1.delim", switchTo: "@qstring.$1.[.]" }],
      [/%([qws])\{/, { token: "string.$1.delim", switchTo: "@qstring.$1.{.}" }],
      [/%([qws])</, { token: "string.$1.delim", switchTo: "@qstring.$1.<.>" }],
      [/%([qws])(@delim)/, { token: "string.$1.delim", switchTo: "@qstring.$1.$2.$2" }],
      [/%r\(/, { token: "regexp.delim", switchTo: "@pregexp.(.)" }],
      [/%r\[/, { token: "regexp.delim", switchTo: "@pregexp.[.]" }],
      [/%r\{/, { token: "regexp.delim", switchTo: "@pregexp.{.}" }],
      [/%r</, { token: "regexp.delim", switchTo: "@pregexp.<.>" }],
      [/%r(@delim)/, { token: "regexp.delim", switchTo: "@pregexp.$1.$1" }],
      [/%(x|W|Q?)\(/, { token: "string.$1.delim", switchTo: "@qqstring.$1.(.)" }],
      [/%(x|W|Q?)\[/, { token: "string.$1.delim", switchTo: "@qqstring.$1.[.]" }],
      [/%(x|W|Q?)\{/, { token: "string.$1.delim", switchTo: "@qqstring.$1.{.}" }],
      [/%(x|W|Q?)</, { token: "string.$1.delim", switchTo: "@qqstring.$1.<.>" }],
      [/%(x|W|Q?)(@delim)/, { token: "string.$1.delim", switchTo: "@qqstring.$1.$2.$2" }],
      [/%([rqwsxW]|Q?)./, { token: "invalid", next: "@pop" }],
      // recover
      [/./, { token: "invalid", next: "@pop" }]
      // recover
    ],
    // non-expanded quoted string.
    // qstring.<kind>.<open>.<close>
    //  kind = q|w|s  (single quote, array, symbol)
    //  open = open delimiter
    //  close = close delimiter
    qstring: [
      [/\\$/, "string.$S2.escape"],
      [/\\./, "string.$S2.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S4": { token: "string.$S2.delim", next: "@pop" },
            "$#==$S3": { token: "string.$S2.delim", next: "@push" },
            // nested delimiters are allowed..
            "@default": "string.$S2"
          }
        }
      ]
    ],
    // expanded quoted string.
    // qqstring.<kind>.<open>.<close>
    //  kind = Q|W|x  (double quote, array, command)
    //  open = open delimiter
    //  close = close delimiter
    qqstring: [[/#/, "string.$S2.escape", "@interpolated"], { include: "@qstring" }],
    // whitespace & comments
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/^\s*=begin\b/, "comment", "@comment"],
      [/#.*$/, "comment"]
    ],
    comment: [
      [/[^=]+/, "comment"],
      [/^\s*=begin\b/, "comment.invalid"],
      // nested comment
      [/^\s*=end\b.*/, "comment", "@pop"],
      [/[=]/, "comment"]
    ]
  }
};

export { conf, language };
