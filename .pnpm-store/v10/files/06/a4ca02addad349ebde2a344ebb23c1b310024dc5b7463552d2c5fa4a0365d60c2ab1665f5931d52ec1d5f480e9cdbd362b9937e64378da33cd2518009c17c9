/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * the internal require function
 */
module.exports.require = "__webpack_require__";

/**
 * access to properties of the internal require function/object
 */
module.exports.requireScope = "__webpack_require__.*";

/**
 * the internal exports object
 */
module.exports.exports = "__webpack_exports__";

/**
 * top-level this need to be the exports object
 */
module.exports.thisAsExports = "top-level-this-exports";

/**
 * runtime need to return the exports of the last entry module
 */
module.exports.returnExportsFromRuntime = "return-exports-from-runtime";

/**
 * the internal module object
 */
module.exports.module = "module";

/**
 * the internal module object
 */
module.exports.moduleId = "module.id";

/**
 * the internal module object
 */
module.exports.moduleLoaded = "module.loaded";

/**
 * the bundle public path
 */
module.exports.publicPath = "__webpack_require__.p";

/**
 * the module id of the entry point
 */
module.exports.entryModuleId = "__webpack_require__.s";

/**
 * the module cache
 */
module.exports.moduleCache = "__webpack_require__.c";

/**
 * the module functions
 */
module.exports.moduleFactories = "__webpack_require__.m";

/**
 * the module functions, with only write access
 */
module.exports.moduleFactoriesAddOnly = "__webpack_require__.m (add only)";

/**
 * the chunk ensure function
 */
module.exports.ensureChunk = "__webpack_require__.e";

/**
 * an object with handlers to ensure a chunk
 */
module.exports.ensureChunkHandlers = "__webpack_require__.f";

/**
 * a runtime requirement if ensureChunkHandlers should include loading of chunk needed for entries
 */
module.exports.ensureChunkIncludeEntries =
	"__webpack_require__.f (include entries)";

/**
 * the chunk prefetch function
 */
module.exports.prefetchChunk = "__webpack_require__.E";

/**
 * an object with handlers to prefetch a chunk
 */
module.exports.prefetchChunkHandlers = "__webpack_require__.F";

/**
 * the chunk preload function
 */
module.exports.preloadChunk = "__webpack_require__.G";

/**
 * an object with handlers to preload a chunk
 */
module.exports.preloadChunkHandlers = "__webpack_require__.H";

/**
 * the exported property define getters function
 */
module.exports.definePropertyGetters = "__webpack_require__.d";

/**
 * define compatibility on export
 */
module.exports.makeNamespaceObject = "__webpack_require__.r";

/**
 * create a fake namespace object
 */
module.exports.createFakeNamespaceObject = "__webpack_require__.t";

/**
 * compatibility get default export
 */
module.exports.compatGetDefaultExport = "__webpack_require__.n";

/**
 * harmony module decorator
 */
module.exports.harmonyModuleDecorator = "__webpack_require__.hmd";

/**
 * node.js module decorator
 */
module.exports.nodeModuleDecorator = "__webpack_require__.nmd";

/**
 * the webpack hash
 */
module.exports.getFullHash = "__webpack_require__.h";

/**
 * an object containing all installed WebAssembly.Instance export objects keyed by module id
 */
module.exports.wasmInstances = "__webpack_require__.w";

/**
 * instantiate a wasm instance from module exports object, id, hash and importsObject
 */
module.exports.instantiateWasm = "__webpack_require__.v";

/**
 * the uncaught error handler for the webpack runtime
 */
module.exports.uncaughtErrorHandler = "__webpack_require__.oe";

/**
 * the script nonce
 */
module.exports.scriptNonce = "__webpack_require__.nc";

/**
 * function to load a script tag.
 * Arguments: (url: string, done: (event) => void), key?: string | number, chunkId?: string | number) => void
 * done function is called when loading has finished or timeout occurred.
 * It will attach to existing script tags with data-webpack == uniqueName + ":" + key or src == url.
 */
module.exports.loadScript = "__webpack_require__.l";

/**
 * function to promote a string to a TrustedScript using webpack's Trusted
 * Types policy
 * Arguments: (script: string) => TrustedScript
 */
module.exports.createScript = "__webpack_require__.ts";

/**
 * function to promote a string to a TrustedScriptURL using webpack's Trusted
 * Types policy
 * Arguments: (url: string) => TrustedScriptURL
 */
module.exports.createScriptUrl = "__webpack_require__.tu";

/**
 * function to return webpack's Trusted Types policy
 * Arguments: () => TrustedTypePolicy
 */
module.exports.getTrustedTypesPolicy = "__webpack_require__.tt";

/**
 * a flag when a chunk has a fetch priority
 */
module.exports.hasFetchPriority = "has fetch priority";

/**
 * the chunk name of the chunk with the runtime
 */
module.exports.chunkName = "__webpack_require__.cn";

/**
 * the runtime id of the current runtime
 */
module.exports.runtimeId = "__webpack_require__.j";

/**
 * the filename of the script part of the chunk
 */
