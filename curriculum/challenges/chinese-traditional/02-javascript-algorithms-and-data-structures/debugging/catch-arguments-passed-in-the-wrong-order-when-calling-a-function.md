---
id: 587d7b85367417b2b2512b3a
title: 調用函數時，捕獲以錯誤順序傳遞的參數
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

繼續討論調用函數，需要注意的下一個 bug 是函數的參數傳遞順序錯誤。 如果參數分別是不同的類型，例如接受數組和整數兩個參數的函數，參數順序傳錯就可能會引發運行時錯誤。 對於接受相同類型參數的函數，傳錯參數也會導致邏輯錯誤或運行結果錯誤。 確保以正確的順序提供所有必需的參數以避免這些問題。

# --instructions--

函數 `raiseToPower` 返回基數 (base) 的指數 (exponent) 次冪。 不幸的是，它沒有被正確調用 — 修改代碼，使 `power` 的值爲 8。

# --hints--

你應修復變量 `power`，使其等於 2 的 3 次方，而不是 3 的 2 次方。

```js
assert(power == 8);
```

你調用 `raiseToPower` 函數時，傳遞參數的順序應正確。

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
