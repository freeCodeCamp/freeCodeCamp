---
id: bad87fee1348bd9aedf08826
title: 使用順時針標記指定元素的內邊距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

如果不想每次都要分別聲明 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 屬性，可以把它們彙總在一行裏面一併聲明，像是這樣：

```css
padding: 10px 20px 10px 20px;
```

這四個值按順時針排序：上、右、下、左，並且設置的效果等同於分別聲明每一個方向的內邊距。

# --instructions--

按照順時針順序，把 `.blue-box` class 的上內邊距以及左內邊距 `padding` 設置爲 `40px`，右內邊距和下內邊距則設置爲`20px`。

# --hints--

class 爲 `blue-box` 的元素的上內邊距 `padding` 應爲 `40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

class 爲 `blue-box` 的元素的右內邊距 `padding` 應爲 `20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

class 爲 `blue-box` 的元素的下內邊距 `padding` 應爲 `20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

class 爲 `blue-box` 的元素的左內邊距 `padding` 應爲 `40px`。

```js
assert($('.blue-box').css('padding-left') === '40px');
```

應該按照順時針排序，彙總聲明的方式來設置 `blue-box` 的內邊距。

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
