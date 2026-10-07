/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	DEFAULT_EXPORT,
	NAMESPACE_OBJECT_EXPORT
} = require("./util/concatenate");

/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./optimize/ConcatenatedModule").ConcatenatedModuleInfo} ConcatenatedModuleInfo */
/** @typedef {import("./optimize/ConcatenatedModule").ModuleInfo} ModuleInfo */
/** @typedef {import("./optimize/ConcatenatedModule").ExportName} Ids */

const MODULE_REFERENCE_REGEXP =
	/^__WEBPACK_MODULE_REFERENCE__(\d+)_([\da-f]+|ns)(_call)?(_directImport)?(_deferredImport)?(?:_asiSafe(\d))?__$/;

/**
 * Encodes how a concatenated module reference should be interpreted when it is
 * later reconstructed from its placeholder identifier.
 * @typedef {object} ModuleReferenceOptions
 * @property {Ids} ids the properties or exports selected from the referenced module
 * @property {boolean} call true, when this referenced export is called
 * @property {boolean} directImport true, when this referenced export is directly imported (not via property access)
 * @property {boolean} deferredImport true, when this referenced export is deferred
 * @property {boolean | undefined} asiSafe if the position is ASI safe or unknown
 */

/**
 * Tracks the symbols and cross-module references needed while rendering a
 * concatenated module.
 */
class ConcatenationScope {
	/**
	 * Creates the mutable scope object used while rendering a concatenated
	 * module and its cross-module references.
	 * @param {ModuleInfo[] | Map<Module, ModuleInfo>} modulesMap all module info by module
	 * @param {ConcatenatedModuleInfo} currentModule the current module info
	 * @param {Set<string>} usedNames all used names
	 */
	constructor(modulesMap, currentModule, usedNames) {
		this._currentModule = currentModule;
		if (Array.isArray(modulesMap)) {
			/** @type {Map<Module, ConcatenatedModuleInfo>} */
			const map = new Map();
			for (const info of modulesMap) {
				map.set(info.module, /** @type {ConcatenatedModuleInfo} */ (info));
			}
			modulesMap = map;
		}
		this.usedNames = usedNames;
		this._modulesMap = modulesMap;
	}

	/**
	 * Checks whether a module participates in the current concatenation scope.
	 * @param {Module} module the referenced module
	 * @returns {boolean} true, when it's in the scope
	 */
	isModuleInScope(module) {
		return this._modulesMap.has(module);
	}

	/**
	 * Records the symbol that should be used when the current module exports a
	 * named binding.
	 * @param {string} exportName name of the export
	 * @param {string} symbol identifier of the export in source code
	 */
	registerExport(exportName, symbol) {
		if (!this._currentModule.exportMap) {
			this._currentModule.exportMap = new Map();
		}
		if (!this._currentModule.exportMap.has(exportName)) {
			this._currentModule.exportMap.set(exportName, symbol);
		}
	}

	/**
	 * Records a raw expression that can be used to reference an export without
	 * going through the normal symbol map.
	 * @param {string} exportName name of the export
	 * @param {string} expression expression to be used
	 */
	registerRawExport(exportName, expression) {
		if (!this._currentModule.rawExportMap) {
			this._currentModule.rawExportMap = new Map();
		}
		if (!this._currentModule.rawExportMap.has(exportName)) {
			this._currentModule.rawExportMap.set(exportName, expression);
		}
	}

	/**
	 * Returns the raw expression registered for an export, if one exists.
	 * @param {string} exportName name of the export
	 * @returns {string | undefined} the expression of the export
	 */
	getRawExport(exportName) {
		if (!this._currentModule.rawExportMap) {
			return undefined;
		}
		return this._currentModule.rawExportMap.get(exportName);
	}

	/**
	 * Replaces the raw expression for an export only when that export already
	 * has an entry in the raw export map.
	 * @param {string} exportName name of the export
	 * @param {string} expression expression to be used
	 */
	setRawExportMap(exportName, expression) {
		if (!this._currentModule.rawExportMap) {
			this._currentModule.rawExportMap = new Map();
		}
		if (this._currentModule.rawExportMap.has(exportName)) {
			this._currentModule.rawExportMap.set(exportName, expression);
		}
	}

	/**
	 * Records the symbol that should be used for the synthetic namespace export.
	 * @param {string} symbol identifier of the export in source code
	 */
	registerNamespaceExport(symbol) {
		this._currentModule.namespaceExportSymbol = symbol;
	}

	/**
	 * Encodes a reference to another concatenated module as a placeholder
	 * identifier that can be parsed later during code generation.
	 * @param {Module} module the referenced module
	 * @param {Partial<ModuleReferenceOptions>} options options
	 * @returns {string} the reference as identifier
	 */
	createModuleReference(
		module,
		{
			ids = undefined,
			call = false,
			directImport = false,
			deferredImport = false,
			asiSafe = false
		}
	) {
		const info = /** @type {ModuleInfo} */ (this._modulesMap.get(module));
		const callFlag = call ? "_call" : "";
		const directImportFlag = directImport ? "_directImport" : "";
		const deferredImportFlag = deferredImport ? "_deferredImport" : "";
		const asiSafeFlag = asiSafe
			? "_asiSafe1"
			: asiSafe === false
				? "_asiSafe0"
				: "";
		const exportData = ids
			? Buffer.from(JSON.stringify(ids), "utf8").toString("hex")
			: "ns";
		// a "._" is appended to allow "delete ...", which would cause a SyntaxError in strict mode
		return `__WEBPACK_MODULE_REFERENCE__${info.index}_${exportData}${callFlag}${directImportFlag}${deferredImportFlag}${asiSafeFlag}__._`;
	}

	/**
	 * Checks whether an identifier is one of webpack's encoded concatenation
	 * module references.
	 * @param {string} name the identifier
	 * @returns {boolean} true, when it's an module reference
	 */
	static isModuleReference(name) {
		return MODULE_REFERENCE_REGEXP.test(name);
	}

	/**
	 * Parses an encoded module reference back into its module index and
	 * reference flags.
	 * @param {string} name the identifier
	 * @returns {ModuleReferenceOptions & { index: number } | null} parsed options and index
	 */
	static matchModuleReference(name) {
		const match = MODULE_REFERENCE_REGEXP.exec(name);
		if (!match) return null;
		const index = Number(match[1]);
		const asiSafe = match[6];
		return {
			index,
			ids:
				match[2] === "ns"
					? []
					: JSON.parse(Buffer.from(match[2], "hex").toString("utf8")),
			call: Boolean(match[3]),
			directImport: Boolean(match[4]),
			deferredImport: Boolean(match[5]),
			asiSafe: asiSafe ? asiSafe === "1" : undefined
		};
	}
}

ConcatenationScope.DEFAULT_EXPORT = DEFAULT_EXPORT;
ConcatenationScope.NAMESPACE_OBJECT_EXPORT = NAMESPACE_OBJECT_EXPORT;

module.exports = ConcatenationScope;
