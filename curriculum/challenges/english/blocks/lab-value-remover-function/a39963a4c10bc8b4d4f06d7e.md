---
id: a39963a4c10bc8b4d4f06d7e
title: Implement a Value Remover Function
challengeType: 26
dashedName: implement-a-value-remover-function
---

# --description--

In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `destroyer` function that accepts an array and one or more additional arguments.
1. The `destroyer` function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
1. The function must accept an indeterminate number of arguments.

# --hints--

You should have a `destroyer` function.

```js
assert.isFunction(destroyer);
```

`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` should return `[1, 1]`.

```js
assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
```

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` should return `[1, 5, 1]`.

```js
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
```

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` should return `[1]`.

```js
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
```

`destroyer([2, 3, 2, 3], 2, 3)` should return `[]`.

```js
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
```

`destroyer(["tree", "hamburger", 53], "tree", 53)` should return `["hamburger"]`.

```js
assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]);
```

`destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" )` should return `[12, 92, 65]`.

```js
assert.deepEqual(
  destroyer(
    ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"
  ),
  [12, 92, 65]
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}
```

