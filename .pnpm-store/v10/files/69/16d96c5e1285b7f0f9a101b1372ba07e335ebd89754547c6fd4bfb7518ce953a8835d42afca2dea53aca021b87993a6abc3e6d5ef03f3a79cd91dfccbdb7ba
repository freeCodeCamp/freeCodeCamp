/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Stats = require("./Stats");

/** @typedef {import("../declarations/WebpackOptions").WatchOptions} WatchOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./FileSystemInfo").FileSystemInfoEntry} FileSystemInfoEntry */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./logging/Logger").Logger} Logger */
/** @typedef {import("./util/fs").TimeInfoEntries} TimeInfoEntries */
/** @typedef {import("./util/fs").WatchFileSystem} WatchFileSystem */
/** @typedef {import("./util/fs").Watcher} Watcher */

/**
 * @template T
 * @callback Callback
 * @param {Error | null} err
 * @param {T=} result
 */

class Watching {
	/**
	 * @param {Compiler} compiler the compiler
	 * @param {WatchOptions} watchOptions options
	 * @param {Callback<Stats>} handler completion handler
	 */
	constructor(compiler, watchOptions, handler) {
		this.startTime = null;
		this.invalid = false;
		this.handler = handler;
		/** @type {Callback<void>[]} */
		this.callbacks = [];
		/** @type {Callback<void>[] | undefined} */
		this._closeCallbacks = undefined;
		this.closed = false;
		this.suspended = false;
		this.blocked = false;
		this._isBlocked = () => false;
		this._onChange = () => {};
		this._onInvalid = () => {};
		if (typeof watchOptions === "number") {
			/** @type {WatchOptions} */
			this.watchOptions = {
				aggregateTimeout: watchOptions
			};
		} else if (watchOptions && typeof watchOptions === "object") {
			/** @type {WatchOptions} */
			this.watchOptions = { ...watchOptions };
		} else {
			/** @type {WatchOptions} */
			this.watchOptions = {};
		}
		if (typeof this.watchOptions.aggregateTimeout !== "number") {
			this.watchOptions.aggregateTimeout = 20;
		}
		this.compiler = compiler;
		this.running = false;
		this._initial = true;
		this._invalidReported = true;
		this._needRecords = true;
		this.watcher = undefined;
		this.pausedWatcher = undefined;
		/** @type {Set<string> | undefined} */
		this._collectedChangedFiles = undefined;
		/** @type {Set<string> | undefined} */
		this._collectedRemovedFiles = undefined;
		this._done = this._done.bind(this);
		process.nextTick(() => {
			if (this._initial) this._invalidate();
		});
	}

	/**
	 * @param {ReadonlySet<string> | undefined | null} changedFiles changed files
	 * @param {ReadonlySet<string> | undefined | null} removedFiles removed files
	 */
	_mergeWithCollected(changedFiles, removedFiles) {
		if (!changedFiles) return;
		if (!this._collectedChangedFiles) {
			this._collectedChangedFiles = new Set(changedFiles);
			this._collectedRemovedFiles = new Set(removedFiles);
		} else {
			for (const file of changedFiles) {
				this._collectedChangedFiles.add(file);
				/** @type {Set<string>} */
				(this._collectedRemovedFiles).delete(file);
			}
			for (const file of /** @type {ReadonlySet<string>} */ (removedFiles)) {
				this._collectedChangedFiles.delete(file);
				/** @type {Set<string>} */
				(this._collectedRemovedFiles).add(file);
			}
		}
	}

