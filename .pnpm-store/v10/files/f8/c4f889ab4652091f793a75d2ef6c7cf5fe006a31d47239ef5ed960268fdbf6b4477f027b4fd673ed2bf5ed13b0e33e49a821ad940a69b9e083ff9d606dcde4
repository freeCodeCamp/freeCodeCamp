/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DelegatedModule = require("./DelegatedModule");

/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptions} DllReferencePluginOptions */
/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsContent} DllReferencePluginOptionsContent */
/** @typedef {import("./DelegatedModule").DelegatedModuleData} DelegatedModuleData */
/** @typedef {import("./DelegatedModule").DelegatedModuleSourceRequest} DelegatedModuleSourceRequest */
/** @typedef {import("./DelegatedModule").DelegatedModuleType} DelegatedModuleType */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("./util/identifier").AssociatedObjectForCache} AssociatedObjectForCache */

/**
 * Defines the options type used by this module.
 * @typedef {object} Options
 * @property {DelegatedModuleSourceRequest} source source
 * @property {NonNullable<DllReferencePluginOptions["context"]>} context absolute context path to which lib ident is relative to
 * @property {DllReferencePluginOptionsContent} content content
 * @property {DllReferencePluginOptions["type"]} type type
 * @property {DllReferencePluginOptions["extensions"]} extensions extensions
 * @property {DllReferencePluginOptions["scope"]} scope scope
 * @property {AssociatedObjectForCache=} associatedObjectForCache object for caching
 */

const PLUGIN_NAME = "DelegatedModuleFactoryPlugin";

class DelegatedModuleFactoryPlugin {
	/**
	 * Creates an instance of DelegatedModuleFactoryPlugin.
	 * @param {Options} options options
	 */
	constructor(options) {
		this.options = options;
		options.type = options.type || "require";
		options.extensions = options.extensions || ["", ".js", ".json", ".wasm"];
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory
	 * @returns {void}
	 */
	apply(normalModuleFactory) {
		const scope = this.options.scope;
		if (scope) {
			normalModuleFactory.hooks.factorize.tapAsync(
				PLUGIN_NAME,
				(data, callback) => {
					const [dependency] = data.dependencies;
					const { request } = dependency;
					if (request && request.startsWith(`${scope}/`)) {
						const innerRequest = `.${request.slice(scope.length)}`;
						/** @type {undefined | DelegatedModuleData} */
						let resolved;
						if (innerRequest in this.options.content) {
							resolved = this.options.content[innerRequest];
							return callback(
								null,
								new DelegatedModule(
									this.options.source,
									resolved,
									/** @type {DelegatedModuleType} */
									(this.options.type),
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
										/** @type {DelegatedModuleType} */
										(this.options.type),
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
			normalModuleFactory.hooks.module.tap(PLUGIN_NAME, (module) => {
				const request = module.libIdent(this.options);
				if (request && request in this.options.content) {
					const resolved = this.options.content[request];
					return new DelegatedModule(
						this.options.source,
						resolved,
						/** @type {DelegatedModuleType} */
						(this.options.type),
						request,
						module
					);
				}
				return module;
			});
		}
	}
}

module.exports = DelegatedModuleFactoryPlugin;
