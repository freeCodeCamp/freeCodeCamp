/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const ConcatenationScope = require("./ConcatenationScope");
const EnvironmentNotSupportAsyncWarning = require("./EnvironmentNotSupportAsyncWarning");
const { UsageState } = require("./ExportsInfo");
const InitFragment = require("./InitFragment");
const Module = require("./Module");
const {
	JS_TYPES,
	CSS_URL_TYPES,
	CSS_IMPORT_TYPES
} = require("./ModuleSourceTypesConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const Template = require("./Template");
const StaticExportsDependency = require("./dependencies/StaticExportsDependency");
const createHash = require("./util/createHash");
const extractUrlAndGlobal = require("./util/extractUrlAndGlobal");
const makeSerializable = require("./util/makeSerializable");
const propertyAccess = require("./util/propertyAccess");
const { register } = require("./util/serialization");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./ExportsInfo")} ExportsInfo */
/** @typedef {import("./Generator").GenerateContext} GenerateContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./javascript/JavascriptModulesPlugin").ChunkRenderContext} ChunkRenderContext */
/** @typedef {import("./javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {typeof import("./util/Hash")} HashConstructor */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {{ attributes?: ImportAttributes, externalType: "import" | "module" | undefined }} ImportDependencyMeta */
/** @typedef {{ layer?: string, supports?: string, media?: string }} CssImportDependencyMeta */
/** @typedef {{ sourceType: "css-url" }} AssetDependencyMeta */

/** @typedef {ImportDependencyMeta | CssImportDependencyMeta | AssetDependencyMeta} DependencyMeta */

/**
 * @typedef {object} SourceData
 * @property {boolean=} iife
 * @property {string=} init
 * @property {string} expression
 * @property {InitFragment<ChunkRenderContext>[]=} chunkInitFragments
 * @property {ReadOnlyRuntimeRequirements=} runtimeRequirements
 */

const RUNTIME_REQUIREMENTS = new Set([RuntimeGlobals.module]);
const RUNTIME_REQUIREMENTS_FOR_SCRIPT = new Set([RuntimeGlobals.loadScript]);
const RUNTIME_REQUIREMENTS_FOR_MODULE = new Set([
	RuntimeGlobals.definePropertyGetters
]);
const EMPTY_RUNTIME_REQUIREMENTS = new Set([]);

/**
 * @param {string|string[]} variableName the variable name or path
 * @param {string} type the module system
 * @returns {SourceData} the generated source
 */
const getSourceForGlobalVariableExternal = (variableName, type) => {
	if (!Array.isArray(variableName)) {
		// make it an array as the look up works the same basically
		variableName = [variableName];
	}

	// needed for e.g. window["some"]["thing"]
	const objectLookup = variableName.map(r => `[${JSON.stringify(r)}]`).join("");
	return {
		iife: type === "this",
		expression: `${type}${objectLookup}`
	};
};

/**
 * @param {string|string[]} moduleAndSpecifiers the module request
 * @returns {SourceData} the generated source
 */
const getSourceForCommonJsExternal = moduleAndSpecifiers => {
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
 * @param {string|string[]} moduleAndSpecifiers the module request
 * @param {string} importMetaName import.meta name
 * @param {boolean} needPrefix need to use `node:` prefix for `module` import
 * @returns {SourceData} the generated source
 */
const getSourceForCommonJsExternalInNodeModule = (
	moduleAndSpecifiers,
	importMetaName,
	needPrefix
) => {
	const chunkInitFragments = [
		new InitFragment(
			`import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "${
				needPrefix ? "node:" : ""
			}module";\n`,
			InitFragment.STAGE_HARMONY_IMPORTS,
			0,
			"external module node-commonjs"
		)
	];
	if (!Array.isArray(moduleAndSpecifiers)) {
		return {
			chunkInitFragments,
			expression: `__WEBPACK_EXTERNAL_createRequire(${importMetaName}.url)(${JSON.stringify(
				moduleAndSpecifiers
			)})`
		};
	}
	const moduleName = moduleAndSpecifiers[0];
	return {
		chunkInitFragments,
		expression: `__WEBPACK_EXTERNAL_createRequire(${importMetaName}.url)(${JSON.stringify(
			moduleName
		)})${propertyAccess(moduleAndSpecifiers, 1)}`
	};
};

/**
 * @param {string|string[]} moduleAndSpecifiers the module request
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
 * @param {string} key key
 * @param {any | undefined} value value
 * @returns {undefined | string} replaced value
 */
const importAssertionReplacer = (key, value) => {
	if (key === "_isLegacyAssert") {
		return;
	}

	return value;
};

/**
 * @extends {InitFragment<ChunkRenderContext>}
 */
class ModuleExternalInitFragment extends InitFragment {
	/**
	 * @param {string} request import source
	 * @param {string=} ident recomputed ident
	 * @param {ImportDependencyMeta=} dependencyMeta the dependency meta
	 * @param {string | HashConstructor=} hashFunction the hash function to use
	 */
	constructor(request, ident, dependencyMeta, hashFunction = "md4") {
		if (ident === undefined) {
			ident = Template.toIdentifier(request);
			if (ident !== request) {
				ident += `_${createHash(hashFunction)
					.update(request)
					.digest("hex")
					.slice(0, 8)}`;
			}
		}
		const identifier = `__WEBPACK_EXTERNAL_MODULE_${ident}__`;
		super(
			`import * as ${identifier} from ${JSON.stringify(request)}${
				dependencyMeta && dependencyMeta.attributes
					? dependencyMeta.attributes._isLegacyAssert
						? ` assert ${JSON.stringify(
								dependencyMeta.attributes,
								importAssertionReplacer
							)}`
						: ` with ${JSON.stringify(dependencyMeta.attributes)}`
					: ""
			};\n`,
			InitFragment.STAGE_HARMONY_IMPORTS,
			0,
			`external module import ${ident}`
		);
		this._ident = ident;
		this._request = request;
		this._dependencyMeta = request;
		this._identifier = identifier;
	}

	getNamespaceIdentifier() {
		return this._identifier;
	}
}

register(
	ModuleExternalInitFragment,
	"webpack/lib/ExternalModule",
	"ModuleExternalInitFragment",
	{
		serialize(obj, { write }) {
			write(obj._request);
			write(obj._ident);
			write(obj._dependencyMeta);
		},
		deserialize({ read }) {
			return new ModuleExternalInitFragment(read(), read(), read());
		}
	}
);

/**
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
 * @param {string|string[]} moduleAndSpecifiers the module request
 * @param {ExportsInfo} exportsInfo exports info of this module
 * @param {RuntimeSpec} runtime the runtime
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {ImportDependencyMeta} dependencyMeta the dependency meta
 * @returns {SourceData} the generated source
 */
const getSourceForModuleExternal = (
	moduleAndSpecifiers,
	exportsInfo,
	runtime,
	runtimeTemplate,
	dependencyMeta
) => {
	if (!Array.isArray(moduleAndSpecifiers))
		moduleAndSpecifiers = [moduleAndSpecifiers];
	const initFragment = new ModuleExternalInitFragment(
		moduleAndSpecifiers[0],
		undefined,
		dependencyMeta,
		runtimeTemplate.outputOptions.hashFunction
	);
	const baseAccess = `${initFragment.getNamespaceIdentifier()}${propertyAccess(
		moduleAndSpecifiers,
		1
	)}`;
	const moduleRemapping = generateModuleRemapping(
		baseAccess,
		exportsInfo,
		runtime,
		runtimeTemplate
	);
	const expression = moduleRemapping || baseAccess;
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
		runtimeRequirements: moduleRemapping
			? RUNTIME_REQUIREMENTS_FOR_MODULE
			: undefined,
		chunkInitFragments: [initFragment]
	};
};

/**
 * @param {string|string[]} urlAndGlobal the script request
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
 * @param {string|number} id the module id
 * @param {boolean} optional true, if the module is optional
 * @param {string|string[]} request the request path
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
 * @param {boolean} optional true, if the module is optional
 * @param {string|string[]} request the request path
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

class ExternalModule extends Module {
	/**
	 * @param {string | string[] | RequestRecord} request request
	 * @param {string} type type
	 * @param {string} userRequest user request
	 * @param {DependencyMeta=} dependencyMeta dependency meta
	 */
	constructor(request, type, userRequest, dependencyMeta) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, null);

		// Info from Factory
		/** @type {string | string[] | Record<string, string | string[]>} */
		this.request = request;
		/** @type {string} */
		this.externalType = type;
		/** @type {string} */
		this.userRequest = userRequest;
		/** @type {DependencyMeta=} */
		this.dependencyMeta = dependencyMeta;
	}

	/**
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

		return JS_TYPES;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return this.userRequest;
	}

	/**
	 * @param {Chunk} chunk the chunk which condition should be checked
	 * @param {Compilation} compilation the compilation
	 * @returns {boolean} true, if the chunk is ok for the module
	 */
	chunkCondition(chunk, { chunkGraph }) {
		return this.externalType === "css-import"
			? true
			: chunkGraph.getNumberOfEntryModules(chunk) > 0;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `external ${this._resolveExternalType(this.externalType)} ${JSON.stringify(this.request)}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `external ${JSON.stringify(this.request)}`;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		return callback(null, !this.buildMeta);
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
		this.buildMeta = {
			async: false,
			exportsType: undefined
		};
		this.buildInfo = {
			strict: true,
			topLevelDeclarations: new Set(),
			module: compilation.outputOptions.module
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
				if (this.buildInfo.module) {
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
	 * @param {object} unsafeCacheData data from getUnsafeCacheData
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory handling the unsafe caching
	 */
	restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory) {
		this._restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory);
	}

	/**
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason({ moduleGraph }) {
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

	_getRequestAndExternalType() {
		let { request, externalType } = this;
		if (typeof request === "object" && !Array.isArray(request))
			request = request[externalType];
		externalType = this._resolveExternalType(externalType);
		return { request, externalType };
	}

	/**
	 * Resolve the detailed external type from the raw external type.
	 * e.g. resolve "module" or "import" from "module-import" type
	 * @param {string} externalType raw external type
	 * @returns {string} resolved external type
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
	 * @private
	 * @param {string | string[]} request request
	 * @param {string} externalType the external type
	 * @param {RuntimeTemplate} runtimeTemplate the runtime template
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {DependencyMeta | undefined} dependencyMeta the dependency meta
	 * @returns {SourceData} the source data
	 */
	_getSourceData(
		request,
		externalType,
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime,
		dependencyMeta
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
				return /** @type {BuildInfo} */ (this.buildInfo).module
					? getSourceForCommonJsExternalInNodeModule(
							request,
							/** @type {string} */
							(runtimeTemplate.outputOptions.importMetaName),
							/** @type {boolean} */
							(runtimeTemplate.supportNodePrefixForCoreModules())
						)
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
				if (!(/** @type {BuildInfo} */ (this.buildInfo).module)) {
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
					/** @type {ImportDependencyMeta} */ (dependencyMeta)
				);
			}
			case "var":
			case "promise":
			case "const":
			case "let":
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
				const sources = new Map();
				sources.set(
					"javascript",
					new RawSource(`module.exports = ${JSON.stringify(request)};`)
				);
				const data = new Map();
				data.set("url", { javascript: request });
				return { sources, runtimeRequirements: RUNTIME_REQUIREMENTS, data };
			}
			case "css-url": {
				const sources = new Map();
				const data = new Map();
				data.set("url", { "css-url": request });
				return { sources, runtimeRequirements: RUNTIME_REQUIREMENTS, data };
			}
			case "css-import": {
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
					this.dependencyMeta
				);

				let sourceString = sourceData.expression;
				if (sourceData.iife)
					sourceString = `(function() { return ${sourceString}; }())`;
				if (concatenationScope) {
					sourceString = `${
						runtimeTemplate.supportsConst() ? "const" : "var"
					} ${ConcatenationScope.NAMESPACE_OBJECT_EXPORT} = ${sourceString};`;
					concatenationScope.registerNamespaceExport(
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					);
				} else {
					sourceString = `module.exports = ${sourceString};`;
				}
				if (sourceData.init)
					sourceString = `${sourceData.init}\n${sourceString}`;

				let data;
				if (sourceData.chunkInitFragments) {
					data = new Map();
					data.set("chunkInitFragments", sourceData.chunkInitFragments);
				}

				const sources = new Map();
				if (this.useSourceMap || this.useSimpleSourceMap) {
					sources.set(
						"javascript",
						new OriginalSource(sourceString, this.identifier())
					);
				} else {
					sources.set("javascript", new RawSource(sourceString));
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
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 42;
	}

	/**
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
