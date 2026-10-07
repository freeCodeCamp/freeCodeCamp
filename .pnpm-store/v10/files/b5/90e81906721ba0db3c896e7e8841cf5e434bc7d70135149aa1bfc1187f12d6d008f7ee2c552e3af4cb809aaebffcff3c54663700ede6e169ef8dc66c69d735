/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @TheLarkInn
*/

"use strict";

/**
 * @type {Readonly<"javascript/auto">}
 */
const JAVASCRIPT_MODULE_TYPE_AUTO = "javascript/auto";

/**
 * @type {Readonly<"javascript/dynamic">}
 */
const JAVASCRIPT_MODULE_TYPE_DYNAMIC = "javascript/dynamic";

/**
 * @type {Readonly<"javascript/esm">}
 * This is the module type used for _strict_ ES Module syntax. This means that all legacy formats
 * that webpack supports (CommonJS, AMD, SystemJS) are not supported.
 */
const JAVASCRIPT_MODULE_TYPE_ESM = "javascript/esm";

/**
 * @type {Readonly<"json">}
 * This is the module type used for JSON files. JSON files are always parsed as ES Module.
 */
const JSON_MODULE_TYPE = "json";

/**
 * @type {Readonly<"webassembly/async">}
 * This is the module type used for WebAssembly modules. In webpack 5 they are always treated as async modules.
 */
const WEBASSEMBLY_MODULE_TYPE_ASYNC = "webassembly/async";

/**
 * @type {Readonly<"webassembly/sync">}
 * This is the module type used for WebAssembly modules. In webpack 4 they are always treated as sync modules.
 * There is a legacy option to support this usage in webpack 5 and up.
 */
const WEBASSEMBLY_MODULE_TYPE_SYNC = "webassembly/sync";

/**
 * @type {Readonly<"css">}
 * This is the module type used for CSS files.
 */
const CSS_MODULE_TYPE = "css";

/**
 * @type {Readonly<"css/global">}
 * This is the module type used for CSS modules files where you need to use `:local` in selector list to hash classes.
 */
const CSS_MODULE_TYPE_GLOBAL = "css/global";

/**
 * @type {Readonly<"css/module">}
 * This is the module type used for CSS modules files, by default all classes are hashed.
 */
const CSS_MODULE_TYPE_MODULE = "css/module";

/**
 * @type {Readonly<"css/auto">}
 * This is the module type used for CSS files, the module will be parsed as CSS modules if it's filename contains `.module.` or `.modules.`.
 */
const CSS_MODULE_TYPE_AUTO = "css/auto";

/**
 * @type {Readonly<"asset">}
 * This is the module type used for automatically choosing between `asset/inline`, `asset/resource` based on asset size limit (8096).
 */
const ASSET_MODULE_TYPE = "asset";

/**
 * @type {Readonly<"asset/inline">}
 * This is the module type used for assets that are inlined as a data URI. This is the equivalent of `url-loader`.
 */
const ASSET_MODULE_TYPE_INLINE = "asset/inline";

/**
 * @type {Readonly<"asset/resource">}
 * This is the module type used for assets that are copied to the output directory. This is the equivalent of `file-loader`.
 */
const ASSET_MODULE_TYPE_RESOURCE = "asset/resource";

/**
 * @type {Readonly<"asset/source">}
 * This is the module type used for assets that are imported as source code. This is the equivalent of `raw-loader`.
 */
const ASSET_MODULE_TYPE_SOURCE = "asset/source";

/**
 * @type {Readonly<"asset/bytes">}
 * This is the module type used for assets that are imported as Uint8Array.
 */
const ASSET_MODULE_TYPE_BYTES = "asset/bytes";

/**
 * @type {Readonly<"asset/raw-data-url">}
 * This is the module type used for the ignored asset module.
 */
const ASSET_MODULE_TYPE_RAW_DATA_URL = "asset/raw-data-url";

/**
 * @type {Readonly<"runtime">}
 * This is the module type used for the webpack runtime abstractions.
 */
const WEBPACK_MODULE_TYPE_RUNTIME = "runtime";

/**
 * @type {Readonly<"fallback-module">}
 * This is the module type used for the ModuleFederation feature's FallbackModule class.
 */
const WEBPACK_MODULE_TYPE_FALLBACK = "fallback-module";

/**
 * @type {Readonly<"remote-module">}
 * This is the module type used for the ModuleFederation feature's RemoteModule class.
 */
const WEBPACK_MODULE_TYPE_REMOTE = "remote-module";

/**
 * @type {Readonly<"provide-module">}
 * This is the module type used for the ModuleFederation feature's ProvideModule class.
 */
const WEBPACK_MODULE_TYPE_PROVIDE = "provide-module";

