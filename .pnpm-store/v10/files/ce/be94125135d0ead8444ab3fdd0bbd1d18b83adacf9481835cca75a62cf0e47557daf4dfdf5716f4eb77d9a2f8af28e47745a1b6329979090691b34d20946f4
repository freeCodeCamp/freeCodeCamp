/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const WebpackError = require("./WebpackError");
const ConstDependency = require("./dependencies/ConstDependency");
const BasicEvaluatedExpression = require("./javascript/BasicEvaluatedExpression");
const { VariableInfo } = require("./javascript/JavascriptParser");
const {
	evaluateToString,
	toConstantDependency
} = require("./javascript/JavascriptParserHelpers");
const createHash = require("./util/createHash");

/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").ValueCacheVersions} ValueCacheVersions */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").DestructuringAssignmentProperty} DestructuringAssignmentProperty */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */
/** @typedef {import("./logging/Logger").Logger} Logger */
/** @typedef {import("./util/createHash").Algorithm} Algorithm */

/** @typedef {null|undefined|RegExp|Function|string|number|boolean|bigint|undefined} CodeValuePrimitive */
/** @typedef {RecursiveArrayOrRecord<CodeValuePrimitive|RuntimeValue>} CodeValue */

/**
 * @typedef {object} RuntimeValueOptions
 * @property {string[]=} fileDependencies
 * @property {string[]=} contextDependencies
 * @property {string[]=} missingDependencies
 * @property {string[]=} buildDependencies
 * @property {string|function(): string=} version
 */

/** @typedef {string | Set<string>} ValueCacheVersion */
/** @typedef {function({ module: NormalModule, key: string, readonly version: ValueCacheVersion }): CodeValuePrimitive} GeneratorFn */

class RuntimeValue {
	/**
	 * @param {GeneratorFn} fn generator function
	 * @param {true | string[] | RuntimeValueOptions=} options options
	 */
	constructor(fn, options) {
		this.fn = fn;
		if (Array.isArray(options)) {
			options = {
				fileDependencies: options
			};
		}
		this.options = options || {};
	}

