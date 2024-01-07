---
id: 587d7b83367417b2b2512b37
title: 瞭解 freeCodeCamp 和瀏覽器控制檯之間的差異
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

你可能已經注意到一些 freeCodeCamp 的挑戰有自己的控制檯。 這個控制檯的行爲與瀏覽器控制檯有些不同。

有許多方法可以與 `console` 一起使用來輸出消息。 `log`、`warn` 和 `clear` 就是幾個例子。 freeCodeCamp 控制檯只會輸出 `log` 消息，而瀏覽器控制檯會輸出所有消息。 當你對你的代碼進行修改時，它將自動運行並顯示日誌。 每次代碼運行時，freeCodeCamp 控制檯都會被清除。

# --instructions--

首先，打開瀏覽器控制檯，以便查看日誌。 要做到這一點，在大多數瀏覽器上，你可以右擊頂部的 freeCodeCamp 導航欄，並點擊 `inspect`。 然後在打開的窗口中找到 `console` 選項卡。

之後，使用 `console.log` 記錄 `output` 變量。 查看這兩個控制檯，可以看到日誌。 最後，在你的日誌後面使用 `console.clear` 清除瀏覽器控制檯。 查看兩個控制檯的差異。

# --hints--

你應該使用 `console.log()` 來打印 `output` 變量。

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

你應該使用 `console.clear()` 來清除瀏覽器控制檯。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

你應該在你的日誌之後清除控制檯。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
