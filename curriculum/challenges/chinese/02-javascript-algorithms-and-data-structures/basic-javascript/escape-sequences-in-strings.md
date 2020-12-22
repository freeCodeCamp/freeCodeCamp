---
id: 56533eb9ac21ba0edf2244b6
title: 字符串中的转义序列
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
---

# --description--

引号不是字符串中唯一可以被<dfn>转义</dfn>的字符。使用转义字符有两个原因：首先是可以让你使用无法输入的字符，例如退格。其次是可以让你在一个字符串中表示多个引号，而不会出错。我们在之前的挑战中学到了这个。

<table class='table table-striped'><thead><tr><th>代码</th><th>输出</th></tr></thead><tbody><tr><td><code>\'</code></td><td>单引号</td></tr><tr><td><code>\"</code></td><td>双引号</td></tr><tr><td><code>\\</code></td><td>反斜杠</td></tr><tr><td><code>\n</code></td><td>换行符</td></tr><tr><td><code>\r</code></td><td>回车符</td></tr><tr><td><code>\t</code></td><td>制表符</td></tr><tr><td><code>\b</code></td><td>退格</td></tr><tr><td><code>\f</code></td><td>换页符</td></tr></tbody></table>

*请注意，必须对反斜杠本身进行转义才能显示为反斜杠。*

# --instructions--

使用转义字符将下面三行文本字符串赋给变量`myStr`。

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

你需要使用转义字符正确地插入特殊字符，确保间距与上面文本一致并且单词或转义字符之间没有空格。

像这样用转义字符写出来：

"FirstLine```换行符``制表符``反斜杠```SecondLine`换行符`ThirdLine"

# --hints--

`myStr`不能包含空格。

```js
assert(!/ /.test(myStr));
```

`myStr`应该包含字符串`FirstLine`, `SecondLine` and `ThirdLine` （记得区分大小写）。

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine`后面应该是一个新行`\n`。

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr`应该包含制表符`\t`并且制表符要在换行符后面。

```js
assert(/\n\t/.test(myStr));
```

`SecondLine`前面应该是反斜杠`\\`。

```js
assert(/\SecondLine/.test(myStr));
```

`SecondLine`和`ThirdLine`之间应该是换行符。

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` 应该只包含介绍里面展示的字符串。

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --solutions--

