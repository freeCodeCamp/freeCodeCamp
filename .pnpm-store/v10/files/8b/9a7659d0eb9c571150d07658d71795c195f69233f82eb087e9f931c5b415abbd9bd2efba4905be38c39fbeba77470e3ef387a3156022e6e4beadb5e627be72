/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const Watchpack = require("watchpack");

/** @typedef {import("../../declarations/WebpackOptions").WatchOptions} WatchOptions */
/** @typedef {import("../FileSystemInfo").FileSystemInfoEntry} FileSystemInfoEntry */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("../util/fs").WatchMethod} WatchMethod */

class NodeWatchFileSystem {
	/**
	 * @param {InputFileSystem} inputFileSystem input filesystem
	 */
	constructor(inputFileSystem) {
		this.inputFileSystem = inputFileSystem;
		this.watcherOptions = {
			aggregateTimeout: 0
		};
		/** @type {Watchpack | null} */
		this.watcher = new Watchpack(this.watcherOptions);
	}

	/** @type {WatchMethod} */
	watch(
		files,
		directories,
		missing,
		startTime,
		options,
		callback,
		callbackUndelayed
	) {
		if (!files || typeof files[Symbol.iterator] !== "function") {
			throw new Error("Invalid arguments: 'files'");
		}
		if (!directories || typeof directories[Symbol.iterator] !== "function") {
			throw new Error("Invalid arguments: 'directories'");
		}
		if (!missing || typeof missing[Symbol.iterator] !== "function") {
			throw new Error("Invalid arguments: 'missing'");
		}
		if (typeof callback !== "function") {
			throw new Error("Invalid arguments: 'callback'");
		}
		if (typeof startTime !== "number" && startTime) {
			throw new Error("Invalid arguments: 'startTime'");
		}
		if (typeof options !== "object") {
			throw new Error("Invalid arguments: 'options'");
		}
		if (typeof callbackUndelayed !== "function" && callbackUndelayed) {
			throw new Error("Invalid arguments: 'callbackUndelayed'");
		}
		const oldWatcher = this.watcher;
		this.watcher = new Watchpack(options);

		if (callbackUndelayed) {
			this.watcher.once("change", callbackUndelayed);
		}

		const fetchTimeInfo = () => {
			const fileTimeInfoEntries = new Map();
			const contextTimeInfoEntries = new Map();
			if (this.watcher) {
				this.watcher.collectTimeInfoEntries(
					fileTimeInfoEntries,
					contextTimeInfoEntries
				);
			}
			return { fileTimeInfoEntries, contextTimeInfoEntries };
		};
		this.watcher.once(
			"aggregated",
			/**
			 * @param {Set<string>} changes changes
			 * @param {Set<string>} removals removals
			 */
			(changes, removals) => {
				// pause emitting events (avoids clearing aggregated changes and removals on timeout)
				/** @type {Watchpack} */
				(this.watcher).pause();

				const fs = this.inputFileSystem;
				if (fs && fs.purge) {
					for (const item of changes) {
						fs.purge(item);
					}
					for (const item of removals) {
						fs.purge(item);
					}
				}
				const { fileTimeInfoEntries, contextTimeInfoEntries } = fetchTimeInfo();
				callback(
					null,
					fileTimeInfoEntries,
					contextTimeInfoEntries,
					changes,
					removals
				);
			}
		);

		this.watcher.watch({ files, directories, missing, startTime });

		if (oldWatcher) {
			oldWatcher.close();
		}
		return {
			close: () => {
				if (this.watcher) {
					this.watcher.close();
					this.watcher = null;
				}
			},
			pause: () => {
				if (this.watcher) {
					this.watcher.pause();
				}
			},
			getAggregatedRemovals: util.deprecate(
				() => {
					const items = this.watcher && this.watcher.aggregatedRemovals;
					const fs = this.inputFileSystem;
					if (items && fs && fs.purge) {
						for (const item of items) {
							fs.purge(item);
						}
					}
					return items;
				},
				"Watcher.getAggregatedRemovals is deprecated in favor of Watcher.getInfo since that's more performant.",
				"DEP_WEBPACK_WATCHER_GET_AGGREGATED_REMOVALS"
			),
			getAggregatedChanges: util.deprecate(
				() => {
					const items = this.watcher && this.watcher.aggregatedChanges;
					const fs = this.inputFileSystem;
					if (items && fs && fs.purge) {
						for (const item of items) {
							fs.purge(item);
						}
					}
					return items;
				},
				"Watcher.getAggregatedChanges is deprecated in favor of Watcher.getInfo since that's more performant.",
				"DEP_WEBPACK_WATCHER_GET_AGGREGATED_CHANGES"
			),
			getFileTimeInfoEntries: util.deprecate(
				() => fetchTimeInfo().fileTimeInfoEntries,
				"Watcher.getFileTimeInfoEntries is deprecated in favor of Watcher.getInfo since that's more performant.",
				"DEP_WEBPACK_WATCHER_FILE_TIME_INFO_ENTRIES"
			),
			getContextTimeInfoEntries: util.deprecate(
				() => fetchTimeInfo().contextTimeInfoEntries,
				"Watcher.getContextTimeInfoEntries is deprecated in favor of Watcher.getInfo since that's more performant.",
				"DEP_WEBPACK_WATCHER_CONTEXT_TIME_INFO_ENTRIES"
			),
			getInfo: () => {
				const removals = this.watcher && this.watcher.aggregatedRemovals;
				const changes = this.watcher && this.watcher.aggregatedChanges;
				const fs = this.inputFileSystem;
				if (fs && fs.purge) {
					if (removals) {
						for (const item of removals) {
							fs.purge(item);
						}
					}
					if (changes) {
						for (const item of changes) {
							fs.purge(item);
						}
					}
				}
				const { fileTimeInfoEntries, contextTimeInfoEntries } = fetchTimeInfo();
				return {
					changes,
					removals,
					fileTimeInfoEntries,
					contextTimeInfoEntries
				};
			}
		};
	}
}

module.exports = NodeWatchFileSystem;
