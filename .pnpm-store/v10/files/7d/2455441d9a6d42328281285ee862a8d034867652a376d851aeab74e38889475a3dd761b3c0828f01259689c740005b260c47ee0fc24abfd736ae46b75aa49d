// Type definitions for yargs-parser 21.0
// Project: https://github.com/yargs/yargs-parser#readme
// Definitions by: Miles Johnson <https://github.com/milesj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace yargsParser {
    interface Arguments {
        /** Non-option arguments */
        _: Array<string | number>;
        /** Arguments after the end-of-options flag `--` */
        "--"?: Array<string | number>;
        /** All remaining options */
        [argName: string]: any;
    }

    interface DetailedArguments {
        /** An object representing the parsed value of `args` */
        argv: Arguments;
        /** Populated with an error object if an exception occurred during parsing. */
        error: Error | null;
        /** The inferred list of aliases built by combining lists in opts.alias. */
        aliases: { [alias: string]: string[] };
        /** Any new aliases added via camel-case expansion. */
        newAliases: { [alias: string]: boolean };
        /** The configuration loaded from the yargs stanza in package.json. */
        configuration: Configuration;
    }

    interface Configuration {
        /** Should variables prefixed with --no be treated as negations? Default is `true` */
        "boolean-negation": boolean;
        /** Should hyphenated arguments be expanded into camel-case aliases? Default is `true` */
        "camel-case-expansion": boolean;
        /** Should arrays be combined when provided by both command line arguments and a configuration file. Default is `false`  */
        "combine-arrays": boolean;
        /** Should keys that contain . be treated as objects? Default is `true` */
        "dot-notation": boolean;
        /** Should arguments be coerced into an array when duplicated. Default is `true` */
        "duplicate-arguments-array": boolean;
        /** Should array arguments be coerced into a single array when duplicated. Default is `true` */
        "flatten-duplicate-arrays": boolean;
        /** Should arrays consume more than one positional argument following their flag. Default is `true` */
        "greedy-arrays": boolean;
        /** Should nargs consume dash options as well as positional arguments. Default is `false` */
        "nargs-eats-options": boolean;
        /** Should parsing stop at the first text argument? This is similar to how e.g. ssh parses its command line. Default is `false` */
        "halt-at-non-option": boolean;
        /** The prefix to use for negated boolean variables. Default is `'no-'` */
        "negation-prefix": string;
        /** Should keys that look like numbers be treated as such? Default is `true` */
        "parse-numbers": boolean;
        /** Should positional keys that look like numbers be treated as such? Default is `true` */
        "parse-positional-numbers": boolean;
        /** Should unparsed flags be stored in -- or _. Default is `false` */
        "populate--": boolean;
        /** Should a placeholder be added for keys not set via the corresponding CLI argument? Default is `false` */
        "set-placeholder-key": boolean;
        /** Should a group of short-options be treated as boolean flags? Default is `true` */
        "short-option-groups": boolean;
        /** Should aliases be removed before returning results? Default is `false` */
        "strip-aliased": boolean;
        /** Should dashed keys be removed before returning results? This option has no effect if camel-case-expansion is disabled. Default is `false` */
        "strip-dashed": boolean;
        /** Should unknown options be treated like regular arguments? An unknown option is one that is not configured in opts. Default is `false` */
        "unknown-options-as-args": boolean;
    }

    interface Options {
        /** An object representing the set of aliases for a key: `{ alias: { foo: ['f']} }`. */
        alias?: { [key: string]: string | string[] } | undefined;
        /**
         * Indicate that keys should be parsed as an array: `{ array: ['foo', 'bar'] }`.
         * Indicate that keys should be parsed as an array and coerced to booleans / numbers:
         * { array: [ { key: 'foo', boolean: true }, {key: 'bar', number: true} ] }`.
         */
        array?:
            | string[]
            | Array<{ key: string; boolean?: boolean | undefined; number?: boolean | undefined }>
            | undefined;
        /** Arguments should be parsed as booleans: `{ boolean: ['x', 'y'] }`. */
        boolean?: string[] | undefined;
        /** Indicate a key that represents a path to a configuration file (this file will be loaded and parsed). */
        config?: string | string[] | { [key: string]: boolean } | undefined;
        /** Provide configuration options to the yargs-parser. */
        configuration?: Partial<Configuration> | undefined;
        /**
         * Provide a custom synchronous function that returns a coerced value from the argument provided (or throws an error), e.g.
         * `{ coerce: { foo: function (arg) { return modifiedArg } } }`.
         */
        coerce?: { [key: string]: (arg: any) => any } | undefined;
        /** Indicate a key that should be used as a counter, e.g., `-vvv = {v: 3}`. */
        count?: string[] | undefined;
        /** Provide default values for keys: `{ default: { x: 33, y: 'hello world!' } }`. */
        default?: { [key: string]: any } | undefined;
        /** Environment variables (`process.env`) with the prefix provided should be parsed. */
        envPrefix?: string | undefined;
        /** Specify that a key requires n arguments: `{ narg: {x: 2} }`. */
        narg?: { [key: string]: number } | undefined;
        /** `path.normalize()` will be applied to values set to this key. */
        normalize?: string[] | undefined;
        /** Keys should be treated as strings (even if they resemble a number `-x 33`). */
        string?: string[] | undefined;
        /** Keys should be treated as numbers. */
        number?: string[] | undefined;
    }

    interface Parser {
        (argv: string | string[], opts?: Options): Arguments;
        detailed(argv: string | string[], opts?: Options): DetailedArguments;
        camelCase(str: string): string;
        decamelize(str: string, joinString?: string): string;
        looksLikeNumber(value: string | number | null | undefined): boolean;
    }
}

declare var yargsParser: yargsParser.Parser;
export = yargsParser;
