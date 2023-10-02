---
id: cf1111c1c11feddfaeb7bdef
title: 將一個數組嵌套在另一個數組中
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

您也可以在其他數組中嵌套數組，如：

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

這也叫做多維數組（<dfn>multi-dimensional array</dfn>）。

# --instructions--

創建一個名爲 `myArray` 的嵌套數組。

# --hints--

`myArray` 應該至少有一個數組嵌套在另一個數組中。

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
