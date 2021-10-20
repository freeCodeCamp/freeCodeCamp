---
id: bad87fee1348bd9aedf07756
title: Important 的优先级最高
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

耶！ 我们刚刚又证明了行内样式会覆盖 `style` 标签里面所有的 CSS 声明。

不过， 还有一种方式可以覆盖重新 CSS 样式。 这是所有方法里面最强大的一个。 在此之前，我们要考虑清楚，为什么我们要覆盖 CSS 样式。

很多时候，你会使用 CSS 库， CSS 库中的样式会意外覆盖你的 CSS 样式。 如果想保证你的 CSS 样式不受影响，你可以使用 `!important`。

让我们回到 `pink-text` 类声明。 `pink-text` 类的颜色样式已被之后的 class 声明、id 声明以及行内样式所覆盖。

# --instructions--

给粉红文本元素的颜色声明添加关键词 `!important`，以确保 `h1` 元素为粉红色。

如下所示：

```css
color: red !important;
```

# --hints--

`h1` 元素应包含 `pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素应包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 元素应有 `id`， 值为 `orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 元素应有一个内联样式 `color: white`。

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

`pink-text` class 应有 `!important` 关键词 ，以覆盖其他声明。

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

`h1` 元素应为粉红色。

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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
