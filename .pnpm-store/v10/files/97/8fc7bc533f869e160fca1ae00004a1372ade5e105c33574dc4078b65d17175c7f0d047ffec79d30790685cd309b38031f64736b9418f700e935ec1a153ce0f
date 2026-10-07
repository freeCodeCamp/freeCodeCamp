// Type definitions for commander
// Original definitions by: Alan Agius <https://github.com/alan-agius4>, Marcelo Dezem <https://github.com/mdezem>, vvakame <https://github.com/vvakame>, Jules Randolph <https://github.com/sveinburne>

// Using method rather than property for method-signature-style, to document method overloads separately. Allow either.
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-explicit-any */

export class CommanderError extends Error {
  code: string;
  exitCode: number;
  message: string;
  nestedError?: string;

  /**
   * Constructs the CommanderError class
   * @param exitCode - suggested exit code which could be used with process.exit
   * @param code - an id string representing the error
   * @param message - human-readable description of the error
   * @constructor
   */
  constructor(exitCode: number, code: string, message: string);
}

export class InvalidArgumentError extends CommanderError {
  /**
   * Constructs the InvalidArgumentError class
   * @param message - explanation of why argument is invalid
   * @constructor
   */
  constructor(message: string);
}
export { InvalidArgumentError as InvalidOptionArgumentError }; // deprecated old name

export class Argument {
  description: string;
  required: boolean;
  variadic: boolean;

  /**
   * Initialize a new command argument with the given name and description.
   * The default is that the argument is required, and you can explicitly
   * indicate this with <> around the name. Put [] around the name for an optional argument.
   */
  constructor(arg: string, description?: string);

  /**
   * Return argument name.
   */
  name(): string;

  /**
   * Set the default value, and optionally supply the description to be displayed in the help.
   */
  default(value: unknown, description?: string): this;

  /**
   * Set the custom handler for processing CLI command arguments into argument values.
   */
  argParser<T>(fn: (value: string, previous: T) => T): this;

  /**
   * Only allow argument value to be one of choices.
   */
  choices(values: string[]): this;

  /**
   * Make option-argument required.
   */
  argRequired(): this;

  /**
   * Make option-argument optional.
   */
  argOptional(): this;
  }

export class Option {
  flags: string;
  description: string;

  required: boolean; // A value must be supplied when the option is specified.
  optional: boolean; // A value is optional when the option is specified.
  variadic: boolean;
  mandatory: boolean; // The option must have a value after parsing, which usually means it must be specified on command line.
  optionFlags: string;
  short?: string;
  long?: string;
  negate: boolean;
  defaultValue?: any;
  defaultValueDescription?: string;
  parseArg?: <T>(value: string, previous: T) => T;
  hidden: boolean;
  argChoices?: string[];

  constructor(flags: string, description?: string);

  /**
   * Set the default value, and optionally supply the description to be displayed in the help.
   */
  default(value: unknown, description?: string): this;

  /**
   * Set environment variable to check for option value.
   * Priority order of option values is default < env < cli
   */
  env(name: string): this;

  /**
   * Calculate the full description, including defaultValue etc.
   */
  fullDescription(): string;

  /**
   * Set the custom handler for processing CLI option arguments into option values.
   */
  argParser<T>(fn: (value: string, previous: T) => T): this;

  /**
   * Whether the option is mandatory and must have a value after parsing.
   */
  makeOptionMandatory(mandatory?: boolean): this;

  /**
   * Hide option in help.
   */
  hideHelp(hide?: boolean): this;

  /**
   * Only allow option value to be one of choices.
   */
  choices(values: string[]): this;

  /**
   * Return option name.
   */
  name(): string;

  /**
   * Return option name, in a camelcase format that can be used
   * as a object attribute key.
   */
  attributeName(): string;
}

export class Help {
  /** output helpWidth, long lines are wrapped to fit */
  helpWidth?: number;
  sortSubcommands: boolean;
  sortOptions: boolean;

  constructor();

