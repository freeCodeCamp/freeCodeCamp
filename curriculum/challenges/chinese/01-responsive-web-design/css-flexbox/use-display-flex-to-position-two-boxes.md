---
id: 587d78ab367417b2b2512af0
title: '使用 display: flex 定位两个盒子'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

这节我们会使用不同的挑战方式来学习如何使用 CSS 更灵活地布局元素。 首先我们会通过一个挑战来解释原理，然后通过操作一个简单的推文组件来应用弹性盒子（flexbox）。

只要在一个元素的 CSS 中添加 `display: flex;`，就可以使用其它 flex 属性来构建响应式页面了。

# --instructions--

请为 `#box-container` 添加 `display` 属性，并设置其属性值为 `flex`。

# --hints--

`#box-container` 应具有 `display`属性，其属性值应为 `flex`。

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
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
    height: 500px;
    display: flex;
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
