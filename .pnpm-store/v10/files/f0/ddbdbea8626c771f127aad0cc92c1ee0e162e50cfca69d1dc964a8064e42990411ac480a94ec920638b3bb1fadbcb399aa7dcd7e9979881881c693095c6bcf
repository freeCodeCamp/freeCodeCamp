/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ProvideSharedDependency extends Dependency {
	/**
	 * @param {string} shareScope share scope
	 * @param {string} name module name
	 * @param {string | false} version version
	 * @param {string} request request
	 * @param {boolean} eager true, if this is an eager dependency
	 */
	constructor(shareScope, name, version, request, eager) {
		super();
		this.shareScope = shareScope;
		this.name = name;
		this.version = version;
		this.request = request;
		this.eager = eager;
	}

	get type() {
		return "provide shared module";
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return `provide module (${this.shareScope}) ${this.request} as ${
			this.name
		} @ ${this.version}${this.eager ? " (eager)" : ""}`;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		context.write(this.shareScope);
		context.write(this.name);
		context.write(this.request);
		context.write(this.version);
		context.write(this.eager);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {ProvideSharedDependency} deserialize fallback dependency
	 */
	static deserialize(context) {
		const { read } = context;
		const obj = new ProvideSharedDependency(
			read(),
			read(),
			read(),
			read(),
			read()
		);
		this.shareScope = context.read();
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(
	ProvideSharedDependency,
	"webpack/lib/sharing/ProvideSharedDependency"
);

module.exports = ProvideSharedDependency;
