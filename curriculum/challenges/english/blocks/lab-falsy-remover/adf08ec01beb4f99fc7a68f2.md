---
id: adf08ec01beb4f99fc7a68f2
title: Implement a Falsy Remover
challengeType: 26
dashedName: implement-a-falsy-remover
---

# --description--

In this lab you will create a function that removes all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `bouncer` function that takes an array as argument.
1. The `bouncer` function should return a new array that contains the same elements as the array passed in as argument with the falsy elements removed.
1. The `bouncer` function should not change the array passed in as an argument.

Hint: Try converting each value to a Boolean.

# --hints--

You should have a `bouncer` function.

```js
assert.isFunction(bouncer);
```

`bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` should return `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` should return `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` should return `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

The `bouncer` function should not mutate the array passed in as argument.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi']);
```

`bouncer([])` should return `[]`.  

```js  
assert.deepEqual(bouncer([]), []);  
```  

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}
```
