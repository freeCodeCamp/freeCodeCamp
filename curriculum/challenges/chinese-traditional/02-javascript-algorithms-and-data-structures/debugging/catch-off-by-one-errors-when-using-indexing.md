---
id: 587d7b86367417b2b2512b3b
title: 捕獲使用索引的時候出現的錯誤
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

當試圖訪問字符串或數組的特定索引（分割或訪問一個片段）或循環索引時，有時會出現 <dfn>Off by one errors</dfn> 錯誤（有時稱爲 OBOE）。 JavaScript 索引從 0 開始，而不是 1，這意味着最後一個索引總會比字符串或數組的長度少 1。 如果嘗試訪問等於長度的索引，程序可能會拋出“索引超出範圍”引用錯誤或打印出 `undefined`。

當使用將索引範圍作爲參數的字符串或數組方法時，閱讀相關的文檔並瞭解參數中的索引的包含性（即是否考慮進返回值中）很重要。 以下是一些錯誤的示例：

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

第一個例子多了一次循環，第二個例子少了一次循環（漏掉了索引 0 處的字符）， 第三個例子是正確的。

# --instructions--

修復以下函數中的兩個索引錯誤，將 1 到 5 之間（包含 1 和 5）的所有數字打印到控制檯。

# --hints--

應該設置循環的初始條件，使循環從第一個索引開始。

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

應修復循環的初始條件，使循環從索引 0 開始。

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

應該設置循環的終止條件，使循環在最後一個索引處停止。

```js
assert(code.match(/i\s*<\s*len\s*;|i\s*<=\s*len\s*-\s*1\s*;/g).length == 1);
```

應該修復循環的終止條件，使循環在索引爲字符串長度減 1 的位置停止。

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
