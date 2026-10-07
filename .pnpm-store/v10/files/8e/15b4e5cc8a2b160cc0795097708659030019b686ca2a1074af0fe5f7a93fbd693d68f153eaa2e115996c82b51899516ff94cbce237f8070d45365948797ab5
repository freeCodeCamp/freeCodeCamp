/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("./RuntimeGlobals");
const { getChunkFilenameTemplate } = require("./css/CssModulesPlugin");
const RuntimeRequirementsDependency = require("./dependencies/RuntimeRequirementsDependency");
const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");
const AsyncModuleRuntimeModule = require("./runtime/AsyncModuleRuntimeModule");
const AutoPublicPathRuntimeModule = require("./runtime/AutoPublicPathRuntimeModule");
const BaseUriRuntimeModule = require("./runtime/BaseUriRuntimeModule");
const CompatGetDefaultExportRuntimeModule = require("./runtime/CompatGetDefaultExportRuntimeModule");
const CompatRuntimeModule = require("./runtime/CompatRuntimeModule");
const CreateFakeNamespaceObjectRuntimeModule = require("./runtime/CreateFakeNamespaceObjectRuntimeModule");
const CreateScriptRuntimeModule = require("./runtime/CreateScriptRuntimeModule");
const CreateScriptUrlRuntimeModule = require("./runtime/CreateScriptUrlRuntimeModule");
const DefinePropertyGettersRuntimeModule = require("./runtime/DefinePropertyGettersRuntimeModule");
const EnsureChunkRuntimeModule = require("./runtime/EnsureChunkRuntimeModule");
const GetChunkFilenameRuntimeModule = require("./runtime/GetChunkFilenameRuntimeModule");
const GetMainFilenameRuntimeModule = require("./runtime/GetMainFilenameRuntimeModule");
const GetTrustedTypesPolicyRuntimeModule = require("./runtime/GetTrustedTypesPolicyRuntimeModule");
const GlobalRuntimeModule = require("./runtime/GlobalRuntimeModule");
const HasOwnPropertyRuntimeModule = require("./runtime/HasOwnPropertyRuntimeModule");
const LoadScriptRuntimeModule = require("./runtime/LoadScriptRuntimeModule");
const MakeNamespaceObjectRuntimeModule = require("./runtime/MakeNamespaceObjectRuntimeModule");
const NonceRuntimeModule = require("./runtime/NonceRuntimeModule");
const OnChunksLoadedRuntimeModule = require("./runtime/OnChunksLoadedRuntimeModule");
const PublicPathRuntimeModule = require("./runtime/PublicPathRuntimeModule");
const RelativeUrlRuntimeModule = require("./runtime/RelativeUrlRuntimeModule");
const RuntimeIdRuntimeModule = require("./runtime/RuntimeIdRuntimeModule");
const SystemContextRuntimeModule = require("./runtime/SystemContextRuntimeModule");
const ShareRuntimeModule = require("./sharing/ShareRuntimeModule");
const StringXor = require("./util/StringXor");
const memoize = require("./util/memoize");

/** @typedef {import("../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../declarations/WebpackOptions").OutputNormalized} OutputNormalized */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */

const getJavascriptModulesPlugin = memoize(() =>
	require("./javascript/JavascriptModulesPlugin")
);
const getCssModulesPlugin = memoize(() => require("./css/CssModulesPlugin"));

const GLOBALS_ON_REQUIRE = [
	RuntimeGlobals.chunkName,
	RuntimeGlobals.runtimeId,
	RuntimeGlobals.compatGetDefaultExport,
	RuntimeGlobals.createFakeNamespaceObject,
	RuntimeGlobals.createScript,
	RuntimeGlobals.createScriptUrl,
	RuntimeGlobals.getTrustedTypesPolicy,
	RuntimeGlobals.definePropertyGetters,
	RuntimeGlobals.ensureChunk,
	RuntimeGlobals.entryModuleId,
	RuntimeGlobals.getFullHash,
	RuntimeGlobals.global,
	RuntimeGlobals.makeNamespaceObject,
	RuntimeGlobals.moduleCache,
	RuntimeGlobals.moduleFactories,
	RuntimeGlobals.moduleFactoriesAddOnly,
	RuntimeGlobals.interceptModuleExecution,
	RuntimeGlobals.publicPath,
	RuntimeGlobals.baseURI,
	RuntimeGlobals.relativeUrl,
	// TODO webpack 6 - rename to nonce, because we use it for CSS too
	RuntimeGlobals.scriptNonce,
	RuntimeGlobals.uncaughtErrorHandler,
	RuntimeGlobals.asyncModule,
	RuntimeGlobals.wasmInstances,
	RuntimeGlobals.instantiateWasm,
	RuntimeGlobals.shareScopeMap,
	RuntimeGlobals.initializeSharing,
	RuntimeGlobals.loadScript,
	RuntimeGlobals.systemContext,
	RuntimeGlobals.onChunksLoaded
];

