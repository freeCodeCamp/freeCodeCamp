/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const path = require("path");
const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const Generator = require("../Generator");
const {
	ASSET_AND_CSS_URL_TYPES,
	ASSET_AND_JAVASCRIPT_AND_CSS_URL_TYPES,
	ASSET_AND_JAVASCRIPT_TYPES,
	ASSET_TYPES,
	CSS_TYPE,
	CSS_URL_TYPE,
	CSS_URL_TYPES,
	JAVASCRIPT_AND_CSS_URL_TYPES,
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES,
	NO_TYPES
} = require("../ModuleSourceTypeConstants");
const { ASSET_MODULE_TYPE } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const CssUrlDependency = require("../dependencies/CssUrlDependency");
const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const memoize = require("../util/memoize");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");

const getMimeTypes = memoize(() => require("../util/mimeTypes"));

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").AssetGeneratorDataUrlOptions} AssetGeneratorDataUrlOptions */
/** @typedef {import("../../declarations/WebpackOptions").AssetGeneratorOptions} AssetGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").AssetModuleFilename} AssetModuleFilename */
/** @typedef {import("../../declarations/WebpackOptions").AssetModuleOutputPath} AssetModuleOutputPath */
/** @typedef {import("../../declarations/WebpackOptions").AssetResourceGeneratorOptions} AssetResourceGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").RawPublicPath} RawPublicPath */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Generator").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").NameForCondition} NameForCondition */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {(source: string | Buffer, context: { filename: string, module: Module }) => string} DataUrlFunction */

/**
 * Merges maybe arrays.
 * @template T
 * @template U
 * @param {null | string | T[] | Set<T> | undefined} a a
 * @param {null | string | U[] | Set<U> | undefined} b b
 * @returns {T[] & U[]} array
 */
const mergeMaybeArrays = (a, b) => {
	/** @type {Set<T | U | null | undefined | string | Set<T> | Set<U>>} */
	const set = new Set();
	if (Array.isArray(a)) for (const item of a) set.add(item);
	else set.add(a);
	if (Array.isArray(b)) for (const item of b) set.add(item);
	else set.add(b);
	return /** @type {T[] & U[]} */ ([.../** @type {Set<T | U>} */ (set)]);
};

/**
 * Merges the provided values into a single result.
 * @param {AssetInfo} a a
 * @param {AssetInfo} b b
 * @returns {AssetInfo} object
 */
const mergeAssetInfo = (a, b) => {
	/** @type {AssetInfo} */
	const result = { ...a, ...b };
	for (const key of Object.keys(a)) {
		if (key in b) {
			if (a[key] === b[key]) continue;
			switch (key) {
				case "fullhash":
				case "chunkhash":
				case "modulehash":
				case "contenthash":
					result[key] = mergeMaybeArrays(a[key], b[key]);
					break;
				case "immutable":
				case "development":
				case "hotModuleReplacement":
				case "javascriptModule":
					result[key] = a[key] || b[key];
					break;
				case "related":
					result[key] = mergeRelatedInfo(
						/** @type {NonNullable<AssetInfo["related"]>} */
						(a[key]),
						/** @type {NonNullable<AssetInfo["related"]>} */
						(b[key])
					);
					break;
				default:
					throw new Error(`Can't handle conflicting asset info for ${key}`);
			}
		}
	}
	return result;
};

/**
 * Merges related info.
 * @param {NonNullable<AssetInfo["related"]>} a a
 * @param {NonNullable<AssetInfo["related"]>} b b
 * @returns {NonNullable<AssetInfo["related"]>} object
 */
const mergeRelatedInfo = (a, b) => {
	const result = { ...a, ...b };
	for (const key of Object.keys(a)) {
		if (key in b) {
			if (a[key] === b[key]) continue;
			result[key] = mergeMaybeArrays(a[key], b[key]);
		}
	}
	return result;
};

/**
 * Encodes the provided encoding.
 * @param {"base64" | false} encoding encoding
 * @param {Source} source source
 * @returns {string} encoded data
 */
