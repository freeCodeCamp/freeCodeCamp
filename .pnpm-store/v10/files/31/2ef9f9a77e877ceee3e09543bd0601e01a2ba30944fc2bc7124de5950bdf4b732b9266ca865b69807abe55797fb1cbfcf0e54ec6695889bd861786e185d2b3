/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const DependencyTemplate = require("../DependencyTemplate");

/** @typedef {import("../Dependency").TRANSITIVE} TRANSITIVE */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ModuleDependency extends Dependency {
	/**
	 * Creates an instance of ModuleDependency.
	 * @param {string} request request path which needs resolving
	 * @param {number=} sourceOrder source order
	 */
	constructor(request, sourceOrder) {
		super();
		this.request = request;
		this.userRequest = request;
		this.sourceOrder = sourceOrder;
		/** @type {Range | undefined} */
		this.range = undefined;
		/** @type {undefined | string} */
		this._context = undefined;
	}

	/**
	 * Returns a request context.
	 * @returns {string | undefined} a request context
	 */
	getContext() {
		return this._context;
	}

	/**
	 * Returns an identifier to merge equal requests.
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return `context${this._context || ""}|module${this.request}`;
	}

	/**
	 * Could affect referencing module.
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return true;
	}

	/**
	 * Creates an ignored module.
	 * @param {string} context context directory
	 * @returns {Module} ignored module
	 */
	createIgnoredModule(context) {
		const RawModule = require("../RawModule");

		const module = new RawModule(
			"/* (ignored) */",
			`ignored|${context}|${this.request}`,
			`${this.request} (ignored)`
		);
		module.factoryMeta = { sideEffectFree: true };
		return module;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.request);
		write(this.userRequest);
		write(this._context);
		write(this.range);
		write(this.sourceOrder);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.request = read();
		this.userRequest = read();
		this._context = read();
		this.range = read();
		this.sourceOrder = read();
		super.deserialize(context);
	}
}

ModuleDependency.Template = DependencyTemplate;

module.exports = ModuleDependency;
