"use strict";

// packages/playwright/src/loader/loaderProcessEntry.ts
var import_common2 = require("../common");

// packages/playwright/src/loader/loaderMain.ts
var import_common = require("../common");
var LoaderMain = class extends import_common.ProcessRunner {
  constructor(serializedConfig) {
    super();
    this._poolBuilder = import_common.poolBuilder.PoolBuilder.createForLoader();
    this._serializedConfig = serializedConfig;
  }
  _config() {
    if (!this._configPromise)
      this._configPromise = import_common.configLoader.deserializeConfig(this._serializedConfig);
    return this._configPromise;
  }
  async loadTestFile(params) {
    const testErrors = [];
    const config = await this._config();
    const fileSuite = await import_common.testLoader.loadTestFile(params.file, config, testErrors);
    this._poolBuilder.buildPools(fileSuite);
    return { fileSuite: fileSuite._deepSerialize(), testErrors };
  }
  async getCompilationCacheFromLoader() {
    await import_common.esm.incorporateCompilationCache();
    return import_common.cc.serializeCompilationCache();
  }
};
var create = (config) => new LoaderMain(config);

// packages/playwright/src/loader/loaderProcessEntry.ts
(0, import_common2.startProcessRunner)(create);
