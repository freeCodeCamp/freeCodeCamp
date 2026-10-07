/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const mimeTypes = require("mime-types");
const path = require("path");
const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const Generator = require("../Generator");
const {
	NO_TYPES,
	ASSET_TYPES,
	ASSET_AND_JS_TYPES,
	ASSET_AND_JS_AND_CSS_URL_TYPES,
	ASSET_AND_CSS_URL_TYPES,
	JS_TYPES,
	JS_AND_CSS_URL_TYPES,
	CSS_URL_TYPES
} = require("../ModuleSourceTypesConstants");
const { ASSET_MODULE_TYPE } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const CssUrlDependency = require("../dependencies/CssUrlDependency");
const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").AssetGeneratorDataUrlOptions} AssetGeneratorDataUrlOptions */
/** @typedef {import("../../declarations/WebpackOptions").AssetGeneratorOptions} AssetGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").AssetModuleFilename} AssetModuleFilename */
/** @typedef {import("../../declarations/WebpackOptions").AssetModuleOutputPath} AssetModuleOutputPath */
/** @typedef {import("../../declarations/WebpackOptions").RawPublicPath} RawPublicPath */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../Compilation").InterpolatedPathAndAssetInfo} InterpolatedPathAndAssetInfo */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Generator").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/createHash").Algorithm} Algorithm */

/**
 * @template T
 * @template U
 * @param {Array<T> | Set<T>} a a
 * @param {Array<U> | Set<U>} b b
 * @returns {Array<T> & Array<U>} array
 */
const mergeMaybeArrays = (a, b) => {
	const set = new Set();
	if (Array.isArray(a)) for (const item of a) set.add(item);
	else set.add(a);
	if (Array.isArray(b)) for (const item of b) set.add(item);
	else set.add(b);
	return Array.from(set);
};

/**
 * @template {object} T
 * @template {object} U
 * @param {TODO} a a
 * @param {TODO} b b
 * @returns {T & U} object
 */
const mergeAssetInfo = (a, b) => {
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
					result[key] = mergeRelatedInfo(a[key], b[key]);
					break;
				default:
					throw new Error(`Can't handle conflicting asset info for ${key}`);
			}
		}
	}
	return result;
};

