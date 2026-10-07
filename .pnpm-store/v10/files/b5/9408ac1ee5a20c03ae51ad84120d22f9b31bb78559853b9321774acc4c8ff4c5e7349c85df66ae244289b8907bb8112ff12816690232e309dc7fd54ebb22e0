/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const webpackOptionsSchemaCheck = require("../schemas/WebpackOptions.check");
const webpackOptionsSchema = require("../schemas/WebpackOptions.json");
const Compiler = require("./Compiler");
const MultiCompiler = require("./MultiCompiler");
const WebpackOptionsApply = require("./WebpackOptionsApply");
const {
	applyWebpackOptionsBaseDefaults,
	applyWebpackOptionsDefaults
} = require("./config/defaults");
const {
	applyWebpackOptionsInterception,
	getNormalizedWebpackOptions
} = require("./config/normalization");
const NodeEnvironmentPlugin = require("./node/NodeEnvironmentPlugin");
const memoize = require("./util/memoize");

/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptionsNormalizedWithDefaults */
/** @typedef {import("./config/normalization").WebpackOptionsInterception} WebpackOptionsInterception */
/** @typedef {import("./Compiler").WatchOptions} WatchOptions */
/** @typedef {import("./MultiCompiler").MultiCompilerOptions} MultiCompilerOptions */
/** @typedef {import("./MultiCompiler").MultiWebpackOptions} MultiWebpackOptions */
/** @typedef {import("./MultiStats")} MultiStats */
/** @typedef {import("./Stats")} Stats */

/** @typedef {(this: Compiler, compiler: Compiler) => void} WebpackPluginFunction */
/** @typedef {(compiler: Compiler) => void} WebpackPluginInstanceApplyFunction */

const getValidateSchema = memoize(() => require("./validateSchema"));

/**
 * Defines the callback callback.
 * @template T
 * @template [R=void]
 * @callback Callback
 * @param {Error | null} err
 * @param {T=} result
 * @returns {R}
 */

/** @typedef {Callback<void>} ErrorCallback */

/**
 * Creates a multi compiler.
 * @param {ReadonlyArray<WebpackOptions>} childOptions options array
 * @param {MultiCompilerOptions} options options
 * @returns {MultiCompiler} a multi-compiler
 */
const createMultiCompiler = (childOptions, options) => {
	const compilers = childOptions.map((options, index) =>
		createCompiler(options, index)
	);
	const compiler = new MultiCompiler(compilers, options);
	for (const childCompiler of compilers) {
		if (childCompiler.options.dependencies) {
			compiler.setDependencies(
				childCompiler,
				childCompiler.options.dependencies
			);
		}
	}
	return compiler;
};

/**
 * Creates a compiler.
 * @param {WebpackOptions} rawOptions options object
 * @param {number=} compilerIndex index of compiler
 * @returns {Compiler} a compiler
 */
const createCompiler = (rawOptions, compilerIndex) => {
	let options = getNormalizedWebpackOptions(rawOptions);
	applyWebpackOptionsBaseDefaults(options);

	/** @type {WebpackOptionsInterception=} */
	let interception;
	({ options, interception } = applyWebpackOptionsInterception(options));

	const compiler = new Compiler(
		/** @type {string} */ (options.context),
		options
	);
	new NodeEnvironmentPlugin({
		infrastructureLogging: options.infrastructureLogging
	}).apply(compiler);
	if (Array.isArray(options.plugins)) {
		for (const plugin of options.plugins) {
			if (typeof plugin === "function") {
				/** @type {WebpackPluginFunction} */
				(plugin).call(compiler, compiler);
			} else if (plugin) {
				plugin.apply(compiler);
			}
		}
	}
	const resolvedDefaultOptions = applyWebpackOptionsDefaults(
		options,
		compilerIndex
	);
	if (resolvedDefaultOptions.platform) {
		compiler.platform = resolvedDefaultOptions.platform;
	}
	if (options.validate) {
		compiler.hooks.validate.call();
	}
	compiler.hooks.environment.call();
	compiler.hooks.afterEnvironment.call();
	new WebpackOptionsApply().process(
		/** @type {WebpackOptionsNormalizedWithDefaults} */
		(options),
		compiler,
		interception
	);
	compiler.hooks.initialize.call();
	return compiler;
};

