/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const InitFragment = require("../InitFragment");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {{ name: string, value?: string }[]} ArrayImportSpecifiers */
/** @typedef {Set<string>} ImportSpecifier */
/** @typedef {Map<string, ImportSpecifier>} ImportSpecifiers */

/**
 * @extends {InitFragment<GenerateContext>}
 */
class ExternalModuleInitFragment extends InitFragment {
	/**
	 * @param {string} importedModule imported module
	 * @param {ArrayImportSpecifiers | ImportSpecifiers} specifiers import specifiers
	 * @param {string=} defaultImport default import
	 */
	constructor(importedModule, specifiers, defaultImport) {
		super(
			undefined,
			InitFragment.STAGE_CONSTANTS,
			0,
			`external module imports|${importedModule}|${defaultImport || "null"}`
		);
		this.importedModule = importedModule;
		if (Array.isArray(specifiers)) {
			/** @type {ImportSpecifiers} */
			this.specifiers = new Map();
			for (const { name, value } of specifiers) {
				let specifiers = this.specifiers.get(name);
				if (!specifiers) {
					/** @type {ImportSpecifier} */
					specifiers = new Set();
					this.specifiers.set(name, specifiers);
				}
				specifiers.add(value || name);
			}
		} else {
			this.specifiers = specifiers;
		}
		this.defaultImport = defaultImport;
	}

	/**
	 * @param {ExternalModuleInitFragment} other other
	 * @returns {ExternalModuleInitFragment} ExternalModuleInitFragment
	 */
	merge(other) {
		const newSpecifiersMap = new Map(this.specifiers);
		for (const [name, specifiers] of other.specifiers) {
			if (newSpecifiersMap.has(name)) {
				const currentSpecifiers =
					/** @type {Set<string>} */
					(newSpecifiersMap.get(name));
				for (const spec of specifiers) currentSpecifiers.add(spec);
			} else {
				newSpecifiersMap.set(name, specifiers);
			}
		}
		return new ExternalModuleInitFragment(
			this.importedModule,
			newSpecifiersMap,
			this.defaultImport
		);
	}

	/**
	 * Returns the source code that will be included as initialization code.
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent({ runtimeRequirements }) {
		/** @type {string[]} */
		const namedImports = [];

		for (const [name, specifiers] of this.specifiers) {
			for (const spec of specifiers) {
				if (spec === name) {
					namedImports.push(name);
				} else {
					namedImports.push(`${name} as ${spec}`);
				}
			}
		}

		let importsString =
			namedImports.length > 0 ? `{${namedImports.join(",")}}` : "";

		if (this.defaultImport) {
			importsString = `${this.defaultImport}${
				importsString ? `, ${importsString}` : ""
			}`;
		}

		return `import ${importsString} from ${JSON.stringify(
			this.importedModule
		)};\n`;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		super.serialize(context);
		const { write } = context;
		write(this.importedModule);
		write(this.specifiers);
		write(this.defaultImport);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		super.deserialize(context);
		const { read } = context;
		this.importedModule = read();
		this.specifiers = read();
		this.defaultImport = read();
	}
}

makeSerializable(
	ExternalModuleInitFragment,
	"webpack/lib/dependencies/ExternalModuleInitFragment"
);

module.exports = ExternalModuleInitFragment;
