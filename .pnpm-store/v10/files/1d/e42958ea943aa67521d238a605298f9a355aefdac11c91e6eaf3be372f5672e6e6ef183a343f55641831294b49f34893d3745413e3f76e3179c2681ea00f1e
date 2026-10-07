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
        indentAction: languages.IndentAction.IndentOutdent
      }
    },
    {
      beforeText: new RegExp(`<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      action: { indentAction: languages.IndentAction.Indent }
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

export { conf, language };
