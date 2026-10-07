// The following TSLint rules have been disabled:
// unified-signatures: Because there is useful information in the argument names of the overloaded signatures

// Convention:
// Use 'union types' when:
//  - parameter types have similar signature type (i.e. 'string | ReadonlyArray<string>')
//  - parameter names have the same semantic meaning (i.e. ['command', 'commands'] , ['key', 'keys'])
//    An example for not using 'union types' is the declaration of 'env' where `prefix` and `enable` parameters
//    have different semantics. On the other hand, in the declaration of 'usage', a `command: string` parameter
//    has the same semantic meaning with declaring an overload method by using `commands: ReadonlyArray<string>`,
//    thus it's preferred to use `command: string | ReadonlyArray<string>`
// Use parameterless declaration instead of declaring all parameters optional,
// when all parameters are optional and more than one

import { Configuration, DetailedArguments } from "yargs-parser";

declare namespace yargs {
    type BuilderCallback<T, R> =
        | ((args: Argv<T>) => PromiseLike<Argv<R>>)
        | ((args: Argv<T>) => Argv<R>)
        | ((args: Argv<T>) => void);

    type ParserConfigurationOptions = Configuration & {
        /** Sort commands alphabetically. Default is `false` */
        "sort-commands": boolean;
    };

    /**
     * The type parameter `T` is the expected shape of the parsed options.
     * `Arguments<T>` is those options plus `_` and `$0`, and an indexer falling
     * back to `unknown` for unknown options.
     *
     * For the return type / `argv` property, we create a mapped type over
     * `Arguments<T>` to simplify the inferred type signature in client code.
     */
    interface Argv<T = {}> {
        (args?: readonly string[] | string, cwd?: string): Argv<T>;

        /**
         * Set key names as equivalent such that updates to a key will propagate to aliases and vice-versa.
         *
         * Optionally `.alias()` can take an object that maps keys to aliases.
         * Each key of this object should be the canonical version of the option, and each value should be a string or an array of strings.
         */
        // Aliases for previously declared options can inherit the types of those options.
        alias<K1 extends keyof T, K2 extends string>(
            shortName: K1,
            longName: K2 | readonly K2[],
        ): Argv<T & { [key in K2]: T[K1] }>;
        alias<K1 extends keyof T, K2 extends string>(
            shortName: K2,
            longName: K1 | readonly K1[],
        ): Argv<T & { [key in K2]: T[K1] }>;
        alias(shortName: string | readonly string[], longName: string | readonly string[]): Argv<T>;
        alias(aliases: { [shortName: string]: string | readonly string[] }): Argv<T>;

        /**
         * Get the arguments as a plain old object.
         *
         * Arguments without a corresponding flag show up in the `argv._` array.
         *
         * The script name or node command is available at `argv.$0` similarly to how `$0` works in bash or perl.
         *
         * If `yargs` is executed in an environment that embeds node and there's no script name (e.g. Electron or nw.js),
         * it will ignore the first parameter since it expects it to be the script name. In order to override
         * this behavior, use `.parse(process.argv.slice(1))` instead of .argv and the first parameter won't be ignored.
         */
        argv:
            | { [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }
            | Promise<{ [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }>;

        /**
         * Tell the parser to interpret `key` as an array.
         * If `.array('foo')` is set, `--foo foo bar` will be parsed as `['foo', 'bar']` rather than as `'foo'`.
         * Also, if you use the option multiple times all the values will be flattened in one array so `--foo foo --foo bar` will be parsed as `['foo', 'bar']`
         *
         * When the option is used with a positional, use `--` to tell `yargs` to stop adding values to the array.
         */
        array<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: ToArray<T[key]> }>;
        array<K extends string>(
            key: K | readonly K[],
        ): Argv<T & { [key in K]: Array<string | number> | undefined }>;

        /**
         * Interpret `key` as a boolean. If a non-flag option follows `key` in `process.argv`, that string won't get set as the value of `key`.
         *
         * `key` will default to `false`, unless a `default(key, undefined)` is explicitly set.
         *
         * If `key` is an array, interpret all the elements as booleans.
         */
        boolean<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: boolean | undefined }>;
        boolean<K extends string>(key: K | readonly K[]): Argv<T & { [key in K]: boolean | undefined }>;

        /**
         * Check that certain conditions are met in the provided arguments.
         * @param func Called with two arguments, the parsed `argv` hash and an array of options and their aliases.
         * If `func` throws or returns a non-truthy value, show the thrown error, usage information, and exit.
         * @param global Indicates whether `check()` should be enabled both at the top-level and for each sub-command.
         */
        check(func: (argv: Arguments<T>, aliases: { [alias: string]: string }) => any, global?: boolean): Argv<T>;

        /**
         * Limit valid values for key to a predefined set of choices, given as an array or as an individual value.
         * If this method is called multiple times, all enumerated values will be merged together.
         * Choices are generally strings or numbers, and value matching is case-sensitive.
         *
         * Optionally `.choices()` can take an object that maps multiple keys to their choices.
         *
         * Choices can also be specified as choices in the object given to `option()`.
         */
        choices<K extends keyof T, C extends readonly any[]>(
            key: K,
            values: C,
        ): Argv<Omit<T, K> & { [key in K]: C[number] | undefined }>;
        choices<K extends string, C extends readonly any[]>(
            key: K,
            values: C,
        ): Argv<T & { [key in K]: C[number] | undefined }>;
        choices<C extends { [key: string]: readonly any[] }>(
            choices: C,
        ): Argv<Omit<T, keyof C> & { [key in keyof C]: C[key][number] | undefined }>;

