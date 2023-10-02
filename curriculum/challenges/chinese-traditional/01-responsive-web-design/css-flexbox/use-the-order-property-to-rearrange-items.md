---
id: 587d78ae367417b2b2512aff
title: 使用 order 屬性重新排列子元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

`order` 屬性告訴 CSS flex 容器裏子元素的順序。 默認情況下，項目排列順序與源 HTML 文件中順序相同。 這個屬性接受數字作爲參數，可以使用負數。

# --instructions--

請給 `#box-1` 和 `#box-2` 添加 CSS 屬性 `order`， 並將 `#box-1` 的屬性值設爲 `2`，`#box-2` 的屬性值設爲 `1`。

# --hints--

`#box-1` 元素應具有 `order` 屬性，其屬性值應爲 `2`。

```js
assert($('#box-1').css('order') == '2');
```

`#box-2` 元素應具有 `order` 屬性，其屬性值應爲 `1`。

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
