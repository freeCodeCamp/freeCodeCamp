---
id: a103376db3ba46b2d50db289
title: Implement a Spinal Case Converter
challengeType: 26
dashedName: implement-a-spinal-case-converter
---

# --description--

Spinal case is a string format where all words are in lowercase and separated by hyphens. `"this-is-spinal-tap"` is an example of a string in spinal case.

In this lab, you will create a function that converts a given string to spinal case.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `spinalCase`.
2. The `spinalCase` function should take a single argument, a string.
3. The `spinalCase` function should return the string in spinal case format. For example, if the argument is `ProductLanding page`, the function should return `product-landing-page`.

# --hints--

You should create a function named `spinalCase`.

```js
assert.isFunction(spinalCase);
```

`spinalCase` should take a single argument.

```js
assert.lengthOf(spinalCase, 1);
```

`spinalCase("This Is Spinal Tap")` should return the string `this-is-spinal-tap`.

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` should return the string `this-is-spinal-tap`.

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` should return the string `the-andy-griffith-show`.

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` should return the string `teletubbies-say-eh-oh`.

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` should return the string `all-the-small-things`.

```js
assert.strictEqual(spinalCase('AllThe-small Things'), 'all-the-small-things');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```
