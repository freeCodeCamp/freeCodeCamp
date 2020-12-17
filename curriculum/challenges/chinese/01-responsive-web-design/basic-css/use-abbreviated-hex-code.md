---
id: bad87fee1348bd9aedf08719
title: 使用缩写的十六进制编码
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
---

# --description--

许多人对超过 1600 万种颜色的可能性感到不知所措，并且很难记住十六进制编码。幸运的是，它也提供缩写的方法。

例如，红色的`#FF0000`十六进制编码可以缩写成`#F00`。在这种缩写形式里，三个数字分别代表着红（R），绿（G），蓝（B）颜色。

这样，颜色的可能性减少到了大约 4000 种。且在浏览器里`#FF0000`和`#F00`完全是同一种颜色。

# --instructions--

接下来，使用缩写的十六进制编码给元素设置正确的颜色。

<table class='table table-striped'><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

文本内容为`I am red!`的`h1`元素的字体颜色应该为`red`。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

要使用缩写的`red`的`十六进制编码`，而不是`#FF0000`。

```js
assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi));
```

文本内容为`I am green!`的`h1`元素的字体颜色应该为`green`。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

要使用缩写的`green`的`十六进制编码`，而不是`#00FF00`的十六进制编码。

```js
assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi));
```

文本内容为`I am cyan!`的`h1`元素的字体颜色应该为`cyan`。

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

要使用缩写的`cyan`的`十六进制编码`，而不是`#00FFFF`的十六进制编码。

```js
assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi));
```

文本内容为`I am fuchsia!`的`h1`元素的字体颜色应该为`fuchsia`。

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

要使用缩写的`fuchsia`的`十六进制编码`，而不是`#FF00FF`的十六进制编码。

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi));
```

# --solutions--

