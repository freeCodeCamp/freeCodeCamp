/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { JSON_MODULE_TYPE } = require("../ModuleTypeConstants");
const createSchemaValidation = require("../util/create-schema-validation");
const JsonGenerator = require("./JsonGenerator");
const JsonParser = require("./JsonParser");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {Record<string, any>} RawJsonData */

const validate = createSchemaValidation(
	require("../../schemas/plugins/JsonModulesPluginParser.check.js"),
	() => require("../../schemas/plugins/JsonModulesPluginParser.json"),
	{
		name: "Json Modules Plugin",
		baseDataPath: "parser"
	}
);

const PLUGIN_NAME = "JsonModulesPlugin";

/**
 * The JsonModulesPlugin is the entrypoint plugin for the json modules feature.
 * It adds the json module type to the compiler and registers the json parser and generator.
 */
class JsonModulesPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				normalModuleFactory.hooks.createParser
					.for(JSON_MODULE_TYPE)
					.tap(PLUGIN_NAME, parserOptions => {
						validate(parserOptions);
						return new JsonParser(parserOptions);
					});
				normalModuleFactory.hooks.createGenerator
					.for(JSON_MODULE_TYPE)
					.tap(PLUGIN_NAME, () => new JsonGenerator());
			}
		);
	}
}

module.exports = JsonModulesPlugin;
