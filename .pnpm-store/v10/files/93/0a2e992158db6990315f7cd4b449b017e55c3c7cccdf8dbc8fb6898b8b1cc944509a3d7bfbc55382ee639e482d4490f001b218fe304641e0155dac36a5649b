# JSON5 – JSON for Humans

[![Build Status](https://app.travis-ci.com/json5/json5.svg?branch=main)][Build
Status] [![Coverage
Status](https://coveralls.io/repos/github/json5/json5/badge.svg)][Coverage
Status]

JSON5 is an extension to the popular [JSON] file format that aims to be
easier to **write and maintain _by hand_ (e.g. for config files)**.
It is _not intended_ to be used for machine-to-machine communication.
(Keep using JSON or other file formats for that. 🙂)

JSON5 was started in 2012, and as of 2022, now gets **[>65M downloads/week](https://www.npmjs.com/package/json5)**,
ranks in the **[top 0.1%](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491)** of the most depended-upon packages on npm,
and has been adopted by major projects like
**[Chromium](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/platform/runtime_enabled_features.json5;drc=5de823b36e68fd99009a29281b17bc3a1d6b329c),
[Next.js](https://github.com/vercel/next.js/blob/b88f20c90bf4659b8ad5cb2a27956005eac2c7e8/packages/next/lib/find-config.ts#L43-L46),
[Babel](https://babeljs.io/docs/en/config-files#supported-file-extensions),
[Retool](https://community.retool.com/t/i-am-attempting-to-append-several-text-fields-to-a-google-sheet-but-receiving-a-json5-invalid-character-error/7626),
[WebStorm](https://www.jetbrains.com/help/webstorm/json.html),
and [more](https://github.com/json5/json5/wiki/In-the-Wild)**.
It's also natively supported on **[Apple platforms](https://developer.apple.com/documentation/foundation/jsondecoder/3766916-allowsjson5)**
like **MacOS** and **iOS**.

Formally, the **[JSON5 Data Interchange Format](https://spec.json5.org/)** is a superset of JSON
(so valid JSON files will always be valid JSON5 files)
that expands its syntax to include some productions from [ECMAScript 5.1] (ES5).
It's also a strict _subset_ of ES5, so valid JSON5 files will always be valid ES5.

This JavaScript library is a reference implementation for JSON5 parsing and serialization,
and is directly used in many of the popular projects mentioned above
(where e.g. extreme performance isn't necessary),
but others have created [many other libraries](https://github.com/json5/json5/wiki/In-the-Wild)
across many other platforms.

[Build Status]: https://app.travis-ci.com/json5/json5

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

## Example
Kitchen-sink example:

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

A more real-world example is [this config file](https://github.com/chromium/chromium/blob/feb3c9f670515edf9a88f185301cbd7794ee3e52/third_party/blink/renderer/platform/runtime_enabled_features.json5)
from the Chromium/Blink project.

## Specification
For a detailed explanation of the JSON5 format, please read the [official
specification](https://json5.github.io/json5-spec/).

## Installation and Usage
### Node.js
```sh
npm install json5
```

#### CommonJS
```js
const JSON5 = require('json5')
```

#### Modules
```js
import JSON5 from 'json5'
```

### Browsers
#### UMD
```html
<!-- This will create a global `JSON5` variable. -->
<script src="https://unpkg.com/json5@2/dist/index.min.js"></script>
```

#### Modules
```html
<script type="module">
  import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'
</script>
```

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

## Contributing
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
To report bugs or request features regarding the JSON5 **data format**,
please submit an issue to the official
**[_specification_ repository](https://github.com/json5/json5-spec)**.

Note that we will never add any features that make JSON5 incompatible with ES5;
that compatibility is a fundamental premise of JSON5.

To report bugs or request features regarding this **JavaScript implementation**
of JSON5, please submit an issue to **_this_ repository**.

### Security Vulnerabilities and Disclosures
To report a security vulnerability, please follow the follow the guidelines
described in our [security policy](./SECURITY.md).

## License
MIT. See [LICENSE.md](./LICENSE.md) for details.

## Credits
[Aseem Kishore](https://github.com/aseemk) founded this project.
He wrote a [blog post](https://aseemk.substack.com/p/ignore-the-f-ing-haters-json5)
about the journey and lessons learned 10 years in.

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
https://github.com/douglascrockford/JSON-js/blob/03157639c7a7cddd2e9f032537f346f1a87c0f6d/json_parse.js

[Max Nanasy](https://github.com/MaxNanasy) has been an early and prolific
supporter, contributing multiple patches and ideas.

[Andrew Eisenberg](https://github.com/aeisenberg) contributed the original
`stringify` method.

[Jordan Tucker](https://github.com/jordanbtucker) has aligned JSON5 more closely
with ES5, wrote the official JSON5 specification, completely rewrote the
codebase from the ground up, and is actively maintaining this project.
