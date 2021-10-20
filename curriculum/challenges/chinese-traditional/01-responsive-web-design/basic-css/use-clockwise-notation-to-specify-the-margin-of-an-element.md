---
id: bad87fee1348bd9afdf08726
title: 使用順時針標記指定元素的外邊距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

讓我們再試一次，不過這一次輪到 `margin` 了。

同樣，每個方向的外邊距值可以在一行裏面彙總聲明，而無需分別通過 `margin-top`、`margin-right`、`margin-bottom`、`margin-left` 分別聲明，比如：

```css
margin: 10px 20px 10px 20px;
```

這四個值按順時針排序：上、右、下、左，並且設置的效果等同於分別聲明每一個方向的外邊距值。

# --instructions--

按照順時針順序，將 class 爲 `blue-box` 的元素的上外邊距以及左外邊距設置爲 `40px`，右外邊距和下外邊距設置爲 `20px`。

# --hints--

class 爲 `blue-box` 的元素的上外邊距 `margin` 應爲 `40px`。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

class 爲 `blue-box` 的元素的右外邊距 `margin` 應爲 `20px`。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

class 爲 `blue-box` 的元素的下外邊距 `margin` 應爲 `20px`。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

class 爲 `blue-box` 的元素的左外邊距 `margin` 應爲 `40px`。

```js
assert($('.blue-box').css('margin-left') === '40px');
```

應沿順時針方向設置 `blue-box` 的外邊距。

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
