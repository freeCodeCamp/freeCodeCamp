/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { Tracer } = require("chrome-trace-event");
const {
	CSS_MODULES,
	JAVASCRIPT_MODULES,
	JSON_MODULE_TYPE,
	WEBASSEMBLY_MODULES
} = require("../ModuleTypeConstants");
const { dirname, mkdirpSync } = require("../util/fs");

/** @typedef {import("inspector").Session} Session */
/** @typedef {import("tapable").FullTap} FullTap */
/** @typedef {import("../../declarations/plugins/debug/ProfilingPlugin").ProfilingPluginOptions} ProfilingPluginOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("../ResolverFactory")} ResolverFactory */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */

/**
 * Defines the hook type used by this module.
 * @template T, R
 * @typedef {import("tapable").Hook<T, R>} Hook
 */

/**
 * Defines the fake hook type used by this module.
 * @template T
 * @typedef {import("../util/deprecation").FakeHook<T>} FakeHook
 */

/**
 * Defines the hook map type used by this module.
 * @template T
 * @typedef {import("tapable").HookMap<T>} HookMap
 */

/**
 * Defines the hook interceptor type used by this module.
 * @template T, R
 * @typedef {import("tapable").HookInterceptor<T, R>} HookInterceptor
 */

/** @typedef {{ Session: typeof import("inspector").Session }} Inspector */

/** @type {Inspector | undefined} */
let inspector;

try {
	// eslint-disable-next-line n/no-unsupported-features/node-builtins
	inspector = require("inspector");
} catch (_err) {
	// eslint-disable-next-line no-console
	console.log("Unable to CPU profile in < node 8.0");
}

class Profiler {
	/**
	 * Creates an instance of Profiler.
	 * @param {Inspector} inspector inspector
	 */
	constructor(inspector) {
		/** @type {undefined | Session} */
		this.session = undefined;
		this.inspector = inspector;
		this._startTime = 0;
	}

	hasSession() {
		return this.session !== undefined;
	}

	startProfiling() {
		if (this.inspector === undefined) {
			return Promise.resolve();
		}

		try {
			this.session = new /** @type {Inspector} */ (inspector).Session();
			/** @type {Session} */
			(this.session).connect();
		} catch (_) {
			this.session = undefined;
			return Promise.resolve();
		}

		const hrtime = process.hrtime();
		this._startTime = hrtime[0] * 1000000 + Math.round(hrtime[1] / 1000);

		return Promise.all([
			this.sendCommand("Profiler.setSamplingInterval", {
				interval: 100
			}),
			this.sendCommand("Profiler.enable"),
			this.sendCommand("Profiler.start")
		]);
	}

	/**
	 * Returns promise for the result.
	 * @param {string} method method name
	 * @param {EXPECTED_OBJECT=} params params
	 * @returns {Promise<EXPECTED_ANY | void>} Promise for the result
	 */
	sendCommand(method, params) {
		if (this.hasSession()) {
			return new Promise((res, rej) => {
				/** @type {Session} */
				(this.session).post(method, params, (err, params) => {
					if (err !== null) {
						rej(err);
					} else {
						res(params);
					}
				});
			});
		}
		return Promise.resolve();
	}

	destroy() {
		if (this.hasSession()) {
			/** @type {Session} */
			(this.session).disconnect();
		}

		return Promise.resolve();
	}

	/**
	 * Returns }>} profile result.
	 * @returns {Promise<{ profile: { startTime: number, endTime: number } }>} profile result
	 */
	stopProfiling() {
		return this.sendCommand("Profiler.stop").then(({ profile }) => {
			const hrtime = process.hrtime();
			const endTime = hrtime[0] * 1000000 + Math.round(hrtime[1] / 1000);
			// Avoid coverage problems due indirect changes
			/* istanbul ignore next */
			if (profile.startTime < this._startTime || profile.endTime > endTime) {
				// In some cases timestamps mismatch and we need to adjust them
				// Both process.hrtime and the inspector timestamps claim to be relative
				// to a unknown point in time. But they do not guarantee that this is the
				// same point in time.
				const duration = profile.endTime - profile.startTime;
				const ownDuration = endTime - this._startTime;
				const untracked = Math.max(0, ownDuration - duration);
				profile.startTime = this._startTime + untracked / 2;
				profile.endTime = endTime - untracked / 2;
			}
			return { profile };
		});
	}
}

