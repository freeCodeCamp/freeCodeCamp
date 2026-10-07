import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts string to camel case.
         *
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        camelCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts the first character of string to upper case and the remaining to lower case.
         *
         * @param string The string to capitalize.
         * @return Returns the capitalized string.
         */
        capitalize<T extends string>(string?: T): string extends T ? string : Capitalize<Lowercase<T>>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): string extends TValue ? string : Capitalize<Lowercase<TValue extends string ? TValue : never>>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): StringChain<string extends TValue ? string : Capitalize<Lowercase<TValue extends string ? TValue : never>>>;
    }

    interface LoDashStatic {
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         *
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        deburr(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Checks if string ends with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string ends with target, else false.
         */
        endsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(target?: string, position?: number): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.
         *
         * Note: No other characters are escaped. To escape additional characters use a third-party library like he.
         *
         * Though the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in HTML
         * and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens’s
         * article (under "semi-related fun fact") for more details.
         *
         * Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,
         * #102, #108, and #133 of the HTML5 Security Cheatsheet for more details.
         *
         * When working with HTML you should always quote attribute values to reduce XSS vectors.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escape
         */
        escape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.escape
         */
        escape(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
         * "{", "}", and "|" in string.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escapeRegExp(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts string to kebab case.
         *
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        kebabCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        lowerCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts the first character of `string` to lower case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        lowerFirst<T extends string = string>(string?: T): Uncapitalize<T>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): TValue extends string ? Uncapitalize<TValue> : string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): StringChain<TValue extends string ? Uncapitalize<TValue> : string>;
    }

    interface LoDashStatic {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        pad(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padEnd(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padStart(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used
         * unless value is a hexadecimal, in which case a radix of 16 is used.
         *
         * Note: This method aligns with the ES5 implementation of parseInt.
         *
         * @param string The string to convert.
         * @param radix The radix to interpret value by.
         * @return Returns the converted integer.
         */
        parseInt(string: string, radix?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Repeats the given string n times.
         *
         * @param string The string to repeat.
         * @param n The number of times to repeat the string.
         * @return Returns the repeated string.
         */
        repeat(string?: string, n?: number): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): StringChain;
    }
    type ReplaceFunction = (match: string, ...args: any[]) => string;

    interface LoDashStatic {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        replace(string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        /**
         * @see _.replace
         */
        replace(replacement: ReplaceFunction | string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): StringChain;
        /**
         * @see _.replace
         */
        replace(replacement: ReplaceFunction | string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts string to snake case.
         *
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        snakeCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to split.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        split(string: string | null | undefined, separator?: RegExp | string, limit?: number): string[];
        /**
         * @see _.split
         */
        split(string: string | null | undefined, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(separator?: RegExp | string, limit?: number): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(separator?: RegExp | string, limit?: number): CollectionChain<string>;
    }

    interface LoDashStatic {
        /**
         * Converts string to start case.
         *
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        startCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Checks if string starts with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string starts with target, else false.
         */
        startsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(target?: string, position?: number): PrimitiveChain<boolean>;
    }

    interface TemplateOptions extends TemplateSettings {
        /**
         * @see _.sourceURL
         */
        sourceURL?: string | undefined;
    }
    interface TemplateExecutor {
        (data?: object): string;
        /**
         * @see _.source
         */
        source: string;
    }
    interface LoDashStatic {
        /**
         * Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
         * HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
         * delimiters. Data properties may be accessed as free variables in the template. If a setting object is
         * provided it takes precedence over _.templateSettings values.
         *
         * Note: In the development build _.template utilizes
         * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
         * debugging.
         *
         * For more information on precompiling templates see
         * [lodash's custom builds documentation](https://lodash.com/custom-builds).
         *
         * For more information on Chrome extension sandboxes see
         * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
         *
         * @param string The template string.
         * @param options The options object.
         * @param options.escape The HTML "escape" delimiter.
         * @param options.evaluate The "evaluate" delimiter.
         * @param options.imports An object to import into the template as free variables.
         * @param options.interpolate The "interpolate" delimiter.
         * @param options.sourceURL The sourceURL of the template's compiled source.
         * @param options.variable The data object variable name.
         * @return Returns the compiled template function.
         */
        template(string?: string, options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): FunctionChain<TemplateExecutor>;
    }

    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        toLower<T extends string = string>(string?: T): Lowercase<T>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): TValue extends string ? Lowercase<TValue> : string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): StringChain<TValue extends string ? Lowercase<TValue> : string>;
    }

    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        toUpper<T extends string = string>(string?: T): Uppercase<T>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): TValue extends string ? Uppercase<TValue> : string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): StringChain<TValue extends string ? Uppercase<TValue> : string>;
    }

    interface LoDashStatic {
        /**
         * Removes leading and trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trim(string?: string, chars?: string): string;
        /**
         * @see _.trim
         */
        trim(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trim
         */
        trim(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trim
         */
        trim(chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Removes trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimEnd(string?: string, chars?: string): string;
        /**
         * @see _.trimEnd
         */
        trimEnd(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimStart(string?: string, chars?: string): string;
        /**
         * @see _.trimStart
         */
        trimStart(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): StringChain;
    }

    interface TruncateOptions {
        /**
         * @see _.length
         */
        length?: number | undefined;
        /**
         * @see _.omission
         */
        omission?: string | undefined;
        /**
         * @see _.separator
         */
        separator?: string | RegExp | undefined;
    }
    interface LoDashStatic {
        /**
         * Truncates string if it’s longer than the given maximum string length. The last characters of the truncated
         * string are replaced with the omission string which defaults to "…".
         *
         * @param string The string to truncate.
         * @param options The options object or maximum string length.
         * @return Returns the truncated string.
         */
        truncate(string?: string, options?: TruncateOptions): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): StringChain;
    }

    interface LoDashStatic {
        /**
         * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
         * in string to their corresponding characters.
         *
         * Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library
         * like he.
         *
         * @param string The string to unescape.
         * @return Returns the unescaped string.
         */
        unescape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        upperCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * Converts the first character of `string` to upper case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        upperFirst<T extends string = string>(string?: T): Capitalize<T>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): TValue extends string ? Capitalize<TValue> : string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): StringChain<TValue extends string ? Capitalize<TValue> : string>;
    }

    interface LoDashStatic {
        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of `string`.
         */
        words(string?: string, pattern?: string | RegExp): string[];
        /**
         * @see _.words
         */
        words(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string | RegExp): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string | RegExp): CollectionChain<string>;
    }
}
