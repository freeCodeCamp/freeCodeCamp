/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const { parseOptions } = require("../container/options");
const ConsumeSharedPlugin = require("./ConsumeSharedPlugin");
const ProvideSharedPlugin = require("./ProvideSharedPlugin");
const { isRequiredVersion } = require("./utils");

/** @typedef {import("../../declarations/plugins/sharing/ConsumeSharedPlugin").ConsumeSharedPluginOptions} ConsumeSharedPluginOptions */
/** @typedef {import("../../declarations/plugins/sharing/ConsumeSharedPlugin").ConsumesConfig} ConsumesConfig */
/** @typedef {import("../../declarations/plugins/sharing/ProvideSharedPlugin").ProvideSharedPluginOptions} ProvideSharedPluginOptions */
/** @typedef {import("../../declarations/plugins/sharing/ProvideSharedPlugin").ProvidesConfig} ProvidesConfig */
/** @typedef {import("../../declarations/plugins/sharing/SharePlugin").SharePluginOptions} SharePluginOptions */
/** @typedef {import("../../declarations/plugins/sharing/SharePlugin").SharedConfig} SharedConfig */
/** @typedef {import("../Compiler")} Compiler */

class SharePlugin {
	/**
	 * @param {SharePluginOptions} options options
	 */
	constructor(options) {
		/** @type {[string, SharedConfig][]} */
		const sharedOptions = parseOptions(
			options.shared,
			(item, key) => {
				if (typeof item !== "string")
					throw new Error("Unexpected array in shared");
				/** @type {SharedConfig} */
				const config =
					item === key || !isRequiredVersion(item)
						? {
								import: item
							}
						: {
								import: key,
								requiredVersion: item
							};
				return config;
			},
			item => item
		);
		/** @type {Record<string, ConsumesConfig>[]} */
		const consumes = sharedOptions.map(([key, options]) => ({
			[key]: {
				import: options.import,
				shareKey: options.shareKey || key,
				shareScope: options.shareScope,
				requiredVersion: options.requiredVersion,
				strictVersion: options.strictVersion,
				singleton: options.singleton,
				packageName: options.packageName,
				eager: options.eager
			}
		}));
		/** @type {Record<string, ProvidesConfig>[]} */
		const provides = sharedOptions
			.filter(([, options]) => options.import !== false)
			.map(([key, options]) => ({
				[options.import || key]: {
					shareKey: options.shareKey || key,
					shareScope: options.shareScope,
					version: options.version,
					eager: options.eager
				}
			}));
		this._shareScope = options.shareScope;
		this._consumes = consumes;
		this._provides = provides;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		new ConsumeSharedPlugin({
			shareScope: this._shareScope,
			consumes: this._consumes
		}).apply(compiler);
		new ProvideSharedPlugin({
			shareScope: this._shareScope,
			provides: this._provides
		}).apply(compiler);
	}
}

module.exports = SharePlugin;
