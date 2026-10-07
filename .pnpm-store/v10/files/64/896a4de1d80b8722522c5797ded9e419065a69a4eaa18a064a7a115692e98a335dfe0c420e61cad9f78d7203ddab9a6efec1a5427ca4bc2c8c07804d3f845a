/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Haijie Xie @hai-x
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Compilation = require("./Compilation");
const HotUpdateChunk = require("./HotUpdateChunk");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Chunk").ChunkName} ChunkName */
/** @typedef {import("./Chunk").ChunkId} ChunkId */
/** @typedef {import("./Compilation").Asset} Asset */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */

/** @typedef {import("../declarations/plugins/ManifestPlugin").ManifestPluginOptions} ManifestPluginOptions */
/** @typedef {import("../declarations/plugins/ManifestPlugin").ManifestObject} ManifestObject */
/** @typedef {import("../declarations/plugins/ManifestPlugin").ManifestEntrypoint} ManifestEntrypoint */
/** @typedef {import("../declarations/plugins/ManifestPlugin").ManifestItem} ManifestItem */

/** @typedef {(item: ManifestItem) => boolean} Filter */
/** @typedef {(manifest: ManifestObject) => ManifestObject} Generate */
/** @typedef {(manifest: ManifestObject) => string} Serialize */

const PLUGIN_NAME = "ManifestPlugin";

/**
 * Returns extname.
 * @param {string} filename filename
 * @returns {string} extname
 */
const extname = (filename) => {
	const replaced = filename.replace(/\?.*/, "");
	const split = replaced.split(".");
	const last = split.pop();
	if (!last) return "";
	return last && /^(?:gz|br|map)$/i.test(last)
		? `${split.pop()}.${last}`
		: last;
};

const DEFAULT_PREFIX = "[publicpath]";
const DEFAULT_FILENAME = "manifest.json";

class ManifestPlugin {
	/**
	 * Creates an instance of ManifestPlugin.
	 * @param {ManifestPluginOptions} options options
	 */
	constructor(options = {}) {
		/** @type {ManifestPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../schemas/plugins/ManifestPlugin.json"),
				this.options,
				{
					name: "ManifestPlugin",
					baseDataPath: "options"
				},
				(options) => require("../schemas/plugins/ManifestPlugin.check")(options)
			);
		});

		const entrypoints =
			this.options.entrypoints !== undefined ? this.options.entrypoints : true;
		const serialize =
			this.options.serialize ||
			((manifest) => JSON.stringify(manifest, null, 2));

		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.processAssets.tap(
				{
					name: PLUGIN_NAME,
					stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
				},
				() => {
					const hashDigestLength = compilation.outputOptions.hashDigestLength;
					const publicPath = compilation.getPath(
						compilation.outputOptions.publicPath
					);

					/**
					 * Creates a hash reg exp.
					 * @param {string | string[]} value value
					 * @returns {RegExp} regexp to remove hash
					 */
					const createHashRegExp = (value) =>
						new RegExp(
							`(?:\\.${Array.isArray(value) ? `(${value.join("|")})` : value})(?=\\.)`,
							"gi"
						);

					/**
					 * Removes the provided name from the manifest plugin.
					 * @param {string} name name
					 * @param {AssetInfo | null} info asset info
					 * @returns {string} hash removed name
					 */
					const removeHash = (name, info) => {
						// Handles hashes that match configured `hashDigestLength`
						// i.e. index.XXXX.html -> index.html (html-webpack-plugin)
						if (hashDigestLength <= 0) return name;
						const reg = createHashRegExp(`[a-f0-9]{${hashDigestLength},32}`);
						return name.replace(reg, "");
					};

					/**
					 * Returns chunk name or chunk id.
					 * @param {Chunk} chunk chunk
					 * @returns {ChunkName | ChunkId} chunk name or chunk id
					 */
					const getName = (chunk) => {
						if (chunk.name) return chunk.name;

						return chunk.id;
					};

					/** @type {ManifestObject} */
					let manifest = {};

					if (entrypoints) {
						/** @type {ManifestObject["entrypoints"]} */
						const entrypoints = {};

						for (const [name, entrypoint] of compilation.entrypoints) {
							/** @type {string[]} */
							const imports = [];

							for (const chunk of entrypoint.chunks) {
								for (const file of chunk.files) {
									const name = getName(chunk);

									imports.push(name ? `${name}.${extname(file)}` : file);
								}
							}

							/** @type {ManifestEntrypoint} */
							const item = { imports };
							const parents = entrypoint
								.getParents()
								.map((item) => /** @type {string} */ (item.name));

							if (parents.length > 0) {
								item.parents = parents;
							}

							entrypoints[name] = item;
						}

						manifest.entrypoints = entrypoints;
					}

					/** @type {ManifestObject["assets"]} */
					const assets = {};

					/** @type {Set<string>} */
					const added = new Set();

					/**
					 * Processes the provided file.
					 * @param {string} file file
					 * @param {string=} usedName usedName
					 * @returns {void}
					 */
					const handleFile = (file, usedName) => {
						if (added.has(file)) return;
						added.add(file);

						const asset = compilation.getAsset(file);
						if (!asset) return;
						const sourceFilename = asset.info.sourceFilename;
						const name =
							usedName ||
							sourceFilename ||
							// Fallback for unofficial plugins, just remove hash from filename
							removeHash(file, asset.info);

						const prefix = (this.options.prefix || DEFAULT_PREFIX).replace(
							/\[publicpath\]/gi,
							() => (publicPath === "auto" ? "/" : publicPath)
						);
						/** @type {ManifestItem} */
						const item = { file: prefix + file };

						if (sourceFilename) {
							item.src = sourceFilename;
						}

						if (this.options.filter) {
							const needKeep = this.options.filter(item);

							if (!needKeep) {
								return;
							}
						}

						assets[name] = item;
					};

					for (const chunk of compilation.chunks) {
						if (chunk instanceof HotUpdateChunk) continue;

						for (const auxiliaryFile of chunk.auxiliaryFiles) {
							handleFile(auxiliaryFile);
						}

						const name = getName(chunk);

						for (const file of chunk.files) {
							handleFile(file, name ? `${name}.${extname(file)}` : file);
						}
					}

					for (const asset of compilation.getAssets()) {
						if (asset.info.hotModuleReplacement) {
							continue;
						}

						handleFile(asset.name);
					}

					manifest.assets = assets;

					if (this.options.generate) {
						manifest = this.options.generate(manifest);
					}

					compilation.emitAsset(
						this.options.filename || DEFAULT_FILENAME,
						new RawSource(serialize(manifest)),
						{ manifest: true }
					);
				}
			);
		});
	}
}

module.exports = ManifestPlugin;
