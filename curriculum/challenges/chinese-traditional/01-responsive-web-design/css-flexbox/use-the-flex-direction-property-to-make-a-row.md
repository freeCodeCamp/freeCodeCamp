---
id: 587d78ab367417b2b2512af2
title: 使用 flex-direction 屬性創建一個行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

給元素添加 `display: flex` 屬性可以讓它變成 flex 容器， 然後可以讓元素的項目排列成行或列。 只要給父元素添加 `flex-direction` 屬性，並把屬性值設置爲 row 或 column，即可橫向排列或縱向排列它的所有子元素。 創建一行將使子項水平對齊，創建一列將使子項垂直對齊。

`flex-direction` 的其他可選值還有 `row-reverse` 和 `column-reverse`。

**注意：** `flex-direction` 的默認值爲 `row`。

# --instructions--

請爲 `#box-container` 添加 CSS 屬性 `flex-direction`，將其值設爲 `row-reverse`。

# --hints--

`#box-container` 元素應有 `flex-direction` 屬性，其屬性值應爲 `row-reverse`。

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
