/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncBailHook } = require("tapable");
const { RawSource, CachedSource, CompatSource } = require("webpack-sources");
const Compilation = require("../Compilation");
const WebpackError = require("../WebpackError");
const { compareSelect, compareStrings } = require("../util/comparators");
const createHash = require("../util/createHash");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Cache").Etag} Etag */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {typeof import("../util/Hash")} Hash */

const EMPTY_SET = new Set();

/**
 * @template T
 * @param {T | T[]} itemOrItems item or items
 * @param {Set<T>} list list
 */
const addToList = (itemOrItems, list) => {
	if (Array.isArray(itemOrItems)) {
		for (const item of itemOrItems) {
			list.add(item);
		}
	} else if (itemOrItems) {
		list.add(itemOrItems);
	}
};

/**
 * @template T
 * @param {T[]} input list
 * @param {function(T): Buffer} fn map function
 * @returns {Buffer[]} buffers without duplicates
 */
const mapAndDeduplicateBuffers = (input, fn) => {
	// Buffer.equals compares size first so this should be efficient enough
	// If it becomes a performance problem we can use a map and group by size
	// instead of looping over all assets.
	const result = [];
	outer: for (const value of input) {
		const buf = fn(value);
		for (const other of result) {
			if (buf.equals(other)) continue outer;
		}
		result.push(buf);
	}
	return result;
};

/**
 * Escapes regular expression metacharacters
 * @param {string} str String to quote
 * @returns {string} Escaped string
 */
const quoteMeta = str => str.replace(/[-[\]\\/{}()*+?.^$|]/g, "\\$&");

const cachedSourceMap = new WeakMap();

/**
 * @param {Source} source source
 * @returns {CachedSource} cached source
 */
const toCachedSource = source => {
	if (source instanceof CachedSource) {
		return source;
	}
	const entry = cachedSourceMap.get(source);
	if (entry !== undefined) return entry;
	const newSource = new CachedSource(CompatSource.from(source));
	cachedSourceMap.set(source, newSource);
	return newSource;
};

/** @typedef {Set<string>} OwnHashes */
/** @typedef {Set<string>} ReferencedHashes */
/** @typedef {Set<string>} Hashes */

/**
 * @typedef {object} AssetInfoForRealContentHash
 * @property {string} name
 * @property {AssetInfo} info
 * @property {Source} source
 * @property {RawSource | undefined} newSource
 * @property {RawSource | undefined} newSourceWithoutOwn
 * @property {string} content
 * @property {OwnHashes | undefined} ownHashes
 * @property {Promise<void> | undefined} contentComputePromise
 * @property {Promise<void> | undefined} contentComputeWithoutOwnPromise
 * @property {ReferencedHashes | undefined} referencedHashes
 * @property {Hashes} hashes
 */

/**
 * @typedef {object} CompilationHooks
 * @property {SyncBailHook<[Buffer[], string], string | void>} updateHash
 */

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

