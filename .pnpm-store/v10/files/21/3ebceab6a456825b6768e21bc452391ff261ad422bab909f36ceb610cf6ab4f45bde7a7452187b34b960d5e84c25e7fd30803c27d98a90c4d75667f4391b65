/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const NormalModule = require("./NormalModule");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Module")} Module */
/** @typedef {import("./NormalModule").NormalModuleCreateData} NormalModuleCreateData */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {string | undefined} CssLayer */
/** @typedef {string | undefined} Supports */
/** @typedef {string | undefined} Media */
/** @typedef {[CssLayer, Supports, Media]} InheritanceItem */
/** @typedef {Array<InheritanceItem>} Inheritance */

/** @typedef {NormalModuleCreateData & { cssLayer: CssLayer, supports: Supports, media: Media, inheritance: Inheritance }} CSSModuleCreateData */

class CssModule extends NormalModule {
	/**
	 * @param {CSSModuleCreateData} options options object
	 */
	constructor(options) {
		super(options);

		// Avoid override `layer` for `Module` class, because it is a feature to run module in specific layer
		this.cssLayer = options.cssLayer;
		this.supports = options.supports;
		this.media = options.media;
		this.inheritance = options.inheritance;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		let identifier = super.identifier();

		if (this.cssLayer) {
			identifier += `|${this.cssLayer}`;
		}

		if (this.supports) {
			identifier += `|${this.supports}`;
		}

		if (this.media) {
			identifier += `|${this.media}`;
		}

		if (this.inheritance) {
			const inheritance = this.inheritance.map(
				(item, index) =>
					`inheritance_${index}|${item[0] || ""}|${item[1] || ""}|${
						item[2] || ""
					}`
			);

			identifier += `|${inheritance.join("|")}`;
		}

		// We generate extra code for HMR, so we need to invalidate the module
		if (this.hot) {
			identifier += `|${this.hot}`;
		}

		return identifier;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		const readableIdentifier = super.readableIdentifier(requestShortener);

		let identifier = `css ${readableIdentifier}`;

		if (this.cssLayer) {
			identifier += ` (layer: ${this.cssLayer})`;
		}

		if (this.supports) {
			identifier += ` (supports: ${this.supports})`;
		}

		if (this.media) {
			identifier += ` (media: ${this.media})`;
		}

		return identifier;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		super.updateCacheModule(module);
		const m = /** @type {CssModule} */ (module);
		this.cssLayer = m.cssLayer;
		this.supports = m.supports;
		this.media = m.media;
		this.inheritance = m.inheritance;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.cssLayer);
		write(this.supports);
		write(this.media);
		write(this.inheritance);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {CssModule} the deserialized object
	 */
	static deserialize(context) {
		const obj = new CssModule({
			// will be deserialized by Module
			layer: /** @type {EXPECTED_ANY} */ (null),
			type: "",
			// will be filled by updateCacheModule
			resource: "",
			context: "",
			request: /** @type {EXPECTED_ANY} */ (null),
			userRequest: /** @type {EXPECTED_ANY} */ (null),
			rawRequest: /** @type {EXPECTED_ANY} */ (null),
			loaders: /** @type {EXPECTED_ANY} */ (null),
			matchResource: /** @type {EXPECTED_ANY} */ (null),
			parser: /** @type {EXPECTED_ANY} */ (null),
			parserOptions: /** @type {EXPECTED_ANY} */ (null),
			generator: /** @type {EXPECTED_ANY} */ (null),
			generatorOptions: /** @type {EXPECTED_ANY} */ (null),
			resolveOptions: /** @type {EXPECTED_ANY} */ (null),
			cssLayer: /** @type {EXPECTED_ANY} */ (null),
			supports: /** @type {EXPECTED_ANY} */ (null),
			media: /** @type {EXPECTED_ANY} */ (null),
			inheritance: /** @type {EXPECTED_ANY} */ (null)
		});
		obj.deserialize(context);
		return obj;
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {TODO} Module
	 */
	deserialize(context) {
		const { read } = context;
		this.cssLayer = read();
		this.supports = read();
		this.media = read();
		this.inheritance = read();
		super.deserialize(context);
	}
}

makeSerializable(CssModule, "webpack/lib/CssModule");

module.exports = CssModule;
