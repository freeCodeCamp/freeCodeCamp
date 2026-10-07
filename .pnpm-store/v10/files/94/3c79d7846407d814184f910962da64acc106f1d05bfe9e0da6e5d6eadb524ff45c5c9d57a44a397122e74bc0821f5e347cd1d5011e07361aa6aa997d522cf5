/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const DependencyTemplate = require("../DependencyTemplate");
const RawModule = require("../RawModule");

/** @typedef {import("../Dependency").TRANSITIVE} TRANSITIVE */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ModuleDependency extends Dependency {
	/**
	 * @param {string} request request path which needs resolving
	 */
	constructor(request) {
		super();
		this.request = request;
		this.userRequest = request;
		this.range = undefined;
		// TODO move it to subclasses and rename
		// assertions must be serialized by subclasses that use it
		/** @type {ImportAttributes | undefined} */
		this.assertions = undefined;
		this._context = undefined;
	}

	/**
	 * @returns {string | undefined} a request context
	 */
	getContext() {
		return this._context;
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		let str = `context${this._context || ""}|module${this.request}`;
		if (this.assertions !== undefined) {
			str += JSON.stringify(this.assertions);
		}
		return str;
	}

	/**
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return true;
	}

	/**
	 * @param {string} context context directory
	 * @returns {Module | null} a module
	 */
	createIgnoredModule(context) {
		return new RawModule(
			"/* (ignored) */",
			`ignored|${context}|${this.request}`,
			`${this.request} (ignored)`
		);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.request);
		write(this.userRequest);
		write(this._context);
		write(this.range);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.request = read();
		this.userRequest = read();
		this._context = read();
		this.range = read();
		super.deserialize(context);
	}
}

ModuleDependency.Template = DependencyTemplate;

module.exports = ModuleDependency;
