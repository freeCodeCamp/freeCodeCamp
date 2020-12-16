---
id: 56bbb991ad1ed5201cd392cb
title: 使用 push() 操作数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
---

# --description--

一个简单的方法将数据添加到一个数组的末尾是通过`push()`函数。

`.push()`接受一个或多个参数，并把它“推”入到数组的末尾。

```js
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

# --instructions--

把`["dog", 3]`“推”入到`myArray`变量的末尾。

# --hints--

`myArray`应该等于`[["John", 23], ["cat", 2], ["dog", 3]]`。

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

# --solutions--

