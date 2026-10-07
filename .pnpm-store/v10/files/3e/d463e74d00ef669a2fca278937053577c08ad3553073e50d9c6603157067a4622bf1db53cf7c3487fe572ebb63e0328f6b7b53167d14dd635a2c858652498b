# normalize-url [![Coverage Status](https://codecov.io/gh/sindresorhus/normalize-url/branch/main/graph/badge.svg)](https://codecov.io/gh/sindresorhus/normalize-url)

> [Normalize](https://en.wikipedia.org/wiki/URL_normalization) a URL

Useful when you need to display, store, deduplicate, sort, compare, etc, URLs.

## Install

```
$ npm install normalize-url
```

*If you need to use this in the browser, use version 4: `npm i normalize-url@4`*

## Usage

```js
const normalizeUrl = require('normalize-url');

normalizeUrl('sindresorhus.com');
//=> 'http://sindresorhus.com'

normalizeUrl('//www.sindresorhus.com:80/../baz?b=bar&a=foo');
//=> 'http://sindresorhus.com/baz?a=foo&b=bar'
```

## API

### normalizeUrl(url, options?)

#### url

Type: `string`

URL to normalize, including [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

#### options

Type: `object`

##### defaultProtocol

Type: `string`\
Default: `http:`

##### normalizeProtocol

Type: `boolean`\
Default: `true`

Prepend `defaultProtocol` to the URL if it's protocol-relative.

```js
normalizeUrl('//sindresorhus.com:80/');
//=> 'http://sindresorhus.com'

normalizeUrl('//sindresorhus.com:80/', {normalizeProtocol: false});
//=> '//sindresorhus.com'
```

##### forceHttp

Type: `boolean`\
Default: `false`

Normalize `https:` to `http:`.

```js
normalizeUrl('https://sindresorhus.com:80/');
//=> 'https://sindresorhus.com'

normalizeUrl('https://sindresorhus.com:80/', {forceHttp: true});
//=> 'http://sindresorhus.com'
```

##### forceHttps

Type: `boolean`\
Default: `false`

Normalize `http:` to `https:`.

```js
normalizeUrl('https://sindresorhus.com:80/');
//=> 'https://sindresorhus.com'

normalizeUrl('http://sindresorhus.com:80/', {forceHttps: true});
//=> 'https://sindresorhus.com'
```

This option can't be used with the `forceHttp` option at the same time.

##### stripAuthentication

Type: `boolean`\
Default: `true`

Strip the [authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) part of the URL.

```js
normalizeUrl('user:password@sindresorhus.com');
//=> 'https://sindresorhus.com'

normalizeUrl('user:password@sindresorhus.com', {stripAuthentication: false});
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

Remove HTTP(S) protocol from the URL: `http://sindresorhus.com` → `sindresorhus.com`.

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

Remove a sole `/` pathname in the output. This option is independant of `removeTrailingSlash`.

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

## Related

- [compare-urls](https://github.com/sindresorhus/compare-urls) - Compare URLs by first normalizing them

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-normalize-url?utm_source=npm-normalize-url&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
