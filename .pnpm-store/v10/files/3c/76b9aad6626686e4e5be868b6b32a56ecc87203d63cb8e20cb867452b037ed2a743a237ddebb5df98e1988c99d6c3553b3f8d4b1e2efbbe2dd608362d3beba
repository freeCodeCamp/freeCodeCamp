/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { JSON_MODULE_TYPE } = require("../ModuleTypeConstants");
const JsonGenerator = require("./JsonGenerator");
const JsonParser = require("./JsonParser");

/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "JsonModulesPlugin";

/**
 * The JsonModulesPlugin is the entrypoint plugin for the json modules feature.
 * It adds the json module type to the compiler and registers the json parser and generator.
 */
class JsonModulesPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				normalModuleFactory.hooks.createParser
					.for(JSON_MODULE_TYPE)
					.tap(PLUGIN_NAME, (parserOptions) => {
						compiler.validate(
							() =>
								require("../../schemas/plugins/json/JsonModulesPluginParser.json"),
							parserOptions,
							{
								name: "Json Modules Plugin",
								baseDataPath: "parser"
							},
							(options) =>
								require("../../schemas/plugins/json/JsonModulesPluginParser.check")(
									options
								)
						);

						return new JsonParser(parserOptions);
					});
				normalModuleFactory.hooks.createGenerator
					.for(JSON_MODULE_TYPE)
					.tap(PLUGIN_NAME, (generatorOptions) => {
						compiler.validate(
							() =>
								require("../../schemas/plugins/json/JsonModulesPluginGenerator.json"),
							generatorOptions,
							{
								name: "Json Modules Plugin",
								baseDataPath: "generator"
							},
							(options) =>
								require("../../schemas/plugins/json/JsonModulesPluginGenerator.check")(
									options
								)
						);

						return new JsonGenerator(generatorOptions);
					});
			}
		);
	}
}

module.exports = JsonModulesPlugin;
