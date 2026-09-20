---
id: ab306dbdcc907c7ddfc30830
title: Create a Deep Flattening Tool
challengeType: 26
dashedName: create-a-deep-flattening-tool
---

# --description--

In this lab, you will be implementing an array flattening algorithm.

Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.

For example:

| Original | Flattened |
| --- | --- |
| `[[1], [], [2, [3]]]` | `[1, 2, 3]` |
| `[1, {"foo": "bar"}, [2]]` | `[1, {"foo": "bar"}, 2]` |
| `["baz", [1, 2], {}]` | `["baz", 1, 2, {}]` |

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `steamrollArray`.
1. The `steamrollArray` function should accept one argument: a nested array.
1. The function should flatten the nested array, accounting for varying levels of nesting.
1. Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.
1. Global variables should not be used.

# --hints--

You should have a `steamrollArray` function.

```js
assert.isFunction(steamrollArray);
```

`steamrollArray([[["a"]], [["b"]]])` should return `["a", "b"]`.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.

```js
const arr = [1,2,3,[1,2,3,[1,2,3]]];

const spyFlat = __helpers.spyOn(Array.prototype, 'flat');
try {
  steamrollArray(arr);
  assert.isEmpty(spyFlat.calls);
} finally {
  spyFlat.restore();
}

const spyFlatMap = __helpers.spyOn(Array.prototype, 'flatMap');
try {
  steamrollArray(arr);
  assert.isEmpty(spyFlatMap.calls);
} finally {
  spyFlatMap.restore();
}
```

You should not use global variables.

```js
steamrollArray([1, {}, [3, [[4]]]])
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  const out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```
