---
id: 587d7b89367417b2b2512b48
title: 使用 spread 運算符展開數組項
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 引入了<dfn>展開操作符</dfn>，可以展開數組以及需要多個參數或元素的表達式。

下面的 ES5 代碼使用了 `apply()` 來計算數組的最大值：

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` 的值爲 `89`。

我們必須使用 `Math.max.apply(null, arr)`，因爲 `Math.max(arr)` 返回 `NaN`。 `Math.max()` 函數中需要傳入的是一系列由逗號分隔的參數，而不是一個數組。 展開操作符可以提升代碼的可讀性，使代碼易於維護。

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` 的值應該是 `89`。

`...arr` 返回一個解壓的數組。 也就是說，它*展開*數組。 然而，展開操作符只能夠在函數的參數中或者數組中使用。 下面的代碼將會報錯：

```js
const spreaded = ...arr;
```

# --instructions--

使用展開操作符將 `arr1` 中的內容都複製到 `arr2` 中去。

# --hints--

`arr2` 應該是從 `arr1` 複製而來。

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

應使用展開操作符 `...` 來複制 `arr1`。

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

當 `arr1` 改變的時候，`arr2` 應保持不變。

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
