---
id: 56592a60ddddeae28f7aa8e1
title: 使用索引访问多维数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

我们可以把<dfn>多维</dfn>数组看作成是*数组中的数组*。使用方括号表示法访问数组时，第一个方括号访问的是数组的第一层，第二个方括号访问的是数组的第二层，以此类推。

**示例**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // 返回 [[10,11,12], 13, 14]
arr[3][0]; // 返回 [10,11,12]
arr[3][0][1]; // 返回 11
```

**注意**  
数组名与方括号之间不应有空格，不推荐像是 `array [0][0]` 或 `array [0] [0]` 的写法。尽管 JavaScript 能够正确处理，但可能会让其他人感到困惑。

# --instructions--

使用方括号表示法从 `myArray` 中读取元素，使得 `myData` 的值为 `8`。

# --hints--

`myData` 的值应为 `8`。

```js
assert(myData === 8);
```

应使用方括号表示法从 `myArray` 中取值。

```js
assert(
  /myArray\[2\]\[1\]/g.test(code) &&
    !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code)
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[0][0];
```

# --solutions--

```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```
