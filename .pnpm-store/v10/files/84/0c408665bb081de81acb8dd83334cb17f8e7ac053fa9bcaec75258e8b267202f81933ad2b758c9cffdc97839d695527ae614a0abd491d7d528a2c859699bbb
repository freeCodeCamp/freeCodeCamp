import { WorkerManager } from './workerManager.js';
import { CompletionAdapter, HoverAdapter, DocumentHighlightAdapter, DefinitionAdapter, ReferenceAdapter, DocumentSymbolAdapter, RenameAdapter, DocumentColorAdapter, FoldingRangeAdapter, DiagnosticsAdapter, SelectionRangeAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider } from '../common/lspLanguageFeatures.js';
export { DocumentLinkAdapter, fromPosition, fromRange, toRange, toTextEdit } from '../common/lspLanguageFeatures.js';
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

function setupMode(defaults) {
  const disposables = [];
  const providers = [];
  const client = new WorkerManager(defaults);
  disposables.push(client);
  const worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  function registerProviders() {
    const { languageId, modeConfiguration } = defaults;
    disposeAll(providers);
    if (modeConfiguration.completionItems) {
      providers.push(
        languages.registerCompletionItemProvider(
          languageId,
          new CompletionAdapter(worker, ["/", "-", ":"])
        )
      );
    }
    if (modeConfiguration.hovers) {
      providers.push(
        languages.registerHoverProvider(languageId, new HoverAdapter(worker))
      );
    }
    if (modeConfiguration.documentHighlights) {
      providers.push(
        languages.registerDocumentHighlightProvider(
          languageId,
          new DocumentHighlightAdapter(worker)
        )
      );
    }
    if (modeConfiguration.definitions) {
      providers.push(
        languages.registerDefinitionProvider(
          languageId,
          new DefinitionAdapter(worker)
        )
      );
    }
    if (modeConfiguration.references) {
      providers.push(
        languages.registerReferenceProvider(
          languageId,
          new ReferenceAdapter(worker)
        )
      );
    }
    if (modeConfiguration.documentSymbols) {
      providers.push(
        languages.registerDocumentSymbolProvider(
          languageId,
          new DocumentSymbolAdapter(worker)
        )
      );
    }
    if (modeConfiguration.rename) {
      providers.push(
        languages.registerRenameProvider(languageId, new RenameAdapter(worker))
      );
    }
    if (modeConfiguration.colors) {
      providers.push(
        languages.registerColorProvider(
          languageId,
          new DocumentColorAdapter(worker)
        )
      );
    }
    if (modeConfiguration.foldingRanges) {
      providers.push(
        languages.registerFoldingRangeProvider(
          languageId,
          new FoldingRangeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.diagnostics) {
      providers.push(
        new DiagnosticsAdapter(languageId, worker, defaults.onDidChange)
      );
    }
    if (modeConfiguration.selectionRanges) {
      providers.push(
        languages.registerSelectionRangeProvider(
          languageId,
          new SelectionRangeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.documentFormattingEdits) {
      providers.push(
        languages.registerDocumentFormattingEditProvider(
          languageId,
          new DocumentFormattingEditProvider(worker)
        )
      );
    }
    if (modeConfiguration.documentRangeFormattingEdits) {
      providers.push(
        languages.registerDocumentRangeFormattingEditProvider(
          languageId,
          new DocumentRangeFormattingEditProvider(worker)
        )
      );
    }
  }
  registerProviders();
  disposables.push(asDisposable(providers));
  return asDisposable(disposables);
}
function asDisposable(disposables) {
  return { dispose: () => disposeAll(disposables) };
}
function disposeAll(disposables) {
  while (disposables.length) {
    disposables.pop().dispose();
  }
}

export { CompletionAdapter, DefinitionAdapter, DiagnosticsAdapter, DocumentColorAdapter, DocumentFormattingEditProvider, DocumentHighlightAdapter, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, ReferenceAdapter, RenameAdapter, SelectionRangeAdapter, WorkerManager, setupMode };
