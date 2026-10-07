/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncBailHook } = require("tapable");
const { OriginalSource, RawSource } = require("webpack-sources");
const ConcatenationScope = require("./ConcatenationScope");
const EnvironmentNotSupportAsyncWarning = require("./EnvironmentNotSupportAsyncWarning");
const { UsageState } = require("./ExportsInfo");
const InitFragment = require("./InitFragment");
const Module = require("./Module");
const {
	CSS_IMPORT_TYPES,
	CSS_URL_TYPES,
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES
} = require("./ModuleSourceTypeConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const Template = require("./Template");
const { DEFAULTS } = require("./config/defaults");
const StaticExportsDependency = require("./dependencies/StaticExportsDependency");
const createHash = require("./util/createHash");
const extractUrlAndGlobal = require("./util/extractUrlAndGlobal");
const makeSerializable = require("./util/makeSerializable");
const { propertyAccess } = require("./util/property");
const { register } = require("./util/serialization");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").ExternalsType} ExternalsType */
/** @typedef {import("../declarations/WebpackOptions").HashFunction} HashFunction */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Compilation").UnsafeCacheData} UnsafeCacheData */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./ExportsInfo")} ExportsInfo */
/** @typedef {import("./Generator").GenerateContext} GenerateContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").ModuleId} ModuleId */
/** @typedef {import("./Module").BuildCallback} BuildCallback */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").CodeGenerationResultData} CodeGenerationResultData */
/** @typedef {import("./Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").LibIdent} LibIdent */
/** @typedef {import("./Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("./Module").Sources} Sources */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./javascript/JavascriptModulesPlugin").ChunkRenderContext} ChunkRenderContext */
/** @typedef {import("./javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {{ attributes?: ImportAttributes, externalType: "import" | "module" | undefined }} ImportDependencyMeta */
/** @typedef {{ layer?: string, supports?: string, media?: string }} CssImportDependencyMeta */
/** @typedef {{ sourceType: "css-url" }} AssetDependencyMeta */

/** @typedef {ImportDependencyMeta | CssImportDependencyMeta | AssetDependencyMeta} DependencyMeta */

/**
 * Defines the source data type used by this module.
 * @typedef {object} SourceData
 * @property {boolean=} iife
 * @property {string=} init
 * @property {string} expression
 * @property {InitFragment<ChunkRenderContext>[]=} chunkInitFragments
 * @property {ReadOnlyRuntimeRequirements=} runtimeRequirements
 * @property {[string, string][]=} specifiers
 */

/** @typedef {true | [string, string][]} Imported */

/** @type {RuntimeRequirements} */
const RUNTIME_REQUIREMENTS = new Set([RuntimeGlobals.module]);
/** @type {RuntimeRequirements} */
const RUNTIME_REQUIREMENTS_FOR_SCRIPT = new Set([RuntimeGlobals.loadScript]);
/** @type {RuntimeRequirements} */
const RUNTIME_REQUIREMENTS_FOR_MODULE = new Set([
	RuntimeGlobals.definePropertyGetters
]);
/** @type {RuntimeRequirements} */
const EMPTY_RUNTIME_REQUIREMENTS = new Set();

/**
 * Gets source for global variable external.
 * @param {string | string[]} variableName the variable name or path
 * @param {string} type the module system
 * @returns {SourceData} the generated source
 */
const getSourceForGlobalVariableExternal = (variableName, type) => {
	if (!Array.isArray(variableName)) {
		// make it an array as the look up works the same basically
		variableName = [variableName];
	}

	// needed for e.g. window["some"]["thing"]
	const objectLookup = variableName
		.map((r) => `[${JSON.stringify(r)}]`)
		.join("");
	return {
		iife: type === "this",
		expression: `${type}${objectLookup}`
	};
};

/** @typedef {string | string[]} ModuleAndSpecifiers */

/**
 * Gets source for common js external.
 * @param {ModuleAndSpecifiers} moduleAndSpecifiers the module request
 * @returns {SourceData} the generated source
 */
const getSourceForCommonJsExternal = (moduleAndSpecifiers) => {
	if (!Array.isArray(moduleAndSpecifiers)) {
		return {
			expression: `require(${JSON.stringify(moduleAndSpecifiers)})`
		};
	}
	const moduleName = moduleAndSpecifiers[0];
	return {
		expression: `require(${JSON.stringify(moduleName)})${propertyAccess(
			moduleAndSpecifiers,
			1
		)}`
	};
};

