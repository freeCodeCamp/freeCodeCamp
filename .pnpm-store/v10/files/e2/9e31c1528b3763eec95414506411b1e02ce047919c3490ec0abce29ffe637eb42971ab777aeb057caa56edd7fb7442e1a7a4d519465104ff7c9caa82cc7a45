/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ExportSpec} ExportSpec */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../json/JsonData")} JsonData */
/** @typedef {import("../json/JsonData").RawJsonData} RawJsonData */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

/**
 * @param {number} exportsDepth exportsDepth
 * @returns {((data: RawJsonData, curDepth?: number) => ExportSpec[] | undefined)} value
 */
const getExportsWithDepth = exportsDepth =>
	function getExportsFromData(data, curDepth = 1) {
		if (curDepth > exportsDepth) return undefined;
		if (data && typeof data === "object") {
			if (Array.isArray(data)) {
				return data.length < 100
					? data.map((item, idx) => ({
							name: `${idx}`,
							canMangle: true,
							exports: getExportsFromData(item, curDepth + 1)
						}))
					: undefined;
			}
			const exports = [];
			for (const key of Object.keys(data)) {
				exports.push({
					name: key,
					canMangle: true,
					exports: getExportsFromData(data[key], curDepth + 1)
				});
			}
			return exports;
		}
		return undefined;
	};

class JsonExportsDependency extends NullDependency {
	/**
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
				this.data && /** @type {RawJsonData} */ (this.data.get())
			),
			dependencies: undefined
		};
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		this.data.updateHash(hash);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.data);
		write(this.exportsDepth);
		super.serialize(context);
	}

	/**
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
