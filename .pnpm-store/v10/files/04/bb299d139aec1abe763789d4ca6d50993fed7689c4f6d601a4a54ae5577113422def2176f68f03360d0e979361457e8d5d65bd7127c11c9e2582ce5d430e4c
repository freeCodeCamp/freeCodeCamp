# jsesc

Given some data, _jsesc_ returns a stringified representation of that data. jsesc is similar to `JSON.stringify()` except:

1. it outputs JavaScript instead of JSON [by default](#json), enabling support for data structures like ES6 maps and sets;
2. it offers [many options](#api) to customize the output;
3. its output is ASCII-safe [by default](#minimal), thanks to its use of [escape sequences](https://mathiasbynens.be/notes/javascript-escapes) where needed.

For any input, jsesc generates the shortest possible valid printable-ASCII-only output. [Here’s an online demo.](https://mothereff.in/js-escapes)

jsesc’s output can be used instead of `JSON.stringify`’s to avoid [mojibake](https://en.wikipedia.org/wiki/Mojibake) and other encoding issues, or even to [avoid errors](https://twitter.com/annevk/status/380000829643571200) when passing JSON-formatted data (which may contain U+2028 LINE SEPARATOR, U+2029 PARAGRAPH SEPARATOR, or [lone surrogates](https://esdiscuss.org/topic/code-points-vs-unicode-scalar-values#content-14)) to a JavaScript parser or an UTF-8 encoder.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install jsesc
```

In [Node.js](https://nodejs.org/):

```js
const jsesc = require('jsesc');
```

## API

### `jsesc(value, options)`

This function takes a value and returns an escaped version of the value where any characters that are not printable ASCII symbols are escaped using the shortest possible (but valid) [escape sequences for use in JavaScript strings](https://mathiasbynens.be/notes/javascript-escapes). The first supported value type is strings:

```js
jsesc('Ich ♥ Bücher');
// → 'Ich \\u2665 B\\xFCcher'

jsesc('foo 𝌆 bar');
// → 'foo \\uD834\\uDF06 bar'
```

Instead of a string, the `value` can also be an array, an object, a map, a set, or a buffer. In such cases, `jsesc` returns a stringified version of the value where any characters that are not printable ASCII symbols are escaped in the same way.

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

The default value for the `quotes` option is `'single'`. This means that any occurrences of `'` in the input string are escaped as `\'`, so that the output can be used in a string literal wrapped in single quotes.

```js
jsesc('`Lorem` ipsum "dolor" sit \'amet\' etc.');
// → 'Lorem ipsum "dolor" sit \\\'amet\\\' etc.'

jsesc('`Lorem` ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'single'
});
// → '`Lorem` ipsum "dolor" sit \\\'amet\\\' etc.'
// → "`Lorem` ipsum \"dolor\" sit \\'amet\\' etc."
```

If you want to use the output as part of a string literal wrapped in double quotes, set the `quotes` option to `'double'`.

```js
jsesc('`Lorem` ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'double'
});
// → '`Lorem` ipsum \\"dolor\\" sit \'amet\' etc.'
// → "`Lorem` ipsum \\\"dolor\\\" sit 'amet' etc."
```

If you want to use the output as part of a template literal (i.e. wrapped in backticks), set the `quotes` option to `'backtick'`.

```js
jsesc('`Lorem` ipsum "dolor" sit \'amet\' etc.', {
  'quotes': 'backtick'
});
// → '\\`Lorem\\` ipsum "dolor" sit \'amet\' etc.'
// → "\\`Lorem\\` ipsum \"dolor\" sit 'amet' etc."
// → `\\\`Lorem\\\` ipsum "dolor" sit 'amet' etc.`
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

#### `numbers`

The default value for the `numbers` option is `'decimal'`. This means that any numeric values are represented using decimal integer literals. Other valid options are `binary`, `octal`, and `hexadecimal`, which result in binary integer literals, octal integer literals, and hexadecimal integer literals, respectively.

```js
jsesc(42, {
  'numbers': 'binary'
});
// → '0b101010'

jsesc(42, {
  'numbers': 'octal'
});
// → '0o52'

jsesc(42, {
  'numbers': 'decimal'
});
// → '42'

jsesc(42, {
  'numbers': 'hexadecimal'
});
// → '0x2A'
```

#### `wrap`

The `wrap` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, the output is a valid JavaScript string literal wrapped in quotes. The type of quotes can be specified through the `quotes` setting.

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

The `es6` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, any astral Unicode symbols in the input are escaped using [ECMAScript 6 Unicode code point escape sequences](https://mathiasbynens.be/notes/javascript-escapes#unicode-code-point) instead of using separate escape sequences for each surrogate half. If backwards compatibility with ES5 environments is a concern, don’t enable this setting. If the `json` setting is enabled, the value for the `es6` setting is ignored (as if it was `false`).

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

The `escapeEverything` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, all the symbols in the output are escaped — even printable ASCII symbols.

```js
jsesc('lolwat"foo\'bar', {
  'escapeEverything': true
});
// → '\\x6C\\x6F\\x6C\\x77\\x61\\x74\\"\\x66\\x6F\\x6F\\\'\\x62\\x61\\x72'
// → "\\x6C\\x6F\\x6C\\x77\\x61\\x74\\\"\\x66\\x6F\\x6F\\'\\x62\\x61\\x72"
```

This setting also affects the output for string literals within arrays and objects.

#### `minimal`

The `minimal` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, only a limited set of symbols in the output are escaped:

* U+0000 `\0`
* U+0008 `\b`
* U+0009 `\t`
* U+000A `\n`
* U+000C `\f`
* U+000D `\r`
* U+005C `\\`
* U+2028 `\u2028`
* U+2029 `\u2029`
* whatever symbol is being used for wrapping string literals (based on [the `quotes` option](#quotes))
* [lone surrogates](https://esdiscuss.org/topic/code-points-vs-unicode-scalar-values#content-14)

Note: with this option enabled, jsesc output is no longer guaranteed to be ASCII-safe.

```js
jsesc('foo\u2029bar\nbaz©qux𝌆flops', {
  'minimal': false
});
// → 'foo\\u2029bar\\nbaz©qux𝌆flops'
```

#### `isScriptContext`

The `isScriptContext` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, occurrences of [`</script` and `</style`](https://mathiasbynens.be/notes/etago) in the output are escaped as `<\/script` and `<\/style`, and [`<!--`](https://mathiasbynens.be/notes/etago#comment-8) is escaped as `\x3C!--` (or `\u003C!--` when the `json` option is enabled). This setting is useful when jsesc’s output ends up as part of a `<script>` or `<style>` element in an HTML document.

```js
jsesc('foo</script>bar', {
  'isScriptContext': true
});
// → 'foo<\\/script>bar'
```

#### `compact`

The `compact` option takes a boolean value (`true` or `false`), and defaults to `true` (enabled). When enabled, the output for arrays and objects is as compact as possible; it’s not formatted nicely.

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

The `indent` option takes a string value, and defaults to `'\t'`. When the `compact` setting is disabled (`false`), the value of the `indent` option is used to format the output for arrays and objects.

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

#### `indentLevel`

The `indentLevel` option takes a numeric value, and defaults to `0`. It represents the current indentation level, i.e. the number of times the value of [the `indent` option](#indent) is repeated.

```js
jsesc(['a', 'b', 'c'], {
  'compact': false,
  'indentLevel': 1
});
// → '[\n\t\t\'a\',\n\t\t\'b\',\n\t\t\'c\'\n\t]'

jsesc(['a', 'b', 'c'], {
  'compact': false,
  'indentLevel': 2
});
// → '[\n\t\t\t\'a\',\n\t\t\t\'b\',\n\t\t\t\'c\'\n\t\t]'
```

#### `json`

The `json` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, the output is valid JSON. [Hexadecimal character escape sequences](https://mathiasbynens.be/notes/javascript-escapes#hexadecimal) and [the `\v` or `\0` escape sequences](https://mathiasbynens.be/notes/javascript-escapes#single) are not used. Setting `json: true` implies `quotes: 'double', wrap: true, es6: false`, although these values can still be overridden if needed — but in such cases, the output won’t be valid JSON anymore.

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

#### `lowercaseHex`

The `lowercaseHex` option takes a boolean value (`true` or `false`), and defaults to `false` (disabled). When enabled, any alphabetical hexadecimal digits in escape sequences as well as any hexadecimal integer literals (see [the `numbers` option](#numbers)) in the output are in lowercase.

```js
jsesc('Ich ♥ Bücher', {
  'lowercaseHex': true
});
// → 'Ich \\u2665 B\\xfccher'
//                    ^^

jsesc(42, {
  'numbers': 'hexadecimal',
  'lowercaseHex': true
});
// → '0x2a'
//      ^^
```

### `jsesc.version`

A string representing the semantic version number.

### Using the `jsesc` binary

To use the `jsesc` binary in your shell, simply install jsesc globally using npm:

```bash
npm install -g jsesc
```

After that you’re able to escape strings from the command line:

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

As of v3.0.0, jsesc supports Node.js v6+ only.

Older versions (up to jsesc v1.3.0) support Chrome 27, Firefox 3, Safari 4, Opera 10, IE 6, Node.js v6.0.0, Narwhal 0.3.2, RingoJS 0.8-0.11, PhantomJS 1.9.0, and Rhino 1.7RC4. **Note:** Using the `json` option on objects or arrays that contain non-string values relies on `JSON.parse()`. For legacy environments like IE ≤ 7, use [a `JSON` polyfill](https://bestiejs.github.io/json3/).

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This library is available under the [MIT](https://mths.be/mit) license.
