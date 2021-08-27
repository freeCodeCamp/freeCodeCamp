---
id: bad87fee1348bd9aedf08721
title: 使用十六进制编码混合颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

回顾一下，十六进制编码使用 6 个十六进制字符来表示颜色，两个字符为一组，分别代表红（R）、绿（G）、蓝（B）。

通过三原色（红、绿、蓝），我们可以创建 1600 万种不同颜色。

例如，橘色是纯红色混合一些绿色而成，其中没有蓝色。 在十六进制编码里面，它可以写成 `#FFA500`。

`0` 是十六进制里面最小的数字，表示没有颜色。

`F` 是十六进制里面最大的数字，有最高的亮度。

# --instructions--

把 `style` 标签里面的颜色值用正确的十六进制编码替换。

<table class='table table-striped'><tbody><tr><th>颜色</th><th>十六进制编码</th></tr><tr><td>道奇蓝</td><td><code>#1E90FF</code></td></tr><tr><td>绿色</td><td><code>#00FF00</code></td></tr><tr><td>橙色</td><td><code>#FFA500</code></td></tr><tr><td>红色</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

文本内容为 `I am red!` 的 `h1` 元素的 `color` 值应该为红色。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

应使用 `hex code` 替换 `red`。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

文本内容为 `I am green!` 的 `h1` 元素的 `color` 值应该为绿色。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

应使用 `hex code` 替换 `green` 关键词。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

文本内容为 `I am dodger blue!` 的 `h1` 元素的 `color` 值应该为道奇蓝色。

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

应使用 `hex code` 替换 `dodgerblue`。

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

文本内容为 `I am orange!` 的 `h1` 元素的 `color` 值应该为橘色。

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

应使用 `hex code` 替换 `orange`。

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
