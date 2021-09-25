---
id: 587d78a3367417b2b2512ad0
title: 使用 margin 属性将元素水平居中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

在应用设计中经常需要把一个块级元素水平居中显示。 一种常见的实现方式是把块级元素的 `margin` 值设置为 auto。

同样的，这个方法也对图片奏效。 图片默认是内联元素，但是可以通过设置其 `display` 属性为 `block`来把它变成块级元素。

# --instructions--

通过添加一个值为 `auto` 的 `margin` 属性，将 `div` 在页面居中。

# --hints--

`div` 应有一个 `margin`，设置为 `auto`。

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