	get fileDependencies() {
		return this.options === true ? true : this.options.fileDependencies;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {ValueCacheVersions} valueCacheVersions valueCacheVersions
	 * @param {string} key the defined key
	 * @returns {CodeValuePrimitive} code
	 */
	exec(parser, valueCacheVersions, key) {
		const buildInfo = /** @type {BuildInfo} */ (parser.state.module.buildInfo);
		if (this.options === true) {
			buildInfo.cacheable = false;
		} else {
			if (this.options.fileDependencies) {
				for (const dep of this.options.fileDependencies) {
					/** @type {NonNullable<BuildInfo["fileDependencies"]>} */
					(buildInfo.fileDependencies).add(dep);
				}
			}
			if (this.options.contextDependencies) {
				for (const dep of this.options.contextDependencies) {
					/** @type {NonNullable<BuildInfo["contextDependencies"]>} */
					(buildInfo.contextDependencies).add(dep);
				}
			}
			if (this.options.missingDependencies) {
				for (const dep of this.options.missingDependencies) {
					/** @type {NonNullable<BuildInfo["missingDependencies"]>} */
					(buildInfo.missingDependencies).add(dep);
				}
			}
			if (this.options.buildDependencies) {
				for (const dep of this.options.buildDependencies) {
					/** @type {NonNullable<BuildInfo["buildDependencies"]>} */
					(buildInfo.buildDependencies).add(dep);
				}
			}
		}

		return this.fn({
			module: parser.state.module,
			key,
			get version() {
				return /** @type {ValueCacheVersion} */ (
					valueCacheVersions.get(VALUE_DEP_PREFIX + key)
				);
			}
		});
	}

	getCacheVersion() {
		return this.options === true
			? undefined
			: (typeof this.options.version === "function"
					? this.options.version()
					: this.options.version) || "unset";
	}
}

/**
 * @param {Set<DestructuringAssignmentProperty> | undefined} properties properties
 * @returns {Set<string> | undefined} used keys
 */
function getObjKeys(properties) {
	if (!properties) return;
	return new Set([...properties].map(p => p.id));
}

/** @typedef {Set<string> | null} ObjKeys */
/** @typedef {boolean | undefined | null} AsiSafe */

/**
 * @param {any[]|{[k: string]: any}} obj obj
 * @param {JavascriptParser} parser Parser
 * @param {ValueCacheVersions} valueCacheVersions valueCacheVersions
 * @param {string} key the defined key
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {Logger} logger the logger object
 * @param {AsiSafe=} asiSafe asi safe (undefined: unknown, null: unneeded)
 * @param {ObjKeys=} objKeys used keys
 * @returns {string} code converted to string that evaluates
 */
const stringifyObj = (
	obj,
	parser,
	valueCacheVersions,
	key,
	runtimeTemplate,
	logger,
	asiSafe,
	objKeys
) => {
	let code;
	const arr = Array.isArray(obj);
	if (arr) {
		code = `[${
			/** @type {any[]} */ (obj)
				.map(code =>
					toCode(
						code,
						parser,
						valueCacheVersions,
						key,
						runtimeTemplate,
						logger,
						null
					)
				)
				.join(",")
		}]`;
	} else {
		let keys = Object.keys(obj);
		if (objKeys) {
			keys = objKeys.size === 0 ? [] : keys.filter(k => objKeys.has(k));
		}
		code = `{${keys
			.map(key => {
				const code = /** @type {{[k: string]: any}} */ (obj)[key];
				return `${JSON.stringify(key)}:${toCode(
					code,
					parser,
					valueCacheVersions,
					key,
					runtimeTemplate,
					logger,
					null
				)}`;
			})
			.join(",")}}`;
	}

	switch (asiSafe) {
		case null:
			return code;
		case true:
			return arr ? code : `(${code})`;
		case false:
			return arr ? `;${code}` : `;(${code})`;
		default:
			return `/*#__PURE__*/Object(${code})`;
	}
};

/**
 * Convert code to a string that evaluates
 * @param {CodeValue} code Code to evaluate
 * @param {JavascriptParser} parser Parser
 * @param {ValueCacheVersions} valueCacheVersions valueCacheVersions
 * @param {string} key the defined key
 * @param {RuntimeTemplate} runtimeTemplate the runtime template
 * @param {Logger} logger the logger object
 * @param {boolean | undefined | null=} asiSafe asi safe (undefined: unknown, null: unneeded)
 * @param {ObjKeys=} objKeys used keys
 * @returns {string} code converted to string that evaluates
 */
const toCode = (
	code,
	parser,
	valueCacheVersions,
	key,
	runtimeTemplate,
	logger,
	asiSafe,
	objKeys
) => {
	const transformToCode = () => {
		if (code === null) {
			return "null";
		}
		if (code === undefined) {
			return "undefined";
		}
		if (Object.is(code, -0)) {
			return "-0";
		}
		if (code instanceof RuntimeValue) {
			return toCode(
				code.exec(parser, valueCacheVersions, key),
				parser,
				valueCacheVersions,
				key,
				runtimeTemplate,
				logger,
				asiSafe
			);
		}
		if (code instanceof RegExp && code.toString) {
			return code.toString();
		}
		if (typeof code === "function" && code.toString) {
			return `(${code.toString()})`;
		}
		if (typeof code === "object") {
			return stringifyObj(
				code,
				parser,
				valueCacheVersions,
				key,
				runtimeTemplate,
				logger,
				asiSafe,
				objKeys
			);
		}
		if (typeof code === "bigint") {
			return runtimeTemplate.supportsBigIntLiteral()
				? `${code}n`
				: `BigInt("${code}")`;
		}
		return `${code}`;
	};

	const strCode = transformToCode();

	logger.debug(`Replaced "${key}" with "${strCode}"`);

	return strCode;
};

/**
 * @param {CodeValue} code code
 * @returns {string | undefined} result
 */
const toCacheVersion = code => {
	if (code === null) {
		return "null";
	}
	if (code === undefined) {
		return "undefined";
	}
	if (Object.is(code, -0)) {
		return "-0";
	}
	if (code instanceof RuntimeValue) {
		return code.getCacheVersion();
	}
	if (code instanceof RegExp && code.toString) {
		return code.toString();
	}
	if (typeof code === "function" && code.toString) {
		return `(${code.toString()})`;
	}
	if (typeof code === "object") {
		const items = Object.keys(code).map(key => ({
			key,
			value: toCacheVersion(/** @type {Record<string, any>} */ (code)[key])
		}));
		if (items.some(({ value }) => value === undefined)) return;
		return `{${items.map(({ key, value }) => `${key}: ${value}`).join(", ")}}`;
	}
	if (typeof code === "bigint") {
		return `${code}n`;
	}
	return `${code}`;
};

const PLUGIN_NAME = "DefinePlugin";
const VALUE_DEP_PREFIX = `webpack/${PLUGIN_NAME} `;
const VALUE_DEP_MAIN = `webpack/${PLUGIN_NAME}_hash`;
const TYPEOF_OPERATOR_REGEXP = /^typeof\s+/;
const WEBPACK_REQUIRE_FUNCTION_REGEXP = new RegExp(
	`${RuntimeGlobals.require}\\s*(!?\\.)`
);
const WEBPACK_REQUIRE_IDENTIFIER_REGEXP = new RegExp(RuntimeGlobals.require);

class DefinePlugin {
	/**
	 * Create a new define plugin
	 * @param {Record<string, CodeValue>} definitions A map of global object definitions
	 */
	constructor(definitions) {
		this.definitions = definitions;
	}