/**
 * Gets external module node commonjs init fragment.
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {InitFragment<ChunkRenderContext>} code
 */
const getExternalModuleNodeCommonjsInitFragment = (runtimeTemplate) => {
	const importMetaName = runtimeTemplate.outputOptions.importMetaName;

	return new InitFragment(
		`import { createRequire as __WEBPACK_EXTERNAL_createRequire } from ${runtimeTemplate.renderNodePrefixForCoreModule(
			"module"
		)};\n${runtimeTemplate.renderConst()} __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(${importMetaName}.url);\n`,
		InitFragment.STAGE_HARMONY_IMPORTS,
		0,
		"external module node-commonjs"
	);
};

/**
 * Gets source for common js external in node module.
 * @param {ModuleAndSpecifiers} moduleAndSpecifiers the module request
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {SourceData} the generated source
 */
const getSourceForCommonJsExternalInNodeModule = (
	moduleAndSpecifiers,
	runtimeTemplate
) => {
	const chunkInitFragments = [
		getExternalModuleNodeCommonjsInitFragment(runtimeTemplate)
	];
	if (!Array.isArray(moduleAndSpecifiers)) {
		return {
			chunkInitFragments,
			expression: `__WEBPACK_EXTERNAL_createRequire_require(${JSON.stringify(
				moduleAndSpecifiers
			)})`
		};
	}
	const moduleName = moduleAndSpecifiers[0];
	return {
		chunkInitFragments,
		expression: `__WEBPACK_EXTERNAL_createRequire_require(${JSON.stringify(
			moduleName
		)})${propertyAccess(moduleAndSpecifiers, 1)}`
	};
};

/**
 * Gets source for import external.
 * @param {ModuleAndSpecifiers} moduleAndSpecifiers the module request
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {ImportDependencyMeta=} dependencyMeta the dependency meta
 * @returns {SourceData} the generated source
 */
const getSourceForImportExternal = (
	moduleAndSpecifiers,
	runtimeTemplate,
	dependencyMeta
) => {
	const importName = runtimeTemplate.outputOptions.importFunctionName;
	if (
		!runtimeTemplate.supportsDynamicImport() &&
		(importName === "import" || importName === "module-import")
	) {
		throw new Error(
			"The target environment doesn't support 'import()' so it's not possible to use external type 'import'"
		);
	}
	const attributes =
		dependencyMeta && dependencyMeta.attributes
			? dependencyMeta.attributes._isLegacyAssert
				? `, { assert: ${JSON.stringify(
						dependencyMeta.attributes,
						importAssertionReplacer
					)} }`
				: `, { with: ${JSON.stringify(dependencyMeta.attributes)} }`
			: "";
	if (!Array.isArray(moduleAndSpecifiers)) {
		return {
			expression: `${importName}(${JSON.stringify(
				moduleAndSpecifiers
			)}${attributes});`
		};
	}
	if (moduleAndSpecifiers.length === 1) {
		return {
			expression: `${importName}(${JSON.stringify(
				moduleAndSpecifiers[0]
			)}${attributes});`
		};
	}
	const moduleName = moduleAndSpecifiers[0];
	return {
		expression: `${importName}(${JSON.stringify(
			moduleName
		)}${attributes}).then(${runtimeTemplate.returningFunction(
			`module${propertyAccess(moduleAndSpecifiers, 1)}`,
			"module"
		)});`
	};
};

/**
 * Import assertion replacer.
 * @param {string} key key
 * @param {ImportAttributes | string | boolean | undefined} value value
 * @returns {ImportAttributes | string | boolean | undefined} replaced value
 */
const importAssertionReplacer = (key, value) => {
	if (key === "_isLegacyAssert") {
		return;
	}

	return value;
};

/**
 * Represents ModuleExternalInitFragment.
 * @extends {InitFragment<GenerateContext>}
 */