  /** Get the command term to show in the list of subcommands. */
  subcommandTerm(cmd: Command): string;
  /** Get the command description to show in the list of subcommands. */
  subcommandDescription(cmd: Command): string;
  /** Get the option term to show in the list of options. */
  optionTerm(option: Option): string;
  /** Get the option description to show in the list of options. */
  optionDescription(option: Option): string;
  /** Get the argument term to show in the list of arguments. */
  argumentTerm(argument: Argument): string;
  /** Get the argument description to show in the list of arguments. */
  argumentDescription(argument: Argument): string;

  /** Get the command usage to be displayed at the top of the built-in help. */
  commandUsage(cmd: Command): string;
  /** Get the description for the command. */
  commandDescription(cmd: Command): string;

  /** Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one. */
  visibleCommands(cmd: Command): Command[];
  /** Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one. */
  visibleOptions(cmd: Command): Option[];
  /** Get an array of the arguments which have descriptions. */
  visibleArguments(cmd: Command): Argument[];

  /** Get the longest command term length. */
  longestSubcommandTermLength(cmd: Command, helper: Help): number;
  /** Get the longest option term length. */
  longestOptionTermLength(cmd: Command, helper: Help): number;
  /** Get the longest argument term length. */
  longestArgumentTermLength(cmd: Command, helper: Help): number;
  /** Calculate the pad width from the maximum term length. */
  padWidth(cmd: Command, helper: Help): number;

  /**
   * Wrap the given string to width characters per line, with lines after the first indented.
   * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
   */
  wrap(str: string, width: number, indent: number, minColumnWidth?: number): string;

  /** Generate the built-in help text. */
  formatHelp(cmd: Command, helper: Help): string;
}
export type HelpConfiguration = Partial<Help>;

export interface ParseOptions {
  from: 'node' | 'electron' | 'user';
}
export interface HelpContext { // optional parameter for .help() and .outputHelp()
  error: boolean;
}
export interface AddHelpTextContext { // passed to text function used with .addHelpText()
  error: boolean;
  command: Command;
}
export interface OutputConfiguration {
  writeOut?(str: string): void;
  writeErr?(str: string): void;
  getOutHelpWidth?(): number;
  getErrHelpWidth?(): number;
  outputError?(str: string, write: (str: string) => void): void;

}

export type AddHelpTextPosition = 'beforeAll' | 'before' | 'after' | 'afterAll';
export type HookEvent = 'preAction' | 'postAction';
export type OptionValueSource = 'default' | 'env' | 'config' | 'cli';

export interface OptionValues {
  [key: string]: any;
}

export class Command {
  args: string[];
  processedArgs: any[];
  commands: Command[];
  parent: Command | null;

  constructor(name?: string);

  /**
   * Set the program version to `str`.
   *
   * This method auto-registers the "-V, --version" flag
   * which will print the version number when passed.
   *
   * You can optionally supply the  flags and description to override the defaults.
   */
  version(str: string, flags?: string, description?: string): this;

  /**
   * Define a command, implemented using an action handler.
   *
   * @remarks
   * The command description is supplied using `.description`, not as a parameter to `.command`.
   *
   * @example
   * ```ts
   * program
   *   .command('clone <source> [destination]')
   *   .description('clone a repository into a newly created directory')
   *   .action((source, destination) => {
   *     console.log('clone command called');
   *   });
   * ```
   *
   * @param nameAndArgs - command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`
   * @param opts - configuration options
   * @returns new command
   */
  command(nameAndArgs: string, opts?: CommandOptions): ReturnType<this['createCommand']>;
  /**
   * Define a command, implemented in a separate executable file.
   *
   * @remarks
   * The command description is supplied as the second parameter to `.command`.
   *
   * @example
   * ```ts
   *  program
   *    .command('start <service>', 'start named service')
   *    .command('stop [service]', 'stop named service, or all if no name supplied');
   * ```
   *
   * @param nameAndArgs - command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`
   * @param description - description of executable command
   * @param opts - configuration options
   * @returns `this` command for chaining
   */
  command(nameAndArgs: string, description: string, opts?: ExecutableCommandOptions): this;

