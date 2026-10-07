# Iterable

Value which implements _iterable_ protocol

## `iterable/is`

Confirms if given object is an _iterable_ and is not a _string_ (unless `allowString` option is passed)

```javascript
const isIterable = require("type/iterable/is");

isIterable([]); // true
isIterable({}); // false
isIterable("foo"); // false
isIterable("foo", { allowString: true }); // true
```

Supports also `denyEmpty` option

```javascript
isIterable([], { denyEmpty: true }); // false
isIterable(["foo"], { denyEmpty: true }); // true
```

## `iterable/ensure`

If given argument is an _iterable_, it is returned back. Otherwise `TypeError` is thrown.
By default _string_ primitives are rejected unless `allowString` option is passed.

```javascript
const ensureIterable = require("type/iterable/ensure");

ensureIterable([]); // []
ensureIterable("foo", { allowString: true }); // "foo"
ensureIterable({}); // Thrown TypeError: null is not expected iterable
```

### Denying empty iterables

Pass `denyEmpty` option to require non empty iterables

```javascript
ensureIterable([], { denyEmpty: true }); // Thrown TypeError: [] is not expected iterable
```

### Confirming on items

Items can be validated by passing `ensureItem` option. Note that in this case:

- A newly created instance of array with coerced values is returned
- Error message lists up to three invalid items

```javascript
const ensureString = require("type/string/ensure");

ensureIterable(new Set(["foo", 12]), { ensureItem: ensureString }); // ["foo", "12"]

/*
 Below invocation with crash with:
 TypeError: [object Set] is not expected iterable value.
            Following items are invalid:
              - [object Object]
*/
ensureIterable(new Set(["foo", {}]), { ensureItem: ensureString });
```
