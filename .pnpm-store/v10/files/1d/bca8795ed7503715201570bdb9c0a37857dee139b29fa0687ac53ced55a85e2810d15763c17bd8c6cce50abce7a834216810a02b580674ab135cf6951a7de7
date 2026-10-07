/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const { CSS_TYPE } = require("../ModuleSourceTypeConstants");
const makeSerializable = require("../util/makeSerializable");
const CssIcssExportDependency = require("./CssIcssExportDependency");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../css/CssParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CssIcssSymbolDependency extends NullDependency {
	/**
	 * Creates an instance of CssIcssSymbolDependency.
	 * @param {string} localName local name
	 * @param {Range} range range
	 * @param {string=} value value when it was defined in this module
	 * @param {string=} importName import name when it was imported from other module
	 */
	constructor(localName, range, value, importName) {
		super();
		this.localName = localName;
		this.range = range;
		this.value = value;
		this.importName = importName;
		/** @type {undefined | string} */
		this._hashUpdate = undefined;
	}

	get type() {
		return "css symbol identifier";
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = `${this.range}${this.localName}${this.value || this.importName}`;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.localName);
		write(this.range);
		write(this.value);
		write(this.importName);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.localName = read();
		this.range = read();
		this.value = read();
		this.importName = read();
		super.deserialize(context);
	}
}

CssIcssSymbolDependency.Template = class CssIcssSymbolDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		if (templateContext.type === CSS_TYPE) {
			const dep = /** @type {CssIcssSymbolDependency} */ (dependency);
			/** @type {string | undefined} */
			const value = dep.importName
				? CssIcssExportDependency.Template.resolve(
						dep.localName,
						dep.importName,
						templateContext
					)
				: dep.value;

			if (!value) {
				return;
			}

			source.replace(dep.range[0], dep.range[1] - 1, value);
		}
	}
};

makeSerializable(
	CssIcssSymbolDependency,
	"webpack/lib/dependencies/CssIcssSymbolDependency"
);

module.exports = CssIcssSymbolDependency;
