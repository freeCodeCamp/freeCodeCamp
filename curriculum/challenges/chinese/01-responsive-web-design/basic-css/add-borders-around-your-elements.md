---
id: bad87fee1348bd9bedf08813
title: 在元素周围添加边框
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvnHZ'
forumTopicId: 16630
---

# --description--

CSS 边框具有`style`，`color`和`width`属性。

假如我们想要创建一个 5px 的红色实线边框包围一个 HTML 元素，我们可以这样做：

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

创建一个`thick-green-border` CSS class，该 class 应在 HTML 元素周围添加一个 10px 的绿色实线边框，将它应用在猫咪照片上。

记得在一个元素上可以同时应用多个`class`，通过使用空格来分隔。例子如下：

`<img class="class1 class2">`

# --hints--

`img`元素应该含有`smaller-image` class。

```js
assert($('img').hasClass('smaller-image'));
```

`img`元素应该含有`thick-green-border` class。

```js
assert($('img').hasClass('thick-green-border'));
```

设置图片边框为`10px`。

```js
assert(
  $('img').hasClass('thick-green-border') &&
    parseInt($('img').css('border-top-width'), 10) >= 8 &&
    parseInt($('img').css('border-top-width'), 10) <= 12
);
```

设置图片边框为`solid`实线。

```js
assert($('img').css('border-right-style') === 'solid');
```

`img`元素的边框颜色应该为绿色。

```js
assert($('img').css('border-left-color') === 'rgb(0, 128, 0)');
```

# --solutions--

