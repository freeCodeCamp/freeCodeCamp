---
id: 56bbb991ad1ed5201cd392ca
title: Доступ до елементу в масиві за допомогою індексу
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Ми можемо отримати доступ до даних всередині масивів за допомогою <dfn>індексів</dfn>.

Індекс масивів, так як і в рядках, вказується у квадратних дужках ([]). Однак індекс в масивах використовується для отримання доступу до певного елемента в масиві. Як і рядки, масиви використовують індексування <dfn>на основі нуля</dfn>, тому перший елемент у масиві має індекс `0`.

<br>

**Наприклад**

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
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