const encodeDataUri = (encoding, source) => {
	/** @type {string | undefined} */
	let encodedContent;

	switch (encoding) {
		case "base64": {
			encodedContent = source.buffer().toString("base64");
			break;
		}
		case false: {
			const content = source.source();

			if (typeof content !== "string") {
				encodedContent = content.toString("utf8");
			}

			encodedContent = encodeURIComponent(
				/** @type {string} */
				(encodedContent)
			).replace(
				/[!'()*]/g,
				(character) =>
					`%${/** @type {number} */ (character.codePointAt(0)).toString(16)}`
			);
			break;
		}
		default:
			throw new Error(`Unsupported encoding '${encoding}'`);
	}

	return encodedContent;
};

/**
 * Decodes data uri content.
 * @param {"base64" | false} encoding encoding
 * @param {string} content content
 * @returns {Buffer} decoded content
 */
const decodeDataUriContent = (encoding, content) => {
	const isBase64 = encoding === "base64";

	if (isBase64) {
		return Buffer.from(content, "base64");
	}

	// If we can't decode return the original body
	try {
		return Buffer.from(decodeURIComponent(content), "ascii");
	} catch (_) {
		return Buffer.from(content, "ascii");
	}
};

const DEFAULT_ENCODING = "base64";

class AssetGenerator extends Generator {
	/**
	 * Creates an instance of AssetGenerator.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {AssetGeneratorOptions["dataUrl"]=} dataUrlOptions the options for the data url
	 * @param {AssetModuleFilename=} filename override for output.assetModuleFilename
	 * @param {RawPublicPath=} publicPath override for output.assetModulePublicPath
	 * @param {AssetModuleOutputPath=} outputPath the output path for the emitted file which is not included in the runtime import
	 * @param {boolean=} emit generate output asset
	 */
	constructor(
		moduleGraph,
		dataUrlOptions,
		filename,
		publicPath,
		outputPath,
		emit
	) {
		super();
		/** @type {AssetGeneratorOptions["dataUrl"] | undefined} */
		this.dataUrlOptions = dataUrlOptions;
		/** @type {AssetModuleFilename | undefined} */
		this.filename = filename;
		/** @type {RawPublicPath | undefined} */
		this.publicPath = publicPath;
		/** @type {AssetModuleOutputPath | undefined} */
		this.outputPath = outputPath;
		/** @type {boolean | undefined} */
		this.emit = emit;
		/** @type {ModuleGraph} */
		this._moduleGraph = moduleGraph;
	}

	/**
	 * Gets source file name.
	 * @param {NormalModule} module module
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @returns {string} source file name
	 */
	static getSourceFileName(module, runtimeTemplate) {
		return makePathsRelative(
			runtimeTemplate.compilation.compiler.context,
			/** @type {string} */
			(module.getResource()),
			runtimeTemplate.compilation.compiler.root
		).replace(/^\.\//, "");
	}

	/**
	 * Gets full content hash.
	 * @param {NormalModule} module module
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @returns {[string, string]} return full hash and non-numeric full hash
	 */
	static getFullContentHash(module, runtimeTemplate) {
		const hash = createHash(runtimeTemplate.outputOptions.hashFunction);

		if (runtimeTemplate.outputOptions.hashSalt) {
			hash.update(runtimeTemplate.outputOptions.hashSalt);
		}

		const source = module.originalSource();

		if (source) {
			hash.update(source.buffer());
		}

		if (module.error) {
			hash.update(module.error.toString());
		}

		const fullContentHash = hash.digest(
			runtimeTemplate.outputOptions.hashDigest
		);

		const contentHash = nonNumericOnlyHash(
			fullContentHash,
			runtimeTemplate.outputOptions.hashDigestLength
		);

		return [fullContentHash, contentHash];
	}

	/**
	 * Gets filename with info.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {Pick<AssetResourceGeneratorOptions, "filename" | "outputPath">} generatorOptions generator options
	 * @param {{ runtime: RuntimeSpec, runtimeTemplate: RuntimeTemplate, chunkGraph: ChunkGraph }} generateContext context for generate
	 * @param {string} contentHash the content hash
	 * @returns {{ filename: string, originalFilename: string, assetInfo: AssetInfo }} info
	 */
	static getFilenameWithInfo(
		module,
		generatorOptions,
		{ runtime, runtimeTemplate, chunkGraph },
		contentHash
	) {
		const assetModuleFilename =
			generatorOptions.filename ||
			runtimeTemplate.outputOptions.assetModuleFilename;

		const sourceFilename = AssetGenerator.getSourceFileName(
			module,
			runtimeTemplate
		);
		let { path: filename, info: assetInfo } =
			runtimeTemplate.compilation.getAssetPathWithInfo(assetModuleFilename, {
				module,
				runtime,
				filename: sourceFilename,
				chunkGraph,
				contentHash
			});

		const originalFilename = filename;

		if (generatorOptions.outputPath) {
			const { path: outputPath, info } =
				runtimeTemplate.compilation.getAssetPathWithInfo(
					generatorOptions.outputPath,
					{
						module,
						runtime,
						filename: sourceFilename,
						chunkGraph,
						contentHash
					}
				);
			filename = path.posix.join(outputPath, filename);
			assetInfo = mergeAssetInfo(assetInfo, info);
		}

		return { originalFilename, filename, assetInfo };
	}

	/**
	 * Gets asset path with info.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {Pick<AssetResourceGeneratorOptions, "publicPath">} generatorOptions generator options
	 * @param {GenerateContext} generateContext context for generate
	 * @param {string} filename the filename
	 * @param {AssetInfo} assetInfo the asset info
	 * @param {string} contentHash the content hash
	 * @returns {{ assetPath: string, assetInfo: AssetInfo }} asset path and info
	 */
	static getAssetPathWithInfo(
		module,
		generatorOptions,
		{ runtime, runtimeTemplate, type, chunkGraph, runtimeRequirements },
		filename,
		assetInfo,
		contentHash
	) {
		const sourceFilename = AssetGenerator.getSourceFileName(
			module,
			runtimeTemplate
		);

		/** @type {undefined | string} */
		let assetPath;

		if (generatorOptions.publicPath !== undefined && type === JAVASCRIPT_TYPE) {
			const { path, info } = runtimeTemplate.compilation.getAssetPathWithInfo(
				generatorOptions.publicPath,
				{
					module,
					runtime,
					filename: sourceFilename,
					chunkGraph,
					contentHash
				}
			);
			assetInfo = mergeAssetInfo(assetInfo, info);
			assetPath = JSON.stringify(path + filename);
		} else if (
			generatorOptions.publicPath !== undefined &&
			type === CSS_URL_TYPE
		) {
			const { path, info } = runtimeTemplate.compilation.getAssetPathWithInfo(
				generatorOptions.publicPath,
				{
					module,
					runtime,
					filename: sourceFilename,
					chunkGraph,
					contentHash
				}
			);
			assetInfo = mergeAssetInfo(assetInfo, info);
			assetPath = path + filename;
		} else if (type === JAVASCRIPT_TYPE) {
			// add __webpack_require__.p
			runtimeRequirements.add(RuntimeGlobals.publicPath);
			assetPath = runtimeTemplate.concatenation(
				{ expr: RuntimeGlobals.publicPath },
				filename
			);
		} else if (type === CSS_URL_TYPE) {
			const compilation = runtimeTemplate.compilation;
			const path =
				compilation.outputOptions.publicPath === "auto"
					? CssUrlDependency.PUBLIC_PATH_AUTO
					: compilation.getAssetPath(compilation.outputOptions.publicPath, {
							hash: compilation.hash
						});

			assetPath = path + filename;
		}

		return {
			assetPath: /** @type {string} */ (assetPath),
			assetInfo: { sourceFilename, ...assetInfo }
		};
	}

	/**
	 * Returns the reason this module cannot be concatenated, when one exists.
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return undefined;
	}

	/**
	 * Returns mime type.
	 * @param {NormalModule} module module
	 * @returns {string} mime type
	 */
	getMimeType(module) {
		if (typeof this.dataUrlOptions === "function") {
			throw new Error(
				"This method must not be called when dataUrlOptions is a function"
			);
		}

		/** @type {string | undefined} */
		let mimeType =
			/** @type {AssetGeneratorDataUrlOptions} */
			(this.dataUrlOptions).mimetype;
		if (mimeType === undefined) {
			const ext = path.extname(
				/** @type {NameForCondition} */
				(module.nameForCondition())
			);
			if (
				module.resourceResolveData &&
				module.resourceResolveData.mimetype !== undefined
			) {
				mimeType =
					module.resourceResolveData.mimetype +
					module.resourceResolveData.parameters;
			} else if (ext) {
				mimeType = getMimeTypes().lookup(ext);

				if (typeof mimeType !== "string") {
					throw new Error(
						"DataUrl can't be generated automatically, " +
							`because there is no mimetype for "${ext}" in mimetype database. ` +
							'Either pass a mimetype via "generator.mimetype" or ' +
							'use type: "asset/resource" to create a resource file instead of a DataUrl'
					);
				}
			}
		}

		if (typeof mimeType !== "string") {
			throw new Error(
				"DataUrl can't be generated automatically. " +
					'Either pass a mimetype via "generator.mimetype" or ' +
					'use type: "asset/resource" to create a resource file instead of a DataUrl'
			);
		}

		return /** @type {string} */ (mimeType);
	}

	/**
	 * Generates data uri.
	 * @param {NormalModule} module module for which the code should be generated
	 * @returns {string} DataURI
	 */
	generateDataUri(module) {
		const source = /** @type {Source} */ (module.originalSource());

		/** @type {string} */
		let encodedSource;

		if (typeof this.dataUrlOptions === "function") {
			encodedSource = this.dataUrlOptions.call(null, source.source(), {
				filename: /** @type {string} */ (module.getResource()),
				module
			});
		} else {
			let encoding =
				/** @type {AssetGeneratorDataUrlOptions} */
				(this.dataUrlOptions).encoding;
			if (
				encoding === undefined &&
				module.resourceResolveData &&
				module.resourceResolveData.encoding !== undefined
			) {
				encoding = module.resourceResolveData.encoding;
			}
			if (encoding === undefined) {
				encoding = DEFAULT_ENCODING;
			}
			const mimeType = this.getMimeType(module);

			/** @type {string} */
			let encodedContent;

			if (
				module.resourceResolveData &&
				module.resourceResolveData.encoding === encoding &&
				decodeDataUriContent(
					module.resourceResolveData.encoding,
					/** @type {string} */ (module.resourceResolveData.encodedContent)
				).equals(source.buffer())
			) {
				encodedContent =
					/** @type {string} */
					(module.resourceResolveData.encodedContent);
			} else {
				encodedContent = encodeDataUri(
					/** @type {"base64" | false} */ (encoding),
					source
				);
			}

			encodedSource = `data:${mimeType}${
				encoding ? `;${encoding}` : ""
			},${encodedContent}`;
		}

		return encodedSource;
	}

	/**
	 * Generates generated code for this runtime module.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		const {
			type,
			getData,
			runtimeTemplate,
			runtimeRequirements,
			concatenationScope
		} = generateContext;

		/** @type {string} */
		let content;

		const needContent = type === JAVASCRIPT_TYPE || type === CSS_URL_TYPE;
		const data = getData ? getData() : undefined;

		if (
			/** @type {BuildInfo} */
			(module.buildInfo).dataUrl &&
			needContent
		) {
			const encodedSource = this.generateDataUri(module);
			content =
				type === JAVASCRIPT_TYPE
					? JSON.stringify(encodedSource)
					: encodedSource;

			if (data) {
				data.set("url", { [type]: content, ...data.get("url") });
			}
		} else {
			const [fullContentHash, contentHash] = AssetGenerator.getFullContentHash(
				module,
				runtimeTemplate
			);

			if (data) {
				data.set("fullContentHash", fullContentHash);
				data.set("contentHash", contentHash);
			}

			/** @type {BuildInfo} */
			(module.buildInfo).fullContentHash = fullContentHash;

			const { originalFilename, filename, assetInfo } =
				AssetGenerator.getFilenameWithInfo(
					module,
					{ filename: this.filename, outputPath: this.outputPath },
					generateContext,
					contentHash
				);

			if (data) {
				data.set("filename", filename);
			}

			let { assetPath, assetInfo: newAssetInfo } =
				AssetGenerator.getAssetPathWithInfo(
					module,
					{ publicPath: this.publicPath },
					generateContext,
					originalFilename,
					assetInfo,
					contentHash
				);

			if (data && (type === JAVASCRIPT_TYPE || type === CSS_URL_TYPE)) {
				data.set("url", { [type]: assetPath, ...data.get("url") });
			}

			if (data) {
				const oldAssetInfo = data.get("assetInfo");

				if (oldAssetInfo) {
					newAssetInfo = mergeAssetInfo(oldAssetInfo, newAssetInfo);
				}
			}

			if (data) {
				data.set("assetInfo", newAssetInfo);
			}

			// Due to code generation caching module.buildInfo.XXX can't used to store such information
			// It need to be stored in the code generation results instead, where it's cached too
			// TODO webpack 6 For back-compat reasons we also store in on module.buildInfo
			/** @type {BuildInfo} */
			(module.buildInfo).filename = filename;

			/** @type {BuildInfo} */
			(module.buildInfo).assetInfo = newAssetInfo;

			content = assetPath;
		}

		if (type === JAVASCRIPT_TYPE) {
			if (concatenationScope) {
				concatenationScope.registerNamespaceExport(
					ConcatenationScope.NAMESPACE_OBJECT_EXPORT
				);

				return new RawSource(
					`${runtimeTemplate.renderConst()} ${
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					} = ${content};`
				);
			}

			runtimeRequirements.add(RuntimeGlobals.module);

			return new RawSource(`${module.moduleArgument}.exports = ${content};`);
		} else if (type === CSS_URL_TYPE) {
			return null;
		}

		return /** @type {Source} */ (module.originalSource());
	}

	/**
	 * Generates fallback output for the provided error condition.
	 * @param {Error} error the error
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generateError(error, module, generateContext) {
		switch (generateContext.type) {
			case "asset": {
				return new RawSource(error.message);
			}
			case JAVASCRIPT_TYPE: {
				return new RawSource(
					`throw new Error(${JSON.stringify(error.message)});`
				);
			}
			default:
				return null;
		}
	}

	/**
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		/** @type {Set<string>} */
		const sourceTypes = new Set();
		const connections = this._moduleGraph.getIncomingConnections(module);

		for (const connection of connections) {
			if (!connection.originModule) {
				continue;
			}

			sourceTypes.add(connection.originModule.type.split("/")[0]);
		}

		if ((module.buildInfo && module.buildInfo.dataUrl) || this.emit === false) {
			if (sourceTypes.size > 0) {
				if (sourceTypes.has(JAVASCRIPT_TYPE) && sourceTypes.has(CSS_TYPE)) {
					return JAVASCRIPT_AND_CSS_URL_TYPES;
				} else if (sourceTypes.has(CSS_TYPE)) {
					return CSS_URL_TYPES;
				}
				return JAVASCRIPT_TYPES;
			}

			return NO_TYPES;
		}

		if (sourceTypes.size > 0) {
			if (sourceTypes.has(JAVASCRIPT_TYPE) && sourceTypes.has(CSS_TYPE)) {
				return ASSET_AND_JAVASCRIPT_AND_CSS_URL_TYPES;
			} else if (sourceTypes.has(CSS_TYPE)) {
				return ASSET_AND_CSS_URL_TYPES;
			}
			return ASSET_AND_JAVASCRIPT_TYPES;
		}

		return ASSET_TYPES;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		switch (type) {
			case ASSET_MODULE_TYPE: {
				const originalSource = module.originalSource();

				if (!originalSource) {
					return 0;
				}

				return originalSource.size();
			}
			default:
				if (module.buildInfo && module.buildInfo.dataUrl) {
					const originalSource = module.originalSource();

					if (!originalSource) {
						return 0;
					}

					// roughly for data url
					// Example: m.exports="data:image/png;base64,ag82/f+2=="
					// 4/3 = base64 encoding
					// 34 = ~ data url header + footer + rounding
					return originalSource.size() * 1.34 + 36;
				}
				// it's only estimated so this number is probably fine
				// Example: m.exports=r.p+"0123456789012345678901.ext"
				return 42;
		}
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash that will be modified
	 * @param {UpdateHashContext} updateHashContext context for updating hash
	 */
	updateHash(hash, updateHashContext) {
		const { module } = updateHashContext;

		if (
			/** @type {BuildInfo} */
			(module.buildInfo).dataUrl
		) {
			hash.update("data-url");
			// this.dataUrlOptions as function should be pure and only depend on input source and filename
			// therefore it doesn't need to be hashed
			if (typeof this.dataUrlOptions === "function") {
				const ident = /** @type {{ ident?: string }} */ (this.dataUrlOptions)
					.ident;
				if (ident) hash.update(ident);
			} else {
				const dataUrlOptions =
					/** @type {AssetGeneratorDataUrlOptions} */
					(this.dataUrlOptions);
				if (
					dataUrlOptions.encoding &&
					dataUrlOptions.encoding !== DEFAULT_ENCODING
				) {
					hash.update(dataUrlOptions.encoding);
				}
				if (dataUrlOptions.mimetype) hash.update(dataUrlOptions.mimetype);
				// computed mimetype depends only on module filename which is already part of the hash
			}
		} else {
			hash.update("resource");

			const { module, chunkGraph, runtime } = updateHashContext;
			const runtimeTemplate =
				/** @type {NonNullable<UpdateHashContext["runtimeTemplate"]>} */
				(updateHashContext.runtimeTemplate);

			const pathData = {
				module,
				runtime,
				filename: AssetGenerator.getSourceFileName(module, runtimeTemplate),
				chunkGraph,
				contentHash: runtimeTemplate.contentHashReplacement
			};

			if (typeof this.publicPath === "function") {
				hash.update("path");
				const assetInfo = {};
				hash.update(this.publicPath(pathData, assetInfo));
				hash.update(JSON.stringify(assetInfo));
			} else if (this.publicPath) {
				hash.update("path");
				hash.update(this.publicPath);
			} else {
				hash.update("no-path");
			}

			const assetModuleFilename =
				this.filename || runtimeTemplate.outputOptions.assetModuleFilename;
			const { path: filename, info } =
				runtimeTemplate.compilation.getAssetPathWithInfo(
					assetModuleFilename,
					pathData
				);
			hash.update(filename);
			hash.update(JSON.stringify(info));
		}
	}
}

module.exports = AssetGenerator;
