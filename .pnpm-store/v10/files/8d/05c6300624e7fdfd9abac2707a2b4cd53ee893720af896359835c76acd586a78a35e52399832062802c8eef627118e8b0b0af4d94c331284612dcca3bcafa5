/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const Compilation = require("./Compilation");
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const Template = require("./Template");
const createSchemaValidation = require("./util/create-schema-validation");

/** @typedef {import("../declarations/plugins/BannerPlugin").BannerFunction} BannerFunction */
/** @typedef {import("../declarations/plugins/BannerPlugin").BannerPluginArgument} BannerPluginArgument */
/** @typedef {import("../declarations/plugins/BannerPlugin").BannerPluginOptions} BannerPluginOptions */
/** @typedef {import("./Compilation").PathData} PathData */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */

const validate = createSchemaValidation(
	/** @type {(function(typeof import("../schemas/plugins/BannerPlugin.json")): boolean)} */
	(require("../schemas/plugins/BannerPlugin.check.js")),
	() => require("../schemas/plugins/BannerPlugin.json"),
	{
		name: "Banner Plugin",
		baseDataPath: "options"
	}
);

/**
 * @param {string} str string to wrap
 * @returns {string} wrapped string
 */
const wrapComment = str => {
	if (!str.includes("\n")) {
		return Template.toComment(str);
	}
	return `/*!\n * ${str
		.replace(/\*\//g, "* /")
		.split("\n")
		.join("\n * ")
		.replace(/\s+\n/g, "\n")
		.trimEnd()}\n */`;
};

class BannerPlugin {
	/**
	 * @param {BannerPluginArgument} options options object
	 */
	constructor(options) {
		if (typeof options === "string" || typeof options === "function") {
			options = {
				banner: options
			};
		}

		validate(options);

		this.options = options;

		const bannerOption = options.banner;
		if (typeof bannerOption === "function") {
			const getBanner = bannerOption;
			/** @type {BannerFunction} */
			this.banner = this.options.raw
				? getBanner
				: /** @type {BannerFunction} */ data => wrapComment(getBanner(data));
		} else {
			const banner = this.options.raw
				? bannerOption
				: wrapComment(bannerOption);
			/** @type {BannerFunction} */
			this.banner = () => banner;
		}
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		const banner = this.banner;
		const matchObject = ModuleFilenameHelpers.matchObject.bind(
			undefined,
			options
		);
		const cache = new WeakMap();
		const stage =
			this.options.stage || Compilation.PROCESS_ASSETS_STAGE_ADDITIONS;

		compiler.hooks.compilation.tap("BannerPlugin", compilation => {
			compilation.hooks.processAssets.tap(
				{
					name: "BannerPlugin",
					stage
				},
				() => {
					for (const chunk of compilation.chunks) {
						if (options.entryOnly && !chunk.canBeInitial()) {
							continue;
						}

						for (const file of chunk.files) {
							if (!matchObject(file)) {
								continue;
							}

							/** @type {PathData} */
							const data = { chunk, filename: file };

							const comment = compilation.getPath(
								/** @type {TemplatePath} */
								(banner),
								data
							);

							compilation.updateAsset(file, old => {
								const cached = cache.get(old);
								if (!cached || cached.comment !== comment) {
									const source = options.footer
										? new ConcatSource(old, "\n", comment)
										: new ConcatSource(comment, "\n", old);
									cache.set(old, { source, comment });
									return source;
								}
								return cached.source;
							});
						}
					}
				}
			);
		});
	}
}

module.exports = BannerPlugin;
