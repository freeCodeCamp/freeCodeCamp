---
id: 56533eb9ac21ba0edf2244b6
title: 转义字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

引号不是字符串中唯一可以被转义（<dfn>escaped</dfn>）的字符。 转义字符允许你使用可能无法在字符串中使用的字符。

<table class='table table-striped'><thead><tr><th>代码</th><th>输出</th></tr></thead><tbody><tr><td><code>\'</code></td><td>单引号</td></tr><tr><td><code>\"</code></td><td>双引号</td></tr><tr><td><code>\\</code></td><td>反斜杠</td></tr><tr><td><code>\n</code></td><td>换行符</td></tr><tr><td><code>\t</code></td><td>制表符</td></tr><tr><td><code>\r</code></td><td>回车</td></tr><tr><td><code>\b</code></td><td>退格</td></tr><tr><td><code>\f</code></td><td>换页符</td></tr></tbody></table>

*请注意，反斜线本身必须被转义，才能显示为反斜线。*

# --instructions--

使用转义字符把下面三行文本赋值给一个变量 `myStr`。

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

你需要使用转义字符正确地插入特殊字符。 你也需要确保间距与上面文本一致，并且单词或转义字符之间没有空格。

**注意：**`SecondLine` 前面的空白是制表符，而不是空格。

# --hints--

`myStr` 不能包含空格。

```js
assert(!/ /.test(myStr));
```

`myStr` 应包含字符串 `FirstLine`、`SecondLine` 和 `ThirdLine`（记得区分大小写）。

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` 后面应该是一个换行符 `\n`。

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` 应该包含一个制表符 `\t`，它在换行符后面。

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` 前面应该是反斜杠 `\`。

```js
assert(/\\SecondLine/.test(myStr));
```

`SecondLine` 和 `ThirdLine` 之间应该是换行符。

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` 应该只包含上面要求的字符。

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
