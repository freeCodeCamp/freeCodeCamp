---
id: bad88fee1348bd9aedf08825
title: 調整元素的內邊距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

我們暫時把要做的貓咪圖片 App 放在一邊，先來多瞭解一下如何給 HTML 添加樣式。

你可能已經注意到了，所有的 HTML 元素都是以矩形爲基礎。

每個 HTML 元素所佔有的矩形空間由這三個重要的屬性來控制：內邊距 `padding`、外邊距 `margin` 、邊框 `border`。

`padding` 用來控制着元素內容與 `border` 之間的空隙大小。

我們可以看到藍色框和紅色框是嵌套在黃色框裏的。 注意紅色框的 `padding` 比藍色框的更多。

如果你增加藍色框的 `padding` 值，其中的文本內容與邊框的距離就也會變大。

# --instructions--

將藍色的框的 `padding` 值設置成與紅色框 `padding` 值一樣。

# --hints--

`blue-box` 這一 class 應將元素的 `padding` 值設置爲 `20px`。

```js
assert($('.blue-box').css('padding-top') === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
