---
id: 56bbb991ad1ed5201cd392cd
title: 使用 shift 方法操作数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` 函数用来移出数组中最后一个元素。 如果想要移出第一个元素要怎么办呢？

这时候我们就需要 `.shift()` 了。 它的工作原理就像 `.pop()`，但它移除的是第一个元素，而不是最后一个。

示例：

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` 值为 `Stimpson`，`ourArray` 值为 `["J", ["cat"]]`

# --instructions--

使用 `.shift()` 函数从 `myArray` 中删除第一项，并将“移除的值”值分配给新变量 `removedFromMyArray`。

# --hints--

`myArray` 应该只包含 `[["dog", 3]]`。

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` 应该包含 `["John", 23]`。

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
