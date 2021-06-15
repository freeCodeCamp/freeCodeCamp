---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

We can access the data inside arrays using <dfn>indexes</dfn>.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array has an index of `0`.

<br>

**Example**

```js
var array = [50,60,70];
array[0];
var data = array[1];
```

`array[0]` is now `50`, and `data` has the value `60`.

**Note:** There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

# --instructions--

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

# --hints--

The variable `myData` should equal the first value of `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

The data in variable `myArray` should be accessed using bracket notation.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
var myArray = [50,60,70];


```

# --solutions--

```js
var myArray = [50,60,70];
var myData = myArray[0];
```
