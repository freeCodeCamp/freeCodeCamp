/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../css/CssParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CssImportDependency extends ModuleDependency {
	/**
	 * Example of dependency:
	 * \@import url("landscape.css") layer(forms) screen and (orientation: landscape) screen and (orientation: landscape);
	 * @param {string} request request
	 * @param {Range} range range of the argument
	 * @param {string | undefined} layer layer
	 * @param {string | undefined} supports list of supports conditions
	 * @param {string | undefined} media list of media conditions
	 */
	constructor(request, range, layer, supports, media) {
		super(request);
		this.range = range;
		this.layer = layer;
		this.supports = supports;
		this.media = media;
	}

	get type() {
		return "css @import";
	}

	get category() {
		return "css-import";
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		let str = `context${this._context || ""}|module${this.request}`;

		if (this.layer) {
			str += `|layer${this.layer}`;
		}

		if (this.supports) {
			str += `|supports${this.supports}`;
		}

		if (this.media) {
			str += `|media${this.media}`;
		}

		return str;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.layer);
		write(this.supports);
		write(this.media);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.layer = read();
		this.supports = read();
		this.media = read();
		super.deserialize(context);
	}
}

CssImportDependency.Template = class CssImportDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {CssImportDependency} */ (dependency);

		source.replace(dep.range[0], dep.range[1] - 1, "");
	}
};

makeSerializable(
	CssImportDependency,
	"webpack/lib/dependencies/CssImportDependency"
);

module.exports = CssImportDependency;
