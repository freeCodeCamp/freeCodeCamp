---
id: bad88fee1348bd9aedf08825
title: 调整元素的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

我们暂时把要做的猫咪图片 App 放在一边，先来多了解一下如何给 HTML 添加样式。

你可能已经注意到了，所有的 HTML 元素都是以矩形为基础。

每个 HTML 元素所占有的矩形空间由这三个重要的属性来控制：内边距 `padding`、外边距 `margin` 、边框 `border`。

`padding` 用来控制着元素内容与 `border` 之间的空隙大小。

我们可以看到蓝色框和红色框是嵌套在黄色框里的。 注意红色框的 `padding` 比蓝色框的更多。

如果你增加蓝色框的 `padding` 值，其中的文本内容与边框的距离就也会变大。

# --instructions--

将蓝色的框的 `padding` 值设置成与红色框 `padding` 值一样。

# --hints--

`blue-box` 这一 class 应将元素的 `padding` 值设置为 `20px`。

```js
assert($('.blue-box').css('padding-top') === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
