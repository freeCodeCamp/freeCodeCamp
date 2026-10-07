/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const eslintScope = require("eslint-scope");
const Referencer = require("eslint-scope/lib/referencer");
const { SyncBailHook } = require("tapable");
const {
	CachedSource,
	ConcatSource,
	ReplaceSource
} = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const { UsageState } = require("../ExportsInfo");
const Module = require("../Module");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const { JAVASCRIPT_MODULE_TYPE_ESM } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HarmonyImportDependency = require("../dependencies/HarmonyImportDependency");
const JavascriptParser = require("../javascript/JavascriptParser");
const { equals } = require("../util/ArrayHelpers");
const LazySet = require("../util/LazySet");
const { concatComparators } = require("../util/comparators");
const {
	RESERVED_NAMES,
	findNewName,
	addScopeSymbols,
	getAllReferences,
	getPathInAst,
	getUsedNamesInScopeInfo
} = require("../util/concatenate");
const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const makeSerializable = require("../util/makeSerializable");
const propertyAccess = require("../util/propertyAccess");
const { propertyName } = require("../util/propertyName");
const {
	filterRuntime,
	intersectRuntime,
	mergeRuntimeCondition,
	mergeRuntimeConditionNonFalse,
	runtimeConditionToString,
	subtractRuntimeCondition
} = require("../util/runtime");

/** @typedef {import("eslint-scope").Reference} Reference */
/** @typedef {import("eslint-scope").Scope} Scope */
/** @typedef {import("eslint-scope").Variable} Variable */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../ExportsInfo").ExportInfo} ExportInfo */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../ModuleParseError")} ModuleParseError */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptModulesPlugin").ChunkRenderContext} ChunkRenderContext */
/** @typedef {import("../javascript/JavascriptParser").Program} Program */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {typeof import("../util/Hash")} HashConstructor */
/** @typedef {import("../util/concatenate").UsedNames} UsedNames */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @template T
 * @typedef {import("../InitFragment")<T>} InitFragment
 */

/**
 * @template T
 * @typedef {import("../util/comparators").Comparator<T>} Comparator
 */

// fix eslint-scope to support class properties correctly
// cspell:word Referencer
const ReferencerClass = /** @type {any} */ (Referencer);
if (!ReferencerClass.prototype.PropertyDefinition) {
	ReferencerClass.prototype.PropertyDefinition =
		ReferencerClass.prototype.Property;
}

/**
 * @typedef {object} ReexportInfo
 * @property {Module} module
 * @property {string[]} export
 */

/** @typedef {RawBinding | SymbolBinding} Binding */

/**
 * @typedef {object} RawBinding
 * @property {ModuleInfo} info
 * @property {string} rawName
 * @property {string=} comment
 * @property {string[]} ids
 * @property {string[]} exportName
 */

/**
 * @typedef {object} SymbolBinding
 * @property {ConcatenatedModuleInfo} info
 * @property {string} name
 * @property {string=} comment
 * @property {string[]} ids
 * @property {string[]} exportName
 */

/** @typedef {ConcatenatedModuleInfo | ExternalModuleInfo } ModuleInfo */
/** @typedef {ConcatenatedModuleInfo | ExternalModuleInfo | ReferenceToModuleInfo } ModuleInfoOrReference */

/**
 * @typedef {object} ConcatenatedModuleInfo
 * @property {"concatenated"} type
 * @property {Module} module
 * @property {number} index
 * @property {Program | undefined} ast
 * @property {Source | undefined} internalSource
 * @property {ReplaceSource | undefined} source
 * @property {InitFragment<ChunkRenderContext>[]=} chunkInitFragments
 * @property {ReadOnlyRuntimeRequirements | undefined} runtimeRequirements
 * @property {Scope | undefined} globalScope
 * @property {Scope | undefined} moduleScope
 * @property {Map<string, string>} internalNames
 * @property {Map<string, string> | undefined} exportMap
 * @property {Map<string, string> | undefined} rawExportMap
 * @property {string=} namespaceExportSymbol
 * @property {string | undefined} namespaceObjectName
 * @property {boolean} interopNamespaceObjectUsed
 * @property {string | undefined} interopNamespaceObjectName
 * @property {boolean} interopNamespaceObject2Used
 * @property {string | undefined} interopNamespaceObject2Name
 * @property {boolean} interopDefaultAccessUsed
 * @property {string | undefined} interopDefaultAccessName
 */

/**
 * @typedef {object} ExternalModuleInfo
 * @property {"external"} type
 * @property {Module} module
 * @property {RuntimeSpec | boolean} runtimeCondition
 * @property {number} index
 * @property {string | undefined} name
 * @property {boolean} interopNamespaceObjectUsed
 * @property {string | undefined} interopNamespaceObjectName
 * @property {boolean} interopNamespaceObject2Used
 * @property {string | undefined} interopNamespaceObject2Name
 * @property {boolean} interopDefaultAccessUsed
 * @property {string | undefined} interopDefaultAccessName
 */

/**
 * @typedef {object} ReferenceToModuleInfo
 * @property {"reference"} type
 * @property {RuntimeSpec | boolean} runtimeCondition
 * @property {ModuleInfo} target
 */

/**
 * @template T
 * @param {string} property property
 * @param {function(T[keyof T], T[keyof T]): 0 | 1 | -1} comparator comparator
 * @returns {Comparator<T>} comparator
 */

const createComparator = (property, comparator) => (a, b) =>
	comparator(
		a[/** @type {keyof T} */ (property)],
		b[/** @type {keyof T} */ (property)]
	);

/**
 * @param {number} a a
 * @param {number} b b
 * @returns {0 | 1 | -1} result
 */
const compareNumbers = (a, b) => {
	if (Number.isNaN(a)) {
		if (!Number.isNaN(b)) {
			return 1;
		}
	} else {
		if (Number.isNaN(b)) {
			return -1;
		}
		if (a !== b) {
			return a < b ? -1 : 1;
		}
	}
	return 0;
};
const bySourceOrder = createComparator("sourceOrder", compareNumbers);
const byRangeStart = createComparator("rangeStart", compareNumbers);

/**
 * @param {Iterable<string>} iterable iterable object
 * @returns {string} joined iterable object
 */
const joinIterableWithComma = iterable => {
	// This is more performant than Array.from().join(", ")
	// as it doesn't create an array
	let str = "";
	let first = true;
	for (const item of iterable) {
		if (first) {
			first = false;
		} else {
			str += ", ";
		}
		str += item;
	}
	return str;
};

/**
 * @typedef {object} ConcatenationEntry
 * @property {"concatenated" | "external"} type
 * @property {Module} module
 * @property {RuntimeSpec | boolean} runtimeCondition
 */

