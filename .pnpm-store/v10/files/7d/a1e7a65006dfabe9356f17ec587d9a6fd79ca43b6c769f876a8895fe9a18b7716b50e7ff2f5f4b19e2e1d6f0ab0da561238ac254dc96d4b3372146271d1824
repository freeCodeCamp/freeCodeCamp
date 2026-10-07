/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");
const createSchemaValidation = require("../util/create-schema-validation");
const createHash = require("../util/createHash");
const {
	getUsedModuleIdsAndModules,
	getFullModuleName
} = require("./IdHelpers");

/** @typedef {import("../../declarations/plugins/HashedModuleIdsPlugin").HashedModuleIdsPluginOptions} HashedModuleIdsPluginOptions */
/** @typedef {import("../Compiler")} Compiler */

const validate = createSchemaValidation(
	require("../../schemas/plugins/HashedModuleIdsPlugin.check.js"),
	() => require("../../schemas/plugins/HashedModuleIdsPlugin.json"),
	{
		name: "Hashed Module Ids Plugin",
		baseDataPath: "options"
	}
);

class HashedModuleIdsPlugin {
	/**
	 * @param {HashedModuleIdsPluginOptions=} options options object
	 */
	constructor(options = {}) {
		validate(options);

		/** @type {HashedModuleIdsPluginOptions} */
		this.options = {
			context: undefined,
			hashFunction: "md4",
			hashDigest: "base64",
			hashDigestLength: 4,
			...options
		};
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		compiler.hooks.compilation.tap("HashedModuleIdsPlugin", compilation => {
			compilation.hooks.moduleIds.tap("HashedModuleIdsPlugin", () => {
				const chunkGraph = compilation.chunkGraph;
				const context = this.options.context
					? this.options.context
					: compiler.context;

				const [usedIds, modules] = getUsedModuleIdsAndModules(compilation);
				const modulesInNaturalOrder = modules.sort(
					compareModulesByPreOrderIndexOrIdentifier(compilation.moduleGraph)
				);
				for (const module of modulesInNaturalOrder) {
					const ident = getFullModuleName(module, context, compiler.root);
					const hash = createHash(
						/** @type {NonNullable<HashedModuleIdsPluginOptions["hashFunction"]>} */ (
							options.hashFunction
						)
					);
					hash.update(ident || "");
					const hashId = /** @type {string} */ (
						hash.digest(options.hashDigest)
					);
					let len = options.hashDigestLength;
					while (usedIds.has(hashId.slice(0, len)))
						/** @type {number} */ (len)++;
					const moduleId = hashId.slice(0, len);
					chunkGraph.setModuleId(module, moduleId);
					usedIds.add(moduleId);
				}
			});
		});
	}
}

module.exports = HashedModuleIdsPlugin;