class ModuleExternalInitFragment extends InitFragment {
	/**
	 * Creates an instance of ModuleExternalInitFragment.
	 * @param {string} request import source
	 * @param {Imported} imported the imported specifiers
	 * @param {string=} ident recomputed ident
	 * @param {ImportDependencyMeta=} dependencyMeta the dependency meta
	 * @param {HashFunction=} hashFunction the hash function to use
	 */
	constructor(
		request,
		imported,
		ident,
		dependencyMeta,
		hashFunction = DEFAULTS.HASH_FUNCTION
	) {
		if (ident === undefined) {
			ident = Template.toIdentifier(request);
			if (ident !== request) {
				ident += `_${createHash(hashFunction)
					.update(request)
					.digest("hex")
					.slice(0, 8)}`;
			}
		}

		super(
			"",
			InitFragment.STAGE_HARMONY_IMPORTS,
			0,
			`external module import ${ident} ${imported === true ? imported : imported.join(" ")}`
		);
		this._ident = ident;
		this._request = request;
		this._dependencyMeta = dependencyMeta;
		this._identifier = this.buildIdentifier(ident);
		this._imported = this.buildImported(imported);
	}

	/**
	 * Returns imported.
	 * @returns {Imported} imported
	 */
	getImported() {
		return this._imported;
	}

	/**
	 * Updates imported using the provided imported.
	 * @param {Imported} imported imported
	 */
	setImported(imported) {
		this._imported = imported;
	}

	/**
	 * Returns the source code that will be included as initialization code.
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent(context) {
		const {
			_dependencyMeta: dependencyMeta,
			_imported: imported,
			_request: request,
			_identifier: identifier
		} = this;
		const attributes =
			dependencyMeta && dependencyMeta.attributes
				? dependencyMeta.attributes._isLegacyAssert &&
					dependencyMeta.attributes._isLegacyAssert
					? ` assert ${JSON.stringify(
							dependencyMeta.attributes,
							importAssertionReplacer
						)}`
					: ` with ${JSON.stringify(dependencyMeta.attributes)}`
				: "";
		let content = "";
		if (imported === true) {
			// namespace
			content = `import * as ${identifier} from ${JSON.stringify(request)}${
				attributes
			};\n`;
		} else if (imported.length === 0) {
			// just import, no use
			content = `import ${JSON.stringify(request)}${attributes};\n`;
		} else {
			content = `import { ${imported
				.map(([name, finalName]) => {
					if (name !== finalName) {
						return `${name} as ${finalName}`;
					}
					return name;
				})
				.join(", ")} } from ${JSON.stringify(request)}${attributes};\n`;
		}
		return content;
	}

	getNamespaceIdentifier() {
		return this._identifier;
	}

	/**
	 * Returns identifier.
	 * @param {string} ident ident
	 * @returns {string} identifier
	 */
	buildIdentifier(ident) {
		return `__WEBPACK_EXTERNAL_MODULE_${ident}__`;
	}

	/**
	 * Returns normalized imported.
	 * @param {Imported} imported imported
	 * @returns {Imported} normalized imported
	 */
	buildImported(imported) {
		if (Array.isArray(imported)) {
			return imported.map(([name]) => {
				const ident = `${this._ident}_${name}`;
				return [name, this.buildIdentifier(ident)];
			});
		}
		return imported;
	}
}

register(
	ModuleExternalInitFragment,
	"webpack/lib/ExternalModule",
	"ModuleExternalInitFragment",
	{
		serialize(obj, { write }) {
			write(obj._request);
			write(obj._imported);
			write(obj._ident);
			write(obj._dependencyMeta);
		},
		deserialize({ read }) {
			return new ModuleExternalInitFragment(read(), read(), read(), read());
		}
	}
);

/**
 * Generates module remapping.
 * @param {string} input input
 * @param {ExportsInfo} exportsInfo the exports info
 * @param {RuntimeSpec=} runtime the runtime
 * @param {RuntimeTemplate=} runtimeTemplate the runtime template
 * @returns {string | undefined} the module remapping
 */
