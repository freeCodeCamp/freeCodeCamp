---
id: 587d78ad367417b2b2512afb
title: 使用 flex-shrink 屬性定義 flex 子元素的收縮規則
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

目前爲止，挑戰裏提到的屬性都是應用於 flex 容器（flex 子元素的父元素）的。 除此之外，flex 子元素也有很多實用屬性。

首先介紹的是 `flex-shrink` 屬性。 使用之後，如果 flex 容器太小，則子元素會自動縮小。 當容器的寬度小於裏面所有子元素的寬度之和時，所有子元素都會自動壓縮。

子元素的 `flex-shrink` 接受數值作爲屬性值。 數值越大，則該元素與其他元素相比會被壓縮得更厲害。 比如，一個項目的 `flex-shrink` 屬性值爲 `1`，另一個項目的 `flex-shrink` 屬性值爲 `3`，那麼後者相比前者會受到 `3` 倍壓縮。

# --instructions--

請爲 `#box-1` 和 `#box-2` 添加 CSS 屬性 `flex-shrink`。 將 `#box-1` 的屬性值設爲 `1`，將 `#box-2` 的屬性值設爲 `2`。

# --hints--

`#box-1` 元素應具有 `flex-shrink` 屬性，其屬性值應爲 `1`。

```js
assert($('#box-1').css('flex-shrink') == '1');
```

`#box-2` 元素應具有 `flex-shrink` 屬性，其屬性值應爲 `2`。

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
