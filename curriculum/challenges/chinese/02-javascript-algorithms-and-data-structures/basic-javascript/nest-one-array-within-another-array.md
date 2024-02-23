---
id: cf1111c1c11feddfaeb7bdef
title: 将一个数组嵌套在另一个数组中
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

您也可以在其他数组中嵌套数组，如：

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

这也叫做多维数组（<dfn>multi-dimensional array</dfn>）。

# --instructions--

创建一个名为 `myArray` 的嵌套数组。

# --hints--

`myArray` 应该至少有一个数组嵌套在另一个数组中。

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
