# jsesc [![Build status](https://travis-ci.org/mathiasbynens/jsesc.svg?branch=master)](https://travis-ci.org/mathiasbynens/jsesc) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/jsesc/master.svg)](https://coveralls.io/r/mathiasbynens/jsesc) [![Dependency status](https://gemnasium.com/mathiasbynens/jsesc.svg)](https://gemnasium.com/mathiasbynens/jsesc)

This is a JavaScript library for [escaping JavaScript strings](http://mathiasbynens.be/notes/javascript-escapes) while generating the shortest possible valid ASCII-only output. [Here’s an online demo.](http://mothereff.in/js-escapes)

This can be used to avoid [mojibake](http://en.wikipedia.org/wiki/Mojibake) and other encoding issues, or even to [avoid errors](https://twitter.com/annevk/status/380000829643571200) when passing JSON-formatted data (which may contain U+2028 LINE SEPARATOR, U+2029 PARAGRAPH SEPARATOR, or [lone surrogates](http://esdiscuss.org/topic/code-points-vs-unicode-scalar-values#content-14)) to a JavaScript parser or an UTF-8 encoder, respectively.

Feel free to fork if you see possible improvements!

## Installation

Via [Bower](http://bower.io/):

```bash
bower install jsesc
```

Via [Component](https://github.com/component/component):

```bash
component install mathiasbynens/jsesc
```

Via [npm](http://npmjs.org/):

```bash
npm install jsesc
```

In a browser:

```html
<script src="jsesc.js"></script>
```

In [Node.js](http://nodejs.org/) and [RingoJS](http://ringojs.org/):

```js
var jsesc = require('jsesc');
```

In [Narwhal](http://narwhaljs.org/):

```js
var jsesc = require('jsesc').jsesc;
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('jsesc.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'jsesc': 'path/to/jsesc'
    }
  },
  ['jsesc'],
  function(jsesc) {
    console.log(jsesc);
  }
);
```

## API

### `jsesc(value, options)`

This function takes a value and returns an escaped version of the value where any characters that are not printable ASCII symbols are escaped using the shortest possible (but valid) [escape sequences for use in JavaScript strings](http://mathiasbynens.be/notes/javascript-escapes). The first supported value type is strings:

```js
jsesc('Ich ♥ Bücher');
// → 'Ich \\u2665 B\\xFCcher'

jsesc('foo 𝌆 bar');
// → 'foo \\uD834\\uDF06 bar'
```

Instead of a string, the `value` can also be an array, or an object. In such cases, `jsesc` will return a stringified version of the value where any characters that are not printable ASCII symbols are escaped in the same way.

```js
// Escaping an array
jsesc([
  'Ich ♥ Bücher', 'foo 𝌆 bar'
]);
// → '[\'Ich \\u2665 B\\xFCcher\',\'foo \\uD834\\uDF06 bar\']'

// Escaping an object
jsesc({
  'Ich ♥ Bücher': 'foo 𝌆 bar'
});
// → '{\'Ich \\u2665 B\\xFCcher\':\'foo \\uD834\\uDF06 bar\'}'
```

The optional `options` argument accepts an object with the following options:

#### `quotes`

The default value for the `quotes` option is `'single'`. This means that any occurences of `'` in the input string will be escaped as `\'`, so that the output can be used in a string literal wrapped in single quotes.

```js
jsesc('Lorem ipsum "dolor" sit \'amet\' etc.');
// → 'Lorem ipsum "dolor" sit \\\'amet\\\' etc.'

jsesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'single'
});
// → 'Lorem ipsum "dolor" sit \\\'amet\\\' etc.'
// → "Lorem ipsum \"dolor\" sit \\'amet\\' etc."
```

If you want to use the output as part of a string literal wrapped in double quotes, set the `quotes` option to `'double'`.

```js
jsesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'double'
});
// → 'Lorem ipsum \\"dolor\\" sit \'amet\' etc.'
// → "Lorem ipsum \\\"dolor\\\" sit 'amet' etc."
```

This setting also affects the output for arrays and objects:

```js
jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'quotes': 'double'
});
// → '{"Ich \\u2665 B\\xFCcher":"foo \\uD834\\uDF06 bar"}'

jsesc([ 'Ich ♥ Bücher', 'foo 𝌆 bar' ], {
  'quotes': 'double'
});
// → '["Ich \\u2665 B\\xFCcher","foo \\uD834\\uDF06 bar"]'
```

#### `wrap`

The `wrap` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, the output will be a valid JavaScript string literal wrapped in quotes. The type of quotes can be specified through the `quotes` setting.

```js
jsesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'single',
  'wrap': true
});
// → '\'Lorem ipsum "dolor" sit \\\'amet\\\' etc.\''
// → "\'Lorem ipsum \"dolor\" sit \\\'amet\\\' etc.\'"

jsesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'double',
  'wrap': true
});
// → '"Lorem ipsum \\"dolor\\" sit \'amet\' etc."'
// → "\"Lorem ipsum \\\"dolor\\\" sit \'amet\' etc.\""
```

#### `es6`

The `es6` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, any astral Unicode symbols in the input will be escaped using [ECMAScript 6 Unicode code point escape sequences](http://mathiasbynens.be/notes/javascript-escapes#unicode-code-point) instead of using separate escape sequences for each surrogate half. If backwards compatibility with ES5 environments is a concern, don’t enable this setting. If the `json` setting is enabled, the value for the `es6` setting is ignored (as if it was `false`).

```js
// By default, the `es6` option is disabled:
jsesc('foo 𝌆 bar 💩 baz');
// → 'foo \\uD834\\uDF06 bar \\uD83D\\uDCA9 baz'

// To explicitly disable it:
jsesc('foo 𝌆 bar 💩 baz', {
  'es6': false
});
// → 'foo \\uD834\\uDF06 bar \\uD83D\\uDCA9 baz'

// To enable it:
jsesc('foo 𝌆 bar 💩 baz', {
  'es6': true
});
// → 'foo \\u{1D306} bar \\u{1F4A9} baz'
```

#### `escapeEverything`

The `escapeEverything` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, all the symbols in the output will be escaped, even printable ASCII symbols.

```js
jsesc('lolwat"foo\'bar', {
  'escapeEverything': true
});
// → '\\x6C\\x6F\\x6C\\x77\\x61\\x74\\"\\x66\\x6F\\x6F\\\'\\x62\\x61\\x72'
// → "\\x6C\\x6F\\x6C\\x77\\x61\\x74\\\"\\x66\\x6F\\x6F\\'\\x62\\x61\\x72"
```

This setting also affects the output for arrays and objects:

```js
jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'escapeEverything': true
});
// → '{\'\x49\x63\x68\x20\u2665\x20\x42\xFC\x63\x68\x65\x72\':\'\x66\x6F\x6F\x20\uD834\uDF06\x20\x62\x61\x72\'}'
// → "{'\x49\x63\x68\x20\u2665\x20\x42\xFC\x63\x68\x65\x72':'\x66\x6F\x6F\x20\uD834\uDF06\x20\x62\x61\x72'}"

jsesc([ 'Ich ♥ Bücher': 'foo 𝌆 bar' ], {
  'escapeEverything': true
});
// → '[\'\x49\x63\x68\x20\u2665\x20\x42\xFC\x63\x68\x65\x72\',\'\x66\x6F\x6F\x20\uD834\uDF06\x20\x62\x61\x72\']'
```

#### `compact`

The `compact` option takes a boolean value (`true` or `false`), and defaults to `true` (enabled). When enabled, the output for arrays and objects will be as compact as possible; it won’t be formatted nicely.

```js
jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'compact': true // this is the default
});
// → '{\'Ich \u2665 B\xFCcher\':\'foo \uD834\uDF06 bar\'}'

jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'compact': false
});
// → '{\n\t\'Ich \u2665 B\xFCcher\': \'foo \uD834\uDF06 bar\'\n}'

jsesc([ 'Ich ♥ Bücher', 'foo 𝌆 bar' ], {
  'compact': false
});
// → '[\n\t\'Ich \u2665 B\xFCcher\',\n\t\'foo \uD834\uDF06 bar\'\n]'
```

This setting has no effect on the output for strings.

#### `indent`

The `indent` option takes a string value, and defaults to `'\t'`. When the `compact` setting is enabled (`true`), the value of the `indent` option is used to format the output for arrays and objects.

```js
jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'compact': false,
  'indent': '\t' // this is the default
});
// → '{\n\t\'Ich \u2665 B\xFCcher\': \'foo \uD834\uDF06 bar\'\n}'

jsesc({ 'Ich ♥ Bücher': 'foo 𝌆 bar' }, {
  'compact': false,
  'indent': '  '
});
// → '{\n  \'Ich \u2665 B\xFCcher\': \'foo \uD834\uDF06 bar\'\n}'

jsesc([ 'Ich ♥ Bücher', 'foo 𝌆 bar' ], {
  'compact': false,
  'indent': '  '
});
// → '[\n  \'Ich \u2665 B\xFCcher\',\n\  t\'foo \uD834\uDF06 bar\'\n]'
```

This setting has no effect on the output for strings.

#### `json`

The `json` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, the output is valid JSON. [Hexadecimal character escape sequences](http://mathiasbynens.be/notes/javascript-escapes#hexadecimal) and [the `\v` or `\0` escape sequences](http://mathiasbynens.be/notes/javascript-escapes#single) will not be used. Setting `json: true` implies `quotes: 'double', wrap: true, es6: false`, although these values can still be overridden if needed — but in such cases, the output won’t be valid JSON anymore.

```js
jsesc('foo\x00bar\xFF\uFFFDbaz', {
  'json': true
});
// → '"foo\\u0000bar\\u00FF\\uFFFDbaz"'

jsesc({ 'foo\x00bar\xFF\uFFFDbaz': 'foo\x00bar\xFF\uFFFDbaz' }, {
  'json': true
});
// → '{"foo\\u0000bar\\u00FF\\uFFFDbaz":"foo\\u0000bar\\u00FF\\uFFFDbaz"}'

jsesc([ 'foo\x00bar\xFF\uFFFDbaz', 'foo\x00bar\xFF\uFFFDbaz' ], {
  'json': true
});
// → '["foo\\u0000bar\\u00FF\\uFFFDbaz","foo\\u0000bar\\u00FF\\uFFFDbaz"]'

// Values that are acceptable in JSON but aren’t strings, arrays, or object
// literals can’t be escaped, so they’ll just be preserved:
jsesc([ 'foo\x00bar', [1, '©', { 'foo': true, 'qux': null }], 42 ], {
  'json': true
});
// → '["foo\\u0000bar",[1,"\\u00A9",{"foo":true,"qux":null}],42]'
// Values that aren’t allowed in JSON are run through `JSON.stringify()`:
jsesc([ undefined, -Infinity ], {
  'json': true
});
// → '[null,null]'
```

**Note:** Using this option on objects or arrays that contain non-string values relies on `JSON.stringify()`. For legacy environments like IE ≤ 7, use [a `JSON` polyfill](http://bestiejs.github.io/json3/).

### `jsesc.version`

A string representing the semantic version number.

### Using the `jsesc` binary

To use the `jsesc` binary in your shell, simply install jsesc globally using npm:

```bash
npm install -g jsesc
```

After that you will be able to escape strings from the command line:

```bash
$ jsesc 'föo ♥ bår 𝌆 baz'
f\xF6o \u2665 b\xE5r \uD834\uDF06 baz
```

To escape arrays or objects containing string values, use the `-o`/`--object` option:

```bash
$ jsesc --object '{ "föo": "♥", "bår": "𝌆 baz" }'
{'f\xF6o':'\u2665','b\xE5r':'\uD834\uDF06 baz'}
```

To prettify the output in such cases, use the `-p`/`--pretty` option:

```bash
$ jsesc --pretty '{ "föo": "♥", "bår": "𝌆 baz" }'
{
  'f\xF6o': '\u2665',
  'b\xE5r': '\uD834\uDF06 baz'
}
```

For valid JSON output, use the `-j`/`--json` option:

```bash
$ jsesc --json --pretty '{ "föo": "♥", "bår": "𝌆 baz" }'
{
  "f\u00F6o": "\u2665",
  "b\u00E5r": "\uD834\uDF06 baz"
}
```

Read a local JSON file, escape any non-ASCII symbols, and save the result to a new file:

```bash
$ jsesc --json --object < data-raw.json > data-escaped.json
```

Or do the same with an online JSON file:

```bash
$ curl -sL "http://git.io/aorKgQ" | jsesc --json --object > data-escaped.json
```

See `jsesc --help` for the full list of options.

## Support

This library has been tested in at least Chrome 27-29, Firefox 3-22, Safari 4-6, Opera 10-12, IE 6-10, Node.js v0.10.0, Narwhal 0.3.2, RingoJS 0.8-0.9, PhantomJS 1.9.0, and Rhino 1.7RC4.

**Note:** Using the `json` option on objects or arrays that contain non-string values relies on `JSON.parse()`. For legacy environments like IE ≤ 7, use [a `JSON` polyfill](http://bestiejs.github.io/json3/).

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This library is available under the [MIT](http://mths.be/mit) license.
