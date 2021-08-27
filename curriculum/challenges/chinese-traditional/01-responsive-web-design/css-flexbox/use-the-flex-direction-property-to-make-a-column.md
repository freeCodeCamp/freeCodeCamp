---
id: 587d78ac367417b2b2512af4
title: 使用 flex-direction 屬性創建一列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

在之前兩個挑戰中，我們使用了 `flex-direction` 屬性，值爲 `row`。 這個屬性還能創建一個列，讓子元素豎直排列在 flex 容器中。

# --instructions--

請給 `#box-container` 元素添加 CSS 屬性 `flex-direction`，並將其屬性值設置爲 `column`。

# --hints--

`#box-container` 應有 `flex-direction` 屬性，其屬性值應爲 `column`。

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