/**
 * an object that wraps Tracer and Profiler with a counter
 * @typedef {object} Trace
 * @property {Tracer} trace instance of Tracer
 * @property {number} counter Counter
 * @property {Profiler} profiler instance of Profiler
 * @property {(callback: (err?: null | Error) => void) => void} end the end function
 */

/**
 * Creates a trace from the provided f.
 * @param {IntermediateFileSystem} fs filesystem used for output
 * @param {string} outputPath The location where to write the log.
 * @returns {Trace} The trace object
 */
const createTrace = (fs, outputPath) => {
	const trace = new Tracer();
	const profiler = new Profiler(/** @type {Inspector} */ (inspector));
	if (/\/|\\/.test(outputPath)) {
		const dirPath = dirname(fs, outputPath);
		mkdirpSync(fs, dirPath);
	}
	const fsStream = fs.createWriteStream(outputPath);

	let counter = 0;

	trace.pipe(fsStream);
	// These are critical events that need to be inserted so that tools like
	// chrome dev tools can load the profile.
	trace.instantEvent({
		name: "TracingStartedInPage",
		id: ++counter,
		cat: ["disabled-by-default-devtools.timeline"],
		args: {
			data: {
				sessionId: "-1",
				page: "0xfff",
				frames: [
					{
						frame: "0xfff",
						url: "webpack",
						name: ""
					}
				]
			}
		}
	});

	trace.instantEvent({
		name: "TracingStartedInBrowser",
		id: ++counter,
		cat: ["disabled-by-default-devtools.timeline"],
		args: {
			data: {
				sessionId: "-1"
			}
		}
	});

	return {
		trace,
		counter,
		profiler,
		end: (callback) => {
			trace.push("]");
			// Wait until the write stream finishes.
			fsStream.on("close", () => {
				callback();
			});
			// Tear down the readable trace stream.
			trace.push(null);
		}
	};
};

const PLUGIN_NAME = "ProfilingPlugin";

class ProfilingPlugin {
	/**
	 * Creates an instance of ProfilingPlugin.
	 * @param {ProfilingPluginOptions=} options options object
	 */
	constructor(options = {}) {
		/** @type {ProfilingPluginOptions} */
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
				() => require("../../schemas/plugins/debug/ProfilingPlugin.json"),
				this.options,
				{
					name: "Profiling Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/debug/ProfilingPlugin.check")(options)
			);
		});

		const tracer = createTrace(
			/** @type {IntermediateFileSystem} */
			(compiler.intermediateFileSystem),
			this.options.outputPath || "events.json"
		);
		tracer.profiler.startProfiling();

		// Compiler Hooks
		for (const hookName of Object.keys(compiler.hooks)) {
			const hook =
				compiler.hooks[/** @type {keyof Compiler["hooks"]} */ (hookName)];
			if (hook) {
				hook.intercept(makeInterceptorFor("Compiler", tracer)(hookName));
			}
		}

		for (const hookName of Object.keys(compiler.resolverFactory.hooks)) {
			const hook =
				compiler.resolverFactory.hooks[
					/** @type {keyof ResolverFactory["hooks"]} */
					(hookName)
				];
			if (hook) {
				hook.intercept(
					/** @type {EXPECTED_ANY} */
					(makeInterceptorFor("Resolver", tracer)(hookName))
				);
			}
		}

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory, contextModuleFactory }) => {
				interceptAllHooksFor(compilation, tracer, "Compilation");
				interceptAllHooksFor(
					normalModuleFactory,
					tracer,
					"Normal Module Factory"
				);
				interceptAllHooksFor(
					contextModuleFactory,
					tracer,
					"Context Module Factory"
				);
				interceptAllParserHooks(normalModuleFactory, tracer);
				interceptAllGeneratorHooks(normalModuleFactory, tracer);
				interceptAllJavascriptModulesPluginHooks(compilation, tracer);
				interceptAllCssModulesPluginHooks(compilation, tracer);
			}
		);

		// We need to write out the CPU profile when we are all done.
		compiler.hooks.done.tapAsync(
			{
				name: PLUGIN_NAME,
				stage: Infinity
			},
			(stats, callback) => {
				if (compiler.watchMode) return callback();
				tracer.profiler.stopProfiling().then((parsedResults) => {
					if (parsedResults === undefined) {
						tracer.profiler.destroy();
						tracer.end(callback);
						return;
					}

					const cpuStartTime = parsedResults.profile.startTime;
					const cpuEndTime = parsedResults.profile.endTime;

					tracer.trace.completeEvent({
						name: "TaskQueueManager::ProcessTaskFromWorkQueue",
						id: ++tracer.counter,
						cat: ["toplevel"],
						ts: cpuStartTime,
						args: {
							// eslint-disable-next-line camelcase
							src_file: "../../ipc/ipc_moji_bootstrap.cc",
							// eslint-disable-next-line camelcase
							src_func: "Accept"
						}
					});

					tracer.trace.completeEvent({
						name: "EvaluateScript",
						id: ++tracer.counter,
						cat: ["devtools.timeline"],
						ts: cpuStartTime,
						dur: cpuEndTime - cpuStartTime,
						args: {
							data: {
								url: "webpack",
								lineNumber: 1,
								columnNumber: 1,
								frame: "0xFFF"
							}
						}
					});

					tracer.trace.instantEvent({
						name: "CpuProfile",
						id: ++tracer.counter,
						cat: ["disabled-by-default-devtools.timeline"],
						ts: cpuEndTime,
						args: {
							data: {
								cpuProfile: parsedResults.profile
							}
						}
					});

					tracer.profiler.destroy();
					tracer.end(callback);
				});
			}
		);
	}
}

