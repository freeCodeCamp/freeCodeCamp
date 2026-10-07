import { s as __toESM } from "./chunks/chunk.js";
import { N as VERSION, R as require_picocolors, n as createLogger } from "./chunks/logger.js";
import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { EventEmitter } from "events";

//#region ../../node_modules/.pnpm/cac@6.7.14/node_modules/cac/dist/index.mjs
function toArr(any) {
	return any == null ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
	var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
	out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function mri2(args, opts) {
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
const removeBrackets = (v) => v.replace(/[<[].+/, "").trim();
const findAllBrackets = (v) => {
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
};
const getMriOptions = (options) => {
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
};
const findLongest = (arr) => {
	return arr.sort((a, b) => {
		return a.length > b.length ? -1 : 1;
	})[0];
};
const padRight = (str, length) => {
	return str.length >= length ? str : `${str}${" ".repeat(length - str.length)}`;
};
const camelcase = (input) => {
	return input.replace(/([a-z])-([a-z])/g, (_, p1, p2) => {
		return p1 + p2.toUpperCase();
	});
};
const setDotProp = (obj, keys, val) => {
	let i = 0;
	let length = keys.length;
	let t = obj;
	let x;
	for (; i < length; ++i) {
		x = t[keys[i]];
		t = t[keys[i]] = i === length - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf(".") || !(+keys[i + 1] > -1) ? {} : [];
	}
};
const setByType = (obj, transforms) => {
	for (const key of Object.keys(transforms)) {
		const transform = transforms[key];
		if (transform.shouldTransform) {
			obj[key] = Array.prototype.concat.call([], obj[key]);
			if (typeof transform.transformFunction === "function") obj[key] = obj[key].map(transform.transformFunction);
		}
	}
};
const getFileName = (input) => {
	const m = /([^\\\/]+)$/.exec(input);
	return m ? m[1] : "";
};
const camelcaseOptionName = (name) => {
	return name.split(".").map((v, i) => {
		return i === 0 ? camelcase(v) : v;
	}).join(".");
};
var CACError = class extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, this.constructor);
		else this.stack = new Error(message).stack;
	}
};
var Option = class {
	constructor(rawName, description, config) {
		this.rawName = rawName;
		this.description = description;
		this.config = Object.assign({}, config);
		rawName = rawName.replace(/\.\*/g, "");
		this.negated = false;
		this.names = removeBrackets(rawName).split(",").map((v) => {
			let name = v.trim().replace(/^-{1,2}/, "");
			if (name.startsWith("no-")) {
				this.negated = true;
				name = name.replace(/^no-/, "");
			}
			return camelcaseOptionName(name);
		}).sort((a, b) => a.length > b.length ? 1 : -1);
		this.name = this.names[this.names.length - 1];
		if (this.negated && this.config.default == null) this.config.default = true;
		if (rawName.includes("<")) this.required = true;
		else if (rawName.includes("[")) this.required = false;
		else this.isBoolean = true;
	}
};
const processArgs = process.argv;
const platformInfo = `${process.platform}-${process.arch} node-${process.version}`;
var Command = class {
	constructor(rawName, description, config = {}, cli$1) {
		this.rawName = rawName;
		this.description = description;
		this.config = config;
		this.cli = cli$1;
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
	isMatched(name) {
		return this.name === name || this.aliasNames.includes(name);
	}
	get isDefaultCommand() {
		return this.name === "" || this.aliasNames.includes("!");
	}
	get isGlobalCommand() {
		return this instanceof GlobalCommand;
	}
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
			});
			sections.push({
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
		console.log(sections.map((section) => {
			return section.title ? `${section.title}:
${section.body}` : section.body;
		}).join("\n\n"));
	}
	outputVersion() {
		const { name } = this.cli;
		const { versionNumber } = this.cli.globalCommand;
		if (versionNumber) console.log(`${name}/${versionNumber} ${platformInfo}`);
	}
	checkRequiredArgs() {
		const minimalArgsCount = this.args.filter((arg) => arg.required).length;
		if (this.cli.args.length < minimalArgsCount) throw new CACError(`missing required args for command \`${this.rawName}\``);
	}
	checkUnknownOptions() {
		const { options, globalCommand } = this.cli;
		if (!this.config.allowUnknownOptions) {
			for (const name of Object.keys(options)) if (name !== "--" && !this.hasOption(name) && !globalCommand.hasOption(name)) throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
		}
	}
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
};
var GlobalCommand = class extends Command {
	constructor(cli$1) {
		super("@@global@@", "", {}, cli$1);
	}
};
var __assign = Object.assign;
var CAC = class extends EventEmitter {
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
	usage(text) {
		this.globalCommand.usage(text);
		return this;
	}
	command(rawName, description, config) {
		const command = new Command(rawName, description || "", config, this);
		command.globalCommand = this.globalCommand;
		this.commands.push(command);
		return command;
	}
	option(rawName, description, config) {
		this.globalCommand.option(rawName, description, config);
		return this;
	}
	help(callback) {
		this.globalCommand.option("-h, --help", "Display this message");
		this.globalCommand.helpCallback = callback;
		this.showHelpOnExit = true;
		return this;
	}
	version(version, customFlags = "-v, --version") {
		this.globalCommand.version(version, customFlags);
		this.showVersionOnExit = true;
		return this;
	}
	example(example) {
		this.globalCommand.example(example);
		return this;
	}
	outputHelp() {
		if (this.matchedCommand) this.matchedCommand.outputHelp();
		else this.globalCommand.outputHelp();
	}
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
	parse(argv = processArgs, { run = true } = {}) {
		this.rawArgs = argv;
		if (!this.name) this.name = argv[1] ? getFileName(argv[1]) : "cli";
		let shouldParse = true;
		for (const command of this.commands) {
			const parsed = this.mri(argv.slice(2), command);
			const commandName = parsed.args[0];
			if (command.isMatched(commandName)) {
				shouldParse = false;
				const parsedInfo = __assign(__assign({}, parsed), { args: parsed.args.slice(1) });
				this.setParsedInfo(parsedInfo, command, commandName);
				this.emit(`command:${commandName}`, command);
			}
		}
		if (shouldParse) {
			for (const command of this.commands) if (command.name === "") {
				shouldParse = false;
				const parsed = this.mri(argv.slice(2), command);
				this.setParsedInfo(parsed, command);
				this.emit(`command:!`, command);
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
		if (!this.matchedCommand && this.args[0]) this.emit("command:*");
		return parsedArgv;
	}
	mri(argv, command) {
		const cliOptions = [...this.globalCommand.options, ...command ? command.options : []];
		const mriOptions = getMriOptions(cliOptions);
		let argsAfterDoubleDashes = [];
		const doubleDashesIndex = argv.indexOf("--");
		if (doubleDashesIndex > -1) {
			argsAfterDoubleDashes = argv.slice(doubleDashesIndex + 1);
			argv = argv.slice(0, doubleDashesIndex);
		}
		let parsed = mri2(argv, mriOptions);
		parsed = Object.keys(parsed).reduce((res, name) => {
			return __assign(__assign({}, res), { [camelcaseOptionName(name)]: parsed[name] });
		}, { _: [] });
		const args = parsed._;
		const options = { "--": argsAfterDoubleDashes };
		const ignoreDefault = command && command.config.ignoreOptionDefaultValue ? command.config.ignoreOptionDefaultValue : this.globalCommand.config.ignoreOptionDefaultValue;
		let transforms = Object.create(null);
		for (const cliOption of cliOptions) {
			if (!ignoreDefault && cliOption.config.default !== void 0) for (const name of cliOption.names) options[name] = cliOption.config.default;
			if (Array.isArray(cliOption.config.type)) {
				if (transforms[cliOption.name] === void 0) {
					transforms[cliOption.name] = Object.create(null);
					transforms[cliOption.name]["shouldTransform"] = true;
					transforms[cliOption.name]["transformFunction"] = cliOption.config.type[0];
				}
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
		const actionArgs = [];
		command.args.forEach((arg, index) => {
			if (arg.variadic) actionArgs.push(args.slice(index));
			else actionArgs.push(args[index]);
		});
		actionArgs.push(options);
		return command.commandAction.apply(this, actionArgs);
	}
};
const cac = (name = "") => new CAC(name);

//#endregion
//#region src/node/cli.ts
var import_picocolors = /* @__PURE__ */ __toESM(require_picocolors(), 1);
function checkNodeVersion(nodeVersion) {
	const currentVersion = nodeVersion.split(".");
	const major = parseInt(currentVersion[0], 10);
	const minor = parseInt(currentVersion[1], 10);
	return major === 20 && minor >= 19 || major === 22 && minor >= 12 || major > 22;
}
if (!checkNodeVersion(process.versions.node)) console.warn(import_picocolors.default.yellow(`You are using Node.js ${process.versions.node}. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.`));
const cli = cac("vite");
let profileSession = global.__vite_profile_session;
let profileCount = 0;
const stopProfiler = (log) => {
	if (!profileSession) return;
	return new Promise((res, rej) => {
		profileSession.post("Profiler.stop", (err, { profile }) => {
			if (!err) {
				const outPath = path.resolve(`./vite-profile-${profileCount++}.cpuprofile`);
				fs.writeFileSync(outPath, JSON.stringify(profile));
				log(import_picocolors.default.yellow(`CPU profile written to ${import_picocolors.default.white(import_picocolors.default.dim(outPath))}`));
				profileSession = void 0;
				res();
			} else rej(err);
		});
	});
};
const filterDuplicateOptions = (options) => {
	for (const [key, value] of Object.entries(options)) if (Array.isArray(value)) options[key] = value[value.length - 1];
};
/**
* removing global flags before passing as command specific sub-configs
*/
function cleanGlobalCLIOptions(options) {
	const ret = { ...options };
	delete ret["--"];
	delete ret.c;
	delete ret.config;
	delete ret.base;
	delete ret.l;
	delete ret.logLevel;
	delete ret.clearScreen;
	delete ret.configLoader;
	delete ret.d;
	delete ret.debug;
	delete ret.f;
	delete ret.filter;
	delete ret.m;
	delete ret.mode;
	delete ret.force;
	delete ret.w;
	if ("sourcemap" in ret) {
		const sourcemap = ret.sourcemap;
		ret.sourcemap = sourcemap === "true" ? true : sourcemap === "false" ? false : ret.sourcemap;
	}
	if ("watch" in ret) ret.watch = ret.watch ? {} : void 0;
	return ret;
}
/**
* removing builder flags before passing as command specific sub-configs
*/
function cleanBuilderCLIOptions(options) {
	const ret = { ...options };
	delete ret.app;
	return ret;
}
/**
* host may be a number (like 0), should convert to string
*/
const convertHost = (v) => {
	if (typeof v === "number") return String(v);
	return v;
};
/**
* base may be a number (like 0), should convert to empty string
*/
const convertBase = (v) => {
	if (v === 0) return "";
	return v;
};
cli.option("-c, --config <file>", `[string] use specified config file`).option("--base <path>", `[string] public base path (default: /)`, { type: [convertBase] }).option("-l, --logLevel <level>", `[string] info | warn | error | silent`).option("--clearScreen", `[boolean] allow/disable clear screen when logging`).option("--configLoader <loader>", `[string] use 'bundle' to bundle the config with esbuild, or 'runner' (experimental) to process it on the fly, or 'native' (experimental) to load using the native runtime (default: bundle)`).option("-d, --debug [feat]", `[string | boolean] show debug logs`).option("-f, --filter <filter>", `[string] filter debug logs`).option("-m, --mode <mode>", `[string] set env mode`);
cli.command("[root]", "start dev server").alias("serve").alias("dev").option("--host [host]", `[string] specify hostname`, { type: [convertHost] }).option("--port <port>", `[number] specify port`).option("--open [path]", `[boolean | string] open browser on startup`).option("--cors", `[boolean] enable CORS`).option("--strictPort", `[boolean] exit if specified port is already in use`).option("--force", `[boolean] force the optimizer to ignore the cache and re-bundle`).action(async (root, options) => {
	filterDuplicateOptions(options);
	const { createServer } = await import("./chunks/server.js");
	try {
		const server = await createServer({
			root,
			base: options.base,
			mode: options.mode,
			configFile: options.config,
			configLoader: options.configLoader,
			logLevel: options.logLevel,
			clearScreen: options.clearScreen,
			server: cleanGlobalCLIOptions(options),
			forceOptimizeDeps: options.force
		});
		if (!server.httpServer) throw new Error("HTTP server not available");
		await server.listen();
		const info = server.config.logger.info;
		const modeString = options.mode && options.mode !== "development" ? `  ${import_picocolors.default.bgGreen(` ${import_picocolors.default.bold(options.mode)} `)}` : "";
		const viteStartTime = global.__vite_start_time ?? false;
		const startupDurationString = viteStartTime ? import_picocolors.default.dim(`ready in ${import_picocolors.default.reset(import_picocolors.default.bold(Math.ceil(performance.now() - viteStartTime)))} ms`) : "";
		const hasExistingLogs = process.stdout.bytesWritten > 0 || process.stderr.bytesWritten > 0;
		info(`\n  ${import_picocolors.default.green(`${import_picocolors.default.bold("VITE")} v${VERSION}`)}${modeString}  ${startupDurationString}\n`, { clear: !hasExistingLogs });
		server.printUrls();
		const customShortcuts = [];
		if (profileSession) customShortcuts.push({
			key: "p",
			description: "start/stop the profiler",
			async action(server$1) {
				if (profileSession) await stopProfiler(server$1.config.logger.info);
				else {
					const inspector = await import("node:inspector").then((r) => r.default);
					await new Promise((res) => {
						profileSession = new inspector.Session();
						profileSession.connect();
						profileSession.post("Profiler.enable", () => {
							profileSession.post("Profiler.start", () => {
								server$1.config.logger.info("Profiler started");
								res();
							});
						});
					});
				}
			}
		});
		server.bindCLIShortcuts({
			print: true,
			customShortcuts
		});
	} catch (e) {
		const logger = createLogger(options.logLevel);
		logger.error(import_picocolors.default.red(`error when starting dev server:\n${e.stack}`), { error: e });
		await stopProfiler(logger.info);
		process.exit(1);
	}
});
cli.command("build [root]", "build for production").option("--target <target>", `[string] transpile target (default: 'baseline-widely-available')`).option("--outDir <dir>", `[string] output directory (default: dist)`).option("--assetsDir <dir>", `[string] directory under outDir to place assets in (default: assets)`).option("--assetsInlineLimit <number>", `[number] static asset base64 inline threshold in bytes (default: 4096)`).option("--ssr [entry]", `[string] build specified entry for server-side rendering`).option("--sourcemap [output]", `[boolean | "inline" | "hidden"] output source maps for build (default: false)`).option("--minify [minifier]", "[boolean | \"terser\" | \"esbuild\"] enable/disable minification, or specify minifier to use (default: esbuild)").option("--manifest [name]", `[boolean | string] emit build manifest json`).option("--ssrManifest [name]", `[boolean | string] emit ssr manifest json`).option("--emptyOutDir", `[boolean] force empty outDir when it's outside of root`).option("-w, --watch", `[boolean] rebuilds when modules have changed on disk`).option("--app", `[boolean] same as \`builder: {}\``).action(async (root, options) => {
	filterDuplicateOptions(options);
	const { createBuilder } = await import("./chunks/build.js");
	const buildOptions = cleanGlobalCLIOptions(cleanBuilderCLIOptions(options));
	try {
		await (await createBuilder({
			root,
			base: options.base,
			mode: options.mode,
			configFile: options.config,
			configLoader: options.configLoader,
			logLevel: options.logLevel,
			clearScreen: options.clearScreen,
			build: buildOptions,
			...options.app ? { builder: {} } : {}
		}, null)).buildApp();
	} catch (e) {
		createLogger(options.logLevel).error(import_picocolors.default.red(`error during build:\n${e.stack}`), { error: e });
		process.exit(1);
	} finally {
		await stopProfiler((message) => createLogger(options.logLevel).info(message));
	}
});
cli.command("optimize [root]", "pre-bundle dependencies (deprecated, the pre-bundle process runs automatically and does not need to be called)").option("--force", `[boolean] force the optimizer to ignore the cache and re-bundle`).action(async (root, options) => {
	filterDuplicateOptions(options);
	const { resolveConfig } = await import("./chunks/config2.js");
	const { optimizeDeps } = await import("./chunks/optimizer.js");
	try {
		await optimizeDeps(await resolveConfig({
			root,
			base: options.base,
			configFile: options.config,
			configLoader: options.configLoader,
			logLevel: options.logLevel,
			mode: options.mode
		}, "serve"), options.force, true);
	} catch (e) {
		createLogger(options.logLevel).error(import_picocolors.default.red(`error when optimizing deps:\n${e.stack}`), { error: e });
		process.exit(1);
	}
});
cli.command("preview [root]", "locally preview production build").option("--host [host]", `[string] specify hostname`, { type: [convertHost] }).option("--port <port>", `[number] specify port`).option("--strictPort", `[boolean] exit if specified port is already in use`).option("--open [path]", `[boolean | string] open browser on startup`).option("--outDir <dir>", `[string] output directory (default: dist)`).action(async (root, options) => {
	filterDuplicateOptions(options);
	const { preview } = await import("./chunks/preview.js");
	try {
		const server = await preview({
			root,
			base: options.base,
			configFile: options.config,
			configLoader: options.configLoader,
			logLevel: options.logLevel,
			mode: options.mode,
			build: { outDir: options.outDir },
			preview: {
				port: options.port,
				strictPort: options.strictPort,
				host: options.host,
				open: options.open
			}
		});
		server.printUrls();
		server.bindCLIShortcuts({ print: true });
	} catch (e) {
		createLogger(options.logLevel).error(import_picocolors.default.red(`error when starting preview server:\n${e.stack}`), { error: e });
		process.exit(1);
	} finally {
		await stopProfiler((message) => createLogger(options.logLevel).info(message));
	}
});
cli.help();
cli.version(VERSION);
cli.parse();

//#endregion
export { stopProfiler };