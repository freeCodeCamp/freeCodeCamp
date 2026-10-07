// Type definitions for jsesc 2.5.2
// Project: https://github.com/mathiasbynens/jsesc
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Lyanbin <https://github.com/Lyanbin>
//                 Colin Reeder <https://github.com/vpzomtrrfrt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function jsesc(argument: any, opts?: jsesc.Opts): string;

declare namespace jsesc {
    var version: string;

    interface Opts {
        /**
         * The default value for the quotes option is 'single'. This means that any occurrences of ' in the input
         * string are escaped as \', so that the output can be used in a string literal wrapped in single quotes.
         */
        quotes?: 'single' | 'double' | 'backtick';

        /**
         * The default value for the numbers option is 'decimal'. This means that any numeric values are represented
         * using decimal integer literals. Other valid options are binary, octal, and hexadecimal, which result in
         * binary integer literals, octal integer literals, and hexadecimal integer literals, respectively.
         */
        numbers?: 'binary' | 'octal' | 'decimal' | 'hexadecimal';

        /**
         * The wrap option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is a valid JavaScript string literal wrapped in quotes. The type of quotes can be specified through
         * the quotes setting.
         */
        wrap?: boolean;

        /**
         * The es6 option takes a boolean value (true or false), and defaults to false (disabled). When enabled, any
         * astral Unicode symbols in the input are escaped using ECMAScript 6 Unicode code point escape sequences
         * instead of using separate escape sequences for each surrogate half. If backwards compatibility with ES5
         * environments is a concern, don’t enable this setting. If the json setting is enabled, the value for the es6
         * setting is ignored (as if it was false).
         */
        es6?: boolean;

        /**
         * The escapeEverything option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, all the symbols in the output are escaped — even printable ASCII symbols.
         */
        escapeEverything?: boolean;

        /**
         * The minimal option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * only a limited set of symbols in the output are escaped: \0, \b, \t, \n, \f, \r, \\, \u2028, \u2029.
         */
        minimal?: boolean;

        /**
         * The isScriptContext option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, occurrences of </script and </style in the output are escaped as <\/script and <\/style, and <!--
         * is escaped as \x3C!-- (or \u003C!-- when the json option is enabled). This setting is useful when jsesc’s
         * output ends up as part of a <script> or <style> element in an HTML document.
         */
        isScriptContext?: boolean;

        /**
         * The compact option takes a boolean value (true or false), and defaults to true (enabled). When enabled,
         * the output for arrays and objects is as compact as possible; it’s not formatted nicely.
         */
        compact?: boolean;

        /**
         * The indent option takes a string value, and defaults to '\t'. When the compact setting is enabled (true),
         * the value of the indent option is used to format the output for arrays and objects.
         */
        indent?: string;

        /**
         * The indentLevel option takes a numeric value, and defaults to 0. It represents the current indentation level,
         * i.e. the number of times the value of the indent option is repeated.
         */
        indentLevel?: number;

        /**
         * The json option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is valid JSON. Hexadecimal character escape sequences and the \v or \0 escape sequences are not used.
         * Setting json: true implies quotes: 'double', wrap: true, es6: false, although these values can still be
         * overridden if needed — but in such cases, the output won’t be valid JSON anymore.
         */
        json?: boolean;

        /**
         * The lowercaseHex option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * any alphabetical hexadecimal digits in escape sequences as well as any hexadecimal integer literals (see the
         * numbers option) in the output are in lowercase.
         */
        lowercaseHex?: boolean;
    }
}

export = jsesc;
