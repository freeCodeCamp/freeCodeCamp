---
id: 587d7b86367417b2b2512b3b
title: 捕获使用索引的时候出现的错误
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

当试图访问字符串或数组的特定索引（分割或访问一个片段）或循环索引时，有时会出现 <dfn>Off by one errors</dfn> 错误（有时称为 OBOE）。 JavaScript 索引从 0 开始，而不是 1，这意味着最后一个索引总会比字符串或数组的长度少 1。 如果尝试访问等于长度的索引，程序可能会抛出“索引超出范围”引用错误或打印出 `undefined`。

当使用将索引范围作为参数的字符串或数组方法时，阅读相关的文档并了解参数中的索引的包含性（即是否考虑进返回值中）很重要。 以下是一些错误的示例：

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

第一个例子多了一次循环，第二个例子少了一次循环（漏掉了索引 0 处的字符）， 第三个例子是正确的。

# --instructions--

修复以下函数中的两个索引错误，将 1 到 5 之间（包含 1 和 5）的所有数字打印到控制台。

# --hints--

应该设置循环的初始条件，使循环从第一个索引开始。

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

应修复循环的初始条件，使循环从索引 0 开始。

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

应该设置循环的终止条件，使循环在最后一个索引处停止。

```js
assert(code.match(/i\s*<\s*len\s*;|i\s*<=\s*len\s*-\s*1\s*;/g).length == 1);
```

应该修复循环的终止条件，使循环在索引为字符串长度减 1 的位置停止。

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Only change code below this line
 for (let i = 0; i < len; i++) {
 // Only change code above this line
   console.log(firstFive[i]);
 }
}

countToFive();
```
