---
id: 56533eb9ac21ba0edf2244b5
title: 轉義字符串中的引號
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

定義一個字符串必須要用單引號或雙引號來包裹它。 那麼當你的字符串裏面包含引號 `"` 或者 `'` 時該怎麼辦呢?

在 JavaScript 中，可以通過在引號前面使用<dfn>反斜槓</dfn>（`\`）來<dfn>轉義</dfn>引號。

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

有了轉義符號，JavaScript 就知道這個單引號或雙引號並不是字符串的結尾，而是字符串內的字符。 所以，上面的字符串打印到控制檯的結果爲：

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

使用<dfn>反斜槓</dfn>給 `myStr` 變量賦值一個字符串，這樣如果你要打印它到控制檯，將會看到：

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

你的代碼中應該包含兩個雙引號（`"`）以及四個轉義的雙引號（`\"`）。

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

變量 `myStr` 應該包含字符串 `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
