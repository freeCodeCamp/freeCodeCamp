<img align="right" alt="Ajv logo" width="160" src="https://ajv.js.org/images/ajv_logo.png">

# Ajv: Another JSON Schema Validator

The fastest JSON Schema validator for Node.js and browser. Supports draft-04/06/07.

[![Build Status](https://travis-ci.org/ajv-validator/ajv.svg?branch=master)](https://travis-ci.org/ajv-validator/ajv)
[![npm](https://img.shields.io/npm/v/ajv.svg)](https://www.npmjs.com/package/ajv)
[![npm (beta)](https://img.shields.io/npm/v/ajv/beta)](https://www.npmjs.com/package/ajv/v/7.0.0-beta.4)
[![npm downloads](https://img.shields.io/npm/dm/ajv.svg)](https://www.npmjs.com/package/ajv)
[![Coverage Status](https://coveralls.io/repos/github/ajv-validator/ajv/badge.svg?branch=master)](https://coveralls.io/github/ajv-validator/ajv?branch=master)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)
[![GitHub Sponsors](https://img.shields.io/badge/$-sponsors-brightgreen)](https://github.com/sponsors/epoberezkin)


## Ajv v7 beta is released

[Ajv version 7 (beta)](https://github.com/ajv-validator/ajv/tree/v7-beta) is released with these changes:

- support of JSON Schema draft-2019-09 features: [`unevaluatedProperties`](./json-schema.md#unevaluatedproperties) and [`unevaluatedItems`](./json-schema.md#unevaluateditems), [dynamic recursive references](./validation.md#extending-recursive-schemas) and other [additional keywords](./json-schema.md#json-schema-draft-2019-09).
- to reduce the mistakes in JSON schemas and unexpected validation results, [strict mode](./docs/strict-mode.md) is added - it prohibits ignored or ambiguous JSON Schema elements.
- to make code injection from untrusted schemas impossible, [code generation](./docs/codegen.md) is fully re-written to be safe and to allow code optimization (compiled schema code size is reduced by more than 10%).
- to simplify Ajv extensions, the new keyword API that is used by pre-defined keywords is available to user-defined keywords - it is much easier to define any keywords now, especially with subschemas. [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package was updated to use the new API (in [v4.0.0-beta.0](https://github.com/ajv-validator/ajv-keywords/releases/tag/v4.0.0-beta.0))
- schemas are compiled to ES6 code (ES5 code generation is also supported with an option).
- to improve reliability and maintainability the code is migrated to TypeScript.

**Please note**:

- the support for JSON-Schema draft-04 is removed - if you have schemas using "id" attributes you have to replace them with "\$id" (or continue using version 6 that will be supported until 02/28/2021).
- all formats are separated to ajv-formats package - they have to be explicitely added if you use them.

See [release notes](https://github.com/ajv-validator/ajv/releases/tag/v7.0.0-beta.0) for the details.

To install the new version:

```bash
npm install ajv@beta
```

See [Getting started with v7](https://github.com/ajv-validator/ajv/tree/v7-beta#usage) for code example.


## Mozilla MOSS grant and OpenJS Foundation

[<img src="https://www.poberezkin.com/images/mozilla.png" width="240" height="68">](https://www.mozilla.org/en-US/moss/) &nbsp;&nbsp;&nbsp; [<img src="https://www.poberezkin.com/images/openjs.png" width="220" height="68">](https://openjsf.org/blog/2020/08/14/ajv-joins-openjs-foundation-as-an-incubation-project/)

Ajv has been awarded a grant from Mozilla’s [Open Source Support (MOSS) program](https://www.mozilla.org/en-US/moss/) in the “Foundational Technology” track! It will sponsor the development of Ajv support of [JSON Schema version 2019-09](https://tools.ietf.org/html/draft-handrews-json-schema-02) and of [JSON Type Definition](https://tools.ietf.org/html/draft-ucarion-json-type-definition-04).

Ajv also joined [OpenJS Foundation](https://openjsf.org/) – having this support will help ensure the longevity and stability of Ajv for all its users.

This [blog post](https://www.poberezkin.com/posts/2020-08-14-ajv-json-validator-mozilla-open-source-grant-openjs-foundation.html) has more details.

I am looking for the long term maintainers of Ajv – working with [ReadySet](https://www.thereadyset.co/), also sponsored by Mozilla, to establish clear guidelines for the role of a "maintainer" and the contribution standards, and to encourage a wider, more inclusive, contribution from the community.


## Please [sponsor Ajv development](https://github.com/sponsors/epoberezkin)

Since I asked to support Ajv development 40 people and 6 organizations contributed via GitHub and OpenCollective - this support helped receiving the MOSS grant!

Your continuing support is very important - the funds will be used to develop and maintain Ajv once the next major version is released.

Please sponsor Ajv via:
- [GitHub sponsors page](https://github.com/sponsors/epoberezkin) (GitHub will match it)
- [Ajv Open Collective️](https://opencollective.com/ajv)

Thank you.


#### Open Collective sponsors

<a href="https://opencollective.com/ajv"><img src="https://opencollective.com/ajv/individuals.svg?width=890"></a>

<a href="https://opencollective.com/ajv/organization/0/website"><img src="https://opencollective.com/ajv/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/1/website"><img src="https://opencollective.com/ajv/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/2/website"><img src="https://opencollective.com/ajv/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/3/website"><img src="https://opencollective.com/ajv/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/4/website"><img src="https://opencollective.com/ajv/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/5/website"><img src="https://opencollective.com/ajv/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/6/website"><img src="https://opencollective.com/ajv/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/7/website"><img src="https://opencollective.com/ajv/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/8/website"><img src="https://opencollective.com/ajv/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/ajv/organization/9/website"><img src="https://opencollective.com/ajv/organization/9/avatar.svg"></a>


## Using version 6

[JSON Schema draft-07](http://json-schema.org/latest/json-schema-validation.html) is published.

[Ajv version 6.0.0](https://github.com/ajv-validator/ajv/releases/tag/v6.0.0) that supports draft-07 is released. It may require either migrating your schemas or updating your code (to continue using draft-04 and v5 schemas, draft-06 schemas will be supported without changes).

__Please note__: To use Ajv with draft-06 schemas you need to explicitly add the meta-schema to the validator instance:

```javascript
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
```

To use Ajv with draft-04 schemas in addition to explicitly adding meta-schema you also need to use option schemaId:

```javascript
var ajv = new Ajv({schemaId: 'id'});
// If you want to use both draft-04 and draft-06/07 schemas:
// var ajv = new Ajv({schemaId: 'auto'});
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
```


## Contents

- [Performance](#performance)
- [Features](#features)
- [Getting started](#getting-started)
- [Frequently Asked Questions](https://github.com/ajv-validator/ajv/blob/master/FAQ.md)
- [Using in browser](#using-in-browser)
  - [Ajv and Content Security Policies (CSP)](#ajv-and-content-security-policies-csp)
- [Command line interface](#command-line-interface)
- Validation
  - [Keywords](#validation-keywords)
  - [Annotation keywords](#annotation-keywords)
  - [Formats](#formats)
  - [Combining schemas with $ref](#ref)
  - [$data reference](#data-reference)
  - NEW: [$merge and $patch keywords](#merge-and-patch-keywords)
  - [Defining custom keywords](#defining-custom-keywords)
  - [Asynchronous schema compilation](#asynchronous-schema-compilation)
  - [Asynchronous validation](#asynchronous-validation)
- [Security considerations](#security-considerations)
  - [Security contact](#security-contact)
  - [Untrusted schemas](#untrusted-schemas)
  - [Circular references in objects](#circular-references-in-javascript-objects)
  - [Trusted schemas](#security-risks-of-trusted-schemas)
  - [ReDoS attack](#redos-attack)
- Modifying data during validation
  - [Filtering data](#filtering-data)
  - [Assigning defaults](#assigning-defaults)
  - [Coercing data types](#coercing-data-types)
- API
  - [Methods](#api)
  - [Options](#options)
  - [Validation errors](#validation-errors)
- [Plugins](#plugins)
- [Related packages](#related-packages)
- [Some packages using Ajv](#some-packages-using-ajv)
- [Tests, Contributing, Changes history](#tests)
- [Support, Code of conduct, License](#open-source-software-support)


## Performance

Ajv generates code using [doT templates](https://github.com/olado/doT) to turn JSON Schemas into super-fast validation functions that are efficient for v8 optimization.

Currently Ajv is the fastest and the most standard compliant validator according to these benchmarks:

- [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark) - 50% faster than the second place
- [jsck benchmark](https://github.com/pandastrike/jsck#benchmarks) - 20-190% faster
- [z-schema benchmark](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)
- [themis benchmark](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)


Performance of different validators by [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark):

[![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=32,4,1&chs=600x416&chxl=-1:|djv|ajv|json-schema-validator-generator|jsen|is-my-json-valid|themis|z-schema|jsck|skeemas|json-schema-library|tv4&chd=t:100,98,72.1,66.8,50.1,15.1,6.1,3.8,1.2,0.7,0.2)](https://github.com/ebdrup/json-schema-benchmark/blob/master/README.md#performance)


## Features

- Ajv implements full JSON Schema [draft-06/07](http://json-schema.org/) and draft-04 standards:
  - all validation keywords (see [JSON Schema validation keywords](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md))
  - full support of remote refs (remote schemas have to be added with `addSchema` or compiled to be available)
  - support of circular references between schemas
  - correct string lengths for strings with unicode pairs (can be turned off)
  - [formats](#formats) defined by JSON Schema draft-07 standard and custom formats (can be turned off)
  - [validates schemas against meta-schema](#api-validateschema)
- supports [browsers](#using-in-browser) and Node.js 0.10-14.x
- [asynchronous loading](#asynchronous-schema-compilation) of referenced schemas during compilation
- "All errors" validation mode with [option allErrors](#options)
- [error messages with parameters](#validation-errors) describing error reasons to allow creating custom error messages
- i18n error messages support with [ajv-i18n](https://github.com/ajv-validator/ajv-i18n) package
- [filtering data](#filtering-data) from additional properties
- [assigning defaults](#assigning-defaults) to missing properties and items
- [coercing data](#coercing-data-types) to the types specified in `type` keywords
- [custom keywords](#defining-custom-keywords)
- draft-06/07 keywords `const`, `contains`, `propertyNames` and `if/then/else`
- draft-06 boolean schemas (`true`/`false` as a schema to always pass/fail).
- keywords `switch`, `patternRequired`, `formatMaximum` / `formatMinimum` and `formatExclusiveMaximum` / `formatExclusiveMinimum` from [JSON Schema extension proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals) with [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package
- [$data reference](#data-reference) to use values from the validated data as values for the schema keywords
- [asynchronous validation](#asynchronous-validation) of custom formats and keywords


## Install

```
npm install ajv
```


## <a name="usage"></a>Getting started

Try it in the Node.js REPL: https://tonicdev.com/npm/ajv


The fastest validation call:

```javascript
// Node.js require:
var Ajv = require('ajv');
// or ESM/TypeScript import
import Ajv from 'ajv';

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
var valid = ajv.addSchema(schema, 'mySchema')
               .validate('mySchema', data);
if (!valid) console.log(ajv.errorsText());
// ...
```

See [API](#api) and [Options](#options) for more details.

Ajv compiles schemas to functions and caches them in all cases (using schema serialized with [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) or a custom function as a key), so that the next time the same schema is used (not necessarily the same object instance) it won't be compiled again.

The best performance is achieved when using compiled functions returned by `compile` or `getSchema` methods (there is no additional function call).

__Please note__: every time a validation function or `ajv.validate` are called `errors` property is overwritten. You need to copy `errors` array reference to another variable if you want to use it later (e.g., in the callback). See [Validation errors](#validation-errors)

__Note for TypeScript users__: `ajv` provides its own TypeScript declarations
out of the box, so you don't need to install the deprecated `@types/ajv`
module.


## Using in browser

You can require Ajv directly from the code you browserify - in this case Ajv will be a part of your bundle.

If you need to use Ajv in several bundles you can create a separate UMD bundle using `npm run bundle` script (thanks to [siddo420](https://github.com/siddo420)).

Then you need to load Ajv in the browser:
```html
<script src="ajv.min.js"></script>
```

This bundle can be used with different module systems; it creates global `Ajv` if no module system is found.

The browser bundle is available on [cdnjs](https://cdnjs.com/libraries/ajv).

Ajv is tested with these browsers:

[![Sauce Test Status](https://saucelabs.com/browser-matrix/epoberezkin.svg)](https://saucelabs.com/u/epoberezkin)

__Please note__: some frameworks, e.g. Dojo, may redefine global require in such way that is not compatible with CommonJS module format. In such case Ajv bundle has to be loaded before the framework and then you can use global Ajv (see issue [#234](https://github.com/ajv-validator/ajv/issues/234)).


### Ajv and Content Security Policies (CSP)

If you're using Ajv to compile a schema (the typical use) in a browser document that is loaded with a Content Security Policy (CSP), that policy will require a `script-src` directive that includes the value `'unsafe-eval'`.
:warning: NOTE, however, that `unsafe-eval` is NOT recommended in a secure CSP[[1]](https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-eval), as it has the potential to open the document to cross-site scripting (XSS) attacks.

In order to make use of Ajv without easing your CSP, you can [pre-compile a schema using the CLI](https://github.com/ajv-validator/ajv-cli#compile-schemas). This will transpile the schema JSON into a JavaScript file that exports a `validate` function that works simlarly to a schema compiled at runtime.

Note that pre-compilation of schemas is performed using [ajv-pack](https://github.com/ajv-validator/ajv-pack) and there are [some limitations to the schema features it can compile](https://github.com/ajv-validator/ajv-pack#limitations). A successfully pre-compiled schema is equivalent to the same schema compiled at runtime.


## Command line interface

CLI is available as a separate npm package [ajv-cli](https://github.com/ajv-validator/ajv-cli). It supports:

- compiling JSON Schemas to test their validity
- BETA: generating standalone module exporting a validation function to be used without Ajv (using [ajv-pack](https://github.com/ajv-validator/ajv-pack))
- migrate schemas to draft-07 (using [json-schema-migrate](https://github.com/epoberezkin/json-schema-migrate))
- validating data file(s) against JSON Schema
- testing expected validity of data against JSON Schema
- referenced schemas
- custom meta-schemas
- files in JSON, JSON5, YAML, and JavaScript format
- all Ajv options
- reporting changes in data after validation in [JSON-patch](https://tools.ietf.org/html/rfc6902) format


## Validation keywords

Ajv supports all validation keywords from draft-07 of JSON Schema standard:

- [type](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#type)
- [for numbers](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#keywords-for-numbers) - maximum, minimum, exclusiveMaximum, exclusiveMinimum, multipleOf
- [for strings](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#keywords-for-strings) - maxLength, minLength, pattern, format
- [for arrays](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#keywords-for-arrays) - maxItems, minItems, uniqueItems, items, additionalItems, [contains](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#contains)
- [for objects](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#keywords-for-objects) - maxProperties, minProperties, required, properties, patternProperties, additionalProperties, dependencies, [propertyNames](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#propertynames)
- [for all types](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#keywords-for-all-types) - enum, [const](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#const)
- [compound keywords](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#compound-keywords) - not, oneOf, anyOf, allOf, [if/then/else](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#ifthenelse)

With [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package Ajv also supports validation keywords from [JSON Schema extension proposals](https://github.com/json-schema/json-schema/wiki/v5-Proposals) for JSON Schema standard:

- [patternRequired](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#patternrequired-proposed) - like `required` but with patterns that some property should match.
- [formatMaximum, formatMinimum, formatExclusiveMaximum, formatExclusiveMinimum](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md#formatmaximum--formatminimum-and-exclusiveformatmaximum--exclusiveformatminimum-proposed) - setting limits for date, time, etc.

See [JSON Schema validation keywords](https://github.com/ajv-validator/ajv/blob/master/KEYWORDS.md) for more details.


## Annotation keywords

JSON Schema specification defines several annotation keywords that describe schema itself but do not perform any validation.

- `title` and `description`: information about the data represented by that schema
- `$comment` (NEW in draft-07): information for developers. With option `$comment` Ajv logs or passes the comment string to the user-supplied function. See [Options](#options).
- `default`: a default value of the data instance, see [Assigning defaults](#assigning-defaults).
- `examples` (NEW in draft-06): an array of data instances. Ajv does not check the validity of these instances against the schema.
- `readOnly` and `writeOnly` (NEW in draft-07): marks data-instance as read-only or write-only in relation to the source of the data (database, api, etc.).
- `contentEncoding`: [RFC 2045](https://tools.ietf.org/html/rfc2045#section-6.1 ), e.g., "base64".
- `contentMediaType`: [RFC 2046](https://tools.ietf.org/html/rfc2046), e.g., "image/png".

__Please note__:  Ajv does not implement validation of the keywords `examples`, `contentEncoding` and `contentMediaType` but it reserves them. If you want to create a plugin that implements some of them, it should remove these keywords from the instance.


## Formats

Ajv implements formats defined by JSON Schema specification and several other formats. It is recommended NOT to use "format" keyword implementations with untrusted data, as they use potentially unsafe regular expressions - see [ReDoS attack](#redos-attack).

__Please note__: if you need to use "format" keyword to validate untrusted data, you MUST assess their suitability and safety for your validation scenarios.

The following formats are implemented for string validation with "format" keyword:

- _date_: full-date according to [RFC3339](http://tools.ietf.org/html/rfc3339#section-5.6).
- _time_: time with optional time-zone.
- _date-time_: date-time from the same source (time-zone is mandatory). `date`, `time` and `date-time` validate ranges in `full` mode and only regexp in `fast` mode (see [options](#options)).
- _uri_: full URI.
- _uri-reference_: URI reference, including full and relative URIs.
- _uri-template_: URI template according to [RFC6570](https://tools.ietf.org/html/rfc6570)
- _url_ (deprecated): [URL record](https://url.spec.whatwg.org/#concept-url).
- _email_: email address.
- _hostname_: host name according to [RFC1034](http://tools.ietf.org/html/rfc1034#section-3.5).
- _ipv4_: IP address v4.
- _ipv6_: IP address v6.
- _regex_: tests whether a string is a valid regular expression by passing it to RegExp constructor.
- _uuid_: Universally Unique IDentifier according to [RFC4122](http://tools.ietf.org/html/rfc4122).
- _json-pointer_: JSON-pointer according to [RFC6901](https://tools.ietf.org/html/rfc6901).
- _relative-json-pointer_: relative JSON-pointer according to [this draft](http://tools.ietf.org/html/draft-luff-relative-json-pointer-00).

__Please note__: JSON Schema draft-07 also defines formats `iri`, `iri-reference`, `idn-hostname` and `idn-email` for URLs, hostnames and emails with international characters. Ajv does not implement these formats. If you create Ajv plugin that implements them please make a PR to mention this plugin here.

There are two modes of format validation: `fast` and `full`. This mode affects formats `date`, `time`, `date-time`, `uri`, `uri-reference`, and `email`. See [Options](#options) for details.

You can add additional formats and replace any of the formats above using [addFormat](#api-addformat) method.

The option `unknownFormats` allows changing the default behaviour when an unknown format is encountered. In this case Ajv can either fail schema compilation (default) or ignore it (default in versions before 5.0.0). You also can allow specific format(s) that will be ignored. See [Options](#options) for details.

You can find regular expressions used for format validation and the sources that were used in [formats.js](https://github.com/ajv-validator/ajv/blob/master/lib/compile/formats.js).


## <a name="ref"></a>Combining schemas with $ref

You can structure your validation logic across multiple schema files and have schemas reference each other using `$ref` keyword.

Example:

```javascript
var schema = {
  "$id": "http://example.com/schemas/schema.json",
  "type": "object",
  "properties": {
    "foo": { "$ref": "defs.json#/definitions/int" },
    "bar": { "$ref": "defs.json#/definitions/str" }
  }
};

var defsSchema = {
  "$id": "http://example.com/schemas/defs.json",
  "definitions": {
    "int": { "type": "integer" },
    "str": { "type": "string" }
  }
};
```

Now to compile your schema you can either pass all schemas to Ajv instance:

```javascript
var ajv = new Ajv({schemas: [schema, defsSchema]});
var validate = ajv.getSchema('http://example.com/schemas/schema.json');
```

or use `addSchema` method:

```javascript
var ajv = new Ajv;
var validate = ajv.addSchema(defsSchema)
                  .compile(schema);
```

See [Options](#options) and [addSchema](#api) method.

__Please note__:
- `$ref` is resolved as the uri-reference using schema $id as the base URI (see the example).
- References can be recursive (and mutually recursive) to implement the schemas for different data structures (such as linked lists, trees, graphs, etc.).
- You don't have to host your schema files at the URIs that you use as schema $id. These URIs are only used to identify the schemas, and according to JSON Schema specification validators should not expect to be able to download the schemas from these URIs.
- The actual location of the schema file in the file system is not used.
- You can pass the identifier of the schema as the second parameter of `addSchema` method or as a property name in `schemas` option. This identifier can be used instead of (or in addition to) schema $id.
- You cannot have the same $id (or the schema identifier) used for more than one schema - the exception will be thrown.
- You can implement dynamic resolution of the referenced schemas using `compileAsync` method. In this way you can store schemas in any system (files, web, database, etc.) and reference them without explicitly adding to Ajv instance. See [Asynchronous schema compilation](#asynchronous-schema-compilation).


## $data reference

With `$data` option you can use values from the validated data as the values for the schema keywords. See [proposal](https://github.com/json-schema-org/json-schema-spec/issues/51) for more information about how it works.

`$data` reference is supported in the keywords: const, enum, format, maximum/minimum, exclusiveMaximum / exclusiveMinimum, maxLength / minLength, maxItems / minItems, maxProperties / minProperties, formatMaximum / formatMinimum, formatExclusiveMaximum / formatExclusiveMinimum, multipleOf, pattern, required, uniqueItems.

The value of "$data" should be a [JSON-pointer](https://tools.ietf.org/html/rfc6901) to the data (the root is always the top level data object, even if the $data reference is inside a referenced subschema) or a [relative JSON-pointer](http://tools.ietf.org/html/draft-luff-relative-json-pointer-00) (it is relative to the current point in data; if the $data reference is inside a referenced subschema it cannot point to the data outside of the root level for this subschema).

Examples.

This schema requires that the value in property `smaller` is less or equal than the value in the property larger:

```javascript
var ajv = new Ajv({$data: true});

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

ajv.validate(schema, validData); // true
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

`$data` reference is resolved safely - it won't throw even if some property is undefined. If `$data` resolves to `undefined` the validation succeeds (with the exclusion of `const` keyword). If `$data` resolves to incorrect type (e.g. not "number" for maximum keyword) the validation fails.


## $merge and $patch keywords

With the package [ajv-merge-patch](https://github.com/ajv-validator/ajv-merge-patch) you can use the keywords `$merge` and `$patch` that allow extending JSON Schemas with patches using formats [JSON Merge Patch (RFC 7396)](https://tools.ietf.org/html/rfc7396) and [JSON Patch (RFC 6902)](https://tools.ietf.org/html/rfc6902).

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

See the package [ajv-merge-patch](https://github.com/ajv-validator/ajv-merge-patch) for more information.


## Defining custom keywords

The advantages of using custom keywords are:

- allow creating validation scenarios that cannot be expressed using JSON Schema
- simplify your schemas
- help bringing a bigger part of the validation logic to your schemas
- make your schemas more expressive, less verbose and closer to your application domain
- implement custom data processors that modify your data (`modifying` option MUST be used in keyword definition) and/or create side effects while the data is being validated

If a keyword is used only for side-effects and its validation result is pre-defined, use option `valid: true/false` in keyword definition to simplify both generated code (no error handling in case of `valid: true`) and your keyword functions (no need to return any validation result).

The concerns you have to be aware of when extending JSON Schema standard with custom keywords are the portability and understanding of your schemas. You will have to support these custom keywords on other platforms and to properly document these keywords so that everybody can understand them in your schemas.

You can define custom keywords with [addKeyword](#api-addkeyword) method. Keywords are defined on the `ajv` instance level - new instances will not have previously defined keywords.

Ajv allows defining keywords with:
- validation function
- compilation function
- macro function
- inline compilation function that should return code (as string) that will be inlined in the currently compiled schema.

Example. `range` and `exclusiveRange` keywords using compiled schema:

```javascript
ajv.addKeyword('range', {
  type: 'number',
  compile: function (sch, parentSchema) {
    var min = sch[0];
    var max = sch[1];

    return parentSchema.exclusiveRange === true
            ? function (data) { return data > min && data < max; }
            : function (data) { return data >= min && data <= max; }
  }
});

var schema = { "range": [2, 4], "exclusiveRange": true };
var validate = ajv.compile(schema);
console.log(validate(2.01)); // true
console.log(validate(3.99)); // true
console.log(validate(2)); // false
console.log(validate(4)); // false
```

Several custom keywords (typeof, instanceof, range and propertyNames) are defined in [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package - they can be used for your schemas and as a starting point for your own custom keywords.

See [Defining custom keywords](https://github.com/ajv-validator/ajv/blob/master/CUSTOM.md) for more details.


## Asynchronous schema compilation

During asynchronous compilation remote references are loaded using supplied function. See `compileAsync` [method](#api-compileAsync) and `loadSchema` [option](#options).

Example:

```javascript
var ajv = new Ajv({ loadSchema: loadSchema });

ajv.compileAsync(schema).then(function (validate) {
  var valid = validate(data);
  // ...
});

function loadSchema(uri) {
  return request.json(uri).then(function (res) {
    if (res.statusCode >= 400)
      throw new Error('Loading error: ' + res.statusCode);
    return res.body;
  });
}
```

__Please note__: [Option](#options) `missingRefs` should NOT be set to `"ignore"` or `"fail"` for asynchronous compilation to work.


## Asynchronous validation

Example in Node.js REPL: https://tonicdev.com/esp/ajv-asynchronous-validation

You can define custom formats and keywords that perform validation asynchronously by accessing database or some other service. You should add `async: true` in the keyword or format definition (see [addFormat](#api-addformat), [addKeyword](#api-addkeyword) and [Defining custom keywords](#defining-custom-keywords)).

If your schema uses asynchronous formats/keywords or refers to some schema that contains them it should have `"$async": true` keyword so that Ajv can compile it correctly. If asynchronous format/keyword or reference to asynchronous schema is used in the schema without `$async` keyword Ajv will throw an exception during schema compilation.

__Please note__: all asynchronous subschemas that are referenced from the current or other schemas should have `"$async": true` keyword as well, otherwise the schema compilation will fail.

Validation function for an asynchronous custom format/keyword should return a promise that resolves with `true` or `false` (or rejects with `new Ajv.ValidationError(errors)` if you want to return custom errors from the keyword function).

Ajv compiles asynchronous schemas to [es7 async functions](http://tc39.github.io/ecmascript-asyncawait/) that can optionally be transpiled with [nodent](https://github.com/MatAtBread/nodent). Async functions are supported in Node.js 7+ and all modern browsers. You can also supply any other transpiler as a function via `processCode` option. See [Options](#options).

The compiled validation function has `$async: true` property (if the schema is asynchronous), so you can differentiate these functions if you are using both synchronous and asynchronous schemas.

Validation result will be a promise that resolves with validated data or rejects with an exception `Ajv.ValidationError` that contains the array of validation errors in `errors` property.


Example:

```javascript
var ajv = new Ajv;
// require('ajv-async')(ajv);

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

validate({ userId: 1, postId: 19 })
.then(function (data) {
  console.log('Data is valid', data); // { userId: 1, postId: 19 }
})
.catch(function (err) {
  if (!(err instanceof Ajv.ValidationError)) throw err;
  // data is invalid
  console.log('Validation errors:', err.errors);
});
```

### Using transpilers with asynchronous validation functions.

[ajv-async](https://github.com/ajv-validator/ajv-async) uses [nodent](https://github.com/MatAtBread/nodent) to transpile async functions. To use another transpiler you should separately install it (or load its bundle in the browser).


#### Using nodent

```javascript
var ajv = new Ajv;
require('ajv-async')(ajv);
// in the browser if you want to load ajv-async bundle separately you can:
// window.ajvAsync(ajv);
var validate = ajv.compile(schema); // transpiled es7 async function
validate(data).then(successFunc).catch(errorFunc);
```


#### Using other transpilers

```javascript
var ajv = new Ajv({ processCode: transpileFunc });
var validate = ajv.compile(schema); // transpiled es7 async function
validate(data).then(successFunc).catch(errorFunc);
```

See [Options](#options).


## Security considerations

JSON Schema, if properly used, can replace data sanitisation. It doesn't replace other API security considerations. It also introduces additional security aspects to consider.


##### Security contact

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure. Please do NOT report security vulnerabilities via GitHub issues.


##### Untrusted schemas

Ajv treats JSON schemas as trusted as your application code. This security model is based on the most common use case, when the schemas are static and bundled together with the application.

If your schemas are received from untrusted sources (or generated from untrusted data) there are several scenarios you need to prevent:
- compiling schemas can cause stack overflow (if they are too deep)
- compiling schemas can be slow (e.g. [#557](https://github.com/ajv-validator/ajv/issues/557))
- validating certain data can be slow

It is difficult to predict all the scenarios, but at the very least it may help to limit the size of untrusted schemas (e.g. limit JSON string length) and also the maximum schema object depth (that can be high for relatively small JSON strings). You also may want to mitigate slow regular expressions in `pattern` and `patternProperties` keywords.

Regardless the measures you take, using untrusted schemas increases security risks.


##### Circular references in JavaScript objects

Ajv does not support schemas and validated data that have circular references in objects. See [issue #802](https://github.com/ajv-validator/ajv/issues/802).

An attempt to compile such schemas or validate such data would cause stack overflow (or will not complete in case of asynchronous validation). Depending on the parser you use, untrusted data can lead to circular references.


##### Security risks of trusted schemas

Some keywords in JSON Schemas can lead to very slow validation for certain data. These keywords include (but may be not limited to):

- `pattern` and `format` for large strings - in some cases using `maxLength` can help mitigate it, but certain regular expressions can lead to exponential validation time even with relatively short strings (see [ReDoS attack](#redos-attack)).
- `patternProperties` for large property names - use `propertyNames` to mitigate, but some regular expressions can have exponential evaluation time as well.
- `uniqueItems` for large non-scalar arrays - use `maxItems` to mitigate

__Please note__: The suggestions above to prevent slow validation would only work if you do NOT use `allErrors: true` in production code (using it would continue validation after validation errors).

You can validate your JSON schemas against [this meta-schema](https://github.com/ajv-validator/ajv/blob/master/lib/refs/json-schema-secure.json) to check that these recommendations are followed:

```javascript
const isSchemaSecure = ajv.compile(require('ajv/lib/refs/json-schema-secure.json'));

const schema1 = {format: 'email'};
isSchemaSecure(schema1); // false

const schema2 = {format: 'email', maxLength: MAX_LENGTH};
isSchemaSecure(schema2); // true
```

__Please note__: following all these recommendation is not a guarantee that validation of untrusted data is safe - it can still lead to some undesirable results.


##### Content Security Policies (CSP)
See [Ajv and Content Security Policies (CSP)](#ajv-and-content-security-policies-csp)


## ReDoS attack

Certain regular expressions can lead to the exponential evaluation time even with relatively short strings.

Please assess the regular expressions you use in the schemas on their vulnerability to this attack - see [safe-regex](https://github.com/substack/safe-regex), for example.

__Please note__: some formats that Ajv implements use [regular expressions](https://github.com/ajv-validator/ajv/blob/master/lib/compile/formats.js) that can be vulnerable to ReDoS attack, so if you use Ajv to validate data from untrusted sources __it is strongly recommended__ to consider the following:

- making assessment of "format" implementations in Ajv.
- using `format: 'fast'` option that simplifies some of the regular expressions (although it does not guarantee that they are safe).
- replacing format implementations provided by Ajv with your own implementations of "format" keyword that either uses different regular expressions or another approach to format validation. Please see [addFormat](#api-addformat) method.
- disabling format validation by ignoring "format" keyword with option `format: false`

Whatever mitigation you choose, please assume all formats provided by Ajv as potentially unsafe and make your own assessment of their suitability for your validation scenarios.


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

While this behaviour is unexpected (issues [#129](https://github.com/ajv-validator/ajv/issues/129), [#134](https://github.com/ajv-validator/ajv/issues/134)), it is correct. To have the expected behaviour (both objects are allowed and additional properties are removed) the schema has to be refactored in this way:

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

With the option value `"empty"` properties and items equal to `null` or `""` (empty string) will be considered missing and assigned defaults.

This option modifies original data.

__Please note__: the default value is inserted in the generated validation code as a literal, so the value inserted in the data will be the deep clone of the default in the schema.


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

`default` keywords in other cases are ignored:

- not in `properties` or `items` subschemas
- in schemas inside `anyOf`, `oneOf` and `not` (see [#42](https://github.com/ajv-validator/ajv/issues/42))
- in `if` subschema of `switch` keyword
- in schemas generated by custom macro keywords

The [`strictDefaults` option](#options) customizes Ajv's behavior for the defaults that Ajv ignores (`true` raises an error, and `"log"` outputs a warning).


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

See [Coercion rules](https://github.com/ajv-validator/ajv/blob/master/COERCION.md) for details.


## API

##### new Ajv(Object options) -&gt; Object

Create Ajv instance.


##### .compile(Object schema) -&gt; Function&lt;Object data&gt;

Generate validating function and cache the compiled schema for future use.

Validating function returns a boolean value. This function has properties `errors` and `schema`. Errors encountered during the last validation are assigned to `errors` property (it is assigned `null` if there was no errors). `schema` property contains the reference to the original schema.

The schema passed to this method will be validated against meta-schema unless `validateSchema` option is false. If schema is invalid, an error will be thrown. See [options](#options).


##### <a name="api-compileAsync"></a>.compileAsync(Object schema [, Boolean meta] [, Function callback]) -&gt; Promise

Asynchronous version of `compile` method that loads missing remote schemas using asynchronous function in `options.loadSchema`. This function returns a Promise that resolves to a validation function. An optional callback passed to `compileAsync` will be called with 2 parameters: error (or null) and validating function. The returned promise will reject (and the callback will be called with an error) when:

- missing schema can't be loaded (`loadSchema` returns a Promise that rejects).
- a schema containing a missing reference is loaded, but the reference cannot be resolved.
- schema (or some loaded/referenced schema) is invalid.

The function compiles schema and loads the first missing schema (or meta-schema) until all missing schemas are loaded.

You can asynchronously compile meta-schema by passing `true` as the second parameter.

See example in [Asynchronous compilation](#asynchronous-schema-compilation).


##### .validate(Object schema|String key|String ref, data) -&gt; Boolean

Validate data using passed schema (it will be compiled and cached).

Instead of the schema you can use the key that was previously passed to `addSchema`, the schema id if it was present in the schema or any previously resolved reference.

Validation errors will be available in the `errors` property of Ajv instance (`null` if there were no errors).

__Please note__: every time this method is called the errors are overwritten so you need to copy them to another variable if you want to use them later.

If the schema is asynchronous (has `$async` keyword on the top level) this method returns a Promise. See [Asynchronous validation](#asynchronous-validation).


##### .addSchema(Array&lt;Object&gt;|Object schema [, String key]) -&gt; Ajv

Add schema(s) to validator instance. This method does not compile schemas (but it still validates them). Because of that dependencies can be added in any order and circular dependencies are supported. It also prevents unnecessary compilation of schemas that are containers for other schemas but not used as a whole.

Array of schemas can be passed (schemas should have ids), the second parameter will be ignored.

Key can be passed that can be used to reference the schema and will be used as the schema id if there is no id inside the schema. If the key is not passed, the schema id will be used as the key.


Once the schema is added, it (and all the references inside it) can be referenced in other schemas and used to validate data.

Although `addSchema` does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.

By default the schema is validated against meta-schema before it is added, and if the schema does not pass validation the exception is thrown. This behaviour is controlled by `validateSchema` option.

__Please note__: Ajv uses the [method chaining syntax](https://en.wikipedia.org/wiki/Method_chaining) for all methods with the prefix `add*` and `remove*`.
This allows you to do nice things like the following.

```javascript
var validate = new Ajv().addSchema(schema).addFormat(name, regex).getSchema(uri);
```

##### .addMetaSchema(Array&lt;Object&gt;|Object schema [, String key]) -&gt; Ajv

Adds meta schema(s) that can be used to validate other schemas. That function should be used instead of `addSchema` because there may be instance options that would compile a meta schema incorrectly (at the moment it is `removeAdditional` option).

There is no need to explicitly add draft-07 meta schema (http://json-schema.org/draft-07/schema) - it is added by default, unless option `meta` is set to `false`. You only need to use it if you have a changed meta-schema that you want to use to validate your schemas. See `validateSchema`.


##### <a name="api-validateschema"></a>.validateSchema(Object schema) -&gt; Boolean

Validates schema. This method should be used to validate schemas rather than `validate` due to the inconsistency of `uri` format in JSON Schema standard.

By default this method is called automatically when the schema is added, so you rarely need to use it directly.

If schema doesn't have `$schema` property, it is validated against draft 6 meta-schema (option `meta` should not be false).

If schema has `$schema` property, then the schema with this id (that should be previously added) is used to validate passed schema.

Errors will be available at `ajv.errors`.


##### .getSchema(String key) -&gt; Function&lt;Object data&gt;

Retrieve compiled schema previously added with `addSchema` by the key passed to `addSchema` or by its full reference (id). The returned validating function has `schema` property with the reference to the original schema.


##### .removeSchema([Object schema|String key|String ref|RegExp pattern]) -&gt; Ajv

Remove added/cached schema. Even if schema is referenced by other schemas it can be safely removed as dependent schemas have local references.

Schema can be removed using:
- key passed to `addSchema`
- it's full reference (id)
- RegExp that should match schema id or key (meta-schemas won't be removed)
- actual schema object that will be stable-stringified to remove schema from cache

If no parameter is passed all schemas but meta-schemas will be removed and the cache will be cleared.


##### <a name="api-addformat"></a>.addFormat(String name, String|RegExp|Function|Object format) -&gt; Ajv

Add custom format to validate strings or numbers. It can also be used to replace pre-defined formats for Ajv instance.

Strings are converted to RegExp.

Function should return validation result as `true` or `false`.

If object is passed it should have properties `validate`, `compare` and `async`:

- _validate_: a string, RegExp or a function as described above.
- _compare_: an optional comparison function that accepts two strings and compares them according to the format meaning. This function is used with keywords `formatMaximum`/`formatMinimum` (defined in [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package). It should return `1` if the first value is bigger than the second value, `-1` if it is smaller and `0` if it is equal.
- _async_: an optional `true` value if `validate` is an asynchronous function; in this case it should return a promise that resolves with a value `true` or `false`.
- _type_: an optional type of data that the format applies to. It can be `"string"` (default) or `"number"` (see https://github.com/ajv-validator/ajv/issues/291#issuecomment-259923858). If the type of data is different, the validation will pass.

Custom formats can be also added via `formats` option.


##### <a name="api-addkeyword"></a>.addKeyword(String keyword, Object definition) -&gt; Ajv

Add custom validation keyword to Ajv instance.

Keyword should be different from all standard JSON Schema keywords and different from previously defined keywords. There is no way to redefine keywords or to remove keyword definition from the instance.

Keyword must start with a letter, `_` or `$`, and may continue with letters, numbers, `_`, `$`, or `-`.
It is recommended to use an application-specific prefix for keywords to avoid current and future name collisions.

Example Keywords:
- `"xyz-example"`: valid, and uses prefix for the xyz project to avoid name collisions.
- `"example"`: valid, but not recommended as it could collide with future versions of JSON Schema etc.
- `"3-example"`: invalid as numbers are not allowed to be the first character in a keyword

Keyword definition is an object with the following properties:

- _type_: optional string or array of strings with data type(s) that the keyword applies to. If not present, the keyword will apply to all types.
- _validate_: validating function
- _compile_: compiling function
- _macro_: macro function
- _inline_: compiling function that returns code (as string)
- _schema_: an optional `false` value used with "validate" keyword to not pass schema
- _metaSchema_: an optional meta-schema for keyword schema
- _dependencies_: an optional list of properties that must be present in the parent schema - it will be checked during schema compilation
- _modifying_: `true` MUST be passed if keyword modifies data
- _statements_: `true` can be passed in case inline keyword generates statements (as opposed to expression)
- _valid_: pass `true`/`false` to pre-define validation result, the result returned from validation function will be ignored. This option cannot be used with macro keywords.
- _$data_: an optional `true` value to support [$data reference](#data-reference) as the value of custom keyword. The reference will be resolved at validation time. If the keyword has meta-schema it would be extended to allow $data and it will be used to validate the resolved value. Supporting $data reference requires that keyword has validating function (as the only option or in addition to compile, macro or inline function).
- _async_: an optional `true` value if the validation function is asynchronous (whether it is compiled or passed in _validate_ property); in this case it should return a promise that resolves with a value `true` or `false`. This option is ignored in case of "macro" and "inline" keywords.
- _errors_: an optional boolean or string `"full"` indicating whether keyword returns errors. If this property is not set Ajv will determine if the errors were set in case of failed validation.

_compile_, _macro_ and _inline_ are mutually exclusive, only one should be used at a time. _validate_ can be used separately or in addition to them to support $data reference.

__Please note__: If the keyword is validating data type that is different from the type(s) in its definition, the validation function will not be called (and expanded macro will not be used), so there is no need to check for data type inside validation function or inside schema returned by macro function (unless you want to enforce a specific type and for some reason do not want to use a separate `type` keyword for that). In the same way as standard keywords work, if the keyword does not apply to the data type being validated, the validation of this keyword will succeed.

See [Defining custom keywords](#defining-custom-keywords) for more details.


##### .getKeyword(String keyword) -&gt; Object|Boolean

Returns custom keyword definition, `true` for pre-defined keywords and `false` if the keyword is unknown.


##### .removeKeyword(String keyword) -&gt; Ajv

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
  $data:            false,
  allErrors:        false,
  verbose:          false,
  $comment:         false, // NEW in Ajv version 6.0
  jsonPointers:     false,
  uniqueItems:      true,
  unicode:          true,
  nullable:         false,
  format:           'fast',
  formats:          {},
  unknownFormats:   true,
  schemas:          {},
  logger:           undefined,
  // referenced schema options:
  schemaId:         '$id',
  missingRefs:      true,
  extendRefs:       'ignore', // recommended 'fail'
  loadSchema:       undefined, // function(uri: string): Promise {}
  // options to modify validated data:
  removeAdditional: false,
  useDefaults:      false,
  coerceTypes:      false,
  // strict mode options
  strictDefaults:   false,
  strictKeywords:   false,
  strictNumbers:    false,
  // asynchronous validation options:
  transpile:        undefined, // requires ajv-async package
  // advanced options:
  meta:             true,
  validateSchema:   true,
  addUsedSchema:    true,
  inlineRefs:       true,
  passContext:      false,
  loopRequired:     Infinity,
  ownProperties:    false,
  multipleOfPrecision: false,
  errorDataPath:    'object', // deprecated
  messages:         true,
  sourceCode:       false,
  processCode:      undefined, // function (str: string, schema: object): string {}
  cache:            new Cache,
  serialize:        undefined,
  regExp:           undefined // custom RegExp engine
}
```

##### Validation and reporting options

- _$data_: support [$data references](#data-reference). Draft 6 meta-schema that is added by default will be extended to allow them. If you want to use another meta-schema you need to use $dataMetaSchema method to add support for $data reference. See [API](#api).
- _allErrors_: check all rules collecting all errors. Default is to return after the first error.
- _verbose_: include the reference to the part of the schema (`schema` and `parentSchema`) and validated data in errors (false by default).
- _$comment_ (NEW in Ajv version 6.0): log or pass the value of `$comment` keyword to a function. Option values:
  - `false` (default): ignore $comment keyword.
  - `true`: log the keyword value to console.
  - function: pass the keyword value, its schema path and root schema to the specified function
- _jsonPointers_: set `dataPath` property of errors using [JSON Pointers](https://tools.ietf.org/html/rfc6901) instead of JavaScript property access notation.
- _uniqueItems_: validate `uniqueItems` keyword (true by default).
- _unicode_: calculate correct length of strings with unicode pairs (true by default). Pass `false` to use `.length` of strings that is faster, but gives "incorrect" lengths of strings with unicode pairs - each unicode pair is counted as two characters.
- _nullable_: support keyword "nullable" from [Open API 3 specification](https://swagger.io/docs/specification/data-models/data-types/).
- _format_: formats validation mode. Option values:
  - `"fast"` (default) - simplified and fast validation (see [Formats](#formats) for details of which formats are available and affected by this option).
  - `"full"` - more restrictive and slow validation. E.g., 25:00:00 and 2015/14/33 will be invalid time and date in 'full' mode but it will be valid in 'fast' mode.
  - `false` - ignore all format keywords.
- _formats_: an object with custom formats. Keys and values will be passed to `addFormat` method.
- _keywords_: an object with custom keywords. Keys and values will be passed to `addKeyword` method.
- _unknownFormats_: handling of unknown formats. Option values:
  - `true` (default) - if an unknown format is encountered the exception is thrown during schema compilation. If `format` keyword value is [$data reference](#data-reference) and it is unknown the validation will fail.
  - `[String]` - an array of unknown format names that will be ignored. This option can be used to allow usage of third party schemas with format(s) for which you don't have definitions, but still fail if another unknown format is used. If `format` keyword value is [$data reference](#data-reference) and it is not in this array the validation will fail.
  - `"ignore"` - to log warning during schema compilation and always pass validation (the default behaviour in versions before 5.0.0). This option is not recommended, as it allows to mistype format name and it won't be validated without any error message. This behaviour is required by JSON Schema specification.
- _schemas_: an array or object of schemas that will be added to the instance. In case you pass the array the schemas must have IDs in them. When the object is passed the method `addSchema(value, key)` will be called for each schema in this object.
- _logger_: sets the logging method. Default is the global `console` object that should have methods `log`, `warn` and `error`. See [Error logging](#error-logging). Option values:
  - custom logger - it should have methods `log`, `warn` and `error`. If any of these methods is missing an exception will be thrown.
  - `false` - logging is disabled.


##### Referenced schema options

- _schemaId_: this option defines which keywords are used as schema URI. Option value:
  - `"$id"` (default) - only use `$id` keyword as schema URI (as specified in JSON Schema draft-06/07), ignore `id` keyword (if it is present a warning will be logged).
  - `"id"` - only use `id` keyword as schema URI (as specified in JSON Schema draft-04), ignore `$id` keyword (if it is present a warning will be logged).
  - `"auto"` - use both `$id` and `id` keywords as schema URI. If both are present (in the same schema object) and different the exception will be thrown during schema compilation.
- _missingRefs_: handling of missing referenced schemas. Option values:
  - `true` (default) - if the reference cannot be resolved during compilation the exception is thrown. The thrown error has properties `missingRef` (with hash fragment) and `missingSchema` (without it). Both properties are resolved relative to the current base id (usually schema id, unless it was substituted).
  - `"ignore"` - to log error during compilation and always pass validation.
  - `"fail"` - to log error and successfully compile schema but fail validation if this rule is checked.
- _extendRefs_: validation of other keywords when `$ref` is present in the schema. Option values:
  - `"ignore"` (default) - when `$ref` is used other keywords are ignored (as per [JSON Reference](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03#section-3) standard). A warning will be logged during the schema compilation.
  - `"fail"` (recommended) - if other validation keywords are used together with `$ref` the exception will be thrown when the schema is compiled. This option is recommended to make sure schema has no keywords that are ignored, which can be confusing.
  - `true` - validate all keywords in the schemas with `$ref` (the default behaviour in versions before 5.0.0).
- _loadSchema_: asynchronous function that will be used to load remote schemas when `compileAsync` [method](#api-compileAsync) is used and some reference is missing (option `missingRefs` should NOT be 'fail' or 'ignore'). This function should accept remote schema uri as a parameter and return a Promise that resolves to a schema. See example in [Asynchronous compilation](#asynchronous-schema-compilation).


##### Options to modify validated data

- _removeAdditional_: remove additional properties - see example in [Filtering data](#filtering-data). This option is not used if schema is added with `addMetaSchema` method. Option values:
  - `false` (default) - not to remove additional properties
  - `"all"` - all additional properties are removed, regardless of `additionalProperties` keyword in schema (and no validation is made for them).
  - `true` - only additional properties with `additionalProperties` keyword equal to `false` are removed.
  - `"failing"` - additional properties that fail schema validation will be removed (where `additionalProperties` keyword is `false` or schema).
- _useDefaults_: replace missing or undefined properties and items with the values from corresponding `default` keywords. Default behaviour is to ignore `default` keywords. This option is not used if schema is added with `addMetaSchema` method. See examples in [Assigning defaults](#assigning-defaults). Option values:
  - `false` (default) - do not use defaults
  - `true` - insert defaults by value (object literal is used).
  - `"empty"` - in addition to missing or undefined, use defaults for properties and items that are equal to `null` or `""` (an empty string).
  - `"shared"` (deprecated) - insert defaults by reference. If the default is an object, it will be shared by all instances of validated data. If you modify the inserted default in the validated data, it will be modified in the schema as well.
- _coerceTypes_: change data type of data to match `type` keyword. See the example in [Coercing data types](#coercing-data-types) and [coercion rules](https://github.com/ajv-validator/ajv/blob/master/COERCION.md). Option values:
  - `false` (default) - no type coercion.
  - `true` - coerce scalar data types.
  - `"array"` - in addition to coercions between scalar types, coerce scalar data to an array with one element and vice versa (as required by the schema).


##### Strict mode options

- _strictDefaults_: report ignored `default` keywords in schemas. Option values:
  - `false` (default) - ignored defaults are not reported
  - `true` - if an ignored default is present, throw an error
  - `"log"` - if an ignored default is present, log warning
- _strictKeywords_: report unknown keywords in schemas. Option values:
  - `false` (default) - unknown keywords are not reported
  - `true` - if an unknown keyword is present, throw an error
  - `"log"` - if an unknown keyword is present, log warning
- _strictNumbers_: validate numbers strictly, failing validation for NaN and Infinity. Option values:
  - `false` (default) - NaN or Infinity will pass validation for numeric types
  - `true` - NaN or Infinity will not pass validation for numeric types

##### Asynchronous validation options

- _transpile_: Requires [ajv-async](https://github.com/ajv-validator/ajv-async) package. It determines whether Ajv transpiles compiled asynchronous validation function. Option values:
  - `undefined` (default) - transpile with [nodent](https://github.com/MatAtBread/nodent) if async functions are not supported.
  - `true` - always transpile with nodent.
  - `false` - do not transpile; if async functions are not supported an exception will be thrown.


##### Advanced options

- _meta_: add [meta-schema](http://json-schema.org/documentation.html) so it can be used by other schemas (true by default). If an object is passed, it will be used as the default meta-schema for schemas that have no `$schema` keyword. This default meta-schema MUST have `$schema` keyword.
- _validateSchema_: validate added/compiled schemas against meta-schema (true by default). `$schema` property in the schema can be http://json-schema.org/draft-07/schema or absent (draft-07 meta-schema will be used) or can be a reference to the schema previously added with `addMetaSchema` method. Option values:
  - `true` (default) -  if the validation fails, throw the exception.
  - `"log"` - if the validation fails, log error.
  - `false` - skip schema validation.
- _addUsedSchema_: by default methods `compile` and `validate` add schemas to the instance if they have `$id` (or `id`) property that doesn't start with "#". If `$id` is present and it is not unique the exception will be thrown. Set this option to `false` to skip adding schemas to the instance and the `$id` uniqueness check when these methods are used. This option does not affect `addSchema` method.
- _inlineRefs_: Affects compilation of referenced schemas. Option values:
  - `true` (default) - the referenced schemas that don't have refs in them are inlined, regardless of their size - that substantially improves performance at the cost of the bigger size of compiled schema functions.
  - `false` - to not inline referenced schemas (they will be compiled as separate functions).
  - integer number - to limit the maximum number of keywords of the schema that will be inlined.
- _passContext_: pass validation context to custom keyword functions. If this option is `true` and you pass some context to the compiled validation function with `validate.call(context, data)`, the `context` will be available as `this` in your custom keywords. By default `this` is Ajv instance.
- _loopRequired_: by default `required` keyword is compiled into a single expression (or a sequence of statements in `allErrors` mode). In case of a very large number of properties in this keyword it may result in a very big validation function. Pass integer to set the number of properties above which `required` keyword will be validated in a loop - smaller validation function size but also worse performance.
- _ownProperties_: by default Ajv iterates over all enumerable object properties; when this option is `true` only own enumerable object properties (i.e. found directly on the object rather than on its prototype) are iterated. Contributed by @mbroadst.
- _multipleOfPrecision_: by default `multipleOf` keyword is validated by comparing the result of division with parseInt() of that result. It works for dividers that are bigger than 1. For small dividers such as 0.01 the result of the division is usually not integer (even when it should be integer, see issue [#84](https://github.com/ajv-validator/ajv/issues/84)). If you need to use fractional dividers set this option to some positive integer N to have `multipleOf` validated using this formula: `Math.abs(Math.round(division) - division) < 1e-N` (it is slower but allows for float arithmetics deviations).
- _errorDataPath_ (deprecated): set `dataPath` to point to 'object' (default) or to 'property' when validating keywords `required`, `additionalProperties` and `dependencies`.
- _messages_: Include human-readable messages in errors. `true` by default. `false` can be passed when custom messages are used (e.g. with [ajv-i18n](https://github.com/ajv-validator/ajv-i18n)).
- _sourceCode_: add `sourceCode` property to validating function (for debugging; this code can be different from the result of toString call).
- _processCode_: an optional function to process generated code before it is passed to Function constructor. It can be used to either beautify (the validating function is generated without line-breaks) or to transpile code. Starting from version 5.0.0 this option replaced options:
  - `beautify` that formatted the generated function using [js-beautify](https://github.com/beautify-web/js-beautify). If you want to beautify the generated code pass a function calling `require('js-beautify').js_beautify` as `processCode: code => js_beautify(code)`.
  - `transpile` that transpiled asynchronous validation function. You can still use `transpile` option with [ajv-async](https://github.com/ajv-validator/ajv-async) package. See [Asynchronous validation](#asynchronous-validation) for more information.
- _cache_: an optional instance of cache to store compiled schemas using stable-stringified schema as a key. For example, set-associative cache [sacjs](https://github.com/epoberezkin/sacjs) can be used. If not passed then a simple hash is used which is good enough for the common use case (a limited number of statically defined schemas). Cache should have methods `put(key, value)`, `get(key)`, `del(key)` and `clear()`.
- _serialize_: an optional function to serialize schema to cache key. Pass `false` to use schema itself as a key (e.g., if WeakMap used as a cache). By default [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used.
- _regExp_: an optional function to create RegExp objects. This allows using a custom RegExp engine (e.g., [RE2](https://github.com/uhop/node-re2)) to mitigate ReDoS attacks. The function must have the signature `(pattern: string) => RegExpLike` where `RegExpLike` is an object with a `test(string) => boolean` method. Example with RE2:
  ```javascript
  var ajv = new Ajv({regExp: require('re2')});
  ```
  By default (`undefined`), native `RegExp` constructor is used.


## Validation errors

In case of validation failure, Ajv assigns the array of errors to `errors` property of validation function (or to `errors` property of Ajv instance when `validate` or `validateSchema` methods were called). In case of [asynchronous validation](#asynchronous-validation), the returned promise is rejected with exception `Ajv.ValidationError` that has `errors` property.


### Error objects

Each error is an object with the following properties:

- _keyword_: validation keyword.
- _dataPath_: the path to the part of the data that was validated. By default `dataPath` uses JavaScript property access notation (e.g., `".prop[1].subProp"`). When the option `jsonPointers` is true (see [Options](#options)) `dataPath` will be set using JSON pointer standard (e.g., `"/prop/1/subProp"`).
- _schemaPath_: the path (JSON-pointer as a URI fragment) to the schema of the keyword that failed validation.
- _params_: the object with the additional information about error that can be used to create custom error messages (e.g., using [ajv-i18n](https://github.com/ajv-validator/ajv-i18n) package). See below for parameters set by all keywords.
- _message_: the standard error message (can be excluded with option `messages` set to false).
- _schema_: the schema of the keyword (added with `verbose` option).
- _parentSchema_: the schema containing the keyword (added with `verbose` option)
- _data_: the data validated by the keyword (added with `verbose` option).

__Please note__: `propertyNames` keyword schema validation errors have an additional property `propertyName`, `dataPath` points to the object. After schema validation for each property name, if it is invalid an additional error is added with the property `keyword` equal to `"propertyNames"`.


### Error parameters

Properties of `params` object in errors depend on the keyword that failed validation.

- `maxItems`, `minItems`, `maxLength`, `minLength`, `maxProperties`, `minProperties` - property `limit` (number, the schema of the keyword).
- `additionalItems` - property `limit` (the maximum number of allowed items in case when `items` keyword is an array of schemas and `additionalItems` is false).
- `additionalProperties` - property `additionalProperty` (the property not used in `properties` and `patternProperties` keywords).
- `dependencies` - properties:
  - `property` (dependent property),
  - `missingProperty` (required missing dependency - only the first one is reported currently)
  - `deps` (required dependencies, comma separated list as a string),
  - `depsCount` (the number of required dependencies).
- `format` - property `format` (the schema of the keyword).
- `maximum`, `minimum` - properties:
  - `limit` (number, the schema of the keyword),
  - `exclusive` (boolean, the schema of `exclusiveMaximum` or `exclusiveMinimum`),
  - `comparison` (string, comparison operation to compare the data to the limit, with the data on the left and the limit on the right; can be "<", "<=", ">", ">=")
- `multipleOf` - property `multipleOf` (the schema of the keyword)
- `pattern` - property `pattern` (the schema of the keyword)
- `required` - property `missingProperty` (required property that is missing).
- `propertyNames` - property `propertyName` (an invalid property name).
- `patternRequired` (in ajv-keywords) - property `missingPattern` (required pattern that did not match any property).
- `type` - property `type` (required type(s), a string, can be a comma-separated list)
- `uniqueItems` - properties `i` and `j` (indices of duplicate items).
- `const` - property `allowedValue` pointing to the value (the schema of the keyword).
- `enum` - property `allowedValues` pointing to the array of values (the schema of the keyword).
- `$ref` - property `ref` with the referenced schema URI.
- `oneOf` - property `passingSchemas` (array of indices of passing schemas, null if no schema passes).
- custom keywords (in case keyword definition doesn't create errors) - property `keyword` (the keyword name).


### Error logging

Using the `logger` option when initiallizing Ajv will allow you to define custom logging. Here you can build upon the exisiting logging. The use of other logging packages is supported as long as the package or its associated wrapper exposes the required methods. If any of the required methods are missing an exception will be thrown.
- **Required Methods**: `log`, `warn`, `error`

```javascript
var otherLogger = new OtherLogger();
var ajv = new Ajv({
  logger: {
    log: console.log.bind(console),
    warn: function warn() {
      otherLogger.logWarn.apply(otherLogger, arguments);
    },
    error: function error() {
      otherLogger.logError.apply(otherLogger, arguments);
      console.error.apply(console, arguments);
    }
  }
});
```


## Plugins

Ajv can be extended with plugins that add custom keywords, formats or functions to process generated code. When such plugin is published as npm package it is recommended that it follows these conventions:

- it exports a function
- this function accepts ajv instance as the first parameter and returns the same instance to allow chaining
- this function can accept an optional configuration as the second parameter

If you have published a useful plugin please submit a PR to add it to the next section.


## Related packages

- [ajv-async](https://github.com/ajv-validator/ajv-async) - plugin to configure async validation mode
- [ajv-bsontype](https://github.com/BoLaMN/ajv-bsontype) - plugin to validate mongodb's bsonType formats
- [ajv-cli](https://github.com/jessedc/ajv-cli) - command line interface
- [ajv-errors](https://github.com/ajv-validator/ajv-errors) - plugin for custom error messages
- [ajv-i18n](https://github.com/ajv-validator/ajv-i18n) - internationalised error messages
- [ajv-istanbul](https://github.com/ajv-validator/ajv-istanbul) - plugin to instrument generated validation code to measure test coverage of your schemas
- [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) - plugin with custom validation keywords (select, typeof, etc.)
- [ajv-merge-patch](https://github.com/ajv-validator/ajv-merge-patch) - plugin with keywords $merge and $patch
- [ajv-pack](https://github.com/ajv-validator/ajv-pack) - produces a compact module exporting validation functions
- [ajv-formats-draft2019](https://github.com/luzlab/ajv-formats-draft2019) - format validators for draft2019 that aren't already included in ajv (ie. `idn-hostname`, `idn-email`, `iri`, `iri-reference` and `duration`).

## Some packages using Ajv

- [webpack](https://github.com/webpack/webpack) - a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
- [jsonscript-js](https://github.com/JSONScript/jsonscript-js) - the interpreter for [JSONScript](http://www.jsonscript.org) - scripted processing of existing endpoints and services
- [osprey-method-handler](https://github.com/mulesoft-labs/osprey-method-handler) - Express middleware for validating requests and responses based on a RAML method object, used in [osprey](https://github.com/mulesoft/osprey) - validating API proxy generated from a RAML definition
- [har-validator](https://github.com/ahmadnassri/har-validator) - HTTP Archive (HAR) validator
- [jsoneditor](https://github.com/josdejong/jsoneditor) - a web-based tool to view, edit, format, and validate JSON http://jsoneditoronline.org
- [JSON Schema Lint](https://github.com/nickcmaynard/jsonschemalint) - a web tool to validate JSON/YAML document against a single JSON Schema http://jsonschemalint.com
- [objection](https://github.com/vincit/objection.js) - SQL-friendly ORM for Node.js
- [table](https://github.com/gajus/table) - formats data into a string table
- [ripple-lib](https://github.com/ripple/ripple-lib) - a JavaScript API for interacting with [Ripple](https://ripple.com) in Node.js and the browser
- [restbase](https://github.com/wikimedia/restbase) - distributed storage with REST API & dispatcher for backend services built to provide a low-latency & high-throughput API for Wikipedia / Wikimedia content
- [hippie-swagger](https://github.com/CacheControl/hippie-swagger) - [Hippie](https://github.com/vesln/hippie) wrapper that provides end to end API testing with swagger validation
- [react-form-controlled](https://github.com/seeden/react-form-controlled) - React controlled form components with validation
- [rabbitmq-schema](https://github.com/tjmehta/rabbitmq-schema) - a schema definition module for RabbitMQ graphs and messages
- [@query/schema](https://www.npmjs.com/package/@query/schema) - stream filtering with a URI-safe query syntax parsing to JSON Schema
- [chai-ajv-json-schema](https://github.com/peon374/chai-ajv-json-schema) - chai plugin to us JSON Schema with expect in mocha tests
- [grunt-jsonschema-ajv](https://github.com/SignpostMarv/grunt-jsonschema-ajv) - Grunt plugin for validating files against JSON Schema
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - extract text from bundle into a file
- [electron-builder](https://github.com/electron-userland/electron-builder) - a solution to package and build a ready for distribution Electron app
- [addons-linter](https://github.com/mozilla/addons-linter) - Mozilla Add-ons Linter
- [gh-pages-generator](https://github.com/epoberezkin/gh-pages-generator) - multi-page site generator converting markdown files to GitHub pages
- [ESLint](https://github.com/eslint/eslint) - the pluggable linting utility for JavaScript and JSX
- [Spectral](https://github.com/stoplightio/spectral) - the customizable linting utility for JSON/YAML, OpenAPI, AsyncAPI, and JSON Schema


## Tests

```
npm install
git submodule update --init
npm test
```

## Contributing

All validation functions are generated using doT templates in [dot](https://github.com/ajv-validator/ajv/tree/master/lib/dot) folder. Templates are precompiled so doT is not a run-time dependency.

`npm run build` - compiles templates to [dotjs](https://github.com/ajv-validator/ajv/tree/master/lib/dotjs) folder.

`npm run watch` - automatically compiles templates when files in dot folder change

Please see [Contributing guidelines](https://github.com/ajv-validator/ajv/blob/master/CONTRIBUTING.md)


## Changes history

See https://github.com/ajv-validator/ajv/releases

__Please note__: [Changes in version 7.0.0-beta](https://github.com/ajv-validator/ajv/releases/tag/v7.0.0-beta.0)

[Version 6.0.0](https://github.com/ajv-validator/ajv/releases/tag/v6.0.0).

## Code of conduct

Please review and follow the [Code of conduct](https://github.com/ajv-validator/ajv/blob/master/CODE_OF_CONDUCT.md).

Please report any unacceptable behaviour to ajv.validator@gmail.com - it will be reviewed by the project team.


## Open-source software support

Ajv is a part of [Tidelift subscription](https://tidelift.com/subscription/pkg/npm-ajv?utm_source=npm-ajv&utm_medium=referral&utm_campaign=readme) - it provides a centralised support to open-source software users, in addition to the support provided by software maintainers.


## License

[MIT](https://github.com/ajv-validator/ajv/blob/master/LICENSE)