        /**
         * Provide a synchronous function to coerce or transform the value(s) given on the command line for `key`.
         *
         * The coercion function should accept one argument, representing the parsed value from the command line, and should return a new value or throw an error.
         * The returned value will be used as the value for `key` (or one of its aliases) in `argv`.
         *
         * If the function throws, the error will be treated as a validation failure, delegating to either a custom `.fail()` handler or printing the error message in the console.
         *
         * Coercion will be applied to a value after all other modifications, such as `.normalize()`.
         *
         * Optionally `.coerce()` can take an object that maps several keys to their respective coercion function.
         *
         * You can also map the same function to several keys at one time. Just pass an array of keys as the first argument to `.coerce()`.
         *
         * If you are using dot-notion or arrays, .e.g., `user.email` and `user.password`, coercion will be applied to the final object that has been parsed
         */
        coerce<K extends keyof T, V>(
            key: K | readonly K[],
            func: (arg: any) => V,
        ): Argv<Omit<T, K> & { [key in K]: V | undefined }>;
        coerce<K extends string, V>(
            key: K | readonly K[],
            func: (arg: any) => V,
        ): Argv<T & { [key in K]: V | undefined }>;
        coerce<O extends { [key: string]: (arg: any) => any }>(
            opts: O,
        ): Argv<Omit<T, keyof O> & { [key in keyof O]: ReturnType<O[key]> | undefined }>;

