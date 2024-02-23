---
id: 587d7b83367417b2b2512b33
title: 使用控制檯檢查變量值
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Chrome 和 Firefox 都有出色的 JavaScript 控制檯（也稱爲 DevTools），可以用來調試 JavaScript 代碼

可以在 Chrome 的菜單中找到“開發者工具”或 FireFox 的菜單中的 “Web 控制檯”。 如果你使用其他瀏覽器或手機，我們強烈建議你切換到桌面版 Firefox 或 Chrome。

`console.log()` 方法可能是最有用的調試工具，它可以將括號中的內容輸出到控制檯。 將它放在代碼中的關鍵點可以顯示變量在當時的值。 在查看輸出之前，最好先想清楚輸出應該是什麼。 在整個代碼中使用檢查點來查看計算狀態將有助於縮小問題的範圍。

下面是輸出 `Hello world!` 字符串到控制檯的示例：

```js
console.log('Hello world!');
```

# --instructions--

使用 `console.log()` 方法打印代碼中記錄的變量 `a` 的值。

# --hints--

應使用 `console.log()` 來檢查變量 `a` 的值。

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
