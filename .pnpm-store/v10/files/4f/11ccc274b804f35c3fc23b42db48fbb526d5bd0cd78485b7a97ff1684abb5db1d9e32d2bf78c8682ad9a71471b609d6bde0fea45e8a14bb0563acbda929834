import { WorkerManager } from './workerManager.js';
import { SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, DocumentHighlightAdapter, DefinitionAdapter, LibFiles, ReferenceAdapter, OutlineAdapter, RenameAdapter, FormatAdapter, FormatOnTypeAdapter, CodeActionAdaptor, InlayHintsAdapter, DiagnosticsAdapter } from './languageFeatures.js';
export { Adapter, FormatHelper, Kind, flattenDiagnosticMessageText } from './languageFeatures.js';
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

let javaScriptWorker;
let typeScriptWorker;
function setupTypeScript(defaults) {
  typeScriptWorker = setupMode(defaults, "typescript");
}
function setupJavaScript(defaults) {
  javaScriptWorker = setupMode(defaults, "javascript");
}
function getJavaScriptWorker() {
  return new Promise((resolve, reject) => {
    if (!javaScriptWorker) {
      return reject("JavaScript not registered!");
    }
    resolve(javaScriptWorker);
  });
}
function getTypeScriptWorker() {
  return new Promise((resolve, reject) => {
    if (!typeScriptWorker) {
      return reject("TypeScript not registered!");
    }
    resolve(typeScriptWorker);
  });
}
function setupMode(defaults, modeId) {
  const providers = [];
  const client = new WorkerManager(modeId, defaults);
  const worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  const libFiles = new LibFiles(worker);
  function registerProviders() {
    const { modeConfiguration } = defaults;
    disposeAll(providers);
    if (modeConfiguration.completionItems) {
      providers.push(
        languages.registerCompletionItemProvider(
          modeId,
          new SuggestAdapter(worker)
        )
      );
    }
    if (modeConfiguration.signatureHelp) {
      providers.push(
        languages.registerSignatureHelpProvider(
          modeId,
          new SignatureHelpAdapter(worker)
        )
      );
    }
    if (modeConfiguration.hovers) {
      providers.push(
        languages.registerHoverProvider(modeId, new QuickInfoAdapter(worker))
      );
    }
    if (modeConfiguration.documentHighlights) {
      providers.push(
        languages.registerDocumentHighlightProvider(
          modeId,
          new DocumentHighlightAdapter(worker)
        )
      );
    }
    if (modeConfiguration.definitions) {
      providers.push(
        languages.registerDefinitionProvider(
          modeId,
          new DefinitionAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.references) {
      providers.push(
        languages.registerReferenceProvider(
          modeId,
          new ReferenceAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.documentSymbols) {
      providers.push(
        languages.registerDocumentSymbolProvider(
          modeId,
          new OutlineAdapter(worker)
        )
      );
    }
    if (modeConfiguration.rename) {
      providers.push(
        languages.registerRenameProvider(
          modeId,
          new RenameAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.documentRangeFormattingEdits) {
      providers.push(
        languages.registerDocumentRangeFormattingEditProvider(
          modeId,
          new FormatAdapter(worker)
        )
      );
    }
    if (modeConfiguration.onTypeFormattingEdits) {
      providers.push(
        languages.registerOnTypeFormattingEditProvider(
          modeId,
          new FormatOnTypeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.codeActions) {
      providers.push(
        languages.registerCodeActionProvider(modeId, new CodeActionAdaptor(worker))
      );
    }
    if (modeConfiguration.inlayHints) {
      providers.push(
        languages.registerInlayHintsProvider(modeId, new InlayHintsAdapter(worker))
      );
    }
    if (modeConfiguration.diagnostics) {
      providers.push(new DiagnosticsAdapter(libFiles, defaults, modeId, worker));
    }
  }
  registerProviders();
  return worker;
}
function disposeAll(disposables) {
  while (disposables.length) {
    disposables.pop().dispose();
  }
}

export { CodeActionAdaptor, DefinitionAdapter, DiagnosticsAdapter, DocumentHighlightAdapter, FormatAdapter, FormatOnTypeAdapter, InlayHintsAdapter, LibFiles, OutlineAdapter, QuickInfoAdapter, ReferenceAdapter, RenameAdapter, SignatureHelpAdapter, SuggestAdapter, WorkerManager, getJavaScriptWorker, getTypeScriptWorker, setupJavaScript, setupTypeScript };
