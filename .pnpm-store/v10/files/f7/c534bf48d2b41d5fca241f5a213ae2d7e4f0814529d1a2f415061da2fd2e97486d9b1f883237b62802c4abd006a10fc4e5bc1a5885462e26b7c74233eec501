/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("../Dependency").ExportSpec} ExportSpec */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../json/JsonData")} JsonData */
/** @typedef {import("../json/JsonData").JsonValue} JsonValue */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

/**
 * Defines the get exports from data fn callback.
 * @callback GetExportsFromDataFn
 * @param {JsonValue} data raw json data
 * @param {number=} curDepth current depth
 * @returns {ExportSpec[] | null} export spec or nothing
 */

/**
 * Gets exports with depth.
 * @param {number} exportsDepth exportsDepth
 * @returns {GetExportsFromDataFn} value
 */
const getExportsWithDepth = (exportsDepth) =>
	/** @type {GetExportsFromDataFn} */
	function getExportsFromData(data, curDepth = 1) {
		if (curDepth > exportsDepth) {
			return null;
		}

		if (data && typeof data === "object") {
			if (Array.isArray(data)) {
				return data.length < 100
					? data.map((item, idx) => ({
							name: `${idx}`,
							canMangle: true,
							exports: getExportsFromData(item, curDepth + 1) || undefined
						}))
					: null;
			}

			/** @type {ExportSpec[]} */
			const exports = [];

			for (const key of Object.keys(data)) {
				exports.push({
					name: key,
					canMangle: true,
					exports:
						getExportsFromData(
							/** @type {JsonValue} */
							(data[key]),
							curDepth + 1
						) || undefined
				});
			}

			return exports;
		}

		return null;
	};

class JsonExportsDependency extends NullDependency {
	/**
	 * Creates an instance of JsonExportsDependency.
	 * @param {JsonData} data json data
	 * @param {number} exportsDepth the depth of json exports to analyze
	 */
	constructor(data, exportsDepth) {
		super();
		this.data = data;
		this.exportsDepth = exportsDepth;
	}

	get type() {
		return "json exports";
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		return {
			exports: getExportsWithDepth(this.exportsDepth)(
				this.data && /** @type {JsonValue} */ (this.data.get())
			),
			dependencies: undefined
		};
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		this.data.updateHash(hash);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.data);
		write(this.exportsDepth);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.data = read();
		this.exportsDepth = read();
		super.deserialize(context);
	}
}

makeSerializable(
	JsonExportsDependency,
	"webpack/lib/dependencies/JsonExportsDependency"
);

module.exports = JsonExportsDependency;
