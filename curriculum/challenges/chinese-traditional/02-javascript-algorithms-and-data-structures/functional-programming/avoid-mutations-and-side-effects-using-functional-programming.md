---
id: 587d7b8e367417b2b2512b5e
title: 使用函數式編程避免變化和副作用
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

如果你還沒想通，上一個挑戰的問題出在 `tabClose()` 函數裏的 `splice`。 不幸的是，`splice` 修改了調用它的原始數組，所以第二次調用它時是基於修改後的數組，纔給出了意料之外的結果。

這是一個小例子，還有更廣義的定義——在變量，數組或對象上調用一個函數，這個函數會改變對象中的變量或其他東西。

函數式編程的核心原則之一是不改變任何東西。 變化會導致錯誤。 如果一個函數不改變傳入的參數、全局變量等數據，那麼它造成問題的可能性就會小很多。

前面的例子沒有任何複雜的操作，但是 `splice` 方法改變了原始數組，導致 bug 產生。

回想一下，在函數式編程中，改變或變更叫做 <dfn>mutation</dfn>，這種改變的結果叫做“副作用”（<dfn>side effect</dfn>）。 理想情況下，函數應該是不會產生任何副作用的 <dfn>pure function</dfn>。

讓我們嘗試掌握這個原則：不要改變代碼中的任何變量或對象。

# --instructions--

填寫 `incrementer` 函數的代碼，使其返回值爲全局變量 `fixedValue` 增加 1 。

# --hints--

`incrementer` 函數不能改變 `fixedValue` 的值（`4`）。

```js
incrementer();
assert(fixedValue === 4);
```

`incrementer` 函數應返回比 `fixedValue` 變量更大的值。

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

你的 `incrementer` 函數返回的值應該基於全局變量 `fixedValue` 的值。

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
