---
id: bad82fee1348bd9aedf08721
title: 使用 RGB 混合颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

就像使用十六进制编码一样，你可以通过不同值的组合，来混合得到不同的 RGB 颜色。

# --instructions--

将 `style` 标签里面中的十六进制编码替换为正确的 RGB 值。

<table class='table table-striped'><tbody><tr><th>颜色</th><th>RGB</th></tr><tr><td>蓝色</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>红色</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>淡紫色</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>赭黄色</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

文本内容为 `I am red!` 的 `h1` 元素的 `color` 值应为红色。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

红色应使用 `rgb` 值来表示。

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

文本内容为 `I am orchid!` 的 `h1` 元素的 `color` 应为淡紫色。

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

淡紫色应使用 `rgb` 值来表示。

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

文本内容为 `I am blue!` 的 `h1` 元素的 `color` 应为蓝色。

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

蓝色应使用 `rgb` 值来表示。

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

文本内容为 `I am sienna!` 的 `h1` 元素的 `color` 应为赭黄色。

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

赭黄色应使用 `rgb` 值来表示。

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