const generateModuleRemapping = (
	input,
	exportsInfo,
	runtime,
	runtimeTemplate
) => {
	if (exportsInfo.otherExportsInfo.getUsed(runtime) === UsageState.Unused) {
		/** @type {string[]} */
		const properties = [];
		for (const exportInfo of exportsInfo.orderedExports) {
			const used = exportInfo.getUsedName(exportInfo.name, runtime);
			if (!used) continue;
			const nestedInfo = exportInfo.getNestedExportsInfo();
			if (nestedInfo) {
				const nestedExpr = generateModuleRemapping(
					`${input}${propertyAccess([exportInfo.name])}`,
					nestedInfo
				);
				if (nestedExpr) {
					properties.push(`[${JSON.stringify(used)}]: y(${nestedExpr})`);
					continue;
				}
			}
			properties.push(
				`[${JSON.stringify(used)}]: ${
					/** @type {RuntimeTemplate} */ (runtimeTemplate).returningFunction(
						`${input}${propertyAccess([exportInfo.name])}`
					)
				}`
			);
		}
		return `x({ ${properties.join(", ")} })`;
	}
};

/**
 * Gets source for module external.
 * @param {ModuleAndSpecifiers} moduleAndSpecifiers the module request
 * @param {ExportsInfo} exportsInfo exports info of this module
 * @param {RuntimeSpec} runtime the runtime
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {ImportDependencyMeta} dependencyMeta the dependency meta
 * @param {ConcatenationScope=} concatenationScope concatenationScope
 * @returns {SourceData} the generated source
 */
const getSourceForModuleExternal = (
	moduleAndSpecifiers,
	exportsInfo,
	runtime,
	runtimeTemplate,
	dependencyMeta,
	concatenationScope
) => {
	/** @type {Imported} */
	let imported = true;
	if (concatenationScope) {
		const usedExports = exportsInfo.getUsedExports(runtime);
		switch (usedExports) {
			case true:
			case null:
				// unknown exports
				imported = true;
				break;
			case false:
				// no used exports
				imported = [];
				break;
			default:
				imported = [...usedExports.entries()];
		}
	}

	if (!Array.isArray(moduleAndSpecifiers)) {
		moduleAndSpecifiers = [moduleAndSpecifiers];
	}

	// Return to `namespace` when the external request includes a specific export
	if (moduleAndSpecifiers.length > 1) {
		imported = true;
	}

	const initFragment = new ModuleExternalInitFragment(
		moduleAndSpecifiers[0],
		imported,
		undefined,
		dependencyMeta,
		runtimeTemplate.outputOptions.hashFunction
	);
	const normalizedImported = initFragment.getImported();

	const baseAccess = `${initFragment.getNamespaceIdentifier()}${propertyAccess(
		moduleAndSpecifiers,
		1
	)}`;
	let expression = baseAccess;

	const useNamespace = imported === true;
	/** @type {undefined | string} */
	let moduleRemapping;
	if (useNamespace) {
		moduleRemapping = generateModuleRemapping(
			baseAccess,
			exportsInfo,
			runtime,
			runtimeTemplate
		);
		expression = moduleRemapping || baseAccess;
	}
	return {
		expression,
		init: moduleRemapping
			? `var x = ${runtimeTemplate.basicFunction(
					"y",
					`var x = {}; ${RuntimeGlobals.definePropertyGetters}(x, y); return x`
				)} \nvar y = ${runtimeTemplate.returningFunction(
					runtimeTemplate.returningFunction("x"),
					"x"
				)}`
			: undefined,
		specifiers: normalizedImported === true ? undefined : normalizedImported,
		runtimeRequirements: moduleRemapping
			? RUNTIME_REQUIREMENTS_FOR_MODULE
			: undefined,
		chunkInitFragments: [
			/** @type {InitFragment<EXPECTED_ANY>} */ (initFragment)
		]
	};
};

/**
 * Gets source for script external.
 * @param {string | string[]} urlAndGlobal the script request
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {SourceData} the generated source
 */