/**
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {ModuleInfo} info module info
 * @param {string[]} exportName exportName
 * @param {Map<Module, ModuleInfo>} moduleToInfoMap moduleToInfoMap
 * @param {RuntimeSpec} runtime for which runtime
 * @param {RequestShortener} requestShortener the request shortener
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {Set<ConcatenatedModuleInfo>} neededNamespaceObjects modules for which a namespace object should be generated
 * @param {boolean} asCall asCall
 * @param {boolean | undefined} strictHarmonyModule strictHarmonyModule
 * @param {boolean | undefined} asiSafe asiSafe
 * @param {Set<ExportInfo>} alreadyVisited alreadyVisited
 * @returns {Binding} the final variable
 */
const getFinalBinding = (
	moduleGraph,
	info,
	exportName,
	moduleToInfoMap,
	runtime,
	requestShortener,
	runtimeTemplate,
	neededNamespaceObjects,
	asCall,
	strictHarmonyModule,
	asiSafe,
	alreadyVisited = new Set()
) => {
	const exportsType = info.module.getExportsType(
		moduleGraph,
		strictHarmonyModule
	);
	if (exportName.length === 0) {
		switch (exportsType) {
			case "default-only":
				info.interopNamespaceObject2Used = true;
				return {
					info,
					rawName: /** @type {string} */ (info.interopNamespaceObject2Name),
					ids: exportName,
					exportName
				};
			case "default-with-named":
				info.interopNamespaceObjectUsed = true;
				return {
					info,
					rawName: /** @type {string} */ (info.interopNamespaceObjectName),
					ids: exportName,
					exportName
				};
			case "namespace":
			case "dynamic":
				break;
			default:
				throw new Error(`Unexpected exportsType ${exportsType}`);
		}
	} else {
		switch (exportsType) {
			case "namespace":
				break;
			case "default-with-named":
				switch (exportName[0]) {
					case "default":
						exportName = exportName.slice(1);
						break;
					case "__esModule":
						return {
							info,
							rawName: "/* __esModule */true",
							ids: exportName.slice(1),
							exportName
						};
				}
				break;
			case "default-only": {
				const exportId = exportName[0];
				if (exportId === "__esModule") {
					return {
						info,
						rawName: "/* __esModule */true",
						ids: exportName.slice(1),
						exportName
					};
				}
				exportName = exportName.slice(1);
				if (exportId !== "default") {
					return {
						info,
						rawName:
							"/* non-default import from default-exporting module */undefined",
						ids: exportName,
						exportName
					};
				}
				break;
			}
			case "dynamic":
				switch (exportName[0]) {
					case "default": {
						exportName = exportName.slice(1);
						info.interopDefaultAccessUsed = true;
						const defaultExport = asCall
							? `${info.interopDefaultAccessName}()`
							: asiSafe
								? `(${info.interopDefaultAccessName}())`
								: asiSafe === false
									? `;(${info.interopDefaultAccessName}())`
									: `${info.interopDefaultAccessName}.a`;
						return {
							info,
							rawName: defaultExport,
							ids: exportName,
							exportName
						};
					}
					case "__esModule":
						return {
							info,
							rawName: "/* __esModule */true",
							ids: exportName.slice(1),
							exportName
						};
				}
				break;
			default:
				throw new Error(`Unexpected exportsType ${exportsType}`);
		}
	}
	if (exportName.length === 0) {
		switch (info.type) {
			case "concatenated":
				neededNamespaceObjects.add(info);
				return {
					info,
					rawName:
						/** @type {NonNullable<ConcatenatedModuleInfo["namespaceObjectName"]>} */
						(info.namespaceObjectName),
					ids: exportName,
					exportName
				};
			case "external":
				return {
					info,
					rawName:
						/** @type {NonNullable<ExternalModuleInfo["name"]>} */
						(info.name),
					ids: exportName,
					exportName
				};
		}
	}
	const exportsInfo = moduleGraph.getExportsInfo(info.module);
	const exportInfo = exportsInfo.getExportInfo(exportName[0]);
	if (alreadyVisited.has(exportInfo)) {
		return {
			info,
			rawName: "/* circular reexport */ Object(function x() { x() }())",
			ids: [],
			exportName
		};
	}
	alreadyVisited.add(exportInfo);
	switch (info.type) {
		case "concatenated": {
			const exportId = exportName[0];
			if (exportInfo.provided === false) {
				// It's not provided, but it could be on the prototype
				neededNamespaceObjects.add(info);
				return {
					info,
					rawName: /** @type {string} */ (info.namespaceObjectName),
					ids: exportName,
					exportName
				};
			}
			const directExport = info.exportMap && info.exportMap.get(exportId);
			if (directExport) {
				const usedName = /** @type {string[]} */ (
					exportsInfo.getUsedName(exportName, runtime)
				);
				if (!usedName) {
					return {
						info,
						rawName: "/* unused export */ undefined",
						ids: exportName.slice(1),
						exportName
					};
				}
				return {
					info,
					name: directExport,
					ids: usedName.slice(1),
					exportName
				};
			}
			const rawExport = info.rawExportMap && info.rawExportMap.get(exportId);
			if (rawExport) {
				return {
					info,
					rawName: rawExport,
					ids: exportName.slice(1),
					exportName
				};
			}
			const reexport = exportInfo.findTarget(moduleGraph, module =>
				moduleToInfoMap.has(module)
			);
			if (reexport === false) {
				throw new Error(
					`Target module of reexport from '${info.module.readableIdentifier(
						requestShortener
					)}' is not part of the concatenation (export '${exportId}')\nModules in the concatenation:\n${Array.from(
						moduleToInfoMap,
						([m, info]) =>
							` * ${info.type} ${m.readableIdentifier(requestShortener)}`
					).join("\n")}`
				);
			}
			if (reexport) {
				const refInfo = moduleToInfoMap.get(reexport.module);
				return getFinalBinding(
					moduleGraph,
					/** @type {ModuleInfo} */ (refInfo),
					reexport.export
						? [...reexport.export, ...exportName.slice(1)]
						: exportName.slice(1),
					moduleToInfoMap,
					runtime,
					requestShortener,
					runtimeTemplate,
					neededNamespaceObjects,
					asCall,
					/** @type {BuildMeta} */
					(info.module.buildMeta).strictHarmonyModule,
					asiSafe,
					alreadyVisited
				);
			}
			if (info.namespaceExportSymbol) {
				const usedName = /** @type {string[]} */ (
					exportsInfo.getUsedName(exportName, runtime)
				);
				return {
					info,
					rawName: /** @type {string} */ (info.namespaceObjectName),
					ids: usedName,
					exportName
				};
			}
			throw new Error(
				`Cannot get final name for export '${exportName.join(
					"."
				)}' of ${info.module.readableIdentifier(requestShortener)}`
			);
		}

		case "external": {
			const used = /** @type {string[]} */ (
				exportsInfo.getUsedName(exportName, runtime)
			);
			if (!used) {
				return {
					info,
					rawName: "/* unused export */ undefined",
					ids: exportName.slice(1),
					exportName
				};
			}
			const comment = equals(used, exportName)
				? ""
				: Template.toNormalComment(`${exportName.join(".")}`);
			return { info, rawName: info.name + comment, ids: used, exportName };
		}
	}
};

