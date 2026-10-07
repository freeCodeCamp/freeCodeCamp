"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let parcelOptionsToPluginOptions = new WeakMap();

class PluginOptions {
  #options
  /*: ParcelOptions */
  ;

  constructor(options) {
    let existing = parcelOptionsToPluginOptions.get(options);

    if (existing != null) {
      return existing;
    }

    this.#options = options;
    parcelOptionsToPluginOptions.set(options, this);
    return this;
  }

  get instanceId() {
    return this.#options.instanceId;
  }

  get mode() {
    return this.#options.mode;
  }

  get env() {
    return this.#options.env;
  }

  get hmrOptions() {
    return this.#options.hmrOptions;
  }

  get serveOptions() {
    return this.#options.serveOptions;
  }

  get shouldBuildLazily() {
    return this.#options.shouldBuildLazily;
  }

  get shouldAutoInstall() {
    return this.#options.shouldAutoInstall;
  }

  get logLevel() {
    return this.#options.logLevel;
  }

  get cacheDir() {
    // TODO: remove this. Probably bad if there are other types of caches.
    // Maybe expose the Cache object instead?
    return this.#options.cacheDir;
  }

  get projectRoot() {
    return this.#options.projectRoot;
  }

  get inputFS() {
    return this.#options.inputFS;
  }

  get outputFS() {
    return this.#options.outputFS;
  }

  get packageManager() {
    return this.#options.packageManager;
  }

  get detailedReport() {
    return this.#options.detailedReport;
  }

}

exports.default = PluginOptions;