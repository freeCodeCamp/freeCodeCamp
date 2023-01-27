---
id: 56533eb9ac21ba0edf2244b7
title: 用加號運算符連接字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

在 JavaScript 中，當 `+` 操作符被用於一個 `String` 類型的值的時候，它被稱作<dfn>拼接</dfn>操作符。 你可以通過<dfn>拼接</dfn>其他字符串來創建一個新的字符串。

**例如：**

```js
'My name is Alan,' + ' I concatenate.'
```

**提示：** 注意空格。 拼接操作不會在兩個字符串之間添加空格。所以，如果想加上空格的話，你需要自己在字符串裏面添加。

例如：

```js
const ourStr = "I come first. " + "I come second.";
```

字符串 `I come first. I come second.` 將顯示在控制檯中。
# --instructions--

用字符串 `This is the start.` 和 `This is the end.` 通過 `+` 運算符創建 `myStr`。 確保在兩個字符串之間包含一個空格。

# --hints--

`myStr` 應該在兩個字符串之間有一個空格字符。

```js
assert(/start\. This/.test(myStr));
```

`myStr` 的值應該是字符串 `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

應該使用 `+` 運算符來構建 `myStr`。

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` 應該使用 `const` 關鍵字創建。

```js
assert(/const\s+myStr/.test(code));
```

應該將結果分配給 `myStr` 變量。

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