module.exports.getChunkScriptFilename = "__webpack_require__.u";

/**
 * the filename of the css part of the chunk
 */
module.exports.getChunkCssFilename = "__webpack_require__.k";

/**
 * a flag when a module/chunk/tree has css modules
 */
module.exports.hasCssModules = "has css modules";

/**
 * the filename of the script part of the hot update chunk
 */
module.exports.getChunkUpdateScriptFilename = "__webpack_require__.hu";

/**
 * the filename of the css part of the hot update chunk
 */
module.exports.getChunkUpdateCssFilename = "__webpack_require__.hk";

/**
 * startup signal from runtime
 * This will be called when the runtime chunk has been loaded.
 */
module.exports.startup = "__webpack_require__.x";

/**
 * @deprecated
 * creating a default startup function with the entry modules
 */
module.exports.startupNoDefault = "__webpack_require__.x (no default handler)";

/**
 * startup signal from runtime but only used to add logic after the startup
 */
module.exports.startupOnlyAfter = "__webpack_require__.x (only after)";

/**
 * startup signal from runtime but only used to add sync logic before the startup
 */
module.exports.startupOnlyBefore = "__webpack_require__.x (only before)";

/**
 * global callback functions for installing chunks
 */
module.exports.chunkCallback = "webpackChunk";

/**
 * method to startup an entrypoint with needed chunks.
 * Signature: (moduleId: Id, chunkIds: Id[]) => any.
 * Returns the exports of the module or a Promise
 */
module.exports.startupEntrypoint = "__webpack_require__.X";

/**
 * register deferred code, which will run when certain
 * chunks are loaded.
 * Signature: (chunkIds: Id[], fn: () => any, priority: int >= 0 = 0) => any
 * Returned value will be returned directly when all chunks are already loaded
 * When (priority & 1) it will wait for all other handlers with lower priority to
 * be executed before itself is executed
 */
module.exports.onChunksLoaded = "__webpack_require__.O";

/**
 * method to install a chunk that was loaded somehow
 * Signature: ({ id, ids, modules, runtime }) => void
 */
module.exports.externalInstallChunk = "__webpack_require__.C";

/**
 * interceptor for module executions
 */
module.exports.interceptModuleExecution = "__webpack_require__.i";

/**
 * the global object
 */
module.exports.global = "__webpack_require__.g";

/**
 * an object with all share scopes
 */
module.exports.shareScopeMap = "__webpack_require__.S";

/**
 * The sharing init sequence function (only runs once per share scope).
 * Has one argument, the name of the share scope.
 * Creates a share scope if not existing
 */
module.exports.initializeSharing = "__webpack_require__.I";

/**
 * The current scope when getting a module from a remote
 */
module.exports.currentRemoteGetScope = "__webpack_require__.R";

/**
 * the filename of the HMR manifest
 */
module.exports.getUpdateManifestFilename = "__webpack_require__.hmrF";

/**
 * function downloading the update manifest
 */
module.exports.hmrDownloadManifest = "__webpack_require__.hmrM";

/**
 * array with handler functions to download chunk updates
 */
module.exports.hmrDownloadUpdateHandlers = "__webpack_require__.hmrC";

/**
 * object with all hmr module data for all modules
 */
module.exports.hmrModuleData = "__webpack_require__.hmrD";

/**
 * array with handler functions when a module should be invalidated
 */
module.exports.hmrInvalidateModuleHandlers = "__webpack_require__.hmrI";

/**
 * the prefix for storing state of runtime modules when hmr is enabled
 */
module.exports.hmrRuntimeStatePrefix = "__webpack_require__.hmrS";

/**
 * the AMD define function
 */
module.exports.amdDefine = "__webpack_require__.amdD";

/**
 * the AMD options
 */
module.exports.amdOptions = "__webpack_require__.amdO";

/**
 * the System polyfill object
 */
module.exports.system = "__webpack_require__.System";

/**
 * the shorthand for Object.prototype.hasOwnProperty
 * using of it decreases the compiled bundle size
 */
module.exports.hasOwnProperty = "__webpack_require__.o";

/**
 * the System.register context object
 */
module.exports.systemContext = "__webpack_require__.y";

/**
 * the baseURI of current document
 */
module.exports.baseURI = "__webpack_require__.b";

/**
 * a RelativeURL class when relative URLs are used
 */
module.exports.relativeUrl = "__webpack_require__.U";

/**
 * Creates an async module. The body function must be a async function.
 * "module.exports" will be decorated with an AsyncModulePromise.
 * The body function will be called.
 * To handle async dependencies correctly do this: "([a, b, c] = await handleDependencies([a, b, c]));".
 * If "hasAwaitAfterDependencies" is truthy, "handleDependencies()" must be called at the end of the body function.
 * Signature: function(
 * module: Module,
 * body: (handleDependencies: (deps: AsyncModulePromise[]) => Promise<any[]> & () => void,
 * hasAwaitAfterDependencies?: boolean
 * ) => void
 */
module.exports.asyncModule = "__webpack_require__.a";