  /**
   * Factory routine to create a new unattached command.
   *
   * See .command() for creating an attached subcommand, which uses this routine to
   * create the command. You can override createCommand to customise subcommands.
   */
  createCommand(name?: string): Command;

  /**
   * Add a prepared subcommand.
   *
   * See .command() for creating an attached subcommand which inherits settings from its parent.
   *
   * @returns `this` command for chaining
   */
  addCommand(cmd: Command, opts?: CommandOptions): this;

  /**
   * Factory routine to create a new unattached argument.
   *
   * See .argument() for creating an attached argument, which uses this routine to
   * create the argument. You can override createArgument to return a custom argument.
   */
  createArgument(name: string, description?: string): Argument;

  /**
   * Define argument syntax for command.
   *
   * The default is that the argument is required, and you can explicitly
   * indicate this with <> around the name. Put [] around the name for an optional argument.
   *
   * @example
   * ```
   * program.argument('<input-file>');
   * program.argument('[output-file]');
   * ```
   *
   * @returns `this` command for chaining
   */
    argument<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
    argument(name: string, description?: string, defaultValue?: unknown): this;

  /**
   * Define argument syntax for command, adding a prepared argument.
   *
   * @returns `this` command for chaining
   */
  addArgument(arg: Argument): this;

  /**
   * Define argument syntax for command, adding multiple at once (without descriptions).
   *
   * See also .argument().
   *
   * @example
   * ```
   * program.arguments('<cmd> [env]');
   * ```
   *
   * @returns `this` command for chaining
   */
  arguments(names: string): this;

  /**
   * Override default decision whether to add implicit help command.
   *
   * @example
   * ```
   * addHelpCommand() // force on
   * addHelpCommand(false); // force off
   * addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details
   * ```
   *
   * @returns `this` command for chaining
   */
  addHelpCommand(enableOrNameAndArgs?: string | boolean, description?: string): this;

  /**
   * Add hook for life cycle event.
   */
  hook(event: HookEvent, listener: (thisCommand: Command, actionCommand: Command) => void | Promise<void>): this;

  /**
   * Register callback to use as replacement for calling process.exit.
   */
  exitOverride(callback?: (err: CommanderError) => never|void): this;

  /**
   * You can customise the help with a subclass of Help by overriding createHelp,
   * or by overriding Help properties using configureHelp().
   */
  createHelp(): Help;

  /**
   * You can customise the help by overriding Help properties using configureHelp(),
   * or with a subclass of Help by overriding createHelp().
   */
  configureHelp(configuration: HelpConfiguration): this;
  /** Get configuration */
  configureHelp(): HelpConfiguration;

  /**
   * The default output goes to stdout and stderr. You can customise this for special
   * applications. You can also customise the display of errors by overriding outputError.
   *
   * The configuration properties are all functions:
   * ```
   * // functions to change where being written, stdout and stderr
   * writeOut(str)
   * writeErr(str)
   * // matching functions to specify width for wrapping help
   * getOutHelpWidth()
   * getErrHelpWidth()
   * // functions based on what is being written out
   * outputError(str, write) // used for displaying errors, and not used for displaying help
   * ```
   */
  configureOutput(configuration: OutputConfiguration): this;
  /** Get configuration */
  configureOutput(): OutputConfiguration;

  /**
   * Copy settings that are useful to have in common across root command and subcommands.
   *
   * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
   */
  copyInheritedSettings(sourceCommand: Command): this;

  /**
   * Display the help or a custom message after an error occurs.
   */
  showHelpAfterError(displayHelp?: boolean | string): this;

  /**
   * Display suggestion of similar commands for unknown commands, or options for unknown options.
   */
  showSuggestionAfterError(displaySuggestion?: boolean): this;

   /**
   * Register callback `fn` for the command.
   *
   * @example
   * ```
   * program
   *   .command('serve')
   *   .description('start service')
   *   .action(function() {
   *     // do work here
   *   });
   * ```
   *
   * @returns `this` command for chaining
   */
  action(fn: (...args: any[]) => void | Promise<void>): this;

