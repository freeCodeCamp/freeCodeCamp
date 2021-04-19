---
id: 56bbb991ad1ed5201cd392cc
title: 使用 pop() 操作数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

改变数组中数据的另一种方法是用 `.pop()` 函数。

`.pop()` 函数用来弹出一个数组末尾的值。 我们可以把这个弹出的值赋给一个变量存储起来。 换句话说就是 `.pop()` 函数移除数组末尾的元素并返回这个元素。

数组中任何类型的元素（数值，字符串，甚至是数组）都可以被弹出来 。

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

第一个 `console.log` 将显示值 `6`，第二个将显示值 `[1, 4]`。

# --instructions--

使用 `.pop()` 函数移除 `myArray` 中的最后一个元素，并且把弹出的值赋给 `removedFromMyArray`。

# --hints--

`myArray` 应该只包含 `[["John", 23]]`。

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

对 `myArray` 使用 `pop()` 函数。

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` 应该只包含 `["cat", 2]`。

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
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
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```
