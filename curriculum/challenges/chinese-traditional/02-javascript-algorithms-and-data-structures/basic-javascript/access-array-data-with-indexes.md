---
id: 56bbb991ad1ed5201cd392ca
title: 通過索引訪問數組中的數據
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

我們可以使用索引（<dfn>indexes</dfn>）來訪問數組中的數據。

數組索引與字符串一樣使用方括號來表示，不同的是，它們不是指定字符，而是指定數組中的一個條目。 數組索引與字符串索引一樣是從 0 開始（<dfn>zero-based</dfn>）的，所以數組中第一個元素的索引編號是 `0`。

<br>

**示例**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` 打印 `50`，`data` 的值爲 `60`。

# --instructions--

創建一個名爲 `myData` 的變量，並使用括號表示法將其設置爲等於 `myArray` 的第一個值。

# --hints--

變量 `myData` 應該等於 `myArray` 的第一個值。

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

應使用括號表示法訪問變量 `myArray` 中的數據。

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
