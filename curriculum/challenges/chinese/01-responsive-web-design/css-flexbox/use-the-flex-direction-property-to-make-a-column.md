---
id: 587d78ac367417b2b2512af4
title: 使用 flex-direction 属性创建一列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

在之前两个挑战中，我们使用了 `flex-direction` 属性，值为 `row`。 这个属性还能创建一个列，让子元素竖直排列在 flex 容器中。

# --instructions--

请给 `#box-container` 元素添加 CSS 属性 `flex-direction`，并将其属性值设置为 `column`。

# --hints--

`#box-container` 应有 `flex-direction` 属性，其属性值应为 `column`。

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    flex-direction: column;
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
