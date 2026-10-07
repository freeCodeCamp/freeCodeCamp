/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DelegatedModule = require("./DelegatedModule");

/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptions} DllReferencePluginOptions */
/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsContent} DllReferencePluginOptionsContent */
/** @typedef {import("./DelegatedModule").Data} Data */
/** @typedef {import("./DelegatedModule").SourceRequest} SourceRequest */
/** @typedef {import("./DelegatedModule").Type} Type */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */

/**
 * @typedef {object} Options
 * @property {SourceRequest} source source
 * @property {NonNullable<DllReferencePluginOptions["context"]>} context absolute context path to which lib ident is relative to
 * @property {DllReferencePluginOptionsContent} content content
 * @property {DllReferencePluginOptions["type"]} type type
 * @property {DllReferencePluginOptions["extensions"]} extensions extensions
 * @property {DllReferencePluginOptions["scope"]} scope scope
 * @property {object=} associatedObjectForCache object for caching
 */

class DelegatedModuleFactoryPlugin {
	/**
	 * @param {Options} options options
	 */
	constructor(options) {
		this.options = options;
		options.type = options.type || "require";
		options.extensions = options.extensions || ["", ".js", ".json", ".wasm"];
	}

	/**
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory
	 * @returns {void}
	 */
	apply(normalModuleFactory) {
		const scope = this.options.scope;
		if (scope) {
			normalModuleFactory.hooks.factorize.tapAsync(
				"DelegatedModuleFactoryPlugin",
				(data, callback) => {
					const [dependency] = data.dependencies;
					const { request } = dependency;
					if (request && request.startsWith(`${scope}/`)) {
						const innerRequest = `.${request.slice(scope.length)}`;
						let resolved;
						if (innerRequest in this.options.content) {
							resolved = this.options.content[innerRequest];
							return callback(
								null,
								new DelegatedModule(
									this.options.source,
									resolved,
									/** @type {Type} */ (this.options.type),
									innerRequest,
									request
								)
							);
						}
						const extensions =
							/** @type {string[]} */
							(this.options.extensions);
						for (let i = 0; i < extensions.length; i++) {
							const extension = extensions[i];
							const requestPlusExt = innerRequest + extension;
							if (requestPlusExt in this.options.content) {
								resolved = this.options.content[requestPlusExt];
								return callback(
									null,
									new DelegatedModule(
										this.options.source,
										resolved,
										/** @type {Type} */ (this.options.type),
										requestPlusExt,
										request + extension
									)
								);
							}
						}
					}
					return callback();
				}
			);
		} else {
			normalModuleFactory.hooks.module.tap(
				"DelegatedModuleFactoryPlugin",
				module => {
					const request = module.libIdent(this.options);
					if (request && request in this.options.content) {
						const resolved = this.options.content[request];
						return new DelegatedModule(
							this.options.source,
							resolved,
							/** @type {Type} */ (this.options.type),
							request,
							module
						);
					}
					return module;
				}
			);
		}
	}
}
module.exports = DelegatedModuleFactoryPlugin;
