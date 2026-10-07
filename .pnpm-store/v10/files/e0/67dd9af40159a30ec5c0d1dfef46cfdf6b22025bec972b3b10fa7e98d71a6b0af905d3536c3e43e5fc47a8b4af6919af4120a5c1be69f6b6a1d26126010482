"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isYargsInstance = exports.rebase = exports.Yargs = void 0;
const command_1 = require("./command");
const common_types_1 = require("./common-types");
const yerror_1 = require("./yerror");
const usage_1 = require("./usage");
const argsert_1 = require("./argsert");
const fs = require("fs");
const completion_1 = require("./completion");
const path = require("path");
const validation_1 = require("./validation");
const obj_filter_1 = require("./obj-filter");
const apply_extends_1 = require("./apply-extends");
const middleware_1 = require("./middleware");
const processArgv = require("./process-argv");
const is_promise_1 = require("./is-promise");
const Parser = require("yargs-parser");
const y18nFactory = require("y18n");
const setBlocking = require("set-blocking");
const findUp = require("find-up");
const requireMainFilename = require("require-main-filename");
function Yargs(processArgs = [], cwd = process.cwd(), parentRequire = require) {
    const self = {};
    let command;
    let completion = null;
    let groups = {};
    const globalMiddleware = [];
    let output = '';
    const preservedGroups = {};
    let usage;
    let validation;
    let handlerFinishCommand = null;
    const y18n = y18nFactory({
        directory: path.resolve(__dirname, '../../locales'),
        updateFiles: false
    });
    self.middleware = middleware_1.globalMiddlewareFactory(globalMiddleware, self);
    self.scriptName = function (scriptName) {
        self.customScriptName = true;
        self.$0 = scriptName;
        return self;
    };
    // ignore the node bin, specify this in your
    // bin file with #!/usr/bin/env node
    let default$0;
    if (/\b(node|iojs|electron)(\.exe)?$/.test(process.argv[0])) {
        default$0 = process.argv.slice(1, 2);
    }
    else {
        default$0 = process.argv.slice(0, 1);
    }
    self.$0 = default$0
        .map(x => {
        const b = rebase(cwd, x);
        return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
    })
        .join(' ').trim();
    if (process.env._ !== undefined && processArgv.getProcessArgvBin() === process.env._) {
        self.$0 = process.env._.replace(`${path.dirname(process.execPath)}/`, '');
    }
    // use context object to keep track of resets, subcommand execution, etc
    // submodules should modify and check the state of context as necessary
    const context = { resets: -1, commands: [], fullCommands: [], files: [] };
    self.getContext = () => context;
    // puts yargs back into an initial state. any keys
    // that have been set to "global" will not be reset
    // by this action.
    let options;
    self.resetOptions = self.reset = function resetOptions(aliases = {}) {
        context.resets++;
        options = options || {};
        // put yargs back into an initial state, this
        // logic is used to build a nested command
        // hierarchy.
        const tmpOptions = {};
        tmpOptions.local = options.local ? options.local : [];
        tmpOptions.configObjects = options.configObjects ? options.configObjects : [];
        // if a key has been explicitly set as local,
        // we should reset it before passing options to command.
        const localLookup = {};
        tmpOptions.local.forEach((l) => {
            localLookup[l] = true;
            (aliases[l] || []).forEach((a) => {
                localLookup[a] = true;
            });
        });
        // add all groups not set to local to preserved groups
        Object.assign(preservedGroups, Object.keys(groups).reduce((acc, groupName) => {
            const keys = groups[groupName].filter(key => !(key in localLookup));
            if (keys.length > 0) {
                acc[groupName] = keys;
            }
            return acc;
        }, {}));
        // groups can now be reset
        groups = {};
        const arrayOptions = [
            'array', 'boolean', 'string', 'skipValidation',
            'count', 'normalize', 'number',
            'hiddenOptions'
        ];
        const objectOptions = [
            'narg', 'key', 'alias', 'default', 'defaultDescription',
            'config', 'choices', 'demandedOptions', 'demandedCommands', 'coerce',
            'deprecatedOptions'
        ];
        arrayOptions.forEach(k => {
            tmpOptions[k] = (options[k] || []).filter(k => !localLookup[k]);
        });
        objectOptions.forEach((k) => {
            tmpOptions[k] = obj_filter_1.objFilter(options[k], k => !localLookup[k]);
        });
        tmpOptions.envPrefix = options.envPrefix;
        options = tmpOptions;
        // if this is the first time being executed, create
        // instances of all our helpers -- otherwise just reset.
        usage = usage ? usage.reset(localLookup) : usage_1.usage(self, y18n);
        validation = validation ? validation.reset(localLookup) : validation_1.validation(self, usage, y18n);
        command = command ? command.reset() : command_1.command(self, usage, validation, globalMiddleware);
        if (!completion)
            completion = completion_1.completion(self, usage, command);
        completionCommand = null;
        output = '';
        exitError = null;
        hasOutput = false;
        self.parsed = false;
        return self;
    };
    self.resetOptions();
    // temporary hack: allow "freezing" of reset-able state for parse(msg, cb)
    const frozens = [];
    function freeze() {
        frozens.push({
            options,
            configObjects: options.configObjects.slice(0),
            exitProcess,
            groups,
            strict,
            strictCommands,
            completionCommand,
            output,
            exitError,
            hasOutput,
            parsed: self.parsed,
            parseFn,
            parseContext,
            handlerFinishCommand
        });
        usage.freeze();
        validation.freeze();
        command.freeze();
    }
    function unfreeze() {
        const frozen = frozens.pop();
        common_types_1.assertNotStrictEqual(frozen, undefined);
        let configObjects;
        ({
            options,
            configObjects,
            exitProcess,
            groups,
            output,
            exitError,
            hasOutput,
            parsed: self.parsed,
            strict,
            strictCommands,
            completionCommand,
            parseFn,
            parseContext,
            handlerFinishCommand
        } = frozen);
        options.configObjects = configObjects;
        usage.unfreeze();
        validation.unfreeze();
        command.unfreeze();
    }
    self.boolean = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('boolean', keys);
        return self;
    };
    self.array = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('array', keys);
        return self;
    };
    self.number = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('number', keys);
        return self;
    };
    self.normalize = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('normalize', keys);
        return self;
    };
    self.count = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('count', keys);
        return self;
    };
    self.string = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('string', keys);
        return self;
    };
    self.requiresArg = function (keys) {
        // the 2nd paramter [number] in the argsert the assertion is mandatory
        // as populateParserHintSingleValueDictionary recursively calls requiresArg
        // with Nan as a 2nd parameter, although we ignore it
        argsert_1.argsert('<array|string|object> [number]', [keys], arguments.length);
        // If someone configures nargs at the same time as requiresArg,
        // nargs should take precedent,
        // see: https://github.com/yargs/yargs/pull/1572
        // TODO: make this work with aliases, using a check similar to
        // checkAllAliases() in yargs-parser.
        if (typeof keys === 'string' && options.narg[keys]) {
            return self;
        }
        else {
            populateParserHintSingleValueDictionary(self.requiresArg, 'narg', keys, NaN);
        }
        return self;
    };
    self.skipValidation = function (keys) {
        argsert_1.argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('skipValidation', keys);
        return self;
    };
    function populateParserHintArray(type, keys) {
        keys = [].concat(keys);
        keys.forEach((key) => {
            key = sanitizeKey(key);
            options[type].push(key);
        });
    }
    self.nargs = function (key, value) {
        argsert_1.argsert('<string|object|array> [number]', [key, value], arguments.length);
        populateParserHintSingleValueDictionary(self.nargs, 'narg', key, value);
        return self;
    };
    self.choices = function (key, value) {
        argsert_1.argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        populateParserHintArrayDictionary(self.choices, 'choices', key, value);
        return self;
    };
    self.alias = function (key, value) {
        argsert_1.argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        populateParserHintArrayDictionary(self.alias, 'alias', key, value);
        return self;
    };
    // TODO: actually deprecate self.defaults.
    self.default = self.defaults = function (key, value, defaultDescription) {
        argsert_1.argsert('<object|string|array> [*] [string]', [key, value, defaultDescription], arguments.length);
        if (defaultDescription) {
            common_types_1.assertSingleKey(key);
            options.defaultDescription[key] = defaultDescription;
        }
        if (typeof value === 'function') {
            common_types_1.assertSingleKey(key);
            if (!options.defaultDescription[key])
                options.defaultDescription[key] = usage.functionDescription(value);
            value = value.call();
        }
        populateParserHintSingleValueDictionary(self.default, 'default', key, value);
        return self;
    };
    self.describe = function (key, desc) {
        argsert_1.argsert('<object|string|array> [string]', [key, desc], arguments.length);
        setKey(key, true);
        usage.describe(key, desc);
        return self;
    };
    function setKey(key, set) {
        populateParserHintSingleValueDictionary(setKey, 'key', key, set);
        return self;
    }
    function demandOption(keys, msg) {
        argsert_1.argsert('<object|string|array> [string]', [keys, msg], arguments.length);
        populateParserHintSingleValueDictionary(self.demandOption, 'demandedOptions', keys, msg);
        return self;
    }
    self.demandOption = demandOption;
    self.coerce = function (keys, value) {
        argsert_1.argsert('<object|string|array> [function]', [keys, value], arguments.length);
        populateParserHintSingleValueDictionary(self.coerce, 'coerce', keys, value);
        return self;
    };
    function populateParserHintSingleValueDictionary(builder, type, key, value) {
        populateParserHintDictionary(builder, type, key, value, (type, key, value) => {
            options[type][key] = value;
        });
    }
    function populateParserHintArrayDictionary(builder, type, key, value) {
        populateParserHintDictionary(builder, type, key, value, (type, key, value) => {
            options[type][key] = (options[type][key] || []).concat(value);
        });
    }
    function populateParserHintDictionary(builder, type, key, value, singleKeyHandler) {
        if (Array.isArray(key)) {
            // an array of keys with one value ['x', 'y', 'z'], function parse () {}
            key.forEach((k) => {
                builder(k, value);
            });
        }
        else if (((key) => typeof key === 'object')(key)) {
            // an object of key value pairs: {'x': parse () {}, 'y': parse() {}}
            for (const k of common_types_1.objectKeys(key)) {
                builder(k, key[k]);
            }
        }
        else {
            singleKeyHandler(type, sanitizeKey(key), value);
        }
    }
    function sanitizeKey(key) {
        if (key === '__proto__')
            return '___proto___';
        return key;
    }
    function deleteFromParserHintObject(optionKey) {
        // delete from all parsing hints:
        // boolean, array, key, alias, etc.
        common_types_1.objectKeys(options).forEach((hintKey) => {
            // configObjects is not a parsing hint array
            if (((key) => key === 'configObjects')(hintKey))
                return;
            const hint = options[hintKey];
            if (Array.isArray(hint)) {
                if (~hint.indexOf(optionKey))
                    hint.splice(hint.indexOf(optionKey), 1);
            }
            else if (typeof hint === 'object') {
                delete hint[optionKey];
            }
        });
        // now delete the description from usage.js.
        delete usage.getDescriptions()[optionKey];
    }
    self.config = function config(key = 'config', msg, parseFn) {
        argsert_1.argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length);
        // allow a config object to be provided directly.
        if ((typeof key === 'object') && !Array.isArray(key)) {
            key = apply_extends_1.applyExtends(key, cwd, self.getParserConfiguration()['deep-merge-config']);
            options.configObjects = (options.configObjects || []).concat(key);
            return self;
        }
        // allow for a custom parsing function.
        if (typeof msg === 'function') {
            parseFn = msg;
            msg = undefined;
        }
        self.describe(key, msg || usage.deferY18nLookup('Path to JSON config file'));
        (Array.isArray(key) ? key : [key]).forEach((k) => {
            options.config[k] = parseFn || true;
        });
        return self;
    };
    self.example = function (cmd, description) {
        argsert_1.argsert('<string|array> [string]', [cmd, description], arguments.length);
        if (Array.isArray(cmd)) {
            cmd.forEach((exampleParams) => self.example(...exampleParams));
        }
        else {
            usage.example(cmd, description);
        }
        return self;
    };
    self.command = function (cmd, description, builder, handler, middlewares, deprecated) {
        argsert_1.argsert('<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]', [cmd, description, builder, handler, middlewares, deprecated], arguments.length);
        command.addHandler(cmd, description, builder, handler, middlewares, deprecated);
        return self;
    };
    self.commandDir = function (dir, opts) {
        argsert_1.argsert('<string> [object]', [dir, opts], arguments.length);
        const req = parentRequire || require;
        command.addDirectory(dir, self.getContext(), req, require('get-caller-file')(), opts);
        return self;
    };
    // TODO: deprecate self.demand in favor of
    // .demandCommand() .demandOption().
    self.demand = self.required = self.require = function demand(keys, max, msg) {
        // you can optionally provide a 'max' key,
        // which will raise an exception if too many '_'
        // options are provided.
        if (Array.isArray(max)) {
            max.forEach((key) => {
                common_types_1.assertNotStrictEqual(msg, true);
                demandOption(key, msg);
            });
            max = Infinity;
        }
        else if (typeof max !== 'number') {
            msg = max;
            max = Infinity;
        }
        if (typeof keys === 'number') {
            common_types_1.assertNotStrictEqual(msg, true);
            self.demandCommand(keys, max, msg, msg);
        }
        else if (Array.isArray(keys)) {
            keys.forEach((key) => {
                common_types_1.assertNotStrictEqual(msg, true);
                demandOption(key, msg);
            });
        }
        else {
            if (typeof msg === 'string') {
                demandOption(keys, msg);
            }
            else if (msg === true || typeof msg === 'undefined') {
                demandOption(keys);
            }
        }
        return self;
    };
    self.demandCommand = function demandCommand(min = 1, max, minMsg, maxMsg) {
        argsert_1.argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [min, max, minMsg, maxMsg], arguments.length);
        if (typeof max !== 'number') {
            minMsg = max;
            max = Infinity;
        }
        self.global('_', false);
        options.demandedCommands._ = {
            min,
            max,
            minMsg,
            maxMsg
        };
        return self;
    };
    self.getDemandedOptions = () => {
        argsert_1.argsert([], 0);
        return options.demandedOptions;
    };
    self.getDemandedCommands = () => {
        argsert_1.argsert([], 0);
        return options.demandedCommands;
    };
    self.deprecateOption = function deprecateOption(option, message) {
        argsert_1.argsert('<string> [string|boolean]', [option, message], arguments.length);
        options.deprecatedOptions[option] = message;
        return self;
    };
    self.getDeprecatedOptions = () => {
        argsert_1.argsert([], 0);
        return options.deprecatedOptions;
    };
    self.implies = function (key, value) {
        argsert_1.argsert('<string|object> [number|string|array]', [key, value], arguments.length);
        validation.implies(key, value);
        return self;
    };
    self.conflicts = function (key1, key2) {
        argsert_1.argsert('<string|object> [string|array]', [key1, key2], arguments.length);
        validation.conflicts(key1, key2);
        return self;
    };
    self.usage = function (msg, description, builder, handler) {
        argsert_1.argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [msg, description, builder, handler], arguments.length);
        if (description !== undefined) {
            common_types_1.assertNotStrictEqual(msg, null);
            // .usage() can be used as an alias for defining
            // a default command.
            if ((msg || '').match(/^\$0( |$)/)) {
                return self.command(msg, description, builder, handler);
            }
            else {
                throw new yerror_1.YError('.usage() description must start with $0 if being used as alias for .command()');
            }
        }
        else {
            usage.usage(msg);
            return self;
        }
    };
    self.epilogue = self.epilog = function (msg) {
        argsert_1.argsert('<string>', [msg], arguments.length);
        usage.epilog(msg);
        return self;
    };
    self.fail = function (f) {
        argsert_1.argsert('<function>', [f], arguments.length);
        usage.failFn(f);
        return self;
    };
    self.onFinishCommand = function (f) {
        argsert_1.argsert('<function>', [f], arguments.length);
        handlerFinishCommand = f;
        return self;
    };
    self.getHandlerFinishCommand = () => handlerFinishCommand;
    self.check = function (f, _global) {
        argsert_1.argsert('<function> [boolean]', [f, _global], arguments.length);
        validation.check(f, _global !== false);
        return self;
    };
    self.global = function global(globals, global) {
        argsert_1.argsert('<string|array> [boolean]', [globals, global], arguments.length);
        globals = [].concat(globals);
        if (global !== false) {
            options.local = options.local.filter(l => globals.indexOf(l) === -1);
        }
        else {
            globals.forEach((g) => {
                if (options.local.indexOf(g) === -1)
                    options.local.push(g);
            });
        }
        return self;
    };
    self.pkgConf = function pkgConf(key, rootPath) {
        argsert_1.argsert('<string> [string]', [key, rootPath], arguments.length);
        let conf = null;
        // prefer cwd to require-main-filename in this method
        // since we're looking for e.g. "nyc" config in nyc consumer
        // rather than "yargs" config in nyc (where nyc is the main filename)
        const obj = pkgUp(rootPath || cwd);
        // If an object exists in the key, add it to options.configObjects
        if (obj[key] && typeof obj[key] === 'object') {
            conf = apply_extends_1.applyExtends(obj[key], rootPath || cwd, self.getParserConfiguration()['deep-merge-config']);
            options.configObjects = (options.configObjects || []).concat(conf);
        }
        return self;
    };
    const pkgs = {};
    function pkgUp(rootPath) {
        const npath = rootPath || '*';
        if (pkgs[npath])
            return pkgs[npath];
        let obj = {};
        try {
            let startDir = rootPath || requireMainFilename(parentRequire);
            // When called in an environment that lacks require.main.filename, such as a jest test runner,
            // startDir is already process.cwd(), and should not be shortened.
            // Whether or not it is _actually_ a directory (e.g., extensionless bin) is irrelevant, find-up handles it.
            if (!rootPath && path.extname(startDir)) {
                startDir = path.dirname(startDir);
            }
            const pkgJsonPath = findUp.sync('package.json', {
                cwd: startDir
            });
            common_types_1.assertNotStrictEqual(pkgJsonPath, undefined);
            obj = JSON.parse(fs.readFileSync(pkgJsonPath).toString());
        }
        catch (noop) { }
        pkgs[npath] = obj || {};
        return pkgs[npath];
    }
    let parseFn = null;
    let parseContext = null;
    self.parse = function parse(args, shortCircuit, _parseFn) {
        argsert_1.argsert('[string|array] [function|boolean|object] [function]', [args, shortCircuit, _parseFn], arguments.length);
        freeze();
        if (typeof args === 'undefined') {
            const argv = self._parseArgs(processArgs);
            const tmpParsed = self.parsed;
            unfreeze();
            // TODO: remove this compatibility hack when we release yargs@15.x:
            self.parsed = tmpParsed;
            return argv;
        }
        // a context object can optionally be provided, this allows
        // additional information to be passed to a command handler.
        if (typeof shortCircuit === 'object') {
            parseContext = shortCircuit;
            shortCircuit = _parseFn;
        }
        // by providing a function as a second argument to
        // parse you can capture output that would otherwise
        // default to printing to stdout/stderr.
        if (typeof shortCircuit === 'function') {
            parseFn = shortCircuit;
            shortCircuit = false;
        }
        // completion short-circuits the parsing process,
        // skipping validation, etc.
        if (!shortCircuit)
            processArgs = args;
        if (parseFn)
            exitProcess = false;
        const parsed = self._parseArgs(args, !!shortCircuit);
        completion.setParsed(self.parsed);
        if (parseFn)
            parseFn(exitError, parsed, output);
        unfreeze();
        return parsed;
    };
    self._getParseContext = () => parseContext || {};
    self._hasParseCallback = () => !!parseFn;
    self.option = self.options = function option(key, opt) {
        argsert_1.argsert('<string|object> [object]', [key, opt], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach((k) => {
                self.options(k, key[k]);
            });
        }
        else {
            if (typeof opt !== 'object') {
                opt = {};
            }
            options.key[key] = true; // track manually set keys.
            if (opt.alias)
                self.alias(key, opt.alias);
            const deprecate = opt.deprecate || opt.deprecated;
            if (deprecate) {
                self.deprecateOption(key, deprecate);
            }
            const demand = opt.demand || opt.required || opt.require;
            // A required option can be specified via "demand: true".
            if (demand) {
                self.demand(key, demand);
            }
            if (opt.demandOption) {
                self.demandOption(key, typeof opt.demandOption === 'string' ? opt.demandOption : undefined);
            }
            if (opt.conflicts) {
                self.conflicts(key, opt.conflicts);
            }
            if ('default' in opt) {
                self.default(key, opt.default);
            }
            if (opt.implies !== undefined) {
                self.implies(key, opt.implies);
            }
            if (opt.nargs !== undefined) {
                self.nargs(key, opt.nargs);
            }
            if (opt.config) {
                self.config(key, opt.configParser);
            }
            if (opt.normalize) {
                self.normalize(key);
            }
            if (opt.choices) {
                self.choices(key, opt.choices);
            }
            if (opt.coerce) {
                self.coerce(key, opt.coerce);
            }
            if (opt.group) {
                self.group(key, opt.group);
            }
            if (opt.boolean || opt.type === 'boolean') {
                self.boolean(key);
                if (opt.alias)
                    self.boolean(opt.alias);
            }
            if (opt.array || opt.type === 'array') {
                self.array(key);
                if (opt.alias)
                    self.array(opt.alias);
            }
            if (opt.number || opt.type === 'number') {
                self.number(key);
                if (opt.alias)
                    self.number(opt.alias);
            }
            if (opt.string || opt.type === 'string') {
                self.string(key);
                if (opt.alias)
                    self.string(opt.alias);
            }
            if (opt.count || opt.type === 'count') {
                self.count(key);
            }
            if (typeof opt.global === 'boolean') {
                self.global(key, opt.global);
            }
            if (opt.defaultDescription) {
                options.defaultDescription[key] = opt.defaultDescription;
            }
            if (opt.skipValidation) {
                self.skipValidation(key);
            }
            const desc = opt.describe || opt.description || opt.desc;
            self.describe(key, desc);
            if (opt.hidden) {
                self.hide(key);
            }
            if (opt.requiresArg) {
                self.requiresArg(key);
            }
        }
        return self;
    };
    self.getOptions = () => options;
    self.positional = function (key, opts) {
        argsert_1.argsert('<string> <object>', [key, opts], arguments.length);
        if (context.resets === 0) {
            throw new yerror_1.YError(".positional() can only be called in a command's builder function");
        }
        // .positional() only supports a subset of the configuration
        // options available to .option().
        const supportedOpts = ['default', 'defaultDescription', 'implies', 'normalize',
            'choices', 'conflicts', 'coerce', 'type', 'describe',
            'desc', 'description', 'alias'];
        opts = obj_filter_1.objFilter(opts, (k, v) => {
            let accept = supportedOpts.indexOf(k) !== -1;
            // type can be one of string|number|boolean.
            if (k === 'type' && ['string', 'number', 'boolean'].indexOf(v) === -1)
                accept = false;
            return accept;
        });
        // copy over any settings that can be inferred from the command string.
        const fullCommand = context.fullCommands[context.fullCommands.length - 1];
        const parseOptions = fullCommand ? command.cmdToParseOptions(fullCommand) : {
            array: [],
            alias: {},
            default: {},
            demand: {}
        };
        common_types_1.objectKeys(parseOptions).forEach((pk) => {
            const parseOption = parseOptions[pk];
            if (Array.isArray(parseOption)) {
                if (parseOption.indexOf(key) !== -1)
                    opts[pk] = true;
            }
            else {
                if (parseOption[key] && !(pk in opts))
                    opts[pk] = parseOption[key];
            }
        });
        self.group(key, usage.getPositionalGroupName());
        return self.option(key, opts);
    };
    self.group = function group(opts, groupName) {
        argsert_1.argsert('<string|array> <string>', [opts, groupName], arguments.length);
        const existing = preservedGroups[groupName] || groups[groupName];
        if (preservedGroups[groupName]) {
            // we now only need to track this group name in groups.
            delete preservedGroups[groupName];
        }
        const seen = {};
        groups[groupName] = (existing || []).concat(opts).filter((key) => {
            if (seen[key])
                return false;
            return (seen[key] = true);
        });
        return self;
    };
    // combine explicit and preserved groups. explicit groups should be first
    self.getGroups = () => Object.assign({}, groups, preservedGroups);
    // as long as options.envPrefix is not undefined,
    // parser will apply env vars matching prefix to argv
    self.env = function (prefix) {
        argsert_1.argsert('[string|boolean]', [prefix], arguments.length);
        if (prefix === false)
            delete options.envPrefix;
        else
            options.envPrefix = prefix || '';
        return self;
    };
    self.wrap = function (cols) {
        argsert_1.argsert('<number|null|undefined>', [cols], arguments.length);
        usage.wrap(cols);
        return self;
    };
    let strict = false;
    self.strict = function (enabled) {
        argsert_1.argsert('[boolean]', [enabled], arguments.length);
        strict = enabled !== false;
        return self;
    };
    self.getStrict = () => strict;
    let strictCommands = false;
    self.strictCommands = function (enabled) {
        argsert_1.argsert('[boolean]', [enabled], arguments.length);
        strictCommands = enabled !== false;
        return self;
    };
    self.getStrictCommands = () => strictCommands;
    let parserConfig = {};
    self.parserConfiguration = function parserConfiguration(config) {
        argsert_1.argsert('<object>', [config], arguments.length);
        parserConfig = config;
        return self;
    };
    self.getParserConfiguration = () => parserConfig;
    self.showHelp = function (level) {
        argsert_1.argsert('[string|function]', [level], arguments.length);
        if (!self.parsed)
            self._parseArgs(processArgs); // run parser, if it has not already been executed.
        if (command.hasDefaultCommand()) {
            context.resets++; // override the restriction on top-level positoinals.
            command.runDefaultBuilderOn(self);
        }
        usage.showHelp(level);
        return self;
    };
    let versionOpt = null;
    self.version = function version(opt, msg, ver) {
        const defaultVersionOpt = 'version';
        argsert_1.argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length);
        // nuke the key previously configured
        // to return version #.
        if (versionOpt) {
            deleteFromParserHintObject(versionOpt);
            usage.version(undefined);
            versionOpt = null;
        }
        if (arguments.length === 0) {
            ver = guessVersion();
            opt = defaultVersionOpt;
        }
        else if (arguments.length === 1) {
            if (opt === false) { // disable default 'version' key.
                return self;
            }
            ver = opt;
            opt = defaultVersionOpt;
        }
        else if (arguments.length === 2) {
            ver = msg;
            msg = undefined;
        }
        versionOpt = typeof opt === 'string' ? opt : defaultVersionOpt;
        msg = msg || usage.deferY18nLookup('Show version number');
        usage.version(ver || undefined);
        self.boolean(versionOpt);
        self.describe(versionOpt, msg);
        return self;
    };
    function guessVersion() {
        const obj = pkgUp();
        return obj.version || 'unknown';
    }
    let helpOpt = null;
    self.addHelpOpt = self.help = function addHelpOpt(opt, msg) {
        const defaultHelpOpt = 'help';
        argsert_1.argsert('[string|boolean] [string]', [opt, msg], arguments.length);
        // nuke the key previously configured
        // to return help.
        if (helpOpt) {
            deleteFromParserHintObject(helpOpt);
            helpOpt = null;
        }
        if (arguments.length === 1) {
            if (opt === false)
                return self;
        }
        // use arguments, fallback to defaults for opt and msg
        helpOpt = typeof opt === 'string' ? opt : defaultHelpOpt;
        self.boolean(helpOpt);
        self.describe(helpOpt, msg || usage.deferY18nLookup('Show help'));
        return self;
    };
    const defaultShowHiddenOpt = 'show-hidden';
    options.showHiddenOpt = defaultShowHiddenOpt;
    self.addShowHiddenOpt = self.showHidden = function addShowHiddenOpt(opt, msg) {
        argsert_1.argsert('[string|boolean] [string]', [opt, msg], arguments.length);
        if (arguments.length === 1) {
            if (opt === false)
                return self;
        }
        const showHiddenOpt = typeof opt === 'string' ? opt : defaultShowHiddenOpt;
        self.boolean(showHiddenOpt);
        self.describe(showHiddenOpt, msg || usage.deferY18nLookup('Show hidden options'));
        options.showHiddenOpt = showHiddenOpt;
        return self;
    };
    self.hide = function hide(key) {
        argsert_1.argsert('<string>', [key], arguments.length);
        options.hiddenOptions.push(key);
        return self;
    };
    self.showHelpOnFail = function showHelpOnFail(enabled, message) {
        argsert_1.argsert('[boolean|string] [string]', [enabled, message], arguments.length);
        usage.showHelpOnFail(enabled, message);
        return self;
    };
    var exitProcess = true;
    self.exitProcess = function (enabled = true) {
        argsert_1.argsert('[boolean]', [enabled], arguments.length);
        exitProcess = enabled;
        return self;
    };
    self.getExitProcess = () => exitProcess;
    var completionCommand = null;
    self.completion = function (cmd, desc, fn) {
        argsert_1.argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length);
        // a function to execute when generating
        // completions can be provided as the second
        // or third argument to completion.
        if (typeof desc === 'function') {
            fn = desc;
            desc = undefined;
        }
        // register the completion command.
        completionCommand = cmd || completionCommand || 'completion';
        if (!desc && desc !== false) {
            desc = 'generate completion script';
        }
        self.command(completionCommand, desc);
        // a function can be provided
        if (fn)
            completion.registerFunction(fn);
        return self;
    };
    self.showCompletionScript = function ($0, cmd) {
        argsert_1.argsert('[string] [string]', [$0, cmd], arguments.length);
        $0 = $0 || self.$0;
        _logger.log(completion.generateCompletionScript($0, cmd || completionCommand || 'completion'));
        return self;
    };
    self.getCompletion = function (args, done) {
        argsert_1.argsert('<array> <function>', [args, done], arguments.length);
        completion.getCompletion(args, done);
    };
    self.locale = function (locale) {
        argsert_1.argsert('[string]', [locale], arguments.length);
        if (!locale) {
            guessLocale();
            return y18n.getLocale();
        }
        detectLocale = false;
        y18n.setLocale(locale);
        return self;
    };
    self.updateStrings = self.updateLocale = function (obj) {
        argsert_1.argsert('<object>', [obj], arguments.length);
        detectLocale = false;
        y18n.updateLocale(obj);
        return self;
    };
    let detectLocale = true;
    self.detectLocale = function (detect) {
        argsert_1.argsert('<boolean>', [detect], arguments.length);
        detectLocale = detect;
        return self;
    };
    self.getDetectLocale = () => detectLocale;
    var hasOutput = false;
    var exitError = null;
    // maybe exit, always capture
    // context about why we wanted to exit.
    self.exit = (code, err) => {
        hasOutput = true;
        exitError = err;
        if (exitProcess)
            process.exit(code);
    };
    // we use a custom logger that buffers output,
    // so that we can print to non-CLIs, e.g., chat-bots.
    const _logger = {
        log(...args) {
            if (!self._hasParseCallback())
                console.log(...args);
            hasOutput = true;
            if (output.length)
                output += '\n';
            output += args.join(' ');
        },
        error(...args) {
            if (!self._hasParseCallback())
                console.error(...args);
            hasOutput = true;
            if (output.length)
                output += '\n';
            output += args.join(' ');
        }
    };
    self._getLoggerInstance = () => _logger;
    // has yargs output an error our help
    // message in the current execution context.
    self._hasOutput = () => hasOutput;
    self._setHasOutput = () => {
        hasOutput = true;
    };
    let recommendCommands;
    self.recommendCommands = function (recommend = true) {
        argsert_1.argsert('[boolean]', [recommend], arguments.length);
        recommendCommands = recommend;
        return self;
    };
    self.getUsageInstance = () => usage;
    self.getValidationInstance = () => validation;
    self.getCommandInstance = () => command;
    self.terminalWidth = () => {
        argsert_1.argsert([], 0);
        return typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null;
    };
    Object.defineProperty(self, 'argv', {
        get: () => self._parseArgs(processArgs),
        enumerable: true
    });
    self._parseArgs = function parseArgs(args, shortCircuit, _calledFromCommand, commandIndex) {
        let skipValidation = !!_calledFromCommand;
        args = args || processArgs;
        options.__ = y18n.__;
        options.configuration = self.getParserConfiguration();
        const populateDoubleDash = !!options.configuration['populate--'];
        const config = Object.assign({}, options.configuration, {
            'populate--': true
        });
        const parsed = Parser.detailed(args, Object.assign({}, options, {
            configuration: config
        }));
        let argv = parsed.argv;
        if (parseContext)
            argv = Object.assign({}, argv, parseContext);
        const aliases = parsed.aliases;
        argv.$0 = self.$0;
        self.parsed = parsed;
        try {
            guessLocale(); // guess locale lazily, so that it can be turned off in chain.
            // while building up the argv object, there
            // are two passes through the parser. If completion
            // is being performed short-circuit on the first pass.
            if (shortCircuit) {
                return (populateDoubleDash || _calledFromCommand) ? argv : self._copyDoubleDash(argv);
            }
            // if there's a handler associated with a
            // command defer processing to it.
            if (helpOpt) {
                // consider any multi-char helpOpt alias as a valid help command
                // unless all helpOpt aliases are single-char
                // note that parsed.aliases is a normalized bidirectional map :)
                const helpCmds = [helpOpt]
                    .concat(aliases[helpOpt] || [])
                    .filter(k => k.length > 1);
                // check if help should trigger and strip it from _.
                if (~helpCmds.indexOf(argv._[argv._.length - 1])) {
                    argv._.pop();
                    argv[helpOpt] = true;
                }
            }
            const handlerKeys = command.getCommands();
            const requestCompletions = completion.completionKey in argv;
            const skipRecommendation = argv[helpOpt] || requestCompletions;
            const skipDefaultCommand = skipRecommendation && (handlerKeys.length > 1 || handlerKeys[0] !== '$0');
            if (argv._.length) {
                if (handlerKeys.length) {
                    let firstUnknownCommand;
                    for (let i = (commandIndex || 0), cmd; argv._[i] !== undefined; i++) {
                        cmd = String(argv._[i]);
                        if (~handlerKeys.indexOf(cmd) && cmd !== completionCommand) {
                            // commands are executed using a recursive algorithm that executes
                            // the deepest command first; we keep track of the position in the
                            // argv._ array that is currently being executed.
                            const innerArgv = command.runCommand(cmd, self, parsed, i + 1);
                            return populateDoubleDash ? innerArgv : self._copyDoubleDash(innerArgv);
                        }
                        else if (!firstUnknownCommand && cmd !== completionCommand) {
                            firstUnknownCommand = cmd;
                            break;
                        }
                    }
                    // run the default command, if defined
                    if (command.hasDefaultCommand() && !skipDefaultCommand) {
                        const innerArgv = command.runCommand(null, self, parsed);
                        return populateDoubleDash ? innerArgv : self._copyDoubleDash(innerArgv);
                    }
                    // recommend a command if recommendCommands() has
                    // been enabled, and no commands were found to execute
                    if (recommendCommands && firstUnknownCommand && !skipRecommendation) {
                        validation.recommendCommands(firstUnknownCommand, handlerKeys);
                    }
                }
                // generate a completion script for adding to ~/.bashrc.
                if (completionCommand && ~argv._.indexOf(completionCommand) && !requestCompletions) {
                    if (exitProcess)
                        setBlocking(true);
                    self.showCompletionScript();
                    self.exit(0);
                }
            }
            else if (command.hasDefaultCommand() && !skipDefaultCommand) {
                const innerArgv = command.runCommand(null, self, parsed);
                return populateDoubleDash ? innerArgv : self._copyDoubleDash(innerArgv);
            }
            // we must run completions first, a user might
            // want to complete the --help or --version option.
            if (requestCompletions) {
                if (exitProcess)
                    setBlocking(true);
                // we allow for asynchronous completions,
                // e.g., loading in a list of commands from an API.
                args = [].concat(args);
                const completionArgs = args.slice(args.indexOf(`--${completion.completionKey}`) + 1);
                completion.getCompletion(completionArgs, (completions) => {
                    ;
                    (completions || []).forEach((completion) => {
                        _logger.log(completion);
                    });
                    self.exit(0);
                });
                return (populateDoubleDash || _calledFromCommand) ? argv : self._copyDoubleDash(argv);
            }
            // Handle 'help' and 'version' options
            // if we haven't already output help!
            if (!hasOutput) {
                Object.keys(argv).forEach((key) => {
                    if (key === helpOpt && argv[key]) {
                        if (exitProcess)
                            setBlocking(true);
                        skipValidation = true;
                        self.showHelp('log');
                        self.exit(0);
                    }
                    else if (key === versionOpt && argv[key]) {
                        if (exitProcess)
                            setBlocking(true);
                        skipValidation = true;
                        usage.showVersion();
                        self.exit(0);
                    }
                });
            }
            // Check if any of the options to skip validation were provided
            if (!skipValidation && options.skipValidation.length > 0) {
                skipValidation = Object.keys(argv).some(key => options.skipValidation.indexOf(key) >= 0 && argv[key] === true);
            }
            // If the help or version options where used and exitProcess is false,
            // or if explicitly skipped, we won't run validations.
            if (!skipValidation) {
                if (parsed.error)
                    throw new yerror_1.YError(parsed.error.message);
                // if we're executed via bash completion, don't
                // bother with validation.
                if (!requestCompletions) {
                    self._runValidation(argv, aliases, {}, parsed.error);
                }
            }
        }
        catch (err) {
            if (err instanceof yerror_1.YError)
                usage.fail(err.message, err);
            else
                throw err;
        }
        return (populateDoubleDash || _calledFromCommand) ? argv : self._copyDoubleDash(argv);
    };
    // to simplify the parsing of positionals in commands,
    // we temporarily populate '--' rather than _, with arguments
    // after the '--' directive. After the parse, we copy these back.
    self._copyDoubleDash = function (argv) {
        if (is_promise_1.isPromise(argv) || !argv._ || !argv['--'])
            return argv;
        argv._.push.apply(argv._, argv['--']);
        // TODO(bcoe): refactor command parsing such that this delete is not
        // necessary: https://github.com/yargs/yargs/issues/1482
        try {
            delete argv['--'];
        }
        catch (_err) { }
        return argv;
    };
    self._runValidation = function runValidation(argv, aliases, positionalMap, parseErrors, isDefaultCommand = false) {
        if (parseErrors)
            throw new yerror_1.YError(parseErrors.message);
        validation.nonOptionCount(argv);
        validation.requiredArguments(argv);
        let failedStrictCommands = false;
        if (strictCommands) {
            failedStrictCommands = validation.unknownCommands(argv);
        }
        if (strict && !failedStrictCommands) {
            validation.unknownArguments(argv, aliases, positionalMap, isDefaultCommand);
        }
        validation.customChecks(argv, aliases);
        validation.limitedChoices(argv);
        validation.implications(argv);
        validation.conflicting(argv);
    };
    function guessLocale() {
        if (!detectLocale)
            return;
        const locale = process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || process.env.LANGUAGE || 'en_US';
        self.locale(locale.replace(/[.:].*/, ''));
    }
    // an app should almost always have --version and --help,
    // if you *really* want to disable this use .help(false)/.version(false).
    self.help();
    self.version();
    return self;
}
exports.Yargs = Yargs;
// rebase an absolute path to a relative one with respect to a base directory
// exported for tests
function rebase(base, dir) {
    return path.relative(base, dir);
}
exports.rebase = rebase;
function isYargsInstance(y) {
    return !!y && (typeof y._parseArgs === 'function');
}
exports.isYargsInstance = isYargsInstance;
