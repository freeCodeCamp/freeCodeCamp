import { EventEmitter } from 'events';

interface OptionConfig {
    default?: any;
    type?: any[];
}
declare class Option {
    rawName: string;
    description: string;
    /** Option name */
    name: string;
    /** Option name and aliases */
    names: string[];
    isBoolean?: boolean;
    required?: boolean;
    config: OptionConfig;
    negated: boolean;
    constructor(rawName: string, description: string, config?: OptionConfig);
}

interface CommandArg {
    required: boolean;
    value: string;
    variadic: boolean;
}
interface HelpSection {
    title?: string;
    body: string;
}
interface CommandConfig {
    allowUnknownOptions?: boolean;
    ignoreOptionDefaultValue?: boolean;
}
declare type HelpCallback = (sections: HelpSection[]) => void | HelpSection[];
declare type CommandExample = ((bin: string) => string) | string;
declare class Command {
    rawName: string;
    description: string;
    config: CommandConfig;
    cli: CAC;
    options: Option[];
    aliasNames: string[];
    name: string;
    args: CommandArg[];
    commandAction?: (...args: any[]) => any;
    usageText?: string;
    versionNumber?: string;
    examples: CommandExample[];
    helpCallback?: HelpCallback;
    globalCommand?: GlobalCommand;
    constructor(rawName: string, description: string, config: CommandConfig, cli: CAC);
    usage(text: string): this;
    allowUnknownOptions(): this;
    ignoreOptionDefaultValue(): this;
    version(version: string, customFlags?: string): this;
    example(example: CommandExample): this;
    /**
     * Add a option for this command
     * @param rawName Raw option name(s)
     * @param description Option description
     * @param config Option config
     */
    option(rawName: string, description: string, config?: OptionConfig): this;
    alias(name: string): this;
    action(callback: (...args: any[]) => any): this;
    /**
     * Check if a command name is matched by this command
     * @param name Command name
     */
    isMatched(name: string): boolean;
    get isDefaultCommand(): boolean;
    get isGlobalCommand(): boolean;
    /**
     * Check if an option is registered in this command
     * @param name Option name
     */
    hasOption(name: string): Option | undefined;
    outputHelp(): void;
    outputVersion(): void;
    checkRequiredArgs(): void;
    /**
     * Check if the parsed options contain any unknown options
     *
     * Exit and output error when true
     */
    checkUnknownOptions(): void;
    /**
     * Check if the required string-type options exist
     */
    checkOptionValue(): void;
}
declare class GlobalCommand extends Command {
    constructor(cli: CAC);
}

interface ParsedArgv {
    args: ReadonlyArray<string>;
    options: {
        [k: string]: any;
    };
}
declare class CAC extends EventEmitter {
    /** The program name to display in help and version message */
    name: string;
    commands: Command[];
    globalCommand: GlobalCommand;
    matchedCommand?: Command;
    matchedCommandName?: string;
    /**
     * Raw CLI arguments
     */
    rawArgs: string[];
    /**
     * Parsed CLI arguments
     */
    args: ParsedArgv['args'];
    /**
     * Parsed CLI options, camelCased
     */
    options: ParsedArgv['options'];
    showHelpOnExit?: boolean;
    showVersionOnExit?: boolean;
    /**
     * @param name The program name to display in help and version message
     */
    constructor(name?: string);
    /**
     * Add a global usage text.
     *
     * This is not used by sub-commands.
     */
    usage(text: string): this;
    /**
     * Add a sub-command
     */
    command(rawName: string, description?: string, config?: CommandConfig): Command;
    /**
     * Add a global CLI option.
     *
     * Which is also applied to sub-commands.
     */
    option(rawName: string, description: string, config?: OptionConfig): this;
    /**
     * Show help message when `-h, --help` flags appear.
     *
     */
    help(callback?: HelpCallback): this;
    /**
     * Show version number when `-v, --version` flags appear.
     *
     */
    version(version: string, customFlags?: string): this;
    /**
     * Add a global example.
     *
     * This example added here will not be used by sub-commands.
     */
    example(example: CommandExample): this;
    /**
     * Output the corresponding help message
     * When a sub-command is matched, output the help message for the command
     * Otherwise output the global one.
     *
     */
    outputHelp(): void;
    /**
     * Output the version number.
     *
     */
    outputVersion(): void;
    private setParsedInfo;
    unsetMatchedCommand(): void;
    /**
     * Parse argv
     */
    parse(argv?: string[], { 
    /** Whether to run the action for matched command */
    run, }?: {
        run?: boolean | undefined;
    }): ParsedArgv;
    private mri;
    runMatchedCommand(): any;
}

/**
 * @param name The program name to display in help and version message
 */
declare const cac: (name?: string) => CAC;

export default cac;
export { CAC, Command, cac };