const MODULE_DEPENDENCIES = {
	[RuntimeGlobals.moduleLoaded]: [RuntimeGlobals.module],
	[RuntimeGlobals.moduleId]: [RuntimeGlobals.module]
};

const TREE_DEPENDENCIES = {
	[RuntimeGlobals.definePropertyGetters]: [RuntimeGlobals.hasOwnProperty],
	[RuntimeGlobals.compatGetDefaultExport]: [
		RuntimeGlobals.definePropertyGetters
	],
	[RuntimeGlobals.createFakeNamespaceObject]: [
		RuntimeGlobals.definePropertyGetters,
		RuntimeGlobals.makeNamespaceObject,
		RuntimeGlobals.require
	],
	[RuntimeGlobals.initializeSharing]: [RuntimeGlobals.shareScopeMap],
	[RuntimeGlobals.shareScopeMap]: [RuntimeGlobals.hasOwnProperty]
};

class RuntimePlugin {
	/**
	 * @param {Compiler} compiler the Compiler
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("RuntimePlugin", compilation => {
			const globalChunkLoading = compilation.outputOptions.chunkLoading;
			/**
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, when chunk loading is disabled for the chunk
			 */
			const isChunkLoadingDisabledForChunk = chunk => {
				const options = chunk.getEntryOptions();
				const chunkLoading =
					options && options.chunkLoading !== undefined
						? options.chunkLoading
						: globalChunkLoading;
				return chunkLoading === false;
			};
			compilation.dependencyTemplates.set(
				RuntimeRequirementsDependency,
				new RuntimeRequirementsDependency.Template()
			);
			for (const req of GLOBALS_ON_REQUIRE) {
				compilation.hooks.runtimeRequirementInModule
					.for(req)
					.tap("RuntimePlugin", (module, set) => {
						set.add(RuntimeGlobals.requireScope);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(req)
					.tap("RuntimePlugin", (module, set) => {
						set.add(RuntimeGlobals.requireScope);
					});
			}
			for (const req of Object.keys(TREE_DEPENDENCIES)) {
				const deps =
					TREE_DEPENDENCIES[/** @type {keyof TREE_DEPENDENCIES} */ (req)];
				compilation.hooks.runtimeRequirementInTree
					.for(req)
					.tap("RuntimePlugin", (chunk, set) => {
						for (const dep of deps) set.add(dep);
					});
			}
			for (const req of Object.keys(MODULE_DEPENDENCIES)) {
				const deps =
					MODULE_DEPENDENCIES[/** @type {keyof MODULE_DEPENDENCIES} */ (req)];
				compilation.hooks.runtimeRequirementInModule
					.for(req)
					.tap("RuntimePlugin", (chunk, set) => {
						for (const dep of deps) set.add(dep);
					});
			}
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.definePropertyGetters)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(
						chunk,
						new DefinePropertyGettersRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.makeNamespaceObject)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(
						chunk,
						new MakeNamespaceObjectRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.createFakeNamespaceObject)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(
						chunk,
						new CreateFakeNamespaceObjectRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hasOwnProperty)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(
						chunk,
						new HasOwnPropertyRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.compatGetDefaultExport)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(
						chunk,
						new CompatGetDefaultExportRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.runtimeId)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(chunk, new RuntimeIdRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.publicPath)
				.tap("RuntimePlugin", (chunk, set) => {
					const { outputOptions } = compilation;
					const { publicPath: globalPublicPath, scriptType } = outputOptions;
					const entryOptions = chunk.getEntryOptions();
					const publicPath =
						entryOptions && entryOptions.publicPath !== undefined
							? entryOptions.publicPath
							: globalPublicPath;

					if (publicPath === "auto") {
						const module = new AutoPublicPathRuntimeModule();
						if (scriptType !== "module") set.add(RuntimeGlobals.global);
						compilation.addRuntimeModule(chunk, module);
					} else {
						const module = new PublicPathRuntimeModule(publicPath);

						if (
							typeof publicPath !== "string" ||
							/\[(full)?hash\]/.test(publicPath)
						) {
							module.fullHash = true;
						}

						compilation.addRuntimeModule(chunk, module);
					}
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.global)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(chunk, new GlobalRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.asyncModule)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(chunk, new AsyncModuleRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.systemContext)
				.tap("RuntimePlugin", chunk => {
					const entryOptions = chunk.getEntryOptions();
					const libraryType =
						entryOptions && entryOptions.library !== undefined
							? entryOptions.library.type
							: /** @type {LibraryOptions} */
								(compilation.outputOptions.library).type;

					if (libraryType === "system") {
						compilation.addRuntimeModule(
							chunk,
							new SystemContextRuntimeModule()
						);
					}
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.getChunkScriptFilename)
				.tap("RuntimePlugin", (chunk, set, { chunkGraph }) => {
					if (
						typeof compilation.outputOptions.chunkFilename === "string" &&
						/\[(full)?hash(:\d+)?\]/.test(
							compilation.outputOptions.chunkFilename
						)
					) {
						set.add(RuntimeGlobals.getFullHash);
					}
					compilation.addRuntimeModule(
						chunk,
						new GetChunkFilenameRuntimeModule(
							"javascript",
							"javascript",
							RuntimeGlobals.getChunkScriptFilename,
							chunk =>
								getJavascriptModulesPlugin().chunkHasJs(chunk, chunkGraph) &&
								/** @type {TemplatePath} */ (
									chunk.filenameTemplate ||
										(chunk.canBeInitial()
											? compilation.outputOptions.filename
											: compilation.outputOptions.chunkFilename)
								),
							false
						)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.getChunkCssFilename)
				.tap("RuntimePlugin", (chunk, set, { chunkGraph }) => {
					if (
						typeof compilation.outputOptions.cssChunkFilename === "string" &&
						/\[(full)?hash(:\d+)?\]/.test(
							compilation.outputOptions.cssChunkFilename
						)
					) {
						set.add(RuntimeGlobals.getFullHash);
					}
					compilation.addRuntimeModule(
						chunk,
						new GetChunkFilenameRuntimeModule(
							"css",
							"css",
							RuntimeGlobals.getChunkCssFilename,
							chunk =>
								getCssModulesPlugin().chunkHasCss(chunk, chunkGraph) &&
								getChunkFilenameTemplate(chunk, compilation.outputOptions),
							set.has(RuntimeGlobals.hmrDownloadUpdateHandlers)
						)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.getChunkUpdateScriptFilename)
				.tap("RuntimePlugin", (chunk, set) => {
					if (
						/\[(full)?hash(:\d+)?\]/.test(
							/** @type {NonNullable<OutputNormalized["hotUpdateChunkFilename"]>} */
							(compilation.outputOptions.hotUpdateChunkFilename)
						)
					)
						set.add(RuntimeGlobals.getFullHash);
					compilation.addRuntimeModule(
						chunk,
						new GetChunkFilenameRuntimeModule(
							"javascript",
							"javascript update",
							RuntimeGlobals.getChunkUpdateScriptFilename,
							c =>
								/** @type {NonNullable<OutputNormalized["hotUpdateChunkFilename"]>} */
								(compilation.outputOptions.hotUpdateChunkFilename),
							true
						)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.getUpdateManifestFilename)
				.tap("RuntimePlugin", (chunk, set) => {
					if (
						/\[(full)?hash(:\d+)?\]/.test(
							/** @type {NonNullable<OutputNormalized["hotUpdateMainFilename"]>} */
							(compilation.outputOptions.hotUpdateMainFilename)
						)
					) {
						set.add(RuntimeGlobals.getFullHash);
					}
					compilation.addRuntimeModule(
						chunk,
						new GetMainFilenameRuntimeModule(
							"update manifest",
							RuntimeGlobals.getUpdateManifestFilename,
							/** @type {NonNullable<OutputNormalized["hotUpdateMainFilename"]>} */
							(compilation.outputOptions.hotUpdateMainFilename)
						)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunk)
				.tap("RuntimePlugin", (chunk, set) => {
					const hasAsyncChunks = chunk.hasAsyncChunks();
					if (hasAsyncChunks) {
						set.add(RuntimeGlobals.ensureChunkHandlers);
					}
					compilation.addRuntimeModule(
						chunk,
						new EnsureChunkRuntimeModule(set)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkIncludeEntries)
				.tap("RuntimePlugin", (chunk, set) => {
					set.add(RuntimeGlobals.ensureChunkHandlers);
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.shareScopeMap)
				.tap("RuntimePlugin", (chunk, set) => {
					compilation.addRuntimeModule(chunk, new ShareRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.loadScript)
				.tap("RuntimePlugin", (chunk, set) => {
					const withCreateScriptUrl = Boolean(
						compilation.outputOptions.trustedTypes
					);
					if (withCreateScriptUrl) {
						set.add(RuntimeGlobals.createScriptUrl);
					}
					const withFetchPriority = set.has(RuntimeGlobals.hasFetchPriority);
					compilation.addRuntimeModule(
						chunk,
						new LoadScriptRuntimeModule(withCreateScriptUrl, withFetchPriority)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.createScript)
				.tap("RuntimePlugin", (chunk, set) => {
					if (compilation.outputOptions.trustedTypes) {
						set.add(RuntimeGlobals.getTrustedTypesPolicy);
					}
					compilation.addRuntimeModule(chunk, new CreateScriptRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.createScriptUrl)
				.tap("RuntimePlugin", (chunk, set) => {
					if (compilation.outputOptions.trustedTypes) {
						set.add(RuntimeGlobals.getTrustedTypesPolicy);
					}
					compilation.addRuntimeModule(
						chunk,
						new CreateScriptUrlRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.getTrustedTypesPolicy)
				.tap("RuntimePlugin", (chunk, set) => {
					compilation.addRuntimeModule(
						chunk,
						new GetTrustedTypesPolicyRuntimeModule(set)
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.relativeUrl)
				.tap("RuntimePlugin", (chunk, set) => {
					compilation.addRuntimeModule(chunk, new RelativeUrlRuntimeModule());
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.onChunksLoaded)
				.tap("RuntimePlugin", (chunk, set) => {
					compilation.addRuntimeModule(
						chunk,
						new OnChunksLoadedRuntimeModule()
					);
					return true;
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.baseURI)
				.tap("RuntimePlugin", chunk => {
					if (isChunkLoadingDisabledForChunk(chunk)) {
						compilation.addRuntimeModule(chunk, new BaseUriRuntimeModule());
						return true;
					}
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.scriptNonce)
				.tap("RuntimePlugin", chunk => {
					compilation.addRuntimeModule(chunk, new NonceRuntimeModule());
					return true;
				});
			// TODO webpack 6: remove CompatRuntimeModule
			compilation.hooks.additionalTreeRuntimeRequirements.tap(
				"RuntimePlugin",
				(chunk, set) => {
					const { mainTemplate } = compilation;
					if (
						mainTemplate.hooks.bootstrap.isUsed() ||
						mainTemplate.hooks.localVars.isUsed() ||
						mainTemplate.hooks.requireEnsure.isUsed() ||
						mainTemplate.hooks.requireExtensions.isUsed()
					) {
						compilation.addRuntimeModule(chunk, new CompatRuntimeModule());
					}
				}
			);
			JavascriptModulesPlugin.getCompilationHooks(compilation).chunkHash.tap(
				"RuntimePlugin",
				(chunk, hash, { chunkGraph }) => {
					const xor = new StringXor();
					for (const m of chunkGraph.getChunkRuntimeModulesIterable(chunk)) {
						xor.add(chunkGraph.getModuleHash(m, chunk.runtime));
					}
					xor.updateHash(hash);
				}
			);
		});
	}
}
module.exports = RuntimePlugin;
