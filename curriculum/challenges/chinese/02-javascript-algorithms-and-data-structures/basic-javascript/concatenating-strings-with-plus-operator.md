---
id: 56533eb9ac21ba0edf2244b7
title: 用加号运算符连接字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

在 JavaScript 中，当 `+` 操作符被用于一个 `String` 类型的值的时候，它被称作<dfn>拼接</dfn>操作符。 你可以通过<dfn>拼接</dfn>其他字符串来创建一个新的字符串。

**例如：**

```js
'My name is Alan,' + ' I concatenate.'
```

**提示：** 注意空格。 拼接操作不会在两个字符串之间添加空格。所以，如果想加上空格的话，你需要自己在字符串里面添加。

例如：

```js
const ourStr = "I come first. " + "I come second.";
```

字符串 `I come first. I come second.` 将显示在控制台中。
# --instructions--

用字符串 `This is the start.` 和 `This is the end.` 通过 `+` 运算符创建 `myStr`。 确保在两个字符串之间包含一个空格。

# --hints--

`myStr` 应该在两个字符串之间有一个空格字符。

```js
assert(/start\. This/.test(myStr));
```

`myStr` 的值应该是字符串 `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

应该使用 `+` 运算符来构建 `myStr`。

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` 应该使用 `const` 关键字创建。

```js
assert(/const\s+myStr/.test(code));
```

应该将结果分配给 `myStr` 变量。

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
