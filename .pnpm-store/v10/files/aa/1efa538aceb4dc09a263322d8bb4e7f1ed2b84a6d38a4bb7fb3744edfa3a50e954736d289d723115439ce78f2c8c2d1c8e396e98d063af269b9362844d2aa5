/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { equals } = require("./util/ArrayHelpers");
const SortableSet = require("./util/SortableSet");
const makeSerializable = require("./util/makeSerializable");
const { forEachRuntime } = require("./util/runtime");

/** @typedef {import("./Dependency").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */

/** @typedef {typeof UsageState.OnlyPropertiesUsed | typeof UsageState.NoInfo | typeof UsageState.Unknown | typeof UsageState.Used} RuntimeUsageStateType */
/** @typedef {typeof UsageState.Unused | RuntimeUsageStateType} UsageStateType */

const UsageState = Object.freeze({
	Unused: /** @type {0} */ (0),
	OnlyPropertiesUsed: /** @type {1} */ (1),
	NoInfo: /** @type {2} */ (2),
	Unknown: /** @type {3} */ (3),
	Used: /** @type {4} */ (4)
});

const RETURNS_TRUE = () => true;

const CIRCULAR = Symbol("circular target");

class RestoreProvidedData {
	constructor(
		exports,
		otherProvided,
		otherCanMangleProvide,
		otherTerminalBinding
	) {
		this.exports = exports;
		this.otherProvided = otherProvided;
		this.otherCanMangleProvide = otherCanMangleProvide;
		this.otherTerminalBinding = otherTerminalBinding;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		write(this.exports);
		write(this.otherProvided);
		write(this.otherCanMangleProvide);
		write(this.otherTerminalBinding);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {RestoreProvidedData} RestoreProvidedData
	 */
	static deserialize({ read }) {
		return new RestoreProvidedData(read(), read(), read(), read());
	}
}

makeSerializable(
	RestoreProvidedData,
	"webpack/lib/ModuleGraph",
	"RestoreProvidedData"
);

/** @typedef {Map<string, ExportInfo>} Exports */
/** @typedef {string | string[] | false} UsedName */

class ExportsInfo {
	constructor() {
		/** @type {Exports} */
		this._exports = new Map();
		this._otherExportsInfo = new ExportInfo(null);
		this._sideEffectsOnlyInfo = new ExportInfo("*side effects only*");
		this._exportsAreOrdered = false;
		/** @type {ExportsInfo=} */
		this._redirectTo = undefined;
	}

	/**
	 * @returns {Iterable<ExportInfo>} all owned exports in any order
	 */
	get ownedExports() {
		return this._exports.values();
	}

	/**
	 * @returns {Iterable<ExportInfo>} all owned exports in order
	 */
	get orderedOwnedExports() {
		if (!this._exportsAreOrdered) {
			this._sortExports();
		}
		return this._exports.values();
	}

	/**
	 * @returns {Iterable<ExportInfo>} all exports in any order
	 */
	get exports() {
		if (this._redirectTo !== undefined) {
			const map = new Map(this._redirectTo._exports);
			for (const [key, value] of this._exports) {
				map.set(key, value);
			}
			return map.values();
		}
		return this._exports.values();
	}

	/**
	 * @returns {Iterable<ExportInfo>} all exports in order
	 */
	get orderedExports() {
		if (!this._exportsAreOrdered) {
			this._sortExports();
		}
		if (this._redirectTo !== undefined) {
			const map = new Map(
				Array.from(this._redirectTo.orderedExports, item => [item.name, item])
			);
			for (const [key, value] of this._exports) {
				map.set(key, value);
			}
			// sorting should be pretty fast as map contains
			// a lot of presorted items
			this._sortExportsMap(map);
			return map.values();
		}
		return this._exports.values();
	}

	/**
	 * @returns {ExportInfo} the export info of unlisted exports
	 */
	get otherExportsInfo() {
		if (this._redirectTo !== undefined)
			return this._redirectTo.otherExportsInfo;
		return this._otherExportsInfo;
	}

	/**
	 * @param {Exports} exports exports
	 * @private
	 */
	_sortExportsMap(exports) {
		if (exports.size > 1) {
			const namesInOrder = [];
			for (const entry of exports.values()) {
				namesInOrder.push(entry.name);
			}
			namesInOrder.sort();
			let i = 0;
			for (const entry of exports.values()) {
				const name = namesInOrder[i];
				if (entry.name !== name) break;
				i++;
			}
			for (; i < namesInOrder.length; i++) {
				const name = namesInOrder[i];
				const correctEntry = /** @type {ExportInfo} */ (exports.get(name));
				exports.delete(name);
				exports.set(name, correctEntry);
			}
		}
	}

	_sortExports() {
		this._sortExportsMap(this._exports);
		this._exportsAreOrdered = true;
	}

	/**
	 * @param {ExportsInfo | undefined} exportsInfo exports info
	 * @returns {boolean} result
	 */
	setRedirectNamedTo(exportsInfo) {
		if (this._redirectTo === exportsInfo) return false;
		this._redirectTo = exportsInfo;
		return true;
	}

	setHasProvideInfo() {
		for (const exportInfo of this._exports.values()) {
			if (exportInfo.provided === undefined) {
				exportInfo.provided = false;
			}
			if (exportInfo.canMangleProvide === undefined) {
				exportInfo.canMangleProvide = true;
			}
		}
		if (this._redirectTo !== undefined) {
			this._redirectTo.setHasProvideInfo();
		} else {
			if (this._otherExportsInfo.provided === undefined) {
				this._otherExportsInfo.provided = false;
			}
			if (this._otherExportsInfo.canMangleProvide === undefined) {
				this._otherExportsInfo.canMangleProvide = true;
			}
		}
	}

	setHasUseInfo() {
		for (const exportInfo of this._exports.values()) {
			exportInfo.setHasUseInfo();
		}
		this._sideEffectsOnlyInfo.setHasUseInfo();
		if (this._redirectTo !== undefined) {
			this._redirectTo.setHasUseInfo();
		} else {
			this._otherExportsInfo.setHasUseInfo();
		}
	}

