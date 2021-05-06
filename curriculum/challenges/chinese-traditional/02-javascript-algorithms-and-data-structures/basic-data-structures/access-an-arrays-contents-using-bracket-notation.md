---
id: 5a661e0f1068aca922b3ef17
title: 使用方括號訪問數組的元素
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

所有數據結構的基本特性是，它們不僅可以存儲數據，還可以讓我們按需訪問存放在其中的數據。 我們已經學習瞭如何創建數組，現在讓我們來學習如何訪問數組中的數據。

我們先定義一個包含 3 個元素的數組：

```js
let ourArray = ["a", "b", "c"];
```

在數組中，內部的每個元素都有一個與之對應的索引（<dfn>index</dfn>）。 索引既是該元素在數組中的位置，也是我們訪問該元素的引用。 需要注意的是，JavaScript 數組的索引是從 0 開始的（這種從 0 開始的規則叫做 <dfn>zero-indexed</dfn>），即數組的第一個元素是在數組中的***第 0 個***位置，而不是第 1 個位置。 要從數組中獲取一個元素，我們可以在數組字面量後面加一個用方括號括起來的索引。不過習慣上，我們會通過表示數組的變量名來訪問，而不是直接通過字面量。 這種從數組中讀取元素的方式叫做方括號表示法（<dfn>bracket notation</dfn>）。 如果我們要從數組 `ourArray` 中取出數據 `a` 並將其賦值給另一個變量，可以這樣寫：

```js
let ourVariable = ourArray[0];
```

現在，變量 `ourVariable` 的值也爲 `a`。

通過索引，我們不僅可以獲取某個元素值，還可以用類似的寫法來*設置*一個索引位置的元素值：

```js
ourArray[1] = "not b anymore";
```

在上面的代碼中，我們用方括號表示法把索引爲 1 的元素從 `b` 改成了 `not b anymore`。 現在 `ourArray` 的值是 `["a", "not b anymore", "c"]`。

# --instructions--

在本挑戰中，請將 `myArray` 中的第二個元素（索引爲 `1`）設置爲除了 `b` 以外的任意值。

# --hints--

`myArray[0]` 應爲 `a`。

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` 不應爲 `b`。

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` 應爲 `c`。

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` 應爲 `d`。

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
