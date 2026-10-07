/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const { SyncHook, MultiHook } = require("tapable");

const ConcurrentCompilationError = require("./ConcurrentCompilationError");
const MultiStats = require("./MultiStats");
const MultiWatching = require("./MultiWatching");
const WebpackError = require("./WebpackError");
const ArrayQueue = require("./util/ArrayQueue");

/** @template T @typedef {import("tapable").AsyncSeriesHook<T>} AsyncSeriesHook<T> */
/** @template T @template R @typedef {import("tapable").SyncBailHook<T, R>} SyncBailHook<T, R> */
/** @typedef {import("../declarations/WebpackOptions").WatchOptions} WatchOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Stats")} Stats */
/** @typedef {import("./Watching")} Watching */
/** @typedef {import("./logging/Logger").Logger} Logger */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").IntermediateFileSystem} IntermediateFileSystem */
/** @typedef {import("./util/fs").OutputFileSystem} OutputFileSystem */
/** @typedef {import("./util/fs").WatchFileSystem} WatchFileSystem */

/**
 * @template T
 * @callback Callback
 * @param {Error | null} err
 * @param {T=} result
 */

/**
 * @callback RunWithDependenciesHandler
 * @param {Compiler} compiler
 * @param {Callback<MultiStats>} callback
 */

/**
 * @typedef {object} MultiCompilerOptions
 * @property {number=} parallelism how many Compilers are allows to run at the same time in parallel
 */

