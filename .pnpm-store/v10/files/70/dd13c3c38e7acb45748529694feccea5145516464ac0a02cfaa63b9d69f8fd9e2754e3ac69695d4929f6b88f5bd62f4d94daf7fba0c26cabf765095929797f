# JavaScript Stringify

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][build-image]][build-url]
[![Build coverage][coverage-image]][coverage-url]

> Stringify is to `eval` as `JSON.stringify` is to `JSON.parse`.

## Installation

```
npm install javascript-stringify --save
```

## Usage

```javascript
import { stringify } from "javascript-stringify";
```

The API is similar `JSON.stringify`:

- `value` The value to convert to a string
- `replacer` A function that alters the behavior of the stringification process
- `space` A string or number that's used to insert white space into the output for readability purposes
- `options`
  - **maxDepth** _(number, default: 100)_ The maximum depth of values to stringify
  - **maxValues** _(number, default: 100000)_ The maximum number of values to stringify
  - **references** _(boolean, default: false)_ Restore circular/repeated references in the object (uses IIFE)
  - **skipUndefinedProperties** _(boolean, default: false)_ Omits `undefined` properties instead of restoring as `undefined`

### Examples

```javascript
stringify({}); // "{}"
stringify(true); // "true"
stringify("foo"); // "'foo'"

stringify({ x: 5, y: 6 }); // "{x:5,y:6}"
stringify([1, 2, 3, "string"]); // "[1,2,3,'string']"

stringify({ a: { b: { c: 1 } } }, null, null, { maxDepth: 2 }); // "{a:{b:{}}}"

/**
 * Invalid key names are automatically stringified.
 */
stringify({ "some-key": 10 }); // "{'some-key':10}"

/**
 * Some object types and values can remain identical.
 */
stringify([/.+/gi, new Number(10), new Date()]); // "[/.+/gi,new Number(10),new Date(1406623295732)]"

/**
 * Unknown or circular references are removed.
 */
var obj = { x: 10 };
obj.circular = obj;

stringify(obj); // "{x:10}"
stringify(obj, null, null, { references: true }); // "(function(){var x={x:10};x.circular=x;return x;}())"

/**
 * Specify indentation - just like `JSON.stringify`.
 */
stringify({ a: 2 }, null, " "); // "{\n a: 2\n}"
stringify({ uno: 1, dos: 2 }, null, "\t"); // "{\n\tuno: 1,\n\tdos: 2\n}"

/**
 * Add custom replacer behaviour - like double quoted strings.
 */
stringify(["test", "string"], function (value, indent, stringify) {
  if (typeof value === "string") {
    return '"' + value.replace(/"/g, '\\"') + '"';
  }

  return stringify(value);
});
//=> '["test","string"]'
```

## Formatting

You can use your own code formatter on the result of `javascript-stringify`. Here is an example using [eslint](https://www.npmjs.com/package/eslint):

```javascript
const { CLIEngine } = require("eslint");
const { stringify } = require("javascript-stringify");

const { APP_ROOT_PATH, ESLINTRC_FILE_PATH } = require("./constants");

const ESLINT_CLI = new CLIEngine({
  fix: true,
  cwd: APP_ROOT_PATH,
  configFile: ESLINTRC_FILE_PATH,
});

module.exports = (objectToStringify) => {
  return ESLINT_CLI.executeOnText(stringify(objectToStringify)).results[0]
    .output;
};
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/javascript-stringify
[npm-url]: https://npmjs.org/package/javascript-stringify
[downloads-image]: https://img.shields.io/npm/dm/javascript-stringify
[downloads-url]: https://npmjs.org/package/javascript-stringify
[build-image]: https://img.shields.io/github/workflow/status/blakeembrey/javascript-stringify/CI/main
[build-url]: https://github.com/blakeembrey/javascript-stringify/actions/workflows/ci.yml?query=branch%3Amain
[coverage-image]: https://img.shields.io/codecov/c/gh/blakeembrey/javascript-stringify
[coverage-url]: https://codecov.io/gh/blakeembrey/javascript-stringify