	/**
	 * @param {TimeInfoEntries=} fileTimeInfoEntries info for files
	 * @param {TimeInfoEntries=} contextTimeInfoEntries info for directories
	 * @param {ReadonlySet<string>=} changedFiles changed files
	 * @param {ReadonlySet<string>=} removedFiles removed files
	 * @returns {void}
	 */
	_go(fileTimeInfoEntries, contextTimeInfoEntries, changedFiles, removedFiles) {
		this._initial = false;
		if (this.startTime === null) this.startTime = Date.now();
		this.running = true;
		if (this.watcher) {
			this.pausedWatcher = this.watcher;
			this.lastWatcherStartTime = Date.now();
			this.watcher.pause();
			this.watcher = null;
		} else if (!this.lastWatcherStartTime) {
			this.lastWatcherStartTime = Date.now();
		}
		this.compiler.fsStartTime = Date.now();
		if (
			changedFiles &&
			removedFiles &&
			fileTimeInfoEntries &&
			contextTimeInfoEntries
		) {
			this._mergeWithCollected(changedFiles, removedFiles);
			this.compiler.fileTimestamps = fileTimeInfoEntries;
			this.compiler.contextTimestamps = contextTimeInfoEntries;
		} else if (this.pausedWatcher) {
			if (this.pausedWatcher.getInfo) {
				const {
					changes,
					removals,
					fileTimeInfoEntries,
					contextTimeInfoEntries
				} = this.pausedWatcher.getInfo();
				this._mergeWithCollected(changes, removals);
				this.compiler.fileTimestamps = fileTimeInfoEntries;
				this.compiler.contextTimestamps = contextTimeInfoEntries;
			} else {
				this._mergeWithCollected(
					this.pausedWatcher.getAggregatedChanges &&
						this.pausedWatcher.getAggregatedChanges(),
					this.pausedWatcher.getAggregatedRemovals &&
						this.pausedWatcher.getAggregatedRemovals()
				);
				this.compiler.fileTimestamps =
					this.pausedWatcher.getFileTimeInfoEntries();
				this.compiler.contextTimestamps =
					this.pausedWatcher.getContextTimeInfoEntries();
			}
		}
		this.compiler.modifiedFiles = this._collectedChangedFiles;
		this._collectedChangedFiles = undefined;
		this.compiler.removedFiles = this._collectedRemovedFiles;
		this._collectedRemovedFiles = undefined;

		const run = () => {
			if (this.compiler.idle) {
				return this.compiler.cache.endIdle(err => {
					if (err) return this._done(err);
					this.compiler.idle = false;
					run();
				});
			}
			if (this._needRecords) {
				return this.compiler.readRecords(err => {
					if (err) return this._done(err);

					this._needRecords = false;
					run();
				});
			}
			this.invalid = false;
			this._invalidReported = false;
			this.compiler.hooks.watchRun.callAsync(this.compiler, err => {
				if (err) return this._done(err);
				/**
				 * @param {Error | null} err error
				 * @param {Compilation=} _compilation compilation
				 * @returns {void}
				 */
				const onCompiled = (err, _compilation) => {
					if (err) return this._done(err, _compilation);

					const compilation = /** @type {Compilation} */ (_compilation);

					if (this.invalid) return this._done(null, compilation);

					if (this.compiler.hooks.shouldEmit.call(compilation) === false) {
						return this._done(null, compilation);
					}

					process.nextTick(() => {
						const logger = compilation.getLogger("webpack.Compiler");
						logger.time("emitAssets");
						this.compiler.emitAssets(compilation, err => {
							logger.timeEnd("emitAssets");
							if (err) return this._done(err, compilation);
							if (this.invalid) return this._done(null, compilation);

							logger.time("emitRecords");
							this.compiler.emitRecords(err => {
								logger.timeEnd("emitRecords");
								if (err) return this._done(err, compilation);

								if (compilation.hooks.needAdditionalPass.call()) {
									compilation.needAdditionalPass = true;

									compilation.startTime = /** @type {number} */ (
										this.startTime
									);
									compilation.endTime = Date.now();
									logger.time("done hook");
									const stats = new Stats(compilation);
									this.compiler.hooks.done.callAsync(stats, err => {
										logger.timeEnd("done hook");
										if (err) return this._done(err, compilation);

										this.compiler.hooks.additionalPass.callAsync(err => {
											if (err) return this._done(err, compilation);
											this.compiler.compile(onCompiled);
										});
									});
									return;
								}
								return this._done(null, compilation);
							});
						});
					});
				};
				this.compiler.compile(onCompiled);
			});
		};

		run();
	}

	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {Stats} the compilation stats
	 */
	_getStats(compilation) {
		const stats = new Stats(compilation);
		return stats;
	}

