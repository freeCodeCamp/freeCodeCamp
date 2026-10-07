# query-string

> Parse and stringify URL [query strings](https://en.wikipedia.org/wiki/Query_string)

<br>

---

<div align="center">
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">My open source work is supported by the community</a>
			</sup>
		</p>
		<sup>Special thanks to:</sup>
		<br>
		<br>
		<a href="https://standardresume.co/tech">
			<img src="https://sindresorhus.com/assets/thanks/standard-resume-logo.svg" width="200"/>
		</a>
	</p>
</div>

---

<br>

## Install

```
$ npm install query-string
```

This module targets Node.js 6 or later and the latest version of Chrome, Firefox, and Safari. If you want support for older browsers, or, if your project is using create-react-app v1, use version 5: `npm install query-string@5`.

## Usage

```js
const queryString = require('query-string');

console.log(location.search);
//=> '?foo=bar'

const parsed = queryString.parse(location.search);
console.log(parsed);
//=> {foo: 'bar'}

console.log(location.hash);
//=> '#token=bada55cafe'

const parsedHash = queryString.parse(location.hash);
console.log(parsedHash);
//=> {token: 'bada55cafe'}

parsed.foo = 'unicorn';
parsed.ilike = 'pizza';

const stringified = queryString.stringify(parsed);
//=> 'foo=unicorn&ilike=pizza'

location.search = stringified;
// note that `location.search` automatically prepends a question mark
console.log(location.search);
//=> '?foo=unicorn&ilike=pizza'
```

## API

### .parse(string, options?)

Parse a query string into an object. Leading `?` or `#` are ignored, so you can pass `location.search` or `location.hash` directly.

The returned object is created with [`Object.create(null)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and thus does not have a `prototype`.

#### options

Type: `object`

##### decode

Type: `boolean`\
Default: `true`

Decode the keys and values. URL components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).

##### arrayFormat

Type: `string`\
Default: `'none'`

- `'bracket'`: Parse arrays with bracket representation:

```js
const queryString = require('query-string');

queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
//=> {foo: ['1', '2', '3']}
```

- `'index'`: Parse arrays with index representation:

```js
const queryString = require('query-string');

queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'});
//=> {foo: ['1', '2', '3']}
```

- `'comma'`: Parse arrays with elements separated by comma:

```js
const queryString = require('query-string');

queryString.parse('foo=1,2,3', {arrayFormat: 'comma'});
//=> {foo: ['1', '2', '3']}
```

- `'separator'`: Parse arrays with elements separated by a custom character:

```js
const queryString = require('query-string');

queryString.parse('foo=1|2|3', {arrayFormat: 'separator', arrayFormatSeparator: '|'});
//=> {foo: ['1', '2', '3']}
```

- `'none'`: Parse arrays with elements using duplicate keys:

```js
const queryString = require('query-string');

queryString.parse('foo=1&foo=2&foo=3');
//=> {foo: ['1', '2', '3']}
```

##### arrayFormatSeparator

Type: `string`\
Default: `','`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

##### sort

Type: `Function | boolean`\
Default: `true`

Supports both `Function` as a custom sorting function or `false` to disable sorting.

##### parseNumbers

Type: `boolean`\
Default: `false`

```js
const queryString = require('query-string');

queryString.parse('foo=1', {parseNumbers: true});
//=> {foo: 1}
```

Parse the value as a number type instead of string type if it's a number.

##### parseBooleans

Type: `boolean`\
Default: `false`

```js
const queryString = require('query-string');

queryString.parse('foo=true', {parseBooleans: true});
//=> {foo: true}
```

Parse the value as a boolean type instead of string type if it's a boolean.

### .stringify(object, options?)

Stringify an object into a query string and sorting the keys.

#### options

Type: `object`

##### strict

Type: `boolean`\
Default: `true`

Strictly encode URI components with [strict-uri-encode](https://github.com/kevva/strict-uri-encode). It uses [encodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to false. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.

##### encode

Type: `boolean`\
Default: `true`

[URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.

##### arrayFormat

Type: `string`\
Default: `'none'`

- `'bracket'`: Serialize arrays using bracket representation:

```js
const queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket'});
//=> 'foo[]=1&foo[]=2&foo[]=3'
```

- `'index'`: Serialize arrays using index representation:

```js
const queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'index'});
//=> 'foo[0]=1&foo[1]=2&foo[2]=3'
```

- `'comma'`: Serialize arrays by separating elements with comma:

```js
const queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'comma'});
//=> 'foo=1,2,3'
```

- `'none'`: Serialize arrays by using duplicate keys:

```js
const queryString = require('query-string');

queryString.stringify({foo: [1, 2, 3]});
//=> 'foo=1&foo=2&foo=3'
```

##### arrayFormatSeparator

Type: `string`\
Default: `','`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

##### sort

Type: `Function | boolean`

Supports both `Function` as a custom sorting function or `false` to disable sorting.

```js
const queryString = require('query-string');

const order = ['c', 'a', 'b'];

