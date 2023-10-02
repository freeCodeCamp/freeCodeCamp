---
id: 587d7b8e367417b2b2512b5f
title: 傳遞參數以避免函數中的外部依賴
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

上一個挑戰是更接近函數式編程原則的挑戰，但是仍然缺少一些東西。

雖然我們沒有改變全局變量值，但在沒有全局變量 `fixedValue` 的情況下，`incrementer` 函數將不起作用。

函數式編程的另一個原則是：總是顯式聲明依賴關係。 如果函數依賴於一個變量或對象，那麼將該變量或對象作爲參數直接傳遞到函數中。

這樣做會有很多好處。 其中一點是讓函數更容易測試，因爲你確切地知道參數是什麼，並且這個參數也不依賴於程序中的任何其他內容。

其次，這樣做可以讓你更加自信地更改，刪除或添加新代碼。 因爲你很清楚哪些是可以改的，哪些是不可以改的，這樣你就知道哪裏可能會有潛在的陷阱。

最後，無論代碼的哪一部分執行它，函數總是會爲同一組輸入生成相同的輸出。

# --instructions--

更新 `incrementer` 函數，明確聲明其依賴項。

編寫 `incrementer` 函數，獲取它的參數，然後將值增加 1。

# --hints--

`incrementer` 函數不能修改 `fixedValue` 的值（它的值是 `4`）。

```js
assert(fixedValue === 4);
```

`incrementer` 函數應該接收一個參數。

```js
assert(incrementer.length === 1);
```

`incrementer` 函數應返回比 `fixedValue` 更大的值。

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