	/**
	 * @param {(Error | null)=} err an optional error
	 * @param {Compilation=} compilation the compilation
	 * @returns {void}
	 */
	_done(err, compilation) {
		this.running = false;

		const logger =
			/** @type {Logger} */
			(compilation && compilation.getLogger("webpack.Watching"));

		/** @type {Stats | undefined} */
		let stats;

		/**
		 * @param {Error} err error
		 * @param {Callback<void>[]=} cbs callbacks
		 */
		const handleError = (err, cbs) => {
			this.compiler.hooks.failed.call(err);
			this.compiler.cache.beginIdle();
			this.compiler.idle = true;
			this.handler(err, /** @type {Stats} */ (stats));
			if (!cbs) {
				cbs = this.callbacks;
				this.callbacks = [];
			}
			for (const cb of cbs) cb(err);
		};

		if (
			this.invalid &&
			!this.suspended &&
			!this.blocked &&
			!(this._isBlocked() && (this.blocked = true))
		) {
			if (compilation) {
				logger.time("storeBuildDependencies");
				this.compiler.cache.storeBuildDependencies(
					compilation.buildDependencies,
					err => {
						logger.timeEnd("storeBuildDependencies");
						if (err) return handleError(err);
						this._go();
					}
				);
			} else {
				this._go();
			}
			return;
		}

		if (compilation) {
			compilation.startTime = /** @type {number} */ (this.startTime);
			compilation.endTime = Date.now();
			stats = new Stats(compilation);
		}
		this.startTime = null;
		if (err) return handleError(err);

		const cbs = this.callbacks;
		this.callbacks = [];
		logger.time("done hook");
		this.compiler.hooks.done.callAsync(/** @type {Stats} */ (stats), err => {
			logger.timeEnd("done hook");
			if (err) return handleError(err, cbs);
			this.handler(null, stats);
			logger.time("storeBuildDependencies");
			this.compiler.cache.storeBuildDependencies(
				/** @type {Compilation} */
				(compilation).buildDependencies,
				err => {
					logger.timeEnd("storeBuildDependencies");
					if (err) return handleError(err, cbs);
					logger.time("beginIdle");
					this.compiler.cache.beginIdle();
					this.compiler.idle = true;
					logger.timeEnd("beginIdle");
					process.nextTick(() => {
						if (!this.closed) {
							this.watch(
								/** @type {Compilation} */
								(compilation).fileDependencies,
								/** @type {Compilation} */
								(compilation).contextDependencies,
								/** @type {Compilation} */
								(compilation).missingDependencies
							);
						}
					});
					for (const cb of cbs) cb(null);
					this.compiler.hooks.afterDone.call(/** @type {Stats} */ (stats));
				}
			);
		});
	}

	/**
	 * @param {Iterable<string>} files watched files
	 * @param {Iterable<string>} dirs watched directories
	 * @param {Iterable<string>} missing watched existence entries
	 * @returns {void}
	 */
	watch(files, dirs, missing) {
		this.pausedWatcher = null;
		this.watcher =
			/** @type {WatchFileSystem} */
			(this.compiler.watchFileSystem).watch(
				files,
				dirs,
				missing,
				/** @type {number} */ (this.lastWatcherStartTime),
				this.watchOptions,
				(
					err,
					fileTimeInfoEntries,
					contextTimeInfoEntries,
					changedFiles,
					removedFiles
				) => {
					if (err) {
						this.compiler.modifiedFiles = undefined;
						this.compiler.removedFiles = undefined;
						this.compiler.fileTimestamps = undefined;
						this.compiler.contextTimestamps = undefined;
						this.compiler.fsStartTime = undefined;
						return this.handler(err);
					}
					this._invalidate(
						fileTimeInfoEntries,
						contextTimeInfoEntries,
						changedFiles,
						removedFiles
					);
					this._onChange();
				},
				(fileName, changeTime) => {
					if (!this._invalidReported) {
						this._invalidReported = true;
						this.compiler.hooks.invalid.call(fileName, changeTime);
					}
					this._onInvalid();
				}
			);
	}

