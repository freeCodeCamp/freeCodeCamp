define("vs/monaco.contribution-YfYcxPkX", ["require", "exports", "./editor.api-CykLys8L"], (function(require, exports, editor_api) {
  "use strict";
  const typescriptVersion$1 = "5.9.3";
  var ModuleKind = /* @__PURE__ */ ((ModuleKind2) => {
    ModuleKind2[ModuleKind2["None"] = 0] = "None";
    ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
    ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
    ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
    ModuleKind2[ModuleKind2["System"] = 4] = "System";
    ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
    ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
    return ModuleKind2;
  })(ModuleKind || {});
  var JsxEmit = /* @__PURE__ */ ((JsxEmit2) => {
    JsxEmit2[JsxEmit2["None"] = 0] = "None";
    JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
    JsxEmit2[JsxEmit2["React"] = 2] = "React";
    JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
    JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
    return JsxEmit2;
  })(JsxEmit || {});
  var NewLineKind = /* @__PURE__ */ ((NewLineKind2) => {
    NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
    return NewLineKind2;
  })(NewLineKind || {});
  var ScriptTarget = /* @__PURE__ */ ((ScriptTarget2) => {
    ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
    ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
    ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
    ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
    ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
    ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
    ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
    ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
    ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
    ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
    ScriptTarget2[
      ScriptTarget2["Latest"] = 99
      /* ESNext */
    ] = "Latest";
    return ScriptTarget2;
  })(ScriptTarget || {});
  var ModuleResolutionKind = /* @__PURE__ */ ((ModuleResolutionKind2) => {
    ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
    ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
    return ModuleResolutionKind2;
  })(ModuleResolutionKind || {});
  class LanguageServiceDefaultsImpl {
    constructor(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions, modeConfiguration) {
      this._onDidChange = new editor_api.Emitter();
      this._onDidExtraLibsChange = new editor_api.Emitter();
      this._extraLibs = /* @__PURE__ */ Object.create(null);
      this._removedExtraLibs = /* @__PURE__ */ Object.create(null);
      this._eagerModelSync = false;
      this.setCompilerOptions(compilerOptions);
      this.setDiagnosticsOptions(diagnosticsOptions);
      this.setWorkerOptions(workerOptions);
      this.setInlayHintsOptions(inlayHintsOptions);
      this.setModeConfiguration(modeConfiguration);
      this._onDidExtraLibsChangeTimeout = -1;
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    get onDidExtraLibsChange() {
      return this._onDidExtraLibsChange.event;
    }
    get modeConfiguration() {
      return this._modeConfiguration;
    }
    get workerOptions() {
      return this._workerOptions;
    }
    get inlayHintsOptions() {
      return this._inlayHintsOptions;
    }
    getExtraLibs() {
      return this._extraLibs;
    }
    addExtraLib(content, _filePath) {
      let filePath;
      if (typeof _filePath === "undefined") {
        filePath = `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
      } else {
        filePath = _filePath;
      }
      if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) {
        return {
          dispose: () => {
          }
        };
      }
      let myVersion = 1;
      if (this._removedExtraLibs[filePath]) {
        myVersion = this._removedExtraLibs[filePath] + 1;
      }
      if (this._extraLibs[filePath]) {
        myVersion = this._extraLibs[filePath].version + 1;
      }
      this._extraLibs[filePath] = {
        content,
        version: myVersion
      };
      this._fireOnDidExtraLibsChangeSoon();
      return {
        dispose: () => {
          let extraLib = this._extraLibs[filePath];
          if (!extraLib) {
            return;
          }
          if (extraLib.version !== myVersion) {
            return;
          }
          delete this._extraLibs[filePath];
          this._removedExtraLibs[filePath] = myVersion;
          this._fireOnDidExtraLibsChangeSoon();
        }
      };
    }
    setExtraLibs(libs) {
      for (const filePath in this._extraLibs) {
        this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
      }
      this._extraLibs = /* @__PURE__ */ Object.create(null);
      if (libs && libs.length > 0) {
        for (const lib of libs) {
          const filePath = lib.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
          const content = lib.content;
          let myVersion = 1;
          if (this._removedExtraLibs[filePath]) {
            myVersion = this._removedExtraLibs[filePath] + 1;
          }
          this._extraLibs[filePath] = {
            content,
            version: myVersion
          };
        }
      }
      this._fireOnDidExtraLibsChangeSoon();
    }
    _fireOnDidExtraLibsChangeSoon() {
      if (this._onDidExtraLibsChangeTimeout !== -1) {
        return;
      }
      this._onDidExtraLibsChangeTimeout = window.setTimeout(() => {
        this._onDidExtraLibsChangeTimeout = -1;
        this._onDidExtraLibsChange.fire(void 0);
      }, 0);
    }
    getCompilerOptions() {
      return this._compilerOptions;
    }
    setCompilerOptions(options) {
      this._compilerOptions = options || /* @__PURE__ */ Object.create(null);
      this._onDidChange.fire(void 0);
    }
    getDiagnosticsOptions() {
      return this._diagnosticsOptions;
    }
    setDiagnosticsOptions(options) {
      this._diagnosticsOptions = options || /* @__PURE__ */ Object.create(null);
      this._onDidChange.fire(void 0);
    }
    setWorkerOptions(options) {
      this._workerOptions = options || /* @__PURE__ */ Object.create(null);
      this._onDidChange.fire(void 0);
    }
    setInlayHintsOptions(options) {
      this._inlayHintsOptions = options || /* @__PURE__ */ Object.create(null);
      this._onDidChange.fire(void 0);
    }
    setMaximumWorkerIdleTime(value) {
    }
    setEagerModelSync(value) {
      this._eagerModelSync = value;
    }
    getEagerModelSync() {
      return this._eagerModelSync;
    }
    setModeConfiguration(modeConfiguration) {
      this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
      this._onDidChange.fire(void 0);
    }
  }
  const typescriptVersion = typescriptVersion$1;
  const modeConfigurationDefault = {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    definitions: true,
    references: true,
    documentHighlights: true,
    rename: true,
    diagnostics: true,
    documentRangeFormattingEdits: true,
    signatureHelp: true,
    onTypeFormattingEdits: true,
    codeActions: true,
    inlayHints: true
  };
  const typescriptDefaults = new LanguageServiceDefaultsImpl(
    {
      allowNonTsExtensions: true,
      target: 99
      /* Latest */
    },
    { noSemanticValidation: false, noSyntaxValidation: false, onlyVisible: false },
    {},
    {},
    modeConfigurationDefault
  );
  const javascriptDefaults = new LanguageServiceDefaultsImpl(
    {
      allowNonTsExtensions: true,
      allowJs: true,
      target: 99
      /* Latest */
    },
    { noSemanticValidation: true, noSyntaxValidation: false, onlyVisible: false },
    {},
    {},
    modeConfigurationDefault
  );
  const getTypeScriptWorker = () => {
    return getMode().then((mode) => mode.getTypeScriptWorker());
  };
  const getJavaScriptWorker = () => {
    return getMode().then((mode) => mode.getJavaScriptWorker());
  };
  function getMode() {
    return new Promise((resolve, reject) => require(["./tsMode-CYrPzhIX"], resolve, reject));
  }
  editor_api.languages.onLanguage("typescript", () => {
    return getMode().then((mode) => mode.setupTypeScript(typescriptDefaults));
  });
  editor_api.languages.onLanguage("javascript", () => {
    return getMode().then((mode) => mode.setupJavaScript(javascriptDefaults));
  });
  const monaco_contribution = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    JsxEmit,
    ModuleKind,
    ModuleResolutionKind,
    NewLineKind,
    ScriptTarget,
    getJavaScriptWorker,
    getTypeScriptWorker,
    javascriptDefaults,
    typescriptDefaults,
    typescriptVersion
  }, Symbol.toStringTag, { value: "Module" }));
  exports.JsxEmit = JsxEmit;
  exports.ModuleKind = ModuleKind;
  exports.ModuleResolutionKind = ModuleResolutionKind;
  exports.NewLineKind = NewLineKind;
  exports.ScriptTarget = ScriptTarget;
  exports.getJavaScriptWorker = getJavaScriptWorker;
  exports.getTypeScriptWorker = getTypeScriptWorker;
  exports.javascriptDefaults = javascriptDefaults;
  exports.monaco_contribution = monaco_contribution;
  exports.typescriptDefaults = typescriptDefaults;
  exports.typescriptVersion = typescriptVersion;
}));
