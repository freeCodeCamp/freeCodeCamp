---
id: 56bbb991ad1ed5201cd392ca
title: 通过索引访问数组中的数据
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
---

# --description--

我们可以使用索引 `indexes` 来访问数组中的数据。

数组索引与字符串索引一样使用中括号，但字符串索引得到的是一个字符，而数组索引得到的是一个元素。数组索引与字符串索引一样是从 0 开始的，所以数组中第一个元素的索引编号是 0。  
**示例**

```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
```

**提示**  
数组名称和方括号之间不应有任何空格，如`array [0]`尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑

# --instructions--

创建一个名为`myData`的变量，并把`myArray`的第一个索引上的值赋给它。

# --hints--

变量`myData`的值应该等于`myArray`的第一个值。

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

应使用方括号访问变量`myArray`中的数据。

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

# --solutions--

