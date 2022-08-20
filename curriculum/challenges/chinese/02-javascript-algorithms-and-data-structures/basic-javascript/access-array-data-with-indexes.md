---
id: 56bbb991ad1ed5201cd392ca
title: 通过索引访问数组中的数据
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

我们可以使用索引（<dfn>indexes</dfn>）来访问数组中的数据。

数组索引与字符串一样使用方括号来表示，不同的是，它们不是指定字符，而是指定数组中的一个条目。 数组索引与字符串索引一样是从 0 开始（<dfn>zero-based</dfn>）的，所以数组中第一个元素的索引编号是 `0`。

<br>

**示例**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` 打印 `50`，`data` 的值为 `60`。

# --instructions--

创建一个名为 `myData` 的变量，并使用括号表示法将其设置为等于 `myArray` 的第一个值。

# --hints--

变量 `myData` 应该等于 `myArray` 的第一个值。

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

应使用括号表示法访问变量 `myArray` 中的数据。

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
