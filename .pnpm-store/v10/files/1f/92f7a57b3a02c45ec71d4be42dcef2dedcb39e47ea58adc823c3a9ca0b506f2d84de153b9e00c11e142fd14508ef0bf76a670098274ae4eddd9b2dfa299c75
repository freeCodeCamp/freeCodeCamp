/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const SerializerMiddleware = require("./SerializerMiddleware");

/**
 * @typedef {any} DeserializedType
 * @typedef {any[]} SerializedType
 * @extends {SerializerMiddleware<any, any[]>}
 */
class SingleItemMiddleware extends SerializerMiddleware {
	/**
	 * @param {DeserializedType} data data
	 * @param {object} context context object
	 * @returns {SerializedType|Promise<SerializedType>} serialized data
	 */
	serialize(data, context) {
		return [data];
	}

	/**
	 * @param {SerializedType} data data
	 * @param {object} context context object
	 * @returns {DeserializedType|Promise<DeserializedType>} deserialized data
	 */
	deserialize(data, context) {
		return data[0];
	}
}

module.exports = SingleItemMiddleware;
