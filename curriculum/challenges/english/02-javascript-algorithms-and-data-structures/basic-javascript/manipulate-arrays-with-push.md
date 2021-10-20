---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

An easy way to append data to the end of an array is via the `push()` function.

`.push()` takes one or more <dfn>parameters</dfn> and "pushes" them onto the end of the array.

Examples:

```js
var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

`arr1` now has the value `[1, 2, 3, 4]` and `arr2` has the value `["Stimpson", "J", "cat", ["happy", "joy"]]`.

# --instructions--

Push `["dog", 3]` onto the end of the `myArray` variable.

# --hints--

`myArray` should now equal `[["John", 23], ["cat", 2], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
