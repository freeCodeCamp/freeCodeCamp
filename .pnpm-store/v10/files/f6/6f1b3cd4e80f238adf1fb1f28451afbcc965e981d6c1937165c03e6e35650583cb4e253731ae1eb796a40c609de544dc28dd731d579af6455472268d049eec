/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Yuta Hiroto @hiroppy
*/

"use strict";

const {
	ASSET_MODULE_TYPE,
	ASSET_MODULE_TYPE_BYTES,
	ASSET_MODULE_TYPE_INLINE,
	ASSET_MODULE_TYPE_RESOURCE,
	ASSET_MODULE_TYPE_SOURCE
} = require("../ModuleTypeConstants");
const { compareModulesByFullName } = require("../util/comparators");
const memoize = require("../util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("schema-utils").Schema} Schema */
/** @typedef {import("../../declarations/WebpackOptions").AssetGeneratorDataUrl} AssetGeneratorDataUrl */
/** @typedef {import("../../declarations/WebpackOptions").AssetModuleOutputPath} AssetModuleOutputPath */
/** @typedef {import("../../declarations/WebpackOptions").RawPublicPath} RawPublicPath */
/** @typedef {import("../../declarations/WebpackOptions").FilenameTemplate} FilenameTemplate */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../NormalModule").NormalModuleCreateData} NormalModuleCreateData */

/**
 * Returns definition.
 * @param {string} name name of definitions
 * @returns {Schema} definition
 */
const getSchema = (name) => {
	const { definitions } = require("../../schemas/WebpackOptions.json");

	return {
		definitions,
		oneOf: [{ $ref: `#/definitions/${name}` }]
	};
};

const generatorValidationOptions = {
	name: "Asset Modules Plugin",
	baseDataPath: "generator"
};

const getAssetGenerator = memoize(() => require("./AssetGenerator"));
const getAssetParser = memoize(() => require("./AssetParser"));
const getAssetSourceParser = memoize(() => require("./AssetSourceParser"));
const getAssetBytesParser = memoize(() => require("./AssetBytesParser"));
const getAssetSourceGenerator = memoize(() =>
	require("./AssetSourceGenerator")
);
const getAssetBytesGenerator = memoize(() => require("./AssetBytesGenerator"));
const getNormalModule = memoize(() => require("../NormalModule"));

const type = ASSET_MODULE_TYPE;
const PLUGIN_NAME = "AssetModulesPlugin";

/**
 * Represents the asset modules plugin runtime component.
 * @typedef {object} AssetModulesPluginOptions
 * @property {boolean=} sideEffectFree
 */

class AssetModulesPlugin {
	/**
	 * Creates an instance of AssetModulesPlugin.
	 * @param {AssetModulesPluginOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const NormalModule = getNormalModule();
				for (const type of [
					ASSET_MODULE_TYPE,
					ASSET_MODULE_TYPE_BYTES,
					ASSET_MODULE_TYPE_INLINE,
					ASSET_MODULE_TYPE_RESOURCE,
					ASSET_MODULE_TYPE_SOURCE
				]) {
					normalModuleFactory.hooks.createModuleClass
						.for(type)
						.tap(PLUGIN_NAME, (createData, _resolveData) => {
							// TODO create the module via new AssetModule with its own properties
							const module = new NormalModule(
								/** @type {NormalModuleCreateData} */
								(createData)
							);
							if (this.options.sideEffectFree) {
								module.factoryMeta = { sideEffectFree: true };
							}

							return module;
						});
				}

				normalModuleFactory.hooks.createParser
					.for(ASSET_MODULE_TYPE)
					.tap(PLUGIN_NAME, (parserOptions) => {
						compiler.validate(
							() => getSchema("AssetParserOptions"),
							parserOptions,
							{
								name: "Asset Modules Plugin",
								baseDataPath: "parser"
							},
							(options) =>
								require("../../schemas/plugins/asset/AssetParserOptions.check")(
									options
								)
						);

						let dataUrlCondition = parserOptions.dataUrlCondition;
						if (!dataUrlCondition || typeof dataUrlCondition === "object") {
							dataUrlCondition = {
								maxSize: 8096,
								...dataUrlCondition
							};
						}

						const AssetParser = getAssetParser();

						return new AssetParser(dataUrlCondition);
					});
				normalModuleFactory.hooks.createParser
					.for(ASSET_MODULE_TYPE_INLINE)
					.tap(PLUGIN_NAME, (_parserOptions) => {
						const AssetParser = getAssetParser();

						return new AssetParser(true);
					});
				normalModuleFactory.hooks.createParser
					.for(ASSET_MODULE_TYPE_RESOURCE)
					.tap(PLUGIN_NAME, (_parserOptions) => {
						const AssetParser = getAssetParser();

						return new AssetParser(false);
					});
				normalModuleFactory.hooks.createParser
					.for(ASSET_MODULE_TYPE_SOURCE)
					.tap(PLUGIN_NAME, (_parserOptions) => {
						const AssetSourceParser = getAssetSourceParser();

						return new AssetSourceParser();
					});
				normalModuleFactory.hooks.createParser
					.for(ASSET_MODULE_TYPE_BYTES)
					.tap(PLUGIN_NAME, (_parserOptions) => {
						const AssetBytesParser = getAssetBytesParser();

						return new AssetBytesParser();
					});

				for (const type of [
					ASSET_MODULE_TYPE,
					ASSET_MODULE_TYPE_INLINE,
					ASSET_MODULE_TYPE_RESOURCE
				]) {
					normalModuleFactory.hooks.createGenerator
						.for(type)
						.tap(PLUGIN_NAME, (generatorOptions) => {
							switch (type) {
								case ASSET_MODULE_TYPE: {
									compiler.validate(
										() => getSchema("AssetGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/asset/AssetGeneratorOptions.check")(
												options
											)
									);
									break;
								}
								case ASSET_MODULE_TYPE_RESOURCE: {
									compiler.validate(
										() => getSchema("AssetResourceGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/asset/AssetResourceGeneratorOptions.check")(
												options
											)
									);
									break;
								}
								case ASSET_MODULE_TYPE_INLINE: {
									compiler.validate(
										() => getSchema("AssetInlineGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/asset/AssetInlineGeneratorOptions.check")(
												options
											)
									);
									break;
								}
							}

							/** @type {undefined | AssetGeneratorDataUrl} */
							let dataUrl;
							if (type !== ASSET_MODULE_TYPE_RESOURCE) {
								dataUrl = generatorOptions.dataUrl;
								if (!dataUrl || typeof dataUrl === "object") {
									dataUrl = {
										encoding: undefined,
										mimetype: undefined,
										...dataUrl
									};
								}
							}

							/** @type {undefined | FilenameTemplate} */
							let filename;
							/** @type {undefined | RawPublicPath} */
							let publicPath;
							/** @type {undefined | AssetModuleOutputPath} */
							let outputPath;
							if (type !== ASSET_MODULE_TYPE_INLINE) {
								filename = generatorOptions.filename;
								publicPath = generatorOptions.publicPath;
								outputPath = generatorOptions.outputPath;
							}

							const AssetGenerator = getAssetGenerator();

							return new AssetGenerator(
								compilation.moduleGraph,
								dataUrl,
								filename,
								publicPath,
								outputPath,
								generatorOptions.emit !== false
							);
						});
				}
				normalModuleFactory.hooks.createGenerator
					.for(ASSET_MODULE_TYPE_SOURCE)
					.tap(PLUGIN_NAME, () => {
						const AssetSourceGenerator = getAssetSourceGenerator();

						return new AssetSourceGenerator(compilation.moduleGraph);
					});

				normalModuleFactory.hooks.createGenerator
					.for(ASSET_MODULE_TYPE_BYTES)
					.tap(PLUGIN_NAME, () => {
						const AssetBytesGenerator = getAssetBytesGenerator();

						return new AssetBytesGenerator(compilation.moduleGraph);
					});

				compilation.hooks.renderManifest.tap(PLUGIN_NAME, (result, options) => {
					const { chunkGraph } = compilation;
					const { chunk, codeGenerationResults, runtimeTemplate } = options;

					const modules = chunkGraph.getOrderedChunkModulesIterableBySourceType(
						chunk,
						ASSET_MODULE_TYPE,
						compareModulesByFullName(compilation.compiler)
					);
					if (modules) {
						for (const module of modules) {
							try {
								const codeGenResult = codeGenerationResults.get(
									module,
									chunk.runtime
								);
								const buildInfo = /** @type {BuildInfo} */ (module.buildInfo);
								const data =
									/** @type {NonNullable<CodeGenerationResult["data"]>} */
									(codeGenResult.data);
								const errored = module.getNumberOfErrors() > 0;

								/** @type {string} */
								let entryFilename;
								/** @type {AssetInfo} */
								let entryInfo;
								/** @type {string} */
								let entryHash;

								if (errored) {
									const erroredModule = /** @type {NormalModule} */ (module);
									const AssetGenerator = getAssetGenerator();
									const [fullContentHash, contentHash] =
										AssetGenerator.getFullContentHash(
											erroredModule,
											runtimeTemplate
										);
									const { filename, assetInfo } =
										AssetGenerator.getFilenameWithInfo(
											erroredModule,
											{
												filename:
													erroredModule.generatorOptions &&
													erroredModule.generatorOptions.filename,
												outputPath:
													erroredModule.generatorOptions &&
													erroredModule.generatorOptions.outputPath
											},
											{
												runtime: chunk.runtime,
												runtimeTemplate,
												chunkGraph
											},
											contentHash
										);
									entryFilename = filename;
									entryInfo = assetInfo;
									entryHash = fullContentHash;
								} else {
									entryFilename =
										/** @type {string} */
										(buildInfo.filename || data.get("filename"));
									entryInfo =
										/** @type {AssetInfo} */
										(buildInfo.assetInfo || data.get("assetInfo"));
									entryHash =
										/** @type {string} */
										(buildInfo.fullContentHash || data.get("fullContentHash"));
								}

								result.push({
									render: () =>
										/** @type {Source} */ (codeGenResult.sources.get(type)),
									filename: entryFilename,
									info: entryInfo,
									auxiliary: true,
									identifier: `assetModule${chunkGraph.getModuleId(module)}`,
									hash: entryHash
								});
							} catch (err) {
								/** @type {Error} */ (err).message +=
									`\nduring rendering of asset ${module.identifier()}`;
								throw err;
							}
						}
					}

					return result;
				});

				compilation.hooks.prepareModuleExecution.tap(
					PLUGIN_NAME,
					(options, context) => {
						const { codeGenerationResult } = options;
						const source = codeGenerationResult.sources.get(ASSET_MODULE_TYPE);
						if (source === undefined) return;
						const data =
							/** @type {NonNullable<CodeGenerationResult["data"]>} */
							(codeGenerationResult.data);
						context.assets.set(
							/** @type {string} */
							(data.get("filename")),
							{
								source,
								info: data.get("assetInfo")
							}
						);
					}
				);
			}
		);
	}
}

module.exports = AssetModulesPlugin;