/**
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {ModuleInfo} info module info
 * @param {string[]} exportName exportName
 * @param {Map<Module, ModuleInfo>} moduleToInfoMap moduleToInfoMap
 * @param {RuntimeSpec} runtime for which runtime
 * @param {RequestShortener} requestShortener the request shortener
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {Set<ConcatenatedModuleInfo>} neededNamespaceObjects modules for which a namespace object should be generated
 * @param {boolean} asCall asCall
 * @param {boolean | undefined} callContext callContext
 * @param {boolean | undefined} strictHarmonyModule strictHarmonyModule
 * @param {boolean | undefined} asiSafe asiSafe
 * @returns {string} the final name
 */
const getFinalName = (
	moduleGraph,
	info,
	exportName,
	moduleToInfoMap,
	runtime,
	requestShortener,
	runtimeTemplate,
	neededNamespaceObjects,
	asCall,
	callContext,
	strictHarmonyModule,
	asiSafe
) => {
	const binding = getFinalBinding(
		moduleGraph,
		info,
		exportName,
		moduleToInfoMap,
		runtime,
		requestShortener,
		runtimeTemplate,
		neededNamespaceObjects,
		asCall,
		strictHarmonyModule,
		asiSafe
	);
	{
		const { ids, comment } = binding;
		let reference;
		let isPropertyAccess;
		if ("rawName" in binding) {
			reference = `${binding.rawName}${comment || ""}${propertyAccess(ids)}`;
			isPropertyAccess = ids.length > 0;
		} else {
			const { info, name: exportId } = binding;
			const name = info.internalNames.get(exportId);
			if (!name) {
				throw new Error(
					`The export "${exportId}" in "${info.module.readableIdentifier(
						requestShortener
					)}" has no internal name (existing names: ${
						Array.from(
							info.internalNames,
							([name, symbol]) => `${name}: ${symbol}`
						).join(", ") || "none"
					})`
				);
			}
			reference = `${name}${comment || ""}${propertyAccess(ids)}`;
			isPropertyAccess = ids.length > 1;
		}
		if (isPropertyAccess && asCall && callContext === false) {
			return asiSafe
				? `(0,${reference})`
				: asiSafe === false
					? `;(0,${reference})`
					: `/*#__PURE__*/Object(${reference})`;
		}
		return reference;
	}
};

/**
 * @typedef {object} ConcatenateModuleHooks
 * @property {SyncBailHook<[Record<string, string>], boolean | void>} exportsDefinitions
 */

/** @type {WeakMap<Compilation, ConcatenateModuleHooks>} */
const compilationHooksMap = new WeakMap();

