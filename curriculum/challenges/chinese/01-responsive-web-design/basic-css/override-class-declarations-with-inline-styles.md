---
id: bad87fee1348bd9aedf06756
title: 内联样式的优先级高于 ID 选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

我们刚刚证明了，id 选择器无论在 `style` 标签的任何位置声明，都会覆盖 class 声明的样式。

其实还有其他方法可以覆盖 CSS 样式。 你还记得行内样式吗？

# --instructions--

使用行内样式尝试让 `h1` 的字体颜色变白。 记住，内联样式看起来是像这样：

```html
<h1 style="color: green;">
```

`h1` 元素应继续保留 `blue-text` 和 `pink-text` 这两个 class。

# --hints--

`h1` 元素应包含 `pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素应包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 的 id 属性值应为 `orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 元素应含有行内样式。

```js
assert(document.querySelector('h1[style]'));
```

`h1` 元素的字体颜色应该为白色。

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
