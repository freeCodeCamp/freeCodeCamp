---
id: 56bbb991ad1ed5201cd392cb
title: Маніпулювання масивами за допомогою методу push
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

Найпростіший спосіб додати дані до кінця масиву – використати функцію `push()`.

`.push()` приймає один або більше <dfn>параметрів</dfn> і «виштовхує» їх в кінець масиву.

Приклади:

```js
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

Тепер `arr1` має значення `[1, 2, 3, 4]`, а `arr2` має значення `["Stimpson", "J", "cat", ["happy", "joy"]]`.

# --instructions--

Виштовхніть `["dog", 3]` в кінець змінної `myArray`.

# --hints--

Тепер `myArray` має дорівнювати `[["John", 23], ["cat", 2], ["dog", 3]]`.

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
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
