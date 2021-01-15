---
id: 56bbb991ad1ed5201cd392ca
title: 通过索引访问数组中的数据
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

我们可以使用索引（`indexes`）来访问数组中的数据。

数组索引与字符串索引都需要通过方括号表示法使用。区别仅仅在于，字符串通过索引会得到一个字符，而数组通过索引得到的是一个元素。数组索引与字符串索引一样是从 0 开始的，所以数组中第一个元素的索引是 `0`。  

**示例**

```js
var array = [50,60,70];
array[0]; // 返回 50
var data = array[1];  // 值为 60
```

**注意**  
数组名与方括号之间不应有空格，不推荐像是 `array [0]` 的写法。尽管 JavaScript 能够正确处理，但可能会让其他人感到困惑。

# --instructions--

创建一个名为 `myData` 的变量，并把 `myArray` 的第一个值赋给它。

# --hints--

变量 `myData` 的值应为 `myArray` 中的第一个元素值。

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

应使用方括号表示法访问变量 `myArray` 中的元素。

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
// Setup
var myArray = [50,60,70];

// Only change code below this line
```

# --solutions--

```js
var myArray = [50,60,70];
var myData = myArray[0];
```
