---
id: 587d78ad367417b2b2512afa
title: 使用 flex-wrap 属性包裹一行或一列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox 具有将 flex 容器拆分为多行（或列）的功能。 默认情况下，flex 容器会调整项目大小，把它们都塞到一起。 对于行来说，所有项目都会在一条直线上。

不过，使用 `flex-wrap` 属性可以使项目换行展示。 这意味着多出来的子元素会被移到新的行或列。 换行发生的断点由子元素和容器的大小决定。

换行方向的可选值有这些：

<ul><li><code>nowrap</code>：默认值，不换行。</li><li><code>wrap</code>：如果排列以行为基准，就将行从上往下排列；如果排列以列为基准，就将列从左往右排列。</li><li><code>wrap-reverse</code>：如果排列以行为基准，就将行从下往上排列；如果排列以列为基准，就将列从右往左排列。</li></ul>

# --instructions--

现在的布局中，一行里面的元素太多了。 请为 `#box-container` 元素添加 CSS 属性 `flex-wrap`，把将其属性值设为 `wrap`。

# --hints--

`#box-container` 元素应具有 `flex-wrap` 属性，其属性值应为 `wrap`。

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