  /**
   * Define option with `flags`, `description` and optional
   * coercion `fn`.
   *
   * The `flags` string contains the short and/or long flags,
   * separated by comma, a pipe or space. The following are all valid
   * all will output this way when `--help` is used.
   *
   *     "-p, --pepper"
   *     "-p|--pepper"
   *     "-p --pepper"
   *
   * @example
   * ```
   * // simple boolean defaulting to false
   *  program.option('-p, --pepper', 'add pepper');
   *
   *  --pepper
   *  program.pepper
   *  // => Boolean
   *
   *  // simple boolean defaulting to true
   *  program.option('-C, --no-cheese', 'remove cheese');
   *
   *  program.cheese
   *  // => true
   *
   *  --no-cheese
   *  program.cheese
   *  // => false
   *
   *  // required argument
   *  program.option('-C, --chdir <path>', 'change the working directory');
   *
   *  --chdir /tmp
   *  program.chdir
   *  // => "/tmp"
   *
   *  // optional argument
   *  program.option('-c, --cheese [type]', 'add cheese [marble]');
   * ```
   *
   * @returns `this` command for chaining
   */
  option(flags: string, description?: string, defaultValue?: string | boolean): this;
  option<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
  /** @deprecated since v7, instead use choices or a custom function */
  option(flags: string, description: string, regexp: RegExp, defaultValue?: string | boolean): this;

  /**
   * Define a required option, which must have a value after parsing. This usually means
   * the option must be specified on the command line. (Otherwise the same as .option().)
   *
   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
   */
  requiredOption(flags: string, description?: string, defaultValue?: string | boolean): this;
  requiredOption<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
  /** @deprecated since v7, instead use choices or a custom function */
  requiredOption(flags: string, description: string, regexp: RegExp, defaultValue?: string | boolean): this;

  /**
   * Factory routine to create a new unattached option.
   *
   * See .option() for creating an attached option, which uses this routine to
   * create the option. You can override createOption to return a custom option.
   */

  createOption(flags: string, description?: string): Option;

  /**
   * Add a prepared Option.
   *
   * See .option() and .requiredOption() for creating and attaching an option in a single call.
   */
  addOption(option: Option): this;

  /**
   * Whether to store option values as properties on command object,
   * or store separately (specify false). In both cases the option values can be accessed using .opts().
   *
   * @returns `this` command for chaining
   */
  storeOptionsAsProperties<T extends OptionValues>(): this & T;
  storeOptionsAsProperties<T extends OptionValues>(storeAsProperties: true): this & T;
  storeOptionsAsProperties(storeAsProperties?: boolean): this;

  /**
   * Retrieve option value.
   */
  getOptionValue(key: string): any;

  /**
   * Store option value.
   */
  setOptionValue(key: string, value: unknown): this;

  /**
   * Store option value and where the value came from.
   */
  setOptionValueWithSource(key: string, value: unknown, source: OptionValueSource): this;

  /**
   * Retrieve option value source.
   */
  getOptionValueSource(key: string): OptionValueSource;

   /**
   * Alter parsing of short flags with optional values.
   *
   * @example
   * ```
   * // for `.option('-f,--flag [value]'):
   * .combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
   * .combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
   * ```
   *
   * @returns `this` command for chaining
   */
  combineFlagAndOptionalValue(combine?: boolean): this;

  /**
   * Allow unknown options on the command line.
   *
   * @returns `this` command for chaining
   */
  allowUnknownOption(allowUnknown?: boolean): this;

  /**
   * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
   *
   * @returns `this` command for chaining
   */
  allowExcessArguments(allowExcess?: boolean): this;

  /**
   * Enable positional options. Positional means global options are specified before subcommands which lets
   * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
   *
   * The default behaviour is non-positional and global options may appear anywhere on the command line.
   *
   * @returns `this` command for chaining
   */
  enablePositionalOptions(positional?: boolean): this;

