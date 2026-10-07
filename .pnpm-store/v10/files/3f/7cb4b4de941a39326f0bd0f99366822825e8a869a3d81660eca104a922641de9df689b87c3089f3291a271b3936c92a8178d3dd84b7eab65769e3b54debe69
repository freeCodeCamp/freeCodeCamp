var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _YargsInstance_command, _YargsInstance_cwd, _YargsInstance_context, _YargsInstance_completion, _YargsInstance_completionCommand, _YargsInstance_defaultShowHiddenOpt, _YargsInstance_exitError, _YargsInstance_detectLocale, _YargsInstance_emittedWarnings, _YargsInstance_exitProcess, _YargsInstance_frozens, _YargsInstance_globalMiddleware, _YargsInstance_groups, _YargsInstance_hasOutput, _YargsInstance_helpOpt, _YargsInstance_isGlobalContext, _YargsInstance_logger, _YargsInstance_output, _YargsInstance_options, _YargsInstance_parentRequire, _YargsInstance_parserConfig, _YargsInstance_parseFn, _YargsInstance_parseContext, _YargsInstance_pkgs, _YargsInstance_preservedGroups, _YargsInstance_processArgs, _YargsInstance_recommendCommands, _YargsInstance_shim, _YargsInstance_strict, _YargsInstance_strictCommands, _YargsInstance_strictOptions, _YargsInstance_usage, _YargsInstance_usageConfig, _YargsInstance_versionOpt, _YargsInstance_validation;
import { command as Command, } from './command.js';
import { assertNotStrictEqual, assertSingleKey, objectKeys, } from './typings/common-types.js';
import { YError } from './yerror.js';
import { usage as Usage } from './usage.js';
import { argsert } from './argsert.js';
import { completion as Completion, } from './completion.js';
import { validation as Validation, } from './validation.js';
import { objFilter } from './utils/obj-filter.js';
import { applyExtends } from './utils/apply-extends.js';
import { applyMiddleware, GlobalMiddleware, } from './middleware.js';
import { isPromise } from './utils/is-promise.js';
import { maybeAsyncResult } from './utils/maybe-async-result.js';
import setBlocking from './utils/set-blocking.js';
export function YargsFactory(_shim) {
    return (processArgs = [], cwd = _shim.process.cwd(), parentRequire) => {
        const yargs = new YargsInstance(processArgs, cwd, parentRequire, _shim);
        Object.defineProperty(yargs, 'argv', {
            get: () => {
                return yargs.parse();
            },
            enumerable: true,
        });
        yargs.help();
        yargs.version();
        return yargs;
    };
}
const kCopyDoubleDash = Symbol('copyDoubleDash');
const kCreateLogger = Symbol('copyDoubleDash');
const kDeleteFromParserHintObject = Symbol('deleteFromParserHintObject');
const kEmitWarning = Symbol('emitWarning');
const kFreeze = Symbol('freeze');
const kGetDollarZero = Symbol('getDollarZero');
const kGetParserConfiguration = Symbol('getParserConfiguration');
const kGetUsageConfiguration = Symbol('getUsageConfiguration');
const kGuessLocale = Symbol('guessLocale');
const kGuessVersion = Symbol('guessVersion');
const kParsePositionalNumbers = Symbol('parsePositionalNumbers');
const kPkgUp = Symbol('pkgUp');
const kPopulateParserHintArray = Symbol('populateParserHintArray');
const kPopulateParserHintSingleValueDictionary = Symbol('populateParserHintSingleValueDictionary');
const kPopulateParserHintArrayDictionary = Symbol('populateParserHintArrayDictionary');
const kPopulateParserHintDictionary = Symbol('populateParserHintDictionary');
const kSanitizeKey = Symbol('sanitizeKey');
const kSetKey = Symbol('setKey');
const kUnfreeze = Symbol('unfreeze');
const kValidateAsync = Symbol('validateAsync');
const kGetCommandInstance = Symbol('getCommandInstance');
const kGetContext = Symbol('getContext');
const kGetHasOutput = Symbol('getHasOutput');
const kGetLoggerInstance = Symbol('getLoggerInstance');
const kGetParseContext = Symbol('getParseContext');
const kGetUsageInstance = Symbol('getUsageInstance');
const kGetValidationInstance = Symbol('getValidationInstance');
const kHasParseCallback = Symbol('hasParseCallback');
const kIsGlobalContext = Symbol('isGlobalContext');
const kPostProcess = Symbol('postProcess');
const kRebase = Symbol('rebase');
const kReset = Symbol('reset');
const kRunYargsParserAndExecuteCommands = Symbol('runYargsParserAndExecuteCommands');
const kRunValidation = Symbol('runValidation');
const kSetHasOutput = Symbol('setHasOutput');
const kTrackManuallySetKeys = Symbol('kTrackManuallySetKeys');
export class YargsInstance {
    constructor(processArgs = [], cwd, parentRequire, shim) {
        this.customScriptName = false;
        this.parsed = false;
        _YargsInstance_command.set(this, void 0);
        _YargsInstance_cwd.set(this, void 0);
        _YargsInstance_context.set(this, { commands: [], fullCommands: [] });
        _YargsInstance_completion.set(this, null);
        _YargsInstance_completionCommand.set(this, null);
        _YargsInstance_defaultShowHiddenOpt.set(this, 'show-hidden');
        _YargsInstance_exitError.set(this, null);
        _YargsInstance_detectLocale.set(this, true);
        _YargsInstance_emittedWarnings.set(this, {});
        _YargsInstance_exitProcess.set(this, true);
        _YargsInstance_frozens.set(this, []);
        _YargsInstance_globalMiddleware.set(this, void 0);
        _YargsInstance_groups.set(this, {});
        _YargsInstance_hasOutput.set(this, false);
        _YargsInstance_helpOpt.set(this, null);
        _YargsInstance_isGlobalContext.set(this, true);
        _YargsInstance_logger.set(this, void 0);
        _YargsInstance_output.set(this, '');
        _YargsInstance_options.set(this, void 0);
        _YargsInstance_parentRequire.set(this, void 0);
        _YargsInstance_parserConfig.set(this, {});
        _YargsInstance_parseFn.set(this, null);
        _YargsInstance_parseContext.set(this, null);
        _YargsInstance_pkgs.set(this, {});
        _YargsInstance_preservedGroups.set(this, {});
        _YargsInstance_processArgs.set(this, void 0);
        _YargsInstance_recommendCommands.set(this, false);
        _YargsInstance_shim.set(this, void 0);
        _YargsInstance_strict.set(this, false);
        _YargsInstance_strictCommands.set(this, false);
        _YargsInstance_strictOptions.set(this, false);
        _YargsInstance_usage.set(this, void 0);
        _YargsInstance_usageConfig.set(this, {});
        _YargsInstance_versionOpt.set(this, null);
        _YargsInstance_validation.set(this, void 0);
        __classPrivateFieldSet(this, _YargsInstance_shim, shim, "f");
        __classPrivateFieldSet(this, _YargsInstance_processArgs, processArgs, "f");
        __classPrivateFieldSet(this, _YargsInstance_cwd, cwd, "f");
        __classPrivateFieldSet(this, _YargsInstance_parentRequire, parentRequire, "f");
        __classPrivateFieldSet(this, _YargsInstance_globalMiddleware, new GlobalMiddleware(this), "f");
        this.$0 = this[kGetDollarZero]();
        this[kReset]();
        __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f"), "f");
        __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
        __classPrivateFieldSet(this, _YargsInstance_logger, this[kCreateLogger](), "f");
    }
    addHelpOpt(opt, msg) {
        const defaultHelpOpt = 'help';
        argsert('[string|boolean] [string]', [opt, msg], arguments.length);
        if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
            this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
            __classPrivateFieldSet(this, _YargsInstance_helpOpt, null, "f");
        }
        if (opt === false && msg === undefined)
            return this;
        __classPrivateFieldSet(this, _YargsInstance_helpOpt, typeof opt === 'string' ? opt : defaultHelpOpt, "f");
        this.boolean(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
        this.describe(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"), msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show help'));
        return this;
    }
    help(opt, msg) {
        return this.addHelpOpt(opt, msg);
    }
    addShowHiddenOpt(opt, msg) {
        argsert('[string|boolean] [string]', [opt, msg], arguments.length);
        if (opt === false && msg === undefined)
            return this;
        const showHiddenOpt = typeof opt === 'string' ? opt : __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
        this.boolean(showHiddenOpt);
        this.describe(showHiddenOpt, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show hidden options'));
        __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = showHiddenOpt;
        return this;
    }
    showHidden(opt, msg) {
        return this.addShowHiddenOpt(opt, msg);
    }
    alias(key, value) {
        argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        this[kPopulateParserHintArrayDictionary](this.alias.bind(this), 'alias', key, value);
        return this;
    }
    array(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('array', keys);
        this[kTrackManuallySetKeys](keys);
        return this;
    }
    boolean(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('boolean', keys);
        this[kTrackManuallySetKeys](keys);
        return this;
    }
    check(f, global) {
        argsert('<function> [boolean]', [f, global], arguments.length);
        this.middleware((argv, _yargs) => {
            return maybeAsyncResult(() => {
                return f(argv, _yargs.getOptions());
            }, (result) => {
                if (!result) {
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(__classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__('Argument check failed: %s', f.toString()));
                }
                else if (typeof result === 'string' || result instanceof Error) {
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(result.toString(), result);
                }
                return argv;
            }, (err) => {
                __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message ? err.message : err.toString(), err);
                return argv;
            });
        }, false, global);
        return this;
    }
    choices(key, value) {
        argsert('<object|string|array> [string|array]', [key, value], arguments.length);
        this[kPopulateParserHintArrayDictionary](this.choices.bind(this), 'choices', key, value);
        return this;
    }
    coerce(keys, value) {
        argsert('<object|string|array> [function]', [keys, value], arguments.length);
        if (Array.isArray(keys)) {
            if (!value) {
                throw new YError('coerce callback must be provided');
            }
            for (const key of keys) {
                this.coerce(key, value);
            }
            return this;
        }
        else if (typeof keys === 'object') {
            for (const key of Object.keys(keys)) {
                this.coerce(key, keys[key]);
            }
            return this;
        }
        if (!value) {
            throw new YError('coerce callback must be provided');
        }
        __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addCoerceMiddleware((argv, yargs) => {
            let aliases;
            const shouldCoerce = Object.prototype.hasOwnProperty.call(argv, keys);
            if (!shouldCoerce) {
                return argv;
            }
            return maybeAsyncResult(() => {
                aliases = yargs.getAliases();
                return value(argv[keys]);
            }, (result) => {
                argv[keys] = result;
                const stripAliased = yargs
                    .getInternalMethods()
                    .getParserConfiguration()['strip-aliased'];
                if (aliases[keys] && stripAliased !== true) {
                    for (const alias of aliases[keys]) {
                        argv[alias] = result;
                    }
                }
                return argv;
            }, (err) => {
                throw new YError(err.message);
            });
        }, keys);
        return this;
    }
    conflicts(key1, key2) {
        argsert('<string|object> [string|array]', [key1, key2], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicts(key1, key2);
        return this;
    }
    config(key = 'config', msg, parseFn) {
        argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length);
        if (typeof key === 'object' && !Array.isArray(key)) {
            key = applyExtends(key, __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()['deep-merge-config'] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(key);
            return this;
        }
        if (typeof msg === 'function') {
            parseFn = msg;
            msg = undefined;
        }
        this.describe(key, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Path to JSON config file'));
        (Array.isArray(key) ? key : [key]).forEach(k => {
            __classPrivateFieldGet(this, _YargsInstance_options, "f").config[k] = parseFn || true;
        });
        return this;
    }
    completion(cmd, desc, fn) {
        argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length);
        if (typeof desc === 'function') {
            fn = desc;
            desc = undefined;
        }
        __classPrivateFieldSet(this, _YargsInstance_completionCommand, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || 'completion', "f");
        if (!desc && desc !== false) {
            desc = 'generate completion script';
        }
        this.command(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"), desc);
        if (fn)
            __classPrivateFieldGet(this, _YargsInstance_completion, "f").registerFunction(fn);
        return this;
    }
    command(cmd, description, builder, handler, middlewares, deprecated) {
        argsert('<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]', [cmd, description, builder, handler, middlewares, deprecated], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_command, "f").addHandler(cmd, description, builder, handler, middlewares, deprecated);
        return this;
    }
    commands(cmd, description, builder, handler, middlewares, deprecated) {
        return this.command(cmd, description, builder, handler, middlewares, deprecated);
    }
    commandDir(dir, opts) {
        argsert('<string> [object]', [dir, opts], arguments.length);
        const req = __classPrivateFieldGet(this, _YargsInstance_parentRequire, "f") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").require;
        __classPrivateFieldGet(this, _YargsInstance_command, "f").addDirectory(dir, req, __classPrivateFieldGet(this, _YargsInstance_shim, "f").getCallerFile(), opts);
        return this;
    }
    count(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('count', keys);
        this[kTrackManuallySetKeys](keys);
        return this;
    }
    default(key, value, defaultDescription) {
        argsert('<object|string|array> [*] [string]', [key, value, defaultDescription], arguments.length);
        if (defaultDescription) {
            assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = defaultDescription;
        }
        if (typeof value === 'function') {
            assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key])
                __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] =
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").functionDescription(value);
            value = value.call();
        }
        this[kPopulateParserHintSingleValueDictionary](this.default.bind(this), 'default', key, value);
        return this;
    }
    defaults(key, value, defaultDescription) {
        return this.default(key, value, defaultDescription);
    }
    demandCommand(min = 1, max, minMsg, maxMsg) {
        argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [min, max, minMsg, maxMsg], arguments.length);
        if (typeof max !== 'number') {
            minMsg = max;
            max = Infinity;
        }
        this.global('_', false);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands._ = {
            min,
            max,
            minMsg,
            maxMsg,
        };
        return this;
    }
    demand(keys, max, msg) {
        if (Array.isArray(max)) {
            max.forEach(key => {
                assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
                this.demandOption(key, msg);
            });
            max = Infinity;
        }
        else if (typeof max !== 'number') {
            msg = max;
            max = Infinity;
        }
        if (typeof keys === 'number') {
            assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            this.demandCommand(keys, max, msg, msg);
        }
        else if (Array.isArray(keys)) {
            keys.forEach(key => {
                assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
                this.demandOption(key, msg);
            });
        }
        else {
            if (typeof msg === 'string') {
                this.demandOption(keys, msg);
            }
            else if (msg === true || typeof msg === 'undefined') {
                this.demandOption(keys);
            }
        }
        return this;
    }
    demandOption(keys, msg) {
        argsert('<object|string|array> [string]', [keys, msg], arguments.length);
        this[kPopulateParserHintSingleValueDictionary](this.demandOption.bind(this), 'demandedOptions', keys, msg);
        return this;
    }
    deprecateOption(option, message) {
        argsert('<string> [string|boolean]', [option, message], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions[option] = message;
        return this;
    }
    describe(keys, description) {
        argsert('<object|string|array> [string]', [keys, description], arguments.length);
        this[kSetKey](keys, true);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").describe(keys, description);
        return this;
    }
    detectLocale(detect) {
        argsert('<boolean>', [detect], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, detect, "f");
        return this;
    }
    env(prefix) {
        argsert('[string|boolean]', [prefix], arguments.length);
        if (prefix === false)
            delete __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
        else
            __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix = prefix || '';
        return this;
    }
    epilogue(msg) {
        argsert('<string>', [msg], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").epilog(msg);
        return this;
    }
    epilog(msg) {
        return this.epilogue(msg);
    }
    example(cmd, description) {
        argsert('<string|array> [string]', [cmd, description], arguments.length);
        if (Array.isArray(cmd)) {
            cmd.forEach(exampleParams => this.example(...exampleParams));
        }
        else {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").example(cmd, description);
        }
        return this;
    }
    exit(code, err) {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        __classPrivateFieldSet(this, _YargsInstance_exitError, err, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.exit(code);
    }
    exitProcess(enabled = true) {
        argsert('[boolean]', [enabled], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_exitProcess, enabled, "f");
        return this;
    }
    fail(f) {
        argsert('<function|boolean>', [f], arguments.length);
        if (typeof f === 'boolean' && f !== false) {
            throw new YError("Invalid first argument. Expected function or boolean 'false'");
        }
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").failFn(f);
        return this;
    }
    getAliases() {
        return this.parsed ? this.parsed.aliases : {};
    }
    async getCompletion(args, done) {
        argsert('<array> [function]', [args, done], arguments.length);
        if (!done) {
            return new Promise((resolve, reject) => {
                __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, (err, completions) => {
                    if (err)
                        reject(err);
                    else
                        resolve(completions);
                });
            });
        }
        else {
            return __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, done);
        }
    }
    getDemandedOptions() {
        argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedOptions;
    }
    getDemandedCommands() {
        argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands;
    }
    getDeprecatedOptions() {
        argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions;
    }
    getDetectLocale() {
        return __classPrivateFieldGet(this, _YargsInstance_detectLocale, "f");
    }
    getExitProcess() {
        return __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f");
    }
    getGroups() {
        return Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_groups, "f"), __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"));
    }
    getHelp() {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
            if (!this.parsed) {
                const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), undefined, undefined, 0, true);
                if (isPromise(parse)) {
                    return parse.then(() => {
                        return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
                    });
                }
            }
            const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
            if (isPromise(builderResponse)) {
                return builderResponse.then(() => {
                    return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
                });
            }
        }
        return Promise.resolve(__classPrivateFieldGet(this, _YargsInstance_usage, "f").help());
    }
    getOptions() {
        return __classPrivateFieldGet(this, _YargsInstance_options, "f");
    }
    getStrict() {
        return __classPrivateFieldGet(this, _YargsInstance_strict, "f");
    }
    getStrictCommands() {
        return __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f");
    }
    getStrictOptions() {
        return __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f");
    }
    global(globals, global) {
        argsert('<string|array> [boolean]', [globals, global], arguments.length);
        globals = [].concat(globals);
        if (global !== false) {
            __classPrivateFieldGet(this, _YargsInstance_options, "f").local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local.filter(l => globals.indexOf(l) === -1);
        }
        else {
            globals.forEach(g => {
                if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").local.includes(g))
                    __classPrivateFieldGet(this, _YargsInstance_options, "f").local.push(g);
            });
        }
        return this;
    }
    group(opts, groupName) {
        argsert('<string|array> <string>', [opts, groupName], arguments.length);
        const existing = __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName] || __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName];
        if (__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName]) {
            delete __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName];
        }
        const seen = {};
        __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName] = (existing || []).concat(opts).filter(key => {
            if (seen[key])
                return false;
            return (seen[key] = true);
        });
        return this;
    }
    hide(key) {
        argsert('<string>', [key], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").hiddenOptions.push(key);
        return this;
    }
    implies(key, value) {
        argsert('<string|object> [number|string|array]', [key, value], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").implies(key, value);
        return this;
    }
    locale(locale) {
        argsert('[string]', [locale], arguments.length);
        if (locale === undefined) {
            this[kGuessLocale]();
            return __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.getLocale();
        }
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.setLocale(locale);
        return this;
    }
    middleware(callback, applyBeforeValidation, global) {
        return __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addMiddleware(callback, !!applyBeforeValidation, global);
    }
    nargs(key, value) {
        argsert('<string|object|array> [number]', [key, value], arguments.length);
        this[kPopulateParserHintSingleValueDictionary](this.nargs.bind(this), 'narg', key, value);
        return this;
    }
    normalize(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('normalize', keys);
        return this;
    }
    number(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('number', keys);
        this[kTrackManuallySetKeys](keys);
        return this;
    }
    option(key, opt) {
        argsert('<string|object> [object]', [key, opt], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach(k => {
                this.options(k, key[k]);
            });
        }
        else {
            if (typeof opt !== 'object') {
                opt = {};
            }
            this[kTrackManuallySetKeys](key);
            if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && (key === 'version' || (opt === null || opt === void 0 ? void 0 : opt.alias) === 'version')) {
                this[kEmitWarning]([
                    '"version" is a reserved word.',
                    'Please do one of the following:',
                    '- Disable version with `yargs.version(false)` if using "version" as an option',
                    '- Use the built-in `yargs.version` method instead (if applicable)',
                    '- Use a different option key',
                    'https://yargs.js.org/docs/#api-reference-version',
                ].join('\n'), undefined, 'versionWarning');
            }
            __classPrivateFieldGet(this, _YargsInstance_options, "f").key[key] = true;
            if (opt.alias)
                this.alias(key, opt.alias);
            const deprecate = opt.deprecate || opt.deprecated;
            if (deprecate) {
                this.deprecateOption(key, deprecate);
            }
            const demand = opt.demand || opt.required || opt.require;
            if (demand) {
                this.demand(key, demand);
            }
            if (opt.demandOption) {
                this.demandOption(key, typeof opt.demandOption === 'string' ? opt.demandOption : undefined);
            }
            if (opt.conflicts) {
                this.conflicts(key, opt.conflicts);
            }
            if ('default' in opt) {
                this.default(key, opt.default);
            }
            if (opt.implies !== undefined) {
                this.implies(key, opt.implies);
            }
            if (opt.nargs !== undefined) {
                this.nargs(key, opt.nargs);
            }
            if (opt.config) {
                this.config(key, opt.configParser);
            }
            if (opt.normalize) {
                this.normalize(key);
            }
            if (opt.choices) {
                this.choices(key, opt.choices);
            }
            if (opt.coerce) {
                this.coerce(key, opt.coerce);
            }
            if (opt.group) {
                this.group(key, opt.group);
            }
            if (opt.boolean || opt.type === 'boolean') {
                this.boolean(key);
                if (opt.alias)
                    this.boolean(opt.alias);
            }
            if (opt.array || opt.type === 'array') {
                this.array(key);
                if (opt.alias)
                    this.array(opt.alias);
            }
            if (opt.number || opt.type === 'number') {
                this.number(key);
                if (opt.alias)
                    this.number(opt.alias);
            }
            if (opt.string || opt.type === 'string') {
                this.string(key);
                if (opt.alias)
                    this.string(opt.alias);
            }
            if (opt.count || opt.type === 'count') {
                this.count(key);
            }
            if (typeof opt.global === 'boolean') {
                this.global(key, opt.global);
            }
            if (opt.defaultDescription) {
                __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = opt.defaultDescription;
            }
            if (opt.skipValidation) {
                this.skipValidation(key);
            }
            const desc = opt.describe || opt.description || opt.desc;
            const descriptions = __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions();
            if (!Object.prototype.hasOwnProperty.call(descriptions, key) ||
                typeof desc === 'string') {
                this.describe(key, desc);
            }
            if (opt.hidden) {
                this.hide(key);
            }
            if (opt.requiresArg) {
                this.requiresArg(key);
            }
        }
        return this;
    }
    options(key, opt) {
        return this.option(key, opt);
    }
    parse(args, shortCircuit, _parseFn) {
        argsert('[string|array] [function|boolean|object] [function]', [args, shortCircuit, _parseFn], arguments.length);
        this[kFreeze]();
        if (typeof args === 'undefined') {
            args = __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
        }
        if (typeof shortCircuit === 'object') {
            __classPrivateFieldSet(this, _YargsInstance_parseContext, shortCircuit, "f");
            shortCircuit = _parseFn;
        }
        if (typeof shortCircuit === 'function') {
            __classPrivateFieldSet(this, _YargsInstance_parseFn, shortCircuit, "f");
            shortCircuit = false;
        }
        if (!shortCircuit)
            __classPrivateFieldSet(this, _YargsInstance_processArgs, args, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
            __classPrivateFieldSet(this, _YargsInstance_exitProcess, false, "f");
        const parsed = this[kRunYargsParserAndExecuteCommands](args, !!shortCircuit);
        const tmpParsed = this.parsed;
        __classPrivateFieldGet(this, _YargsInstance_completion, "f").setParsed(this.parsed);
        if (isPromise(parsed)) {
            return parsed
                .then(argv => {
                if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
                    __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
                return argv;
            })
                .catch(err => {
                if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) {
                    __classPrivateFieldGet(this, _YargsInstance_parseFn, "f")(err, this.parsed.argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
                }
                throw err;
            })
                .finally(() => {
                this[kUnfreeze]();
                this.parsed = tmpParsed;
            });
        }
        else {
            if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
                __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), parsed, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
            this[kUnfreeze]();
            this.parsed = tmpParsed;
        }
        return parsed;
    }
    parseAsync(args, shortCircuit, _parseFn) {
        const maybePromise = this.parse(args, shortCircuit, _parseFn);
        return !isPromise(maybePromise)
            ? Promise.resolve(maybePromise)
            : maybePromise;
    }
    parseSync(args, shortCircuit, _parseFn) {
        const maybePromise = this.parse(args, shortCircuit, _parseFn);
        if (isPromise(maybePromise)) {
            throw new YError('.parseSync() must not be used with asynchronous builders, handlers, or middleware');
        }
        return maybePromise;
    }
    parserConfiguration(config) {
        argsert('<object>', [config], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_parserConfig, config, "f");
        return this;
    }
    pkgConf(key, rootPath) {
        argsert('<string> [string]', [key, rootPath], arguments.length);
        let conf = null;
        const obj = this[kPkgUp](rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"));
        if (obj[key] && typeof obj[key] === 'object') {
            conf = applyExtends(obj[key], rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()['deep-merge-config'] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(conf);
        }
        return this;
    }
    positional(key, opts) {
        argsert('<string> <object>', [key, opts], arguments.length);
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
            if (k === 'type' && !['string', 'number', 'boolean'].includes(v))
                return false;
            return supportedOpts.includes(k);
        });
        const fullCommand = __classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands[__classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands.length - 1];
        const parseOptions = fullCommand
            ? __classPrivateFieldGet(this, _YargsInstance_command, "f").cmdToParseOptions(fullCommand)
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
        this.group(key, __classPrivateFieldGet(this, _YargsInstance_usage, "f").getPositionalGroupName());
        return this.option(key, opts);
    }
    recommendCommands(recommend = true) {
        argsert('[boolean]', [recommend], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_recommendCommands, recommend, "f");
        return this;
    }
    required(keys, max, msg) {
        return this.demand(keys, max, msg);
    }
    require(keys, max, msg) {
        return this.demand(keys, max, msg);
    }
    requiresArg(keys) {
        argsert('<array|string|object> [number]', [keys], arguments.length);
        if (typeof keys === 'string' && __classPrivateFieldGet(this, _YargsInstance_options, "f").narg[keys]) {
            return this;
        }
        else {
            this[kPopulateParserHintSingleValueDictionary](this.requiresArg.bind(this), 'narg', keys, NaN);
        }
        return this;
    }
    showCompletionScript($0, cmd) {
        argsert('[string] [string]', [$0, cmd], arguments.length);
        $0 = $0 || this.$0;
        __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(__classPrivateFieldGet(this, _YargsInstance_completion, "f").generateCompletionScript($0, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || 'completion'));
        return this;
    }
    showHelp(level) {
        argsert('[string|function]', [level], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
            if (!this.parsed) {
                const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), undefined, undefined, 0, true);
                if (isPromise(parse)) {
                    parse.then(() => {
                        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
                    });
                    return this;
                }
            }
            const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
            if (isPromise(builderResponse)) {
                builderResponse.then(() => {
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
                });
                return this;
            }
        }
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
        return this;
    }
    scriptName(scriptName) {
        this.customScriptName = true;
        this.$0 = scriptName;
        return this;
    }
    showHelpOnFail(enabled, message) {
        argsert('[boolean|string] [string]', [enabled, message], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelpOnFail(enabled, message);
        return this;
    }
    showVersion(level) {
        argsert('[string|function]', [level], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion(level);
        return this;
    }
    skipValidation(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('skipValidation', keys);
        return this;
    }
    strict(enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strict, enabled !== false, "f");
        return this;
    }
    strictCommands(enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strictCommands, enabled !== false, "f");
        return this;
    }
    strictOptions(enabled) {
        argsert('[boolean]', [enabled], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strictOptions, enabled !== false, "f");
        return this;
    }
    string(keys) {
        argsert('<array|string>', [keys], arguments.length);
        this[kPopulateParserHintArray]('string', keys);
        this[kTrackManuallySetKeys](keys);
        return this;
    }
    terminalWidth() {
        argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.stdColumns;
    }
    updateLocale(obj) {
        return this.updateStrings(obj);
    }
    updateStrings(obj) {
        argsert('<object>', [obj], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.updateLocale(obj);
        return this;
    }
    usage(msg, description, builder, handler) {
        argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [msg, description, builder, handler], arguments.length);
        if (description !== undefined) {
            assertNotStrictEqual(msg, null, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            if ((msg || '').match(/^\$0( |$)/)) {
                return this.command(msg, description, builder, handler);
            }
            else {
                throw new YError('.usage() description must start with $0 if being used as alias for .command()');
            }
        }
        else {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").usage(msg);
            return this;
        }
    }
    usageConfiguration(config) {
        argsert('<object>', [config], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_usageConfig, config, "f");
        return this;
    }
    version(opt, msg, ver) {
        const defaultVersionOpt = 'version';
        argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length);
        if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f")) {
            this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(undefined);
            __classPrivateFieldSet(this, _YargsInstance_versionOpt, null, "f");
        }
        if (arguments.length === 0) {
            ver = this[kGuessVersion]();
            opt = defaultVersionOpt;
        }
        else if (arguments.length === 1) {
            if (opt === false) {
                return this;
            }
            ver = opt;
            opt = defaultVersionOpt;
        }
        else if (arguments.length === 2) {
            ver = msg;
            msg = undefined;
        }
        __classPrivateFieldSet(this, _YargsInstance_versionOpt, typeof opt === 'string' ? opt : defaultVersionOpt, "f");
        msg = msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show version number');
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(ver || undefined);
        this.boolean(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
        this.describe(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"), msg);
        return this;
    }
    wrap(cols) {
        argsert('<number|null|undefined>', [cols], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").wrap(cols);
        return this;
    }
    [(_YargsInstance_command = new WeakMap(), _YargsInstance_cwd = new WeakMap(), _YargsInstance_context = new WeakMap(), _YargsInstance_completion = new WeakMap(), _YargsInstance_completionCommand = new WeakMap(), _YargsInstance_defaultShowHiddenOpt = new WeakMap(), _YargsInstance_exitError = new WeakMap(), _YargsInstance_detectLocale = new WeakMap(), _YargsInstance_emittedWarnings = new WeakMap(), _YargsInstance_exitProcess = new WeakMap(), _YargsInstance_frozens = new WeakMap(), _YargsInstance_globalMiddleware = new WeakMap(), _YargsInstance_groups = new WeakMap(), _YargsInstance_hasOutput = new WeakMap(), _YargsInstance_helpOpt = new WeakMap(), _YargsInstance_isGlobalContext = new WeakMap(), _YargsInstance_logger = new WeakMap(), _YargsInstance_output = new WeakMap(), _YargsInstance_options = new WeakMap(), _YargsInstance_parentRequire = new WeakMap(), _YargsInstance_parserConfig = new WeakMap(), _YargsInstance_parseFn = new WeakMap(), _YargsInstance_parseContext = new WeakMap(), _YargsInstance_pkgs = new WeakMap(), _YargsInstance_preservedGroups = new WeakMap(), _YargsInstance_processArgs = new WeakMap(), _YargsInstance_recommendCommands = new WeakMap(), _YargsInstance_shim = new WeakMap(), _YargsInstance_strict = new WeakMap(), _YargsInstance_strictCommands = new WeakMap(), _YargsInstance_strictOptions = new WeakMap(), _YargsInstance_usage = new WeakMap(), _YargsInstance_usageConfig = new WeakMap(), _YargsInstance_versionOpt = new WeakMap(), _YargsInstance_validation = new WeakMap(), kCopyDoubleDash)](argv) {
        if (!argv._ || !argv['--'])
            return argv;
        argv._.push.apply(argv._, argv['--']);
        try {
            delete argv['--'];
        }
        catch (_err) { }
        return argv;
    }
    [kCreateLogger]() {
        return {
            log: (...args) => {
                if (!this[kHasParseCallback]())
                    console.log(...args);
                __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
                if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
                    __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + '\n', "f");
                __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(' '), "f");
            },
            error: (...args) => {
                if (!this[kHasParseCallback]())
                    console.error(...args);
                __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
                if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
                    __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + '\n', "f");
                __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(' '), "f");
            },
        };
    }
    [kDeleteFromParserHintObject](optionKey) {
        objectKeys(__classPrivateFieldGet(this, _YargsInstance_options, "f")).forEach((hintKey) => {
            if (((key) => key === 'configObjects')(hintKey))
                return;
            const hint = __classPrivateFieldGet(this, _YargsInstance_options, "f")[hintKey];
            if (Array.isArray(hint)) {
                if (hint.includes(optionKey))
                    hint.splice(hint.indexOf(optionKey), 1);
            }
            else if (typeof hint === 'object') {
                delete hint[optionKey];
            }
        });
        delete __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions()[optionKey];
    }
    [kEmitWarning](warning, type, deduplicationId) {
        if (!__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId]) {
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.emitWarning(warning, type);
            __classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId] = true;
        }
    }
    [kFreeze]() {
        __classPrivateFieldGet(this, _YargsInstance_frozens, "f").push({
            options: __classPrivateFieldGet(this, _YargsInstance_options, "f"),
            configObjects: __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects.slice(0),
            exitProcess: __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"),
            groups: __classPrivateFieldGet(this, _YargsInstance_groups, "f"),
            strict: __classPrivateFieldGet(this, _YargsInstance_strict, "f"),
            strictCommands: __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f"),
            strictOptions: __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f"),
            completionCommand: __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"),
            output: __classPrivateFieldGet(this, _YargsInstance_output, "f"),
            exitError: __classPrivateFieldGet(this, _YargsInstance_exitError, "f"),
            hasOutput: __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f"),
            parsed: this.parsed,
            parseFn: __classPrivateFieldGet(this, _YargsInstance_parseFn, "f"),
            parseContext: __classPrivateFieldGet(this, _YargsInstance_parseContext, "f"),
        });
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_command, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").freeze();
    }
    [kGetDollarZero]() {
        let $0 = '';
        let default$0;
        if (/\b(node|iojs|electron)(\.exe)?$/.test(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv()[0])) {
            default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(1, 2);
        }
        else {
            default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(0, 1);
        }
        $0 = default$0
            .map(x => {
            const b = this[kRebase](__classPrivateFieldGet(this, _YargsInstance_cwd, "f"), x);
            return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
        })
            .join(' ')
            .trim();
        if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('_') &&
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").getProcessArgvBin() === __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('_')) {
            $0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f")
                .getEnv('_')
                .replace(`${__classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.execPath())}/`, '');
        }
        return $0;
    }
    [kGetParserConfiguration]() {
        return __classPrivateFieldGet(this, _YargsInstance_parserConfig, "f");
    }
    [kGetUsageConfiguration]() {
        return __classPrivateFieldGet(this, _YargsInstance_usageConfig, "f");
    }
    [kGuessLocale]() {
        if (!__classPrivateFieldGet(this, _YargsInstance_detectLocale, "f"))
            return;
        const locale = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LC_ALL') ||
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LC_MESSAGES') ||
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LANG') ||
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LANGUAGE') ||
            'en_US';
        this.locale(locale.replace(/[.:].*/, ''));
    }
    [kGuessVersion]() {
        const obj = this[kPkgUp]();
        return obj.version || 'unknown';
    }
    [kParsePositionalNumbers](argv) {
        const args = argv['--'] ? argv['--'] : argv._;
        for (let i = 0, arg; (arg = args[i]) !== undefined; i++) {
            if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.looksLikeNumber(arg) &&
                Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))) {
                args[i] = Number(arg);
            }
        }
        return argv;
    }
    [kPkgUp](rootPath) {
        const npath = rootPath || '*';
        if (__classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath])
            return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
        let obj = {};
        try {
            let startDir = rootPath || __classPrivateFieldGet(this, _YargsInstance_shim, "f").mainFilename;
            if (!rootPath && __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.extname(startDir)) {
                startDir = __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(startDir);
            }
            const pkgJsonPath = __classPrivateFieldGet(this, _YargsInstance_shim, "f").findUp(startDir, (dir, names) => {
                if (names.includes('package.json')) {
                    return 'package.json';
                }
                else {
                    return undefined;
                }
            });
            assertNotStrictEqual(pkgJsonPath, undefined, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            obj = JSON.parse(__classPrivateFieldGet(this, _YargsInstance_shim, "f").readFileSync(pkgJsonPath, 'utf8'));
        }
        catch (_noop) { }
        __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath] = obj || {};
        return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
    }
    [kPopulateParserHintArray](type, keys) {
        keys = [].concat(keys);
        keys.forEach(key => {
            key = this[kSanitizeKey](key);
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type].push(key);
        });
    }
    [kPopulateParserHintSingleValueDictionary](builder, type, key, value) {
        this[kPopulateParserHintDictionary](builder, type, key, value, (type, key, value) => {
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] = value;
        });
    }
    [kPopulateParserHintArrayDictionary](builder, type, key, value) {
        this[kPopulateParserHintDictionary](builder, type, key, value, (type, key, value) => {
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] || []).concat(value);
        });
    }
    [kPopulateParserHintDictionary](builder, type, key, value, singleKeyHandler) {
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
            singleKeyHandler(type, this[kSanitizeKey](key), value);
        }
    }
    [kSanitizeKey](key) {
        if (key === '__proto__')
            return '___proto___';
        return key;
    }
    [kSetKey](key, set) {
        this[kPopulateParserHintSingleValueDictionary](this[kSetKey].bind(this), 'key', key, set);
        return this;
    }
    [kUnfreeze]() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const frozen = __classPrivateFieldGet(this, _YargsInstance_frozens, "f").pop();
        assertNotStrictEqual(frozen, undefined, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        let configObjects;
        (_a = this, _b = this, _c = this, _d = this, _e = this, _f = this, _g = this, _h = this, _j = this, _k = this, _l = this, _m = this, {
            options: ({ set value(_o) { __classPrivateFieldSet(_a, _YargsInstance_options, _o, "f"); } }).value,
            configObjects,
            exitProcess: ({ set value(_o) { __classPrivateFieldSet(_b, _YargsInstance_exitProcess, _o, "f"); } }).value,
            groups: ({ set value(_o) { __classPrivateFieldSet(_c, _YargsInstance_groups, _o, "f"); } }).value,
            output: ({ set value(_o) { __classPrivateFieldSet(_d, _YargsInstance_output, _o, "f"); } }).value,
            exitError: ({ set value(_o) { __classPrivateFieldSet(_e, _YargsInstance_exitError, _o, "f"); } }).value,
            hasOutput: ({ set value(_o) { __classPrivateFieldSet(_f, _YargsInstance_hasOutput, _o, "f"); } }).value,
            parsed: this.parsed,
            strict: ({ set value(_o) { __classPrivateFieldSet(_g, _YargsInstance_strict, _o, "f"); } }).value,
            strictCommands: ({ set value(_o) { __classPrivateFieldSet(_h, _YargsInstance_strictCommands, _o, "f"); } }).value,
            strictOptions: ({ set value(_o) { __classPrivateFieldSet(_j, _YargsInstance_strictOptions, _o, "f"); } }).value,
            completionCommand: ({ set value(_o) { __classPrivateFieldSet(_k, _YargsInstance_completionCommand, _o, "f"); } }).value,
            parseFn: ({ set value(_o) { __classPrivateFieldSet(_l, _YargsInstance_parseFn, _o, "f"); } }).value,
            parseContext: ({ set value(_o) { __classPrivateFieldSet(_m, _YargsInstance_parseContext, _o, "f"); } }).value,
        } = frozen);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = configObjects;
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_command, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").unfreeze();
    }
    [kValidateAsync](validation, argv) {
        return maybeAsyncResult(argv, result => {
            validation(result);
            return result;
        });
    }
    getInternalMethods() {
        return {
            getCommandInstance: this[kGetCommandInstance].bind(this),
            getContext: this[kGetContext].bind(this),
            getHasOutput: this[kGetHasOutput].bind(this),
            getLoggerInstance: this[kGetLoggerInstance].bind(this),
            getParseContext: this[kGetParseContext].bind(this),
            getParserConfiguration: this[kGetParserConfiguration].bind(this),
            getUsageConfiguration: this[kGetUsageConfiguration].bind(this),
            getUsageInstance: this[kGetUsageInstance].bind(this),
            getValidationInstance: this[kGetValidationInstance].bind(this),
            hasParseCallback: this[kHasParseCallback].bind(this),
            isGlobalContext: this[kIsGlobalContext].bind(this),
            postProcess: this[kPostProcess].bind(this),
            reset: this[kReset].bind(this),
            runValidation: this[kRunValidation].bind(this),
            runYargsParserAndExecuteCommands: this[kRunYargsParserAndExecuteCommands].bind(this),
            setHasOutput: this[kSetHasOutput].bind(this),
        };
    }
    [kGetCommandInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_command, "f");
    }
    [kGetContext]() {
        return __classPrivateFieldGet(this, _YargsInstance_context, "f");
    }
    [kGetHasOutput]() {
        return __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f");
    }
    [kGetLoggerInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_logger, "f");
    }
    [kGetParseContext]() {
        return __classPrivateFieldGet(this, _YargsInstance_parseContext, "f") || {};
    }
    [kGetUsageInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_usage, "f");
    }
    [kGetValidationInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_validation, "f");
    }
    [kHasParseCallback]() {
        return !!__classPrivateFieldGet(this, _YargsInstance_parseFn, "f");
    }
    [kIsGlobalContext]() {
        return __classPrivateFieldGet(this, _YargsInstance_isGlobalContext, "f");
    }
    [kPostProcess](argv, populateDoubleDash, calledFromCommand, runGlobalMiddleware) {
        if (calledFromCommand)
            return argv;
        if (isPromise(argv))
            return argv;
        if (!populateDoubleDash) {
            argv = this[kCopyDoubleDash](argv);
        }
        const parsePositionalNumbers = this[kGetParserConfiguration]()['parse-positional-numbers'] ||
            this[kGetParserConfiguration]()['parse-positional-numbers'] === undefined;
        if (parsePositionalNumbers) {
            argv = this[kParsePositionalNumbers](argv);
        }
        if (runGlobalMiddleware) {
            argv = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
        }
        return argv;
    }
    [kReset](aliases = {}) {
        __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f") || {}, "f");
        const tmpOptions = {};
        tmpOptions.local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local || [];
        tmpOptions.configObjects = __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || [];
        const localLookup = {};
        tmpOptions.local.forEach(l => {
            localLookup[l] = true;
            (aliases[l] || []).forEach(a => {
                localLookup[a] = true;
            });
        });
        Object.assign(__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"), Object.keys(__classPrivateFieldGet(this, _YargsInstance_groups, "f")).reduce((acc, groupName) => {
            const keys = __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName].filter(key => !(key in localLookup));
            if (keys.length > 0) {
                acc[groupName] = keys;
            }
            return acc;
        }, {}));
        __classPrivateFieldSet(this, _YargsInstance_groups, {}, "f");
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
            'deprecatedOptions',
        ];
        arrayOptions.forEach(k => {
            tmpOptions[k] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[k] || []).filter((k) => !localLookup[k]);
        });
        objectOptions.forEach((k) => {
            tmpOptions[k] = objFilter(__classPrivateFieldGet(this, _YargsInstance_options, "f")[k], k => !localLookup[k]);
        });
        tmpOptions.envPrefix = __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
        __classPrivateFieldSet(this, _YargsInstance_options, tmpOptions, "f");
        __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f")
            ? __classPrivateFieldGet(this, _YargsInstance_usage, "f").reset(localLookup)
            : Usage(this, __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f")
            ? __classPrivateFieldGet(this, _YargsInstance_validation, "f").reset(localLookup)
            : Validation(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f")
            ? __classPrivateFieldGet(this, _YargsInstance_command, "f").reset()
            : Command(__classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_validation, "f"), __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_completion, "f"))
            __classPrivateFieldSet(this, _YargsInstance_completion, Completion(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_command, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").reset();
        __classPrivateFieldSet(this, _YargsInstance_completionCommand, null, "f");
        __classPrivateFieldSet(this, _YargsInstance_output, '', "f");
        __classPrivateFieldSet(this, _YargsInstance_exitError, null, "f");
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, false, "f");
        this.parsed = false;
        return this;
    }
    [kRebase](base, dir) {
        return __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.relative(base, dir);
    }
    [kRunYargsParserAndExecuteCommands](args, shortCircuit, calledFromCommand, commandIndex = 0, helpOnly = false) {
        let skipValidation = !!calledFromCommand || helpOnly;
        args = args || __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
        __classPrivateFieldGet(this, _YargsInstance_options, "f").__ = __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__;
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration = this[kGetParserConfiguration]();
        const populateDoubleDash = !!__classPrivateFieldGet(this, _YargsInstance_options, "f").configuration['populate--'];
        const config = Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration, {
            'populate--': true,
        });
        const parsed = __classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.detailed(args, Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f"), {
            configuration: { 'parse-positional-numbers': false, ...config },
        }));
        const argv = Object.assign(parsed.argv, __classPrivateFieldGet(this, _YargsInstance_parseContext, "f"));
        let argvPromise = undefined;
        const aliases = parsed.aliases;
        let helpOptSet = false;
        let versionOptSet = false;
        Object.keys(argv).forEach(key => {
            if (key === __classPrivateFieldGet(this, _YargsInstance_helpOpt, "f") && argv[key]) {
                helpOptSet = true;
            }
            else if (key === __classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && argv[key]) {
                versionOptSet = true;
            }
        });
        argv.$0 = this.$0;
        this.parsed = parsed;
        if (commandIndex === 0) {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").clearCachedHelpMessage();
        }
        try {
            this[kGuessLocale]();
            if (shortCircuit) {
                return this[kPostProcess](argv, populateDoubleDash, !!calledFromCommand, false);
            }
            if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
                const helpCmds = [__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")]
                    .concat(aliases[__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")] || [])
                    .filter(k => k.length > 1);
                if (helpCmds.includes('' + argv._[argv._.length - 1])) {
                    argv._.pop();
                    helpOptSet = true;
                }
            }
            __classPrivateFieldSet(this, _YargsInstance_isGlobalContext, false, "f");
            const handlerKeys = __classPrivateFieldGet(this, _YargsInstance_command, "f").getCommands();
            const requestCompletions = __classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey in argv;
            const skipRecommendation = helpOptSet || requestCompletions || helpOnly;
            if (argv._.length) {
                if (handlerKeys.length) {
                    let firstUnknownCommand;
                    for (let i = commandIndex || 0, cmd; argv._[i] !== undefined; i++) {
                        cmd = String(argv._[i]);
                        if (handlerKeys.includes(cmd) && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                            const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(cmd, this, parsed, i + 1, helpOnly, helpOptSet || versionOptSet || helpOnly);
                            return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
                        }
                        else if (!firstUnknownCommand &&
                            cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                            firstUnknownCommand = cmd;
                            break;
                        }
                    }
                    if (!__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() &&
                        __classPrivateFieldGet(this, _YargsInstance_recommendCommands, "f") &&
                        firstUnknownCommand &&
                        !skipRecommendation) {
                        __classPrivateFieldGet(this, _YargsInstance_validation, "f").recommendCommands(firstUnknownCommand, handlerKeys);
                    }
                }
                if (__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") &&
                    argv._.includes(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) &&
                    !requestCompletions) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
                        setBlocking(true);
                    this.showCompletionScript();
                    this.exit(0);
                }
            }
            if (__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && !skipRecommendation) {
                const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(null, this, parsed, 0, helpOnly, helpOptSet || versionOptSet || helpOnly);
                return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
            }
            if (requestCompletions) {
                if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
                    setBlocking(true);
                args = [].concat(args);
                const completionArgs = args.slice(args.indexOf(`--${__classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey}`) + 1);
                __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(completionArgs, (err, completions) => {
                    if (err)
                        throw new YError(err.message);
                    (completions || []).forEach(completion => {
                        __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(completion);
                    });
                    this.exit(0);
                });
                return this[kPostProcess](argv, !populateDoubleDash, !!calledFromCommand, false);
            }
            if (!__classPrivateFieldGet(this, _YargsInstance_hasOutput, "f")) {
                if (helpOptSet) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
                        setBlocking(true);
                    skipValidation = true;
                    this.showHelp('log');
                    this.exit(0);
                }
                else if (versionOptSet) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
                        setBlocking(true);
                    skipValidation = true;
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion('log');
                    this.exit(0);
                }
            }
            if (!skipValidation && __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.length > 0) {
                skipValidation = Object.keys(argv).some(key => __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.indexOf(key) >= 0 && argv[key] === true);
            }
            if (!skipValidation) {
                if (parsed.error)
                    throw new YError(parsed.error.message);
                if (!requestCompletions) {
                    const validation = this[kRunValidation](aliases, {}, parsed.error);
                    if (!calledFromCommand) {
                        argvPromise = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), true);
                    }
                    argvPromise = this[kValidateAsync](validation, argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv);
                    if (isPromise(argvPromise) && !calledFromCommand) {
                        argvPromise = argvPromise.then(() => {
                            return applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
                        });
                    }
                }
            }
        }
        catch (err) {
            if (err instanceof YError)
                __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message, err);
            else
                throw err;
        }
        return this[kPostProcess](argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv, populateDoubleDash, !!calledFromCommand, true);
    }
    [kRunValidation](aliases, positionalMap, parseErrors, isDefaultCommand) {
        const demandedOptions = { ...this.getDemandedOptions() };
        return (argv) => {
            if (parseErrors)
                throw new YError(parseErrors.message);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").nonOptionCount(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").requiredArguments(argv, demandedOptions);
            let failedStrictCommands = false;
            if (__classPrivateFieldGet(this, _YargsInstance_strictCommands, "f")) {
                failedStrictCommands = __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownCommands(argv);
            }
            if (__classPrivateFieldGet(this, _YargsInstance_strict, "f") && !failedStrictCommands) {
                __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, positionalMap, !!isDefaultCommand);
            }
            else if (__classPrivateFieldGet(this, _YargsInstance_strictOptions, "f")) {
                __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, {}, false, false);
            }
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").limitedChoices(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").implications(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicting(argv);
        };
    }
    [kSetHasOutput]() {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    }
    [kTrackManuallySetKeys](keys) {
        if (typeof keys === 'string') {
            __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
        }
        else {
            for (const k of keys) {
                __classPrivateFieldGet(this, _YargsInstance_options, "f").key[k] = true;
            }
        }
    }
}
export function isYargsInstance(y) {
    return !!y && typeof y.getInternalMethods === 'function';
}
