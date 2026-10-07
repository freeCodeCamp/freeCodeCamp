import { toArray } from '@vitest/utils/helpers';
import { EventEmitter } from 'events';
import { normalize } from 'pathe';
import c$2, { disableDefaultColors } from 'tinyrainbow';
import './env.D4Lgay0q.js';
import { b as defaultPort, d as defaultBrowserPort } from './constants.CPYnjOGj.js';
import assert from 'node:assert';
import { isAgent } from 'std-env';

function toArr(any) {
	return any == null ? [] : Array.isArray(any) ? any : [any];
}

function toVal(out, key, val, opts) {
	var x, old=out[key], nxt=(
		!!~opts.string.indexOf(key) ? (val == null || val === true ? '' : String(val))
		: typeof val === 'boolean' ? val
		: !!~opts.boolean.indexOf(key) ? (val === 'false' ? false : val === 'true' || (out._.push((x = +val,x * 0 === 0) ? x : val),!!val))
		: (x = +val,x * 0 === 0) ? x : val
	);
	out[key] = old == null ? nxt : (Array.isArray(old) ? old.concat(nxt) : [old, nxt]);
}

function mri2 (args, opts) {
	args = args || [];
	opts = opts || {};

	var k, arr, arg, name, val, out={ _:[] };
	var i=0, j=0, idx=0, len=args.length;

	const alibi = opts.alias !== void 0;
	const strict = opts.unknown !== void 0;
	const defaults = opts.default !== void 0;

	opts.alias = opts.alias || {};
	opts.string = toArr(opts.string);
	opts.boolean = toArr(opts.boolean);

	if (alibi) {
		for (k in opts.alias) {
			arr = opts.alias[k] = toArr(opts.alias[k]);
			for (i=0; i < arr.length; i++) {
				(opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
			}
		}
	}

	for (i=opts.boolean.length; i-- > 0;) {
		arr = opts.alias[opts.boolean[i]] || [];
		for (j=arr.length; j-- > 0;) opts.boolean.push(arr[j]);
	}

	for (i=opts.string.length; i-- > 0;) {
		arr = opts.alias[opts.string[i]] || [];
		for (j=arr.length; j-- > 0;) opts.string.push(arr[j]);
	}

	if (defaults) {
		for (k in opts.default) {
			name = typeof opts.default[k];
			arr = opts.alias[k] = opts.alias[k] || [];
			if (opts[name] !== void 0) {
				opts[name].push(k);
				for (i=0; i < arr.length; i++) {
					opts[name].push(arr[i]);
				}
			}
		}
	}

	const keys = strict ? Object.keys(opts.alias) : [];

	for (i=0; i < len; i++) {
		arg = args[i];

		if (arg === '--') {
			out._ = out._.concat(args.slice(++i));
			break;
		}

		for (j=0; j < arg.length; j++) {
			if (arg.charCodeAt(j) !== 45) break; // "-"
		}

		if (j === 0) {
			out._.push(arg);
		} else if (arg.substring(j, j + 3) === 'no-') {
			name = arg.substring(j + 3);
			if (strict && !~keys.indexOf(name)) {
				return opts.unknown(arg);
			}
			out[name] = false;
		} else {
			for (idx=j+1; idx < arg.length; idx++) {
				if (arg.charCodeAt(idx) === 61) break; // "="
			}

			name = arg.substring(j, idx);
			val = arg.substring(++idx) || (i+1 === len || (''+args[i+1]).charCodeAt(0) === 45 || args[++i]);
			arr = (j === 2 ? [name] : name);

			for (idx=0; idx < arr.length; idx++) {
				name = arr[idx];
				if (strict && !~keys.indexOf(name)) return opts.unknown('-'.repeat(j) + name);
				toVal(out, name, (idx + 1 < arr.length) || val, opts);
			}
		}
	}

	if (defaults) {
		for (k in opts.default) {
			if (out[k] === void 0) {
				out[k] = opts.default[k];
			}
		}
	}

	if (alibi) {
		for (k in out) {
			arr = opts.alias[k] || [];
			while (arr.length > 0) {
				out[arr.shift()] = out[k];
			}
		}
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
  while (angledMatch = ANGLED_BRACKET_RE_GLOBAL.exec(v)) {
    res.push(parse(angledMatch));
  }
  let squareMatch;
  while (squareMatch = SQUARE_BRACKET_RE_GLOBAL.exec(v)) {
    res.push(parse(squareMatch));
  }
  return res;
};
const getMriOptions = (options) => {
  const result = {alias: {}, boolean: []};
  for (const [index, option] of options.entries()) {
    if (option.names.length > 1) {
      result.alias[option.names[0]] = option.names.slice(1);
    }
    if (option.isBoolean) {
      if (option.negated) {
        const hasStringTypeOption = options.some((o, i) => {
          return i !== index && o.names.some((name) => option.names.includes(name)) && typeof o.required === "boolean";
        });
        if (!hasStringTypeOption) {
          result.boolean.push(option.names[0]);
        }
      } else {
        result.boolean.push(option.names[0]);
      }
    }
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
const setDotProp = (obj, keys, val, transforms) => {
  let i = 0;
  let length = keys.length;
  let t = obj;
  let x;
  let convertKey = (i) => {
    let key = keys[i];
    i--;
    while(i >= 0) {
      key = keys[i] + '.' + key;
      i--;
    }
    return key
  };
  for (; i < length; ++i) {
    x = t[keys[i]];
    const transform = transforms[convertKey(i)] || ((v) => v);
    t = t[keys[i]] = transform(i === length - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf(".") || !(+keys[i + 1] > -1) ? {} : []);
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
class CACError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

class Option {
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
    if (this.negated && this.config.default == null) {
      this.config.default = true;
    }
    if (rawName.includes("<")) {
      this.required = true;
    } else if (rawName.includes("[")) {
      this.required = false;
    } else {
      this.isBoolean = true;
    }
  }
}

const processArgs = process.argv;
const platformInfo = `${process.platform}-${process.arch} node-${process.version}`;

class Command {
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
    const {name, commands} = this.cli;
    const {
      versionNumber,
      options: globalOptions,
      helpCallback
    } = this.cli.globalCommand;
    let sections = [
      {
        body: `${name}${versionNumber ? `/${versionNumber}` : ""}`
      }
    ];
    sections.push({
      title: "Usage",
      body: `  $ ${name} ${this.usageText || this.rawName}`
    });
    const showCommands = (this.isGlobalCommand || this.isDefaultCommand) && commands.length > 0;
    if (showCommands) {
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
    if (!this.isGlobalCommand && !this.isDefaultCommand) {
      options = options.filter((option) => option.name !== "version");
    }
    if (options.length > 0) {
      const longestOptionName = findLongest(options.map((option) => option.rawName));
      sections.push({
        title: "Options",
        body: options.map((option) => {
          return `  ${padRight(option.rawName, longestOptionName.length)}  ${option.description} ${option.config.default === void 0 ? "" : `(default: ${option.config.default})`}`;
        }).join("\n")
      });
    }
    if (this.examples.length > 0) {
      sections.push({
        title: "Examples",
        body: this.examples.map((example) => {
          if (typeof example === "function") {
            return example(name);
          }
          return example;
        }).join("\n")
      });
    }
    if (helpCallback) {
      sections = helpCallback(sections) || sections;
    }
    console.log(sections.map((section) => {
      return section.title ? `${section.title}:
${section.body}` : section.body;
    }).join("\n\n"));
  }
  outputVersion() {
    const {name} = this.cli;
    const {versionNumber} = this.cli.globalCommand;
    if (versionNumber) {
      console.log(`${name}/${versionNumber} ${platformInfo}`);
    }
  }
  checkRequiredArgs() {
    const minimalArgsCount = this.args.filter((arg) => arg.required).length;
    if (this.cli.args.length < minimalArgsCount) {
      throw new CACError(`missing required args for command \`${this.rawName}\``);
    }
  }
  checkUnknownOptions() {
    const {options, globalCommand} = this.cli;
    if (!this.config.allowUnknownOptions) {
      for (const name of Object.keys(options)) {
        if (name !== "--" && !this.hasOption(name) && !globalCommand.hasOption(name)) {
          throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
        }
      }
    }
  }
  checkOptionValue() {
    const {options: parsedOptions, globalCommand} = this.cli;
    const options = [...globalCommand.options, ...this.options];
    for (const option of options) {
      // skip dot names because only top level options are required
      if (option.name.includes('.')) {
        continue;
      }
      const value = parsedOptions[option.name];
      if (option.required) {
        const hasNegated = options.some((o) => o.negated && o.names.includes(option.name));
        if (value === true || value === false && !hasNegated) {
          throw new CACError(`option \`${option.rawName}\` value is missing`);
        }
      }
    }
  }
}
class GlobalCommand extends Command {
  constructor(cli) {
    super("@@global@@", "", {}, cli);
  }
}

var __assign = Object.assign;
class CAC extends EventEmitter {
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
    if (this.matchedCommand) {
      this.matchedCommand.outputHelp();
    } else {
      this.globalCommand.outputHelp();
    }
  }
  outputVersion() {
    this.globalCommand.outputVersion();
  }
  setParsedInfo({args, options}, matchedCommand, matchedCommandName) {
    this.args = args;
    this.options = options;
    if (matchedCommand) {
      this.matchedCommand = matchedCommand;
    }
    if (matchedCommandName) {
      this.matchedCommandName = matchedCommandName;
    }
    return this;
  }
  unsetMatchedCommand() {
    this.matchedCommand = void 0;
    this.matchedCommandName = void 0;
  }
  parse(argv = processArgs, {
    run = true
  } = {}) {
    this.rawArgs = argv;
    if (!this.name) {
      this.name = argv[1] ? getFileName(argv[1]) : "cli";
    }
    let shouldParse = true;
    for (const command of this.commands) {
      const parsed = this.mri(argv.slice(2), command);
      const commandName = parsed.args[0];
      if (command.isMatched(commandName)) {
        shouldParse = false;
        const parsedInfo = __assign(__assign({}, parsed), {
          args: parsed.args.slice(1)
        });
        this.setParsedInfo(parsedInfo, command, commandName);
        this.emit(`command:${commandName}`, command);
      }
    }
    if (shouldParse) {
      for (const command of this.commands) {
        if (command.name === "") {
          shouldParse = false;
          const parsed = this.mri(argv.slice(2), command);
          this.setParsedInfo(parsed, command);
          this.emit(`command:!`, command);
        }
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
    const parsedArgv = {args: this.args, options: this.options};
    if (run) {
      this.runMatchedCommand();
    }
    if (!this.matchedCommand && this.args[0]) {
      this.emit("command:*");
    }
    return parsedArgv;
  }
  mri(argv, command) {
    const cliOptions = [
      ...this.globalCommand.options,
      ...command ? command.options : []
    ];
    const mriOptions = getMriOptions(cliOptions);
    let argsAfterDoubleDashes = [];
    const doubleDashesIndex = argv.indexOf("--");
    if (doubleDashesIndex > -1) {
      argsAfterDoubleDashes = argv.slice(doubleDashesIndex + 1);
      argv = argv.slice(0, doubleDashesIndex);
    }
    let parsed = mri2(argv, mriOptions);
    parsed = Object.keys(parsed).reduce((res, name) => {
      return __assign(__assign({}, res), {
        [camelcaseOptionName(name)]: parsed[name]
      });
    }, {_: []});
    const args = parsed._;
    const options = {
      "--": argsAfterDoubleDashes
    };
    const ignoreDefault = command && command.config.ignoreOptionDefaultValue ? command.config.ignoreOptionDefaultValue : this.globalCommand.config.ignoreOptionDefaultValue;
    let transforms = Object.create(null);
    for (const cliOption of cliOptions) {
      if (!ignoreDefault && cliOption.config.default !== void 0) {
        for (const name of cliOption.names) {
          options[name] = cliOption.config.default;
        }
      }
      if (cliOption.config.type != null) {
        if (transforms[cliOption.name] === void 0) {
          transforms[cliOption.name] = cliOption.config.type;
        }
      }
    }
    for (const key of Object.keys(parsed)) {
      if (key !== "_") {
        const keys = key.split(".");
        setDotProp(options, keys, parsed[key], transforms);
        // setByType(options, transforms);
      }
    }
    return {
      args,
      options
    };
  }
  runMatchedCommand() {
    const {args, options, matchedCommand: command} = this;
    if (!command || !command.commandAction)
      return;
    command.checkUnknownOptions();
    command.checkOptionValue();
    command.checkRequiredArgs();
    const actionArgs = [];
    command.args.forEach((arg, index) => {
      if (arg.variadic) {
        actionArgs.push(args.slice(index));
      } else {
        actionArgs.push(args[index]);
      }
    });
    actionArgs.push(options);
    return command.commandAction.apply(this, actionArgs);
  }
}

const cac = (name = "") => new CAC(name);

var version = "4.1.5";

const apiConfig = (port) => ({
	port: {
		description: `Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to \`${port}\``,
		argument: "[port]"
	},
	host: {
		description: "Specify which IP addresses the server should listen on. Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses",
		argument: "[host]"
	},
	strictPort: { description: "Set to true to exit if port is already in use, instead of automatically trying the next available port" },
	allowExec: { description: "Allow API to execute code. (Be careful when enabling this option in untrusted environments)" },
	allowWrite: { description: "Allow API to edit files. (Be careful when enabling this option in untrusted environments)" },
	middlewareMode: null
});
function watermarkTransform(value) {
	if (typeof value === "string") return value.split(",").map(Number);
	return value;
}
function transformNestedBoolean(value) {
	if (typeof value === "boolean") return { enabled: value };
	return value;
}
const cliOptionsConfig = {
	root: {
		description: "Root path",
		shorthand: "r",
		argument: "<path>",
		normalize: true
	},
	config: {
		shorthand: "c",
		description: "Path to config file",
		argument: "<path>",
		normalize: true
	},
	update: {
		shorthand: "u",
		description: "Update snapshot (accepts boolean, \"new\", \"all\" or \"none\")",
		argument: "[type]"
	},
	watch: {
		shorthand: "w",
		description: "Enable watch mode"
	},
	testNamePattern: {
		description: "Run tests with full names matching the specified regexp pattern",
		argument: "<pattern>",
		shorthand: "t"
	},
	dir: {
		description: "Base directory to scan for the test files",
		argument: "<path>",
		normalize: true
	},
	ui: { description: "Enable UI" },
	open: { description: "Open UI automatically (default: `!process.env.CI`)" },
	api: {
		argument: "[port]",
		description: `Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to ${defaultPort}`,
		subcommands: apiConfig(defaultPort),
		transform(portOrOptions) {
			if (typeof portOrOptions === "number") return { port: portOrOptions };
			return portOrOptions;
		}
	},
	silent: {
		description: "Silent console output from tests. Use `'passed-only'` to see logs from failing tests only.",
		argument: "[value]",
		transform(value) {
			if (value === "true" || value === "yes" || value === true) return true;
			if (value === "false" || value === "no" || value === false) return false;
			if (value === "passed-only") return value;
			throw new TypeError(`Unexpected value "--silent=${value}". Use "--silent=true ${value}" instead.`);
		}
	},
	hideSkippedTests: { description: "Hide logs for skipped tests" },
	reporters: {
		alias: "reporter",
		description: `Specify reporters (default, agent, minimal, blob, verbose, dot, json, tap, tap-flat, junit, tree, hanging-process, github-actions)`,
		argument: "<name>",
		subcommands: null,
		array: true
	},
	outputFile: {
		argument: "<filename/-s>",
		description: "Write test results to a file when supporter reporter is also specified, use cac's dot notation for individual outputs of multiple reporters (example: `--outputFile.tap=./tap.txt`)",
		subcommands: null
	},
	coverage: {
		description: "Enable coverage report",
		argument: "",
		transform: transformNestedBoolean,
		subcommands: {
			provider: {
				description: "Select the tool for coverage collection, available values are: \"v8\", \"istanbul\" and \"custom\"",
				argument: "<name>"
			},
			enabled: { description: "Enables coverage collection. Can be overridden using the `--coverage` CLI option (default: `false`)" },
			include: {
				description: "Files included in coverage as glob patterns. May be specified more than once when using multiple patterns. By default only files covered by tests are included.",
				argument: "<pattern>",
				array: true
			},
			exclude: {
				description: "Files to be excluded in coverage. May be specified more than once when using multiple extensions.",
				argument: "<pattern>",
				array: true
			},
			clean: { description: "Clean coverage results before running tests (default: true)" },
			cleanOnRerun: { description: "Clean coverage report on watch rerun (default: true)" },
			reportsDirectory: {
				description: "Directory to write coverage report to (default: ./coverage)",
				argument: "<path>",
				normalize: true
			},
			reporter: {
				description: "Coverage reporters to use. Visit [`coverage.reporter`](https://vitest.dev/config/coverage#coverage-reporter) for more information (default: `[\"text\", \"html\", \"clover\", \"json\"]`)",
				argument: "<name>",
				subcommands: null,
				array: true
			},
			reportOnFailure: { description: "Generate coverage report even when tests fail (default: `false`)" },
			allowExternal: { description: "Collect coverage of files outside the project root (default: `false`)" },
			skipFull: { description: "Do not show files with 100% statement, branch, and function coverage (default: `false`)" },
			thresholds: {
				description: null,
				argument: "",
				subcommands: {
					perFile: { description: "Check thresholds per file. See `--coverage.thresholds.lines`, `--coverage.thresholds.functions`, `--coverage.thresholds.branches` and `--coverage.thresholds.statements` for the actual thresholds (default: `false`)" },
					autoUpdate: {
						description: "Update threshold values: \"lines\", \"functions\", \"branches\" and \"statements\" to configuration file when current coverage is above the configured thresholds (default: `false`)",
						argument: "<boolean|function>",
						subcommands: null,
						transform(value) {
							if (value === "true" || value === "yes" || value === true) return true;
							if (value === "false" || value === "no" || value === false) return false;
							return value;
						}
					},
					lines: {
						description: "Threshold for lines. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers",
						argument: "<number>"
					},
					functions: {
						description: "Threshold for functions. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers",
						argument: "<number>"
					},
					branches: {
						description: "Threshold for branches. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers",
						argument: "<number>"
					},
					statements: {
						description: "Threshold for statements. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers",
						argument: "<number>"
					},
					100: { description: "Shortcut to set all coverage thresholds to 100 (default: `false`)" }
				}
			},
			ignoreClassMethods: {
				description: "Array of class method names to ignore for coverage. Visit [istanbuljs](https://github.com/istanbuljs/nyc#ignoring-methods) for more information. This option is only available for the istanbul providers (default: `[]`)",
				argument: "<name>",
				array: true
			},
			processingConcurrency: {
				description: "Concurrency limit used when processing the coverage results. (default min between 20 and the number of CPUs)",
				argument: "<number>"
			},
			customProviderModule: {
				description: "Specifies the module name or path for the custom coverage provider module. Visit [Custom Coverage Provider](https://vitest.dev/guide/coverage#custom-coverage-provider) for more information. This option is only available for custom providers",
				argument: "<path>",
				normalize: true
			},
			watermarks: {
				description: null,
				argument: "",
				subcommands: {
					statements: {
						description: "High and low watermarks for statements in the format of `<high>,<low>`",
						argument: "<watermarks>",
						transform: watermarkTransform
					},
					lines: {
						description: "High and low watermarks for lines in the format of `<high>,<low>`",
						argument: "<watermarks>",
						transform: watermarkTransform
					},
					branches: {
						description: "High and low watermarks for branches in the format of `<high>,<low>`",
						argument: "<watermarks>",
						transform: watermarkTransform
					},
					functions: {
						description: "High and low watermarks for functions in the format of `<high>,<low>`",
						argument: "<watermarks>",
						transform: watermarkTransform
					}
				}
			},
			changed: {
				description: "Collect coverage only for files changed since a specified commit or branch (e.g., `origin/main` or `HEAD~1`). Inherits value from `--changed` by default.",
				argument: "<commit/branch>",
				transform(value) {
					if (value === "true" || value === "yes" || value === true) return true;
					if (value === "false" || value === "no" || value === false) return false;
					return value;
				}
			},
			excludeAfterRemap: { description: "Apply exclusions again after coverage has been remapped to original sources. (default: false)" },
			htmlDir: {
				description: "Directory of HTML coverage output to be served in UI mode and HTML reporter.",
				argument: "<path>"
			}
		}
	},
	mode: {
		description: "Override Vite mode (default: `test` or `benchmark`)",
		argument: "<name>"
	},
	isolate: { description: "Run every test file in isolation. To disable isolation, use `--no-isolate` (default: `true`)" },
	globals: { description: "Inject apis globally" },
	dom: { description: "Mock browser API with happy-dom" },
	browser: {
		description: "Run tests in the browser. Equivalent to `--browser.enabled` (default: `false`)",
		argument: "<name>",
		transform(browser) {
			if (typeof browser === "boolean") return { enabled: browser };
			if (browser === "true" || browser === "false") return { enabled: browser === "true" };
			if (browser === "yes" || browser === "no") return { enabled: browser === "yes" };
			if (typeof browser === "string") return { name: browser };
			return browser;
		},
		subcommands: {
			enabled: { description: "Run tests in the browser. Equivalent to `--browser.enabled` (default: `false`)" },
			name: {
				description: "Run all tests in a specific browser. Some browsers are only available for specific providers (see `--browser.provider`).",
				argument: "<name>"
			},
			headless: { description: "Run the browser in headless mode (i.e. without opening the GUI (Graphical User Interface)). If you are running Vitest in CI, it will be enabled by default (default: `process.env.CI`)" },
			api: {
				description: "Specify options for the browser API server. Does not affect the --api option",
				argument: "[port]",
				subcommands: apiConfig(defaultBrowserPort)
			},
			isolate: { description: "Run every browser test file in isolation. To disable isolation, use `--browser.isolate=false` (default: `true`)" },
			ui: { description: "Show Vitest UI when running tests (default: `!process.env.CI`)" },
			detailsPanelPosition: {
				description: "Default position for the details panel in browser mode. Either `right` (horizontal split) or `bottom` (vertical split) (default: `right`)",
				argument: "<position>"
			},
			fileParallelism: { description: "Should browser test files run in parallel. Use `--browser.fileParallelism=false` to disable (default: `true`)" },
			connectTimeout: {
				description: "If connection to the browser takes longer, the test suite will fail (default: `60_000`)",
				argument: "<timeout>"
			},
			trackUnhandledErrors: { description: "Control if Vitest catches uncaught exceptions so they can be reported (default: `true`)" },
			trace: {
				description: "Enable trace view mode. Supported: \"on\", \"off\", \"on-first-retry\", \"on-all-retries\", \"retain-on-failure\".",
				argument: "<mode>",
				subcommands: null,
				transform(value) {
					return { mode: value };
				}
			},
			orchestratorScripts: null,
			commands: null,
			viewport: null,
			screenshotDirectory: null,
			screenshotFailures: null,
			locators: {
				description: "Options for how locators should be handled by default",
				argument: "<options>",
				subcommands: {
					testIdAttribute: null,
					exact: { description: "Should locators match the text exactly by default (default: `false`)" }
				},
				transform(val) {
					if (typeof val !== "object" || val == null) return {};
					return val;
				}
			},
			testerHtmlPath: null,
			instances: null,
			expect: null,
			provider: null
		}
	},
	pool: {
		description: "Specify pool, if not running in the browser (default: `forks`)",
		argument: "<pool>",
		subcommands: null
	},
	execArgv: {
		description: "Pass additional arguments to `node` process when spawning `worker_threads` or `child_process`.",
		argument: "<option>",
		array: true
	},
	vmMemoryLimit: {
		description: "Memory limit for VM pools. If you see memory leaks, try to tinker this value.",
		argument: "<limit>"
	},
	fileParallelism: { description: "Should all test files run in parallel. Use `--no-file-parallelism` to disable (default: `true`)" },
	maxWorkers: {
		description: "Maximum number or percentage of workers to run tests in",
		argument: "<workers>"
	},
	environment: {
		description: "Specify runner environment, if not running in the browser (default: `node`)",
		argument: "<name>",
		subcommands: null
	},
	passWithNoTests: { description: "Pass when no tests are found" },
	logHeapUsage: { description: "Show the size of heap for each test when running in node" },
	detectAsyncLeaks: { description: "Detect asynchronous resources leaking from the test file (default: `false`)" },
	allowOnly: { description: "Allow tests and suites that are marked as only (default: `!process.env.CI`)" },
	dangerouslyIgnoreUnhandledErrors: { description: "Ignore any unhandled errors that occur" },
	shard: {
		description: "Test suite shard to execute in a format of `<index>/<count>`",
		argument: "<shards>"
	},
	changed: {
		description: "Run tests that are affected by the changed files (default: `false`)",
		argument: "[since]"
	},
	sequence: {
		description: "Options for how tests should be sorted",
		argument: "<options>",
		subcommands: {
			shuffle: {
				description: "Run files and tests in a random order. Enabling this option will impact Vitest's cache and have a performance impact. May be useful to find tests that accidentally depend on another run previously (default: `false`)",
				argument: "",
				subcommands: {
					files: { description: "Run files in a random order. Long running tests will not start earlier if you enable this option. (default: `false`)" },
					tests: { description: "Run tests in a random order (default: `false`)" }
				}
			},
			concurrent: { description: "Make tests run in parallel (default: `false`)" },
			seed: {
				description: "Set the randomization seed. This option will have no effect if `--sequence.shuffle` is falsy. Visit [\"Random Seed\" page](https://en.wikipedia.org/wiki/Random_seed) for more information",
				argument: "<seed>"
			},
			hooks: {
				description: "Changes the order in which hooks are executed. Accepted values are: \"stack\", \"list\" and \"parallel\". Visit [`sequence.hooks`](https://vitest.dev/config/sequence#sequence-hooks) for more information (default: `\"parallel\"`)",
				argument: "<order>"
			},
			setupFiles: {
				description: "Changes the order in which setup files are executed. Accepted values are: \"list\" and \"parallel\". If set to \"list\", will run setup files in the order they are defined. If set to \"parallel\", will run setup files in parallel (default: `\"parallel\"`)",
				argument: "<order>"
			},
			groupOrder: null
		}
	},
	inspect: {
		description: "Enable Node.js inspector (default: `127.0.0.1:9229`)",
		argument: "[[host:]port]",
		transform(portOrEnabled) {
			if (portOrEnabled === 0 || portOrEnabled === "true" || portOrEnabled === "yes") return true;
			if (portOrEnabled === "false" || portOrEnabled === "no") return false;
			return portOrEnabled;
		}
	},
	inspectBrk: {
		description: "Enable Node.js inspector and break before the test starts",
		argument: "[[host:]port]",
		transform(portOrEnabled) {
			if (portOrEnabled === 0 || portOrEnabled === "true" || portOrEnabled === "yes") return true;
			if (portOrEnabled === "false" || portOrEnabled === "no") return false;
			return portOrEnabled;
		}
	},
	inspector: null,
	testTimeout: {
		description: "Default timeout of a test in milliseconds (default: `5000`). Use `0` to disable timeout completely.",
		argument: "<timeout>"
	},
	hookTimeout: {
		description: "Default hook timeout in milliseconds (default: `10000`). Use `0` to disable timeout completely.",
		argument: "<timeout>"
	},
	bail: {
		description: "Stop test execution when given number of tests have failed (default: `0`)",
		argument: "<number>"
	},
	retry: {
		description: "Retry the test specific number of times if it fails (default: `0`)",
		argument: "<times>",
		subcommands: {
			count: {
				description: "Number of times to retry a test if it fails (default: `0`)",
				argument: "<times>"
			},
			delay: {
				description: "Delay in milliseconds between retry attempts (default: `0`)",
				argument: "<ms>"
			},
			condition: {
				description: "Regex pattern to match error messages that should trigger a retry. Only errors matching this pattern will cause a retry (default: retry on all errors)",
				argument: "<pattern>",
				transform: (value) => {
					if (typeof value === "string") return new RegExp(value, "i");
					return value;
				}
			}
		}
	},
	diff: {
		description: "DiffOptions object or a path to a module which exports DiffOptions object",
		argument: "<path>",
		subcommands: {
			aAnnotation: {
				description: "Annotation for expected lines (default: `Expected`)",
				argument: "<annotation>"
			},
			aIndicator: {
				description: "Indicator for expected lines (default: `-`)",
				argument: "<indicator>"
			},
			bAnnotation: {
				description: "Annotation for received lines (default: `Received`)",
				argument: "<annotation>"
			},
			bIndicator: {
				description: "Indicator for received lines (default: `+`)",
				argument: "<indicator>"
			},
			commonIndicator: {
				description: "Indicator for common lines (default: ` `)",
				argument: "<indicator>"
			},
			contextLines: {
				description: "Number of lines of context to show around each change (default: `5`)",
				argument: "<lines>"
			},
			emptyFirstOrLastLinePlaceholder: {
				description: "Placeholder for an empty first or last line (default: `\"\"`)",
				argument: "<placeholder>"
			},
			expand: { description: "Expand all common lines (default: `true`)" },
			includeChangeCounts: { description: "Include comparison counts in diff output (default: `false`)" },
			omitAnnotationLines: { description: "Omit annotation lines from the output (default: `false`)" },
			printBasicPrototype: { description: "Print basic prototype Object and Array (default: `true`)" },
			maxDepth: {
				description: "Limit the depth to recurse when printing nested objects (default: `20`)",
				argument: "<maxDepth>"
			},
			truncateThreshold: {
				description: "Number of lines to show before and after each change (default: `0`)",
				argument: "<threshold>"
			},
			truncateAnnotation: {
				description: "Annotation for truncated lines (default: `... Diff result is truncated`)",
				argument: "<annotation>"
			}
		}
	},
	exclude: {
		description: "Additional file globs to be excluded from test",
		argument: "<glob>",
		array: true
	},
	expandSnapshotDiff: { description: "Show full diff when snapshot fails" },
	disableConsoleIntercept: { description: "Disable automatic interception of console logging (default: `false`)" },
	typecheck: {
		description: "Enable typechecking alongside tests (default: `false`)",
		argument: "",
		transform: transformNestedBoolean,
		subcommands: {
			enabled: { description: "Enable typechecking alongside tests (default: `false`)" },
			only: { description: "Run only typecheck tests. This automatically enables typecheck (default: `false`)" },
			checker: {
				description: "Specify the typechecker to use. Available values are: \"tsc\" and \"vue-tsc\" and a path to an executable (default: `\"tsc\"`)",
				argument: "<name>",
				subcommands: null
			},
			allowJs: { description: "Allow JavaScript files to be typechecked. By default takes the value from tsconfig.json" },
			ignoreSourceErrors: { description: "Ignore type errors from source files" },
			tsconfig: {
				description: "Path to a custom tsconfig file",
				argument: "<path>",
				normalize: true
			},
			spawnTimeout: {
				description: "Minimum time in milliseconds it takes to spawn the typechecker",
				argument: "<time>"
			},
			include: null,
			exclude: null
		}
	},
	project: {
		description: "The name of the project to run if you are using Vitest workspace feature. This can be repeated for multiple projects: `--project=1 --project=2`. You can also filter projects using wildcards like `--project=packages*`, and exclude projects with `--project=!pattern`.",
		argument: "<name>",
		array: true
	},
	slowTestThreshold: {
		description: "Threshold in milliseconds for a test or suite to be considered slow (default: `300`)",
		argument: "<threshold>"
	},
	teardownTimeout: {
		description: "Default timeout of a teardown function in milliseconds (default: `10000`)",
		argument: "<timeout>"
	},
	cache: {
		description: "Enable cache",
		argument: "",
		subcommands: { dir: null },
		default: true,
		transform(cache) {
			if (typeof cache !== "boolean" && cache) throw new Error("--cache.dir is deprecated");
			if (cache) return {};
			return cache;
		}
	},
	maxConcurrency: {
		description: "Maximum number of concurrent tests and suites during test file execution (default: `5`)",
		argument: "<number>"
	},
	expect: {
		description: "Configuration options for `expect()` matches",
		argument: "",
		subcommands: {
			requireAssertions: { description: "Require that all tests have at least one assertion" },
			poll: {
				description: "Default options for `expect.poll()`",
				argument: "",
				subcommands: {
					interval: {
						description: "Poll interval in milliseconds for `expect.poll()` assertions (default: `50`)",
						argument: "<interval>"
					},
					timeout: {
						description: "Poll timeout in milliseconds for `expect.poll()` assertions (default: `1000`)",
						argument: "<timeout>"
					}
				},
				transform(value) {
					if (typeof value !== "object") throw new TypeError(`Unexpected value for --expect.poll: ${value}. If you need to configure timeout, use --expect.poll.timeout=<timeout>`);
					return value;
				}
			}
		},
		transform(value) {
			if (typeof value !== "object") throw new TypeError(`Unexpected value for --expect: ${value}. If you need to configure expect options, use --expect.{name}=<value> syntax`);
			return value;
		}
	},
	printConsoleTrace: { description: "Always print console stack traces" },
	includeTaskLocation: { description: "Collect test and suite locations in the `location` property" },
	attachmentsDir: {
		description: "The directory where attachments from `context.annotate` are stored in (default: `.vitest-attachments`)",
		argument: "<dir>"
	},
	run: { description: "Disable watch mode" },
	color: {
		description: "Removes colors from the console output",
		alias: "no-color"
	},
	clearScreen: { description: "Clear terminal screen when re-running tests during watch mode (default: `true`)" },
	configLoader: {
		description: "Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly. This is only available in vite version 6.1.0 and above. (default: `bundle`)",
		argument: "<loader>"
	},
	standalone: { description: "Start Vitest without running tests. Tests will be running only on change. If browser mode is enabled, the UI will be opened automatically. This option is ignored when CLI file filters are passed. (default: `false`)" },
	mergeReports: {
		description: "Path to a blob reports directory. If this options is used, Vitest won't run any tests, it will only report previously recorded tests",
		argument: "[path]",
		transform(value) {
			if (!value || typeof value === "boolean") return ".vitest-reports";
			return value;
		}
	},
	listTags: {
		description: "List all available tags instead of running tests. `--list-tags=json` will output tags in JSON format, unless there are no tags.",
		argument: "[type]"
	},
	clearCache: { description: "Delete all Vitest caches, including `experimental.fsModuleCache`, without running any tests. This will reduce the performance in the subsequent test run." },
	tagsFilter: {
		description: "Run only tests with the specified tags. You can use logical operators `&&` (and), `||` (or) and `!` (not) to create complex expressions, see [Test Tags](https://vitest.dev/guide/test-tags#syntax) for more information.",
		argument: "<expression>",
		array: true
	},
	strictTags: { description: "Should Vitest throw an error if test has a tag that is not defined in the config. (default: `true`)" },
	experimental: {
		description: "Experimental features.",
		argument: "<features>",
		subcommands: {
			fsModuleCache: { description: "Enable caching of modules on the file system between reruns." },
			fsModuleCachePath: null,
			openTelemetry: null,
			importDurations: {
				description: "Configure import duration collection and CLI display. Note that UI's \"Module Graph\" tab can always show import breakdown regardless of the `print` setting.",
				argument: "",
				transform(value) {
					if (typeof value === "boolean") return { print: value };
					return value;
				},
				subcommands: {
					print: {
						description: "When to print import breakdown to CLI terminal. Use `true` to always print, `false` to never print, or `on-warn` to print only when imports exceed the warn threshold (default: false).",
						argument: "<boolean|on-warn>",
						transform(value) {
							if (value === "on-warn") return "on-warn";
							return value;
						}
					},
					limit: {
						description: "Maximum number of imports to collect and display (default: 0, or 10 if print or UI is enabled).",
						argument: "<number>"
					},
					failOnDanger: { description: "Fail the test run if any import exceeds the danger threshold (default: false)." },
					thresholds: {
						description: "Duration thresholds in milliseconds for coloring and warnings.",
						argument: "",
						subcommands: {
							warn: {
								description: "Warning threshold - imports exceeding this are shown in yellow/orange (default: 100).",
								argument: "<number>"
							},
							danger: {
								description: "Danger threshold - imports exceeding this are shown in red (default: 500).",
								argument: "<number>"
							}
						}
					}
				}
			},
			viteModuleRunner: { description: "Control whether Vitest uses Vite's module runner to run the code or fallback to the native `import`. (default: `true`)" },
			nodeLoader: { description: "Controls whether Vitest will use Node.js Loader API to process in-source or mocked files. This has no effect if `viteModuleRunner` is enabled. Disabling this can increase performance. (default: `true`)" },
			vcsProvider: {
				argument: "<path>",
				description: "Custom provider for detecting changed files. (default: `git`)",
				subcommands: null
			},
			preParse: { description: "Parse test specifications before running them. This will apply `.only` flag and test name pattern across all files without running them. (default: `false`)" }
		}
	},
	cliExclude: null,
	server: null,
	setupFiles: null,
	globalSetup: null,
	snapshotFormat: null,
	snapshotSerializers: null,
	includeSource: null,
	alias: null,
	env: null,
	environmentOptions: null,
	unstubEnvs: null,
	related: null,
	restoreMocks: null,
	runner: null,
	mockReset: null,
	forceRerunTriggers: null,
	unstubGlobals: null,
	uiBase: null,
	benchmark: null,
	include: null,
	fakeTimers: null,
	chaiConfig: null,
	clearMocks: null,
	css: null,
	deps: null,
	name: null,
	snapshotEnvironment: null,
	compare: null,
	outputJson: null,
	json: null,
	provide: null,
	filesOnly: null,
	staticParse: null,
	staticParseConcurrency: null,
	projects: null,
	watchTriggerPatterns: null,
	tags: null
};
const benchCliOptionsConfig = {
	compare: {
		description: "Benchmark output file to compare against",
		argument: "<filename>"
	},
	outputJson: {
		description: "Benchmark output file",
		argument: "<filename>"
	}
};
const collectCliOptionsConfig = {
	...cliOptionsConfig,
	json: {
		description: "Print collected tests as JSON or write to a file (Default: false)",
		argument: "[true/path]"
	},
	filesOnly: { description: "Print only test files with out the test cases" },
	staticParse: { description: "Parse files statically instead of running them to collect tests (default: false)" },
	staticParseConcurrency: {
		description: "How many tests to process at the same time (default: os.availableParallelism())",
		argument: "<limit>"
	},
	changed: {
		description: "Print only tests that are affected by the changed files (default: `false`)",
		argument: "[since]"
	}
};

const a={ShellCompDirectiveError:1,ShellCompDirectiveNoSpace:2,ShellCompDirectiveNoFileComp:4,ShellCompDirectiveFilterFileExt:8,ShellCompDirectiveFilterDirs:16,ShellCompDirectiveKeepOrder:32,ShellCompDirectiveDefault:0};var o$1=class o{name;variadic;command;handler;constructor(e,t,n,r=false){this.command=e,this.name=t,this.handler=n,this.variadic=r;}},s$1=class s{value;description;command;handler;alias;isBoolean;constructor(e,t,n,r,i,a){this.command=e,this.value=t,this.description=n,this.handler=r,this.alias=i,this.isBoolean=a;}},c$1=class c{value;description;options=new Map;arguments=new Map;parent;constructor(e,t){this.value=e,this.description=t;}option(e,t,n,r){let i,a,o;typeof n==`function`?(i=n,a=r,o=false):typeof n==`string`?(i=void 0,a=n,o=true):(i=void 0,a=void 0,o=true);let c=new s$1(this,e,t,i,a,o);return this.options.set(e,c),this}argument(e,t,n=false){let r=new o$1(this,e,t,n);return this.arguments.set(e,r),this}},l$1=class l extends c$1{commands=new Map;completions=[];directive=a.ShellCompDirectiveDefault;constructor(){super(``,``);}command(e,t){let n=new c$1(e,t);return this.commands.set(e,n),n}stripOptions(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(r.startsWith(`-`)){n++;let t=false,i=this.findOption(this,r);if(i)t=i.isBoolean??false;else for(let[,e]of this.commands){let n=this.findOption(e,r);if(n){t=n.isBoolean??false;break}}!t&&n<e.length&&!e[n].startsWith(`-`)&&n++;}else t.push(r),n++;}return t}matchCommand(e){e=this.stripOptions(e);let t=[],n=[],r=null;for(let i=0;i<e.length;i++){let a=e[i];t.push(a);let o=this.commands.get(t.join(` `));if(o)r=o;else {n=e.slice(i,e.length);break}}return [r||this,n]}shouldCompleteFlags(e,t){if(t.startsWith(`-`))return  true;if(e?.startsWith(`-`)){let t=this.findOption(this,e);if(!t){for(let[,n]of this.commands)if(t=this.findOption(n,e),t)break}return !(t&&t.isBoolean)}return  false}shouldCompleteCommands(e){return !e.startsWith(`-`)}handleFlagCompletion(e,t,n,r){let i;if(n.includes(`=`)){let[e]=n.split(`=`);i=e;}else if(r?.startsWith(`-`)){let t=this.findOption(e,r);t&&!t.isBoolean&&(i=r);}if(i){let t=this.findOption(e,i);if(t?.handler){let n=[];t.handler.call(t,(e,t)=>n.push({value:e,description:t}),e.options),this.completions=n;}return}if(n.startsWith(`-`)){let t=n.startsWith(`-`)&&!n.startsWith(`--`),r=n.replace(/^-+/,``);for(let[i,a]of e.options)t&&a.alias&&`-${a.alias}`.startsWith(n)?this.completions.push({value:`-${a.alias}`,description:a.description}):!t&&i.startsWith(r)&&this.completions.push({value:`--${i}`,description:a.description});}}findOption(e,t){let n=e.options.get(t);if(n||(n=e.options.get(t.replace(/^-+/,``)),n))return n;for(let[n,r]of e.options)if(r.alias&&`-${r.alias}`===t)return r}handleCommandCompletion(e,t){let n=this.stripOptions(e);for(let[e,r]of this.commands){if(e===``)continue;let i=e.split(` `);i.slice(0,n.length).every((e,t)=>e===n[t])&&i[n.length]?.startsWith(t)&&this.completions.push({value:i[n.length],description:r.description});}}handlePositionalCompletion(e,t){let n=e.value.split(` `).length,r=Math.max(0,t.length-n),i=Array.from(e.arguments.entries());if(i.length>0){let t;if(r<i.length){let[e,n]=i[r];t=n;}else {let e=i[i.length-1][1];e.variadic&&(t=e);}if(t&&t.handler&&typeof t.handler==`function`){let n=[];t.handler.call(t,(e,t)=>n.push({value:e,description:t}),e.options),this.completions.push(...n);}}}complete(e){this.directive=a.ShellCompDirectiveNoFileComp;let t=new Set;this.completions.filter(e=>t.has(e.value)?false:(t.add(e.value),true)).filter(t=>{if(e.includes(`=`)){let[,n]=e.split(`=`);return t.value.startsWith(n)}return t.value.startsWith(e)}).forEach(e=>console.log(`${e.value}\t${e.description??``}`)),console.log(`:${this.directive}`);}parse(e){this.completions=[];let t=e[e.length-1]===``;t&&e.pop();let n=e[e.length-1]||``,r=e.slice(0,-1);t&&(n!==``&&r.push(n),n=``);let[i]=this.matchCommand(r),a=r[r.length-1];if(this.shouldCompleteFlags(a,n))this.handleFlagCompletion(i,r,n,a);else {if(a?.startsWith(`-`)&&n===``&&t){let e=this.findOption(this,a);if(!e){for(let[,t]of this.commands)if(e=this.findOption(t,a),e)break}if(e&&e.isBoolean){this.complete(n);return}}this.shouldCompleteCommands(n)&&this.handleCommandCompletion(r,n),i&&i.arguments.size>0&&this.handlePositionalCompletion(i,r);}this.complete(n);}setup(a,o,s){switch(assert(s===`zsh`||s===`bash`||s===`fish`||s===`powershell`,`Unsupported shell`),s){case `zsh`:{let t$1=t(a,o);console.log(t$1);break}case `bash`:{let e=n(a,o);console.log(e);break}case `fish`:{let e=r(a,o);console.log(e);break}case `powershell`:{let e=i(a,o);console.log(e);break}}}};const u$1=new l$1;

function t(t,n){return `#compdef ${t}
compdef _${t} ${t}

# zsh completion for ${t} -*- shell-script -*-

__${t}_debug() {
    local file="$BASH_COMP_DEBUG_FILE"
    if [[ -n \${file} ]]; then
        echo "$*" >> "\${file}"
    fi
}

_${t}() {
    local shellCompDirectiveError=${a.ShellCompDirectiveError}
    local shellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
    local shellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
    local shellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
    local shellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
    local shellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

    local lastParam lastChar flagPrefix requestComp out directive comp lastComp noSpace keepOrder
    local -a completions

    __${t}_debug "\\n========= starting completion logic =========="
    __${t}_debug "CURRENT: \${CURRENT}, words[*]: \${words[*]}"

    # The user could have moved the cursor backwards on the command-line.
    # We need to trigger completion from the $CURRENT location, so we need
    # to truncate the command-line ($words) up to the $CURRENT location.
    # (We cannot use $CURSOR as its value does not work when a command is an alias.)
    words=( "\${=words[1,CURRENT]}" )
    __${t}_debug "Truncated words[*]: \${words[*]},"

    lastParam=\${words[-1]}
    lastChar=\${lastParam[-1]}
    __${t}_debug "lastParam: \${lastParam}, lastChar: \${lastChar}"

    # For zsh, when completing a flag with an = (e.g., ${t} -n=<TAB>)
    # completions must be prefixed with the flag
    setopt local_options BASH_REMATCH
    if [[ "\${lastParam}" =~ '-.*=' ]]; then
        # We are dealing with a flag with an =
        flagPrefix="-P \${BASH_REMATCH}"
    fi

    # Prepare the command to obtain completions, ensuring arguments are quoted for eval
    local -a args_to_quote=("\${(@)words[2,-1]}")
    if [ "\${lastChar}" = "" ]; then
        # If the last parameter is complete (there is a space following it)
        # We add an extra empty parameter so we can indicate this to the go completion code.
        __${t}_debug "Adding extra empty parameter"
        args_to_quote+=("")
    fi

    # Use Zsh's (q) flag to quote each argument safely for eval
    local quoted_args=("\${(@q)args_to_quote}")

    # Join the main command and the quoted arguments into a single string for eval
    requestComp="${n} complete -- \${quoted_args[*]}"

    __${t}_debug "About to call: eval \${requestComp}"

    # Use eval to handle any environment variables and such
    out=$(eval \${requestComp} 2>/dev/null)
    __${t}_debug "completion output: \${out}"

    # Extract the directive integer following a : from the last line
    local lastLine
    while IFS='\n' read -r line; do
        lastLine=\${line}
    done < <(printf "%s\n" "\${out[@]}")
    __${t}_debug "last line: \${lastLine}"

    if [ "\${lastLine[1]}" = : ]; then
        directive=\${lastLine[2,-1]}
        # Remove the directive including the : and the newline
        local suffix
        (( suffix=\${#lastLine}+2))
        out=\${out[1,-$suffix]}
    else
        # There is no directive specified.  Leave $out as is.
        __${t}_debug "No directive found.  Setting to default"
        directive=0
    fi

    __${t}_debug "directive: \${directive}"
    __${t}_debug "completions: \${out}"
    __${t}_debug "flagPrefix: \${flagPrefix}"

    if [ $((directive & shellCompDirectiveError)) -ne 0 ]; then
        __${t}_debug "Completion received error. Ignoring completions."
        return
    fi

    local activeHelpMarker="%"
    local endIndex=\${#activeHelpMarker}
    local startIndex=$((\${#activeHelpMarker}+1))
    local hasActiveHelp=0
    while IFS='\n' read -r comp; do
        # Check if this is an activeHelp statement (i.e., prefixed with $activeHelpMarker)
        if [ "\${comp[1,$endIndex]}" = "$activeHelpMarker" ];then
            __${t}_debug "ActiveHelp found: $comp"
            comp="\${comp[$startIndex,-1]}"
            if [ -n "$comp" ]; then
                compadd -x "\${comp}"
                __${t}_debug "ActiveHelp will need delimiter"
                hasActiveHelp=1
            fi
            continue
        fi

        if [ -n "$comp" ]; then
            # If requested, completions are returned with a description.
            # The description is preceded by a TAB character.
            # For zsh's _describe, we need to use a : instead of a TAB.
            # We first need to escape any : as part of the completion itself.
            comp=\${comp//:/\\:}

            local tab="$(printf '\\t')"
            comp=\${comp//$tab/:}

            __${t}_debug "Adding completion: \${comp}"
            completions+=\${comp}
            lastComp=$comp
        fi
    done < <(printf "%s\n" "\${out[@]}")

    # Add a delimiter after the activeHelp statements, but only if:
    # - there are completions following the activeHelp statements, or
    # - file completion will be performed (so there will be choices after the activeHelp)
    if [ $hasActiveHelp -eq 1 ]; then
        if [ \${#completions} -ne 0 ] || [ $((directive & shellCompDirectiveNoFileComp)) -eq 0 ]; then
            __${t}_debug "Adding activeHelp delimiter"
            compadd -x "--"
            hasActiveHelp=0
        fi
    fi

    if [ $((directive & shellCompDirectiveNoSpace)) -ne 0 ]; then
        __${t}_debug "Activating nospace."
        noSpace="-S ''"
    fi

    if [ $((directive & shellCompDirectiveKeepOrder)) -ne 0 ]; then
        __${t}_debug "Activating keep order."
        keepOrder="-V"
    fi

    if [ $((directive & shellCompDirectiveFilterFileExt)) -ne 0 ]; then
        # File extension filtering
        local filteringCmd
        filteringCmd='_files'
        for filter in \${completions[@]}; do
            if [ \${filter[1]} != '*' ]; then
                # zsh requires a glob pattern to do file filtering
                filter="\\*.$filter"
            fi
            filteringCmd+=" -g $filter"
        done
        filteringCmd+=" \${flagPrefix}"

        __${t}_debug "File filtering command: $filteringCmd"
        _arguments '*:filename:'"$filteringCmd"
    elif [ $((directive & shellCompDirectiveFilterDirs)) -ne 0 ]; then
        # File completion for directories only
        local subdir
        subdir="\${completions[1]}"
        if [ -n "$subdir" ]; then
            __${t}_debug "Listing directories in $subdir"
            pushd "\${subdir}" >/dev/null 2>&1
        else
            __${t}_debug "Listing directories in ."
        fi

        local result
        _arguments '*:dirname:_files -/'" \${flagPrefix}"
        result=$?
        if [ -n "$subdir" ]; then
            popd >/dev/null 2>&1
        fi
        return $result
    else
        __${t}_debug "Calling _describe"
        if eval _describe $keepOrder "completions" completions -Q \${flagPrefix} \${noSpace}; then
            __${t}_debug "_describe found some completions"

            # Return the success of having called _describe
            return 0
        else
            __${t}_debug "_describe did not find completions."
            __${t}_debug "Checking if we should do file completion."
            if [ $((directive & shellCompDirectiveNoFileComp)) -ne 0 ]; then
                __${t}_debug "deactivating file completion"

                # Return 0 to indicate completion is finished and prevent zsh from
                # trying other completion algorithms (which could cause hanging).
                # We use NoFileComp directive to explicitly disable file completion.
                return 0
            else
                # Perform file completion
                __${t}_debug "Activating file completion"

                # We must return the result of this command, so it must be the
                # last command, or else we must store its result to return it.
                _arguments '*:filename:_files'" \${flagPrefix}"
            fi
        fi
    fi
}

# don't run the completion function when being sourced or eval-ed
if [ "\${funcstack[1]}" = "_${t}" ]; then
    _${t}
fi
`}function n(t,n){let r=t.replace(/[-:]/g,`_`);return `# bash completion for ${t}

# Define shell completion directives
readonly ShellCompDirectiveError=${a.ShellCompDirectiveError}
readonly ShellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
readonly ShellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
readonly ShellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
readonly ShellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
readonly ShellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

# Function to debug completion
__${r}_debug() {
    if [[ -n \${BASH_COMP_DEBUG_FILE:-} ]]; then
        echo "$*" >> "\${BASH_COMP_DEBUG_FILE}"
    fi
}

# Function to handle completions
__${r}_complete() {
    local cur prev words cword
    _get_comp_words_by_ref -n "=:" cur prev words cword

    local requestComp out directive
    
    # Build the command to get completions
    requestComp="${n} complete -- \${words[@]:1}"
    
    # Add an empty parameter if the last parameter is complete
    if [[ -z "$cur" ]]; then
        requestComp="$requestComp ''"
    fi
    
    # Get completions from the program
    out=$(eval "$requestComp" 2>/dev/null)
    
    # Extract directive if present
    directive=0
    if [[ "$out" == *:* ]]; then
        directive=\${out##*:}
        out=\${out%:*}
    fi
    
    # Process completions based on directive
    if [[ $((directive & $ShellCompDirectiveError)) -ne 0 ]]; then
        # Error, no completion
        return
    fi
    
    # Apply directives
    if [[ $((directive & $ShellCompDirectiveNoSpace)) -ne 0 ]]; then
        compopt -o nospace
    fi
    if [[ $((directive & $ShellCompDirectiveKeepOrder)) -ne 0 ]]; then
        compopt -o nosort
    fi
    if [[ $((directive & $ShellCompDirectiveNoFileComp)) -ne 0 ]]; then
        compopt +o default
    fi
    
    # Handle file extension filtering
    if [[ $((directive & $ShellCompDirectiveFilterFileExt)) -ne 0 ]]; then
        local filter=""
        for ext in $out; do
            filter="$filter|$ext"
        done
        filter="\\.($filter)"
        compopt -o filenames
        COMPREPLY=( $(compgen -f -X "!$filter" -- "$cur") )
        return
    fi
    
    # Handle directory filtering
    if [[ $((directive & $ShellCompDirectiveFilterDirs)) -ne 0 ]]; then
        compopt -o dirnames
        COMPREPLY=( $(compgen -d -- "$cur") )
        return
    fi
    
    # Process completions
    local IFS=$'\\n'
    local tab=$(printf '\\t')
    
    # Parse completions with descriptions
    local completions=()
    while read -r comp; do
        if [[ "$comp" == *$tab* ]]; then
            # Split completion and description
            local value=\${comp%%$tab*}
            local desc=\${comp#*$tab}
            completions+=("$value")
        else
            completions+=("$comp")
        fi
    done <<< "$out"
    
    # Return completions
    COMPREPLY=( $(compgen -W "\${completions[*]}" -- "$cur") )
}

# Register completion function
complete -F __${r}_complete ${t}
`}function r(t,n){let r=t.replace(/[-:]/g,`_`),i=a.ShellCompDirectiveError,a$1=a.ShellCompDirectiveNoSpace,o=a.ShellCompDirectiveNoFileComp,s=a.ShellCompDirectiveFilterFileExt,c=a.ShellCompDirectiveFilterDirs;return `# fish completion for ${t} -*- shell-script -*-

function __${r}_debug
    set -l file "$BASH_COMP_DEBUG_FILE"
    if test -n "$file"
        echo "$argv" >> $file
    end
end

function __${r}_perform_completion
    __${r}_debug "Starting __${r}_perform_completion"

    # Extract all args except the last one
    set -l args (commandline -opc)
    # Extract the last arg and escape it in case it is a space or wildcard
    set -l lastArg (string escape -- (commandline -ct))

    __${r}_debug "args: $args"
    __${r}_debug "last arg: $lastArg"

    # Build the completion request command
    set -l requestComp "${n} complete -- (string join ' ' -- (string escape -- $args[2..-1])) $lastArg"

    __${r}_debug "Calling $requestComp"
    set -l results (eval $requestComp 2> /dev/null)

    # Some programs may output extra empty lines after the directive.
    # Let's ignore them or else it will break completion.
    # Ref: https://github.com/spf13/cobra/issues/1279
    for line in $results[-1..1]
        if test (string trim -- $line) = ""
            # Found an empty line, remove it
            set results $results[1..-2]
        else
            # Found non-empty line, we have our proper output
            break
        end
    end

    set -l comps $results[1..-2]
    set -l directiveLine $results[-1]

    # For Fish, when completing a flag with an = (e.g., <program> -n=<TAB>)
    # completions must be prefixed with the flag
    set -l flagPrefix (string match -r -- '-.*=' "$lastArg")

    __${r}_debug "Comps: $comps"
    __${r}_debug "DirectiveLine: $directiveLine"
    __${r}_debug "flagPrefix: $flagPrefix"

    for comp in $comps
        printf "%s%s\\n" "$flagPrefix" "$comp"
    end

    printf "%s\\n" "$directiveLine"
end

# This function limits calls to __${r}_perform_completion, by caching the result
function __${r}_perform_completion_once
    __${r}_debug "Starting __${r}_perform_completion_once"

    if test -n "$__${r}_perform_completion_once_result"
        __${r}_debug "Seems like a valid result already exists, skipping __${r}_perform_completion"
        return 0
    end

    set --global __${r}_perform_completion_once_result (__${r}_perform_completion)
    if test -z "$__${r}_perform_completion_once_result"
        __${r}_debug "No completions, probably due to a failure"
        return 1
    end

    __${r}_debug "Performed completions and set __${r}_perform_completion_once_result"
    return 0
end

# This function is used to clear the cached result after completions are run
function __${r}_clear_perform_completion_once_result
    __${r}_debug ""
    __${r}_debug "========= clearing previously set __${r}_perform_completion_once_result variable =========="
    set --erase __${r}_perform_completion_once_result
    __${r}_debug "Successfully erased the variable __${r}_perform_completion_once_result"
end

function __${r}_requires_order_preservation
    __${r}_debug ""
    __${r}_debug "========= checking if order preservation is required =========="

    __${r}_perform_completion_once
    if test -z "$__${r}_perform_completion_once_result"
        __${r}_debug "Error determining if order preservation is required"
        return 1
    end

    set -l directive (string sub --start 2 $__${r}_perform_completion_once_result[-1])
    __${r}_debug "Directive is: $directive"

    set -l shellCompDirectiveKeepOrder ${a.ShellCompDirectiveKeepOrder}
    set -l keeporder (math (math --scale 0 $directive / $shellCompDirectiveKeepOrder) % 2)
    __${r}_debug "Keeporder is: $keeporder"

    if test $keeporder -ne 0
        __${r}_debug "This does require order preservation"
        return 0
    end

    __${r}_debug "This doesn't require order preservation"
    return 1
end

# This function does two things:
# - Obtain the completions and store them in the global __${r}_comp_results
# - Return false if file completion should be performed
function __${r}_prepare_completions
    __${r}_debug ""
    __${r}_debug "========= starting completion logic =========="

    # Start fresh
    set --erase __${r}_comp_results

    __${r}_perform_completion_once
    __${r}_debug "Completion results: $__${r}_perform_completion_once_result"

    if test -z "$__${r}_perform_completion_once_result"
        __${r}_debug "No completion, probably due to a failure"
        # Might as well do file completion, in case it helps
        return 1
    end

    set -l directive (string sub --start 2 $__${r}_perform_completion_once_result[-1])
    set --global __${r}_comp_results $__${r}_perform_completion_once_result[1..-2]

    __${r}_debug "Completions are: $__${r}_comp_results"
    __${r}_debug "Directive is: $directive"

    set -l shellCompDirectiveError ${i}
    set -l shellCompDirectiveNoSpace ${a$1}
    set -l shellCompDirectiveNoFileComp ${o}
    set -l shellCompDirectiveFilterFileExt ${s}
    set -l shellCompDirectiveFilterDirs ${c}

    if test -z "$directive"
        set directive 0
    end

    set -l compErr (math (math --scale 0 $directive / $shellCompDirectiveError) % 2)
    if test $compErr -eq 1
        __${r}_debug "Received error directive: aborting."
        # Might as well do file completion, in case it helps
        return 1
    end

    set -l filefilter (math (math --scale 0 $directive / $shellCompDirectiveFilterFileExt) % 2)
    set -l dirfilter (math (math --scale 0 $directive / $shellCompDirectiveFilterDirs) % 2)
    if test $filefilter -eq 1; or test $dirfilter -eq 1
        __${r}_debug "File extension filtering or directory filtering not supported"
        # Do full file completion instead
        return 1
    end

    set -l nospace (math (math --scale 0 $directive / $shellCompDirectiveNoSpace) % 2)
    set -l nofiles (math (math --scale 0 $directive / $shellCompDirectiveNoFileComp) % 2)

    __${r}_debug "nospace: $nospace, nofiles: $nofiles"

    # If we want to prevent a space, or if file completion is NOT disabled,
    # we need to count the number of valid completions.
    # To do so, we will filter on prefix as the completions we have received
    # may not already be filtered so as to allow fish to match on different
    # criteria than the prefix.
    if test $nospace -ne 0; or test $nofiles -eq 0
        set -l prefix (commandline -t | string escape --style=regex)
        __${r}_debug "prefix: $prefix"

        set -l completions (string match -r -- "^$prefix.*" $__${r}_comp_results)
        set --global __${r}_comp_results $completions
        __${r}_debug "Filtered completions are: $__${r}_comp_results"

        # Important not to quote the variable for count to work
        set -l numComps (count $__${r}_comp_results)
        __${r}_debug "numComps: $numComps"

        if test $numComps -eq 1; and test $nospace -ne 0
            # We must first split on \\t to get rid of the descriptions to be
            # able to check what the actual completion will be.
            # We don't need descriptions anyway since there is only a single
            # real completion which the shell will expand immediately.
            set -l split (string split --max 1 "\\t" $__${r}_comp_results[1])

            # Fish won't add a space if the completion ends with any
            # of the following characters: @=/:.,
            set -l lastChar (string sub -s -1 -- $split)
            if not string match -r -q "[@=/:.,]" -- "$lastChar"
                # In other cases, to support the "nospace" directive we trick the shell
                # by outputting an extra, longer completion.
                __${r}_debug "Adding second completion to perform nospace directive"
                set --global __${r}_comp_results $split[1] $split[1].
                __${r}_debug "Completions are now: $__${r}_comp_results"
            end
        end

        if test $numComps -eq 0; and test $nofiles -eq 0
            # To be consistent with bash and zsh, we only trigger file
            # completion when there are no other completions
            __${r}_debug "Requesting file completion"
            return 1
        end
    end

    return 0
end

# Since Fish completions are only loaded once the user triggers them, we trigger them ourselves
# so we can properly delete any completions provided by another script.
# Only do this if the program can be found, or else fish may print some errors; besides,
# the existing completions will only be loaded if the program can be found.
if type -q "${t}"
    # The space after the program name is essential to trigger completion for the program
    # and not completion of the program name itself.
    # Also, we use '> /dev/null 2>&1' since '&>' is not supported in older versions of fish.
    complete --do-complete "${t} " > /dev/null 2>&1
end

# Remove any pre-existing completions for the program since we will be handling all of them.
complete -c ${t} -e

# This will get called after the two calls below and clear the cached result
complete -c ${t} -n '__${r}_clear_perform_completion_once_result'
# The call to __${r}_prepare_completions will setup __${r}_comp_results
# which provides the program's completion choices.
# If this doesn't require order preservation, we don't use the -k flag
complete -c ${t} -n 'not __${r}_requires_order_preservation && __${r}_prepare_completions' -f -a '$__${r}_comp_results'
# Otherwise we use the -k flag
complete -k -c ${t} -n '__${r}_requires_order_preservation && __${r}_prepare_completions' -f -a '$__${r}_comp_results'
`}function i(t,n){let r=t.replace(/[-:]/g,`_`);return `# powershell completion for ${t} -*- shell-script -*-

  [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    function __${t}_debug {
        if ($env:BASH_COMP_DEBUG_FILE) {
            "$args" | Out-File -Append -FilePath "$env:BASH_COMP_DEBUG_FILE"
        }
    }

    filter __${t}_escapeStringWithSpecialChars {
        $_ -replace '\\s|#|@|\\$|;|,|''|\\{|\\}|\\(|\\)|"|\\||<|>|&','\`$&'
    }

[scriptblock]$__${r}CompleterBlock = {
    param(
            $WordToComplete,
            $CommandAst,
            $CursorPosition
        )

    # Get the current command line and convert into a string
    $Command = $CommandAst.CommandElements
    $Command = "$Command"

    __${t}_debug ""
    __${t}_debug "========= starting completion logic =========="
    __${t}_debug "WordToComplete: $WordToComplete Command: $Command CursorPosition: $CursorPosition"

    # The user could have moved the cursor backwards on the command-line.
    # We need to trigger completion from the $CursorPosition location, so we need
    # to truncate the command-line ($Command) up to the $CursorPosition location.
    # Make sure the $Command is longer then the $CursorPosition before we truncate.
    # This happens because the $Command does not include the last space.
    if ($Command.Length -gt $CursorPosition) {
        $Command = $Command.Substring(0, $CursorPosition)
    }
    __${t}_debug "Truncated command: $Command"

    $ShellCompDirectiveError=${a.ShellCompDirectiveError}
    $ShellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
    $ShellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
    $ShellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
    $ShellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
    $ShellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

    # Prepare the command to request completions for the program.
    # Split the command at the first space to separate the program and arguments.
    $Program, $Arguments = $Command.Split(" ", 2)

    $QuotedArgs = ($Arguments -split ' ' | ForEach-Object { "'" + ($_ -replace "'", "''") + "'" }) -join ' '
    __${t}_debug "QuotedArgs: $QuotedArgs"

    $RequestComp = "& ${n} complete '--' $QuotedArgs"
    __${t}_debug "RequestComp: $RequestComp"

    # we cannot use $WordToComplete because it
    # has the wrong values if the cursor was moved
    # so use the last argument
    if ($WordToComplete -ne "" ) {
        $WordToComplete = $Arguments.Split(" ")[-1]
    }
    __${t}_debug "New WordToComplete: $WordToComplete"


    # Check for flag with equal sign
    $IsEqualFlag = ($WordToComplete -Like "--*=*" )
    if ( $IsEqualFlag ) {
        __${t}_debug "Completing equal sign flag"
        # Remove the flag part
        $Flag, $WordToComplete = $WordToComplete.Split("=", 2)
    }

    if ( $WordToComplete -eq "" -And ( -Not $IsEqualFlag )) {
        # If the last parameter is complete (there is a space following it)
        # We add an extra empty parameter so we can indicate this to the go method.
        __${t}_debug "Adding extra empty parameter"
        # PowerShell 7.2+ changed the way how the arguments are passed to executables,
        # so for pre-7.2 or when Legacy argument passing is enabled we need to use
        if ($PSVersionTable.PsVersion -lt [version]'7.2.0' -or
            ($PSVersionTable.PsVersion -lt [version]'7.3.0' -and -not [ExperimentalFeature]::IsEnabled("PSNativeCommandArgumentPassing")) -or
            (($PSVersionTable.PsVersion -ge [version]'7.3.0' -or [ExperimentalFeature]::IsEnabled("PSNativeCommandArgumentPassing")) -and
              $PSNativeCommandArgumentPassing -eq 'Legacy')) {
             $RequestComp="$RequestComp" + ' \`"\`"'
        } else {
             $RequestComp = "$RequestComp" + ' ""'
        }
    }

    __${t}_debug "Calling $RequestComp"
    # First disable ActiveHelp which is not supported for Powershell
    $env:ActiveHelp = 0

    # call the command store the output in $out and redirect stderr and stdout to null
    # $Out is an array contains each line per element
    Invoke-Expression -OutVariable out "$RequestComp" 2>&1 | Out-Null

    # get directive from last line
    [int]$Directive = $Out[-1].TrimStart(':')
    if ($Directive -eq "") {
        # There is no directive specified
        $Directive = 0
    }
    __${t}_debug "The completion directive is: $Directive"

    # remove directive (last element) from out
    $Out = $Out | Where-Object { $_ -ne $Out[-1] }
    __${t}_debug "The completions are: $Out"

    if (($Directive -band $ShellCompDirectiveError) -ne 0 ) {
        # Error code.  No completion.
        __${t}_debug "Received error from custom completion go code"
        return
    }

    $Longest = 0
    [Array]$Values = $Out | ForEach-Object {
        # Split the output in name and description
        $Name, $Description = $_.Split("\`t", 2)
        __${t}_debug "Name: $Name Description: $Description"

        # Look for the longest completion so that we can format things nicely
        if ($Longest -lt $Name.Length) {
            $Longest = $Name.Length
        }

        # Set the description to a one space string if there is none set.
        # This is needed because the CompletionResult does not accept an empty string as argument
        if (-Not $Description) {
            $Description = " "
        }
        @{ Name = "$Name"; Description = "$Description" }
    }


    $Space = " "
    if (($Directive -band $ShellCompDirectiveNoSpace) -ne 0 ) {
        # remove the space here
        __${t}_debug "ShellCompDirectiveNoSpace is called"
        $Space = ""
    }

    if ((($Directive -band $ShellCompDirectiveFilterFileExt) -ne 0 ) -or
       (($Directive -band $ShellCompDirectiveFilterDirs) -ne 0 ))  {
        __${t}_debug "ShellCompDirectiveFilterFileExt ShellCompDirectiveFilterDirs are not supported"

        # return here to prevent the completion of the extensions
        return
    }

    $Values = $Values | Where-Object {
        # filter the result
        $_.Name -like "$WordToComplete*"

        # Join the flag back if we have an equal sign flag
        if ( $IsEqualFlag ) {
            __${t}_debug "Join the equal sign flag back to the completion value"
            $_.Name = $Flag + "=" + $_.Name
        }
    }

    # we sort the values in ascending order by name if keep order isn't passed
    if (($Directive -band $ShellCompDirectiveKeepOrder) -eq 0 ) {
        $Values = $Values | Sort-Object -Property Name
    }

    if (($Directive -band $ShellCompDirectiveNoFileComp) -ne 0 ) {
        __${t}_debug "ShellCompDirectiveNoFileComp is called"

        if ($Values.Length -eq 0) {
            # Just print an empty string here so the
            # shell does not start to complete paths.
            # We cannot use CompletionResult here because
            # it does not accept an empty string as argument.
            ""
            return
        }
    }

    # Get the current mode
    $Mode = (Get-PSReadLineKeyHandler | Where-Object { $_.Key -eq "Tab" }).Function
    __${t}_debug "Mode: $Mode"

    $Values | ForEach-Object {

        # store temporary because switch will overwrite $_
        $comp = $_

        # PowerShell supports three different completion modes
        # - TabCompleteNext (default windows style - on each key press the next option is displayed)
        # - Complete (works like bash)
        # - MenuComplete (works like zsh)
        # You set the mode with Set-PSReadLineKeyHandler -Key Tab -Function <mode>

        # CompletionResult Arguments:
        # 1) CompletionText text to be used as the auto completion result
        # 2) ListItemText   text to be displayed in the suggestion list
        # 3) ResultType     type of completion result
        # 4) ToolTip        text for the tooltip with details about the object

        switch ($Mode) {

            # bash like
            "Complete" {

                if ($Values.Length -eq 1) {
                    __${t}_debug "Only one completion left"

                    # insert space after value
                    [System.Management.Automation.CompletionResult]::new($($comp.Name | __${t}_escapeStringWithSpecialChars) + $Space, "$($comp.Name)", 'ParameterValue', "$($comp.Description)")

                } else {
                    # Add the proper number of spaces to align the descriptions
                    while($comp.Name.Length -lt $Longest) {
                        $comp.Name = $comp.Name + " "
                    }

                    # Check for empty description and only add parentheses if needed
                    if ($($comp.Description) -eq " " ) {
                        $Description = ""
                    } else {
                        $Description = "  ($($comp.Description))"
                    }

                    [System.Management.Automation.CompletionResult]::new("$($comp.Name)$Description", "$($comp.Name)$Description", 'ParameterValue', "$($comp.Description)")
                }
             }

            # zsh like
            "MenuComplete" {
                # insert space after value
                # MenuComplete will automatically show the ToolTip of
                # the highlighted value at the bottom of the suggestions.
                [System.Management.Automation.CompletionResult]::new($($comp.Name | __${t}_escapeStringWithSpecialChars) + $Space, "$($comp.Name)", 'ParameterValue', "$($comp.Description)")
            }

            # TabCompleteNext and in case we get something unknown
            Default {
                # Like MenuComplete but we don't want to add a space here because
                # the user need to press space anyway to get the completion.
                # Description will not be shown because that's not possible with TabCompleteNext
                [System.Management.Automation.CompletionResult]::new($($comp.Name | __${t}_escapeStringWithSpecialChars), "$($comp.Name)", 'ParameterValue', "$($comp.Description)")
            }
        }

    }
}

Register-ArgumentCompleter -CommandName '${t}' -ScriptBlock $__${r}CompleterBlock
`}

function e(e=`cli`){if(process.argv.indexOf(`--`)===-1){let t=`Error: You need to use -- to separate completion arguments.\nExample: ${e} complete -- <args>`;console.error(t),process.exit(1);}}

const o=process.execPath,s=process.argv.slice(1),c=f(o),l=s.map(f),u=`${c} ${process.execArgv.map(f).join(` `)} ${l[0]}`,d=/<[^>]+>|\[[^\]]+\]/;function f(e){return e.includes(` `)?`'${e}'`:e}async function p(c,l){for(let e of [c.globalCommand,...c.commands]){if(e.name===`complete`)continue;let t=(e.rawName.match(/\[.*?\]|<.*?>/g)||[]).map(e=>e.startsWith(`[`)),n=e.name===`@@global@@`,r=n?l:l?.subCommands?.[e.name],a=n?``:e.name,o=n?u$1:u$1.command(a,e.description||``);if(o){let n=(e.rawName.match(/<([^>]+)>|\[\.\.\.([^\]]+)\]/g)||[]).map(e=>e.startsWith(`<`)&&e.endsWith(`>`)?e.slice(1,-1):e.startsWith(`[...`)&&e.endsWith(`]`)?e.slice(4,-1):e);t.forEach((e,t)=>{let i=n[t]||`arg${t}`,a=r?.args?.[i];a?o.argument(i,a,e):o.argument(i,void 0,e);});}for(let t of [...c.globalCommand.options,...e.options]){let e=t.rawName.match(/^-([a-zA-Z]), --/)?.[1],a=t.name,s=n?u$1:o;if(s){let n=r?.options?.[a],i=t.required||d.test(t.rawName);n?e?s.option(a,t.description||``,n,e):s.option(a,t.description||``,n):i?e?s.option(a,t.description||``,async()=>[],e):s.option(a,t.description||``,async()=>[]):e?s.option(a,t.description||``,e):s.option(a,t.description||``);}}}return c.command(`complete [shell]`).action(async(l,d)=>{switch(l){case `zsh`:{let t$1=t(c.name,u);console.log(t$1);break}case `bash`:{let e=n(c.name,u);console.log(e);break}case `fish`:{let e=r(c.name,u);console.log(e);break}case `powershell`:{let e=i(c.name,u);console.log(e);break}default:{e(c.name);let e$1=d[`--`]||[];return c.showHelpOnExit=false,c.unsetMatchedCommand(),c.parse([o,s[0],...e$1],{run:false}),u$1.parse(e$1)}}}),u$1}

async function setupTabCompletions(cli) {
	await p(cli, {
		subCommands: {},
		options: {
			environment(complete) {
				complete("node", "Node.js environment");
				complete("jsdom", "JSDOM environment");
				complete("happy-dom", "Happy DOM environment");
				complete("edge-runtime", "Edge runtime environment");
			},
			pool(complete) {
				complete("threads", "Threads pool");
				complete("forks", "Forks pool");
				complete("vmThreads", "VM threads pool");
				complete("vmForks", "VM forks pool");
			},
			reporter(complete) {
				complete("default", "Default reporter");
				complete("verbose", "Verbose reporter");
				complete("dot", "Dot reporter");
				complete("json", "JSON reporter");
				complete("junit", "JUnit reporter");
				complete("html", "HTML reporter");
				complete("tap", "TAP reporter");
				complete("tap-flat", "TAP flat reporter");
				complete("hanging-process", "Hanging process reporter");
			},
			"coverage.reporter": function(complete) {
				complete("text", "Text coverage reporter");
				complete("html", "HTML coverage reporter");
				complete("clover", "Clover coverage reporter");
				complete("json", "JSON coverage reporter");
				complete("json-summary", "JSON summary coverage reporter");
				complete("lcov", "LCOV coverage reporter");
				complete("lcovonly", "LCOV only coverage reporter");
				complete("teamcity", "TeamCity coverage reporter");
				complete("cobertura", "Cobertura coverage reporter");
			},
			"browser.name": function(complete) {
				complete("chromium", "Chromium");
				complete("firefox", "Mozilla Firefox");
				complete("safari", "Safari");
				complete("chrome", "Google Chrome");
				complete("edge", "Microsoft Edge");
			},
			silent(complete) {
				complete("true", "Enable silent mode");
				complete("false", "Disable silent mode");
				complete("passed-only", "Show logs from failing tests only");
			}
		}
	});
}

function addCommand(cli, name, option) {
	const commandName = option.alias || name;
	let command = option.shorthand ? `-${option.shorthand}, --${commandName}` : `--${commandName}`;
	if ("argument" in option) command += ` ${option.argument}`;
	function transform(value) {
		if (!option.array && Array.isArray(value)) {
			const received = value.map((s) => typeof s === "string" ? `"${s}"` : s).join(", ");
			throw new Error(`Expected a single value for option "${command}", received [${received}]`);
		}
		value = removeQuotes(value);
		if (option.transform) return option.transform(value);
		if (option.array) return toArray(value);
		if (option.normalize) return normalize(String(value));
		return value;
	}
	const hasSubcommands = "subcommands" in option && option.subcommands;
	if (option.description) {
		let description = option.description.replace(/\[.*\]\((.*)\)/, "$1").replace(/`/g, "");
		if (hasSubcommands) description += `. Use '--help --${commandName}' for more info.`;
		cli.option(command, description, { type: transform });
	}
	if (hasSubcommands) for (const commandName in option.subcommands) {
		const subcommand = option.subcommands[commandName];
		if (subcommand) addCommand(cli, `${name}.${commandName}`, subcommand);
	}
}
function addCliOptions(cli, options) {
	for (const [optionName, option] of Object.entries(options)) if (option) addCommand(cli, optionName, option);
}
function createCLI(options = {}) {
	if (isAgent) disableDefaultColors();
	const cli = cac("vitest");
	cli.version(version);
	addCliOptions(cli, cliOptionsConfig);
	cli.help((info) => {
		const helpSection = info.find((current) => current.title?.startsWith("For more info, run any command"));
		if (helpSection) helpSection.body += "\n  $ vitest --help --expand-help";
		const options = info.find((current) => current.title === "Options");
		if (typeof options !== "object") return info;
		const helpIndex = process.argv.findIndex((arg) => arg === "--help");
		const subcommands = process.argv.slice(helpIndex + 1);
		const defaultOutput = options.body.split("\n").filter((line) => /^\s+--\S+\./.test(line) === false).join("\n");
		// Filter out options with dot-notation if --help is not called with a subcommand (default behavior)
		if (subcommands.length === 0) {
			options.body = defaultOutput;
			return info;
		}
		if (subcommands.length === 1 && (subcommands[0] === "--expand-help" || subcommands[0] === "--expandHelp")) return info;
		const subcommandMarker = "$SUB_COMMAND_MARKER$";
		const banner = info.find((current) => /^vitest\/\d+\.\d+\.\d+$/.test(current.body));
		function addBannerWarning(warning) {
			if (typeof banner?.body === "string") {
				if (banner?.body.includes(warning)) return;
				banner.body = `${banner.body}\n WARN: ${warning}`;
			}
		}
		// If other subcommand combinations are used, only show options for the subcommand
		for (let i = 0; i < subcommands.length; i++) {
			const subcommand = subcommands[i];
			// --help --expand-help can't be called with multiple subcommands and is handled above
			if (subcommand === "--expand-help" || subcommand === "--expandHelp") {
				addBannerWarning("--expand-help subcommand ignored because, when used with --help, it must be the only subcommand");
				continue;
			}
			// Mark the help section for the subcommands
			if (subcommand.startsWith("--")) options.body = options.body.split("\n").map((line) => line.trim().startsWith(subcommand) ? `${subcommandMarker}${line}` : line).join("\n");
		}
		// Filter based on the marked options to preserve the original sort order
		options.body = options.body.split("\n").map((line) => line.startsWith(subcommandMarker) ? line.split(subcommandMarker)[1] : "").filter((line) => line.length !== 0).join("\n");
		if (!options.body) {
			addBannerWarning("no options were found for your subcommands so we printed the whole output");
			options.body = defaultOutput;
		}
		return info;
	});
	cli.command("run [...filters]", void 0, options).action(run);
	cli.command("related [...filters]", void 0, options).action(runRelated);
	cli.command("watch [...filters]", void 0, options).action(watch);
	cli.command("dev [...filters]", void 0, options).action(watch);
	addCliOptions(cli.command("bench [...filters]", void 0, options).action(benchmark), benchCliOptionsConfig);
	cli.command("init <project>", void 0, options).action(init);
	addCliOptions(cli.command("list [...filters]", void 0, options).action((filters, options) => collect("test", filters, options)), collectCliOptionsConfig);
	cli.command("[...filters]", void 0, options).action((filters, options) => start("test", filters, options));
	setupTabCompletions(cli);
	return cli;
}
function removeQuotes(str) {
	if (typeof str !== "string") {
		if (Array.isArray(str)) return str.map(removeQuotes);
		return str;
	}
	if (str[0] === "\"" && str.endsWith("\"")) return str.slice(1, -1);
	if (str.startsWith(`'`) && str.endsWith(`'`)) return str.slice(1, -1);
	return str;
}
function splitArgv(argv) {
	argv = argv.replace(/(['"])(?:(?!\1).)+\1/g, (match) => match.replace(/\s/g, "\0"));
	return argv.split(" ").map((arg) => {
		arg = arg.replace(/\0/g, " ");
		return removeQuotes(arg);
	});
}
function parseCLI(argv, config = {}) {
	const arrayArgs = typeof argv === "string" ? splitArgv(argv) : argv;
	if (arrayArgs[0] !== "vitest") throw new Error(`Expected "vitest" as the first argument, received "${arrayArgs[0]}"`);
	arrayArgs[0] = "/index.js";
	arrayArgs.unshift("node");
	let { args, options } = createCLI(config).parse(arrayArgs, { run: false });
	if (arrayArgs[2] === "watch" || arrayArgs[2] === "dev") options.watch = true;
	if (arrayArgs[2] === "run" && !options.watch) options.run = true;
	if (arrayArgs[2] === "related") {
		options.related = args;
		options.passWithNoTests ??= true;
		args = [];
	}
	return {
		filter: args,
		options
	};
}
async function runRelated(relatedFiles, argv) {
	argv.related = relatedFiles;
	argv.passWithNoTests ??= true;
	await start("test", [], argv);
}
async function watch(cliFilters, options) {
	options.watch = true;
	await start("test", cliFilters, options);
}
async function run(cliFilters, options) {
	// "vitest run --watch" should still be watch mode
	options.run = !options.watch;
	await start("test", cliFilters, options);
}
async function benchmark(cliFilters, options) {
	console.warn(c$2.yellow("Benchmarking is an experimental feature.\nBreaking changes might not follow SemVer, please pin Vitest's version when using it."));
	await start("benchmark", cliFilters, options);
}
function normalizeCliOptions(cliFilters, argv) {
	if (argv.exclude) {
		argv.cliExclude = toArray(argv.exclude);
		delete argv.exclude;
	}
	if (cliFilters.some((filter) => filter.includes(":"))) argv.includeTaskLocation ??= true;
	if (typeof argv.typecheck?.only === "boolean") argv.typecheck.enabled ??= true;
	if (argv.clearCache || argv.listTags) {
		argv.watch = false;
		argv.run = true;
	}
	return argv;
}
async function start(mode, cliFilters, options) {
	try {
		const { startVitest } = await import('./cli-api.Cjt90eJu.js').then(function (n) { return n.q; });
		const ctx = await startVitest(mode, cliFilters.map(normalize), normalizeCliOptions(cliFilters, options));
		if (!ctx.shouldKeepServer()) await ctx.exit();
	} catch (e) {
		const { errorBanner } = await import('./utils.BS4fH3nR.js').then(function (n) { return n.u; });
		console.error(`\n${errorBanner("Startup Error")}`);
		console.error(e);
		console.error("\n\n");
		if (process.exitCode == null) process.exitCode = 1;
		process.exit();
	}
}
async function init(project) {
	if (project !== "browser") {
		console.error(/* @__PURE__ */ new Error("Only the \"browser\" project is supported. Use \"vitest init browser\" to create a new project."));
		process.exit(1);
	}
	const { create } = await import('./creator.DgVhQm5q.js');
	await create();
}
async function collect(mode, cliFilters, options) {
	try {
		const { prepareVitest, processCollected, outputFileList } = await import('./cli-api.Cjt90eJu.js').then(function (n) { return n.q; });
		const ctx = await prepareVitest(mode, {
			...normalizeCliOptions(cliFilters, options),
			watch: false,
			run: true
		}, void 0, void 0, cliFilters);
		if (!options.filesOnly) {
			const { testModules: tests, unhandledErrors: errors } = await ctx.collect(cliFilters.map(normalize), {
				staticParse: options.staticParse,
				staticParseConcurrency: options.staticParseConcurrency
			});
			if (errors.length) {
				console.error("\nThere were unhandled errors during test collection");
				errors.forEach((e) => console.error(e));
				console.error("\n\n");
				await ctx.close();
				return;
			}
			processCollected(ctx, tests, options);
		} else outputFileList(await ctx.getRelevantTestSpecifications(cliFilters.map(normalize)), options);
		await ctx.close();
	} catch (e) {
		const { errorBanner } = await import('./utils.BS4fH3nR.js').then(function (n) { return n.u; });
		console.error(`\n${errorBanner("Collect Error")}`);
		console.error(e);
		console.error("\n\n");
		if (process.exitCode == null) process.exitCode = 1;
		process.exit();
	}
}

export { createCLI as c, parseCLI as p, version as v };
