---
id: bad87fee1348bd9aedf08721
title: 使用十六进制编码混合颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
---

# --description--

回顾一下，`hex`使用 6 个十六进制编码来表示颜色，2 个一组，分别代表着红（R），绿（G），蓝（B）。

通过三原色，我们可以创建 1600 万种不同颜色！

例如，橘色是纯红色混合一些绿色而成的，没有蓝色的参与。在十六进制编码里面，它被转译为`#FFA500`。

`0`是十六进制里面最小的数字，表示着没有颜色。

`F`是十六进制里面最大的数字，表示着最高的亮度。

# --instructions--

把`style`标签里面的颜色值用正确的十六进制编码替换。

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

文本内容为`I am red!`的`h1`元素的字体颜色应该为`red`。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

使用`十六进制编码`替换`red`关键词。

```js
assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi));
```

文本内容为`I am green!`的`h1`元素的字体颜色应该为`green`。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

使用`十六进制编码`替换`green`关键词。

```js
assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi));
```

文本内容为`I am dodger blue!`的`h1`元素的字体颜色应该为`dodger blue`。

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

使用`十六进制编码`替换`dodgerblue`关键词。

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi));
```

文本内容为`I am orange!`的`h1`元素的字体颜色应该为`orange`。

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

使用`十六进制编码`替换`orange`关键词。

```js
assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi));
```

# --solutions--

