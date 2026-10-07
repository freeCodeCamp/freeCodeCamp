/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const OriginalSource = require("webpack-sources").OriginalSource;
const Module = require("./Module");
const { RUNTIME_TYPES } = require("./ModuleSourceTypesConstants");
const { WEBPACK_MODULE_TYPE_RUNTIME } = require("./ModuleTypeConstants");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

class RuntimeModule extends Module {
	/**
	 * @param {string} name a readable name
	 * @param {number=} stage an optional stage
	 */
	constructor(name, stage = 0) {
		super(WEBPACK_MODULE_TYPE_RUNTIME);
		this.name = name;
		this.stage = stage;
		this.buildMeta = {};
		this.buildInfo = {};
		/** @type {Compilation | undefined} */
		this.compilation = undefined;
		/** @type {Chunk | undefined} */
		this.chunk = undefined;
		/** @type {ChunkGraph | undefined} */
		this.chunkGraph = undefined;
		this.fullHash = false;
		this.dependentHash = false;
		/** @type {string | undefined | null} */
		this._cachedGeneratedCode = undefined;
	}

	/**
	 * @param {Compilation} compilation the compilation
	 * @param {Chunk} chunk the chunk
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {void}
	 */
	attach(compilation, chunk, chunkGraph = compilation.chunkGraph) {
		this.compilation = compilation;
		this.chunk = chunk;
		this.chunkGraph = chunkGraph;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `webpack/runtime/${this.name}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `webpack/runtime/${this.name}`;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		return callback(null, false);
	}

	/**
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {function(WebpackError=): void} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		// do nothing
		// should not be called as runtime modules are added later to the compilation
		callback();
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(this.name);
		hash.update(`${this.stage}`);
		try {
			if (this.fullHash || this.dependentHash) {
				// Do not use getGeneratedCode here, because i. e. compilation hash might be not
				// ready at this point. We will cache it later instead.
				hash.update(/** @type {string} */ (this.generate()));
			} else {
				hash.update(/** @type {string} */ (this.getGeneratedCode()));
			}
		} catch (err) {
			hash.update(/** @type {Error} */ (err).message);
		}
		super.updateHash(hash, context);
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return RUNTIME_TYPES;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		const sources = new Map();
		const generatedCode = this.getGeneratedCode();
		if (generatedCode) {
			sources.set(
				WEBPACK_MODULE_TYPE_RUNTIME,
				this.useSourceMap || this.useSimpleSourceMap
					? new OriginalSource(generatedCode, this.identifier())
					: new RawSource(generatedCode)
			);
		}
		return {
			sources,
			runtimeRequirements: null
		};
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		try {
			const source = this.getGeneratedCode();
			return source ? source.length : 0;
		} catch (_err) {
			return 0;
		}
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @returns {string | null} runtime code
	 */
	generate() {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @returns {string | null} runtime code
	 */
	getGeneratedCode() {
		if (this._cachedGeneratedCode) {
			return this._cachedGeneratedCode;
		}
		return (this._cachedGeneratedCode = this.generate());
	}

	/**
	 * @returns {boolean} true, if the runtime module should get it's own scope
	 */
	shouldIsolate() {
		return true;
	}
}

/**
 * Runtime modules without any dependencies to other runtime modules
 */
RuntimeModule.STAGE_NORMAL = 0;

/**
 * Runtime modules with simple dependencies on other runtime modules
 */
RuntimeModule.STAGE_BASIC = 5;

/**
 * Runtime modules which attach to handlers of other runtime modules
 */
RuntimeModule.STAGE_ATTACH = 10;

/**
 * Runtime modules which trigger actions on bootstrap
 */
RuntimeModule.STAGE_TRIGGER = 20;

module.exports = RuntimeModule;