class RealContentHashPlugin {
	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {CompilationHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				updateHash: new SyncBailHook(["content", "oldHash"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * @param {object} options options object
	 * @param {string | Hash} options.hashFunction the hash function to use
	 * @param {string} options.hashDigest the hash digest to use
	 */
	constructor({ hashFunction, hashDigest }) {
		this._hashFunction = hashFunction;
		this._hashDigest = hashDigest;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("RealContentHashPlugin", compilation => {
			const cacheAnalyse = compilation.getCache(
				"RealContentHashPlugin|analyse"
			);
			const cacheGenerate = compilation.getCache(
				"RealContentHashPlugin|generate"
			);
			const hooks = RealContentHashPlugin.getCompilationHooks(compilation);
			compilation.hooks.processAssets.tapPromise(
				{
					name: "RealContentHashPlugin",
					stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_HASH
				},
				async () => {
					const assets = compilation.getAssets();
					/** @type {AssetInfoForRealContentHash[]} */
					const assetsWithInfo = [];
					/** @type {Map<string, [AssetInfoForRealContentHash]>} */
					const hashToAssets = new Map();
					for (const { source, info, name } of assets) {
						const cachedSource = toCachedSource(source);
						const content = /** @type {string} */ (cachedSource.source());
						/** @type {Hashes} */
						const hashes = new Set();
						addToList(info.contenthash, hashes);
						/** @type {AssetInfoForRealContentHash} */
						const data = {
							name,
							info,
							source: cachedSource,
							newSource: undefined,
							newSourceWithoutOwn: undefined,
							content,
							ownHashes: undefined,
							contentComputePromise: undefined,
							contentComputeWithoutOwnPromise: undefined,
							referencedHashes: undefined,
							hashes
						};
						assetsWithInfo.push(data);
						for (const hash of hashes) {
							const list = hashToAssets.get(hash);
							if (list === undefined) {
								hashToAssets.set(hash, [data]);
							} else {
								list.push(data);
							}
						}
					}
					if (hashToAssets.size === 0) return;
					const hashRegExp = new RegExp(
						Array.from(hashToAssets.keys(), quoteMeta).join("|"),
						"g"
					);
					await Promise.all(
						assetsWithInfo.map(async asset => {
							const { name, source, content, hashes } = asset;
							if (Buffer.isBuffer(content)) {
								asset.referencedHashes = EMPTY_SET;
								asset.ownHashes = EMPTY_SET;
								return;
							}
							const etag = cacheAnalyse.mergeEtags(
								cacheAnalyse.getLazyHashedEtag(source),
								Array.from(hashes).join("|")
							);
							[asset.referencedHashes, asset.ownHashes] =
								await cacheAnalyse.providePromise(name, etag, () => {
									const referencedHashes = new Set();
									const ownHashes = new Set();
									const inContent = content.match(hashRegExp);
									if (inContent) {
										for (const hash of inContent) {
											if (hashes.has(hash)) {
												ownHashes.add(hash);
												continue;
											}
											referencedHashes.add(hash);
										}
									}
									return [referencedHashes, ownHashes];
								});
						})
					);
					/**
					 * @param {string} hash the hash
					 * @returns {undefined | ReferencedHashes} the referenced hashes
					 */
					const getDependencies = hash => {
						const assets = hashToAssets.get(hash);
						if (!assets) {
							const referencingAssets = assetsWithInfo.filter(asset =>
								/** @type {ReferencedHashes} */ (asset.referencedHashes).has(
									hash
								)
							);
							const err = new WebpackError(`RealContentHashPlugin
Some kind of unexpected caching problem occurred.
An asset was cached with a reference to another asset (${hash}) that's not in the compilation anymore.
Either the asset was incorrectly cached, or the referenced asset should also be restored from cache.
Referenced by:
${referencingAssets
	.map(a => {
		const match = new RegExp(`.{0,20}${quoteMeta(hash)}.{0,20}`).exec(
			a.content
		);
		return ` - ${a.name}: ...${match ? match[0] : "???"}...`;
	})
	.join("\n")}`);
							compilation.errors.push(err);
							return;
						}
						const hashes = new Set();
						for (const { referencedHashes, ownHashes } of assets) {
							if (!(/** @type {OwnHashes} */ (ownHashes).has(hash))) {
								for (const hash of /** @type {OwnHashes} */ (ownHashes)) {
									hashes.add(hash);
								}
							}
							for (const hash of /** @type {ReferencedHashes} */ (
								referencedHashes
							)) {
								hashes.add(hash);
							}
						}
						return hashes;
					};
					/**
					 * @param {string} hash the hash
					 * @returns {string} the hash info
					 */
					const hashInfo = hash => {
						const assets = hashToAssets.get(hash);
						return `${hash} (${Array.from(
							/** @type {AssetInfoForRealContentHash[]} */ (assets),
							a => a.name
						)})`;
					};
					const hashesInOrder = new Set();
					for (const hash of hashToAssets.keys()) {
						/**
						 * @param {string} hash the hash
						 * @param {Set<string>} stack stack of hashes
						 */
						const add = (hash, stack) => {
							const deps = getDependencies(hash);
							if (!deps) return;
							stack.add(hash);
							for (const dep of deps) {
								if (hashesInOrder.has(dep)) continue;
								if (stack.has(dep)) {
									throw new Error(
										`Circular hash dependency ${Array.from(
											stack,
											hashInfo
										).join(" -> ")} -> ${hashInfo(dep)}`
									);
								}
								add(dep, stack);
							}
							hashesInOrder.add(hash);
							stack.delete(hash);
						};
						if (hashesInOrder.has(hash)) continue;
						add(hash, new Set());
					}
					const hashToNewHash = new Map();
					/**
					 * @param {AssetInfoForRealContentHash} asset asset info
					 * @returns {Etag} etag
					 */
					const getEtag = asset =>
						cacheGenerate.mergeEtags(
							cacheGenerate.getLazyHashedEtag(asset.source),
							Array.from(
								/** @type {ReferencedHashes} */ (asset.referencedHashes),
								hash => hashToNewHash.get(hash)
							).join("|")
						);
					/**
					 * @param {AssetInfoForRealContentHash} asset asset info
					 * @returns {Promise<void>}
					 */
					const computeNewContent = asset => {
						if (asset.contentComputePromise) return asset.contentComputePromise;
						return (asset.contentComputePromise = (async () => {
							if (
								/** @type {OwnHashes} */ (asset.ownHashes).size > 0 ||
								Array.from(
									/** @type {ReferencedHashes} */
									(asset.referencedHashes)
								).some(hash => hashToNewHash.get(hash) !== hash)
							) {
								const identifier = asset.name;
								const etag = getEtag(asset);
								asset.newSource = await cacheGenerate.providePromise(
									identifier,
									etag,
									() => {
										const newContent = asset.content.replace(hashRegExp, hash =>
											hashToNewHash.get(hash)
										);
										return new RawSource(newContent);
									}
								);
							}
						})());
					};
					/**
					 * @param {AssetInfoForRealContentHash} asset asset info
					 * @returns {Promise<void>}
					 */
					const computeNewContentWithoutOwn = asset => {
						if (asset.contentComputeWithoutOwnPromise)
							return asset.contentComputeWithoutOwnPromise;
						return (asset.contentComputeWithoutOwnPromise = (async () => {
							if (
								/** @type {OwnHashes} */ (asset.ownHashes).size > 0 ||
								Array.from(
									/** @type {ReferencedHashes} */
									(asset.referencedHashes)
								).some(hash => hashToNewHash.get(hash) !== hash)
							) {
								const identifier = `${asset.name}|without-own`;
								const etag = getEtag(asset);
								asset.newSourceWithoutOwn = await cacheGenerate.providePromise(
									identifier,
									etag,
									() => {
										const newContent = asset.content.replace(
											hashRegExp,
											hash => {
												if (
													/** @type {OwnHashes} */ (asset.ownHashes).has(hash)
												) {
													return "";
												}
												return hashToNewHash.get(hash);
											}
										);
										return new RawSource(newContent);
									}
								);
							}
						})());
					};
					const comparator = compareSelect(a => a.name, compareStrings);
					for (const oldHash of hashesInOrder) {
						const assets =
							/** @type {AssetInfoForRealContentHash[]} */
							(hashToAssets.get(oldHash));
						assets.sort(comparator);
						await Promise.all(
							assets.map(asset =>
								/** @type {OwnHashes} */ (asset.ownHashes).has(oldHash)
									? computeNewContentWithoutOwn(asset)
									: computeNewContent(asset)
							)
						);
						const assetsContent = mapAndDeduplicateBuffers(assets, asset => {
							if (/** @type {OwnHashes} */ (asset.ownHashes).has(oldHash)) {
								return asset.newSourceWithoutOwn
									? asset.newSourceWithoutOwn.buffer()
									: asset.source.buffer();
							}
							return asset.newSource
								? asset.newSource.buffer()
								: asset.source.buffer();
						});
						let newHash = hooks.updateHash.call(assetsContent, oldHash);
						if (!newHash) {
							const hash = createHash(this._hashFunction);
							if (compilation.outputOptions.hashSalt) {
								hash.update(compilation.outputOptions.hashSalt);
							}
							for (const content of assetsContent) {
								hash.update(content);
							}
							const digest = hash.digest(this._hashDigest);
							newHash = /** @type {string} */ (digest.slice(0, oldHash.length));
						}
						hashToNewHash.set(oldHash, newHash);
					}
					await Promise.all(
						assetsWithInfo.map(async asset => {
							await computeNewContent(asset);
							const newName = asset.name.replace(hashRegExp, hash =>
								hashToNewHash.get(hash)
							);

							const infoUpdate = {};
							const hash = asset.info.contenthash;
							infoUpdate.contenthash = Array.isArray(hash)
								? hash.map(hash => hashToNewHash.get(hash))
								: hashToNewHash.get(hash);

							if (asset.newSource !== undefined) {
								compilation.updateAsset(
									asset.name,
									asset.newSource,
									infoUpdate
								);
							} else {
								compilation.updateAsset(asset.name, asset.source, infoUpdate);
							}

							if (asset.name !== newName) {
								compilation.renameAsset(asset.name, newName);
							}
						})
					);
				}
			);
		});
	}
}

module.exports = RealContentHashPlugin;
