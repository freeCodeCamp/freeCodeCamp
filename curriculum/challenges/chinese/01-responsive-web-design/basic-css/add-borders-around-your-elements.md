---
id: bad87fee1348bd9bedf08813
title: 在元素周围添加边框
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvnHZ'
forumTopicId: 16630
---

# --description--

CSS 边框具有 `style`、`color`、`width` 属性。

假如我们要将一个 HTML 元素边框设置为 5px 的红色实线边框，我们可以这样做：

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

# --instructions--

创建一个 `thick-green-border` 的 class，该 class 应在 HTML 元素周围添加一个 10px 的绿色实线边框，并将这个 class 应用在猫咪照片上。

记得在一个元素上可以同时应用多个 `class`，使用空格来分隔不同 class 即可，例如：

`<img class="class1 class2">`

# --hints--

`img` 元素应包含 `smaller-image` class。

```js
assert($('img').hasClass('smaller-image'));
```

`img` 元素应包含 `thick-green-border` class。

```js
assert($('img').hasClass('thick-green-border'));
```

图片边框宽度应设置为 `10px`。

```js
assert(
  $('img').hasClass('thick-green-border') &&
    parseInt($('img').css('border-top-width'), 10) >= 8 &&
    parseInt($('img').css('border-top-width'), 10) <= 12
);
```

图片边框样式应为 `solid` 实线。

```js
assert($('img').css('border-right-style') === 'solid');
```

`img` 元素的边框颜色应为绿色。

```js
assert($('img').css('border-left-color') === 'rgb(0, 128, 0)');
```

# --solutions--