queryString.stringify({a: 1, b: 2, c: 3}, {
	sort: (a, b) => order.indexOf(a) - order.indexOf(b)
});
//=> 'c=3&a=1&b=2'
```

```js
const queryString = require('query-string');

queryString.stringify({b: 1, c: 2, a: 3}, {sort: false});
//=> 'b=1&c=2&a=3'
```

If omitted, keys are sorted using `Array#sort()`, which means, converting them to strings and comparing strings in Unicode code point order.

##### skipNull

Skip keys with `null` as the value.

Note that keys with `undefined` as the value are always skipped.

Type: `boolean`\
Default: `false`

```js
const queryString = require('query-string');

queryString.stringify({a: 1, b: undefined, c: null, d: 4}, {
	skipNull: true
});
//=> 'a=1&d=4'
```

```js
const queryString = require('query-string');

queryString.stringify({a: undefined, b: null}, {
	skipNull: true
});
//=> ''
```

##### skipEmptyString

Skip keys with an empty string as the value.

Type: `boolean`\
Default: `false`

```js
const queryString = require('query-string');

queryString.stringify({a: 1, b: '', c: '', d: 4}, {
	skipEmptyString: true
});
//=> 'a=1&d=4'
```

```js
const queryString = require('query-string');

queryString.stringify({a: '', b: ''}, {
	skipEmptyString: true
});
//=> ''
```

### .extract(string)

Extract a query string from a URL that can be passed into `.parse()`.

Note: This behaviour can be changed with the `skipNull` option.

### .parseUrl(string, options?)

Extract the URL and the query string as an object.

Returns an object with a `url` and `query` property.

If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.

```js
const queryString = require('query-string');

queryString.parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

#### options

Type: `object`

The options are the same as for `.parse()`.

Extra options are as below.

##### parseFragmentIdentifier

Parse the fragment identifier from the URL.

Type: `boolean`\
Default: `false`

```js
const queryString = require('query-string');

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

### .stringifyUrl(object, options?)

Stringify an object into a URL with a query string and sorting the keys. The inverse of [`.parseUrl()`](https://github.com/sindresorhus/query-string#parseurlstring-options)

The `options` are the same as for `.stringify()`.

Returns a string with the URL and a query string.

Query items in the `query` property overrides queries in the `url` property.

The `fragmentIdentifier` property overrides the fragment identifier in the `url` property.

```js
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({
	url: 'https://foo.bar',
	query: {
		top: 'foo'
	},
	fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'
```

#### object

Type: `object`

##### url

Type: `string`

The URL to stringify.

##### query

Type: `object`

Query items to add to the URL.

### .pick(url, keys, options?)
### .pick(url, filter, options?)

Pick query parameters from a URL.

Returns a string with the new URL.

```js
const queryString = require('query-string');

queryString.pick('https://foo.bar?foo=1&bar=2#hello', ['foo']);
//=> 'https://foo.bar?foo=1#hello'

queryString.pick('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true});
//=> 'https://foo.bar?bar=2#hello'
```

### .exclude(url, keys, options?)
### .exclude(url, filter, options?)

Exclude query parameters from a URL.

Returns a string with the new URL.

```js
const queryString = require('query-string');

queryString.exclude('https://foo.bar?foo=1&bar=2#hello', ['foo']);
//=> 'https://foo.bar?bar=2#hello'

queryString.exclude('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true});
//=> 'https://foo.bar?foo=1#hello'
```

#### url

Type: `string`

The URL containing the query parameters to filter.

#### keys

Type: `string[]`

The names of the query parameters to filter based on the function used.

#### filter

Type: `(key, value) => boolean`

A filter predicate that will be provided the name of each query parameter and its value. The `parseNumbers` and `parseBooleans` options also affect `value`.

#### options

Type: `object`

[Parse options](#options) and [stringify options](#options-1).

## Nesting

This module intentionally doesn't support nesting as it's not spec'd and varies between implementations, which causes a lot of [edge cases](https://github.com/visionmedia/node-querystring/issues).

You're much better off just converting the object to a JSON string:

```js
const queryString = require('query-string');

queryString.stringify({
	foo: 'bar',
	nested: JSON.stringify({
		unicorn: 'cake'
	})
});
//=> 'foo=bar&nested=%7B%22unicorn%22%3A%22cake%22%7D'
```

However, there is support for multiple instances of the same key:

```js
const queryString = require('query-string');

queryString.parse('likes=cake&name=bob&likes=icecream');
//=> {likes: ['cake', 'icecream'], name: 'bob'}

queryString.stringify({color: ['taupe', 'chartreuse'], id: '515'});
//=> 'color=taupe&color=chartreuse&id=515'
```

## Falsy values

Sometimes you want to unset a key, or maybe just make it present without assigning a value to it. Here is how falsy values are stringified:

```js
const queryString = require('query-string');

queryString.stringify({foo: false});
//=> 'foo=false'

queryString.stringify({foo: null});
//=> 'foo'

queryString.stringify({foo: undefined});
//=> ''
```

## query-string for enterprise

Available as part of the Tidelift Subscription.

The maintainers of query-string and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-query-string?utm_source=npm-query-string&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