	/**
	 * @param {string} name export name
	 * @returns {ExportInfo} export info for this name
	 */
	getOwnExportInfo(name) {
		const info = this._exports.get(name);
		if (info !== undefined) return info;
		const newInfo = new ExportInfo(name, this._otherExportsInfo);
		this._exports.set(name, newInfo);
		this._exportsAreOrdered = false;
		return newInfo;
	}

	/**
	 * @param {string} name export name
	 * @returns {ExportInfo} export info for this name
	 */
	getExportInfo(name) {
		const info = this._exports.get(name);
		if (info !== undefined) return info;
		if (this._redirectTo !== undefined)
			return this._redirectTo.getExportInfo(name);
		const newInfo = new ExportInfo(name, this._otherExportsInfo);
		this._exports.set(name, newInfo);
		this._exportsAreOrdered = false;
		return newInfo;
	}

	/**
	 * @param {string} name export name
	 * @returns {ExportInfo} export info for this name
	 */
	getReadOnlyExportInfo(name) {
		const info = this._exports.get(name);
		if (info !== undefined) return info;
		if (this._redirectTo !== undefined)
			return this._redirectTo.getReadOnlyExportInfo(name);
		return this._otherExportsInfo;
	}

	/**
	 * @param {string[]} name export name
	 * @returns {ExportInfo | undefined} export info for this name
	 */
	getReadOnlyExportInfoRecursive(name) {
		const exportInfo = this.getReadOnlyExportInfo(name[0]);
		if (name.length === 1) return exportInfo;
		if (!exportInfo.exportsInfo) return;
		return exportInfo.exportsInfo.getReadOnlyExportInfoRecursive(name.slice(1));
	}

	/**
	 * @param {string[]=} name the export name
	 * @returns {ExportsInfo | undefined} the nested exports info
	 */
	getNestedExportsInfo(name) {
		if (Array.isArray(name) && name.length > 0) {
			const info = this.getReadOnlyExportInfo(name[0]);
			if (!info.exportsInfo) return;
			return info.exportsInfo.getNestedExportsInfo(name.slice(1));
		}
		return this;
	}

