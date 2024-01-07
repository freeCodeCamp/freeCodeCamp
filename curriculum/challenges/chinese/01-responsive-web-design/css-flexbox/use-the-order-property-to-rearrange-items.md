---
id: 587d78ae367417b2b2512aff
title: 使用 order 属性重新排列子元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

`order` 属性告诉 CSS flex 容器里子元素的顺序。 默认情况下，项目排列顺序与源 HTML 文件中顺序相同。 这个属性接受数字作为参数，可以使用负数。

# --instructions--

请给 `#box-1` 和 `#box-2` 添加 CSS 属性 `order`， 并将 `#box-1` 的属性值设为 `2`，`#box-2` 的属性值设为 `1`。

# --hints--

`#box-1` 元素应具有 `order` 属性，其属性值应为 `2`。

```js
assert($('#box-1').css('order') == '2');
```

`#box-2` 元素应具有 `order` 属性，其属性值应为 `1`。

```js
assert($('#box-2').css('order') == '1');
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

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
