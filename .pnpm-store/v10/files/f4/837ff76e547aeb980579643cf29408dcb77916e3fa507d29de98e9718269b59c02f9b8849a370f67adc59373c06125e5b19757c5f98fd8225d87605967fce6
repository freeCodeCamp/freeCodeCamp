/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { validate } = require("schema-utils");

/* cSpell:disable */
const DID_YOU_MEAN = {
	rules: "module.rules",
	loaders: "module.rules or module.rules.*.use",
	query: "module.rules.*.options (BREAKING CHANGE since webpack 5)",
	noParse: "module.noParse",
	filename: "output.filename or module.rules.*.generator.filename",
	file: "output.filename",
	chunkFilename: "output.chunkFilename",
	chunkfilename: "output.chunkFilename",
	ecmaVersion:
		"output.environment (output.ecmaVersion was a temporary configuration option during webpack 5 beta)",
	ecmaversion:
		"output.environment (output.ecmaVersion was a temporary configuration option during webpack 5 beta)",
	ecma: "output.environment (output.ecmaVersion was a temporary configuration option during webpack 5 beta)",
	path: "output.path",
	pathinfo: "output.pathinfo",
	pathInfo: "output.pathinfo",
	jsonpFunction: "output.chunkLoadingGlobal (BREAKING CHANGE since webpack 5)",
	chunkCallbackName:
		"output.chunkLoadingGlobal (BREAKING CHANGE since webpack 5)",
	jsonpScriptType: "output.scriptType (BREAKING CHANGE since webpack 5)",
	hotUpdateFunction: "output.hotUpdateGlobal (BREAKING CHANGE since webpack 5)",
	splitChunks: "optimization.splitChunks",
	immutablePaths: "snapshot.immutablePaths",
	managedPaths: "snapshot.managedPaths",
	maxModules: "stats.modulesSpace (BREAKING CHANGE since webpack 5)",
	hashedModuleIds:
		'optimization.moduleIds: "hashed" (BREAKING CHANGE since webpack 5)',
	namedChunks:
		'optimization.chunkIds: "named" (BREAKING CHANGE since webpack 5)',
	namedModules:
		'optimization.moduleIds: "named" (BREAKING CHANGE since webpack 5)',
	occurrenceOrder:
		'optimization.chunkIds: "size" and optimization.moduleIds: "size" (BREAKING CHANGE since webpack 5)',
	automaticNamePrefix:
		"optimization.splitChunks.[cacheGroups.*].idHint (BREAKING CHANGE since webpack 5)",
	noEmitOnErrors:
		"optimization.emitOnErrors (BREAKING CHANGE since webpack 5: logic is inverted to avoid negative flags)",
	Buffer:
		"to use the ProvidePlugin to process the Buffer variable to modules as polyfill\n" +
		"BREAKING CHANGE: webpack 5 no longer provided Node.js polyfills by default.\n" +
		"Note: if you are using 'node.Buffer: false', you can just remove that as this is the default behavior now.\n" +
		"To provide a polyfill to modules use:\n" +
		'new ProvidePlugin({ Buffer: ["buffer", "Buffer"] }) and npm install buffer.',
	process:
		"to use the ProvidePlugin to process the process variable to modules as polyfill\n" +
		"BREAKING CHANGE: webpack 5 no longer provided Node.js polyfills by default.\n" +
		"Note: if you are using 'node.process: false', you can just remove that as this is the default behavior now.\n" +
		"To provide a polyfill to modules use:\n" +
		'new ProvidePlugin({ process: "process" }) and npm install buffer.'
};

const REMOVED = {
	concord:
		"BREAKING CHANGE: resolve.concord has been removed and is no longer available.",
	devtoolLineToLine:
		"BREAKING CHANGE: output.devtoolLineToLine has been removed and is no longer available."
};
/* cSpell:enable */

/**
 * @param {Parameters<typeof validate>[0]} schema a json schema
 * @param {Parameters<typeof validate>[1]} options the options that should be validated
 * @param {Parameters<typeof validate>[2]=} validationConfiguration configuration for generating errors
 * @returns {void}
 */
const validateSchema = (schema, options, validationConfiguration) => {
	validate(
		schema,
		options,
		validationConfiguration || {
			name: "Webpack",
			postFormatter: (formattedError, error) => {
				const children = error.children;
				if (
					children &&
					children.some(
						child =>
							child.keyword === "absolutePath" &&
							child.instancePath === "/output/filename"
					)
				) {
					return `${formattedError}\nPlease use output.path to specify absolute path and output.filename for the file name.`;
				}

				if (
					children &&
					children.some(
						child =>
							child.keyword === "pattern" && child.instancePath === "/devtool"
					)
				) {
					return (
						`${formattedError}\n` +
						"BREAKING CHANGE since webpack 5: The devtool option is more strict.\n" +
						"Please strictly follow the order of the keywords in the pattern."
					);
				}

				if (error.keyword === "additionalProperties") {
					const params = error.params;
					if (
						Object.prototype.hasOwnProperty.call(
							DID_YOU_MEAN,
							params.additionalProperty
						)
					) {
						return `${formattedError}\nDid you mean ${
							DID_YOU_MEAN[
								/** @type {keyof DID_YOU_MEAN} */ (params.additionalProperty)
							]
						}?`;
					}

					if (
						Object.prototype.hasOwnProperty.call(
							REMOVED,
							params.additionalProperty
						)
					) {
						return `${formattedError}\n${
							REMOVED[/** @type {keyof REMOVED} */ (params.additionalProperty)]
						}?`;
					}

					if (!error.instancePath) {
						if (params.additionalProperty === "debug") {
							return (
								`${formattedError}\n` +
								"The 'debug' property was removed in webpack 2.0.0.\n" +
								"Loaders should be updated to allow passing this option via loader options in module.rules.\n" +
								"Until loaders are updated one can use the LoaderOptionsPlugin to switch loaders into debug mode:\n" +
								"plugins: [\n" +
								"  new webpack.LoaderOptionsPlugin({\n" +
								"    debug: true\n" +
								"  })\n" +
								"]"
							);
						}

						if (params.additionalProperty) {
							return (
								`${formattedError}\n` +
								"For typos: please correct them.\n" +
								"For loader options: webpack >= v2.0.0 no longer allows custom properties in configuration.\n" +
								"  Loaders should be updated to allow passing options via loader options in module.rules.\n" +
								"  Until loaders are updated one can use the LoaderOptionsPlugin to pass these options to the loader:\n" +
								"  plugins: [\n" +
								"    new webpack.LoaderOptionsPlugin({\n" +
								"      // test: /\\.xxx$/, // may apply this only for some modules\n" +
								"      options: {\n" +
								`        ${params.additionalProperty}: …\n` +
								"      }\n" +
								"    })\n" +
								"  ]"
							);
						}
					}
				}

				return formattedError;
			}
		}
	);
};
module.exports = validateSchema;
