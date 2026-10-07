//#region node_modules/.pnpm/mri@1.2.0/node_modules/mri/lib/index.mjs
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

//#endregion
//#region src/utils.ts
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

//#endregion
//#region src/option.ts
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

//#endregion
//#region src/runtime.ts
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

//#endregion
//#region src/command.ts
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

//#endregion
//#region src/cac.ts
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

//#endregion
//#region src/index.ts
/**
* @param name The program name to display in help and version message
*/
const cac = (name = "") => new CAC(name);

//#endregion
export { CAC, Command, cac, cac as default };