module.exports = class MultiCompiler {
	/**
	 * @param {Compiler[] | Record<string, Compiler>} compilers child compilers
	 * @param {MultiCompilerOptions} options options
	 */
	constructor(compilers, options) {
		if (!Array.isArray(compilers)) {
			/** @type {Compiler[]} */
			compilers = Object.keys(compilers).map(name => {
				/** @type {Record<string, Compiler>} */
				(compilers)[name].name = name;
				return /** @type {Record<string, Compiler>} */ (compilers)[name];
			});
		}

		this.hooks = Object.freeze({
			/** @type {SyncHook<[MultiStats]>} */
			done: new SyncHook(["stats"]),
			/** @type {MultiHook<SyncHook<[string | null, number]>>} */
			invalid: new MultiHook(compilers.map(c => c.hooks.invalid)),
			/** @type {MultiHook<AsyncSeriesHook<[Compiler]>>} */
			run: new MultiHook(compilers.map(c => c.hooks.run)),
			/** @type {SyncHook<[]>} */
			watchClose: new SyncHook([]),
			/** @type {MultiHook<AsyncSeriesHook<[Compiler]>>} */
			watchRun: new MultiHook(compilers.map(c => c.hooks.watchRun)),
			/** @type {MultiHook<SyncBailHook<[string, string, any[]], true>>} */
			infrastructureLog: new MultiHook(
				compilers.map(c => c.hooks.infrastructureLog)
			)
		});
		this.compilers = compilers;
		/** @type {MultiCompilerOptions} */
		this._options = {
			parallelism: options.parallelism || Infinity
		};
		/** @type {WeakMap<Compiler, string[]>} */
		this.dependencies = new WeakMap();
		this.running = false;

		/** @type {(Stats | null)[]} */
		const compilerStats = this.compilers.map(() => null);
		let doneCompilers = 0;
		for (let index = 0; index < this.compilers.length; index++) {
			const compiler = this.compilers[index];
			const compilerIndex = index;
			let compilerDone = false;
			// eslint-disable-next-line no-loop-func
			compiler.hooks.done.tap("MultiCompiler", stats => {
				if (!compilerDone) {
					compilerDone = true;
					doneCompilers++;
				}
				compilerStats[compilerIndex] = stats;
				if (doneCompilers === this.compilers.length) {
					this.hooks.done.call(
						new MultiStats(/** @type {Stats[]} */ (compilerStats))
					);
				}
			});
			// eslint-disable-next-line no-loop-func
			compiler.hooks.invalid.tap("MultiCompiler", () => {
				if (compilerDone) {
					compilerDone = false;
					doneCompilers--;
				}
			});
		}
		this._validateCompilersOptions();
	}

	_validateCompilersOptions() {
		if (this.compilers.length < 2) return;
		/**
		 * @param {Compiler} compiler compiler
		 * @param {WebpackError} warning warning
		 */
		const addWarning = (compiler, warning) => {
			compiler.hooks.thisCompilation.tap("MultiCompiler", compilation => {
				compilation.warnings.push(warning);
			});
		};
		const cacheNames = new Set();
		for (const compiler of this.compilers) {
			if (compiler.options.cache && "name" in compiler.options.cache) {
				const name = compiler.options.cache.name;
				if (cacheNames.has(name)) {
					addWarning(
						compiler,
						new WebpackError(
							`${
								compiler.name
									? `Compiler with name "${compiler.name}" doesn't use unique cache name. `
									: ""
							}Please set unique "cache.name" option. Name "${name}" already used.`
						)
					);
				} else {
					cacheNames.add(name);
				}
			}
		}
	}

	get options() {
		return Object.assign(
			this.compilers.map(c => c.options),
			this._options
		);
	}

	get outputPath() {
		let commonPath = this.compilers[0].outputPath;
		for (const compiler of this.compilers) {
			while (
				compiler.outputPath.indexOf(commonPath) !== 0 &&
				/[/\\]/.test(commonPath)
			) {
				commonPath = commonPath.replace(/[/\\][^/\\]*$/, "");
			}
		}

		if (!commonPath && this.compilers[0].outputPath[0] === "/") return "/";
		return commonPath;
	}

	get inputFileSystem() {
		throw new Error("Cannot read inputFileSystem of a MultiCompiler");
	}

	/**
	 * @param {InputFileSystem} value the new input file system
	 */
	set inputFileSystem(value) {
		for (const compiler of this.compilers) {
			compiler.inputFileSystem = value;
		}
	}

	get outputFileSystem() {
		throw new Error("Cannot read outputFileSystem of a MultiCompiler");
	}

	/**
	 * @param {OutputFileSystem} value the new output file system
	 */
	set outputFileSystem(value) {
		for (const compiler of this.compilers) {
			compiler.outputFileSystem = value;
		}
	}

	get watchFileSystem() {
		throw new Error("Cannot read watchFileSystem of a MultiCompiler");
	}

	/**
	 * @param {WatchFileSystem} value the new watch file system
	 */
	set watchFileSystem(value) {
		for (const compiler of this.compilers) {
			compiler.watchFileSystem = value;
		}
	}

	/**
	 * @param {IntermediateFileSystem} value the new intermediate file system
	 */
	set intermediateFileSystem(value) {
		for (const compiler of this.compilers) {
			compiler.intermediateFileSystem = value;
		}
	}

	get intermediateFileSystem() {
		throw new Error("Cannot read outputFileSystem of a MultiCompiler");
	}

	/**
	 * @param {string | (function(): string)} name name of the logger, or function called once to get the logger name
	 * @returns {Logger} a logger with that name
	 */
	getInfrastructureLogger(name) {
		return this.compilers[0].getInfrastructureLogger(name);
	}

	/**
	 * @param {Compiler} compiler the child compiler
	 * @param {string[]} dependencies its dependencies
	 * @returns {void}
	 */
	setDependencies(compiler, dependencies) {
		this.dependencies.set(compiler, dependencies);
	}

	/**
	 * @param {Callback<MultiStats>} callback signals when the validation is complete
	 * @returns {boolean} true if the dependencies are valid
	 */
	validateDependencies(callback) {
		/** @type {Set<{source: Compiler, target: Compiler}>} */
		const edges = new Set();
		/** @type {string[]} */
		const missing = [];
		/**
		 * @param {Compiler} compiler compiler
		 * @returns {boolean} target was found
		 */
		const targetFound = compiler => {
			for (const edge of edges) {
				if (edge.target === compiler) {
					return true;
				}
			}
			return false;
		};
		/**
		 * @param {{source: Compiler, target: Compiler}} e1 edge 1
		 * @param {{source: Compiler, target: Compiler}} e2 edge 2
		 * @returns {number} result
		 */
		const sortEdges = (e1, e2) =>
			/** @type {string} */
			(e1.source.name).localeCompare(/** @type {string} */ (e2.source.name)) ||
			/** @type {string} */
			(e1.target.name).localeCompare(/** @type {string} */ (e2.target.name));
		for (const source of this.compilers) {
			const dependencies = this.dependencies.get(source);
			if (dependencies) {
				for (const dep of dependencies) {
					const target = this.compilers.find(c => c.name === dep);
					if (!target) {
						missing.push(dep);
					} else {
						edges.add({
							source,
							target
						});
					}
				}
			}
		}
		/** @type {string[]} */
		const errors = missing.map(m => `Compiler dependency \`${m}\` not found.`);
		const stack = this.compilers.filter(c => !targetFound(c));
		while (stack.length > 0) {
			const current = stack.pop();
			for (const edge of edges) {
				if (edge.source === current) {
					edges.delete(edge);
					const target = edge.target;
					if (!targetFound(target)) {
						stack.push(target);
					}
				}
			}
		}
		if (edges.size > 0) {
			/** @type {string[]} */
			const lines = Array.from(edges)
				.sort(sortEdges)
				.map(edge => `${edge.source.name} -> ${edge.target.name}`);
			lines.unshift("Circular dependency found in compiler dependencies.");
			errors.unshift(lines.join("\n"));
		}
		if (errors.length > 0) {
			const message = errors.join("\n");
			callback(new Error(message));
			return false;
		}
		return true;
	}

	// TODO webpack 6 remove
	/**
	 * @deprecated This method should have been private
	 * @param {Compiler[]} compilers the child compilers
	 * @param {RunWithDependenciesHandler} fn a handler to run for each compiler
	 * @param {Callback<MultiStats>} callback the compiler's handler
	 * @returns {void}
	 */
	runWithDependencies(compilers, fn, callback) {
		const fulfilledNames = new Set();
		let remainingCompilers = compilers;
		/**
		 * @param {string} d dependency
		 * @returns {boolean} when dependency was fulfilled
		 */
		const isDependencyFulfilled = d => fulfilledNames.has(d);
		/**
		 * @returns {Compiler[]} compilers
		 */
		const getReadyCompilers = () => {
			const readyCompilers = [];
			const list = remainingCompilers;
			remainingCompilers = [];
			for (const c of list) {
				const dependencies = this.dependencies.get(c);
				const ready =
					!dependencies || dependencies.every(isDependencyFulfilled);
				if (ready) {
					readyCompilers.push(c);
				} else {
					remainingCompilers.push(c);
				}
			}
			return readyCompilers;
		};
		/**
		 * @param {Callback<MultiStats>} callback callback
		 * @returns {void}
		 */
		const runCompilers = callback => {
			if (remainingCompilers.length === 0) return callback(null);
			asyncLib.map(
				getReadyCompilers(),
				(compiler, callback) => {
					fn(compiler, err => {
						if (err) return callback(err);
						fulfilledNames.add(compiler.name);
						runCompilers(callback);
					});
				},
				(err, results) => {
					callback(err, /** @type {TODO} */ (results));
				}
			);
		};
		runCompilers(callback);
	}

	/**
	 * @template SetupResult
	 * @param {function(Compiler, number, Callback<Stats>, function(): boolean, function(): void, function(): void): SetupResult} setup setup a single compiler
	 * @param {function(Compiler, SetupResult, Callback<Stats>): void} run run/continue a single compiler
	 * @param {Callback<MultiStats>} callback callback when all compilers are done, result includes Stats of all changed compilers
	 * @returns {SetupResult[]} result of setup
	 */
	_runGraph(setup, run, callback) {
		/** @typedef {{ compiler: Compiler, setupResult: undefined | SetupResult, result: undefined | Stats, state: "pending" | "blocked" | "queued" | "starting" | "running" | "running-outdated" | "done", children: Node[], parents: Node[] }} Node */

		// State transitions for nodes:
		// -> blocked (initial)
		// blocked -> starting [running++] (when all parents done)
		// queued -> starting [running++] (when processing the queue)
		// starting -> running (when run has been called)
		// running -> done [running--] (when compilation is done)
		// done -> pending (when invalidated from file change)
		// pending -> blocked [add to queue] (when invalidated from aggregated changes)
		// done -> blocked [add to queue] (when invalidated, from parent invalidation)
		// running -> running-outdated (when invalidated, either from change or parent invalidation)
		// running-outdated -> blocked [running--] (when compilation is done)

		/** @type {Node[]} */
		const nodes = this.compilers.map(compiler => ({
			compiler,
			setupResult: undefined,
			result: undefined,
			state: "blocked",
			children: [],
			parents: []
		}));
		/** @type {Map<string, Node>} */
		const compilerToNode = new Map();
		for (const node of nodes) {
			compilerToNode.set(/** @type {string} */ (node.compiler.name), node);
		}
		for (const node of nodes) {
			const dependencies = this.dependencies.get(node.compiler);
			if (!dependencies) continue;
			for (const dep of dependencies) {
				const parent = /** @type {Node} */ (compilerToNode.get(dep));
				node.parents.push(parent);
				parent.children.push(node);
			}
		}
		/** @type {ArrayQueue<Node>} */
		const queue = new ArrayQueue();
		for (const node of nodes) {
			if (node.parents.length === 0) {
				node.state = "queued";
				queue.enqueue(node);
			}
		}
		let errored = false;
		let running = 0;
		const parallelism = /** @type {number} */ (this._options.parallelism);
		/**
		 * @param {Node} node node
		 * @param {(Error | null)=} err error
		 * @param {Stats=} stats result
		 * @returns {void}
		 */
		const nodeDone = (node, err, stats) => {
			if (errored) return;
			if (err) {
				errored = true;
				return asyncLib.each(
					nodes,
					(node, callback) => {
						if (node.compiler.watching) {
							node.compiler.watching.close(callback);
						} else {
							callback();
						}
					},
					() => callback(err)
				);
			}
			node.result = stats;
			running--;
			if (node.state === "running") {
				node.state = "done";
				for (const child of node.children) {
					if (child.state === "blocked") queue.enqueue(child);
				}
			} else if (node.state === "running-outdated") {
				node.state = "blocked";
				queue.enqueue(node);
			}
			processQueue();
		};
		/**
		 * @param {Node} node node
		 * @returns {void}
		 */
		const nodeInvalidFromParent = node => {
			if (node.state === "done") {
				node.state = "blocked";
			} else if (node.state === "running") {
				node.state = "running-outdated";
			}
			for (const child of node.children) {
				nodeInvalidFromParent(child);
			}
		};
		/**
		 * @param {Node} node node
		 * @returns {void}
		 */
		const nodeInvalid = node => {
			if (node.state === "done") {
				node.state = "pending";
			} else if (node.state === "running") {
				node.state = "running-outdated";
			}
			for (const child of node.children) {
				nodeInvalidFromParent(child);
			}
		};
		/**
		 * @param {Node} node node
		 * @returns {void}
		 */
		const nodeChange = node => {
			nodeInvalid(node);
			if (node.state === "pending") {
				node.state = "blocked";
			}
			if (node.state === "blocked") {
				queue.enqueue(node);
				processQueue();
			}
		};

		/** @type {SetupResult[]} */
		const setupResults = [];
		for (const [i, node] of nodes.entries()) {
			setupResults.push(
				(node.setupResult = setup(
					node.compiler,
					i,
					nodeDone.bind(null, node),
					() => node.state !== "starting" && node.state !== "running",
					() => nodeChange(node),
					() => nodeInvalid(node)
				))
			);
		}
		let processing = true;
		const processQueue = () => {
			if (processing) return;
			processing = true;
			process.nextTick(processQueueWorker);
		};
		const processQueueWorker = () => {
			// eslint-disable-next-line no-unmodified-loop-condition
			while (running < parallelism && queue.length > 0 && !errored) {
				const node = /** @type {Node} */ (queue.dequeue());
				if (
					node.state === "queued" ||
					(node.state === "blocked" &&
						node.parents.every(p => p.state === "done"))
				) {
					running++;
					node.state = "starting";
					run(
						node.compiler,
						/** @type {SetupResult} */ (node.setupResult),
						nodeDone.bind(null, node)
					);
					node.state = "running";
				}
			}
			processing = false;
			if (
				!errored &&
				running === 0 &&
				nodes.every(node => node.state === "done")
			) {
				const stats = [];
				for (const node of nodes) {
					const result = node.result;
					if (result) {
						node.result = undefined;
						stats.push(result);
					}
				}
				if (stats.length > 0) {
					callback(null, new MultiStats(stats));
				}
			}
		};
		processQueueWorker();
		return setupResults;
	}

	/**
	 * @param {WatchOptions|WatchOptions[]} watchOptions the watcher's options
	 * @param {Callback<MultiStats>} handler signals when the call finishes
	 * @returns {MultiWatching} a compiler watcher
	 */
	watch(watchOptions, handler) {
		if (this.running) {
			return handler(new ConcurrentCompilationError());
		}
		this.running = true;

		if (this.validateDependencies(handler)) {
			const watchings = this._runGraph(
				(compiler, idx, callback, isBlocked, setChanged, setInvalid) => {
					const watching = compiler.watch(
						Array.isArray(watchOptions) ? watchOptions[idx] : watchOptions,
						callback
					);
					if (watching) {
						watching._onInvalid = setInvalid;
						watching._onChange = setChanged;
						watching._isBlocked = isBlocked;
					}
					return watching;
				},
				(compiler, watching, callback) => {
					if (compiler.watching !== watching) return;
					if (!watching.running) watching.invalidate();
				},
				handler
			);
			return new MultiWatching(watchings, this);
		}

		return new MultiWatching([], this);
	}

	/**
	 * @param {Callback<MultiStats>} callback signals when the call finishes
	 * @returns {void}
	 */
	run(callback) {
		if (this.running) {
			return callback(new ConcurrentCompilationError());
		}
		this.running = true;

		if (this.validateDependencies(callback)) {
			this._runGraph(
				() => {},
				(compiler, setupResult, callback) => compiler.run(callback),
				(err, stats) => {
					this.running = false;

					if (callback !== undefined) {
						return callback(err, stats);
					}
				}
			);
		}
	}

	purgeInputFileSystem() {
		for (const compiler of this.compilers) {
			if (compiler.inputFileSystem && compiler.inputFileSystem.purge) {
				compiler.inputFileSystem.purge();
			}
		}
	}

	/**
	 * @param {Callback<void>} callback signals when the compiler closes
	 * @returns {void}
	 */
	close(callback) {
		asyncLib.each(
			this.compilers,
			(compiler, callback) => {
				compiler.close(callback);
			},
			error => {
				callback(error);
			}
		);
	}
};
