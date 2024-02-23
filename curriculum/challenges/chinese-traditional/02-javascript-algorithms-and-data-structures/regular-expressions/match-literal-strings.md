---
id: 587d7db3367417b2b2512b8f
title: 匹配文字字符串
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

在上一個挑戰中，使用正則表達式 `/Hello/` 搜索到了字符串 `Hello`。 那個正則表達式在字符串中搜尋 `Hello` 的文字匹配。 下面是另一個在字符串中搜尋 `Kevin` 的示例：

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

`test` 方法會返回 `true`。

任何其他形式的 `Kevin` 都不會被匹配。 例如，正則表達式 `/Kevin/` 不會匹配 `kevin` 或者`KEVIN`。

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

此 `test` 調用將返回 `false`。

後續的挑戰將爲你展示如何匹配其他形式的字符串。

# --instructions--

完成正則表達式 `waldoRegex`，在字符串 `waldoIsHiding` 中匹配到文本 `"Waldo"`。

# --hints--

你的正則表達式 `waldoRegex` 應該匹配到 `Waldo`。

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

你的正則表達式 `waldoRegex` 不應該搜尋其他的任何內容。

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

你應該使用你的正則表達式對字符串執行文字匹配。

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
