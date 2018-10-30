<img align="right" alt="Ajv logo" width="160" src="http://epoberezkin.github.io/ajv/images/ajv_logo.png">

# Ajv: Another JSON Schema Validator

The fastest JSON Schema validator for node.js and browser. Supports [v5 proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals).


[![Build Status](https://travis-ci.org/epoberezkin/ajv.svg?branch=master)](https://travis-ci.org/epoberezkin/ajv)
[![npm version](https://badge.fury.io/js/ajv.svg)](https://www.npmjs.com/package/ajv)
[![npm downloads](https://img.shields.io/npm/dm/ajv.svg)](https://www.npmjs.com/package/ajv)
[![Code Climate](https://codeclimate.com/github/epoberezkin/ajv/badges/gpa.svg)](https://codeclimate.com/github/epoberezkin/ajv)
[![Coverage Status](https://coveralls.io/repos/epoberezkin/ajv/badge.svg?branch=master&service=github)](https://coveralls.io/github/epoberezkin/ajv?branch=master)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)


__Please note__: You can start using NEW beta version [5.0.4](https://github.com/epoberezkin/ajv/releases/tag/5.0.4-beta.3) (see [migration guide from 4.x.x](https://github.com/epoberezkin/ajv/releases/tag/5.0.1-beta.0)) with the support of JSON-Schema draft-06 (not officially published yet): `npm install ajv@^5.0.4-beta`.

Also see [docs](https://github.com/epoberezkin/ajv/tree/5.0.4-beta.3) for 5.0.4.


## Contents

- [Performance](#performance)
- [Features](#features)
- [Getting started](#getting-started)
- [Frequently Asked Questions](https://github.com/epoberezkin/ajv/blob/master/FAQ.md)
- [Using in browser](#using-in-browser)
- [Command line interface](#command-line-interface)
- Validation
  - [Keywords](#validation-keywords)
  - [Formats](#formats)
  - [$data reference](#data-reference)
  - NEW: [$merge and $patch keywords](#merge-and-patch-keywords)
  - [Defining custom keywords](#defining-custom-keywords)
  - [Asynchronous schema compilation](#asynchronous-compilation)
  - [Asynchronous validation](#asynchronous-validation)
- Modifying data during validation
  - [Filtering data](#filtering-data)
  - [Assigning defaults](#assigning-defaults)
  - [Coercing data types](#coercing-data-types)
- API
  - [Methods](#api)
  - [Options](#options)
  - [Validation errors](#validation-errors)
- [Related packages](#related-packages)
- [Packages using Ajv](#some-packages-using-ajv)
- [Tests, Contributing, History, License](#tests)


## Performance

Ajv generates code using [doT templates](https://github.com/olado/doT) to turn JSON schemas into super-fast validation functions that are efficient for v8 optimization.

Currently Ajv is the fastest and the most standard compliant validator according to these benchmarks:

- [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark) - 50% faster than the second place
- [jsck benchmark](https://github.com/pandastrike/jsck#benchmarks) - 20-190% faster
- [z-schema benchmark](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)
- [themis benchmark](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)


Performace of different validators by [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark):

[![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=32,4,1&chs=600x416&chxl=-1:%7Cajv%7Cis-my-json-valid%7Cjsen%7Cschemasaurus%7Cthemis%7Cz-schema%7Cjsck%7Cjsonschema%7Cskeemas%7Ctv4%7Cjayschema&chd=t:100,68,61,22.8,17.6,6.6,2.7,0.9,0.7,0.4,0.1)](https://github.com/ebdrup/json-schema-benchmark/blob/master/README.md#performance)


## Features

- Ajv implements full [JSON Schema draft 4](http://json-schema.org/) standard:
  - all validation keywords (see [JSON-Schema validation keywords](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md))
  - full support of remote refs (remote schemas have to be added with `addSchema` or compiled to be available)
  - support of circular references between schemas
  - correct string lengths for strings with unicode pairs (can be turned off)
  - [formats](#formats) defined by JSON Schema draft 4 standard and custom formats (can be turned off)
  - [validates schemas against meta-schema](#api-validateschema)
- supports [browsers](#using-in-browser) and nodejs 0.10-6.x
- [asynchronous loading](#asynchronous-compilation) of referenced schemas during compilation
- "All errors" validation mode with [option allErrors](#options)
- [error messages with parameters](#validation-errors) describing error reasons to allow creating custom error messages
- i18n error messages support with [ajv-i18n](https://github.com/epoberezkin/ajv-i18n) package
- [filtering data](#filtering-data) from additional properties
- [assigning defaults](#assigning-defaults) to missing properties and items
- [coercing data](#coercing-data-types) to the types specified in `type` keywords
- [custom keywords](#defining-custom-keywords)
- keywords `switch`, `constant`, `contains`, `patternGroups`, `patternRequired`, `formatMaximum` / `formatMinimum` and `formatExclusiveMaximum` / `formatExclusiveMinimum` from [JSON-schema v5 proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals) with [option v5](#options)
- [v5 meta-schema](https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#) for schemas using v5 keywords
- [v5 $data reference](#data-reference) to use values from the validated data as values for the schema keywords
- [asynchronous validation](#asynchronous-validation) of custom formats and keywords

Currently Ajv is the only validator that passes all the tests from [JSON Schema Test Suite](https://github.com/json-schema/JSON-Schema-Test-Suite) (according to [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark), apart from the test that requires that `1.0` is not an integer that is impossible to satisfy in JavaScript).


## Install

```
npm install ajv
```

To install a stable beta version [5.0.4](https://github.com/epoberezkin/ajv/releases/tag/5.0.4-beta.3) (see [migration guide from 4.x.x](https://github.com/epoberezkin/ajv/releases/tag/5.0.1-beta.0)):

```
npm install ajv@^5.0.4-beta
```


## <a name="usage"></a>Getting started

Try it in the node REPL: https://tonicdev.com/npm/ajv


The fastest validation call:

```javascript
var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(schema);
var valid = validate(data);
if (!valid) console.log(validate.errors);
```

or with less code

```javascript
// ...
var valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);
// ...
```

or

```javascript
// ...
ajv.addSchema(schema, 'mySchema');
var valid = ajv.validate('mySchema', data);
if (!valid) console.log(ajv.errorsText());
// ...
```

See [API](#api) and [Options](#options) for more details.

Ajv compiles schemas to functions and caches them in all cases (using schema stringified with [json-stable-stringify](https://github.com/substack/json-stable-stringify) as a key), so that the next time the same schema is used (not necessarily the same object instance) it won't be compiled again.

The best performance is achieved when using compiled functions returned by `compile` or `getSchema` methods (there is no additional function call).

__Please note__: every time validation function or `ajv.validate` are called `errors` property is overwritten. You need to copy `errors` array reference to another variable if you want to use it later (e.g., in the callback). See [Validation errors](#validation-errors)


## Using in browser

You can require Ajv directly from the code you browserify - in this case Ajv will be a part of your bundle.

If you need to use Ajv in several bundles you can create a separate UMD bundle using `npm run bundle` script (thanks to [siddo420](https://github.com/siddo420)).

Then you need to load Ajv in the browser:
```html
<script src="ajv.min.js"></script>
```

This bundle can be used with different module systems or creates global `Ajv` if no module system is found.

The browser bundle is available on [cdnjs](https://cdnjs.com/libraries/ajv).

Ajv is tested with these browsers:

[![Sauce Test Status](https://saucelabs.com/browser-matrix/epoberezkin.svg)](https://saucelabs.com/u/epoberezkin)

__Please note__: some frameworks, e.g. Dojo, may redefine global require in such way that is not compatible with CommonJS module format. In such case Ajv bundle has to be loaded before the framework and then you can use global Ajv (see issue [#234](https://github.com/epoberezkin/ajv/issues/234)).


## Command line interface

CLI is available as a separate npm package [ajv-cli](https://github.com/jessedc/ajv-cli). It supports:

- compiling JSON-schemas to test their validity
- BETA: generating standalone module exporting a validation function to be used without Ajv (using [ajv-pack](https://github.com/epoberezkin/ajv-pack))
- validating data file(s) against JSON-schema
- testing expected validity of data against JSON-schema
- referenced schemas
- custom meta-schemas
- files in JSON and JavaScript format
- all Ajv options
- reporting changes in data after validation in [JSON-patch](https://tools.ietf.org/html/rfc6902) format


## Validation keywords

Ajv supports all validation keywords from draft 4 of JSON-schema standard:

- [type](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#type)
- [for numbers](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#keywords-for-numbers) - maximum, minimum, exclusiveMaximum, exclusiveMinimum, multipleOf
- [for strings](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#keywords-for-strings) - maxLength, minLength, pattern, format
- [for arrays](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#keywords-for-arrays) - maxItems, minItems, uniqueItems, items, additionalItems
- [for objects](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#keywords-for-objects) - maxProperties, minproperties, required, properties, patternProperties, additionalProperties, dependencies
- [compound keywords](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#keywords-for-all-types) - enum, not, oneOf, anyOf, allOf

With option `v5: true` Ajv also supports all validation keywords and [$data reference](#data-reference) from [v5 proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals) for JSON-schema standard:

- [switch](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#switch-v5-proposal) - conditional validation with a sequence of if/then clauses
- [contains](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#contains-v5-proposal) - check that array contains a valid item
- [constant](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#constant-v5-proposal) - check that data is equal to some value
- [patternGroups](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#patterngroups-v5-proposal) - a more powerful alternative to patternProperties
- [patternRequired](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#patternrequired-v5-proposal) - like `required` but with patterns that some property should match.
- [formatMaximum, formatMinimum, formatExclusiveMaximum, formatExclusiveMinimum](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#formatmaximum--formatminimum-and-exclusiveformatmaximum--exclusiveformatminimum-v5-proposal) - setting limits for date, time, etc.

See [JSON-Schema validation keywords](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md) for more details.


## Formats

The following formats are supported for string validation with "format" keyword:

- _date_: full-date according to [RFC3339](http://tools.ietf.org/html/rfc3339#section-5.6).
- _time_: time with optional time-zone.
- _date-time_: date-time from the same source (time-zone is mandatory). `date`, `time` and `date-time` validate ranges in `full` mode and only regexp in `fast` mode (see [options](#options)).
- _uri_: full uri with optional protocol.
- _email_: email address.
- _hostname_: host name acording to [RFC1034](http://tools.ietf.org/html/rfc1034#section-3.5).
- _ipv4_: IP address v4.
- _ipv6_: IP address v6.
- _regex_: tests whether a string is a valid regular expression by passing it to RegExp constructor.
- _uuid_: Universally Unique IDentifier according to [RFC4122](http://tools.ietf.org/html/rfc4122).
- _json-pointer_: JSON-pointer according to [RFC6901](https://tools.ietf.org/html/rfc6901).
- _relative-json-pointer_: relative JSON-pointer according to [this draft](http://tools.ietf.org/html/draft-luff-relative-json-pointer-00).

There are two modes of format validation: `fast` and `full`. This mode affects formats `date`, `time`, `date-time`, `uri`, `email`, and `hostname`. See [Options](#options) for details.

You can add additional formats and replace any of the formats above using [addFormat](#api-addformat) method.

The option `unknownFormats` allows to change the behaviour in case an unknown format is encountered - Ajv can either ignore them (default now) or fail schema compilation (will be the default in 5.0.0).

You can find patterns used for format validation and the sources that were used in [formats.js](https://github.com/epoberezkin/ajv/blob/master/lib/compile/formats.js).


## $data reference

With `v5` option you can use values from the validated data as the values for the schema keywords. See [v5 proposal](https://github.com/json-schema/json-schema/wiki/$data-(v5-proposal)) for more information about how it works.

`$data` reference is supported in the keywords: constant, enum, format, maximum/minimum, exclusiveMaximum / exclusiveMinimum, maxLength / minLength, maxItems / minItems, maxProperties / minProperties, formatMaximum / formatMinimum, formatExclusiveMaximum / formatExclusiveMinimum, multipleOf, pattern, required, uniqueItems.

The value of "$data" should be a [JSON-pointer](https://tools.ietf.org/html/rfc6901) to the data (the root is always the top level data object, even if the $data reference is inside a referenced subschema) or a [relative JSON-pointer](http://tools.ietf.org/html/draft-luff-relative-json-pointer-00) (it is relative to the current point in data; if the $data reference is inside a referenced subschema it cannot point to the data outside of the root level for this subschema).

Examples.

This schema requires that the value in property `smaller` is less or equal than the value in the property larger:

```javascript
var schema = {
  "properties": {
    "smaller": {
      "type": "number",
      "maximum": { "$data": "1/larger" }
    },
    "larger": { "type": "number" }
  }
};

var validData = {
  smaller: 5,
  larger: 7
};
```

This schema requires that the properties have the same format as their field names:

```javascript
var schema = {
  "additionalProperties": {
    "type": "string",
    "format": { "$data": "0#" }
  }
};

var validData = {
  'date-time': '1963-06-19T08:30:06.283185Z',
  email: 'joe.bloggs@example.com'
}
```

`$data` reference is resolved safely - it won't throw even if some property is undefined. If `$data` resolves to `undefined` the validation succeeds (with the exclusion of `constant` keyword). If `$data` resolves to incorrect type (e.g. not "number" for maximum keyword) the validation fails.


## $merge and $patch keywords

With v5 option and the package [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch) you can use the keywords `$merge` and `$patch` that allow extending JSON-schemas with patches using formats [JSON Merge Patch (RFC 7396)](https://tools.ietf.org/html/rfc7396) and [JSON Patch (RFC 6902)](https://tools.ietf.org/html/rfc6902).

To add keywords `$merge` and `$patch` to Ajv instance use this code:

```javascript
require('ajv-merge-patch')(ajv);
```

Examples.

Using `$merge`:

```json
{
  "$merge": {
    "source": {
      "type": "object",
      "properties": { "p": { "type": "string" } },
      "additionalProperties": false
    },
    "with": {
      "properties": { "q": { "type": "number" } }
    }
  }
}
```

Using `$patch`:

```json
{
  "$patch": {
    "source": {
      "type": "object",
      "properties": { "p": { "type": "string" } },
      "additionalProperties": false
    },
    "with": [
      { "op": "add", "path": "/properties/q", "value": { "type": "number" } }
    ]
  }
}
```

The schemas above are equivalent to this schema:

```json
{
  "type": "object",
  "properties": {
    "p": { "type": "string" },
    "q": { "type": "number" }
  },
  "additionalProperties": false
}
```

The properties `source` and `with` in the keywords `$merge` and `$patch` can use absolute or relative `$ref` to point to other schemas previously added to the Ajv instance or to the fragments of the current schema.

See the package [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch) for more information.


## Defining custom keywords

The advantages of using custom keywords are:

- allow creating validation scenarios that cannot be expressed using JSON-Schema
- simplify your schemas
- help bringing a bigger part of the validation logic to your schemas
- make your schemas more expressive, less verbose and closer to your application domain
- implement custom data processors that modify your data (`modifying` option MUST be used in keyword definition) and/or create side effects while the data is being validated

If a keyword is used only for side-effects and its validation result is pre-defined, use option `valid: true/false` in keyword definition to simplify both generated code (no error handling in case of `valid: true`) and your keyword functions (no need to return any validation result).

The concerns you have to be aware of when extending JSON-schema standard with custom keywords are the portability and understanding of your schemas. You will have to support these custom keywords on other platforms and to properly document these keywords so that everybody can understand them in your schemas.

You can define custom keywords with [addKeyword](#api-addkeyword) method. Keywords are defined on the `ajv` instance level - new instances will not have previously defined keywords.

Ajv allows defining keywords with:
- validation function
- compilation function
- macro function
- inline compilation function that should return code (as string) that will be inlined in the currently compiled schema.

Example. `range` and `exclusiveRange` keywords using compiled schema:

```javascript
ajv.addKeyword('range', { type: 'number', compile: function (sch, parentSchema) {
  var min = sch[0];
  var max = sch[1];

  return parentSchema.exclusiveRange === true
          ? function (data) { return data > min && data < max; }
          : function (data) { return data >= min && data <= max; }
} });

var schema = { "range": [2, 4], "exclusiveRange": true };
var validate = ajv.compile(schema);
console.log(validate(2.01)); // true
console.log(validate(3.99)); // true
console.log(validate(2)); // false
console.log(validate(4)); // false
```

Several custom keywords (typeof, instanceof, range and propertyNames) are defined in [ajv-keywords](https://github.com/epoberezkin/ajv-keywords) package - they can be used for your schemas and as a starting point for your own custom keywords.

See [Defining custom keywords](https://github.com/epoberezkin/ajv/blob/master/CUSTOM.md) for more details.


## Asynchronous compilation

During asynchronous compilation remote references are loaded using supplied function. See `compileAsync` method and `loadSchema` [option](#options).

Example:

```javascript
var ajv = new Ajv({ loadSchema: loadSchema });

ajv.compileAsync(schema, function (err, validate) {
	if (err) return;
	var valid = validate(data);
});

function loadSchema(uri, callback) {
	request.json(uri, function(err, res, body) {
		if (err || res.statusCode >= 400)
			callback(err || new Error('Loading error: ' + res.statusCode));
		else
			callback(null, body);
	});
}
```

__Please note__: [Option](#options) `missingRefs` should NOT be set to `"ignore"` or `"fail"` for asynchronous compilation to work.


## Asynchronous validation

Example in node REPL: https://tonicdev.com/esp/ajv-asynchronous-validation

You can define custom formats and keywords that perform validation asyncronously by accessing database or some service. You should add `async: true` in the keyword or format defnition (see [addFormat](#api-addformat), [addKeyword](#api-addkeyword) and [Defining custom keywords](#defining-custom-keywords)).

If your schema uses asynchronous formats/keywords or refers to some schema that contains them it should have `"$async": true` keyword so that Ajv can compile it correctly. If asynchronous format/keyword or reference to asynchronous schema is used in the schema without `$async` keyword Ajv will throw an exception during schema compilation.

__Please note__: all asynchronous subschemas that are referenced from the current or other schemas should have `"$async": true` keyword as well, otherwise the schema compilation will fail.

Validation function for an asynchronous custom format/keyword should return a promise that resolves to `true` or `false` (or rejects with `new Ajv.ValidationError(errors)` if you want to return custom errors from the keyword function). Ajv compiles asynchronous schemas to either [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) (default) that can be optionally transpiled with [regenerator](https://github.com/facebook/regenerator) or to [es7 async function](http://tc39.github.io/ecmascript-asyncawait/) that can be transpiled with [nodent](https://github.com/MatAtBread/nodent) or with regenerator as well. You can also supply any other transpiler as a function. See [Options](#options).

The compiled validation function has `$async: true` property (if the schema is asynchronous), so you can differentiate these functions if you are using both syncronous and asynchronous schemas.

If you are using generators, the compiled validation function can be either wrapped with [co](https://github.com/tj/co) (default) or returned as generator function, that can be used directly, e.g. in [koa](http://koajs.com/) 1.0. `co` is a small library, it is included in Ajv (both as npm dependency and in the browser bundle).

Generator functions are currently supported in Chrome, Firefox and node.js (0.11+); if you are using Ajv in other browsers or in older versions of node.js you should use one of available transpiling options. All provided async modes use global Promise class. If your platform does not have Promise you should use a polyfill that defines it.

Validation result will be a promise that resolves to `true` or rejects with an exception `Ajv.ValidationError` that has the array of validation errors in `errors` property.


Example:

```javascript
/**
 * without "async" and "transpile" options (or with option {async: true})
 * Ajv will choose the first supported/installed option in this order:
 * 1. native generator function wrapped with co
 * 2. es7 async functions transpiled with nodent
 * 3. es7 async functions transpiled with regenerator
 */

var ajv = new Ajv;

ajv.addKeyword('idExists', {
  async: true,
  type: 'number',
  validate: checkIdExists
});


function checkIdExists(schema, data) {
  return knex(schema.table)
  .select('id')
  .where('id', data)
  .then(function (rows) {
    return !!rows.length; // true if record is found
  });
}

var schema = {
  "$async": true,
  "properties": {
    "userId": {
      "type": "integer",
      "idExists": { "table": "users" }
    },
    "postId": {
      "type": "integer",
      "idExists": { "table": "posts" }
    }
  }
};

var validate = ajv.compile(schema);

validate({ userId: 1, postId: 19 }))
.then(function (valid) {
  // "valid" is always true here
  console.log('Data is valid');
})
.catch(function (err) {
  if (!(err instanceof Ajv.ValidationError)) throw err;
  // data is invalid
  console.log('Validation errors:', err.errors);
});

```

### Using transpilers with asyncronous validation functions.

To use a transpiler you should separately install it (or load its bundle in the browser).

Ajv npm package includes minified browser bundles of regenerator and nodent in dist folder.


#### Using nodent

```javascript
var ajv = new Ajv({ /* async: 'es7', */ transpile: 'nodent' });
var validate = ajv.compile(schema); // transpiled es7 async function
validate(data).then(successFunc).catch(errorFunc);
```

`npm install nodent` or use `nodent.min.js` from dist folder of npm package.


#### Using regenerator

```javascript
var ajv = new Ajv({ /* async: 'es7', */ transpile: 'regenerator' });
var validate = ajv.compile(schema); // transpiled es7 async function
validate(data).then(successFunc).catch(errorFunc);
```

`npm install regenerator` or use `regenerator.min.js` from dist folder of npm package.


#### Using other transpilers

```javascript
var ajv = new Ajv({ async: 'es7', transpile: transpileFunc });
var validate = ajv.compile(schema); // transpiled es7 async function
validate(data).then(successFunc).catch(errorFunc);
```

See [Options](#options).


#### Comparison of async modes

|mode|transpile<br>speed*|run-time<br>speed*|bundle<br>size|
|---|:-:|:-:|:-:|
|generators<br>(native)|-|1.0|-|
|es7.nodent|1.35|1.1|183Kb|
|es7.regenerator|1.0|2.7|322Kb|
|regenerator|1.0|3.2|322Kb|

\* Relative performance in node v.4, smaller is better.

[nodent](https://github.com/MatAtBread/nodent) has several advantages:

- much smaller browser bundle than regenerator
- almost the same performance of generated code as native generators in nodejs and the latest Chrome
- much better performace than native generators in other browsers
- works in IE 9 (regenerator does not)

[regenerator](https://github.com/facebook/regenerator) is a more widely adopted alternative.


## Filtering data

With [option `removeAdditional`](#options) (added by [andyscott](https://github.com/andyscott)) you can filter data during the validation.

This option modifies original data.

Example:

```javascript
var ajv = new Ajv({ removeAdditional: true });
var schema = {
  "additionalProperties": false,
  "properties": {
    "foo": { "type": "number" },
    "bar": {
      "additionalProperties": { "type": "number" },
      "properties": {
        "baz": { "type": "string" }
      }
    }
  }
}

var data = {
  "foo": 0,
  "additional1": 1, // will be removed; `additionalProperties` == false
  "bar": {
    "baz": "abc",
    "additional2": 2 // will NOT be removed; `additionalProperties` != false
  },
}

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // { "foo": 0, "bar": { "baz": "abc", "additional2": 2 }
```

If `removeAdditional` option in the example above were `"all"` then both `additional1` and `additional2` properties would have been removed.

If the option were `"failing"` then property `additional1` would have been removed regardless of its value and property `additional2` would have been removed only if its value were failing the schema in the inner `additionalProperties` (so in the example above it would have stayed because it passes the schema, but any non-number would have been removed).

__Please note__: If you use `removeAdditional` option with `additionalProperties` keyword inside `anyOf`/`oneOf` keywords your validation can fail with this schema, for example:

```json
{
  "type": "object",
  "oneOf": [
    {
      "properties": {
        "foo": { "type": "string" }
      },
      "required": [ "foo" ],
      "additionalProperties": false
    },
    {
      "properties": {
        "bar": { "type": "integer" }
      },
      "required": [ "bar" ],
      "additionalProperties": false
    }
  ]
}
```

The intention of the schema above is to allow objects with either the string property "foo" or the integer property "bar", but not with both and not with any other properties.

With the option `removeAdditional: true` the validation will pass for the object `{ "foo": "abc"}` but will fail for the object `{"bar": 1}`. It happens because while the first subschema in `oneOf` is validated, the property `bar` is removed because it is an additional property according to the standard (because it is not included in `properties` keyword in the same schema).

While this behaviour is unexpected (issues [#129](https://github.com/epoberezkin/ajv/issues/129), [#134](https://github.com/epoberezkin/ajv/issues/134)), it is correct. To have the expected behaviour (both objects are allowed and additional properties are removed) the schema has to be refactored in this way:

```json
{
  "type": "object",
  "properties": {
    "foo": { "type": "string" },
    "bar": { "type": "integer" }
  },
  "additionalProperties": false,
  "oneOf": [
    { "required": [ "foo" ] },
    { "required": [ "bar" ] }
  ]
}
```

The schema above is also more efficient - it will compile into a faster function.


## Assigning defaults

With [option `useDefaults`](#options) Ajv will assign values from `default` keyword in the schemas of `properties` and `items` (when it is the array of schemas) to the missing properties and items.

This option modifies original data.

__Please note__: by default the default value is inserted in the generated validation code as a literal (starting from v4.0), so the value inserted in the data will be the deep clone of the default in the schema.

If you need to insert the default value in the data by reference pass the option `useDefaults: "shared"`.

Inserting defaults by reference can be faster (in case you have an object in `default`) and it allows to have dynamic values in defaults, e.g. timestamp, without recompiling the schema. The side effect is that modifying the default value in any validated data instance will change the default in the schema and in other validated data instances. See example 3 below.


Example 1 (`default` in `properties`):

```javascript
var ajv = new Ajv({ useDefaults: true });
var schema = {
  "type": "object",
  "properties": {
    "foo": { "type": "number" },
    "bar": { "type": "string", "default": "baz" }
  },
  "required": [ "foo", "bar" ]
};

var data = { "foo": 1 };

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // { "foo": 1, "bar": "baz" }
```

Example 2 (`default` in `items`):

```javascript
var schema = {
  "type": "array",
  "items": [
    { "type": "number" },
    { "type": "string", "default": "foo" }
  ]
}

var data = [ 1 ];

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // [ 1, "foo" ]
```

Example 3 (inserting "defaults" by reference):

```javascript
var ajv = new Ajv({ useDefaults: 'shared' });

var schema = {
  properties: {
    foo: {
      default: { bar: 1 }
    }
  }
}

var validate = ajv.compile(schema);

var data = {};
console.log(validate(data)); // true
console.log(data); // { foo: { bar: 1 } }

data.foo.bar = 2;

var data2 = {};
console.log(validate(data2)); // true
console.log(data2); // { foo: { bar: 2 } }
```

`default` keywords in other cases are ignored:

- not in `properties` or `items` subschemas
- in schemas inside `anyOf`, `oneOf` and `not` (see [#42](https://github.com/epoberezkin/ajv/issues/42))
- in `if` subschema of v5 `switch` keyword
- in schemas generated by custom macro keywords


## Coercing data types

When you are validating user inputs all your data properties are usually strings. The option `coerceTypes` allows you to have your data types coerced to the types specified in your schema `type` keywords, both to pass the validation and to use the correctly typed data afterwards.

This option modifies original data.

__Please note__: if you pass a scalar value to the validating function its type will be coerced and it will pass the validation, but the value of the variable you pass won't be updated because scalars are passed by value.


Example 1:

```javascript
var ajv = new Ajv({ coerceTypes: true });
var schema = {
  "type": "object",
  "properties": {
    "foo": { "type": "number" },
    "bar": { "type": "boolean" }
  },
  "required": [ "foo", "bar" ]
};

var data = { "foo": "1", "bar": "false" };

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // { "foo": 1, "bar": false }
```

Example 2 (array coercions):

```javascript
var ajv = new Ajv({ coerceTypes: 'array' });
var schema = {
  "properties": {
    "foo": { "type": "array", "items": { "type": "number" } },
    "bar": { "type": "boolean" }
  }
};

var data = { "foo": "1", "bar": ["false"] };

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // { "foo": [1], "bar": false }
```

The coercion rules, as you can see from the example, are different from JavaScript both to validate user input as expected and to have the coercion reversible (to correctly validate cases where different types are defined in subschemas of "anyOf" and other compound keywords).

See [Coercion rules](https://github.com/epoberezkin/ajv/blob/master/COERCION.md) for details.


## API

##### new Ajv(Object options) -&gt; Object

Create Ajv instance.

All the instance methods below are bound to the instance, so they can be used without the instance.


##### .compile(Object schema) -&gt; Function&lt;Object data&gt;

Generate validating function and cache the compiled schema for future use.

Validating function returns boolean and has properties `errors` with the errors from the last validation (`null` if there were no errors) and `schema` with the reference to the original schema.

Unless the option `validateSchema` is false, the schema will be validated against meta-schema and if schema is invalid the error will be thrown. See [options](#options).


##### .compileAsync(Object schema, Function callback)

Asyncronous version of `compile` method that loads missing remote schemas using asynchronous function in `options.loadSchema`. Callback will always be called with 2 parameters: error (or null) and validating function. Error will be not null in the following cases:

- missing schema can't be loaded (`loadSchema` calls callback with error).
- the schema containing missing reference is loaded, but the reference cannot be resolved.
- schema (or some referenced schema) is invalid.

The function compiles schema and loads the first missing schema multiple times, until all missing schemas are loaded.

See example in [Asynchronous compilation](#asynchronous-compilation).


##### .validate(Object schema|String key|String ref, data) -&gt; Boolean

Validate data using passed schema (it will be compiled and cached).

Instead of the schema you can use the key that was previously passed to `addSchema`, the schema id if it was present in the schema or any previously resolved reference.

Validation errors will be available in the `errors` property of Ajv instance (`null` if there were no errors).

__Please note__: every time this method is called the errors are overwritten so you need to copy them to another variable if you want to use them later.

If the schema is asynchronous (has `$async` keyword on the top level) this method returns a Promise. See [Asynchronous validation](#asynchronous-validation).


##### .addSchema(Array&lt;Object&gt;|Object schema [, String key])

Add schema(s) to validator instance. This method does not compile schemas (but it still validates them). Because of that dependencies can be added in any order and circular dependencies are supported. It also prevents unnecessary compilation of schemas that are containers for other schemas but not used as a whole.

Array of schemas can be passed (schemas should have ids), the second parameter will be ignored.

Key can be passed that can be used to reference the schema and will be used as the schema id if there is no id inside the schema. If the key is not passed, the schema id will be used as the key.


Once the schema is added, it (and all the references inside it) can be referenced in other schemas and used to validate data.

Although `addSchema` does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.

By default the schema is validated against meta-schema before it is added, and if the schema does not pass validation the exception is thrown. This behaviour is controlled by `validateSchema` option.


##### .addMetaSchema(Array&lt;Object&gt;|Object schema [, String key])

Adds meta schema(s) that can be used to validate other schemas. That function should be used instead of `addSchema` because there may be instance options that would compile a meta schema incorrectly (at the moment it is `removeAdditional` option).

There is no need to explicitly add draft 4 meta schema (http://json-schema.org/draft-04/schema and http://json-schema.org/schema) - it is added by default, unless option `meta` is set to `false`. You only need to use it if you have a changed meta-schema that you want to use to validate your schemas. See `validateSchema`.

With option `v5: true` [meta-schema that includes v5 keywords](https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json) also added.


##### <a name="api-validateschema"></a>.validateSchema(Object schema) -&gt; Boolean

Validates schema. This method should be used to validate schemas rather than `validate` due to the inconsistency of `uri` format in JSON-Schema standard.

By default this method is called automatically when the schema is added, so you rarely need to use it directly.

If schema doesn't have `$schema` property it is validated against draft 4 meta-schema (option `meta` should not be false) or against [v5 meta-schema](https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#) if option `v5` is true.

If schema has `$schema` property then the schema with this id (that should be previously added) is used to validate passed schema.

Errors will be available at `ajv.errors`.


##### .getSchema(String key) -&gt; Function&lt;Object data&gt;

Retrieve compiled schema previously added with `addSchema` by the key passed to `addSchema` or by its full reference (id). Returned validating function has `schema` property with the reference to the original schema.


##### .removeSchema([Object schema|String key|String ref|RegExp pattern])

Remove added/cached schema. Even if schema is referenced by other schemas it can be safely removed as dependent schemas have local references.

Schema can be removed using:
- key passed to `addSchema`
- it's full reference (id)
- RegExp that should match schema id or key (meta-schemas won't be removed)
- actual schema object that will be stable-stringified to remove schema from cache

If no parameter is passed all schemas but meta-schemas will be removed and the cache will be cleared.


##### <a name="api-addformat"></a>.addFormat(String name, String|RegExp|Function|Object format)

Add custom format to validate strings. It can also be used to replace pre-defined formats for Ajv instance.

Strings are converted to RegExp.

Function should return validation result as `true` or `false`.

If object is passed it should have properties `validate`, `compare` and `async`:

- _validate_: a string, RegExp or a function as described above.
- _compare_: an optional comparison function that accepts two strings and compares them according to the format meaning. This function is used with keywords `formatMaximum`/`formatMinimum` (from [v5 proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals) - `v5` option should be used). It should return `1` if the first value is bigger than the second value, `-1` if it is smaller and `0` if it is equal.
- _async_: an optional `true` value if `validate` is an asynchronous function; in this case it should return a promise that resolves with a value `true` or `false`.

Custom formats can be also added via `formats` option.


##### <a name="api-addkeyword"></a>.addKeyword(String keyword, Object definition)

Add custom validation keyword to Ajv instance.

Keyword should be different from all standard JSON schema keywords and different from previously defined keywords. There is no way to redefine keywords or to remove keyword definition from the instance.

Keyword must start with a letter, `_` or `$`, and may continue with letters, numbers, `_`, `$`, or `-`.
It is recommended to use an application-specific prefix for keywords to avoid current and future name collisions.

Example Keywords:
- `"xyz-example"`: valid, and uses prefix for the xyz project to avoid name collisions.
- `"example"`: valid, but not recommended as it could collide with future versions of JSON schema etc.
- `"3-example"`: invalid as numbers are not allowed to be the first character in a keyword

Keyword definition is an object with the following properties:

- _type_: optional string or array of strings with data type(s) that the keyword applies to. If not present, the keyword will apply to all types.
- _validate_: validating function
- _compile_: compiling function
- _macro_: macro function
- _inline_: compiling function that returns code (as string)
- _schema_: an optional `false` value used with "validate" keyword to not pass schema
- _metaSchema_: an optional meta-schema for keyword schema
- _modifying_: `true` MUST be passed if keyword modifies data
- _valid_: pass `true`/`false` to pre-define validation result, the result returned from validation function will be ignored. This option cannot be used with macro keywords.
- _$data_: an optional `true` value to support [$data reference](#data-reference) as the value of custom keyword. The reference will be resolved at validation time. If the keyword has meta-schema it would be extended to allow $data and it will be used to validate the resolved value. Supporting $data reference requires that keyword has validating function (as the only option or in addition to compile, macro or inline function).
- _async_: an optional `true` value if the validation function is asynchronous (whether it is compiled or passed in _validate_ property); in this case it should return a promise that resolves with a value `true` or `false`. This option is ignored in case of "macro" and "inline" keywords.
- _errors_: an optional boolean indicating whether keyword returns errors. If this property is not set Ajv will determine if the errors were set in case of failed validation.

_compile_, _macro_ and _inline_ are mutually exclusive, only one should be used at a time. _validate_ can be used separately or in addition to them to support $data reference.

__Please note__: If the keyword is validating data type that is different from the type(s) in its definition, the validation function will not be called (and expanded macro will not be used), so there is no need to check for data type inside validation function or inside schema returned by macro function (unless you want to enforce a specific type and for some reason do not want to use a separate `type` keyword for that). In the same way as standard keywords work, if the keyword does not apply to the data type being validated, the validation of this keyword will succeed.

See [Defining custom keywords](#defining-custom-keywords) for more details.


##### .getKeyword(String keyword) -&gt; Object|Boolean

Returns custom keyword definition, `true` for pre-defined keywords and `false` if the keyword is unknown.


##### .removeKeyword(String keyword)

Removes custom or pre-defined keyword so you can redefine them.

While this method can be used to extend pre-defined keywords, it can also be used to completely change their meaning - it may lead to unexpected results.

__Please note__: schemas compiled before the keyword is removed will continue to work without changes. To recompile schemas use `removeSchema` method and compile them again.


##### .errorsText([Array&lt;Object&gt; errors [, Object options]]) -&gt; String

Returns the text with all errors in a String.

Options can have properties `separator` (string used to separate errors, ", " by default) and `dataVar` (the variable name that dataPaths are prefixed with, "data" by default).


## Options

Defaults:

```javascript
{
  // validation and reporting options:
  v5:               false,
  allErrors:        false,
  verbose:          false,
  jsonPointers:     false,
  uniqueItems:      true,
  unicode:          true,
  format:           'fast',
  formats:          {},
  unknownFormats:   'ignore',
  schemas:          {},
  // referenced schema options:
  missingRefs:      true,
  extendRefs:       true,
  loadSchema:       undefined, // function(uri, cb) { /* ... */ cb(err, schema); },
  // options to modify validated data:
  removeAdditional: false,
  useDefaults:      false,
  coerceTypes:      false,
  // asynchronous validation options:
  async:            undefined,
  transpile:        undefined,
  // advanced options:
  meta:             true,
  validateSchema:   true,
  addUsedSchema:    true,
  inlineRefs:       true,
  passContext:      false,
  loopRequired:     Infinity,
  ownProperties:    false,
  multipleOfPrecision: false,
  errorDataPath:    'object',
  sourceCode:       true,
  messages:         true,
  beautify:         false,
  cache:            new Cache
}
```

##### Validation and reporting options

- _v5_: add keywords `switch`, `constant`, `contains`, `patternGroups`, `patternRequired`, `formatMaximum` / `formatMinimum` and `formatExclusiveMaximum` / `formatExclusiveMinimum` from [JSON-schema v5 proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals). With this option added schemas without `$schema` property are validated against [v5 meta-schema](https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#). `false` by default.
- _allErrors_: check all rules collecting all errors. Default is to return after the first error.
- _verbose_: include the reference to the part of the schema (`schema` and `parentSchema`) and validated data in errors (false by default).
- _jsonPointers_: set `dataPath` propery of errors using [JSON Pointers](https://tools.ietf.org/html/rfc6901) instead of JavaScript property access notation.
- _uniqueItems_: validate `uniqueItems` keyword (true by default).
- _unicode_: calculate correct length of strings with unicode pairs (true by default). Pass `false` to use `.length` of strings that is faster, but gives "incorrect" lengths of strings with unicode pairs - each unicode pair is counted as two characters.
- _format_: formats validation mode ('fast' by default). Pass 'full' for more correct and slow validation or `false` not to validate formats at all. E.g., 25:00:00 and 2015/14/33 will be invalid time and date in 'full' mode but it will be valid in 'fast' mode.
- _formats_: an object with custom formats. Keys and values will be passed to `addFormat` method.
- _unknownFormats_: handling of unknown formats. Option values:
  - `true` (will be default in 5.0.0) - if the unknown format is encountered the exception is thrown during schema compilation. If `format` keyword value is [v5 $data reference](#data-reference) and it is unknown the validation will fail.
  - `[String]` - an array of unknown format names that will be ignored. This option can be used to allow usage of third party schemas with format(s) for which you don't have definitions, but still fail if some other unknown format is used. If `format` keyword value is [v5 $data reference](#data-reference) and it is not in this array the validation will fail.
  - `"ignore"` (default now) - to log warning during schema compilation and always pass validation. This option is not recommended, as it allows to mistype format name. This behaviour is required by JSON-schema specification.
- _schemas_: an array or object of schemas that will be added to the instance. If the order is important, pass array. In this case schemas must have IDs in them. Otherwise the object can be passed - `addSchema(value, key)` will be called for each schema in this object.


##### Referenced schema options

- _missingRefs_: handling of missing referenced schemas. Option values:
  - `true` (default) - if the reference cannot be resolved during compilation the exception is thrown. The thrown error has properties `missingRef` (with hash fragment) and `missingSchema` (without it). Both properties are resolved relative to the current base id (usually schema id, unless it was substituted).
  - `"ignore"` - to log error during compilation and always pass validation.
  - `"fail"` - to log error and successfully compile schema but fail validation if this rule is checked.
- _extendRefs_: validation of other keywords when `$ref` is present in the schema. Option values:
  - `true` (default) - validate all keywords in the schemas with `$ref`.
  - `"ignore"` - when `$ref` is used other keywords are ignored (as per [JSON Reference](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03#section-3) standard). A warning will be logged during the schema compilation.
  - `"fail"` - if other validation keywords are used together with `$ref` the exception will be throw when the schema is compiled.
- _loadSchema_: asynchronous function that will be used to load remote schemas when the method `compileAsync` is used and some reference is missing (option `missingRefs` should NOT be 'fail' or 'ignore'). This function should accept 2 parameters: remote schema uri and node-style callback. See example in [Asynchronous compilation](#asynchronous-compilation).


##### Options to modify validated data

- _removeAdditional_: remove additional properties - see example in [Filtering data](#filtering-data). This option is not used if schema is added with `addMetaSchema` method. Option values:
  - `false` (default) - not to remove additional properties
  - `"all"` - all additional properties are removed, regardless of `additionalProperties` keyword in schema (and no validation is made for them).
  - `true` - only additional properties with `additionalProperties` keyword equal to `false` are removed.
  - `"failing"` - additional properties that fail schema validation will be removed (where `additionalProperties` keyword is `false` or schema).
- _useDefaults_: replace missing properties and items with the values from corresponding `default` keywords. Default behaviour is to ignore `default` keywords. This option is not used if schema is added with `addMetaSchema` method. See examples in [Assigning defaults](#assigning-defaults). Option values:
  - `false` (default) - do not use defaults
  - `true` - insert defaults by value (safer and slower, object literal is used).
  - `"shared"` - insert defaults by reference (faster). If the default is an object, it will be shared by all instances of validated data. If you modify the inserted default in the validated data, it will be modified in the schema as well.
- _coerceTypes_: change data type of data to match `type` keyword. See the example in [Coercing data types](#coercing-data-types) and [coercion rules](https://github.com/epoberezkin/ajv/blob/master/COERCION.md). Option values:
  - `false` (default) - no type coercion.
  - `true` - coerce scalar data types.
  - `"array"` - in addition to coercions between scalar types, coerce scalar data to an array with one element and vice versa (as required by the schema).


##### Asynchronous validation options

- _async_: determines how Ajv compiles asynchronous schemas (see [Asynchronous validation](#asynchronous-validation)) to functions. Option values:
  - `"*"` / `"co*"` - compile to generator function ("co*" - wrapped with `co.wrap`). If generators are not supported and you don't provide `transpile` option, the exception will be thrown when Ajv instance is created.
  - `"es7"` - compile to es7 async function. Unless your platform supports them you need to provide `transpile` option. Currently only MS Edge 13 with flag supports es7 async functions according to [compatibility table](http://kangax.github.io/compat-table/es7/)).
  - `true` - if transpile option is not passed Ajv will choose the first supported/installed async/transpile modes in this order: "co*" (native generator with co.wrap), "es7"/"nodent", "co*"/"regenerator" during the creation of the Ajv instance. If none of the options is available the exception will be thrown.
  - `undefined`- Ajv will choose the first available async mode in the same way as with `true` option but when the first asynchronous schema is compiled.
- _transpile_: determines whether Ajv transpiles compiled asynchronous validation function. Option values:
  - `"nodent"` - transpile with [nodent](https://github.com/MatAtBread/nodent). If nodent is not installed, the exception will be thrown. nodent can only transpile es7 async functions; it will enforce this mode.
  - `"regenerator"` - transpile with [regenerator](https://github.com/facebook/regenerator). If regenerator is not installed, the exception will be thrown.
  - a function - this function should accept the code of validation function as a string and return transpiled code. This option allows you to use any other transpiler you prefer.


##### Advanced options

- _meta_: add [meta-schema](http://json-schema.org/documentation.html) so it can be used by other schemas (true by default). With option `v5: true` [v5 meta-schema](https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#) will be added as well. If an object is passed, it will be used as the default meta-schema for schemas that have no `$schema` keyword. This default meta-schema MUST have `$schema` keyword.
- _validateSchema_: validate added/compiled schemas against meta-schema (true by default). `$schema` property in the schema can either be http://json-schema.org/schema or http://json-schema.org/draft-04/schema or absent (draft-4 meta-schema will be used) or can be a reference to the schema previously added with `addMetaSchema` method. Option values:
  - `true` (default) -  if the validation fails, throw the exception.
  - `"log"` - if the validation fails, log error.
  - `false` - skip schema validation.
- _addUsedSchema_: by default methods `compile` and `validate` add schemas to the instance if they have `id` property that doesn't start with "#". If `id` is present and it is not unique the exception will be thrown. Set this option to `false` to skip adding schemas to the instance and the `id` uniqueness check when these methods are used. This option does not affect `addSchema` method.
- _inlineRefs_: Affects compilation of referenced schemas. Option values:
  - `true` (default) - the referenced schemas that don't have refs in them are inlined, regardless of their size - that substantially improves performance at the cost of the bigger size of compiled schema functions.
  - `false` - to not inline referenced schemas (they will be compiled as separate functions).
  - integer number - to limit the maximum number of keywords of the schema that will be inlined.
- _passContext_: pass validation context to custom keyword functions. If this option is `true` and you pass some context to the compiled validation function with `validate.call(context, data)`, the `context` will be available as `this` in your custom keywords. By default `this` is Ajv instance.
- _loopRequired_: by default `required` keyword is compiled into a single expression (or a sequence of statements in `allErrors` mode). In case of a very large number of properties in this keyword it may result in a very big validation function. Pass integer to set the number of properties above which `required` keyword will be validated in a loop - smaller validation function size but also worse performance.
- _ownProperties_: by default ajv iterates over all enumerable object properties; when this option is `true` only own enumerable object properties (i.e. found directly on the object rather than on its prototype) are iterated. Contributed by @mbroadst.
- _multipleOfPrecision_: by default `multipleOf` keyword is validated by comparing the result of division with parseInt() of that result. It works for dividers that are bigger than 1. For small dividers such as 0.01 the result of the division is usually not integer (even when it should be integer, see issue [#84](https://github.com/epoberezkin/ajv/issues/84)). If you need to use fractional dividers set this option to some positive integer N to have `multipleOf` validated using this formula: `Math.abs(Math.round(division) - division) < 1e-N` (it is slower but allows for float arithmetics deviations).
- _errorDataPath_: set `dataPath` to point to 'object' (default) or to 'property' when validating keywords `required`, `additionalProperties` and `dependencies`.
- _sourceCode_: add `sourceCode` property to validating function (for debugging; this code can be different from the result of toString call).
- _messages_: Include human-readable messages in errors. `true` by default. `false` can be passed when custom messages are used (e.g. with [ajv-i18n](https://github.com/epoberezkin/ajv-i18n)).
- _beautify_: format the generated function with [js-beautify](https://github.com/beautify-web/js-beautify) (the validating function is generated without line-breaks). `npm install js-beautify` to use this option. `true` or js-beautify options can be passed.
- _cache_: an optional instance of cache to store compiled schemas using stable-stringified schema as a key. For example, set-associative cache [sacjs](https://github.com/epoberezkin/sacjs) can be used. If not passed then a simple hash is used which is good enough for the common use case (a limited number of statically defined schemas). Cache should have methods `put(key, value)`, `get(key)`, `del(key)` and `clear()`.


## Validation errors

In case of validation failure Ajv assigns the array of errors to `.errors` property of validation function (or to `.errors` property of Ajv instance in case `validate` or `validateSchema` methods were called). In case of [asynchronous validation](#asynchronous-validation) the returned promise is rejected with the exception of the class `Ajv.ValidationError` that has `.errors` poperty.


### Error objects

Each error is an object with the following properties:

- _keyword_: validation keyword.
- _dataPath_: the path to the part of the data that was validated. By default `dataPath` uses JavaScript property access notation (e.g., `".prop[1].subProp"`). When the option `jsonPointers` is true (see [Options](#options)) `dataPath` will be set using JSON pointer standard (e.g., `"/prop/1/subProp"`).
- _schemaPath_: the path (JSON-pointer as a URI fragment) to the schema of the keyword that failed validation.
- _params_: the object with the additional information about error that can be used to create custom error messages (e.g., using [ajv-i18n](https://github.com/epoberezkin/ajv-i18n) package). See below for parameters set by all keywords.
- _message_: the standard error message (can be excluded with option `messages` set to false).
- _schema_: the schema of the keyword (added with `verbose` option).
- _parentSchema_: the schema containing the keyword (added with `verbose` option)
- _data_: the data validated by the keyword (added with `verbose` option).


### Error parameters

Properties of `params` object in errors depend on the keyword that failed validation.

- `maxItems`, `minItems`, `maxLength`, `minLength`, `maxProperties`, `minProperties` - property `limit` (number, the schema of the keyword).
- `additionalItems` - property `limit` (the maximum number of allowed items in case when `items` keyword is an array of schemas and `additionalItems` is false).
- `additionalProperties` - property `additionalProperty` (the property not used in `properties` and `patternProperties` keywords).
- `patternGroups` (with v5 option) - properties:
  - `pattern`
  - `reason` ("minimum"/"maximum"),
  - `limit` (max/min allowed number of properties matching number)
- `dependencies` - properties:
  - `property` (dependent property),
  - `missingProperty` (required missing dependency - only the first one is reported currently)
  - `deps` (required dependencies, comma separated list as a string),
  - `depsCount` (the number of required dependedncies).
- `format` - property `format` (the schema of the keyword).
- `maximum`, `minimum` - properties:
  - `limit` (number, the schema of the keyword),
  - `exclusive` (boolean, the schema of `exclusiveMaximum` or `exclusiveMinimum`),
  - `comparison` (string, comparison operation to compare the data to the limit, with the data on the left and the limit on the right; can be "<", "<=", ">", ">=")
- `multipleOf` - property `multipleOf` (the schema of the keyword)
- `pattern` - property `pattern` (the schema of the keyword)
- `required` - property `missingProperty` (required property that is missing).
- `patternRequired` (with v5 option) - property `missingPattern` (required pattern that did not match any property).
- `type` - property `type` (required type(s), a string, can be a comma-separated list)
- `uniqueItems` - properties `i` and `j` (indices of duplicate items).
- `enum` - property `allowedValues` pointing to the array of values (the schema of the keyword).
- `$ref` - property `ref` with the referenced schema URI.
- custom keywords (in case keyword definition doesn't create errors) - property `keyword` (the keyword name).


## Related packages

- [ajv-cli](https://github.com/epoberezkin/ajv-cli) - command line interface for Ajv
- [ajv-i18n](https://github.com/epoberezkin/ajv-i18n) - internationalised error messages
- [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch) - keywords $merge and $patch from v5 proposals.
- [ajv-keywords](https://github.com/epoberezkin/ajv-keywords) - several custom keywords that can be used with Ajv (typeof, instanceof, range, propertyNames)


## Some packages using Ajv

- [webpack](https://github.com/webpack/webpack) - a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
- [jsonscript-js](https://github.com/JSONScript/jsonscript-js) - the interpreter for [JSONScript](http://www.jsonscript.org) - scripted processing of existing endpoints and services
- [osprey-method-handler](https://github.com/mulesoft-labs/osprey-method-handler) - Express middleware for validating requests and responses based on a RAML method object, used in [osprey](https://github.com/mulesoft/osprey) - validating API proxy generated from a RAML definition
- [har-validator](https://github.com/ahmadnassri/har-validator) - HTTP Archive (HAR) validator
- [jsoneditor](https://github.com/josdejong/jsoneditor) - a web-based tool to view, edit, format, and validate JSON http://jsoneditoronline.org
- [JSON Schema Lint](https://github.com/nickcmaynard/jsonschemalint) - a web tool to validate JSON/YAML document against a single JSON-schema http://jsonschemalint.com
- [objection](https://github.com/vincit/objection.js) - SQL-friendly ORM for node.js
- [table](https://github.com/gajus/table) - formats data into a string table
- [ripple-lib](https://github.com/ripple/ripple-lib) - a JavaScript API for interacting with [Ripple](https://ripple.com) in Node.js and the browser
- [restbase](https://github.com/wikimedia/restbase) - distributed storage with REST API & dispatcher for backend services built to provide a low-latency & high-throughput API for Wikipedia / Wikimedia content
- [hippie-swagger](https://github.com/CacheControl/hippie-swagger) - [Hippie](https://github.com/vesln/hippie) wrapper that provides end to end API testing with swagger validation
- [react-form-controlled](https://github.com/seeden/react-form-controlled) - React controlled form components with validation
- [rabbitmq-schema](https://github.com/tjmehta/rabbitmq-schema) - a schema definition module for RabbitMQ graphs and messages
- [@query/schema](https://www.npmjs.com/package/@query/schema) - stream filtering with a URI-safe query syntax parsing to JSON Schema
- [chai-ajv-json-schema](https://github.com/peon374/chai-ajv-json-schema) - chai plugin to us JSON-schema with expect in mocha tests
- [grunt-jsonschema-ajv](https://github.com/SignpostMarv/grunt-jsonschema-ajv) - Grunt plugin for validating files against JSON-Schema
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - extract text from bundle into a file
- [electron-builder](https://github.com/electron-userland/electron-builder) - a solution to package and build a ready for distribution Electron app 
- [addons-linter](https://github.com/mozilla/addons-linter) - Mozilla Add-ons Linter
- [gh-pages-generator](https://github.com/epoberezkin/gh-pages-generator) - multi-page site generator converting markdown files to GitHub pages


## Tests

```
npm install
git submodule update --init
npm test
```

## Contributing

All validation functions are generated using doT templates in [dot](https://github.com/epoberezkin/ajv/tree/master/lib/dot) folder. Templates are precompiled so doT is not a run-time dependency.

`npm run build` - compiles templates to [dotjs](https://github.com/epoberezkin/ajv/tree/master/lib/dotjs) folder.

`npm run watch` - automatically compiles templates when files in dot folder change

Please see [Contributing guidelines](https://github.com/epoberezkin/ajv/blob/master/CONTRIBUTING.md)


## Changes history

See https://github.com/epoberezkin/ajv/releases

__Please note__: [Changes in version 5.0.1-beta](https://github.com/epoberezkin/ajv/releases/tag/5.0.1-beta.0).

[Changes in version 4.6.0](https://github.com/epoberezkin/ajv/releases/tag/4.6.0).

[Changes in version 4.0.0](https://github.com/epoberezkin/ajv/releases/tag/4.0.0).

[Changes in version 3.0.0](https://github.com/epoberezkin/ajv/releases/tag/3.0.0).

[Changes in version 2.0.0](https://github.com/epoberezkin/ajv/releases/tag/2.0.0).


## License

[MIT](https://github.com/epoberezkin/ajv/blob/master/LICENSE)
