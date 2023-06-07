---
id: 56533eb9ac21ba0edf2244b8
title: 用 += 運算符連接字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

我們還可以使用 `+=` 運算符來<dfn>拼接</dfn>字符串到現有字符串變量的結尾。 對於那些被分割成幾段的長的字符串來說，這一操作是非常有用的。

**提示：** 注意空格。 拼接操作不會在兩個字符串之間添加空格，所以，如果想要加上空格的話，你需要自己在字符串裏面添加。

例如：

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` 的值爲字符串 `I come first. I come second.`

# --instructions--

使用 `+=` 操作符，多行合併字符串 `This is the first sentence.` 和 `This is the second sentence.` ，並賦值給 `myStr` 。 參照示例中顯示的方式使用 `+=` 操作符，並確保在兩個字符串之間包含一個空格。 先把第一個字符串賦值給 `myStr`，然後拼接第二個字符串。

# --hints--

`myStr` 應該在兩個字符串之間有一個空格字符。

```js
assert(/sentence\. This/.test(myStr));
```

`myStr` 的值應該是字符串 `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

應該使用 `+=` 操作符創建 `myStr` 變量。

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
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
let myStr;
```

# --solutions--

```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