        /**
         * Define the commands exposed by your application.
         * @param command Should be a string representing the command or an array of strings representing the command and its aliases.
         * @param description Use to provide a description for each command your application accepts (the values stored in `argv._`).
         * Set `description` to false to create a hidden command. Hidden commands don't show up in the help output and aren't available for completion.
         * @param [builder] Object to give hints about the options that your command accepts.
         * Can also be a function. This function is executed with a yargs instance, and can be used to provide advanced command specific help.
         *
         * Note that when `void` is returned, the handler `argv` object type will not include command-specific arguments.
         * @param [handler] Function, which will be executed with the parsed `argv` object.
         */
        command<U = T>(
            command: string | readonly string[],
            description: string,
            builder?: BuilderCallback<T, U>,
            handler?: (args: ArgumentsCamelCase<U>) => void | Promise<void>,
            middlewares?: Array<MiddlewareFunction<U>>,
            deprecated?: boolean | string,
        ): Argv<T>;
        command<O extends { [key: string]: Options }>(
            command: string | readonly string[],
            description: string,
            builder?: O,
            handler?: (args: ArgumentsCamelCase<InferredOptionTypes<O>>) => void | Promise<void>,
            middlewares?: Array<MiddlewareFunction<O>>,
            deprecated?: boolean | string,
        ): Argv<T>;
        command<U = any>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
            command: string | readonly string[],
            description: string,
            module: CommandModule<T, U>,
        ): Argv<T>;
        command<U = T>(
            command: string | readonly string[],
            showInHelp: false,
            builder?: BuilderCallback<T, U>,
            handler?: (args: ArgumentsCamelCase<U>) => void | Promise<void>,
            middlewares?: Array<MiddlewareFunction<U>>,
            deprecated?: boolean | string,
        ): Argv<T>;
        command<O extends { [key: string]: Options }>(
            command: string | readonly string[],
            showInHelp: false,
            builder?: O,
            handler?: (args: ArgumentsCamelCase<InferredOptionTypes<O>>) => void | Promise<void>,
        ): Argv<T>;
        command<U = any>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
            command: string | readonly string[],
            showInHelp: false,
            module: CommandModule<T, U>,
        ): Argv<T>;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        command<U = any>(module: CommandModule<T, U>): Argv<T>;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        command<U = any>(modules: Array<CommandModule<T, U>>): Argv<T>;

        // Advanced API
        /** Apply command modules from a directory relative to the module calling this method. */
        commandDir(dir: string, opts?: RequireDirectoryOptions): Argv<T>;

        /**
         * Enable bash/zsh-completion shortcuts for commands and options.
         *
         * If invoked without parameters, `.completion()` will make completion the command to output the completion script.
         *
         * @param [cmd] When present in `argv._`, will result in the `.bashrc` or `.zshrc` completion script being outputted.
         * To enable bash/zsh completions, concat the generated script to your `.bashrc` or `.bash_profile` (or `.zshrc` for zsh).
         * @param [description] Provide a description in your usage instructions for the command that generates the completion scripts.
         * @param [func] Rather than relying on yargs' default completion functionality, which shiver me timbers is pretty awesome, you can provide your own completion method.
         */
        completion(): Argv<T>;
        completion(cmd: string, func?: AsyncCompletionFunction): Argv<T>;
        completion(cmd: string, func?: SyncCompletionFunction): Argv<T>;
        completion(cmd: string, func?: PromiseCompletionFunction): Argv<T>;
        completion(cmd: string, func?: FallbackCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string | false, func?: AsyncCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string | false, func?: SyncCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string | false, func?: PromiseCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string | false, func?: FallbackCompletionFunction): Argv<T>;

        /**
         * Tells the parser that if the option specified by `key` is passed in, it should be interpreted as a path to a JSON config file.
         * The file is loaded and parsed, and its properties are set as arguments.
         * Because the file is loaded using Node's require(), the filename MUST end in `.json` to be interpreted correctly.
         *
         * If invoked without parameters, `.config()` will make --config the option to pass the JSON config file.
         *
         * @param [description] Provided to customize the config (`key`) option in the usage string.
         * @param [explicitConfigurationObject] An explicit configuration `object`
         */
        config(): Argv<T>;
        config(
            key: string | readonly string[],
            description?: string,
            parseFn?: (configPath: string) => object,
        ): Argv<T>;
        config(key: string | readonly string[], parseFn: (configPath: string) => object): Argv<T>;
        config(explicitConfigurationObject: object): Argv<T>;

        /**
         * Given the key `x` is set, the key `y` must not be set. `y` can either be a single string or an array of argument names that `x` conflicts with.
         *
         * Optionally `.conflicts()` can accept an object specifying multiple conflicting keys.
         */
        conflicts(key: string, value: string | readonly string[]): Argv<T>;
        conflicts(conflicts: { [key: string]: string | readonly string[] }): Argv<T>;

        /**
         * Interpret `key` as a boolean flag, but set its parsed value to the number of flag occurrences rather than `true` or `false`. Default value is thus `0`.
         */
        count<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: number }>;
        count<K extends string>(key: K | readonly K[]): Argv<T & { [key in K]: number }>;

        /**
         * Set `argv[key]` to `value` if no option was specified in `process.argv`.
         *
         * Optionally `.default()` can take an object that maps keys to default values.
         *
         * The default value can be a `function` which returns a value. The name of the function will be used in the usage string.
         *
         * Optionally, `description` can also be provided and will take precedence over displaying the value in the usage instructions.
         */
        default<K extends keyof T, V>(key: K, value: V, description?: string): Argv<Omit<T, K> & { [key in K]: V }>;
        default<K extends string, V>(key: K, value: V, description?: string): Argv<T & { [key in K]: V }>;
        default<D extends { [key: string]: any }>(defaults: D, description?: string): Argv<Omit<T, keyof D> & D>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        demand<K extends keyof T>(key: K | readonly K[], msg?: string | true): Argv<Defined<T, K>>;
        demand<K extends string>(key: K | readonly K[], msg?: string | true): Argv<T & { [key in K]: unknown }>;
        demand(key: string | readonly string[], required?: boolean): Argv<T>;
        demand(positionals: number, msg: string): Argv<T>;
        demand(positionals: number, required?: boolean): Argv<T>;
        demand(positionals: number, max: number, msg?: string): Argv<T>;

        /**
         * @param key If is a string, show the usage information and exit if key wasn't specified in `process.argv`.
         * If is an array, demand each element.
         * @param msg If string is given, it will be printed when the argument is missing, instead of the standard error message.
         * @param demand Controls whether the option is demanded; this is useful when using .options() to specify command line parameters.
         */
        demandOption<K extends keyof T>(key: K | readonly K[], msg?: string | true): Argv<Defined<T, K>>;
        demandOption<K extends string>(
            key: K | readonly K[],
            msg?: string | true,
        ): Argv<T & { [key in K]: unknown }>;
        demandOption(key: string | readonly string[], demand?: boolean): Argv<T>;

        /**
         * Demand in context of commands.
         * You can demand a minimum and a maximum number a user can have within your program, as well as provide corresponding error messages if either of the demands is not met.
         */
        demandCommand(): Argv<T>;
        demandCommand(min: number, minMsg?: string): Argv<T>;
        demandCommand(min: number, max?: number, minMsg?: string, maxMsg?: string): Argv<T>;

        /**
         * Shows a [deprecated] notice in front of the option
         */
        deprecateOption(option: string, msg?: string): Argv<T>;

        /**
         * Describe a `key` for the generated usage information.
         *
         * Optionally `.describe()` can take an object that maps keys to descriptions.
         */
        describe(key: string | readonly string[], description: string): Argv<T>;
        describe(descriptions: { [key: string]: string }): Argv<T>;

        /** Should yargs attempt to detect the os' locale? Defaults to `true`. */
        detectLocale(detect: boolean): Argv<T>;

        /**
         * Tell yargs to parse environment variables matching the given prefix and apply them to argv as though they were command line arguments.
         *
         * Use the "__" separator in the environment variable to indicate nested options. (e.g. prefix_nested__foo => nested.foo)
         *
         * If this method is called with no argument or with an empty string or with true, then all env vars will be applied to argv.
         *
         * Program arguments are defined in this order of precedence:
         * 1. Command line args
         * 2. Env vars
         * 3. Config file/objects
         * 4. Configured defaults
         *
         * Env var parsing is disabled by default, but you can also explicitly disable it by calling `.env(false)`, e.g. if you need to undo previous configuration.
         */
        env(): Argv<T>;
        env(prefix: string): Argv<T>;
        env(enable: boolean): Argv<T>;

        /** A message to print at the end of the usage instructions */
        epilog(msg: string): Argv<T>;
        /** A message to print at the end of the usage instructions */
        epilogue(msg: string): Argv<T>;

        /**
         * Give some example invocations of your program.
         * Inside `cmd`, the string `$0` will get interpolated to the current script name or node command for the present script similar to how `$0` works in bash or perl.
         * Examples will be printed out as part of the help message.
         */
        example(command: string, description: string): Argv<T>;
        example(command: ReadonlyArray<[string, string?]>): Argv<T>;

        /** Manually indicate that the program should exit, and provide context about why we wanted to exit. Follows the behavior set by `.exitProcess().` */
        exit(code: number, err: Error): void;

        /**
         * By default, yargs exits the process when the user passes a help flag, the user uses the `.version` functionality, validation fails, or the command handler fails.
         * Calling `.exitProcess(false)` disables this behavior, enabling further actions after yargs have been validated.
         */
        exitProcess(enabled: boolean): Argv<T>;

        /**
         * Method to execute when a failure occurs, rather than printing the failure message.
         * @param func Is called with the failure message that would have been printed, the Error instance originally thrown and yargs state when the failure occurred.
         */
        fail(func: ((msg: string, err: Error, yargs: Argv<T>) => any) | boolean): Argv<T>;

        /**
         * Allows to programmatically get completion choices for any line.
         * @param args An array of the words in the command line to complete.
         * @param done The callback to be called with the resulting completions.
         */
        getCompletion(
            args: readonly string[],
            done: (err: Error | null, completions: readonly string[]) => void,
        ): Argv<T>;
        getCompletion(args: readonly string[], done?: never): Promise<readonly string[]>;

        /**
         * Returns a promise which resolves to a string containing the help text.
         */
        getHelp(): Promise<string>;

        /**
         * Indicate that an option (or group of options) should not be reset when a command is executed
         *
         * Options default to being global.
         */
        global(key: string | readonly string[]): Argv<T>;

        /** Given a key, or an array of keys, places options under an alternative heading when displaying usage instructions */
        group(key: string | readonly string[], groupName: string): Argv<T>;

        /** Hides a key from the generated usage information. Unless a `--show-hidden` option is also passed with `--help` (see `showHidden()`). */
        hide(key: string): Argv<T>;

        /**
         * Configure an (e.g. `--help`) and implicit command that displays the usage string and exits the process.
         * By default yargs enables help on the `--help` option.
         *
         * Note that any multi-char aliases (e.g. `help`) used for the help option will also be used for the implicit command.
         * If there are no multi-char aliases (e.g. `h`), then all single-char aliases will be used for the command.
         *
         * If invoked without parameters, `.help()` will use `--help` as the option and help as the implicit command to trigger help output.
         *
         * @param [description] Customizes the description of the help option in the usage string.
         * @param [enableExplicit] If `false` is provided, it will disable --help.
         */
        help(): Argv<T>;
        help(enableExplicit: boolean): Argv<T>;
        help(option: string, enableExplicit: boolean): Argv<T>;
        help(option: string, description?: string, enableExplicit?: boolean): Argv<T>;

        /**
         * Given the key `x` is set, it is required that the key `y` is set.
         * y` can either be the name of an argument to imply, a number indicating the position of an argument or an array of multiple implications to associate with `x`.
         *
         * Optionally `.implies()` can accept an object specifying multiple implications.
         */
        implies(key: string, value: string | readonly string[]): Argv<T>;
        implies(implies: { [key: string]: string | readonly string[] }): Argv<T>;

        /**
         * Return the locale that yargs is currently using.
         *
         * By default, yargs will auto-detect the operating system's locale so that yargs-generated help content will display in the user's language.
         */
        locale(): string;
        /**
         * Override the auto-detected locale from the user's operating system with a static locale.
         * Note that the OS locale can be modified by setting/exporting the `LC_ALL` environment variable.
         */
        locale(loc: string): Argv<T>;

        /**
         * Define global middleware functions to be called first, in list order, for all cli command.
         * @param callbacks Can be a function or a list of functions. Each callback gets passed a reference to argv.
         * @param [applyBeforeValidation] Set to `true` to apply middleware before validation. This will execute the middleware prior to validation checks, but after parsing.
         */
        middleware(
            callbacks: MiddlewareFunction<T> | ReadonlyArray<MiddlewareFunction<T>>,
            applyBeforeValidation?: boolean,
        ): Argv<T>;

        /**
         * The number of arguments that should be consumed after a key. This can be a useful hint to prevent parsing ambiguity.
         *
         * Optionally `.nargs()` can take an object of `key`/`narg` pairs.
         */
        nargs(key: string, count: number): Argv<T>;
        nargs(nargs: { [key: string]: number }): Argv<T>;

        /** The key provided represents a path and should have `path.normalize()` applied. */
        normalize<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: ToString<T[key]> }>;
        normalize<K extends string>(key: K | readonly K[]): Argv<T & { [key in K]: string | undefined }>;

        /**
         * Tell the parser to always interpret key as a number.
         *
         * If `key` is an array, all elements will be parsed as numbers.
         *
         * If the option is given on the command line without a value, `argv` will be populated with `undefined`.
         *
         * If the value given on the command line cannot be parsed as a number, `argv` will be populated with `NaN`.
         *
         * Note that decimals, hexadecimals, and scientific notation are all accepted.
         */
        number<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: ToNumber<T[key]> }>;
        number<K extends string>(key: K | readonly K[]): Argv<T & { [key in K]: number | undefined }>;

        /**
         * Method to execute when a command finishes successfully.
         * @param func Is called with the successful result of the command that finished.
         */
        onFinishCommand(func: (result: any) => void): Argv<T>;

        /**
         * This method can be used to make yargs aware of options that could exist.
         * You can also pass an opt object which can hold further customization, like `.alias()`, `.demandOption()` etc. for that option.
         */
        option<K extends keyof T, O extends Options>(
            key: K,
            options: O,
        ): Argv<Omit<T, K> & { [key in K]: InferredOptionType<O> } & Alias<O>>;
        option<K extends string, O extends Options>(
            key: K,
            options: O,
        ): Argv<T & { [key in K]: InferredOptionType<O> } & Alias<O>>;
        option<O extends { [key: string]: Options }>(
            options: O,
        ): Argv<Omit<T, keyof O> & InferredOptionTypes<O> & Alias<O>>;

        /**
         * This method can be used to make yargs aware of options that could exist.
         * You can also pass an opt object which can hold further customization, like `.alias()`, `.demandOption()` etc. for that option.
         */
        options<K extends keyof T, O extends Options>(
            key: K,
            options: O,
        ): Argv<Omit<T, K> & { [key in K]: InferredOptionType<O> }>;
        options<K extends string, O extends Options>(
            key: K,
            options: O,
        ): Argv<T & { [key in K]: InferredOptionType<O> }>;
        options<O extends { [key: string]: Options }>(options: O): Argv<Omit<T, keyof O> & InferredOptionTypes<O>>;

        /**
         * Parse `args` instead of `process.argv`. Returns the `argv` object. `args` may either be a pre-processed argv array, or a raw argument string.
         *
         * Note: Providing a callback to parse() disables the `exitProcess` setting until after the callback is invoked.
         * @param [context]  Provides a useful mechanism for passing state information to commands
         */
        parse():
            | { [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }
            | Promise<{ [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }>;
        parse(
            arg: string | readonly string[],
            context?: object,
            parseCallback?: ParseCallback<T>,
        ):
            | { [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }
            | Promise<{ [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }>;
        parseSync(): { [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] };
        parseSync(
            arg: string | readonly string[],
            context?: object,
            parseCallback?: ParseCallback<T>,
        ): { [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] };
        parseAsync(): Promise<{ [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }>;
        parseAsync(
            arg: string | readonly string[],
            context?: object,
            parseCallback?: ParseCallback<T>,
        ): Promise<{ [key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key] }>;

        /**
         * If the arguments have not been parsed, this property is `false`.
         *
         * If the arguments have been parsed, this contain detailed parsed arguments.
         */
        parsed: DetailedArguments | false;

        /** Allows to configure advanced yargs features. */
        parserConfiguration(configuration: Partial<ParserConfigurationOptions>): Argv<T>;

        /**
         * Similar to `config()`, indicates that yargs should interpret the object from the specified key in package.json as a configuration object.
         * @param [cwd] If provided, the package.json will be read from this location
         */
        pkgConf(key: string | readonly string[], cwd?: string): Argv<T>;

        /**
         * Allows you to configure a command's positional arguments with an API similar to `.option()`.
         * `.positional()` should be called in a command's builder function, and is not available on the top-level yargs instance. If so, it will throw an error.
         */
        positional<K extends keyof T, O extends PositionalOptions>(
            key: K,
            opt: O,
        ): Argv<Omit<T, K> & { [key in K]: InferredOptionType<O> }>;
        positional<K extends string, O extends PositionalOptions>(
            key: K,
            opt: O,
        ): Argv<T & { [key in K]: InferredOptionType<O> }>;

        /** Should yargs provide suggestions regarding similar commands if no matching command is found? */
        recommendCommands(): Argv<T>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        require<K extends keyof T>(key: K | readonly K[], msg?: string | true): Argv<Defined<T, K>>;
        require(key: string, msg: string): Argv<T>;
        require(key: string, required: boolean): Argv<T>;
        require(keys: readonly number[], msg: string): Argv<T>;
        require(keys: readonly number[], required: boolean): Argv<T>;
        require(positionals: number, required: boolean): Argv<T>;
        require(positionals: number, msg: string): Argv<T>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        required<K extends keyof T>(key: K | readonly K[], msg?: string | true): Argv<Defined<T, K>>;
        required(key: string, msg: string): Argv<T>;
        required(key: string, required: boolean): Argv<T>;
        required(keys: readonly number[], msg: string): Argv<T>;
        required(keys: readonly number[], required: boolean): Argv<T>;
        required(positionals: number, required: boolean): Argv<T>;
        required(positionals: number, msg: string): Argv<T>;

        requiresArg(key: string | readonly string[]): Argv<T>;

        /** Set the name of your script ($0). Default is the base filename executed by node (`process.argv[1]`) */
        scriptName($0: string): Argv<T>;

        /**
         * Generate a bash completion script.
         * Users of your application can install this script in their `.bashrc`, and yargs will provide completion shortcuts for commands and options.
         */
        showCompletionScript(): Argv<T>;

        /**
         * Configure the `--show-hidden` option that displays the hidden keys (see `hide()`).
         * @param option If `boolean`, it enables/disables this option altogether. i.e. hidden keys will be permanently hidden if first argument is `false`.
         * If `string` it changes the key name ("--show-hidden").
         * @param description Changes the default description ("Show hidden options")
         */
        showHidden(option?: string | boolean): Argv<T>;
        showHidden(option: string, description?: string): Argv<T>;

        /**
         * Print the usage data using the console function consoleLevel for printing.
         * @param [consoleLevel='error']
         */
        showHelp(consoleLevel?: string): Argv<T>;

        /**
         * Provide the usage data as a string.
         * @param printCallback a function with a single argument.
         */
        showHelp(printCallback: (s: string) => void): Argv<T>;

        /**
         * By default, yargs outputs a usage string if any error is detected.
         * Use the `.showHelpOnFail()` method to customize this behavior.
         * @param enable If `false`, the usage string is not output.
         * @param [message] Message that is output after the error message.
         */
        showHelpOnFail(enable: boolean, message?: string): Argv<T>;

        /**
         * Print the version data using the console function consoleLevel or the specified function.
         * @param [level='error']
         */
        showVersion(level?: "error" | "log" | ((message: string) => void)): Argv<T>;

        /** Specifies either a single option key (string), or an array of options. If any of the options is present, yargs validation is skipped. */
        skipValidation(key: string | readonly string[]): Argv<T>;

        /**
         * Any command-line argument given that is not demanded, or does not have a corresponding description, will be reported as an error.
         *
         * Unrecognized commands will also be reported as errors.
         */
        strict(): Argv<T>;
        strict(enabled: boolean): Argv<T>;

        /**
         * Similar to .strict(), except that it only applies to unrecognized commands.
         * A user can still provide arbitrary options, but unknown positional commands
         * will raise an error.
         */
        strictCommands(): Argv<T>;
        strictCommands(enabled: boolean): Argv<T>;

        /**
         * Similar to `.strict()`, except that it only applies to unrecognized options. A
         * user can still provide arbitrary positional options, but unknown options
         * will raise an error.
         */
        strictOptions(): Argv<T>;
        strictOptions(enabled: boolean): Argv<T>;

        /**
         * Tell the parser logic not to interpret `key` as a number or boolean. This can be useful if you need to preserve leading zeros in an input.
         *
         * If `key` is an array, interpret all the elements as strings.
         *
         * `.string('_')` will result in non-hyphenated arguments being interpreted as strings, regardless of whether they resemble numbers.
         */
        string<K extends keyof T>(key: K | readonly K[]): Argv<Omit<T, K> & { [key in K]: ToString<T[key]> }>;
        string<K extends string>(key: K | readonly K[]): Argv<T & { [key in K]: string | undefined }>;

        // Intended to be used with '.wrap()'
        terminalWidth(): number;

        updateLocale(obj: { [key: string]: string }): Argv<T>;

        /**
         * Override the default strings used by yargs with the key/value pairs provided in obj
         *
         * If you explicitly specify a locale(), you should do so before calling `updateStrings()`.
         */
        updateStrings(obj: { [key: string]: string }): Argv<T>;

        /**
         * Set a usage message to show which commands to use.
         * Inside `message`, the string `$0` will get interpolated to the current script name or node command for the present script similar to how `$0` works in bash or perl.
         *
         * If the optional `description`/`builder`/`handler` are provided, `.usage()` acts an an alias for `.command()`.
         * This allows you to use `.usage()` to configure the default command that will be run as an entry-point to your application
         * and allows you to provide configuration for the positional arguments accepted by your program:
         */
        usage(message: string): Argv<T>;
        usage<U>(
            command: string | readonly string[],
            description: string,
            builder?: (args: Argv<T>) => Argv<U>,
            handler?: (args: ArgumentsCamelCase<U>) => void | Promise<void>,
        ): Argv<T>;
        usage<U>(
            command: string | readonly string[],
            showInHelp: boolean,
            builder?: (args: Argv<T>) => Argv<U>,
            handler?: (args: ArgumentsCamelCase<U>) => void | Promise<void>,
        ): Argv<T>;
        usage<O extends { [key: string]: Options }>(
            command: string | readonly string[],
            description: string,
            builder?: O,
            handler?: (args: ArgumentsCamelCase<InferredOptionTypes<O>>) => void | Promise<void>,
        ): Argv<T>;
        usage<O extends { [key: string]: Options }>(
            command: string | readonly string[],
            showInHelp: boolean,
            builder?: O,
            handler?: (args: ArgumentsCamelCase<InferredOptionTypes<O>>) => void | Promise<void>,
        ): Argv<T>;

        /**
         * Add an option (e.g. `--version`) that displays the version number (given by the version parameter) and exits the process.
         * By default yargs enables version for the `--version` option.
         *
         * If no arguments are passed to version (`.version()`), yargs will parse the package.json of your module and use its version value.
         *
         * If the boolean argument `false` is provided, it will disable `--version`.
         */
        version(): Argv<T>;
        version(version: string): Argv<T>;
        version(enable: boolean): Argv<T>;
        version(optionKey: string, version: string): Argv<T>;
        version(optionKey: string, description: string, version: string): Argv<T>;

        /**
         * Format usage output to wrap at columns many columns.
         *
         * By default wrap will be set to `Math.min(80, windowWidth)`. Use `.wrap(null)` to specify no column limit (no right-align).
         * Use `.wrap(yargs.terminalWidth())` to maximize the width of yargs' usage instructions.
         */
        wrap(columns: number | null): Argv<T>;
    }

    type Arguments<T = {}> = T & {
        /** Non-option arguments */
        _: Array<string | number>;
        /** The script name or node command */
        $0: string;
        /** All remaining options */
        [argName: string]: unknown;
    };

    /** Arguments type, with camelcased keys */
    type ArgumentsCamelCase<T = {}> = { [key in keyof T as key | CamelCaseKey<key>]: T[key] } & {
        /** Non-option arguments */
        _: Array<string | number>;
        /** The script name or node command */
        $0: string;
        /** All remaining options */
        [argName: string]: unknown;
    };

    interface RequireDirectoryOptions {
        /** Look for command modules in all subdirectories and apply them as a flattened (non-hierarchical) list. */
        recurse?: boolean | undefined;
        /** The types of files to look for when requiring command modules. */
        extensions?: readonly string[] | undefined;
        /**
         * A synchronous function called for each command module encountered.
         * Accepts `commandObject`, `pathToFile`, and `filename` as arguments.
         * Returns `commandObject` to include the command; any falsy value to exclude/skip it.
         */
        visit?: ((commandObject: any, pathToFile?: string, filename?: string) => any) | undefined;
        /** Whitelist certain modules */
        include?: RegExp | ((pathToFile: string) => boolean) | undefined;
        /** Blacklist certain modules. */
        exclude?: RegExp | ((pathToFile: string) => boolean) | undefined;
    }

    interface Options {
        /** string or array of strings, alias(es) for the canonical option key, see `alias()` */
        alias?: string | readonly string[] | undefined;
        /** boolean, interpret option as an array, see `array()` */
        array?: boolean | undefined;
        /**  boolean, interpret option as a boolean flag, see `boolean()` */
        boolean?: boolean | undefined;
        /** value or array of values, limit valid option arguments to a predefined set, see `choices()` */
        choices?: Choices | undefined;
        /** function, coerce or transform parsed command line values into another value, see `coerce()` */
        coerce?: ((arg: any) => any) | undefined;
        /** boolean, interpret option as a path to a JSON config file, see `config()` */
        config?: boolean | undefined;
        /** function, provide a custom config parsing function, see `config()` */
        configParser?: ((configPath: string) => object) | undefined;
        /** string or object, require certain keys not to be set, see `conflicts()` */
        conflicts?: string | readonly string[] | { [key: string]: string | readonly string[] } | undefined;
        /** boolean, interpret option as a count of boolean flags, see `count()` */
        count?: boolean | undefined;
        /** value, set a default value for the option, see `default()` */
        default?: any;
        /** string, use this description for the default value in help content, see `default()` */
        defaultDescription?: string | undefined;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        demand?: boolean | string | undefined;
        /** boolean or string, mark the argument as deprecated, see `deprecateOption()` */
        deprecate?: boolean | string | undefined;
        /** boolean or string, mark the argument as deprecated, see `deprecateOption()` */
        deprecated?: boolean | string | undefined;
        /** boolean or string, demand the option be given, with optional error message, see `demandOption()` */
        demandOption?: boolean | string | undefined;
        /** string, the option description for help content, see `describe()` */
        desc?: string | undefined;
        /** string, the option description for help content, see `describe()` */
        describe?: string | undefined;
        /** string, the option description for help content, see `describe()` */
        description?: string | undefined;
        /** boolean, indicate that this key should not be reset when a command is invoked, see `global()` */
        global?: boolean | undefined;
        /** string, when displaying usage instructions place the option under an alternative group heading, see `group()` */
        group?: string | undefined;
        /** don't display option in help output. */
        hidden?: boolean | undefined;
        /**  string or object, require certain keys to be set, see `implies()` */
        implies?: string | readonly string[] | { [key: string]: string | readonly string[] } | undefined;
        /** number, specify how many arguments should be consumed for the option, see `nargs()` */
        nargs?: number | undefined;
        /** boolean, apply path.normalize() to the option, see `normalize()` */
        normalize?: boolean | undefined;
        /** boolean, interpret option as a number, `number()` */
        number?: boolean | undefined;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        require?: boolean | string | undefined;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        required?: boolean | string | undefined;
        /** boolean, require the option be specified with a value, see `requiresArg()` */
        requiresArg?: boolean | undefined;
        /** boolean, skips validation if the option is present, see `skipValidation()` */
        skipValidation?: boolean | undefined;
        /** boolean, interpret option as a string, see `string()` */
        string?: boolean | undefined;
        type?: "array" | "count" | PositionalOptionsType | undefined;
    }

    interface PositionalOptions {
        /** string or array of strings, see `alias()` */
        alias?: string | readonly string[] | undefined;
        /** boolean, interpret option as an array, see `array()` */
        array?: boolean | undefined;
        /** value or array of values, limit valid option arguments to a predefined set, see `choices()` */
        choices?: Choices | undefined;
        /** function, coerce or transform parsed command line values into another value, see `coerce()` */
        coerce?: ((arg: any) => any) | undefined;
        /** string or object, require certain keys not to be set, see `conflicts()` */
        conflicts?: string | readonly string[] | { [key: string]: string | readonly string[] } | undefined;
        /** value, set a default value for the option, see `default()` */
        default?: any;
        /** boolean or string, demand the option be given, with optional error message, see `demandOption()` */
        demandOption?: boolean | string | undefined;
        /** string, the option description for help content, see `describe()` */
        desc?: string | undefined;
        /** string, the option description for help content, see `describe()` */
        describe?: string | undefined;
        /** string, the option description for help content, see `describe()` */
        description?: string | undefined;
        /** string or object, require certain keys to be set, see `implies()` */
        implies?: string | readonly string[] | { [key: string]: string | readonly string[] } | undefined;
        /** boolean, apply path.normalize() to the option, see normalize() */
        normalize?: boolean | undefined;
        type?: PositionalOptionsType | undefined;
    }

    // not implemented: yargs camelizes '_', but only if there's a '-' in the arg name
    // not implemented: yargs decamelizes (converts fooBar to foo-bar)

    /** Convert literal string types like 'foo-bar' to 'FooBar' */
    type PascalCase<S extends string> = string extends S ? string
        : S extends `${infer T}-${infer U}` ? `${Capitalize<T>}${PascalCase<U>}`
        : Capitalize<S>;

    /** Convert literal string types like 'foo-bar' to 'fooBar' */
    type CamelCase<S extends string> = string extends S ? string
        : S extends `${infer T}-${infer U}` ? `${T}${PascalCase<U>}`
        : S;

    /** Convert literal string types like 'foo-bar' to 'fooBar', allowing all `PropertyKey` types */
    type CamelCaseKey<K extends PropertyKey> = K extends string ? Exclude<CamelCase<K>, ""> : K;

    /** Remove keys K in T */
    type Omit<T, K> = { [key in Exclude<keyof T, K>]: T[key] };

    /** Remove undefined as a possible value for keys K in T */
    type Defined<T, K extends keyof T> = Omit<T, K> & { [key in K]: Exclude<T[key], undefined> };

    /** Convert T to T[] and T | undefined to T[] | undefined */
    type ToArray<T> = Array<Exclude<T, undefined>> | Extract<T, undefined>;

    /** Gives string[] if T is an array type, otherwise string. Preserves | undefined. */
    type ToString<T> = (Exclude<T, undefined> extends any[] ? string[] : string) | Extract<T, undefined>;

    /** Gives number[] if T is an array type, otherwise number. Preserves | undefined. */
    type ToNumber<T> = (Exclude<T, undefined> extends any[] ? number[] : number) | Extract<T, undefined>;

    // prettier-ignore
    type InferredOptionType<O extends Options | PositionalOptions> =
        // Handle special cases first
        O extends ({ coerce: (arg: any) => infer T }) ? IsRequiredOrHasDefault<O> extends true ? T : T | undefined
            : O extends (
                | { type: "count"; default: infer D }
                | { count: true; default: infer D }
            ) ? number | Exclude<D, undefined>
            : O extends (
                | { type: "count" }
                | { count: true }
            ) ? number
            // Try to infer type with InferredOptionTypePrimitive
            : IsUnknown<InferredOptionTypePrimitive<O>> extends false ? InferredOptionTypePrimitive<O>
            // Use the type of `default` as the last resort
            : O extends ({ default: infer D }) ? Exclude<D, undefined>
            : unknown;

    type Alias<O extends Options | PositionalOptions> = O extends { alias: infer T }
        ? T extends Exclude<string, T> ? { [key in T]: InferredOptionType<O> } : {}
        : {};

    // prettier-ignore
    type IsRequiredOrHasDefault<O extends Options | PositionalOptions> = O extends (
        | { required: string | true }
        | { require: string | true }
        | { demand: string | true }
        | { demandOption: string | true }
        | { default: {} }
    ) ? true
        : false;

    type IsAny<T> = 0 extends (1 & T) ? true : false;
    // prettier-ignore
    type IsUnknown<T> = IsAny<T> extends true ? false
        : unknown extends T ? true
        : false;

    // prettier-ignore
    type InferredOptionTypePrimitive<O extends Options | PositionalOptions> = O extends { default: infer D }
        ? IsRequiredOrHasDefault<O> extends true ? InferredOptionTypeInner<O> | Exclude<D, undefined>
        : InferredOptionTypeInner<O> | D
        : IsRequiredOrHasDefault<O> extends true ? InferredOptionTypeInner<O>
        : InferredOptionTypeInner<O> | undefined;

    // prettier-ignore
    type InferredOptionTypeInner<O extends Options | PositionalOptions> = O extends
        { type: "array"; choices: ReadonlyArray<infer C> } ? C[]
        : O extends { type: "array"; string: true } ? string[]
        : O extends { type: "array"; number: true } ? number[]
        : O extends { type: "array"; normalize: true } ? string[]
        : O extends { array: true; choices: ReadonlyArray<infer C> } ? C[]
        : O extends { array: true; type: "string" } ? string[]
        : O extends { array: true; type: "number" } ? number[]
        : O extends { array: true; string: true } ? string[]
        : O extends { array: true; number: true } ? number[]
        : O extends { array: true; normalize: true } ? string[]
        : O extends { choices: ReadonlyArray<infer C> } ? C
        : O extends { type: "array" } ? Array<string | number>
        : O extends { type: "boolean" } ? boolean
        : O extends { type: "number" } ? number
        : O extends { type: "string" } ? string
        : O extends { array: true } ? Array<string | number>
        : O extends { boolean: true } ? boolean
        : O extends { number: true } ? number
        : O extends { string: true } ? string
        : O extends { normalize: true } ? string
        : unknown;

    type InferredOptionTypes<O extends { [key: string]: Options }> = { [key in keyof O]: InferredOptionType<O[key]> };

    interface CommandModule<T = {}, U = {}> {
        /** array of strings (or a single string) representing aliases of `exports.command`, positional args defined in an alias are ignored */
        aliases?: readonly string[] | string | undefined;
        /** object declaring the options the command accepts, or a function accepting and returning a yargs instance */
        builder?: CommandBuilder<T, U> | undefined;
        /** string (or array of strings) that executes this command when given on the command line, first string may contain positional args */
        command?: readonly string[] | string | undefined;
        /** boolean (or string) to show deprecation notice */
        deprecated?: boolean | string | undefined;
        /** string used as the description for the command in help text, use `false` for a hidden command */
        describe?: string | false | undefined;
        /** a function which will be passed the parsed argv. */
        handler: (args: ArgumentsCamelCase<U>) => void | Promise<void>;
    }

    type ParseCallback<T = {}> = (
        err: Error | undefined,
        argv: ArgumentsCamelCase<T>,
        output: string,
    ) => void | Promise<void>;
    type CommandBuilder<T = {}, U = {}> =
        | { [key: string]: Options }
        | ((args: Argv<T>) => Argv<U>)
        | ((args: Argv<T>) => PromiseLike<Argv<U>>);
    type SyncCompletionFunction = (current: string, argv: any) => string[];
    type AsyncCompletionFunction = (
        current: string,
        argv: any,
        done: (completion: readonly string[]) => void,
    ) => void;
    type PromiseCompletionFunction = (current: string, argv: any) => Promise<string[]>;
    type FallbackCompletionFunction = (
        current: string,
        argv: any,
        completionFilter: (onCompleted?: CompletionCallback) => any,
        done: (completions: string[]) => any,
    ) => void;
    type MiddlewareFunction<T = {}> = (args: ArgumentsCamelCase<T>) => void | Promise<void>;
    type Choices = ReadonlyArray<string | number | true | undefined>;
    type PositionalOptionsType = "boolean" | "number" | "string";
    type CompletionCallback = (err: Error | null, completions: string[] | undefined) => void;

    type BuilderArguments<T extends (...args: any) => R, R = ReturnType<T>> = R extends Argv<infer X>
        ? ArgumentsCamelCase<X>
        : {} | R extends PromiseLike<Argv<infer X>> ? ArgumentsCamelCase<X>
        : {};
}

declare var yargs: yargs.Argv;
export = yargs;