/**
 * Returns array of options.
 * @template T
 * @param {T[] | T} options options
 * @returns {T[]} array of options
 */
const asArray = (options) =>
	Array.isArray(options) ? [...options] : [options];

/**
 * Checks whether it needs validate.
 * @param {WebpackOptions | null | undefined} options options
 * @returns {boolean} true when need to validate, otherwise false
 */
const needValidate = (options) => {
	if (
		options &&
		(options.validate === false ||
			(options.experiments &&
				options.experiments.futureDefaults === true &&
				(options.mode === "production" || !options.mode)))
	) {
		return false;
	}

	return true;
};

/**
 * Returns the compiler object.
 * @overload
 * @param {WebpackOptions} options options object
 * @param {Callback<Stats>} callback callback
 * @returns {Compiler | null} the compiler object
 */
/**
 * Returns the compiler object.
 * @overload
 * @param {WebpackOptions} options options object
 * @returns {Compiler} the compiler object
 */
/**
 * Returns the multi compiler object.
 * @overload
 * @param {MultiWebpackOptions} options options objects
 * @param {Callback<MultiStats>} callback callback
 * @returns {MultiCompiler | null} the multi compiler object
 */
/**
 * Returns the multi compiler object.
 * @overload
 * @param {MultiWebpackOptions} options options objects
 * @returns {MultiCompiler} the multi compiler object
 */
/**
 * Returns compiler or MultiCompiler.
 * @param {WebpackOptions | MultiWebpackOptions} options options
 * @param {Callback<Stats> & Callback<MultiStats>=} callback callback
 * @returns {Compiler | MultiCompiler | null} Compiler or MultiCompiler
 */
const webpack = (options, callback) => {
	const create = () => {
		const isMultiCompiler = Array.isArray(options);

		if (
			!asArray(/** @type {WebpackOptions} */ (options)).every((options) =>
				needValidate(options) ? webpackOptionsSchemaCheck(options) : true
			)
		) {
			getValidateSchema()(
				webpackOptionsSchema,
				isMultiCompiler
					? options.map((options) => (needValidate(options) ? options : {}))
					: needValidate(options)
						? options
						: {}
			);
			util.deprecate(
				() => {},
				"webpack bug: Pre-compiled schema reports error while real schema is happy. This has performance drawbacks.",
				"DEP_WEBPACK_PRE_COMPILED_SCHEMA_INVALID"
			)();
		}
		/** @type {MultiCompiler | Compiler} */
		let compiler;
		/** @type {boolean | undefined} */
		let watch = false;
		/** @type {WatchOptions | WatchOptions[]} */
		let watchOptions;
		if (isMultiCompiler) {
			/** @type {MultiCompiler} */
			compiler = createMultiCompiler(
				options,
				/** @type {MultiCompilerOptions} */
				(options)
			);
			watch = options.some((options) => options.watch);
			watchOptions = options.map((options) => options.watchOptions || {});
		} else {
			const webpackOptions = /** @type {WebpackOptions} */ (options);
			/** @type {Compiler} */
			compiler = createCompiler(webpackOptions);
			watch = webpackOptions.watch;
			watchOptions = webpackOptions.watchOptions || {};
		}
		return { compiler, watch, watchOptions };
	};
	if (callback) {
		try {
			const { compiler, watch, watchOptions } = create();
			if (watch) {
				compiler.watch(watchOptions, callback);
			} else {
				compiler.run((err, stats) => {
					compiler.close((err2) => {
						callback(
							err || err2,
							/** @type {options extends WebpackOptions ? Stats : MultiStats} */
							(stats)
						);
					});
				});
			}
			return compiler;
		} catch (err) {
			process.nextTick(() => callback(/** @type {Error} */ (err)));
			return null;
		}
	} else {
		const { compiler, watch } = create();
		if (watch) {
			util.deprecate(
				() => {},
				"A 'callback' argument needs to be provided to the 'webpack(options, callback)' function when the 'watch' option is set. There is no way to handle the 'watch' option without a callback.",
				"DEP_WEBPACK_WATCH_WITHOUT_CALLBACK"
			)();
		}
		return compiler;
	}
};

module.exports = webpack;