	/**
	 * @param {Callback<void>=} callback signals when the build has completed again
	 * @returns {void}
	 */
	invalidate(callback) {
		if (callback) {
			this.callbacks.push(callback);
		}
		if (!this._invalidReported) {
			this._invalidReported = true;
			this.compiler.hooks.invalid.call(null, Date.now());
		}
		this._onChange();
		this._invalidate();
	}

	/**
	 * @param {TimeInfoEntries=} fileTimeInfoEntries info for files
	 * @param {TimeInfoEntries=} contextTimeInfoEntries info for directories
	 * @param {ReadonlySet<string>=} changedFiles changed files
	 * @param {ReadonlySet<string>=} removedFiles removed files
	 * @returns {void}
	 */
	_invalidate(
		fileTimeInfoEntries,
		contextTimeInfoEntries,
		changedFiles,
		removedFiles
	) {
		if (this.suspended || (this._isBlocked() && (this.blocked = true))) {
			this._mergeWithCollected(changedFiles, removedFiles);
			return;
		}

		if (this.running) {
			this._mergeWithCollected(changedFiles, removedFiles);
			this.invalid = true;
		} else {
			this._go(
				fileTimeInfoEntries,
				contextTimeInfoEntries,
				changedFiles,
				removedFiles
			);
		}
	}

	suspend() {
		this.suspended = true;
	}

	resume() {
		if (this.suspended) {
			this.suspended = false;
			this._invalidate();
		}
	}

	/**
	 * @param {Callback<void>} callback signals when the watcher is closed
	 * @returns {void}
	 */
	close(callback) {
		if (this._closeCallbacks) {
			if (callback) {
				this._closeCallbacks.push(callback);
			}
			return;
		}
		/**
		 * @param {WebpackError | null} err error if any
		 * @param {Compilation=} compilation compilation if any
		 */
		const finalCallback = (err, compilation) => {
			this.running = false;
			this.compiler.running = false;
			this.compiler.watching = undefined;
			this.compiler.watchMode = false;
			this.compiler.modifiedFiles = undefined;
			this.compiler.removedFiles = undefined;
			this.compiler.fileTimestamps = undefined;
			this.compiler.contextTimestamps = undefined;
			this.compiler.fsStartTime = undefined;
			/**
			 * @param {WebpackError | null} err error if any
			 */
			const shutdown = err => {
				this.compiler.hooks.watchClose.call();
				const closeCallbacks =
					/** @type {Callback<void>[]} */
					(this._closeCallbacks);
				this._closeCallbacks = undefined;
				for (const cb of closeCallbacks) cb(err);
			};
			if (compilation) {
				const logger = compilation.getLogger("webpack.Watching");
				logger.time("storeBuildDependencies");
				this.compiler.cache.storeBuildDependencies(
					compilation.buildDependencies,
					err2 => {
						logger.timeEnd("storeBuildDependencies");
						shutdown(err || err2);
					}
				);
			} else {
				shutdown(err);
			}
		};

		this.closed = true;
		if (this.watcher) {
			this.watcher.close();
			this.watcher = null;
		}
		if (this.pausedWatcher) {
			this.pausedWatcher.close();
			this.pausedWatcher = null;
		}
		this._closeCallbacks = [];
		if (callback) {
			this._closeCallbacks.push(callback);
		}
		if (this.running) {
			this.invalid = true;
			this._done = finalCallback;
		} else {
			finalCallback(null);
		}
	}
}

module.exports = Watching;
