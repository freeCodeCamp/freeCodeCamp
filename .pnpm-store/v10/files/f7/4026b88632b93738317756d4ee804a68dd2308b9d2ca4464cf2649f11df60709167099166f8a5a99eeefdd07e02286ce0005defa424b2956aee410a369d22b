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
  comments: {
    blockComment: ["{/*", "*/}"]
  },
  brackets: [["{", "}"]],
  autoClosingPairs: [
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "\u201C", close: "\u201D" },
    { open: "\u2018", close: "\u2019" },
    { open: "`", close: "`" },
    { open: "{", close: "}" },
    { open: "(", close: ")" },
    { open: "_", close: "_" },
    { open: "**", close: "**" },
    { open: "<", close: ">" }
  ],
  onEnterRules: [
    {
      beforeText: /^\s*- .+/,
      action: { indentAction: languages.IndentAction.None, appendText: "- " }
    },
    {
      beforeText: /^\s*\+ .+/,
      action: { indentAction: languages.IndentAction.None, appendText: "+ " }
    },
    {
      beforeText: /^\s*\* .+/,
      action: { indentAction: languages.IndentAction.None, appendText: "* " }
    },
    {
      beforeText: /^> /,
      action: { indentAction: languages.IndentAction.None, appendText: "> " }
    },
    {
      beforeText: /<\w+/,
      action: { indentAction: languages.IndentAction.Indent }
    },
    {
      beforeText: /\s+>\s*$/,
      action: { indentAction: languages.IndentAction.Indent }
    },
    {
      beforeText: /<\/\w+>/,
      action: { indentAction: languages.IndentAction.Outdent }
    },
    ...Array.from({ length: 100 }, (_, index) => ({
      beforeText: new RegExp(`^${index}\\. .+`),
      action: { indentAction: languages.IndentAction.None, appendText: `${index + 1}. ` }
    }))
  ]
};
const language = {
  defaultToken: "",
  tokenPostfix: ".mdx",
  control: /[!#()*+.[\\\]_`{}\-]/,
  escapes: /\\@control/,
  tokenizer: {
    root: [
      [/^---$/, { token: "meta.content", next: "@frontmatter", nextEmbedded: "yaml" }],
      [/^\s*import/, { token: "keyword", next: "@import", nextEmbedded: "js" }],
      [/^\s*export/, { token: "keyword", next: "@export", nextEmbedded: "js" }],
      [/<\w+/, { token: "type.identifier", next: "@jsx" }],
      [/<\/?\w+>/, "type.identifier"],
      [
        /^(\s*)(>*\s*)(#{1,6}\s)/,
        [{ token: "white" }, { token: "comment" }, { token: "keyword", next: "@header" }]
      ],
      [/^(\s*)(>*\s*)([*+-])(\s+)/, ["white", "comment", "keyword", "white"]],
      [/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, ["white", "comment", "number", "white"]],
      [/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, ["white", "comment", "number", "white"]],
      [/^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/, ["white", "comment", "keyword"]],
      [/`{3,}(\s.*)?$/, { token: "string", next: "@codeblock_backtick" }],
      [/~{3,}(\s.*)?$/, { token: "string", next: "@codeblock_tilde" }],
      [
        /`{3,}(\S+).*$/,
        { token: "string", next: "@codeblock_highlight_backtick", nextEmbedded: "$1" }
      ],
      [
        /~{3,}(\S+).*$/,
        { token: "string", next: "@codeblock_highlight_tilde", nextEmbedded: "$1" }
      ],
      [/^(\s*)(-{4,})$/, ["white", "comment"]],
      [/^(\s*)(>+)/, ["white", "comment"]],
      { include: "content" }
    ],
    content: [
      [
        /(\[)(.+)(]\()(.+)(\s+".*")(\))/,
        ["", "string.link", "", "type.identifier", "string.link", ""]
      ],
      [/(\[)(.+)(]\()(.+)(\))/, ["", "type.identifier", "", "string.link", ""]],
      [/(\[)(.+)(]\[)(.+)(])/, ["", "type.identifier", "", "type.identifier", ""]],
      [/(\[)(.+)(]:\s+)(\S*)/, ["", "type.identifier", "", "string.link"]],
      [/(\[)(.+)(])/, ["", "type.identifier", ""]],
      [/`.*`/, "variable.source"],
      [/_/, { token: "emphasis", next: "@emphasis_underscore" }],
      [/\*(?!\*)/, { token: "emphasis", next: "@emphasis_asterisk" }],
      [/\*\*/, { token: "strong", next: "@strong" }],
      [/{/, { token: "delimiter.bracket", next: "@expression", nextEmbedded: "js" }]
    ],
    import: [[/'\s*(;|$)/, { token: "string", next: "@pop", nextEmbedded: "@pop" }]],
    expression: [
      [/{/, { token: "delimiter.bracket", next: "@expression" }],
      [/}/, { token: "delimiter.bracket", next: "@pop", nextEmbedded: "@pop" }]
    ],
    export: [[/^\s*$/, { token: "delimiter.bracket", next: "@pop", nextEmbedded: "@pop" }]],
    jsx: [
      [/\s+/, ""],
      [/(\w+)(=)("(?:[^"\\]|\\.)*")/, ["attribute.name", "operator", "string"]],
      [/(\w+)(=)('(?:[^'\\]|\\.)*')/, ["attribute.name", "operator", "string"]],
      [/(\w+(?=\s|>|={|$))/, ["attribute.name"]],
      [/={/, { token: "delimiter.bracket", next: "@expression", nextEmbedded: "js" }],
      [/>/, { token: "type.identifier", next: "@pop" }]
    ],
    header: [
      [/.$/, { token: "keyword", next: "@pop" }],
      { include: "content" },
      [/./, { token: "keyword" }]
    ],
    strong: [
      [/\*\*/, { token: "strong", next: "@pop" }],
      { include: "content" },
      [/./, { token: "strong" }]
    ],
    emphasis_underscore: [
      [/_/, { token: "emphasis", next: "@pop" }],
      { include: "content" },
      [/./, { token: "emphasis" }]
    ],
    emphasis_asterisk: [
      [/\*(?!\*)/, { token: "emphasis", next: "@pop" }],
      { include: "content" },
      [/./, { token: "emphasis" }]
    ],
    frontmatter: [[/^---$/, { token: "meta.content", nextEmbedded: "@pop", next: "@pop" }]],
    codeblock_highlight_backtick: [
      [/\s*`{3,}\s*$/, { token: "string", next: "@pop", nextEmbedded: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_highlight_tilde: [
      [/\s*~{3,}\s*$/, { token: "string", next: "@pop", nextEmbedded: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_backtick: [
      [/\s*`{3,}\s*$/, { token: "string", next: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_tilde: [
      [/\s*~{3,}\s*$/, { token: "string", next: "@pop" }],
      [/.*$/, "variable.source"]
    ]
  }
};

export { conf, language };
