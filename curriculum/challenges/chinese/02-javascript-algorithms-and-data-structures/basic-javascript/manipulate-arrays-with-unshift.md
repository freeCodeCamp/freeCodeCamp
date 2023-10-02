---
id: 56bbb991ad1ed5201cd392ce
title: 使用 unshift 方法操作数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

不仅可以 `shift`（移出）数组中的第一个元素，也可以 `unshift`（移入）一个元素到数组的头部。

`.unshift()` 函数用起来就像 `.push()` 函数一样，但不是在数组的末尾添加元素，`unshift()` 在数组的头部添加元素。

示例：

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

在 `shift`、`ourArray` 后值为 `["J", "cat"]`。 在 `unshift`、`ourArray` 后值为 `["Happy", "J", "cat"]`。

# --instructions--

使用 `unshift()` 将 `["Paul", 35]` 添加到 `myArray` 变量的开头。

# --hints--

`myArray` 现在应该等于 `[["Paul", 35], ["dog", 3]]`。

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
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
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
