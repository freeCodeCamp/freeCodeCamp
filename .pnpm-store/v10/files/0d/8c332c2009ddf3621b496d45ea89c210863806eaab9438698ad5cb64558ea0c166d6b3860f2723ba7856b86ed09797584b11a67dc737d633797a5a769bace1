/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const memoize = require("./util/memoize");

/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("./ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./dependencies/ModuleDependency")} ModuleDependency */
/**
 * Defines the update hash context type used by this module.
 * @typedef {object} UpdateHashContext
 * @property {ChunkGraph} chunkGraph
 * @property {RuntimeSpec} runtime
 * @property {RuntimeTemplate=} runtimeTemplate
 */

/**
 * Defines the source position type used by this module.
 * @typedef {object} SourcePosition
 * @property {number} line
 * @property {number=} column
 */

/**
 * Defines the real dependency location type used by this module.
 * @typedef {object} RealDependencyLocation
 * @property {SourcePosition} start
 * @property {SourcePosition=} end
 * @property {number=} index
 */

/**
 * Defines the synthetic dependency location type used by this module.
 * @typedef {object} SyntheticDependencyLocation
 * @property {string} name
 * @property {number=} index
 */

/** @typedef {SyntheticDependencyLocation | RealDependencyLocation} DependencyLocation */

/** @typedef {string} ExportInfoName */

/**
 * Defines the export spec type used by this module.
 * @typedef {object} ExportSpec
 * @property {ExportInfoName} name the name of the export
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding is the export a terminal binding that should be checked for export star conflicts
 * @property {(string | ExportSpec)[]=} exports nested exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {string[] | null=} export when reexported: from which export
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} hidden export is not visible, because another export blends over it
 */

/** @typedef {Set<string>} ExportsSpecExcludeExports */

/**
 * Defines the exports spec type used by this module.
 * @typedef {object} ExportsSpec
 * @property {(string | ExportSpec)[] | true | null} exports exported names, true for unknown exports or null for no exports
 * @property {ExportsSpecExcludeExports=} excludeExports when exports = true, list of unaffected exports
 * @property {(Set<string> | null)=} hideExports list of maybe prior exposed, but now hidden exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding are the exports terminal bindings that should be checked for export star conflicts
 * @property {Module[]=} dependencies module on which the result depends on
 */

/**
 * Defines the referenced export type used by this module.
 * @typedef {object} ReferencedExport
 * @property {string[]} name name of the referenced export
 * @property {boolean=} canMangle when false, referenced export can not be mangled, defaults to true
 */

/** @typedef {string[][]} RawReferencedExports */
/** @typedef {(string[] | ReferencedExport)[]} ReferencedExports */

/** @typedef {(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState} GetConditionFn */

const TRANSITIVE = /** @type {symbol} */ (Symbol("transitive"));

const getIgnoredModule = memoize(() => {
	const RawModule = require("./RawModule");

	const module = new RawModule("/* (ignored) */", "ignored", "(ignored)");
	module.factoryMeta = { sideEffectFree: true };
	return module;
});

class Dependency {
	constructor() {
		/** @type {Module | undefined} */
		this._parentModule = undefined;
		/** @type {DependenciesBlock | undefined} */
		this._parentDependenciesBlock = undefined;
		/** @type {number} */
		this._parentDependenciesBlockIndex = -1;
		// TODO check if this can be moved into ModuleDependency
		/** @type {boolean} */
		this.weak = false;
		// TODO check if this can be moved into ModuleDependency
		/** @type {boolean | undefined} */
		this.optional = false;
		this._locSL = 0;
		this._locSC = 0;
		this._locEL = 0;
		this._locEC = 0;
		/** @type {undefined | number} */
		this._locI = undefined;
		/** @type {undefined | string} */
		this._locN = undefined;
		/** @type {undefined | DependencyLocation} */
		this._loc = undefined;
	}

	/**
	 * Returns a display name for the type of dependency.
	 * @returns {string} a display name for the type of dependency
	 */
	get type() {
		return "unknown";
	}

	/**
	 * Returns a dependency category, typical categories are "commonjs", "amd", "esm".
	 * @returns {string} a dependency category, typical categories are "commonjs", "amd", "esm"
	 */
	get category() {
		return "unknown";
	}

	/**
	 * Returns location.
	 * @returns {DependencyLocation} location
	 */
	get loc() {
		if (this._loc !== undefined) return this._loc;

		/** @type {SyntheticDependencyLocation & RealDependencyLocation} */
		const loc = {};

		if (this._locSL > 0) {
			loc.start = { line: this._locSL, column: this._locSC };
		}
		if (this._locEL > 0) {
			loc.end = { line: this._locEL, column: this._locEC };
		}
		if (this._locN !== undefined) {
			loc.name = this._locN;
		}
		if (this._locI !== undefined) {
			loc.index = this._locI;
		}

		return (this._loc = loc);
	}

