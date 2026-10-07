# json-schema-traverse
Traverse JSON Schema passing each schema object to callback

[![build](https://github.com/epoberezkin/json-schema-traverse/workflows/build/badge.svg)](https://github.com/epoberezkin/json-schema-traverse/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/json-schema-traverse)](https://www.npmjs.com/package/json-schema-traverse)
[![coverage](https://coveralls.io/repos/github/epoberezkin/json-schema-traverse/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/json-schema-traverse?branch=master)


## Install

```
npm install json-schema-traverse
```


## Usage

```javascript
const traverse = require('json-schema-traverse');
const schema = {
  properties: {
    foo: {type: 'string'},
    bar: {type: 'integer'}
  }
};

traverse(schema, {cb});
// cb is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}

// Or:

traverse(schema, {cb: {pre, post}});
// pre is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}
//
// post is called 3 times with:
// 1. {type: 'string'}
// 2. {type: 'integer'}
// 3. root schema

```

Callback function `cb` is called for each schema object (not including draft-06 boolean schemas), including the root schema, in pre-order traversal. Schema references ($ref) are not resolved, they are passed as is.  Alternatively, you can pass a `{pre, post}` object as `cb`, and then `pre` will be called before traversing child elements, and `post` will be called after all child elements have been traversed.

Callback is passed these parameters:

- _schema_: the current schema object
- _JSON pointer_: from the root schema to the current schema object
- _root schema_: the schema passed to `traverse` object
- _parent JSON pointer_: from the root schema to the parent schema object (see below)
- _parent keyword_: the keyword inside which this schema appears (e.g. `properties`, `anyOf`, etc.)
- _parent schema_: not necessarily parent object/array; in the example above the parent schema for `{type: 'string'}` is the root schema
- _index/property_: index or property name in the array/object containing multiple schemas; in the example above for `{type: 'string'}` the property name is `'foo'`


## Traverse objects in all unknown keywords

```javascript
const traverse = require('json-schema-traverse');
const schema = {
  mySchema: {
    minimum: 1,
    maximum: 2
  }
};

traverse(schema, {allKeys: true, cb});
// cb is called 2 times with:
// 1. root schema
// 2. mySchema
```

Without option `allKeys: true` callback will be called only with root schema.


## Enterprise support

json-schema-traverse package is a part of [Tidelift enterprise subscription](https://tidelift.com/subscription/pkg/npm-json-schema-traverse?utm_source=npm-json-schema-traverse&utm_medium=referral&utm_campaign=enterprise&utm_term=repo) - it provides a centralised commercial support to open-source software users, in addition to the support provided by software maintainers.


## Security contact

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure. Please do NOT report security vulnerability via GitHub issues.


## License

[MIT](https://github.com/epoberezkin/json-schema-traverse/blob/master/LICENSE)
