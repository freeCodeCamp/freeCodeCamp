---
id: 587d78ab367417b2b2512af0
title: '使用 display: flex 定位兩個盒子'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

這節我們會使用不同的挑戰方式來學習如何使用 CSS 更靈活地佈局元素。 首先我們會通過一個挑戰來解釋原理，然後通過操作一個簡單的推文組件來應用彈性盒子（flexbox）。

只要在一個元素的 CSS 中添加 `display: flex;`，就可以使用其它 flex 屬性來構建響應式頁面了。

# --instructions--

請爲 `#box-container` 添加 `display` 屬性，並設置其屬性值爲 `flex`。

# --hints--

`#box-container` 應具有 `display`屬性，其屬性值應爲 `flex`。

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
