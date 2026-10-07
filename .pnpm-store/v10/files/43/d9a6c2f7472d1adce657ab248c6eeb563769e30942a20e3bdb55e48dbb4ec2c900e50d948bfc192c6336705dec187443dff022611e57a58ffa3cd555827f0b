define("vs/elixir-BxvNo5o6", ["exports"], (function(exports) {
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
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: "'", close: "'" },
      { open: '"', close: '"' }
    ],
    autoClosingPairs: [
      { open: "'", close: "'", notIn: ["string", "comment"] },
      { open: '"', close: '"', notIn: ["comment"] },
      { open: '"""', close: '"""' },
      { open: "`", close: "`", notIn: ["string", "comment"] },
      { open: "(", close: ")" },
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "<<", close: ">>" }
    ],
    indentationRules: {
      increaseIndentPattern: /^\s*(after|else|catch|rescue|fn|[^#]*(do|<\-|\->|\{|\[|\=))\s*$/,
      decreaseIndentPattern: /^\s*((\}|\])\s*$|(after|else|catch|rescue|end)\b)/
    }
  };
  const language = {
    defaultToken: "source",
    tokenPostfix: ".elixir",
    brackets: [
      { open: "[", close: "]", token: "delimiter.square" },
      { open: "(", close: ")", token: "delimiter.parenthesis" },
      { open: "{", close: "}", token: "delimiter.curly" },
      { open: "<<", close: ">>", token: "delimiter.angle.special" }
    ],
    // Below are lists/regexps to which we reference later.
    declarationKeywords: [
      "def",
      "defp",
      "defn",
      "defnp",
      "defguard",
      "defguardp",
      "defmacro",
      "defmacrop",
      "defdelegate",
      "defcallback",
      "defmacrocallback",
      "defmodule",
      "defprotocol",
      "defexception",
      "defimpl",
      "defstruct"
    ],
    operatorKeywords: ["and", "in", "not", "or", "when"],
    namespaceKeywords: ["alias", "import", "require", "use"],
    otherKeywords: [
      "after",
      "case",
      "catch",
      "cond",
      "do",
      "else",
      "end",
      "fn",
      "for",
      "if",
      "quote",
      "raise",
      "receive",
      "rescue",
      "super",
      "throw",
      "try",
      "unless",
      "unquote_splicing",
      "unquote",
      "with"
    ],
    constants: ["true", "false", "nil"],
    nameBuiltin: ["__MODULE__", "__DIR__", "__ENV__", "__CALLER__", "__STACKTRACE__"],
    // Matches any of the operator names:
    // <<< >>> ||| &&& ^^^ ~~~ === !== ~>> <~> |~> <|> == != <= >= && || \\ <> ++ -- |> =~ -> <- ~> <~ :: .. = < > + - * / | . ^ & !
    operator: /-[->]?|!={0,2}|\*{1,2}|\/|\\\\|&{1,3}|\.\.?|\^(?:\^\^)?|\+\+?|<(?:-|<<|=|>|\|>|~>?)?|=~|={1,3}|>(?:=|>>)?|\|~>|\|>|\|{1,3}|~>>?|~~~|::/,
    // See https://hexdocs.pm/elixir/syntax-reference.html#variables
    variableName: /[a-z_][a-zA-Z0-9_]*[?!]?/,
    // See https://hexdocs.pm/elixir/syntax-reference.html#atoms
    atomName: /[a-zA-Z_][a-zA-Z0-9_@]*[?!]?|@specialAtomName|@operator/,
    specialAtomName: /\.\.\.|<<>>|%\{\}|%|\{\}/,
    aliasPart: /[A-Z][a-zA-Z0-9_]*/,
    moduleName: /@aliasPart(?:\.@aliasPart)*/,
    // Sigil pairs are: """ """, ''' ''', " ", ' ', / /, | |, < >, { }, [ ], ( )
    sigilSymmetricDelimiter: /"""|'''|"|'|\/|\|/,
    sigilStartDelimiter: /@sigilSymmetricDelimiter|<|\{|\[|\(/,
    sigilEndDelimiter: /@sigilSymmetricDelimiter|>|\}|\]|\)/,
    sigilModifiers: /[a-zA-Z0-9]*/,
    decimal: /\d(?:_?\d)*/,
    hex: /[0-9a-fA-F](_?[0-9a-fA-F])*/,
    octal: /[0-7](_?[0-7])*/,
    binary: /[01](_?[01])*/,
    // See https://hexdocs.pm/elixir/master/String.html#module-escape-characters
    escape: /\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}|\\./,
    // The keys below correspond to tokenizer states.
    // We start from the root state and match against its rules
    // until we explicitly transition into another state.
    // The `include` simply brings in all operations from the given state
    // and is useful for improving readability.
    tokenizer: {
      root: [
        { include: "@whitespace" },
        { include: "@comments" },
        // Keywords start as either an identifier or a string,
        // but end with a : so it's important to match this first.
        { include: "@keywordsShorthand" },
        { include: "@numbers" },
        { include: "@identifiers" },
        { include: "@strings" },
        { include: "@atoms" },
        { include: "@sigils" },
        { include: "@attributes" },
        { include: "@symbols" }
      ],
      // Whitespace
      whitespace: [[/\s+/, "white"]],
      // Comments
      comments: [[/(#)(.*)/, ["comment.punctuation", "comment"]]],
      // Keyword list shorthand
      keywordsShorthand: [
        [/(@atomName)(:)(\s+)/, ["constant", "constant.punctuation", "white"]],
        // Use positive look-ahead to ensure the string is followed by :
        // and should be considered a keyword.
        [
          /"(?=([^"]|#\{.*?\}|\\")*":)/,
          { token: "constant.delimiter", next: "@doubleQuotedStringKeyword" }
        ],
        [
          /'(?=([^']|#\{.*?\}|\\')*':)/,
          { token: "constant.delimiter", next: "@singleQuotedStringKeyword" }
        ]
      ],
      doubleQuotedStringKeyword: [
        [/":/, { token: "constant.delimiter", next: "@pop" }],
        { include: "@stringConstantContentInterpol" }
      ],
      singleQuotedStringKeyword: [
        [/':/, { token: "constant.delimiter", next: "@pop" }],
        { include: "@stringConstantContentInterpol" }
      ],
      // Numbers
      numbers: [
        [/0b@binary/, "number.binary"],
        [/0o@octal/, "number.octal"],
        [/0x@hex/, "number.hex"],
        [/@decimal\.@decimal([eE]-?@decimal)?/, "number.float"],
        [/@decimal/, "number"]
      ],
      // Identifiers
      identifiers: [
        // Tokenize identifier name in function-like definitions.
        // Note: given `def a + b, do: nil`, `a` is not a function name,
        // so we use negative look-ahead to ensure there's no operator.
        [
          /\b(defp?|defnp?|defmacrop?|defguardp?|defdelegate)(\s+)(@variableName)(?!\s+@operator)/,
          [
            "keyword.declaration",
            "white",
            {
              cases: {
                unquote: "keyword",
                "@default": "function"
              }
            }
          ]
        ],
        // Tokenize function calls
        [
          // In-scope call - an identifier followed by ( or .(
          /(@variableName)(?=\s*\.?\s*\()/,
          {
            cases: {
              // Tokenize as keyword in cases like `if(..., do: ..., else: ...)`
              "@declarationKeywords": "keyword.declaration",
              "@namespaceKeywords": "keyword",
              "@otherKeywords": "keyword",
              "@default": "function.call"
            }
          }
        ],
        [
          // Referencing function in a module
          /(@moduleName)(\s*)(\.)(\s*)(@variableName)/,
          ["type.identifier", "white", "operator", "white", "function.call"]
        ],
        [
          // Referencing function in an Erlang module
          /(:)(@atomName)(\s*)(\.)(\s*)(@variableName)/,
          ["constant.punctuation", "constant", "white", "operator", "white", "function.call"]
        ],
        [
          // Piping into a function (tokenized separately as it may not have parentheses)
          /(\|>)(\s*)(@variableName)/,
          [
            "operator",
            "white",
            {
              cases: {
                "@otherKeywords": "keyword",
                "@default": "function.call"
              }
            }
          ]
        ],
        [
          // Function reference passed to another function
          /(&)(\s*)(@variableName)/,
          ["operator", "white", "function.call"]
        ],
        // Language keywords, builtins, constants and variables
        [
          /@variableName/,
          {
            cases: {
              "@declarationKeywords": "keyword.declaration",
              "@operatorKeywords": "keyword.operator",
              "@namespaceKeywords": "keyword",
              "@otherKeywords": "keyword",
              "@constants": "constant.language",
              "@nameBuiltin": "variable.language",
              "_.*": "comment.unused",
              "@default": "identifier"
            }
          }
        ],
        // Module names
        [/@moduleName/, "type.identifier"]
      ],
      // Strings
      strings: [
        [/"""/, { token: "string.delimiter", next: "@doubleQuotedHeredoc" }],
        [/'''/, { token: "string.delimiter", next: "@singleQuotedHeredoc" }],
        [/"/, { token: "string.delimiter", next: "@doubleQuotedString" }],
        [/'/, { token: "string.delimiter", next: "@singleQuotedString" }]
      ],
      doubleQuotedHeredoc: [
        [/"""/, { token: "string.delimiter", next: "@pop" }],
        { include: "@stringContentInterpol" }
      ],
      singleQuotedHeredoc: [
        [/'''/, { token: "string.delimiter", next: "@pop" }],
        { include: "@stringContentInterpol" }
      ],
      doubleQuotedString: [
        [/"/, { token: "string.delimiter", next: "@pop" }],
        { include: "@stringContentInterpol" }
      ],
      singleQuotedString: [
        [/'/, { token: "string.delimiter", next: "@pop" }],
        { include: "@stringContentInterpol" }
      ],
      // Atoms
      atoms: [
        [/(:)(@atomName)/, ["constant.punctuation", "constant"]],
        [/:"/, { token: "constant.delimiter", next: "@doubleQuotedStringAtom" }],
        [/:'/, { token: "constant.delimiter", next: "@singleQuotedStringAtom" }]
      ],
      doubleQuotedStringAtom: [
        [/"/, { token: "constant.delimiter", next: "@pop" }],
        { include: "@stringConstantContentInterpol" }
      ],
      singleQuotedStringAtom: [
        [/'/, { token: "constant.delimiter", next: "@pop" }],
        { include: "@stringConstantContentInterpol" }
      ],
      // Sigils
      // See https://elixir-lang.org/getting-started/sigils.html
      // Sigils allow for typing values using their textual representation.
      // All sigils start with ~ followed by a letter or
      // multi-letter uppercase starting at Elixir v1.15.0, indicating sigil type
      // and then a delimiter pair enclosing the textual representation.
      // Optional modifiers are allowed after the closing delimiter.
      // For instance a regular expressions can be written as:
      // ~r/foo|bar/ ~r{foo|bar} ~r/foo|bar/g
      //
      // In general lowercase sigils allow for interpolation
      // and escaped characters, whereas uppercase sigils don't
      //
      // During tokenization we want to distinguish some
      // specific sigil types, namely string and regexp,
      // so that they cen be themed separately.
      //
      // To reasonably handle all those combinations we leverage
      // dot-separated states, so if we transition to @sigilStart.interpol.s.{.}
      // then "sigilStart.interpol.s" state will match and also all
      // the individual dot-separated parameters can be accessed.
      sigils: [
        [/~[a-z]@sigilStartDelimiter/, { token: "@rematch", next: "@sigil.interpol" }],
        [/~([A-Z]+)@sigilStartDelimiter/, { token: "@rematch", next: "@sigil.noInterpol" }]
      ],
      sigil: [
        [/~([a-z]|[A-Z]+)\{/, { token: "@rematch", switchTo: "@sigilStart.$S2.$1.{.}" }],
        [/~([a-z]|[A-Z]+)\[/, { token: "@rematch", switchTo: "@sigilStart.$S2.$1.[.]" }],
        [/~([a-z]|[A-Z]+)\(/, { token: "@rematch", switchTo: "@sigilStart.$S2.$1.(.)" }],
        [/~([a-z]|[A-Z]+)\</, { token: "@rematch", switchTo: "@sigilStart.$S2.$1.<.>" }],
        [
          /~([a-z]|[A-Z]+)(@sigilSymmetricDelimiter)/,
          { token: "@rematch", switchTo: "@sigilStart.$S2.$1.$2.$2" }
        ]
      ],
      // The definitions below expect states to be of the form:
      //
      // sigilStart.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>
      // sigilContinue.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>
      //
      // The sigilStart state is used only to properly classify the token (as string/regex/sigil)
      // and immediately switches to the sigilContinue sate, which handles the actual content
      // and waits for the corresponding end delimiter.
      "sigilStart.interpol.s": [
        [
          /~s@sigilStartDelimiter/,
          {
            token: "string.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.interpol.s": [
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "string.delimiter", next: "@pop" },
              "@default": "string"
            }
          }
        ],
        { include: "@stringContentInterpol" }
      ],
      "sigilStart.noInterpol.S": [
        [
          /~S@sigilStartDelimiter/,
          {
            token: "string.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.noInterpol.S": [
        // Ignore escaped sigil end
        [/(^|[^\\])\\@sigilEndDelimiter/, "string"],
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "string.delimiter", next: "@pop" },
              "@default": "string"
            }
          }
        ],
        { include: "@stringContent" }
      ],
      "sigilStart.interpol.r": [
        [
          /~r@sigilStartDelimiter/,
          {
            token: "regexp.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.interpol.r": [
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "regexp.delimiter", next: "@pop" },
              "@default": "regexp"
            }
          }
        ],
        { include: "@regexpContentInterpol" }
      ],
      "sigilStart.noInterpol.R": [
        [
          /~R@sigilStartDelimiter/,
          {
            token: "regexp.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.noInterpol.R": [
        // Ignore escaped sigil end
        [/(^|[^\\])\\@sigilEndDelimiter/, "regexp"],
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "regexp.delimiter", next: "@pop" },
              "@default": "regexp"
            }
          }
        ],
        { include: "@regexpContent" }
      ],
      // Fallback to the generic sigil by default
      "sigilStart.interpol": [
        [
          /~([a-z]|[A-Z]+)@sigilStartDelimiter/,
          {
            token: "sigil.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.interpol": [
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "sigil.delimiter", next: "@pop" },
              "@default": "sigil"
            }
          }
        ],
        { include: "@sigilContentInterpol" }
      ],
      "sigilStart.noInterpol": [
        [
          /~([a-z]|[A-Z]+)@sigilStartDelimiter/,
          {
            token: "sigil.delimiter",
            switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
          }
        ]
      ],
      "sigilContinue.noInterpol": [
        // Ignore escaped sigil end
        [/(^|[^\\])\\@sigilEndDelimiter/, "sigil"],
        [
          /(@sigilEndDelimiter)@sigilModifiers/,
          {
            cases: {
              "$1==$S5": { token: "sigil.delimiter", next: "@pop" },
              "@default": "sigil"
            }
          }
        ],
        { include: "@sigilContent" }
      ],
      // Attributes
      attributes: [
        // Module @doc* attributes - tokenized as comments
        [
          /\@(module|type)?doc (~[sS])?"""/,
          {
            token: "comment.block.documentation",
            next: "@doubleQuotedHeredocDocstring"
          }
        ],
        [
          /\@(module|type)?doc (~[sS])?'''/,
          {
            token: "comment.block.documentation",
            next: "@singleQuotedHeredocDocstring"
          }
        ],
        [
          /\@(module|type)?doc (~[sS])?"/,
          {
            token: "comment.block.documentation",
            next: "@doubleQuotedStringDocstring"
          }
        ],
        [
          /\@(module|type)?doc (~[sS])?'/,
          {
            token: "comment.block.documentation",
            next: "@singleQuotedStringDocstring"
          }
        ],
        [/\@(module|type)?doc false/, "comment.block.documentation"],
        // Module attributes
        [/\@(@variableName)/, "variable"]
      ],
      doubleQuotedHeredocDocstring: [
        [/"""/, { token: "comment.block.documentation", next: "@pop" }],
        { include: "@docstringContent" }
      ],
      singleQuotedHeredocDocstring: [
        [/'''/, { token: "comment.block.documentation", next: "@pop" }],
        { include: "@docstringContent" }
      ],
      doubleQuotedStringDocstring: [
        [/"/, { token: "comment.block.documentation", next: "@pop" }],
        { include: "@docstringContent" }
      ],
      singleQuotedStringDocstring: [
        [/'/, { token: "comment.block.documentation", next: "@pop" }],
        { include: "@docstringContent" }
      ],
      // Operators, punctuation, brackets
      symbols: [
        // Code point operator (either with regular character ?a or an escaped one ?\n)
        [/\?(\\.|[^\\\s])/, "number.constant"],
        // Anonymous function arguments
        [/&\d+/, "operator"],
        // Bitshift operators (must go before delimiters, so that << >> don't match first)
        [/<<<|>>>/, "operator"],
        // Delimiter pairs
        [/[()\[\]\{\}]|<<|>>/, "@brackets"],
        // Triple dot is a valid name (must go before operators, so that .. doesn't match instead)
        [/\.\.\./, "identifier"],
        // Punctuation => (must go before operators, so it's not tokenized as = then >)
        [/=>/, "punctuation"],
        // Operators
        [/@operator/, "operator"],
        // Punctuation
        [/[:;,.%]/, "punctuation"]
      ],
      // Generic helpers
      stringContentInterpol: [
        { include: "@interpolation" },
        { include: "@escapeChar" },
        { include: "@stringContent" }
      ],
      stringContent: [[/./, "string"]],
      stringConstantContentInterpol: [
        { include: "@interpolation" },
        { include: "@escapeChar" },
        { include: "@stringConstantContent" }
      ],
      stringConstantContent: [[/./, "constant"]],
      regexpContentInterpol: [
        { include: "@interpolation" },
        { include: "@escapeChar" },
        { include: "@regexpContent" }
      ],
      regexpContent: [
        // # may be a regular regexp char, so we use a heuristic
        // assuming a # surrounded by whitespace is actually a comment.
        [/(\s)(#)(\s.*)$/, ["white", "comment.punctuation", "comment"]],
        [/./, "regexp"]
      ],
      sigilContentInterpol: [
        { include: "@interpolation" },
        { include: "@escapeChar" },
        { include: "@sigilContent" }
      ],
      sigilContent: [[/./, "sigil"]],
      docstringContent: [[/./, "comment.block.documentation"]],
      escapeChar: [[/@escape/, "constant.character.escape"]],
      interpolation: [[/#{/, { token: "delimiter.bracket.embed", next: "@interpolationContinue" }]],
      interpolationContinue: [
        [/}/, { token: "delimiter.bracket.embed", next: "@pop" }],
        // Interpolation brackets may contain arbitrary code,
        // so we simply match against all the root rules,
        // until we reach interpolation end (the above matches).
        { include: "@root" }
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