	/**
	 * @param {GeneratorFn} fn generator function
	 * @param {true | string[] | RuntimeValueOptions=} options options
	 * @returns {RuntimeValue} runtime value
	 */
	static runtimeValue(fn, options) {
		return new RuntimeValue(fn, options);
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const definitions = this.definitions;
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const logger = compilation.getLogger("webpack.DefinePlugin");
				compilation.dependencyTemplates.set(
					ConstDependency,
					new ConstDependency.Template()
				);
				const { runtimeTemplate } = compilation;

				const mainHash = createHash(
					/** @type {Algorithm} */
					(compilation.outputOptions.hashFunction)
				);
				mainHash.update(
					/** @type {string} */
					(compilation.valueCacheVersions.get(VALUE_DEP_MAIN)) || ""
				);

				/**
				 * Handler
				 * @param {JavascriptParser} parser Parser
				 * @returns {void}
				 */
				const handler = parser => {
					const mainValue =
						/** @type {ValueCacheVersion} */
						(compilation.valueCacheVersions.get(VALUE_DEP_MAIN));
					parser.hooks.program.tap(PLUGIN_NAME, () => {
						const buildInfo = /** @type {BuildInfo} */ (
							parser.state.module.buildInfo
						);
						if (!buildInfo.valueDependencies)
							buildInfo.valueDependencies = new Map();
						buildInfo.valueDependencies.set(VALUE_DEP_MAIN, mainValue);
					});

					/**
					 * @param {string} key key
					 */
					const addValueDependency = key => {
						const buildInfo =
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo);
						/** @type {NonNullable<BuildInfo["valueDependencies"]>} */
						(buildInfo.valueDependencies).set(
							VALUE_DEP_PREFIX + key,
							/** @type {ValueCacheVersion} */
							(compilation.valueCacheVersions.get(VALUE_DEP_PREFIX + key))
						);
					};

					/**
					 * @template {Function} T
					 * @param {string} key key
					 * @param {T} fn fn
					 * @returns {function(TODO): TODO} result
					 */
					const withValueDependency =
						(key, fn) =>
						(...args) => {
							addValueDependency(key);
							return fn(...args);
						};

					/**
					 * Walk definitions
					 * @param {Record<string, CodeValue>} definitions Definitions map
					 * @param {string} prefix Prefix string
					 * @returns {void}
					 */
					const walkDefinitions = (definitions, prefix) => {
						for (const key of Object.keys(definitions)) {
							const code = definitions[key];
							if (
								code &&
								typeof code === "object" &&
								!(code instanceof RuntimeValue) &&
								!(code instanceof RegExp)
							) {
								walkDefinitions(
									/** @type {Record<string, CodeValue>} */ (code),
									`${prefix + key}.`
								);
								applyObjectDefine(prefix + key, code);
								continue;
							}
							applyDefineKey(prefix, key);
							applyDefine(prefix + key, code);
						}
					};

					/**
					 * Apply define key
					 * @param {string} prefix Prefix
					 * @param {string} key Key
					 * @returns {void}
					 */
					const applyDefineKey = (prefix, key) => {
						const splittedKey = key.split(".");
						const firstKey = splittedKey[0];
						for (const [i, _] of splittedKey.slice(1).entries()) {
							const fullKey = prefix + splittedKey.slice(0, i + 1).join(".");
							parser.hooks.canRename.for(fullKey).tap(PLUGIN_NAME, () => {
								addValueDependency(key);
								if (
									parser.scope.definitions.get(firstKey) instanceof VariableInfo
								) {
									return false;
								}
								return true;
							});
						}
					};

					/**
					 * Apply Code
					 * @param {string} key Key
					 * @param {CodeValue} code Code
					 * @returns {void}
					 */
					const applyDefine = (key, code) => {
						const originalKey = key;
						const isTypeof = TYPEOF_OPERATOR_REGEXP.test(key);
						if (isTypeof) key = key.replace(TYPEOF_OPERATOR_REGEXP, "");
						let recurse = false;
						let recurseTypeof = false;
						if (!isTypeof) {
							parser.hooks.canRename.for(key).tap(PLUGIN_NAME, () => {
								addValueDependency(originalKey);
								return true;
							});
							parser.hooks.evaluateIdentifier
								.for(key)
								.tap(PLUGIN_NAME, expr => {
									/**
									 * this is needed in case there is a recursion in the DefinePlugin
									 * to prevent an endless recursion
									 * e.g.: new DefinePlugin({
									 * "a": "b",
									 * "b": "a"
									 * });
									 */
									if (recurse) return;
									addValueDependency(originalKey);
									recurse = true;
									const res = parser.evaluate(
										toCode(
											code,
											parser,
											compilation.valueCacheVersions,
											key,
											runtimeTemplate,
											logger,
											null
										)
									);
									recurse = false;
									res.setRange(/** @type {Range} */ (expr.range));
									return res;
								});
							parser.hooks.expression.for(key).tap(PLUGIN_NAME, expr => {
								addValueDependency(originalKey);
								let strCode = toCode(
									code,
									parser,
									compilation.valueCacheVersions,
									originalKey,
									runtimeTemplate,
									logger,
									!parser.isAsiPosition(/** @type {Range} */ (expr.range)[0]),
									null
								);

								if (parser.scope.inShorthand) {
									strCode = `${parser.scope.inShorthand}:${strCode}`;
								}

								if (WEBPACK_REQUIRE_FUNCTION_REGEXP.test(strCode)) {
									return toConstantDependency(parser, strCode, [
										RuntimeGlobals.require
									])(expr);
								} else if (WEBPACK_REQUIRE_IDENTIFIER_REGEXP.test(strCode)) {
									return toConstantDependency(parser, strCode, [
										RuntimeGlobals.requireScope
									])(expr);
								}
								return toConstantDependency(parser, strCode)(expr);
							});
						}
						parser.hooks.evaluateTypeof.for(key).tap(PLUGIN_NAME, expr => {
							/**
							 * this is needed in case there is a recursion in the DefinePlugin
							 * to prevent an endless recursion
							 * e.g.: new DefinePlugin({
							 * "typeof a": "typeof b",
							 * "typeof b": "typeof a"
							 * });
							 */
							if (recurseTypeof) return;
							recurseTypeof = true;
							addValueDependency(originalKey);
							const codeCode = toCode(
								code,
								parser,
								compilation.valueCacheVersions,
								originalKey,
								runtimeTemplate,
								logger,
								null
							);
							const typeofCode = isTypeof ? codeCode : `typeof (${codeCode})`;
							const res = parser.evaluate(typeofCode);
							recurseTypeof = false;
							res.setRange(/** @type {Range} */ (expr.range));
							return res;
						});
						parser.hooks.typeof.for(key).tap(PLUGIN_NAME, expr => {
							addValueDependency(originalKey);
							const codeCode = toCode(
								code,
								parser,
								compilation.valueCacheVersions,
								originalKey,
								runtimeTemplate,
								logger,
								null
							);
							const typeofCode = isTypeof ? codeCode : `typeof (${codeCode})`;
							const res = parser.evaluate(typeofCode);
							if (!res.isString()) return;
							return toConstantDependency(
								parser,
								JSON.stringify(res.string)
							).bind(parser)(expr);
						});
					};

					/**
					 * Apply Object
					 * @param {string} key Key
					 * @param {object} obj Object
					 * @returns {void}
					 */
					const applyObjectDefine = (key, obj) => {
						parser.hooks.canRename.for(key).tap(PLUGIN_NAME, () => {
							addValueDependency(key);
							return true;
						});
						parser.hooks.evaluateIdentifier.for(key).tap(PLUGIN_NAME, expr => {
							addValueDependency(key);
							return new BasicEvaluatedExpression()
								.setTruthy()
								.setSideEffects(false)
								.setRange(/** @type {Range} */ (expr.range));
						});
						parser.hooks.evaluateTypeof
							.for(key)
							.tap(
								PLUGIN_NAME,
								withValueDependency(key, evaluateToString("object"))
							);
						parser.hooks.expression.for(key).tap(PLUGIN_NAME, expr => {
							addValueDependency(key);
							let strCode = stringifyObj(
								obj,
								parser,
								compilation.valueCacheVersions,
								key,
								runtimeTemplate,
								logger,
								!parser.isAsiPosition(/** @type {Range} */ (expr.range)[0]),
								getObjKeys(parser.destructuringAssignmentPropertiesFor(expr))
							);

							if (parser.scope.inShorthand) {
								strCode = `${parser.scope.inShorthand}:${strCode}`;
							}

							if (WEBPACK_REQUIRE_FUNCTION_REGEXP.test(strCode)) {
								return toConstantDependency(parser, strCode, [
									RuntimeGlobals.require
								])(expr);
							} else if (WEBPACK_REQUIRE_IDENTIFIER_REGEXP.test(strCode)) {
								return toConstantDependency(parser, strCode, [
									RuntimeGlobals.requireScope
								])(expr);
							}
							return toConstantDependency(parser, strCode)(expr);
						});
						parser.hooks.typeof
							.for(key)
							.tap(
								PLUGIN_NAME,
								withValueDependency(
									key,
									toConstantDependency(parser, JSON.stringify("object"))
								)
							);
					};

					walkDefinitions(definitions, "");
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);

