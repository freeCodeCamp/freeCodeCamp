import { toArray } from '@vitest/utils';
import { EventEmitter } from 'events';
import { normalize } from 'pathe';
import c from 'tinyrainbow';
import { a as defaultPort, d as defaultBrowserPort } from './constants.DnKduX2e.js';
import { R as ReportersMap } from './index.VByaPkjc.js';

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

var version = "3.2.4";

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
	middlewareMode: null
});
const poolThreadsCommands = {
	isolate: { description: "Isolate tests in threads pool (default: `true`)" },
	singleThread: { description: "Run tests inside a single thread (default: `false`)" },
	maxThreads: {
		description: "Maximum number or percentage of threads to run tests in",
		argument: "<workers>"
	},
	minThreads: {
		description: "Minimum number or percentage of threads to run tests in",
		argument: "<workers>"
	},
	useAtomics: { description: "Use Atomics to synchronize threads. This can improve performance in some cases, but might cause segfault in older Node versions (default: `false`)" },
	execArgv: null
};
const poolForksCommands = {
	isolate: { description: "Isolate tests in forks pool (default: `true`)" },
	singleFork: { description: "Run tests inside a single child_process (default: `false`)" },
	maxForks: {
		description: "Maximum number or percentage of processes to run tests in",
		argument: "<workers>"
	},
	minForks: {
		description: "Minimum number or percentage of processes to run tests in",
		argument: "<workers>"
	},
	execArgv: null
};
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
		description: "Update snapshot"
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
		subcommands: apiConfig(defaultPort)
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
		description: `Specify reporters (${Object.keys(ReportersMap).join(", ")})`,
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
			all: {
				description: "Whether to include all files, including the untested ones into report",
				default: true
			},
			provider: {
				description: "Select the tool for coverage collection, available values are: \"v8\", \"istanbul\" and \"custom\"",
				argument: "<name>"
			},
			enabled: { description: "Enables coverage collection. Can be overridden using the `--coverage` CLI option (default: `false`)" },
			include: {
				description: "Files included in coverage as glob patterns. May be specified more than once when using multiple patterns (default: `**`)",
				argument: "<pattern>",
				array: true
			},
			exclude: {
				description: "Files to be excluded in coverage. May be specified more than once when using multiple extensions (default: Visit [`coverage.exclude`](https://vitest.dev/config/#coverage-exclude))",
				argument: "<pattern>",
				array: true
			},
			extension: {
				description: "Extension to be included in coverage. May be specified more than once when using multiple extensions (default: `[\".js\", \".cjs\", \".mjs\", \".ts\", \".mts\", \".tsx\", \".jsx\", \".vue\", \".svelte\"]`)",
				argument: "<extension>",
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
				description: "Coverage reporters to use. Visit [`coverage.reporter`](https://vitest.dev/config/#coverage-reporter) for more information (default: `[\"text\", \"html\", \"clover\", \"json\"]`)",
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
					autoUpdate: { description: "Update threshold values: \"lines\", \"functions\", \"branches\" and \"statements\" to configuration file when current coverage is above the configured thresholds (default: `false`)" },
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
			}
		}
	},
	mode: {
		description: "Override Vite mode (default: `test` or `benchmark`)",
		argument: "<name>"
	},
	workspace: {
		description: "[deprecated] Path to a workspace configuration file",
		argument: "<path>",
		normalize: true
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
				description: "Run all tests in a specific browser. Some browsers are only available for specific providers (see `--browser.provider`). Visit [`browser.name`](https://vitest.dev/guide/browser/config/#browser-name) for more information",
				argument: "<name>"
			},
			headless: { description: "Run the browser in headless mode (i.e. without opening the GUI (Graphical User Interface)). If you are running Vitest in CI, it will be enabled by default (default: `process.env.CI`)" },
			api: {
				description: "Specify options for the browser API server. Does not affect the --api option",
				argument: "[port]",
				subcommands: apiConfig(defaultBrowserPort)
			},
			provider: {
				description: "Provider used to run browser tests. Some browsers are only available for specific providers. Can be \"webdriverio\", \"playwright\", \"preview\", or the path to a custom provider. Visit [`browser.provider`](https://vitest.dev/guide/browser/config.html#browser-provider) for more information (default: `\"preview\"`)",
				argument: "<name>",
				subcommands: null
			},
			providerOptions: {
				description: "Options that are passed down to a browser provider. Visit [`browser.providerOptions`](https://vitest.dev/config/#browser-provideroptions) for more information",
				argument: "<options>",
				subcommands: null
			},
			isolate: { description: "Run every browser test file in isolation. To disable isolation, use `--browser.isolate=false` (default: `true`)" },
			ui: { description: "Show Vitest UI when running tests (default: `!process.env.CI`)" },
			fileParallelism: { description: "Should browser test files run in parallel. Use `--browser.fileParallelism=false` to disable (default: `true`)" },
			connectTimeout: {
				description: "If connection to the browser takes longer, the test suite will fail (default: `60_000`)",
				argument: "<timeout>"
			},
			orchestratorScripts: null,
			testerScripts: null,
			commands: null,
			viewport: null,
			screenshotDirectory: null,
			screenshotFailures: null,
			locators: null,
			testerHtmlPath: null,
			instances: null
		}
	},
	pool: {
		description: "Specify pool, if not running in the browser (default: `forks`)",
		argument: "<pool>",
		subcommands: null
	},
	poolOptions: {
		description: "Specify pool options",
		argument: "<options>",
		subcommands: {
			threads: {
				description: "Specify threads pool options",
				argument: "<options>",
				subcommands: poolThreadsCommands
			},
			vmThreads: {
				description: "Specify VM threads pool options",
				argument: "<options>",
				subcommands: {
					...poolThreadsCommands,
					memoryLimit: {
						description: "Memory limit for VM threads pool. If you see memory leaks, try to tinker this value.",
						argument: "<limit>"
					}
				}
			},
			forks: {
				description: "Specify forks pool options",
				argument: "<options>",
				subcommands: poolForksCommands
			},
			vmForks: {
				description: "Specify VM forks pool options",
				argument: "<options>",
				subcommands: {
					...poolForksCommands,
					memoryLimit: {
						description: "Memory limit for VM forks pool. If you see memory leaks, try to tinker this value.",
						argument: "<limit>"
					}
				}
			}
		}
	},
	fileParallelism: { description: "Should all test files run in parallel. Use `--no-file-parallelism` to disable (default: `true`)" },
	maxWorkers: {
		description: "Maximum number or percentage of workers to run tests in",
		argument: "<workers>"
	},
	minWorkers: {
		description: "Minimum number or percentage of workers to run tests in",
		argument: "<workers>"
	},
	environment: {
		description: "Specify runner environment, if not running in the browser (default: `node`)",
		argument: "<name>",
		subcommands: null
	},
	passWithNoTests: { description: "Pass when no tests are found" },
	logHeapUsage: { description: "Show the size of heap for each test when running in node" },
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
				description: "Changes the order in which hooks are executed. Accepted values are: \"stack\", \"list\" and \"parallel\". Visit [`sequence.hooks`](https://vitest.dev/config/#sequence-hooks) for more information (default: `\"parallel\"`)",
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
		argument: "<times>"
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
		description: "Maximum number of concurrent tests in a suite (default: `5`)",
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
	standalone: { description: "Start Vitest without running tests. File filters will be ignored, tests will be running only on change (default: `false`)" },
	mergeReports: {
		description: "Path to a blob reports directory. If this options is used, Vitest won't run any tests, it will only report previously recorded tests",
		argument: "[path]",
		transform(value) {
			if (!value || typeof value === "boolean") return ".vitest-reports";
			return value;
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
	environmentMatchGlobs: null,
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
	testTransformMode: null,
	fakeTimers: null,
	chaiConfig: null,
	clearMocks: null,
	css: null,
	poolMatchGlobs: null,
	deps: null,
	name: null,
	snapshotEnvironment: null,
	compare: null,
	outputJson: null,
	json: null,
	provide: null,
	filesOnly: null,
	projects: null,
	watchTriggerPatterns: null
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
	json: {
		description: "Print collected tests as JSON or write to a file (Default: false)",
		argument: "[true/path]"
	},
	filesOnly: { description: "Print only test files with out the test cases" }
};

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
	return cli;
}
function removeQuotes(str) {
	if (typeof str !== "string") {
		if (Array.isArray(str)) return str.map(removeQuotes);
		return str;
	}
	if (str.startsWith("\"") && str.endsWith("\"")) return str.slice(1, -1);
	if (str.startsWith(`'`) && str.endsWith(`'`)) return str.slice(1, -1);
	return str;
}
function splitArgv(argv) {
	const reg = /(['"])(?:(?!\1).)+\1/g;
	argv = argv.replace(reg, (match) => match.replace(/\s/g, "\0"));
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
	console.warn(c.yellow("Benchmarking is an experimental feature.\nBreaking changes might not follow SemVer, please pin Vitest's version when using it."));
	await start("benchmark", cliFilters, options);
}
function normalizeCliOptions(cliFilters, argv) {
	if (argv.exclude) {
		argv.cliExclude = toArray(argv.exclude);
		delete argv.exclude;
	}
	if (cliFilters.some((filter) => filter.includes(":"))) argv.includeTaskLocation ??= true;
	if (typeof argv.typecheck?.only === "boolean") argv.typecheck.enabled ??= true;
	return argv;
}
async function start(mode, cliFilters, options) {
	try {
		process.title = "node (vitest)";
	} catch {}
	try {
		const { startVitest } = await import('./cli-api.BkDphVBG.js').then(function (n) { return n.f; });
		const ctx = await startVitest(mode, cliFilters.map(normalize), normalizeCliOptions(cliFilters, options));
		if (!ctx.shouldKeepServer()) await ctx.exit();
	} catch (e) {
		const { errorBanner } = await import('./index.VByaPkjc.js').then(function (n) { return n.u; });
		console.error(`\n${errorBanner("Startup Error")}`);
		console.error(e);
		console.error("\n\n");
		if (process.exitCode == null) process.exitCode = 1;
		process.exit();
	}
}
async function init(project) {
	if (project !== "browser") {
		console.error(new Error("Only the \"browser\" project is supported. Use \"vitest init browser\" to create a new project."));
		process.exit(1);
	}
	const { create } = await import('./creator.GK6I-cL4.js');
	await create();
}
async function collect(mode, cliFilters, options) {
	try {
		process.title = "node (vitest)";
	} catch {}
	try {
		const { prepareVitest, processCollected, outputFileList } = await import('./cli-api.BkDphVBG.js').then(function (n) { return n.f; });
		const ctx = await prepareVitest(mode, {
			...normalizeCliOptions(cliFilters, options),
			watch: false,
			run: true
		});
		if (!options.filesOnly) {
			const { testModules: tests, unhandledErrors: errors } = await ctx.collect(cliFilters.map(normalize));
			if (errors.length) {
				console.error("\nThere were unhandled errors during test collection");
				errors.forEach((e) => console.error(e));
				console.error("\n\n");
				await ctx.close();
				return;
			}
			processCollected(ctx, tests, options);
		} else {
			const files = await ctx.getRelevantTestSpecifications(cliFilters.map(normalize));
			outputFileList(files, options);
		}
		await ctx.close();
	} catch (e) {
		const { errorBanner } = await import('./index.VByaPkjc.js').then(function (n) { return n.u; });
		console.error(`\n${errorBanner("Collect Error")}`);
		console.error(e);
		console.error("\n\n");
		if (process.exitCode == null) process.exitCode = 1;
		process.exit();
	}
}

export { createCLI as c, parseCLI as p, version as v };
