---
id: 587d78af367417b2b2512b00
title: 使用 align-self 属性
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

flex 子项目的最后一个属性是 `align-self`。 这个属性允许你调整单个子元素自己的对齐方式，而不会影响到全部子元素。 因为 `float`、`clear` 和 `vertical-align` 等调整对齐方式的属性都不能应用于 flex 子元素，所以这个属性显得十分有用。

`align-self` 可设置的值与 `align-items` 的一样，并且它会覆盖 `align-items` 所设置的值。

# --instructions--

请为 `#box-1` 和 `#box-2` 添加 CSS 属性 `align-self`。 将 `#box-1` 的 `align-self` 属性值设为 center，将 `#box-2` 的设为 `flex-end`。

# --hints--

`#box-1` 元素应具有 `align-self` 属性，其属性值应为 `center`。

```js
assert($('#box-1').css('align-self') == 'center');
```

`#box-2` 元素应具有 `align-self` 属性，其属性值应为 `flex-end`。

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
