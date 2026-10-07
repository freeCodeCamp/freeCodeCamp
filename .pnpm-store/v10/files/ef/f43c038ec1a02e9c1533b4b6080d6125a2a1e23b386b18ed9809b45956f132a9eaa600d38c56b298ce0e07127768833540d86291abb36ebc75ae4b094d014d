# Plain Object

A _plain object_

- Inherits directly from `Object.prototype` or `null`
- Is not a constructor's `prototype` property

## `plain-object/is`

Confirms if given object is a _plain object_

```javascript
const isPlainObject = require("type/plain-object/is");

isPlainObject({}); // true
isPlainObject(Object.create(null)); // true
isPlainObject([]); // false
```

## `plain-object/ensure`

If given argument is a plain object it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePlainObject = require("type/plain-object/ensure");

ensurePlainObject({}); // {}
ensurePlainObject("foo"); // Thrown TypeError: foo is not a plain object
```

### Confirming on keys

Keys can be validated by passing `allowedKeys` option. Note that in this case:

- Error message lists up to three invalid keys

```javascript
const allowedKeys = ["foo"];

ensurePlainObject({}, { allowedKeys }); // {}
ensurePlainObject({ foo: "bar" }, { allowedKeys }); // { foo: 'bar' }

/*
 Below invocation with crash with:
 TypeError: [object Object] is not a valid plain object.
            Following keys are unexpected: lorem, ipsum
*/
ensurePlainObject({ foo: "bar", lorem: 1, ipsum: 2 }, { allowedKeys });
```

### Confirming on property values

Property values can be validated by passing `ensurePropertyValue` option. Note that in this case:

- A newly created instance of plain object with coerced values is returned
- Error message lists up to three keys that contain invalid values

```javascript
const ensureString = require("type/string/ensure");

ensurePlainObject({ foo: 12 }, { ensurePropertyValue: ensureString }); // { foo: '12' }

/*
 Below invocation with crash with:
 TypeError: [object Object] is not a valid plain object.
            Valuees for following keys are invalid: lorem, ipsum
*/
ensurePlainObject({ foo: 23, lorem: {}, ipsum: {} }, { ensurePropertyValue: ensureString });
```
