# JSON5 – JSON for Humans

[![Build Status](https://travis-ci.org/json5/json5.svg)][Build Status]
[![Coverage
Status](https://coveralls.io/repos/github/json5/json5/badge.svg)][Coverage
Status]

The JSON5 Data Interchange Format (JSON5) is a superset of [JSON] that aims to
alleviate some of the limitations of JSON by expanding its syntax to include
some productions from [ECMAScript 5.1].

This JavaScript library is the official reference implementation for JSON5
parsing and serialization libraries.

[Build Status]: https://travis-ci.org/json5/json5

[Coverage Status]: https://coveralls.io/github/json5/json5

[JSON]: https://tools.ietf.org/html/rfc7159

[ECMAScript 5.1]: https://www.ecma-international.org/ecma-262/5.1/

## Summary of Features
The following ECMAScript 5.1 features, which are not supported in JSON, have
been extended to JSON5.

### Objects
- Object keys may be an ECMAScript 5.1 _[IdentifierName]_.
- Objects may have a single trailing comma.

### Arrays
- Arrays may have a single trailing comma.

### Strings
- Strings may be single quoted.
- Strings may span multiple lines by escaping new line characters.
- Strings may include character escapes.

### Numbers
- Numbers may be hexadecimal.
- Numbers may have a leading or trailing decimal point.
- Numbers may be [IEEE 754] positive infinity, negative infinity, and NaN.
- Numbers may begin with an explicit plus sign.

### Comments
- Single and multi-line comments are allowed.

### White Space
- Additional white space characters are allowed.

[IdentifierName]: https://www.ecma-international.org/ecma-262/5.1/#sec-7.6

[IEEE 754]: http://ieeexplore.ieee.org/servlet/opac?punumber=4610933

## Short Example
```js
{
  // comments
  unquoted: 'and you can quote me on that',
  singleQuotes: 'I can use "double quotes" here',
  lineBreaks: "Look, Mom! \
No \\n's!",
  hexadecimal: 0xdecaf,
  leadingDecimalPoint: .8675309, andTrailing: 8675309.,
  positiveSign: +1,
  trailingComma: 'in objects', andIn: ['arrays',],
  "backwardsCompatible": "with JSON",
}
```

## Specification
For a detailed explanation of the JSON5 format, please read the [official
specification](https://json5.github.io/json5-spec/).

## Installation
### Node.js
```sh
npm install json5
```

```js
const JSON5 = require('json5')
```

### Browsers
```html
<script src="https://unpkg.com/json5@^1.0.0"></script>
```

This will create a global `JSON5` variable.

## API
The JSON5 API is compatible with the [JSON API].

[JSON API]:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

### JSON5.parse()
Parses a JSON5 string, constructing the JavaScript value or object described by
the string. An optional reviver function can be provided to perform a
transformation on the resulting object before it is returned.

#### Syntax
    JSON5.parse(text[, reviver])

#### Parameters
- `text`: The string to parse as JSON5.
- `reviver`: If a function, this prescribes how the value originally produced by
  parsing is transformed, before being returned.

#### Return value
The object corresponding to the given JSON5 text.

### JSON5.stringify()
Converts a JavaScript value to a JSON5 string, optionally replacing values if a
replacer function is specified, or optionally including only the specified
properties if a replacer array is specified.

#### Syntax
    JSON5.stringify(value[, replacer[, space]])
    JSON5.stringify(value[, options])

#### Parameters
- `value`: The value to convert to a JSON5 string.
- `replacer`: A function that alters the behavior of the stringification
  process, or an array of String and Number objects that serve as a whitelist
  for selecting/filtering the properties of the value object to be included in
  the JSON5 string. If this value is null or not provided, all properties of the
  object are included in the resulting JSON5 string.
- `space`: A String or Number object that's used to insert white space into the
  output JSON5 string for readability purposes. If this is a Number, it
  indicates the number of space characters to use as white space; this number is
  capped at 10 (if it is greater, the value is just 10). Values less than 1
  indicate that no space should be used. If this is a String, the string (or the
  first 10 characters of the string, if it's longer than that) is used as white
  space. If this parameter is not provided (or is null), no white space is used.
  If white space is used, trailing commas will be used in objects and arrays.
- `options`: An object with the following properties:
  - `replacer`: Same as the `replacer` parameter.
  - `space`: Same as the `space` parameter.
  - `quote`: A String representing the quote character to use when serializing
    strings.

#### Return value
A JSON5 string representing the value.

### Node.js `require()` JSON5 files
When using Node.js, you can `require()` JSON5 files by adding the following
statement.

```js
require('json5/lib/register')
```

Then you can load a JSON5 file with a Node.js `require()` statement. For
example:

```js
const config = require('./config.json5')
```

## CLI
Since JSON is more widely used than JSON5, this package includes a CLI for
converting JSON5 to JSON and for validating the syntax of JSON5 documents.

### Installation
```sh
npm install --global json5
```

### Usage
```sh
json5 [options] <file>
```

If `<file>` is not provided, then STDIN is used.

#### Options:
- `-s`, `--space`: The number of spaces to indent or `t` for tabs
- `-o`, `--out-file [file]`: Output to the specified file, otherwise STDOUT
- `-v`, `--validate`: Validate JSON5 but do not output JSON
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

## Contibuting
### Development
```sh
git clone https://github.com/json5/json5
cd json5
npm install
```

When contributing code, please write relevant tests and run `npm test` and `npm
run lint` before submitting pull requests. Please use an editor that supports
[EditorConfig](http://editorconfig.org/).

### Issues
To report bugs or request features regarding the JSON5 data format, please
submit an issue to the [official specification
repository](https://github.com/json5/json5-spec).

To report bugs or request features regarding the JavaScript implentation of
JSON5, please submit an issue to this repository.

## License
MIT. See [LICENSE.md](./LICENSE.md) for details.

## Credits
[Assem Kishore](https://github.com/aseemk) founded this project.

[Michael Bolin](http://bolinfest.com/) independently arrived at and published
some of these same ideas with awesome explanations and detail. Recommended
reading: [Suggested Improvements to JSON](http://bolinfest.com/essays/json.html)

[Douglas Crockford](http://www.crockford.com/) of course designed and built
JSON, but his state machine diagrams on the [JSON website](http://json.org/), as
cheesy as it may sound, gave us motivation and confidence that building a new
parser to implement these ideas was within reach! The original
implementation of JSON5 was also modeled directly off of Doug’s open-source
[json_parse.js] parser. We’re grateful for that clean and well-documented
code.

[json_parse.js]:
https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js

[Max Nanasy](https://github.com/MaxNanasy) has been an early and prolific
supporter, contributing multiple patches and ideas.

[Andrew Eisenberg](https://github.com/aeisenberg) contributed the original
`stringify` method.

[Jordan Tucker](https://github.com/jordanbtucker) has aligned JSON5 more closely
with ES5, wrote the official JSON5 specification, completely rewrote the
codebase from the ground up, and is actively maintaining this project.
