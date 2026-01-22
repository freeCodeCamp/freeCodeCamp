---
id: a8e512fbe388ac2f9198f0fa
title: Implement a Matching Object Filter
challengeType: 26
dashedName: implement-a-matching-object-filter
---

# --description--

In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `whatIsInAName` function that accepts two arguments, an array of objects and a source object.
1. The `whatIsInAName` function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
1. If no objects match all the key–value pairs from the source, the function should return an empty array. For example:

```js
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
// should return [{ first: "Tybalt", last: "Capulet" }]
```

# --hints--

You should have a `whatIsInAName` function.

```js
assert.isFunction(whatIsInAName);
```

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` should return `[{ first: "Tybalt", last: "Capulet" }]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" }
  ),
  [{ first: "Tybalt", last: "Capulet" }]
);
```

`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` should return `[{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
    { "apple": 1 }
  ),
  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` should return `[{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "bat": 2 }
  ),
  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` should return `[{"apple": 1, "bat": 2, "cookie": 2}]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 }
  ),
  [{ "apple": 1, "bat": 2, "cookie": 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })` should return `[{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]`

```js
assert.deepEqual(
  whatIsInAName(
    [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }],
    { "apple": 1, "bat": 2 }
  ),
  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` should return `[]`.

```js
assert.deepEqual(
  whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }),
  []
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})` should return `[]`.

```js
assert.deepEqual(
  whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 }),
  []
);
```

# --seed--

## --seed-contents--

```js
```

# --solutions--

```js
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}
```
