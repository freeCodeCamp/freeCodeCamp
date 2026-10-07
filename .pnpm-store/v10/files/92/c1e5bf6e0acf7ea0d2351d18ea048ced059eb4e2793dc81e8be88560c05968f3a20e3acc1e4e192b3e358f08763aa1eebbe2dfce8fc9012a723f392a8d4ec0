/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { register } = require("../util/serialization");

/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("./JsonModulesPlugin").RawJsonData} RawJsonData */

class JsonData {
	/**
	 * @param {Buffer | RawJsonData} data JSON data
	 */
	constructor(data) {
		/** @type {Buffer | undefined} */
		this._buffer = undefined;
		/** @type {RawJsonData | undefined} */
		this._data = undefined;
		if (Buffer.isBuffer(data)) {
			this._buffer = data;
		} else {
			this._data = data;
		}
	}

	/**
	 * @returns {RawJsonData|undefined} Raw JSON data
	 */
	get() {
		if (this._data === undefined && this._buffer !== undefined) {
			this._data = JSON.parse(this._buffer.toString());
		}
		return this._data;
	}

	/**
	 * @param {Hash} hash hash to be updated
	 * @returns {void} the updated hash
	 */
	updateHash(hash) {
		if (this._buffer === undefined && this._data !== undefined) {
			this._buffer = Buffer.from(JSON.stringify(this._data));
		}

		if (this._buffer) hash.update(this._buffer);
	}
}

register(JsonData, "webpack/lib/json/JsonData", null, {
	/**
	 * @param {JsonData} obj JSONData object
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, { write }) {
		if (obj._buffer === undefined && obj._data !== undefined) {
			obj._buffer = Buffer.from(JSON.stringify(obj._data));
		}
		write(obj._buffer);
	},
	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {JsonData} deserialized JSON data
	 */
	deserialize({ read }) {
		return new JsonData(read());
	}
});

module.exports = JsonData;
