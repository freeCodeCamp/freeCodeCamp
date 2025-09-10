---
id: 68ad9821ee41baad9cb0fd4e
title: Build a Symmetric Difference Function
challengeType: 25
dashedName: lab-symmetric-difference
---

# --description--

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:

- Array A: `["diamond", "stick", "apple"]`

- Array B: `["stick", "emerald", "bread"]`

Result: `["diamond", "apple", "emerald", "bread"]`

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your function `diffArray` should return an array.
2. Your function should take two arguments, both of which are arrays.
3. Your function should make use of the `filter` method.
4. Your function should return the symmetric difference of the two arrays.  
5. Your function should return an empty array if there is no symmetric difference.


# --hints--

You should have a function named `diffArray`.

```js
assert.isFunction(diffArray);
```

The `diffArray` function should use the `filter` method to filter out items that are present in both arrays.

```js
assert(/\.filter\(/.test(diffArray.toString()));
```

`diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])` should return `["pink wool"]`.

```js
assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
), ["pink wool"]);
```

`diffArray*["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])` should return `["diorite", "pink wool"]`.

```js
assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), ["diorite", "pink wool"]);
```

`diffArray` should return an empty array when called with two identical arrays.

```js
assert.deepEqual(diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), []);

assert.deepEqual(diffArray(
  ["diamond", "stick", "apple"],
  ["stick", "emerald", "bread"]
), ["diamond", "apple", "emerald", "bread"]);

Test case 1: Some overlapping elements.

assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
), ["pink wool"]);

Test case 2: Multiple unique elements on both sides.

assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), ["diorite", "pink wool"]);

Test case 3: Identical arrays should return an empty array.

assert.deepEqual(diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), []);

Test case 4: Arrays with overlapping and new elements.

assert.deepEqual(diffArray(
  ["diamond", "stick", "apple"],
  ["stick", "emerald", "bread"]
), ["diamond", "apple", "emerald", "bread"]);

Test case 5: Arrays with numbers and strings combined.

assert.deepEqual(diffArray(
  [1, 2, 3, "a", "b"],
  [3, 4, 5, "b", "c"]
), [1, 2, 4, 5, "a", "c"]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function diffArray(arr1, arr2) {
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
}
```
