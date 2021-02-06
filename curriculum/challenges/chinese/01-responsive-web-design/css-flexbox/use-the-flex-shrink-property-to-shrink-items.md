---
id: 587d78ad367417b2b2512afb
title: 使用 flex-shrink 属性定义 flex 子元素的收缩规则
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

目前为止，挑战里提到的属性都是应用于 flex 容器（flex 子元素的父元素）的。 除此之外，flex 子元素也有很多实用属性。

首先介绍的是 `flex-shrink` 属性。 使用之后，如果 flex 容器太小，则子元素会自动缩小。 当容器的宽度小于里面所有子元素的宽度之和时，所有子元素都会自动压缩。

子元素的 `flex-shrink` 接受数值作为属性值。 数值越大，则该元素与其他元素相比会被压缩得更厉害。 比如，一个项目的 `flex-shrink` 属性值为 `1`，另一个项目的 `flex-shrink` 属性值为 `3`，那么后者相比前者会受到 `3` 倍压缩。

# --instructions--

请为 `#box-1` 和 `#box-2` 添加 CSS 属性 `flex-shrink`。 将 `#box-1` 的属性值设为 `1`，将 `#box-2` 的属性值设为 `2`。

# --hints--

`#box-1` 元素应具有 `flex-shrink` 属性，其属性值应为 `1`。

```js
assert($('#box-1').css('flex-shrink') == '1');
```

`#box-2` 元素应具有 `flex-shrink` 属性，其属性值应为 `2`。

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
