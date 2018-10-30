# json-schema-traverse
Traverse JSON Schema passing each schema object to callback

[![Build Status](https://travis-ci.org/epoberezkin/json-schema-traverse.svg?branch=master)](https://travis-ci.org/epoberezkin/json-schema-traverse)
[![npm version](https://badge.fury.io/js/json-schema-traverse.svg)](https://www.npmjs.com/package/json-schema-traverse)
[![Coverage Status](https://coveralls.io/repos/github/epoberezkin/json-schema-traverse/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/json-schema-traverse?branch=master)


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

traverse(schema, cb);
// cb is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}
```

Callback function is called for each schema object (not including draft-06 boolean schemas), including the root schema. Schema references ($ref) are not resolved, they are passed as is.

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

traverse(schema, {allKeys: true}, cb);
// cb is called 2 times with:
// 1. root schema
// 2. mySchema
```

Without option `allKeys: true` callback will be called only with root schema.


## License

[MIT](https://github.com/epoberezkin/json-schema-traverse/blob/master/LICENSE)
