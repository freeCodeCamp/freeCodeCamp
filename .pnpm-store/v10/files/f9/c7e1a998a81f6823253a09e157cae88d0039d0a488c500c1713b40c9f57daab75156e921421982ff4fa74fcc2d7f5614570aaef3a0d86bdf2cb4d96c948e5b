# normalize-url [![Coverage Status](https://codecov.io/gh/sindresorhus/normalize-url/branch/main/graph/badge.svg)](https://codecov.io/gh/sindresorhus/normalize-url)

> [Normalize](https://en.wikipedia.org/wiki/URL_normalization) a URL

Useful when you need to display, store, deduplicate, sort, compare, etc, URLs.

**Note:** This package does **not** do URL sanitization. [Garbage in, garbage out.](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out) If you use this in a server context and accept URLs as user input, it's up to you to protect against invalid URLs, [path traversal attacks](https://owasp.org/www-community/attacks/Path_Traversal), etc.

## Install

```sh
npm install normalize-url
```

## Usage

```js
import normalizeUrl from 'normalize-url';

normalizeUrl('sindresorhus.com');
//=> 'http://sindresorhus.com'

normalizeUrl('//www.sindresorhus.com:80/../baz?b=bar&a=foo');
//=> 'http://sindresorhus.com/baz?a=foo&b=bar'
```

## API

### normalizeUrl(url, options?)

URLs with custom protocols are not normalized and just passed through by default. Supported protocols are: `https`, `http`, `file`, and `data`.

Human-friendly URLs with basic auth (for example, `user:password@sindresorhus.com`) are not handled because basic auth conflicts with custom protocols. [Basic auth URLs are also deprecated.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#access_using_credentials_in_the_url)

#### url

Type: `string`

URL to normalize, including [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

#### options

Type: `object`

##### defaultProtocol

Type: `string`\
Default: `'http'`\
Values: `'https' | 'http'`

##### normalizeProtocol

Type: `boolean`\
Default: `true`

Prepend `defaultProtocol` to the URL if it's protocol-relative.

```js
normalizeUrl('//sindresorhus.com');
//=> 'http://sindresorhus.com'

normalizeUrl('//sindresorhus.com', {normalizeProtocol: false});
//=> '//sindresorhus.com'
```

##### forceHttp

Type: `boolean`\
Default: `false`

Normalize HTTPS to HTTP.

```js
normalizeUrl('https://sindresorhus.com');
//=> 'https://sindresorhus.com'

normalizeUrl('https://sindresorhus.com', {forceHttp: true});
//=> 'http://sindresorhus.com'
```

##### forceHttps

Type: `boolean`\
Default: `false`

Normalize HTTP to HTTPS.

```js
normalizeUrl('http://sindresorhus.com');
//=> 'http://sindresorhus.com'

normalizeUrl('http://sindresorhus.com', {forceHttps: true});
//=> 'https://sindresorhus.com'
```

This option cannot be used with the `forceHttp` option at the same time.

##### stripAuthentication

Type: `boolean`\
Default: `true`

Strip the [authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) part of the URL.

```js
normalizeUrl('https://user:password@sindresorhus.com');
//=> 'https://sindresorhus.com'

normalizeUrl('https://user:password@sindresorhus.com', {stripAuthentication: false});
//=> 'https://user:password@sindresorhus.com'
```

##### stripHash

Type: `boolean`\
Default: `false`

Strip the hash part of the URL.

```js
normalizeUrl('sindresorhus.com/about.html#contact');
//=> 'http://sindresorhus.com/about.html#contact'

normalizeUrl('sindresorhus.com/about.html#contact', {stripHash: true});
//=> 'http://sindresorhus.com/about.html'
```

##### stripProtocol

Type: `boolean`\
Default: `false`

Remove the protocol from the URL: `http://sindresorhus.com` → `sindresorhus.com`.

It will only remove `https://` and `http://` protocols.

```js
normalizeUrl('https://sindresorhus.com');
//=> 'https://sindresorhus.com'

normalizeUrl('https://sindresorhus.com', {stripProtocol: true});
//=> 'sindresorhus.com'
```

##### stripTextFragment

Type: `boolean`\
Default: `true`

Strip the [text fragment](https://web.dev/text-fragments/) part of the URL.

**Note:** The text fragment will always be removed if the `stripHash` option is set to `true`, as the hash contains the text fragment.

```js
normalizeUrl('http://sindresorhus.com/about.html#:~:text=hello');
//=> 'http://sindresorhus.com/about.html#'

normalizeUrl('http://sindresorhus.com/about.html#section:~:text=hello');
//=> 'http://sindresorhus.com/about.html#section'

normalizeUrl('http://sindresorhus.com/about.html#:~:text=hello', {stripTextFragment: false});
//=> 'http://sindresorhus.com/about.html#:~:text=hello'

normalizeUrl('http://sindresorhus.com/about.html#section:~:text=hello', {stripTextFragment: false});
//=> 'http://sindresorhus.com/about.html#section:~:text=hello'
```

##### stripWWW

Type: `boolean`\
Default: `true`

Remove `www.` from the URL.

```js
normalizeUrl('http://www.sindresorhus.com');
//=> 'http://sindresorhus.com'

normalizeUrl('http://www.sindresorhus.com', {stripWWW: false});
//=> 'http://www.sindresorhus.com'
```

##### removeQueryParameters

Type: `Array<RegExp | string> | boolean`\
Default: `[/^utm_\w+/i]`

Remove query parameters that matches any of the provided strings or regexes.

```js
normalizeUrl('www.sindresorhus.com?foo=bar&ref=test_ref', {
	removeQueryParameters: ['ref']
});
//=> 'http://sindresorhus.com/?foo=bar'
```

If a boolean is provided, `true` will remove all the query parameters.

```js
normalizeUrl('www.sindresorhus.com?foo=bar', {
	removeQueryParameters: true
});
//=> 'http://sindresorhus.com'
```

`false` will not remove any query parameter.

```js
normalizeUrl('www.sindresorhus.com?foo=bar&utm_medium=test&ref=test_ref', {
	removeQueryParameters: false
});
//=> 'http://www.sindresorhus.com/?foo=bar&ref=test_ref&utm_medium=test'
```

##### keepQueryParameters

Type: `Array<RegExp | string>`\
Default: `undefined`

Keeps only query parameters that matches any of the provided strings or regexes.

**Note:** It overrides the `removeQueryParameters` option.

```js
normalizeUrl('https://sindresorhus.com?foo=bar&ref=unicorn', {
	keepQueryParameters: ['ref']
});
//=> 'https://sindresorhus.com/?ref=unicorn'
```

##### removeTrailingSlash

Type: `boolean`\
Default: `true`

Remove trailing slash.

**Note:** Trailing slash is always removed if the URL doesn't have a pathname unless the `removeSingleSlash` option is set to `false`.

```js
normalizeUrl('http://sindresorhus.com/redirect/');
//=> 'http://sindresorhus.com/redirect'

normalizeUrl('http://sindresorhus.com/redirect/', {removeTrailingSlash: false});
//=> 'http://sindresorhus.com/redirect/'

normalizeUrl('http://sindresorhus.com/', {removeTrailingSlash: false});
//=> 'http://sindresorhus.com'
```

##### removeSingleSlash

Type: `boolean`\
Default: `true`

Remove a sole `/` pathname in the output. This option is independent of `removeTrailingSlash`.

```js
normalizeUrl('https://sindresorhus.com/');
//=> 'https://sindresorhus.com'

normalizeUrl('https://sindresorhus.com/', {removeSingleSlash: false});
//=> 'https://sindresorhus.com/'
```

##### removeDirectoryIndex

Type: `boolean | Array<RegExp | string>`\
Default: `false`

Removes the default directory index file from path that matches any of the provided strings or regexes. When `true`, the regex `/^index\.[a-z]+$/` is used.

```js
normalizeUrl('www.sindresorhus.com/foo/default.php', {
	removeDirectoryIndex: [/^default\.[a-z]+$/]
});
//=> 'http://sindresorhus.com/foo'
```

##### removeExplicitPort

Type: `boolean`\
Default: `false`

Removes an explicit port number from the URL.

Port 443 is always removed from HTTPS URLs and 80 is always removed from HTTP URLs regardless of this option.

```js
normalizeUrl('sindresorhus.com:123', {
	removeExplicitPort: true
});
//=> 'http://sindresorhus.com'
```

##### sortQueryParameters

Type: `boolean`\
Default: `true`

Sorts the query parameters alphabetically by key.

```js
normalizeUrl('www.sindresorhus.com?b=two&a=one&c=three', {
	sortQueryParameters: false
});
//=> 'http://sindresorhus.com/?b=two&a=one&c=three'
```

##### removePath

Type: `boolean`\
Default: `false`

Removes the entire URL path, leaving only the domain.

```js
normalizeUrl('https://example.com/path/to/page', {
	removePath: true
});
//=> 'https://example.com'
```

##### transformPath

Type: `Function`\
Default: `false`

Custom function to transform the URL path components. The function receives an array of non-empty path components and should return a modified array.

```js
// Keep only the first path component
normalizeUrl('https://example.com/api/v1/users', {
	transformPath: (pathComponents) => pathComponents.slice(0, 1)
});
//=> 'https://example.com/api'

// Remove specific components
normalizeUrl('https://example.com/admin/users', {
	transformPath: (pathComponents) => pathComponents.filter(c => c !== 'admin')
});
//=> 'https://example.com/users'
```

## Related

- [compare-urls](https://github.com/sindresorhus/compare-urls) - Compare URLs by first normalizing them
