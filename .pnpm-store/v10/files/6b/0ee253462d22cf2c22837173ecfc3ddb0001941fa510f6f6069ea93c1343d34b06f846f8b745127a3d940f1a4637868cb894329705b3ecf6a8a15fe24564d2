import '../../editor/browser/coreCommands.js';
import '../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../editor/browser/widget/diffEditor/diffEditor.contribution.js';
import '../../editor/contrib/anchorSelect/browser/anchorSelect.js';
import '../../editor/contrib/bracketMatching/browser/bracketMatching.js';
import '../../editor/contrib/caretOperations/browser/caretOperations.js';
import '../../editor/contrib/caretOperations/browser/transpose.js';
import '../../editor/contrib/clipboard/browser/clipboard.js';
import '../../editor/contrib/codeAction/browser/codeActionContributions.js';
import '../../editor/contrib/codelens/browser/codelensController.js';
import '../../editor/contrib/colorPicker/browser/colorPickerContribution.js';
import '../../editor/contrib/comment/browser/comment.js';
import '../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../editor/contrib/cursorUndo/browser/cursorUndo.js';
import '../../editor/contrib/dnd/browser/dnd.js';
import '../../editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js';
import '../../editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js';
import '../../editor/contrib/find/browser/findController.js';
import '../../editor/contrib/folding/browser/folding.js';
import '../../editor/contrib/fontZoom/browser/fontZoom.js';
import '../../editor/contrib/format/browser/formatActions.js';
import '../../editor/contrib/documentSymbols/browser/documentSymbols.js';
import '../../editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js';
import '../../editor/contrib/inlineProgress/browser/inlineProgress.js';
import '../../editor/contrib/gotoSymbol/browser/goToCommands.js';
import '../../editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import '../../editor/contrib/gotoError/browser/gotoError.js';
import '../../editor/contrib/gpu/browser/gpuActions.js';
import '../../editor/contrib/hover/browser/hoverContribution.js';
import '../../editor/contrib/indentation/browser/indentation.js';
import '../../editor/contrib/inlayHints/browser/inlayHintsContribution.js';
import '../../editor/contrib/inPlaceReplace/browser/inPlaceReplace.js';
import '../../editor/contrib/insertFinalNewLine/browser/insertFinalNewLine.js';
import '../../editor/contrib/lineSelection/browser/lineSelection.js';
import '../../editor/contrib/linesOperations/browser/linesOperations.js';
import '../../editor/contrib/linkedEditing/browser/linkedEditing.js';
import '../../editor/contrib/links/browser/links.js';
import '../../editor/contrib/longLinesHelper/browser/longLinesHelper.js';
import '../../editor/contrib/middleScroll/browser/middleScroll.contribution.js';
import '../../editor/contrib/multicursor/browser/multicursor.js';
import '../../editor/contrib/parameterHints/browser/parameterHints.js';
import '../../editor/contrib/placeholderText/browser/placeholderText.contribution.js';
import '../../editor/contrib/rename/browser/rename.js';
import '../../editor/contrib/sectionHeaders/browser/sectionHeaders.js';
import '../../editor/contrib/semanticTokens/browser/documentSemanticTokens.js';
import '../../editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
import '../../editor/contrib/smartSelect/browser/smartSelect.js';
import '../../editor/contrib/snippet/browser/snippetController2.js';
import '../../editor/contrib/stickyScroll/browser/stickyScrollContribution.js';
import '../../editor/contrib/suggest/browser/suggestController.js';
import '../../editor/contrib/suggest/browser/suggestInlineCompletions.js';
import '../../editor/contrib/tokenization/browser/tokenization.js';
import '../../editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js';
import '../../editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js';
import '../../editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js';
import '../../editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import '../../editor/contrib/wordOperations/browser/wordOperations.js';
import '../../editor/contrib/wordPartOperations/browser/wordPartOperations.js';
import '../../editor/contrib/readOnlyMessage/browser/contribution.js';
import '../../editor/contrib/diffEditorBreadcrumbs/browser/contribution.js';
import '../../editor/contrib/floatingMenu/browser/floatingMenu.contribution.js';
import '../../editor/common/standaloneStrings.js';
import '../../base/browser/ui/codicons/codicon/codicon.css';
import '../../base/browser/ui/codicons/codicon/codicon-modifiers.css';
import '../../editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import '../../editor/standalone/browser/inspectTokens/inspectTokens.js';
import '../../editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import '../../editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import '../../editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import '../../editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import '../../editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
import '../../editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
import { languages } from '../../editor/editor.api2.js';

const conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  onEnterRules: [
    {
      // e.g. /** | */
      beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
      afterText: /^\s*\*\/$/,
      action: {
        indentAction: languages.IndentAction.IndentOutdent,
        appendText: " * "
      }
    },
    {
      // e.g. /** ...|
      beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
      action: {
        indentAction: languages.IndentAction.None,
        appendText: " * "
      }
    },
    {
      // e.g.  * ...|
      beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
      action: {
        indentAction: languages.IndentAction.None,
        appendText: "* "
      }
    },
    {
      // e.g.  */|
      beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
      action: {
        indentAction: languages.IndentAction.None,
        removeText: 1
      }
    }
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] },
    { open: "`", close: "`", notIn: ["string", "comment"] },
    { open: "/**", close: " */", notIn: ["string"] }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*//\\s*#?region\\b"),
      end: new RegExp("^\\s*//\\s*#?endregion\\b")
    }
  }
};
const language = {
  // Set defaultToken to invalid to see what you do not tokenize yet
  defaultToken: "invalid",
  tokenPostfix: ".ts",
  keywords: [
    // Should match the keys of textToKeywordObj in
    // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts
    "abstract",
    "any",
    "as",
    "asserts",
    "bigint",
    "boolean",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "const",
    "constructor",
    "debugger",
    "declare",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "from",
    "function",
    "get",
    "if",
    "implements",
    "import",
    "in",
    "infer",
    "instanceof",
    "interface",
    "is",
    "keyof",
    "let",
    "module",
    "namespace",
    "never",
    "new",
    "null",
    "number",
    "object",
    "out",
    "package",
    "private",
    "protected",
    "public",
    "override",
    "readonly",
    "require",
    "global",
    "return",
    "satisfies",
    "set",
    "static",
    "string",
    "super",
    "switch",
    "symbol",
    "this",
    "throw",
    "true",
    "try",
    "type",
    "typeof",
    "undefined",
    "unique",
    "unknown",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "async",
    "await",
    "of"
  ],
  operators: [
    "<=",
    ">=",
    "==",
    "!=",
    "===",
    "!==",
    "=>",
    "+",
    "-",
    "**",
    "*",
    "/",
    "%",
    "++",
    "--",
    "<<",
    "</",
    ">>",
    ">>>",
    "&",
    "|",
    "^",
    "!",
    "~",
    "&&",
    "||",
    "??",
    "?",
    ":",
    "=",
    "+=",
    "-=",
    "*=",
    "**=",
    "/=",
    "%=",
    "<<=",
    ">>=",
    ">>>=",
    "&=",
    "|=",
    "^=",
    "@"
  ],
  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+(_+\d+)*/,
  octaldigits: /[0-7]+(_+[0-7]+)*/,
  binarydigits: /[0-1]+(_+[0-1]+)*/,
  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
  regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
  regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [[/[{}]/, "delimiter.bracket"], { include: "common" }],
    common: [
      // identifiers and keywords
      [
        /#?[a-z_$][\w$]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[A-Z][\w\$]*/, "type.identifier"],
      // to show class names nicely
      // [/[A-Z][\w\$]*/, 'identifier'],
      // whitespace
      { include: "@whitespace" },
      // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
      [
        /\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
        { token: "regexp", bracket: "@open", next: "@regexp" }
      ],
      // delimiters and operators
      [/[()\[\]]/, "@brackets"],
      [/[<>](?!@symbols)/, "@brackets"],
      [/!(?=([^=]|$))/, "delimiter"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }
      ],
      // numbers
      [/(@digits)[eE]([\-+]?(@digits))?/, "number.float"],
      [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, "number.float"],
      [/0[xX](@hexdigits)n?/, "number.hex"],
      [/0[oO]?(@octaldigits)n?/, "number.octal"],
      [/0[bB](@binarydigits)n?/, "number.binary"],
      [/(@digits)n?/, "number"],
      // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"],
      // strings
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      // non-teminated string
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      // non-teminated string
      [/"/, "string", "@string_double"],
      [/'/, "string", "@string_single"],
      [/`/, "string", "@string_backtick"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\*\//, "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    jsdoc: [
      [/[^\/*]+/, "comment.doc"],
      [/\*\//, "comment.doc", "@pop"],
      [/[\/*]/, "comment.doc"]
    ],
    // We match regular expression quite precisely
    regexp: [
      [
        /(\{)(\d+(?:,\d*)?)(\})/,
        ["regexp.escape.control", "regexp.escape.control", "regexp.escape.control"]
      ],
      [
        /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
        ["regexp.escape.control", { token: "regexp.escape.control", next: "@regexrange" }]
      ],
      [/(\()(\?:|\?=|\?!)/, ["regexp.escape.control", "regexp.escape.control"]],
      [/[()]/, "regexp.escape.control"],
      [/@regexpctl/, "regexp.escape.control"],
      [/[^\\\/]/, "regexp"],
      [/@regexpesc/, "regexp.escape"],
      [/\\\./, "regexp.invalid"],
      [/(\/)([dgimsuy]*)/, [{ token: "regexp", bracket: "@close", next: "@pop" }, "keyword.other"]]
    ],
    regexrange: [
      [/-/, "regexp.escape.control"],
      [/\^/, "regexp.invalid"],
      [/@regexpesc/, "regexp.escape"],
      [/[^\]]/, "regexp"],
      [
        /\]/,
        {
          token: "regexp.escape.control",
          next: "@pop",
          bracket: "@close"
        }
      ]
    ],
    string_double: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, "string", "@pop"]
    ],
    string_single: [
      [/[^\\']+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/'/, "string", "@pop"]
    ],
    string_backtick: [
      [/\$\{/, { token: "delimiter.bracket", next: "@bracketCounting" }],
      [/[^\\`$]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/`/, "string", "@pop"]
    ],
    bracketCounting: [
      [/\{/, "delimiter.bracket", "@bracketCounting"],
      [/\}/, "delimiter.bracket", "@pop"],
      { include: "common" }
    ]
  }
};

export { conf, language };
