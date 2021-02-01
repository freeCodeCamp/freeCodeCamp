---
id: 587d78ab367417b2b2512af2
title: 使用 flex-direction 属性创建一个行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

给元素添加 `display: flex` 属性可以让它变成 flex 容器。只要给父元素添加 `flex-direction` 属性，并把属性值设置为 row 或 column，即可横向排列或纵向排列它的所有子元素。设为 row 可以让子元素横向排列，设为 column 可以让子元素纵向排列。

`flex-direction` 的其他可选值还有 `row-reverse` 和 `column-reverse`。

**注意：**`flex-direction` 的默认值为 row。

# --instructions--

请为 `#box-container` 添加 CSS 属性 `flex-direction`，将其值设为 `row-reverse`。

# --hints--

`#box-container` 应有 `flex-direction` 属性，其属性值应为 row-reverse。

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
