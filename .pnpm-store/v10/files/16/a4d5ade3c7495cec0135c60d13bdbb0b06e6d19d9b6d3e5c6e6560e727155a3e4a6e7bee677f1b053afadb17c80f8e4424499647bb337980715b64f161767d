/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RawModule = require("./RawModule");
const memoize = require("./util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
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

/**
 * @typedef {object} UpdateHashContext
 * @property {ChunkGraph} chunkGraph
 * @property {RuntimeSpec} runtime
 * @property {RuntimeTemplate=} runtimeTemplate
 */

/**
 * @typedef {object} SourcePosition
 * @property {number} line
 * @property {number=} column
 */

/**
 * @typedef {object} RealDependencyLocation
 * @property {SourcePosition} start
 * @property {SourcePosition=} end
 * @property {number=} index
 */

/**
 * @typedef {object} SyntheticDependencyLocation
 * @property {string} name
 * @property {number=} index
 */

/** @typedef {SyntheticDependencyLocation | RealDependencyLocation} DependencyLocation */

/**
 * @typedef {object} ExportSpec
 * @property {string} name the name of the export
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding is the export a terminal binding that should be checked for export star conflicts
 * @property {(string | ExportSpec)[]=} exports nested exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {string[] | null=} export when reexported: from which export
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} hidden export is not visible, because another export blends over it
 */

/**
 * @typedef {object} ExportsSpec
 * @property {(string | ExportSpec)[] | true | null} exports exported names, true for unknown exports or null for no exports
 * @property {Set<string>=} excludeExports when exports = true, list of unaffected exports
 * @property {(Set<string> | null)=} hideExports list of maybe prior exposed, but now hidden exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding are the exports terminal bindings that should be checked for export star conflicts
 * @property {Module[]=} dependencies module on which the result depends on
 */

/**
 * @typedef {object} ReferencedExport
 * @property {string[]} name name of the referenced export
 * @property {boolean=} canMangle when false, referenced export can not be mangled, defaults to true
 */

/** @typedef {function(ModuleGraphConnection, RuntimeSpec): ConnectionState} GetConditionFn */

const TRANSITIVE = Symbol("transitive");

const getIgnoredModule = memoize(
	() => new RawModule("/* (ignored) */", "ignored", "(ignored)")
);

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
		/** @type {boolean} */
		this.optional = false;
		this._locSL = 0;
		this._locSC = 0;
		this._locEL = 0;
		this._locEC = 0;
		this._locI = undefined;
		this._locN = undefined;
		this._loc = undefined;
	}

	/**
	 * @returns {string} a display name for the type of dependency
	 */
	get type() {
		return "unknown";
	}

	/**
	 * @returns {string} a dependency category, typical categories are "commonjs", "amd", "esm"
	 */
	get category() {
		return "unknown";
	}

	/**
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
	 * @returns {string | undefined} a request context
	 */
	getContext() {
		return undefined;
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return null;
	}

	/**
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
			"Dependency.getReference was removed in favor of Dependency.getReferencedExports, ModuleGraph.getModule and ModuleGraph.getConnection().active"
		);
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.EXPORTS_OBJECT_REFERENCED;
	}

	/**
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
	 * Returns warnings
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} warnings
	 */
	getWarnings(moduleGraph) {
		return null;
	}

	/**
	 * Returns errors
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} errors
	 */
	getErrors(moduleGraph) {
		return null;
	}

	/**
	 * Update the hash
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
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return true;
	}

	/**
	 * @param {string} context context directory
	 * @returns {Module | null} a module
	 */
	createIgnoredModule(context) {
		return getIgnoredModule();
	}

	/**
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

/** @type {string[][]} */
Dependency.NO_EXPORTS_REFERENCED = [];
/** @type {string[][]} */
Dependency.EXPORTS_OBJECT_REFERENCED = [[]];

// eslint-disable-next-line no-warning-comments
// @ts-ignore https://github.com/microsoft/TypeScript/issues/42919
Object.defineProperty(Dependency.prototype, "module", {
	/**
	 * @deprecated
	 * @returns {never} throws
	 */
	get() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.getModule(dependency) instead)"
		);
	},

	/**
	 * @deprecated
	 * @returns {never} throws
	 */
	set() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.updateModule(dependency, module) instead)"
		);
	}
});

// eslint-disable-next-line no-warning-comments
// @ts-ignore https://github.com/microsoft/TypeScript/issues/42919
Object.defineProperty(Dependency.prototype, "disconnect", {
	get() {
		throw new Error(
			"disconnect was removed from Dependency (Dependency no longer carries graph specific information)"
		);
	}
});

Dependency.TRANSITIVE = TRANSITIVE;

module.exports = Dependency;
