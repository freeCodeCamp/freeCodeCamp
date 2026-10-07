/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const Module = require("../Module");
const {
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES
} = require("../ModuleSourceTypeConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const StaticExportsDependency = require("../dependencies/StaticExportsDependency");
const makeSerializable = require("../util/makeSerializable");
const ContainerExposedDependency = require("./ContainerExposedDependency");

/** @typedef {import("../config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module").BuildCallback} BuildCallback */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").LibIdent} LibIdent */
/** @typedef {import("../Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").Sources} Sources */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

/**
 * Defines the expose options type used by this module.
 * @typedef {object} ExposeOptions
 * @property {string[]} import requests to exposed modules (last one is exported)
 * @property {string} name custom chunk name for the exposed module
 */

/** @typedef {[string, ExposeOptions][]} ExposesList */

class ContainerEntryModule extends Module {
	/**
	 * Creates an instance of ContainerEntryModule.
	 * @param {string} name container entry name
	 * @param {ExposesList} exposes list of exposed modules
	 * @param {string} shareScope name of the share scope
	 */
	constructor(name, exposes, shareScope) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, null);
		/** @type {string} */
		this._name = name;
		/** @type {ExposesList} */
		this._exposes = exposes;
		/** @type {string} */
		this._shareScope = shareScope;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `container entry (${this._shareScope}) ${JSON.stringify(
			this._exposes
		)}`;
	}

	/**
	 * Returns a human-readable identifier for this module.
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return "container entry";
	}

	/**
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return `${this.layer ? `(${this.layer})/` : ""}webpack/container/entry/${
			this._name
		}`;
	}

	/**
	 * Checks whether the module needs to be rebuilt for the current build state.
	 * @param {NeedBuildContext} context context info
	 * @param {NeedBuildCallback} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		return callback(null, !this.buildMeta);
	}

	/**
	 * Builds the module using the provided compilation context.
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {BuildCallback} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		this.buildMeta = {};
		this.buildInfo = {
			strict: true,
			topLevelDeclarations: new Set(["moduleMap", "get", "init"])
		};
		this.buildMeta.exportsType = "namespace";

		this.clearDependenciesAndBlocks();

		for (const [name, options] of this._exposes) {
			const block = new AsyncDependenciesBlock(
				{
					name: options.name
				},
				{ name },
				options.import[options.import.length - 1]
			);
			let idx = 0;
			for (const request of options.import) {
				const dep = new ContainerExposedDependency(name, request);
				dep.loc = {
					name,
					index: idx++
				};

				block.addDependency(dep);
			}
			this.addBlock(block);
		}
		this.addDependency(new StaticExportsDependency(["get", "init"], false));

		callback();
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ moduleGraph, chunkGraph, runtimeTemplate }) {
		/** @type {Sources} */
		const sources = new Map();
		const runtimeRequirements = new Set([
			RuntimeGlobals.definePropertyGetters,
			RuntimeGlobals.hasOwnProperty,
			RuntimeGlobals.exports
		]);
		/** @type {string[]} */
		const getters = [];

		for (const block of this.blocks) {
			const { dependencies } = block;

			const modules = dependencies.map((dependency) => {
				const dep = /** @type {ContainerExposedDependency} */ (dependency);
				return {
					name: dep.exposedName,
					module: moduleGraph.getModule(dep),
					request: dep.userRequest
				};
			});

			/** @type {string} */
			let str;

			if (modules.some((m) => !m.module)) {
				str = runtimeTemplate.throwMissingModuleErrorBlock({
					request: modules.map((m) => m.request).join(", ")
				});
			} else {
				str = `return ${runtimeTemplate.blockPromise({
					block,
					message: "",
					chunkGraph,
					runtimeRequirements
				})}.then(${runtimeTemplate.returningFunction(
					runtimeTemplate.returningFunction(
						`(${modules
							.map(({ module, request }) =>
								runtimeTemplate.moduleRaw({
									module,
									chunkGraph,
									request,
									weak: false,
									runtimeRequirements
								})
							)
							.join(", ")})`
					)
				)});`;
			}

			getters.push(
				`${JSON.stringify(modules[0].name)}: ${runtimeTemplate.basicFunction(
					"",
					str
				)}`
			);
		}

		const source = Template.asString([
			"var moduleMap = {",
			Template.indent(getters.join(",\n")),
			"};",
			`var get = ${runtimeTemplate.basicFunction("module, getScope", [
				`${RuntimeGlobals.currentRemoteGetScope} = getScope;`,
				// reusing the getScope variable to avoid creating a new var (and module is also used later)
				"getScope = (",
				Template.indent([
					`${RuntimeGlobals.hasOwnProperty}(moduleMap, module)`,
					Template.indent([
						"? moduleMap[module]()",
						`: Promise.resolve().then(${runtimeTemplate.basicFunction(
							"",
							"throw new Error('Module \"' + module + '\" does not exist in container.');"
						)})`
					])
				]),
				");",
				`${RuntimeGlobals.currentRemoteGetScope} = undefined;`,
				"return getScope;"
			])};`,
			`var init = ${runtimeTemplate.basicFunction("shareScope, initScope", [
				`if (!${RuntimeGlobals.shareScopeMap}) return;`,
				`var name = ${JSON.stringify(this._shareScope)}`,
				`var oldScope = ${RuntimeGlobals.shareScopeMap}[name];`,
				'if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");',
				`${RuntimeGlobals.shareScopeMap}[name] = shareScope;`,
				`return ${RuntimeGlobals.initializeSharing}(name, initScope);`
			])};`,
			"",
			"// This exports getters to disallow modifications",
			`${RuntimeGlobals.definePropertyGetters}(exports, {`,
			Template.indent([
				`get: ${runtimeTemplate.returningFunction("get")},`,
				`init: ${runtimeTemplate.returningFunction("init")}`
			]),
			"});"
		]);

		sources.set(
			JAVASCRIPT_TYPE,
			this.useSourceMap || this.useSimpleSourceMap
				? new OriginalSource(source, "webpack/container-entry")
				: new RawSource(source)
		);

		return {
			sources,
			runtimeRequirements
		};
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 42;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this._name);
		write(this._exposes);
		write(this._shareScope);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {ContainerEntryModule} deserialized container entry module
	 */
	static deserialize(context) {
		const { read } = context;
		const obj = new ContainerEntryModule(read(), read(), read());
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(
	ContainerEntryModule,
	"webpack/lib/container/ContainerEntryModule"
);

module.exports = ContainerEntryModule;