/** @typedef {Record<string, Hook<EXPECTED_ANY, EXPECTED_ANY> | FakeHook<EXPECTED_ANY> | HookMap<EXPECTED_ANY>>} Hooks */

/**
 * Intercept all hooks for.
 * @param {EXPECTED_OBJECT & { hooks?: Hooks }} instance instance
 * @param {Trace} tracer tracer
 * @param {string} logLabel log label
 */
const interceptAllHooksFor = (instance, tracer, logLabel) => {
	if (Reflect.has(instance, "hooks")) {
		const hooks = /** @type {Hooks} */ (instance.hooks);
		for (const hookName of Object.keys(hooks)) {
			const hook = hooks[hookName];
			if (hook && !hook._fakeHook) {
				hook.intercept(makeInterceptorFor(logLabel, tracer)(hookName));
			}
		}
	}
};

/**
 * Intercept all parser hooks.
 * @param {NormalModuleFactory} moduleFactory normal module factory
 * @param {Trace} tracer tracer
 */
const interceptAllParserHooks = (moduleFactory, tracer) => {
	const moduleTypes = [
		...JAVASCRIPT_MODULES,
		JSON_MODULE_TYPE,
		...WEBASSEMBLY_MODULES,
		...CSS_MODULES
	];

	for (const moduleType of moduleTypes) {
		moduleFactory.hooks.parser
			.for(moduleType)
			.tap(PLUGIN_NAME, (parser, _parserOpts) => {
				interceptAllHooksFor(parser, tracer, "Parser");
			});
	}
};

/**
 * Intercept all generator hooks.
 * @param {NormalModuleFactory} moduleFactory normal module factory
 * @param {Trace} tracer tracer
 */
const interceptAllGeneratorHooks = (moduleFactory, tracer) => {
	const moduleTypes = [
		...JAVASCRIPT_MODULES,
		JSON_MODULE_TYPE,
		...WEBASSEMBLY_MODULES,
		...CSS_MODULES
	];

	for (const moduleType of moduleTypes) {
		moduleFactory.hooks.generator
			.for(moduleType)
			.tap(PLUGIN_NAME, (parser, _parserOpts) => {
				interceptAllHooksFor(parser, tracer, "Generator");
			});
	}
};

/**
 * Intercept all javascript modules plugin hooks.
 * @param {Compilation} compilation compilation
 * @param {Trace} tracer tracer
 */
