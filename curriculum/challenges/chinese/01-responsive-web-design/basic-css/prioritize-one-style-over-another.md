---
id: bad87fee1348bd9aedf08756
title: 样式中的优先级
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

有时候，HTML 元素的样式会跟其他样式发生冲突。

就像 `h1` 元素不能同时设置绿色和粉色两种颜色。

让我们尝试创建一个字体颜色为粉色的 class，并应用于其中一个元素中。 猜一猜，它会 *覆盖* `body` 元素的 `color: green;` CSS 规则吗？

# --instructions--

创建一个能将元素的字体颜色改为粉色的 class，并命名为 `pink-text`。

给 `h1` 元素添加 `pink-text` class。

# --hints--

`h1` 元素应含有 `pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`<style>` 标签应含有一个可以改变 `color` 的 `pink-text` class。

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

`h1` 元素的字体颜色应为粉色。

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
