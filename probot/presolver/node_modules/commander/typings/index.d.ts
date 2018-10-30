// Type definitions for commander 2.11
// Project: https://github.com/visionmedia/commander.js
// Definitions by: Alan Agius <https://github.com/alan-agius4>, Marcelo Dezem <https://github.com/mdezem>, vvakame <https://github.com/vvakame>, Jules Randolph <https://github.com/sveinburne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace local {

  class Option {
    flags: string;
    required: boolean;
    optional: boolean;
    bool: boolean;
    short?: string;
    long: string;
    description: string;

    /**
     * Initialize a new `Option` with the given `flags` and `description`.
     *
     * @param {string} flags
     * @param {string} [description]
     */
    constructor(flags: string, description?: string);
  }

  class Command extends NodeJS.EventEmitter {
    [key: string]: any;

    args: string[];

    /**
     * Initialize a new `Command`.
     *
     * @param {string} [name]
     */
    constructor(name?: string);

    /**
     * Set the program version to `str`.
     *
     * This method auto-registers the "-V, --version" flag
     * which will print the version number when passed.
     *
     * @param {string} str
     * @param {string} [flags]
     * @returns {Command} for chaining
     */
    version(str: string, flags?: string): Command;

    /**
     * Add command `name`.
     *
     * The `.action()` callback is invoked when the
     * command `name` is specified via __ARGV__,
     * and the remaining arguments are applied to the
     * function for access.
     *
     * When the `name` is "*" an un-matched command
     * will be passed as the first arg, followed by
     * the rest of __ARGV__ remaining.
     *
     * @example
     *      program
     *        .version('0.0.1')
     *        .option('-C, --chdir <path>', 'change the working directory')
     *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
     *        .option('-T, --no-tests', 'ignore test hook')
     *
     *      program
     *        .command('setup')
     *        .description('run remote setup commands')
     *        .action(function() {
     *          console.log('setup');
     *        });
     *
     *      program
     *        .command('exec <cmd>')
     *        .description('run the given remote command')
     *        .action(function(cmd) {
     *          console.log('exec "%s"', cmd);
     *        });
     *
     *      program
     *        .command('teardown <dir> [otherDirs...]')
     *        .description('run teardown commands')
     *        .action(function(dir, otherDirs) {
     *          console.log('dir "%s"', dir);
     *          if (otherDirs) {
     *            otherDirs.forEach(function (oDir) {
     *              console.log('dir "%s"', oDir);
     *            });
     *          }
     *        });
     *
     *      program
     *        .command('*')
     *        .description('deploy the given env')
     *        .action(function(env) {
     *          console.log('deploying "%s"', env);
     *        });
     *
     *      program.parse(process.argv);
     *
     * @param {string} name
     * @param {string} [desc] for git-style sub-commands
     * @param {CommandOptions} [opts] command options
     * @returns {Command} the new command
     */
    command(name: string, desc?: string, opts?: commander.CommandOptions): Command;

    /**
     * Define argument syntax for the top-level command.
     *
     * @param {string} desc
     * @returns {Command} for chaining
     */
    arguments(desc: string): Command;

    /**
     * Parse expected `args`.
     *
     * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
     *
     * @param {string[]} args
     * @returns {Command} for chaining
     */
    parseExpectedArgs(args: string[]): Command;

    /**
     * Register callback `fn` for the command.
     *
     * @example
     *      program
     *        .command('help')
     *        .description('display verbose help')
     *        .action(function() {
     *           // output help here
     *        });
     *
     * @param {(...args: any[]) => void} fn
     * @returns {Command} for chaining
     */
    action(fn: (...args: any[]) => void): Command;

    /**
     * Define option with `flags`, `description` and optional
     * coercion `fn`.
     *
     * The `flags` string should contain both the short and long flags,
     * separated by comma, a pipe or space. The following are all valid
     * all will output this way when `--help` is used.
     *
     *    "-p, --pepper"
     *    "-p|--pepper"
     *    "-p --pepper"
     *
     * @example
     *     // simple boolean defaulting to false
     *     program.option('-p, --pepper', 'add pepper');
     *
     *     --pepper
     *     program.pepper
     *     // => Boolean
     *
     *     // simple boolean defaulting to true
     *     program.option('-C, --no-cheese', 'remove cheese');
     *
     *     program.cheese
     *     // => true
     *
     *     --no-cheese
     *     program.cheese
     *     // => false
     *
     *     // required argument
     *     program.option('-C, --chdir <path>', 'change the working directory');
     *
     *     --chdir /tmp
     *     program.chdir
     *     // => "/tmp"
     *
     *     // optional argument
     *     program.option('-c, --cheese [type]', 'add cheese [marble]');
     *
     * @param {string} flags
     * @param {string} [description]
     * @param {((arg1: any, arg2: any) => void) | RegExp} [fn] function or default
     * @param {*} [defaultValue]
     * @returns {Command} for chaining
     */
    option(flags: string, description?: string, fn?: ((arg1: any, arg2: any) => void) | RegExp, defaultValue?: any): Command;
    option(flags: string, description?: string, defaultValue?: any): Command;

    /**
     * Allow unknown options on the command line.
     *
     * @param {boolean} [arg] if `true` or omitted, no error will be thrown for unknown options.
     * @returns {Command} for chaining
     */
    allowUnknownOption(arg?: boolean): Command;

    /**
     * Parse `argv`, settings options and invoking commands when defined.
     *
     * @param {string[]} argv
     * @returns {Command} for chaining
     */
    parse(argv: string[]): Command;

    /**
     * Parse options from `argv` returning `argv` void of these options.
     *
     * @param {string[]} argv
     * @returns {ParseOptionsResult}
     */
    parseOptions(argv: string[]): commander.ParseOptionsResult;

    /**
     * Return an object containing options as key-value pairs
     *
     * @returns {{[key: string]: any}}
     */
    opts(): { [key: string]: any };

    /**
     * Set the description to `str`.
     *
     * @param {string} str
     * @return {(Command | string)}
     */
    description(str: string): Command;
    description(): string;

    /**
     * Set an alias for the command.
     *
     * @param {string} alias
     * @return {(Command | string)}
     */
    alias(alias: string): Command;
    alias(): string;

    /**
     * Set or get the command usage.
     *
     * @param {string} str
     * @return {(Command | string)}
     */
    usage(str: string): Command;
    usage(): string;

    /**
     * Set the name of the command.
     *
     * @param {string} str
     * @return {Command}
     */
    name(str: string): Command;

    /**
     * Get the name of the command.
     *
     * @return {string}
     */
    name(): string;

    /**
     * Output help information for this command.
     *
     * @param {(str: string) => string} [cb]
     */
    outputHelp(cb?: (str: string) => string): void;

    /** Output help information and exit.
     *
     * @param {(str: string) => string} [cb]
     */
    help(cb?: (str: string) => string): never;
  }

}

declare namespace commander {

    type Command = local.Command

    type Option = local.Option

    interface CommandOptions {
        noHelp?: boolean;
        isDefault?: boolean;
    }

    interface ParseOptionsResult {
        args: string[];
        unknown: string[];
    }

    interface CommanderStatic extends Command {
        Command: typeof local.Command;
        Option: typeof local.Option;
        CommandOptions: CommandOptions;
        ParseOptionsResult: ParseOptionsResult;
    }

}

declare const commander: commander.CommanderStatic;
export = commander;
