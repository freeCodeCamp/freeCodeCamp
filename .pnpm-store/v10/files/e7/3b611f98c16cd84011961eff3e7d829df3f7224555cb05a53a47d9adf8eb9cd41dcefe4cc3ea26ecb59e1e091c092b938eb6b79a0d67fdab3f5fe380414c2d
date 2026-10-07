define("vs/postiats-OtZm4COL", ["exports"], (function(exports) {
  "use strict";
  const conf = {
    comments: {
      lineComment: "//",
      blockComment: ["(*", "*)"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
      ["<", ">"]
    ],
    autoClosingPairs: [
      { open: '"', close: '"', notIn: ["string", "comment"] },
      { open: "{", close: "}", notIn: ["string", "comment"] },
      { open: "[", close: "]", notIn: ["string", "comment"] },
      { open: "(", close: ")", notIn: ["string", "comment"] }
    ]
  };
  const language = {
    tokenPostfix: ".pats",
    // TODO: staload and dynload are followed by a special kind of string literals
    // with {$IDENTIFER} variables, and it also may make sense to highlight
    // the punctuation (. and / and \) differently.
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats
    keywords: [
      //
      "abstype",
      // ABSTYPE
      "abst0ype",
      // ABST0YPE
      "absprop",
      // ABSPROP
      "absview",
      // ABSVIEW
      "absvtype",
      // ABSVIEWTYPE
      "absviewtype",
      // ABSVIEWTYPE
      "absvt0ype",
      // ABSVIEWT0YPE
      "absviewt0ype",
      // ABSVIEWT0YPE
      //
      "as",
      // T_AS
      //
      "and",
      // T_AND
      //
      "assume",
      // T_ASSUME
      //
      "begin",
      // T_BEGIN
      //
      /*
      		"case", // CASE
      */
      //
      "classdec",
      // T_CLASSDEC
      //
      "datasort",
      // T_DATASORT
      //
      "datatype",
      // DATATYPE
      "dataprop",
      // DATAPROP
      "dataview",
      // DATAVIEW
      "datavtype",
      // DATAVIEWTYPE
      "dataviewtype",
      // DATAVIEWTYPE
      //
      "do",
      // T_DO
      //
      "end",
      // T_END
      //
      "extern",
      // T_EXTERN
      "extype",
      // T_EXTYPE
      "extvar",
      // T_EXTVAR
      //
      "exception",
      // T_EXCEPTION
      //
      "fn",
      // FN // non-recursive
      "fnx",
      // FNX // mutual tail-rec.
      "fun",
      // FUN // general-recursive
      //
      "prfn",
      // PRFN
      "prfun",
      // PRFUN
      //
      "praxi",
      // PRAXI
      "castfn",
      // CASTFN
      //
      "if",
      // T_IF
      "then",
      // T_THEN
      "else",
      // T_ELSE
      //
      "ifcase",
      // T_IFCASE
      //
      "in",
      // T_IN
      //
      "infix",
      // INFIX
      "infixl",
      // INFIXL
      "infixr",
      // INFIXR
      "prefix",
      // PREFIX
      "postfix",
      // POSTFIX
      //
      "implmnt",
      // IMPLMNT // 0
      "implement",
      // IMPLEMENT // 1
      //
      "primplmnt",
      // PRIMPLMNT // ~1
      "primplement",
      // PRIMPLMNT // ~1
      //
      "import",
      // T_IMPORT // for importing packages
      //
      /*
      		"lam", // LAM
      		"llam", // LLAM
      		"fix", // FIX
      */
      //
      "let",
      // T_LET
      //
      "local",
      // T_LOCAL
      //
      "macdef",
      // MACDEF
      "macrodef",
      // MACRODEF
      //
      "nonfix",
      // T_NONFIX
      //
      "symelim",
      // T_SYMELIM
      "symintr",
      // T_SYMINTR
      "overload",
      // T_OVERLOAD
      //
      "of",
      // T_OF
      "op",
      // T_OP
      //
      "rec",
      // T_REC
      //
      "sif",
      // T_SIF
      "scase",
      // T_SCASE
      //
      "sortdef",
      // T_SORTDEF
      /*
      // HX: [sta] is now deprecated
      */
      "sta",
      // T_STACST
      "stacst",
      // T_STACST
      "stadef",
      // T_STADEF
      "static",
      // T_STATIC
      /*
      		"stavar", // T_STAVAR
      */
      //
      "staload",
      // T_STALOAD
      "dynload",
      // T_DYNLOAD
      //
      "try",
      // T_TRY
      //
      "tkindef",
      // T_TKINDEF // HX-2012-05-23
      //
      /*
      		"type", // TYPE
      */
      "typedef",
      // TYPEDEF
      "propdef",
      // PROPDEF
      "viewdef",
      // VIEWDEF
      "vtypedef",
      // VIEWTYPEDEF
      "viewtypedef",
      // VIEWTYPEDEF
      //
      /*
      		"val", // VAL
      */
      "prval",
      // PRVAL
      //
      "var",
      // VAR
      "prvar",
      // PRVAR
      //
      "when",
      // T_WHEN
      "where",
      // T_WHERE
      //
      /*
      		"for", // T_FOR
      		"while", // T_WHILE
      */
      //
      "with",
      // T_WITH
      //
      "withtype",
      // WITHTYPE
      "withprop",
      // WITHPROP
      "withview",
      // WITHVIEW
      "withvtype",
      // WITHVIEWTYPE
      "withviewtype"
      // WITHVIEWTYPE
      //
    ],
    keywords_dlr: [
      "$delay",
      // DLRDELAY
      "$ldelay",
      // DLRLDELAY
      //
      "$arrpsz",
      // T_DLRARRPSZ
      "$arrptrsize",
      // T_DLRARRPSZ
      //
      "$d2ctype",
      // T_DLRD2CTYPE
      //
      "$effmask",
      // DLREFFMASK
      "$effmask_ntm",
      // DLREFFMASK_NTM
      "$effmask_exn",
      // DLREFFMASK_EXN
      "$effmask_ref",
      // DLREFFMASK_REF
      "$effmask_wrt",
      // DLREFFMASK_WRT
      "$effmask_all",
      // DLREFFMASK_ALL
      //
      "$extern",
      // T_DLREXTERN
      "$extkind",
      // T_DLREXTKIND
      "$extype",
      // T_DLREXTYPE
      "$extype_struct",
      // T_DLREXTYPE_STRUCT
      //
      "$extval",
      // T_DLREXTVAL
      "$extfcall",
      // T_DLREXTFCALL
      "$extmcall",
      // T_DLREXTMCALL
      //
      "$literal",
      // T_DLRLITERAL
      //
      "$myfilename",
      // T_DLRMYFILENAME
      "$mylocation",
      // T_DLRMYLOCATION
      "$myfunction",
      // T_DLRMYFUNCTION
      //
      "$lst",
      // DLRLST
      "$lst_t",
      // DLRLST_T
      "$lst_vt",
      // DLRLST_VT
      "$list",
      // DLRLST
      "$list_t",
      // DLRLST_T
      "$list_vt",
      // DLRLST_VT
      //
      "$rec",
      // DLRREC
      "$rec_t",
      // DLRREC_T
      "$rec_vt",
      // DLRREC_VT
      "$record",
      // DLRREC
      "$record_t",
      // DLRREC_T
      "$record_vt",
      // DLRREC_VT
      //
      "$tup",
      // DLRTUP
      "$tup_t",
      // DLRTUP_T
      "$tup_vt",
      // DLRTUP_VT
      "$tuple",
      // DLRTUP
      "$tuple_t",
      // DLRTUP_T
      "$tuple_vt",
      // DLRTUP_VT
      //
      "$break",
      // T_DLRBREAK
      "$continue",
      // T_DLRCONTINUE
      //
      "$raise",
      // T_DLRRAISE
      //
      "$showtype",
      // T_DLRSHOWTYPE
      //
      "$vcopyenv_v",
      // DLRVCOPYENV_V
      "$vcopyenv_vt",
      // DLRVCOPYENV_VT
      //
      "$tempenver",
      // T_DLRTEMPENVER
      //
      "$solver_assert",
      // T_DLRSOLASSERT
      "$solver_verify"
      // T_DLRSOLVERIFY
    ],
    keywords_srp: [
      //
      "#if",
      // T_SRPIF
      "#ifdef",
      // T_SRPIFDEF
      "#ifndef",
      // T_SRPIFNDEF
      //
      "#then",
      // T_SRPTHEN
      //
      "#elif",
      // T_SRPELIF
      "#elifdef",
      // T_SRPELIFDEF
      "#elifndef",
      // T_SRPELIFNDEF
      //
      "#else",
      // T_SRPELSE
      "#endif",
      // T_SRPENDIF
      //
      "#error",
      // T_SRPERROR
      //
      "#prerr",
      // T_SRPPRERR // outpui to stderr
      "#print",
      // T_SRPPRINT // output to stdout
      //
      "#assert",
      // T_SRPASSERT
      //
      "#undef",
      // T_SRPUNDEF
      "#define",
      // T_SRPDEFINE
      //
      "#include",
      // T_SRPINCLUDE
      "#require",
      // T_SRPREQUIRE
      //
      "#pragma",
      // T_SRPPRAGMA // HX: general pragma
      "#codegen2",
      // T_SRPCODEGEN2 // for level-2 codegen
      "#codegen3"
      // T_SRPCODEGEN3 // for level-3 codegen
      //
      // HX: end of special tokens
      //
    ],
    irregular_keyword_list: [
      "val+",
      "val-",
      "val",
      "case+",
      "case-",
      "case",
      "addr@",
      "addr",
      "fold@",
      "free@",
      "fix@",
      "fix",
      "lam@",
      "lam",
      "llam@",
      "llam",
      "viewt@ype+",
      "viewt@ype-",
      "viewt@ype",
      "viewtype+",
      "viewtype-",
      "viewtype",
      "view+",
      "view-",
      "view@",
      "view",
      "type+",
      "type-",
      "type",
      "vtype+",
      "vtype-",
      "vtype",
      "vt@ype+",
      "vt@ype-",
      "vt@ype",
      "viewt@ype+",
      "viewt@ype-",
      "viewt@ype",
      "viewtype+",
      "viewtype-",
      "viewtype",
      "prop+",
      "prop-",
      "prop",
      "type+",
      "type-",
      "type",
      "t@ype",
      "t@ype+",
      "t@ype-",
      "abst@ype",
      "abstype",
      "absviewt@ype",
      "absvt@ype",
      "for*",
      "for",
      "while*",
      "while"
    ],
    keywords_types: [
      "bool",
      "double",
      "byte",
      "int",
      "short",
      "char",
      "void",
      "unit",
      "long",
      "float",
      "string",
      "strptr"
    ],
    // TODO: reference for this?
    keywords_effects: [
      "0",
      // no effects
      "fun",
      "clo",
      "prf",
      "funclo",
      "cloptr",
      "cloref",
      "ref",
      "ntm",
      "1"
      // all effects
    ],
    operators: [
      "@",
      // T_AT
      "!",
      // T_BANG
      "|",
      // T_BAR
      "`",
      // T_BQUOTE
      ":",
      // T_COLON
      "$",
      // T_DOLLAR
      ".",
      // T_DOT
      "=",
      // T_EQ
      "#",
      // T_HASH
      "~",
      // T_TILDE
      //
      "..",
      // T_DOTDOT
      "...",
      // T_DOTDOTDOT
      //
      "=>",
      // T_EQGT
      // "=<", // T_EQLT
      "=<>",
      // T_EQLTGT
      "=/=>",
      // T_EQSLASHEQGT
      "=>>",
      // T_EQGTGT
      "=/=>>",
      // T_EQSLASHEQGTGT
      //
      "<",
      // T_LT // opening a tmparg
      ">",
      // T_GT // closing a tmparg
      //
      "><",
      // T_GTLT
      //
      ".<",
      // T_DOTLT
      ">.",
      // T_GTDOT
      //
      ".<>.",
      // T_DOTLTGTDOT
      //
      "->",
      // T_MINUSGT
      //"-<", // T_MINUSLT
      "-<>"
      // T_MINUSLTGT
      //
      /*
      		":<", // T_COLONLT
      */
    ],
    brackets: [
      { open: ",(", close: ")", token: "delimiter.parenthesis" },
      // meta-programming syntax
      { open: "`(", close: ")", token: "delimiter.parenthesis" },
      { open: "%(", close: ")", token: "delimiter.parenthesis" },
      { open: "'(", close: ")", token: "delimiter.parenthesis" },
      { open: "'{", close: "}", token: "delimiter.parenthesis" },
      { open: "@(", close: ")", token: "delimiter.parenthesis" },
      { open: "@{", close: "}", token: "delimiter.brace" },
      { open: "@[", close: "]", token: "delimiter.square" },
      { open: "#[", close: "]", token: "delimiter.square" },
      { open: "{", close: "}", token: "delimiter.curly" },
      { open: "[", close: "]", token: "delimiter.square" },
      { open: "(", close: ")", token: "delimiter.parenthesis" },
      { open: "<", close: ">", token: "delimiter.angle" }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    IDENTFST: /[a-zA-Z_]/,
    IDENTRST: /[a-zA-Z0-9_'$]/,
    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
    digit: /[0-9]/,
    digitseq0: /@digit*/,
    xdigit: /[0-9A-Za-z]/,
    xdigitseq0: /@xdigit*/,
    INTSP: /[lLuU]/,
    FLOATSP: /[fFlL]/,
    fexponent: /[eE][+-]?[0-9]+/,
    fexponent_bin: /[pP][+-]?[0-9]+/,
    deciexp: /\.[0-9]*@fexponent?/,
    hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
    irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
    ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
    start: "root",
    // The main tokenizer for ATS/Postiats
    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats
    tokenizer: {
      root: [
        // lexing_blankseq0
        { regex: /[ \t\r\n]+/, action: { token: "" } },
        // NOTE: (*) is an invalid ML-like comment!
        { regex: /\(\*\)/, action: { token: "invalid" } },
        {
          regex: /\(\*/,
          action: { token: "comment", next: "lexing_COMMENT_block_ml" }
        },
        {
          regex: /\(/,
          action: "@brackets"
          /*{ token: 'delimiter.parenthesis' }*/
        },
        {
          regex: /\)/,
          action: "@brackets"
          /*{ token: 'delimiter.parenthesis' }*/
        },
        {
          regex: /\[/,
          action: "@brackets"
          /*{ token: 'delimiter.bracket' }*/
        },
        {
          regex: /\]/,
          action: "@brackets"
          /*{ token: 'delimiter.bracket' }*/
        },
        {
          regex: /\{/,
          action: "@brackets"
          /*{ token: 'delimiter.brace' }*/
        },
        {
          regex: /\}/,
          action: "@brackets"
          /*{ token: 'delimiter.brace' }*/
        },
        // lexing_COMMA
        {
          regex: /,\(/,
          action: "@brackets"
          /*{ token: 'delimiter.parenthesis' }*/
        },
        // meta-programming syntax
        { regex: /,/, action: { token: "delimiter.comma" } },
        { regex: /;/, action: { token: "delimiter.semicolon" } },
        // lexing_AT
        {
          regex: /@\(/,
          action: "@brackets"
          /* { token: 'delimiter.parenthesis' }*/
        },
        {
          regex: /@\[/,
          action: "@brackets"
          /* { token: 'delimiter.bracket' }*/
        },
        {
          regex: /@\{/,
          action: "@brackets"
          /*{ token: 'delimiter.brace' }*/
        },
        // lexing_COLON
        {
          regex: /:</,
          action: { token: "keyword", next: "@lexing_EFFECT_commaseq0" }
        },
        // T_COLONLT
        /*
        			lexing_DOT:
        
        			. // SYMBOLIC => lexing_IDENT_sym
        			. FLOATDOT => lexing_FLOAT_deciexp
        			. DIGIT => T_DOTINT
        			*/
        { regex: /\.@symbolic+/, action: { token: "identifier.sym" } },
        // FLOATDOT case
        {
          regex: /\.@digit*@fexponent@FLOATSP*/,
          action: { token: "number.float" }
        },
        { regex: /\.@digit+/, action: { token: "number.float" } },
        // T_DOTINT
        // lexing_DOLLAR:
        // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym
        {
          regex: /\$@IDENTFST@IDENTRST*/,
          action: {
            cases: {
              "@keywords_dlr": { token: "keyword.dlr" },
              "@default": { token: "namespace" }
              // most likely a module qualifier
            }
          }
        },
        // lexing_SHARP:
        // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym
        {
          regex: /\#@IDENTFST@IDENTRST*/,
          action: {
            cases: {
              "@keywords_srp": { token: "keyword.srp" },
              "@default": { token: "identifier" }
            }
          }
        },
        // lexing_PERCENT:
        { regex: /%\(/, action: { token: "delimiter.parenthesis" } },
        {
          regex: /^%{(#|\^|\$)?/,
          action: {
            token: "keyword",
            next: "@lexing_EXTCODE",
            nextEmbedded: "text/javascript"
          }
        },
        { regex: /^%}/, action: { token: "keyword" } },
        // lexing_QUOTE
        { regex: /'\(/, action: { token: "delimiter.parenthesis" } },
        { regex: /'\[/, action: { token: "delimiter.bracket" } },
        { regex: /'\{/, action: { token: "delimiter.brace" } },
        [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ["string", "string.escape", "string"]],
        [/'[^\\']'/, "string"],
        // lexing_DQUOTE
        [/"/, "string.quote", "@lexing_DQUOTE"],
        // lexing_BQUOTE
        {
          regex: /`\(/,
          action: "@brackets"
          /* { token: 'delimiter.parenthesis' }*/
        },
        // TODO: otherwise, try lexing_IDENT_sym
        { regex: /\\/, action: { token: "punctuation" } },
        // just T_BACKSLASH
        // lexing_IDENT_alp:
        // NOTE: (?!regex) is syntax for "not-followed-by" regex
        // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!
        {
          regex: /@irregular_keywords(?!@IDENTRST)/,
          action: { token: "keyword" }
        },
        {
          regex: /@IDENTFST@IDENTRST*[<!\[]?/,
          action: {
            cases: {
              // TODO: dynload and staload should be specially parsed
              // dynload whitespace+ "special_string"
              // this special string is really:
              //  '/' '\\' '.' => punctuation
              // ({\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation
              // [^"] => identifier/literal
              "@keywords": { token: "keyword" },
              "@keywords_types": { token: "type" },
              "@default": { token: "identifier" }
            }
          }
        },
        // lexing_IDENT_sym:
        {
          regex: /\/\/\/\//,
          action: { token: "comment", next: "@lexing_COMMENT_rest" }
        },
        { regex: /\/\/.*$/, action: { token: "comment" } },
        {
          regex: /\/\*/,
          action: { token: "comment", next: "@lexing_COMMENT_block_c" }
        },
        // AS-20160627: specifically for effect annotations
        {
          regex: /-<|=</,
          action: { token: "keyword", next: "@lexing_EFFECT_commaseq0" }
        },
        {
          regex: /@symbolic+/,
          action: {
            cases: {
              "@operators": "keyword",
              "@default": "operator"
            }
          }
        },
        // lexing_ZERO:
        // FIXME: this one is quite messy/unfinished yet
        // TODO: lexing_INT_hex
        // - testing_hexiexp => lexing_FLOAT_hexiexp
        // - testing_fexponent_bin => lexing_FLOAT_hexiexp
        // - testing_intspseq0 => T_INT_hex
        // lexing_INT_hex:
        {
          regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/,
          action: { token: "number.float" }
        },
        { regex: /0[xX]@xdigit+@INTSP*/, action: { token: "number.hex" } },
        {
          regex: /0[0-7]+(?![0-9])@INTSP*/,
          action: { token: "number.octal" }
        },
        // lexing_INT_oct
        //{regex: /0/, action: { token: 'number' } }, // INTZERO
        // lexing_INT_dec:
        // - testing_deciexp => lexing_FLOAT_deciexp
        // - testing_fexponent => lexing_FLOAT_deciexp
        // - otherwise => intspseq0 ([0-9]*[lLuU]?)
        {
          regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/,
          action: { token: "number.float" }
        },
        {
          regex: /@digit@digitseq0@INTSP*/,
          action: { token: "number.decimal" }
        },
        // DIGIT, if followed by digitseq0, is lexing_INT_dec
        { regex: /@digit+@INTSP*/, action: { token: "number" } }
      ],
      lexing_COMMENT_block_ml: [
        [/[^\(\*]+/, "comment"],
        [/\(\*/, "comment", "@push"],
        [/\(\*/, "comment.invalid"],
        [/\*\)/, "comment", "@pop"],
        [/\*/, "comment"]
      ],
      lexing_COMMENT_block_c: [
        [/[^\/*]+/, "comment"],
        // [/\/\*/, 'comment', '@push' ],    // nested C-style block comments not allowed
        // [/\/\*/,    'comment.invalid' ],	// NOTE: this breaks block comments in the shape of /* //*/
        [/\*\//, "comment", "@pop"],
        [/[\/*]/, "comment"]
      ],
      lexing_COMMENT_rest: [
        [/$/, "comment", "@pop"],
        // FIXME: does it match? docs say 'no'
        [/.*/, "comment"]
      ],
      // NOTE: added by AS, specifically for highlighting
      lexing_EFFECT_commaseq0: [
        {
          regex: /@IDENTFST@IDENTRST+|@digit+/,
          action: {
            cases: {
              "@keywords_effects": { token: "type.effect" },
              "@default": { token: "identifier" }
            }
          }
        },
        { regex: /,/, action: { token: "punctuation" } },
        { regex: />/, action: { token: "@rematch", next: "@pop" } }
      ],
      lexing_EXTCODE: [
        {
          regex: /^%}/,
          action: {
            token: "@rematch",
            next: "@pop",
            nextEmbedded: "@pop"
          }
        },
        { regex: /[^%]+/, action: "" }
      ],
      lexing_DQUOTE: [
        { regex: /"/, action: { token: "string.quote", next: "@pop" } },
        // AS-20160628: additional hi-lighting for variables in staload/dynload strings
        {
          regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/,
          action: [{ token: "string.escape" }, { token: "identifier" }, { token: "string.escape" }]
        },
        { regex: /\\$/, action: { token: "string.escape" } },
        {
          regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/,
          action: { token: "string.escape" }
        },
        { regex: /[^\\"]+/, action: { token: "string" } }
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
