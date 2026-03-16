---
id: a0b5010f579e69b815e7c5d6
title: Build a Smart Word Replacement Function
challengeType: 26
dashedName: build-a-smart-word-replacement-function
---

# --description--

In this lab, you will create a function that performs a search and replace on the sentence using the arguments provided and then returns the new sentence.

**Note:** Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word `Book` with the word `dog`, it should be replaced as `Dog`

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `myReplace`.
1. The `myReplace` function should take three arguments: a string, a word to be replaced, and the word to replace it with.
1. The `myReplace` function should return the new string with the replacement.
1. You should preserve the case of the first character in the original word when you are replacing it.

# --hints--

You should create a function named `myReplace`.

```js
assert.isFunction(myReplace);
```

`myReplace` should take three arguments.

```js
assert.lengthOf(myReplace, 3);
```

`myReplace("Let us go to the store", "store", "mall")` should return the string `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` should return the string `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` should return the string `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` should return the string `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` should return the string `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` should return the string `Let us get back to more Algorithms`.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
