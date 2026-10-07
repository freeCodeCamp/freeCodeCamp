import { n as __toESM, t as require_binding } from "./binding-BeU_1iEk.mjs";
import { i as logInputHookInOutputPlugin, n as error } from "./logs-D80CXhvg.mjs";
import { n as BuiltinPlugin } from "./normalize-string-or-regex-CbQQ69gT.mjs";
import { c as __decorate, d as PlainObjectLike, f as MinimalPluginContextImpl, h as LOG_LEVEL_DEBUG, i as transformModuleInfo, l as transformAssetSource, m as normalizeLog, o as transformToRollupOutput, p as normalizeHook, s as transformRenderedChunk, t as bindingifyInputOptions, u as lazyProp, v as LOG_LEVEL_WARN, x as VERSION, y as logLevelPriority } from "./bindingify-input-options-DbbBhzky.mjs";
import { i as unimplemented } from "./misc-DJYbNKZX.mjs";
import { i as unwrapBindingResult } from "./error-DL-e8-oE.mjs";
import { Worker } from "node:worker_threads";
import path, { sep } from "node:path";
import { formatWithOptions, styleText } from "node:util";
import process$1 from "node:process";
import * as tty from "node:tty";
import os from "node:os";
//#region src/log/logger.ts
var import_binding = /* @__PURE__ */ __toESM(require_binding(), 1);
function getLogger(plugins, onLog, logLevel, watchMode) {
	const minimalPriority = logLevelPriority[logLevel];
	const logger = (level, log, skipped = /* @__PURE__ */ new Set()) => {
		if (logLevelPriority[level] < minimalPriority) return;
		for (const plugin of getSortedPlugins("onLog", plugins)) {
			if (skipped.has(plugin)) continue;
			const { onLog: pluginOnLog } = plugin;
			if (pluginOnLog) {
				const getLogHandler = (level) => {
					if (logLevelPriority[level] < minimalPriority) return () => {};
					return (log) => logger(level, normalizeLog(log), new Set(skipped).add(plugin));
				};
				if (("handler" in pluginOnLog ? pluginOnLog.handler : pluginOnLog).call({
					debug: getLogHandler("debug"),
					error: (log) => error(normalizeLog(log)),
					info: getLogHandler("info"),
					meta: {
						rollupVersion: "4.23.0",
						rolldownVersion: VERSION,
						watchMode
					},
					warn: getLogHandler("warn"),
					pluginName: plugin.name || "unknown"
				}, level, log) === false) return;
			}
		}
		onLog(level, log);
	};
	return logger;
}
const getOnLog = (config, logLevel, printLog = defaultPrintLog) => {
	const { onwarn, onLog } = config;
	const defaultOnLog = getDefaultOnLog(printLog, onwarn);
	if (onLog) {
		const minimalPriority = logLevelPriority[logLevel];
		return (level, log) => onLog(level, addLogToString(log), (level, handledLog) => {
			if (level === "error") return error(normalizeLog(handledLog));
			if (logLevelPriority[level] >= minimalPriority) defaultOnLog(level, normalizeLog(handledLog));
		});
	}
	return defaultOnLog;
};
const getDefaultOnLog = (printLog, onwarn) => onwarn ? (level, log) => {
	if (level === "warn") onwarn(addLogToString(log), (warning) => printLog(LOG_LEVEL_WARN, normalizeLog(warning)));
	else printLog(level, log);
} : printLog;
const addLogToString = (log) => {
	Object.defineProperty(log, "toString", {
		value: () => getExtendedLogMessage(log),
		writable: true
	});
	return log;
};
const defaultPrintLog = (level, log) => {
	const message = getExtendedLogMessage(log);
	switch (level) {
		case LOG_LEVEL_WARN: return console.warn(message);
		case LOG_LEVEL_DEBUG: return console.debug(message);
		default: return console.info(message);
	}
};
const getExtendedLogMessage = (log) => {
	let prefix = "";
	if (log.plugin) prefix += `(${log.plugin} plugin) `;
	if (log.loc) prefix += `${relativeId(log.loc.file)} (${log.loc.line}:${log.loc.column}) `;
	return prefix + log.message;
};
function relativeId(id) {
	if (!path.isAbsolute(id)) return id;
	return path.relative(path.resolve(), id);
}
//#endregion
//#region src/constants/plugin.ts
const ENUMERATED_INPUT_PLUGIN_HOOK_NAMES = [
	"options",
	"buildStart",
	"resolveId",
	"load",
	"transform",
	"moduleParsed",
	"buildEnd",
	"onLog",
	"resolveDynamicImport",
	"closeBundle",
	"closeWatcher",
	"watchChange"
];
const ENUMERATED_OUTPUT_PLUGIN_HOOK_NAMES = [
	"augmentChunkHash",
	"outputOptions",
	"renderChunk",
	"renderStart",
	"renderError",
	"writeBundle",
	"generateBundle"
];
const ENUMERATED_PLUGIN_HOOK_NAMES = [
	...ENUMERATED_INPUT_PLUGIN_HOOK_NAMES,
	...ENUMERATED_OUTPUT_PLUGIN_HOOK_NAMES,
	"footer",
	"banner",
	"intro",
	"outro"
];
ENUMERATED_PLUGIN_HOOK_NAMES[0], ENUMERATED_PLUGIN_HOOK_NAMES[0], ENUMERATED_PLUGIN_HOOK_NAMES[1], ENUMERATED_PLUGIN_HOOK_NAMES[1], ENUMERATED_PLUGIN_HOOK_NAMES[2], ENUMERATED_PLUGIN_HOOK_NAMES[2], ENUMERATED_PLUGIN_HOOK_NAMES[3], ENUMERATED_PLUGIN_HOOK_NAMES[3], ENUMERATED_PLUGIN_HOOK_NAMES[4], ENUMERATED_PLUGIN_HOOK_NAMES[4], ENUMERATED_PLUGIN_HOOK_NAMES[5], ENUMERATED_PLUGIN_HOOK_NAMES[5], ENUMERATED_PLUGIN_HOOK_NAMES[6], ENUMERATED_PLUGIN_HOOK_NAMES[6], ENUMERATED_PLUGIN_HOOK_NAMES[7], ENUMERATED_PLUGIN_HOOK_NAMES[7], ENUMERATED_PLUGIN_HOOK_NAMES[8], ENUMERATED_PLUGIN_HOOK_NAMES[8], ENUMERATED_PLUGIN_HOOK_NAMES[9], ENUMERATED_PLUGIN_HOOK_NAMES[9], ENUMERATED_PLUGIN_HOOK_NAMES[10], ENUMERATED_PLUGIN_HOOK_NAMES[10], ENUMERATED_PLUGIN_HOOK_NAMES[11], ENUMERATED_PLUGIN_HOOK_NAMES[11], ENUMERATED_PLUGIN_HOOK_NAMES[12], ENUMERATED_PLUGIN_HOOK_NAMES[12], ENUMERATED_PLUGIN_HOOK_NAMES[13], ENUMERATED_PLUGIN_HOOK_NAMES[13], ENUMERATED_PLUGIN_HOOK_NAMES[14], ENUMERATED_PLUGIN_HOOK_NAMES[14], ENUMERATED_PLUGIN_HOOK_NAMES[15], ENUMERATED_PLUGIN_HOOK_NAMES[15], ENUMERATED_PLUGIN_HOOK_NAMES[16], ENUMERATED_PLUGIN_HOOK_NAMES[16], ENUMERATED_PLUGIN_HOOK_NAMES[17], ENUMERATED_PLUGIN_HOOK_NAMES[17], ENUMERATED_PLUGIN_HOOK_NAMES[18], ENUMERATED_PLUGIN_HOOK_NAMES[18], ENUMERATED_PLUGIN_HOOK_NAMES[19], ENUMERATED_PLUGIN_HOOK_NAMES[19], ENUMERATED_PLUGIN_HOOK_NAMES[20], ENUMERATED_PLUGIN_HOOK_NAMES[20], ENUMERATED_PLUGIN_HOOK_NAMES[21], ENUMERATED_PLUGIN_HOOK_NAMES[21], ENUMERATED_PLUGIN_HOOK_NAMES[22], ENUMERATED_PLUGIN_HOOK_NAMES[22];
//#endregion
//#region src/utils/async-flatten.ts
async function asyncFlatten(array) {
	do
		array = (await Promise.all(array)).flat(Infinity);
	while (array.some((v) => v?.then));
	return array;
}
//#endregion
//#region src/utils/normalize-plugin-option.ts
const normalizePluginOption = async (plugins) => (await asyncFlatten([plugins])).filter(Boolean);
function checkOutputPluginOption(plugins, onLog) {
	for (const plugin of plugins) for (const hook of ENUMERATED_INPUT_PLUGIN_HOOK_NAMES) if (hook in plugin) {
		delete plugin[hook];
		onLog(LOG_LEVEL_WARN, logInputHookInOutputPlugin(plugin.name, hook));
	}
	return plugins;
}
function normalizePlugins(plugins, anonymousPrefix) {
	for (const [index, plugin] of plugins.entries()) {
		if ("_parallel" in plugin) continue;
		if (plugin instanceof BuiltinPlugin) continue;
		if (!plugin.name) plugin.name = `${anonymousPrefix}${index + 1}`;
	}
	return plugins;
}
const ANONYMOUS_PLUGIN_PREFIX = "at position ";
const ANONYMOUS_OUTPUT_PLUGIN_PREFIX = "at output position ";
//#endregion
//#region src/plugin/plugin-driver.ts
var PluginDriver = class {
	static async callOptionsHook(inputOptions, watchMode = false) {
		const logLevel = inputOptions.logLevel || "info";
		const plugins = getSortedPlugins("options", getObjectPlugins(await normalizePluginOption(inputOptions.plugins)));
		const logger = getLogger(plugins, getOnLog(inputOptions, logLevel), logLevel, watchMode);
		for (const plugin of plugins) {
			const name = plugin.name || "unknown";
			const options = plugin.options;
			if (options) {
				const { handler } = normalizeHook(options);
				const result = await handler.call(new MinimalPluginContextImpl(logger, logLevel, name, watchMode, "onLog"), inputOptions);
				if (result) inputOptions = result;
			}
		}
		return inputOptions;
	}
	static callOutputOptionsHook(rawPlugins, outputOptions, onLog, logLevel, watchMode) {
		const sortedPlugins = getSortedPlugins("outputOptions", getObjectPlugins(rawPlugins));
		for (const plugin of sortedPlugins) {
			const name = plugin.name || "unknown";
			const options = plugin.outputOptions;
			if (options) {
				const { handler } = normalizeHook(options);
				const result = handler.call(new MinimalPluginContextImpl(onLog, logLevel, name, watchMode), outputOptions);
				if (result) outputOptions = result;
			}
		}
		return outputOptions;
	}
};
function getObjectPlugins(plugins) {
	return plugins.filter((plugin) => {
		if (!plugin) return;
		if ("_parallel" in plugin) return;
		if (plugin instanceof BuiltinPlugin) return;
		return plugin;
	});
}
function getSortedPlugins(hookName, plugins) {
	const pre = [];
	const normal = [];
	const post = [];
	for (const plugin of plugins) {
		const hook = plugin[hookName];
		if (hook) {
			if (typeof hook === "object") {
				if (hook.order === "pre") {
					pre.push(plugin);
					continue;
				}
				if (hook.order === "post") {
					post.push(plugin);
					continue;
				}
			}
			normal.push(plugin);
		}
	}
	return [
		...pre,
		...normal,
		...post
	];
}
//#endregion
//#region ../../node_modules/.pnpm/valibot@1.3.1_typescript@6.0.3/node_modules/valibot/dist/index.mjs
let store$4;
/**
* Returns the global configuration.
*
* @param config The config to merge.
*
* @returns The configuration.
*/
/* @__NO_SIDE_EFFECTS__ */
function getGlobalConfig(config$1) {
	return {
		lang: config$1?.lang ?? store$4?.lang,
		message: config$1?.message,
		abortEarly: config$1?.abortEarly ?? store$4?.abortEarly,
		abortPipeEarly: config$1?.abortPipeEarly ?? store$4?.abortPipeEarly
	};
}
let store$3;
/**
* Returns a global error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/
/* @__NO_SIDE_EFFECTS__ */
function getGlobalMessage(lang) {
	return store$3?.get(lang);
}
let store$2;
/**
* Returns a schema error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/
/* @__NO_SIDE_EFFECTS__ */
function getSchemaMessage(lang) {
	return store$2?.get(lang);
}
let store$1;
/**
* Returns a specific error message.
*
* @param reference The identifier reference.
* @param lang The language of the message.
*
* @returns The error message.
*/
/* @__NO_SIDE_EFFECTS__ */
function getSpecificMessage(reference, lang) {
	return store$1?.get(reference)?.get(lang);
}
/**
* Stringifies an unknown input to a literal or type string.
*
* @param input The unknown input.
*
* @returns A literal or type string.
*
* @internal
*/
/* @__NO_SIDE_EFFECTS__ */
function _stringify(input) {
	const type = typeof input;
	if (type === "string") return `"${input}"`;
	if (type === "number" || type === "bigint" || type === "boolean") return `${input}`;
	if (type === "object" || type === "function") return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
	return type;
}
/**
* Adds an issue to the dataset.
*
* @param context The issue context.
* @param label The issue label.
* @param dataset The input dataset.
* @param config The configuration.
* @param other The optional props.
*
* @internal
*/
function _addIssue(context, label, dataset, config$1, other) {
	const input = other && "input" in other ? other.input : dataset.value;
	const expected = other?.expected ?? context.expects ?? null;
	const received = other?.received ?? /* @__PURE__ */ _stringify(input);
	const issue = {
		kind: context.kind,
		type: context.type,
		input,
		expected,
		received,
		message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
		requirement: context.requirement,
		path: other?.path,
		issues: other?.issues,
		lang: config$1.lang,
		abortEarly: config$1.abortEarly,
		abortPipeEarly: config$1.abortPipeEarly
	};
	const isSchema = context.kind === "schema";
	const message$1 = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config$1.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
	if (message$1 !== void 0) issue.message = typeof message$1 === "function" ? message$1(issue) : message$1;
	if (isSchema) dataset.typed = false;
	if (dataset.issues) dataset.issues.push(issue);
	else dataset.issues = [issue];
}
/**
* Returns the Standard Schema properties.
*
* @param context The schema context.
*
* @returns The Standard Schema properties.
*/
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(context) {
	return {
		version: 1,
		vendor: "valibot",
		validate(value$1) {
			return context["~run"]({ value: value$1 }, /* @__PURE__ */ getGlobalConfig());
		}
	};
}
/**
* Disallows inherited object properties and prevents object prototype
* pollution by disallowing certain keys.
*
* @param object The object to check.
* @param key The key to check.
*
* @returns Whether the key is allowed.
*
* @internal
*/
/* @__NO_SIDE_EFFECTS__ */
function _isValidObjectKey(object$1, key) {
	return Object.hasOwn(object$1, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
}
/**
* Joins multiple `expects` values with the given separator.
*
* @param values The `expects` values.
* @param separator The separator.
*
* @returns The joined `expects` property.
*
* @internal
*/
/* @__NO_SIDE_EFFECTS__ */
function _joinExpects(values$1, separator) {
	const list = [...new Set(values$1)];
	if (list.length > 1) return `(${list.join(` ${separator} `)})`;
	return list[0] ?? "never";
}
/**
* A Valibot error with useful information.
*/
var ValiError = class extends Error {
	/**
	* Creates a Valibot error with useful information.
	*
	* @param issues The error issues.
	*/
	constructor(issues) {
		super(issues[0].message);
		this.name = "ValiError";
		this.issues = issues;
	}
};
/* @__NO_SIDE_EFFECTS__ */
function args(schema) {
	return {
		kind: "transformation",
		type: "args",
		reference: args,
		async: false,
		schema,
		"~run"(dataset, config$1) {
			const func = dataset.value;
			dataset.value = (...args_) => {
				const argsDataset = this.schema["~run"]({ value: args_ }, config$1);
				if (argsDataset.issues) throw new ValiError(argsDataset.issues);
				return func(...argsDataset.value);
			};
			return dataset;
		}
	};
}
/**
* Creates an await transformation action.
*
* @returns An await action.
*/
/* @__NO_SIDE_EFFECTS__ */
function awaitAsync() {
	return {
		kind: "transformation",
		type: "await",
		reference: awaitAsync,
		async: true,
		async "~run"(dataset) {
			dataset.value = await dataset.value;
			return dataset;
		}
	};
}
/**
* Creates a description metadata action.
*
* @param description_ The description text.
*
* @returns A description action.
*/
/* @__NO_SIDE_EFFECTS__ */
function description(description_) {
	return {
		kind: "metadata",
		type: "description",
		reference: description,
		description: description_
	};
}
/* @__NO_SIDE_EFFECTS__ */
function returns(schema) {
	return {
		kind: "transformation",
		type: "returns",
		reference: returns,
		async: false,
		schema,
		"~run"(dataset, config$1) {
			const func = dataset.value;
			dataset.value = (...args_) => {
				const returnsDataset = this.schema["~run"]({ value: func(...args_) }, config$1);
				if (returnsDataset.issues) throw new ValiError(returnsDataset.issues);
				return returnsDataset.value;
			};
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function returnsAsync(schema) {
	return {
		kind: "transformation",
		type: "returns",
		reference: returnsAsync,
		async: false,
		schema,
		"~run"(dataset, config$1) {
			const func = dataset.value;
			dataset.value = async (...args_) => {
				const returnsDataset = await this.schema["~run"]({ value: await func(...args_) }, config$1);
				if (returnsDataset.issues) throw new ValiError(returnsDataset.issues);
				return returnsDataset.value;
			};
			return dataset;
		}
	};
}
/**
* Returns the fallback value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The output dataset if available.
* @param config The config if available.
*
* @returns The fallback value.
*/
/* @__NO_SIDE_EFFECTS__ */
function getFallback(schema, dataset, config$1) {
	return typeof schema.fallback === "function" ? schema.fallback(dataset, config$1) : schema.fallback;
}
/**
* Returns the default value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The input dataset if available.
* @param config The config if available.
*
* @returns The default value.
*/
/* @__NO_SIDE_EFFECTS__ */
function getDefault(schema, dataset, config$1) {
	return typeof schema.default === "function" ? schema.default(dataset, config$1) : schema.default;
}
/**
* Checks if the input matches the schema. By using a type predicate, this
* function can be used as a type guard.
*
* @param schema The schema to be used.
* @param input The input to be tested.
*
* @returns Whether the input matches the schema.
*/
/* @__NO_SIDE_EFFECTS__ */
function is(schema, input) {
	return !schema["~run"]({ value: input }, { abortEarly: true }).issues;
}
/**
* Creates an any schema.
*
* Hint: This schema function exists only for completeness and is not
* recommended in practice. Instead, `unknown` should be used to accept
* unknown data.
*
* @returns An any schema.
*/
/* @__NO_SIDE_EFFECTS__ */
function any() {
	return {
		kind: "schema",
		type: "any",
		reference: any,
		expects: "any",
		async: false,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset) {
			dataset.typed = true;
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function array(item, message$1) {
	return {
		kind: "schema",
		type: "array",
		reference: array,
		expects: "Array",
		async: false,
		item,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (Array.isArray(input)) {
				dataset.typed = true;
				dataset.value = [];
				for (let key = 0; key < input.length; key++) {
					const value$1 = input[key];
					const itemDataset = this.item["~run"]({ value: value$1 }, config$1);
					if (itemDataset.issues) {
						const pathItem = {
							type: "array",
							origin: "value",
							input,
							key,
							value: value$1
						};
						for (const issue of itemDataset.issues) {
							if (issue.path) issue.path.unshift(pathItem);
							else issue.path = [pathItem];
							dataset.issues?.push(issue);
						}
						if (!dataset.issues) dataset.issues = itemDataset.issues;
						if (config$1.abortEarly) {
							dataset.typed = false;
							break;
						}
					}
					if (!itemDataset.typed) dataset.typed = false;
					dataset.value.push(itemDataset.value);
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function boolean(message$1) {
	return {
		kind: "schema",
		type: "boolean",
		reference: boolean,
		expects: "boolean",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (typeof dataset.value === "boolean") dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function custom(check$1, message$1) {
	return {
		kind: "schema",
		type: "custom",
		reference: custom,
		expects: "unknown",
		async: false,
		check: check$1,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (this.check(dataset.value)) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function function_(message$1) {
	return {
		kind: "schema",
		type: "function",
		reference: function_,
		expects: "Function",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (typeof dataset.value === "function") dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function instance(class_, message$1) {
	return {
		kind: "schema",
		type: "instance",
		reference: instance,
		expects: class_.name,
		async: false,
		class: class_,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value instanceof this.class) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function literal(literal_, message$1) {
	return {
		kind: "schema",
		type: "literal",
		reference: literal,
		expects: /* @__PURE__ */ _stringify(literal_),
		async: false,
		literal: literal_,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === this.literal) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function never(message$1) {
	return {
		kind: "schema",
		type: "never",
		reference: never,
		expects: "never",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			_addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function nullish(wrapped, default_) {
	return {
		kind: "schema",
		type: "nullish",
		reference: nullish,
		expects: `(${wrapped.expects} | null | undefined)`,
		async: false,
		wrapped,
		default: default_,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === null || dataset.value === void 0) {
				if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
				if (dataset.value === null || dataset.value === void 0) {
					dataset.typed = true;
					return dataset;
				}
			}
			return this.wrapped["~run"](dataset, config$1);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function number(message$1) {
	return {
		kind: "schema",
		type: "number",
		reference: number,
		expects: "number",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (typeof dataset.value === "number" && !isNaN(dataset.value)) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function object(entries$1, message$1) {
	return {
		kind: "schema",
		type: "object",
		reference: object,
		expects: "Object",
		async: false,
		entries: entries$1,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (input && typeof input === "object") {
				dataset.typed = true;
				dataset.value = {};
				for (const key in this.entries) {
					const valueSchema = this.entries[key];
					if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
						const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
						const valueDataset = valueSchema["~run"]({ value: value$1 }, config$1);
						if (valueDataset.issues) {
							const pathItem = {
								type: "object",
								origin: "value",
								input,
								key,
								value: value$1
							};
							for (const issue of valueDataset.issues) {
								if (issue.path) issue.path.unshift(pathItem);
								else issue.path = [pathItem];
								dataset.issues?.push(issue);
							}
							if (!dataset.issues) dataset.issues = valueDataset.issues;
							if (config$1.abortEarly) {
								dataset.typed = false;
								break;
							}
						}
						if (!valueDataset.typed) dataset.typed = false;
						dataset.value[key] = valueDataset.value;
					} else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
					else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
						_addIssue(this, "key", dataset, config$1, {
							input: void 0,
							expected: `"${key}"`,
							path: [{
								type: "object",
								origin: "key",
								input,
								key,
								value: input[key]
							}]
						});
						if (config$1.abortEarly) break;
					}
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function optional(wrapped, default_) {
	return {
		kind: "schema",
		type: "optional",
		reference: optional,
		expects: `(${wrapped.expects} | undefined)`,
		async: false,
		wrapped,
		default: default_,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === void 0) {
				if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
				if (dataset.value === void 0) {
					dataset.typed = true;
					return dataset;
				}
			}
			return this.wrapped["~run"](dataset, config$1);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function picklist(options, message$1) {
	return {
		kind: "schema",
		type: "picklist",
		reference: picklist,
		expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
		async: false,
		options,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (this.options.includes(dataset.value)) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function promise(message$1) {
	return {
		kind: "schema",
		type: "promise",
		reference: promise,
		expects: "Promise",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value instanceof Promise) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function record(key, value$1, message$1) {
	return {
		kind: "schema",
		type: "record",
		reference: record,
		expects: "Object",
		async: false,
		key,
		value: value$1,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (input && typeof input === "object") {
				dataset.typed = true;
				dataset.value = {};
				for (const entryKey in input) if (/* @__PURE__ */ _isValidObjectKey(input, entryKey)) {
					const entryValue = input[entryKey];
					const keyDataset = this.key["~run"]({ value: entryKey }, config$1);
					if (keyDataset.issues) {
						const pathItem = {
							type: "object",
							origin: "key",
							input,
							key: entryKey,
							value: entryValue
						};
						for (const issue of keyDataset.issues) {
							issue.path = [pathItem];
							dataset.issues?.push(issue);
						}
						if (!dataset.issues) dataset.issues = keyDataset.issues;
						if (config$1.abortEarly) {
							dataset.typed = false;
							break;
						}
					}
					const valueDataset = this.value["~run"]({ value: entryValue }, config$1);
					if (valueDataset.issues) {
						const pathItem = {
							type: "object",
							origin: "value",
							input,
							key: entryKey,
							value: entryValue
						};
						for (const issue of valueDataset.issues) {
							if (issue.path) issue.path.unshift(pathItem);
							else issue.path = [pathItem];
							dataset.issues?.push(issue);
						}
						if (!dataset.issues) dataset.issues = valueDataset.issues;
						if (config$1.abortEarly) {
							dataset.typed = false;
							break;
						}
					}
					if (!keyDataset.typed || !valueDataset.typed) dataset.typed = false;
					if (keyDataset.typed) dataset.value[keyDataset.value] = valueDataset.value;
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function strictObject(entries$1, message$1) {
	return {
		kind: "schema",
		type: "strict_object",
		reference: strictObject,
		expects: "Object",
		async: false,
		entries: entries$1,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (input && typeof input === "object") {
				dataset.typed = true;
				dataset.value = {};
				for (const key in this.entries) {
					const valueSchema = this.entries[key];
					if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
						const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
						const valueDataset = valueSchema["~run"]({ value: value$1 }, config$1);
						if (valueDataset.issues) {
							const pathItem = {
								type: "object",
								origin: "value",
								input,
								key,
								value: value$1
							};
							for (const issue of valueDataset.issues) {
								if (issue.path) issue.path.unshift(pathItem);
								else issue.path = [pathItem];
								dataset.issues?.push(issue);
							}
							if (!dataset.issues) dataset.issues = valueDataset.issues;
							if (config$1.abortEarly) {
								dataset.typed = false;
								break;
							}
						}
						if (!valueDataset.typed) dataset.typed = false;
						dataset.value[key] = valueDataset.value;
					} else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
					else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
						_addIssue(this, "key", dataset, config$1, {
							input: void 0,
							expected: `"${key}"`,
							path: [{
								type: "object",
								origin: "key",
								input,
								key,
								value: input[key]
							}]
						});
						if (config$1.abortEarly) break;
					}
				}
				if (!dataset.issues || !config$1.abortEarly) {
					for (const key in input) if (!(key in this.entries)) {
						_addIssue(this, "key", dataset, config$1, {
							input: key,
							expected: "never",
							path: [{
								type: "object",
								origin: "key",
								input,
								key,
								value: input[key]
							}]
						});
						break;
					}
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function string(message$1) {
	return {
		kind: "schema",
		type: "string",
		reference: string,
		expects: "string",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (typeof dataset.value === "string") dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function tuple(items, message$1) {
	return {
		kind: "schema",
		type: "tuple",
		reference: tuple,
		expects: "Array",
		async: false,
		items,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			const input = dataset.value;
			if (Array.isArray(input)) {
				dataset.typed = true;
				dataset.value = [];
				for (let key = 0; key < this.items.length; key++) {
					const value$1 = input[key];
					const itemDataset = this.items[key]["~run"]({ value: value$1 }, config$1);
					if (itemDataset.issues) {
						const pathItem = {
							type: "array",
							origin: "value",
							input,
							key,
							value: value$1
						};
						for (const issue of itemDataset.issues) {
							if (issue.path) issue.path.unshift(pathItem);
							else issue.path = [pathItem];
							dataset.issues?.push(issue);
						}
						if (!dataset.issues) dataset.issues = itemDataset.issues;
						if (config$1.abortEarly) {
							dataset.typed = false;
							break;
						}
					}
					if (!itemDataset.typed) dataset.typed = false;
					dataset.value.push(itemDataset.value);
				}
			} else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function undefined_(message$1) {
	return {
		kind: "schema",
		type: "undefined",
		reference: undefined_,
		expects: "undefined",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === void 0) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/**
* Returns the sub issues of the provided datasets for the union issue.
*
* @param datasets The datasets.
*
* @returns The sub issues.
*
* @internal
*/
/* @__NO_SIDE_EFFECTS__ */
function _subIssues(datasets) {
	let issues;
	if (datasets) for (const dataset of datasets) if (issues) issues.push(...dataset.issues);
	else issues = dataset.issues;
	return issues;
}
/* @__NO_SIDE_EFFECTS__ */
function union(options, message$1) {
	return {
		kind: "schema",
		type: "union",
		reference: union,
		expects: /* @__PURE__ */ _joinExpects(options.map((option) => option.expects), "|"),
		async: false,
		options,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			let validDataset;
			let typedDatasets;
			let untypedDatasets;
			for (const schema of this.options) {
				const optionDataset = schema["~run"]({ value: dataset.value }, config$1);
				if (optionDataset.typed) if (optionDataset.issues) if (typedDatasets) typedDatasets.push(optionDataset);
				else typedDatasets = [optionDataset];
				else {
					validDataset = optionDataset;
					break;
				}
				else if (untypedDatasets) untypedDatasets.push(optionDataset);
				else untypedDatasets = [optionDataset];
			}
			if (validDataset) return validDataset;
			if (typedDatasets) {
				if (typedDatasets.length === 1) return typedDatasets[0];
				_addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(typedDatasets) });
				dataset.typed = true;
			} else if (untypedDatasets?.length === 1) return untypedDatasets[0];
			else _addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(untypedDatasets) });
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function unionAsync(options, message$1) {
	return {
		kind: "schema",
		type: "union",
		reference: unionAsync,
		expects: /* @__PURE__ */ _joinExpects(options.map((option) => option.expects), "|"),
		async: true,
		options,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		async "~run"(dataset, config$1) {
			let validDataset;
			let typedDatasets;
			let untypedDatasets;
			for (const schema of this.options) {
				const optionDataset = await schema["~run"]({ value: dataset.value }, config$1);
				if (optionDataset.typed) if (optionDataset.issues) if (typedDatasets) typedDatasets.push(optionDataset);
				else typedDatasets = [optionDataset];
				else {
					validDataset = optionDataset;
					break;
				}
				else if (untypedDatasets) untypedDatasets.push(optionDataset);
				else untypedDatasets = [optionDataset];
			}
			if (validDataset) return validDataset;
			if (typedDatasets) {
				if (typedDatasets.length === 1) return typedDatasets[0];
				_addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(typedDatasets) });
				dataset.typed = true;
			} else if (untypedDatasets?.length === 1) return untypedDatasets[0];
			else _addIssue(this, "type", dataset, config$1, { issues: /* @__PURE__ */ _subIssues(untypedDatasets) });
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function void_(message$1) {
	return {
		kind: "schema",
		type: "void",
		reference: void_,
		expects: "void",
		async: false,
		message: message$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			if (dataset.value === void 0) dataset.typed = true;
			else _addIssue(this, "type", dataset, config$1);
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function keyof(schema, message$1) {
	return /* @__PURE__ */ picklist(Object.keys(schema.entries), message$1);
}
/**
* Creates a modified copy of an object schema that does not contain the
* selected entries.
*
* @param schema The schema to omit from.
* @param keys The selected entries.
*
* @returns An object schema.
*/
/* @__NO_SIDE_EFFECTS__ */
function omit(schema, keys) {
	const entries$1 = { ...schema.entries };
	for (const key of keys) delete entries$1[key];
	return {
		...schema,
		entries: entries$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function partial(schema, keys) {
	const entries$1 = {};
	for (const key in schema.entries) entries$1[key] = !keys || keys.includes(key) ? /* @__PURE__ */ optional(schema.entries[key]) : schema.entries[key];
	return {
		...schema,
		entries: entries$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function pipe(...pipe$1) {
	return {
		...pipe$1[0],
		pipe: pipe$1,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(dataset, config$1) {
			for (const item of pipe$1) if (item.kind !== "metadata") {
				if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
					dataset.typed = false;
					break;
				}
				if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = item["~run"](dataset, config$1);
			}
			return dataset;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function pipeAsync(...pipe$1) {
	return {
		...pipe$1[0],
		pipe: pipe$1,
		async: true,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		async "~run"(dataset, config$1) {
			for (const item of pipe$1) if (item.kind !== "metadata") {
				if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
					dataset.typed = false;
					break;
				}
				if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = await item["~run"](dataset, config$1);
			}
			return dataset;
		}
	};
}
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parse result.
*/
/* @__NO_SIDE_EFFECTS__ */
function safeParse(schema, input, config$1) {
	const dataset = schema["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config$1));
	return {
		typed: dataset.typed,
		success: !dataset.issues,
		output: dataset.value,
		issues: dataset.issues
	};
}
//#endregion
//#region src/utils/flatten-valibot-schema.ts
function unwrapSchema(schema) {
	if (!schema) return schema;
	if (schema.type === "optional" && schema.wrapped) return unwrapSchema(schema.wrapped);
	if (schema.type === "nullable" && schema.wrapped) return unwrapSchema(schema.wrapped);
	if (schema.type === "nullish" && schema.wrapped) return unwrapSchema(schema.wrapped);
	return schema;
}
function getValibotSchemaType(schema) {
	if (!schema) return "any";
	if (schema.type) switch (schema.type) {
		case "string": return "string";
		case "number": return "number";
		case "boolean": return "boolean";
		case "array": return "array";
		case "object":
		case "strict_object":
		case "loose_object": return "object";
		case "union": return "union";
		case "literal": return typeof schema.literal;
		case "record": return "object";
		case "optional": return getValibotSchemaType(schema.wrapped);
		case "nullable": return getValibotSchemaType(schema.wrapped);
		case "nullish": return getValibotSchemaType(schema.wrapped);
		case "never": return "never";
		case "any": return "any";
		case "custom": return "any";
		case "function": return "never";
		case "instance": return "object";
		default: return "any";
	}
	return "any";
}
function getValibotDescription(schema) {
	if (!schema) return void 0;
	if (schema.pipe && Array.isArray(schema.pipe)) {
		for (const action of schema.pipe) if (action.type === "description" && action.description) return action.description;
	}
	if (schema.type === "optional" && schema.wrapped) return getValibotDescription(schema.wrapped);
}
function flattenValibotSchema(schema, result = {}, prefix = "") {
	if (!schema || typeof schema !== "object") return result;
	if (schema.type === "strict_object" || schema.type === "object" || schema.type === "loose_object") {
		if (schema.entries && typeof schema.entries === "object") for (const [key, value] of Object.entries(schema.entries)) {
			const fullKey = prefix ? `${prefix}.${key}` : key;
			const valueSchema = value;
			const type = getValibotSchemaType(valueSchema);
			const description = getValibotDescription(valueSchema);
			if (type === "object") {
				const unwrappedSchema = unwrapSchema(valueSchema);
				if (unwrappedSchema && unwrappedSchema.entries) flattenValibotSchema(unwrappedSchema, result, fullKey);
				else result[fullKey] = {
					type,
					description
				};
			} else result[fullKey] = {
				type,
				description
			};
		}
	}
	return result;
}
//#endregion
//#region src/utils/style-text.ts
/**
* Cross-platform styleText utility that works in both Node.js and browser environments
* In Node.js, it uses the native `styleText` from `node:util`
* In browser, it provides empty styling functions for compatibility
*/
function styleText$1(...args) {
	return styleText(...args);
}
//#endregion
//#region src/utils/validator.ts
function isTypeTrue() {}
const StringOrRegExpSchema = /* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ instance(RegExp)]);
isTypeTrue();
function vFunction() {
	return /* @__PURE__ */ function_();
}
const LogLevelSchema = /* @__PURE__ */ union([
	/* @__PURE__ */ literal("debug"),
	/* @__PURE__ */ literal("info"),
	/* @__PURE__ */ literal("warn")
]);
isTypeTrue();
const LogLevelOptionSchema = /* @__PURE__ */ union([LogLevelSchema, /* @__PURE__ */ literal("silent")]);
isTypeTrue();
const LogLevelWithErrorSchema = /* @__PURE__ */ union([LogLevelSchema, /* @__PURE__ */ literal("error")]);
isTypeTrue();
const RollupLogSchema = /* @__PURE__ */ any();
const RollupLogWithStringSchema = /* @__PURE__ */ union([RollupLogSchema, /* @__PURE__ */ string()]);
isTypeTrue();
const InputOptionSchema = /* @__PURE__ */ union([
	/* @__PURE__ */ string(),
	/* @__PURE__ */ array(/* @__PURE__ */ string()),
	/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string())
]);
isTypeTrue();
const ExternalOptionFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([
	/* @__PURE__ */ string(),
	/* @__PURE__ */ optional(/* @__PURE__ */ string()),
	/* @__PURE__ */ boolean()
])), /* @__PURE__ */ returns(/* @__PURE__ */ nullish(/* @__PURE__ */ boolean())));
isTypeTrue();
const ExternalOptionSchema = /* @__PURE__ */ union([
	StringOrRegExpSchema,
	/* @__PURE__ */ array(StringOrRegExpSchema),
	ExternalOptionFunctionSchema
]);
isTypeTrue();
const ModuleTypesSchema = /* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ union([
	/* @__PURE__ */ literal("asset"),
	/* @__PURE__ */ literal("base64"),
	/* @__PURE__ */ literal("binary"),
	/* @__PURE__ */ literal("copy"),
	/* @__PURE__ */ literal("css"),
	/* @__PURE__ */ literal("dataurl"),
	/* @__PURE__ */ literal("empty"),
	/* @__PURE__ */ literal("js"),
	/* @__PURE__ */ literal("json"),
	/* @__PURE__ */ literal("jsx"),
	/* @__PURE__ */ literal("text"),
	/* @__PURE__ */ literal("ts"),
	/* @__PURE__ */ literal("tsx")
]));
isTypeTrue();
const JsxOptionsSchema = /* @__PURE__ */ strictObject({
	runtime: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal("classic"), /* @__PURE__ */ literal("automatic")])), /* @__PURE__ */ description("Which runtime to use")),
	development: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Development specific information")),
	throwIfNamespace: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Toggles whether to throw an error when a tag name uses an XML namespace")),
	pure: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Mark JSX elements and top-level React method calls as pure for tree shaking.")),
	importSource: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Import the factory of element and fragment if mode is classic")),
	pragma: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Jsx element transformation")),
	pragmaFrag: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Jsx fragment transformation")),
	refresh: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ any()])), /* @__PURE__ */ description("Enable react fast refresh"))
});
isTypeTrue();
const HelperModeSchema = /* @__PURE__ */ union([/* @__PURE__ */ literal("Runtime"), /* @__PURE__ */ literal("External")]);
const DecoratorOptionSchema = /* @__PURE__ */ object({
	legacy: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	emitDecoratorMetadata: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
});
isTypeTrue();
const HelpersSchema = /* @__PURE__ */ object({ mode: /* @__PURE__ */ optional(HelperModeSchema) });
isTypeTrue();
const TypescriptSchema = /* @__PURE__ */ object({
	jsxPragma: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
	jsxPragmaFrag: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
	onlyRemoveTypeImports: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	allowNamespaces: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	allowDeclareFields: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	removeClassFieldsWithoutInitializer: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	optimizeConstEnums: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	optimizeEnums: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	declaration: /* @__PURE__ */ optional(/* @__PURE__ */ object({
		stripInternal: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		sourcemap: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
	})),
	rewriteImportExtensions: /* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal("rewrite"),
		/* @__PURE__ */ literal("remove"),
		/* @__PURE__ */ boolean()
	]))
});
isTypeTrue();
const AssumptionsSchema = /* @__PURE__ */ object({
	ignoreFunctionLength: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	noDocumentAll: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	objectRestNoSymbols: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	pureGetters: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	setPublicClassFields: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
});
isTypeTrue();
const TransformPluginsSchema = /* @__PURE__ */ object({
	styledComponents: /* @__PURE__ */ optional(/* @__PURE__ */ any()),
	taggedTemplateEscape: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
});
isTypeTrue();
const TransformOptionsSchema = /* @__PURE__ */ object({
	assumptions: /* @__PURE__ */ optional(AssumptionsSchema),
	typescript: /* @__PURE__ */ optional(TypescriptSchema),
	helpers: /* @__PURE__ */ optional(HelpersSchema),
	decorator: /* @__PURE__ */ optional(DecoratorOptionSchema),
	jsx: /* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal(false),
		/* @__PURE__ */ literal("preserve"),
		/* @__PURE__ */ literal("react"),
		/* @__PURE__ */ literal("react-jsx"),
		JsxOptionsSchema
	])),
	target: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ array(/* @__PURE__ */ string())])), /* @__PURE__ */ description("The JavaScript target environment")),
	define: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string())), /* @__PURE__ */ description("Define global variables (syntax: key:value,key2:value2)")),
	inject: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ tuple([/* @__PURE__ */ string(), /* @__PURE__ */ string()])]))), /* @__PURE__ */ description("Inject import statements on demand")),
	dropLabels: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())), /* @__PURE__ */ description("Remove labeled statements with these label names")),
	plugins: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(TransformPluginsSchema), /* @__PURE__ */ description("Third-party plugins to use"))
});
isTypeTrue();
const WatcherFileWatcherOptionsSchema = /* @__PURE__ */ strictObject({
	usePolling: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Use polling-based file watching instead of native OS events")),
	pollInterval: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Poll interval in milliseconds (only used when usePolling is true)")),
	compareContentsForPolling: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Compare file contents for poll-based watchers (only used when usePolling is true)")),
	useDebounce: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Use debounced event delivery at the filesystem level")),
	debounceDelay: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Debounce delay in milliseconds (only used when useDebounce is true)")),
	debounceTickRate: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Tick rate in milliseconds for debouncer (only used when useDebounce is true)"))
});
const WatcherOptionsSchema = /* @__PURE__ */ strictObject({
	chokidar: /* @__PURE__ */ optional(/* @__PURE__ */ never(`The "watch.chokidar" option is deprecated, please use "watch.watcher" instead of it`)),
	exclude: /* @__PURE__ */ optional(/* @__PURE__ */ union([StringOrRegExpSchema, /* @__PURE__ */ array(StringOrRegExpSchema)])),
	include: /* @__PURE__ */ optional(/* @__PURE__ */ union([StringOrRegExpSchema, /* @__PURE__ */ array(StringOrRegExpSchema)])),
	watcher: /* @__PURE__ */ optional(WatcherFileWatcherOptionsSchema),
	notify: /* @__PURE__ */ optional(WatcherFileWatcherOptionsSchema),
	skipWrite: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Skip the bundle.write() step")),
	buildDelay: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Throttle watch rebuilds")),
	clearScreen: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to clear the screen when a rebuild is triggered")),
	onInvalidate: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(vFunction()), /* @__PURE__ */ description("An optional function that will be called immediately every time a module changes that is part of the build."))
});
isTypeTrue();
const ChecksOptionsSchema = /* @__PURE__ */ strictObject({
	circularDependency: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when detecting circular dependency")),
	eval: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when detecting uses of direct `eval`s")),
	missingGlobalName: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when the `output.globals` option is missing when needed")),
	missingNameOptionForIifeExport: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when the `output.name` option is missing when needed")),
	mixedExports: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when the way to export values is ambiguous")),
	unresolvedEntry: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when an entrypoint cannot be resolved")),
	unresolvedImport: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when an import cannot be resolved")),
	filenameConflict: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when files generated have the same name with different contents")),
	commonJsVariableInEsm: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a CommonJS variable is used in an ES module")),
	importIsUndefined: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when an imported variable is not exported")),
	emptyImportMeta: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when `import.meta` is not supported with the output format and is replaced with an empty object (`{}`)")),
	toleratedTransform: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when detecting tolerated transform")),
	cannotCallNamespace: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a namespace is called as a function")),
	configurationFieldConflict: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a config value is overridden by another config value with a higher priority")),
	preferBuiltinFeature: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a plugin that is covered by a built-in feature is used")),
	couldNotCleanDirectory: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when Rolldown could not clean the output directory")),
	pluginTimings: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when plugins take significant time during the build process")),
	duplicateShebang: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when both the code and postBanner contain shebang")),
	unsupportedTsconfigOption: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a tsconfig option or combination of options is not supported")),
	ineffectiveDynamicImport: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to emit warnings when a module is dynamically imported but also statically imported, making the dynamic import ineffective for code splitting"))
});
isTypeTrue();
const CompressOptionsKeepNamesSchema = /* @__PURE__ */ strictObject({
	function: /* @__PURE__ */ boolean(),
	class: /* @__PURE__ */ boolean()
});
isTypeTrue();
const CompressTreeshakeOptionsSchema = /* @__PURE__ */ strictObject({
	annotations: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	manualPureFunctions: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	propertyReadSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ literal("always")])),
	propertyWriteSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	unknownGlobalSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	invalidImportSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
});
isTypeTrue();
const CompressOptionsSchema = /* @__PURE__ */ strictObject({
	target: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ array(/* @__PURE__ */ string())])),
	dropConsole: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	dropDebugger: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	keepNames: /* @__PURE__ */ optional(CompressOptionsKeepNamesSchema),
	unused: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ literal("keep_assign")])),
	joinVars: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	sequences: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	dropLabels: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	maxIterations: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	treeshake: /* @__PURE__ */ optional(CompressTreeshakeOptionsSchema)
});
isTypeTrue();
const MangleOptionsKeepNamesSchema = /* @__PURE__ */ strictObject({
	function: /* @__PURE__ */ boolean(),
	class: /* @__PURE__ */ boolean()
});
isTypeTrue();
const MangleOptionsSchema = /* @__PURE__ */ strictObject({
	toplevel: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	keepNames: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), MangleOptionsKeepNamesSchema])),
	debug: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
});
isTypeTrue();
const CodegenOptionsSchema = /* @__PURE__ */ strictObject({ removeWhitespace: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()) });
isTypeTrue();
const MinifyOptionsSchema = /* @__PURE__ */ strictObject({
	compress: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), CompressOptionsSchema])),
	mangle: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), MangleOptionsSchema])),
	codegen: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), CodegenOptionsSchema]))
});
isTypeTrue();
const ResolveOptionsSchema = /* @__PURE__ */ strictObject({
	alias: /* @__PURE__ */ optional(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ union([
		/* @__PURE__ */ literal(false),
		/* @__PURE__ */ string(),
		/* @__PURE__ */ array(/* @__PURE__ */ string())
	]))),
	aliasFields: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ array(/* @__PURE__ */ string()))),
	conditionNames: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	extensionAlias: /* @__PURE__ */ optional(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ array(/* @__PURE__ */ string()))),
	exportsFields: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ array(/* @__PURE__ */ string()))),
	extensions: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	mainFields: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	mainFiles: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	modules: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())),
	symlinks: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	tsconfigFilename: /* @__PURE__ */ optional(/* @__PURE__ */ string())
});
isTypeTrue();
const TreeshakingOptionsSchema = /* @__PURE__ */ strictObject({
	moduleSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ any()),
	annotations: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	manualPureFunctions: /* @__PURE__ */ optional(/* @__PURE__ */ custom((input) => /* @__PURE__ */ is(/* @__PURE__ */ array(/* @__PURE__ */ string()), input), "string array")),
	unknownGlobalSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	invalidImportSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	commonjs: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	propertyReadSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal(false), /* @__PURE__ */ literal("always")])),
	propertyWriteSideEffects: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal(false), /* @__PURE__ */ literal("always")]))
});
isTypeTrue();
const OptimizationOptionsSchema = /* @__PURE__ */ strictObject({
	inlineConst: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ strictObject({
		mode: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal("all"), /* @__PURE__ */ literal("smart")])),
		pass: /* @__PURE__ */ optional(/* @__PURE__ */ number())
	})])), /* @__PURE__ */ description("Enable crossmodule constant inlining")),
	pifeForModuleWrappers: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Use PIFE pattern for module wrappers"))
});
isTypeTrue();
const LogOrStringHandlerSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([LogLevelWithErrorSchema, RollupLogWithStringSchema])));
isTypeTrue();
const OnLogSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([
	LogLevelSchema,
	RollupLogSchema,
	LogOrStringHandlerSchema
])));
isTypeTrue();
const OnwarnSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([RollupLogSchema, /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ union([RollupLogWithStringSchema, /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ returns(RollupLogWithStringSchema))])])))])));
isTypeTrue();
const DevModeSchema = /* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ strictObject({
	port: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	host: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
	implement: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
	lazy: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
})]);
isTypeTrue();
const InputOptionsSchema = /* @__PURE__ */ strictObject({
	input: /* @__PURE__ */ optional(InputOptionSchema),
	plugins: /* @__PURE__ */ optional(/* @__PURE__ */ custom(() => true)),
	external: /* @__PURE__ */ optional(ExternalOptionSchema),
	makeAbsoluteExternalsRelative: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ literal("ifRelativeSource")])),
	resolve: /* @__PURE__ */ optional(ResolveOptionsSchema),
	cwd: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Current working directory")),
	platform: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal("browser"),
		/* @__PURE__ */ literal("neutral"),
		/* @__PURE__ */ literal("node")
	])), /* @__PURE__ */ description(`Platform for which the code should be generated (node, ${styleText$1("underline", "browser")}, neutral)`)),
	shimMissingExports: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Create shim variables for missing exports")),
	treeshake: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), TreeshakingOptionsSchema])),
	optimization: /* @__PURE__ */ optional(OptimizationOptionsSchema),
	logLevel: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(LogLevelOptionSchema), /* @__PURE__ */ description(`Log level (${styleText$1("dim", "silent")}, ${styleText$1(["underline", "gray"], "info")}, debug, ${styleText$1("yellow", "warn")})`)),
	onLog: /* @__PURE__ */ optional(OnLogSchema),
	onwarn: /* @__PURE__ */ optional(OnwarnSchema),
	moduleTypes: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(ModuleTypesSchema), /* @__PURE__ */ description("Module types for customized extensions")),
	experimental: /* @__PURE__ */ optional(/* @__PURE__ */ strictObject({
		viteMode: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		resolveNewUrlToAsset: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		devMode: /* @__PURE__ */ optional(DevModeSchema),
		chunkModulesOrder: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal("module-id"), /* @__PURE__ */ literal("exec-order")])),
		attachDebugInfo: /* @__PURE__ */ optional(/* @__PURE__ */ union([
			/* @__PURE__ */ literal("none"),
			/* @__PURE__ */ literal("simple"),
			/* @__PURE__ */ literal("full")
		])),
		chunkImportMap: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ object({
			baseUrl: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
			fileName: /* @__PURE__ */ optional(/* @__PURE__ */ string())
		})])),
		onDemandWrapping: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		incrementalBuild: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		nativeMagicString: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		chunkOptimization: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		lazyBarrel: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
	})),
	transform: /* @__PURE__ */ optional(TransformOptionsSchema),
	watch: /* @__PURE__ */ optional(/* @__PURE__ */ union([WatcherOptionsSchema, /* @__PURE__ */ literal(false)])),
	checks: /* @__PURE__ */ optional(ChecksOptionsSchema),
	devtools: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ object({ sessionId: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Used to name the build.")) })), /* @__PURE__ */ description("Enable debug mode. Emit debug information to disk. This might slow down the build process significantly.")),
	preserveEntrySignatures: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal("strict"),
		/* @__PURE__ */ literal("allow-extension"),
		/* @__PURE__ */ literal("exports-only"),
		/* @__PURE__ */ literal(false)
	]))),
	context: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("The value of `this` at the top level of each module.")),
	tsconfig: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ string()])), /* @__PURE__ */ description("Path to the tsconfig.json file."))
});
isTypeTrue();
const InputCliOverrideSchema = /* @__PURE__ */ strictObject({
	input: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())), /* @__PURE__ */ description("Entry file")),
	external: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string())), /* @__PURE__ */ description("Comma-separated list of module ids to exclude from the bundle `<module-id>,...`")),
	treeshake: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("enable treeshaking")),
	makeAbsoluteExternalsRelative: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Prevent normalization of external imports")),
	preserveEntrySignatures: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ literal(false)), /* @__PURE__ */ description("Avoid facade chunks for entry points")),
	context: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("The entity top-level `this` represents."))
});
const InputCliOptionsSchema = /* @__PURE__ */ omit(/* @__PURE__ */ strictObject({
	...InputOptionsSchema.entries,
	...InputCliOverrideSchema.entries
}), [
	"plugins",
	"onwarn",
	"onLog",
	"resolve",
	"experimental",
	"watch"
]);
const ModuleFormatSchema = /* @__PURE__ */ union([
	/* @__PURE__ */ literal("es"),
	/* @__PURE__ */ literal("cjs"),
	/* @__PURE__ */ literal("esm"),
	/* @__PURE__ */ literal("module"),
	/* @__PURE__ */ literal("commonjs"),
	/* @__PURE__ */ literal("iife"),
	/* @__PURE__ */ literal("umd")
]);
isTypeTrue();
const AddonFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ custom(() => true)])), /* @__PURE__ */ returnsAsync(/* @__PURE__ */ unionAsync([/* @__PURE__ */ string(), /* @__PURE__ */ pipeAsync(/* @__PURE__ */ promise(), /* @__PURE__ */ awaitAsync(), /* @__PURE__ */ string())])));
isTypeTrue();
const ChunkFileNamesFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ custom(() => true)])), /* @__PURE__ */ returns(/* @__PURE__ */ string()));
isTypeTrue();
const ChunkFileNamesSchema = /* @__PURE__ */ union([/* @__PURE__ */ string(), ChunkFileNamesFunctionSchema]);
const AssetFileNamesFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ custom(() => true)])), /* @__PURE__ */ returns(/* @__PURE__ */ string()));
isTypeTrue();
const AssetFileNamesSchema = /* @__PURE__ */ union([/* @__PURE__ */ string(), AssetFileNamesFunctionSchema]);
const SanitizeFileNameFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string()])), /* @__PURE__ */ returns(/* @__PURE__ */ string()));
isTypeTrue();
const SanitizeFileNameSchema = /* @__PURE__ */ union([/* @__PURE__ */ boolean(), SanitizeFileNameFunctionSchema]);
const GlobalsFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string()])), /* @__PURE__ */ returns(/* @__PURE__ */ string()));
isTypeTrue();
const PathsFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string()])), /* @__PURE__ */ returns(/* @__PURE__ */ string()));
isTypeTrue();
const ManualChunksFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string(), /* @__PURE__ */ object({})])), /* @__PURE__ */ returns(/* @__PURE__ */ nullish(/* @__PURE__ */ string())));
isTypeTrue();
const AdvancedChunksNameFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string(), /* @__PURE__ */ object({})])), /* @__PURE__ */ returns(/* @__PURE__ */ nullish(/* @__PURE__ */ string())));
isTypeTrue();
const AdvancedChunksTestFunctionSchema = /* @__PURE__ */ pipe(vFunction(), /* @__PURE__ */ args(/* @__PURE__ */ tuple([/* @__PURE__ */ string()])), /* @__PURE__ */ returns(/* @__PURE__ */ union([
	/* @__PURE__ */ boolean(),
	/* @__PURE__ */ void_(),
	/* @__PURE__ */ undefined_()
])));
isTypeTrue();
const AdvancedChunksSchema = /* @__PURE__ */ strictObject({
	includeDependenciesRecursively: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
	minSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	maxSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	minModuleSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	maxModuleSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	minShareCount: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
	groups: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ strictObject({
		name: /* @__PURE__ */ union([/* @__PURE__ */ string(), AdvancedChunksNameFunctionSchema]),
		test: /* @__PURE__ */ optional(/* @__PURE__ */ union([StringOrRegExpSchema, AdvancedChunksTestFunctionSchema])),
		priority: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		minSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		minShareCount: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		maxSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		minModuleSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		maxModuleSize: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		entriesAware: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		entriesAwareMergeThreshold: /* @__PURE__ */ optional(/* @__PURE__ */ number()),
		tags: /* @__PURE__ */ optional(/* @__PURE__ */ array(/* @__PURE__ */ string()))
	})))
});
isTypeTrue();
const GeneratedCodePresetSchema = /* @__PURE__ */ union([/* @__PURE__ */ literal("es5"), /* @__PURE__ */ literal("es2015")]);
isTypeTrue();
const GeneratedCodeOptionsSchema = /* @__PURE__ */ strictObject({
	symbols: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to use Symbol.toStringTag for namespace objects")),
	preset: /* @__PURE__ */ optional(GeneratedCodePresetSchema),
	profilerNames: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Whether to add readable names to internal variables for profiling purposes"))
});
isTypeTrue();
const OutputOptionsSchema = /* @__PURE__ */ strictObject({
	dir: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Output directory, defaults to `dist` if `file` is not set")),
	file: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Single output file")),
	exports: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal("auto"),
		/* @__PURE__ */ literal("named"),
		/* @__PURE__ */ literal("default"),
		/* @__PURE__ */ literal("none")
	])), /* @__PURE__ */ description(`Specify a export mode (${styleText$1("underline", "auto")}, named, default, none)`)),
	hashCharacters: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ literal("base64"),
		/* @__PURE__ */ literal("base36"),
		/* @__PURE__ */ literal("hex")
	])), /* @__PURE__ */ description("Use the specified character set for file hashes")),
	format: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(ModuleFormatSchema), /* @__PURE__ */ description(`Output format of the generated bundle (supports ${styleText$1("underline", "esm")}, cjs, and iife)`)),
	sourcemap: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ boolean(),
		/* @__PURE__ */ literal("inline"),
		/* @__PURE__ */ literal("hidden")
	])), /* @__PURE__ */ description(`Generate sourcemap (\`-s inline\` for inline, or \`-s\` for \`.map\` file)`)),
	sourcemapBaseUrl: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Base URL used to prefix sourcemap paths")),
	sourcemapDebugIds: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Inject sourcemap debug IDs")),
	sourcemapExcludeSources: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Exclude source content from sourcemaps")),
	sourcemapIgnoreList: /* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ boolean(),
		/* @__PURE__ */ custom(() => true),
		StringOrRegExpSchema
	])),
	sourcemapPathTransform: /* @__PURE__ */ optional(/* @__PURE__ */ custom(() => true)),
	banner: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	footer: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	postBanner: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	postFooter: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	intro: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	outro: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), AddonFunctionSchema])),
	extend: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Extend global variable defined by name in IIFE / UMD formats")),
	esModule: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ literal("if-default-prop")])),
	assetFileNames: /* @__PURE__ */ optional(AssetFileNamesSchema),
	entryFileNames: /* @__PURE__ */ optional(ChunkFileNamesSchema),
	chunkFileNames: /* @__PURE__ */ optional(ChunkFileNamesSchema),
	sanitizeFileName: /* @__PURE__ */ optional(SanitizeFileNameSchema),
	minify: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([
		/* @__PURE__ */ boolean(),
		/* @__PURE__ */ literal("dce-only"),
		MinifyOptionsSchema
	])), /* @__PURE__ */ description("Minify the bundled file")),
	name: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Name for UMD / IIFE format outputs")),
	globals: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string()), GlobalsFunctionSchema])), /* @__PURE__ */ description("Global variable of UMD / IIFE dependencies (syntax: `key:value`)")),
	paths: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string()), PathsFunctionSchema])), /* @__PURE__ */ description("Maps external module IDs to paths")),
	generatedCode: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ partial(GeneratedCodeOptionsSchema)), /* @__PURE__ */ description("Generated code options")),
	externalLiveBindings: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("external live bindings")),
	inlineDynamicImports: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Inline dynamic imports")),
	dynamicImportInCjs: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Dynamic import in CJS output")),
	manualChunks: /* @__PURE__ */ optional(ManualChunksFunctionSchema),
	codeSplitting: /* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), AdvancedChunksSchema])),
	advancedChunks: /* @__PURE__ */ optional(AdvancedChunksSchema),
	legalComments: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ literal("none"), /* @__PURE__ */ literal("inline")])), /* @__PURE__ */ description("Control legal comments in the output")),
	comments: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ strictObject({
		legal: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		annotation: /* @__PURE__ */ optional(/* @__PURE__ */ boolean()),
		jsdoc: /* @__PURE__ */ optional(/* @__PURE__ */ boolean())
	})])), /* @__PURE__ */ description("Control comments in the output")),
	plugins: /* @__PURE__ */ optional(/* @__PURE__ */ custom(() => true)),
	polyfillRequire: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Disable require polyfill injection")),
	hoistTransitiveImports: /* @__PURE__ */ optional(/* @__PURE__ */ literal(false)),
	preserveModules: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Preserve module structure")),
	preserveModulesRoot: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Put preserved modules under this path at root level")),
	virtualDirname: /* @__PURE__ */ optional(/* @__PURE__ */ string()),
	minifyInternalExports: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Minify internal exports")),
	topLevelVar: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Rewrite top-level declarations to use `var`.")),
	cleanDir: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Clean output directory before emitting output")),
	keepNames: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Keep function and class names after bundling")),
	strictExecutionOrder: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Lets modules be executed in the order they are declared.")),
	strict: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ literal("auto")])), /* @__PURE__ */ description("Whether to always output `\"use strict\"` directive in non-ES module outputs."))
});
isTypeTrue();
const getAddonDescription = (placement, wrapper) => {
	return `Code to insert the ${styleText$1("bold", placement)} of the bundled file (${styleText$1("bold", wrapper)} the wrapper function)`;
};
const OutputCliOverrideSchema = /* @__PURE__ */ strictObject({
	assetFileNames: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Name pattern for asset files")),
	entryFileNames: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Name pattern for emitted entry chunks")),
	chunkFileNames: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("Name pattern for emitted secondary chunks")),
	sanitizeFileName: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Sanitize file name")),
	banner: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description(getAddonDescription("top", "outside"))),
	footer: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description(getAddonDescription("bottom", "outside"))),
	postBanner: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("A string to prepend to the top of each chunk. Applied after the `renderChunk` hook and minification")),
	postFooter: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description("A string to append to the bottom of each chunk. Applied after the `renderChunk` hook and minification")),
	intro: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description(getAddonDescription("top", "inside"))),
	outro: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ string()), /* @__PURE__ */ description(getAddonDescription("bottom", "inside"))),
	esModule: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Always generate `__esModule` marks in non-ESM formats, defaults to `if-default-prop` (use `--no-esModule` to always disable)")),
	globals: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string())), /* @__PURE__ */ description("Global variable of UMD / IIFE dependencies (syntax: `key:value`)")),
	codeSplitting: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ boolean(), /* @__PURE__ */ strictObject({
		minSize: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Minimum size of the chunk")),
		minShareCount: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Minimum share count of the chunk"))
	})])), /* @__PURE__ */ description("Code splitting options (true, false, or object)")),
	advancedChunks: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ strictObject({
		minSize: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Minimum size of the chunk")),
		minShareCount: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ number()), /* @__PURE__ */ description("Minimum share count of the chunk"))
	})), /* @__PURE__ */ description("Deprecated: use codeSplitting instead")),
	minify: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Minify the bundled file"))
});
const OutputCliOptionsSchema = /* @__PURE__ */ omit(/* @__PURE__ */ strictObject({
	...OutputOptionsSchema.entries,
	...OutputCliOverrideSchema.entries
}), [
	"sourcemapIgnoreList",
	"sourcemapPathTransform",
	"plugins",
	"hoistTransitiveImports"
]);
const CliOptionsSchema = /* @__PURE__ */ strictObject({
	config: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ boolean()])), /* @__PURE__ */ description("Path to the config file (default: `rolldown.config.js`)")),
	help: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Show help")),
	environment: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ array(/* @__PURE__ */ string())])), /* @__PURE__ */ description("Pass additional settings to the config file via process.ENV.")),
	version: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Show version number")),
	watch: /* @__PURE__ */ pipe(/* @__PURE__ */ optional(/* @__PURE__ */ boolean()), /* @__PURE__ */ description("Watch files in bundle and rebuild on changes")),
	...InputCliOptionsSchema.entries,
	...OutputCliOptionsSchema.entries
});
function validateCliOptions(options) {
	let parsed = /* @__PURE__ */ safeParse(CliOptionsSchema, options);
	return [parsed.output, parsed.issues?.map((issue) => {
		return `Invalid value for option ${issue.path?.map((pathItem) => pathItem.key).join(" ")}: ${issue.message}`;
	})];
}
const inputHelperMsgRecord = {
	output: { ignored: true },
	"resolve.tsconfigFilename": { issueMsg: "It is deprecated. Please use the top-level `tsconfig` option instead." }
};
const outputHelperMsgRecord = {};
function validateOption(key, options) {
	if (typeof options !== "object") throw new Error(`Invalid ${key} options. Expected an Object but received ${JSON.stringify(options)}.`);
	if (globalThis.process?.env?.ROLLUP_TEST) return;
	let parsed = /* @__PURE__ */ safeParse(key === "input" ? InputOptionsSchema : OutputOptionsSchema, options);
	if (!parsed.success) {
		const errors = parsed.issues.map((issue) => {
			let issueMsg = issue.message;
			const issuePaths = issue.path.map((path) => path.key);
			if (issue.type === "union") {
				const subIssue = issue.issues?.find((i) => !(i.type !== issue.received && i.input === issue.input));
				if (subIssue) {
					if (subIssue.path) issuePaths.push(subIssue.path.map((path) => path.key));
					issueMsg = subIssue.message;
				}
			}
			const stringPath = issuePaths.join(".");
			const helper = key === "input" ? inputHelperMsgRecord[stringPath] : outputHelperMsgRecord[stringPath];
			if (helper && helper.ignored) return "";
			return `- For the "${stringPath}". ${helper?.issueMsg || issueMsg + "."} ${helper?.help ? `\n  Help: ${helper.help}` : ""}`;
		}).filter(Boolean);
		if (errors.length) console.warn(`\x1b[33mWarning: Invalid ${key} options (${errors.length} issue${errors.length === 1 ? "" : "s"} found)\n${errors.join("\n")}\x1b[0m`);
	}
}
function getInputCliKeys() {
	return (/* @__PURE__ */ keyof(InputCliOptionsSchema)).options;
}
function getOutputCliKeys() {
	return (/* @__PURE__ */ keyof(OutputCliOptionsSchema)).options;
}
function getCliSchemaInfo() {
	return flattenValibotSchema(CliOptionsSchema);
}
//#endregion
//#region src/types/rolldown-output-impl.ts
var RolldownOutputImpl = class extends PlainObjectLike {
	constructor(bindingOutputs) {
		super();
		this.bindingOutputs = bindingOutputs;
	}
	get output() {
		return transformToRollupOutput(this.bindingOutputs).output;
	}
	__rolldown_external_memory_handle__(keepDataAlive) {
		const results = this.output.map((item) => item.__rolldown_external_memory_handle__(keepDataAlive));
		if (!results.every((r) => r.freed)) {
			const reasons = results.filter((r) => !r.freed).map((r) => r.reason).filter(Boolean);
			return {
				freed: false,
				reason: `Failed to free ${reasons.length} item(s): ${reasons.join("; ")}`
			};
		}
		return { freed: true };
	}
};
__decorate([lazyProp], RolldownOutputImpl.prototype, "output", null);
//#endregion
//#region src/types/chunking-context.ts
var ChunkingContextImpl = class {
	constructor(context) {
		this.context = context;
	}
	getModuleInfo(moduleId) {
		const bindingInfo = this.context.getModuleInfo(moduleId);
		if (bindingInfo) return transformModuleInfo(bindingInfo, {
			moduleSideEffects: null,
			meta: {}
		});
		return null;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/core.mjs
const LogLevels = {
	silent: Number.NEGATIVE_INFINITY,
	fatal: 0,
	error: 0,
	warn: 1,
	log: 2,
	info: 3,
	success: 3,
	fail: 3,
	ready: 3,
	start: 3,
	box: 3,
	debug: 4,
	trace: 5,
	verbose: Number.POSITIVE_INFINITY
};
const LogTypes = {
	silent: { level: -1 },
	fatal: { level: LogLevels.fatal },
	error: { level: LogLevels.error },
	warn: { level: LogLevels.warn },
	log: { level: LogLevels.log },
	info: { level: LogLevels.info },
	success: { level: LogLevels.success },
	fail: { level: LogLevels.fail },
	ready: { level: LogLevels.info },
	start: { level: LogLevels.info },
	box: { level: LogLevels.info },
	debug: { level: LogLevels.debug },
	trace: { level: LogLevels.trace },
	verbose: { level: LogLevels.verbose }
};
function isPlainObject$1(value) {
	if (value === null || typeof value !== "object") return false;
	const prototype = Object.getPrototypeOf(value);
	if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) return false;
	if (Symbol.iterator in value) return false;
	if (Symbol.toStringTag in value) return Object.prototype.toString.call(value) === "[object Module]";
	return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
	if (!isPlainObject$1(defaults)) return _defu(baseObject, {}, namespace, merger);
	const object = Object.assign({}, defaults);
	for (const key in baseObject) {
		if (key === "__proto__" || key === "constructor") continue;
		const value = baseObject[key];
		if (value === null || value === void 0) continue;
		if (merger && merger(object, key, value, namespace)) continue;
		if (Array.isArray(value) && Array.isArray(object[key])) object[key] = [...value, ...object[key]];
		else if (isPlainObject$1(value) && isPlainObject$1(object[key])) object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
		else object[key] = value;
	}
	return object;
}
function createDefu(merger) {
	return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
function isPlainObject(obj) {
	return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
	if (!isPlainObject(arg)) return false;
	if (!arg.message && !arg.args) return false;
	if (arg.stack) return false;
	return true;
}
let paused = false;
const queue = [];
var Consola = class Consola {
	options;
	_lastLog;
	_mockFn;
	/**
	* Creates an instance of Consola with specified options or defaults.
	*
	* @param {Partial<ConsolaOptions>} [options={}] - Configuration options for the Consola instance.
	*/
	constructor(options = {}) {
		const types = options.types || LogTypes;
		this.options = defu({
			...options,
			defaults: { ...options.defaults },
			level: _normalizeLogLevel(options.level, types),
			reporters: [...options.reporters || []]
		}, {
			types: LogTypes,
			throttle: 1e3,
			throttleMin: 5,
			formatOptions: {
				date: true,
				colors: false,
				compact: true
			}
		});
		for (const type in types) {
			const defaults = {
				type,
				...this.options.defaults,
				...types[type]
			};
			this[type] = this._wrapLogFn(defaults);
			this[type].raw = this._wrapLogFn(defaults, true);
		}
		if (this.options.mockFn) this.mockTypes();
		this._lastLog = {};
	}
	/**
	* Gets the current log level of the Consola instance.
	*
	* @returns {number} The current log level.
	*/
	get level() {
		return this.options.level;
	}
	/**
	* Sets the minimum log level that will be output by the instance.
	*
	* @param {number} level - The new log level to set.
	*/
	set level(level) {
		this.options.level = _normalizeLogLevel(level, this.options.types, this.options.level);
	}
	/**
	* Displays a prompt to the user and returns the response.
	* Throw an error if `prompt` is not supported by the current configuration.
	*
	* @template T
	* @param {string} message - The message to display in the prompt.
	* @param {T} [opts] - Optional options for the prompt. See {@link PromptOptions}.
	* @returns {promise<T>} A promise that infer with the prompt options. See {@link PromptOptions}.
	*/
	prompt(message, opts) {
		if (!this.options.prompt) throw new Error("prompt is not supported!");
		return this.options.prompt(message, opts);
	}
	/**
	* Creates a new instance of Consola, inheriting options from the current instance, with possible overrides.
	*
	* @param {Partial<ConsolaOptions>} options - Optional overrides for the new instance. See {@link ConsolaOptions}.
	* @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
	*/
	create(options) {
		const instance = new Consola({
			...this.options,
			...options
		});
		if (this._mockFn) instance.mockTypes(this._mockFn);
		return instance;
	}
	/**
	* Creates a new Consola instance with the specified default log object properties.
	*
	* @param {InputLogObject} defaults - Default properties to include in any log from the new instance. See {@link InputLogObject}.
	* @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
	*/
	withDefaults(defaults) {
		return this.create({
			...this.options,
			defaults: {
				...this.options.defaults,
				...defaults
			}
		});
	}
	/**
	* Creates a new Consola instance with a specified tag, which will be included in every log.
	*
	* @param {string} tag - The tag to include in each log of the new instance.
	* @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
	*/
	withTag(tag) {
		return this.withDefaults({ tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag });
	}
	/**
	* Adds a custom reporter to the Consola instance.
	* Reporters will be called for each log message, depending on their implementation and log level.
	*
	* @param {ConsolaReporter} reporter - The reporter to add. See {@link ConsolaReporter}.
	* @returns {Consola} The current Consola instance.
	*/
	addReporter(reporter) {
		this.options.reporters.push(reporter);
		return this;
	}
	/**
	* Removes a custom reporter from the Consola instance.
	* If no reporter is specified, all reporters will be removed.
	*
	* @param {ConsolaReporter} reporter - The reporter to remove. See {@link ConsolaReporter}.
	* @returns {Consola} The current Consola instance.
	*/
	removeReporter(reporter) {
		if (reporter) {
			const i = this.options.reporters.indexOf(reporter);
			if (i !== -1) return this.options.reporters.splice(i, 1);
		} else this.options.reporters.splice(0);
		return this;
	}
	/**
	* Replaces all reporters of the Consola instance with the specified array of reporters.
	*
	* @param {ConsolaReporter[]} reporters - The new reporters to set. See {@link ConsolaReporter}.
	* @returns {Consola} The current Consola instance.
	*/
	setReporters(reporters) {
		this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
		return this;
	}
	wrapAll() {
		this.wrapConsole();
		this.wrapStd();
	}
	restoreAll() {
		this.restoreConsole();
		this.restoreStd();
	}
	/**
	* Overrides console methods with Consola logging methods for consistent logging.
	*/
	wrapConsole() {
		for (const type in this.options.types) {
			if (!console["__" + type]) console["__" + type] = console[type];
			console[type] = this[type].raw;
		}
	}
	/**
	* Restores the original console methods, removing Consola overrides.
	*/
	restoreConsole() {
		for (const type in this.options.types) if (console["__" + type]) {
			console[type] = console["__" + type];
			delete console["__" + type];
		}
	}
	/**
	* Overrides standard output and error streams to redirect them through Consola.
	*/
	wrapStd() {
		this._wrapStream(this.options.stdout, "log");
		this._wrapStream(this.options.stderr, "log");
	}
	_wrapStream(stream, type) {
		if (!stream) return;
		if (!stream.__write) stream.__write = stream.write;
		stream.write = (data) => {
			this[type].raw(String(data).trim());
		};
	}
	/**
	* Restores the original standard output and error streams, removing the Consola redirection.
	*/
	restoreStd() {
		this._restoreStream(this.options.stdout);
		this._restoreStream(this.options.stderr);
	}
	_restoreStream(stream) {
		if (!stream) return;
		if (stream.__write) {
			stream.write = stream.__write;
			delete stream.__write;
		}
	}
	/**
	* Pauses logging, queues incoming logs until resumed.
	*/
	pauseLogs() {
		paused = true;
	}
	/**
	* Resumes logging, processing any queued logs.
	*/
	resumeLogs() {
		paused = false;
		const _queue = queue.splice(0);
		for (const item of _queue) item[0]._logFn(item[1], item[2]);
	}
	/**
	* Replaces logging methods with mocks if a mock function is provided.
	*
	* @param {ConsolaOptions["mockFn"]} mockFn - The function to use for mocking logging methods. See {@link ConsolaOptions["mockFn"]}.
	*/
	mockTypes(mockFn) {
		const _mockFn = mockFn || this.options.mockFn;
		this._mockFn = _mockFn;
		if (typeof _mockFn !== "function") return;
		for (const type in this.options.types) {
			this[type] = _mockFn(type, this.options.types[type]) || this[type];
			this[type].raw = this[type];
		}
	}
	_wrapLogFn(defaults, isRaw) {
		return (...args) => {
			if (paused) {
				queue.push([
					this,
					defaults,
					args,
					isRaw
				]);
				return;
			}
			return this._logFn(defaults, args, isRaw);
		};
	}
	_logFn(defaults, args, isRaw) {
		if ((defaults.level || 0) > this.level) return false;
		const logObj = {
			date: /* @__PURE__ */ new Date(),
			args: [],
			...defaults,
			level: _normalizeLogLevel(defaults.level, this.options.types)
		};
		if (!isRaw && args.length === 1 && isLogObj(args[0])) Object.assign(logObj, args[0]);
		else logObj.args = [...args];
		if (logObj.message) {
			logObj.args.unshift(logObj.message);
			delete logObj.message;
		}
		if (logObj.additional) {
			if (!Array.isArray(logObj.additional)) logObj.additional = logObj.additional.split("\n");
			logObj.args.push("\n" + logObj.additional.join("\n"));
			delete logObj.additional;
		}
		logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
		logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
		const resolveLog = (newLog = false) => {
			const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
			if (this._lastLog.object && repeated > 0) {
				const args2 = [...this._lastLog.object.args];
				if (repeated > 1) args2.push(`(repeated ${repeated} times)`);
				this._log({
					...this._lastLog.object,
					args: args2
				});
				this._lastLog.count = 1;
			}
			if (newLog) {
				this._lastLog.object = logObj;
				this._log(logObj);
			}
		};
		clearTimeout(this._lastLog.timeout);
		const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
		this._lastLog.time = logObj.date;
		if (diffTime < this.options.throttle) try {
			const serializedLog = JSON.stringify([
				logObj.type,
				logObj.tag,
				logObj.args
			]);
			const isSameLog = this._lastLog.serialized === serializedLog;
			this._lastLog.serialized = serializedLog;
			if (isSameLog) {
				this._lastLog.count = (this._lastLog.count || 0) + 1;
				if (this._lastLog.count > this.options.throttleMin) {
					this._lastLog.timeout = setTimeout(resolveLog, this.options.throttle);
					return;
				}
			}
		} catch {}
		resolveLog(true);
	}
	_log(logObj) {
		for (const reporter of this.options.reporters) reporter.log(logObj, { options: this.options });
	}
};
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
	if (input === void 0) return defaultLevel;
	if (typeof input === "number") return input;
	if (types[input] && types[input].level !== void 0) return types[input].level;
	return defaultLevel;
}
Consola.prototype.add = Consola.prototype.addReporter;
Consola.prototype.remove = Consola.prototype.removeReporter;
Consola.prototype.clear = Consola.prototype.removeReporter;
Consola.prototype.withScope = Consola.prototype.withTag;
Consola.prototype.mock = Consola.prototype.mockTypes;
Consola.prototype.pause = Consola.prototype.pauseLogs;
Consola.prototype.resume = Consola.prototype.resumeLogs;
function createConsola$1(options = {}) {
	return new Consola(options);
}
//#endregion
//#region ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/shared/consola.DRwqZj3T.mjs
function parseStack(stack, message) {
	const cwd = process.cwd() + sep;
	return stack.split("\n").splice(message.split("\n").length).map((l) => l.trim().replace("file://", "").replace(cwd, ""));
}
function writeStream(data, stream) {
	return (stream.__write || stream.write).call(stream, data);
}
const bracket = (x) => x ? `[${x}]` : "";
var BasicReporter = class {
	formatStack(stack, message, opts) {
		const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
		return indent + parseStack(stack, message).join(`
${indent}`);
	}
	formatError(err, opts) {
		const message = err.message ?? formatWithOptions(opts, err);
		const stack = err.stack ? this.formatStack(err.stack, message, opts) : "";
		const level = opts?.errorLevel || 0;
		const causedPrefix = level > 0 ? `${"  ".repeat(level)}[cause]: ` : "";
		const causedError = err.cause ? "\n\n" + this.formatError(err.cause, {
			...opts,
			errorLevel: level + 1
		}) : "";
		return causedPrefix + message + "\n" + stack + causedError;
	}
	formatArgs(args, opts) {
		return formatWithOptions(opts, ...args.map((arg) => {
			if (arg && typeof arg.stack === "string") return this.formatError(arg, opts);
			return arg;
		}));
	}
	formatDate(date, opts) {
		return opts.date ? date.toLocaleTimeString() : "";
	}
	filterAndJoin(arr) {
		return arr.filter(Boolean).join(" ");
	}
	formatLogObj(logObj, opts) {
		const message = this.formatArgs(logObj.args, opts);
		if (logObj.type === "box") return "\n" + [
			bracket(logObj.tag),
			logObj.title && logObj.title,
			...message.split("\n")
		].filter(Boolean).map((l) => " > " + l).join("\n") + "\n";
		return this.filterAndJoin([
			bracket(logObj.type),
			bracket(logObj.tag),
			message
		]);
	}
	log(logObj, ctx) {
		return writeStream(this.formatLogObj(logObj, {
			columns: ctx.options.stdout.columns || 0,
			...ctx.options.formatOptions
		}) + "\n", logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/shared/consola.DXBYu-KD.mjs
const { env = {}, argv = [], platform = "" } = typeof process === "undefined" ? {} : process;
const isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
const isForced = "FORCE_COLOR" in env || argv.includes("--color");
const isWindows = platform === "win32";
const isDumbTerminal = env.TERM === "dumb";
const isCompatibleTerminal = tty && tty.isatty && tty.isatty(1) && env.TERM && !isDumbTerminal;
const isCI = "CI" in env && ("GITHUB_ACTIONS" in env || "GITLAB_CI" in env || "CIRCLECI" in env);
const isColorSupported = !isDisabled && (isForced || isWindows && !isDumbTerminal || isCompatibleTerminal || isCI);
function replaceClose(index, string, close, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close.length)), next = tail.indexOf(close)) {
	return head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
}
function clearBleed(index, string, open, close, replace) {
	return index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
}
function filterEmpty(open, close, replace = open, at = open.length + 1) {
	return (string) => string || !(string === "" || string === void 0) ? clearBleed(("" + string).indexOf(close, at), string, open, close, replace) : "";
}
function init(open, close, replace) {
	return filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
}
const colorDefs = {
	reset: init(0, 0),
	bold: init(1, 22, "\x1B[22m\x1B[1m"),
	dim: init(2, 22, "\x1B[22m\x1B[2m"),
	italic: init(3, 23),
	underline: init(4, 24),
	inverse: init(7, 27),
	hidden: init(8, 28),
	strikethrough: init(9, 29),
	black: init(30, 39),
	red: init(31, 39),
	green: init(32, 39),
	yellow: init(33, 39),
	blue: init(34, 39),
	magenta: init(35, 39),
	cyan: init(36, 39),
	white: init(37, 39),
	gray: init(90, 39),
	bgBlack: init(40, 49),
	bgRed: init(41, 49),
	bgGreen: init(42, 49),
	bgYellow: init(43, 49),
	bgBlue: init(44, 49),
	bgMagenta: init(45, 49),
	bgCyan: init(46, 49),
	bgWhite: init(47, 49),
	blackBright: init(90, 39),
	redBright: init(91, 39),
	greenBright: init(92, 39),
	yellowBright: init(93, 39),
	blueBright: init(94, 39),
	magentaBright: init(95, 39),
	cyanBright: init(96, 39),
	whiteBright: init(97, 39),
	bgBlackBright: init(100, 49),
	bgRedBright: init(101, 49),
	bgGreenBright: init(102, 49),
	bgYellowBright: init(103, 49),
	bgBlueBright: init(104, 49),
	bgMagentaBright: init(105, 49),
	bgCyanBright: init(106, 49),
	bgWhiteBright: init(107, 49)
};
function createColors(useColor = isColorSupported) {
	return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
const colors = createColors();
function getColor$1(color, fallback = "reset") {
	return colors[color] || colors[fallback];
}
const ansiRegex$1 = [String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`, String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`].join("|");
function stripAnsi$1(text) {
	return text.replace(new RegExp(ansiRegex$1, "g"), "");
}
const boxStylePresets = {
	solid: {
		tl: "┌",
		tr: "┐",
		bl: "└",
		br: "┘",
		h: "─",
		v: "│"
	},
	double: {
		tl: "╔",
		tr: "╗",
		bl: "╚",
		br: "╝",
		h: "═",
		v: "║"
	},
	doubleSingle: {
		tl: "╓",
		tr: "╖",
		bl: "╙",
		br: "╜",
		h: "─",
		v: "║"
	},
	doubleSingleRounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "─",
		v: "║"
	},
	singleThick: {
		tl: "┏",
		tr: "┓",
		bl: "┗",
		br: "┛",
		h: "━",
		v: "┃"
	},
	singleDouble: {
		tl: "╒",
		tr: "╕",
		bl: "╘",
		br: "╛",
		h: "═",
		v: "│"
	},
	singleDoubleRounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "═",
		v: "│"
	},
	rounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "─",
		v: "│"
	}
};
const defaultStyle = {
	borderColor: "white",
	borderStyle: "rounded",
	valign: "center",
	padding: 2,
	marginLeft: 1,
	marginTop: 1,
	marginBottom: 1
};
function box(text, _opts = {}) {
	const opts = {
		..._opts,
		style: {
			...defaultStyle,
			..._opts.style
		}
	};
	const textLines = text.split("\n");
	const boxLines = [];
	const _color = getColor$1(opts.style.borderColor);
	const borderStyle = { ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle };
	if (_color) for (const key in borderStyle) borderStyle[key] = _color(borderStyle[key]);
	const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
	const height = textLines.length + paddingOffset;
	const width = Math.max(...textLines.map((line) => stripAnsi$1(line).length), opts.title ? stripAnsi$1(opts.title).length : 0) + paddingOffset;
	const widthOffset = width + paddingOffset;
	const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
	if (opts.style.marginTop > 0) boxLines.push("".repeat(opts.style.marginTop));
	if (opts.title) {
		const title = _color ? _color(opts.title) : opts.title;
		const left = borderStyle.h.repeat(Math.floor((width - stripAnsi$1(opts.title).length) / 2));
		const right = borderStyle.h.repeat(width - stripAnsi$1(opts.title).length - stripAnsi$1(left).length + paddingOffset);
		boxLines.push(`${leftSpace}${borderStyle.tl}${left}${title}${right}${borderStyle.tr}`);
	} else boxLines.push(`${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`);
	const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
	for (let i = 0; i < height; i++) if (i < valignOffset || i >= valignOffset + textLines.length) boxLines.push(`${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`);
	else {
		const line = textLines[i - valignOffset];
		const left = " ".repeat(paddingOffset);
		const right = " ".repeat(width - stripAnsi$1(line).length);
		boxLines.push(`${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`);
	}
	boxLines.push(`${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`);
	if (opts.style.marginBottom > 0) boxLines.push("".repeat(opts.style.marginBottom));
	return boxLines.join("\n");
}
//#endregion
//#region ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs
const r = Object.create(null), i = (e) => globalThis.process?.env || import.meta.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e ? r : globalThis), o = new Proxy(r, {
	get(e, s) {
		return i()[s] ?? r[s];
	},
	has(e, s) {
		return s in i() || s in r;
	},
	set(e, s, E) {
		const B = i(true);
		return B[s] = E, true;
	},
	deleteProperty(e, s) {
		if (!s) return false;
		const E = i(true);
		return delete E[s], true;
	},
	ownKeys() {
		const e = i(true);
		return Object.keys(e);
	}
}), t = typeof process < "u" && process.env && process.env.NODE_ENV || "", f = [
	["APPVEYOR"],
	[
		"AWS_AMPLIFY",
		"AWS_APP_ID",
		{ ci: true }
	],
	["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
	["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
	["APPCIRCLE", "AC_APPCIRCLE"],
	["BAMBOO", "bamboo_planKey"],
	["BITBUCKET", "BITBUCKET_COMMIT"],
	["BITRISE", "BITRISE_IO"],
	["BUDDY", "BUDDY_WORKSPACE_ID"],
	["BUILDKITE"],
	["CIRCLE", "CIRCLECI"],
	["CIRRUS", "CIRRUS_CI"],
	[
		"CLOUDFLARE_PAGES",
		"CF_PAGES",
		{ ci: true }
	],
	["CODEBUILD", "CODEBUILD_BUILD_ARN"],
	["CODEFRESH", "CF_BUILD_ID"],
	["DRONE"],
	["DRONE", "DRONE_BUILD_EVENT"],
	["DSARI"],
	["GITHUB_ACTIONS"],
	["GITLAB", "GITLAB_CI"],
	["GITLAB", "CI_MERGE_REQUEST_ID"],
	["GOCD", "GO_PIPELINE_LABEL"],
	["LAYERCI"],
	["HUDSON", "HUDSON_URL"],
	["JENKINS", "JENKINS_URL"],
	["MAGNUM"],
	["NETLIFY"],
	[
		"NETLIFY",
		"NETLIFY_LOCAL",
		{ ci: false }
	],
	["NEVERCODE"],
	["RENDER"],
	["SAIL", "SAILCI"],
	["SEMAPHORE"],
	["SCREWDRIVER"],
	["SHIPPABLE"],
	["SOLANO", "TDDIUM"],
	["STRIDER"],
	["TEAMCITY", "TEAMCITY_VERSION"],
	["TRAVIS"],
	["VERCEL", "NOW_BUILDER"],
	[
		"VERCEL",
		"VERCEL",
		{ ci: false }
	],
	[
		"VERCEL",
		"VERCEL_ENV",
		{ ci: false }
	],
	["APPCENTER", "APPCENTER_BUILD_ID"],
	[
		"CODESANDBOX",
		"CODESANDBOX_SSE",
		{ ci: false }
	],
	[
		"CODESANDBOX",
		"CODESANDBOX_HOST",
		{ ci: false }
	],
	["STACKBLITZ"],
	["STORMKIT"],
	["CLEAVR"],
	["ZEABUR"],
	[
		"CODESPHERE",
		"CODESPHERE_APP_ID",
		{ ci: true }
	],
	["RAILWAY", "RAILWAY_PROJECT_ID"],
	["RAILWAY", "RAILWAY_SERVICE_ID"],
	["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"],
	[
		"FIREBASE_APP_HOSTING",
		"FIREBASE_APP_HOSTING",
		{ ci: true }
	]
];
function b() {
	if (globalThis.process?.env) for (const e of f) {
		const s = e[1] || e[0];
		if (globalThis.process?.env[s]) return {
			name: e[0].toLowerCase(),
			...e[2]
		};
	}
	return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? {
		name: "stackblitz",
		ci: false
	} : {
		name: "",
		ci: false
	};
}
const l = b();
l.name;
function n(e) {
	return e ? e !== "false" : false;
}
const I = globalThis.process?.platform || "", T = n(o.CI) || l.ci !== false, a = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY), g = n(o.DEBUG), R = t === "test" || n(o.TEST);
n(o.MINIMAL);
const A = /^win/i.test(I);
!n(o.NO_COLOR) && (n(o.FORCE_COLOR) || (a || A) && o.TERM);
const C = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(C?.split(".")[0]);
const y = globalThis.process || Object.create(null), _ = { versions: {} };
new Proxy(y, { get(e, s) {
	if (s === "env") return o;
	if (s in e) return e[s];
	if (s in _) return _[s];
} });
const c = globalThis.process?.release?.name === "node", O = !!globalThis.Bun || !!globalThis.process?.versions?.bun, D = !!globalThis.Deno, L = !!globalThis.fastly, S = !!globalThis.Netlify, u = !!globalThis.EdgeRuntime, N = globalThis.navigator?.userAgent === "Cloudflare-Workers", F = [
	[S, "netlify"],
	[u, "edge-light"],
	[N, "workerd"],
	[L, "fastly"],
	[D, "deno"],
	[O, "bun"],
	[c, "node"]
];
function G() {
	const e = F.find((s) => s[0]);
	if (e) return { name: e[1] };
}
G()?.name;
function ansiRegex({ onlyFirst = false } = {}) {
	const pattern = [`[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))`, "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
	return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
const regex = ansiRegex();
function stripAnsi(string) {
	if (typeof string !== "string") throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	return string.replace(regex, "");
}
function isAmbiguous(x) {
	return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
}
function isFullWidth(x) {
	return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
	return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x === 94192 || x === 94193 || x >= 94208 && x <= 100343 || x >= 100352 && x <= 101589 || x >= 101631 && x <= 101640 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128727 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129673 || x >= 129679 && x <= 129734 || x >= 129742 && x <= 129756 || x >= 129759 && x <= 129769 || x >= 129776 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}
function validate(codePoint) {
	if (!Number.isSafeInteger(codePoint)) throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
	validate(codePoint);
	if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) return 2;
	return 1;
}
const emojiRegex = () => {
	return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};
const segmenter = globalThis.Intl?.Segmenter ? new Intl.Segmenter() : { segment: (str) => str.split("") };
const defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth$1(string, options = {}) {
	if (typeof string !== "string" || string.length === 0) return 0;
	const { ambiguousIsNarrow = true, countAnsiEscapeCodes = false } = options;
	if (!countAnsiEscapeCodes) string = stripAnsi(string);
	if (string.length === 0) return 0;
	let width = 0;
	const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
	for (const { segment: character } of segmenter.segment(string)) {
		const codePoint = character.codePointAt(0);
		if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) continue;
		if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) continue;
		if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) continue;
		if (codePoint >= 55296 && codePoint <= 57343) continue;
		if (codePoint >= 65024 && codePoint <= 65039) continue;
		if (defaultIgnorableCodePointRegex.test(character)) continue;
		if (emojiRegex().test(character)) {
			width += 2;
			continue;
		}
		width += eastAsianWidth(codePoint, eastAsianWidthOptions);
	}
	return width;
}
function isUnicodeSupported() {
	const { env } = process$1;
	const { TERM, TERM_PROGRAM } = env;
	if (process$1.platform !== "win32") return TERM !== "linux";
	return Boolean(env.WT_SESSION) || Boolean(env.TERMINUS_SUBLIME) || env.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
const TYPE_COLOR_MAP = {
	info: "cyan",
	fail: "red",
	success: "green",
	ready: "green",
	start: "magenta"
};
const LEVEL_COLOR_MAP = {
	0: "red",
	1: "yellow"
};
const unicode = isUnicodeSupported();
const s = (c, fallback) => unicode ? c : fallback;
const TYPE_ICONS = {
	error: s("✖", "×"),
	fatal: s("✖", "×"),
	ready: s("✔", "√"),
	warn: s("⚠", "‼"),
	info: s("ℹ", "i"),
	success: s("✔", "√"),
	debug: s("⚙", "D"),
	trace: s("→", "→"),
	fail: s("✖", "×"),
	start: s("◐", "o"),
	log: ""
};
function stringWidth(str) {
	if (!(typeof Intl === "object") || !Intl.Segmenter) return stripAnsi$1(str).length;
	return stringWidth$1(str);
}
var FancyReporter = class extends BasicReporter {
	formatStack(stack, message, opts) {
		const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
		return `
${indent}` + parseStack(stack, message).map((line) => "  " + line.replace(/^at +/, (m) => colors.gray(m)).replace(/\((.+)\)/, (_, m) => `(${colors.cyan(m)})`)).join(`
${indent}`);
	}
	formatType(logObj, isBadge, opts) {
		const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
		if (isBadge) return getBgColor(typeColor)(colors.black(` ${logObj.type.toUpperCase()} `));
		const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
		return _type ? getColor(typeColor)(_type) : "";
	}
	formatLogObj(logObj, opts) {
		const [message, ...additional] = this.formatArgs(logObj.args, opts).split("\n");
		if (logObj.type === "box") return box(characterFormat(message + (additional.length > 0 ? "\n" + additional.join("\n") : "")), {
			title: logObj.title ? characterFormat(logObj.title) : void 0,
			style: logObj.style
		});
		const date = this.formatDate(logObj.date, opts);
		const coloredDate = date && colors.gray(date);
		const isBadge = logObj.badge ?? logObj.level < 2;
		const type = this.formatType(logObj, isBadge, opts);
		const tag = logObj.tag ? colors.gray(logObj.tag) : "";
		let line;
		const left = this.filterAndJoin([type, characterFormat(message)]);
		const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
		const space = (opts.columns || 0) - stringWidth(left) - stringWidth(right) - 2;
		line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
		line += characterFormat(additional.length > 0 ? "\n" + additional.join("\n") : "");
		if (logObj.type === "trace") {
			const _err = /* @__PURE__ */ new Error("Trace: " + logObj.message);
			line += this.formatStack(_err.stack || "", _err.message);
		}
		return isBadge ? "\n" + line + "\n" : line;
	}
};
function characterFormat(str) {
	return str.replace(/`([^`]+)`/gm, (_, m) => colors.cyan(m)).replace(/\s+_([^_]+)_\s+/gm, (_, m) => ` ${colors.underline(m)} `);
}
function getColor(color = "white") {
	return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
	return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola(options = {}) {
	let level = _getDefaultLogLevel();
	if (process.env.CONSOLA_LEVEL) level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
	return createConsola$1({
		level,
		defaults: { level },
		stdout: process.stdout,
		stderr: process.stderr,
		prompt: (...args) => import("./prompt-U5ajztzG.mjs").then((m) => m.prompt(...args)),
		reporters: options.reporters || [options.fancy ?? !(T || R) ? new FancyReporter() : new BasicReporter()],
		...options
	});
}
function _getDefaultLogLevel() {
	if (g) return LogLevels.debug;
	if (R) return LogLevels.warn;
	return LogLevels.info;
}
createConsola();
//#endregion
//#region src/cli/logger.ts
/**
* Console logger
*/
const logger = process.env.ROLLDOWN_TEST ? createTestingLogger() : createConsola({ formatOptions: { date: false } });
function createTestingLogger() {
	const types = [
		"silent",
		"fatal",
		"error",
		"warn",
		"log",
		"info",
		"success",
		"fail",
		"ready",
		"start",
		"box",
		"debug",
		"trace",
		"verbose"
	];
	const ret = Object.create(null);
	for (const type of types) ret[type] = (...args) => console.log(...args);
	return ret;
}
//#endregion
//#region src/utils/bindingify-output-options.ts
function bindingifyOutputOptions(outputOptions) {
	const { dir, format, exports, hashCharacters, sourcemap, sourcemapBaseUrl, sourcemapDebugIds, sourcemapExcludeSources, sourcemapIgnoreList, sourcemapPathTransform, name, assetFileNames, entryFileNames, chunkFileNames, banner, footer, postBanner, postFooter, intro, outro, esModule, globals, paths, generatedCode, file, sanitizeFileName, preserveModules, virtualDirname, legalComments, comments, preserveModulesRoot, manualChunks, topLevelVar, cleanDir, strictExecutionOrder } = outputOptions;
	if (legalComments != null) logger.warn("`legalComments` option is deprecated, please use `comments.legal` instead.");
	const { inlineDynamicImports, advancedChunks } = bindingifyCodeSplitting(outputOptions.codeSplitting, outputOptions.inlineDynamicImports, outputOptions.advancedChunks, manualChunks);
	return {
		dir,
		file: file == null ? void 0 : file,
		format: bindingifyFormat(format),
		exports,
		hashCharacters,
		sourcemap: bindingifySourcemap(sourcemap),
		sourcemapBaseUrl,
		sourcemapDebugIds,
		sourcemapExcludeSources,
		sourcemapIgnoreList: sourcemapIgnoreList ?? /node_modules/,
		sourcemapPathTransform,
		banner: bindingifyAddon(banner),
		footer: bindingifyAddon(footer),
		postBanner: bindingifyAddon(postBanner),
		postFooter: bindingifyAddon(postFooter),
		intro: bindingifyAddon(intro),
		outro: bindingifyAddon(outro),
		extend: outputOptions.extend,
		globals,
		paths,
		generatedCode,
		esModule,
		name,
		assetFileNames: bindingifyAssetFilenames(assetFileNames),
		entryFileNames,
		chunkFileNames,
		plugins: [],
		minify: outputOptions.minify,
		externalLiveBindings: outputOptions.externalLiveBindings,
		inlineDynamicImports,
		dynamicImportInCjs: outputOptions.dynamicImportInCjs,
		manualCodeSplitting: advancedChunks,
		polyfillRequire: outputOptions.polyfillRequire,
		sanitizeFileName,
		preserveModules,
		virtualDirname,
		legalComments,
		comments: bindingifyComments(comments),
		preserveModulesRoot,
		topLevelVar,
		minifyInternalExports: outputOptions.minifyInternalExports,
		cleanDir,
		strictExecutionOrder,
		strict: outputOptions.strict
	};
}
function bindingifyAddon(configAddon) {
	if (configAddon == null || configAddon === "") return;
	if (typeof configAddon === "function") return async (chunk) => configAddon(transformRenderedChunk(chunk));
	return configAddon;
}
function bindingifyFormat(format) {
	switch (format) {
		case void 0:
		case "es":
		case "esm":
		case "module": return "es";
		case "cjs":
		case "commonjs": return "cjs";
		case "iife": return "iife";
		case "umd": return "umd";
		default: unimplemented(`output.format: ${format}`);
	}
}
function bindingifySourcemap(sourcemap) {
	switch (sourcemap) {
		case true: return "file";
		case "inline": return "inline";
		case false:
		case void 0: return;
		case "hidden": return "hidden";
		default: throw new Error(`unknown sourcemap: ${sourcemap}`);
	}
}
function bindingifyAssetFilenames(assetFileNames) {
	if (typeof assetFileNames === "function") return (asset) => {
		return assetFileNames({
			name: asset.name,
			names: asset.names,
			originalFileName: asset.originalFileName,
			originalFileNames: asset.originalFileNames,
			source: transformAssetSource(asset.source),
			type: "asset"
		});
	};
	return assetFileNames;
}
function bindingifyComments(comments) {
	if (comments == null) return;
	if (typeof comments === "boolean") return comments;
	return comments;
}
function bindingifyCodeSplitting(codeSplitting, inlineDynamicImportsOption, advancedChunks, manualChunks) {
	let inlineDynamicImports;
	let effectiveChunksOption;
	if (codeSplitting === false) {
		if (inlineDynamicImportsOption != null) logger.warn("`inlineDynamicImports` option is ignored because `codeSplitting: false` is set.");
		if (manualChunks != null) throw new Error("Invalid configuration: \"output.manualChunks\" cannot be used when \"output.codeSplitting\" is set to false.");
		if (advancedChunks != null) logger.warn("`advancedChunks` option is ignored because `codeSplitting` is set to `false`.");
		return {
			inlineDynamicImports: true,
			advancedChunks: void 0
		};
	} else if (codeSplitting === true) {
		if (inlineDynamicImportsOption != null) logger.warn("`inlineDynamicImports` option is ignored because `codeSplitting: true` is set.");
	} else if (codeSplitting == null) {
		if (inlineDynamicImportsOption != null) {
			logger.warn("`inlineDynamicImports` option is deprecated, please use `codeSplitting: false` instead.");
			inlineDynamicImports = inlineDynamicImportsOption;
		}
	} else {
		effectiveChunksOption = codeSplitting;
		if (inlineDynamicImportsOption != null) logger.warn("`inlineDynamicImports` option is ignored because the `codeSplitting` option is specified.");
	}
	if (inlineDynamicImports === true && manualChunks != null) throw new Error("Invalid value \"true\" for option \"output.inlineDynamicImports\" - this option is not supported for \"output.manualChunks\".");
	if (effectiveChunksOption == null) {
		if (advancedChunks != null) {
			logger.warn("`advancedChunks` option is deprecated, please use `codeSplitting` instead.");
			effectiveChunksOption = advancedChunks;
		}
	} else if (advancedChunks != null) logger.warn("`advancedChunks` option is ignored because the `codeSplitting` option is specified.");
	if (manualChunks != null && effectiveChunksOption != null) logger.warn("`manualChunks` option is ignored because the `codeSplitting` option is specified.");
	else if (manualChunks != null) effectiveChunksOption = { groups: [{ name(moduleId, ctx) {
		return manualChunks(moduleId, { getModuleInfo: (id) => ctx.getModuleInfo(id) });
	} }] };
	let advancedChunksResult;
	if (effectiveChunksOption != null) {
		const { groups, ...restOptions } = effectiveChunksOption;
		advancedChunksResult = {
			...restOptions,
			groups: groups?.map((group) => {
				const { name, ...restGroup } = group;
				return {
					...restGroup,
					name: typeof name === "function" ? (id, ctx) => name(id, new ChunkingContextImpl(ctx)) : name
				};
			})
		};
	}
	return {
		inlineDynamicImports,
		advancedChunks: advancedChunksResult
	};
}
//#endregion
//#region src/utils/initialize-parallel-plugins.ts
async function initializeParallelPlugins(plugins) {
	const pluginInfos = [];
	for (const [index, plugin] of plugins.entries()) if ("_parallel" in plugin) {
		const { fileUrl, options } = plugin._parallel;
		pluginInfos.push({
			index,
			fileUrl,
			options
		});
	}
	if (pluginInfos.length <= 0) return;
	const count = availableParallelism();
	const parallelJsPluginRegistry = new import_binding.ParallelJsPluginRegistry(count);
	const registryId = parallelJsPluginRegistry.id;
	const workers = await initializeWorkers(registryId, count, pluginInfos);
	const stopWorkers = async () => {
		await Promise.all(workers.map((worker) => worker.terminate()));
	};
	return {
		registry: parallelJsPluginRegistry,
		stopWorkers
	};
}
function initializeWorkers(registryId, count, pluginInfos) {
	return Promise.all(Array.from({ length: count }, (_, i) => initializeWorker(registryId, pluginInfos, i)));
}
async function initializeWorker(registryId, pluginInfos, threadNumber) {
	const urlString = import.meta.resolve("#parallel-plugin-worker");
	const workerData = {
		registryId,
		pluginInfos,
		threadNumber
	};
	let worker;
	try {
		worker = new Worker(new URL(urlString), { workerData });
		worker.unref();
		await new Promise((resolve, reject) => {
			worker.once("message", async (message) => {
				if (message.type === "error") reject(message.error);
				else resolve();
			});
		});
		return worker;
	} catch (e) {
		worker?.terminate();
		throw e;
	}
}
const availableParallelism = () => {
	let availableParallelism = 1;
	try {
		availableParallelism = os.availableParallelism();
	} catch {
		const cpus = os.cpus();
		if (Array.isArray(cpus) && cpus.length > 0) availableParallelism = cpus.length;
	}
	return Math.min(availableParallelism, 8);
};
//#endregion
//#region src/utils/create-bundler-option.ts
async function createBundlerOptions(inputOptions, outputOptions, watchMode) {
	const inputPlugins = await normalizePluginOption(inputOptions.plugins);
	const outputPlugins = await normalizePluginOption(outputOptions.plugins);
	const logLevel = inputOptions.logLevel || "info";
	const onLog = getLogger(getObjectPlugins(inputPlugins), getOnLog(inputOptions, logLevel), logLevel, watchMode);
	outputOptions = PluginDriver.callOutputOptionsHook([...inputPlugins, ...outputPlugins], outputOptions, onLog, logLevel, watchMode);
	const hookOutputPlugins = await normalizePluginOption(outputOptions.plugins);
	const normalizedInputPlugins = normalizePlugins(inputPlugins, ANONYMOUS_PLUGIN_PREFIX);
	const normalizedOutputPlugins = normalizePlugins(hookOutputPlugins, ANONYMOUS_OUTPUT_PLUGIN_PREFIX);
	let plugins = [...normalizedInputPlugins, ...checkOutputPluginOption(normalizedOutputPlugins, onLog)];
	const parallelPluginInitResult = await initializeParallelPlugins(plugins);
	if (inputOptions.experimental?.strictExecutionOrder !== void 0) console.warn("`experimental.strictExecutionOrder` has been stabilized and moved to `output.strictExecutionOrder`. Please update your configuration.");
	try {
		return {
			bundlerOptions: {
				inputOptions: bindingifyInputOptions(plugins, inputOptions, outputOptions, normalizedInputPlugins, normalizedOutputPlugins, onLog, logLevel, watchMode),
				outputOptions: bindingifyOutputOptions(outputOptions),
				parallelPluginsRegistry: parallelPluginInitResult?.registry
			},
			inputOptions,
			onLog,
			stopWorkers: parallelPluginInitResult?.stopWorkers
		};
	} catch (e) {
		await parallelPluginInitResult?.stopWorkers();
		throw e;
	}
}
//#endregion
//#region src/api/rolldown/rolldown-build.ts
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
/**
* The bundle object returned by {@linkcode rolldown} function.
*
* @category Programmatic APIs
*/
var RolldownBuild = class RolldownBuild {
	#inputOptions;
	#bundler;
	#stopWorkers;
	/** @internal */
	static asyncRuntimeShutdown = false;
	/** @hidden should not be used directly */
	constructor(inputOptions) {
		this.#inputOptions = inputOptions;
		this.#bundler = new import_binding.BindingBundler();
	}
	/**
	* Whether the bundle has been closed.
	*
	* If the bundle is closed, calling other methods will throw an error.
	*/
	get closed() {
		return this.#bundler.closed;
	}
	/**
	* Generate bundles in-memory.
	*
	* If you directly want to write bundles to disk, use the {@linkcode write} method instead.
	*
	* @param outputOptions The output options.
	* @returns The generated bundle.
	* @throws {@linkcode BundleError} When an error occurs during the build.
	*/
	async generate(outputOptions = {}) {
		return this.#build(false, outputOptions);
	}
	/**
	* Generate and write bundles to disk.
	*
	* If you want to generate bundles in-memory, use the {@linkcode generate} method instead.
	*
	* @param outputOptions The output options.
	* @returns The generated bundle.
	* @throws {@linkcode BundleError} When an error occurs during the build.
	*/
	async write(outputOptions = {}) {
		return this.#build(true, outputOptions);
	}
	/**
	* Close the bundle and free resources.
	*
	* This method is called automatically when using `using` syntax.
	*
	* @example
	* ```js
	* import { rolldown } from 'rolldown';
	*
	* {
	*   using bundle = await rolldown({ input: 'src/main.js' });
	*   const output = await bundle.generate({ format: 'esm' });
	*   console.log(output);
	*   // bundle.close() is called automatically here
	* }
	* ```
	*/
	async close() {
		await this.#stopWorkers?.();
		await this.#bundler.close();
		(0, import_binding.shutdownAsyncRuntime)();
		RolldownBuild.asyncRuntimeShutdown = true;
		this.#stopWorkers = void 0;
	}
	/** @hidden documented in close method */
	async [Symbol.asyncDispose]() {
		await this.close();
	}
	/**
	* @experimental
	* @hidden not ready for public usage yet
	*/
	get watchFiles() {
		return Promise.resolve(this.#bundler.getWatchFiles());
	}
	async #build(isWrite, outputOptions) {
		validateOption("output", outputOptions);
		await this.#stopWorkers?.();
		const option = await createBundlerOptions(this.#inputOptions, outputOptions, false);
		if (RolldownBuild.asyncRuntimeShutdown) (0, import_binding.startAsyncRuntime)();
		try {
			this.#stopWorkers = option.stopWorkers;
			let output;
			if (isWrite) output = await this.#bundler.write(option.bundlerOptions);
			else output = await this.#bundler.generate(option.bundlerOptions);
			return new RolldownOutputImpl(unwrapBindingResult(output));
		} catch (e) {
			await option.stopWorkers?.();
			throw e;
		}
	}
};
//#endregion
export { getInputCliKeys as a, validateOption as c, getCliSchemaInfo as i, styleText$1 as l, createBundlerOptions as n, getOutputCliKeys as o, logger as r, validateCliOptions as s, RolldownBuild as t, PluginDriver as u };
