---
id: 587d7b83367417b2b2512b37
title: 瞭解 freeCodeCamp 和瀏覽器控制檯之間的差異
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

你可能已經注意到一些 freeCodeCamp JavaScript 的挑戰有自己的控制檯。 這些控制檯的行爲與上一次挑戰中使用的瀏覽器控制檯略有不同。

以下挑戰旨在強調 freeCodeCamp 控制檯與瀏覽器控制檯之間的一些差異。

當在瀏覽器中加載並運行 JavaScript 文件時，`console.log()` 語句會在控制檯中按照調用的次數準確地打印出要求的內容。

在編輯器檢測到腳本中的更改之後，以及測試期間，freeCodeCamp 控制檯將打印 `console.log()` 語句。

在運行測試之前，將清除 freeCodeCamp 控制檯，爲避免破壞，僅在第一次測試期間打印日誌（請參見下面的註釋）。

如果你想看到每次測試的日誌，運行測試，並打開瀏覽器控制檯。 如果你喜歡使用瀏覽器控制檯，想要它模仿 freeCodeCamp 控制檯，請在其他 `console` 調用前加上 `console.clear()`，以清除瀏覽器控制檯。

**注意：** 每次調用函數時，函數內的 `console.log` 都會被打印到 freeCodeCamp 控制檯。 這樣可以幫助在測試期間調試函數。

# --instructions--

首先，使用 `console.log` 打印 `output` 變量。 然後使用 `console.clear` 清除瀏覽器控制檯。

# --hints--

應該使用 `console.clear()` 清除瀏覽器控制檯。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

應該使用 `console.log()` 打印 `output` 變量。

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
