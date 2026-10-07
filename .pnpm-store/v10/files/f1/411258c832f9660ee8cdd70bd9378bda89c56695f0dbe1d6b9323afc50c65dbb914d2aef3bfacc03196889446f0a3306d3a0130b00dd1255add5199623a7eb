import '../editor/browser/coreCommands.js';
import '../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../editor/browser/widget/diffEditor/diffEditor.contribution.js';
import '../editor/contrib/anchorSelect/browser/anchorSelect.js';
import '../editor/contrib/bracketMatching/browser/bracketMatching.js';
import '../editor/contrib/caretOperations/browser/caretOperations.js';
import '../editor/contrib/caretOperations/browser/transpose.js';
import '../editor/contrib/clipboard/browser/clipboard.js';
import '../editor/contrib/codeAction/browser/codeActionContributions.js';
import '../editor/contrib/codelens/browser/codelensController.js';
import '../editor/contrib/colorPicker/browser/colorPickerContribution.js';
import '../editor/contrib/comment/browser/comment.js';
import '../editor/contrib/contextmenu/browser/contextmenu.js';
import '../editor/contrib/cursorUndo/browser/cursorUndo.js';
import '../editor/contrib/dnd/browser/dnd.js';
import '../editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js';
import '../editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js';
import '../editor/contrib/find/browser/findController.js';
import '../editor/contrib/folding/browser/folding.js';
import '../editor/contrib/fontZoom/browser/fontZoom.js';
import '../editor/contrib/format/browser/formatActions.js';
import '../editor/contrib/documentSymbols/browser/documentSymbols.js';
import '../editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js';
import '../editor/contrib/inlineProgress/browser/inlineProgress.js';
import '../editor/contrib/gotoSymbol/browser/goToCommands.js';
import '../editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import '../editor/contrib/gotoError/browser/gotoError.js';
import '../editor/contrib/gpu/browser/gpuActions.js';
import '../editor/contrib/hover/browser/hoverContribution.js';
import '../editor/contrib/indentation/browser/indentation.js';
import '../editor/contrib/inlayHints/browser/inlayHintsContribution.js';
import '../editor/contrib/inPlaceReplace/browser/inPlaceReplace.js';
import '../editor/contrib/insertFinalNewLine/browser/insertFinalNewLine.js';
import '../editor/contrib/lineSelection/browser/lineSelection.js';
import '../editor/contrib/linesOperations/browser/linesOperations.js';
import '../editor/contrib/linkedEditing/browser/linkedEditing.js';
import '../editor/contrib/links/browser/links.js';
import '../editor/contrib/longLinesHelper/browser/longLinesHelper.js';
import '../editor/contrib/middleScroll/browser/middleScroll.contribution.js';
import '../editor/contrib/multicursor/browser/multicursor.js';
import '../editor/contrib/parameterHints/browser/parameterHints.js';
import '../editor/contrib/placeholderText/browser/placeholderText.contribution.js';
import '../editor/contrib/rename/browser/rename.js';
import '../editor/contrib/sectionHeaders/browser/sectionHeaders.js';
import '../editor/contrib/semanticTokens/browser/documentSemanticTokens.js';
import '../editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
import '../editor/contrib/smartSelect/browser/smartSelect.js';
import '../editor/contrib/snippet/browser/snippetController2.js';
import '../editor/contrib/stickyScroll/browser/stickyScrollContribution.js';
import '../editor/contrib/suggest/browser/suggestController.js';
import '../editor/contrib/suggest/browser/suggestInlineCompletions.js';
import '../editor/contrib/tokenization/browser/tokenization.js';
import '../editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js';
import '../editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js';
import '../editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js';
import '../editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import '../editor/contrib/wordOperations/browser/wordOperations.js';
import '../editor/contrib/wordPartOperations/browser/wordPartOperations.js';
import '../editor/contrib/readOnlyMessage/browser/contribution.js';
import '../editor/contrib/diffEditorBreadcrumbs/browser/contribution.js';
import '../editor/contrib/floatingMenu/browser/floatingMenu.contribution.js';
import '../editor/common/standaloneStrings.js';
import '../base/browser/ui/codicons/codicon/codicon.css';
import '../base/browser/ui/codicons/codicon/codicon-modifiers.css';
import '../editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import '../editor/standalone/browser/inspectTokens/inspectTokens.js';
import '../editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import '../editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import '../editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import '../editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import '../editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
import '../editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
import { languages } from '../editor/editor.api2.js';

const languageDefinitions = {};
const lazyLanguageLoaders = {};
class LazyLanguageLoader {
  static getOrCreate(languageId) {
    if (!lazyLanguageLoaders[languageId]) {
      lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
    }
    return lazyLanguageLoaders[languageId];
  }
  constructor(languageId) {
    this._languageId = languageId;
    this._loadingTriggered = false;
    this._lazyLoadPromise = new Promise((resolve, reject) => {
      this._lazyLoadPromiseResolve = resolve;
      this._lazyLoadPromiseReject = reject;
    });
  }
  load() {
    if (!this._loadingTriggered) {
      this._loadingTriggered = true;
      languageDefinitions[this._languageId].loader().then(
        (mod) => this._lazyLoadPromiseResolve(mod),
        (err) => this._lazyLoadPromiseReject(err)
      );
    }
    return this._lazyLoadPromise;
  }
}
function registerLanguage(def) {
  const languageId = def.id;
  languageDefinitions[languageId] = def;
  languages.register(def);
  const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);
  languages.registerTokensProviderFactory(languageId, {
    create: async () => {
      const mod = await lazyLanguageLoader.load();
      return mod.language;
    }
  });
  languages.onLanguageEncountered(languageId, async () => {
    const mod = await lazyLanguageLoader.load();
    languages.setLanguageConfiguration(languageId, mod.conf);
  });
}

export { registerLanguage };