/**
 * @type {Readonly<"consume-shared-module">}
 * This is the module type used for the ModuleFederation feature's ConsumeSharedModule class.
 */
const WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE = "consume-shared-module";

/**
 * @type {Readonly<"lazy-compilation-proxy">}
 * Module type used for `experiments.lazyCompilation` feature. See `LazyCompilationPlugin` for more information.
 */
const WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY = "lazy-compilation-proxy";

/** @typedef {"javascript/auto" | "javascript/dynamic" | "javascript/esm"} JavaScriptModuleTypes */
/** @typedef {"json"} JSONModuleType */
/** @typedef {"webassembly/async" | "webassembly/sync"} WebAssemblyModuleTypes */
/** @typedef {"css" | "css/global" | "css/module" | "css/auto"} CSSModuleTypes */
/** @typedef {"asset" | "asset/inline" | "asset/resource" | "asset/source" | "asset/raw-data-url"} AssetModuleTypes */
/** @typedef {"runtime" | "fallback-module" | "remote-module" | "provide-module" | "consume-shared-module" | "lazy-compilation-proxy"} WebpackModuleTypes */
/** @typedef {string} UnknownModuleTypes */
/** @typedef {JavaScriptModuleTypes | JSONModuleType | WebAssemblyModuleTypes | CSSModuleTypes | AssetModuleTypes | WebpackModuleTypes | UnknownModuleTypes} ModuleTypes */

module.exports.ASSET_MODULE_TYPE = ASSET_MODULE_TYPE;
module.exports.ASSET_MODULE_TYPE_BYTES = ASSET_MODULE_TYPE_BYTES;
module.exports.ASSET_MODULE_TYPE_INLINE = ASSET_MODULE_TYPE_INLINE;
module.exports.ASSET_MODULE_TYPE_RAW_DATA_URL = ASSET_MODULE_TYPE_RAW_DATA_URL;
module.exports.ASSET_MODULE_TYPE_RESOURCE = ASSET_MODULE_TYPE_RESOURCE;
module.exports.ASSET_MODULE_TYPE_SOURCE = ASSET_MODULE_TYPE_SOURCE;
/** @type {CSSModuleTypes[]} */
module.exports.CSS_MODULES = [
	CSS_MODULE_TYPE,
	CSS_MODULE_TYPE_GLOBAL,
	CSS_MODULE_TYPE_MODULE,
	CSS_MODULE_TYPE_AUTO
];
module.exports.CSS_MODULE_TYPE = CSS_MODULE_TYPE;
module.exports.CSS_MODULE_TYPE_AUTO = CSS_MODULE_TYPE_AUTO;
module.exports.CSS_MODULE_TYPE_GLOBAL = CSS_MODULE_TYPE_GLOBAL;
module.exports.CSS_MODULE_TYPE_MODULE = CSS_MODULE_TYPE_MODULE;
/** @type {JavaScriptModuleTypes[]} */
module.exports.JAVASCRIPT_MODULES = [
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
];
module.exports.JAVASCRIPT_MODULE_TYPE_AUTO = JAVASCRIPT_MODULE_TYPE_AUTO;
module.exports.JAVASCRIPT_MODULE_TYPE_DYNAMIC = JAVASCRIPT_MODULE_TYPE_DYNAMIC;
module.exports.JAVASCRIPT_MODULE_TYPE_ESM = JAVASCRIPT_MODULE_TYPE_ESM;
module.exports.JSON_MODULE_TYPE = JSON_MODULE_TYPE;
/** @type {WebAssemblyModuleTypes[]} */
module.exports.WEBASSEMBLY_MODULES = [
	WEBASSEMBLY_MODULE_TYPE_ASYNC,
	WEBASSEMBLY_MODULE_TYPE_SYNC
];
module.exports.WEBASSEMBLY_MODULE_TYPE_ASYNC = WEBASSEMBLY_MODULE_TYPE_ASYNC;
module.exports.WEBASSEMBLY_MODULE_TYPE_SYNC = WEBASSEMBLY_MODULE_TYPE_SYNC;
module.exports.WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE =
	WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE;
module.exports.WEBPACK_MODULE_TYPE_FALLBACK = WEBPACK_MODULE_TYPE_FALLBACK;
module.exports.WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY =
	WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY;
module.exports.WEBPACK_MODULE_TYPE_PROVIDE = WEBPACK_MODULE_TYPE_PROVIDE;
module.exports.WEBPACK_MODULE_TYPE_REMOTE = WEBPACK_MODULE_TYPE_REMOTE;
module.exports.WEBPACK_MODULE_TYPE_RUNTIME = WEBPACK_MODULE_TYPE_RUNTIME;