class ConcatenatedModule extends Module {
	/**
	 * @param {Module} rootModule the root module of the concatenation
	 * @param {Set<Module>} modules all modules in the concatenation (including the root module)
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {Compilation} compilation the compilation
	 * @param {object=} associatedObjectForCache object for caching
	 * @param {string | HashConstructor=} hashFunction hash function to use
	 * @returns {ConcatenatedModule} the module
	 */
	static create(
		rootModule,
		modules,
		runtime,
		compilation,
		associatedObjectForCache,
		hashFunction = "md4"
	) {
		const identifier = ConcatenatedModule._createIdentifier(
			rootModule,
			modules,
			associatedObjectForCache,
			hashFunction
		);
		return new ConcatenatedModule({
			identifier,
			rootModule,
			modules,
			runtime,
			compilation
		});
	}

	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {ConcatenateModuleHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				exportsDefinitions: new SyncBailHook(["definitions"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * @param {object} options options
	 * @param {string} options.identifier the identifier of the module
	 * @param {Module} options.rootModule the root module of the concatenation
	 * @param {RuntimeSpec} options.runtime the selected runtime
	 * @param {Set<Module>} options.modules all concatenated modules
	 * @param {Compilation} options.compilation the compilation
	 */
	constructor({ identifier, rootModule, modules, runtime, compilation }) {
		super(JAVASCRIPT_MODULE_TYPE_ESM, null, rootModule && rootModule.layer);

		// Info from Factory
		/** @type {string} */
		this._identifier = identifier;
		/** @type {Module} */
		this.rootModule = rootModule;
		/** @type {Set<Module>} */
		this._modules = modules;
		this._runtime = runtime;
		this.factoryMeta = rootModule && rootModule.factoryMeta;
		/** @type {Compilation | undefined} */
		this.compilation = compilation;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		throw new Error("Must not be called");
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	get modules() {
		return Array.from(this._modules);
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return this._identifier;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `${this.rootModule.readableIdentifier(
			requestShortener
		)} + ${this._modules.size - 1} modules`;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return this.rootModule.libIdent(options);
	}

	/**
	 * @returns {string | null} absolute path which should be used for condition matching (usually the resource path)
	 */
	nameForCondition() {
		return this.rootModule.nameForCondition();
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this module should be connected to referencing modules when consumed for side-effects only
	 */
	getSideEffectsConnectionState(moduleGraph) {
		return this.rootModule.getSideEffectsConnectionState(moduleGraph);
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
		const { rootModule } = this;
		const { moduleArgument, exportsArgument } =
			/** @type {BuildInfo} */
			(rootModule.buildInfo);
		this.buildInfo = {
			strict: true,
			cacheable: true,
			moduleArgument,
			exportsArgument,
			fileDependencies: new LazySet(),
			contextDependencies: new LazySet(),
			missingDependencies: new LazySet(),
			topLevelDeclarations: new Set(),
			assets: undefined
		};
		this.buildMeta = rootModule.buildMeta;
		this.clearDependenciesAndBlocks();
		this.clearWarningsAndErrors();

		for (const m of this._modules) {
			// populate cacheable
			if (!(/** @type {BuildInfo} */ (m.buildInfo).cacheable)) {
				this.buildInfo.cacheable = false;
			}

			// populate dependencies
			for (const d of m.dependencies.filter(
				dep =>
					!(dep instanceof HarmonyImportDependency) ||
					!this._modules.has(
						/** @type {Module} */ (compilation.moduleGraph.getModule(dep))
					)
			)) {
				this.dependencies.push(d);
			}
			// populate blocks
			for (const d of m.blocks) {
				this.blocks.push(d);
			}

			// populate warnings
			const warnings = m.getWarnings();
			if (warnings !== undefined) {
				for (const warning of warnings) {
					this.addWarning(warning);
				}
			}

			// populate errors
			const errors = m.getErrors();
			if (errors !== undefined) {
				for (const error of errors) {
					this.addError(error);
				}
			}

			const { assets, assetsInfo, topLevelDeclarations } =
				/** @type {BuildInfo} */ (m.buildInfo);

			// populate topLevelDeclarations
			if (topLevelDeclarations) {
				const topLevelDeclarations = this.buildInfo.topLevelDeclarations;
				if (topLevelDeclarations !== undefined) {
					for (const decl of topLevelDeclarations) {
						topLevelDeclarations.add(decl);
					}
				}
			} else {
				this.buildInfo.topLevelDeclarations = undefined;
			}

			// populate assets
			if (assets) {
				if (this.buildInfo.assets === undefined) {
					this.buildInfo.assets = Object.create(null);
				}
				Object.assign(
					/** @type {NonNullable<BuildInfo["assets"]>} */
					(
						/** @type {BuildInfo} */
						(this.buildInfo).assets
					),
					assets
				);
			}
			if (assetsInfo) {
				if (this.buildInfo.assetsInfo === undefined) {
					this.buildInfo.assetsInfo = new Map();
				}
				for (const [key, value] of assetsInfo) {
					this.buildInfo.assetsInfo.set(key, value);
				}
			}
		}
		callback();
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		// Guess size from embedded modules
		let size = 0;
		for (const module of this._modules) {
			size += module.size(type);
		}
		return size;
	}

	/**
	 * @private
	 * @param {Module} rootModule the root of the concatenation
	 * @param {Set<Module>} modulesSet a set of modules which should be concatenated
	 * @param {RuntimeSpec} runtime for this runtime
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConcatenationEntry[]} concatenation list
	 */
	_createConcatenationList(rootModule, modulesSet, runtime, moduleGraph) {
		/** @type {ConcatenationEntry[]} */
		const list = [];
		/** @type {Map<Module, RuntimeSpec | true>} */
		const existingEntries = new Map();

		/**
		 * @param {Module} module a module
		 * @returns {Iterable<{ connection: ModuleGraphConnection, runtimeCondition: RuntimeSpec | true }>} imported modules in order
		 */
		const getConcatenatedImports = module => {
			const connections = Array.from(
				moduleGraph.getOutgoingConnections(module)
			);
			if (module === rootModule) {
				for (const c of moduleGraph.getOutgoingConnections(this))
					connections.push(c);
			}
			/**
			 * @type {Array<{ connection: ModuleGraphConnection, sourceOrder: number, rangeStart: number }>}
			 */
			const references = connections
				.filter(connection => {
					if (!(connection.dependency instanceof HarmonyImportDependency))
						return false;
					return (
						connection &&
						connection.resolvedOriginModule === module &&
						connection.module &&
						connection.isTargetActive(runtime)
					);
				})
				.map(connection => {
					const dep = /** @type {HarmonyImportDependency} */ (
						connection.dependency
					);
					return {
						connection,
						sourceOrder: dep.sourceOrder,
						rangeStart: dep.range && dep.range[0]
					};
				});
			/**
			 * bySourceOrder
			 * @example
			 * import a from "a"; // sourceOrder=1
			 * import b from "b"; // sourceOrder=2
			 *
			 * byRangeStart
			 * @example
			 * import {a, b} from "a"; // sourceOrder=1
			 * a.a(); // first range
			 * b.b(); // second range
			 *
			 * If there is no reexport, we have the same source.
			 * If there is reexport, but module has side effects, this will lead to reexport module only.
			 * If there is side-effects-free reexport, we can get simple deterministic result with range start comparison.
			 */
			references.sort(concatComparators(bySourceOrder, byRangeStart));
			/** @type {Map<Module, { connection: ModuleGraphConnection, runtimeCondition: RuntimeSpec | true }>} */
			const referencesMap = new Map();
			for (const { connection } of references) {
				const runtimeCondition = filterRuntime(runtime, r =>
					connection.isTargetActive(r)
				);
				if (runtimeCondition === false) continue;
				const module = connection.module;
				const entry = referencesMap.get(module);
				if (entry === undefined) {
					referencesMap.set(module, { connection, runtimeCondition });
					continue;
				}
				entry.runtimeCondition = mergeRuntimeConditionNonFalse(
					entry.runtimeCondition,
					runtimeCondition,
					runtime
				);
			}
			return referencesMap.values();
		};

		/**
		 * @param {ModuleGraphConnection} connection graph connection
		 * @param {RuntimeSpec | true} runtimeCondition runtime condition
		 * @returns {void}
		 */
		const enterModule = (connection, runtimeCondition) => {
			const module = connection.module;
			if (!module) return;
			const existingEntry = existingEntries.get(module);
			if (existingEntry === true) {
				return;
			}
			if (modulesSet.has(module)) {
				existingEntries.set(module, true);
				if (runtimeCondition !== true) {
					throw new Error(
						`Cannot runtime-conditional concatenate a module (${module.identifier()} in ${this.rootModule.identifier()}, ${runtimeConditionToString(
							runtimeCondition
						)}). This should not happen.`
					);
				}
				const imports = getConcatenatedImports(module);
				for (const { connection, runtimeCondition } of imports)
					enterModule(connection, runtimeCondition);
				list.push({
					type: "concatenated",
					module: connection.module,
					runtimeCondition
				});
			} else {
				if (existingEntry !== undefined) {
					const reducedRuntimeCondition = subtractRuntimeCondition(
						runtimeCondition,
						existingEntry,
						runtime
					);
					if (reducedRuntimeCondition === false) return;
					runtimeCondition = reducedRuntimeCondition;
					existingEntries.set(
						connection.module,
						mergeRuntimeConditionNonFalse(
							existingEntry,
							runtimeCondition,
							runtime
						)
					);
				} else {
					existingEntries.set(connection.module, runtimeCondition);
				}
				if (list.length > 0) {
					const lastItem = list[list.length - 1];
					if (
						lastItem.type === "external" &&
						lastItem.module === connection.module
					) {
						lastItem.runtimeCondition = mergeRuntimeCondition(
							lastItem.runtimeCondition,
							runtimeCondition,
							runtime
						);
						return;
					}
				}
				list.push({
					type: "external",
					get module() {
						// We need to use a getter here, because the module in the dependency
						// could be replaced by some other process (i. e. also replaced with a
						// concatenated module)
						return connection.module;
					},
					runtimeCondition
				});
			}
		};

		existingEntries.set(rootModule, true);
		const imports = getConcatenatedImports(rootModule);
		for (const { connection, runtimeCondition } of imports)
			enterModule(connection, runtimeCondition);
		list.push({
			type: "concatenated",
			module: rootModule,
			runtimeCondition: true
		});

		return list;
	}

	/**
	 * @param {Module} rootModule the root module of the concatenation
	 * @param {Set<Module>} modules all modules in the concatenation (including the root module)
	 * @param {object=} associatedObjectForCache object for caching
	 * @param {string | HashConstructor=} hashFunction hash function to use
	 * @returns {string} the identifier
	 */
	static _createIdentifier(
		rootModule,
		modules,
		associatedObjectForCache,
		hashFunction = "md4"
	) {
		const cachedMakePathsRelative = makePathsRelative.bindContextCache(
			/** @type {string} */ (rootModule.context),
			associatedObjectForCache
		);
		const identifiers = [];
		for (const module of modules) {
			identifiers.push(cachedMakePathsRelative(module.identifier()));
		}
		identifiers.sort();
		const hash = createHash(hashFunction);
		hash.update(identifiers.join(" "));
		return `${rootModule.identifier()}|${hash.digest("hex")}`;
	}

	/**
	 * @param {LazySet<string>} fileDependencies set where file dependencies are added to
	 * @param {LazySet<string>} contextDependencies set where context dependencies are added to
	 * @param {LazySet<string>} missingDependencies set where missing dependencies are added to
	 * @param {LazySet<string>} buildDependencies set where build dependencies are added to
	 */
	addCacheDependencies(
		fileDependencies,
		contextDependencies,
		missingDependencies,
		buildDependencies
	) {
		for (const module of this._modules) {
			module.addCacheDependencies(
				fileDependencies,
				contextDependencies,
				missingDependencies,
				buildDependencies
			);
		}
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({
		dependencyTemplates,
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime: generationRuntime,
		codeGenerationResults
	}) {
		/** @type {RuntimeRequirements} */
		const runtimeRequirements = new Set();
		const runtime = intersectRuntime(generationRuntime, this._runtime);

		const requestShortener = runtimeTemplate.requestShortener;
		// Meta info for each module
		const [modulesWithInfo, moduleToInfoMap] = this._getModulesWithInfo(
			moduleGraph,
			runtime
		);

		// Set with modules that need a generated namespace object
		/** @type {Set<ConcatenatedModuleInfo>} */
		const neededNamespaceObjects = new Set();

		// Generate source code and analyse scopes
		// Prepare a ReplaceSource for the final source
		for (const info of moduleToInfoMap.values()) {
			this._analyseModule(
				moduleToInfoMap,
				info,
				dependencyTemplates,
				runtimeTemplate,
				moduleGraph,
				chunkGraph,
				runtime,
				/** @type {CodeGenerationResults} */
				(codeGenerationResults)
			);
		}

		// List of all used names to avoid conflicts
		const allUsedNames = new Set(RESERVED_NAMES);
		// Updated Top level declarations are created by renaming
		const topLevelDeclarations = new Set();

		// List of additional names in scope for module references
		/** @type {Map<string, { usedNames: UsedNames, alreadyCheckedScopes: Set<TODO> }>} */
		const usedNamesInScopeInfo = new Map();
		/**
		 * @param {string} module module identifier
		 * @param {string} id export id
		 * @returns {{ usedNames: UsedNames, alreadyCheckedScopes: Set<TODO> }} info
		 */

		// Set of already checked scopes
		const ignoredScopes = new Set();

		// get all global names
		for (const info of modulesWithInfo) {
			if (info.type === "concatenated") {
				// ignore symbols from moduleScope
				if (info.moduleScope) {
					ignoredScopes.add(info.moduleScope);
				}

				// The super class expression in class scopes behaves weird
				// We get ranges of all super class expressions to make
				// renaming to work correctly
				const superClassCache = new WeakMap();
				/**
				 * @param {Scope} scope scope
				 * @returns {TODO} result
				 */
				const getSuperClassExpressions = scope => {
					const cacheEntry = superClassCache.get(scope);
					if (cacheEntry !== undefined) return cacheEntry;
					const superClassExpressions = [];
					for (const childScope of scope.childScopes) {
						if (childScope.type !== "class") continue;
						const block = childScope.block;
						if (
							(block.type === "ClassDeclaration" ||
								block.type === "ClassExpression") &&
							block.superClass
						) {
							superClassExpressions.push({
								range: block.superClass.range,
								variables: childScope.variables
							});
						}
					}
					superClassCache.set(scope, superClassExpressions);
					return superClassExpressions;
				};

				// add global symbols
				if (info.globalScope) {
					for (const reference of info.globalScope.through) {
						const name = reference.identifier.name;
						if (ConcatenationScope.isModuleReference(name)) {
							const match = ConcatenationScope.matchModuleReference(name);
							if (!match) continue;
							const referencedInfo = modulesWithInfo[match.index];
							if (referencedInfo.type === "reference")
								throw new Error("Module reference can't point to a reference");
							const binding = getFinalBinding(
								moduleGraph,
								referencedInfo,
								match.ids,
								moduleToInfoMap,
								runtime,
								requestShortener,
								runtimeTemplate,
								neededNamespaceObjects,
								false,
								/** @type {BuildMeta} */
								(info.module.buildMeta).strictHarmonyModule,
								true
							);
							if (!binding.ids) continue;
							const { usedNames, alreadyCheckedScopes } =
								getUsedNamesInScopeInfo(
									usedNamesInScopeInfo,
									binding.info.module.identifier(),
									"name" in binding ? binding.name : ""
								);
							for (const expr of getSuperClassExpressions(reference.from)) {
								if (
									expr.range[0] <=
										/** @type {Range} */ (reference.identifier.range)[0] &&
									expr.range[1] >=
										/** @type {Range} */ (reference.identifier.range)[1]
								) {
									for (const variable of expr.variables) {
										usedNames.add(variable.name);
									}
								}
							}
							addScopeSymbols(
								reference.from,
								usedNames,
								alreadyCheckedScopes,
								ignoredScopes
							);
						} else {
							allUsedNames.add(name);
						}
					}
				}
			}
		}

		// generate names for symbols
		for (const info of moduleToInfoMap.values()) {
			const { usedNames: namespaceObjectUsedNames } = getUsedNamesInScopeInfo(
				usedNamesInScopeInfo,
				info.module.identifier(),
				""
			);
			switch (info.type) {
				case "concatenated": {
					const variables = /** @type {Scope} */ (info.moduleScope).variables;
					for (const variable of variables) {
						const name = variable.name;
						const { usedNames, alreadyCheckedScopes } = getUsedNamesInScopeInfo(
							usedNamesInScopeInfo,
							info.module.identifier(),
							name
						);
						if (allUsedNames.has(name) || usedNames.has(name)) {
							const references = getAllReferences(variable);
							for (const ref of references) {
								addScopeSymbols(
									ref.from,
									usedNames,
									alreadyCheckedScopes,
									ignoredScopes
								);
							}
							const newName = findNewName(
								name,
								allUsedNames,
								usedNames,
								info.module.readableIdentifier(requestShortener)
							);
							allUsedNames.add(newName);
							info.internalNames.set(name, newName);
							topLevelDeclarations.add(newName);
							const source = /** @type {ReplaceSource} */ (info.source);
							const allIdentifiers = new Set(
								references.map(r => r.identifier).concat(variable.identifiers)
							);
							for (const identifier of allIdentifiers) {
								const r = /** @type {Range} */ (identifier.range);
								const path = getPathInAst(
									/** @type {NonNullable<ConcatenatedModuleInfo["ast"]>} */
									(info.ast),
									identifier
								);
								if (path && path.length > 1) {
									const maybeProperty =
										path[1].type === "AssignmentPattern" &&
										path[1].left === path[0]
											? path[2]
											: path[1];
									if (
										maybeProperty.type === "Property" &&
										maybeProperty.shorthand
									) {
										source.insert(r[1], `: ${newName}`);
										continue;
									}
								}
								source.replace(r[0], r[1] - 1, newName);
							}
						} else {
							allUsedNames.add(name);
							info.internalNames.set(name, name);
							topLevelDeclarations.add(name);
						}
					}
					let namespaceObjectName;
					if (info.namespaceExportSymbol) {
						namespaceObjectName = info.internalNames.get(
							info.namespaceExportSymbol
						);
					} else {
						namespaceObjectName = findNewName(
							"namespaceObject",
							allUsedNames,
							namespaceObjectUsedNames,
							info.module.readableIdentifier(requestShortener)
						);
						allUsedNames.add(namespaceObjectName);
					}
					info.namespaceObjectName =
						/** @type {string} */
						(namespaceObjectName);
					topLevelDeclarations.add(namespaceObjectName);
					break;
				}
				case "external": {
					const externalName = findNewName(
						"",
						allUsedNames,
						namespaceObjectUsedNames,
						info.module.readableIdentifier(requestShortener)
					);
					allUsedNames.add(externalName);
					info.name = externalName;
					topLevelDeclarations.add(externalName);
					break;
				}
			}
			const buildMeta = /** @type {BuildMeta} */ (info.module.buildMeta);
			if (buildMeta.exportsType !== "namespace") {
				const externalNameInterop = findNewName(
					"namespaceObject",
					allUsedNames,
					namespaceObjectUsedNames,
					info.module.readableIdentifier(requestShortener)
				);
				allUsedNames.add(externalNameInterop);
				info.interopNamespaceObjectName = externalNameInterop;
				topLevelDeclarations.add(externalNameInterop);
			}
			if (
				buildMeta.exportsType === "default" &&
				buildMeta.defaultObject !== "redirect"
			) {
				const externalNameInterop = findNewName(
					"namespaceObject2",
					allUsedNames,
					namespaceObjectUsedNames,
					info.module.readableIdentifier(requestShortener)
				);
				allUsedNames.add(externalNameInterop);
				info.interopNamespaceObject2Name = externalNameInterop;
				topLevelDeclarations.add(externalNameInterop);
			}
			if (buildMeta.exportsType === "dynamic" || !buildMeta.exportsType) {
				const externalNameInterop = findNewName(
					"default",
					allUsedNames,
					namespaceObjectUsedNames,
					info.module.readableIdentifier(requestShortener)
				);
				allUsedNames.add(externalNameInterop);
				info.interopDefaultAccessName = externalNameInterop;
				topLevelDeclarations.add(externalNameInterop);
			}
		}

		// Find and replace references to modules
		for (const info of moduleToInfoMap.values()) {
			if (info.type === "concatenated") {
				const globalScope = /** @type {Scope} */ (info.globalScope);
				for (const reference of globalScope.through) {
					const name = reference.identifier.name;
					const match = ConcatenationScope.matchModuleReference(name);
					if (match) {
						const referencedInfo = modulesWithInfo[match.index];
						if (referencedInfo.type === "reference")
							throw new Error("Module reference can't point to a reference");
						const finalName = getFinalName(
							moduleGraph,
							referencedInfo,
							match.ids,
							moduleToInfoMap,
							runtime,
							requestShortener,
							runtimeTemplate,
							neededNamespaceObjects,
							match.call,
							!match.directImport,
							/** @type {BuildMeta} */
							(info.module.buildMeta).strictHarmonyModule,
							match.asiSafe
						);
						const r = /** @type {Range} */ (reference.identifier.range);
						const source = /** @type {ReplaceSource} */ (info.source);
						// range is extended by 2 chars to cover the appended "._"
						source.replace(r[0], r[1] + 1, finalName);
					}
				}
			}
		}

		// Map with all root exposed used exports
		/** @type {Map<string, function(RequestShortener): string>} */
		const exportsMap = new Map();

		// Set with all root exposed unused exports
		/** @type {Set<string>} */
		const unusedExports = new Set();

		const rootInfo = /** @type {ConcatenatedModuleInfo} */ (
			moduleToInfoMap.get(this.rootModule)
		);
		const strictHarmonyModule =
			/** @type {BuildMeta} */
			(rootInfo.module.buildMeta).strictHarmonyModule;
		const exportsInfo = moduleGraph.getExportsInfo(rootInfo.module);
		/** @type {Record<string, string>} */
		const exportsFinalName = {};
		for (const exportInfo of exportsInfo.orderedExports) {
			const name = exportInfo.name;
			if (exportInfo.provided === false) continue;
			const used = exportInfo.getUsedName(undefined, runtime);
			if (!used) {
				unusedExports.add(name);
				continue;
			}
			exportsMap.set(used, requestShortener => {
				try {
					const finalName = getFinalName(
						moduleGraph,
						rootInfo,
						[name],
						moduleToInfoMap,
						runtime,
						requestShortener,
						runtimeTemplate,
						neededNamespaceObjects,
						false,
						false,
						strictHarmonyModule,
						true
					);
					exportsFinalName[used] = finalName;
					return `/* ${
						exportInfo.isReexport() ? "reexport" : "binding"
					} */ ${finalName}`;
				} catch (err) {
					/** @type {Error} */
					(err).message +=
						`\nwhile generating the root export '${name}' (used name: '${used}')`;
					throw err;
				}
			});
		}

		const result = new ConcatSource();

		// add harmony compatibility flag (must be first because of possible circular dependencies)
		let shouldAddHarmonyFlag = false;
		if (
			moduleGraph.getExportsInfo(this).otherExportsInfo.getUsed(runtime) !==
			UsageState.Unused
		) {
			shouldAddHarmonyFlag = true;
		}

		// define exports
		if (exportsMap.size > 0) {
			const { exportsDefinitions } = ConcatenatedModule.getCompilationHooks(
				/** @type {Compilation} */ (this.compilation)
			);

			const definitions = [];
			for (const [key, value] of exportsMap) {
				definitions.push(
					`\n  ${propertyName(key)}: ${runtimeTemplate.returningFunction(
						value(requestShortener)
					)}`
				);
			}
			const shouldSkipRenderDefinitions =
				exportsDefinitions.call(exportsFinalName);

			if (!shouldSkipRenderDefinitions) {
				runtimeRequirements.add(RuntimeGlobals.exports);
				runtimeRequirements.add(RuntimeGlobals.definePropertyGetters);

				if (shouldAddHarmonyFlag) {
					result.add("// ESM COMPAT FLAG\n");
					result.add(
						runtimeTemplate.defineEsModuleFlagStatement({
							exportsArgument: this.exportsArgument,
							runtimeRequirements
						})
					);
				}

				result.add("\n// EXPORTS\n");
				result.add(
					`${RuntimeGlobals.definePropertyGetters}(${
						this.exportsArgument
					}, {${definitions.join(",")}\n});\n`
				);
			} else {
				/** @type {BuildMeta} */
				(this.buildMeta).exportsFinalName = exportsFinalName;
			}
		}

		// list unused exports
		if (unusedExports.size > 0) {
			result.add(
				`\n// UNUSED EXPORTS: ${joinIterableWithComma(unusedExports)}\n`
			);
		}

		// generate namespace objects
		const namespaceObjectSources = new Map();
		for (const info of neededNamespaceObjects) {
			if (info.namespaceExportSymbol) continue;
			const nsObj = [];
			const exportsInfo = moduleGraph.getExportsInfo(info.module);
			for (const exportInfo of exportsInfo.orderedExports) {
				if (exportInfo.provided === false) continue;
				const usedName = exportInfo.getUsedName(undefined, runtime);
				if (usedName) {
					const finalName = getFinalName(
						moduleGraph,
						info,
						[exportInfo.name],
						moduleToInfoMap,
						runtime,
						requestShortener,
						runtimeTemplate,
						neededNamespaceObjects,
						false,
						undefined,
						/** @type {BuildMeta} */
						(info.module.buildMeta).strictHarmonyModule,
						true
					);
					nsObj.push(
						`\n  ${propertyName(usedName)}: ${runtimeTemplate.returningFunction(
							finalName
						)}`
					);
				}
			}
			const name = info.namespaceObjectName;
			const defineGetters =
				nsObj.length > 0
					? `${RuntimeGlobals.definePropertyGetters}(${name}, {${nsObj.join(
							","
						)}\n});\n`
					: "";
			if (nsObj.length > 0)
				runtimeRequirements.add(RuntimeGlobals.definePropertyGetters);
			namespaceObjectSources.set(
				info,
				`
// NAMESPACE OBJECT: ${info.module.readableIdentifier(requestShortener)}
var ${name} = {};
${RuntimeGlobals.makeNamespaceObject}(${name});
${defineGetters}`
			);
			runtimeRequirements.add(RuntimeGlobals.makeNamespaceObject);
		}

		// define required namespace objects (must be before evaluation modules)
		for (const info of modulesWithInfo) {
			if (info.type === "concatenated") {
				const source = namespaceObjectSources.get(info);
				if (!source) continue;
				result.add(source);
			}
		}

		const chunkInitFragments = [];

		// evaluate modules in order
		for (const rawInfo of modulesWithInfo) {
			let name;
			let isConditional = false;
			const info = rawInfo.type === "reference" ? rawInfo.target : rawInfo;
			switch (info.type) {
				case "concatenated": {
					result.add(
						`\n;// ${info.module.readableIdentifier(requestShortener)}\n`
					);
					result.add(/** @type {ReplaceSource} */ (info.source));
					if (info.chunkInitFragments) {
						for (const f of info.chunkInitFragments) chunkInitFragments.push(f);
					}
					if (info.runtimeRequirements) {
						for (const r of info.runtimeRequirements) {
							runtimeRequirements.add(r);
						}
					}
					name = info.namespaceObjectName;
					break;
				}
				case "external": {
					result.add(
						`\n// EXTERNAL MODULE: ${info.module.readableIdentifier(
							requestShortener
						)}\n`
					);
					runtimeRequirements.add(RuntimeGlobals.require);
					const { runtimeCondition } =
						/** @type {ExternalModuleInfo | ReferenceToModuleInfo} */ (rawInfo);
					const condition = runtimeTemplate.runtimeConditionExpression({
						chunkGraph,
						runtimeCondition,
						runtime,
						runtimeRequirements
					});
					if (condition !== "true") {
						isConditional = true;
						result.add(`if (${condition}) {\n`);
					}
					result.add(
						`var ${info.name} = ${RuntimeGlobals.require}(${JSON.stringify(
							chunkGraph.getModuleId(info.module)
						)});`
					);
					name = info.name;
					break;
				}
				default:
					// @ts-expect-error never is expected here
					throw new Error(`Unsupported concatenation entry type ${info.type}`);
			}
			if (info.interopNamespaceObjectUsed) {
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				result.add(
					`\nvar ${info.interopNamespaceObjectName} = /*#__PURE__*/${RuntimeGlobals.createFakeNamespaceObject}(${name}, 2);`
				);
			}
			if (info.interopNamespaceObject2Used) {
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				result.add(
					`\nvar ${info.interopNamespaceObject2Name} = /*#__PURE__*/${RuntimeGlobals.createFakeNamespaceObject}(${name});`
				);
			}
			if (info.interopDefaultAccessUsed) {
				runtimeRequirements.add(RuntimeGlobals.compatGetDefaultExport);
				result.add(
					`\nvar ${info.interopDefaultAccessName} = /*#__PURE__*/${RuntimeGlobals.compatGetDefaultExport}(${name});`
				);
			}
			if (isConditional) {
				result.add("\n}");
			}
		}

		const data = new Map();
		if (chunkInitFragments.length > 0)
			data.set("chunkInitFragments", chunkInitFragments);
		data.set("topLevelDeclarations", topLevelDeclarations);

		/** @type {CodeGenerationResult} */
		const resultEntry = {
			sources: new Map([["javascript", new CachedSource(result)]]),
			data,
			runtimeRequirements
		};

		return resultEntry;
	}

	/**
	 * @param {Map<Module, ModuleInfo>} modulesMap modulesMap
	 * @param {ModuleInfo} info info
	 * @param {DependencyTemplates} dependencyTemplates dependencyTemplates
	 * @param {RuntimeTemplate} runtimeTemplate runtimeTemplate
	 * @param {ModuleGraph} moduleGraph moduleGraph
	 * @param {ChunkGraph} chunkGraph chunkGraph
	 * @param {RuntimeSpec} runtime runtime
	 * @param {CodeGenerationResults} codeGenerationResults codeGenerationResults
	 */
	_analyseModule(
		modulesMap,
		info,
		dependencyTemplates,
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime,
		codeGenerationResults
	) {
		if (info.type === "concatenated") {
			const m = info.module;
			try {
				// Create a concatenation scope to track and capture information
				const concatenationScope = new ConcatenationScope(modulesMap, info);

				// TODO cache codeGeneration results
				const codeGenResult = m.codeGeneration({
					dependencyTemplates,
					runtimeTemplate,
					moduleGraph,
					chunkGraph,
					runtime,
					concatenationScope,
					codeGenerationResults,
					sourceTypes: JS_TYPES
				});
				const source = /** @type {Source} */ (
					codeGenResult.sources.get("javascript")
				);
				const data = codeGenResult.data;
				const chunkInitFragments = data && data.get("chunkInitFragments");
				const code = source.source().toString();
				let ast;
				try {
					ast = JavascriptParser._parse(code, {
						sourceType: "module"
					});
				} catch (_err) {
					const err = /** @type {TODO} */ (_err);
					if (
						err.loc &&
						typeof err.loc === "object" &&
						typeof err.loc.line === "number"
					) {
						const lineNumber = err.loc.line;
						const lines = code.split("\n");
						err.message += `\n| ${lines
							.slice(Math.max(0, lineNumber - 3), lineNumber + 2)
							.join("\n| ")}`;
					}
					throw err;
				}
				const scopeManager = eslintScope.analyze(ast, {
					ecmaVersion: 6,
					sourceType: "module",
					optimistic: true,
					ignoreEval: true,
					impliedStrict: true
				});
				const globalScope = /** @type {Scope} */ (scopeManager.acquire(ast));
				const moduleScope = globalScope.childScopes[0];
				const resultSource = new ReplaceSource(source);
				info.runtimeRequirements =
					/** @type {ReadOnlyRuntimeRequirements} */
					(codeGenResult.runtimeRequirements);
				info.ast = ast;
				info.internalSource = source;
				info.source = resultSource;
				info.chunkInitFragments = chunkInitFragments;
				info.globalScope = globalScope;
				info.moduleScope = moduleScope;
			} catch (err) {
				/** @type {Error} */
				(err).message +=
					`\nwhile analyzing module ${m.identifier()} for concatenation`;
				throw err;
			}
		}
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {[ModuleInfoOrReference[], Map<Module, ModuleInfo>]} module info items
	 */
	_getModulesWithInfo(moduleGraph, runtime) {
		const orderedConcatenationList = this._createConcatenationList(
			this.rootModule,
			this._modules,
			runtime,
			moduleGraph
		);
		/** @type {Map<Module, ModuleInfo>} */
		const map = new Map();
		const list = orderedConcatenationList.map((info, index) => {
			let item = map.get(info.module);
			if (item === undefined) {
				switch (info.type) {
					case "concatenated":
						item = {
							type: "concatenated",
							module: info.module,
							index,
							ast: undefined,
							internalSource: undefined,
							runtimeRequirements: undefined,
							source: undefined,
							globalScope: undefined,
							moduleScope: undefined,
							internalNames: new Map(),
							exportMap: undefined,
							rawExportMap: undefined,
							namespaceExportSymbol: undefined,
							namespaceObjectName: undefined,
							interopNamespaceObjectUsed: false,
							interopNamespaceObjectName: undefined,
							interopNamespaceObject2Used: false,
							interopNamespaceObject2Name: undefined,
							interopDefaultAccessUsed: false,
							interopDefaultAccessName: undefined
						};
						break;
					case "external":
						item = {
							type: "external",
							module: info.module,
							runtimeCondition: info.runtimeCondition,
							index,
							name: undefined,
							interopNamespaceObjectUsed: false,
							interopNamespaceObjectName: undefined,
							interopNamespaceObject2Used: false,
							interopNamespaceObject2Name: undefined,
							interopDefaultAccessUsed: false,
							interopDefaultAccessName: undefined
						};
						break;
					default:
						throw new Error(
							`Unsupported concatenation entry type ${info.type}`
						);
				}
				map.set(
					/** @type {ModuleInfo} */ (item).module,
					/** @type {ModuleInfo} */ (item)
				);
				return /** @type {ModuleInfo} */ (item);
			}
			/** @type {ReferenceToModuleInfo} */
			const ref = {
				type: "reference",
				runtimeCondition: info.runtimeCondition,
				target: item
			};
			return ref;
		});
		return [list, map];
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		const { chunkGraph, runtime } = context;
		for (const info of this._createConcatenationList(
			this.rootModule,
			this._modules,
			intersectRuntime(runtime, this._runtime),
			chunkGraph.moduleGraph
		)) {
			switch (info.type) {
				case "concatenated":
					info.module.updateHash(hash, context);
					break;
				case "external":
					hash.update(`${chunkGraph.getModuleId(info.module)}`);
					// TODO runtimeCondition
					break;
			}
		}
		super.updateHash(hash, context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {ConcatenatedModule} ConcatenatedModule
	 */
	static deserialize(context) {
		const obj = new ConcatenatedModule({
			identifier: /** @type {EXPECTED_ANY} */ (undefined),
			rootModule: /** @type {EXPECTED_ANY} */ (undefined),
			modules: /** @type {EXPECTED_ANY} */ (undefined),
			runtime: undefined,
			compilation: /** @type {EXPECTED_ANY} */ (undefined)
		});
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(ConcatenatedModule, "webpack/lib/optimize/ConcatenatedModule");

module.exports = ConcatenatedModule;