/**
 * @template {object} T
 * @template {object} U
 * @param {TODO} a a
 * @param {TODO} b b
 * @returns {T & U} object
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
				encodedContent = content.toString("utf-8");
			}

			encodedContent = encodeURIComponent(
				/** @type {string} */
				(encodedContent)
			).replace(
				/[!'()*]/g,
				character =>
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
 * @param {string} encoding encoding
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
		this.dataUrlOptions = dataUrlOptions;
		this.filename = filename;
		this.publicPath = publicPath;
		this.outputPath = outputPath;
		this.emit = emit;
		this._moduleGraph = moduleGraph;
	}

	/**
	 * @param {NormalModule} module module
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @returns {string} source file name
	 */
	getSourceFileName(module, runtimeTemplate) {
		return makePathsRelative(
			runtimeTemplate.compilation.compiler.context,
			module.matchResource || module.resource,
			runtimeTemplate.compilation.compiler.root
		).replace(/^\.\//, "");
	}

	/**
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return undefined;
	}

	/**
	 * @param {NormalModule} module module
	 * @returns {string} mime type
	 */
	getMimeType(module) {
		if (typeof this.dataUrlOptions === "function") {
			throw new Error(
				"This method must not be called when dataUrlOptions is a function"
			);
		}

		/** @type {string | boolean | undefined} */
		let mimeType =
			/** @type {AssetGeneratorDataUrlOptions} */
			(this.dataUrlOptions).mimetype;
		if (mimeType === undefined) {
			const ext = path.extname(
				/** @type {string} */
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
				mimeType = mimeTypes.lookup(ext);

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
	 * @param {NormalModule} module module for which the code should be generated
	 * @returns {string} DataURI
	 */
	generateDataUri(module) {
		const source = /** @type {Source} */ (module.originalSource());

		let encodedSource;

		if (typeof this.dataUrlOptions === "function") {
			encodedSource = this.dataUrlOptions.call(null, source.source(), {
				filename: module.matchResource || module.resource,
				module
			});
		} else {
			/** @type {"base64" | false | undefined} */
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

			let encodedContent;

			if (
				module.resourceResolveData &&
				module.resourceResolveData.encoding === encoding &&
				decodeDataUriContent(
					module.resourceResolveData.encoding,
					module.resourceResolveData.encodedContent
				).equals(source.buffer())
			) {
				encodedContent = module.resourceResolveData.encodedContent;
			} else {
				encodedContent = encodeDataUri(encoding, source);
			}

			encodedSource = `data:${mimeType}${
				encoding ? `;${encoding}` : ""
			},${encodedContent}`;
		}

		return encodedSource;
	}

	/**
	 * @private
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @param {string} contentHash the content hash
	 * @returns {{ filename: string, originalFilename: string, assetInfo: AssetInfo }} info
	 */
	_getFilenameWithInfo(
		module,
		{ runtime, runtimeTemplate, chunkGraph },
		contentHash
	) {
		const assetModuleFilename =
			this.filename ||
			/** @type {AssetModuleFilename} */
			(runtimeTemplate.outputOptions.assetModuleFilename);

		const sourceFilename = this.getSourceFileName(module, runtimeTemplate);
		let { path: filename, info: assetInfo } =
			runtimeTemplate.compilation.getAssetPathWithInfo(assetModuleFilename, {
				module,
				runtime,
				filename: sourceFilename,
				chunkGraph,
				contentHash
			});

		const originalFilename = filename;

		if (this.outputPath) {
			const { path: outputPath, info } =
				runtimeTemplate.compilation.getAssetPathWithInfo(this.outputPath, {
					module,
					runtime,
					filename: sourceFilename,
					chunkGraph,
					contentHash
				});
			filename = path.posix.join(outputPath, filename);
			assetInfo = mergeAssetInfo(assetInfo, info);
		}

		return { originalFilename, filename, assetInfo };
	}

	/**
	 * @private
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @param {string} filename the filename
	 * @param {AssetInfo} assetInfo the asset info
	 * @param {string} contentHash the content hash
	 * @returns {{ assetPath: string, assetInfo: AssetInfo }} asset path and info
	 */
	_getAssetPathWithInfo(
		module,
		{ runtimeTemplate, runtime, chunkGraph, type, runtimeRequirements },
		filename,
		assetInfo,
		contentHash
	) {
		const sourceFilename = this.getSourceFileName(module, runtimeTemplate);

		let assetPath;

		if (this.publicPath !== undefined && type === "javascript") {
			const { path, info } = runtimeTemplate.compilation.getAssetPathWithInfo(
				this.publicPath,
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
		} else if (this.publicPath !== undefined && type === "css-url") {
			const { path, info } = runtimeTemplate.compilation.getAssetPathWithInfo(
				this.publicPath,
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
		} else if (type === "javascript") {
			// add __webpack_require__.p
			runtimeRequirements.add(RuntimeGlobals.publicPath);
			assetPath = runtimeTemplate.concatenation(
				{ expr: RuntimeGlobals.publicPath },
				filename
			);
		} else if (type === "css-url") {
			const compilation = runtimeTemplate.compilation;
			const path =
				compilation.outputOptions.publicPath === "auto"
					? CssUrlDependency.PUBLIC_PATH_AUTO
					: compilation.getAssetPath(
							/** @type {TemplatePath} */
							(compilation.outputOptions.publicPath),
							{
								hash: compilation.hash
							}
						);

			assetPath = path + filename;
		}

		return {
			// eslint-disable-next-line object-shorthand
			assetPath: /** @type {string} */ (assetPath),
			assetInfo: { sourceFilename, ...assetInfo }
		};
	}

	/**
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

		let content;

		const needContent = type === "javascript" || type === "css-url";

		const data = getData ? getData() : undefined;

		if (
			/** @type {BuildInfo} */
			(module.buildInfo).dataUrl &&
			needContent
		) {
			const encodedSource = this.generateDataUri(module);
			content =
				type === "javascript" ? JSON.stringify(encodedSource) : encodedSource;

			if (data) {
				data.set("url", { [type]: content, ...data.get("url") });
			}
		} else {
			const hash = createHash(
				/** @type {Algorithm} */
				(runtimeTemplate.outputOptions.hashFunction)
			);

			if (runtimeTemplate.outputOptions.hashSalt) {
				hash.update(runtimeTemplate.outputOptions.hashSalt);
			}

			hash.update(/** @type {Source} */ (module.originalSource()).buffer());

			const fullHash =
				/** @type {string} */
				(hash.digest(runtimeTemplate.outputOptions.hashDigest));

			if (data) {
				data.set("fullContentHash", fullHash);
			}

			/** @type {BuildInfo} */
			(module.buildInfo).fullContentHash = fullHash;

			/** @type {string} */
			const contentHash = nonNumericOnlyHash(
				fullHash,
				/** @type {number} */
				(generateContext.runtimeTemplate.outputOptions.hashDigestLength)
			);

			if (data) {
				data.set("contentHash", contentHash);
			}

			const { originalFilename, filename, assetInfo } =
				this._getFilenameWithInfo(module, generateContext, contentHash);

			if (data) {
				data.set("filename", filename);
			}

			let { assetPath, assetInfo: newAssetInfo } = this._getAssetPathWithInfo(
				module,
				generateContext,
				originalFilename,
				assetInfo,
				contentHash
			);

			if (data && (type === "javascript" || type === "css-url")) {
				data.set("url", { [type]: assetPath, ...data.get("url") });
			}

			if (data && data.get("assetInfo")) {
				newAssetInfo = mergeAssetInfo(data.get("assetInfo"), newAssetInfo);
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

		if (type === "javascript") {
			if (concatenationScope) {
				concatenationScope.registerNamespaceExport(
					ConcatenationScope.NAMESPACE_OBJECT_EXPORT
				);

				return new RawSource(
					`${runtimeTemplate.supportsConst() ? "const" : "var"} ${
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					} = ${content};`
				);
			}

			runtimeRequirements.add(RuntimeGlobals.module);

			return new RawSource(`${RuntimeGlobals.module}.exports = ${content};`);
		} else if (type === "css-url") {
			return null;
		}

		return /** @type {Source} */ (module.originalSource());
	}

	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		const sourceTypes = new Set();
		const connections = this._moduleGraph.getIncomingConnections(module);

		for (const connection of connections) {
			if (!connection.originModule) {
				continue;
			}

			sourceTypes.add(connection.originModule.type.split("/")[0]);
		}

		if ((module.buildInfo && module.buildInfo.dataUrl) || this.emit === false) {
			if (sourceTypes) {
				if (sourceTypes.has("javascript") && sourceTypes.has("css")) {
					return JS_AND_CSS_URL_TYPES;
				} else if (sourceTypes.has("javascript")) {
					return JS_TYPES;
				} else if (sourceTypes.has("css")) {
					return CSS_URL_TYPES;
				}
			}

			return NO_TYPES;
		}

		if (sourceTypes) {
			if (sourceTypes.has("javascript") && sourceTypes.has("css")) {
				return ASSET_AND_JS_AND_CSS_URL_TYPES;
			} else if (sourceTypes.has("javascript")) {
				return ASSET_AND_JS_TYPES;
			} else if (sourceTypes.has("css")) {
				return ASSET_AND_CSS_URL_TYPES;
			}
		}

		return ASSET_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
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
				filename: this.getSourceFileName(module, runtimeTemplate),
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
				this.filename ||
				/** @type {AssetModuleFilename} */
				(runtimeTemplate.outputOptions.assetModuleFilename);
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
