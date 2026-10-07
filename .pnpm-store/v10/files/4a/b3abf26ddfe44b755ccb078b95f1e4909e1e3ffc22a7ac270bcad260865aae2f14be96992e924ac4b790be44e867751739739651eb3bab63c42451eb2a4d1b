declare module "node:punycode" {
    /**
     * The `punycode.decode()` method converts a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only
     * characters to the equivalent string of Unicode codepoints.
     *
     * ```js
     * punycode.decode('maana-pta'); // 'mañana'
     * punycode.decode('--dqo34k'); // '☃-⌘'
     * ```
     * @since v0.5.1
     */
    function decode(string: string): string;
    /**
     * The `punycode.encode()` method converts a string of Unicode codepoints to a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only characters.
     *
     * ```js
     * punycode.encode('mañana'); // 'maana-pta'
     * punycode.encode('☃-⌘'); // '--dqo34k'
     * ```
     * @since v0.5.1
     */
    function encode(string: string): string;
    /**
     * The `punycode.toUnicode()` method converts a string representing a domain name
     * containing [Punycode](https://tools.ietf.org/html/rfc3492) encoded characters into Unicode. Only the [Punycode](https://tools.ietf.org/html/rfc3492) encoded parts of the domain name are be
     * converted.
     *
     * ```js
     * // decode domain names
     * punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
     * punycode.toUnicode('xn----dqo34k.com');  // '☃-⌘.com'
     * punycode.toUnicode('example.com');       // 'example.com'
     * ```
     * @since v0.6.1
     */
    function toUnicode(domain: string): string;
    /**
     * The `punycode.toASCII()` method converts a Unicode string representing an
     * Internationalized Domain Name to [Punycode](https://tools.ietf.org/html/rfc3492). Only the non-ASCII parts of the
     * domain name will be converted. Calling `punycode.toASCII()` on a string that
     * already only contains ASCII characters will have no effect.
     *
     * ```js
     * // encode domain names
     * punycode.toASCII('mañana.com');  // 'xn--maana-pta.com'
     * punycode.toASCII('☃-⌘.com');   // 'xn----dqo34k.com'
     * punycode.toASCII('example.com'); // 'example.com'
     * ```
     * @since v0.6.1
     */
    function toASCII(domain: string): string;
    /**
     * @deprecated since v7.0.0
     * The version of the punycode module bundled in Node.js is being deprecated.
     * In a future major version of Node.js this module will be removed.
     * Users currently depending on the punycode module should switch to using
     * the userland-provided Punycode.js module instead.
     */
    const ucs2: ucs2;
    interface ucs2 {
        /**
         * @deprecated since v7.0.0
         * The version of the punycode module bundled in Node.js is being deprecated.
         * In a future major version of Node.js this module will be removed.
         * Users currently depending on the punycode module should switch to using
         * the userland-provided Punycode.js module instead.
         */
        decode(string: string): number[];
        /**
         * @deprecated since v7.0.0
         * The version of the punycode module bundled in Node.js is being deprecated.
         * In a future major version of Node.js this module will be removed.
         * Users currently depending on the punycode module should switch to using
         * the userland-provided Punycode.js module instead.
         */
        encode(codePoints: readonly number[]): string;
    }
    /**
     * @deprecated since v7.0.0
     * The version of the punycode module bundled in Node.js is being deprecated.
     * In a future major version of Node.js this module will be removed.
     * Users currently depending on the punycode module should switch to using
     * the userland-provided Punycode.js module instead.
     */
    const version: string;
}
declare module "punycode" {
    export * from "node:punycode";
}