const getSourceForScriptExternal = (urlAndGlobal, runtimeTemplate) => {
	if (typeof urlAndGlobal === "string") {
		urlAndGlobal = extractUrlAndGlobal(urlAndGlobal);
	}
	const url = urlAndGlobal[0];
	const globalName = urlAndGlobal[1];
	return {
		init: "var __webpack_error__ = new Error();",
		expression: `new Promise(${runtimeTemplate.basicFunction(
			"resolve, reject",
			[
				`if(typeof ${globalName} !== "undefined") return resolve();`,
				`${RuntimeGlobals.loadScript}(${JSON.stringify(
					url
				)}, ${runtimeTemplate.basicFunction("event", [
					`if(typeof ${globalName} !== "undefined") return resolve();`,
					"var errorType = event && (event.type === 'load' ? 'missing' : event.type);",
					"var realSrc = event && event.target && event.target.src;",
					"__webpack_error__.message = 'Loading script failed.\\n(' + errorType + ': ' + realSrc + ')';",
					"__webpack_error__.name = 'ScriptExternalLoadError';",
					"__webpack_error__.type = errorType;",
					"__webpack_error__.request = realSrc;",
					"reject(__webpack_error__);"
				])}, ${JSON.stringify(globalName)});`
			]
		)}).then(${runtimeTemplate.returningFunction(
			`${globalName}${propertyAccess(urlAndGlobal, 2)}`
		)})`,
		runtimeRequirements: RUNTIME_REQUIREMENTS_FOR_SCRIPT
	};
};

/**
 * Checks external variable.
 * @param {string} variableName the variable name to check
 * @param {string} request the request path
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {string} the generated source
 */
const checkExternalVariable = (variableName, request, runtimeTemplate) =>
	`if(typeof ${variableName} === 'undefined') { ${runtimeTemplate.throwMissingModuleErrorBlock(
		{ request }
	)} }\n`;

/**
 * Gets source for amd or umd external.
 * @param {ModuleId | string} id the module id
 * @param {boolean} optional true, if the module is optional
 * @param {string | string[]} request the request path
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {SourceData} the generated source
 */
const getSourceForAmdOrUmdExternal = (
	id,
	optional,
	request,
	runtimeTemplate
) => {
	const externalVariable = `__WEBPACK_EXTERNAL_MODULE_${Template.toIdentifier(
		`${id}`
	)}__`;
	return {
		init: optional
			? checkExternalVariable(
					externalVariable,
					Array.isArray(request) ? request.join(".") : request,
					runtimeTemplate
				)
			: undefined,
		expression: externalVariable
	};
};

/**
 * Gets source for default case.
 * @param {boolean} optional true, if the module is optional
 * @param {string | string[]} request the request path
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @returns {SourceData} the generated source
 */
const getSourceForDefaultCase = (optional, request, runtimeTemplate) => {
	if (!Array.isArray(request)) {
		// make it an array as the look up works the same basically
		request = [request];
	}

	const variableName = request[0];
	const objectLookup = propertyAccess(request, 1);
	return {
		init: optional
			? checkExternalVariable(variableName, request.join("."), runtimeTemplate)
			: undefined,
		expression: `${variableName}${objectLookup}`
	};
};

/** @typedef {Record<string, string | string[]>} RequestRecord */
/** @typedef {string | string[] | RequestRecord} ExternalModuleRequest */

/**
 * Defines the external module hooks type used by this module.
 * @typedef {object} ExternalModuleHooks
 * @property {SyncBailHook<[Chunk, Compilation], boolean>} chunkCondition
 */

/** @type {WeakMap<Compilation, ExternalModuleHooks>} */
const compilationHooksMap = new WeakMap();

