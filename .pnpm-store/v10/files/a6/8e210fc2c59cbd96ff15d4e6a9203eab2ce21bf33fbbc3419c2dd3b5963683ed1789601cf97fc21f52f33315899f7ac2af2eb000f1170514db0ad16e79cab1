/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./EntryDependency")} EntryDependency */

class DllEntryDependency extends Dependency {
	/**
	 * Creates an instance of DllEntryDependency.
	 * @param {EntryDependency[]} dependencies dependencies
	 * @param {string} name name
	 */
	constructor(dependencies, name) {
		super();

		this.dependencies = dependencies;
		this.name = name;
	}

	get type() {
		return "dll entry";
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.dependencies);
		write(this.name);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.dependencies = read();
		this.name = read();

		super.deserialize(context);
	}
}

makeSerializable(
	DllEntryDependency,
	"webpack/lib/dependencies/DllEntryDependency"
);

module.exports = DllEntryDependency;
