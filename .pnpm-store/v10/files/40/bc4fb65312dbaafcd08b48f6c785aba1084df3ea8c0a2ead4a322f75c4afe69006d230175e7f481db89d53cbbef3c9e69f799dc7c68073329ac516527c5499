import { command as Command, } from './command.js';
import { assertNotStrictEqual, assertSingleKey, objectKeys, } from './typings/common-types.js';
import { YError } from './yerror.js';
import { usage as Usage } from './usage.js';
import { argsert } from './argsert.js';
import { completion as Completion, } from './completion.js';
import { validation as Validation, } from './validation.js';
import { objFilter } from './utils/obj-filter.js';
import { applyExtends } from './utils/apply-extends.js';
import { globalMiddlewareFactory, } from './middleware.js';
import { isPromise } from './utils/is-promise.js';
import setBlocking from './utils/set-blocking.js';
let shim;
export function YargsWithShim(_shim) {
    shim = _shim;
    return Yargs;
}
function Yargs(processArgs = [], cwd = shim.process.cwd(), parentRequire) {
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
    const y18n = shim.y18n;
    self.middleware = globalMiddlewareFactory(globalMiddleware, self);
    self.scriptName = function (scriptName) {
        self.customScriptName = true;
        self.$0 = scriptName;
        return self;
    };
    let default$0;
    if (/\b(node|iojs|electron)(\.exe)?$/.test(shim.process.argv()[0])) {
        default$0 = shim.process.argv().slice(1, 2);
    }
    else {
        default$0 = shim.process.argv().slice(0, 1);
    }
    self.$0 = default$0
        .map(x => {
        const b = rebase(cwd, x);
        return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
    })
        .join(' ')
        .trim();
    if (shim.getEnv('_') && shim.getProcessArgvBin() === shim.getEnv('_')) {
        self.$0 = shim
            .getEnv('_')
            .replace(`${shim.path.dirname(shim.process.execPath())}/`, '');
    }
    const context = { resets: -1, commands: [], fullCommands: [], files: [] };
    self.getContext = () => context;
    let hasOutput = false;
    let exitError = null;
    self.exit = (code, err) => {
        hasOutput = true;
        exitError = err;
        if (exitProcess)
            shim.process.exit(code);
    };
    let completionCommand = null;
    self.completion = function (cmd, desc, fn) {
        argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length);
        if (typeof desc === 'function') {
            fn = desc;
            desc = undefined;
        }
        completionCommand = cmd || completionCommand || 'completion';
        if (!desc && desc !== false) {
            desc = 'generate completion script';
        }
        self.command(completionCommand, desc);
        if (fn)
            completion.registerFunction(fn);
        return self;
    };
    let options;
    self.resetOptions = self.reset = function resetOptions(aliases = {}) {
        context.resets++;
        options = options || {};
        const tmpOptions = {};
        tmpOptions.local = options.local ? options.local : [];
        tmpOptions.configObjects = options.configObjects
            ? options.configObjects
            : [];
        const localLookup = {};
        tmpOptions.local.forEach(l => {
            localLookup[l] = true;
            (aliases[l] || []).forEach(a => {
                localLookup[a] = true;
            });
        });
        Object.assign(preservedGroups, Object.keys(groups).reduce((acc, groupName) => {
            const keys = groups[groupName].filter(key => !(key in localLookup));
            if (keys.length > 0) {
                acc[groupName] = keys;
            }
            return acc;
        }, {}));
        groups = {};
        const arrayOptions = [
            'array',
            'boolean',
            'string',
            'skipValidation',
            'count',
            'normalize',
            'number',
            'hiddenOptions',
        ];
        const objectOptions = [
            'narg',
            'key',
            'alias',
            'default',
            'defaultDescription',
            'config',
            'choices',
            'demandedOptions',
            'demandedCommands',
            'coerce',
            'deprecatedOptions',
        ];
        arrayOptions.forEach(k => {
            tmpOptions[k] = (options[k] || []).filter((k) => !localLookup[k]);
        });
        objectOptions.forEach((k) => {
            tmpOptions[k] = objFilter(options[k], k => !localLookup[k]);
        });
        tmpOptions.envPrefix = options.envPrefix;
        options = tmpOptions;
        usage = usage ? usage.reset(localLookup) : Usage(self, y18n, shim);
        validation = validation
            ? validation.reset(localLookup)
            : Validation(self, usage, y18n, shim);
        command = command
            ? command.reset()
            : Command(self, usage, validation, globalMiddleware, shim);
        if (!completion)
            completion = Completion(self, usage, command, shim);
        completionCommand = null;
        output = '';
        exitError = null;
        hasOutput = false;
        self.parsed = false;
        return self;
    };
    self.resetOptions();
    const frozens = [];
    function freeze() {
        frozens.push({
            options,
            configObjects: options.configObjects.slice(0),
            exitProcess,
            groups,
            strict,
            strictCommands,
            strictOptions,
            completionCommand,
            output,
            exitError,
            hasOutput,
            parsed: self.parsed,
            parseFn,
            parseContext,
            handlerFinishCommand,
        });
        usage.freeze();
        validation.freeze();
        command.freeze();
    }
    function unfreeze() {
        const frozen = frozens.pop();
        assertNotStrictEqual(frozen, undefined, shim);
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
            strictOptions,
            completionCommand,
            parseFn,
            parseContext,
            handlerFinishCommand,
        } = frozen);
        options.configObjects = configObjects;
        usage.unfreeze();
        validation.unfreeze();
        command.unfreeze();
    }
    self.boolean = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('boolean', keys);
        return self;
    };
    self.array = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('array', keys);
        return self;
    };
    self.number = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('number', keys);
        return self;
    };
    self.normalize = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('normalize', keys);
        return self;
    };
    self.count = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('count', keys);
        return self;
    };
    self.string = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('string', keys);
        return self;
    };
    self.requiresArg = function (keys) {
        argsert('<array|string|object> [number]', [keys], arguments.length);
        if (typeof keys === 'string' && options.narg[keys]) {
            return self;
        }
        else {
            populateParserHintSingleValueDictionary(self.requiresArg, 'narg', keys, NaN);
        }
        return self;
    };
    self.skipValidation = function (keys) {
        argsert('<array|string>', [keys], arguments.length);
        populateParserHintArray('skipValidation', keys);
        return self;
    };
    function populateParserHintArray(type, keys) {
        keys = [].concat(keys);
        keys.forEach(key => {
            key = sanitizeKey(key);
            options[type].push(key);
        });
    }
    self.nargs = function (key, value) {
        argsert('<string|object|array> [number]', [key, value], arguments.length);
        populateParserHintSingleValueDictionary(self.nargs, 'narg', key, value);
        return self;
    };
    self.choices = function (key, value) {
        argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        populateParserHintArrayDictionary(self.choices, 'choices', key, value);
        return self;
    };
    self.alias = function (key, value) {
        argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        populateParserHintArrayDictionary(self.alias, 'alias', key, value);
        return self;
    };
    self.default = self.defaults = function (key, value, defaultDescription) {
        argsert('<object|string|array> [*] [string]', [key, value, defaultDescription], arguments.length);
        if (defaultDescription) {
            assertSingleKey(key, shim);
            options.defaultDescription[key] = defaultDescription;
        }
        if (typeof value === 'function') {
            assertSingleKey(key, shim);
            if (!options.defaultDescription[key])
                options.defaultDescription[key] = usage.functionDescription(value);
            value = value.call();
        }
        populateParserHintSingleValueDictionary(self.default, 'default', key, value);
        return self;
    };
    self.describe = function (key, desc) {
        argsert('<object|string|array> [string]', [key, desc], arguments.length);
        setKey(key, true);
        usage.describe(key, desc);
        return self;
    };
    function setKey(key, set) {
        populateParserHintSingleValueDictionary(setKey, 'key', key, set);
        return self;
    }
    function demandOption(keys, msg) {
        argsert('<object|string|array> [string]', [keys, msg], arguments.length);
        populateParserHintSingleValueDictionary(self.demandOption, 'demandedOptions', keys, msg);
        return self;
    }
    self.demandOption = demandOption;
    self.coerce = function (keys, value) {
        argsert('<object|string|array> [function]', [keys, value], arguments.length);
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
            key.forEach(k => {
                builder(k, value);
            });
        }
        else if (((key) => typeof key === 'object')(key)) {
            for (const k of objectKeys(key)) {
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
        objectKeys(options).forEach((hintKey) => {
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
        delete usage.getDescriptions()[optionKey];
    }
    self.config = function config(key = 'config', msg, parseFn) {
        argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length);
        if (typeof key === 'object' && !Array.isArray(key)) {
            key = applyExtends(key, cwd, self.getParserConfiguration()['deep-merge-config'] || false, shim);
            options.configObjects = (options.configObjects || []).concat(key);
            return self;
        }
        if (typeof msg === 'function') {
            parseFn = msg;
            msg = undefined;
        }
        self.describe(key, msg || usage.deferY18nLookup('Path to JSON config file'));
        (Array.isArray(key) ? key : [key]).forEach(k => {
            options.config[k] = parseFn || true;
        });
        return self;
    };
    self.example = function (cmd, description) {
        argsert('<string|array> [string]', [cmd, description], arguments.length);
        if (Array.isArray(cmd)) {
            cmd.forEach(exampleParams => self.example(...exampleParams));
        }
        else {
            usage.example(cmd, description);
        }
        return self;
    };
    self.command = function (cmd, description, builder, handler, middlewares, deprecated) {
        argsert('<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]', [cmd, description, builder, handler, middlewares, deprecated], arguments.length);
        command.addHandler(cmd, description, builder, handler, middlewares, deprecated);
        return self;
    };
    self.commandDir = function (dir, opts) {
        argsert('<string> [object]', [dir, opts], arguments.length);
        const req = parentRequire || shim.require;
        command.addDirectory(dir, self.getContext(), req, shim.getCallerFile(), opts);
        return self;
    };
    self.demand = self.required = self.require = function demand(keys, max, msg) {
        if (Array.isArray(max)) {
            max.forEach(key => {
                assertNotStrictEqual(msg, true, shim);
                demandOption(key, msg);
            });
            max = Infinity;
        }
        else if (typeof max !== 'number') {
            msg = max;
            max = Infinity;
        }
        if (typeof keys === 'number') {
            assertNotStrictEqual(msg, true, shim);
            self.demandCommand(keys, max, msg, msg);
        }
        else if (Array.isArray(keys)) {
            keys.forEach(key => {
                assertNotStrictEqual(msg, true, shim);
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
        argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [min, max, minMsg, maxMsg], arguments.length);
        if (typeof max !== 'number') {
            minMsg = max;
            max = Infinity;
        }
        self.global('_', false);
        options.demandedCommands._ = {
            min,
            max,
            minMsg,
            maxMsg,
        };
        return self;
    };
    self.getDemandedOptions = () => {
        argsert([], 0);
        return options.demandedOptions;
    };
    self.getDemandedCommands = () => {
        argsert([], 0);
        return options.demandedCommands;
    };
    self.deprecateOption = function deprecateOption(option, message) {
        argsert('<string> [string|boolean]', [option, message], arguments.length);
        options.deprecatedOptions[option] = message;
        return self;
    };
    self.getDeprecatedOptions = () => {
        argsert([], 0);
        return options.deprecatedOptions;
    };
    self.implies = function (key, value) {
        argsert('<string|object> [number|string|array]', [key, value], arguments.length);
        validation.implies(key, value);
        return self;
    };
    self.conflicts = function (key1, key2) {
        argsert('<string|object> [string|array]', [key1, key2], arguments.length);
        validation.conflicts(key1, key2);
        return self;
    };
    self.usage = function (msg, description, builder, handler) {
        argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [msg, description, builder, handler], arguments.length);
        if (description !== undefined) {
            assertNotStrictEqual(msg, null, shim);
            if ((msg || '').match(/^\$0( |$)/)) {
                return self.command(msg, description, builder, handler);
            }
            else {
                throw new YError('.usage() description must start with $0 if being used as alias for .command()');
            }
        }
        else {
            usage.usage(msg);
            return self;
        }
    };
    self.epilogue = self.epilog = function (msg) {
        argsert('<string>', [msg], arguments.length);
        usage.epilog(msg);
        return self;
    };
    self.fail = function (f) {
        argsert('<function>', [f], arguments.length);
        usage.failFn(f);
        return self;
    };
    self.onFinishCommand = function (f) {
        argsert('<function>', [f], arguments.length);
        handlerFinishCommand = f;
        return self;
    };
    self.getHandlerFinishCommand = () => handlerFinishCommand;
    self.check = function (f, _global) {
        argsert('<function> [boolean]', [f, _global], arguments.length);
        validation.check(f, _global !== false);
        return self;
    };
    self.global = function global(globals, global) {
        argsert('<string|array> [boolean]', [globals, global], arguments.length);
        globals = [].concat(globals);
        if (global !== false) {
            options.local = options.local.filter(l => globals.indexOf(l) === -1);
        }
        else {
            globals.forEach(g => {
                if (options.local.indexOf(g) === -1)
                    options.local.push(g);
            });
        }
        return self;
    };
    self.pkgConf = function pkgConf(key, rootPath) {
        argsert('<string> [string]', [key, rootPath], arguments.length);
        let conf = null;
        const obj = pkgUp(rootPath || cwd);
        if (obj[key] && typeof obj[key] === 'object') {
            conf = applyExtends(obj[key], rootPath || cwd, self.getParserConfiguration()['deep-merge-config'] || false, shim);
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
            let startDir = rootPath || shim.mainFilename;
            if (!rootPath && shim.path.extname(startDir)) {
                startDir = shim.path.dirname(startDir);
            }
            const pkgJsonPath = shim.findUp(startDir, (dir, names) => {
                if (names.includes('package.json')) {
                    return 'package.json';
                }
                else {
                    return undefined;
                }
            });
            assertNotStrictEqual(pkgJsonPath, undefined, shim);
            obj = JSON.parse(shim.readFileSync(pkgJsonPath, 'utf8'));
        }
        catch (_noop) { }
        pkgs[npath] = obj || {};
        return pkgs[npath];
    }
    let parseFn = null;
    let parseContext = null;
    self.parse = function parse(args, shortCircuit, _parseFn) {
        argsert('[string|array] [function|boolean|object] [function]', [args, shortCircuit, _parseFn], arguments.length);
        freeze();
        if (typeof args === 'undefined') {
            const argv = self._parseArgs(processArgs);
            const tmpParsed = self.parsed;
            unfreeze();
            self.parsed = tmpParsed;
            return argv;
        }
        if (typeof shortCircuit === 'object') {
            parseContext = shortCircuit;
            shortCircuit = _parseFn;
        }
        if (typeof shortCircuit === 'function') {
            parseFn = shortCircuit;
            shortCircuit = false;
        }
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
        argsert('<string|object> [object]', [key, opt], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach(k => {
                self.options(k, key[k]);
            });
        }
        else {
            if (typeof opt !== 'object') {
                opt = {};
            }
            options.key[key] = true;
            if (opt.alias)
                self.alias(key, opt.alias);
            const deprecate = opt.deprecate || opt.deprecated;
            if (deprecate) {
                self.deprecateOption(key, deprecate);
            }
            const demand = opt.demand || opt.required || opt.require;
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
        argsert('<string> <object>', [key, opts], arguments.length);
        if (context.resets === 0) {
            throw new YError(".positional() can only be called in a command's builder function");
        }
        const supportedOpts = [
            'default',
            'defaultDescription',
            'implies',
            'normalize',
            'choices',
            'conflicts',
            'coerce',
            'type',
            'describe',
            'desc',
            'description',
            'alias',
        ];
        opts = objFilter(opts, (k, v) => {
            let accept = supportedOpts.indexOf(k) !== -1;
            if (k === 'type' && ['string', 'number', 'boolean'].indexOf(v) === -1)
                accept = false;
            return accept;
        });
        const fullCommand = context.fullCommands[context.fullCommands.length - 1];
        const parseOptions = fullCommand
            ? command.cmdToParseOptions(fullCommand)
            : {
                array: [],
                alias: {},
                default: {},
                demand: {},
            };
        objectKeys(parseOptions).forEach(pk => {
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
        argsert('<string|array> <string>', [opts, groupName], arguments.length);
        const existing = preservedGroups[groupName] || groups[groupName];
        if (preservedGroups[groupName]) {
            delete preservedGroups[groupName];
        }
        const seen = {};
        groups[groupName] = (existing || []).concat(opts).filter(key => {
            if (seen[key])
                return false;
            return (seen[key] = true);
        });
        return self;
    };
    self.getGroups = () => Object.assign({}, groups, preservedGroups);
    self.env = function (prefix) {
        argsert('[string|boolean]', [prefix], arguments.length);
        if (prefix === false)
            delete options.envPrefix;
        else
            options.envPrefix = prefix || '';
        return self;
    };
    self.wrap = function (cols) {
        argsert('<number|null|undefined>', [cols], arguments.length);
        usage.wrap(cols);
        return self;
    };
    let strict = false;
    self.strict = function (enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        strict = enabled !== false;
        return self;
    };
    self.getStrict = () => strict;
    let strictCommands = false;
    self.strictCommands = function (enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        strictCommands = enabled !== false;
        return self;
    };
    self.getStrictCommands = () => strictCommands;
    let strictOptions = false;
    self.strictOptions = function (enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        strictOptions = enabled !== false;
        return self;
    };
    self.getStrictOptions = () => strictOptions;
    let parserConfig = {};
    self.parserConfiguration = function parserConfiguration(config) {
        argsert('<object>', [config], arguments.length);
        parserConfig = config;
        return self;
    };
    self.getParserConfiguration = () => parserConfig;
    self.showHelp = function (level) {
        argsert('[string|function]', [level], arguments.length);
        if (!self.parsed)
            self._parseArgs(processArgs);
        if (command.hasDefaultCommand()) {
            context.resets++;
            command.runDefaultBuilderOn(self);
        }
        usage.showHelp(level);
        return self;
    };
    let versionOpt = null;
    self.version = function version(opt, msg, ver) {
        const defaultVersionOpt = 'version';
        argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length);
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
            if (opt === false) {
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
        argsert('[string|boolean] [string]', [opt, msg], arguments.length);
        if (helpOpt) {
            deleteFromParserHintObject(helpOpt);
            helpOpt = null;
        }
        if (arguments.length === 1) {
            if (opt === false)
                return self;
        }
        helpOpt = typeof opt === 'string' ? opt : defaultHelpOpt;
        self.boolean(helpOpt);
        self.describe(helpOpt, msg || usage.deferY18nLookup('Show help'));
        return self;
    };
    const defaultShowHiddenOpt = 'show-hidden';
    options.showHiddenOpt = defaultShowHiddenOpt;
    self.addShowHiddenOpt = self.showHidden = function addShowHiddenOpt(opt, msg) {
        argsert('[string|boolean] [string]', [opt, msg], arguments.length);
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
        argsert('<string>', [key], arguments.length);
        options.hiddenOptions.push(key);
        return self;
    };
    self.showHelpOnFail = function showHelpOnFail(enabled, message) {
        argsert('[boolean|string] [string]', [enabled, message], arguments.length);
        usage.showHelpOnFail(enabled, message);
        return self;
    };
    let exitProcess = true;
    self.exitProcess = function (enabled = true) {
        argsert('[boolean]', [enabled], arguments.length);
        exitProcess = enabled;
        return self;
    };
    self.getExitProcess = () => exitProcess;
    self.showCompletionScript = function ($0, cmd) {
        argsert('[string] [string]', [$0, cmd], arguments.length);
        $0 = $0 || self.$0;
        _logger.log(completion.generateCompletionScript($0, cmd || completionCommand || 'completion'));
        return self;
    };
    self.getCompletion = function (args, done) {
        argsert('<array> <function>', [args, done], arguments.length);
        completion.getCompletion(args, done);
    };
    self.locale = function (locale) {
        argsert('[string]', [locale], arguments.length);
        if (!locale) {
            guessLocale();
            return y18n.getLocale();
        }
        detectLocale = false;
        y18n.setLocale(locale);
        return self;
    };
    self.updateStrings = self.updateLocale = function (obj) {
        argsert('<object>', [obj], arguments.length);
        detectLocale = false;
        y18n.updateLocale(obj);
        return self;
    };
    let detectLocale = true;
    self.detectLocale = function (detect) {
        argsert('<boolean>', [detect], arguments.length);
        detectLocale = detect;
        return self;
    };
    self.getDetectLocale = () => detectLocale;
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
        },
    };
    self._getLoggerInstance = () => _logger;
    self._hasOutput = () => hasOutput;
    self._setHasOutput = () => {
        hasOutput = true;
    };
    let recommendCommands;
    self.recommendCommands = function (recommend = true) {
        argsert('[boolean]', [recommend], arguments.length);
        recommendCommands = recommend;
        return self;
    };
    self.getUsageInstance = () => usage;
    self.getValidationInstance = () => validation;
    self.getCommandInstance = () => command;
    self.terminalWidth = () => {
        argsert([], 0);
        return shim.process.stdColumns;
    };
    Object.defineProperty(self, 'argv', {
        get: () => self._parseArgs(processArgs),
        enumerable: true,
    });
    self._parseArgs = function parseArgs(args, shortCircuit, _calledFromCommand, commandIndex) {
        let skipValidation = !!_calledFromCommand;
        args = args || processArgs;
        options.__ = y18n.__;
        options.configuration = self.getParserConfiguration();
        const populateDoubleDash = !!options.configuration['populate--'];
        const config = Object.assign({}, options.configuration, {
            'populate--': true,
        });
        const parsed = shim.Parser.detailed(args, Object.assign({}, options, {
            configuration: Object.assign({ 'parse-positional-numbers': false }, config),
        }));
        let argv = parsed.argv;
        if (parseContext)
            argv = Object.assign({}, argv, parseContext);
        const aliases = parsed.aliases;
        argv.$0 = self.$0;
        self.parsed = parsed;
        try {
            guessLocale();
            if (shortCircuit) {
                return self._postProcess(argv, populateDoubleDash, _calledFromCommand);
            }
            if (helpOpt) {
                const helpCmds = [helpOpt]
                    .concat(aliases[helpOpt] || [])
                    .filter(k => k.length > 1);
                if (~helpCmds.indexOf('' + argv._[argv._.length - 1])) {
                    argv._.pop();
                    argv[helpOpt] = true;
                }
            }
            const handlerKeys = command.getCommands();
            const requestCompletions = completion.completionKey in argv;
            const skipRecommendation = argv[helpOpt] || requestCompletions;
            const skipDefaultCommand = skipRecommendation &&
                (handlerKeys.length > 1 || handlerKeys[0] !== '$0');
            if (argv._.length) {
                if (handlerKeys.length) {
                    let firstUnknownCommand;
                    for (let i = commandIndex || 0, cmd; argv._[i] !== undefined; i++) {
                        cmd = String(argv._[i]);
                        if (~handlerKeys.indexOf(cmd) && cmd !== completionCommand) {
                            const innerArgv = command.runCommand(cmd, self, parsed, i + 1);
                            return self._postProcess(innerArgv, populateDoubleDash);
                        }
                        else if (!firstUnknownCommand && cmd !== completionCommand) {
                            firstUnknownCommand = cmd;
                            break;
                        }
                    }
                    if (command.hasDefaultCommand() && !skipDefaultCommand) {
                        const innerArgv = command.runCommand(null, self, parsed);
                        return self._postProcess(innerArgv, populateDoubleDash);
                    }
                    if (recommendCommands && firstUnknownCommand && !skipRecommendation) {
                        validation.recommendCommands(firstUnknownCommand, handlerKeys);
                    }
                }
                if (completionCommand &&
                    ~argv._.indexOf(completionCommand) &&
                    !requestCompletions) {
                    if (exitProcess)
                        setBlocking(true);
                    self.showCompletionScript();
                    self.exit(0);
                }
            }
            else if (command.hasDefaultCommand() && !skipDefaultCommand) {
                const innerArgv = command.runCommand(null, self, parsed);
                return self._postProcess(innerArgv, populateDoubleDash);
            }
            if (requestCompletions) {
                if (exitProcess)
                    setBlocking(true);
                args = [].concat(args);
                const completionArgs = args.slice(args.indexOf(`--${completion.completionKey}`) + 1);
                completion.getCompletion(completionArgs, completions => {
                    (completions || []).forEach(completion => {
                        _logger.log(completion);
                    });
                    self.exit(0);
                });
                return self._postProcess(argv, !populateDoubleDash, _calledFromCommand);
            }
            if (!hasOutput) {
                Object.keys(argv).forEach(key => {
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
            if (!skipValidation && options.skipValidation.length > 0) {
                skipValidation = Object.keys(argv).some(key => options.skipValidation.indexOf(key) >= 0 && argv[key] === true);
            }
            if (!skipValidation) {
                if (parsed.error)
                    throw new YError(parsed.error.message);
                if (!requestCompletions) {
                    self._runValidation(argv, aliases, {}, parsed.error);
                }
            }
        }
        catch (err) {
            if (err instanceof YError)
                usage.fail(err.message, err);
            else
                throw err;
        }
        return self._postProcess(argv, populateDoubleDash, _calledFromCommand);
    };
    self._postProcess = function (argv, populateDoubleDash, calledFromCommand = false) {
        if (isPromise(argv))
            return argv;
        if (calledFromCommand)
            return argv;
        if (!populateDoubleDash) {
            argv = self._copyDoubleDash(argv);
        }
        const parsePositionalNumbers = self.getParserConfiguration()['parse-positional-numbers'] ||
            self.getParserConfiguration()['parse-positional-numbers'] === undefined;
        if (parsePositionalNumbers) {
            argv = self._parsePositionalNumbers(argv);
        }
        return argv;
    };
    self._copyDoubleDash = function (argv) {
        if (!argv._ || !argv['--'])
            return argv;
        argv._.push.apply(argv._, argv['--']);
        try {
            delete argv['--'];
        }
        catch (_err) { }
        return argv;
    };
    self._parsePositionalNumbers = function (argv) {
        const args = argv['--'] ? argv['--'] : argv._;
        for (let i = 0, arg; (arg = args[i]) !== undefined; i++) {
            if (shim.Parser.looksLikeNumber(arg) &&
                Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))) {
                args[i] = Number(arg);
            }
        }
        return argv;
    };
    self._runValidation = function runValidation(argv, aliases, positionalMap, parseErrors, isDefaultCommand = false) {
        if (parseErrors)
            throw new YError(parseErrors.message);
        validation.nonOptionCount(argv);
        validation.requiredArguments(argv);
        let failedStrictCommands = false;
        if (strictCommands) {
            failedStrictCommands = validation.unknownCommands(argv);
        }
        if (strict && !failedStrictCommands) {
            validation.unknownArguments(argv, aliases, positionalMap, isDefaultCommand);
        }
        else if (strictOptions) {
            validation.unknownArguments(argv, aliases, {}, false, false);
        }
        validation.customChecks(argv, aliases);
        validation.limitedChoices(argv);
        validation.implications(argv);
        validation.conflicting(argv);
    };
    function guessLocale() {
        if (!detectLocale)
            return;
        const locale = shim.getEnv('LC_ALL') ||
            shim.getEnv('LC_MESSAGES') ||
            shim.getEnv('LANG') ||
            shim.getEnv('LANGUAGE') ||
            'en_US';
        self.locale(locale.replace(/[.:].*/, ''));
    }
    self.help();
    self.version();
    return self;
}
export const rebase = (base, dir) => shim.path.relative(base, dir);
export function isYargsInstance(y) {
    return !!y && typeof y._parseArgs === 'function';
}
