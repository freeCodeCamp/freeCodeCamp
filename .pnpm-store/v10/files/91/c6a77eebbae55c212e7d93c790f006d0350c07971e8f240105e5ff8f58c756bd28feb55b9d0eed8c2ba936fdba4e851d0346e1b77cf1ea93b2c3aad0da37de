/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncWaterfallHook } = require("tapable");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
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
/** @typedef {import("./Module").ValueCacheVersion} ValueCacheVersion */
/** @typedef {import("./Module").ValueCacheVersions} ValueCacheVersions */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").DestructuringAssignmentProperties} DestructuringAssignmentProperties */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */
/** @typedef {import("./logging/Logger").Logger} Logger */
/** @typedef {import("./Compilation")} Compilation */

/** @typedef {null | undefined | RegExp | EXPECTED_FUNCTION | string | number | boolean | bigint | undefined} CodeValuePrimitive */
/** @typedef {RecursiveArrayOrRecord<CodeValuePrimitive | RuntimeValue>} CodeValue */

/**
 * Defines the runtime value options type used by this module.
 * @typedef {object} RuntimeValueOptions
 * @property {string[]=} fileDependencies
 * @property {string[]=} contextDependencies
 * @property {string[]=} missingDependencies
 * @property {string[]=} buildDependencies
 * @property {string | (() => string)=} version
 */

/** @typedef {(value: { module: NormalModule, key: string, readonly version: ValueCacheVersion }) => CodeValuePrimitive} GeneratorFn */

class RuntimeValue {
	/**
	 * Creates an instance of RuntimeValue.
	 * @param {GeneratorFn} fn generator function
	 * @param {true | string[] | RuntimeValueOptions=} options options
	 */
	constructor(fn, options) {
		/** @type {GeneratorFn} */
		this.fn = fn;
		if (Array.isArray(options)) {
			options = {
				fileDependencies: options
			};
		}
		/** @type {true | RuntimeValueOptions} */
		this.options = options || {};
	}

	get fileDependencies() {
		return this.options === true ? true : this.options.fileDependencies;
	}

