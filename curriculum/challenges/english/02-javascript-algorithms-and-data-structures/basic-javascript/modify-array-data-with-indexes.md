---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

Unlike strings, the entries of arrays are <dfn>mutable</dfn> and can be changed freely, even if the array was declared with `const`.

**Example**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` now has the value `[15, 40, 30]`.

**Note:** There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

# --instructions--

Modify the data stored at index `0` of `myArray` to a value of `45`.

# --hints--

`myArray` should now be `[45, 64, 99]`.

```js
assert.sameDeepOrderedMembers(myArray, [45, 64, 99]);
```

You should be using correct index to modify the value in `myArray`.

```js
assert.match(__helpers.removeJSComments(code), /myArray\[0\]\s*=\s*/g);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
