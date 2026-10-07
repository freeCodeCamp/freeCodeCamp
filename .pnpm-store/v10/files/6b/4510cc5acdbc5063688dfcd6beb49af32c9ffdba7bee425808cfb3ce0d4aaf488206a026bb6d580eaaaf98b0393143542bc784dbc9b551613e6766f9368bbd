# ajv-keywords

Custom JSON-Schema keywords for [Ajv](https://github.com/epoberezkin/ajv) validator

[![Build Status](https://travis-ci.org/ajv-validator/ajv-keywords.svg?branch=master)](https://travis-ci.org/ajv-validator/ajv-keywords)
[![npm](https://img.shields.io/npm/v/ajv-keywords.svg)](https://www.npmjs.com/package/ajv-keywords)
[![npm downloads](https://img.shields.io/npm/dm/ajv-keywords.svg)](https://www.npmjs.com/package/ajv-keywords)
[![Coverage Status](https://coveralls.io/repos/github/ajv-validator/ajv-keywords/badge.svg?branch=master)](https://coveralls.io/github/ajv-validator/ajv-keywords?branch=master)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=ajv-validator/ajv-keywords)](https://app.dependabot.com/accounts/ajv-validator/repos/60477053)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)


## Contents

- [Install](#install)
- [Usage](#usage)
- [Keywords](#keywords)
  - [Types](#types)
    - [typeof](#typeof)
    - [instanceof](#instanceof)
  - [Keywords for numbers](#keywords-for-numbers)
    - [range and exclusiveRange](#range-and-exclusiverange)
  - [Keywords for strings](#keywords-for-strings)
    - [regexp](#regexp)
    - [formatMaximum / formatMinimum and formatExclusiveMaximum / formatExclusiveMinimum](#formatmaximum--formatminimum-and-formatexclusivemaximum--formatexclusiveminimum)
    - [transform](#transform)<sup>\*</sup>
  - [Keywords for arrays](#keywords-for-arrays)
    - [uniqueItemProperties](#uniqueitemproperties)
  - [Keywords for objects](#keywords-for-objects)
    - [allRequired](#allrequired)
    - [anyRequired](#anyrequired)
    - [oneRequired](#onerequired)
    - [patternRequired](#patternrequired)
    - [prohibited](#prohibited)
    - [deepProperties](#deepproperties)
    - [deepRequired](#deeprequired)
  - [Compound keywords](#compound-keywords)
    - [switch](#switch) (deprecated)
    - [select/selectCases/selectDefault](#selectselectcasesselectdefault) (BETA)
  - [Keywords for all types](#keywords-for-all-types)
    - [dynamicDefaults](#dynamicdefaults)<sup>\*</sup>
- [Security contact](#security-contact)
- [Open-source software support](#open-source-software-support)
- [License](#license)

<sup>\*</sup> - keywords that modify data


## Install

```
npm install ajv-keywords
```


## Usage

To add all available keywords:

```javascript
var Ajv = require('ajv');
var ajv = new Ajv;
require('ajv-keywords')(ajv);

ajv.validate({ instanceof: 'RegExp' }, /.*/); // true
ajv.validate({ instanceof: 'RegExp' }, '.*'); // false
```

To add a single keyword:

```javascript
require('ajv-keywords')(ajv, 'instanceof');
```

To add multiple keywords:

```javascript
require('ajv-keywords')(ajv, ['typeof', 'instanceof']);
```

To add a single keyword in browser (to avoid adding unused code):

```javascript
require('ajv-keywords/keywords/instanceof')(ajv);
```


## Keywords

### Types

#### `typeof`

Based on JavaScript `typeof` operation.

The value of the keyword should be a string (`"undefined"`, `"string"`, `"number"`, `"object"`, `"function"`, `"boolean"` or `"symbol"`) or array of strings.

To pass validation the result of `typeof` operation on the value should be equal to the string (or one of the strings in the array).

```
ajv.validate({ typeof: 'undefined' }, undefined); // true
ajv.validate({ typeof: 'undefined' }, null); // false
ajv.validate({ typeof: ['undefined', 'object'] }, null); // true
```


#### `instanceof`

Based on JavaScript `instanceof` operation.

The value of the keyword should be a string (`"Object"`, `"Array"`, `"Function"`, `"Number"`, `"String"`, `"Date"`, `"RegExp"`, `"Promise"` or `"Buffer"`) or array of strings.

To pass validation the result of `data instanceof ...` operation on the value should be true:

```
ajv.validate({ instanceof: 'Array' }, []); // true
ajv.validate({ instanceof: 'Array' }, {}); // false
ajv.validate({ instanceof: ['Array', 'Function'] }, function(){}); // true
```

You can add your own constructor function to be recognised by this keyword:

```javascript
function MyClass() {}
var instanceofDefinition = require('ajv-keywords').get('instanceof').definition;
// or require('ajv-keywords/keywords/instanceof').definition;
instanceofDefinition.CONSTRUCTORS.MyClass = MyClass;

ajv.validate({ instanceof: 'MyClass' }, new MyClass); // true
```


### Keywords for numbers

#### `range` and `exclusiveRange`

Syntax sugar for the combination of minimum and maximum keywords, also fails schema compilation if there are no numbers in the range.

The value of this keyword must be the array consisting of two numbers, the second must be greater or equal than the first one.

If the validated value is not a number the validation passes, otherwise to pass validation the value should be greater (or equal) than the first number and smaller (or equal) than the second number in the array. If `exclusiveRange` keyword is present in the same schema and its value is true, the validated value must not be equal to the range boundaries.

```javascript
var schema = { range: [1, 3] };
ajv.validate(schema, 1); // true
ajv.validate(schema, 2); // true
ajv.validate(schema, 3); // true
ajv.validate(schema, 0.99); // false
ajv.validate(schema, 3.01); // false

var schema = { range: [1, 3], exclusiveRange: true };
ajv.validate(schema, 1.01); // true
ajv.validate(schema, 2); // true
ajv.validate(schema, 2.99); // true
ajv.validate(schema, 1); // false
ajv.validate(schema, 3); // false
```


### Keywords for strings

#### `regexp`

This keyword allows to use regular expressions with flags in schemas (the standard `pattern` keyword does not support flags).

This keyword applies only to strings. If the data is not a string, the validation succeeds.

The value of this keyword can be either a string (the result of `regexp.toString()`) or an object with the properties `pattern` and `flags` (the same strings that should be passed to RegExp constructor).

```javascript
var schema = {
  type: 'object',
  properties: {
    foo: { regexp: '/foo/i' },
    bar: { regexp: { pattern: 'bar', flags: 'i' } }
  }
};

var validData = {
  foo: 'Food',
  bar: 'Barmen'
};

var invalidData = {
  foo: 'fog',
  bar: 'bad'
};
```


#### `formatMaximum` / `formatMinimum` and `formatExclusiveMaximum` / `formatExclusiveMinimum`

These keywords allow to define minimum/maximum constraints when the format keyword defines ordering.

These keywords apply only to strings. If the data is not a string, the validation succeeds.

The value of keyword `formatMaximum` (`formatMinimum`) should be a string. This value is the maximum (minimum) allowed value for the data to be valid as determined by `format` keyword. If `format` is not present schema compilation will throw exception.

When this keyword is added, it defines comparison rules for formats `"date"`, `"time"` and `"date-time"`. Custom formats also can have comparison rules. See [addFormat](https://github.com/epoberezkin/ajv#api-addformat) method.

The value of keyword `formatExclusiveMaximum` (`formatExclusiveMinimum`) should be a boolean value. These keyword cannot be used without `formatMaximum` (`formatMinimum`). If this keyword value is equal to `true`, the data to be valid should not be equal to the value in `formatMaximum` (`formatMinimum`) keyword.

```javascript
require('ajv-keywords')(ajv, ['formatMinimum', 'formatMaximum']);

var schema = {
  format: 'date',
  formatMinimum: '2016-02-06',
  formatMaximum: '2016-12-27',
  formatExclusiveMaximum: true
}

var validDataList = ['2016-02-06', '2016-12-26', 1];

var invalidDataList = ['2016-02-05', '2016-12-27', 'abc'];
```


#### `transform`

This keyword allows a string to be modified before validation. 

These keywords apply only to strings. If the data is not a string, the transform is skipped.

There are limitation due to how ajv is written:
- a stand alone string cannot be transformed. ie `data = 'a'; ajv.validate(schema, data);`
- currently cannot work with `ajv-pack`

**Supported options:**
- `trim`: remove whitespace from start and end
- `trimLeft`: remove whitespace from start
- `trimRight`: remove whitespace from end
- `toLowerCase`: case string to all lower case
- `toUpperCase`: case string to all upper case
- `toEnumCase`: case string to match case in schema

Options are applied in the order they are listed.

Note: `toEnumCase` requires that all allowed values are unique when case insensitive.

**Example: multiple options**
```javascript
require('ajv-keywords')(ajv, ['transform']);

var schema = {
  type: 'array',
  items: {
    type:'string',
    transform:['trim','toLowerCase']
  }
};

var data = ['  MixCase  '];
ajv.validate(schema, data);
console.log(data); // ['mixcase']

```

**Example: `enumcase`**
```javascript
require('ajv-keywords')(ajv, ['transform']);

var schema = {
  type: 'array',
  items: {
    type:'string',
    transform:['trim','toEnumCase'],
    enum:['pH']
  }
};

var data = ['ph',' Ph','PH','pH '];
ajv.validate(schema, data);
console.log(data); // ['pH','pH','pH','pH']
```


### Keywords for arrays

#### `uniqueItemProperties`

The keyword allows to check that some properties in array items are unique.

This keyword applies only to arrays. If the data is not an array, the validation succeeds.

The value of this keyword must be an array of strings - property names that should have unique values across all items.

```javascript
var schema = { uniqueItemProperties: [ "id", "name" ] };

var validData = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

var invalidData1 = [
  { id: 1 },
  { id: 1 }, // duplicate "id"
  { id: 3 }
];

var invalidData2 = [
  { id: 1, name: "taco" },
  { id: 2, name: "taco" }, // duplicate "name"
  { id: 3, name: "salsa" }
];
```

This keyword is contributed by [@blainesch](https://github.com/blainesch).


### Keywords for objects

#### `allRequired`

This keyword allows to require the presence of all properties used in `properties` keyword in the same schema object.

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value of this keyword must be boolean.

If the value of the keyword is `false`, the validation succeeds.

If the value of the keyword is `true`, the validation succeeds if the data contains all properties defined in `properties` keyword (in the same schema object).

If the `properties` keyword is not present in the same schema object, schema compilation will throw exception.

```javascript
var schema = {
  properties: {
    foo: {type: 'number'},
    bar: {type: 'number'}
  }
  allRequired: true
};

var validData = { foo: 1, bar: 2 };
var alsoValidData = { foo: 1, bar: 2, baz: 3 };

var invalidDataList = [ {}, { foo: 1 }, { bar: 2 } ];
```


#### `anyRequired`

This keyword allows to require the presence of any (at least one) property from the list.

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value of this keyword must be an array of strings, each string being a property name. For data object to be valid at least one of the properties in this array should be present in the object.

```javascript
var schema = {
  anyRequired: ['foo', 'bar']
};

var validData = { foo: 1 };
var alsoValidData = { foo: 1, bar: 2 };

var invalidDataList = [ {}, { baz: 3 } ];
```


#### `oneRequired`

This keyword allows to require the presence of only one property from the list.

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value of this keyword must be an array of strings, each string being a property name. For data object to be valid exactly one of the properties in this array should be present in the object.

```javascript
var schema = {
  oneRequired: ['foo', 'bar']
};

var validData = { foo: 1 };
var alsoValidData = { bar: 2, baz: 3 };

var invalidDataList = [ {}, { baz: 3 }, { foo: 1, bar: 2 } ];
```


#### `patternRequired`

This keyword allows to require the presence of properties that match some pattern(s).

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value of this keyword should be an array of strings, each string being a regular expression. For data object to be valid each regular expression in this array should match at least one property name in the data object.

If the array contains multiple regular expressions, more than one expression can match the same property name.

```javascript
var schema = { patternRequired: [ 'f.*o', 'b.*r' ] };

var validData = { foo: 1, bar: 2 };
var alsoValidData = { foobar: 3 };

var invalidDataList = [ {}, { foo: 1 }, { bar: 2 } ];
```


#### `prohibited`

This keyword allows to prohibit that any of the properties in the list is present in the object.

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value of this keyword should be an array of strings, each string being a property name. For data object to be valid none of the properties in this array should be present in the object.

```
var schema = { prohibited: ['foo', 'bar']};

var validData = { baz: 1 };
var alsoValidData = {};

var invalidDataList = [
  { foo: 1 },
  { bar: 2 },
  { foo: 1, bar: 2}
];
```

__Please note__: `{prohibited: ['foo', 'bar']}` is equivalent to `{not: {anyRequired: ['foo', 'bar']}}` (i.e. it has the same validation result for any data).


#### `deepProperties`

This keyword allows to validate deep properties (identified by JSON pointers).

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value should be an object, where keys are JSON pointers to the data, starting from the current position in data, and the values are JSON schemas. For data object to be valid the value of each JSON pointer should be valid according to the corresponding schema.

```javascript
var schema = {
  type: 'object',
  deepProperties: {
    "/users/1/role": { "enum": ["admin"] }
  }
};

var validData = {
  users: [
    {},
    {
      id: 123,
      role: 'admin'
    }
  ]
};

var alsoValidData = {
  users: {
    "1": {
      id: 123,
      role: 'admin'
    }
  }
};

var invalidData = {
  users: [
    {},
    {
      id: 123,
      role: 'user'
    }
  ]
};

var alsoInvalidData = {
  users: {
    "1": {
      id: 123,
      role: 'user'
    }
  }
};
```


#### `deepRequired`

This keyword allows to check that some deep properties (identified by JSON pointers) are available.

This keyword applies only to objects. If the data is not an object, the validation succeeds.

The value should be an array of JSON pointers to the data, starting from the current position in data. For data object to be valid each JSON pointer should be some existing part of the data.

```javascript
var schema = {
  type: 'object',
  deepRequired: ["/users/1/role"]
};

var validData = {
  users: [
    {},
    {
      id: 123,
      role: 'admin'
    }
  ]
};

var invalidData = {
  users: [
    {},
    {
      id: 123
    }
  ]
};
```

See [json-schema-org/json-schema-spec#203](https://github.com/json-schema-org/json-schema-spec/issues/203#issue-197211916) for an example of the equivalent schema without `deepRequired` keyword.


### Compound keywords

#### `switch` (deprecated)

__Please note__: this keyword is provided to preserve backward compatibility with previous versions of Ajv. It is strongly recommended to use `if`/`then`/`else` keywords instead, as they have been added to the draft-07 of JSON Schema specification.

This keyword allows to perform advanced conditional validation.

The value of the keyword is the array of if/then clauses. Each clause is the object with the following properties:

- `if` (optional) - the value is JSON-schema
- `then` (required) - the value is JSON-schema or boolean
- `continue` (optional) - the value is boolean

The validation process is dynamic; all clauses are executed sequentially in the following way:

1. `if`:
    1.  `if` property is JSON-schema according to which the data is:
        1.  valid => go to step 2.
        2.  invalid => go to the NEXT clause, if this was the last clause the validation of `switch` SUCCEEDS.
    2.  `if` property is absent => go to step 2.
2. `then`:
    1.  `then` property is `true` or it is JSON-schema according to which the data is valid => go to step 3.
    2.  `then` property is `false` or it is JSON-schema according to which the data is invalid => the validation of `switch` FAILS.
3. `continue`:
    1.  `continue` property is `true` => go to the NEXT clause, if this was the last clause the validation of `switch` SUCCEEDS.
    2.  `continue` property is `false` or absent => validation of `switch` SUCCEEDS.

```javascript
require('ajv-keywords')(ajv, 'switch');

var schema = {
  type: 'array',
  items: {
    type: 'integer',
    'switch': [
      { if: { not: { minimum: 1 } }, then: false },
      { if: { maximum: 10 }, then: true },
      { if: { maximum: 100 }, then: { multipleOf: 10 } },
      { if: { maximum: 1000 }, then: { multipleOf: 100 } },
      { then: false }
    ]
  }
};

var validItems = [1, 5, 10, 20, 50, 100, 200, 500, 1000];

var invalidItems = [1, 0, 2000, 11, 57, 123, 'foo'];
```

The above schema is equivalent to (for example):

```javascript
{
  type: 'array',
  items: {
    type: 'integer',
    if: { minimum: 1, maximum: 10 },
    then: true,
    else: {
      if: { maximum: 100 },
      then: { multipleOf: 10 },
      else: {
        if: { maximum: 1000 },
        then: { multipleOf: 100 },
        else: false
      }
    }
  }
}
```


#### `select`/`selectCases`/`selectDefault`

These keywords allow to choose the schema to validate the data based on the value of some property in the validated data.

These keywords must be present in the same schema object (`selectDefault` is optional).

The value of `select` keyword should be a [$data reference](https://github.com/epoberezkin/ajv/tree/5.0.2-beta.0#data-reference) that points to any primitive JSON type (string, number, boolean or null) in the data that is validated. You can also use a constant of primitive type as the value of this keyword (e.g., for debugging purposes).

The value of `selectCases` keyword must be an object where each property name is a possible string representation of the value of `select` keyword and each property value is a corresponding schema (from draft-06 it can be boolean) that must be used to validate the data.

The value of `selectDefault` keyword is a schema (from draft-06 it can be boolean) that must be used to validate the data in case `selectCases` has no key equal to the stringified value of `select` keyword.

The validation succeeds in one of the following cases:
- the validation of data using selected schema succeeds,
- none of the schemas is selected for validation,
- the value of select is undefined (no property in the data that the data reference points to).

If `select` value (in data) is not a primitive type the validation fails.

__Please note__: these keywords require Ajv `$data` option to support [$data reference](https://github.com/epoberezkin/ajv/tree/5.0.2-beta.0#data-reference).


```javascript
require('ajv-keywords')(ajv, 'select');

var schema = {
  type: object,
  required: ['kind'],
  properties: {
    kind: { type: 'string' }
  },
  select: { $data: '0/kind' },
  selectCases: {
    foo: {
      required: ['foo'],
      properties: {
        kind: {},
        foo: { type: 'string' }
      },
      additionalProperties: false
    },
    bar: {
      required: ['bar'],
      properties: {
        kind: {},
        bar: { type: 'number' }
      },
      additionalProperties: false
    }
  },
  selectDefault: {
    propertyNames: {
      not: { enum: ['foo', 'bar'] }
    }
  }
};

var validDataList = [
  { kind: 'foo', foo: 'any' },
  { kind: 'bar', bar: 1 },
  { kind: 'anything_else', not_bar_or_foo: 'any value' }
];

var invalidDataList = [
  { kind: 'foo' }, // no propery foo
  { kind: 'bar' }, // no propery bar
  { kind: 'foo', foo: 'any', another: 'any value' }, // additional property
  { kind: 'bar', bar: 1, another: 'any value' }, // additional property
  { kind: 'anything_else', foo: 'any' } // property foo not allowed
  { kind: 'anything_else', bar: 1 } // property bar not allowed
];
```

__Please note__: the current implementation is BETA. It does not allow using relative URIs in $ref keywords in schemas in `selectCases` and `selectDefault` that point outside of these schemas. The workaround is to use absolute URIs (that can point to any (sub-)schema added to Ajv, including those inside the current root schema where `select` is used). See [tests](https://github.com/epoberezkin/ajv-keywords/blob/v2.0.0/spec/tests/select.json#L314).


### Keywords for all types

#### `dynamicDefaults`

This keyword allows to assign dynamic defaults to properties, such as timestamps, unique IDs etc.

This keyword only works if `useDefaults` options is used and not inside `anyOf` keywords etc., in the same way as [default keyword treated by Ajv](https://github.com/epoberezkin/ajv#assigning-defaults).

The keyword should be added on the object level. Its value should be an object with each property corresponding to a property name, in the same way as in standard `properties` keyword. The value of each property can be:

- an identifier of default function (a string)
- an object with properties `func` (an identifier) and `args` (an object with parameters that will be passed to this function during schema compilation - see examples).

The properties used in `dynamicDefaults` should not be added to `required` keyword (or validation will fail), because unlike `default` this keyword is processed after validation.

There are several predefined dynamic default functions:

- `"timestamp"` - current timestamp in milliseconds
- `"datetime"` - current date and time as string (ISO, valid according to `date-time` format)
- `"date"` - current date as string (ISO, valid according to `date` format)
- `"time"` - current time as string (ISO, valid according to `time` format)
- `"random"` - pseudo-random number in [0, 1) interval
- `"randomint"` - pseudo-random integer number. If string is used as a property value, the function will randomly return 0 or 1. If object `{ func: 'randomint', args: { max: N } }` is used then the default will be an integer number in [0, N) interval.
- `"seq"` - sequential integer number starting from 0. If string is used as a property value, the default sequence will be used. If object `{ func: 'seq', args: { name: 'foo'} }` is used then the sequence with name `"foo"` will be used. Sequences are global, even if different ajv instances are used.

```javascript
var schema = {
  type: 'object',
  dynamicDefaults: {
    ts: 'datetime',
    r: { func: 'randomint', args: { max: 100 } },
    id: { func: 'seq', args: { name: 'id' } }
  },
  properties: {
    ts: {
      type: 'string',
      format: 'date-time'
    },
    r: {
      type: 'integer',
      minimum: 0,
      exclusiveMaximum: 100
    },
    id: {
      type: 'integer',
      minimum: 0
    }
  }
};

var data = {};
ajv.validate(data); // true
data; // { ts: '2016-12-01T22:07:28.829Z', r: 25, id: 0 }

var data1 = {};
ajv.validate(data1); // true
data1; // { ts: '2016-12-01T22:07:29.832Z', r: 68, id: 1 }

ajv.validate(data1); // true
data1; // didn't change, as all properties were defined
```

When using the `useDefaults` option value `"empty"`, properties and items equal to `null` or `""` (empty string) will be considered missing and assigned defaults.  Use the `allOf` [compound keyword](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#compound-keywords) to execute `dynamicDefaults` before validation.

```javascript
var schema = {
  allOf: [
    {
      dynamicDefaults: {
        ts: 'datetime',
        r: { func: 'randomint', args: { min: 5, max: 100 } },
        id: { func: 'seq', args: { name: 'id' } }
      }
    },
    {
      type: 'object',
      properties: {
        ts: {
          type: 'string'
        },
        r: {
          type: 'number',
          minimum: 5,
          exclusiveMaximum: 100
        },
        id: {
          type: 'integer',
          minimum: 0
        }
      }
    }
  ]
};

var data = { ts: '', r: null };
ajv.validate(data); // true
data; // { ts: '2016-12-01T22:07:28.829Z', r: 25, id: 0 }
```

You can add your own dynamic default function to be recognised by this keyword:

```javascript
var uuid = require('uuid');

function uuidV4() { return uuid.v4(); }

var definition = require('ajv-keywords').get('dynamicDefaults').definition;
// or require('ajv-keywords/keywords/dynamicDefaults').definition;
definition.DEFAULTS.uuid = uuidV4;

var schema = {
  dynamicDefaults: { id: 'uuid' },
  properties: { id: { type: 'string', format: 'uuid' } }
};

var data = {};
ajv.validate(schema, data); // true
data; // { id: 'a1183fbe-697b-4030-9bcc-cfeb282a9150' };

var data1 = {};
ajv.validate(schema, data1); // true
data1; // { id: '5b008de7-1669-467a-a5c6-70fa244d7209' }
```

You also can define dynamic default that accepts parameters, e.g. version of uuid:

```javascript
var uuid = require('uuid');

function getUuid(args) {
  var version = 'v' + (arvs && args.v || 4);
  return function() {
    return uuid[version]();
  };
}

var definition = require('ajv-keywords').get('dynamicDefaults').definition;
definition.DEFAULTS.uuid = getUuid;

var schema = {
  dynamicDefaults: {
    id1: 'uuid', // v4
    id2: { func: 'uuid', v: 4 }, // v4
    id3: { func: 'uuid', v: 1 } // v1
  }
};
```


## Security contact

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

Please do NOT report security vulnerabilities via GitHub issues.


## Open-source software support

Ajv-keywords is a part of [Tidelift subscription](https://tidelift.com/subscription/pkg/npm-ajv-keywords?utm_source=npm-ajv-keywords&utm_medium=referral&utm_campaign=readme) - it provides a centralised support to open-source software users, in addition to the support provided by software maintainers.


## License

[MIT](https://github.com/epoberezkin/ajv-keywords/blob/master/LICENSE)
