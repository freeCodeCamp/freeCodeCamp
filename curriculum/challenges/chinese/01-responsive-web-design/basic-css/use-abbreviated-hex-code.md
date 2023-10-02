---
id: bad87fee1348bd9aedf08719
title: 使用缩写的十六进制编码
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

许多人对超过 1600 万种颜色感到不知所措， 并且很难记住十六进制编码。 幸运的是，你可以使用缩写形式。

例如，红色的 `#FF0000` 十六进制编码可以缩写成 `#F00`。 在这种缩写形式里，三个数字分别代表着红（R）、绿（G）、蓝（B）三原色。

这样，颜色的数量减少到了大约 4000 种。 且在浏览器里 `#FF0000` 和 `#F00` 是完全相同的颜色。

# --instructions--

接下来，使用缩写的十六进制编码给元素设置正确的颜色。

<table class='table table-striped'><tbody><tr><th>颜色</th><th>十六进制编码缩写形式</th></tr><tr><td>蓝绿色</td><td><code>#0FF</code></td></tr><tr><td>绿色</td><td><code>#0F0</code></td></tr><tr><td>红色</td><td><code>#F00</code></td></tr><tr><td>紫红色</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

文本内容为 `I am red!` 的 `h1` 元素的字体颜色 `color` 应该为红色。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

应使用红色的缩写十六进制代码，而不是十六进制代码 `#FF0000`。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

文本内容为 `I am green!` 的 `h1` 元素的字体颜色 `color` 应该为绿色。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

应使用绿色的缩写十六进制代码，而不是十六进制代码 `#00FF00`。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

文本内容为 `I am cyan!` 的 `h1` 元素的字体颜色 `color` 应该为蓝绿色。

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

应使用青色的简写十六进制代码，而不是十六进制代码 `#00FFFF`。

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

文本内容为 `I am fuchsia!` 的 `h1` 元素的字体颜色 `color` 应该为紫红色。

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

应使用紫红色的简写十六进制代码，而不是十六进制代码 `#FF00FF`。

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
