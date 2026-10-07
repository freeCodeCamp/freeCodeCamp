define("vs/tsMode-CYrPzhIX", ["module", "exports", "./editor.api-CykLys8L", "./workers-p6mTW5Va", "./monaco.contribution-YfYcxPkX"], (function(module, exports, editor_api, workers, language_typescript_monaco_contribution) {
  "use strict";
  class WorkerManager {
    constructor(_modeId, _defaults) {
      this._modeId = _modeId;
      this._defaults = _defaults;
      this._worker = null;
      this._client = null;
      this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
      this._updateExtraLibsToken = 0;
      this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(
        () => this._updateExtraLibs()
      );
    }
    dispose() {
      this._configChangeListener.dispose();
      this._extraLibsChangeListener.dispose();
      this._stopWorker();
    }
    _stopWorker() {
      if (this._worker) {
        this._worker.dispose();
        this._worker = null;
      }
      this._client = null;
    }
    async _updateExtraLibs() {
      if (!this._worker) {
        return;
      }
      const myToken = ++this._updateExtraLibsToken;
      const proxy = await this._worker.getProxy();
      if (this._updateExtraLibsToken !== myToken) {
        return;
      }
      proxy.updateExtraLibs(this._defaults.getExtraLibs());
    }
    _getClient() {
      if (!this._client) {
        this._client = (async () => {
          this._worker = workers.createWebWorker({
            // module that exports the create() method and returns a `TypeScriptWorker` instance
            moduleId: "vs/language/typescript/tsWorker",
            createWorker: () => new Worker(new URL(
              /* @vite-ignore */
              "" + new URL(require.toUrl("./assets/ts.worker-ClNbeHrN.js"), document.baseURI).href,
              new URL(module.uri, document.baseURI).href
            ), { type: "module" }),
            label: this._modeId,
            keepIdleModels: true,
            // passed in to the create() method
            createData: {
              compilerOptions: this._defaults.getCompilerOptions(),
              extraLibs: this._defaults.getExtraLibs(),
              customWorkerPath: this._defaults.workerOptions.customWorkerPath,
              inlayHintsOptions: this._defaults.inlayHintsOptions
            }
          });
          if (this._defaults.getEagerModelSync()) {
            return await this._worker.withSyncedResources(
              editor_api.editor.getModels().filter((model) => model.getLanguageId() === this._modeId).map((model) => model.uri)
            );
          }
          return await this._worker.getProxy();
        })();
      }
      return this._client;
    }
    async getLanguageServiceWorker(...resources) {
      const client = await this._getClient();
      if (this._worker) {
        await this._worker.withSyncedResources(resources);
      }
      return client;
    }
  }
  const libFileSet = {};
  libFileSet["lib.d.ts"] = true;
  libFileSet["lib.decorators.d.ts"] = true;
  libFileSet["lib.decorators.legacy.d.ts"] = true;
  libFileSet["lib.dom.asynciterable.d.ts"] = true;
  libFileSet["lib.dom.d.ts"] = true;
  libFileSet["lib.dom.iterable.d.ts"] = true;
  libFileSet["lib.es2015.collection.d.ts"] = true;
  libFileSet["lib.es2015.core.d.ts"] = true;
  libFileSet["lib.es2015.d.ts"] = true;
  libFileSet["lib.es2015.generator.d.ts"] = true;
  libFileSet["lib.es2015.iterable.d.ts"] = true;
  libFileSet["lib.es2015.promise.d.ts"] = true;
  libFileSet["lib.es2015.proxy.d.ts"] = true;
  libFileSet["lib.es2015.reflect.d.ts"] = true;
  libFileSet["lib.es2015.symbol.d.ts"] = true;
  libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
  libFileSet["lib.es2016.array.include.d.ts"] = true;
  libFileSet["lib.es2016.d.ts"] = true;
  libFileSet["lib.es2016.full.d.ts"] = true;
  libFileSet["lib.es2016.intl.d.ts"] = true;
  libFileSet["lib.es2017.arraybuffer.d.ts"] = true;
  libFileSet["lib.es2017.d.ts"] = true;
  libFileSet["lib.es2017.date.d.ts"] = true;
  libFileSet["lib.es2017.full.d.ts"] = true;
  libFileSet["lib.es2017.intl.d.ts"] = true;
  libFileSet["lib.es2017.object.d.ts"] = true;
  libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
  libFileSet["lib.es2017.string.d.ts"] = true;
  libFileSet["lib.es2017.typedarrays.d.ts"] = true;
  libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
  libFileSet["lib.es2018.asynciterable.d.ts"] = true;
  libFileSet["lib.es2018.d.ts"] = true;
  libFileSet["lib.es2018.full.d.ts"] = true;
  libFileSet["lib.es2018.intl.d.ts"] = true;
  libFileSet["lib.es2018.promise.d.ts"] = true;
  libFileSet["lib.es2018.regexp.d.ts"] = true;
  libFileSet["lib.es2019.array.d.ts"] = true;
  libFileSet["lib.es2019.d.ts"] = true;
  libFileSet["lib.es2019.full.d.ts"] = true;
  libFileSet["lib.es2019.intl.d.ts"] = true;
  libFileSet["lib.es2019.object.d.ts"] = true;
  libFileSet["lib.es2019.string.d.ts"] = true;
  libFileSet["lib.es2019.symbol.d.ts"] = true;
  libFileSet["lib.es2020.bigint.d.ts"] = true;
  libFileSet["lib.es2020.d.ts"] = true;
  libFileSet["lib.es2020.date.d.ts"] = true;
  libFileSet["lib.es2020.full.d.ts"] = true;
  libFileSet["lib.es2020.intl.d.ts"] = true;
  libFileSet["lib.es2020.number.d.ts"] = true;
  libFileSet["lib.es2020.promise.d.ts"] = true;
  libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
  libFileSet["lib.es2020.string.d.ts"] = true;
  libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
  libFileSet["lib.es2021.d.ts"] = true;
  libFileSet["lib.es2021.full.d.ts"] = true;
  libFileSet["lib.es2021.intl.d.ts"] = true;
  libFileSet["lib.es2021.promise.d.ts"] = true;
  libFileSet["lib.es2021.string.d.ts"] = true;
  libFileSet["lib.es2021.weakref.d.ts"] = true;
  libFileSet["lib.es2022.array.d.ts"] = true;
  libFileSet["lib.es2022.d.ts"] = true;
  libFileSet["lib.es2022.error.d.ts"] = true;
  libFileSet["lib.es2022.full.d.ts"] = true;
  libFileSet["lib.es2022.intl.d.ts"] = true;
  libFileSet["lib.es2022.object.d.ts"] = true;
  libFileSet["lib.es2022.regexp.d.ts"] = true;
  libFileSet["lib.es2022.string.d.ts"] = true;
  libFileSet["lib.es2023.array.d.ts"] = true;
  libFileSet["lib.es2023.collection.d.ts"] = true;
  libFileSet["lib.es2023.d.ts"] = true;
  libFileSet["lib.es2023.full.d.ts"] = true;
  libFileSet["lib.es2023.intl.d.ts"] = true;
  libFileSet["lib.es2024.arraybuffer.d.ts"] = true;
  libFileSet["lib.es2024.collection.d.ts"] = true;
  libFileSet["lib.es2024.d.ts"] = true;
  libFileSet["lib.es2024.full.d.ts"] = true;
  libFileSet["lib.es2024.object.d.ts"] = true;
  libFileSet["lib.es2024.promise.d.ts"] = true;
  libFileSet["lib.es2024.regexp.d.ts"] = true;
  libFileSet["lib.es2024.sharedmemory.d.ts"] = true;
  libFileSet["lib.es2024.string.d.ts"] = true;
  libFileSet["lib.es5.d.ts"] = true;
  libFileSet["lib.es6.d.ts"] = true;
  libFileSet["lib.esnext.array.d.ts"] = true;
  libFileSet["lib.esnext.collection.d.ts"] = true;
  libFileSet["lib.esnext.d.ts"] = true;
  libFileSet["lib.esnext.decorators.d.ts"] = true;
  libFileSet["lib.esnext.disposable.d.ts"] = true;
  libFileSet["lib.esnext.error.d.ts"] = true;
  libFileSet["lib.esnext.float16.d.ts"] = true;
  libFileSet["lib.esnext.full.d.ts"] = true;
  libFileSet["lib.esnext.intl.d.ts"] = true;
  libFileSet["lib.esnext.iterator.d.ts"] = true;
  libFileSet["lib.esnext.promise.d.ts"] = true;
  libFileSet["lib.esnext.sharedmemory.d.ts"] = true;
  libFileSet["lib.scripthost.d.ts"] = true;
  libFileSet["lib.webworker.asynciterable.d.ts"] = true;
  libFileSet["lib.webworker.d.ts"] = true;
  libFileSet["lib.webworker.importscripts.d.ts"] = true;
  libFileSet["lib.webworker.iterable.d.ts"] = true;
  function flattenDiagnosticMessageText(diag, newLine, indent = 0) {
    if (typeof diag === "string") {
      return diag;
    } else if (diag === void 0) {
      return "";
    }
    let result = "";
    if (indent) {
      result += newLine;
      for (let i = 0; i < indent; i++) {
        result += "  ";
      }
    }
    result += diag.messageText;
    indent++;
    if (diag.next) {
      for (const kid of diag.next) {
        result += flattenDiagnosticMessageText(kid, newLine, indent);
      }
    }
    return result;
  }
  function displayPartsToString(displayParts) {
    if (displayParts) {
      return displayParts.map((displayPart) => displayPart.text).join("");
    }
    return "";
  }
  class Adapter {
    constructor(_worker) {
      this._worker = _worker;
    }
    // protected _positionToOffset(model: editor.ITextModel, position: monaco.IPosition): number {
    // 	return model.getOffsetAt(position);
    // }
    // protected _offsetToPosition(model: editor.ITextModel, offset: number): monaco.IPosition {
    // 	return model.getPositionAt(offset);
    // }
    _textSpanToRange(model, span) {
      let p1 = model.getPositionAt(span.start);
      let p2 = model.getPositionAt(span.start + span.length);
      let { lineNumber: startLineNumber, column: startColumn } = p1;
      let { lineNumber: endLineNumber, column: endColumn } = p2;
      return { startLineNumber, startColumn, endLineNumber, endColumn };
    }
  }
  class LibFiles {
    constructor(_worker) {
      this._worker = _worker;
      this._libFiles = {};
      this._hasFetchedLibFiles = false;
      this._fetchLibFilesPromise = null;
    }
    isLibFile(uri) {
      if (!uri) {
        return false;
      }
      if (uri.path.indexOf("/lib.") === 0) {
        return !!libFileSet[uri.path.slice(1)];
      }
      return false;
    }
    getOrCreateModel(fileName) {
      const uri = editor_api.Uri.parse(fileName);
      const model = editor_api.editor.getModel(uri);
      if (model) {
        return model;
      }
      if (this.isLibFile(uri) && this._hasFetchedLibFiles) {
        return editor_api.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
      }
      const matchedLibFile = language_typescript_monaco_contribution.typescriptDefaults.getExtraLibs()[fileName];
      if (matchedLibFile) {
        return editor_api.editor.createModel(matchedLibFile.content, "typescript", uri);
      }
      return null;
    }
    _containsLibFile(uris) {
      for (let uri of uris) {
        if (this.isLibFile(uri)) {
          return true;
        }
      }
      return false;
    }
    async fetchLibFilesIfNecessary(uris) {
      if (!this._containsLibFile(uris)) {
        return;
      }
      await this._fetchLibFiles();
    }
    _fetchLibFiles() {
      if (!this._fetchLibFilesPromise) {
        this._fetchLibFilesPromise = this._worker().then((w) => w.getLibFiles()).then((libFiles) => {
          this._hasFetchedLibFiles = true;
          this._libFiles = libFiles;
        });
      }
      return this._fetchLibFilesPromise;
    }
  }
  class DiagnosticsAdapter extends Adapter {
    constructor(_libFiles, _defaults, _selector, worker) {
      super(worker);
      this._libFiles = _libFiles;
      this._defaults = _defaults;
      this._selector = _selector;
      this._disposables = [];
      this._listener = /* @__PURE__ */ Object.create(null);
      const onModelAdd = (model) => {
        if (model.getLanguageId() !== _selector) {
          return;
        }
        const maybeValidate = () => {
          const { onlyVisible } = this._defaults.getDiagnosticsOptions();
          if (onlyVisible) {
            if (model.isAttachedToEditor()) {
              this._doValidate(model);
            }
          } else {
            this._doValidate(model);
          }
        };
        let handle;
        const changeSubscription = model.onDidChangeContent(() => {
          clearTimeout(handle);
          handle = window.setTimeout(maybeValidate, 500);
        });
        const visibleSubscription = model.onDidChangeAttached(() => {
          const { onlyVisible } = this._defaults.getDiagnosticsOptions();
          if (onlyVisible) {
            if (model.isAttachedToEditor()) {
              maybeValidate();
            } else {
              editor_api.editor.setModelMarkers(model, this._selector, []);
            }
          }
        });
        this._listener[model.uri.toString()] = {
          dispose() {
            changeSubscription.dispose();
            visibleSubscription.dispose();
            clearTimeout(handle);
          }
        };
        maybeValidate();
      };
      const onModelRemoved = (model) => {
        editor_api.editor.setModelMarkers(model, this._selector, []);
        const key = model.uri.toString();
        if (this._listener[key]) {
          this._listener[key].dispose();
          delete this._listener[key];
        }
      };
      this._disposables.push(
        editor_api.editor.onDidCreateModel((model) => onModelAdd(model))
      );
      this._disposables.push(editor_api.editor.onWillDisposeModel(onModelRemoved));
      this._disposables.push(
        editor_api.editor.onDidChangeModelLanguage((event) => {
          onModelRemoved(event.model);
          onModelAdd(event.model);
        })
      );
      this._disposables.push({
        dispose() {
          for (const model of editor_api.editor.getModels()) {
            onModelRemoved(model);
          }
        }
      });
      const recomputeDiagostics = () => {
        for (const model of editor_api.editor.getModels()) {
          onModelRemoved(model);
          onModelAdd(model);
        }
      };
      this._disposables.push(this._defaults.onDidChange(recomputeDiagostics));
      this._disposables.push(this._defaults.onDidExtraLibsChange(recomputeDiagostics));
      editor_api.editor.getModels().forEach((model) => onModelAdd(model));
    }
    dispose() {
      this._disposables.forEach((d) => d && d.dispose());
      this._disposables = [];
    }
    async _doValidate(model) {
      const worker = await this._worker(model.uri);
      if (model.isDisposed()) {
        return;
      }
      const promises = [];
      const { noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics } = this._defaults.getDiagnosticsOptions();
      if (!noSyntaxValidation) {
        promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
      }
      if (!noSemanticValidation) {
        promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
      }
      if (!noSuggestionDiagnostics) {
        promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
      }
      const allDiagnostics = await Promise.all(promises);
      if (!allDiagnostics || model.isDisposed()) {
        return;
      }
      const diagnostics = allDiagnostics.reduce((p, c) => c.concat(p), []).filter(
        (d) => (this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1
      );
      const relatedUris = diagnostics.map((d) => d.relatedInformation || []).reduce((p, c) => c.concat(p), []).map(
        (relatedInformation) => relatedInformation.file ? editor_api.Uri.parse(relatedInformation.file.fileName) : null
      );
      await this._libFiles.fetchLibFilesIfNecessary(relatedUris);
      if (model.isDisposed()) {
        return;
      }
      editor_api.editor.setModelMarkers(
        model,
        this._selector,
        diagnostics.map((d) => this._convertDiagnostics(model, d))
      );
    }
    _convertDiagnostics(model, diag) {
      const diagStart = diag.start || 0;
      const diagLength = diag.length || 1;
      const { lineNumber: startLineNumber, column: startColumn } = model.getPositionAt(diagStart);
      const { lineNumber: endLineNumber, column: endColumn } = model.getPositionAt(
        diagStart + diagLength
      );
      const tags = [];
      if (diag.reportsUnnecessary) {
        tags.push(editor_api.MarkerTag.Unnecessary);
      }
      if (diag.reportsDeprecated) {
        tags.push(editor_api.MarkerTag.Deprecated);
      }
      return {
        severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
        startLineNumber,
        startColumn,
        endLineNumber,
        endColumn,
        message: flattenDiagnosticMessageText(diag.messageText, "\n"),
        code: diag.code.toString(),
        tags,
        relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
      };
    }
    _convertRelatedInformation(model, relatedInformation) {
      if (!relatedInformation) {
        return [];
      }
      const result = [];
      relatedInformation.forEach((info) => {
        let relatedResource = model;
        if (info.file) {
          relatedResource = this._libFiles.getOrCreateModel(info.file.fileName);
        }
        if (!relatedResource) {
          return;
        }
        const infoStart = info.start || 0;
        const infoLength = info.length || 1;
        const { lineNumber: startLineNumber, column: startColumn } = relatedResource.getPositionAt(infoStart);
        const { lineNumber: endLineNumber, column: endColumn } = relatedResource.getPositionAt(
          infoStart + infoLength
        );
        result.push({
          resource: relatedResource.uri,
          startLineNumber,
          startColumn,
          endLineNumber,
          endColumn,
          message: flattenDiagnosticMessageText(info.messageText, "\n")
        });
      });
      return result;
    }
    _tsDiagnosticCategoryToMarkerSeverity(category) {
      switch (category) {
        case 1:
          return editor_api.MarkerSeverity.Error;
        case 3:
          return editor_api.MarkerSeverity.Info;
        case 0:
          return editor_api.MarkerSeverity.Warning;
        case 2:
          return editor_api.MarkerSeverity.Hint;
      }
      return editor_api.MarkerSeverity.Info;
    }
  }
  class SuggestAdapter extends Adapter {
    get triggerCharacters() {
      return ["."];
    }
    async provideCompletionItems(model, position, _context, token) {
      const wordInfo = model.getWordUntilPosition(position);
      const wordRange = new editor_api.Range(
        position.lineNumber,
        wordInfo.startColumn,
        position.lineNumber,
        wordInfo.endColumn
      );
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const info = await worker.getCompletionsAtPosition(resource.toString(), offset);
      if (!info || model.isDisposed()) {
        return;
      }
      const suggestions = info.entries.map((entry) => {
        let range = wordRange;
        if (entry.replacementSpan) {
          const p1 = model.getPositionAt(entry.replacementSpan.start);
          const p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
          range = new editor_api.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
        }
        const tags = [];
        if (entry.kindModifiers !== void 0 && entry.kindModifiers.indexOf("deprecated") !== -1) {
          tags.push(editor_api.languages.CompletionItemTag.Deprecated);
        }
        return {
          uri: resource,
          position,
          offset,
          range,
          label: entry.name,
          insertText: entry.name,
          sortText: entry.sortText,
          kind: SuggestAdapter.convertKind(entry.kind),
          tags
        };
      });
      return {
        suggestions
      };
    }
    async resolveCompletionItem(item, token) {
      const myItem = item;
      const resource = myItem.uri;
      const position = myItem.position;
      const offset = myItem.offset;
      const worker = await this._worker(resource);
      const details = await worker.getCompletionEntryDetails(
        resource.toString(),
        offset,
        myItem.label
      );
      if (!details) {
        return myItem;
      }
      return {
        uri: resource,
        position,
        label: details.name,
        kind: SuggestAdapter.convertKind(details.kind),
        detail: displayPartsToString(details.displayParts),
        documentation: {
          value: SuggestAdapter.createDocumentationString(details)
        }
      };
    }
    static convertKind(kind) {
      switch (kind) {
        case Kind.primitiveType:
        case Kind.keyword:
          return editor_api.languages.CompletionItemKind.Keyword;
        case Kind.variable:
        case Kind.localVariable:
          return editor_api.languages.CompletionItemKind.Variable;
        case Kind.memberVariable:
        case Kind.memberGetAccessor:
        case Kind.memberSetAccessor:
          return editor_api.languages.CompletionItemKind.Field;
        case Kind.function:
        case Kind.memberFunction:
        case Kind.constructSignature:
        case Kind.callSignature:
        case Kind.indexSignature:
          return editor_api.languages.CompletionItemKind.Function;
        case Kind.enum:
          return editor_api.languages.CompletionItemKind.Enum;
        case Kind.module:
          return editor_api.languages.CompletionItemKind.Module;
        case Kind.class:
          return editor_api.languages.CompletionItemKind.Class;
        case Kind.interface:
          return editor_api.languages.CompletionItemKind.Interface;
        case Kind.warning:
          return editor_api.languages.CompletionItemKind.File;
      }
      return editor_api.languages.CompletionItemKind.Property;
    }
    static createDocumentationString(details) {
      let documentationString = displayPartsToString(details.documentation);
      if (details.tags) {
        for (const tag of details.tags) {
          documentationString += `

${tagToString(tag)}`;
        }
      }
      return documentationString;
    }
  }
  function tagToString(tag) {
    let tagLabel = `*@${tag.name}*`;
    if (tag.name === "param" && tag.text) {
      const [paramName, ...rest] = tag.text;
      tagLabel += `\`${paramName.text}\``;
      if (rest.length > 0) tagLabel += ` — ${rest.map((r) => r.text).join(" ")}`;
    } else if (Array.isArray(tag.text)) {
      tagLabel += ` — ${tag.text.map((r) => r.text).join(" ")}`;
    } else if (tag.text) {
      tagLabel += ` — ${tag.text}`;
    }
    return tagLabel;
  }
  class SignatureHelpAdapter extends Adapter {
    constructor() {
      super(...arguments);
      this.signatureHelpTriggerCharacters = ["(", ","];
    }
    static _toSignatureHelpTriggerReason(context) {
      switch (context.triggerKind) {
        case editor_api.languages.SignatureHelpTriggerKind.TriggerCharacter:
          if (context.triggerCharacter) {
            if (context.isRetrigger) {
              return { kind: "retrigger", triggerCharacter: context.triggerCharacter };
            } else {
              return { kind: "characterTyped", triggerCharacter: context.triggerCharacter };
            }
          } else {
            return { kind: "invoked" };
          }
        case editor_api.languages.SignatureHelpTriggerKind.ContentChange:
          return context.isRetrigger ? { kind: "retrigger" } : { kind: "invoked" };
        case editor_api.languages.SignatureHelpTriggerKind.Invoke:
        default:
          return { kind: "invoked" };
      }
    }
    async provideSignatureHelp(model, position, token, context) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const info = await worker.getSignatureHelpItems(resource.toString(), offset, {
        triggerReason: SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
      });
      if (!info || model.isDisposed()) {
        return;
      }
      const ret = {
        activeSignature: info.selectedItemIndex,
        activeParameter: info.argumentIndex,
        signatures: []
      };
      info.items.forEach((item) => {
        const signature = {
          label: "",
          parameters: []
        };
        signature.documentation = {
          value: displayPartsToString(item.documentation)
        };
        signature.label += displayPartsToString(item.prefixDisplayParts);
        item.parameters.forEach((p, i, a) => {
          const label = displayPartsToString(p.displayParts);
          const parameter = {
            label,
            documentation: {
              value: displayPartsToString(p.documentation)
            }
          };
          signature.label += label;
          signature.parameters.push(parameter);
          if (i < a.length - 1) {
            signature.label += displayPartsToString(item.separatorDisplayParts);
          }
        });
        signature.label += displayPartsToString(item.suffixDisplayParts);
        ret.signatures.push(signature);
      });
      return {
        value: ret,
        dispose() {
        }
      };
    }
  }
  class QuickInfoAdapter extends Adapter {
    async provideHover(model, position, token) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const info = await worker.getQuickInfoAtPosition(resource.toString(), offset);
      if (!info || model.isDisposed()) {
        return;
      }
      const documentation = displayPartsToString(info.documentation);
      const tags = info.tags ? info.tags.map((tag) => tagToString(tag)).join("  \n\n") : "";
      const contents = displayPartsToString(info.displayParts);
      return {
        range: this._textSpanToRange(model, info.textSpan),
        contents: [
          {
            value: "```typescript\n" + contents + "\n```\n"
          },
          {
            value: documentation + (tags ? "\n\n" + tags : "")
          }
        ]
      };
    }
  }
  class DocumentHighlightAdapter extends Adapter {
    async provideDocumentHighlights(model, position, token) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const entries = await worker.getDocumentHighlights(resource.toString(), offset, [
        resource.toString()
      ]);
      if (!entries || model.isDisposed()) {
        return;
      }
      return entries.flatMap((entry) => {
        return entry.highlightSpans.map((highlightSpans) => {
          return {
            range: this._textSpanToRange(model, highlightSpans.textSpan),
            kind: highlightSpans.kind === "writtenReference" ? editor_api.languages.DocumentHighlightKind.Write : editor_api.languages.DocumentHighlightKind.Text
          };
        });
      });
    }
  }
  class DefinitionAdapter extends Adapter {
    constructor(_libFiles, worker) {
      super(worker);
      this._libFiles = _libFiles;
    }
    async provideDefinition(model, position, token) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const entries = await worker.getDefinitionAtPosition(resource.toString(), offset);
      if (!entries || model.isDisposed()) {
        return;
      }
      await this._libFiles.fetchLibFilesIfNecessary(
        entries.map((entry) => editor_api.Uri.parse(entry.fileName))
      );
      if (model.isDisposed()) {
        return;
      }
      const result = [];
      for (let entry of entries) {
        const refModel = this._libFiles.getOrCreateModel(entry.fileName);
        if (refModel) {
          result.push({
            uri: refModel.uri,
            range: this._textSpanToRange(refModel, entry.textSpan)
          });
        }
      }
      return result;
    }
  }
  class ReferenceAdapter extends Adapter {
    constructor(_libFiles, worker) {
      super(worker);
      this._libFiles = _libFiles;
    }
    async provideReferences(model, position, context, token) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const entries = await worker.getReferencesAtPosition(resource.toString(), offset);
      if (!entries || model.isDisposed()) {
        return;
      }
      await this._libFiles.fetchLibFilesIfNecessary(
        entries.map((entry) => editor_api.Uri.parse(entry.fileName))
      );
      if (model.isDisposed()) {
        return;
      }
      const result = [];
      for (let entry of entries) {
        const refModel = this._libFiles.getOrCreateModel(entry.fileName);
        if (refModel) {
          result.push({
            uri: refModel.uri,
            range: this._textSpanToRange(refModel, entry.textSpan)
          });
        }
      }
      return result;
    }
  }
  class OutlineAdapter extends Adapter {
    async provideDocumentSymbols(model, token) {
      const resource = model.uri;
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const root = await worker.getNavigationTree(resource.toString());
      if (!root || model.isDisposed()) {
        return;
      }
      const convert = (item, containerLabel) => {
        const result2 = {
          name: item.text,
          detail: "",
          kind: outlineTypeTable[item.kind] || editor_api.languages.SymbolKind.Variable,
          range: this._textSpanToRange(model, item.spans[0]),
          selectionRange: this._textSpanToRange(model, item.spans[0]),
          tags: [],
          children: item.childItems?.map((child) => convert(child, item.text)),
          containerName: containerLabel
        };
        return result2;
      };
      const result = root.childItems ? root.childItems.map((item) => convert(item)) : [];
      return result;
    }
  }
  const _Kind = class _Kind {
  };
  _Kind.unknown = "";
  _Kind.keyword = "keyword";
  _Kind.script = "script";
  _Kind.module = "module";
  _Kind.class = "class";
  _Kind.interface = "interface";
  _Kind.type = "type";
  _Kind.enum = "enum";
  _Kind.variable = "var";
  _Kind.localVariable = "local var";
  _Kind.function = "function";
  _Kind.localFunction = "local function";
  _Kind.memberFunction = "method";
  _Kind.memberGetAccessor = "getter";
  _Kind.memberSetAccessor = "setter";
  _Kind.memberVariable = "property";
  _Kind.constructorImplementation = "constructor";
  _Kind.callSignature = "call";
  _Kind.indexSignature = "index";
  _Kind.constructSignature = "construct";
  _Kind.parameter = "parameter";
  _Kind.typeParameter = "type parameter";
  _Kind.primitiveType = "primitive type";
  _Kind.label = "label";
  _Kind.alias = "alias";
  _Kind.const = "const";
  _Kind.let = "let";
  _Kind.warning = "warning";
  let Kind = _Kind;
  let outlineTypeTable = /* @__PURE__ */ Object.create(null);
  outlineTypeTable[Kind.module] = editor_api.languages.SymbolKind.Module;
  outlineTypeTable[Kind.class] = editor_api.languages.SymbolKind.Class;
  outlineTypeTable[Kind.enum] = editor_api.languages.SymbolKind.Enum;
  outlineTypeTable[Kind.interface] = editor_api.languages.SymbolKind.Interface;
  outlineTypeTable[Kind.memberFunction] = editor_api.languages.SymbolKind.Method;
  outlineTypeTable[Kind.memberVariable] = editor_api.languages.SymbolKind.Property;
  outlineTypeTable[Kind.memberGetAccessor] = editor_api.languages.SymbolKind.Property;
  outlineTypeTable[Kind.memberSetAccessor] = editor_api.languages.SymbolKind.Property;
  outlineTypeTable[Kind.variable] = editor_api.languages.SymbolKind.Variable;
  outlineTypeTable[Kind.const] = editor_api.languages.SymbolKind.Variable;
  outlineTypeTable[Kind.localVariable] = editor_api.languages.SymbolKind.Variable;
  outlineTypeTable[Kind.variable] = editor_api.languages.SymbolKind.Variable;
  outlineTypeTable[Kind.function] = editor_api.languages.SymbolKind.Function;
  outlineTypeTable[Kind.localFunction] = editor_api.languages.SymbolKind.Function;
  class FormatHelper extends Adapter {
    static _convertOptions(options) {
      return {
        ConvertTabsToSpaces: options.insertSpaces,
        TabSize: options.tabSize,
        IndentSize: options.tabSize,
        IndentStyle: 2,
        NewLineCharacter: "\n",
        InsertSpaceAfterCommaDelimiter: true,
        InsertSpaceAfterSemicolonInForStatements: true,
        InsertSpaceBeforeAndAfterBinaryOperators: true,
        InsertSpaceAfterKeywordsInControlFlowStatements: true,
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
        PlaceOpenBraceOnNewLineForControlBlocks: false,
        PlaceOpenBraceOnNewLineForFunctions: false
      };
    }
    _convertTextChanges(model, change) {
      return {
        text: change.newText,
        range: this._textSpanToRange(model, change.span)
      };
    }
  }
  class FormatAdapter extends FormatHelper {
    constructor() {
      super(...arguments);
      this.canFormatMultipleRanges = false;
    }
    async provideDocumentRangeFormattingEdits(model, range, options, token) {
      const resource = model.uri;
      const startOffset = model.getOffsetAt({
        lineNumber: range.startLineNumber,
        column: range.startColumn
      });
      const endOffset = model.getOffsetAt({
        lineNumber: range.endLineNumber,
        column: range.endColumn
      });
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const edits = await worker.getFormattingEditsForRange(
        resource.toString(),
        startOffset,
        endOffset,
        FormatHelper._convertOptions(options)
      );
      if (!edits || model.isDisposed()) {
        return;
      }
      return edits.map((edit) => this._convertTextChanges(model, edit));
    }
  }
  class FormatOnTypeAdapter extends FormatHelper {
    get autoFormatTriggerCharacters() {
      return [";", "}", "\n"];
    }
    async provideOnTypeFormattingEdits(model, position, ch, options, token) {
      const resource = model.uri;
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const edits = await worker.getFormattingEditsAfterKeystroke(
        resource.toString(),
        offset,
        ch,
        FormatHelper._convertOptions(options)
      );
      if (!edits || model.isDisposed()) {
        return;
      }
      return edits.map((edit) => this._convertTextChanges(model, edit));
    }
  }
  class CodeActionAdaptor extends FormatHelper {
    async provideCodeActions(model, range, context, token) {
      const resource = model.uri;
      const start = model.getOffsetAt({
        lineNumber: range.startLineNumber,
        column: range.startColumn
      });
      const end = model.getOffsetAt({
        lineNumber: range.endLineNumber,
        column: range.endColumn
      });
      const formatOptions = FormatHelper._convertOptions(model.getOptions());
      const errorCodes = context.markers.filter((m) => m.code).map((m) => m.code).map(Number);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const codeFixes = await worker.getCodeFixesAtPosition(
        resource.toString(),
        start,
        end,
        errorCodes,
        formatOptions
      );
      if (!codeFixes || model.isDisposed()) {
        return { actions: [], dispose: () => {
        } };
      }
      const actions = codeFixes.filter((fix) => {
        return fix.changes.filter((change) => change.isNewFile).length === 0;
      }).map((fix) => {
        return this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
      });
      return {
        actions,
        dispose: () => {
        }
      };
    }
    _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
      const edits = [];
      for (const change of codeFix.changes) {
        for (const textChange of change.textChanges) {
          edits.push({
            resource: model.uri,
            versionId: void 0,
            textEdit: {
              range: this._textSpanToRange(model, textChange.span),
              text: textChange.newText
            }
          });
        }
      }
      const action = {
        title: codeFix.description,
        edit: { edits },
        diagnostics: context.markers,
        kind: "quickfix"
      };
      return action;
    }
  }
  class RenameAdapter extends Adapter {
    constructor(_libFiles, worker) {
      super(worker);
      this._libFiles = _libFiles;
    }
    async provideRenameEdits(model, position, newName, token) {
      const resource = model.uri;
      const fileName = resource.toString();
      const offset = model.getOffsetAt(position);
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return;
      }
      const renameInfo = await worker.getRenameInfo(fileName, offset, {
        allowRenameOfImportPath: false
      });
      if (renameInfo.canRename === false) {
        return {
          edits: [],
          rejectReason: renameInfo.localizedErrorMessage
        };
      }
      if (renameInfo.fileToRename !== void 0) {
        throw new Error("Renaming files is not supported.");
      }
      const renameLocations = await worker.findRenameLocations(
        fileName,
        offset,
        /*strings*/
        false,
        /*comments*/
        false,
        /*prefixAndSuffix*/
        false
      );
      if (!renameLocations || model.isDisposed()) {
        return;
      }
      const edits = [];
      for (const renameLocation of renameLocations) {
        const model2 = this._libFiles.getOrCreateModel(renameLocation.fileName);
        if (model2) {
          edits.push({
            resource: model2.uri,
            versionId: void 0,
            textEdit: {
              range: this._textSpanToRange(model2, renameLocation.textSpan),
              text: newName
            }
          });
        } else {
          throw new Error(`Unknown file ${renameLocation.fileName}.`);
        }
      }
      return { edits };
    }
  }
  class InlayHintsAdapter extends Adapter {
    async provideInlayHints(model, range, token) {
      const resource = model.uri;
      const fileName = resource.toString();
      const start = model.getOffsetAt({
        lineNumber: range.startLineNumber,
        column: range.startColumn
      });
      const end = model.getOffsetAt({
        lineNumber: range.endLineNumber,
        column: range.endColumn
      });
      const worker = await this._worker(resource);
      if (model.isDisposed()) {
        return null;
      }
      const tsHints = await worker.provideInlayHints(fileName, start, end);
      const hints = tsHints.map((hint) => {
        return {
          ...hint,
          label: hint.text,
          position: model.getPositionAt(hint.position),
          kind: this._convertHintKind(hint.kind)
        };
      });
      return { hints, dispose: () => {
      } };
    }
    _convertHintKind(kind) {
      switch (kind) {
        case "Parameter":
          return editor_api.languages.InlayHintKind.Parameter;
        case "Type":
          return editor_api.languages.InlayHintKind.Type;
        default:
          return editor_api.languages.InlayHintKind.Type;
      }
    }
  }
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
          editor_api.languages.registerCompletionItemProvider(
            modeId,
            new SuggestAdapter(worker)
          )
        );
      }
      if (modeConfiguration.signatureHelp) {
        providers.push(
          editor_api.languages.registerSignatureHelpProvider(
            modeId,
            new SignatureHelpAdapter(worker)
          )
        );
      }
      if (modeConfiguration.hovers) {
        providers.push(
          editor_api.languages.registerHoverProvider(modeId, new QuickInfoAdapter(worker))
        );
      }
      if (modeConfiguration.documentHighlights) {
        providers.push(
          editor_api.languages.registerDocumentHighlightProvider(
            modeId,
            new DocumentHighlightAdapter(worker)
          )
        );
      }
      if (modeConfiguration.definitions) {
        providers.push(
          editor_api.languages.registerDefinitionProvider(
            modeId,
            new DefinitionAdapter(libFiles, worker)
          )
        );
      }
      if (modeConfiguration.references) {
        providers.push(
          editor_api.languages.registerReferenceProvider(
            modeId,
            new ReferenceAdapter(libFiles, worker)
          )
        );
      }
      if (modeConfiguration.documentSymbols) {
        providers.push(
          editor_api.languages.registerDocumentSymbolProvider(
            modeId,
            new OutlineAdapter(worker)
          )
        );
      }
      if (modeConfiguration.rename) {
        providers.push(
          editor_api.languages.registerRenameProvider(
            modeId,
            new RenameAdapter(libFiles, worker)
          )
        );
      }
      if (modeConfiguration.documentRangeFormattingEdits) {
        providers.push(
          editor_api.languages.registerDocumentRangeFormattingEditProvider(
            modeId,
            new FormatAdapter(worker)
          )
        );
      }
      if (modeConfiguration.onTypeFormattingEdits) {
        providers.push(
          editor_api.languages.registerOnTypeFormattingEditProvider(
            modeId,
            new FormatOnTypeAdapter(worker)
          )
        );
      }
      if (modeConfiguration.codeActions) {
        providers.push(
          editor_api.languages.registerCodeActionProvider(modeId, new CodeActionAdaptor(worker))
        );
      }
      if (modeConfiguration.inlayHints) {
        providers.push(
          editor_api.languages.registerInlayHintsProvider(modeId, new InlayHintsAdapter(worker))
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
  exports.Adapter = Adapter;
  exports.CodeActionAdaptor = CodeActionAdaptor;
  exports.DefinitionAdapter = DefinitionAdapter;
  exports.DiagnosticsAdapter = DiagnosticsAdapter;
  exports.DocumentHighlightAdapter = DocumentHighlightAdapter;
  exports.FormatAdapter = FormatAdapter;
  exports.FormatHelper = FormatHelper;
  exports.FormatOnTypeAdapter = FormatOnTypeAdapter;
  exports.InlayHintsAdapter = InlayHintsAdapter;
  exports.Kind = Kind;
  exports.LibFiles = LibFiles;
  exports.OutlineAdapter = OutlineAdapter;
  exports.QuickInfoAdapter = QuickInfoAdapter;
  exports.ReferenceAdapter = ReferenceAdapter;
  exports.RenameAdapter = RenameAdapter;
  exports.SignatureHelpAdapter = SignatureHelpAdapter;
  exports.SuggestAdapter = SuggestAdapter;
  exports.WorkerManager = WorkerManager;
  exports.flattenDiagnosticMessageText = flattenDiagnosticMessageText;
  exports.getJavaScriptWorker = getJavaScriptWorker;
  exports.getTypeScriptWorker = getTypeScriptWorker;
  exports.setupJavaScript = setupJavaScript;
  exports.setupTypeScript = setupTypeScript;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