class ExternalModule extends Module {
	/**
	 * Creates an instance of ExternalModule.
	 * @param {ExternalModuleRequest} request request
	 * @param {ExternalsType} type type
	 * @param {string} userRequest user request
	 * @param {DependencyMeta=} dependencyMeta dependency meta
	 */
	constructor(request, type, userRequest, dependencyMeta) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, null);

		// Info from Factory
		/** @type {ExternalModuleRequest} */
		this.request = request;
		/** @type {ExternalsType} */
		this.externalType = type;
		/** @type {string} */
		this.userRequest = userRequest;
		/** @type {DependencyMeta=} */
		this.dependencyMeta = dependencyMeta;
	}

	/**
	 * Returns the attached hooks.
	 * @param {Compilation} compilation the compilation
	 * @returns {ExternalModuleHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				chunkCondition: new SyncBailHook(["chunk", "compilation"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		if (
			this.externalType === "asset" &&
			this.dependencyMeta &&
			/** @type {AssetDependencyMeta} */
			(this.dependencyMeta).sourceType === "css-url"
		) {
			return CSS_URL_TYPES;
		} else if (this.externalType === "css-import") {
			return CSS_IMPORT_TYPES;
		}

		return JAVASCRIPT_TYPES;
	}

	/**
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return this.userRequest;
	}

	/**
	 * Returns true if the module can be placed in the chunk.
	 * @param {Chunk} chunk the chunk which condition should be checked
	 * @param {Compilation} compilation the compilation
	 * @returns {boolean} true if the module can be placed in the chunk
	 */
	chunkCondition(chunk, compilation) {
		const { chunkCondition } = ExternalModule.getCompilationHooks(compilation);
		const condition = chunkCondition.call(chunk, compilation);
		if (condition !== undefined) return condition;

		const type = this._resolveExternalType(this.externalType);

		// For `import()` externals, keep them in the initial chunk to avoid loading
		// them asynchronously twice and to improve runtime performance.
		if (["css-import", "module"].includes(type)) {
			return true;
		}
		return compilation.chunkGraph.getNumberOfEntryModules(chunk) > 0;
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `external ${this._resolveExternalType(this.externalType)} ${JSON.stringify(this.request)}`;
	}

	/**
	 * Returns a human-readable identifier for this module.
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `external ${JSON.stringify(this.request)}`;
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
		this.buildMeta = {
			async: false,
			exportsType: undefined
		};
		this.buildInfo = {
			strict: true,
			topLevelDeclarations: new Set(),
			javascriptModule: compilation.outputOptions.module
		};
		const { request, externalType } = this._getRequestAndExternalType();
		this.buildMeta.exportsType = "dynamic";
		let canMangle = false;
		this.clearDependenciesAndBlocks();
		switch (externalType) {
			case "this":
				this.buildInfo.strict = false;
				break;
			case "system":
				if (!Array.isArray(request) || request.length === 1) {
					this.buildMeta.exportsType = "namespace";
					canMangle = true;
				}
				break;
			case "module":
				if (this.buildInfo.javascriptModule) {
					if (!Array.isArray(request) || request.length === 1) {
						this.buildMeta.exportsType = "namespace";
						canMangle = true;
					}
				} else {
					this.buildMeta.async = true;
					EnvironmentNotSupportAsyncWarning.check(
						this,
						compilation.runtimeTemplate,
						"external module"
					);
					if (!Array.isArray(request) || request.length === 1) {
						this.buildMeta.exportsType = "namespace";
						canMangle = false;
					}
				}
				break;
			case "script":
				this.buildMeta.async = true;
				EnvironmentNotSupportAsyncWarning.check(
					this,
					compilation.runtimeTemplate,
					"external script"
				);
				break;
			case "promise":
				this.buildMeta.async = true;
				EnvironmentNotSupportAsyncWarning.check(
					this,
					compilation.runtimeTemplate,
					"external promise"
				);
				break;
			case "import":
				this.buildMeta.async = true;
				EnvironmentNotSupportAsyncWarning.check(
					this,
					compilation.runtimeTemplate,
					"external import"
				);
				if (!Array.isArray(request) || request.length === 1) {
					this.buildMeta.exportsType = "namespace";
					canMangle = false;
				}
				break;
		}
		this.addDependency(new StaticExportsDependency(true, canMangle));
		callback();
	}

	/**
	 * restore unsafe cache data
	 * @param {UnsafeCacheData} unsafeCacheData data from getUnsafeCacheData
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory handling the unsafe caching
	 */
	restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory) {
		this._restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory);
	}

	/**
	 * Returns the reason this module cannot be concatenated, when one exists.
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(context) {
		switch (this.externalType) {
			case "amd":
			case "amd-require":
			case "umd":
			case "umd2":
			case "system":
			case "jsonp":
				return `${this.externalType} externals can't be concatenated`;
		}
		return undefined;
	}

	/**
	 * Get request and external type.
	 * @private
	 * @returns {{ request: string | string[], externalType: ExternalsType }} the request and external type
	 */
	_getRequestAndExternalType() {
		let { request, externalType } = this;
		if (typeof request === "object" && !Array.isArray(request)) {
			request = request[externalType];
		}
		externalType = this._resolveExternalType(externalType);
		return { request, externalType };
	}

	/**
	 * Resolve the detailed external type from the raw external type.
	 * e.g. resolve "module" or "import" from "module-import" type
	 * @param {ExternalsType} externalType raw external type
	 * @returns {ExternalsType} resolved external type
	 */
	_resolveExternalType(externalType) {
		if (externalType === "module-import") {
			if (
				this.dependencyMeta &&
				/** @type {ImportDependencyMeta} */
				(this.dependencyMeta).externalType
			) {
				return /** @type {ImportDependencyMeta} */ (this.dependencyMeta)
					.externalType;
			}
			return "module";
		} else if (externalType === "asset") {
			if (
				this.dependencyMeta &&
				/** @type {AssetDependencyMeta} */
				(this.dependencyMeta).sourceType
			) {
				return /** @type {AssetDependencyMeta} */ (this.dependencyMeta)
					.sourceType;
			}

			return "asset";
		}

		return externalType;
	}

	/**
	 * Returns the source data.
	 * @private
	 * @param {string | string[]} request request
	 * @param {ExternalsType} externalType the external type
	 * @param {RuntimeTemplate} runtimeTemplate the runtime template
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {DependencyMeta | undefined} dependencyMeta the dependency meta
	 * @param {ConcatenationScope=} concatenationScope concatenationScope
	 * @returns {SourceData} the source data
	 */
	_getSourceData(
		request,
		externalType,
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime,
		dependencyMeta,
		concatenationScope
	) {
		switch (externalType) {
			case "this":
			case "window":
			case "self":
				return getSourceForGlobalVariableExternal(request, this.externalType);
			case "global":
				return getSourceForGlobalVariableExternal(
					request,
					runtimeTemplate.globalObject
				);
			case "commonjs":
			case "commonjs2":
			case "commonjs-module":
			case "commonjs-static":
				return getSourceForCommonJsExternal(request);
			case "node-commonjs":
				return /** @type {BuildInfo} */ (this.buildInfo).javascriptModule
					? getSourceForCommonJsExternalInNodeModule(request, runtimeTemplate)
					: getSourceForCommonJsExternal(request);
			case "amd":
			case "amd-require":
			case "umd":
			case "umd2":
			case "system":
			case "jsonp": {
				const id = chunkGraph.getModuleId(this);
				return getSourceForAmdOrUmdExternal(
					id !== null ? id : this.identifier(),
					this.isOptional(moduleGraph),
					request,
					runtimeTemplate
				);
			}
			case "import":
				return getSourceForImportExternal(
					request,
					runtimeTemplate,
					/** @type {ImportDependencyMeta} */ (dependencyMeta)
				);
			case "script":
				return getSourceForScriptExternal(request, runtimeTemplate);
			case "module": {
				if (!(/** @type {BuildInfo} */ (this.buildInfo).javascriptModule)) {
					if (!runtimeTemplate.supportsDynamicImport()) {
						throw new Error(
							`The target environment doesn't support dynamic import() syntax so it's not possible to use external type 'module' within a script${
								runtimeTemplate.supportsEcmaScriptModuleSyntax()
									? "\nDid you mean to build a EcmaScript Module ('output.module: true')?"
									: ""
							}`
						);
					}
					return getSourceForImportExternal(
						request,
						runtimeTemplate,
						/** @type {ImportDependencyMeta} */ (dependencyMeta)
					);
				}
				if (!runtimeTemplate.supportsEcmaScriptModuleSyntax()) {
					throw new Error(
						"The target environment doesn't support EcmaScriptModule syntax so it's not possible to use external type 'module'"
					);
				}
				return getSourceForModuleExternal(
					request,
					moduleGraph.getExportsInfo(this),
					runtime,
					runtimeTemplate,
					/** @type {ImportDependencyMeta} */ (dependencyMeta),
					concatenationScope
				);
			}
			case "var":
			case "promise":
			case "assign":
			default:
				return getSourceForDefaultCase(
					this.isOptional(moduleGraph),
					request,
					runtimeTemplate
				);
		}
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime,
		concatenationScope
	}) {
		const { request, externalType } = this._getRequestAndExternalType();
		switch (externalType) {
			case "asset": {
				/** @type {Sources} */
				const sources = new Map();
				sources.set(
					JAVASCRIPT_TYPE,
					new RawSource(`module.exports = ${JSON.stringify(request)};`)
				);
				/** @type {CodeGenerationResultData} */
				const data = new Map();
				data.set("url", { javascript: /** @type {string} */ (request) });
				return { sources, runtimeRequirements: RUNTIME_REQUIREMENTS, data };
			}
			case "css-url": {
				/** @type {Sources} */
				const sources = new Map();
				/** @type {CodeGenerationResultData} */
				const data = new Map();
				data.set("url", { "css-url": /** @type {string} */ (request) });
				return { sources, runtimeRequirements: RUNTIME_REQUIREMENTS, data };
			}
			case "css-import": {
				/** @type {Sources} */
				const sources = new Map();
				const dependencyMeta = /** @type {CssImportDependencyMeta} */ (
					this.dependencyMeta
				);
				const layer =
					dependencyMeta.layer !== undefined
						? ` layer(${dependencyMeta.layer})`
						: "";
				const supports = dependencyMeta.supports
					? ` supports(${dependencyMeta.supports})`
					: "";
				const media = dependencyMeta.media ? ` ${dependencyMeta.media}` : "";
				sources.set(
					"css-import",
					new RawSource(
						`@import url(${JSON.stringify(
							request
						)})${layer}${supports}${media};`
					)
				);
				return {
					sources,
					runtimeRequirements: EMPTY_RUNTIME_REQUIREMENTS
				};
			}
			default: {
				const sourceData = this._getSourceData(
					request,
					externalType,
					runtimeTemplate,
					moduleGraph,
					chunkGraph,
					runtime,
					this.dependencyMeta,
					concatenationScope
				);

				// sourceString can be empty str only when there is concatenationScope
				let sourceString = sourceData.expression;
				if (sourceData.iife) {
					sourceString = `(function() { return ${sourceString}; }())`;
				}

				const specifiers = sourceData.specifiers;
				if (specifiers) {
					sourceString = "";
					const scope = /** @type {ConcatenationScope} */ (concatenationScope);
					for (const [specifier, finalName] of specifiers) {
						scope.registerRawExport(specifier, finalName);
					}
				} else if (concatenationScope) {
					sourceString = `${runtimeTemplate.renderConst()} ${ConcatenationScope.NAMESPACE_OBJECT_EXPORT} = ${sourceString};`;
					concatenationScope.registerNamespaceExport(
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					);
				} else {
					sourceString = `module.exports = ${sourceString};`;
				}
				if (sourceData.init) {
					sourceString = `${sourceData.init}\n${sourceString}`;
				}

				/** @type {undefined | CodeGenerationResultData} */
				let data;
				if (sourceData.chunkInitFragments) {
					data = new Map();
					data.set("chunkInitFragments", sourceData.chunkInitFragments);
				}

				/** @type {Sources} */
				const sources = new Map();
				if (this.useSourceMap || this.useSimpleSourceMap) {
					sources.set(
						JAVASCRIPT_TYPE,
						new OriginalSource(sourceString, this.identifier())
					);
				} else {
					sources.set(JAVASCRIPT_TYPE, new RawSource(sourceString));
				}

				let runtimeRequirements = sourceData.runtimeRequirements;
				if (!concatenationScope) {
					if (!runtimeRequirements) {
						runtimeRequirements = RUNTIME_REQUIREMENTS;
					} else {
						const set = new Set(runtimeRequirements);
						set.add(RuntimeGlobals.module);
						runtimeRequirements = set;
					}
				}

				return {
					sources,
					runtimeRequirements:
						runtimeRequirements || EMPTY_RUNTIME_REQUIREMENTS,
					data
				};
			}
		}
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
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		const { chunkGraph } = context;
		hash.update(
			`${this._resolveExternalType(this.externalType)}${JSON.stringify(this.request)}${this.isOptional(
				chunkGraph.moduleGraph
			)}`
		);
		super.updateHash(hash, context);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.request);
		write(this.externalType);
		write(this.userRequest);
		write(this.dependencyMeta);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.request = read();
		this.externalType = read();
		this.userRequest = read();
		this.dependencyMeta = read();

		super.deserialize(context);
	}
}

makeSerializable(ExternalModule, "webpack/lib/ExternalModule");

module.exports = ExternalModule;
module.exports.ModuleExternalInitFragment = ModuleExternalInitFragment;
module.exports.getExternalModuleNodeCommonjsInitFragment =
	getExternalModuleNodeCommonjsInitFragment;