	/**
	 * @param {boolean=} canMangle true, if exports can still be mangled (defaults to false)
	 * @param {Set<string>=} excludeExports list of unaffected exports
	 * @param {any=} targetKey use this as key for the target
	 * @param {ModuleGraphConnection=} targetModule set this module as target
	 * @param {number=} priority priority
	 * @returns {boolean} true, if this call changed something
	 */
	setUnknownExportsProvided(
		canMangle,
		excludeExports,
		targetKey,
		targetModule,
		priority
	) {
		let changed = false;
		if (excludeExports) {
			for (const name of excludeExports) {
				// Make sure these entries exist, so they can get different info
				this.getExportInfo(name);
			}
		}
		for (const exportInfo of this._exports.values()) {
			if (!canMangle && exportInfo.canMangleProvide !== false) {
				exportInfo.canMangleProvide = false;
				changed = true;
			}
			if (excludeExports && excludeExports.has(exportInfo.name)) continue;
			if (exportInfo.provided !== true && exportInfo.provided !== null) {
				exportInfo.provided = null;
				changed = true;
			}
			if (targetKey) {
				exportInfo.setTarget(
					targetKey,
					/** @type {ModuleGraphConnection} */ (targetModule),
					[exportInfo.name],
					-1
				);
			}
		}
		if (this._redirectTo !== undefined) {
			if (
				this._redirectTo.setUnknownExportsProvided(
					canMangle,
					excludeExports,
					targetKey,
					targetModule,
					priority
				)
			) {
				changed = true;
			}
		} else {
			if (
				this._otherExportsInfo.provided !== true &&
				this._otherExportsInfo.provided !== null
			) {
				this._otherExportsInfo.provided = null;
				changed = true;
			}
			if (!canMangle && this._otherExportsInfo.canMangleProvide !== false) {
				this._otherExportsInfo.canMangleProvide = false;
				changed = true;
			}
			if (targetKey) {
				this._otherExportsInfo.setTarget(
					targetKey,
					/** @type {ModuleGraphConnection} */ (targetModule),
					undefined,
					priority
				);
			}
		}
		return changed;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when something changed
	 */
	setUsedInUnknownWay(runtime) {
		let changed = false;
		for (const exportInfo of this._exports.values()) {
			if (exportInfo.setUsedInUnknownWay(runtime)) {
				changed = true;
			}
		}
		if (this._redirectTo !== undefined) {
			if (this._redirectTo.setUsedInUnknownWay(runtime)) {
				changed = true;
			}
		} else {
			if (
				this._otherExportsInfo.setUsedConditionally(
					used => used < UsageState.Unknown,
					UsageState.Unknown,
					runtime
				)
			) {
				changed = true;
			}
			if (this._otherExportsInfo.canMangleUse !== false) {
				this._otherExportsInfo.canMangleUse = false;
				changed = true;
			}
		}
		return changed;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when something changed
	 */
	setUsedWithoutInfo(runtime) {
		let changed = false;
		for (const exportInfo of this._exports.values()) {
			if (exportInfo.setUsedWithoutInfo(runtime)) {
				changed = true;
			}
		}
		if (this._redirectTo !== undefined) {
			if (this._redirectTo.setUsedWithoutInfo(runtime)) {
				changed = true;
			}
		} else {
			if (this._otherExportsInfo.setUsed(UsageState.NoInfo, runtime)) {
				changed = true;
			}
			if (this._otherExportsInfo.canMangleUse !== false) {
				this._otherExportsInfo.canMangleUse = false;
				changed = true;
			}
		}
		return changed;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when something changed
	 */
	setAllKnownExportsUsed(runtime) {
		let changed = false;
		for (const exportInfo of this._exports.values()) {
			if (!exportInfo.provided) continue;
			if (exportInfo.setUsed(UsageState.Used, runtime)) {
				changed = true;
			}
		}
		return changed;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when something changed
	 */
	setUsedForSideEffectsOnly(runtime) {
		return this._sideEffectsOnlyInfo.setUsedConditionally(
			used => used === UsageState.Unused,
			UsageState.Used,
			runtime
		);
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when the module exports are used in any way
	 */
	isUsed(runtime) {
		if (this._redirectTo !== undefined) {
			if (this._redirectTo.isUsed(runtime)) {
				return true;
			}
		} else if (this._otherExportsInfo.getUsed(runtime) !== UsageState.Unused) {
			return true;
		}
		for (const exportInfo of this._exports.values()) {
			if (exportInfo.getUsed(runtime) !== UsageState.Unused) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true, when the module is used in any way
	 */
	isModuleUsed(runtime) {
		if (this.isUsed(runtime)) return true;
		if (this._sideEffectsOnlyInfo.getUsed(runtime) !== UsageState.Unused)
			return true;
		return false;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {SortableSet<string> | boolean | null} set of used exports, or true (when namespace object is used), or false (when unused), or null (when unknown)
	 */
	getUsedExports(runtime) {
		// eslint-disable-next-line no-constant-binary-expression
		if (!this._redirectTo !== undefined) {
			switch (this._otherExportsInfo.getUsed(runtime)) {
				case UsageState.NoInfo:
					return null;
				case UsageState.Unknown:
				case UsageState.OnlyPropertiesUsed:
				case UsageState.Used:
					return true;
			}
		}
		const array = [];
		if (!this._exportsAreOrdered) this._sortExports();
		for (const exportInfo of this._exports.values()) {
			switch (exportInfo.getUsed(runtime)) {
				case UsageState.NoInfo:
					return null;
				case UsageState.Unknown:
					return true;
				case UsageState.OnlyPropertiesUsed:
				case UsageState.Used:
					array.push(exportInfo.name);
			}
		}
		if (this._redirectTo !== undefined) {
			const inner = this._redirectTo.getUsedExports(runtime);
			if (inner === null) return null;
			if (inner === true) return true;
			if (inner !== false) {
				for (const item of inner) {
					array.push(item);
				}
			}
		}
		if (array.length === 0) {
			switch (this._sideEffectsOnlyInfo.getUsed(runtime)) {
				case UsageState.NoInfo:
					return null;
				case UsageState.Unused:
					return false;
			}
		}
		return /** @type {SortableSet<string>} */ (new SortableSet(array));
	}

	/**
	 * @returns {null | true | string[]} list of exports when known
	 */
	getProvidedExports() {
		// eslint-disable-next-line no-constant-binary-expression
		if (!this._redirectTo !== undefined) {
			switch (this._otherExportsInfo.provided) {
				case undefined:
					return null;
				case null:
					return true;
				case true:
					return true;
			}
		}
		const array = [];
		if (!this._exportsAreOrdered) this._sortExports();
		for (const exportInfo of this._exports.values()) {
			switch (exportInfo.provided) {
				case undefined:
					return null;
				case null:
					return true;
				case true:
					array.push(exportInfo.name);
			}
		}
		if (this._redirectTo !== undefined) {
			const inner = this._redirectTo.getProvidedExports();
			if (inner === null) return null;
			if (inner === true) return true;
			for (const item of inner) {
				if (!array.includes(item)) {
					array.push(item);
				}
			}
		}
		return array;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {ExportInfo[]} exports that are relevant (not unused and potential provided)
	 */
	getRelevantExports(runtime) {
		const list = [];
		for (const exportInfo of this._exports.values()) {
			const used = exportInfo.getUsed(runtime);
			if (used === UsageState.Unused) continue;
			if (exportInfo.provided === false) continue;
			list.push(exportInfo);
		}
		if (this._redirectTo !== undefined) {
			for (const exportInfo of this._redirectTo.getRelevantExports(runtime)) {
				if (!this._exports.has(exportInfo.name)) list.push(exportInfo);
			}
		}
		if (
			this._otherExportsInfo.provided !== false &&
			this._otherExportsInfo.getUsed(runtime) !== UsageState.Unused
		) {
			list.push(this._otherExportsInfo);
		}
		return list;
	}

	/**
	 * @param {string | string[]} name the name of the export
	 * @returns {boolean | undefined | null} if the export is provided
	 */
	isExportProvided(name) {
		if (Array.isArray(name)) {
			const info = this.getReadOnlyExportInfo(name[0]);
			if (info.exportsInfo && name.length > 1) {
				return info.exportsInfo.isExportProvided(name.slice(1));
			}
			return info.provided ? name.length === 1 || undefined : info.provided;
		}
		const info = this.getReadOnlyExportInfo(name);
		return info.provided;
	}

	/**
	 * @param {RuntimeSpec} runtime runtime
	 * @returns {string} key representing the usage
	 */
	getUsageKey(runtime) {
		const key = [];
		if (this._redirectTo !== undefined) {
			key.push(this._redirectTo.getUsageKey(runtime));
		} else {
			key.push(this._otherExportsInfo.getUsed(runtime));
		}
		key.push(this._sideEffectsOnlyInfo.getUsed(runtime));
		for (const exportInfo of this.orderedOwnedExports) {
			key.push(exportInfo.getUsed(runtime));
		}
		return key.join("|");
	}

	/**
	 * @param {RuntimeSpec} runtimeA first runtime
	 * @param {RuntimeSpec} runtimeB second runtime
	 * @returns {boolean} true, when equally used
	 */
	isEquallyUsed(runtimeA, runtimeB) {
		if (this._redirectTo !== undefined) {
			if (!this._redirectTo.isEquallyUsed(runtimeA, runtimeB)) return false;
		} else if (
			this._otherExportsInfo.getUsed(runtimeA) !==
			this._otherExportsInfo.getUsed(runtimeB)
		) {
			return false;
		}
		if (
			this._sideEffectsOnlyInfo.getUsed(runtimeA) !==
			this._sideEffectsOnlyInfo.getUsed(runtimeB)
		) {
			return false;
		}
		for (const exportInfo of this.ownedExports) {
			if (exportInfo.getUsed(runtimeA) !== exportInfo.getUsed(runtimeB))
				return false;
		}
		return true;
	}

	/**
	 * @param {string | string[]} name export name
	 * @param {RuntimeSpec} runtime check usage for this runtime only
	 * @returns {UsageStateType} usage status
	 */
	getUsed(name, runtime) {
		if (Array.isArray(name)) {
			if (name.length === 0) return this.otherExportsInfo.getUsed(runtime);
			const info = this.getReadOnlyExportInfo(name[0]);
			if (info.exportsInfo && name.length > 1) {
				return info.exportsInfo.getUsed(name.slice(1), runtime);
			}
			return info.getUsed(runtime);
		}
		const info = this.getReadOnlyExportInfo(name);
		return info.getUsed(runtime);
	}

	/**
	 * @param {string | string[]} name the export name
	 * @param {RuntimeSpec} runtime check usage for this runtime only
	 * @returns {UsedName} the used name
	 */
	getUsedName(name, runtime) {
		if (Array.isArray(name)) {
			// TODO improve this
			if (name.length === 0) {
				if (!this.isUsed(runtime)) return false;
				return name;
			}
			const info = this.getReadOnlyExportInfo(name[0]);
			const x = info.getUsedName(name[0], runtime);
			if (x === false) return false;
			const arr =
				/** @type {string[]} */
				(x === name[0] && name.length === 1 ? name : [x]);
			if (name.length === 1) {
				return arr;
			}
			if (
				info.exportsInfo &&
				info.getUsed(runtime) === UsageState.OnlyPropertiesUsed
			) {
				const nested = info.exportsInfo.getUsedName(name.slice(1), runtime);
				if (!nested) return false;
				return arr.concat(nested);
			}
			return arr.concat(name.slice(1));
		}
		const info = this.getReadOnlyExportInfo(name);
		const usedName = info.getUsedName(name, runtime);
		return usedName;
	}

	/**
	 * @param {Hash} hash the hash
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {void}
	 */
	updateHash(hash, runtime) {
		this._updateHash(hash, runtime, new Set());
	}

	/**
	 * @param {Hash} hash the hash
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {Set<ExportsInfo>} alreadyVisitedExportsInfo for circular references
	 * @returns {void}
	 */
	_updateHash(hash, runtime, alreadyVisitedExportsInfo) {
		const set = new Set(alreadyVisitedExportsInfo);
		set.add(this);
		for (const exportInfo of this.orderedExports) {
			if (exportInfo.hasInfo(this._otherExportsInfo, runtime)) {
				exportInfo._updateHash(hash, runtime, set);
			}
		}
		this._sideEffectsOnlyInfo._updateHash(hash, runtime, set);
		this._otherExportsInfo._updateHash(hash, runtime, set);
		if (this._redirectTo !== undefined) {
			this._redirectTo._updateHash(hash, runtime, set);
		}
	}

	/**
	 * @returns {RestoreProvidedData} restore provided data
	 */
	getRestoreProvidedData() {
		const otherProvided = this._otherExportsInfo.provided;
		const otherCanMangleProvide = this._otherExportsInfo.canMangleProvide;
		const otherTerminalBinding = this._otherExportsInfo.terminalBinding;
		const exports = [];
		for (const exportInfo of this.orderedExports) {
			if (
				exportInfo.provided !== otherProvided ||
				exportInfo.canMangleProvide !== otherCanMangleProvide ||
				exportInfo.terminalBinding !== otherTerminalBinding ||
				exportInfo.exportsInfoOwned
			) {
				exports.push({
					name: exportInfo.name,
					provided: exportInfo.provided,
					canMangleProvide: exportInfo.canMangleProvide,
					terminalBinding: exportInfo.terminalBinding,
					exportsInfo: exportInfo.exportsInfoOwned
						? /** @type {NonNullable<ExportInfo["exportsInfo"]>} */
							(exportInfo.exportsInfo).getRestoreProvidedData()
						: undefined
				});
			}
		}
		return new RestoreProvidedData(
			exports,
			otherProvided,
			otherCanMangleProvide,
			otherTerminalBinding
		);
	}

	/**
	 * @param {{ otherProvided: any, otherCanMangleProvide: any, otherTerminalBinding: any, exports: any }} data data
	 */
	restoreProvided({
		otherProvided,
		otherCanMangleProvide,
		otherTerminalBinding,
		exports
	}) {
		let wasEmpty = true;
		for (const exportInfo of this._exports.values()) {
			wasEmpty = false;
			exportInfo.provided = otherProvided;
			exportInfo.canMangleProvide = otherCanMangleProvide;
			exportInfo.terminalBinding = otherTerminalBinding;
		}
		this._otherExportsInfo.provided = otherProvided;
		this._otherExportsInfo.canMangleProvide = otherCanMangleProvide;
		this._otherExportsInfo.terminalBinding = otherTerminalBinding;
		for (const exp of exports) {
			const exportInfo = this.getExportInfo(exp.name);
			exportInfo.provided = exp.provided;
			exportInfo.canMangleProvide = exp.canMangleProvide;
			exportInfo.terminalBinding = exp.terminalBinding;
			if (exp.exportsInfo) {
				const exportsInfo = exportInfo.createNestedExportsInfo();
				exportsInfo.restoreProvided(exp.exportsInfo);
			}
		}
		if (wasEmpty) this._exportsAreOrdered = true;
	}
}

/** @typedef {{ module: Module, export: string[] }} TargetItemWithoutConnection */
/** @typedef {{ module: Module, connection: ModuleGraphConnection, export: string[] | undefined }} TargetItem */
/** @typedef {Map<any, { connection: ModuleGraphConnection | null, export: string[], priority: number }>} Target */

class ExportInfo {
	/**
	 * @param {string} name the original name of the export
	 * @param {ExportInfo=} initFrom init values from this ExportInfo
	 */
	constructor(name, initFrom) {
		/** @type {string} */
		this.name = name;
		/**
		 * @private
		 * @type {string | null}
		 */
		this._usedName = initFrom ? initFrom._usedName : null;
		/**
		 * @private
		 * @type {UsageStateType | undefined}
		 */
		this._globalUsed = initFrom ? initFrom._globalUsed : undefined;
		/**
		 * @private
		 * @type {Map<string, RuntimeUsageStateType>}
		 */
		this._usedInRuntime =
			initFrom && initFrom._usedInRuntime
				? new Map(initFrom._usedInRuntime)
				: undefined;
		/**
		 * @private
		 * @type {boolean}
		 */
		this._hasUseInRuntimeInfo = initFrom
			? initFrom._hasUseInRuntimeInfo
			: false;
		/**
		 * true: it is provided
		 * false: it is not provided
		 * null: only the runtime knows if it is provided
		 * undefined: it was not determined if it is provided
		 * @type {boolean | null | undefined}
		 */
		this.provided = initFrom ? initFrom.provided : undefined;
		/**
		 * is the export a terminal binding that should be checked for export star conflicts
		 * @type {boolean}
		 */
		this.terminalBinding = initFrom ? initFrom.terminalBinding : false;
		/**
		 * true: it can be mangled
		 * false: is can not be mangled
		 * undefined: it was not determined if it can be mangled
		 * @type {boolean | undefined}
		 */
		this.canMangleProvide = initFrom ? initFrom.canMangleProvide : undefined;
		/**
		 * true: it can be mangled
		 * false: is can not be mangled
		 * undefined: it was not determined if it can be mangled
		 * @type {boolean | undefined}
		 */
		this.canMangleUse = initFrom ? initFrom.canMangleUse : undefined;
		/** @type {boolean} */
		this.exportsInfoOwned = false;
		/** @type {ExportsInfo | undefined} */
		this.exportsInfo = undefined;
		/** @type {Target | undefined} */
		this._target = undefined;
		if (initFrom && initFrom._target) {
			this._target = new Map();
			for (const [key, value] of initFrom._target) {
				this._target.set(key, {
					connection: value.connection,
					export: value.export || [name],
					priority: value.priority
				});
			}
		}
		/** @type {Target | undefined} */
		this._maxTarget = undefined;
	}

	// TODO webpack 5 remove
	/**
	 * @private
	 * @param {*} v v
	 */
	set used(v) {
		throw new Error("REMOVED");
	}

	// TODO webpack 5 remove
	/** @private */
	get used() {
		throw new Error("REMOVED");
	}

	// TODO webpack 5 remove
	/**
	 * @private
	 * @param {*} v v
	 */
	set usedName(v) {
		throw new Error("REMOVED");
	}

	// TODO webpack 5 remove
	/** @private */
	get usedName() {
		throw new Error("REMOVED");
	}

	get canMangle() {
		switch (this.canMangleProvide) {
			case undefined:
				return this.canMangleUse === false ? false : undefined;
			case false:
				return false;
			case true:
				switch (this.canMangleUse) {
					case undefined:
						return undefined;
					case false:
						return false;
					case true:
						return true;
				}
		}
		throw new Error(
			`Unexpected flags for canMangle ${this.canMangleProvide} ${this.canMangleUse}`
		);
	}

	/**
	 * @param {RuntimeSpec} runtime only apply to this runtime
	 * @returns {boolean} true, when something changed
	 */
	setUsedInUnknownWay(runtime) {
		let changed = false;
		if (
			this.setUsedConditionally(
				used => used < UsageState.Unknown,
				UsageState.Unknown,
				runtime
			)
		) {
			changed = true;
		}
		if (this.canMangleUse !== false) {
			this.canMangleUse = false;
			changed = true;
		}
		return changed;
	}

	/**
	 * @param {RuntimeSpec} runtime only apply to this runtime
	 * @returns {boolean} true, when something changed
	 */
	setUsedWithoutInfo(runtime) {
		let changed = false;
		if (this.setUsed(UsageState.NoInfo, runtime)) {
			changed = true;
		}
		if (this.canMangleUse !== false) {
			this.canMangleUse = false;
			changed = true;
		}
		return changed;
	}

	setHasUseInfo() {
		if (!this._hasUseInRuntimeInfo) {
			this._hasUseInRuntimeInfo = true;
		}
		if (this.canMangleUse === undefined) {
			this.canMangleUse = true;
		}
		if (this.exportsInfoOwned) {
			/** @type {ExportsInfo} */
			(this.exportsInfo).setHasUseInfo();
		}
	}

	/**
	 * @param {function(UsageStateType): boolean} condition compare with old value
	 * @param {UsageStateType} newValue set when condition is true
	 * @param {RuntimeSpec} runtime only apply to this runtime
	 * @returns {boolean} true when something has changed
	 */
	setUsedConditionally(condition, newValue, runtime) {
		if (runtime === undefined) {
			if (this._globalUsed === undefined) {
				this._globalUsed = newValue;
				return true;
			}
			if (this._globalUsed !== newValue && condition(this._globalUsed)) {
				this._globalUsed = newValue;
				return true;
			}
		} else if (this._usedInRuntime === undefined) {
			if (newValue !== UsageState.Unused && condition(UsageState.Unused)) {
				this._usedInRuntime = new Map();
				forEachRuntime(runtime, runtime =>
					this._usedInRuntime.set(/** @type {string} */ (runtime), newValue)
				);
				return true;
			}
		} else {
			let changed = false;
			forEachRuntime(runtime, _runtime => {
				const runtime = /** @type {string} */ (_runtime);
				let oldValue =
					/** @type {UsageStateType} */
					(this._usedInRuntime.get(runtime));
				if (oldValue === undefined) oldValue = UsageState.Unused;
				if (newValue !== oldValue && condition(oldValue)) {
					if (newValue === UsageState.Unused) {
						this._usedInRuntime.delete(runtime);
					} else {
						this._usedInRuntime.set(runtime, newValue);
					}
					changed = true;
				}
			});
			if (changed) {
				if (this._usedInRuntime.size === 0) this._usedInRuntime = undefined;
				return true;
			}
		}
		return false;
	}

	/**
	 * @param {UsageStateType} newValue new value of the used state
	 * @param {RuntimeSpec} runtime only apply to this runtime
	 * @returns {boolean} true when something has changed
	 */
	setUsed(newValue, runtime) {
		if (runtime === undefined) {
			if (this._globalUsed !== newValue) {
				this._globalUsed = newValue;
				return true;
			}
		} else if (this._usedInRuntime === undefined) {
			if (newValue !== UsageState.Unused) {
				this._usedInRuntime = new Map();
				forEachRuntime(runtime, runtime =>
					this._usedInRuntime.set(/** @type {string} */ (runtime), newValue)
				);
				return true;
			}
		} else {
			let changed = false;
			forEachRuntime(runtime, _runtime => {
				const runtime = /** @type {string} */ (_runtime);
				let oldValue =
					/** @type {UsageStateType} */
					(this._usedInRuntime.get(runtime));
				if (oldValue === undefined) oldValue = UsageState.Unused;
				if (newValue !== oldValue) {
					if (newValue === UsageState.Unused) {
						this._usedInRuntime.delete(runtime);
					} else {
						this._usedInRuntime.set(runtime, newValue);
					}
					changed = true;
				}
			});
			if (changed) {
				if (this._usedInRuntime.size === 0) this._usedInRuntime = undefined;
				return true;
			}
		}
		return false;
	}

	/**
	 * @param {any} key the key
	 * @returns {boolean} true, if something has changed
	 */
	unsetTarget(key) {
		if (!this._target) return false;
		if (this._target.delete(key)) {
			this._maxTarget = undefined;
			return true;
		}
		return false;
	}

	/**
	 * @param {any} key the key
	 * @param {ModuleGraphConnection} connection the target module if a single one
	 * @param {(string[] | null)=} exportName the exported name
	 * @param {number=} priority priority
	 * @returns {boolean} true, if something has changed
	 */
	setTarget(key, connection, exportName, priority = 0) {
		if (exportName) exportName = [...exportName];
		if (!this._target) {
			this._target = new Map();
			this._target.set(key, {
				connection,
				export: /** @type {string[]} */ (exportName),
				priority
			});
			return true;
		}
		const oldTarget = this._target.get(key);
		if (!oldTarget) {
			if (oldTarget === null && !connection) return false;
			this._target.set(key, {
				connection,
				export: /** @type {string[]} */ (exportName),
				priority
			});
			this._maxTarget = undefined;
			return true;
		}
		if (
			oldTarget.connection !== connection ||
			oldTarget.priority !== priority ||
			(exportName
				? !oldTarget.export || !equals(oldTarget.export, exportName)
				: oldTarget.export)
		) {
			oldTarget.connection = connection;
			oldTarget.export = /** @type {string[]} */ (exportName);
			oldTarget.priority = priority;
			this._maxTarget = undefined;
			return true;
		}
		return false;
	}

	/**
	 * @param {RuntimeSpec} runtime for this runtime
	 * @returns {UsageStateType} usage state
	 */
	getUsed(runtime) {
		if (!this._hasUseInRuntimeInfo) return UsageState.NoInfo;
		if (this._globalUsed !== undefined) return this._globalUsed;
		if (this._usedInRuntime === undefined) {
			return UsageState.Unused;
		} else if (typeof runtime === "string") {
			const value = this._usedInRuntime.get(runtime);
			return value === undefined ? UsageState.Unused : value;
		} else if (runtime === undefined) {
			/** @type {UsageStateType} */
			let max = UsageState.Unused;
			for (const value of this._usedInRuntime.values()) {
				if (value === UsageState.Used) {
					return UsageState.Used;
				}
				if (max < value) max = value;
			}
			return max;
		}

		/** @type {UsageStateType} */
		let max = UsageState.Unused;
		for (const item of runtime) {
			const value = this._usedInRuntime.get(item);
			if (value !== undefined) {
				if (value === UsageState.Used) {
					return UsageState.Used;
				}
				if (max < value) max = value;
			}
		}
		return max;
	}

	/**
	 * get used name
	 * @param {string | undefined} fallbackName fallback name for used exports with no name
	 * @param {RuntimeSpec} runtime check usage for this runtime only
	 * @returns {string | false} used name
	 */
	getUsedName(fallbackName, runtime) {
		if (this._hasUseInRuntimeInfo) {
			if (this._globalUsed !== undefined) {
				if (this._globalUsed === UsageState.Unused) return false;
			} else {
				if (this._usedInRuntime === undefined) return false;
				if (typeof runtime === "string") {
					if (!this._usedInRuntime.has(runtime)) {
						return false;
					}
				} else if (
					runtime !== undefined &&
					Array.from(runtime).every(
						runtime => !this._usedInRuntime.has(runtime)
					)
				) {
					return false;
				}
			}
		}
		if (this._usedName !== null) return this._usedName;
		return /** @type {string | false} */ (this.name || fallbackName);
	}

	/**
	 * @returns {boolean} true, when a mangled name of this export is set
	 */
	hasUsedName() {
		return this._usedName !== null;
	}

	/**
	 * Sets the mangled name of this export
	 * @param {string} name the new name
	 * @returns {void}
	 */
	setUsedName(name) {
		this._usedName = name;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(TargetItem): boolean} resolveTargetFilter filter function to further resolve target
	 * @returns {ExportInfo | ExportsInfo | undefined} the terminal binding export(s) info if known
	 */
	getTerminalBinding(moduleGraph, resolveTargetFilter = RETURNS_TRUE) {
		if (this.terminalBinding) return this;
		const target = this.getTarget(moduleGraph, resolveTargetFilter);
		if (!target) return;
		const exportsInfo = moduleGraph.getExportsInfo(target.module);
		if (!target.export) return exportsInfo;
		return exportsInfo.getReadOnlyExportInfoRecursive(target.export);
	}

	isReexport() {
		return !this.terminalBinding && this._target && this._target.size > 0;
	}

	_getMaxTarget() {
		if (this._maxTarget !== undefined) return this._maxTarget;
		if (/** @type {Target} */ (this._target).size <= 1)
			return (this._maxTarget = this._target);
		let maxPriority = -Infinity;
		let minPriority = Infinity;
		for (const { priority } of /** @type {Target} */ (this._target).values()) {
			if (maxPriority < priority) maxPriority = priority;
			if (minPriority > priority) minPriority = priority;
		}
		// This should be very common
		if (maxPriority === minPriority) return (this._maxTarget = this._target);

		// This is an edge case
		const map = new Map();
		for (const [key, value] of /** @type {Target} */ (this._target)) {
			if (maxPriority === value.priority) {
				map.set(key, value);
			}
		}
		this._maxTarget = map;
		return map;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(Module): boolean} validTargetModuleFilter a valid target module
	 * @returns {TargetItemWithoutConnection | null | undefined | false} the target, undefined when there is no target, false when no target is valid
	 */
	findTarget(moduleGraph, validTargetModuleFilter) {
		return this._findTarget(moduleGraph, validTargetModuleFilter, new Set());
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(Module): boolean} validTargetModuleFilter a valid target module
	 * @param {Set<ExportInfo>} alreadyVisited set of already visited export info to avoid circular references
	 * @returns {TargetItemWithoutConnection | null | undefined | false} the target, undefined when there is no target, false when no target is valid
	 */
	_findTarget(moduleGraph, validTargetModuleFilter, alreadyVisited) {
		if (!this._target || this._target.size === 0) return;
		const rawTarget =
			/** @type {Target} */
			(this._getMaxTarget()).values().next().value;
		if (!rawTarget) return;
		/** @type {TargetItemWithoutConnection} */
		let target = {
			module: rawTarget.connection.module,
			export: rawTarget.export
		};
		for (;;) {
			if (validTargetModuleFilter(target.module)) return target;
			const exportsInfo = moduleGraph.getExportsInfo(target.module);
			const exportInfo = exportsInfo.getExportInfo(target.export[0]);
			if (alreadyVisited.has(exportInfo)) return null;
			const newTarget = exportInfo._findTarget(
				moduleGraph,
				validTargetModuleFilter,
				alreadyVisited
			);
			if (!newTarget) return false;
			if (target.export.length === 1) {
				target = newTarget;
			} else {
				target = {
					module: newTarget.module,
					export: newTarget.export
						? newTarget.export.concat(target.export.slice(1))
						: target.export.slice(1)
				};
			}
		}
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(TargetItem): boolean} resolveTargetFilter filter function to further resolve target
	 * @returns {TargetItem | undefined} the target
	 */
	getTarget(moduleGraph, resolveTargetFilter = RETURNS_TRUE) {
		const result = this._getTarget(moduleGraph, resolveTargetFilter, undefined);
		if (result === CIRCULAR) return;
		return result;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(TargetItem): boolean} resolveTargetFilter filter function to further resolve target
	 * @param {Set<ExportInfo> | undefined} alreadyVisited set of already visited export info to avoid circular references
	 * @returns {TargetItem | CIRCULAR | undefined} the target
	 */
	_getTarget(moduleGraph, resolveTargetFilter, alreadyVisited) {
		/**
		 * @param {TargetItem | null} inputTarget unresolved target
		 * @param {Set<ExportInfo>} alreadyVisited set of already visited export info to avoid circular references
		 * @returns {TargetItem | CIRCULAR | null} resolved target
		 */
		const resolveTarget = (inputTarget, alreadyVisited) => {
			if (!inputTarget) return null;
			if (!inputTarget.export) {
				return {
					module: inputTarget.connection.module,
					connection: inputTarget.connection,
					export: undefined
				};
			}
			/** @type {TargetItem} */
			let target = {
				module: inputTarget.connection.module,
				connection: inputTarget.connection,
				export: inputTarget.export
			};
			if (!resolveTargetFilter(target)) return target;
			let alreadyVisitedOwned = false;
			for (;;) {
				const exportsInfo = moduleGraph.getExportsInfo(target.module);
				const exportInfo = exportsInfo.getExportInfo(
					/** @type {NonNullable<TargetItem["export"]>} */
					(target.export)[0]
				);
				if (!exportInfo) return target;
				if (alreadyVisited.has(exportInfo)) return CIRCULAR;
				const newTarget = exportInfo._getTarget(
					moduleGraph,
					resolveTargetFilter,
					alreadyVisited
				);
				if (newTarget === CIRCULAR) return CIRCULAR;
				if (!newTarget) return target;
				if (
					/** @type {NonNullable<TargetItem["export"]>} */
					(target.export).length === 1
				) {
					target = newTarget;
					if (!target.export) return target;
				} else {
					target = {
						module: newTarget.module,
						connection: newTarget.connection,
						export: newTarget.export
							? newTarget.export.concat(
									/** @type {NonNullable<TargetItem["export"]>} */
									(target.export).slice(1)
								)
							: /** @type {NonNullable<TargetItem["export"]>} */
								(target.export).slice(1)
					};
				}
				if (!resolveTargetFilter(target)) return target;
				if (!alreadyVisitedOwned) {
					alreadyVisited = new Set(alreadyVisited);
					alreadyVisitedOwned = true;
				}
				alreadyVisited.add(exportInfo);
			}
		};

		if (!this._target || this._target.size === 0) return;
		if (alreadyVisited && alreadyVisited.has(this)) return CIRCULAR;
		const newAlreadyVisited = new Set(alreadyVisited);
		newAlreadyVisited.add(this);
		const values = /** @type {Target} */ (this._getMaxTarget()).values();
		const target = resolveTarget(values.next().value, newAlreadyVisited);
		if (target === CIRCULAR) return CIRCULAR;
		if (target === null) return;
		let result = values.next();
		while (!result.done) {
			const t = resolveTarget(result.value, newAlreadyVisited);
			if (t === CIRCULAR) return CIRCULAR;
			if (t === null) return;
			if (t.module !== target.module) return;
			if (!t.export !== !target.export) return;
			if (
				target.export &&
				!equals(/** @type {ArrayLike<string>} */ (t.export), target.export)
			)
				return;
			result = values.next();
		}
		return target;
	}

	/**
	 * Move the target forward as long resolveTargetFilter is fulfilled
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {function(TargetItem): boolean} resolveTargetFilter filter function to further resolve target
	 * @param {function(TargetItem): ModuleGraphConnection=} updateOriginalConnection updates the original connection instead of using the target connection
	 * @returns {TargetItem | undefined} the resolved target when moved
	 */
	moveTarget(moduleGraph, resolveTargetFilter, updateOriginalConnection) {
		const target = this._getTarget(moduleGraph, resolveTargetFilter, undefined);
		if (target === CIRCULAR) return;
		if (!target) return;
		const originalTarget =
			/** @type {Target} */
			(this._getMaxTarget()).values().next().value;
		if (
			originalTarget.connection === target.connection &&
			originalTarget.export === target.export
		) {
			return;
		}
		/** @type {Target} */
		(this._target).clear();
		/** @type {Target} */
		(this._target).set(undefined, {
			connection: updateOriginalConnection
				? updateOriginalConnection(target)
				: target.connection,
			export: /** @type {NonNullable<TargetItem["export"]>} */ (target.export),
			priority: 0
		});
		return target;
	}

	/**
	 * @returns {ExportsInfo} an exports info
	 */
	createNestedExportsInfo() {
		if (this.exportsInfoOwned)
			return /** @type {ExportsInfo} */ (this.exportsInfo);
		this.exportsInfoOwned = true;
		const oldExportsInfo = this.exportsInfo;
		this.exportsInfo = new ExportsInfo();
		this.exportsInfo.setHasProvideInfo();
		if (oldExportsInfo) {
			this.exportsInfo.setRedirectNamedTo(oldExportsInfo);
		}
		return this.exportsInfo;
	}

	getNestedExportsInfo() {
		return this.exportsInfo;
	}

	/**
	 * @param {ExportInfo} baseInfo base info
	 * @param {RuntimeSpec} runtime runtime
	 * @returns {boolean} true when has info, otherwise false
	 */
	hasInfo(baseInfo, runtime) {
		return (
			(this._usedName && this._usedName !== this.name) ||
			this.provided ||
			this.terminalBinding ||
			this.getUsed(runtime) !== baseInfo.getUsed(runtime)
		);
	}

	/**
	 * @param {Hash} hash the hash
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {void}
	 */
	updateHash(hash, runtime) {
		this._updateHash(hash, runtime, new Set());
	}

	/**
	 * @param {Hash} hash the hash
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {Set<ExportsInfo>} alreadyVisitedExportsInfo for circular references
	 */
	_updateHash(hash, runtime, alreadyVisitedExportsInfo) {
		hash.update(
			`${this._usedName || this.name}${this.getUsed(runtime)}${this.provided}${
				this.terminalBinding
			}`
		);
		if (this.exportsInfo && !alreadyVisitedExportsInfo.has(this.exportsInfo)) {
			this.exportsInfo._updateHash(hash, runtime, alreadyVisitedExportsInfo);
		}
	}

	getUsedInfo() {
		if (this._globalUsed !== undefined) {
			switch (this._globalUsed) {
				case UsageState.Unused:
					return "unused";
				case UsageState.NoInfo:
					return "no usage info";
				case UsageState.Unknown:
					return "maybe used (runtime-defined)";
				case UsageState.Used:
					return "used";
				case UsageState.OnlyPropertiesUsed:
					return "only properties used";
			}
		} else if (this._usedInRuntime !== undefined) {
			/** @type {Map<RuntimeUsageStateType, string[]>} */
			const map = new Map();
			for (const [runtime, used] of this._usedInRuntime) {
				const list = map.get(used);
				if (list !== undefined) list.push(runtime);
				else map.set(used, [runtime]);
			}
			// eslint-disable-next-line array-callback-return
			const specificInfo = Array.from(map, ([used, runtimes]) => {
				switch (used) {
					case UsageState.NoInfo:
						return `no usage info in ${runtimes.join(", ")}`;
					case UsageState.Unknown:
						return `maybe used in ${runtimes.join(", ")} (runtime-defined)`;
					case UsageState.Used:
						return `used in ${runtimes.join(", ")}`;
					case UsageState.OnlyPropertiesUsed:
						return `only properties used in ${runtimes.join(", ")}`;
				}
			});
			if (specificInfo.length > 0) {
				return specificInfo.join("; ");
			}
		}
		return this._hasUseInRuntimeInfo ? "unused" : "no usage info";
	}

	getProvidedInfo() {
		switch (this.provided) {
			case undefined:
				return "no provided info";
			case null:
				return "maybe provided (runtime-defined)";
			case true:
				return "provided";
			case false:
				return "not provided";
		}
	}

	getRenameInfo() {
		if (this._usedName !== null && this._usedName !== this.name) {
			return `renamed to ${JSON.stringify(this._usedName).slice(1, -1)}`;
		}
		switch (this.canMangleProvide) {
			case undefined:
				switch (this.canMangleUse) {
					case undefined:
						return "missing provision and use info prevents renaming";
					case false:
						return "usage prevents renaming (no provision info)";
					case true:
						return "missing provision info prevents renaming";
				}
				break;
			case true:
				switch (this.canMangleUse) {
					case undefined:
						return "missing usage info prevents renaming";
					case false:
						return "usage prevents renaming";
					case true:
						return "could be renamed";
				}
				break;
			case false:
				switch (this.canMangleUse) {
					case undefined:
						return "provision prevents renaming (no use info)";
					case false:
						return "usage and provision prevents renaming";
					case true:
						return "provision prevents renaming";
				}
				break;
		}
		throw new Error(
			`Unexpected flags for getRenameInfo ${this.canMangleProvide} ${this.canMangleUse}`
		);
	}
}

module.exports = ExportsInfo;
module.exports.ExportInfo = ExportInfo;
module.exports.UsageState = UsageState;