	set loc(loc) {
		if ("start" in loc && typeof loc.start === "object") {
			this._locSL = loc.start.line || 0;
			this._locSC = loc.start.column || 0;
		} else {
			this._locSL = 0;
			this._locSC = 0;
		}
		if ("end" in loc && typeof loc.end === "object") {
			this._locEL = loc.end.line || 0;
			this._locEC = loc.end.column || 0;
		} else {
			this._locEL = 0;
			this._locEC = 0;
		}
		this._locI = "index" in loc ? loc.index : undefined;
		this._locN = "name" in loc ? loc.name : undefined;
		this._loc = loc;
	}

	/**
	 * Updates loc using the provided start line.
	 * @param {number} startLine start line
	 * @param {number} startColumn start column
	 * @param {number} endLine end line
	 * @param {number} endColumn end column
	 */
	setLoc(startLine, startColumn, endLine, endColumn) {
		this._locSL = startLine;
		this._locSC = startColumn;
		this._locEL = endLine;
		this._locEC = endColumn;
		this._locI = undefined;
		this._locN = undefined;
		this._loc = undefined;
	}

	/**
	 * Returns a request context.
	 * @returns {string | undefined} a request context
	 */
	getContext() {
		return undefined;
	}

	/**
	 * Returns an identifier to merge equal requests.
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return null;
	}

	/**
	 * Could affect referencing module.
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return TRANSITIVE;
	}

	/**
	 * Returns the referenced module and export
	 * @deprecated
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {never} throws error
	 */
	getReference(moduleGraph) {
		throw new Error(
			"Dependency.getReference was removed in favor of Dependency.getReferencedExports, ModuleGraph.getModule, ModuleGraph.getConnection(), and ModuleGraphConnection.getActiveState(runtime)"
		);
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.EXPORTS_OBJECT_REFERENCED;
	}

	/**
	 * Returns function to determine if the connection is active.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return null;
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		return undefined;
	}

	/**
	 * Returns warnings.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} warnings
	 */
	getWarnings(moduleGraph) {
		return null;
	}

	/**
	 * Returns errors.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} errors
	 */
	getErrors(moduleGraph) {
		return null;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {}

	/**
	 * implement this method to allow the occurrence order plugin to count correctly
	 * @returns {number} count how often the id is used in this dependency
	 */
	getNumberOfIdOccurrences() {
		return 1;
	}

	/**
	 * Gets module evaluation side effects state.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return true;
	}

	/**
	 * Creates an ignored module.
	 * @param {string} context context directory
	 * @returns {Module} ignored module
	 */
	createIgnoredModule(context) {
		return getIgnoredModule();
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		write(this.weak);
		write(this.optional);
		write(this._locSL);
		write(this._locSC);
		write(this._locEL);
		write(this._locEC);
		write(this._locI);
		write(this._locN);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize({ read }) {
		this.weak = read();
		this.optional = read();
		this._locSL = read();
		this._locSC = read();
		this._locEL = read();
		this._locEC = read();
		this._locI = read();
		this._locN = read();
	}
}

/** @type {RawReferencedExports} */
Dependency.NO_EXPORTS_REFERENCED = [];
/** @type {RawReferencedExports} */
Dependency.EXPORTS_OBJECT_REFERENCED = [[]];

// TODO remove in webpack 6
Object.defineProperty(Dependency.prototype, "module", {
	/**
	 * Returns throws.
	 * @deprecated
	 * @returns {EXPECTED_ANY} throws
	 */
	get() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.getModule(dependency) instead)"
		);
	},

	/**
	 * Updates module.
	 * @deprecated
	 * @returns {never} throws
	 */
	set() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.updateModule(dependency, module) instead)"
		);
	}
});

/**
 * Returns true if the dependency is a low priority dependency.
 * @param {Dependency} dependency dep
 * @returns {boolean} true if the dependency is a low priority dependency
 */
Dependency.isLowPriorityDependency = (dependency) =>
	/** @type {ModuleDependency} */ (dependency).sourceOrder === Infinity;

// TODO remove in webpack 6
Object.defineProperty(Dependency.prototype, "disconnect", {
	/**
	 * Returns throws.
	 * @deprecated
	 * @returns {EXPECTED_ANY} throws
	 */
	get() {
		throw new Error(
			"disconnect was removed from Dependency (Dependency no longer carries graph specific information)"
		);
	}
});

Dependency.TRANSITIVE = TRANSITIVE;

module.exports = Dependency;
