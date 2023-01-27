---
id: 56533eb9ac21ba0edf2244b4
title: 用單引號引用字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

JavaScript 中的<dfn>字符串</dfn>可以使用開始和結束都是同類型的單引號或雙引號表示。 與其他一些編程語言不同的是，單引號和雙引號的功能在 JavaScript 中是相同的。

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

當你需要在一個字符串中使用多個引號的時候，你可以使用單引號包裹雙引號或者相反。 常見的場景比如在字符串中包含對話的句子需要用引號包裹。 另外比如在一個包含有 `<a>` 標籤的字符串中，標籤的屬性值需要用引號包裹。

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

然而，如果你需要在其中使用外面的引號，這就成爲一個問題。 記住，一個字符串在開頭和結尾處有相同的引號。 要知道，字符串在開頭和結尾都有相同的引號，如果在中間使用了相同的引號，字符串會提前中止並拋出錯誤。

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

在這裏 `badStr` 會產生一個錯誤。

在上面的 <dfn>goodStr</dfn> 中，通過使用反斜槓 `\` 轉義字符可以安全地使用兩種引號。

**提示：** 不要混淆反斜槓 `\` 和斜槓 `/`。 它們不是一回事。

# --instructions--

把字符串更改爲開頭和結尾使用單引號的字符串，並且不包含轉義字符。

這樣字符串中的 `<a>` 標籤裏面任何地方都可以使用雙引號。 你需要將最外層引號更改爲單引號，以便刪除轉義字符。

# --hints--

應該刪除所有反斜槓（`\`）。

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

應該要有兩個單引號 `'` 和四個雙引號 `"`。

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