	/**
	 * Returns code.
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
 * Returns used keys.
 * @param {DestructuringAssignmentProperties | undefined} properties properties
 * @returns {Set<string> | undefined} used keys
 */
function getObjKeys(properties) {
	if (!properties) return;
	return new Set([...properties].map((p) => p.id));
}

/** @typedef {Set<string> | null} ObjKeys */
/** @typedef {boolean | undefined | null} AsiSafe */

/**
 * Returns code converted to string that evaluates.
 * @param {EXPECTED_ANY[] | { [k: string]: EXPECTED_ANY }} obj obj
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
	/** @type {string} */
	let code;
	const arr = Array.isArray(obj);
	if (arr) {
		code = `[${obj
			.map((code) =>
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
			.join(",")}]`;
	} else {
		let keys = Object.keys(obj);
		if (objKeys) {
			keys = objKeys.size === 0 ? [] : keys.filter((k) => objKeys.has(k));
		}
		code = `{${keys
			.map((key) => {
				const code = obj[key];
				return `${key === "__proto__" ? '["__proto__"]' : JSON.stringify(key)}:${toCode(
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
 * Returns result.
 * @param {CodeValue} code code
 * @returns {string | undefined} result
 */
const toCacheVersion = (code) => {
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
		const items = Object.keys(code).map((key) => ({
			key,
			value: toCacheVersion(
				/** @type {Record<string, EXPECTED_ANY>} */
				(code)[key]
			)
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

/**
 * Defines the define plugin hooks type used by this module.
 * @typedef {object} DefinePluginHooks
 * @property {SyncWaterfallHook<[Record<string, CodeValue>]>} definitions
 */

/** @typedef {Record<string, CodeValue>} Definitions */

/** @type {WeakMap<Compilation, DefinePluginHooks>} */
const compilationHooksMap = new WeakMap();

class DefinePlugin {
	/**
	 * Returns the attached hooks.
	 * @param {Compilation} compilation the compilation
	 * @returns {DefinePluginHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				definitions: new SyncWaterfallHook(["definitions"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * Create a new define plugin
	 * @param {Definitions} definitions A map of global object definitions
	 */
	constructor(definitions) {
		/** @type {Definitions} */
		this.definitions = definitions;
	}

	/**
	 * Returns runtime value.
	 * @param {GeneratorFn} fn generator function
	 * @param {true | string[] | RuntimeValueOptions=} options options
	 * @returns {RuntimeValue} runtime value
	 */
	static runtimeValue(fn, options) {
		return new RuntimeValue(fn, options);
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const definitions = this.definitions;
				const hooks = DefinePlugin.getCompilationHooks(compilation);

				hooks.definitions.tap(PLUGIN_NAME, (previousDefinitions) => ({
					...previousDefinitions,
					...definitions
				}));

				/**
				 * @type {Map<string, Set<string>>}
				 */
				const finalByNestedKey = new Map();
				/**
				 * @type {Map<string, Set<string>>}
				 */
				const nestedByFinalKey = new Map();

				const logger = compilation.getLogger("webpack.DefinePlugin");
				compilation.dependencyTemplates.set(
					ConstDependency,
					new ConstDependency.Template()
				);
				const { runtimeTemplate } = compilation;

				const mainHash = createHash(compilation.outputOptions.hashFunction);
				mainHash.update(
					/** @type {string} */
					(compilation.valueCacheVersions.get(VALUE_DEP_MAIN)) || ""
				);

				/**
				 * Handles the hook callback for this code path.
				 * @param {JavascriptParser} parser Parser
				 * @returns {void}
				 */
				const handler = (parser) => {
					/** @type {Set<string>} */
					const hooked = new Set();
					const mainValue =
						/** @type {ValueCacheVersion} */
						(compilation.valueCacheVersions.get(VALUE_DEP_MAIN));
					parser.hooks.program.tap(PLUGIN_NAME, () => {
						const buildInfo = /** @type {BuildInfo} */ (
							parser.state.module.buildInfo
						);
						if (!buildInfo.valueDependencies) {
							buildInfo.valueDependencies = new Map();
						}
						buildInfo.valueDependencies.set(VALUE_DEP_MAIN, mainValue);
					});

					/**
					 * Adds value dependency.
					 * @param {string} key key
					 */
					const addValueDependency = (key) => {
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
					 * With value dependency.
					 * @template T
					 * @param {string} key key
					 * @param {(expression: Expression) => T} fn fn
					 * @returns {(expression: Expression) => T} result
					 */
					const withValueDependency =
						(key, fn) =>
						(...args) => {
							addValueDependency(key);
							return fn(...args);
						};

					/**
					 * Processes the provided definition.
					 * @param {Definitions} definitions Definitions map
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
									/** @type {Definitions} */ (code),
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
					 * Processes the provided prefix.
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
						if (prefix === "") {
							const final = splittedKey[splittedKey.length - 1];
							const nestedSet = nestedByFinalKey.get(final);
							if (!nestedSet || nestedSet.size <= 0) return;
							for (const nested of /** @type {Set<string>} */ (nestedSet)) {
								if (nested && !hooked.has(nested)) {
									// only detect the same nested key once
									hooked.add(nested);
									parser.hooks.collectDestructuringAssignmentProperties.tap(
										PLUGIN_NAME,
										(expr) => {
											const nameInfo = parser.getNameForExpression(expr);
											if (nameInfo && nameInfo.name === nested) return true;
										}
									);
									parser.hooks.expression.for(nested).tap(
										{
											name: PLUGIN_NAME,
											// why 100? Ensures it runs after object define
											stage: 100
										},
										(expr) => {
											const destructed =
												parser.destructuringAssignmentPropertiesFor(expr);
											if (destructed === undefined) {
												return;
											}
											/** @type {Definitions} */
											const obj = Object.create(null);
											const finalSet = finalByNestedKey.get(nested);
											for (const { id } of destructed) {
												const fullKey = `${nested}.${id}`;
												if (
													!finalSet ||
													!finalSet.has(id) ||
													!definitions[fullKey]
												) {
													return;
												}
												obj[id] = definitions[fullKey];
											}
											let strCode = stringifyObj(
												obj,
												parser,
												compilation.valueCacheVersions,
												key,
												runtimeTemplate,
												logger,
												!parser.isAsiPosition(
													/** @type {Range} */ (expr.range)[0]
												),
												getObjKeys(destructed)
											);
											if (parser.scope.inShorthand) {
												strCode = `${parser.scope.inShorthand}:${strCode}`;
											}
											return toConstantDependency(parser, strCode)(expr);
										}
									);
								}
							}
						}
					};

					/**
					 * Processes the provided key.
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
								.tap(PLUGIN_NAME, (expr) => {
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
							parser.hooks.expression.for(key).tap(PLUGIN_NAME, (expr) => {
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
						parser.hooks.evaluateTypeof.for(key).tap(PLUGIN_NAME, (expr) => {
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
						parser.hooks.typeof.for(key).tap(PLUGIN_NAME, (expr) => {
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
					 * Processes the provided key.
					 * @param {string} key Key
					 * @param {object} obj Object
					 * @returns {void}
					 */
					const applyObjectDefine = (key, obj) => {
						parser.hooks.canRename.for(key).tap(PLUGIN_NAME, () => {
							addValueDependency(key);
							return true;
						});
						parser.hooks.evaluateIdentifier
							.for(key)
							.tap(PLUGIN_NAME, (expr) => {
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
						parser.hooks.collectDestructuringAssignmentProperties.tap(
							PLUGIN_NAME,
							(expr) => {
								const nameInfo = parser.getNameForExpression(expr);
								if (nameInfo && nameInfo.name === key) return true;
							}
						);
						parser.hooks.expression.for(key).tap(PLUGIN_NAME, (expr) => {
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
				 * Processes the provided definition.
				 * @param {Definitions} definitions Definitions map
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
								/** @type {Definitions} */ (code),
								`${prefix + key}.`
							);
						}
					}
				};

				/**
				 * Walk definitions for keys.
				 * @param {Definitions} definitions Definitions map
				 * @returns {void}
				 */
				const walkDefinitionsForKeys = (definitions) => {
					/**
					 * Adds the provided map to the define plugin.
					 * @param {Map<string, Set<string>>} map Map
					 * @param {string} key key
					 * @param {string} value v
					 * @returns {void}
					 */
					const addToMap = (map, key, value) => {
						if (map.has(key)) {
							/** @type {Set<string>} */
							(map.get(key)).add(value);
						} else {
							map.set(key, new Set([value]));
						}
					};
					for (const key of Object.keys(definitions)) {
						const code = definitions[key];
						if (
							!code ||
							typeof code === "object" ||
							TYPEOF_OPERATOR_REGEXP.test(key)
						) {
							continue;
						}
						const idx = key.lastIndexOf(".");
						if (idx <= 0 || idx >= key.length - 1) {
							continue;
						}
						const nested = key.slice(0, idx);
						const final = key.slice(idx + 1);
						addToMap(finalByNestedKey, nested, final);
						addToMap(nestedByFinalKey, final, nested);
					}
				};

				walkDefinitionsForKeys(definitions);
				walkDefinitionsForValues(definitions, "");

				compilation.valueCacheVersions.set(
					VALUE_DEP_MAIN,
					mainHash.digest("hex").slice(0, 8)
				);
			}
		);
	}
}

module.exports = DefinePlugin;
