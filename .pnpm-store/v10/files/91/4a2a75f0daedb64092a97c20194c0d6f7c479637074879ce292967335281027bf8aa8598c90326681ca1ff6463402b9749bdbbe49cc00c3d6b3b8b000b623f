define("vs/cssMode-Cakukknl", ["module", "exports", "./workers-p6mTW5Va", "./lspLanguageFeatures-BnY_dL8Y", "./editor.api-CykLys8L"], (function(module, exports, workers, lspLanguageFeatures, editor_api) {
  "use strict";
  const STOP_WHEN_IDLE_FOR = 2 * 60 * 1e3;
  class WorkerManager {
    constructor(defaults) {
      this._defaults = defaults;
      this._worker = null;
      this._client = null;
      this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3);
      this._lastUsedTime = 0;
      this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
    }
    _stopWorker() {
      if (this._worker) {
        this._worker.dispose();
        this._worker = null;
      }
      this._client = null;
    }
    dispose() {
      clearInterval(this._idleCheckInterval);
      this._configChangeListener.dispose();
      this._stopWorker();
    }
    _checkIfIdle() {
      if (!this._worker) {
        return;
      }
      let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
      if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
        this._stopWorker();
      }
    }
    _getClient() {
      this._lastUsedTime = Date.now();
      if (!this._client) {
        this._worker = workers.createWebWorker({
          // module that exports the create() method and returns a `CSSWorker` instance
          moduleId: "vs/language/css/cssWorker",
          createWorker: () => new Worker(new URL(
            /* @vite-ignore */
            "" + new URL(require.toUrl("./assets/css.worker-CgWp-mpq.js"), document.baseURI).href,
            new URL(module.uri, document.baseURI).href
          ), { type: "module" }),
          label: this._defaults.languageId,
          // passed in to the create() method
          createData: {
            options: this._defaults.options,
            languageId: this._defaults.languageId
          }
        });
        this._client = this._worker.getProxy();
      }
      return this._client;
    }
    getLanguageServiceWorker(...resources) {
      let _client;
      return this._getClient().then((client) => {
        _client = client;
      }).then((_) => {
        if (this._worker) {
          return this._worker.withSyncedResources(resources);
        }
      }).then((_) => _client);
    }
  }
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
          editor_api.languages.registerCompletionItemProvider(
            languageId,
            new lspLanguageFeatures.CompletionAdapter(worker, ["/", "-", ":"])
          )
        );
      }
      if (modeConfiguration.hovers) {
        providers.push(
          editor_api.languages.registerHoverProvider(languageId, new lspLanguageFeatures.HoverAdapter(worker))
        );
      }
      if (modeConfiguration.documentHighlights) {
        providers.push(
          editor_api.languages.registerDocumentHighlightProvider(
            languageId,
            new lspLanguageFeatures.DocumentHighlightAdapter(worker)
          )
        );
      }
      if (modeConfiguration.definitions) {
        providers.push(
          editor_api.languages.registerDefinitionProvider(
            languageId,
            new lspLanguageFeatures.DefinitionAdapter(worker)
          )
        );
      }
      if (modeConfiguration.references) {
        providers.push(
          editor_api.languages.registerReferenceProvider(
            languageId,
            new lspLanguageFeatures.ReferenceAdapter(worker)
          )
        );
      }
      if (modeConfiguration.documentSymbols) {
        providers.push(
          editor_api.languages.registerDocumentSymbolProvider(
            languageId,
            new lspLanguageFeatures.DocumentSymbolAdapter(worker)
          )
        );
      }
      if (modeConfiguration.rename) {
        providers.push(
          editor_api.languages.registerRenameProvider(languageId, new lspLanguageFeatures.RenameAdapter(worker))
        );
      }
      if (modeConfiguration.colors) {
        providers.push(
          editor_api.languages.registerColorProvider(
            languageId,
            new lspLanguageFeatures.DocumentColorAdapter(worker)
          )
        );
      }
      if (modeConfiguration.foldingRanges) {
        providers.push(
          editor_api.languages.registerFoldingRangeProvider(
            languageId,
            new lspLanguageFeatures.FoldingRangeAdapter(worker)
          )
        );
      }
      if (modeConfiguration.diagnostics) {
        providers.push(
          new lspLanguageFeatures.DiagnosticsAdapter(languageId, worker, defaults.onDidChange)
        );
      }
      if (modeConfiguration.selectionRanges) {
        providers.push(
          editor_api.languages.registerSelectionRangeProvider(
            languageId,
            new lspLanguageFeatures.SelectionRangeAdapter(worker)
          )
        );
      }
      if (modeConfiguration.documentFormattingEdits) {
        providers.push(
          editor_api.languages.registerDocumentFormattingEditProvider(
            languageId,
            new lspLanguageFeatures.DocumentFormattingEditProvider(worker)
          )
        );
      }
      if (modeConfiguration.documentRangeFormattingEdits) {
        providers.push(
          editor_api.languages.registerDocumentRangeFormattingEditProvider(
            languageId,
            new lspLanguageFeatures.DocumentRangeFormattingEditProvider(worker)
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
  exports.CompletionAdapter = lspLanguageFeatures.CompletionAdapter;
  exports.DefinitionAdapter = lspLanguageFeatures.DefinitionAdapter;
  exports.DiagnosticsAdapter = lspLanguageFeatures.DiagnosticsAdapter;
  exports.DocumentColorAdapter = lspLanguageFeatures.DocumentColorAdapter;
  exports.DocumentFormattingEditProvider = lspLanguageFeatures.DocumentFormattingEditProvider;
  exports.DocumentHighlightAdapter = lspLanguageFeatures.DocumentHighlightAdapter;
  exports.DocumentLinkAdapter = lspLanguageFeatures.DocumentLinkAdapter;
  exports.DocumentRangeFormattingEditProvider = lspLanguageFeatures.DocumentRangeFormattingEditProvider;
  exports.DocumentSymbolAdapter = lspLanguageFeatures.DocumentSymbolAdapter;
  exports.FoldingRangeAdapter = lspLanguageFeatures.FoldingRangeAdapter;
  exports.HoverAdapter = lspLanguageFeatures.HoverAdapter;
  exports.ReferenceAdapter = lspLanguageFeatures.ReferenceAdapter;
  exports.RenameAdapter = lspLanguageFeatures.RenameAdapter;
  exports.SelectionRangeAdapter = lspLanguageFeatures.SelectionRangeAdapter;
  exports.fromPosition = lspLanguageFeatures.fromPosition;
  exports.fromRange = lspLanguageFeatures.fromRange;
  exports.toRange = lspLanguageFeatures.toRange;
  exports.toTextEdit = lspLanguageFeatures.toTextEdit;
  exports.WorkerManager = WorkerManager;
  exports.setupMode = setupMode;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
