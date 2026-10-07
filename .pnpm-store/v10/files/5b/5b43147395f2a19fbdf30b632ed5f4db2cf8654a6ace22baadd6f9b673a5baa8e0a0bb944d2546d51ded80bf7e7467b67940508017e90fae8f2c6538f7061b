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
/** @typedef {Map<string, Set<string>>} ImportSpecifiers */

/**
 * @extends {InitFragment<GenerateContext>}
 */
class ExternalModuleInitFragment extends InitFragment {
	/**
	 * @param {string} importedModule imported module
	 * @param {Array<{ name: string, value?: string }> | ImportSpecifiers} specifiers import specifiers
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
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent({ runtimeRequirements }) {
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
		)};`;
	}

	/**
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
