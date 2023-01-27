---
id: 587d7b84367417b2b2512b34
title: 使用 type of 檢查變量的類型
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

可以使用 `typeof` 檢查變量的數據結構或類型。 在處理多種數據類型時，這會對調試很有幫助。 如果想計算兩數之和，但實際傳入了一個字符串參數，則結果可能是錯誤的。 類型錯誤可能隱藏在計算或函數調用中。 當你以 JavaScript 對象（JSON）的形式訪問和使用外部數據時尤其要小心。

下面是使用 `typeof` 的一些示例：

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

控制檯將按順序顯示字符串 `string`、`number`、`object` 和 `object`。

JavaScript 有七種原始（不可變）數據類型： `Boolean`，`Null`，`Undefined`，`Number`，`String`，`Symbol` （new with ES6），`BigInt` （new with ES2020）和一種可變數據類型：`Object`。 注意：在 JavaScript 中，數組在本質上是一種對象。

# --instructions--

添加兩個 `console.log()` 語句來檢查代碼中的兩個變量 `seven` 和 `three` 的 `typeof` 值。

# --hints--

應在兩個 `console.log()` 語句中使用 `typeof` 來檢查變量的類型。

```js
assert(code.match(/console\.log\s*\(typeof[\( ].*\)?\)/g).length == 2);
```

應使用 `typeof` 來檢查變量 `seven` 的類型。

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

應使用 `typeof` 來檢查變量 `three` 的類型。

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
