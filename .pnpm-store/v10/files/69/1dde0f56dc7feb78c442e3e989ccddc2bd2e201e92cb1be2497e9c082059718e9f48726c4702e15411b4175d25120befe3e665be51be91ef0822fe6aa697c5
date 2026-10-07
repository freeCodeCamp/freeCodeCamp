define("vs/freemarker2-CQSuO4BX", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
  "use strict";
  const EMPTY_ELEMENTS = [
    "assign",
    "flush",
    "ftl",
    "return",
    "global",
    "import",
    "include",
    "break",
    "continue",
    "local",
    "nested",
    "nt",
    "setting",
    "stop",
    "t",
    "lt",
    "rt",
    "fallback"
  ];
  const BLOCK_ELEMENTS = [
    "attempt",
    "autoesc",
    "autoEsc",
    "compress",
    "comment",
    "escape",
    "noescape",
    "function",
    "if",
    "list",
    "items",
    "sep",
    "macro",
    "noparse",
    "noParse",
    "noautoesc",
    "noAutoEsc",
    "outputformat",
    "switch",
    "visit",
    "recurse"
  ];
  const TagSyntaxAngle = {
    close: ">",
    id: "angle",
    open: "<"
  };
  const TagSyntaxBracket = {
    close: "\\]",
    id: "bracket",
    open: "\\["
  };
  const TagSyntaxAuto = {
    close: "[>\\]]",
    id: "auto",
    open: "[<\\[]"
  };
  const InterpolationSyntaxDollar = {
    close: "\\}",
    id: "dollar",
    open1: "\\$",
    open2: "\\{"
  };
  const InterpolationSyntaxBracket = {
    close: "\\]",
    id: "bracket",
    open1: "\\[",
    open2: "="
  };
  function createLangConfiguration(ts) {
    return {
      brackets: [
        ["<", ">"],
        ["[", "]"],
        ["(", ")"],
        ["{", "}"]
      ],
      comments: {
        blockComment: [`${ts.open}--`, `--${ts.close}`]
      },
      autoCloseBefore: "\n\r	 }]),.:;=",
      autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"', notIn: ["string"] },
        { open: "'", close: "'", notIn: ["string"] }
      ],
      surroundingPairs: [
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "<", close: ">" }
      ],
      folding: {
        markers: {
          start: new RegExp(
            `${ts.open}#(?:${BLOCK_ELEMENTS.join("|")})([^/${ts.close}]*(?!/)${ts.close})[^${ts.open}]*$`
          ),
          end: new RegExp(`${ts.open}/#(?:${BLOCK_ELEMENTS.join("|")})[\\r\\n\\t ]*>`)
        }
      },
      onEnterRules: [
        {
          beforeText: new RegExp(
            `${ts.open}#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/${ts.close}]*(?!/)${ts.close})[^${ts.open}]*$`
          ),
          afterText: new RegExp(`^${ts.open}/#([a-zA-Z_]+)[\\r\\n\\t ]*${ts.close}$`),
          action: {
            indentAction: editor_api.languages.IndentAction.IndentOutdent
          }
        },
        {
          beforeText: new RegExp(
            `${ts.open}#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/${ts.close}]*(?!/)${ts.close})[^${ts.open}]*$`
          ),
          action: { indentAction: editor_api.languages.IndentAction.Indent }
        }
      ]
    };
  }
  function createLangConfigurationAuto() {
    return {
      // Cannot set block comment delimiter in auto mode...
      // It depends on the content and the cursor position of the file...
      brackets: [
        ["<", ">"],
        ["[", "]"],
        ["(", ")"],
        ["{", "}"]
      ],
      autoCloseBefore: "\n\r	 }]),.:;=",
      autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"', notIn: ["string"] },
        { open: "'", close: "'", notIn: ["string"] }
      ],
      surroundingPairs: [
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "<", close: ">" }
      ],
      folding: {
        markers: {
          start: new RegExp(`[<\\[]#(?:${BLOCK_ELEMENTS.join("|")})([^/>\\]]*(?!/)[>\\]])[^<\\[]*$`),
          end: new RegExp(`[<\\[]/#(?:${BLOCK_ELEMENTS.join("|")})[\\r\\n\\t ]*>`)
        }
      },
      onEnterRules: [
        {
          beforeText: new RegExp(
            `[<\\[]#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`
          ),
          afterText: new RegExp(`^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$`),
          action: {
            indentAction: editor_api.languages.IndentAction.IndentOutdent
          }
        },
        {
          beforeText: new RegExp(
            `[<\\[]#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`
          ),
          action: { indentAction: editor_api.languages.IndentAction.Indent }
        }
      ]
    };
  }
  function createMonarchLanguage(ts, is) {
    const id = `_${ts.id}_${is.id}`;
    const s = (name) => name.replace(/__id__/g, id);
    const r = (regexp) => {
      const source = regexp.source.replace(/__id__/g, id);
      return new RegExp(source, regexp.flags);
    };
    return {
      // Settings
      unicode: true,
      includeLF: false,
      start: s("default__id__"),
      ignoreCase: false,
      defaultToken: "invalid",
      tokenPostfix: `.freemarker2`,
      brackets: [
        { open: "{", close: "}", token: "delimiter.curly" },
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" }
      ],
      // Dynamic RegExp
      [s("open__id__")]: new RegExp(ts.open),
      [s("close__id__")]: new RegExp(ts.close),
      [s("iOpen1__id__")]: new RegExp(is.open1),
      [s("iOpen2__id__")]: new RegExp(is.open2),
      [s("iClose__id__")]: new RegExp(is.close),
      // <#START_TAG : "<" | "<#" | "[#">
      // <#END_TAG : "</" | "</#" | "[/#">
      [s("startTag__id__")]: r(/(@open__id__)(#)/),
      [s("endTag__id__")]: r(/(@open__id__)(\/#)/),
      [s("startOrEndTag__id__")]: r(/(@open__id__)(\/?#)/),
      // <#CLOSE_TAG1 : (<BLANK>)* (">" | "]")>
      [s("closeTag1__id__")]: r(/((?:@blank)*)(@close__id__)/),
      // <#CLOSE_TAG2 : (<BLANK>)* ("/")? (">" | "]")>
      [s("closeTag2__id__")]: r(/((?:@blank)*\/?)(@close__id__)/),
      // Static RegExp
      // <#BLANK : " " | "\t" | "\n" | "\r">
      blank: /[ \t\n\r]/,
      // <FALSE : "false">
      // <TRUE : "true">
      // <IN : "in">
      // <AS : "as">
      // <USING : "using">
      keywords: ["false", "true", "in", "as", "using"],
      // Directive names that cannot have an expression parameters and cannot be self-closing
      // E.g. <#if id==2> ... </#if>
      directiveStartCloseTag1: /attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/,
      // Directive names that cannot have an expression parameter and can be self-closing
      // E.g. <#if> ... <#else>  ... </#if>
      // E.g. <#if> ... <#else /></#if>
      directiveStartCloseTag2: /else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/,
      // Directive names that can have an expression parameter and cannot be self-closing
      // E.g. <#if id==2> ... </#if>
      directiveStartBlank: /if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/,
      // Directive names that can have an end tag
      // E.g. </#if>
      directiveEndCloseTag1: /if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/,
      // <#ESCAPED_CHAR :
      //     "\\"
      //     (
      //         ("n" | "t" | "r" | "f" | "b" | "g" | "l" | "a" | "\\" | "'" | "\"" | "{" | "=")
      //         |
      //         ("x" ["0"-"9", "A"-"F", "a"-"f"])
      //     )
      // >
      // Note: While the JavaCC tokenizer rule only specifies one hex digit,
      // FreeMarker actually interprets up to 4 hex digits.
      escapedChar: /\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/,
      // <#ASCII_DIGIT: ["0" - "9"]>
      asciiDigit: /[0-9]/,
      // <INTEGER : (["0"-"9"])+>
      integer: /[0-9]+/,
      // <#NON_ESCAPED_ID_START_CHAR:
      // [
      // 	  // This was generated on JDK 1.8.0_20 Win64 with src/main/misc/identifierChars/IdentifierCharGenerator.java
      //    ...
      // ]
      nonEscapedIdStartChar: /[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      // <#ESCAPED_ID_CHAR: "\\" ("-" | "." | ":" | "#")>
      escapedIdChar: /\\[\-\.:#]/,
      // <#ID_START_CHAR: <NON_ESCAPED_ID_START_CHAR>|<ESCAPED_ID_CHAR>>
      idStartChar: /(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/,
      // <ID: <ID_START_CHAR> (<ID_START_CHAR>|<ASCII_DIGIT>)*>
      id: /(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/,
      // Certain keywords / operators are allowed to index hashes
      //
      // Expression DotVariable(Expression exp) :
      // {
      // 	Token t;
      // }
      // {
      // 		<DOT>
      // 		(
      // 			t = <ID> | t = <TIMES> | t = <DOUBLE_STAR>
      // 			|
      // 			(
      // 				t = <LESS_THAN>
      // 				|
      // 				t = <LESS_THAN_EQUALS>
      // 				|
      // 				t = <ESCAPED_GT>
      // 				|
      // 				t = <ESCAPED_GTE>
      // 				|
      // 				t = <FALSE>
      // 				|
      // 				t = <TRUE>
      // 				|
      // 				t = <IN>
      // 				|
      // 				t = <AS>
      // 				|
      // 				t = <USING>
      // 			)
      // 			{
      // 				if (!Character.isLetter(t.image.charAt(0))) {
      // 					throw new ParseException(t.image + " is not a valid identifier.", template, t);
      // 				}
      // 			}
      // 		)
      // 		{
      // 			notListLiteral(exp, "hash");
      // 			notStringLiteral(exp, "hash");
      // 			notBooleanLiteral(exp, "hash");
      // 			Dot dot = new Dot(exp, t.image);
      // 			dot.setLocation(template, exp, t);
      // 			return dot;
      // 		}
      // }
      specialHashKeys: /\*\*|\*|false|true|in|as|using/,
      // <DOUBLE_EQUALS : "==">
      // <EQUALS : "=">
      // <NOT_EQUALS : "!=">
      // <PLUS_EQUALS : "+=">
      // <MINUS_EQUALS : "-=">
      // <TIMES_EQUALS : "*=">
      // <DIV_EQUALS : "/=">
      // <MOD_EQUALS : "%=">
      // <PLUS_PLUS : "++">
      // <MINUS_MINUS : "--">
      // <LESS_THAN_EQUALS : "lte" | "\\lte" | "<=" | "&lt;=">
      // <LESS_THAN : "lt" | "\\lt" | "<" | "&lt;">
      // <ESCAPED_GTE : "gte" | "\\gte" | "&gt;=">
      // <ESCAPED_GT: "gt" | "\\gt" |  "&gt;">
      // <DOUBLE_STAR : "**">
      // <PLUS : "+">
      // <MINUS : "-">
      // <TIMES : "*">
      // <PERCENT : "%">
      // <AND : "&" | "&&" | "&amp;&amp;" | "\\and" >
      // <OR : "|" | "||">
      // <EXCLAM : "!">
      // <COMMA : ",">
      // <SEMICOLON : ";">
      // <COLON : ":">
      // <ELLIPSIS : "...">
      // <DOT_DOT_ASTERISK : "..*" >
      // <DOT_DOT_LESS : "..<" | "..!" >
      // <DOT_DOT : "..">
      // <EXISTS : "??">
      // <BUILT_IN : "?">
      // <LAMBDA_ARROW : "->" | "-&gt;">
      namedSymbols: /&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/,
      arrows: ["->", "-&gt;"],
      delimiters: [";", ":", ",", "."],
      stringOperators: ["lte", "lt", "gte", "gt"],
      noParseTags: ["noparse", "noParse", "comment"],
      tokenizer: {
        // Parser states
        // Plain text
        [s("default__id__")]: [
          { include: s("@directive_token__id__") },
          { include: s("@interpolation_and_text_token__id__") }
        ],
        // A FreeMarker expression inside a directive, e.g. <#if 2<3>
        [s("fmExpression__id__.directive")]: [
          { include: s("@blank_and_expression_comment_token__id__") },
          { include: s("@directive_end_token__id__") },
          { include: s("@expression_token__id__") }
        ],
        // A FreeMarker expression inside an interpolation, e.g. ${2+3}
        [s("fmExpression__id__.interpolation")]: [
          { include: s("@blank_and_expression_comment_token__id__") },
          { include: s("@expression_token__id__") },
          { include: s("@greater_operators_token__id__") }
        ],
        // In an expression and inside a not-yet closed parenthesis / bracket
        [s("inParen__id__.plain")]: [
          { include: s("@blank_and_expression_comment_token__id__") },
          { include: s("@directive_end_token__id__") },
          { include: s("@expression_token__id__") }
        ],
        [s("inParen__id__.gt")]: [
          { include: s("@blank_and_expression_comment_token__id__") },
          { include: s("@expression_token__id__") },
          { include: s("@greater_operators_token__id__") }
        ],
        // Expression for the unified call, e.g. <@createMacro() ... >
        [s("noSpaceExpression__id__")]: [
          { include: s("@no_space_expression_end_token__id__") },
          { include: s("@directive_end_token__id__") },
          { include: s("@expression_token__id__") }
        ],
        // For the function of a unified call. Special case for when the
        // expression is a simple identifier.
        // <@join [1,2] ",">
        // <@null!join [1,2] ",">
        [s("unifiedCall__id__")]: [{ include: s("@unified_call_token__id__") }],
        // For singly and doubly quoted string (that may contain interpolations)
        [s("singleString__id__")]: [{ include: s("@string_single_token__id__") }],
        [s("doubleString__id__")]: [{ include: s("@string_double_token__id__") }],
        // For singly and doubly quoted string (that may not contain interpolations)
        [s("rawSingleString__id__")]: [{ include: s("@string_single_raw_token__id__") }],
        [s("rawDoubleString__id__")]: [{ include: s("@string_double_raw_token__id__") }],
        // For a comment in an expression
        // ${ 1 + <#-- comment --> 2}
        [s("expressionComment__id__")]: [{ include: s("@expression_comment_token__id__") }],
        // For <#noparse> ... </#noparse>
        // For <#noParse> ... </#noParse>
        // For <#comment> ... </#comment>
        [s("noParse__id__")]: [{ include: s("@no_parse_token__id__") }],
        // For <#-- ... -->
        [s("terseComment__id__")]: [{ include: s("@terse_comment_token__id__") }],
        // Common rules
        [s("directive_token__id__")]: [
          // <ATTEMPT : <START_TAG> "attempt" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <RECOVER : <START_TAG> "recover" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <SEP : <START_TAG> "sep" <CLOSE_TAG1>>
          // <AUTOESC : <START_TAG> "auto" ("e"|"E") "sc" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 4), DEFAULT);
          // }
          // <NOAUTOESC : <START_TAG> "no" ("autoe"|"AutoE") "sc" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 2), DEFAULT);
          // }
          // <COMPRESS : <START_TAG> "compress" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <DEFAUL : <START_TAG> "default" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <NOESCAPE : <START_TAG> "no" ("e" | "E") "scape" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 2), DEFAULT);
          // }
          //
          // <COMMENT : <START_TAG> "comment" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, NO_PARSE); noparseTag = "comment";
          // }
          // <NOPARSE: <START_TAG> "no" ("p" | "P") "arse" <CLOSE_TAG1>> {
          //     int tagNamingConvention = getTagNamingConvention(matchedToken, 2);
          //     handleTagSyntaxAndSwitch(matchedToken, tagNamingConvention, NO_PARSE);
          //     noparseTag = tagNamingConvention == Configuration.CAMEL_CASE_NAMING_CONVENTION ? "noParse" : "noparse";
          // }
          [
            r(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              {
                cases: {
                  "@noParseTags": { token: "tag", next: s("@noParse__id__.$3") },
                  "@default": { token: "tag" }
                }
              },
              { token: "delimiter.directive" },
              { token: "@brackets.directive" }
            ]
          ],
          // <ELSE : <START_TAG> "else" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <BREAK : <START_TAG> "break" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <CONTINUE : <START_TAG> "continue" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <SIMPLE_RETURN : <START_TAG> "return" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <HALT : <START_TAG> "stop" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <FLUSH : <START_TAG> "flush" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <TRIM : <START_TAG> "t" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <LTRIM : <START_TAG> "lt" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <RTRIM : <START_TAG> "rt" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <NOTRIM : <START_TAG> "nt" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <SIMPLE_NESTED : <START_TAG> "nested" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <SIMPLE_RECURSE : <START_TAG> "recurse" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <FALLBACK : <START_TAG> "fallback" <CLOSE_TAG2>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <TRIVIAL_FTL_HEADER : ("<#ftl" | "[#ftl") ("/")? (">" | "]")> { ftlHeader(matchedToken); }
          [
            r(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              { token: "tag" },
              { token: "delimiter.directive" },
              { token: "@brackets.directive" }
            ]
          ],
          // <IF : <START_TAG> "if" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <ELSE_IF : <START_TAG> "else" ("i" | "I") "f" <BLANK>> {
          // 	handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 4), FM_EXPRESSION);
          // }
          // <LIST : <START_TAG> "list" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <FOREACH : <START_TAG> "for" ("e" | "E") "ach" <BLANK>> {
          //    handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 3), FM_EXPRESSION);
          // }
          // <SWITCH : <START_TAG> "switch" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <CASE : <START_TAG> "case" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <ASSIGN : <START_TAG> "assign" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <GLOBALASSIGN : <START_TAG> "global" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <LOCALASSIGN : <START_TAG> "local" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <_INCLUDE : <START_TAG> "include" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <IMPORT : <START_TAG> "import" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <FUNCTION : <START_TAG> "function" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <MACRO : <START_TAG> "macro" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <TRANSFORM : <START_TAG> "transform" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <VISIT : <START_TAG> "visit" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <STOP : <START_TAG> "stop" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <RETURN : <START_TAG> "return" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <CALL : <START_TAG> "call" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <SETTING : <START_TAG> "setting" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <OUTPUTFORMAT : <START_TAG> "output" ("f"|"F") "ormat" <BLANK>> {
          //    handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 6), FM_EXPRESSION);
          // }
          // <NESTED : <START_TAG> "nested" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <RECURSE : <START_TAG> "recurse" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          // <ESCAPE : <START_TAG> "escape" <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          //
          // Note: FreeMarker grammar appears to treat the FTL header as a special case,
          // in order to remove new lines after the header (?), but since we only need
          // to tokenize for highlighting, we can include this directive here.
          // <FTL_HEADER : ("<#ftl" | "[#ftl") <BLANK>> { ftlHeader(matchedToken); }
          //
          // Note: FreeMarker grammar appears to treat the items directive as a special case for
          // the AST parsing process, but since we only need to tokenize, we can include this
          // directive here.
          // <ITEMS : <START_TAG> "items" (<BLANK>)+ <AS> <BLANK>> { handleTagSyntaxAndSwitch(matchedToken, FM_EXPRESSION); }
          [
            r(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              { token: "tag" },
              { token: "", next: s("@fmExpression__id__.directive") }
            ]
          ],
          // <END_IF : <END_TAG> "if" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_LIST : <END_TAG> "list" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_SEP : <END_TAG> "sep" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_RECOVER : <END_TAG> "recover" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_ATTEMPT : <END_TAG> "attempt" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_FOREACH : <END_TAG> "for" ("e" | "E") "ach" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 3), DEFAULT);
          // }
          // <END_LOCAL : <END_TAG> "local" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_GLOBAL : <END_TAG> "global" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_ASSIGN : <END_TAG> "assign" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_FUNCTION : <END_TAG> "function" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_MACRO : <END_TAG> "macro" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_OUTPUTFORMAT : <END_TAG> "output" ("f" | "F") "ormat" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 6), DEFAULT);
          // }
          // <END_AUTOESC : <END_TAG> "auto" ("e" | "E") "sc" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 4), DEFAULT);
          // }
          // <END_NOAUTOESC : <END_TAG> "no" ("autoe"|"AutoE") "sc" <CLOSE_TAG1>> {
          //   handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 2), DEFAULT);
          // }
          // <END_COMPRESS : <END_TAG> "compress" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_TRANSFORM : <END_TAG> "transform" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_SWITCH : <END_TAG> "switch" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_ESCAPE : <END_TAG> "escape" <CLOSE_TAG1>> { handleTagSyntaxAndSwitch(matchedToken, DEFAULT); }
          // <END_NOESCAPE : <END_TAG> "no" ("e" | "E") "scape" <CLOSE_TAG1>> {
          //     handleTagSyntaxAndSwitch(matchedToken, getTagNamingConvention(matchedToken, 2), DEFAULT);
          // }
          [
            r(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              { token: "tag" },
              { token: "delimiter.directive" },
              { token: "@brackets.directive" }
            ]
          ],
          // <UNIFIED_CALL : "<@" | "[@" > { unifiedCall(matchedToken); }
          [
            r(/(@open__id__)(@)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive", next: s("@unifiedCall__id__") }
            ]
          ],
          // <UNIFIED_CALL_END : ("<" | "[") "/@" ((<ID>) ("."<ID>)*)? <CLOSE_TAG1>> { unifiedCallEnd(matchedToken); }
          [
            r(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/),
            [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              { token: "tag" },
              { token: "delimiter.directive" },
              { token: "@brackets.directive" }
            ]
          ],
          // <TERSE_COMMENT : ("<" | "[") "#--" > { noparseTag = "-->"; handleTagSyntaxAndSwitch(matchedToken, NO_PARSE); }
          [
            r(/(@open__id__)#--/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : { token: "comment", next: s("@terseComment__id__") }
          ],
          // <UNKNOWN_DIRECTIVE : ("[#" | "[/#" | "<#" | "</#") (["a"-"z", "A"-"Z", "_"])+>
          [
            r(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/),
            ts.id === "auto" ? {
              cases: {
                "$1==<": { token: "@rematch", switchTo: `@default_angle_${is.id}` },
                "$1==[": { token: "@rematch", switchTo: `@default_bracket_${is.id}` }
              }
            } : [
              { token: "@brackets.directive" },
              { token: "delimiter.directive" },
              { token: "tag.invalid", next: s("@fmExpression__id__.directive") }
            ]
          ]
        ],
        // <DEFAULT, NO_DIRECTIVE> TOKEN :
        [s("interpolation_and_text_token__id__")]: [
          // <DOLLAR_INTERPOLATION_OPENING : "${"> { startInterpolation(matchedToken); }
          // <SQUARE_BRACKET_INTERPOLATION_OPENING : "[="> { startInterpolation(matchedToken); }
          [
            r(/(@iOpen1__id__)(@iOpen2__id__)/),
            [
              { token: is.id === "bracket" ? "@brackets.interpolation" : "delimiter.interpolation" },
              {
                token: is.id === "bracket" ? "delimiter.interpolation" : "@brackets.interpolation",
                next: s("@fmExpression__id__.interpolation")
              }
            ]
          ],
          // <STATIC_TEXT_FALSE_ALARM : "$" | "#" | "<" | "[" | "{"> // to handle a lone dollar sign or "<" or "# or <@ with whitespace after"
          // <STATIC_TEXT_WS : ("\n" | "\r" | "\t" | " ")+>
          // <STATIC_TEXT_NON_WS : (~["$", "<", "#", "[", "{", "\n", "\r", "\t", " "])+>
          [/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/, { token: "source" }]
        ],
        // <STRING_LITERAL :
        // 	(
        // 		"\""
        // 		((~["\"", "\\"]) | <ESCAPED_CHAR>)*
        // 		"\""
        // 	)
        // 	|
        // 	(
        // 		"'"
        // 		((~["'", "\\"]) | <ESCAPED_CHAR>)*
        // 		"'"
        // 	)
        // >
        [s("string_single_token__id__")]: [
          [/[^'\\]/, { token: "string" }],
          [/@escapedChar/, { token: "string.escape" }],
          [/'/, { token: "string", next: "@pop" }]
        ],
        [s("string_double_token__id__")]: [
          [/[^"\\]/, { token: "string" }],
          [/@escapedChar/, { token: "string.escape" }],
          [/"/, { token: "string", next: "@pop" }]
        ],
        // <RAW_STRING : "r" (("\"" (~["\""])* "\"") | ("'" (~["'"])* "'"))>
        [s("string_single_raw_token__id__")]: [
          [/[^']+/, { token: "string.raw" }],
          [/'/, { token: "string.raw", next: "@pop" }]
        ],
        [s("string_double_raw_token__id__")]: [
          [/[^"]+/, { token: "string.raw" }],
          [/"/, { token: "string.raw", next: "@pop" }]
        ],
        // <FM_EXPRESSION, IN_PAREN, NO_SPACE_EXPRESSION, NAMED_PARAMETER_EXPRESSION> TOKEN :
        [s("expression_token__id__")]: [
          // Strings
          [
            /(r?)(['"])/,
            {
              cases: {
                "r'": [
                  { token: "keyword" },
                  { token: "string.raw", next: s("@rawSingleString__id__") }
                ],
                'r"': [
                  { token: "keyword" },
                  { token: "string.raw", next: s("@rawDoubleString__id__") }
                ],
                "'": [{ token: "source" }, { token: "string", next: s("@singleString__id__") }],
                '"': [{ token: "source" }, { token: "string", next: s("@doubleString__id__") }]
              }
            }
          ],
          // Numbers
          // <INTEGER : (["0"-"9"])+>
          // <DECIMAL : <INTEGER> "." <INTEGER>>
          [
            /(?:@integer)(?:\.(?:@integer))?/,
            {
              cases: {
                "(?:@integer)": { token: "number" },
                "@default": { token: "number.float" }
              }
            }
          ],
          // Special hash keys that must not be treated as identifiers
          // after a period, e.g. a.** is accessing the key "**" of a
          [
            /(\.)(@blank*)(@specialHashKeys)/,
            [{ token: "delimiter" }, { token: "" }, { token: "identifier" }]
          ],
          // Symbols / operators
          [
            /(?:@namedSymbols)/,
            {
              cases: {
                "@arrows": { token: "meta.arrow" },
                "@delimiters": { token: "delimiter" },
                "@default": { token: "operators" }
              }
            }
          ],
          // Identifiers
          [
            /@id/,
            {
              cases: {
                "@keywords": { token: "keyword.$0" },
                "@stringOperators": { token: "operators" },
                "@default": { token: "identifier" }
              }
            }
          ],
          // <OPEN_BRACKET : "[">
          // <CLOSE_BRACKET : "]">
          // <OPEN_PAREN : "(">
          // <CLOSE_PAREN : ")">
          // <OPENING_CURLY_BRACKET : "{">
          // <CLOSING_CURLY_BRACKET : "}">
          [
            /[\[\]\(\)\{\}]/,
            {
              cases: {
                "\\[": {
                  cases: {
                    "$S2==gt": { token: "@brackets", next: s("@inParen__id__.gt") },
                    "@default": { token: "@brackets", next: s("@inParen__id__.plain") }
                  }
                },
                "\\]": {
                  cases: {
                    ...is.id === "bracket" ? {
                      "$S2==interpolation": { token: "@brackets.interpolation", next: "@popall" }
                    } : {},
                    // This cannot happen while in auto mode, since this applies only to an
                    // fmExpression inside a directive. But once we encounter the start of a
                    // directive, we can establish the tag syntax mode.
                    ...ts.id === "bracket" ? {
                      "$S2==directive": { token: "@brackets.directive", next: "@popall" }
                    } : {},
                    // Ignore mismatched paren
                    [s("$S1==inParen__id__")]: { token: "@brackets", next: "@pop" },
                    "@default": { token: "@brackets" }
                  }
                },
                "\\(": { token: "@brackets", next: s("@inParen__id__.gt") },
                "\\)": {
                  cases: {
                    [s("$S1==inParen__id__")]: { token: "@brackets", next: "@pop" },
                    "@default": { token: "@brackets" }
                  }
                },
                "\\{": {
                  cases: {
                    "$S2==gt": { token: "@brackets", next: s("@inParen__id__.gt") },
                    "@default": { token: "@brackets", next: s("@inParen__id__.plain") }
                  }
                },
                "\\}": {
                  cases: {
                    ...is.id === "bracket" ? {} : {
                      "$S2==interpolation": { token: "@brackets.interpolation", next: "@popall" }
                    },
                    // Ignore mismatched paren
                    [s("$S1==inParen__id__")]: { token: "@brackets", next: "@pop" },
                    "@default": { token: "@brackets" }
                  }
                }
              }
            }
          ],
          // <OPEN_MISPLACED_INTERPOLATION : "${" | "#{" | "[=">
          [/\$\{/, { token: "delimiter.invalid" }]
        ],
        // <FM_EXPRESSION, IN_PAREN, NAMED_PARAMETER_EXPRESSION> SKIP :
        [s("blank_and_expression_comment_token__id__")]: [
          // < ( " " | "\t" | "\n" | "\r" )+ >
          [/(?:@blank)+/, { token: "" }],
          // < ("<" | "[") ("#" | "!") "--"> : EXPRESSION_COMMENT
          [/[<\[][#!]--/, { token: "comment", next: s("@expressionComment__id__") }]
        ],
        // <FM_EXPRESSION, NO_SPACE_EXPRESSION, NAMED_PARAMETER_EXPRESSION> TOKEN :
        [s("directive_end_token__id__")]: [
          // <DIRECTIVE_END : ">">
          // {
          //     if (inFTLHeader) {
          //         eatNewline();
          //         inFTLHeader = false;
          //     }
          //     if (squBracTagSyntax || postInterpolationLexState != -1 /* We are in an interpolation */) {
          //         matchedToken.kind = NATURAL_GT;
          //     } else {
          //         SwitchTo(DEFAULT);
          //     }
          // }
          // This cannot happen while in auto mode, since this applies only to an
          // fmExpression inside a directive. But once we encounter the start of a
          // directive, we can establish the tag syntax mode.
          [
            />/,
            ts.id === "bracket" ? { token: "operators" } : { token: "@brackets.directive", next: "@popall" }
          ],
          // <EMPTY_DIRECTIVE_END : "/>" | "/]">
          // It is a syntax error to end a tag with the wrong close token
          // Let's indicate that to the user by not closing the tag
          [
            r(/(\/)(@close__id__)/),
            [{ token: "delimiter.directive" }, { token: "@brackets.directive", next: "@popall" }]
          ]
        ],
        // <IN_PAREN> TOKEN :
        [s("greater_operators_token__id__")]: [
          // <NATURAL_GT : ">">
          [/>/, { token: "operators" }],
          // <NATURAL_GTE : ">=">
          [/>=/, { token: "operators" }]
        ],
        // <NO_SPACE_EXPRESSION> TOKEN :
        [s("no_space_expression_end_token__id__")]: [
          // <TERMINATING_WHITESPACE :  (["\n", "\r", "\t", " "])+> : FM_EXPRESSION
          [/(?:@blank)+/, { token: "", switchTo: s("@fmExpression__id__.directive") }]
        ],
        [s("unified_call_token__id__")]: [
          // Special case for a call where the expression is just an ID
          // <UNIFIED_CALL> <ID> <BLANK>+
          [
            /(@id)((?:@blank)+)/,
            [{ token: "tag" }, { token: "", next: s("@fmExpression__id__.directive") }]
          ],
          [
            r(/(@id)(\/?)(@close__id__)/),
            [
              { token: "tag" },
              { token: "delimiter.directive" },
              { token: "@brackets.directive", next: "@popall" }
            ]
          ],
          [/./, { token: "@rematch", next: s("@noSpaceExpression__id__") }]
        ],
        // <NO_PARSE> TOKEN :
        [s("no_parse_token__id__")]: [
          // <MAYBE_END :
          // 	 ("<" | "[")
          // 	 "/"
          // 	 ("#")?
          // 	 (["a"-"z", "A"-"Z"])+
          // 	 ( " " | "\t" | "\n" | "\r" )*
          // 	 (">" | "]")
          // >
          [
            r(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/),
            {
              cases: {
                "$S2==$3": [
                  { token: "@brackets.directive" },
                  { token: "delimiter.directive" },
                  { token: "tag" },
                  { token: "" },
                  { token: "@brackets.directive", next: "@popall" }
                ],
                "$S2==comment": [
                  { token: "comment" },
                  { token: "comment" },
                  { token: "comment" },
                  { token: "comment" },
                  { token: "comment" }
                ],
                "@default": [
                  { token: "source" },
                  { token: "source" },
                  { token: "source" },
                  { token: "source" },
                  { token: "source" }
                ]
              }
            }
          ],
          // <KEEP_GOING : (~["<", "[", "-"])+>
          // <LONE_LESS_THAN_OR_DASH : ["<", "[", "-"]>
          [
            /[^<\[\-]+|[<\[\-]/,
            {
              cases: {
                "$S2==comment": { token: "comment" },
                "@default": { token: "source" }
              }
            }
          ]
        ],
        // <EXPRESSION_COMMENT> SKIP:
        [s("expression_comment_token__id__")]: [
          // < "-->" | "--]">
          [
            /--[>\]]/,
            {
              token: "comment",
              next: "@pop"
            }
          ],
          // < (~["-", ">", "]"])+ >
          // < ">">
          // < "]">
          // < "-">
          [/[^\->\]]+|[>\]\-]/, { token: "comment" }]
        ],
        [s("terse_comment_token__id__")]: [
          //  <TERSE_COMMENT_END : "-->" | "--]">
          [r(/--(?:@close__id__)/), { token: "comment", next: "@popall" }],
          // <KEEP_GOING : (~["<", "[", "-"])+>
          // <LONE_LESS_THAN_OR_DASH : ["<", "[", "-"]>
          [/[^<\[\-]+|[<\[\-]/, { token: "comment" }]
        ]
      }
    };
  }
  function createMonarchLanguageAuto(is) {
    const angle = createMonarchLanguage(TagSyntaxAngle, is);
    const bracket = createMonarchLanguage(TagSyntaxBracket, is);
    const auto = createMonarchLanguage(TagSyntaxAuto, is);
    return {
      // Angle and bracket syntax mode
      // We switch to one of these once we have determined the mode
      ...angle,
      ...bracket,
      ...auto,
      // Settings
      unicode: true,
      includeLF: false,
      start: `default_auto_${is.id}`,
      ignoreCase: false,
      defaultToken: "invalid",
      tokenPostfix: `.freemarker2`,
      brackets: [
        { open: "{", close: "}", token: "delimiter.curly" },
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" }
      ],
      tokenizer: {
        ...angle.tokenizer,
        ...bracket.tokenizer,
        ...auto.tokenizer
      }
    };
  }
  const TagAngleInterpolationDollar = {
    conf: createLangConfiguration(TagSyntaxAngle),
    language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxDollar)
  };
  const TagBracketInterpolationDollar = {
    conf: createLangConfiguration(TagSyntaxBracket),
    language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxDollar)
  };
  const TagAngleInterpolationBracket = {
    conf: createLangConfiguration(TagSyntaxAngle),
    language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxBracket)
  };
  const TagBracketInterpolationBracket = {
    conf: createLangConfiguration(TagSyntaxBracket),
    language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxBracket)
  };
  const TagAutoInterpolationDollar = {
    conf: createLangConfigurationAuto(),
    language: createMonarchLanguageAuto(InterpolationSyntaxDollar)
  };
  const TagAutoInterpolationBracket = {
    conf: createLangConfigurationAuto(),
    language: createMonarchLanguageAuto(InterpolationSyntaxBracket)
  };
  exports.TagAngleInterpolationBracket = TagAngleInterpolationBracket;
  exports.TagAngleInterpolationDollar = TagAngleInterpolationDollar;
  exports.TagAutoInterpolationBracket = TagAutoInterpolationBracket;
  exports.TagAutoInterpolationDollar = TagAutoInterpolationDollar;
  exports.TagBracketInterpolationBracket = TagBracketInterpolationBracket;
  exports.TagBracketInterpolationDollar = TagBracketInterpolationDollar;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
