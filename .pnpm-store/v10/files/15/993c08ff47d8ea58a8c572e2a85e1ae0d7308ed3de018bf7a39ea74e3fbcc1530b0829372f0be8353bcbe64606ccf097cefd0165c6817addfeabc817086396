declare module "node:url" {
    import { Blob, NonSharedBuffer } from "node:buffer";
    import { ClientRequestArgs } from "node:http";
    import { ParsedUrlQuery, ParsedUrlQueryInput } from "node:querystring";
    // Input to `url.format`
    interface UrlObject {
        auth?: string | null | undefined;
        hash?: string | null | undefined;
        host?: string | null | undefined;
        hostname?: string | null | undefined;
        href?: string | null | undefined;
        pathname?: string | null | undefined;
        protocol?: string | null | undefined;
        search?: string | null | undefined;
        slashes?: boolean | null | undefined;
        port?: string | number | null | undefined;
        query?: string | null | ParsedUrlQueryInput | undefined;
    }
    // Output of `url.parse`
    interface Url {
        auth: string | null;
        hash: string | null;
        host: string | null;
        hostname: string | null;
        href: string;
        path: string | null;
        pathname: string | null;
        protocol: string | null;
        search: string | null;
        slashes: boolean | null;
        port: string | null;
        query: string | null | ParsedUrlQuery;
    }
    interface UrlWithParsedQuery extends Url {
        query: ParsedUrlQuery;
    }
    interface UrlWithStringQuery extends Url {
        query: string | null;
    }
    interface FileUrlToPathOptions {
        /**
         * `true` if the `path` should be return as a windows filepath, `false` for posix, and `undefined` for the system default.
         * @default undefined
         * @since v22.1.0
         */
        windows?: boolean | undefined;
    }
    interface PathToFileUrlOptions {
        /**
         * `true` if the `path` should be return as a windows filepath, `false` for posix, and `undefined` for the system default.
         * @default undefined
         * @since v22.1.0
         */
        windows?: boolean | undefined;
    }
    /**
     * The `url.parse()` method takes a URL string, parses it, and returns a URL
     * object.
     *
     * A `TypeError` is thrown if `urlString` is not a string.
     *
     * A `URIError` is thrown if the `auth` property is present but cannot be decoded.
     *
     * `url.parse()` uses a lenient, non-standard algorithm for parsing URL
     * strings. It is prone to security issues such as [host name spoofing](https://hackerone.com/reports/678487)
     * and incorrect handling of usernames and passwords. Do not use with untrusted
     * input. CVEs are not issued for `url.parse()` vulnerabilities. Use the
     * [WHATWG URL](https://nodejs.org/docs/latest-v25.x/api/url.html#the-whatwg-url-api) API instead, for example:
     *
     * ```js
     * function getURL(req) {
     *   const proto = req.headers['x-forwarded-proto'] || 'https';
     *   const host = req.headers['x-forwarded-host'] || req.headers.host || 'example.com';
     *   return new URL(req.url || '/', `${proto}://${host}`);
     * }
     * ```
     *
     * The example above assumes well-formed headers are forwarded from a reverse
     * proxy to your Node.js server. If you are not using a reverse proxy, you should
     * use the example below:
     *
     * ```js
     * function getURL(req) {
     *   return new URL(req.url || '/', 'https://example.com');
     * }
     * ```
     * @since v0.1.25
     * @deprecated Use the WHATWG URL API instead.
     * @param urlString The URL string to parse.
     * @param parseQueryString If `true`, the `query` property will always
     * be set to an object returned by the [`querystring`](https://nodejs.org/docs/latest-v25.x/api/querystring.html) module's `parse()`
     * method. If `false`, the `query` property on the returned URL object will be an
     * unparsed, undecoded string. **Default:** `false`.
     * @param slashesDenoteHost If `true`, the first token after the literal
     * string `//` and preceding the next `/` will be interpreted as the `host`.
     * For instance, given `//foo/bar`, the result would be
     * `{host: 'foo', pathname: '/bar'}` rather than `{pathname: '//foo/bar'}`.
     * **Default:** `false`.
     */
    function parse(
        urlString: string,
        parseQueryString?: false,
        slashesDenoteHost?: boolean,
    ): UrlWithStringQuery;
    function parse(urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery;
    function parse(urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url;
    /**
     * The `url.format()` method returns a formatted URL string derived from `urlObject`.
     *
     * ```js
     * import url from 'node:url';
     * url.format({
     *   protocol: 'https',
     *   hostname: 'example.com',
     *   pathname: '/some/path',
     *   query: {
     *     page: 1,
     *     format: 'json',
     *   },
     * });
     *
     * // => 'https://example.com/some/path?page=1&#x26;format=json'
     * ```
     *
     * If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.
     *
     * The formatting process operates as follows:
     *
     * * A new empty string `result` is created.
     * * If `urlObject.protocol` is a string, it is appended as-is to `result`.
     * * Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
     * * For all string values of `urlObject.protocol` that _do not end_ with an ASCII
     * colon (`:`) character, the literal string `:` will be appended to `result`.
     * * If either of the following conditions is true, then the literal string `//` will be appended to `result`:
     *    * `urlObject.slashes` property is true;
     *    * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or `file`;
     * * If the value of the `urlObject.auth` property is truthy, and either `urlObject.host` or `urlObject.hostname` are not `undefined`, the value of `urlObject.auth` will be coerced into a string
     * and appended to `result` followed by the literal string `@`.
     * * If the `urlObject.host` property is `undefined` then:
     *    * If the `urlObject.hostname` is a string, it is appended to `result`.
     *    * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
     *    an `Error` is thrown.
     *    * If the `urlObject.port` property value is truthy, and `urlObject.hostname` is not `undefined`:
     *          * The literal string `:` is appended to `result`, and
     *          * The value of `urlObject.port` is coerced to a string and appended to `result`.
     * * Otherwise, if the `urlObject.host` property value is truthy, the value of `urlObject.host` is coerced to a string and appended to `result`.
     * * If the `urlObject.pathname` property is a string that is not an empty string:
     *    * If the `urlObject.pathname` _does not start_ with an ASCII forward slash
     *    (`/`), then the literal string `'/'` is appended to `result`.
     *    * The value of `urlObject.pathname` is appended to `result`.
     * * Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
     * * If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result` followed by the output of calling the
     * `querystring` module's `stringify()` method passing the value of `urlObject.query`.
     * * Otherwise, if `urlObject.search` is a string:
     *    * If the value of `urlObject.search` _does not start_ with the ASCII question
     *    mark (`?`) character, the literal string `?` is appended to `result`.
     *    * The value of `urlObject.search` is appended to `result`.
     * * Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
     * * If the `urlObject.hash` property is a string:
     *    * If the value of `urlObject.hash` _does not start_ with the ASCII hash (`#`)
     *    character, the literal string `#` is appended to `result`.
     *    * The value of `urlObject.hash` is appended to `result`.
     * * Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
     * string, an `Error` is thrown.
     * * `result` is returned.
     * @since v0.1.25
     * @legacy Use the WHATWG URL API instead.
     * @param urlObject A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`.
     */
    function format(urlObject: URL, options?: URLFormatOptions): string;
    /**
     * The `url.format()` method returns a formatted URL string derived from `urlObject`.
     *
     * ```js
     * import url from 'node:url';
     * url.format({
     *   protocol: 'https',
     *   hostname: 'example.com',
     *   pathname: '/some/path',
     *   query: {
     *     page: 1,
     *     format: 'json',
     *   },
     * });
     *
     * // => 'https://example.com/some/path?page=1&#x26;format=json'
     * ```
     *
     * If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.
     *
     * The formatting process operates as follows:
     *
     * * A new empty string `result` is created.
     * * If `urlObject.protocol` is a string, it is appended as-is to `result`.
     * * Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
     * * For all string values of `urlObject.protocol` that _do not end_ with an ASCII
     * colon (`:`) character, the literal string `:` will be appended to `result`.
     * * If either of the following conditions is true, then the literal string `//` will be appended to `result`:
     *    * `urlObject.slashes` property is true;
     *    * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or `file`;
     * * If the value of the `urlObject.auth` property is truthy, and either `urlObject.host` or `urlObject.hostname` are not `undefined`, the value of `urlObject.auth` will be coerced into a string
     * and appended to `result` followed by the literal string `@`.
     * * If the `urlObject.host` property is `undefined` then:
     *    * If the `urlObject.hostname` is a string, it is appended to `result`.
     *    * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
     *    an `Error` is thrown.
     *    * If the `urlObject.port` property value is truthy, and `urlObject.hostname` is not `undefined`:
     *          * The literal string `:` is appended to `result`, and
     *          * The value of `urlObject.port` is coerced to a string and appended to `result`.
     * * Otherwise, if the `urlObject.host` property value is truthy, the value of `urlObject.host` is coerced to a string and appended to `result`.
     * * If the `urlObject.pathname` property is a string that is not an empty string:
     *    * If the `urlObject.pathname` _does not start_ with an ASCII forward slash
     *    (`/`), then the literal string `'/'` is appended to `result`.
     *    * The value of `urlObject.pathname` is appended to `result`.
     * * Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
     * * If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result` followed by the output of calling the
     * `querystring` module's `stringify()` method passing the value of `urlObject.query`.
     * * Otherwise, if `urlObject.search` is a string:
     *    * If the value of `urlObject.search` _does not start_ with the ASCII question
     *    mark (`?`) character, the literal string `?` is appended to `result`.
     *    * The value of `urlObject.search` is appended to `result`.
     * * Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
     * * If the `urlObject.hash` property is a string:
     *    * If the value of `urlObject.hash` _does not start_ with the ASCII hash (`#`)
     *    character, the literal string `#` is appended to `result`.
     *    * The value of `urlObject.hash` is appended to `result`.
     * * Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
     * string, an `Error` is thrown.
     * * `result` is returned.
     * @since v0.1.25
     * @legacy Use the WHATWG URL API instead.
     * @param urlObject A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`.
     */
    function format(urlObject: UrlObject | string): string;
    /**
     * The `url.resolve()` method resolves a target URL relative to a base URL in a
     * manner similar to that of a web browser resolving an anchor tag.
     *
     * ```js
     * import url from 'node:url';
     * url.resolve('/one/two/three', 'four');         // '/one/two/four'
     * url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
     * url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
     * ```
     *
     * To achieve the same result using the WHATWG URL API:
     *
     * ```js
     * function resolve(from, to) {
     *   const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
     *   if (resolvedUrl.protocol === 'resolve:') {
     *     // `from` is a relative URL.
     *     const { pathname, search, hash } = resolvedUrl;
     *     return pathname + search + hash;
     *   }
     *   return resolvedUrl.toString();
     * }
     *
     * resolve('/one/two/three', 'four');         // '/one/two/four'
     * resolve('http://example.com/', '/one');    // 'http://example.com/one'
     * resolve('http://example.com/one', '/two'); // 'http://example.com/two'
     * ```
     * @since v0.1.25
     * @legacy Use the WHATWG URL API instead.
     * @param from The base URL to use if `to` is a relative URL.
     * @param to The target URL to resolve.
     */
    function resolve(from: string, to: string): string;
    /**
     * Returns the [Punycode](https://tools.ietf.org/html/rfc5891#section-4.4) ASCII serialization of the `domain`. If `domain` is an
     * invalid domain, the empty string is returned.
     *
     * It performs the inverse operation to {@link domainToUnicode}.
     *
     * ```js
     * import url from 'node:url';
     *
     * console.log(url.domainToASCII('español.com'));
     * // Prints xn--espaol-zwa.com
     * console.log(url.domainToASCII('中文.com'));
     * // Prints xn--fiq228c.com
     * console.log(url.domainToASCII('xn--iñvalid.com'));
     * // Prints an empty string
     * ```
     * @since v7.4.0, v6.13.0
     */
    function domainToASCII(domain: string): string;
    /**
     * Returns the Unicode serialization of the `domain`. If `domain` is an invalid
     * domain, the empty string is returned.
     *
     * It performs the inverse operation to {@link domainToASCII}.
     *
     * ```js
     * import url from 'node:url';
     *
     * console.log(url.domainToUnicode('xn--espaol-zwa.com'));
     * // Prints español.com
     * console.log(url.domainToUnicode('xn--fiq228c.com'));
     * // Prints 中文.com
     * console.log(url.domainToUnicode('xn--iñvalid.com'));
     * // Prints an empty string
     * ```
     * @since v7.4.0, v6.13.0
     */
    function domainToUnicode(domain: string): string;
    /**
     * This function ensures the correct decodings of percent-encoded characters as
     * well as ensuring a cross-platform valid absolute path string.
     *
     * ```js
     * import { fileURLToPath } from 'node:url';
     *
     * const __filename = fileURLToPath(import.meta.url);
     *
     * new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
     * fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)
     *
     * new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
     * fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)
     *
     * new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
     * fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)
     *
     * new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
     * fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
     * ```
     *
     * **Security Considerations:**
     *
     * This function decodes percent-encoded characters, including encoded dot-segments
     * (`%2e` as `.` and `%2e%2e` as `..`), and then normalizes the resulting path.
     * This means that encoded directory traversal sequences (such as `%2e%2e`) are
     * decoded and processed as actual path traversal, even though encoded slashes
     * (`%2F`, `%5C`) are correctly rejected.
     *
     * **Applications must not rely on `fileURLToPath()` alone to prevent directory
     * traversal attacks.** Always perform explicit path validation and security checks
     * on the returned path value to ensure it remains within expected boundaries
     * before using it for file system operations.
     * @since v10.12.0
     * @param url The file URL string or URL object to convert to a path.
     * @return The fully-resolved platform-specific Node.js file path.
     */
    function fileURLToPath(url: string | URL, options?: FileUrlToPathOptions): string;
    /**
     * Like `url.fileURLToPath(...)` except that instead of returning a string
     * representation of the path, a `Buffer` is returned. This conversion is
     * helpful when the input URL contains percent-encoded segments that are
     * not valid UTF-8 / Unicode sequences.
     *
     * **Security Considerations:**
     *
     * This function has the same security considerations as `url.fileURLToPath()`.
     * It decodes percent-encoded characters, including encoded dot-segments
     * (`%2e` as `.` and `%2e%2e` as `..`), and normalizes the path. **Applications
     * must not rely on this function alone to prevent directory traversal attacks.**
     * Always perform explicit path validation on the returned buffer value before
     * using it for file system operations.
     * @since v24.3.0
     * @param url The file URL string or URL object to convert to a path.
     * @returns The fully-resolved platform-specific Node.js file path
     * as a `Buffer`.
     */
    function fileURLToPathBuffer(url: string | URL, options?: FileUrlToPathOptions): NonSharedBuffer;
    /**
     * This function ensures that `path` is resolved absolutely, and that the URL
     * control characters are correctly encoded when converting into a File URL.
     *
     * ```js
     * import { pathToFileURL } from 'node:url';
     *
     * new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
     * pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)
     *
     * new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
     * pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
     * ```
     * @since v10.12.0
     * @param path The path to convert to a File URL.
     * @return The file URL object.
     */
    function pathToFileURL(path: string, options?: PathToFileUrlOptions): URL;
    /**
     * This utility function converts a URL object into an ordinary options object as
     * expected by the `http.request()` and `https.request()` APIs.
     *
     * ```js
     * import { urlToHttpOptions } from 'node:url';
     * const myURL = new URL('https://a:b@測試?abc#foo');
     *
     * console.log(urlToHttpOptions(myURL));
     * /*
     * {
     *   protocol: 'https:',
     *   hostname: 'xn--g6w251d',
     *   hash: '#foo',
     *   search: '?abc',
     *   pathname: '/',
     *   path: '/?abc',
     *   href: 'https://a:b@xn--g6w251d/?abc#foo',
     *   auth: 'a:b'
     * }
     *
     * ```
     * @since v15.7.0, v14.18.0
     * @param url The `WHATWG URL` object to convert to an options object.
     * @return Options object
     */
    function urlToHttpOptions(url: URL): ClientRequestArgs;
    interface URLFormatOptions {
        /**
         * `true` if the serialized URL string should include the username and password, `false` otherwise.
         * @default true
         */
        auth?: boolean | undefined;
        /**
         * `true` if the serialized URL string should include the fragment, `false` otherwise.
         * @default true
         */
        fragment?: boolean | undefined;
        /**
         * `true` if the serialized URL string should include the search query, `false` otherwise.
         * @default true
         */
        search?: boolean | undefined;
        /**
         * `true` if Unicode characters appearing in the host component of the URL string should be encoded directly as opposed to
         * being Punycode encoded.
         * @default false
         */
        unicode?: boolean | undefined;
    }
    // #region web types
    type URLPatternInput = string | URLPatternInit;
    interface URLPatternComponentResult {
        input: string;
        groups: Record<string, string | undefined>;
    }
    interface URLPatternInit {
        protocol?: string;
        username?: string;
        password?: string;
        hostname?: string;
        port?: string;
        pathname?: string;
        search?: string;
        hash?: string;
        baseURL?: string;
    }
    interface URLPatternOptions {
        ignoreCase?: boolean;
    }
    interface URLPatternResult {
        inputs: URLPatternInput[];
        protocol: URLPatternComponentResult;
        username: URLPatternComponentResult;
        password: URLPatternComponentResult;
        hostname: URLPatternComponentResult;
        port: URLPatternComponentResult;
        pathname: URLPatternComponentResult;
        search: URLPatternComponentResult;
        hash: URLPatternComponentResult;
    }
    interface URL {
        hash: string;
        host: string;
        hostname: string;
        href: string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        readonly searchParams: URLSearchParams;
        username: string;
        toJSON(): string;
    }
    var URL: {
        prototype: URL;
        new(url: string | URL, base?: string | URL): URL;
        canParse(input: string | URL, base?: string | URL): boolean;
        createObjectURL(blob: Blob): string;
        parse(input: string | URL, base?: string | URL): URL | null;
        revokeObjectURL(id: string): void;
    };
    interface URLPattern {
        readonly hasRegExpGroups: boolean;
        readonly hash: string;
        readonly hostname: string;
        readonly password: string;
        readonly pathname: string;
        readonly port: string;
        readonly protocol: string;
        readonly search: string;
        readonly username: string;
        exec(input?: URLPatternInput, baseURL?: string | URL): URLPatternResult | null;
        test(input?: URLPatternInput, baseURL?: string | URL): boolean;
    }
    var URLPattern: {
        prototype: URLPattern;
        new(input: URLPatternInput, baseURL: string | URL, options?: URLPatternOptions): URLPattern;
        new(input?: URLPatternInput, options?: URLPatternOptions): URLPattern;
    };
    interface URLSearchParams {
        readonly size: number;
        append(name: string, value: string): void;
        delete(name: string, value?: string): void;
        get(name: string): string | null;
        getAll(name: string): string[];
        has(name: string, value?: string): boolean;
        set(name: string, value: string): void;
        sort(): void;
        forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
        [Symbol.iterator](): URLSearchParamsIterator<[string, string]>;
        entries(): URLSearchParamsIterator<[string, string]>;
        keys(): URLSearchParamsIterator<string>;
        values(): URLSearchParamsIterator<string>;
    }
    var URLSearchParams: {
        prototype: URLSearchParams;
        new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    };
    interface URLSearchParamsIterator<T> extends NodeJS.Iterator<T, NodeJS.BuiltinIteratorReturn, unknown> {
        [Symbol.iterator](): URLSearchParamsIterator<T>;
    }
    // #endregion
}
declare module "url" {
    export * from "node:url";
}
