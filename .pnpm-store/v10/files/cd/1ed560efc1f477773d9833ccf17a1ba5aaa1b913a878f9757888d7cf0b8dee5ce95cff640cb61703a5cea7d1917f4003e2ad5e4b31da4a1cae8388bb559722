import { n as onExit, t as watch } from "./shared/watch-Bd8v9ewv.mjs";
import { C as version, S as description } from "./shared/bindingify-input-options-DbbBhzky.mjs";
import { t as arraify } from "./shared/misc-DJYbNKZX.mjs";
import { a as getInputCliKeys, i as getCliSchemaInfo, l as styleText, o as getOutputCliKeys, r as logger, s as validateCliOptions } from "./shared/rolldown-build-DSxL8qiP.mjs";
import { t as rolldown } from "./shared/rolldown-D3JZ9rMt.mjs";
import { t as loadConfig } from "./shared/load-config-BoVO31Un.mjs";
import path from "node:path";
import process$1 from "node:process";
import { performance } from "node:perf_hooks";
//#region ../../node_modules/.pnpm/cac@7.0.0/node_modules/cac/dist/index.js
function toArr(any) {
	return any == null ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
	var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
	out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function lib_default(args, opts) {
	args = args || [];
	opts = opts || {};
	var k, arr, arg, name, val, out = { _: [] };
	var i = 0, j = 0, idx = 0, len = args.length;
	const alibi = opts.alias !== void 0;
	const strict = opts.unknown !== void 0;
	const defaults = opts.default !== void 0;
	opts.alias = opts.alias || {};
	opts.string = toArr(opts.string);
	opts.boolean = toArr(opts.boolean);
	if (alibi) for (k in opts.alias) {
		arr = opts.alias[k] = toArr(opts.alias[k]);
		for (i = 0; i < arr.length; i++) (opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
	}
	for (i = opts.boolean.length; i-- > 0;) {
		arr = opts.alias[opts.boolean[i]] || [];
		for (j = arr.length; j-- > 0;) opts.boolean.push(arr[j]);
	}
	for (i = opts.string.length; i-- > 0;) {
		arr = opts.alias[opts.string[i]] || [];
		for (j = arr.length; j-- > 0;) opts.string.push(arr[j]);
	}
	if (defaults) for (k in opts.default) {
		name = typeof opts.default[k];
		arr = opts.alias[k] = opts.alias[k] || [];
		if (opts[name] !== void 0) {
			opts[name].push(k);
			for (i = 0; i < arr.length; i++) opts[name].push(arr[i]);
		}
	}
	const keys = strict ? Object.keys(opts.alias) : [];
	for (i = 0; i < len; i++) {
		arg = args[i];
		if (arg === "--") {
			out._ = out._.concat(args.slice(++i));
			break;
		}
		for (j = 0; j < arg.length; j++) if (arg.charCodeAt(j) !== 45) break;
		if (j === 0) out._.push(arg);
		else if (arg.substring(j, j + 3) === "no-") {
			name = arg.substring(j + 3);
			if (strict && !~keys.indexOf(name)) return opts.unknown(arg);
			out[name] = false;
		} else {
			for (idx = j + 1; idx < arg.length; idx++) if (arg.charCodeAt(idx) === 61) break;
			name = arg.substring(j, idx);
			val = arg.substring(++idx) || i + 1 === len || ("" + args[i + 1]).charCodeAt(0) === 45 || args[++i];
			arr = j === 2 ? [name] : name;
			for (idx = 0; idx < arr.length; idx++) {
				name = arr[idx];
				if (strict && !~keys.indexOf(name)) return opts.unknown("-".repeat(j) + name);
				toVal(out, name, idx + 1 < arr.length || val, opts);
			}
		}
	}
	if (defaults) {
		for (k in opts.default) if (out[k] === void 0) out[k] = opts.default[k];
	}
	if (alibi) for (k in out) {
		arr = opts.alias[k] || [];
		while (arr.length > 0) out[arr.shift()] = out[k];
	}
	return out;
}
function removeBrackets(v) {
	return v.replace(/[<[].+/, "").trim();
}
function findAllBrackets(v) {
	const ANGLED_BRACKET_RE_GLOBAL = /<([^>]+)>/g;
	const SQUARE_BRACKET_RE_GLOBAL = /\[([^\]]+)\]/g;
	const res = [];
	const parse = (match) => {
		let variadic = false;
		let value = match[1];
		if (value.startsWith("...")) {
			value = value.slice(3);
			variadic = true;
		}
		return {
			required: match[0].startsWith("<"),
			value,
			variadic
		};
	};
	let angledMatch;
	while (angledMatch = ANGLED_BRACKET_RE_GLOBAL.exec(v)) res.push(parse(angledMatch));
	let squareMatch;
	while (squareMatch = SQUARE_BRACKET_RE_GLOBAL.exec(v)) res.push(parse(squareMatch));
	return res;
}
function getMriOptions(options) {
	const result = {
		alias: {},
		boolean: []
	};
	for (const [index, option] of options.entries()) {
		if (option.names.length > 1) result.alias[option.names[0]] = option.names.slice(1);
		if (option.isBoolean) if (option.negated) {
			if (!options.some((o, i) => {
				return i !== index && o.names.some((name) => option.names.includes(name)) && typeof o.required === "boolean";
			})) result.boolean.push(option.names[0]);
		} else result.boolean.push(option.names[0]);
	}
	return result;
}
function findLongest(arr) {
	return arr.sort((a, b) => {
		return a.length > b.length ? -1 : 1;
	})[0];
}
function padRight(str, length) {
	return str.length >= length ? str : `${str}${" ".repeat(length - str.length)}`;
}
function camelcase(input) {
	return input.replaceAll(/([a-z])-([a-z])/g, (_, p1, p2) => {
		return p1 + p2.toUpperCase();
	});
}
function setDotProp(obj, keys, val) {
	let current = obj;
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (i === keys.length - 1) {
			current[key] = val;
			return;
		}
		if (current[key] == null) {
			const nextKeyIsArrayIndex = +keys[i + 1] > -1;
			current[key] = nextKeyIsArrayIndex ? [] : {};
		}
		current = current[key];
	}
}
function setByType(obj, transforms) {
	for (const key of Object.keys(transforms)) {
		const transform = transforms[key];
		if (transform.shouldTransform) {
			obj[key] = [obj[key]].flat();
			if (typeof transform.transformFunction === "function") obj[key] = obj[key].map(transform.transformFunction);
		}
	}
}
function getFileName(input) {
	const m = /([^\\/]+)$/.exec(input);
	return m ? m[1] : "";
}
function camelcaseOptionName(name) {
	return name.split(".").map((v, i) => {
		return i === 0 ? camelcase(v) : v;
	}).join(".");
}
var CACError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "CACError";
		if (typeof Error.captureStackTrace !== "function") this.stack = new Error(message).stack;
	}
};
var Option = class {
	rawName;
	description;
	/** Option name */
	name;
	/** Option name and aliases */
	names;
	isBoolean;
	required;
	config;
	negated;
	constructor(rawName, description, config) {
		this.rawName = rawName;
		this.description = description;
		this.config = Object.assign({}, config);
		rawName = rawName.replaceAll(".*", "");
		this.negated = false;
		this.names = removeBrackets(rawName).split(",").map((v) => {
			let name = v.trim().replace(/^-{1,2}/, "");
			if (name.startsWith("no-")) {
				this.negated = true;
				name = name.replace(/^no-/, "");
			}
			return camelcaseOptionName(name);
		}).sort((a, b) => a.length > b.length ? 1 : -1);
		this.name = this.names.at(-1);
		if (this.negated && this.config.default == null) this.config.default = true;
		if (rawName.includes("<")) this.required = true;
		else if (rawName.includes("[")) this.required = false;
		else this.isBoolean = true;
	}
};
let runtimeProcessArgs;
let runtimeInfo;
if (typeof process !== "undefined") {
	let runtimeName;
	if (typeof Deno !== "undefined" && typeof Deno.version?.deno === "string") runtimeName = "deno";
	else if (typeof Bun !== "undefined" && typeof Bun.version === "string") runtimeName = "bun";
	else runtimeName = "node";
	runtimeInfo = `${process.platform}-${process.arch} ${runtimeName}-${process.version}`;
	runtimeProcessArgs = process.argv;
} else if (typeof navigator === "undefined") runtimeInfo = `unknown`;
else runtimeInfo = `${navigator.platform} ${navigator.userAgent}`;
var Command = class {
	rawName;
	description;
	config;
	cli;
	options;
	aliasNames;
	name;
	args;
	commandAction;
	usageText;
	versionNumber;
	examples;
	helpCallback;
	globalCommand;
	constructor(rawName, description, config = {}, cli) {
		this.rawName = rawName;
		this.description = description;
		this.config = config;
		this.cli = cli;
		this.options = [];
		this.aliasNames = [];
		this.name = removeBrackets(rawName);
		this.args = findAllBrackets(rawName);
		this.examples = [];
	}
	usage(text) {
		this.usageText = text;
		return this;
	}
	allowUnknownOptions() {
		this.config.allowUnknownOptions = true;
		return this;
	}
	ignoreOptionDefaultValue() {
		this.config.ignoreOptionDefaultValue = true;
		return this;
	}
	version(version, customFlags = "-v, --version") {
		this.versionNumber = version;
		this.option(customFlags, "Display version number");
		return this;
	}
	example(example) {
		this.examples.push(example);
		return this;
	}
	/**
	* Add a option for this command
	* @param rawName Raw option name(s)
	* @param description Option description
	* @param config Option config
	*/
	option(rawName, description, config) {
		const option = new Option(rawName, description, config);
		this.options.push(option);
		return this;
	}
	alias(name) {
		this.aliasNames.push(name);
		return this;
	}
	action(callback) {
		this.commandAction = callback;
		return this;
	}
	/**
	* Check if a command name is matched by this command
	* @param name Command name
	*/
	isMatched(name) {
		return this.name === name || this.aliasNames.includes(name);
	}
	get isDefaultCommand() {
		return this.name === "" || this.aliasNames.includes("!");
	}
	get isGlobalCommand() {
		return this instanceof GlobalCommand;
	}
	/**
	* Check if an option is registered in this command
	* @param name Option name
	*/
	hasOption(name) {
		name = name.split(".")[0];
		return this.options.find((option) => {
			return option.names.includes(name);
		});
	}
	outputHelp() {
		const { name, commands } = this.cli;
		const { versionNumber, options: globalOptions, helpCallback } = this.cli.globalCommand;
		let sections = [{ body: `${name}${versionNumber ? `/${versionNumber}` : ""}` }];
		sections.push({
			title: "Usage",
			body: `  $ ${name} ${this.usageText || this.rawName}`
		});
		if ((this.isGlobalCommand || this.isDefaultCommand) && commands.length > 0) {
			const longestCommandName = findLongest(commands.map((command) => command.rawName));
			sections.push({
				title: "Commands",
				body: commands.map((command) => {
					return `  ${padRight(command.rawName, longestCommandName.length)}  ${command.description}`;
				}).join("\n")
			}, {
				title: `For more info, run any command with the \`--help\` flag`,
				body: commands.map((command) => `  $ ${name}${command.name === "" ? "" : ` ${command.name}`} --help`).join("\n")
			});
		}
		let options = this.isGlobalCommand ? globalOptions : [...this.options, ...globalOptions || []];
		if (!this.isGlobalCommand && !this.isDefaultCommand) options = options.filter((option) => option.name !== "version");
		if (options.length > 0) {
			const longestOptionName = findLongest(options.map((option) => option.rawName));
			sections.push({
				title: "Options",
				body: options.map((option) => {
					return `  ${padRight(option.rawName, longestOptionName.length)}  ${option.description} ${option.config.default === void 0 ? "" : `(default: ${option.config.default})`}`;
				}).join("\n")
			});
		}
		if (this.examples.length > 0) sections.push({
			title: "Examples",
			body: this.examples.map((example) => {
				if (typeof example === "function") return example(name);
				return example;
			}).join("\n")
		});
		if (helpCallback) sections = helpCallback(sections) || sections;
		console.info(sections.map((section) => {
			return section.title ? `${section.title}:\n${section.body}` : section.body;
		}).join("\n\n"));
	}
	outputVersion() {
		const { name } = this.cli;
		const { versionNumber } = this.cli.globalCommand;
		if (versionNumber) console.info(`${name}/${versionNumber} ${runtimeInfo}`);
	}
	checkRequiredArgs() {
		const minimalArgsCount = this.args.filter((arg) => arg.required).length;
		if (this.cli.args.length < minimalArgsCount) throw new CACError(`missing required args for command \`${this.rawName}\``);
	}
	/**
	* Check if the parsed options contain any unknown options
	*
	* Exit and output error when true
	*/
	checkUnknownOptions() {
		const { options, globalCommand } = this.cli;
		if (!this.config.allowUnknownOptions) {
			for (const name of Object.keys(options)) if (name !== "--" && !this.hasOption(name) && !globalCommand.hasOption(name)) throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
		}
	}
	/**
	* Check if the required string-type options exist
	*/
	checkOptionValue() {
		const { options: parsedOptions, globalCommand } = this.cli;
		const options = [...globalCommand.options, ...this.options];
		for (const option of options) {
			const value = parsedOptions[option.name.split(".")[0]];
			if (option.required) {
				const hasNegated = options.some((o) => o.negated && o.names.includes(option.name));
				if (value === true || value === false && !hasNegated) throw new CACError(`option \`${option.rawName}\` value is missing`);
			}
		}
	}
	/**
	* Check if the number of args is more than expected
	*/
	checkUnusedArgs() {
		const maximumArgsCount = this.args.some((arg) => arg.variadic) ? Infinity : this.args.length;
		if (maximumArgsCount < this.cli.args.length) throw new CACError(`Unused args: ${this.cli.args.slice(maximumArgsCount).map((arg) => `\`${arg}\``).join(", ")}`);
	}
};
var GlobalCommand = class extends Command {
	constructor(cli) {
		super("@@global@@", "", {}, cli);
	}
};
var CAC = class extends EventTarget {
	/** The program name to display in help and version message */
	name;
	commands;
	globalCommand;
	matchedCommand;
	matchedCommandName;
	/**
	* Raw CLI arguments
	*/
	rawArgs;
	/**
	* Parsed CLI arguments
	*/
	args;
	/**
	* Parsed CLI options, camelCased
	*/
	options;
	showHelpOnExit;
	showVersionOnExit;
	/**
	* @param name The program name to display in help and version message
	*/
	constructor(name = "") {
		super();
		this.name = name;
		this.commands = [];
		this.rawArgs = [];
		this.args = [];
		this.options = {};
		this.globalCommand = new GlobalCommand(this);
		this.globalCommand.usage("<command> [options]");
	}
	/**
	* Add a global usage text.
	*
	* This is not used by sub-commands.
	*/
	usage(text) {
		this.globalCommand.usage(text);
		return this;
	}
	/**
	* Add a sub-command
	*/
	command(rawName, description, config) {
		const command = new Command(rawName, description || "", config, this);
		command.globalCommand = this.globalCommand;
		this.commands.push(command);
		return command;
	}
	/**
	* Add a global CLI option.
	*
	* Which is also applied to sub-commands.
	*/
	option(rawName, description, config) {
		this.globalCommand.option(rawName, description, config);
		return this;
	}
	/**
	* Show help message when `-h, --help` flags appear.
	*
	*/
	help(callback) {
		this.globalCommand.option("-h, --help", "Display this message");
		this.globalCommand.helpCallback = callback;
		this.showHelpOnExit = true;
		return this;
	}
	/**
	* Show version number when `-v, --version` flags appear.
	*
	*/
	version(version, customFlags = "-v, --version") {
		this.globalCommand.version(version, customFlags);
		this.showVersionOnExit = true;
		return this;
	}
	/**
	* Add a global example.
	*
	* This example added here will not be used by sub-commands.
	*/
	example(example) {
		this.globalCommand.example(example);
		return this;
	}
	/**
	* Output the corresponding help message
	* When a sub-command is matched, output the help message for the command
	* Otherwise output the global one.
	*
	*/
	outputHelp() {
		if (this.matchedCommand) this.matchedCommand.outputHelp();
		else this.globalCommand.outputHelp();
	}
	/**
	* Output the version number.
	*
	*/
	outputVersion() {
		this.globalCommand.outputVersion();
	}
	setParsedInfo({ args, options }, matchedCommand, matchedCommandName) {
		this.args = args;
		this.options = options;
		if (matchedCommand) this.matchedCommand = matchedCommand;
		if (matchedCommandName) this.matchedCommandName = matchedCommandName;
		return this;
	}
	unsetMatchedCommand() {
		this.matchedCommand = void 0;
		this.matchedCommandName = void 0;
	}
	/**
	* Parse argv
	*/
	parse(argv, { run = true } = {}) {
		if (!argv) {
			if (!runtimeProcessArgs) throw new Error("No argv provided and runtime process argv is not available.");
			argv = runtimeProcessArgs;
		}
		this.rawArgs = argv;
		if (!this.name) this.name = argv[1] ? getFileName(argv[1]) : "cli";
		let shouldParse = true;
		for (const command of this.commands) {
			const parsed = this.mri(argv.slice(2), command);
			const commandName = parsed.args[0];
			if (command.isMatched(commandName)) {
				shouldParse = false;
				const parsedInfo = {
					...parsed,
					args: parsed.args.slice(1)
				};
				this.setParsedInfo(parsedInfo, command, commandName);
				this.dispatchEvent(new CustomEvent(`command:${commandName}`, { detail: command }));
			}
		}
		if (shouldParse) {
			for (const command of this.commands) if (command.isDefaultCommand) {
				shouldParse = false;
				const parsed = this.mri(argv.slice(2), command);
				this.setParsedInfo(parsed, command);
				this.dispatchEvent(new CustomEvent("command:!", { detail: command }));
			}
		}
		if (shouldParse) {
			const parsed = this.mri(argv.slice(2));
			this.setParsedInfo(parsed);
		}
		if (this.options.help && this.showHelpOnExit) {
			this.outputHelp();
			run = false;
			this.unsetMatchedCommand();
		}
		if (this.options.version && this.showVersionOnExit && this.matchedCommandName == null) {
			this.outputVersion();
			run = false;
			this.unsetMatchedCommand();
		}
		const parsedArgv = {
			args: this.args,
			options: this.options
		};
		if (run) this.runMatchedCommand();
		if (!this.matchedCommand && this.args[0]) this.dispatchEvent(new CustomEvent("command:*", { detail: this.args[0] }));
		return parsedArgv;
	}
	mri(argv, command) {
		const cliOptions = [...this.globalCommand.options, ...command ? command.options : []];
		const mriOptions = getMriOptions(cliOptions);
		let argsAfterDoubleDashes = [];
		const doubleDashesIndex = argv.indexOf("--");
		if (doubleDashesIndex !== -1) {
			argsAfterDoubleDashes = argv.slice(doubleDashesIndex + 1);
			argv = argv.slice(0, doubleDashesIndex);
		}
		let parsed = lib_default(argv, mriOptions);
		parsed = Object.keys(parsed).reduce((res, name) => {
			return {
				...res,
				[camelcaseOptionName(name)]: parsed[name]
			};
		}, { _: [] });
		const args = parsed._;
		const options = { "--": argsAfterDoubleDashes };
		const ignoreDefault = command && command.config.ignoreOptionDefaultValue ? command.config.ignoreOptionDefaultValue : this.globalCommand.config.ignoreOptionDefaultValue;
		const transforms = Object.create(null);
		for (const cliOption of cliOptions) {
			if (!ignoreDefault && cliOption.config.default !== void 0) for (const name of cliOption.names) options[name] = cliOption.config.default;
			if (Array.isArray(cliOption.config.type) && transforms[cliOption.name] === void 0) {
				transforms[cliOption.name] = Object.create(null);
				transforms[cliOption.name].shouldTransform = true;
				transforms[cliOption.name].transformFunction = cliOption.config.type[0];
			}
		}
		for (const key of Object.keys(parsed)) if (key !== "_") {
			setDotProp(options, key.split("."), parsed[key]);
			setByType(options, transforms);
		}
		return {
			args,
			options
		};
	}
	runMatchedCommand() {
		const { args, options, matchedCommand: command } = this;
		if (!command || !command.commandAction) return;
		command.checkUnknownOptions();
		command.checkOptionValue();
		command.checkRequiredArgs();
		command.checkUnusedArgs();
		const actionArgs = [];
		command.args.forEach((arg, index) => {
			if (arg.variadic) actionArgs.push(args.slice(index));
			else actionArgs.push(args[index]);
		});
		actionArgs.push(options);
		return command.commandAction.apply(this, actionArgs);
	}
};
/**
* @param name The program name to display in help and version message
*/
const cac = (name = "") => new CAC(name);
//#endregion
//#region src/cli/arguments/alias.ts
const alias = {
	config: {
		abbreviation: "c",
		hint: "filename"
	},
	help: { abbreviation: "h" },
	version: { abbreviation: "v" },
	watch: { abbreviation: "w" },
	dir: {
		abbreviation: "d",
		requireValue: true
	},
	file: {
		abbreviation: "o",
		requireValue: true
	},
	external: { abbreviation: "e" },
	format: { abbreviation: "f" },
	name: { abbreviation: "n" },
	globals: { abbreviation: "g" },
	sourcemap: { abbreviation: "s" },
	minify: { abbreviation: "m" },
	platform: { abbreviation: "p" },
	assetFileNames: { hint: "name" },
	chunkFileNames: { hint: "name" },
	entryFileNames: { hint: "name" },
	externalLiveBindings: { reverse: true },
	treeshake: { reverse: true },
	preserveEntrySignatures: { reverse: true },
	moduleTypes: { hint: "types" }
};
//#endregion
//#region src/cli/arguments/utils.ts
function setNestedProperty(obj, path, value) {
	const keys = path.split(".");
	let current = obj;
	for (let i = 0; i < keys.length - 1; i++) {
		if (!current[keys[i]]) current[keys[i]] = {};
		current = current[keys[i]];
	}
	const finalKey = keys[keys.length - 1];
	Object.defineProperty(current, finalKey, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function camelCaseToKebabCase(str) {
	return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
//#endregion
//#region src/cli/arguments/normalize.ts
const reservedKeys = new Set([
	"help",
	"version",
	"config",
	"watch",
	"environment"
]);
function normalizeCliOptions(cliOptions, positionals) {
	const [data, errors] = validateCliOptions(cliOptions);
	if (errors?.length) {
		errors.forEach((error) => {
			logger.error(`${error}. You can use \`rolldown -h\` to see the help.`);
		});
		process.exit(1);
	}
	const options = data ?? {};
	const result = {
		input: {},
		output: {},
		help: options.help ?? false,
		version: options.version ?? false,
		watch: options.watch ?? false
	};
	if (typeof options.config === "string") result.config = options.config;
	else if (options.config === true) result.config = "";
	if (options.environment !== void 0) result.environment = options.environment;
	const keysOfInput = new Set(getInputCliKeys());
	const keysOfOutput = new Set(getOutputCliKeys());
	for (let [key, value] of Object.entries(options)) {
		const [primary] = key.split(".");
		if (keysOfInput.has(primary)) setNestedProperty(result.input, key, value);
		else if (keysOfOutput.has(primary)) setNestedProperty(result.output, key, value);
		else if (!reservedKeys.has(key)) {
			logger.error(`Unknown option: ${key}`);
			process.exit(1);
		}
	}
	if (!result.config && positionals.length > 0) if (Array.isArray(result.input.input)) result.input.input.push(...positionals);
	else result.input.input = positionals;
	return result;
}
//#endregion
//#region src/cli/arguments/index.ts
const schemaInfo = getCliSchemaInfo();
const options = Object.fromEntries(Object.entries(schemaInfo).filter(([_key, info]) => info.type !== "never").map(([key, info]) => {
	const config = alias[key];
	let description = info?.description ?? config?.description ?? "";
	if (config?.reverse) {
		if (description.startsWith("enable")) description = description.replace("enable", "disable");
		else if (!description.startsWith("Avoid")) description = `disable ${description}`;
	}
	const result = {
		type: info.type === "boolean" ? "boolean" : "string",
		description
	};
	if (config?.abbreviation) result.short = config.abbreviation;
	if (config?.hint) result.hint = config.hint;
	const kebabKey = camelCaseToKebabCase(key);
	return [config?.reverse ? `no-${kebabKey}` : kebabKey, result];
}));
const knownKeys = new Set(Object.keys(schemaInfo));
for (const key of Object.keys(schemaInfo)) {
	const dotIdx = key.indexOf(".");
	if (dotIdx > 0) knownKeys.add(key.substring(0, dotIdx));
}
const shortAliases = /* @__PURE__ */ new Set();
for (const config of Object.values(alias)) if (config?.abbreviation) shortAliases.add(config.abbreviation);
function parseCliArguments() {
	const cli = cac("rolldown");
	for (const [key, info] of Object.entries(schemaInfo)) {
		if (info.type === "never") continue;
		const config = alias[key];
		let rawName = "";
		if (config?.abbreviation) rawName += `-${config.abbreviation}, `;
		if (config?.reverse) rawName += `--no-${key}`;
		else rawName += `--${key}`;
		if (info.type !== "boolean" && !config?.reverse) if (config?.requireValue) rawName += ` <${config?.hint ?? key}>`;
		else rawName += ` [${config?.hint ?? key}]`;
		cli.option(rawName, info.description ?? config?.description ?? "");
	}
	let parsedInput = [];
	let parsedOptions = {};
	const cmd = cli.command("[...input]", "");
	cmd.allowUnknownOptions();
	cmd.ignoreOptionDefaultValue();
	cmd.action((input, opts) => {
		parsedInput = input;
		parsedOptions = opts;
	});
	try {
		cli.parse(process.argv, { run: true });
	} catch (err) {
		if (err?.name === "CACError") {
			const match = err.message.match(/option `(.+?)` value is missing/);
			if (match) {
				const optName = match[1].replace(/ [<[].*/, "").replace(/^-\w, /, "");
				logger.error(`Option \`${optName}\` requires a value but none was provided.`);
			} else logger.error(err.message);
			process.exit(1);
		}
		throw err;
	}
	delete parsedOptions["--"];
	for (const short of shortAliases) delete parsedOptions[short];
	for (const key of Object.keys(parsedOptions)) if (key === "__proto__" || key === "constructor" || key === "prototype" || key.startsWith("__proto__.") || key.startsWith("constructor.") || key.startsWith("prototype.")) delete parsedOptions[key];
	const unknownKeys = Object.keys(parsedOptions).filter((k) => !knownKeys.has(k));
	if (unknownKeys.length > 0) {
		unknownKeys.sort();
		const single = unknownKeys.length === 1;
		logger.warn(`Option \`${unknownKeys.join(",")}\` ${single ? "is" : "are"} unrecognized. We will ignore ${single ? "this" : "those"} option${single ? "" : "s"}.`);
	}
	const rawArgs = { ...parsedOptions };
	for (const key of unknownKeys) delete parsedOptions[key];
	for (const [key, value] of Object.entries(parsedOptions)) {
		const type = schemaInfo[key]?.type;
		if (Array.isArray(value)) {
			if (type !== "array" && type !== "object") parsedOptions[key] = value[value.length - 1];
		} else if (type === "array" && typeof value === "string") parsedOptions[key] = [value];
	}
	for (const [schemaKey, info] of Object.entries(schemaInfo)) {
		if (info.type !== "object") continue;
		const parts = schemaKey.split(".");
		let parent = parsedOptions;
		for (let i = 0; i < parts.length - 1; i++) parent = parent?.[parts[i]];
		const leafKey = parts[parts.length - 1];
		const value = parent?.[leafKey];
		if (value === void 0) continue;
		const values = Array.isArray(value) ? value : [value];
		if (typeof values[0] !== "string") continue;
		let usedDeprecatedSyntax = false;
		const result = {};
		for (const v of values) for (const pair of String(v).split(",")) {
			const colonIdx = pair.indexOf(":");
			const eqIdx = pair.indexOf("=");
			let k;
			let val;
			if (colonIdx > 0 && (eqIdx === -1 || colonIdx < eqIdx)) {
				k = pair.slice(0, colonIdx);
				val = pair.slice(colonIdx + 1);
			} else if (eqIdx > 0) {
				k = pair.slice(0, eqIdx);
				val = pair.slice(eqIdx + 1);
				usedDeprecatedSyntax = true;
			} else continue;
			result[k] = val;
		}
		if (usedDeprecatedSyntax) {
			const optionName = camelCaseToKebabCase(schemaKey);
			logger.warn(`Using \`key=value\` syntax for \`--${optionName}\` is deprecated. Use \`key:value\` instead.`);
		}
		parent[leafKey] = result;
	}
	return {
		...normalizeCliOptions(parsedOptions, parsedInput),
		rawArgs
	};
}
//#endregion
//#region src/utils/clear-screen.ts
const CLEAR_SCREEN = "\x1Bc";
function getClearScreenFunction(options) {
	const isTTY = process.stdout.isTTY;
	const isAnyOptionNotAllowingClearScreen = arraify(options).some(({ watch }) => watch === false || watch?.clearScreen === false);
	if (isTTY && !isAnyOptionNotAllowingClearScreen) return () => {
		process.stdout.write(CLEAR_SCREEN);
	};
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/usingCtx.js
function _usingCtx() {
	var r = "function" == typeof SuppressedError ? SuppressedError : function(r, e) {
		var n = Error();
		return n.name = "SuppressedError", n.error = r, n.suppressed = e, n;
	}, e = {}, n = [];
	function using(r, e) {
		if (null != e) {
			if (Object(e) !== e) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
			if (r) var o = e[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
			if (void 0 === o && (o = e[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r)) var t = o;
			if ("function" != typeof o) throw new TypeError("Object is not disposable.");
			t && (o = function o() {
				try {
					t.call(e);
				} catch (r) {
					return Promise.reject(r);
				}
			}), n.push({
				v: e,
				d: o,
				a: r
			});
		} else r && n.push({
			d: e,
			a: r
		});
		return e;
	}
	return {
		e,
		u: using.bind(null, !1),
		a: using.bind(null, !0),
		d: function d() {
			var o, t = this.e, s = 0;
			function next() {
				for (; o = n.pop();) try {
					if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
					if (o.d) {
						var r = o.d.call(o.v);
						if (o.a) return s |= 2, Promise.resolve(r).then(next, err);
					} else s |= 1;
				} catch (r) {
					return err(r);
				}
				if (1 === s) return t !== e ? Promise.reject(t) : Promise.resolve();
				if (t !== e) throw t;
			}
			function err(n) {
				return t = t !== e ? new r(n, t) : n, next();
			}
			return next();
		}
	};
}
//#endregion
//#region src/cli/commands/bundle.ts
async function bundleWithConfig(configPath, cliOptions, rawArgs = {}) {
	if (cliOptions.watch) {
		process.env.ROLLUP_WATCH = "true";
		process.env.ROLLDOWN_WATCH = "true";
	}
	const config = await loadConfig(configPath);
	const resolvedConfig = typeof config === "function" ? await config(rawArgs) : config;
	if (typeof resolvedConfig !== "object" || resolvedConfig === null) {
		logger.error(`Invalid configuration from ${configPath}: expected object or array, got ${resolvedConfig}`);
		process.exit(1);
	}
	if (cliOptions.watch) await watchInner(resolvedConfig, cliOptions);
	else await bundleInner(resolvedConfig, cliOptions);
}
async function bundleWithCliOptions(cliOptions) {
	try {
		var _usingCtx$1 = _usingCtx();
		if (cliOptions.output.dir || cliOptions.output.file) {
			await (cliOptions.watch ? watchInner : bundleInner)({}, cliOptions);
			return;
		}
		if (cliOptions.watch) {
			logger.error("You must specify `output.dir` to use watch mode");
			process.exit(1);
		}
		const { output: outputs } = await _usingCtx$1.a(await rolldown(cliOptions.input)).generate(cliOptions.output);
		if (outputs.length === 0) {
			logger.error("No output generated");
			process.exit(1);
		}
		for (const file of outputs) {
			if (outputs.length > 1) logger.log(`\n${styleText(["cyan", "bold"], `|→ ${file.fileName}:`)}\n`);
			console.log(file.type === "asset" ? file.source : file.code);
		}
	} catch (_) {
		_usingCtx$1.e = _;
	} finally {
		await _usingCtx$1.d();
	}
}
async function watchInner(config, cliOptions) {
	let normalizedConfig = arraify(config).map((option) => {
		return {
			...option,
			...cliOptions.input,
			output: arraify(option.output || {}).map((output) => {
				return {
					...output,
					...cliOptions.output
				};
			})
		};
	});
	const watcher = watch(normalizedConfig);
	onExit((code) => {
		Promise.resolve(watcher.close()).finally(() => {
			process.exit(typeof code === "number" ? code : 0);
		});
		return true;
	});
	const changedFile = [];
	watcher.on("change", (id, event) => {
		if (event.event === "update") changedFile.push(id);
	});
	const clearScreen = getClearScreenFunction(normalizedConfig);
	watcher.on("event", async (event) => {
		switch (event.code) {
			case "START":
				clearScreen?.();
				break;
			case "BUNDLE_START":
				if (changedFile.length > 0) logger.log(`Found ${styleText("bold", changedFile.map(relativeId).join(", "))} changed, rebuilding...`);
				changedFile.length = 0;
				break;
			case "BUNDLE_END":
				await event.result.close();
				logger.success(`Rebuilt ${styleText("bold", relativeId(event.output[0]))} in ${styleText("green", ms(event.duration))}.`);
				break;
			case "ERROR":
				await event.result.close();
				logger.error(event.error);
				break;
			default: break;
		}
	});
	logger.log(`Waiting for changes...`);
}
async function bundleInner(config, cliOptions) {
	const startTime = performance.now();
	const result = [];
	const configList = arraify(config);
	for (const config of configList) {
		const outputList = arraify(config.output || {});
		const build = await rolldown({
			...config,
			...cliOptions.input
		});
		try {
			for (const output of outputList) result.push(await build.write({
				...output,
				...cliOptions.output
			}));
		} finally {
			await build.close();
		}
	}
	result.forEach(printBundleOutputPretty);
	logger.log(``);
	const duration = performance.now() - startTime;
	logger.success(`rolldown v${version} Finished in ${styleText("green", ms(duration))}`);
}
function printBundleOutputPretty(output) {
	const outputEntries = collectOutputEntries(output.output);
	printOutputEntries(outputEntries, collectOutputLayoutAdjustmentSizes(outputEntries), "<DIR>");
}
function collectOutputEntries(output) {
	return output.map((chunk) => ({
		type: chunk.type,
		fileName: chunk.fileName,
		size: chunk.type === "chunk" ? Buffer.byteLength(chunk.code) : Buffer.byteLength(chunk.source)
	}));
}
function collectOutputLayoutAdjustmentSizes(entries) {
	let longest = 0;
	let biggestSize = 0;
	for (const entry of entries) {
		if (entry.fileName.length > longest) longest = entry.fileName.length;
		if (entry.size > biggestSize) biggestSize = entry.size;
	}
	const sizePad = displaySize(biggestSize).length;
	return {
		longest,
		biggestSize,
		sizePad
	};
}
const numberFormatter = new Intl.NumberFormat("en", {
	maximumFractionDigits: 2,
	minimumFractionDigits: 2
});
function displaySize(bytes) {
	return `${numberFormatter.format(bytes / 1e3)} kB`;
}
const CHUNK_GROUPS = [{
	type: "asset",
	color: "green"
}, {
	type: "chunk",
	color: "cyan"
}];
function printOutputEntries(entries, sizeAdjustment, distPath) {
	for (const group of CHUNK_GROUPS) {
		const filtered = entries.filter((e) => e.type === group.type);
		if (!filtered.length) continue;
		for (const entry of filtered.sort((a, z) => a.size - z.size)) {
			let log = styleText("dim", withTrailingSlash(distPath));
			log += styleText(group.color, entry.fileName.padEnd(sizeAdjustment.longest + 2));
			log += styleText("dim", entry.type);
			log += styleText("dim", ` │ size: ${displaySize(entry.size).padStart(sizeAdjustment.sizePad)}`);
			logger.log(log);
		}
	}
}
function withTrailingSlash(path) {
	if (path[path.length - 1] !== "/") return `${path}/`;
	return path;
}
function ms(duration) {
	return duration < 1e3 ? `${duration.toFixed(2)} ms` : `${(duration / 1e3).toFixed(2)} s`;
}
function relativeId(id) {
	if (!path.isAbsolute(id)) return id;
	return path.relative(path.resolve(), id);
}
//#endregion
//#region src/cli/commands/help.ts
const examples = [
	{
		title: "Bundle with a config file `rolldown.config.mjs`",
		command: "rolldown -c rolldown.config.mjs"
	},
	{
		title: "Bundle the `src/main.ts` to `dist` with `cjs` format",
		command: "rolldown src/main.ts -d dist -f cjs"
	},
	{
		title: "Bundle the `src/main.ts` and handle the `.png` assets to Data URL",
		command: "rolldown src/main.ts -d dist --moduleTypes .png=dataurl"
	},
	{
		title: "Bundle the `src/main.tsx` and minify the output with sourcemap",
		command: "rolldown src/main.tsx -d dist -m -s"
	},
	{
		title: "Create self-executing IIFE using external jQuery as `$` and `_`",
		command: "rolldown src/main.ts -d dist -n bundle -f iife -e jQuery,window._ -g jQuery=$"
	}
];
const notes = ["CLI options will override the configuration file.", "For more information, please visit https://rolldown.rs/."];
/**
* Generates the CLI help text as a string.
*/
function generateHelpText() {
	const lines = [];
	lines.push(`${styleText("gray", `${description} (rolldown v${version})`)}`);
	lines.push("");
	lines.push(`${styleText(["bold", "underline"], "USAGE")} ${styleText("cyan", "rolldown -c <config>")} or ${styleText("cyan", "rolldown <input> <options>")}`);
	lines.push("");
	lines.push(`${styleText(["bold", "underline"], "OPTIONS")}`);
	lines.push("");
	lines.push(Object.entries(options).sort(([a], [b]) => {
		if (options[a].short && !options[b].short) return -1;
		if (!options[a].short && options[b].short) return 1;
		if (options[a].short && options[b].short) return options[a].short.localeCompare(options[b].short);
		return a.localeCompare(b);
	}).map(([option, { type, short, hint, description }]) => {
		let optionStr = `  --${option} `;
		option = camelCaseToKebabCase(option);
		if (short) optionStr += `-${short}, `;
		if (type === "string") optionStr += `<${hint ?? option}>`;
		if (description && description.length > 0) description = description[0].toUpperCase() + description.slice(1);
		return styleText("cyan", optionStr.padEnd(30)) + description + (description && description?.endsWith(".") ? "" : ".");
	}).join("\n"));
	lines.push("");
	lines.push(`${styleText(["bold", "underline"], "EXAMPLES")}`);
	lines.push("");
	examples.forEach(({ title, command }, ord) => {
		lines.push(`  ${ord + 1}. ${title}:`);
		lines.push(`    ${styleText("cyan", command)}`);
		lines.push("");
	});
	lines.push(`${styleText(["bold", "underline"], "NOTES")}`);
	lines.push("");
	notes.forEach((note) => {
		lines.push(`  * ${styleText("gray", note)}`);
	});
	return lines.join("\n");
}
function showHelp() {
	logger.log(generateHelpText());
}
//#endregion
//#region src/cli/version-check.ts
function checkNodeVersion(nodeVersion) {
	const currentVersion = nodeVersion.split(".");
	const major = parseInt(currentVersion[0], 10);
	const minor = parseInt(currentVersion[1], 10);
	return major === 20 && minor >= 19 || major === 22 && minor >= 12 || major > 22;
}
//#endregion
//#region src/cli/index.ts
if (!checkNodeVersion(process$1.versions.node)) logger.warn(`You are using Node.js ${process$1.versions.node}. Rolldown requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.`);
async function main() {
	const { rawArgs, ...cliOptions } = parseCliArguments();
	if (cliOptions.environment) {
		const environment = Array.isArray(cliOptions.environment) ? cliOptions.environment : [cliOptions.environment];
		for (const argument of environment) for (const pair of argument.split(",")) {
			const [key, ...value] = pair.split(":");
			process$1.env[key] = value.length === 0 ? String(true) : value.join(":");
		}
	}
	if (cliOptions.help) {
		showHelp();
		return;
	}
	if (cliOptions.version) {
		logger.log(`rolldown v${version}`);
		return;
	}
	if (cliOptions.config || cliOptions.config === "") {
		await bundleWithConfig(cliOptions.config, cliOptions, rawArgs);
		return;
	}
	if ("input" in cliOptions.input) {
		await bundleWithCliOptions(cliOptions);
		return;
	}
	showHelp();
}
main().catch((err) => {
	logger.error(err);
	process$1.exit(1);
});
//#endregion
export {};