				/**
				 * Walk definitions
				 * @param {Record<string, CodeValue>} definitions Definitions map
				 * @param {string} prefix Prefix string
				 * @returns {void}
				 */
				const walkDefinitionsForValues = (definitions, prefix) => {
					for (const key of Object.keys(definitions)) {
						const code = definitions[key];
						const version = /** @type {string} */ (toCacheVersion(code));
						const name = VALUE_DEP_PREFIX + prefix + key;
						mainHash.update(`|${prefix}${key}`);
						const oldVersion = compilation.valueCacheVersions.get(name);
						if (oldVersion === undefined) {
							compilation.valueCacheVersions.set(name, version);
						} else if (oldVersion !== version) {
							const warning = new WebpackError(
								`${PLUGIN_NAME}\nConflicting values for '${prefix + key}'`
							);
							warning.details = `'${oldVersion}' !== '${version}'`;
							warning.hideStack = true;
							compilation.warnings.push(warning);
						}
						if (
							code &&
							typeof code === "object" &&
							!(code instanceof RuntimeValue) &&
							!(code instanceof RegExp)
						) {
							walkDefinitionsForValues(
								/** @type {Record<string, CodeValue>} */ (code),
								`${prefix + key}.`
							);
						}
					}
				};

				walkDefinitionsForValues(definitions, "");

				compilation.valueCacheVersions.set(
					VALUE_DEP_MAIN,
					/** @type {string} */ (mainHash.digest("hex").slice(0, 8))
				);
			}
		);
	}
}
module.exports = DefinePlugin;
