/// <reference types="node" />
import { CommandInstance, CommandHandler, CommandBuilderDefinition, CommandBuilder, CommandHandlerCallback, FinishCommandHandler } from './command';
import { Dictionary } from './common-types';
import { Arguments as ParserArguments, DetailedArguments as ParserDetailedArguments, Configuration as ParserConfiguration, Options as ParserOptions, ConfigCallback, CoerceCallback } from 'yargs-parser';
import { YError } from './yerror';
import { UsageInstance, FailureFunction } from './usage';
import { CompletionFunction } from './completion';
import { ValidationInstance, KeyOrPos } from './validation';
import { Y18N } from 'y18n';
import { MiddlewareCallback, Middleware } from './middleware';
import { RequireDirectoryOptions } from 'require-directory';
export declare function Yargs(processArgs?: string | string[], cwd?: string, parentRequire?: NodeRequire): YargsInstance;
export declare function rebase(base: string, dir: string): string;
/** Instance of the yargs module. */
export interface YargsInstance {
    $0: string;
    argv: Arguments;
    customScriptName: boolean;
    parsed: DetailedArguments | false;
    _copyDoubleDash<T extends Arguments | Promise<Arguments>>(argv: T): T;
    _getLoggerInstance(): LoggerInstance;
    _getParseContext(): Object;
    _hasOutput(): boolean;
    _hasParseCallback(): boolean;
    _parseArgs: {
        (args: null, shortCircuit: null, _calledFromCommand: boolean, commandIndex?: number): Arguments | Promise<Arguments>;
        (args: string | string[], shortCircuit?: boolean): Arguments | Promise<Arguments>;
    };
    _runValidation(argv: Arguments, aliases: Dictionary<string[]>, positionalMap: Dictionary<string[]>, parseErrors: Error | null, isDefaultCommand?: boolean): void;
    _setHasOutput(): void;
    addHelpOpt: {
        (opt?: string | false): YargsInstance;
        (opt?: string, msg?: string): YargsInstance;
    };
    addShowHiddenOpt: {
        (opt?: string | false): YargsInstance;
        (opt?: string, msg?: string): YargsInstance;
    };
    alias: {
        (keys: string | string[], aliases: string | string[]): YargsInstance;
        (keyAliases: Dictionary<string | string[]>): YargsInstance;
    };
    array(keys: string | string[]): YargsInstance;
    boolean(keys: string | string[]): YargsInstance;
    check(f: (argv: Arguments, aliases: Dictionary<string[]>) => any, _global?: boolean): YargsInstance;
    choices: {
        (keys: string | string[], choices: string | string[]): YargsInstance;
        (keyChoices: Dictionary<string | string[]>): YargsInstance;
    };
    coerce: {
        (keys: string | string[], coerceCallback: CoerceCallback): YargsInstance;
        (keyCoerceCallbacks: Dictionary<CoerceCallback>): YargsInstance;
    };
    command(cmd: string | string[], description: CommandHandler['description'], builder?: CommandBuilderDefinition | CommandBuilder, handler?: CommandHandlerCallback, commandMiddleware?: Middleware[], deprecated?: boolean): YargsInstance;
    commandDir(dir: string, opts?: RequireDirectoryOptions<any>): YargsInstance;
    completion: {
        (cmd?: string, fn?: CompletionFunction): YargsInstance;
        (cmd?: string, desc?: string | false, fn?: CompletionFunction): YargsInstance;
    };
    config: {
        (config: Dictionary): YargsInstance;
        (keys?: string | string[], configCallback?: ConfigCallback): YargsInstance;
        (keys?: string | string[], msg?: string, configCallback?: ConfigCallback): YargsInstance;
    };
    conflicts: {
        (key: string, conflictsWith: string | string[]): YargsInstance;
        (keyConflicts: Dictionary<string | string[]>): YargsInstance;
    };
    count(keys: string | string[]): YargsInstance;
    default: {
        (key: string, value: any, defaultDescription?: string): YargsInstance;
        (keys: string[], value: Exclude<any, Function>): YargsInstance;
        (keys: Dictionary<any>): YargsInstance;
    };
    defaults: YargsInstance['default'];
    demand: {
        (min: number, max?: number | string, msg?: string): YargsInstance;
        (keys: string | string[], msg?: string | true): YargsInstance;
        (keys: string | string[], max: string[], msg?: string | true): YargsInstance;
        (keyMsgs: Dictionary<string | undefined>): YargsInstance;
        (keyMsgs: Dictionary<string | undefined>, max: string[], msg?: string): YargsInstance;
    };
    demandCommand(): YargsInstance;
    demandCommand(min: number, minMsg?: string): YargsInstance;
    demandCommand(min: number, max: number, minMsg?: string | null, maxMsg?: string | null): YargsInstance;
    demandOption: {
        (keys: string | string[], msg?: string): YargsInstance;
        (keyMsgs: Dictionary<string | undefined>): YargsInstance;
    };
    deprecateOption(option: string, message?: string | boolean): YargsInstance;
    describe: {
        (keys: string | string[], description?: string): YargsInstance;
        (keyDescriptions: Dictionary<string>): YargsInstance;
    };
    detectLocale(detect: boolean): YargsInstance;
    env(prefix?: string | false): YargsInstance;
    epilog: YargsInstance['epilogue'];
    epilogue(msg: string): YargsInstance;
    example(cmd: string | [string, string?][], description?: string): YargsInstance;
    exit(code: number, err?: YError | string): void;
    exitProcess(enabled: boolean): YargsInstance;
    fail(f: FailureFunction): YargsInstance;
    getCommandInstance(): CommandInstance;
    getCompletion(args: string[], done: (completions: string[]) => any): void;
    getContext(): Context;
    getDemandedCommands(): Options['demandedCommands'];
    getDemandedOptions(): Options['demandedOptions'];
    getDeprecatedOptions(): Options['deprecatedOptions'];
    getDetectLocale(): boolean;
    getExitProcess(): boolean;
    getGroups(): Dictionary<string[]>;
    getHandlerFinishCommand(): FinishCommandHandler | null;
    getOptions(): Options;
    getParserConfiguration(): Configuration;
    getStrict(): boolean;
    getStrictCommands(): boolean;
    getUsageInstance(): UsageInstance;
    getValidationInstance(): ValidationInstance;
    global(keys: string | string[], global?: boolean): YargsInstance;
    group(keys: string | string[], groupName: string): YargsInstance;
    help: YargsInstance['addHelpOpt'];
    hide(key: string): YargsInstance;
    implies: {
        (key: string, implication: KeyOrPos | KeyOrPos[]): YargsInstance;
        (keyImplications: Dictionary<KeyOrPos | KeyOrPos[]>): YargsInstance;
    };
    locale: {
        (): string;
        (locale: string): YargsInstance;
    };
    middleware(callback: MiddlewareCallback | MiddlewareCallback[], applyBeforeValidation?: boolean): YargsInstance;
    nargs: {
        (keys: string | string[], nargs: number): YargsInstance;
        (keyNargs: Dictionary<number>): YargsInstance;
    };
    normalize(keys: string | string[]): YargsInstance;
    number(keys: string | string[]): YargsInstance;
    onFinishCommand(f: FinishCommandHandler): YargsInstance;
    option: {
        (key: string, optionDefinition: OptionDefinition): YargsInstance;
        (keyOptionDefinitions: Dictionary<OptionDefinition>): YargsInstance;
    };
    options: YargsInstance['option'];
    parse: {
        (): Arguments | Promise<Arguments>;
        (args: string | string[], context: object, parseCallback?: ParseCallback): Arguments | Promise<Arguments>;
        (args: string | string[], parseCallback: ParseCallback): Arguments | Promise<Arguments>;
        (args: string | string[], shortCircuit: boolean): Arguments | Promise<Arguments>;
    };
    parserConfiguration(config: Configuration): YargsInstance;
    pkgConf(key: string, rootPath?: string): YargsInstance;
    positional(key: string, positionalDefinition: PositionalDefinition): YargsInstance;
    recommendCommands(recommend: boolean): YargsInstance;
    require: YargsInstance['demand'];
    required: YargsInstance['demand'];
    requiresArg(keys: string | string[] | Dictionary): YargsInstance;
    reset(aliases?: DetailedArguments['aliases']): YargsInstance;
    resetOptions(aliases?: DetailedArguments['aliases']): YargsInstance;
    scriptName(scriptName: string): YargsInstance;
    showCompletionScript($0?: string, cmd?: string): YargsInstance;
    showHelp(level: 'error' | 'log' | ((message: string) => void)): YargsInstance;
    showHelpOnFail: {
        (message?: string): YargsInstance;
        (enabled: boolean, message: string): YargsInstance;
    };
    showHidden: YargsInstance['addShowHiddenOpt'];
    skipValidation(keys: string | string[]): YargsInstance;
    strict(enable?: boolean): YargsInstance;
    strictCommands(enable?: boolean): YargsInstance;
    string(key: string | string[]): YargsInstance;
    terminalWidth(): number | null;
    updateStrings(obj: Dictionary<string>): YargsInstance;
    updateLocale: YargsInstance['updateStrings'];
    usage: {
        (msg: string | null): YargsInstance;
        (msg: string, description: CommandHandler['description'], builder?: CommandBuilderDefinition | CommandBuilder, handler?: CommandHandlerCallback): YargsInstance;
    };
    version: {
        (ver?: string | false): YargsInstance;
        (key?: string, ver?: string): YargsInstance;
        (key?: string, msg?: string, ver?: string): YargsInstance;
    };
    wrap(cols: number | null | undefined): YargsInstance;
}
export declare function isYargsInstance(y: YargsInstance | void): y is YargsInstance;
/** Yargs' context. */
export interface Context {
    commands: string[];
    files: string[];
    fullCommands: string[];
}
declare type LoggerInstance = Pick<Console, 'error' | 'log'>;
export interface Options extends ParserOptions {
    __: Y18N['__'];
    alias: Dictionary<string[]>;
    array: string[];
    boolean: string[];
    choices: Dictionary<string[]>;
    config: Dictionary<ConfigCallback | boolean>;
    configObjects: Dictionary[];
    configuration: Configuration;
    count: string[];
    defaultDescription: Dictionary<string | undefined>;
    demandedCommands: Dictionary<{
        min: number;
        max: number;
        minMsg?: string | null;
        maxMsg?: string | null;
    }>;
    demandedOptions: Dictionary<string | undefined>;
    deprecatedOptions: Dictionary<string | boolean | undefined>;
    hiddenOptions: string[];
    /** Manually set keys */
    key: Dictionary<boolean | string>;
    local: string[];
    normalize: string[];
    number: string[];
    showHiddenOpt: string;
    skipValidation: string[];
    string: string[];
}
export interface Configuration extends Partial<ParserConfiguration> {
    /** Should a config object be deep-merged with the object config it extends? */
    'deep-merge-config'?: boolean;
    /** Should commands be sorted in help? */
    'sort-commands'?: boolean;
}
export interface OptionDefinition {
    alias?: string | string[];
    array?: boolean;
    boolean?: boolean;
    choices?: string | string[];
    coerce?: CoerceCallback;
    config?: boolean;
    configParser?: ConfigCallback;
    conflicts?: string | string[];
    count?: boolean;
    default?: any;
    defaultDescription?: string;
    deprecate?: string | boolean;
    deprecated?: OptionDefinition['deprecate'];
    desc?: string;
    describe?: OptionDefinition['desc'];
    description?: OptionDefinition['desc'];
    demand?: string | true;
    demandOption?: OptionDefinition['demand'];
    global?: boolean;
    group?: string;
    hidden?: boolean;
    implies?: string | number | KeyOrPos[];
    nargs?: number;
    normalize?: boolean;
    number?: boolean;
    require?: OptionDefinition['demand'];
    required?: OptionDefinition['demand'];
    requiresArg?: boolean;
    skipValidation?: boolean;
    string?: boolean;
    type?: 'array' | 'boolean' | 'count' | 'number' | 'string';
}
interface PositionalDefinition extends Pick<OptionDefinition, 'alias' | 'array' | 'coerce' | 'choices' | 'conflicts' | 'default' | 'defaultDescription' | 'demand' | 'desc' | 'describe' | 'description' | 'implies' | 'normalize'> {
    type?: 'boolean' | 'number' | 'string';
}
interface ParseCallback {
    (err: YError | string | undefined | null, argv: Arguments | Promise<Arguments>, output: string): void;
}
export interface Arguments extends ParserArguments {
    /** The script name or node command */
    $0: string;
}
export interface DetailedArguments extends ParserDetailedArguments {
    argv: Arguments;
}
export {};