  /**
   * Pass through options that come after command-arguments rather than treat them as command-options,
   * so actual command-options come before command-arguments. Turning this on for a subcommand requires
   * positional options to have been enabled on the program (parent commands).
   *
   * The default behaviour is non-positional and options may appear before or after command-arguments.
   *
   * @returns `this` command for chaining
   */
  passThroughOptions(passThrough?: boolean): this;

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * @example
   * ```
   * program.parse(process.argv);
   * program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
   * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   * ```
   *
   * @returns `this` command for chaining
   */
  parse(argv?: string[], options?: ParseOptions): this;

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * @example
   * ```
   * program.parseAsync(process.argv);
   * program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
   * program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   * ```
   *
   * @returns Promise
   */
  parseAsync(argv?: string[], options?: ParseOptions): Promise<this>;

  /**
   * Parse options from `argv` removing known options,
   * and return argv split into operands and unknown arguments.
   *
   *     argv => operands, unknown
   *     --known kkk op => [op], []
   *     op --known kkk => [op], []
   *     sub --unknown uuu op => [sub], [--unknown uuu op]
   *     sub -- --unknown uuu op => [sub --unknown uuu op], []
   */
  parseOptions(argv: string[]): ParseOptionsResult;

  /**
   * Return an object containing options as key-value pairs
   */
  opts<T extends OptionValues>(): T;

  /**
   * Set the description.
   *
   * @returns `this` command for chaining
   */

  description(str: string): this;
  /** @deprecated since v8, instead use .argument to add command argument with description */
  description(str: string, argsDescription: {[argName: string]: string}): this;
  /**
   * Get the description.
   */
  description(): string;

  /**
   * Set an alias for the command.
   *
   * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
   *
   * @returns `this` command for chaining
   */
  alias(alias: string): this;
  /**
   * Get alias for the command.
   */
  alias(): string;

  /**
   * Set aliases for the command.
   *
   * Only the first alias is shown in the auto-generated help.
   *
   * @returns `this` command for chaining
   */
  aliases(aliases: string[]): this;
  /**
   * Get aliases for the command.
   */
  aliases(): string[];

  /**
   * Set the command usage.
   *
   * @returns `this` command for chaining
   */
  usage(str: string): this;
  /**
   * Get the command usage.
   */
  usage(): string;

  /**
   * Set the name of the command.
   *
   * @returns `this` command for chaining
   */
  name(str: string): this;
  /**
   * Get the name of the command.
   */
  name(): string;

  /**
   * Output help information for this command.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   *
   */
  outputHelp(context?: HelpContext): void;
  /** @deprecated since v7 */
  outputHelp(cb?: (str: string) => string): void;

  /**
   * Return command help documentation.
   */
  helpInformation(context?: HelpContext): string;

  /**
   * You can pass in flags and a description to override the help
   * flags and help description for your command. Pass in false
   * to disable the built-in help option.
   */
  helpOption(flags?: string | boolean, description?: string): this;

  /**
   * Output help information and exit.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   */
  help(context?: HelpContext): never;
  /** @deprecated since v7 */
  help(cb?: (str: string) => string): never;

  /**
   * Add additional text to be displayed with the built-in help.
   *
   * Position is 'before' or 'after' to affect just this command,
   * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
   */
  addHelpText(position: AddHelpTextPosition, text: string): this;
  addHelpText(position: AddHelpTextPosition, text: (context: AddHelpTextContext) => string): this;

  /**
   * Add a listener (callback) for when events occur. (Implemented using EventEmitter.)
   */
  on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export interface CommandOptions {
  hidden?: boolean;
  isDefault?: boolean;
  /** @deprecated since v7, replaced by hidden */
  noHelp?: boolean;
}
export interface ExecutableCommandOptions extends CommandOptions {
  executableFile?: string;
}

export interface ParseOptionsResult {
  operands: string[];
  unknown: string[];
}

export function createCommand(name?: string): Command;
export function createOption(flags: string, description?: string): Option;
export function createArgument(name: string, description?: string): Argument;

export const program: Command;
