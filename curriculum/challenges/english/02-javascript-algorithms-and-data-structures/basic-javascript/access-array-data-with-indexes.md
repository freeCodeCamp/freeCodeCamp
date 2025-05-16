---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

We can access the data inside arrays using <dfn>indexes</dfn>.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array has an index of `0`.

<br>

**Example**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

The `console.log(array[0])` prints `50`, and `data` has the value `60`.

# --instructions--

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

# --hints--

The variable `myData` should equal the first value of `myArray`.

```js
assert.exists(myArray); 
assert.exists(myData);
assert.strictEqual(myArray[0],myData); 
```

The data in variable `myArray` should be accessed using bracket notation.

```js
assert.match(__helpers.removeJSComments(code), /\s*=\s*myArray\[0\]/g);
```

# --seed--

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
