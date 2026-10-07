/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { groupBy } = require("./util/ArrayHelpers");

/** @typedef {import("watchpack").TimeInfoEntries} TimeInfoEntries */
/** @typedef {import("../declarations/plugins/WatchIgnorePlugin").WatchIgnorePluginOptions} WatchIgnorePluginOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./util/fs").WatchFileSystem} WatchFileSystem */
/** @typedef {import("./util/fs").WatchMethod} WatchMethod */
/** @typedef {import("./util/fs").Watcher} Watcher */

const IGNORE_TIME_ENTRY = "ignore";

class IgnoringWatchFileSystem {
	/**
	 * Creates an instance of IgnoringWatchFileSystem.
	 * @param {WatchFileSystem} wfs original file system
	 * @param {WatchIgnorePluginOptions["paths"]} paths ignored paths
	 */
	constructor(wfs, paths) {
		this.wfs = wfs;
		this.paths = paths;
	}

	/** @type {WatchMethod} */
	watch(files, dirs, missing, startTime, options, callback, callbackUndelayed) {
		files = [...files];
		dirs = [...dirs];
		/**
		 * Returns true, if path is ignored.
		 * @param {string} path path to check
		 * @returns {boolean} true, if path is ignored
		 */
		const ignored = (path) =>
			this.paths.some((p) =>
				p instanceof RegExp ? p.test(path) : path.indexOf(p) === 0
			);

		const [ignoredFiles, notIgnoredFiles] = groupBy(
			/** @type {string[]} */
			(files),
			ignored
		);
		const [ignoredDirs, notIgnoredDirs] = groupBy(
			/** @type {string[]} */
			(dirs),
			ignored
		);

		const watcher = this.wfs.watch(
			notIgnoredFiles,
			notIgnoredDirs,
			missing,
			startTime,
			options,
			(err, fileTimestamps, dirTimestamps, changedFiles, removedFiles) => {
				if (err) return callback(err);
				for (const path of ignoredFiles) {
					/** @type {TimeInfoEntries} */
					(fileTimestamps).set(path, IGNORE_TIME_ENTRY);
				}

				for (const path of ignoredDirs) {
					/** @type {TimeInfoEntries} */
					(dirTimestamps).set(path, IGNORE_TIME_ENTRY);
				}

				callback(
					null,
					fileTimestamps,
					dirTimestamps,
					changedFiles,
					removedFiles
				);
			},
			callbackUndelayed
		);

		return {
			close: () => watcher.close(),
			pause: () => watcher.pause(),
			getContextTimeInfoEntries: () => {
				const dirTimestamps = watcher.getContextTimeInfoEntries();
				for (const path of ignoredDirs) {
					dirTimestamps.set(path, IGNORE_TIME_ENTRY);
				}
				return dirTimestamps;
			},
			getFileTimeInfoEntries: () => {
				const fileTimestamps = watcher.getFileTimeInfoEntries();
				for (const path of ignoredFiles) {
					fileTimestamps.set(path, IGNORE_TIME_ENTRY);
				}
				return fileTimestamps;
			},
			getInfo:
				watcher.getInfo &&
				(() => {
					const info =
						/** @type {NonNullable<Watcher["getInfo"]>} */
						(watcher.getInfo)();
					const { fileTimeInfoEntries, contextTimeInfoEntries } = info;
					for (const path of ignoredFiles) {
						fileTimeInfoEntries.set(path, IGNORE_TIME_ENTRY);
					}
					for (const path of ignoredDirs) {
						contextTimeInfoEntries.set(path, IGNORE_TIME_ENTRY);
					}
					return info;
				})
		};
	}
}

const PLUGIN_NAME = "WatchIgnorePlugin";

class WatchIgnorePlugin {
	/**
	 * Creates an instance of WatchIgnorePlugin.
	 * @param {WatchIgnorePluginOptions} options options
	 */
	constructor(options) {
		/** @type {WatchIgnorePluginOptions} */
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
				() => require("../schemas/plugins/WatchIgnorePlugin.json"),
				this.options,
				{
					name: "Watch Ignore Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../schemas/plugins/WatchIgnorePlugin.check")(options)
			);
		});
		compiler.hooks.afterEnvironment.tap(PLUGIN_NAME, () => {
			compiler.watchFileSystem = new IgnoringWatchFileSystem(
				/** @type {WatchFileSystem} */
				(compiler.watchFileSystem),
				this.options.paths
			);
		});
	}
}

module.exports = WatchIgnorePlugin;