const interceptAllJavascriptModulesPluginHooks = (compilation, tracer) => {
	interceptAllHooksFor(
		{
			hooks:
				require("../javascript/JavascriptModulesPlugin").getCompilationHooks(
					compilation
				)
		},
		tracer,
		"JavascriptModulesPlugin"
	);
};

/**
 * Intercept all css modules plugin hooks.
 * @param {Compilation} compilation compilation
 * @param {Trace} tracer tracer
 */
const interceptAllCssModulesPluginHooks = (compilation, tracer) => {
	interceptAllHooksFor(
		{
			hooks: require("../css/CssModulesPlugin").getCompilationHooks(compilation)
		},
		tracer,
		"CssModulesPlugin"
	);
};

/** @typedef {(...args: EXPECTED_ANY[]) => EXPECTED_ANY | Promise<(...args: EXPECTED_ANY[]) => EXPECTED_ANY>} PluginFunction */

/**
 * Creates interceptor for.
 * @template T
 * @param {string} instance instance
 * @param {Trace} tracer tracer
 * @returns {(hookName: string) => HookInterceptor<EXPECTED_ANY, EXPECTED_ANY>} interceptor
 */
const makeInterceptorFor = (instance, tracer) => (hookName) => ({
	/**
	 * Returns modified full tap.
	 * @param {FullTap} tapInfo tap info
	 * @returns {FullTap} modified full tap
	 */
	register: (tapInfo) => {
		const { name, type, fn: internalFn } = tapInfo;
		const newFn =
			// Don't tap our own hooks to ensure stream can close cleanly
			name === PLUGIN_NAME
				? internalFn
				: makeNewProfiledTapFn(hookName, tracer, {
						name,
						type,
						fn: /** @type {PluginFunction} */ (internalFn)
					});
		return { ...tapInfo, fn: newFn };
	}
});

/**
 * Creates new profiled tap fn.
 * @param {string} hookName Name of the hook to profile.
 * @param {Trace} tracer The trace object.
 * @param {object} options Options for the profiled fn.
 * @param {string} options.name Plugin name
 * @param {"sync" | "async" | "promise"} options.type Plugin type (sync | async | promise)
 * @param {PluginFunction} options.fn Plugin function
 * @returns {PluginFunction} Chainable hooked function.
 */
const makeNewProfiledTapFn = (hookName, tracer, { name, type, fn }) => {
	const defaultCategory = ["blink.user_timing"];

	switch (type) {
		case "promise":
			return (...args) => {
				const id = ++tracer.counter;
				tracer.trace.begin({
					name,
					id,
					cat: defaultCategory
				});
				const promise =
					/** @type {Promise<(...args: EXPECTED_ANY[]) => EXPECTED_ANY>} */
					(fn(...args));
				return promise.then((r) => {
					tracer.trace.end({
						name,
						id,
						cat: defaultCategory
					});
					return r;
				});
			};
		case "async":
			return (...args) => {
				const id = ++tracer.counter;
				tracer.trace.begin({
					name,
					id,
					cat: defaultCategory
				});
				const callback = args.pop();
				fn(
					...args,
					/**
					 * Handles the cat callback for this hook.
					 * @param {...EXPECTED_ANY[]} r result
					 */
					(...r) => {
						tracer.trace.end({
							name,
							id,
							cat: defaultCategory
						});
						callback(...r);
					}
				);
			};
		case "sync":
			return (...args) => {
				const id = ++tracer.counter;
				// Do not instrument ourself due to the CPU
				// profile needing to be the last event in the trace.
				if (name === PLUGIN_NAME) {
					return fn(...args);
				}

				tracer.trace.begin({
					name,
					id,
					cat: defaultCategory
				});
				/** @type {PluginFunction} */
				let r;
				try {
					r = fn(...args);
				} catch (err) {
					tracer.trace.end({
						name,
						id,
						cat: defaultCategory
					});
					throw err;
				}
				tracer.trace.end({
					name,
					id,
					cat: defaultCategory
				});
				return r;
			};
		default:
			return fn;
	}
};

module.exports = ProfilingPlugin;
module.exports.Profiler = Profiler;
