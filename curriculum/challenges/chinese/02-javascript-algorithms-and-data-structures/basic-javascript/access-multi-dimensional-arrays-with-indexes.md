---
id: 56592a60ddddeae28f7aa8e1
title: 使用索引访问多维数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
---

# --description--

可以把 <dfn>多维</dfn> 数组看作成是一个 *数组中的数组*。当使用方括号去访问数组的时候，第一个`[index]`访问的是第 N 个子数组，第二个`[index]`访问的是第 N 个子数组的第N个元素。

**示例**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

**提示**  
数组名称和方括号之间不应该有任何空格，如`array [0][0]`，甚至`array [0][0]`，都是不正确的。尽管 JavaScript 能够处理，但可能会让看你代码的其他程序员感到困惑。

# --instructions--

使用索引从`myArray`选择一个元素，使得`myData`的值为`8`。

# --hints--

`myData`应该等于`8`。

```js
assert(myData === 8);
```

你应该使用方括号从`myArray`中取值。

```js
assert(
  /myArray\[2\]\[1\]/g.test(code) &&
    !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code)
);
```

# --solutions--

